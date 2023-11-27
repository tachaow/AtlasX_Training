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

import { AppLayoutModule } from './layout/app.layout.module'
import { GisModule } from './gis/gis.module'
import { HomeModule } from './home/home.module'
import { MyAppModule } from './page/myApp/myApp.module'
import { FormsModule } from '@angular/forms'
import { LocatorComponent } from './page/locator/locator.component'
import { CommentSimulatorModule } from './page/commentSimulator/commentSimulator.module'
import { PanMapComponent } from './page/panMap/panMap.component'
import { ArcGisMapComponent } from './page/arcGisMap/arcGisMap.component'

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AccordionModule } from 'primeng/accordion';
import { IdentifyTaskComponent } from './page/IdentifyTask/IdentifyTask.component'
import { TableModule } from 'primeng/table';
import { QueryTaskComponent } from './page/Intermediate/queryTask/queryTask.component'
import { SpatialQueryComponent } from './page/Intermediate/SpatialQuery/SpatialQuery.component'


@NgModule({
  declarations: [
    AppComponent,
    LocatorComponent,
    PanMapComponent,
    ArcGisMapComponent,
    IdentifyTaskComponent,
    QueryTaskComponent,
    SpatialQueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    GisModule,
    HomeModule,
    MyAppModule,
    CommentSimulatorModule,



    // PanMapModule,
    // Required register, if application use AtlasX configuration pattern.
    // It will load configuration before application initial startup.
    AxConfigurationModule,

    // Required register, if application use authentication.
    AxAuthenticationModule.forRoot(environment),
    AppLayoutModule,

    //PrimNg
    ButtonModule,
    InputTextModule,
    AccordionModule,
    TableModule

  ],
  providers: [
    // Required register, if application use AxAuthenticationModule or AxConfigurationModule.
    { provide: AxWebServiceUrl, useValue: environment.webServiceUrl },

    // Requried register, if application use ArcGIS API for JavaScript.
    ArcgisjsapiProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
