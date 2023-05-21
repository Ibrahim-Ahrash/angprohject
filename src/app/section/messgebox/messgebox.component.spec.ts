import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessgeboxComponent } from './messgebox.component';

describe('MessgeboxComponent', () => {
  let component: MessgeboxComponent;
  let fixture: ComponentFixture<MessgeboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessgeboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessgeboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
