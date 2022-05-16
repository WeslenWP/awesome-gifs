import { Injectable } from '@angular/core';
const w = () => {
  return window;
};
@Injectable()
export class WinRefService {
  get window(): any {
    return w();
  }
}
