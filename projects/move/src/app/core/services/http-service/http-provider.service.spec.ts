import { HttpProviderService } from './http-provider.service';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

describe(HttpProviderService.name, () => {
  let service: HttpProviderService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    // TestBed.configureTestingModule({ imports: [HttpClientTestingModule], providers: [HealthContentService] });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
    // service = TestBed.inject(HealthContentService);
    service = new HttpProviderService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get health content list successfully', () => {
    let mockResponse = {
      medicalCards: []
    };
    httpClientSpy.get.and.returnValue(of(mockResponse));
    service.get('https://locallhost:3000/healthContents').subscribe({
      next: (response) => {
        expect(response).toEqual(mockResponse);
      }
    });
  });

  it('should post health content list successfully', () => {
    let bodyRequest = {
      medicalCards: []
    };
    let mockResponse = {};
    httpClientSpy.post.and.returnValue(of(mockResponse));
    service.post('https://locallhost:3000/healthContents', bodyRequest).subscribe({
      next: (response) => {
        expect(response).toEqual(mockResponse);
      }
    });
  });

  it('should put health content list successfully', () => {
    let bodyRequest = {
      medicalCards: []
    };
    let mockResponse = {};
    httpClientSpy.put.and.returnValue(of(mockResponse));
    service.put('https://locallhost:3000/healthContents', bodyRequest).subscribe({
      next: (response) => {
        expect(response).toEqual(mockResponse);
      }
    });
  });

  it('should delete health content list successfully', () => {
    let bodyRequest = {
      medicalCards: []
    };
    let mockResponse = {};
    httpClientSpy.delete.and.returnValue(of(mockResponse));
    service.delete('https://locallhost:3000/healthContents').subscribe({
      next: (response) => {
        expect(response).toEqual(mockResponse);
      }
    });
  });
});
