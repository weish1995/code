{{--商店列表--}}
<div class="list-block media-list @yield('prefixCls')-store-list">
    <div class="item-content">
        {{--商店头像--}}
        <img class="item-media" src="{{$imgURL}}" >
        {{--商家信息结束--}}
        <div class="item-inner">
            {{--商店名字--}}
            <p class="item-title">{{$storeName}}</p>
            {{--钱--}}
            <div class="item-money">
                <i class="logo-icon-money"></i>
                <span class="money">{{$storeMoney}}</span>
            </div>
            {{--所属行业--}}
            <p class="item-subtitle belong">所属行业：{{$industry}}</p>
            {{--门店数量--}}
            <p class="item-subtitle store-num">门店数量：{{$storeNum}}家</p>
        </div>
        {{--两个按钮  在线咨询 加盟政策--}}
        <div class="list-two-button">
            <a href="#" class="button">在线咨询</a>
            <a href="/detail" class="button">加盟政策</a>
        </div>


    </div>
    {{--加盟数量  电话--}}
    <div class="item-footer">
        <div class="join">已有{{$joinNum}}人申请加盟</div>
        <div class="item-phone">
            <i class="logo-icon-phone"></i>
            <span class="phone">{{$phoneNum}}转{{$phoneTurn}}</span>
        </div>
    </div>
</div>