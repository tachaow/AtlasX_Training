import { NgModule } from '@angular/core'

import { AxAuthenticationModule } from '@atlasx/core/authentication'
import { AxConfigurationModule } from '@atlasx/core/configuration'
import { AxWebServiceUrl } from '@atlasx/core/http-service'

import { environment } from '../environments/environment'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ArcgisjsapiProvider } from './gis/argisjsapi-provider'

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyappComponent } from './myapp/myapp.component';

import { AppLayoutModule } from './layout/app.layout.module'
import { LocatorModule } from './page/locator/locator.module'
import { MapViewModule } from './page/MapView/MapView.module'
import { GisModule } from './gis/gis.module'
import { CommentModule } from './page/comment/comment.module'



@NgModule({
  declarations: [AppComponent, MyappComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommentModule,
    LocatorModule,
    MapViewModule,
    GisModule,
    // Required register, if application use AtlasX configuration pattern.
    // It will load configuration before application initial startup.
    AxConfigurationModule,

    // Required register, if application use authentication.
    AxAuthenticationModule.forRoot(environment),
    AppLayoutModule,
  
  ],
  providers: [
    // Required register, if application use AxAuthenticationModule or AxConfigurationModule.
    { provide: AxWebServiceUrl, useValue: environment.webServiceUrl },

    // Requried register, if application use ArcGIS API for JavaScript.
    ArcgisjsapiProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
