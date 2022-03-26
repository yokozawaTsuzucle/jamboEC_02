function getVariantFromOptions() {
  let variantArr = []
  $(".product-category select").map(function(i, el) {
    variant = {value: $(el).val(), index: $(el).data('index')};
    variantArr.push(variant)
  });
  return variantArr;
}

function updateHistoryState(variant) {
  if (!history.replaceState || !variant) {
    return;
  }

  var newurl =
    window.location.protocol +
    '//' +
    window.location.host +
    window.location.pathname +
    '?variant=' +
    variant.id;
  
  window.history.replaceState({ path: newurl }, '', newurl);
}

$('.product-category select').on('change', function() {
  var selectedValues = getVariantFromOptions();
  var variants = window.product.variants;
  
  // Search for product variants based on what was selected in the dropdowns
  var found = _.find(variants, function(variant) {
    return selectedValues.every(function(values) {
      return _.isEqual(variant[values.index], values.value);
    });
  });
  updateHistoryState(found)
  $('#variant-id').val(found.id)
});










$(function () {
    $('.menu-trigger').on('click', function () {
        $(this).toggleClass('active');
        return false;
    });
    $('.menu-trigger').on('click', function () {
        $('.menu').toggleClass('active');
        return false;
    });

});

$(function () {
    $('.product_menu-trigger').on('click', function () {
        $(this).toggleClass('active');
        return false;
    });
    $('.product_menu-trigger').on('click', function () {
        $('.product_menu').toggleClass('active');
        return false;
    });

});


//サイズの右から出てくるやつ
$(function () {

    $('.size_trigger').on('click', function () {
        $('.size_menu').toggleClass('active');
        return false;
    });

    $('.size_esc').on('click', function () {
        $('.size_menu').toggleClass('active');
        return false;
    });
    
    $('.size_trigger').on('click', function () {
        $('.size_menu_back').toggleClass('active');
        return false;
    });

    $('.size_esc').on('click', function () {
        $('.size_menu_back').toggleClass('active');
        return false;
    });
    
    $('.size_menu_back').on('click', function () {
        $('.size_menu_back').toggleClass('active');
        return false;
    });
    
    $('.size_menu_back').on('click', function () {
        $('.size_menu').toggleClass('active');
        return false;
    });

});


//アコーディオンのやつ
$(function () {
    $('.q1').click(function () {
        $(this).next('.faq_a').slideToggle();
        $(this).toggleClass("open");
        $('.q1').toggleClass("open");
    });
    $('.q2').click(function () {
        $(this).next('.faq_a').slideToggle();
        $(this).toggleClass("open");
        $('.q2').toggleClass("open");
    });
    $('.q3').click(function () {
        $(this).next('.faq_a').slideToggle();
        $(this).toggleClass("open");
        $('.q3').toggleClass("open");
    });
    $('.q4').click(function () {
        $(this).next('.faq_a').slideToggle();
        $(this).toggleClass("open");
        $('.q4').toggleClass("open");
    });
    $('.q5').click(function () {
        $(this).next('.faq_a').slideToggle();
        $(this).toggleClass("open");
        $('.q5').toggleClass("open");
    });
    $('.q6').click(function () {
        $(this).next('.faq_a').slideToggle();
        $(this).toggleClass("open");
        $('.q6').toggleClass("open");
    });
    $('.q7').click(function () {
        $(this).next('.faq_a').slideToggle();
        $(this).toggleClass("open");
        $('.q7').toggleClass("open");
    });
    $('.q8').click(function () {
        $(this).next('.faq_a').slideToggle();
        $(this).toggleClass("open");
        $('.q8').toggleClass("open");
    });
    $('.q9').click(function () {
        $(this).next('.faq_a').slideToggle();
        $(this).toggleClass("open");
        $('.q9').toggleClass("open");
    });
});







//カルーセルスライダー

$(function () {
    var slider = "#slider"; // スライダー
    var thumbnailItem = "#thumbnail-list .thumbnail-item"; // サムネイル画像アイテム

    // サムネイル画像アイテムに data-index でindex番号を付与
    $(thumbnailItem).each(function () {
        var index = $(thumbnailItem).index(this);
        $(this).attr("data-index", index);
    });

    // スライダー初期化後、カレントのサムネイル画像にクラス「thumbnail-current」を付ける
    // 「slickスライダー作成」の前にこの記述は書いてください。
    $(slider).on('init', function (slick) {
        var index = $(".slide-item.slick-slide.slick-current").attr("data-slick-index");
        $(thumbnailItem + '[data-index="' + index + '"]').addClass("thumbnail-current");
    });

    //slickスライダー初期化  
    $(slider).slick({
        autoplay: false,
        arrows: true,
        fade: true,
        infinite: false, //これはつけましょう。
        prevArrow: '<img src="//cdn.shopify.com/s/files/1/0520/8250/7949/t/2/assets/arrow_p.png?v=10329649416798508202" alt="The Soap Store" class="slide-arrow prev-arrow sp" />',
        nextArrow: '<img src="//cdn.shopify.com/s/files/1/0520/8250/7949/t/2/assets/arrow_n.png?v=13852325978264584707" alt="The Soap Store" class="slide-arrow next-arrow sp" />'

    });
    //サムネイル画像アイテムをクリックしたときにスライダー切り替え
    $(thumbnailItem).on('click', function () {
        var index = $(this).attr("data-index");
        $(slider).slick("slickGoTo", index, false);
    });

    //サムネイル画像のカレントを切り替え
    $(slider).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $(thumbnailItem).each(function () {
            $(this).removeClass("thumbnail-current");
        });
        $(thumbnailItem + '[data-index="' + nextSlide + '"]').addClass("thumbnail-current");
    });
});



