import { Test, TestingModule } from '@nestjs/testing';
import { HedgehogsController } from './hedgehogs.controller';
import { HedgehogsService } from './hedgehogs.service';

describe('HedgehogsController', () => {
  let controller: HedgehogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HedgehogsController],
      providers: [HedgehogsService],
    }).compile();

    controller = module.get<HedgehogsController>(HedgehogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
