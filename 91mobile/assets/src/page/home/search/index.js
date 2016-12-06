import './style.less';
import { Footer, Header, StoreList } from 'component';
import { URL } from 'util';

// 点击展开筛选项
$(document).on('click', '.type-tab-item', (e) => {
    $('.type-tab-item').removeClass('active');
    $('.drop-content').css('display', 'none');
    const currentTarget = $(e.currentTarget);
    const dropId = currentTarget.attr('data-drop');

    if (!currentTarget.hasClass('active')) {
        currentTarget.addClass('active');
    }

    if (!currentTarget.parent().hasClass('type-tab-selected')) {
        $(`#${dropId}`).css('display', 'block');
        currentTarget.parent().addClass('type-tab-selected');
    } else {
        currentTarget.parent().removeClass('type-tab-selected');
        currentTarget.removeClass('active');
        $(`#${dropId}`).css('display', 'none');
    }
});

// 选择筛选项
$(document).on('click', '.drop-content .drop-item', (e) => {
    const currentTarget = $(e.currentTarget);
    currentTarget.parent().find('.drop-item').removeClass('active');

    if (!currentTarget.hasClass('active')) {
        currentTarget.addClass('active');
    }

    searchStores();
    $('.type-tab-item').removeClass('active');
    $('.drop-content').css('display', 'none')
    currentTarget.parent().parent().removeClass('type-tab-selected');
});

// 查询数据
const searchStores = () => {
    console.log('woshi chaxun shuju');
};

// 点击关闭筛选项
$(document).on('click', '.drop-content', () => {
    if ($('.type-tab-item.active').length) {
        $('.type-tab-item').removeClass('active');
        $('.drop-content').css('display', 'none');
    }
});

$(document).on('pageInit', (e, pageId, $page) => {
    if (pageId === '/search') {
        const industry = URL.getQueryString('industry');
        const popularity = URL.getQueryString('popularity');
        const money = URL.getQueryString('money');
        const type = URL.getQueryString('type');

        if (industry) {
            setSelectedItem('industry', industry);
        }

        if (popularity) {
            setSelectedItem('popularity', popularity);
        }

        if (money) {
            setSelectedItem('money', money);
        }

        if (type) {
            setSelectedItem('type', type);
        }

        // [industry, popularity, money, type].forEach((value) => {
        //
        // })
    }
});

const setSelectedItem = (type, value) => {
    const dropContentIndustry = $(`#drop-content-${type}`);
    dropContentIndustry.find('.drop-item').removeClass('active');
    dropContentIndustry.find(`.drop-item#${value}`).addClass('active');
};
