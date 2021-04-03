import { TestBed } from '@angular/core/testing';
import { RamenService } from './ramen.service';



describe('RamenService', () => {
  let service: RamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
