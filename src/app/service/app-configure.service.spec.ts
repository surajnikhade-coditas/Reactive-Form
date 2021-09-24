import { TestBed } from '@angular/core/testing';

import { AppConfigureService } from './app-configure.service';

describe('AppConfigureService', () => {
  let service: AppConfigureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppConfigureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
