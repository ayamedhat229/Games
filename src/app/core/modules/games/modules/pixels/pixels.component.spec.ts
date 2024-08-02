import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixelsComponent } from './pixels.component';

describe('PixelsComponent', () => {
  let component: PixelsComponent;
  let fixture: ComponentFixture<PixelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PixelsComponent]
    });
    fixture = TestBed.createComponent(PixelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
