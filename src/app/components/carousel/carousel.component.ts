import { Component } from '@angular/core';
import { defaultCarouselOptions } from 'src/app/shared/carousel-options-default';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
    defaultCarouselOptions = defaultCarouselOptions;
    
    fotos = [
        'assets/images/logo-dona-deola.png',
        'assets/images/logo-garantia.png',
        'assets/images/logo-mc-croacia.png',
        'assets/images/logo-mt.png',
        'assets/images/logo-parana.png',
        'assets/images/logo-r2.png',
        'assets/images/logo-via-norte.png',
        'assets/images/logo-posto-cordazzo.png',
        'assets/images/palacio_das_ferramentas.png'
    ];
}
