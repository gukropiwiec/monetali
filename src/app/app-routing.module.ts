import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CalculadoraPageComponent } from './pages/calculadora-page/calculadora-page.component';

const routes: Routes = [{ path: '', component: HomeComponent }, { path: 'calculadora', component: CalculadoraPageComponent }];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        anchorScrolling: 'enabled',
        scrollOffset: [0, 50],
        scrollPositionRestoration: 'disabled'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
