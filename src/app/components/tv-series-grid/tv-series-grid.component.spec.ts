import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSeriesGridComponent } from './tv-series-grid.component';

describe('TvSeriesGridComponent', () => {
  let component: TvSeriesGridComponent;
  let fixture: ComponentFixture<TvSeriesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvSeriesGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvSeriesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
