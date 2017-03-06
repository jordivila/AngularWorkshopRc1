import { AppStoreService } from './../../app-store.service';
import { UsersService } from './../../core/services/users/users.service';
import { LoadingModule } from './../../core/components/loading/loading.module';
import { HttpModule } from '@angular/http';
import { FormValidationsModule } from './../../core/components/form-validations/form-validations.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { Feature2Component } from './feature2.component';

describe('Feature2Component', () => {
  let component: Feature2Component;
  let fixture: ComponentFixture<Feature2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        FormValidationsModule,
        HttpModule,
        LoadingModule
      ],
      declarations: [Feature2Component],
      providers: [UsersService, AppStoreService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
