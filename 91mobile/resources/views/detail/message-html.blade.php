<div class="@yield('prefixCls')-message-content">
    {{--在线留言标题--}}
    <div class="list-head">
        <span class="logo-icon"></span>
        <span>在线留言</span>
    </div>

    {{--留言内容展示板块--}}
    <div class="media-message">
        @include('message-display', ['imageURL' => '','message' => '想加盟你们，不知道加盟费多少？', 'writer' => '陈老师', 'time' => '20160923'])
        @include('message-display', ['imageURL' => '','message' => '想加盟你们，不知道加盟费多少？想加盟你们，不知道加盟费多少？', 'writer' => '陈老师', 'time' => '20160923'])
        @include('message-display', ['imageURL' => '','message' => '想加盟你们，不知道加盟费多少？想加盟你们，不知道加盟费多少？想加盟你们，不知道加盟费多少？', 'writer' => '陈老师', 'time' => '20160923'])
    </div>

    {{--顾客留言表单--}}
    <div class="list-block online-message">
        {{--立即留言标题--}}
        <h2>立即留言即可免费获取项目的详细资料</h2>
        {{--表单--}}
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

    </div>

    {{--提交表单按钮--}}
    <div class="content-block submit-button">
        <a href="#" class="button button-fill">提交留言</a>
    </div>

    {{--免费留言--}}
    <nav class="free-message">
        <span>免费留言</span>
        <button class="button pull-right">免费通话</button>
        <div>
            <input type="number" placeholder="输入手机号码">
        </div>
    </nav>
</div>


