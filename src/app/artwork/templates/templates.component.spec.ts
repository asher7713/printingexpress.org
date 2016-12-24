/* tslint:disable:no-unused-variable */
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {} from 'jasmine';

import { TemplatesComponent } from './templates.component';

describe('TemplatesComponent', () => {
    let component: TemplatesComponent;
    let fixture: ComponentFixture<TemplatesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TemplatesComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TemplatesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a page-header with title Template Library', () => {
        let de = fixture.debugElement.query(By.css('page-header'));
        expect(de).toBeTruthy();
        const title = de.properties['title'];
        expect(title).toBe('Template Library');
    });
});
