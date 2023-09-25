import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        anchorScrolling: 'enabled',
        scrollOffset: [0, 50],
        scrollPositionRestoration: 'disabled'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
