import { HealthContentService } from './health-content.service';
import { HttpProviderService } from '../../../core/services/http-service/http-provider.service';
import { of } from 'rxjs';
import { HealthContentsResponse } from '../models/health-contents-response.model';

describe(HealthContentService.name, () => {
  let service: HealthContentService;
  let httpProviderSpy: jasmine.SpyObj<HttpProviderService>;

  beforeEach(() => {
    // TestBed.configureTestingModule({ imports: [HttpClientTestingModule], providers: [HealthContentService] });
    httpProviderSpy = jasmine.createSpyObj('HttpProviderService', ['get']);
    // service = TestBed.inject(HealthContentService);
    service = new HealthContentService(httpProviderSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get health content list successfully', () => {
    let mockResponse = {
      medicalCards: [
        {
          id: '60f0099fde31820010bf4966',
          title: 'What you can do to prevent cancer',
          timeToRead: '15',
          country: 'VN',
          imageUrl: 'https://uat.servicing.move.manulife.com/blob/public/icons/globe.png',
          created: new Date('2022-08-11T11:23:25.468Z'),
          modified: new Date('2022-08-11T11:23:25.468Z')
        }
      ]
    };
    httpProviderSpy.get.and.returnValue(of(mockResponse));
    service.getHealhContentList().subscribe({
      next: (response) => {
        expect(response).withContext('expected health content respose').toEqual(mockResponse);
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
