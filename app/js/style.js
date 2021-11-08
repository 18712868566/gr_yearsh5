/*
 * @Author: A
 * @Date:   2021-06-30 14:08:32
 * @Last Modified by:   A
 * @Last Modified time: 2021-11-08 18:48:33
 */



$(function() {

    //关闭
    $(document).on("click", "#alertInfo .close,.close,.confirm,.pop-comm .pop_close,.pop_close_maskLayer,.pop_sjz", dialog.closeDiv);

    // 整体结构
    var swiper_global = new Swiper('#global.swiper-container', {
        direction: 'vertical',
        noSwiping: true,
        keyboard: true, // 设置开启键盘来控制Swiper切换。
        followFinger: false, //跟随手指。如设置为false，手指滑动时slide不会动，当你释放时slide才会切换。
        speed: 800,
        slidesPerView: "auto",
        resizeObserver: true, // 来监测swiper的container大小变化。
        initialSlide: 3,
        mousewheel: true, // 开启鼠标滚轮
        observer: true, // 监听 发生变化时 初始化
        observeParents: true, // 监听 发生变化时 初始化
        observeSlideChildren: true, // 子slide更新时，swiper是否更新。
        on: {
            resize: function() {
                this.update(); //窗口变化时，更新Swiper的一些属性，如宽高等
            }
        }
    });
});


function argumentsTabs(tabList, tabbox, index = 0) {
    // $(tabList + ":first-child").removeClass('curr').addClass('curr')
    console.log('index==' + index)
    var $div_li = $(tabList);
    $div_li.click(function() {
        $(this).addClass('curr').siblings().removeClass('curr');
        // var index = $div_li.index(this);
        var index = $div_li.index(this);
        // console.log('a')
        console.log('index-===' + index)
        $(tabbox).eq(index).addClass("curr").show().siblings().removeClass("curr").hide();
        // $(tabbox).eq(index).addClass("curr").stop().animate({opacity:1},"360").siblings().removeClass("curr").stop().animate({opacity:0},"360");
        //var h =$(tabbox).eq(index).offset().top;
        //$( "html,body").animate({ "scrollTop" : h },300);  //滚动到指定位置
        // 跟随横条
        // var $height = $('.flList .flListText').outerHeight(true);
        // $(this).siblings('.curr_triangle').stop().animate({'top': (index*$height)},"88");
    }).eq(index).click();
};



let loading_hero_w = document.getElementById('loading_hero').clientWidth;
let loading_hero_h = document.getElementById('loading_hero').clientHeight;

//pixi参数
let optionRunHomeLxy = {
    width: loading_hero_w, //宽度
    height: loading_hero_h, // 高度
    transparent: true, // 透明度
    antialias: true, //使得字体的边界和几何图形更加圆滑
    resolution: 1, //分辨率和像素密度
}
// 创建一个pixi应用
let app = new PIXI.Application(optionRunHomeLxy);

// 获取渲染器
let renderer = app.renderer;

// 使用画布的resize方法可以改变canvas的大小
renderer.autoResize = true;

// 获取dom
let playground = document.getElementById('loading_hero');

// 把 Pixi 创建的 canvas 添加到页面上
playground.appendChild(renderer.view);

//设置别名
let TextureCache = PIXI.utils.TextureCache; // 存储缓存纹理
let Texture = PIXI.Texture;
let Rectangle = PIXI.Rectangle;
let AnimatedSprite = PIXI.extras.AnimatedSprite;

//需要加载的雪碧图的地址（该图片服务器端已做跨域处理）
let imgURL = "../images/hero/露西亚-红莲/露西亚-红莲-走路/lxy_hl_move.png";
// let imgURL ='https://www.kkkk1000.com/images/learnPixiJS-AnimatedSprite/dnf.png'

//加载图像，加载完成后执行setup函数
PIXI.loader.add(imgURL).load(setup);


function setup() {
    //叫 SpriteUtilities 的库，该库包含许多有用的函数，用于创建Pixi精灵并使它们更易于使用。
    let su = new SpriteUtilities(PIXI);
    //创建纹理数组
    let frames = su.filmstrip(imgURL, 280, 280);
    // let frames = su.filmstrip(imgURL, 80, 143);

    //创建动画精灵
    let pixie = new PIXI.extras.AnimatedSprite(frames);

    //Change the sprite's size
    pixie.width = loading_hero_w;
    pixie.height = loading_hero_h;

    //设置动画精灵的速度
    pixie.animationSpeed = 0.15;

    //把动画精灵添加到舞台
    app.stage.addChild(pixie);
    //播放动画精灵
    pixie.play();
}



window.addEventListener("resize", function(event) {
    app.renderer.resize(loading_hero_w, loading_hero_h);
});

