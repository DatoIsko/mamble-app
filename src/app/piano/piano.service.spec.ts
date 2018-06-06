import { TestBed, inject } from '@angular/core/testing';

import { PianoService } from './piano.service';

describe('PianoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PianoService]
    });
  });

  it('should be created', inject([PianoService], (service: PianoService) => {
    expect(service).toBeTruthy();
  }));
});
