import { DEFAULT_CURRENCY_CODE, enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule /*, {    providers: [{ provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }],  }*/)
  .catch((err) => console.error(err));
