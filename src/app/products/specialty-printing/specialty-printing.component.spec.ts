/* tslint:disable:no-unused-variable */
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {} from 'jasmine';

import { SpecialtyPrintingComponent } from './specialty-printing.component';

describe('SpecialtyPrintingComponent', () => {
    let component: SpecialtyPrintingComponent;
    let fixture: ComponentFixture<SpecialtyPrintingComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SpecialtyPrintingComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SpecialtyPrintingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a page-header with title Specialty Printing', () => {
        const de = fixture.debugElement.query(By.css('page-header'));
        expect(de).toBeTruthy();
        const title = de.properties['title'];
        expect(title).toBe('Specialty Printing');
    });
});
