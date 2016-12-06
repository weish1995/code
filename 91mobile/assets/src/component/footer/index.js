import './style.less';
import './message.less';
import { Request } from 'util';

$(document).on('pageInit', (e, pageId, $page) => {
    if (['/', '/message', '/type', '/search'].includes(pageId)) {
        const pathname = location.pathname;
        $('#message').css('display', 'none');
        $('.bar-tab .tab-item').removeClass('active');
        $(`.bar-tab .tab-item[href='${pageId === '/search' ? '/' : pathname}']`).addClass('active');
    }
});

$(document).on('click', '#bar-message', () => {
    $('#message').show('slow');
});

$(document).on('click', '#bar-call', () => {
    $('#call').show();
});

$(document).on('click', '.button.cancel', () => {
    $('#message').hide();
});

$(document).on('click', '.button.cancel.cancel-call', () => {
    $('#call').hide();
});

$(document).on('input', '.message-txtarea-tip', (e) => {
    const currentTarget = $(e.currentTarget);
    currentTarget.parent().find('.tips').css('display', $(e.currentTarget).val() ? 'none' : 'block');
    currentTarget.val() ? currentTarget.removeClass('message-txtarea-blur') : currentTarget.addClass('message-txtarea-blur');
});

$(document).on('focus', '.message-txtarea-tip', (e) => {
    const currentTarget = $(e.currentTarget);
    currentTarget.parent().find('.tips').css('display', $(e.currentTarget).val() ? 'none' : 'block');
    currentTarget.val() ? currentTarget.removeClass('message-txtarea-blur') : currentTarget.addClass('message-txtarea-blur');
});

$(document).on('blur', '.message-txtarea-tip', (e) => {
    const currentTarget = $(e.currentTarget);
    currentTarget.parent().find('.tips').css('display', 'none');
    currentTarget.removeClass('message-txtarea-blur');
});

$(document).on('click', '.tips p', (e) => {
    const currentTarget = $(e.currentTarget);
    const value = currentTarget.text();
    currentTarget.parent().parent().find('textarea').val(value).focus();
});

$(document).on('click', '.operate #post-message', () => {
    Request.post('/12312', {a: 1});
});

$(document).on('click', '.operate.call #post-message', () => {
    Request.post('/12312', {a: 1});
});
