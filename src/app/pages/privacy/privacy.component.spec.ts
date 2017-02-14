/* tslint:disable:no-unused-variable */
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrivacyComponent } from './privacy.component';

describe('PrivacyComponent', () => {
    let component: PrivacyComponent;
    let fixture: ComponentFixture<PrivacyComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PrivacyComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PrivacyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a page header that says Privacy Policy', () => {
        const de = fixture.debugElement.query(By.css('prexp-header'));
        expect(de).toBeTruthy();
        const title = de.properties['title'];
        expect(title).toBe('Privacy Policy');
    });
});
