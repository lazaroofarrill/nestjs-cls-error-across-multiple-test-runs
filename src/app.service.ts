import { Injectable } from '@nestjs/common';
import { ClsService } from 'nestjs-cls';

const SAVE_KEY = 'save_key';

@Injectable()
export class AppService {
  constructor(private readonly cls: ClsService) {
  }

  saveToLocalStorage(value: string) {
    return this.cls.set(SAVE_KEY, value);
  }

  readFromLocalStorage(): string {
    return this.cls.get<string>(SAVE_KEY);
  }
}
