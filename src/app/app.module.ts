import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ComponentsModule } from './components/components.module';
import { CalculadoraPageComponent } from './pages/calculadora-page/calculadora-page.component';
import { RouterModule } from '@angular/router';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CalculadoraPageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ComponentsModule,
        RouterModule
    ],
    providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
    bootstrap: [AppComponent]
})
export class AppModule { }
