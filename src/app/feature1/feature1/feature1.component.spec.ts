import { CoreModule } from './../../core/core.module';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1Component } from './feature1.component';

describe('Feature1Component', () => {
  let component: Feature1Component;
  let fixture: ComponentFixture<Feature1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, HttpModule, CoreModule.forRoot()],
      declarations: [Feature1Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
