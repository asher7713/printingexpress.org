/* tslint:disable:no-unused-variable */
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {} from 'jasmine';

import { RequirementsComponent } from './requirements.component';

describe('RequirementsComponent', () => {
    let component: RequirementsComponent;
    let fixture: ComponentFixture<RequirementsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RequirementsComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RequirementsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a page-header with title Artwork Requirements', () => {
        const de = fixture.debugElement.query(By.css('page-header'));
        expect(de).toBeTruthy();
        const title = de.properties['title'];
        expect(title).toBe('Artwork Requirements');
    });
});
