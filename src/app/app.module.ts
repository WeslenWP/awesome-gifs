import { WinRefService } from './core/services/winref.service';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConnectComponent } from './modules/connect/connect.component';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


const material: any[] = [MatToolbarModule, MatProgressBarModule, MatButtonModule, MatIconModule]

@NgModule({
  declarations: [AppComponent, ConnectComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, material],
  providers: [WinRefService],
  bootstrap: [AppComponent],
})
export class AppModule { }
