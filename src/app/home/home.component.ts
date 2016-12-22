import { Component, AfterViewInit, trigger, state, style, animate, transition } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [
        trigger('fadeIn', [
            state('void', style({ opacity: 0, 'font-size': '5px' })),
            state('out', style({ opacity: 0, 'font-size': '5px' })),
            transition('out => in', [
                animate(500)
            ]),
            transition('void => in', [
                animate(500)
            ])
        ])
    ]
})
export class HomeComponent implements AfterViewInit {
    logoState = 'out';
    headerState = 'out';
    ngAfterViewInit() {
        this.logoState = 'in';
        window.setTimeout(() => this.headerState = 'in', 350);
    }
}
