function expressIcon() {
    var $express = $('#express'),
        $timerIcon = null, //定时器
        $speed = 15000; //一次的时间

    /* 不支持动画时触发 */
    if (!Modernizr.cssanimations) {
        iconAniamtion();
        $timerIcon = setInterval(iconAniamtion, $speed + 1000);
    } else {
        clearInterval($timerIcon);
    }

    /**
     * @func iconAnimation
     * @desc 小车运动
     */
    function iconAniamtion() {
        $express.animate({'left' : '100%'}, $speed, function() {
            $express.css('left', -$express.width());
        });
    }
}

expressIcon();


/* 导航层 合作品牌 */
var $cooperate = $('.cooperate');

if ($('.saas-index').length > 0) {
    $cooperate.on('click', function($event) {
        // 阻止a标签的默认行为
        $event.preventDefault();

        $('html, body').animate({'scrollTop': $('#index-brand').offset().top}, 600);
    });
}

// 百分比圆环
var $contrast = $('.contrast'),
    $percent = $('.constrast-item-icon'),
    $percentTimer = null,
    $oldNum = [],
    $newNum = [],
    $sign = 0;

$oldNum = $percent.map(function ($index) {
    return $($percent[$index]).html().replace('%', '') * 1;
});

$newNum.length = $oldNum.length;

$(window).on('scroll', function() {
    if ($contrast.length > 0) {
        if ($('html').scrollTop() + $('body').scrollTop() >= $percent.offset().top - $(window).height()) {
            if (!$contrast.hasClass('contrast-animate') && Modernizr.cssanimations) {
                clearInterval($percentTimer);
                $sign = 0;
                $newNum.fill(0);
                $percentTimer = setInterval(percentInterval, 50);
            }
            $contrast.addClass('contrast-animate');
        } else {
            $contrast.removeClass('contrast-animate');
        }
    }
});

// 定时器函数
function percentInterval() {
    for (var $i = 0; $i < $oldNum.length; $i++) {
        $newNum[$i] += $oldNum[$i] / 20;
        $($percent[$i]).html($newNum[$i].toFixed(0) + '%');
    }

    if (++$sign >= 20) {
        clearInterval($percentTimer);
    }
}

// svg
var $paths = $('.run-path'),
    num = 0;

if ($paths.length > 0) {
    setInterval(function() {
        $paths.attr('stroke-dashoffset', num);
        num = num > 100 ? 0 : ++num;
    }, 25);
}
