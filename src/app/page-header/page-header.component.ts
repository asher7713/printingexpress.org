import {
    Component,
    OnInit,
    Input,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'prexp-header',
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
    titlePrefix = 'Printing Express - ';
    @Input() title: string;
    @Input() fullScreen = false;
    logoState = 'out';
    headerState = 'out';

    public constructor(private titleService: Title) {}

    ngOnInit() {
        this.logoState = 'in';
        setTimeout(() => this.headerState = 'in', 150);

        const title = this.titlePrefix + this.title;
        this.titleService.setTitle(title);
    }
}
