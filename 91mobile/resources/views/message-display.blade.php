<div class="@yield('prefixCls')-message-display">
    {{--顾客头像--}}
    <img src="{{$imageURL}}" alt="" title="" >
    {{--留言内容--}}
    <div class="item-inner">
        <p class="item-title">留言内容：</p>
        <p class="item-message">{{$message}}</p>
        <div class="item-title-row">
            <div class="item-title">
                <span>来自：</span>
                <span class="writer">{{$writer}}</span>
            </div>
            <div class="item-after">
                <span class="logo-icon"></span>
                <time>{{$time}}</time>
            </div>
        </div>
    </div>
</div>