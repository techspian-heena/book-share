import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  describe('Test: HomeComponent', () => {
		it ('should be initialized', () => {
		//	expect(fixture).toBeTruthy();
	//		fixture.detectChanges();
			const compiled = fixture.debugElement.nativeElement;
			const button = compiled.querySelector('button');
			expect(button.textContent).toContain('Login');
		});
	});
});
