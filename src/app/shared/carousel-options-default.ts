import { OwlOptions } from 'ngx-owl-carousel-o';

export const defaultCarouselOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 2
        },
        740: {
            items: 3
        },
        940: {
            items: 4
        }
    },
    nav: false,
    margin: 15
};
