import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { PracticeComponent } from './practice/practice.component';
import { WarningAlertComponent } from './warningalert/warning-alert.component';
import { SuccessAlertComponent } from './sucess-alert/success-alert.components';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    PracticeComponent,
    WarningAlertComponent,
    SuccessAlertComponent
  ],
  imports: [ 
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
