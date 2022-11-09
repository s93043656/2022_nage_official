$(".Popupbtn").click(function() {
    $("div[id=" + $(this).attr("data-activity") +"]").fadeIn(200);
    });
$(".popup_close").click(function() {
    $(".mask").fadeOut(200);
});

// tabbox
$(function(){
    var _showTab = 0;
    $('.tabarea').each(function(){
        var $tab = $(this);
        var $defaultLi = $('ul.tab-title li', $tab).eq(_showTab).addClass('active');
        $($defaultLi.find('a').attr('href')).siblings().hide();

        $('ul.tab-title li', $tab).click(function() {
            var $this = $(this),
                _clickTab = $this.find('a').attr('href');
            $this.addClass('active').siblings('.active').removeClass('active');
            $(_clickTab).stop(false, true).fadeIn().siblings().hide();
            return false;
        })
    });
});

$(function(){
    var len = 16;
    $("ul li a.fontbox font").each(function(i){
        if($(this).text().length>len){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,len-1)+"...";
            $(this).text(text);
        }
    });
});

$(".sub,.sub-open").hover(function () {
    $(".sub-open").stop().slideDown();
}, function(){
    $(".sub-open").stop().slideUp();
});
$(".sub01,.sub-open01").hover(function () {
    $(".sub-open01").stop().slideDown();
}, function(){
    $(".sub-open01").stop().slideUp();
});
$(".sub02,.sub-open02").hover(function () {
    $(".sub-open02").stop().slideDown();
}, function(){
    $(".sub-open02").stop().slideUp();
});
$(".sub03,.sub-open03").hover(function () {
    $(".sub-open03").stop().slideDown();
}, function(){
    $(".sub-open03").stop().slideUp();
});
$(".sub04,.sub-open04").hover(function () {
    $(".sub-open04").stop().slideDown();
}, function(){
    $(".sub-open04").stop().slideUp();
});
$(".sub05,.sub-open05").hover(function () {
    $(".sub-open05").stop().slideDown();
}, function(){
    $(".sub-open05").stop().slideUp();
});
$(".sub06,.sub-open06").hover(function () {
    $(".sub-open06").stop().slideDown();
}, function(){
    $(".sub-open06").stop().slideUp();
});

var swiper = new Swiper(".page01-swiper", {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/*縮圖*/
var swiper = new Swiper(".page02-swiper01", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
// 職業圖
var swiper2 = new Swiper(".page02-swiper02", {
    autoplay:false,
    speed: 600,
    parallax: true,
    spaceBetween: 10,
    thumbs: {
    swiper: swiper,
    },
});

// 特色輪播
    /*縮圖*/
var swiper3 = new Swiper(".page03-swiper01", {
    slidesPerView: 1,
    loop: true,
    allowTouchMove: false,
    watchSlidesProgress: true,
});
// 職業圖
var swiper = new Swiper(".page03-swiper02", {
    autoplay:true,
    speed: 600,
    loop: true,
    noSwiping : true,
    allowTouchMove: false,
    slidesPerView: 2,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
    swiper: swiper3,
    },
});











