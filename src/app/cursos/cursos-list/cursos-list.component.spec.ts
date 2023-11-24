/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CursosListComponent } from './cursos-list.component';

describe('CursosListComponent', () => {
  let component: CursosListComponent;
  let fixture: ComponentFixture<CursosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
