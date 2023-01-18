import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSeriesFormComponent } from './tv-series-form.component';

describe('TvSeriesFormComponent', () => {
  let component: TvSeriesFormComponent;
  let fixture: ComponentFixture<TvSeriesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvSeriesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvSeriesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
