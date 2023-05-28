import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {VERSION as MAT_VERSION} from '@angular/material/core';
import { AppModule } from './app/app.module';

console.info('Angular Material version', MAT_VERSION.full);
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
