/* @Author: A
 * @Date:   2021-11-09 11:15:13
 * @Last Modified by:   A
 * @Last Modified time: 2021-11-15 16:11:54
 */

const heros = {
    app: null, // pixi
    touchNum: 1, // 点击次数
    staticURL: '../', // 本地调试路径
    bOff:true,
    // CP 字段释义
    role_id: null, //'角色id',
    role_key: null, //角色key
    channel_id: null, //'渠道id',
    userregister_time: null, //'角色创建时间',
    userlast_active_time: null, //'最后活跃时间',
    role_name: null, //'当前角色名',
    total_logincnt: null, //'累计登录次数',
    total_loginday: null, //'累计登录天数',
    avg_daily_logincnt: null, //'平均每日打开战双的次数',
    total_nut: null, //'螺母消耗数',
    total_blackcard: null, //'黑卡消耗数',

    maxcaress_character_id: 23, //'最多爱抚构造体id',
    maxcaress_character_num: 88, // '最多爱抚构造体次数',
    mincaress_character_id: 23, //'最少爱抚构造体id',
    mincaress_character_num: 2, //'最少爱抚构造体次数',

    total_dormitory_currency: null, //'宿舍币消耗数',
    total_dormitory_nut: null, //'宿舍螺母消耗数',
    total_serum: null, //'血清消耗数',
    max_logincnt_ds: null, //'最多一天打开战双对应日期',
    max_login_cnt_daily: null, //'最多一天打开战双的次数',
    max_online_ds: null, //'最长一天在线对应日期',
    max_fail_pve_id: null, //'失败最多的关卡id',
    max_fail_pve_num: null, //'失败最多的关卡次数',
    max_finish_pve_id: null, //'通关最多的关卡id',
    max_finish_pve_num: null, //'通关最多的关卡次数',
    time_label: null, //'经常打开游戏时间段',
    max_login_cnt_time: null, //'本时间段打开次数',
    use_character_id: 3, //'出击最多的构造体id',
    use_character_num: 3000, //'出击最多的构造体出击次数'

    heroArrs: [],
    // 获取父元素宽高
    loading_hero_w: document.body.clientWidth,
    loading_hero_h: document.body.clientHeight
    // loading_hero_w : document.getElementById('loading_hero').clientWidth,
    // loading_hero_h : document.getElementById('loading_hero').clientHeight

}

//需要加载的雪碧图的地址
// 跑步动作
let imgURL_pao = [
    "" + heros.staticURL + "images/hero/露西亚-红莲/露西亚-红莲-走路/lxy_hl_move.png",
    "" + heros.staticURL + "images/hero/丽芙-蚀暗/丽芙-蚀暗-走路/丽芙-蚀暗-走路_spr.png",
    "" + heros.staticURL + "images/hero/里-异火/里-异火-走路/里-异火-走路_spr.png",
    "" + heros.staticURL + "images/hero/渡边-夜刃/渡边-夜刃-走路/渡边-夜刃-走路_spr.png",

    "" + heros.staticURL + "images/hero/神威-重能/神威-重能-走路/神威-重能-走路_spr.png",
    "" + heros.staticURL + "images/hero/七实-风暴/七实-风暴-走路/七实-风暴-走路_spr.png",
    "" + heros.staticURL + "images/hero/卡列-爆裂/卡列-爆裂-走路/卡列-爆裂-走路_spr.png",
    "" + heros.staticURL + "images/hero/比安卡-零度/比安卡-零度-走路/bianka-lingdu走路_spr.png"
];


// 走路打招呼
let imgURL_move = [
    "../images/hero/丽芙-蚀暗/丽芙-蚀暗-打招呼+走路/丽芙-蚀暗-打招呼+走路_spr.png",
    "../images/hero/里-异火/里-异火-打招呼-走路/里-异火-打招呼-走路_spr.png",
    "../images/hero/渡边-夜刃/渡边-夜刃-打招呼+走路/渡边-夜刃-打招呼-走路_spr.png",

    "../images/hero/神威-重能/神威-重能-打招呼+走路/神威-重能-打招呼-走路_spr.png",
    "../images/hero/七实-风暴/七实-风暴-打招呼+走路/七实-风暴-打招呼-走路_spr.png",
    "../images/hero/卡列-爆裂/卡列-爆裂-打招呼+走路/卡列-爆裂-打招呼-走路_spr.png",
    "../images/hero/比安卡-零度/比安卡-零度-打招呼+走路/比安卡-零度-打招呼-走路_spr.png"
];

// // 走路打招呼
// heros.pixi_lf_as_mbye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_move[0], 280, 280)); // 丽芙蚀暗 打招呼跑
// heros.pixi_li_yh_mbye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_move[1], 280, 280)); // 里 异火 打招呼跑
// heros.pixi_db_yr_mbye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_move[2], 280, 280)); // 渡边 夜刃 打招呼跑
// heros.pixi_sw_zn_mbye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_move[3], 280, 280)); // 神威 重能 打招呼跑
// heros.pixi_qs_fb_mbye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_move[4], 280, 280)); // 七实 风暴 打招呼跑
// heros.pixi_klnn_bl_mbye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_move[5], 280, 280)); // 卡列尼娜 爆裂 打招呼跑
// heros.pixi_bak_ld_mbye = new PIXI.extras.AnimatedSprite(su.filmstrip(imgURL_move[6], 280, 280)); // 比安卡零度 打招呼跑



// 挥手动作
let imgURL_bye = [
    "" + heros.staticURL + "images/hero/露西亚-红莲/露西亚-红莲-招手/露西亚-红莲-招手_spr.png",
    "" + heros.staticURL + "images/hero/露西亚-黎明/露西亚-黎明-招手/露西亚-黎明-招手_spr.png",
    "" + heros.staticURL + "images/hero/露西亚-鸦羽/露西亚-鸦羽-招手/露西亚-鸦羽-招手_spr.png",
    "" + heros.staticURL + "images/hero/丽芙-蚀暗/丽芙-蚀暗-招手/丽芙-蚀暗-招手_spr.png",
    "" + heros.staticURL + "images/hero/丽芙-流光/丽芙-流光-招手/丽芙-流光-招手_spr.png",
    "" + heros.staticURL + "images/hero/丽芙-仰光/丽芙-仰光-招手/丽芙-仰光-招手_spr.png",
    "" + heros.staticURL + "images/hero/里-异火/里-异火-招手/里-异火-招手_spr.png",
    "" + heros.staticURL + "images/hero/里-乱数/里-乱数-招手/里-乱数-招手_spr.png",
    "" + heros.staticURL + "images/hero/七实-风暴/七实-风暴-招手/七实-风暴-招手_spr.png",
    "" + heros.staticURL + "images/hero/七实-脉冲/七实-脉冲-招手/七实-脉冲-招手_spr.png",
    "" + heros.staticURL + "images/hero/神威-重能/神威-重能-招手/神威-重能-招手_spr.png",
    "" + heros.staticURL + "images/hero/神威-暗能/神威-暗能-招手/神威-暗能-招手_spr.png",
    "" + heros.staticURL + "images/hero/渡边-夜刃/渡边-夜刃-招手/渡边-夜刃-招手_spr.png",
    "" + heros.staticURL + "images/hero/渡边-夙星/渡边-夙星-招手/渡边-夙星-招手_spr.png",
    "" + heros.staticURL + "images/hero/比安卡-真理/比安卡-真理-招手/比安卡-真理-招手_spr.png",
    "" + heros.staticURL + "images/hero/比安卡-零度/比安卡-零度-招手/比安卡-零度-招手_spr.png",
    "" + heros.staticURL + "images/hero/卡列-爆裂/卡列-爆裂-招手/卡列-爆裂-招手_spr.png",
    "" + heros.staticURL + "images/hero/卡列-烬燃/卡列-烬燃-招手/卡列-烬燃-招手_spr.png",
    "" + heros.staticURL + "images/hero/露西亚-深红之渊/露西亚-深红之渊-招手/露西亚-深红之渊-招手_spr.png",
    "" + heros.staticURL + "images/hero/艾拉-溢彩/艾拉-溢彩-招手/艾拉-溢彩-招手_spr.png",
    "" + heros.staticURL + "images/hero/苏菲亚-银牙/苏菲亚-招手/苏菲亚-银牙-招手_spr.png",
    "" + heros.staticURL + "images/hero/库洛姆-弧光/库洛姆-弧光-招手/库洛姆-弧光-招手_spr.png",
    "" + heros.staticURL + "images/hero/薇拉/薇拉-招手/薇拉-招手_spr.png",
    "" + heros.staticURL + "images/hero/卡穆-狂犬/卡穆-狂犬-招手/卡穆-狂犬-招手_spr.png",
    "" + heros.staticURL + "images/hero/罗塞塔-凛冽/罗塞塔-招手/罗塞塔-凛冽-招手_spr.png",
    "" + heros.staticURL + "images/hero/曲-雀翎/曲-招手/曲-雀翎-招手_spr.png",
    "" + heros.staticURL + "images/hero/常羽-游麟/常宇-游麟-招手/常宇-游麟-招手_spr.png",
    "" + heros.staticURL + "images/hero/露娜-银冕/露娜-银冕-招手/露娜-银冕-招手_spr.png",
];

// 沮丧动作
let imgURL_sad = [
    "" + heros.staticURL + "images/hero/露西亚-红莲/露西亚-红莲-沮丧/露西亚-红莲-沮丧_spr.png",
    "" + heros.staticURL + "images/hero/露西亚-黎明/露西亚-黎明-沮丧/露西亚-黎明-沮丧_spr.png",
    "" + heros.staticURL + "images/hero/露西亚-鸦羽/露西亚-鸦羽-沮丧/露西亚-鸦羽-沮丧_spr.png",
    "" + heros.staticURL + "images/hero/丽芙-蚀暗/丽芙-蚀暗-沮丧/丽芙-蚀暗-沮丧_spr.png",
    "" + heros.staticURL + "images/hero/丽芙-流光/丽芙-流光-沮丧/丽芙-流光-沮丧_spr.png",
    "" + heros.staticURL + "images/hero/丽芙-仰光/丽芙-仰光-沮丧/丽芙-仰光-沮丧_spr.png",
    "" + heros.staticURL + "images/hero/里-异火/里-异火-沮丧/里-异火-沮丧_spr.png",
    "" + heros.staticURL + "images/hero/里-乱数/里-乱数-沮丧/里-乱数-沮丧_spr.png",
    "" + heros.staticURL + "images/hero/七实-风暴/七实-风暴-沮丧/七实-风暴-沮丧_spr.png",
    "" + heros.staticURL + "images/hero/七实-脉冲/七实-脉冲-沮丧/七实-脉冲-沮丧_spr.png",
    "" + heros.staticURL + "images/hero/神威-重能/神威-重能-沮丧/神威-重能-沮丧_spr.png",
    "" + heros.staticURL + "images/hero/神威-暗能/神威-暗能-沮丧/神威-暗能-沮丧_spr.png",
    "" + heros.staticURL + "images/hero/渡边-夜刃/渡边-夜刃-沮丧/渡边-夜刃-沮丧_spr.png",
    "" + heros.staticURL + "images/hero/渡边-夙星/渡边-夙星-沮丧/渡边-夙星-沮丧_spr.png",
    "" + heros.staticURL + "images/hero/比安卡-真理/比安卡-真理-沮丧/比安卡-真理-沮丧_spr.png",
    "" + heros.staticURL + "images/hero/比安卡-零度/比安卡-零度-沮丧/比安卡-零度-沮丧_spr.png",
    "" + heros.staticURL + "images/hero/卡列-爆裂/卡列-爆裂-沮丧/卡列-爆裂-沮丧_spr.png",
    "" + heros.staticURL + "images/hero/卡列-烬燃/卡列-烬燃-沮丧/卡列-烬燃-沮丧_spr.png",
    "" + heros.staticURL + "images/hero/露西亚-深红之渊/露西亚-深红之渊-沮丧/露西亚-深红之渊-沮丧_spr.png",
    "" + heros.staticURL + "images/hero/艾拉-溢彩/艾拉-溢彩-沮丧/艾拉-溢彩-沮丧_spr.png",
    "" + heros.staticURL + "images/hero/苏菲亚-银牙/苏菲亚-沮丧/苏菲亚-银牙-沮丧_spr.png",
    "" + heros.staticURL + "images/hero/库洛姆-弧光/库洛姆-弧光-沮丧/库洛姆-弧光-沮丧_spr.png",
    "" + heros.staticURL + "images/hero/薇拉/薇拉-沮丧/薇拉-沮丧_spr.png",
    "" + heros.staticURL + "images/hero/卡穆-狂犬/卡穆-狂犬-沮丧/卡穆-狂犬-沮丧_spr.png",
    "" + heros.staticURL + "images/hero/罗塞塔-凛冽/罗塞塔-沮丧/罗塞塔-凛冽-沮丧_spr.png",
    "" + heros.staticURL + "images/hero/曲-雀翎/曲-沮丧/曲-雀翎-沮丧_spr.png",
    "" + heros.staticURL + "images/hero/常羽-游麟/常宇-游麟-沮丧/常宇-游麟-沮丧_spr.png",
    "" + heros.staticURL + "images/hero/露娜-银冕/露娜-银冕-沮丧/露娜-银冕-沮丧_spr.png",
];

/*===========加载文字数据==========*/

const touchHeroTopMore = {
    "lxy": {
        name: '露西亚 红莲or黎明or鸦羽',
        speak1: `宿舎でなでられた回数が最も多いのは私、ルシアで <i></i> 回でした。`,
        speak2: '指揮官の手に触れると、私、自分自身を取り戻せるような気がするんです…'
    },
    "lufu": {
        name: '丽芙 蝕暗 or 流光 or 仰光',
        speak1: `宿舎でなでられた回数が最も多いのは私、リーフ <i></i>回でした。`,
        speak2: 'もし…もし可能であれば…私も指揮官の頭をなでてあげたい…あっいえなんでもありません。'
    },
    "li": {
        name: '里 异火 or 乱数',
        speak1: `宿舎でなでられた回数が最も多いのは私、リー <i></i>回でした。`,
        speak2: '子供扱いはやめていただきたいですね。え？子供扱いじゃない？だったらどういうつもりなんです？'
    },
    "qishi": {
        name: '七实 风暴 or 脉冲',
        speak1: `じゃじゃーん！宿舎でなでられた回数が一番多いのはナナミ、す！<i></i> 回でーす！`,
        speak2: '指揮官、ナナミのこと大好きでしょ？ナナミもだ～いすき！おそろいだね！'
    },
    "shenwei": {
        name: '神威 重能  or 暗能',
        speak1: `宿舎でなでられた回数が一番多いのは俺で、<i></i> 回だって！`,
        speak2: '今度は指揮官のこともなでさせてくれよな。だって不公平じゃんか！優しくするからいいだろ、な？な？'
    },
    "dubian": {
        name: '渡边 夜刃  or 夙星',
        speak1: `宿舎でなでられた回数が最も多いのは私で、<i></i> 回だった。`,
        speak2: 'まったく、私をいくつだと思っているんだ。いい大人にすることではないと思うが……指揮官が望むなら、まあ好きにしろ。'
    },
    "bianka": {
        name: '比安卡 真理 or 零度',
        speak1: `宿舎でなでられた回数が最も多いのは私で、<i></i> 回なでていただきました。`,
        speak2: '指揮官殿に甘えるつもりはないのですが、でも、あんなふうに頭に触れていただくと、とても落ち着きます。'
    },
    "klnn": {
        name: '卡列尼娜 爆裂 or 烬燃',
        speak1: `宿舎でなでられた回数が一番多いのはオレで、<i></i> だってよ。`,
        speak2: 'べっ別に、これくらい嬉しくもなんともねーよ、ルシアに勝てたのが嬉しいだけだからな！'
    },
    "alpha": {
        name: '深红之渊',
        speak1: `宿舎でなでられた回数が最も多いのは私…。<i></i> ですって。`,
        speak2: '私は昇格者よ？パニシングに侵蝕されるのが怖くないの？あなたって本当に変わってる。'
    },
    "ella": {
        name: '艾拉 溢彩',
        speak1: `宿舎でなでられた回数が一番多いのは私で、 <i></i> 回だったわ。`,
        speak2: '指揮官、私に何か言いたいことがあるの？…うん確かに、言葉より手で触れるほうが伝わることってあるかもね。'
    },
    "sufeiya": {
        name: '苏菲亚 银牙',
        speak1: `宿舎でなでられた回数が一番多いのは私。 <i></i> 回だった。`,
        speak2: '1回500黒パスを請求する……冗談、本気にした？指揮官ならなでていいよ、いつでも、何度でも。'
    },
    "kuluomu": {
        name: '库洛姆 弧光',
        speak1: `宿舎でなでられた回数が最も多いのは私、クロムで、 <i></i> 回です。`,
        speak2: 'あの…指揮官、私の髪型どこかおかしいですか？髪を整えてくださってるんですよね？。'
    },
    "weila": {
        name: '薇拉 瑰丽',
        speak1: `宿舎でなでられた回数が一番多いのは私、 <i></i> 回ですって。`,
        speak2: 'うふふ…私にもなでて欲しいんじゃなくて？いい子いい子って。ねえ、し・き・かん？'
    },
    "kamu": {
        name: '卡穆 狂犬',
        speak1: `宿舎でなでられた回数が一番多いのは俺。全部で <i></i> 回だそうだ。`,
        speak2: 'ってお前、正気か？俺は侵蝕体だぞ。俺は…俺のせいでお前に不幸になって欲しくない。'
    },
    "luosaita": {
        name: '罗塞塔 凛冽',
        speak1: `宿舎でなでられた回数が一番多いのは…え？私？ <i></i> 回もなでてくれたの？`,
        speak2: 'ごめんなさい、こういう交流はまだ慣れてなくて。…でも、嫌いじゃない。指揮官の手、温かい…'
    },
    "qu": {
        name: '曲 雀翎',
        speak1: `宿舎でなでられた回数が最も多いのは私でした。九龍の主たるこの私を <i></i> 回もなでるとは…なんという無礼な方でしょう。`,
        speak2: 'しかし、あなたのその自由奔放さ、なぜか嫌いになれないのです。'
    },
    "changyu": {
        name: '常羽 游麟',
        speak1: `宿舎でなでられた回数が一番多いのは俺、常羽だってさ。 <i></i> 回もなでまくってくれたみたいだけど…`,
        speak2: '頭はあんま触んないでくれないかな？背が伸びなくなったらどーすんだよ。'
    },
    "luna": {
        name: '露娜 银冕',
        speak1: `宿舎でなでられた回数が最も多いのは私、ルナ。この私を <i></i> 回もなでたのね。`,
        speak2: '姉さん以外の誰かになでられるなんて死んでも嫌！…なはずなのに、あなたの手は拒めないの、不思議ね。'
    },
}


const touchHeroTopLess = {
    "lxy": {
        name: '露西亚 红莲or黎明or鸦羽',
        speak1: `宿舎でなでられた回数が最も少ないのは私、ルシアで<i></i>回でした。`,
        speak2: '指揮官に触れると、私、自分自身を取り戻せる気がするんです。だから、もっと触れていただけると嬉しいです。'
    },
    "lufu": {
        name: '丽芙 蝕暗 or 流光 or 仰光',
        speak1: `宿舎でなでられた回数が一番少ないのは私、リーフで、<i></i>回でした。`,
        speak2: 'もし可能であれば…私、指揮官をなでてあげたい…だから指揮官も私をなでていただけると…あっいえなんでもありません。'
    },
    "li": {
        name: '里 异火 or 乱数',
        speak1: `宿舎でなでられた回数が最も少ないのは僕で、<i></i>回でした。`,
        speak2: 'まあ別に構いませんよ。他の連中みたいに子供扱いされて喜ぶ趣味はありませんから。'
    },
    "qishi": {
        name: '七实 风暴 or 脉冲',
        speak1: `えーん、宿舎でなでられた回数が一番少ないのはナナミで、<i></i>回だけだったの……`,
        speak2: '指揮官はナナミのこと好きじゃないの？ナナミはだ～いすきなのに～ぴえんぴえん( ﾉД`)'
    },
    "shenwei": {
        name: '神威 重能  or 暗能',
        speak1: `宿舎でなでられた回数が一番少ないのは俺で、<i></i>回だって！`,
        speak2: 'ちぇっ、だったら俺が指揮官をなでなでするぞ。優しくするからいいだろ、な？な？'
    },
    "dubian": {
        name: '渡边 夜刃  or 夙星',
        speak1: `宿舎でなでられた回数が最も少ないのは私で、<i></i>回だ。`,
        speak2: '私はいい年をした大人だ、なでてもらわなくても構わん。…ただ、時々、指揮官の顔を見られればそれでいい。'
    },
    "bianka": {
        name: '比安卡 真理 or 零度',
        speak1: `宿舎でなでられた回数が最も少ないのは私で、<i></i>回でした。`,
        speak2: '私は粛清部隊の所属ですし、近づき難く感じられるかも知れません…それでも、私は指揮官殿を支えたいと願っています'
    },
    "klnn": {
        name: '卡列尼娜 爆裂 or 烬燃',
        speak1: `宿舎でなでられた回数が一番少ないのはオレだってよ。<i></i>回か……`,
        speak2: 'べっ別に、これくらい悲しくもなんともねーよ、ルシアに負けたのが悔しいだけだからな！'
    },
    "alpha": {
        name: '深红之渊',
        speak1: `宿舎でなでられた回数が最も少ないのは私…。<i></i>回ですって。`,
        speak2: 'そうね、昇格者に近づくと侵蝕の危険があるものね。でも、触れることができなくても私はあなたをずっと見ているよ。'
    },
    "ella": {
        name: '艾拉 溢彩',
        speak1: `宿舎でなでられた回数が一番少ないのは私で、<i></i>回ですって。`,
        speak2: '…そうね、手で触れるより言葉のほうが伝わることってあるかもね。指揮官、私に伝えたいこと全部教えて。'
    },
    "sufeiya": {
        name: '苏菲亚 银牙',
        speak1: `宿舎でなでられた回数が一番少ないのは私。<i></i>回だった……`,
        speak2: '指揮官なら無料でいいからなでていいのに、いつでも、何度でも。ソフィア、待ってる。'
    },
    "kuluomu": {
        name: '库洛姆 弧光',
        speak1: `宿舎でなでられた回数が最も少ないのは私、クロムで、<i></i>回とのことですが……`,
        speak2: 'あの…指揮官、私に何かご不満がありましたらどうかおっしゃってください。全力で改善します。'
    },
    "weila": {
        name: '薇拉 瑰丽',
        speak1: `宿舎でなでられた回数が一番少ないのは私で、<i></i>回ですってね？`,
        speak2: 'うふふ…私が怖いの？大丈夫よ、こっちにいらっしゃい、なでなでしてあげるから。ねえ、し・き・かん？'
    },
    "kamu": {
        name: '卡穆 狂犬',
        speak1: `宿舎でなでられた回数が一番少ないのは俺。<i></i>回だ。`,
        speak2: 'フン、正しい選択だな、俺は侵蝕体だから。俺は…俺のせいでお前に不幸になって欲しくない。'
    },
    "luosaita": {
        name: '罗塞塔 凛冽',
        speak1: `宿舎でなでられた回数が一番少ないのは私。<i></i>回だった。`,
        speak2: 'ごめんなさい、人間との交流はまだ慣れてなくて。…でも、指揮官に触れられるのは嫌いじゃないよ…'
    },
    "qu": {
        name: '曲 雀翎',
        speak1: `宿舎でなでられた回数が最も少ないのは私で、<i></i>回でした。`,
        speak2: 'なるほど、あなたは自由奔放にみえて、九龍の主たるこの私に対する礼儀はわきまえているのですね。'
    },
    "changyu": {
        name: '常羽 游麟',
        speak1: `宿舎でなでられた回数が一番少ないのは俺、常羽で、<i></i>回だってさ。`,
        speak2: 'あんま頭触られると背が伸びなくなるかも知れないけど、少しだけならなでてもいいんだぜ？'
    },
    "luna": {
        name: '露娜 银冕',
        speak1: `宿舎でなでられた回数が最も少ないのは私、ルナ。<i></i>回ね。`,
        speak2: 'まあいいわ、好きにすれば？私だって姉さん以外の誰かになでられるなんて死んでも嫌だから'
    },
}



const touchHeroGoPlay = {
    "lxy": {
        name: '露西亚 红莲or黎明or鸦羽',
        speak1: `出撃回数が最も多いのは私、ルシアで、 <i></i> 回でした。`,
        speak2: 'いままでもこれからも、私は指揮官の刃です。どうかこれからもそばにいさせてください。'
    },
    "lufu": {
        name: '丽芙 蝕暗 or 流光 or 仰光',
        speak1: `出撃回数が最も多いのは私…ですか？ <i></i> 回も出撃したんですね。`,
        speak2: 'みんなより戦闘能力は劣るかも知れませんが…指揮官の足を引っ張らないようがんばります！'
    },
    "li": {
        name: '里 异火 or 乱数',
        speak1: `出撃回数が最も多いのは僕で、 <i></i> 回でした。`,
        speak2: '僕がいればなんの問題もありません。これからもご命令を、指揮官。'
    },
    "qishi": {
        name: '七实 风暴 or 脉冲',
        speak1: `イエーイ、出撃回数が一番多いのはナナミ、 <i></i> 回でーーす！`,
        speak2: 'ナナミがいれば天上天下唯我独尊、でしょ？'
    },
    "shenwei": {
        name: '神威 重能  or 暗能',
        speak1: `出撃回数が一番多いのは俺だって？へぇ～ <i></i> 回も出撃したんだ！`,
        speak2: 'やっぱ俺って頼りになるだろ？これからも戦闘なら俺に任せてくれ！'
    },
    "dubian": {
        name: '渡边 夜刃  or 夙星',
        speak1: `出撃回数が最も多いのは私で、 <i></i> 回だった。`,
        speak2: '指揮官の役に立てたならよかった。これからも力の限り支援する。'
    },
    "bianka": {
        name: '比安卡 真理 or 零度',
        speak1: `出撃回数が最も多いのは私で、 <i></i> 回でした。`,
        speak2: 'これからも指揮官殿のために全力を尽くします。神の御加護を…'
    },
    "bianka": {
        name: '卡列尼娜 爆裂 or 烬燃',
        speak1: `出撃回数が一番多いのはオレだってよ。 <i></i> 回か…ま、こんなもんだな。`,
        speak2: 'これからもオレを戦わせてくれ。そうしたらオレはもっともっと強くなる、お前のために…'
    },
    "alpha": {
        name: '深红之渊',
        speak1: `出撃回数が最も多いのは私…。 <i></i> 回よ。`,
        speak2: 'そう、戦場にはあなたと私がいれば十分、やっとわかったのね。'
    },
    "ella": {
        name: '艾拉 溢彩',
        speak1: `出撃回数が一番多いのは私で、 <i></i> 回出撃したんですって。`,
        speak2: '私はこれからも世界のキャンバスに絵を描くから、指揮官、見守っていてね！'
    },
    "sufeiya": {
        name: '苏菲亚 银牙',
        speak1: `出撃回数が一番多いのは私。 <i></i> 回だった。`,
        speak2: 'アディレの傭兵サービスをご利用いただきありがとうございます。…商売を抜きにしても、ソフィア、指揮官を守る。'
    },
    "kuluomu": {
        name: '库洛姆 弧光',
        speak1: `出撃回数が最も多いのは私、クロムで、全部で <i></i> 回でした。`,
        speak2: '指揮官と共に戦えて光栄です。これからも全力を尽くして、進み続けましょう！'
    },
    "weila": {
        name: '薇拉 瑰丽',
        speak1: `出撃回数が一番多いのは私で、 <i></i> 回です。`,
        speak2: 'ねえ指揮官、これからも私の期待を裏切らないで、もっと痛みを感じさせてちょうだい。'
    },
    "kamu": {
        name: '卡穆 狂犬',
        speak1: `出撃回数が一番多いのは俺で、全部で <i></i> 回出撃したそうだ。`,
        speak2: 'フン、いいだろう。これからもムカつく奴らをぶち壊してやろうじゃねぇか、お前と一緒に。'
    },
    "luosaita": {
        name: '罗塞塔 凛冽',
        speak1: `出撃回数が一番多いのは…え、私、 <i></i> 回も出撃したの？`,
        speak2: '互いに助け合う…これが私の信念。これからも指揮官を守れたら、嬉しい。'
    },
    "qu": {
        name: '曲 雀翎',
        speak1: `出撃回数が最も多いのは私、曲で、 <i></i> 回しました。`,
        speak2: '仕方のない人ですね。あなたが無駄なあがきをやめるまで、つきあってあげましょう'
    },
    "changyu": {
        name: '常羽 游麟',
        speak1: `出撃回数が一番多いのは俺、常羽で、全部で <i></i> 回だってさ。`,
        speak2: 'しゃーない、無料サービスで支援してやるから、俺に任せとけ！'
    },
    "luna": {
        name: '露娜 银冕',
        speak1: `出撃回数が一番多いのは私、ルナ。 <i></i> 回よ。`,
        speak2: '昇格ネットワークの力、やっとあなたにもわかったみたいね。'
    },
}


/*==============资源文字完毕===========*/


// console.log(touchHeroTopMore.lxy)
// console.log(touchHeroTopMore.lxy.speak1)
// $('.txt025').html(touchHeroTopMore.lxy.speak1)
// $('.txt025').find('i').text('100')
// console.log($('.txt025').find('b').text())


// 日文名字映射
// const touchHeroName = {
//     id1011002:'リー  異火', //  假设这里有个图 里   异火
//     id1021001:'ルシア 紅蓮', //      露西亚 紅蓮
//     id1031001:'リーフ 闇蝕', //      丽芙  蚀暗
//     id1041002:'ビアンカ 零度', //      比安卡 零度
//     id1051001:'ナナミ 狂風', //      七实  风暴
//     id1061002:'カムイ 重力', //      神威  重能
//     id1071002:'カレニーナ 爆裂', //      卡列尼娜    爆裂
//     id1081002:'ワタナベ 夜刃', //      渡边  夜刃
//     id1021002:'ルシア 黎明', //      露西亚 黎明
//     id1031002:'リーフ 流光', //     丽芙  流光
//     id1011003:'リー  乱数', //     里   乱数
//     id1031003:'リーフ 来光', //      丽芙  仰光
//     id1061003:'カムイ 暗力', //     神威  暗能
//     id1071003:'カレニーナ 灼熱', //      卡列尼娜    烬燃
//     id1051003:'<span></span> 波動', //      七实  脉冲
//     id1021003:'ルシア 深淵ノ紅 ', //       露西亚 深红之渊
//     id1081003:'ワタナベ 景星', //      渡边  夙星
//     id1091002:'アイラ 極彩', //      艾拉  溢彩
//     id1041003:'ビアンカ 真理', //      比安卡 真理
//     id1111002:'ソフィア 銀牙', //      苏菲亚 銀牙
//     id1121002:'クロム 弧光', //      库洛姆 弧光
//     id1021004:'ルシア 鴉羽', //      露西亚 鴉羽
//     id1131002:'ヴィラ 麗酷', //      薇拉  瑰丽
//     id1511003:'カム 狂犬', //      卡穆  狂犬
//     id1141003:'ロゼッタ  凛烈', //      卢塞塔 凛冽
//     id1521003:'曲  燕雀', //      曲   雀翎
//     id1161002:'常羽 遊麟', //    常羽  游麟
//     id1171003:'ルナ 銀冠' //      露娜  银冕
// }