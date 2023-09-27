import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ComponentsModule } from './components/components.module';
import { CalculadoraPageComponent } from './pages/calculadora-page/calculadora-page.component';
import { RouterModule } from '@angular/router';

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
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
