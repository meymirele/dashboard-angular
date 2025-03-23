import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreCardsComponent } from './more-cards.component';

describe('MoreCardsComponent', () => {
  let component: MoreCardsComponent;
  let fixture: ComponentFixture<MoreCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
