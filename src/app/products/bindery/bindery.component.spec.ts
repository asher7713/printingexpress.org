/* tslint:disable:no-unused-variable */
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {} from 'jasmine';

import { BinderyComponent } from './bindery.component';

describe('BinderyComponent', () => {
    let component: BinderyComponent;
    let fixture: ComponentFixture<BinderyComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BinderyComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BinderyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a prexp-header with title Bindery and Finishing', () => {
        const de = fixture.debugElement.query(By.css('prexp-header'));
        expect(de).toBeTruthy();
        const title = de.properties['title'];
        expect(title).toBe('Bindery and Finishing');
    });
});
