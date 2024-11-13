import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelezionePersonaggioComponent } from './selezione-personaggio.component';

describe('SelezionePersonaggioComponent', () => {
  let component: SelezionePersonaggioComponent;
  let fixture: ComponentFixture<SelezionePersonaggioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelezionePersonaggioComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelezionePersonaggioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
