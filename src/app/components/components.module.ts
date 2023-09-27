import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeadlineComponent } from './headline/headline.component';
import { ServicosComponent } from './servicos/servicos.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ClientesComponent } from './clientes/clientes.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

const moduleComponents = [
    HeaderComponent,
    HeadlineComponent,
    ServicosComponent,
    CalculadoraComponent,
    ClientesComponent,
    FooterComponent
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: moduleComponents,
    exports: moduleComponents,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
