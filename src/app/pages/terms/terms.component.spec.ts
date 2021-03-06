/* tslint:disable:no-unused-variable */
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TermsComponent } from './terms.component';

describe('TermsComponent', () => {
    let component: TermsComponent;
    let fixture: ComponentFixture<TermsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TermsComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TermsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a page header that says Terms of Use', () => {
        const de = fixture.debugElement.query(By.css('prexp-header'));
        expect(de).toBeTruthy();
        const title = de.properties['title'];
        expect(title).toBe('Terms of Use');
    });
});
