import {
    Component,
    OnInit,
    Inject,
    HostListener,
    ElementRef,
    ViewChild,
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

const animationLength = 300;

@Component({
    selector: 'prexp-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss'],
    animations: [
        trigger('link', [
            state('top', style({ padding: '1rem' })),
            state('notTop', style({ padding: '0 1rem' })),
            transition('top <=> notTop', [
                animate(animationLength)
            ])
        ]),
        trigger('title', [
            state('top', style({ margin: '1rem' })),
            state('notTop', style({ margin: '0 1rem' })),
            transition('top <=> notTop', [
                animate(animationLength)
            ])
        ]),
        trigger('nav', [
            state('visible', style({ 'max-height': '1000px', display: 'flex' })),
            state('invisible', style({ 'max-height': '0', display: 'none' })),
            transition('visible <=> invisible', [
                animate(animationLength)
            ])
        ])
    ]
})
export class TopBarComponent implements OnInit {
    @ViewChild('top') private top: ElementRef;
    @ViewChild('bumper') private bumper: ElementRef;
    private navVisibleBreakpoints = ['large', 'xlarge', 'xxlarge'];
    private lastBreakpoint: string;
    titlePosition = 'notTop';
    linkPosition = 'notTop';
    navIs = 'invisible';

    pages = [
        {name: 'Wide-Format', path: 'wide-format'},
        {name: 'Specialty Printing', path: 'specialty-printing'},
        {name: 'Photographs', path: 'photographs'},
        {name: 'Bindery', path: 'bindery'}
    ];

    constructor(
        @Inject(DOCUMENT) private document: Document,
        @Inject('Window') private window: any) { }

    ngOnInit() {
        this.lastBreakpoint = this.getSize();
        this.resizeBumper();
    }

    @HostListener('window:scroll', []) onWindowScroll() {
        this.resizeBumper();
    }

    @HostListener('window:resize', []) onResize() {
        const size = this.getSize();
        if (this.navVisibleBreakpoints.indexOf(size) === -1 && this.navVisibleBreakpoints.indexOf(this.lastBreakpoint) !== -1) {
            this.navIs = 'invisible';
        }
        this.resizeBumper();
        this.lastBreakpoint = size;
    }

    private resizeBumper() {
        const size = this.getSize();
        const top = this.document.body.scrollTop;

        if (this.navVisibleBreakpoints.indexOf(size) !== -1) {
            this.navIs = 'visible';
            if (top > 0) {
                this.linkPosition = 'notTop';
            } else {
                this.linkPosition = 'top';
            }
        }

        if (top > 0) {
            this.titlePosition = 'notTop';
        } else {
            this.titlePosition = 'top';
        }

        window.setTimeout(() =>
            this.bumper.nativeElement.style.height = this.top.nativeElement.clientHeight + 'px'
        , animationLength);
    }

    toggleNavVisibility() {
        this.navIs = (this.navIs === 'visible') ? 'invisible' : 'visible';
        this.resizeBumper();
    }

    trimChars = s => s.length >= 2 && (s[0] === s[s.length - 1]) ? s.slice(1, -1).trim() : s;

    private getSize(): string {
        return this.trimChars(this.window.getComputedStyle(
            this.document.querySelector('body'), ':before'
        ).getPropertyValue('content'));
    }

}
