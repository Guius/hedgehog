import { Test, TestingModule } from '@nestjs/testing';
import { HedgehogsService } from './hedgehogs.service';

describe('HedgehogsService', () => {
  let service: HedgehogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HedgehogsService],
    }).compile();

    service = module.get<HedgehogsService>(HedgehogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
