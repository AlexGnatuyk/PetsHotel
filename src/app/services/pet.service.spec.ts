import { TestBed, inject } from '@angular/core/testing';

import { PetsService } from './pet.service';

describe('PetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PetsService]
    });
  });

  it('should be created', inject([PetsService], (service: PetsService) => {
    expect(service).toBeTruthy();
  }));
});
