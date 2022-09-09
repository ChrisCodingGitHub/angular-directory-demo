import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DirectoryConfigModule } from './modules/directory-config/directory-config.module';
import { DirectorySharedModule } from './modules/directory-shared/directory-shared.module';
import { DirectoryModule } from './modules/directory/directory.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DirectoryConfigModule,
    DirectoryModule,
    DirectorySharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
