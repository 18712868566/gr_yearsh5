/*
 * @Author: A
 * @Date:   2021-06-30 14:08:32
 * @Last Modified by:   A
 * @Last Modified time: 2021-11-09 17:22:21
 */
$(function() {

    //关闭
    $(document).on("click", "#alertInfo .close,.close,.confirm,.pop-comm .pop_close,.pop_close_maskLayer,.pop_sjz", dialog.closeDiv);

    // 整体结构
    // var swiper_global = new Swiper('#global.swiper-container', {
    //     direction: 'vertical',
    //     noSwiping: true,
    //     keyboard: true, // 设置开启键盘来控制Swiper切换。
    //     followFinger: false, //跟随手指。如设置为false，手指滑动时slide不会动，当你释放时slide才会切换。
    //     speed: 800,
    //     slidesPerView: "auto",
    //     resizeObserver: true, // 来监测swiper的container大小变化。
    //     initialSlide: 3,
    //     mousewheel: true, // 开启鼠标滚轮
    //     observer: true, // 监听 发生变化时 初始化
    //     observeParents: true, // 监听 发生变化时 初始化
    //     observeSlideChildren: true, // 子slide更新时，swiper是否更新。
    //     on: {
    //         resize: function() {
    //             this.update(); //窗口变化时，更新Swiper的一些属性，如宽高等
    //         }
    //     }
    // });

    $('.btn_play').on('click', function(event) {
        event.preventDefault();
        //登录
        dialog.alertPopLogin();

        // 登录错误 从新输入
        // dialog.alertPopLoginError();
    });

    // 活动规则
    $('.btn_gz').on('click', function(event) {
        event.preventDefault();
        dialog.alertPopHDGZ();
    });

    // 报酬
    $('.btn_lott').on('click', function(event) {
        event.preventDefault();
        dialog.alertPopHDGZ_yh();
    });

    // 整体添加点击事件
    $('.page2').on('click', function() {
        // 根据点击次数切换内容 , 初始为0 , 每次点击+1
        heros.touchNum = heros.touchNum + 1;

        if (heros.touchNum == 1) {
            $('.txt01').addClass('animate__animated  animate__fadeOut');
            $('.txt02').removeClass('hide').addClass('animate__animated  animate__fadeIn');
        }

        if (heros.touchNum == 2) {
            $('.txt02').addClass('animate__animated  animate__fadeOut');
            $('.txt03').removeClass('hide').addClass('animate__animated  animate__fadeIn');
        }
        // 切换到丽芙暗蚀
        if (heros.touchNum == 3) {
            heros.pixi_lxy_hl.visible = false;
            heros.pixi_lf_as.visible = true;
        }
        console.log(heros.touchNum)

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

//需要加载的雪碧图的地址
// 跑步动作
let imgURL_pao = [
    "../images/hero/露西亚-红莲/露西亚-红莲-走路/lxy_hl_move.png",
    "../images/hero/丽芙-蚀暗/丽芙-蚀暗-走路/丽芙-蚀暗-走路_spr.png",
    "../images/hero/里-异火/里-异火-走路/里-异火-走路_spr.png",
    "../images/hero/渡边-夜刃/渡边-夜刃-走路/渡边-夜刃-走路_spr.png",
    "../images/hero/神威-重能/神威-重能-走路/神威-重能-走路_spr.png",
    "../images/hero/七实-风暴/七实-风暴-走路/七实-风暴-走路_spr.png",
    "../images/hero/卡列-爆裂/卡列-爆裂-走路/卡列-爆裂-走路_spr.png",
    "../images/hero/比安卡-零度/比安卡-零度-走路/bianka-lingdu走路_spr.png"
];


// 挥手动作
let imgURL_bye = [

]

// 沮丧动作
let imgURL_sad = [

]

//加载图像，加载完成后执行setup函数
PIXI.loader
    .add(imgURL_pao,imgURL_bye,imgURL_sad)
    .on("progress", loadProgressHandler)
    .load(setup);

// 监听加载进度
function loadProgressHandler(loader, resource) {
    // 输出加载的url
    console.log("loading: " + resource.url);
    // 加载进度
    let precc_widht = Math.round(loader.progress);
    // console.log("progress: " + precc_widht + "%");
    $(".progress_wrap .progress_cc .progress").css({
        width: precc_widht + '%'
    });

}

const heros = {
    touchNum: 0,
}

function setup() {

    // 加载完毕
    $('.loading').hide();


    // 获取父元素宽高
    let loading_hero_w = document.getElementById('loading_hero').clientWidth;
    let loading_hero_h = document.getElementById('loading_hero').clientHeight;


    //设置别名
    let TextureCache = PIXI.utils.TextureCache; // 存储缓存纹理
    let Texture = PIXI.Texture;
    let Rectangle = PIXI.Rectangle;
    let AnimatedSprite = PIXI.extras.AnimatedSprite;


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

    //叫 SpriteUtilities 的库，该库包含许多有用的函数，用于创建Pixi精灵并使它们更易于使用。
    let su = new SpriteUtilities(PIXI);

    //创建纹理数组
    // 露西亚红莲纹理
    let lxyHlPao = su.filmstrip(imgURL_pao[0], 280, 280);
    // 丽芙蚀暗纹理
    let lfAsPao = su.filmstrip(imgURL_pao[1], 280, 280);
    //里 异火纹理
    let liYhPao = su.filmstrip(imgURL_pao[2], 280, 280);
    //渡边 夜刃纹理
    let dbYerenPao = su.filmstrip(imgURL_pao[3], 280, 280);
    // 神威 重能纹理
    let swZnPao = su.filmstrip(imgURL_pao[4], 280, 280);
    //七实 风暴
    let qsFbPao = su.filmstrip(imgURL_pao[5], 280, 280);
    // 卡列尼娜 爆裂
    let klnnBlPao = su.filmstrip(imgURL_pao[6], 280, 280);
    // 比安卡零度纹理
    let bakLdPao = su.filmstrip(imgURL_pao[7], 280, 280);

    //创建动画精灵
    heros.pixi_lxy_hl = new PIXI.extras.AnimatedSprite(lxyHlPao); // 露西亚红莲跑
    heros.pixi_lf_as = new PIXI.extras.AnimatedSprite(lfAsPao); // 丽芙蚀暗跑
    heros.pixi_li_yh = new PIXI.extras.AnimatedSprite(liYhPao); // 里 异火跑
    heros.pixi_db_yr = new PIXI.extras.AnimatedSprite(dbYerenPao); // 渡边 夜刃跑
    heros.pixi_sw_zn = new PIXI.extras.AnimatedSprite(swZnPao); // 神威 重能跑
    heros.pixi_qs_fb = new PIXI.extras.AnimatedSprite(qsFbPao); // 七实 风暴跑
    heros.pixi_klnn_bl = new PIXI.extras.AnimatedSprite(klnnBlPao); // 卡列尼娜 爆裂跑
    heros.pixi_bak_ld = new PIXI.extras.AnimatedSprite(bakLdPao); // 比安卡零度跑

    // 添加到舞台
    setSprAttr([
        heros.pixi_lxy_hl, // 露西亚红莲跑
        heros.pixi_lf_as, // 丽芙蚀暗跑
        heros.pixi_li_yh, // 里 异火跑
        heros.pixi_db_yr, // 渡边 夜刃跑
        heros.pixi_sw_zn, // 神威 重能跑
        heros.pixi_qs_fb, // 七实 风暴跑
        heros.pixi_klnn_bl, // 卡列尼娜 爆裂跑
        heros.pixi_bak_ld // 比安卡零度跑
    ]);



    function setSprAttr(pixiSprArr) {

        for (var i = 0; i < pixiSprArr.length; i++) {

            pixiSprArr[i].visible = false;
            //Change the sprite's size
            pixiSprArr[i].width = loading_hero_w;
            pixiSprArr[i].height = loading_hero_h;

            //设置动画精灵的速度
            pixiSprArr[i].animationSpeed = 0.15;

            //把动画精灵添加到舞台
            app.stage.addChild(pixiSprArr[i]);
            //播放动画精灵
            pixiSprArr[i].play();
        }

        pixiSprArr[0].visible = true;
    }
}