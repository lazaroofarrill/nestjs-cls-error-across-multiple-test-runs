import { ClsModule, ClsService } from 'nestjs-cls';
import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { AppController } from './app.controller';

export function scaffoldUnitTests() {
  let clsService: ClsService;
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [ClsModule.forRoot({global: true})],
      providers: [AppService],
      controllers: [AppController],
    }).compile();

    clsService = module.get<ClsService>(ClsService);
    clsService.enter();
  });

  beforeEach(() => {
  });

  function useTestUtils() {
    return { module, clsService };
  }

  return { useTestUtils };
}
