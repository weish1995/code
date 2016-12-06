<div class="content @yield('prefixCls')-home-search">
    <div class="type-tab">
        <a class="type-tab-item" data-drop="drop-content-industry">
            <span>当前行业</span>
        </a>
        <a class="type-tab-item" data-drop="drop-content-popularity">
            <span>人气</span>
        </a>
        <a class="type-tab-item" data-drop="drop-content-money">
            <span>投资额</span>
        </a>
        <a class="type-tab-item" data-drop="drop-content-type">
            <span>筛选</span>
        </a>

        <div class="drop-content" id="drop-content-industry">
            <div class="drop-item active" id="12312">
                <span>张三</span>
            </div>
            <div class="drop-item" id="hotpot">
                <span>李四</span>
            </div>
        </div>
        <div class="drop-content" id="drop-content-popularity">
            <div class="drop-item active">
                <span>王三</span>
            </div>
            <div class="drop-item">
                <span>李四</span>
            </div>
        </div>
        <div class="drop-content" id="drop-content-money">
            <div class="drop-item active">
                <span>李三</span>
            </div>
            <div class="drop-item">
                <span>李四</span>
            </div>
        </div>
        <div class="drop-content" id="drop-content-type">
            <div class="drop-item active">
                <span>不知大三</span>
            </div>
            <div class="drop-item">
                <span>李四</span>
            </div>
        </div>
    </div>
    <div class="type-content">
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
         'industry' => '火锅\汤锅\香锅\汤锅\香锅\汤锅\香锅',
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
         'industry' => '火锅\汤锅\香锅',
         'storeNum' => '53',
         'joinNum' => '30000',
         'phoneNum' => '4006-222-114',
         'phoneTurn' => '1000'])
    </div>
</div>
