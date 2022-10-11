import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDemoComponent } from './data-demo.component';

describe('DataDemoComponent', () => {
  let component: DataDemoComponent;
  let fixture: ComponentFixture<DataDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
