/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { PageHeaderComponent } from './page-header.component';

describe('PageHeaderComponent', () => {
    const title = 'The Title';
    let component: PageHeaderComponent;
    let fixture: ComponentFixture<PageHeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PageHeaderComponent],
            imports: [NoopAnimationsModule]
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
        const de = fixture.debugElement.query(By.css('.logo-container'));
        expect(de.classes['not-full-screen']).toBe(true);
        expect(de.classes['full-screen']).toBe(false);
    });

    it('should have .full-screen, and not .not-full-screen if fullScreen = true', () => {
        component.fullScreen = true;
        fixture.detectChanges();
        const de = fixture.debugElement.query(By.css('.logo-container'));
        expect(de.classes['full-screen']).toBe(true);
        expect(de.classes['not-full-screen']).toBe(false);
    });

    it('should display and update the value of "title" in an h1', () => {
        const el = fixture.nativeElement.querySelector('h1');
        expect(el.textContent).toBe(title);
    });

    it('should display and update the value of "title" in the title tag', () => {
        const titleTagTitle = component.titlePrefix + title;
        expect(document.title).toBe(titleTagTitle);
    });
});
