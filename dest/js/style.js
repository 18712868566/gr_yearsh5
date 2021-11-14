function onStageClick() {
    showText_animate(heros.touchNum), 31 == heros.touchNum ? heros.touchNum = 31 : heros.touchNum = heros.touchNum + 1;
}

$(function() {
    $(document).on("click", "#alertInfo .close,.close,.confirm,.pop-comm .pop_close,.pop_close_maskLayer,.pop_sjz", dialog.closeDiv), 
    gloScale(), $(".btn_gz").on("click", function(e) {
        e.preventDefault(), dialog.alertPopHDGZ();
    }), $(".btn_lott").on("click", function(e) {
        e.preventDefault(), dialog.alertPopHDGZ_yh();
    }), $(document).on("click", ".page2_footer_btns .btn_top", function(e) {
        e.preventDefault(), layer.msg("返回主界面 - 重置页面状态");
    }), $(document).on("click", ".page2_footer_btns .btn_share", function(e) {
        e.preventDefault(), layer.msg("生成分享截图 html2Canvas");
    });
});

var snow = new $Snow({
    zIndex: 2
});

function flower() {
    snow.stop(), snow = new $Snow({
        opacity: .8,
        speed: 10,
        randombase: 1e3,
        num: 8,
        offset: !1,
        isOffsetOnTouch: !1,
        img: !0,
        imgurl: "../images/icon_hua.png",
        maxImgSize: 16,
        isPause: !1,
        css: {
            animation: "rotate 3s linear infinite"
        },
        zIndex: 2
    });
}

function luoye() {
    snow.stop(), snow = new $Snow({
        opacity: 1,
        speed: 10,
        randombase: 1e3,
        num: 8,
        offset: !1,
        isOffsetOnTouch: !1,
        img: !0,
        imgurl: "../images/icon_ye.png",
        maxImgSize: 16,
        isPause: !1,
        css: {
            animation: "rotate 3s linear infinite"
        },
        zIndex: 2
    });
}

function snowDown() {
    snow.stop(), snow = new $Snow({
        opacity: 1,
        speed: 10,
        randombase: 1e3,
        num: 8,
        offset: !1,
        isOffsetOnTouch: !1,
        img: !0,
        imgurl: "../images/icon_snow.png",
        maxImgSize: 16,
        isPause: !1,
        css: {
            animation: "rotate 3s linear infinite"
        },
        zIndex: 2
    });
}

function closeSky() {
    snow.stop();
}

function gameLoop(e, i) {
    350 <= e.x ? (e.vx = 0, e.visible = !1) : e.vx = 2, e.x += e.vx;
}

function gameLoopLeft(e, i, s, r) {
    e.x >= $(window).width() / 2 ? (e.vx = 0, setTimeout(function() {
        e.visible = !1, i.visible = !0;
    }, s)) : e.vx = 3, e.x += e.vx;
}

function gameLoopTop(e, i) {
    e.vy = -1, e.y += e.vy;
}

function showText_animate(e) {
    if (31 == e) return !1;
    $(".txt0" + e).addClass("animate__animated  animate__fadeOut").siblings("p").addClass("animate__animated  animate__fadeOut"), 
    $(".txt0" + (e + 1)).removeClass("hide animate__fadeOut").addClass("animate__animated  animate__fadeIn"), 
    3 == heros.touchNum && (heros.app.ticker.add(function(e) {
        return gameLoop(heros.pixi_lxy_hl, e);
    }), heros.pixi_lf_as_mbye.visible = !0, heros.pixi_lf_as_mbye.stop(), heros.pixi_lf_as_mbye.x = 35, 
    heros.pixi_lf_as_mbye.gotoAndPlay(0), heros.app.ticker.add(function(e) {
        return gameLoopLeft(heros.pixi_lf_as_mbye, heros.pixi_lf_as, 2100, e);
    })), 6 == heros.touchNum && (heros.app.ticker.add(function(e) {
        return gameLoop(heros.pixi_lf_as, e);
    }), heros.pixi_li_yh_mbye.visible = !0, heros.pixi_li_yh_mbye.stop(), heros.pixi_li_yh_mbye.x = 35, 
    heros.pixi_li_yh_mbye.gotoAndPlay(0), heros.app.ticker.add(function(e) {
        return gameLoopLeft(heros.pixi_li_yh_mbye, heros.pixi_li_yh, 2100, e);
    })), 9 == heros.touchNum && (heros.app.ticker.add(function(e) {
        return gameLoop(heros.pixi_li_yh, e);
    }), heros.pixi_db_yr_mbye.visible = !0, heros.pixi_db_yr_mbye.stop(), heros.pixi_db_yr_mbye.x = 35, 
    heros.pixi_db_yr_mbye.gotoAndPlay(0), heros.app.ticker.add(function(e) {
        return gameLoopLeft(heros.pixi_db_yr_mbye, heros.pixi_db_yr, 2e3, e);
    })), 12 == heros.touchNum && (heros.app.ticker.add(function(e) {
        return gameLoop(heros.pixi_db_yr, e);
    }), heros.pixi_sw_zn_mbye.visible = !0, heros.pixi_sw_zn_mbye.stop(), heros.pixi_sw_zn_mbye.x = 35, 
    heros.pixi_sw_zn_mbye.gotoAndPlay(0), heros.app.ticker.add(function(e) {
        return gameLoopLeft(heros.pixi_sw_zn_mbye, heros.pixi_sw_zn, 2e3, e);
    })), 15 == heros.touchNum && (heros.app.ticker.add(function(e) {
        return gameLoop(heros.pixi_sw_zn, e);
    }), heros.pixi_qs_fb_mbye.visible = !0, heros.pixi_qs_fb_mbye.stop(), heros.pixi_qs_fb_mbye.x = 35, 
    heros.pixi_qs_fb_mbye.gotoAndPlay(0), heros.app.ticker.add(function(e) {
        return gameLoopLeft(heros.pixi_qs_fb_mbye, heros.pixi_qs_fb, 1500, e);
    }), gsap.fromTo(".ball_cun", {
        opacity: 1
    }, {
        opacity: 0,
        duration: 1
    }), gsap.fromTo(".ball_qiu", {
        opacity: 0
    }, {
        opacity: 1,
        duration: 1
    }), luoye()), 18 == heros.touchNum && (heros.app.ticker.add(function(e) {
        return gameLoop(heros.pixi_qs_fb, e);
    }), heros.pixi_klnn_bl_mbye.visible = !0, heros.pixi_klnn_bl_mbye.stop(), heros.pixi_klnn_bl_mbye.x = 35, 
    heros.pixi_klnn_bl_mbye.gotoAndPlay(0), heros.app.ticker.add(function(e) {
        return gameLoopLeft(heros.pixi_klnn_bl_mbye, heros.pixi_klnn_bl, 2e3, e);
    })), 21 == heros.touchNum && (heros.app.ticker.add(function(e) {
        return gameLoop(heros.pixi_klnn_bl, e);
    }), heros.pixi_bak_ld_mbye.visible = !0, heros.pixi_bak_ld_mbye.stop(), heros.pixi_bak_ld_mbye.x = 35, 
    heros.pixi_bak_ld_mbye.gotoAndPlay(0), heros.app.ticker.add(function(e) {
        return gameLoopLeft(heros.pixi_bak_ld_mbye, heros.pixi_bak_ld, 2e3, e);
    })), 24 == heros.touchNum && (gsap.fromTo(".ball_qiu", {
        opacity: 1
    }, {
        opacity: 0,
        duration: 1
    }), gsap.fromTo(".ball_dong", {
        opacity: 0
    }, {
        opacity: 1,
        duration: 1
    }), snowDown(), heros.pixi_bak_ld.stop(), heros.app.stage.removeChild(heros.pixi_bak_ld), 
    hideAllSpr(heros.heroArrs), 1 != heros.touchMoreId && 2 != heros.touchMoreId && 3 != heros.touchMoreId || ($(".txt025").html(touchHeroTopMore.lxy.speak1), 
    $(".txt026").html(touchHeroTopMore.lxy.speak2), heros.pixi_lxy_hl_bye.visible = !0), 
    4 != heros.touchMoreId && 5 != heros.touchMoreId && 6 != heros.touchMoreId || ($(".txt025").html(touchHeroTopMore.lufu.speak1), 
    $(".txt026").html(touchHeroTopMore.lufu.speak1), heros.pixi_lf_lg_bye.visible = !0), 
    setSprPos(heros.heroArrs, "3"), $(".txt025").find("i").text(heros.touchMoreNumber)), 
    26 == heros.touchNum && (hideAllSpr(heros.heroArrs), 1 == heros.touchLessId && ($(".txt027").html(touchHeroTopLess.kamu.speak1), 
    $(".txt028").html(touchHeroTopLess.kamu.speak2), heros.pixi_km_kq_sad.visible = !0), 
    setSprPos(heros.heroArrs, "3"), $(".txt027").find("i").text(heros.touchLessNumber)), 
    28 == heros.touchNum && (hideAllSpr(heros.heroArrs), 1 == heros.goPlayId && ($(".txt029").html(touchHeroGoPlay.alpha.speak1), 
    $(".txt030").html(touchHeroGoPlay.alpha.speak2), heros.pixi_alpha_bye.visible = !0), 
    setSprPos(heros.heroArrs, "3"), $(".txt029").find("i").text(heros.goPlayNumber)), 
    30 == heros.touchNum && (hideAllSpr(heros.heroArrs), snow.stop(), heros.pixi_lxy_hl_bye.visible = !0, 
    $(".ball_dong,.rotate_ball").hide(), gsap.fromTo(".page2 .txtYun", {
        opacity: 0
    }, {
        top: "0rem",
        opacity: 1,
        duration: 1.5
    }), setSprPos(heros.heroArrs, "3"), $(".page2 .top_qizi").show().addClass("animate__animated  animate__fadeInDown"), 
    $(".page2_footer_btns").show().addClass("animate__animated  animate__fadeInUp"), 
    $(".page2").addClass("page2_end"));
}

function loadProgressHandler(e, i) {
    e = Math.round(e.progress);
    $(".progress_wrap .progress_cc .progress").css({
        width: e + "%"
    });
}

function setup() {
    $(".loading").hide(), $(".page1").fadeIn("slow"), $(".page1 .top_qizi").addClass("animate__animated  animate__fadeInDown"), 
    $(".page1 .chsets").addClass("animate__animated  animate__zoomIn"), $(".page1 .page1_footer_btns").addClass("animate__animated  animate__fadeInUp"), 
    gsap.fromTo(".page1 .logo", {
        opacity: 0,
        width: "5.18rem",
        height: "2.12rem",
        top: "0.7rem"
    }, {
        opacity: 1,
        width: "6.88rem",
        height: "2.92rem",
        top: "7.2rem",
        duration: 1
    }), gsap.fromTo(".ball_cun", {
        opacity: 0
    }, {
        opacity: 1,
        duration: 1
    }), $(".txt01").removeClass("hide").addClass("animate__animated  animate__fadeIn");
    PIXI.utils.TextureCache, PIXI.Texture, PIXI.Rectangle, PIXI.extras.AnimatedSprite;
    var e = {
        width: heros.loading_hero_w,
        height: heros.loading_hero_h,
        transparent: !0,
        antialias: !0,
        resolution: 1
    };
    heros.app = new PIXI.Application(e), heros.app.stage.interactive = !0, heros.app.renderer.plugins.interaction.on("pointerdown", onStageClick), 
    heros.app.renderer.autoResize = !0, heros.app.renderer.resize(window.innerWidth, window.innerHeight);
    e = heros.app.renderer;
    e.autoResize = !0, document.getElementById("loading_hero").appendChild(e.view), 
    createPIXISpr(), heros.pixi_lxy_hl.visible = !0;
}

function createPIXISpr() {
    var e = new SpriteUtilities(PIXI);
    heros.pixi_lxy_hl = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_pao[0], 280, 280)), 
    heros.pixi_lf_as = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_pao[1], 280, 280)), 
    heros.pixi_li_yh = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_pao[2], 280, 280)), 
    heros.pixi_db_yr = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_pao[3], 280, 280)), 
    heros.pixi_sw_zn = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_pao[4], 280, 280)), 
    heros.pixi_qs_fb = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_pao[5], 280, 280)), 
    heros.pixi_klnn_bl = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_pao[6], 280, 280)), 
    heros.pixi_bak_ld = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_pao[7], 280, 280)), 
    heros.pixi_lf_as_mbye = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_move[0], 280, 280)), 
    heros.pixi_li_yh_mbye = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_move[1], 280, 280)), 
    heros.pixi_db_yr_mbye = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_move[2], 280, 280)), 
    heros.pixi_sw_zn_mbye = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_move[3], 280, 280)), 
    heros.pixi_qs_fb_mbye = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_move[4], 280, 280)), 
    heros.pixi_klnn_bl_mbye = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_move[5], 280, 280)), 
    heros.pixi_bak_ld_mbye = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_move[6], 280, 280)), 
    heros.pixi_lxy_hl_bye = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_bye[0], 280, 280)), 
    heros.pixi_lxy_lm_bye = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_bye[1], 280, 280)), 
    heros.pixi_lxy_yy_bye = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_bye[2], 280, 280)), 
    heros.pixi_lf_as_bye = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_bye[3], 280, 280)), 
    heros.pixi_lf_lg_bye = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_bye[4], 280, 280)), 
    heros.pixi_lf_yg_bye = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_bye[5], 280, 280)), 
    heros.pixi_li_yh_bye = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_bye[6], 280, 280)), 
    heros.pixi_li_ls_bye = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_bye[7], 280, 280)), 
    heros.pixi_qs_fb_bye = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_bye[8], 280, 280)), 
    heros.pixi_qs_mc_bye = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_bye[9], 280, 280)), 
    heros.pixi_sw_zn_bye = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_bye[10], 280, 280)), 
    heros.pixi_sw_an_bye = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_bye[11], 280, 280)), 
    heros.pixi_db_yr_bye = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_bye[12], 280, 280)), 
    heros.pixi_db_sx_bye = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_bye[13], 280, 280)), 
    heros.pixi_bak_zl_bye = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_bye[14], 280, 280)), 
    heros.pixi_bak_ld_bye = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_bye[15], 280, 280)), 
    heros.pixi_kl_bl_bye = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_bye[16], 280, 280)), 
    heros.pixi_kl_rj_bye = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_bye[17], 280, 280)), 
    heros.pixi_alpha_bye = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_bye[18], 280, 280)), 
    heros.pixi_al_yc_bye = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_bye[19], 280, 280)), 
    heros.pixi_sfy_yy_bye = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_bye[20], 280, 280)), 
    heros.pixi_klm_hg_bye = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_bye[21], 280, 280)), 
    heros.pixi_km_kq_bye = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_bye[22], 280, 280)), 
    heros.pixi_lst_ll_bye = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_bye[23], 280, 280)), 
    heros.pixi_qu_ql_bye = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_bye[24], 280, 280)), 
    heros.pixi_cy_yl_bye = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_bye[25], 280, 280)), 
    heros.pixi_ln_ym_bye = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_bye[26], 280, 280)), 
    heros.pixi_lxy_hl_sad = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_sad[0], 280, 280)), 
    heros.pixi_lxy_lm_sad = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_sad[1], 280, 280)), 
    heros.pixi_lxy_yy_sad = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_sad[2], 280, 280)), 
    heros.pixi_lf_as_sad = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_sad[3], 280, 280)), 
    heros.pixi_lf_lg_sad = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_sad[4], 280, 280)), 
    heros.pixi_lf_yg_sad = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_sad[5], 280, 280)), 
    heros.pixi_li_yh_sad = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_sad[6], 280, 280)), 
    heros.pixi_li_ls_sad = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_sad[7], 280, 280)), 
    heros.pixi_qs_fb_sad = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_sad[8], 280, 280)), 
    heros.pixi_qs_mc_sad = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_sad[9], 280, 280)), 
    heros.pixi_sw_zn_sad = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_sad[10], 280, 280)), 
    heros.pixi_sw_an_sad = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_sad[11], 280, 280)), 
    heros.pixi_db_yr_sad = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_sad[12], 280, 280)), 
    heros.pixi_db_sx_sad = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_sad[13], 280, 280)), 
    heros.pixi_bak_zl_sad = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_sad[14], 280, 280)), 
    heros.pixi_bak_ld_sad = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_sad[15], 280, 280)), 
    heros.pixi_kl_bl_sad = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_sad[16], 280, 280)), 
    heros.pixi_kl_rj_sad = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_sad[17], 280, 280)), 
    heros.pixi_alpha_sad = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_sad[18], 280, 280)), 
    heros.pixi_al_yc_sad = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_sad[19], 280, 280)), 
    heros.pixi_sfy_yy_sad = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_sad[20], 280, 280)), 
    heros.pixi_klm_hg_sad = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_sad[21], 280, 280)), 
    heros.pixi_km_kq_sad = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_sad[22], 280, 280)), 
    heros.pixi_lst_ll_sad = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_sad[23], 280, 280)), 
    heros.pixi_qu_ql_sad = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_sad[24], 280, 280)), 
    heros.pixi_cy_yl_sad = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_sad[25], 280, 280)), 
    heros.pixi_ln_ym_sad = new PIXI.extras.AnimatedSprite(e.filmstrip(imgURL_sad[26], 280, 280)), 
    heros.heroArrs = [ heros.pixi_lxy_hl, heros.pixi_lf_as, heros.pixi_li_yh, heros.pixi_db_yr, heros.pixi_sw_zn, heros.pixi_qs_fb, heros.pixi_klnn_bl, heros.pixi_bak_ld, heros.pixi_lxy_hl_bye, heros.pixi_lxy_lm_bye, heros.pixi_lxy_yy_bye, heros.pixi_lf_as_bye, heros.pixi_lf_lg_bye, heros.pixi_lf_yg_bye, heros.pixi_li_yh_bye, heros.pixi_li_ls_bye, heros.pixi_qs_fb_bye, heros.pixi_qs_mc_bye, heros.pixi_sw_zn_bye, heros.pixi_sw_an_bye, heros.pixi_db_yr_bye, heros.pixi_db_sx_bye, heros.pixi_bak_zl_bye, heros.pixi_bak_ld_bye, heros.pixi_kl_bl_bye, heros.pixi_kl_rj_bye, heros.pixi_alpha_bye, heros.pixi_al_yc_bye, heros.pixi_sfy_yy_bye, heros.pixi_klm_hg_bye, heros.pixi_km_kq_bye, heros.pixi_lst_ll_bye, heros.pixi_qu_ql_bye, heros.pixi_cy_yl_bye, heros.pixi_ln_ym_bye, heros.pixi_lxy_hl_sad, heros.pixi_lxy_lm_sad, heros.pixi_lxy_yy_sad, heros.pixi_lf_as_sad, heros.pixi_lf_lg_sad, heros.pixi_lf_yg_sad, heros.pixi_li_yh_sad, heros.pixi_li_ls_sad, heros.pixi_qs_fb_sad, heros.pixi_qs_mc_sad, heros.pixi_sw_zn_sad, heros.pixi_sw_an_sad, heros.pixi_db_yr_sad, heros.pixi_db_sx_sad, heros.pixi_bak_zl_sad, heros.pixi_bak_ld_sad, heros.pixi_kl_bl_sad, heros.pixi_kl_rj_sad, heros.pixi_alpha_sad, heros.pixi_al_yc_sad, heros.pixi_sfy_yy_sad, heros.pixi_klm_hg_sad, heros.pixi_km_kq_sad, heros.pixi_lst_ll_sad, heros.pixi_qu_ql_sad, heros.pixi_cy_yl_sad, heros.pixi_ln_ym_sad, heros.pixi_lf_as_mbye, heros.pixi_li_yh_mbye, heros.pixi_db_yr_mbye, heros.pixi_sw_zn_mbye, heros.pixi_qs_fb_mbye, heros.pixi_klnn_bl_mbye, heros.pixi_bak_ld_mbye ], 
    setSprAttr(heros.heroArrs);
}

function setSprAttr(e) {
    for (var i = 0; i < e.length; i++) e[i].visible = !1, e[i].width = 280, e[i].height = 280, 
    e[i].animationSpeed = .15, e[i].anchor.x = .5, e[i].anchor.y = .5, e[i].x = heros.loading_hero_w / 2, 
    e[i].y = heros.loading_hero_h - 70, e[i].scale.x = heros.loading_hero_w / 750, e[i].scale.y = heros.loading_hero_w / 750, 
    heros.app.stage.addChild(e[i]), e[i].play();
}

function setSprPos(e, i) {
    for (var s = 0; s < e.length; s++) e[s].y = heros.loading_hero_h - heros.loading_hero_h / i;
}

function hideAllSpr(e) {
    for (var i = 0; i < e.length; i++) e[i].visible = !1;
}

function resizeSpr(e) {
    heros.loading_hero_w = window.innerWidth, heros.loading_hero_h = window.innerHeight, 
    heros.app.renderer.resize(heros.loading_hero_w, heros.loading_hero_h);
    for (var i = 0; i < e.length; i++) e[i].x = heros.loading_hero_w / 2, e[i].y = heros.loading_hero_h - 70, 
    e[i].scale.x = heros.loading_hero_w / 750, e[i].scale.y = heros.loading_hero_w / 750;
}

function gloScale() {
    var e = 2 * $(window).height() / 1334;
    1 < e && (e = 1), $(".glo-scale").css({
        transform: " scale(" + e + ")"
    });
}

PIXI.loader.add(imgURL_pao).add(imgURL_bye).add(imgURL_sad).add(imgURL_move).on("progress", loadProgressHandler).load(setup), 
$(window).resize(function() {
    gloScale(), resizeSpr(heros.heroArrs);
});