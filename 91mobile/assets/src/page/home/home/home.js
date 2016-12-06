import './home.less';
import { Footer, Header, StoreList } from 'component';

const config = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    autoplay: 4000,
    speed: 500,
    loop: true,
    observer: true,
    observeParents: true,
    autoplayDisableOnInteraction: false,
};

$('.swiper-container').swiper(config);
