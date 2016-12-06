<div class="content @yield('prefixCls')-home-content">
    <!-- Slider -->
    <div class="swiper-container" data-space-between='10'>
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="@yield('assetsAt')/dist/banner.jpg" alt="" title="">
            </div>
            <div class="swiper-slide">
                <img src="@yield('assetsAt')/dist/banner-next.jpg" alt="" title="">
            </div>
            <div class="swiper-slide">
                <img src="@yield('assetsAt')/dist/banner.jpg" alt="" title="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>

    <div class="@yield('prefixCls')-home-type">
        <div class="type-row">
            <a class="item" href="/search?industry=hotpot" title="">
                <img class="img" src="/dist/huoguo.png" alt="" title="">
                <p class="p">火锅</p>
            </a>
            <a class="item" href="#" title="">
                <img class="img" src="/dist/huoguo.png" alt="" title="">
                <p class="p">火锅</p>
            </a>
            <a class="item" href="#" title="">
                <img class="img" src="/dist/huoguo.png" alt="" title="">
                <p class="p">火锅</p>
            </a>
            <a class="item" href="#" title="">
                <img class="img" src="/dist/huoguo.png" alt="" title="">
                <p class="p">火锅</p>
            </a>
            <a class="item" href="#" title="">
                <img class="img" src="/dist/huoguo.png" alt="" title="">
                <p class="p">火锅</p>
            </a>
        </div>
        <div class="type-row row-top-border">
            <a class="item" href="#" title="">
                <img class="img" src="/dist/huoguo.png" alt="" title="">
                <p class="p">火锅</p>
            </a>
            <a class="item" href="#" title="">
                <img class="img" src="/dist/huoguo.png" alt="" title="">
                <p class="p">火锅</p>
            </a>
            <a class="item" href="#" title="">
                <img class="img" src="/dist/huoguo.png" alt="" title="">
                <p class="p">火锅</p>
            </a>
            <a class="item" href="#" title="">
                <img class="img" src="/dist/huoguo.png" alt="" title="">
                <p class="p">火锅</p>
            </a>
            <a class="item" href="#" title="">
                <img class="img" src="/dist/huoguo.png" alt="" title="">
                <p class="p">火锅</p>
            </a>
        </div>
    </div>

    <div class="@yield('prefixCls')-home-ad">
        <img class="ad-left" src="@yield('assetsAt')/dist/banner-next.jpg"/>
        <div class="ad-right">
            <img class="ad-right-top" src="@yield('assetsAt')/dist/banner-next.jpg"/>
            <img class="ad-right-bottom" src="@yield('assetsAt')/dist/banner-next.jpg"/>
        </div>
    </div>

    <div class="@yield('prefixCls')-home-list">
        @include('store-list', [
        'imgURL' => '',
        'storeName' =>
        '重庆霸王火锅串串招商联盟',
        'storeMoney' => '20-50万',
         'industry' => '火锅\汤锅\香锅\干锅',
         'storeNum' => '53',
         'joinNum' => '30000',
         'phoneNum' => '4006-222-114',
         'phoneTurn' => '1000'])

        @include('store-list', [
        'imgURL' => '',
        'storeName' =>
        '重庆霸王火锅串串招商联盟',
        'storeMoney' => '20-50万',
         'industry' => '火锅\汤锅',
         'storeNum' => '53',
         'joinNum' => '30000',
         'phoneNum' => '4006-222-114',
         'phoneTurn' => '1000'])

        @include('store-list', [
        'imgURL' => '',
        'storeName' =>
        '重庆霸王火锅串串招商联盟',
        'storeMoney' => '20-50万',
         'industry' => '火锅\汤锅\香锅',
         'storeNum' => '53',
         'joinNum' => '30000',
         'phoneNum' => '4006-222-114',
         'phoneTurn' => '1000'])
        @include('store-list', [
        'imgURL' => '',
        'storeName' =>
        '重庆霸王火锅串串招商联盟',
        'storeMoney' => '20-50万',
         'industry' => '火锅\汤锅\香锅\干锅',
         'storeNum' => '53',
         'joinNum' => '30000',
         'phoneNum' => '4006-222-114',
         'phoneTurn' => '1000'])

        @include('store-list', [
        'imgURL' => '',
        'storeName' =>
        '重庆霸王火锅串串招商联盟',
        'storeMoney' => '20-50万',
         'industry' => '火锅\汤锅',
         'storeNum' => '53',
         'joinNum' => '30000',
         'phoneNum' => '4006-222-114',
         'phoneTurn' => '1000'])

        @include('store-list', [
        'imgURL' => '',
        'storeName' =>
        '重庆霸王火锅串串招商联盟',
        'storeMoney' => '20-50万',
         'industry' => '火锅\汤锅\香锅',
         'storeNum' => '53',
         'joinNum' => '30000',
         'phoneNum' => '4006-222-114',
         'phoneTurn' => '1000'])
        @include('store-list', [
        'imgURL' => '',
        'storeName' =>
        '重庆霸王火锅串串招商联盟',
        'storeMoney' => '20-50万',
         'industry' => '火锅\汤锅\香锅\干锅',
         'storeNum' => '53',
         'joinNum' => '30000',
         'phoneNum' => '4006-222-114',
         'phoneTurn' => '1000'])

        @include('store-list', [
        'imgURL' => '',
        'storeName' =>
        '重庆霸王火锅串串招商联盟',
        'storeMoney' => '20-50万',
         'industry' => '火锅\汤锅',
         'storeNum' => '53',
         'joinNum' => '30000',
         'phoneNum' => '4006-222-114',
         'phoneTurn' => '1000'])

        @include('store-list', [
        'imgURL' => '',
        'storeName' =>
        '重庆霸王火锅串串招商联盟',
        'storeMoney' => '20-50万',
         'industry' => '火锅\汤锅\香锅',
         'storeNum' => '53',
         'joinNum' => '30000',
         'phoneNum' => '4006-222-114',
         'phoneTurn' => '1000'])
        @include('store-list', [
        'imgURL' => '',
        'storeName' =>
        '重庆霸王火锅串串招商联盟',
        'storeMoney' => '20-50万',
         'industry' => '火锅\汤锅\香锅\干锅',
         'storeNum' => '53',
         'joinNum' => '30000',
         'phoneNum' => '4006-222-114',
         'phoneTurn' => '1000'])

        @include('store-list', [
        'imgURL' => '',
        'storeName' =>
        '重庆霸王火锅串串招商联盟',
        'storeMoney' => '20-50万',
         'industry' => '火锅\汤锅',
         'storeNum' => '53',
         'joinNum' => '30000',
         'phoneNum' => '4006-222-114',
         'phoneTurn' => '1000'])

        @include('store-list', [
        'imgURL' => '',
        'storeName' =>
        '重庆霸王火锅串串招商联盟',
        'storeMoney' => '20-50万',
         'industry' => '火锅\汤锅\香锅',
         'storeNum' => '53',
         'joinNum' => '30000',
         'phoneNum' => '4006-222-114',
         'phoneTurn' => '1000'])
    </div>
</div>
