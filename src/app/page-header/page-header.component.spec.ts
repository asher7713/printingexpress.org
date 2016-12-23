/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageHeaderComponent } from './page-header.component';

describe('PageHeaderComponent', () => {
    let component: PageHeaderComponent;
    let fixture: ComponentFixture<PageHeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PageHeaderComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have .not-full-screen, and not .full-screen by default', () => {
        let de = fixture.debugElement.query(By.css('.logo-container'));
        expect(de.classes['not-full-screen']).toBe(true);
        expect(de.classes['full-screen']).toBe(false);
    });

    it('should have .full-screen, and not .not-full-screen if fullScreen = true', () => {
        component.fullScreen = true;
        fixture.detectChanges();
        let de = fixture.debugElement.query(By.css('.logo-container'));
        expect(de.classes['full-screen']).toBe(true);
        expect(de.classes['not-full-screen']).toBe(false);
    });

    it('should display and update the value of "title" in an h1', () => {
        component.title = 'The Title';
        fixture.detectChanges();
        let el = fixture.nativeElement.querySelector('h1');
        expect(el.textContent).toBe('The Title');

        component.title = 'The New Title';
        fixture.detectChanges();
        expect(el.textContent).toBe('The New Title');
    });
});
