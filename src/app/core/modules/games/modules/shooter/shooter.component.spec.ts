import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShooterComponent } from './shooter.component';

describe('ShooterComponent', () => {
  let component: ShooterComponent;
  let fixture: ComponentFixture<ShooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShooterComponent]
    });
    fixture = TestBed.createComponent(ShooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
