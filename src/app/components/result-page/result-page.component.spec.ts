import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultPageComponent } from './result-page.component';

describe('ResultPageComponent', () => {
  let component: ResultPageComponent;
  let fixture: ComponentFixture<ResultPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Test: ResultComponent', () => {
		it ('should be initialized', () => {
			expect(fixture).toBeTruthy();
			fixture.detectChanges();
			const compiled = fixture.debugElement.nativeElement;
			const h3 = compiled.querySelector('h3');
			expect(h3.textContent).toContain('Book Details');
		});
	});
});
