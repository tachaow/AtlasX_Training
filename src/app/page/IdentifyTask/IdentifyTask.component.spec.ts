/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IdentifyTaskComponent } from './IdentifyTask.component';

describe('IdentifyTaskComponent', () => {
  let component: IdentifyTaskComponent;
  let fixture: ComponentFixture<IdentifyTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentifyTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifyTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
