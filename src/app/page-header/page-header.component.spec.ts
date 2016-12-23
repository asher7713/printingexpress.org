/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageHeaderComponent } from './page-header.component';

describe('PageHeaderComponent', () => {
    let component: PageHeaderComponent;
    let fixture: ComponentFixture<PageHeaderComponent>;
    let title = 'The Title';

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PageHeaderComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageHeaderComponent);
        component = fixture.componentInstance;

        component.title = title;
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
        let el = fixture.nativeElement.querySelector('h1');
        expect(el.textContent).toBe(title);
    });

    it('should display and update the value of "title" in the title tag', () => {
        let titleTagTitle = component.titlePrefix + title;
        expect(document.title).toBe(titleTagTitle);
    });
});
