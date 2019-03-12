import { TestBed } from '@angular/core/testing';

import { TodolistServicesService } from './todolist-services.service';

describe('TodolistServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodolistServicesService = TestBed.get(TodolistServicesService);
    expect(service).toBeTruthy();
  });
});
