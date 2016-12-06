import './message.less';

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
