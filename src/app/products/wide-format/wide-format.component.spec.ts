/* tslint:disable:no-unused-variable */
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {} from 'jasmine';

import { WideFormatComponent } from './wide-format.component';

describe('WideFormatComponent', () => {
    let component: WideFormatComponent;
    let fixture: ComponentFixture<WideFormatComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WideFormatComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WideFormatComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a page-header with title Signs and Banners', () => {
        let de = fixture.debugElement.query(By.css('page-header'));
        expect(de).toBeTruthy();
        const title = de.properties['title'];
        expect(title).toBe('Signs and Banners');
    });
});
