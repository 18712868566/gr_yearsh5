/*
 * @Author: A
 * @Date:   2021-06-30 14:08:32
 * @Last Modified by:   A
 * @Last Modified time: 2021-11-11 17:34:50
 */


const heros = {
    touchNum: 1,
    staticURL:'../'
}


$(function() {

    //关闭
    $(document).on("click", "#alertInfo .close,.close,.confirm,.pop-comm .pop_close,.pop_close_maskLayer,.pop_sjz", dialog.closeDiv);

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
        showText_animate(heros.touchNum);
        console.log(heros.touchNum)
    });
});


// 根据点击次数 展示内容和 切换任务动画
function showText_animate(touchNum) {
    // body...
    $(`.txt0${touchNum}`).addClass('animate__animated  animate__fadeOut');
    $(`.txt0${touchNum+1}`).removeClass('hide').addClass('animate__animated  animate__fadeIn');


    /**********************切换动画小人**************************/
    // 切换到丽芙暗蚀
    if (heros.touchNum == 3) {
        heros.pixi_lxy_hl.visible = false;
        heros.pixi_lf_as.visible = true;
    }
    // 切换到里 异火
    if (heros.touchNum == 6) {
        heros.pixi_lf_as.visible = false;
        heros.pixi_li_yh.visible = true;
    }
    // 切换到 渡边 夜刃
    if (heros.touchNum == 9) {
        heros.pixi_li_yh.visible = false;
        heros.pixi_db_yr.visible = true;
    }
    // 切换到 神威 重能
    if (heros.touchNum == 12) {
        heros.pixi_db_yr.visible = false;
        heros.pixi_sw_zn.visible = true;
    }
    // 切换到七实 风暴
    if (heros.touchNum == 15) {
        heros.pixi_sw_zn.visible = false;
        heros.pixi_qs_fb.visible = true;
    }
    // 切换到卡列尼娜 爆裂
    if (heros.touchNum == 18) {
        heros.pixi_qs_fb.visible = false;
        heros.pixi_klnn_bl.visible = true;
    }
    // 切换到比安卡零度
    if (heros.touchNum == 21) {
        heros.pixi_klnn_bl.visible = false;
        heros.pixi_bak_ld.visible = true;
    }
    /**********************切换动画小人end**************************/

    // 摸头最多
    if (heros.touchNum == 24) {
        heros.pixi_bak_ld.visible=heros.pixi_lxy_hl.visible = false;

    }
    // 摸头最少

    // 出击最多


}



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
    ""+heros.staticURL+"images/hero/露西亚-红莲/露西亚-红莲-走路/lxy_hl_move.png",
    ""+heros.staticURL+"images/hero/丽芙-蚀暗/丽芙-蚀暗-走路/丽芙-蚀暗-走路_spr.png",
    ""+heros.staticURL+"images/hero/里-异火/里-异火-走路/里-异火-走路_spr.png",
    ""+heros.staticURL+"images/hero/渡边-夜刃/渡边-夜刃-走路/渡边-夜刃-走路_spr.png",
    ""+heros.staticURL+"images/hero/神威-重能/神威-重能-走路/神威-重能-走路_spr.png",
    ""+heros.staticURL+"images/hero/七实-风暴/七实-风暴-走路/七实-风暴-走路_spr.png",
    ""+heros.staticURL+"images/hero/卡列-爆裂/卡列-爆裂-走路/卡列-爆裂-走路_spr.png",
    ""+heros.staticURL+"images/hero/比安卡-零度/比安卡-零度-走路/bianka-lingdu走路_spr.png"
];


// 挥手动作
let imgURL_bye = [
    ""+heros.staticURL+"images/hero/露西亚-红莲/露西亚-红莲-招手/露西亚-红莲-招手_spr.png",
    ""+heros.staticURL+"images/hero/露西亚-黎明/露西亚-黎明-招手/露西亚-黎明-招手_spr.png",
    ""+heros.staticURL+"images/hero/露西亚-鸦羽/露西亚-鸦羽-招手/露西亚-鸦羽-招手_spr.png",
    ""+heros.staticURL+"images/hero/丽芙-蚀暗/丽芙-蚀暗-招手/丽芙-蚀暗-招手_spr.png",
    ""+heros.staticURL+"images/hero/丽芙-流光/丽芙-流光-招手/丽芙-流光-招手_spr.png",
    ""+heros.staticURL+"images/hero/丽芙-仰光/丽芙-仰光-招手/丽芙-仰光-招手_spr.png",
    ""+heros.staticURL+"images/hero/里-异火/里-异火-招手/里-异火-招手_spr.png",
    ""+heros.staticURL+"images/hero/里-乱数/里-乱数-招手/里-乱数-招手_spr.png",
    ""+heros.staticURL+"images/hero/七实-风暴/七实-风暴-招手/七实-风暴-招手_spr.png",
    ""+heros.staticURL+"images/hero/七实-脉冲/七实-脉冲-招手/七实-脉冲-招手_spr.png",
    ""+heros.staticURL+"images/hero/神威-重能/神威-重能-招手/神威-重能-招手_spr.png",
    ""+heros.staticURL+"images/hero/神威-暗能/神威-暗能-招手/神威-暗能-招手_spr.png",
    ""+heros.staticURL+"images/hero/渡边-夜刃/渡边-夜刃-招手/渡边-夜刃-招手_spr.png",
    ""+heros.staticURL+"images/hero/渡边-夙星/渡边-夙星-招手/渡边-夙星-招手_spr.png",
    ""+heros.staticURL+"images/hero/比安卡-真理/比安卡-真理-招手/比安卡-真理-招手_spr.png",
    ""+heros.staticURL+"images/hero/比安卡-零度/比安卡-零度-招手/比安卡-零度-招手_spr.png",
    ""+heros.staticURL+"images/hero/卡列-爆裂/卡列-爆裂-招手/卡列-爆裂-招手_spr.png",
    ""+heros.staticURL+"images/hero/卡列-烬燃/卡列-烬燃-招手/卡列-烬燃-招手_spr.png",
    ""+heros.staticURL+"images/hero/露西亚-深红之渊/露西亚-深红之渊-招手/露西亚-深红之渊-招手_spr.png",
    ""+heros.staticURL+"images/hero/艾拉-溢彩/艾拉-溢彩-招手/艾拉-溢彩-招手_spr.png",
    ""+heros.staticURL+"images/hero/苏菲亚-银牙/苏菲亚-招手/苏菲亚-银牙-招手_spr.png",
    ""+heros.staticURL+"images/hero/库洛姆-弧光/库洛姆-弧光-招手/库洛姆-弧光-招手_spr.png",
    ""+heros.staticURL+"images/hero/卡穆-狂犬/卡穆-狂犬-招手/卡穆-狂犬-招手_spr.png",
    ""+heros.staticURL+"images/hero/罗塞塔-凛冽/罗塞塔-招手/罗塞塔-凛冽-招手_spr.png",
    ""+heros.staticURL+"images/hero/曲-雀翎/曲-招手/曲-雀翎-招手_spr.png",
    ""+heros.staticURL+"images/hero/常羽-游麟/常宇-游麟-招手/常宇-游麟-招手_spr.png",
    ""+heros.staticURL+"images/hero/露娜-银冕/露娜-银冕-招手/露娜-银冕-招手_spr.png",
]

// 沮丧动作
let imgURL_sad = [
    ""+heros.staticURL+"images/hero/露西亚-红莲/露西亚-红莲-沮丧/露西亚-红莲-沮丧_spr.png",
    ""+heros.staticURL+"images/hero/露西亚-黎明/露西亚-黎明-沮丧/露西亚-黎明-沮丧_spr.png",
    ""+heros.staticURL+"images/hero/露西亚-鸦羽/露西亚-鸦羽-沮丧/露西亚-鸦羽-沮丧_spr.png",
    ""+heros.staticURL+"images/hero/丽芙-蚀暗/丽芙-蚀暗-沮丧/丽芙-蚀暗-沮丧_spr.png",
    ""+heros.staticURL+"images/hero/丽芙-流光/丽芙-流光-沮丧/丽芙-流光-沮丧_spr.png",
    ""+heros.staticURL+"images/hero/丽芙-仰光/丽芙-仰光-沮丧/丽芙-仰光-沮丧_spr.png",
    ""+heros.staticURL+"images/hero/里-异火/里-异火-沮丧/里-异火-沮丧_spr.png",
    ""+heros.staticURL+"images/hero/里-乱数/里-乱数-沮丧/里-乱数-沮丧_spr.png",
    ""+heros.staticURL+"images/hero/七实-风暴/七实-风暴-沮丧/七实-风暴-沮丧_spr.png",
    ""+heros.staticURL+"images/hero/七实-脉冲/七实-脉冲-沮丧/七实-脉冲-沮丧_spr.png",
    ""+heros.staticURL+"images/hero/神威-重能/神威-重能-沮丧/神威-重能-沮丧_spr.png",
    ""+heros.staticURL+"images/hero/神威-暗能/神威-暗能-沮丧/神威-暗能-沮丧_spr.png",
    ""+heros.staticURL+"images/hero/渡边-夜刃/渡边-夜刃-沮丧/渡边-夜刃-沮丧_spr.png",
    ""+heros.staticURL+"images/hero/渡边-夙星/渡边-夙星-沮丧/渡边-夙星-沮丧_spr.png",
    ""+heros.staticURL+"images/hero/比安卡-真理/比安卡-真理-沮丧/比安卡-真理-沮丧_spr.png",
    ""+heros.staticURL+"images/hero/比安卡-零度/比安卡-零度-沮丧/比安卡-零度-沮丧_spr.png",
    ""+heros.staticURL+"images/hero/卡列-爆裂/卡列-爆裂-沮丧/卡列-爆裂-沮丧_spr.png",
    ""+heros.staticURL+"images/hero/卡列-烬燃/卡列-烬燃-沮丧/卡列-烬燃-沮丧_spr.png",
    ""+heros.staticURL+"images/hero/露西亚-深红之渊/露西亚-深红之渊-沮丧/露西亚-深红之渊-沮丧_spr.png",
    ""+heros.staticURL+"images/hero/艾拉-溢彩/艾拉-溢彩-沮丧/艾拉-溢彩-沮丧_spr.png",
    ""+heros.staticURL+"images/hero/苏菲亚-银牙/苏菲亚-沮丧/苏菲亚-银牙-沮丧_spr.png",
    ""+heros.staticURL+"images/hero/库洛姆-弧光/库洛姆-弧光-沮丧/库洛姆-弧光-沮丧_spr.png",
    ""+heros.staticURL+"images/hero/卡穆-狂犬/卡穆-狂犬-沮丧/卡穆-狂犬-沮丧_spr.png",
    ""+heros.staticURL+"images/hero/罗塞塔-凛冽/罗塞塔-沮丧/罗塞塔-凛冽-沮丧_spr.png",
    ""+heros.staticURL+"images/hero/曲-雀翎/曲-沮丧/曲-雀翎-沮丧_spr.png",
    ""+heros.staticURL+"images/hero/常羽-游麟/常宇-游麟-沮丧/常宇-游麟-沮丧_spr.png",
    ""+heros.staticURL+"images/hero/露娜-银冕/露娜-银冕-沮丧/露娜-银冕-沮丧_spr.png",
]

//加载图像，加载完成后执行setup函数
PIXI.loader
    .add(imgURL_pao)
    .add(imgURL_bye)
    .add(imgURL_sad)
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


function setup() {

    // 加载完毕
    $('.loading').hide();
    $('.txt01').removeClass('hide').addClass('animate__animated  animate__fadeIn');

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
    // let lxyHlPao = su.filmstrip(imgURL_pao[0], 280, 280);
    // 丽芙蚀暗纹理
    // let lfAsPao = su.filmstrip(imgURL_pao[1], 280, 280);
    // //里 异火纹理
    // let liYhPao = su.filmstrip(imgURL_pao[2], 280, 280);
    // //渡边 夜刃纹理
    // let dbYerenPao = su.filmstrip(imgURL_pao[3], 280, 280);
    // // 神威 重能纹理
    // let swZnPao = su.filmstrip(imgURL_pao[4], 280, 280);
    // //七实 风暴
    // let qsFbPao = su.filmstrip(imgURL_pao[5], 280, 280);
    // // 卡列尼娜 爆裂
    // let klnnBlPao = su.filmstrip(imgURL_pao[6], 280, 280);
    // // 比安卡零度纹理
    // let bakLdPao = su.filmstrip(imgURL_pao[7], 280, 280);

    //创建动画精灵
    heros.pixi_lxy_hl = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_pao[0], 280, 280)); // 露西亚红莲跑
    heros.pixi_lf_as = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_pao[1], 280, 280)); // 丽芙蚀暗跑
    heros.pixi_li_yh = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_pao[2], 280, 280)); // 里 异火跑
    heros.pixi_db_yr = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_pao[3], 280, 280)); // 渡边 夜刃跑
    heros.pixi_sw_zn = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_pao[4], 280, 280)); // 神威 重能跑
    heros.pixi_qs_fb = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_pao[5], 280, 280)); // 七实 风暴跑
    heros.pixi_klnn_bl = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_pao[6], 280, 280)); // 卡列尼娜 爆裂跑
    heros.pixi_bak_ld = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_pao[7], 280, 280)); // 比安卡零度跑

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