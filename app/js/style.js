/*
 * @Author: A
 * @Date:   2021-06-30 14:08:32
 * @Last Modified by:   A
 * @Last Modified time: 2021-11-15 17:44:26
 */
$(function() {

    //关闭
    $(document).on("click", "#alertInfo .close,.close,.confirm,.pop-comm .pop_close,.pop_close_maskLayer,.pop_sjz", dialog.closeDiv);

    // 初始化缩放比例
    gloScale();

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

    // 返回主界面 - 重置页面状态
    $(document).on('click', '.page2_footer_btns .btn_top', function(event) {
        event.preventDefault();
        layer.msg('返回主界面 - 重置页面状态');
    });

    //生成分享图
    $(document).on('click', '.page2_footer_btns .btn_share', function(event) {
        event.preventDefault();
        layer.msg('生成分享截图 html2Canvas');
    });
});

// 整体添加点击事件-切换场景
function onStageClick() {
    console.log(heros.touchNum)
    showText_animate(heros.touchNum);

    if (heros.touchNum == 31) {
        heros.touchNum = 31;
    } else {
        heros.touchNum = heros.touchNum + 1;
    }
}

// 场景动画 // 初始化天气场景
var snow = new $Snow({
    zIndex: 2
});
// 落花
function flower() {
    snow.stop();
    snow = new $Snow({
        opacity: 0.8,
        speed: 10,
        randombase: 1000,
        num: 8,
        offset: false,
        isOffsetOnTouch: false,
        img: true,
        imgurl: '../images/icon_hua.png',
        maxImgSize: 16,
        isPause: false,
        css: {
            animation: 'rotate 3s linear infinite'
        },
        zIndex: 2
    });
};
// 落叶
function luoye() {
    snow.stop();
    snow = new $Snow({
        opacity: 1,
        speed: 10,
        randombase: 1000,
        num: 8,
        offset: false,
        isOffsetOnTouch: false,
        img: true,
        imgurl: '../images/icon_ye.png',
        maxImgSize: 16,
        isPause: false,
        css: {
            animation: 'rotate 3s linear infinite'
        },
        zIndex: 2
    });
};
// 下雪
function snowDown() {
    snow.stop();
    snow = new $Snow({
        opacity: 1,
        speed: 10,
        randombase: 1000,
        num: 8,
        offset: false,
        isOffsetOnTouch: false,
        img: true,
        imgurl: '../images/icon_snow.png',
        maxImgSize: 16,
        isPause: false,
        css: {
            animation: 'rotate 3s linear infinite'
        },
        zIndex: 2
    });
};
// 关闭天气场景
function closeSky() {
    snow.stop();
}

// 后退-消失
function gameLoop(spr, delta) {
    //Update the cat's velocity
    if (spr.x >= 350) {
        spr.vx = 0;
        // console.log(spr.totalFrames)
        // spr.gotoAndStop(0);
        spr.visible = false;
    } else {
        spr.vx = 2;
    }
    // spr.vy = 1;
    //Apply the velocity values to the cat's
    //position to make it move
    spr.x += spr.vx;
    // console.log(spr.x)
    // spr.y += spr.vy;
}
// 前进 - 打招呼
function gameLoopLeft(spr, spr2, time, delta) {
    if (spr.x >= $(window).width() / 2) {
        spr.vx = 0;
        // spr.vy = 0;
        setTimeout(function() {
            spr.visible = false;
            spr2.visible = true;
        }, time)
    } else {
        spr.vx = 3;
        // spr.vy = -1;
    }
    spr.x += spr.vx;
    // spr.y += spr.vy;
}

// 向上 - 固定位置
function gameLoopTop(spr, delta) {
    spr.vy = -1;
    spr.y += spr.vy;
}

// 根据点击次数 展示内容和 切换任务动画
function showText_animate(touchNum) {
    if (touchNum == 31) return false;
    // body...
    $(`.txt0${touchNum}`).addClass('animate__animated  animate__fadeOut').siblings('p').addClass('animate__animated  animate__fadeOut');
    $(`.txt0${touchNum+1}`).removeClass('hide animate__fadeOut').addClass('animate__animated  animate__fadeIn');


    /**********************切换动画小人**************************/
    // 切换到丽芙暗蚀
    if (heros.touchNum == 3) {
        // heros.pixi_lxy_hl.visible = false;
        // heros.pixi_lf_as.visible = true;
        heros.app.ticker.add(delta => gameLoop(heros.pixi_lxy_hl, delta));
        heros.pixi_lf_as_mbye.visible = true;
        heros.pixi_lf_as_mbye.stop();
        heros.pixi_lf_as_mbye.x = 35;
        heros.pixi_lf_as_mbye.gotoAndPlay(0);

        heros.app.ticker.add(delta => gameLoopLeft(heros.pixi_lf_as_mbye, heros.pixi_lf_as, 2100, delta));
    }
    // 切换到里 异火
    if (heros.touchNum == 6) {
        // heros.pixi_lf_as.visible = false;
        // heros.pixi_li_yh.visible = true;

        heros.app.ticker.add(delta => gameLoop(heros.pixi_lf_as, delta));
        heros.pixi_li_yh_mbye.visible = true;
        heros.pixi_li_yh_mbye.stop();
        heros.pixi_li_yh_mbye.x = 35;
        heros.pixi_li_yh_mbye.gotoAndPlay(0);

        heros.app.ticker.add(delta => gameLoopLeft(heros.pixi_li_yh_mbye, heros.pixi_li_yh, 2100, delta));
    }
    // 切换到 渡边 夜刃
    if (heros.touchNum == 9) {
        // heros.pixi_li_yh.visible = false;
        // heros.pixi_db_yr.visible = true;

        heros.app.ticker.add(delta => gameLoop(heros.pixi_li_yh, delta));
        heros.pixi_db_yr_mbye.visible = true;
        heros.pixi_db_yr_mbye.stop();
        heros.pixi_db_yr_mbye.x = 35;
        heros.pixi_db_yr_mbye.gotoAndPlay(0);

        heros.app.ticker.add(delta => gameLoopLeft(heros.pixi_db_yr_mbye, heros.pixi_db_yr, 2000, delta));
    }
    // 切换到 神威 重能
    if (heros.touchNum == 12) {
        // heros.pixi_db_yr.visible = false;
        // heros.pixi_sw_zn.visible = true;

        heros.app.ticker.add(delta => gameLoop(heros.pixi_db_yr, delta));
        heros.pixi_sw_zn_mbye.visible = true;
        heros.pixi_sw_zn_mbye.stop();
        heros.pixi_sw_zn_mbye.x = 35;
        heros.pixi_sw_zn_mbye.gotoAndPlay(0);

        heros.app.ticker.add(delta => gameLoopLeft(heros.pixi_sw_zn_mbye, heros.pixi_sw_zn, 2000, delta));
    }
    // 切换到七实 风暴
    if (heros.touchNum == 15) {
        // heros.pixi_sw_zn.visible = false;
        // heros.pixi_qs_fb.visible = true;

        heros.app.ticker.add(delta => gameLoop(heros.pixi_sw_zn, delta));
        heros.pixi_qs_fb_mbye.visible = true;
        heros.pixi_qs_fb_mbye.stop();
        heros.pixi_qs_fb_mbye.x = 35;
        heros.pixi_qs_fb_mbye.gotoAndPlay(0);

        heros.app.ticker.add(delta => gameLoopLeft(heros.pixi_qs_fb_mbye, heros.pixi_qs_fb, 1500, delta));

        // 变换场景
        gsap.fromTo(".ball_cun", {
            opacity: 1,
        }, {
            opacity: 0,
            duration: 1
        });

        gsap.fromTo(".ball_qiu", {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 1
        });
        // 秋天
        luoye()
    }
    // 切换到卡列尼娜 爆裂
    if (heros.touchNum == 18) {
        // heros.pixi_qs_fb.visible = false;
        // heros.pixi_klnn_bl.visible = true;

        heros.app.ticker.add(delta => gameLoop(heros.pixi_qs_fb, delta));
        heros.pixi_klnn_bl_mbye.visible = true;
        heros.pixi_klnn_bl_mbye.stop();
        heros.pixi_klnn_bl_mbye.x = 35;
        heros.pixi_klnn_bl_mbye.gotoAndPlay(0);

        heros.app.ticker.add(delta => gameLoopLeft(heros.pixi_klnn_bl_mbye, heros.pixi_klnn_bl, 2000, delta));
    }
    // 切换到比安卡零度
    if (heros.touchNum == 21) {
        // heros.pixi_klnn_bl.visible = false;
        // heros.pixi_bak_ld.visible = true;

        heros.app.ticker.add(delta => gameLoop(heros.pixi_klnn_bl, delta));
        heros.pixi_bak_ld_mbye.visible = true;
        heros.pixi_bak_ld_mbye.stop();
        heros.pixi_bak_ld_mbye.x = 35;
        heros.pixi_bak_ld_mbye.gotoAndPlay(0);

        heros.app.ticker.add(delta => gameLoopLeft(heros.pixi_bak_ld_mbye, heros.pixi_bak_ld, 2000, delta));
    }
    /**********************切换动画小人end**************************/

    // 摸头最多
    if (heros.touchNum == 24) {

        // 变换场景
        gsap.fromTo(".ball_qiu", {
            opacity: 1,
        }, {
            opacity: 0,
            duration: 1
        });

        gsap.fromTo(".ball_dong", {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 1
        });
        // 关闭天气
        snowDown();

        heros.pixi_bak_ld.stop();
        heros.app.stage.removeChild(heros.pixi_bak_ld)

        // 隐藏全部精灵
        hideAllSpr(heros.heroArrs);


        // 根据接口返回的id, 对比本地映射插入页面

        // 露西亚 红莲or黎明or鸦羽
        if (heros.maxcaress_character_id == 1 || heros.maxcaress_character_id == 2 || heros.maxcaress_character_id == 3) {
            $('.txt025').html(touchHeroTopMore.lxy.speak1)
            $('.txt026').html(touchHeroTopMore.lxy.speak2)
            // 根据id 展示对应精灵
            if (heros.maxcaress_character_id == 1) {
                heros.pixi_lxy_hl_bye.visible = true;
            }
            if (heros.maxcaress_character_id == 2) {
                heros.pixi_lxy_lm_bye.visible = true;
            }
            if (heros.maxcaress_character_id == 3) {
                heros.pixi_lxy_yy_bye.visible = true;
            }
        }

        // 丽芙 蝕暗 or 流光 or 仰光
        if (heros.maxcaress_character_id == 4 || heros.maxcaress_character_id == 5 || heros.maxcaress_character_id == 6) {
            $('.txt025').html(touchHeroTopMore.lufu.speak1)
            $('.txt026').html(touchHeroTopMore.lufu.speak2)
            // 根据id 展示对应精灵
            if (heros.maxcaress_character_id == 4) {
                heros.pixi_lf_as_bye.visible = true;
            }
            if (heros.maxcaress_character_id == 5) {
                heros.pixi_lf_lg_bye.visible = true;
            }
            if (heros.maxcaress_character_id == 6) {
                heros.pixi_lf_yg_bye.visible = true;
            }
        }

        //里 异火 or 乱数
        if (heros.maxcaress_character_id == 7 || heros.maxcaress_character_id == 8) {
            $('.txt025').html(touchHeroTopMore.li.speak1)
            $('.txt026').html(touchHeroTopMore.li.speak2)
            // 根据id 展示对应精灵
            if (heros.maxcaress_character_id == 7) {
                heros.pixi_li_yh_bye.visible = true;
            }
            if (heros.maxcaress_character_id == 8) {
                heros.pixi_li_ls_bye.visible = true;
            }
        }

        //七实 风暴 or 脉冲
        if (heros.maxcaress_character_id == 9 || heros.maxcaress_character_id == 10) {
            $('.txt025').html(touchHeroTopMore.qishi.speak1)
            $('.txt026').html(touchHeroTopMore.qishi.speak2)
            // 根据id 展示对应精灵
            if (heros.maxcaress_character_id == 9) {
                heros.pixi_qs_fb_bye.visible = true;
            }
            if (heros.maxcaress_character_id == 10) {
                heros.pixi_qs_mc_bye.visible = true;
            }
        }
        // 神威 重能  or 暗能
        if (heros.maxcaress_character_id == 11 || heros.maxcaress_character_id == 12) {
            $('.txt025').html(touchHeroTopMore.shenwei.speak1)
            $('.txt026').html(touchHeroTopMore.shenwei.speak2)
            // 根据id 展示对应精灵
            if (heros.maxcaress_character_id == 11) {
                heros.pixi_sw_zn_bye.visible = true;
            }
            if (heros.maxcaress_character_id == 12) {
                heros.pixi_sw_an_bye.visible = true;
            }
        }

        // 渡边 夜刃  or 夙星
        if (heros.maxcaress_character_id == 13 || heros.maxcaress_character_id == 14) {
            $('.txt025').html(touchHeroTopMore.dubian.speak1)
            $('.txt026').html(touchHeroTopMore.dubian.speak2)
            // 根据id 展示对应精灵
            if (heros.maxcaress_character_id == 13) {
                heros.pixi_db_yr_bye.visible = true;
            }
            if (heros.maxcaress_character_id == 14) {
                heros.pixi_db_sx_bye.visible = true;
            }
        }

        // 比安卡 真理 or 零度
        if (heros.maxcaress_character_id == 15 || heros.maxcaress_character_id == 16) {
            $('.txt025').html(touchHeroTopMore.bianka.speak1)
            $('.txt026').html(touchHeroTopMore.bianka.speak2)
            // 根据id 展示对应精灵
            if (heros.maxcaress_character_id == 15) {
                heros.pixi_bak_zl_bye.visible = true;
            }
            if (heros.maxcaress_character_id == 16) {
                heros.pixi_bak_ld_bye.visible = true;
            }
        }

        // 卡列尼娜 爆裂 or 烬燃
        if (heros.maxcaress_character_id == 17 || heros.maxcaress_character_id == 18) {
            $('.txt025').html(touchHeroTopMore.klnn.speak1)
            $('.txt026').html(touchHeroTopMore.klnn.speak2)
            // 根据id 展示对应精灵
            if (heros.maxcaress_character_id == 15) {
                heros.pixi_kl_bl_bye.visible = true;
            }
            if (heros.maxcaress_character_id == 16) {
                heros.pixi_kl_rj_bye.visible = true;
            }
        }
        // 露西亚-深红之渊
        if (heros.maxcaress_character_id == 19) {
            $('.txt025').html(touchHeroTopMore.alpha.speak1)
            $('.txt026').html(touchHeroTopMore.alpha.speak2)
            // 根据id 展示对应精灵
            heros.pixi_alpha_bye.visible = true;
        }

        // 艾拉-溢彩
        if (heros.maxcaress_character_id == 20) {
            $('.txt025').html(touchHeroTopMore.ella.speak1)
            $('.txt026').html(touchHeroTopMore.ella.speak2)
            // 根据id 展示对应精灵
            heros.pixi_al_yc_bye.visible = true;
        }

        // 苏菲亚-银牙
        if (heros.maxcaress_character_id == 21) {
            $('.txt025').html(touchHeroTopMore.sufeiya.speak1)
            $('.txt026').html(touchHeroTopMore.sufeiya.speak2)
            // 根据id 展示对应精灵
            heros.pixi_sfy_yy_bye.visible = true;
        }

        // 库洛姆-弧光
        if (heros.maxcaress_character_id == 22) {
            $('.txt025').html(touchHeroTopMore.kuluomu.speak1)
            $('.txt026').html(touchHeroTopMore.kuluomu.speak2)
            // 根据id 展示对应精灵
            heros.pixi_klm_hg_bye.visible = true;
        }

        // 薇拉 瑰丽
        if (heros.maxcaress_character_id == 23) {
            $('.txt025').html(touchHeroTopMore.weila.speak1)
            $('.txt026').html(touchHeroTopMore.weila.speak2)
            // 根据id 展示对应精灵
            heros.pixi_weila_bye.visible = true;
        }

        // 卡穆 狂犬
        if (heros.maxcaress_character_id == 24) {
            $('.txt025').html(touchHeroTopMore.luosaita.speak1)
            $('.txt026').html(touchHeroTopMore.luosaita.speak2)
            // 根据id 展示对应精灵
            heros.pixi_km_kq_bye.visible = true;
        }

        // 罗塞塔 凛冽
        if (heros.maxcaress_character_id == 25) {
            $('.txt025').html(touchHeroTopMore.kamu.speak1)
            $('.txt026').html(touchHeroTopMore.kamu.speak2)
            // 根据id 展示对应精灵
            heros.pixi_lst_ll_bye.visible = true;
        }

        // 曲 雀翎
        if (heros.maxcaress_character_id == 26) {
            $('.txt025').html(touchHeroTopMore.qu.speak1)
            $('.txt026').html(touchHeroTopMore.qu.speak2)
            // 根据id 展示对应精灵
            heros.pixi_lst_ll_bye.visible = true;
        }

        // 常羽 游麟
        if (heros.maxcaress_character_id == 27) {
            $('.txt025').html(touchHeroTopMore.changyu.speak1)
            $('.txt026').html(touchHeroTopMore.changyu.speak2)
            // 根据id 展示对应精灵
            heros.pixi_cy_yl_bye.visible = true;
        }

        // 露娜 银冕
        if (heros.maxcaress_character_id == 28) {
            $('.txt025').html(touchHeroTopMore.luna.speak1)
            $('.txt026').html(touchHeroTopMore.luna.speak2)
            // 根据id 展示对应精灵
            heros.pixi_ln_ym_bye.visible = true;
        }

        // 精灵展示区移动位置
        setSprPos(heros.heroArrs, '3');
        // 插入摸头最多次数
        $('.txt025').find('i').text(heros.maxcaress_character_num)
    }
    // 摸头最少
    if (heros.touchNum == 26) {
        // 隐藏全部精灵
        hideAllSpr(heros.heroArrs);
        // 根据接口返回的id, 对比本地映射插入页面

        // 露西亚 红莲or黎明or鸦羽
        if (heros.mincaress_character_id == 1 || heros.mincaress_character_id == 2 || heros.mincaress_character_id == 3) {
            $('.txt027').html(touchHeroTopLess.lxy.speak1)
            $('.txt028').html(touchHeroTopLess.lxy.speak2)
            // 根据id 展示对应精灵
            if (heros.mincaress_character_id == 1) {
                heros.pixi_lxy_hl_sad.visible = true;
            }
            if (heros.mincaress_character_id == 2) {
                heros.pixi_lxy_lm_sad.visible = true;
            }
            if (heros.mincaress_character_id == 3) {
                heros.pixi_lxy_yy_sad.visible = true;
            }
        }

        // 丽芙 蝕暗 or 流光 or 仰光
        if (heros.mincaress_character_id == 4 || heros.mincaress_character_id == 5 || heros.mincaress_character_id == 6) {
            $('.txt027').html(touchHeroTopLess.lufu.speak1)
            $('.txt028').html(touchHeroTopLess.lufu.speak2)
            // 根据id 展示对应精灵
            if (heros.mincaress_character_id == 4) {
                heros.pixi_lf_as_sad.visible = true;
            }
            if (heros.mincaress_character_id == 5) {
                heros.pixi_lf_lg_sad.visible = true;
            }
            if (heros.mincaress_character_id == 6) {
                heros.pixi_lf_yg_sad.visible = true;
            }
        }

        //里 异火 or 乱数
        if (heros.mincaress_character_id == 7 || heros.mincaress_character_id == 8) {
            $('.txt027').html(touchHeroTopLess.li.speak1)
            $('.txt028').html(touchHeroTopLess.li.speak2)
            // 根据id 展示对应精灵
            if (heros.mincaress_character_id == 7) {
                heros.pixi_li_yh_sad.visible = true;
            }
            if (heros.mincaress_character_id == 8) {
                heros.pixi_li_ls_sad.visible = true;
            }
        }

        //七实 风暴 or 脉冲
        if (heros.mincaress_character_id == 9 || heros.mincaress_character_id == 10) {
            $('.txt027').html(touchHeroTopLess.qishi.speak1)
            $('.txt028').html(touchHeroTopLess.qishi.speak2)
            // 根据id 展示对应精灵
            if (heros.mincaress_character_id == 9) {
                heros.pixi_qs_fb_sad.visible = true;
            }
            if (heros.mincaress_character_id == 10) {
                heros.pixi_qs_mc_sad.visible = true;
            }
        }
        // 神威 重能  or 暗能
        if (heros.mincaress_character_id == 11 || heros.mincaress_character_id == 12) {
            $('.txt027').html(touchHeroTopLess.shenwei.speak1)
            $('.txt028').html(touchHeroTopLess.shenwei.speak2)
            // 根据id 展示对应精灵
            if (heros.mincaress_character_id == 11) {
                heros.pixi_sw_zn_sad.visible = true;
            }
            if (heros.mincaress_character_id == 12) {
                heros.pixi_sw_an_sad.visible = true;
            }
        }

        // 渡边 夜刃  or 夙星
        if (heros.mincaress_character_id == 13 || heros.mincaress_character_id == 14) {
            $('.txt027').html(touchHeroTopLess.dubian.speak1)
            $('.txt028').html(touchHeroTopLess.dubian.speak2)
            // 根据id 展示对应精灵
            if (heros.mincaress_character_id == 13) {
                heros.pixi_db_yr_sad.visible = true;
            }
            if (heros.mincaress_character_id == 14) {
                heros.pixi_db_sx_sad.visible = true;
            }
        }

        // 比安卡 真理 or 零度
        if (heros.mincaress_character_id == 15 || heros.mincaress_character_id == 16) {
            $('.txt027').html(touchHeroTopLess.bianka.speak1)
            $('.txt028').html(touchHeroTopLess.bianka.speak2)
            // 根据id 展示对应精灵
            if (heros.mincaress_character_id == 15) {
                heros.pixi_bak_zl_sad.visible = true;
            }
            if (heros.mincaress_character_id == 16) {
                heros.pixi_bak_ld_sad.visible = true;
            }
        }

        // 卡列尼娜 爆裂 or 烬燃
        if (heros.mincaress_character_id == 17 || heros.mincaress_character_id == 18) {
            $('.txt027').html(touchHeroTopLess.klnn.speak1)
            $('.txt028').html(touchHeroTopLess.klnn.speak2)
            // 根据id 展示对应精灵
            if (heros.mincaress_character_id == 15) {
                heros.pixi_kl_bl_sad.visible = true;
            }
            if (heros.mincaress_character_id == 16) {
                heros.pixi_kl_rj_sad.visible = true;
            }
        }
        // 露西亚-深红之渊
        if (heros.mincaress_character_id == 19) {
            $('.txt027').html(touchHeroTopLess.alpha.speak1)
            $('.txt028').html(touchHeroTopLess.alpha.speak2)
            // 根据id 展示对应精灵
            heros.pixi_alpha_sad.visible = true;
        }

        // 艾拉-溢彩
        if (heros.mincaress_character_id == 20) {
            $('.txt027').html(touchHeroTopLess.ella.speak1)
            $('.txt028').html(touchHeroTopLess.ella.speak2)
            // 根据id 展示对应精灵
            heros.pixi_al_yc_sad.visible = true;
        }

        // 苏菲亚-银牙
        if (heros.mincaress_character_id == 21) {
            $('.txt027').html(touchHeroTopLess.sufeiya.speak1)
            $('.txt028').html(touchHeroTopLess.sufeiya.speak2)
            // 根据id 展示对应精灵
            heros.pixi_sfy_yy_sad.visible = true;
        }

        // 库洛姆-弧光
        if (heros.mincaress_character_id == 22) {
            $('.txt027').html(touchHeroTopLess.kuluomu.speak1)
            $('.txt028').html(touchHeroTopLess.kuluomu.speak2)
            // 根据id 展示对应精灵
            heros.pixi_klm_hg_sad.visible = true;
        }

        // 薇拉 瑰丽
        if (heros.mincaress_character_id == 23) {
            $('.txt027').html(touchHeroTopLess.weila.speak1)
            $('.txt028').html(touchHeroTopLess.weila.speak2)
            // 根据id 展示对应精灵
            heros.pixi_weila_sad.visible = true;
        }

        // 卡穆 狂犬
        if (heros.mincaress_character_id == 24) {
            $('.txt027').html(touchHeroTopLess.luosaita.speak1)
            $('.txt028').html(touchHeroTopLess.luosaita.speak2)
            // 根据id 展示对应精灵
            heros.pixi_km_kq_sad.visible = true;
        }

        // 罗塞塔 凛冽
        if (heros.mincaress_character_id == 25) {
            $('.txt027').html(touchHeroTopLess.kamu.speak1)
            $('.txt028').html(touchHeroTopLess.kamu.speak2)
            // 根据id 展示对应精灵
            heros.pixi_lst_ll_sad.visible = true;
        }

        // 曲 雀翎
        if (heros.mincaress_character_id == 26) {
            $('.txt027').html(touchHeroTopLess.qu.speak1)
            $('.txt028').html(touchHeroTopLess.qu.speak2)
            // 根据id 展示对应精灵
            heros.pixi_lst_ll_sad.visible = true;
        }

        // 常羽 游麟
        if (heros.mincaress_character_id == 27) {
            $('.txt027').html(touchHeroTopLess.changyu.speak1)
            $('.txt028').html(touchHeroTopLess.changyu.speak2)
            // 根据id 展示对应精灵
            heros.pixi_cy_yl_sad.visible = true;
        }

        // 露娜 银冕
        if (heros.mincaress_character_id == 28) {
            $('.txt027').html(touchHeroTopLess.luna.speak1)
            $('.txt028').html(touchHeroTopLess.luna.speak2)
            // 根据id 展示对应精灵
            heros.pixi_ln_ym_sad.visible = true;
        }
        // 精灵展示区移动位置
        setSprPos(heros.heroArrs, '3');
        // 插入次数
        $('.txt027').find('i').text(heros.mincaress_character_num)

    }

    // 出击最多
    if (heros.touchNum == 28) {
        // 隐藏全部精灵
        hideAllSpr(heros.heroArrs);
        // 根据接口返回的id, 对比本地映射插入页面
        // 露西亚 红莲or黎明or鸦羽
        if (heros.use_character_id == 1 || heros.use_character_id == 2 || heros.use_character_id == 3) {
            $('.txt029').html(touchHeroGoPlay.lxy.speak1)
            $('.txt030').html(touchHeroGoPlay.lxy.speak2)
            // 根据id 展示对应精灵
            if (heros.use_character_id == 1) {
                heros.pixi_lxy_hl_bye.visible = true;
            }
            if (heros.use_character_id == 2) {
                heros.pixi_lxy_lm_bye.visible = true;
            }
            if (heros.use_character_id == 3) {
                heros.pixi_lxy_yy_bye.visible = true;
            }
        }

        // 丽芙 蝕暗 or 流光 or 仰光
        if (heros.use_character_id == 4 || heros.use_character_id == 5 || heros.use_character_id == 6) {
            $('.txt029').html(touchHeroGoPlay.lufu.speak1)
            $('.txt030').html(touchHeroGoPlay.lufu.speak2)
            // 根据id 展示对应精灵
            if (heros.use_character_id == 4) {
                heros.pixi_lf_as_bye.visible = true;
            }
            if (heros.use_character_id == 5) {
                heros.pixi_lf_lg_bye.visible = true;
            }
            if (heros.use_character_id == 6) {
                heros.pixi_lf_yg_bye.visible = true;
            }
        }

        //里 异火 or 乱数
        if (heros.use_character_id == 7 || heros.use_character_id == 8) {
            $('.txt029').html(touchHeroGoPlay.li.speak1)
            $('.txt030').html(touchHeroGoPlay.li.speak2)
            // 根据id 展示对应精灵
            if (heros.use_character_id == 7) {
                heros.pixi_li_yh_bye.visible = true;
            }
            if (heros.use_character_id == 8) {
                heros.pixi_li_ls_bye.visible = true;
            }
        }

        //七实 风暴 or 脉冲
        if (heros.use_character_id == 9 || heros.use_character_id == 10) {
            $('.txt029').html(touchHeroGoPlay.qishi.speak1)
            $('.txt030').html(touchHeroGoPlay.qishi.speak2)
            // 根据id 展示对应精灵
            if (heros.use_character_id == 9) {
                heros.pixi_qs_fb_bye.visible = true;
            }
            if (heros.use_character_id == 10) {
                heros.pixi_qs_mc_bye.visible = true;
            }
        }
        // 神威 重能  or 暗能
        if (heros.use_character_id == 11 || heros.use_character_id == 12) {
            $('.txt029').html(touchHeroGoPlay.shenwei.speak1)
            $('.txt030').html(touchHeroGoPlay.shenwei.speak2)
            // 根据id 展示对应精灵
            if (heros.use_character_id == 11) {
                heros.pixi_sw_zn_bye.visible = true;
            }
            if (heros.use_character_id == 12) {
                heros.pixi_sw_an_bye.visible = true;
            }
        }

        // 渡边 夜刃  or 夙星
        if (heros.use_character_id == 13 || heros.use_character_id == 14) {
            $('.txt029').html(touchHeroGoPlay.dubian.speak1)
            $('.txt030').html(touchHeroGoPlay.dubian.speak2)
            // 根据id 展示对应精灵
            if (heros.use_character_id == 13) {
                heros.pixi_db_yr_bye.visible = true;
            }
            if (heros.use_character_id == 14) {
                heros.pixi_db_sx_bye.visible = true;
            }
        }

        // 比安卡 真理 or 零度
        if (heros.use_character_id == 15 || heros.use_character_id == 16) {
            $('.txt029').html(touchHeroGoPlay.bianka.speak1)
            $('.txt030').html(touchHeroGoPlay.bianka.speak2)
            // 根据id 展示对应精灵
            if (heros.use_character_id == 15) {
                heros.pixi_bak_zl_bye.visible = true;
            }
            if (heros.use_character_id == 16) {
                heros.pixi_bak_ld_bye.visible = true;
            }
        }

        // 卡列尼娜 爆裂 or 烬燃
        if (heros.use_character_id == 17 || heros.use_character_id == 18) {
            $('.txt029').html(touchHeroGoPlay.klnn.speak1)
            $('.txt030').html(touchHeroGoPlay.klnn.speak2)
            // 根据id 展示对应精灵
            if (heros.use_character_id == 15) {
                heros.pixi_kl_bl_bye.visible = true;
            }
            if (heros.use_character_id == 16) {
                heros.pixi_kl_rj_bye.visible = true;
            }
        }
        // 露西亚-深红之渊
        if (heros.use_character_id == 19) {
            $('.txt029').html(touchHeroGoPlay.alpha.speak1)
            $('.txt030').html(touchHeroGoPlay.alpha.speak2)
            // 根据id 展示对应精灵
            heros.pixi_alpha_bye.visible = true;
        }

        // 艾拉-溢彩
        if (heros.use_character_id == 20) {
            $('.txt029').html(touchHeroGoPlay.ella.speak1)
            $('.txt030').html(touchHeroGoPlay.ella.speak2)
            // 根据id 展示对应精灵
            heros.pixi_al_yc_bye.visible = true;
        }

        // 苏菲亚-银牙
        if (heros.use_character_id == 21) {
            $('.txt029').html(touchHeroGoPlay.sufeiya.speak1)
            $('.txt030').html(touchHeroGoPlay.sufeiya.speak2)
            // 根据id 展示对应精灵
            heros.pixi_sfy_yy_bye.visible = true;
        }

        // 库洛姆-弧光
        if (heros.use_character_id == 22) {
            $('.txt029').html(touchHeroGoPlay.kuluomu.speak1)
            $('.txt030').html(touchHeroGoPlay.kuluomu.speak2)
            // 根据id 展示对应精灵
            heros.pixi_klm_hg_bye.visible = true;
        }

        // 薇拉 瑰丽
        if (heros.use_character_id == 23) {
            $('.txt029').html(touchHeroGoPlay.weila.speak1)
            $('.txt030').html(touchHeroGoPlay.weila.speak2)
            // 根据id 展示对应精灵
            heros.pixi_weila_bye.visible = true;
        }

        // 卡穆 狂犬
        if (heros.use_character_id == 24) {
            $('.txt029').html(touchHeroGoPlay.luosaita.speak1)
            $('.txt030').html(touchHeroGoPlay.luosaita.speak2)
            // 根据id 展示对应精灵
            heros.pixi_km_kq_bye.visible = true;
        }

        // 罗塞塔 凛冽
        if (heros.use_character_id == 25) {
            $('.txt029').html(touchHeroGoPlay.kamu.speak1)
            $('.txt030').html(touchHeroGoPlay.kamu.speak2)
            // 根据id 展示对应精灵
            heros.pixi_lst_ll_bye.visible = true;
        }

        // 曲 雀翎
        if (heros.use_character_id == 26) {
            $('.txt029').html(touchHeroGoPlay.qu.speak1)
            $('.txt030').html(touchHeroGoPlay.qu.speak2)
            // 根据id 展示对应精灵
            heros.pixi_lst_ll_bye.visible = true;
        }

        // 常羽 游麟
        if (heros.use_character_id == 27) {
            $('.txt029').html(touchHeroGoPlay.changyu.speak1)
            $('.txt030').html(touchHeroGoPlay.changyu.speak2)
            // 根据id 展示对应精灵
            heros.pixi_cy_yl_bye.visible = true;
        }

        // 露娜 银冕
        if (heros.use_character_id == 28) {
            $('.txt029').html(touchHeroGoPlay.luna.speak1)
            $('.txt030').html(touchHeroGoPlay.luna.speak2)
            // 根据id 展示对应精灵
            heros.pixi_ln_ym_bye.visible = true;
        }

        // 精灵展示区移动位置
        setSprPos(heros.heroArrs, '3');
        // 插入次数
        $('.txt029').find('i').text(heros.use_character_num)
    }

    // 数据结束画面
    if (heros.touchNum == 30) {
        // 隐藏全部精灵
        hideAllSpr(heros.heroArrs);
        // 关闭天气
        snow.stop();
        // closeSky();
        // 展示结束精灵
        heros.pixi_lxy_hl_bye.visible = true;

        // 变换天气
        $('.ball_dong,.rotate_ball').hide();

        gsap.fromTo(".page2 .txtYun", {
            opacity: 0,
        }, {
            top: '0rem',
            opacity: 1,
            duration: 1.5
        });

        // 精灵展示区移动位置
        setSprPos(heros.heroArrs, '3');

        $('.page2 .top_qizi').show().addClass('animate__animated  animate__fadeInDown');
        $('.page2_footer_btns').show().addClass('animate__animated  animate__fadeInUp');
        $('.page2').addClass('page2_end');

    }
}



//加载图像，加载完成后执行setup函数
PIXI.loader
    .add(imgURL_pao)
    .add(imgURL_bye)
    .add(imgURL_sad)
    .add(imgURL_move)
    .on("progress", loadProgressHandler)
    .load(setup);

// 监听加载进度
function loadProgressHandler(loader, resource) {
    // 输出加载的url
    // console.log("loading: " + resource.url);
    // 加载进度
    let precc_widht = Math.round(loader.progress);
    // console.log("progress: " + precc_widht + "%");
    $(".progress_wrap .progress_cc .progress").css({
        width: precc_widht + '%'
    });
}

// 页面加载完毕执行 - 初始化舞台
function setup() {
    // 加载完毕
    $('.loading').hide();

    // 初始化主界面
    $('.page1').fadeIn('slow');
    $('.page1 .top_qizi').addClass('animate__animated  animate__fadeInDown');
    $('.page1 .chsets').addClass('animate__animated  animate__zoomIn');
    $('.page1 .page1_footer_btns').addClass('animate__animated  animate__fadeInUp');

    gsap.fromTo(".page1 .logo", {
        opacity: 0,
        width: '5.18rem',
        height: '2.12rem',
        top: '0.7rem'
    }, {
        opacity: 1,
        width: '6.88rem',
        height: '2.92rem',
        top: '7.2rem',
        duration: 1
    });

    gsap.fromTo(".ball_cun", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 1
    });
    $('.txt01').removeClass('hide').addClass('animate__animated  animate__fadeIn');
    // 初始化主界面end

    //设置别名
    let TextureCache = PIXI.utils.TextureCache; // 存储缓存纹理
    let Texture = PIXI.Texture;
    let Rectangle = PIXI.Rectangle;
    let AnimatedSprite = PIXI.extras.AnimatedSprite;


    //pixi参数
    let optionRunHomeLxy = {
        width: heros.loading_hero_w, //宽度
        height: heros.loading_hero_h, // 高度
        transparent: true, // 透明度
        antialias: true, //使得字体的边界和几何图形更加圆滑
        resolution: 1, //分辨率和像素密度
    }

    // 创建一个pixi应用
    heros.app = new PIXI.Application(optionRunHomeLxy);

    // 可交互属性设置
    heros.app.stage.interactive = true;
    // stage空白处添加上点击
    heros.app.renderer.plugins.interaction.on('pointerdown', onStageClick)

    heros.app.renderer.autoResize = true; // 窗口变化改变舞台大小
    heros.app.renderer.resize(window.innerWidth, window.innerHeight);
    // 获取渲染器
    let renderer = heros.app.renderer;

    // 使用画布的resize方法可以改变canvas的大小
    renderer.autoResize = true;

    // 获取dom
    let playground = document.getElementById('loading_hero');

    // 把 Pixi 创建的 canvas 添加到页面上
    playground.appendChild(renderer.view);


    // 创建精灵并初始化状态
    createPIXISpr();


    // 默认显示露西亚跑步
    heros.pixi_lxy_hl.visible = true;
}

// 生产精灵
function createPIXISpr() {
    //叫 SpriteUtilities 的库，该库包含许多有用的函数，用于创建Pixi精灵并使它们更易于使用。
    let su = new SpriteUtilities(PIXI);
    //创建动画精灵
    heros.pixi_lxy_hl = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_pao[0], 280, 280)); // 露西亚红莲跑
    heros.pixi_lf_as = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_pao[1], 280, 280)); // 丽芙蚀暗跑
    heros.pixi_li_yh = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_pao[2], 280, 280)); // 里 异火跑
    heros.pixi_db_yr = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_pao[3], 280, 280)); // 渡边 夜刃跑
    heros.pixi_sw_zn = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_pao[4], 280, 280)); // 神威 重能跑
    heros.pixi_qs_fb = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_pao[5], 280, 280)); // 七实 风暴跑
    heros.pixi_klnn_bl = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_pao[6], 280, 280)); // 卡列尼娜 爆裂跑
    heros.pixi_bak_ld = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_pao[7], 280, 280)); // 比安卡零度跑

    // 走路打招呼
    heros.pixi_lf_as_mbye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_move[0], 280, 280)); // 丽芙蚀暗 打招呼跑
    heros.pixi_li_yh_mbye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_move[1], 280, 280)); // 里 异火 打招呼跑
    heros.pixi_db_yr_mbye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_move[2], 280, 280)); // 渡边 夜刃 打招呼跑
    heros.pixi_sw_zn_mbye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_move[3], 280, 280)); // 神威 重能 打招呼跑
    heros.pixi_qs_fb_mbye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_move[4], 280, 280)); // 七实 风暴 打招呼跑
    heros.pixi_klnn_bl_mbye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_move[5], 280, 280)); // 卡列尼娜 爆裂 打招呼跑
    heros.pixi_bak_ld_mbye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_move[6], 280, 280)); // 比安卡零度 打招呼跑

    // 招手
    heros.pixi_lxy_hl_bye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_bye[0], 280, 280)); // 露西亚红莲
    heros.pixi_lxy_lm_bye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_bye[1], 280, 280)); // 露西亚黎明
    heros.pixi_lxy_yy_bye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_bye[2], 280, 280)); // 露西亚鸦羽
    heros.pixi_lf_as_bye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_bye[3], 280, 280)); // 丽芙-蚀暗
    heros.pixi_lf_lg_bye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_bye[4], 280, 280)); // 丽芙-流光
    heros.pixi_lf_yg_bye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_bye[5], 280, 280)); // 丽芙-仰光
    heros.pixi_li_yh_bye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_bye[6], 280, 280)); // 里-异火
    heros.pixi_li_ls_bye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_bye[7], 280, 280)); // 里-乱数
    heros.pixi_qs_fb_bye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_bye[8], 280, 280)); // 七实-风暴
    heros.pixi_qs_mc_bye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_bye[9], 280, 280)); // 七实-脉冲
    heros.pixi_sw_zn_bye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_bye[10], 280, 280)); // 神威-重能
    heros.pixi_sw_an_bye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_bye[11], 280, 280)); // 神威-暗能
    heros.pixi_db_yr_bye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_bye[12], 280, 280)); // 渡边-夜刃
    heros.pixi_db_sx_bye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_bye[13], 280, 280)); // 渡边-夙星
    heros.pixi_bak_zl_bye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_bye[14], 280, 280)); // 比安卡-真理
    heros.pixi_bak_ld_bye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_bye[15], 280, 280)); // 比安卡-零度
    heros.pixi_kl_bl_bye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_bye[16], 280, 280)); // 卡列-爆裂
    heros.pixi_kl_rj_bye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_bye[17], 280, 280)); // 卡列-烬燃
    heros.pixi_alpha_bye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_bye[18], 280, 280)); // 露西亚-深红之渊
    heros.pixi_al_yc_bye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_bye[19], 280, 280)); // 艾拉-溢彩
    heros.pixi_sfy_yy_bye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_bye[20], 280, 280)); // 苏菲亚-银牙
    heros.pixi_klm_hg_bye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_bye[21], 280, 280)); // 库洛姆-弧光
    heros.pixi_weila_bye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_bye[22], 280, 280)); // 薇拉 瑰丽
    heros.pixi_km_kq_bye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_bye[23], 280, 280)); // 卡穆-狂犬
    heros.pixi_lst_ll_bye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_bye[24], 280, 280)); // 罗塞塔-凛冽
    heros.pixi_qu_ql_bye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_bye[25], 280, 280)); // 曲-雀翎
    heros.pixi_cy_yl_bye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_bye[26], 280, 280)); // 常羽-游麟
    heros.pixi_ln_ym_bye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_bye[27], 280, 280)); // 露娜-银冕

    // 沮丧
    heros.pixi_lxy_hl_sad = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_sad[0], 280, 280)); // 露西亚红莲
    heros.pixi_lxy_lm_sad = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_sad[1], 280, 280)); // 露西亚黎明
    heros.pixi_lxy_yy_sad = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_sad[2], 280, 280)); // 露西亚鸦羽
    heros.pixi_lf_as_sad = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_sad[3], 280, 280)); // 丽芙-蚀暗
    heros.pixi_lf_lg_sad = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_sad[4], 280, 280)); // 丽芙-流光
    heros.pixi_lf_yg_sad = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_sad[5], 280, 280)); // 丽芙-仰光
    heros.pixi_li_yh_sad = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_sad[6], 280, 280)); // 里-异火
    heros.pixi_li_ls_sad = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_sad[7], 280, 280)); // 里-乱数
    heros.pixi_qs_fb_sad = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_sad[8], 280, 280)); // 七实-风暴
    heros.pixi_qs_mc_sad = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_sad[9], 280, 280)); // 七实-脉冲
    heros.pixi_sw_zn_sad = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_sad[10], 280, 280)); // 神威-重能
    heros.pixi_sw_an_sad = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_sad[11], 280, 280)); // 神威-暗能
    heros.pixi_db_yr_sad = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_sad[12], 280, 280)); // 渡边-夜刃
    heros.pixi_db_sx_sad = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_sad[13], 280, 280)); // 渡边-夙星
    heros.pixi_bak_zl_sad = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_sad[14], 280, 280)); // 比安卡-真理
    heros.pixi_bak_ld_sad = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_sad[15], 280, 280)); // 比安卡-零度
    heros.pixi_kl_bl_sad = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_sad[16], 280, 280)); // 卡列-爆裂
    heros.pixi_kl_rj_sad = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_sad[17], 280, 280)); // 卡列-烬燃
    heros.pixi_alpha_sad = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_sad[18], 280, 280)); // 露西亚-深红之渊
    heros.pixi_al_yc_sad = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_sad[19], 280, 280)); // 艾拉-溢彩
    heros.pixi_sfy_yy_sad = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_sad[20], 280, 280)); // 苏菲亚-银牙
    heros.pixi_klm_hg_sad = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_sad[21], 280, 280)); // 库洛姆-弧光
    heros.pixi_weila_sad = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_sad[22], 280, 280)); // 薇拉 瑰丽
    heros.pixi_km_kq_sad = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_sad[23], 280, 280)); // 卡穆-狂犬
    heros.pixi_lst_ll_sad = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_sad[24], 280, 280)); // 罗塞塔-凛冽
    heros.pixi_qu_ql_sad = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_sad[25], 280, 280)); // 曲-雀翎
    heros.pixi_cy_yl_sad = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_sad[26], 280, 280)); // 常羽-游麟
    heros.pixi_ln_ym_sad = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_sad[27], 280, 280)); // 露娜-银冕

    heros.heroArrs = [
        /*===============跑步==============*/
        heros.pixi_lxy_hl, // 露西亚红莲跑 0
        heros.pixi_lf_as, // 丽芙蚀暗跑 1
        heros.pixi_li_yh, // 里 异火跑 2
        heros.pixi_db_yr, // 渡边 夜刃跑 3
        heros.pixi_sw_zn, // 神威 重能跑 4
        heros.pixi_qs_fb, // 七实 风暴跑 5
        heros.pixi_klnn_bl, // 卡列尼娜 爆裂跑 6
        heros.pixi_bak_ld, // 比安卡零度跑 7
        /*===============招手==============*/
        heros.pixi_lxy_hl_bye, // 露西亚红莲bye 8
        heros.pixi_lxy_lm_bye, // 露西亚黎明bye 9
        heros.pixi_lxy_yy_bye, // 露西亚鸦羽bye 10
        heros.pixi_lf_as_bye, // 丽芙-蚀暗bye 11
        heros.pixi_lf_lg_bye, // 丽芙-流光bye 12
        heros.pixi_lf_yg_bye, // 丽芙-仰光bye 13
        heros.pixi_li_yh_bye, // 里-异火bye 14
        heros.pixi_li_ls_bye, // 里-乱数bye 15
        heros.pixi_qs_fb_bye, // 七实-风暴bye 16
        heros.pixi_qs_mc_bye, // 七实-脉冲bye 17
        heros.pixi_sw_zn_bye, // 神威-重能bye 18
        heros.pixi_sw_an_bye, // 神威-暗能bye 19
        heros.pixi_db_yr_bye, // 渡边-夜刃bye 20
        heros.pixi_db_sx_bye, // 渡边-夙星bye 21
        heros.pixi_bak_zl_bye, // 比安卡-真理bye 22
        heros.pixi_bak_ld_bye, // 比安卡-零度bye 23
        heros.pixi_kl_bl_bye, // 卡列-爆裂bye 24
        heros.pixi_kl_rj_bye, // 卡列-烬燃bye 25
        heros.pixi_alpha_bye, // 露西亚-深红之渊bye 26
        heros.pixi_al_yc_bye, // 艾拉-溢彩bye 27
        heros.pixi_sfy_yy_bye, // 苏菲亚-银牙bye 28
        heros.pixi_klm_hg_bye, // 库洛姆-弧光bye 29
        heros.pixi_weila_bye, // 薇拉 瑰丽 30
        heros.pixi_km_kq_bye, // 卡穆-狂犬bye 31
        heros.pixi_lst_ll_bye, // 罗塞塔-凛冽bye 32
        heros.pixi_qu_ql_bye, // 曲-雀翎bye 33
        heros.pixi_cy_yl_bye, // 常羽-游麟bye 34
        heros.pixi_ln_ym_bye, // 露娜-银冕bye 35
        /*===============沮丧==============*/
        heros.pixi_lxy_hl_sad, // 露西亚红莲sad 36
        heros.pixi_lxy_lm_sad, // 露西亚黎明sad 37
        heros.pixi_lxy_yy_sad, // 露西亚鸦羽sad 38
        heros.pixi_lf_as_sad, // 丽芙-蚀暗sad 39
        heros.pixi_lf_lg_sad, // 丽芙-流光sad 40
        heros.pixi_lf_yg_sad, // 丽芙-仰光sad 41
        heros.pixi_li_yh_sad, // 里-异火sad 42
        heros.pixi_li_ls_sad, // 里-乱数sad 43
        heros.pixi_qs_fb_sad, // 七实-风暴sad 44
        heros.pixi_qs_mc_sad, // 七实-脉冲sad 45
        heros.pixi_sw_zn_sad, // 神威-重能sad 46
        heros.pixi_sw_an_sad, // 神威-暗能sad 47
        heros.pixi_db_yr_sad, // 渡边-夜刃sad 48
        heros.pixi_db_sx_sad, // 渡边-夙星sad 49
        heros.pixi_bak_zl_sad, // 比安卡-真理sad 50
        heros.pixi_bak_ld_sad, // 比安卡-零度sad 51
        heros.pixi_kl_bl_sad, // 卡列-爆裂sad 52
        heros.pixi_kl_rj_sad, // 卡列-烬燃sad 53
        heros.pixi_alpha_sad, // 露西亚-深红之渊sad 54
        heros.pixi_al_yc_sad, // 艾拉-溢彩sad 55
        heros.pixi_sfy_yy_sad, // 苏菲亚-银牙sad 56
        heros.pixi_klm_hg_sad, // 库洛姆-弧光sad 57
        heros.pixi_weila_sad, // 薇拉 瑰丽 58
        heros.pixi_km_kq_sad, // 卡穆-狂犬sad 59
        heros.pixi_lst_ll_sad, // 罗塞塔-凛冽sad 60
        heros.pixi_qu_ql_sad, // 曲-雀翎sad 61
        heros.pixi_cy_yl_sad, // 常羽-游麟sad 62
        heros.pixi_ln_ym_sad, // 露娜-银冕sad 63
        // 走路打招呼
        heros.pixi_lf_as_mbye,
        heros.pixi_li_yh_mbye,
        heros.pixi_db_yr_mbye,
        heros.pixi_sw_zn_mbye,
        heros.pixi_qs_fb_mbye,
        heros.pixi_klnn_bl_mbye,
        heros.pixi_bak_ld_mbye,
    ]
    // 添加到舞台
    setSprAttr(heros.heroArrs);
};


// 初始化精灵状态
function setSprAttr(pixiSprArr) {
    for (var i = 0; i < pixiSprArr.length; i++) {

        pixiSprArr[i].visible = false;
        //Change the sprite's size
        // pixiSprArr[i].width = heros.loading_hero_w;
        // pixiSprArr[i].height = heros.loading_hero_h;
        pixiSprArr[i].width = 280;
        pixiSprArr[i].height = 280;

        //设置动画精灵的速度
        pixiSprArr[i].animationSpeed = 0.15;

        pixiSprArr[i].anchor.x = 0.5;
        pixiSprArr[i].anchor.y = 0.5;

        pixiSprArr[i].x = heros.loading_hero_w / 2;
        pixiSprArr[i].y = heros.loading_hero_h - 70;

        // pixiSprArr[i].scale.x = 0.4;
        // pixiSprArr[i].scale.y = 0.4;
        pixiSprArr[i].scale.x = heros.loading_hero_w / 750;
        pixiSprArr[i].scale.y = heros.loading_hero_w / 750;

        //把动画精灵添加到舞台
        heros.app.stage.addChild(pixiSprArr[i]);
        //播放动画精灵
        pixiSprArr[i].play();
    }

    // pixiSprArr[0].visible = true;
    // pixiSprArr[8].visible = true;
}

// 改变精灵的位置
function setSprPos(pixiSprArr, num) {
    for (var i = 0; i < pixiSprArr.length; i++) {
        // pixiSprArr[i].y = heros.loading_hero_h - (heros.loading_hero_h/3);
        pixiSprArr[i].y = heros.loading_hero_h - (heros.loading_hero_h / num);
    }
}

// 隐藏全部精灵
function hideAllSpr(pixiSprArr) {
    for (var i = 0; i < pixiSprArr.length; i++) {
        pixiSprArr[i].visible = false;
    }
}

// resize宽口更新精灵位置
function resizeSpr(pixiSprArr) {

    heros.loading_hero_w = window.innerWidth;
    heros.loading_hero_h = window.innerHeight;

    heros.app.renderer.resize(heros.loading_hero_w, heros.loading_hero_h);

    for (var i = 0; i < pixiSprArr.length; i++) {

        pixiSprArr[i].x = heros.loading_hero_w / 2;
        pixiSprArr[i].y = heros.loading_hero_h - 70;

        pixiSprArr[i].scale.x = heros.loading_hero_w / 750;
        pixiSprArr[i].scale.y = heros.loading_hero_w / 750;
    }
}

// resize窗口更新缩放变量
function gloScale() {
    var scaleH = ($(window).height() * 2) / 1334;
    console.log($(window).height() * 2)
    if (scaleH > 1) scaleH = 1;
    // alert(scaleH)
    $('.glo-scale').css({
        transform: ' scale(' + scaleH + ')'
    })
}

// 监听窗口缩放
$(window).resize(function() {
    // 更细缩放比例
    gloScale();
    // 更新画布
    resizeSpr(heros.heroArrs);
});