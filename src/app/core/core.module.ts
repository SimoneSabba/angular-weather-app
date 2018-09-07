import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const metaReducers: MetaReducer<any>[] = [];

const modules = [
  CommonModule,
  RouterModule,
  BrowserModule,
  HttpClientModule,
  StoreModule.forRoot({}, { metaReducers }),
  EffectsModule.forRoot([]),
  StoreDevtoolsModule.instrument() // not for a production environment
];

@NgModule({
  imports: [
    ...modules
  ],
  declarations: []
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule,
  ) {
    // Prevent from importing this module twice.
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only',
      );
    }
  }
}
