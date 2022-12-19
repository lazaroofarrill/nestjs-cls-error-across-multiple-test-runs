import { scaffoldUnitTests } from './scaffold-unit-tests';
import { AppService } from './app.service';
import { delay } from 'rxjs';

const { useTestUtils } = scaffoldUnitTests();

describe('test suite 2', () => {
  let appService: AppService;

  beforeAll(async () => {
    appService = useTestUtils().module.get(AppService);
  });

  it('should save something and get it back', function() {
    const toSave = 'some string to save';
    appService.saveToLocalStorage(toSave);
    const read = appService.readFromLocalStorage();

    expect(toSave).toBe(read);
  });
});
