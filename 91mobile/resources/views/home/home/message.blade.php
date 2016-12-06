<div class="@yield('prefixCls')-message" id="message">
    <div class="message-content">
        <span class="message-title">立即留言可免费获取项目的详细资料</span>
        @include('input', ['title' => '姓名', 'id' => 'name1', 'class' => 'class'])
        @include('input', ['title' => '年龄', 'id' => 'name2', 'class' => 'class'])
        <div class="@yield('prefixCls')-input message-txtarea">
            <textarea placeholder="内容:" class="message-txtarea-tip"></textarea>
            <div class="tips">
                <p>请贵公司哪里有样板店</p>
                <p>请给我打电话，并寄招商资料</p>
                <p>我想详细的了解招商政策，请尽快寄资料</p>
                <p>对这个项目很感兴趣，请尽快寄资料</p>
                <p>项目很好，现在想加入，请给我预留名额</p>
            </div>
        </div>
        <div class="operate">
            <button class="button cancel">取消</button>
            <button class="button" id="post-message">提交留言</button>
        </div>
    </div>
</div>