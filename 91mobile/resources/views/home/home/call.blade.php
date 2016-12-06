<div class="@yield('prefixCls')-message" id="call">
    <div class="message-content">
        <span class="message-title">立即留言可免费获取项目的详细资料</span>
        @include('input', ['title' => '姓名', 'id' => 'call-name', 'class' => 'call-name'])
        @include('input', ['title' => '电话', 'id' => 'call-phone', 'class' => 'call-phone'])
        <div class="operate call">
            <button class="button cancel cancel-call">取消</button>
            <button class="button" id="post-call">提交</button>
        </div>
    </div>
</div>