// Include jQuery for slick carousel and other scripts

$(".slide-items").slick({
  autoplay: true, // 自動再生
  autoplaySpeed: 4000, // 再生速度（ミリ秒設定） 1000ミリ秒=1秒
  infinite: true, // 無限スライド
});

$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});
