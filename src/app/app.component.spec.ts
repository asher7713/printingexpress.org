/* tslint:disable:no-unused-variable */

/**
 * Run some simple tests to make sure it actually builds the app
 * and also to make sure nothing has destroyed the layout.
 * for example, if someone accidentally deleted the router-outlet,
 * that would be a problem.
 * Note that we are using nativeElement instead of debugElement
 * for everything because we don't really need any features
 * beyond being able to query the DOM.
 **/

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {} from 'jasmine';

let fixture: ComponentFixture<AppComponent>;
let comp: AppComponent;

describe('App: Printing Express', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [
          CUSTOM_ELEMENTS_SCHEMA // We need this for the md-toolbar directive
      ]
    });
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
  });

  it('should create the app', async(() => {
    expect(comp).toBeTruthy();
  }));

  // There should be a toolbar running across the top
  it('better have a toolbar at the top', async(() => {
    expect(fixture.nativeElement.querySelector('#top')).toBeTruthy();
  }));

  // Also a bar running across the bottom
  it('better have a footer at the bottom', async(() => {
    expect(fixture.nativeElement.querySelector('#bottom')).toBeTruthy();
  }));

  it('better put the <router-outlet> under the <main>', async(() => {
    expect(fixture.nativeElement.querySelector('main router-outlet')).toBeTruthy();
  }));
});
