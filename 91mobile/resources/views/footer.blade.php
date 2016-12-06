<footer class="@yield('prefixCls')-footer">
    <nav class="bar bar-tab">
        <a class="tab-item" data-no-cache="true" href="/">
            <span class="icon icon-home"></span>
            <span class="tab-label">首页</span>
        </a>
        <a class="tab-item" data-no-cache="true" href="/type">
            <span class="icon icon-me"></span>
            <span class="tab-label">分类</span>
        </a>
        <a class="tab-item">
            <span class="icon icon-star" id="bar-call"></span>
            <span class="tab-label">咨询</span>
        </a>
        <a class="tab-item" id="bar-message">
            <span class="icon icon-cart"></span>
            <span class="tab-label">留言</span>
        </a>
    </nav>
</footer>

{{--留言部分--}}
@include('home.home.message')

{{--打电话部分--}}
@include('home.home.call')