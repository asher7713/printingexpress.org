/* tslint:disable:no-unused-variable */
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {} from 'jasmine';

import { GuideComponent } from './guide.component';

describe('GuideComponent', () => {
    let component: GuideComponent;
    let fixture: ComponentFixture<GuideComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GuideComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GuideComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a prexp-header with title Artwork Guide', () => {
        const de = fixture.debugElement.query(By.css('prexp-header'));
        expect(de).toBeTruthy();
        const title = de.properties['title'];
        expect(title).toBe('Artwork Guide');
    });
});
