/* tslint:disable:no-unused-variable */
import { ValueProvider } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import {} from 'jasmine';

import { TopBarComponent } from './top-bar.component';

const WINDOW_PROVIDER: ValueProvider = {
    provide: 'Window',
    useValue: window
};

describe('TopBarComponent', () => {
    let component: TopBarComponent;
    let fixture: ComponentFixture<TopBarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TopBarComponent],
            imports: [RouterTestingModule],
            providers: [
                WINDOW_PROVIDER
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TopBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
