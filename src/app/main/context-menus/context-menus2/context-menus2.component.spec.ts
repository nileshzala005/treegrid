import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextMenus2Component } from './context-menus2.component';

describe('ContextMenus2Component', () => {
  let component: ContextMenus2Component;
  let fixture: ComponentFixture<ContextMenus2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContextMenus2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextMenus2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
