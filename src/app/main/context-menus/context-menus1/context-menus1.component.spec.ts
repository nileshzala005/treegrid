import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextMenus1Component } from './context-menus1.component';

describe('ContextMenus1Component', () => {
  let component: ContextMenus1Component;
  let fixture: ComponentFixture<ContextMenus1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContextMenus1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextMenus1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
