<script charset="utf-8" src="@yield('assetsAt')/dist/zepto.js"></script>
@include('sui')
<script charset="utf-8" src="@yield('assetsAt')/dist/sm.js"></script>
<script type='text/javascript' src="@yield('assetsAt')/dist/sm-extend.js" charset='utf-8'></script>
<script charset="utf-8" src="@yield('assetsAt')/dist/index.js"></script>
<script>
    $(function () {
        $.init()
    });
</script>