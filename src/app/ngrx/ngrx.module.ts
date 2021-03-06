import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../../environments/environment';
import {appReducer} from './app.reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([]),

    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production})
  ]
})
export class NgrxModule {
}
