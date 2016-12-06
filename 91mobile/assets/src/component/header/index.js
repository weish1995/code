import './style.less';

$(document).on('click', '.bar .header-input', () => {
    $.router.load('/search', true);
});
