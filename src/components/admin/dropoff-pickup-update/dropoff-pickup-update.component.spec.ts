import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropoffPickupUpdateComponent } from './dropoff-pickup-update.component';

describe('DropoffPickupUpdateComponent', () => {
  let component: DropoffPickupUpdateComponent;
  let fixture: ComponentFixture<DropoffPickupUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropoffPickupUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropoffPickupUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
