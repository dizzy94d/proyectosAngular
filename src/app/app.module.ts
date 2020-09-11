import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { FatherAppComponent } from './father-app/father-app.component';
import { SonAppComponent } from './son-app/son-app.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    DirectivasComponent,
    FatherAppComponent,
    SonAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
