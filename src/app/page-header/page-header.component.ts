import {
    Component,
    OnInit,
    Input,
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/core';

@Component({
    selector: 'page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss'],
    animations: [
        trigger('fadeIn', [
            state('void', style({ opacity: 0, 'font-size': '5px' })),
            state('out', style({ opacity: 0, 'font-size': '5px' })),
            transition('* => in', [
                animate(350)
            ])
        ])
    ]
})
export class PageHeaderComponent implements OnInit {
    @Input() title: string;
    @Input() fullScreen = false;
    logoState = 'out';
    headerState = 'out';

    ngOnInit() {
        this.logoState = 'in';
        window.setTimeout(() => this.headerState = 'in', 150);
    }
}
