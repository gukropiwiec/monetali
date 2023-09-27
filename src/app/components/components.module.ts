import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeadlineComponent } from './headline/headline.component';
import { ServicosComponent } from './servicos/servicos.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ClientesComponent } from './clientes/clientes.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

const moduleComponents = [
    HeaderComponent,
    HeadlineComponent,
    ServicosComponent,
    CalculadoraComponent,
    ClientesComponent,
    FooterComponent,
    CarouselComponent
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CarouselModule
    ],
    declarations: moduleComponents,
    exports: moduleComponents,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
