import { VasService } from './vas.service';
import { HttpProviderService } from '../../../core/services/http-service/http-provider.service';
import { of } from 'rxjs';

describe(VasService.name, () => {
  let service: VasService;
  let httpProviderSpy: jasmine.SpyObj<HttpProviderService>;

  beforeEach(() => {
    // TestBed.configureTestingModule({ imports: [HttpClientTestingModule], providers: [HealthContentService] });
    httpProviderSpy = jasmine.createSpyObj('HttpProviderService', ['get']);
    // service = TestBed.inject(HealthContentService);
    service = new VasService(httpProviderSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get vas list successfully', () => {
    let mockResponse = {} as any;
    httpProviderSpy.get.and.returnValue(of(mockResponse));
    service.getVasList().subscribe({
      next: (response) => {
        expect(response).withContext('expected vas respose').toEqual(mockResponse);
      }
    });
  });

  // it('should get health content list failed', () => {
  //   httpProviderSpy.get.and.throwError('');
  //   service.getHealhContentList().subscribe({
  //     error: (error) => {
  //       expect(error).toBeDefined();
  //     }
  //   });
  // });
});

class MockHttpProviderService {}
