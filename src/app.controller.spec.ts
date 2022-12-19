import { AppController } from './app.controller';
import { scaffoldUnitTests } from './scaffold-unit-tests';

const { useTestUtils } = scaffoldUnitTests();

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    appController = useTestUtils().module.get(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('saved');
    });
  });
});
