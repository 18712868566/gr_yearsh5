var _touchHeroTopMore, _touchHeroTopLess, _touchHeroGoPlay, heros = {
    app: null,
    touchNum: 1,
    staticURL: "../",
    touchMoreId: 4,
    touchMoreNumber: 88,
    touchLessId: 1,
    touchLessNumber: 56,
    goPlayId: 1,
    goPlayNumber: 555,
    heroArrs: [],
    loading_hero_w: document.body.clientWidth,
    loading_hero_h: document.body.clientHeight
}, imgURL_pao = [ heros.staticURL + "images/hero/露西亚-红莲/露西亚-红莲-走路/lxy_hl_move.png", heros.staticURL + "images/hero/丽芙-蚀暗/丽芙-蚀暗-走路/丽芙-蚀暗-走路_spr.png", heros.staticURL + "images/hero/里-异火/里-异火-走路/里-异火-走路_spr.png", heros.staticURL + "images/hero/渡边-夜刃/渡边-夜刃-走路/渡边-夜刃-走路_spr.png", heros.staticURL + "images/hero/神威-重能/神威-重能-走路/神威-重能-走路_spr.png", heros.staticURL + "images/hero/七实-风暴/七实-风暴-走路/七实-风暴-走路_spr.png", heros.staticURL + "images/hero/卡列-爆裂/卡列-爆裂-走路/卡列-爆裂-走路_spr.png", heros.staticURL + "images/hero/比安卡-零度/比安卡-零度-走路/bianka-lingdu走路_spr.png" ], imgURL_move = [ "../images/hero/丽芙-蚀暗/丽芙-蚀暗-打招呼+走路/丽芙-蚀暗-打招呼+走路_spr.png", "../images/hero/里-异火/里-异火-打招呼-走路/里-异火-打招呼-走路_spr.png", "../images/hero/渡边-夜刃/渡边-夜刃-打招呼+走路/渡边-夜刃-打招呼-走路_spr.png", "../images/hero/神威-重能/神威-重能-打招呼+走路/神威-重能-打招呼-走路_spr.png", "../images/hero/七实-风暴/七实-风暴-打招呼+走路/七实-风暴-打招呼-走路_spr.png", "../images/hero/卡列-爆裂/卡列-爆裂-打招呼+走路/卡列-爆裂-打招呼-走路_spr.png", "../images/hero/比安卡-零度/比安卡-零度-打招呼+走路/比安卡-零度-打招呼-走路_spr.png" ], imgURL_bye = [ heros.staticURL + "images/hero/露西亚-红莲/露西亚-红莲-招手/露西亚-红莲-招手_spr.png", heros.staticURL + "images/hero/露西亚-黎明/露西亚-黎明-招手/露西亚-黎明-招手_spr.png", heros.staticURL + "images/hero/露西亚-鸦羽/露西亚-鸦羽-招手/露西亚-鸦羽-招手_spr.png", heros.staticURL + "images/hero/丽芙-蚀暗/丽芙-蚀暗-招手/丽芙-蚀暗-招手_spr.png", heros.staticURL + "images/hero/丽芙-流光/丽芙-流光-招手/丽芙-流光-招手_spr.png", heros.staticURL + "images/hero/丽芙-仰光/丽芙-仰光-招手/丽芙-仰光-招手_spr.png", heros.staticURL + "images/hero/里-异火/里-异火-招手/里-异火-招手_spr.png", heros.staticURL + "images/hero/里-乱数/里-乱数-招手/里-乱数-招手_spr.png", heros.staticURL + "images/hero/七实-风暴/七实-风暴-招手/七实-风暴-招手_spr.png", heros.staticURL + "images/hero/七实-脉冲/七实-脉冲-招手/七实-脉冲-招手_spr.png", heros.staticURL + "images/hero/神威-重能/神威-重能-招手/神威-重能-招手_spr.png", heros.staticURL + "images/hero/神威-暗能/神威-暗能-招手/神威-暗能-招手_spr.png", heros.staticURL + "images/hero/渡边-夜刃/渡边-夜刃-招手/渡边-夜刃-招手_spr.png", heros.staticURL + "images/hero/渡边-夙星/渡边-夙星-招手/渡边-夙星-招手_spr.png", heros.staticURL + "images/hero/比安卡-真理/比安卡-真理-招手/比安卡-真理-招手_spr.png", heros.staticURL + "images/hero/比安卡-零度/比安卡-零度-招手/比安卡-零度-招手_spr.png", heros.staticURL + "images/hero/卡列-爆裂/卡列-爆裂-招手/卡列-爆裂-招手_spr.png", heros.staticURL + "images/hero/卡列-烬燃/卡列-烬燃-招手/卡列-烬燃-招手_spr.png", heros.staticURL + "images/hero/露西亚-深红之渊/露西亚-深红之渊-招手/露西亚-深红之渊-招手_spr.png", heros.staticURL + "images/hero/艾拉-溢彩/艾拉-溢彩-招手/艾拉-溢彩-招手_spr.png", heros.staticURL + "images/hero/苏菲亚-银牙/苏菲亚-招手/苏菲亚-银牙-招手_spr.png", heros.staticURL + "images/hero/库洛姆-弧光/库洛姆-弧光-招手/库洛姆-弧光-招手_spr.png", heros.staticURL + "images/hero/卡穆-狂犬/卡穆-狂犬-招手/卡穆-狂犬-招手_spr.png", heros.staticURL + "images/hero/罗塞塔-凛冽/罗塞塔-招手/罗塞塔-凛冽-招手_spr.png", heros.staticURL + "images/hero/曲-雀翎/曲-招手/曲-雀翎-招手_spr.png", heros.staticURL + "images/hero/常羽-游麟/常宇-游麟-招手/常宇-游麟-招手_spr.png", heros.staticURL + "images/hero/露娜-银冕/露娜-银冕-招手/露娜-银冕-招手_spr.png" ], imgURL_sad = [ heros.staticURL + "images/hero/露西亚-红莲/露西亚-红莲-沮丧/露西亚-红莲-沮丧_spr.png", heros.staticURL + "images/hero/露西亚-黎明/露西亚-黎明-沮丧/露西亚-黎明-沮丧_spr.png", heros.staticURL + "images/hero/露西亚-鸦羽/露西亚-鸦羽-沮丧/露西亚-鸦羽-沮丧_spr.png", heros.staticURL + "images/hero/丽芙-蚀暗/丽芙-蚀暗-沮丧/丽芙-蚀暗-沮丧_spr.png", heros.staticURL + "images/hero/丽芙-流光/丽芙-流光-沮丧/丽芙-流光-沮丧_spr.png", heros.staticURL + "images/hero/丽芙-仰光/丽芙-仰光-沮丧/丽芙-仰光-沮丧_spr.png", heros.staticURL + "images/hero/里-异火/里-异火-沮丧/里-异火-沮丧_spr.png", heros.staticURL + "images/hero/里-乱数/里-乱数-沮丧/里-乱数-沮丧_spr.png", heros.staticURL + "images/hero/七实-风暴/七实-风暴-沮丧/七实-风暴-沮丧_spr.png", heros.staticURL + "images/hero/七实-脉冲/七实-脉冲-沮丧/七实-脉冲-沮丧_spr.png", heros.staticURL + "images/hero/神威-重能/神威-重能-沮丧/神威-重能-沮丧_spr.png", heros.staticURL + "images/hero/神威-暗能/神威-暗能-沮丧/神威-暗能-沮丧_spr.png", heros.staticURL + "images/hero/渡边-夜刃/渡边-夜刃-沮丧/渡边-夜刃-沮丧_spr.png", heros.staticURL + "images/hero/渡边-夙星/渡边-夙星-沮丧/渡边-夙星-沮丧_spr.png", heros.staticURL + "images/hero/比安卡-真理/比安卡-真理-沮丧/比安卡-真理-沮丧_spr.png", heros.staticURL + "images/hero/比安卡-零度/比安卡-零度-沮丧/比安卡-零度-沮丧_spr.png", heros.staticURL + "images/hero/卡列-爆裂/卡列-爆裂-沮丧/卡列-爆裂-沮丧_spr.png", heros.staticURL + "images/hero/卡列-烬燃/卡列-烬燃-沮丧/卡列-烬燃-沮丧_spr.png", heros.staticURL + "images/hero/露西亚-深红之渊/露西亚-深红之渊-沮丧/露西亚-深红之渊-沮丧_spr.png", heros.staticURL + "images/hero/艾拉-溢彩/艾拉-溢彩-沮丧/艾拉-溢彩-沮丧_spr.png", heros.staticURL + "images/hero/苏菲亚-银牙/苏菲亚-沮丧/苏菲亚-银牙-沮丧_spr.png", heros.staticURL + "images/hero/库洛姆-弧光/库洛姆-弧光-沮丧/库洛姆-弧光-沮丧_spr.png", heros.staticURL + "images/hero/卡穆-狂犬/卡穆-狂犬-沮丧/卡穆-狂犬-沮丧_spr.png", heros.staticURL + "images/hero/罗塞塔-凛冽/罗塞塔-沮丧/罗塞塔-凛冽-沮丧_spr.png", heros.staticURL + "images/hero/曲-雀翎/曲-沮丧/曲-雀翎-沮丧_spr.png", heros.staticURL + "images/hero/常羽-游麟/常宇-游麟-沮丧/常宇-游麟-沮丧_spr.png", heros.staticURL + "images/hero/露娜-银冕/露娜-银冕-沮丧/露娜-银冕-沮丧_spr.png" ], touchHeroTopMore = ((_touchHeroTopMore = {
    lxy: {
        name: "露西亚 红莲or黎明or鸦羽",
        speak1: "宿舎でなでられた回数が最も多いのは私、ルシアで <i></i> 回でした。",
        speak2: "指揮官の手に触れると、私、自分自身を取り戻せるような気がするんです…"
    },
    lufu: {
        name: "丽芙 蝕暗 or 流光 or 仰光",
        speak1: "宿舎でなでられた回数が最も多いのは私、リーフ <i></i>回でした。",
        speak2: "もし…もし可能であれば…私も指揮官の頭をなでてあげたい…あっいえなんでもありません。"
    },
    li: {
        name: "里 异火 or 乱数",
        speak1: "宿舎でなでられた回数が最も多いのは私、リー <i></i>回でした。",
        speak2: "子供扱いはやめていただきたいですね。え？子供扱いじゃない？だったらどういうつもりなんです？"
    },
    qishi: {
        name: "七实 风暴 or 脉冲",
        speak1: "じゃじゃーん！宿舎でなでられた回数が一番多いのはナナミ、す！<i></i> 回でーす！",
        speak2: "指揮官、ナナミのこと大好きでしょ？ナナミもだ～いすき！おそろいだね！"
    },
    shenwei: {
        name: "神威 重能  or 暗能",
        speak1: "宿舎でなでられた回数が一番多いのは俺で、<i></i> 回だって！",
        speak2: "今度は指揮官のこともなでさせてくれよな。だって不公平じゃんか！優しくするからいいだろ、な？な？"
    },
    dubian: {
        name: "渡边 夜刃  or 夙星",
        speak1: "宿舎でなでられた回数が最も多いのは私で、<i></i> 回だった。",
        speak2: "まったく、私をいくつだと思っているんだ。いい大人にすることではないと思うが……指揮官が望むなら、まあ好きにしろ。"
    },
    bianka: {
        name: "比安卡 真理 or 零度",
        speak1: "宿舎でなでられた回数が最も多いのは私で、<i></i> 回なでていただきました。",
        speak2: "指揮官殿に甘えるつもりはないのですが、でも、あんなふうに頭に触れていただくと、とても落ち着きます。"
    }
}).bianka = {
    name: "卡列尼娜 爆裂 or 烬燃",
    speak1: "宿舎でなでられた回数が一番多いのはオレで、<i></i> だってよ。",
    speak2: "べっ別に、これくらい嬉しくもなんともねーよ、ルシアに勝てたのが嬉しいだけだからな！"
}, _touchHeroTopMore.alpha = {
    name: "深红之渊",
    speak1: "宿舎でなでられた回数が最も多いのは私…。<i></i> ですって。",
    speak2: "私は昇格者よ？パニシングに侵蝕されるのが怖くないの？あなたって本当に変わってる。"
}, _touchHeroTopMore.ella = {
    name: "艾拉 溢彩",
    speak1: "宿舎でなでられた回数が一番多いのは私で、 <i></i> 回だったわ。",
    speak2: "指揮官、私に何か言いたいことがあるの？…うん確かに、言葉より手で触れるほうが伝わることってあるかもね。"
}, _touchHeroTopMore.sufeiya = {
    name: "苏菲亚 银牙",
    speak1: "宿舎でなでられた回数が一番多いのは私。 <i></i> 回だった。",
    speak2: "1回500黒パスを請求する……冗談、本気にした？指揮官ならなでていいよ、いつでも、何度でも。"
}, _touchHeroTopMore.kuluomu = {
    name: "库洛姆 弧光",
    speak1: "宿舎でなでられた回数が最も多いのは私、クロムで、 <i></i> 回です。",
    speak2: "あの…指揮官、私の髪型どこかおかしいですか？髪を整えてくださってるんですよね？。"
}, _touchHeroTopMore.weila = {
    name: "薇拉 瑰丽",
    speak1: "宿舎でなでられた回数が一番多いのは私、 <i></i> 回ですって。",
    speak2: "うふふ…私にもなでて欲しいんじゃなくて？いい子いい子って。ねえ、し・き・かん？"
}, _touchHeroTopMore.kamu = {
    name: "卡穆 狂犬",
    speak1: "宿舎でなでられた回数が一番多いのは俺。全部で <i></i> 回だそうだ。",
    speak2: "ってお前、正気か？俺は侵蝕体だぞ。俺は…俺のせいでお前に不幸になって欲しくない。"
}, _touchHeroTopMore.luosaita = {
    name: "罗塞塔 凛冽",
    speak1: "宿舎でなでられた回数が一番多いのは…え？私？ <i></i> 回もなでてくれたの？",
    speak2: "ごめんなさい、こういう交流はまだ慣れてなくて。…でも、嫌いじゃない。指揮官の手、温かい…"
}, _touchHeroTopMore.qu = {
    name: "曲 雀翎",
    speak1: "宿舎でなでられた回数が最も多いのは私でした。九龍の主たるこの私を <i></i> 回もなでるとは…なんという無礼な方でしょう。",
    speak2: "しかし、あなたのその自由奔放さ、なぜか嫌いになれないのです。"
}, _touchHeroTopMore.changyu = {
    name: "常羽 游麟",
    speak1: "宿舎でなでられた回数が一番多いのは俺、常羽だってさ。 <i></i> 回もなでまくってくれたみたいだけど…",
    speak2: "頭はあんま触んないでくれないかな？背が伸びなくなったらどーすんだよ。"
}, _touchHeroTopMore.luna = {
    name: "露娜 银冕",
    speak1: "宿舎でなでられた回数が最も多いのは私、ルナ。この私を <i></i> 回もなでたのね。",
    speak2: "姉さん以外の誰かになでられるなんて死んでも嫌！…なはずなのに、あなたの手は拒めないの、不思議ね。"
}, _touchHeroTopMore), touchHeroTopLess = ((_touchHeroTopLess = {
    lxy: {
        name: "露西亚 红莲or黎明or鸦羽",
        speak1: "宿舎でなでられた回数が最も少ないのは私、ルシアで<i></i>回でした。",
        speak2: "指揮官に触れると、私、自分自身を取り戻せる気がするんです。だから、もっと触れていただけると嬉しいです。"
    },
    lufu: {
        name: "丽芙 蝕暗 or 流光 or 仰光",
        speak1: "宿舎でなでられた回数が一番少ないのは私、リーフで、<i></i>回でした。",
        speak2: "もし可能であれば…私、指揮官をなでてあげたい…だから指揮官も私をなでていただけると…あっいえなんでもありません。"
    },
    li: {
        name: "里 异火 or 乱数",
        speak1: "宿舎でなでられた回数が最も少ないのは僕で、<i></i>回でした。",
        speak2: "まあ別に構いませんよ。他の連中みたいに子供扱いされて喜ぶ趣味はありませんから。"
    },
    qishi: {
        name: "七实 风暴 or 脉冲",
        speak1: "えーん、宿舎でなでられた回数が一番少ないのはナナミで、<i></i>回だけだったの……",
        speak2: "指揮官はナナミのこと好きじゃないの？ナナミはだ～いすきなのに～ぴえんぴえん( ﾉД`)"
    },
    shenwei: {
        name: "神威 重能  or 暗能",
        speak1: "宿舎でなでられた回数が一番少ないのは俺で、<i></i>回だって！",
        speak2: "ちぇっ、だったら俺が指揮官をなでなでするぞ。優しくするからいいだろ、な？な？"
    },
    dubian: {
        name: "渡边 夜刃  or 夙星",
        speak1: "宿舎でなでられた回数が最も少ないのは私で、<i></i>回だ。",
        speak2: "私はいい年をした大人だ、なでてもらわなくても構わん。…ただ、時々、指揮官の顔を見られればそれでいい。"
    },
    bianka: {
        name: "比安卡 真理 or 零度",
        speak1: "宿舎でなでられた回数が最も少ないのは私で、<i></i>回でした。",
        speak2: "私は粛清部隊の所属ですし、近づき難く感じられるかも知れません…それでも、私は指揮官殿を支えたいと願っています"
    }
}).bianka = {
    name: "卡列尼娜 爆裂 or 烬燃",
    speak1: "宿舎でなでられた回数が一番少ないのはオレだってよ。<i></i>回か……",
    speak2: "べっ別に、これくらい悲しくもなんともねーよ、ルシアに負けたのが悔しいだけだからな！"
}, _touchHeroTopLess.alpha = {
    name: "深红之渊",
    speak1: "宿舎でなでられた回数が最も少ないのは私…。<i></i>回ですって。",
    speak2: "そうね、昇格者に近づくと侵蝕の危険があるものね。でも、触れることができなくても私はあなたをずっと見ているよ。"
}, _touchHeroTopLess.ella = {
    name: "艾拉 溢彩",
    speak1: "宿舎でなでられた回数が一番少ないのは私で、<i></i>回ですって。",
    speak2: "…そうね、手で触れるより言葉のほうが伝わることってあるかもね。指揮官、私に伝えたいこと全部教えて。"
}, _touchHeroTopLess.sufeiya = {
    name: "苏菲亚 银牙",
    speak1: "宿舎でなでられた回数が一番少ないのは私。<i></i>回だった……",
    speak2: "指揮官なら無料でいいからなでていいのに、いつでも、何度でも。ソフィア、待ってる。"
}, _touchHeroTopLess.kuluomu = {
    name: "库洛姆 弧光",
    speak1: "宿舎でなでられた回数が最も少ないのは私、クロムで、<i></i>回とのことですが……",
    speak2: "あの…指揮官、私に何かご不満がありましたらどうかおっしゃってください。全力で改善します。"
}, _touchHeroTopLess.weila = {
    name: "薇拉 瑰丽",
    speak1: "宿舎でなでられた回数が一番少ないのは私で、<i></i>回ですってね？",
    speak2: "うふふ…私が怖いの？大丈夫よ、こっちにいらっしゃい、なでなでしてあげるから。ねえ、し・き・かん？"
}, _touchHeroTopLess.kamu = {
    name: "卡穆 狂犬",
    speak1: "宿舎でなでられた回数が一番少ないのは俺。<i></i>回だ。",
    speak2: "フン、正しい選択だな、俺は侵蝕体だから。俺は…俺のせいでお前に不幸になって欲しくない。"
}, _touchHeroTopLess.luosaita = {
    name: "罗塞塔 凛冽",
    speak1: "宿舎でなでられた回数が一番少ないのは私。<i></i>回だった。",
    speak2: "ごめんなさい、人間との交流はまだ慣れてなくて。…でも、指揮官に触れられるのは嫌いじゃないよ…"
}, _touchHeroTopLess.qu = {
    name: "曲 雀翎",
    speak1: "宿舎でなでられた回数が最も少ないのは私で、<i></i>回でした。",
    speak2: "なるほど、あなたは自由奔放にみえて、九龍の主たるこの私に対する礼儀はわきまえているのですね。"
}, _touchHeroTopLess.changyu = {
    name: "常羽 游麟",
    speak1: "宿舎でなでられた回数が一番少ないのは俺、常羽で、<i></i>回だってさ。",
    speak2: "あんま頭触られると背が伸びなくなるかも知れないけど、少しだけならなでてもいいんだぜ？"
}, _touchHeroTopLess.luna = {
    name: "露娜 银冕",
    speak1: "宿舎でなでられた回数が最も少ないのは私、ルナ。<i></i>回ね。",
    speak2: "まあいいわ、好きにすれば？私だって姉さん以外の誰かになでられるなんて死んでも嫌だから"
}, _touchHeroTopLess), touchHeroGoPlay = ((_touchHeroGoPlay = {
    lxy: {
        name: "露西亚 红莲or黎明or鸦羽",
        speak1: "出撃回数が最も多いのは私、ルシアで、 <i></i> 回でした。",
        speak2: "いままでもこれからも、私は指揮官の刃です。どうかこれからもそばにいさせてください。"
    },
    lufu: {
        name: "丽芙 蝕暗 or 流光 or 仰光",
        speak1: "出撃回数が最も多いのは私…ですか？ <i></i> 回も出撃したんですね。",
        speak2: "みんなより戦闘能力は劣るかも知れませんが…指揮官の足を引っ張らないようがんばります！"
    },
    li: {
        name: "里 异火 or 乱数",
        speak1: "出撃回数が最も多いのは僕で、 <i></i> 回でした。",
        speak2: "僕がいればなんの問題もありません。これからもご命令を、指揮官。"
    },
    qishi: {
        name: "七实 风暴 or 脉冲",
        speak1: "イエーイ、出撃回数が一番多いのはナナミ、 <i></i> 回でーーす！",
        speak2: "ナナミがいれば天上天下唯我独尊、でしょ？"
    },
    shenwei: {
        name: "神威 重能  or 暗能",
        speak1: "出撃回数が一番多いのは俺だって？へぇ～ <i></i> 回も出撃したんだ！",
        speak2: "やっぱ俺って頼りになるだろ？これからも戦闘なら俺に任せてくれ！"
    },
    dubian: {
        name: "渡边 夜刃  or 夙星",
        speak1: "出撃回数が最も多いのは私で、 <i></i> 回だった。",
        speak2: "指揮官の役に立てたならよかった。これからも力の限り支援する。"
    },
    bianka: {
        name: "比安卡 真理 or 零度",
        speak1: "出撃回数が最も多いのは私で、 <i></i> 回でした。",
        speak2: "これからも指揮官殿のために全力を尽くします。神の御加護を…"
    }
}).bianka = {
    name: "卡列尼娜 爆裂 or 烬燃",
    speak1: "出撃回数が一番多いのはオレだってよ。 <i></i> 回か…ま、こんなもんだな。",
    speak2: "これからもオレを戦わせてくれ。そうしたらオレはもっともっと強くなる、お前のために…"
}, _touchHeroGoPlay.alpha = {
    name: "深红之渊",
    speak1: "出撃回数が最も多いのは私…。 <i></i> 回よ。",
    speak2: "そう、戦場にはあなたと私がいれば十分、やっとわかったのね。"
}, _touchHeroGoPlay.ella = {
    name: "艾拉 溢彩",
    speak1: "出撃回数が一番多いのは私で、 <i></i> 回出撃したんですって。",
    speak2: "私はこれからも世界のキャンバスに絵を描くから、指揮官、見守っていてね！"
}, _touchHeroGoPlay.sufeiya = {
    name: "苏菲亚 银牙",
    speak1: "出撃回数が一番多いのは私。 <i></i> 回だった。",
    speak2: "アディレの傭兵サービスをご利用いただきありがとうございます。…商売を抜きにしても、ソフィア、指揮官を守る。"
}, _touchHeroGoPlay.kuluomu = {
    name: "库洛姆 弧光",
    speak1: "出撃回数が最も多いのは私、クロムで、全部で <i></i> 回でした。",
    speak2: "指揮官と共に戦えて光栄です。これからも全力を尽くして、進み続けましょう！"
}, _touchHeroGoPlay.weila = {
    name: "薇拉 瑰丽",
    speak1: "出撃回数が一番多いのは私で、 <i></i> 回です。",
    speak2: "ねえ指揮官、これからも私の期待を裏切らないで、もっと痛みを感じさせてちょうだい。"
}, _touchHeroGoPlay.kamu = {
    name: "卡穆 狂犬",
    speak1: "出撃回数が一番多いのは俺で、全部で <i></i> 回出撃したそうだ。",
    speak2: "フン、いいだろう。これからもムカつく奴らをぶち壊してやろうじゃねぇか、お前と一緒に。"
}, _touchHeroGoPlay.luosaita = {
    name: "罗塞塔 凛冽",
    speak1: "出撃回数が一番多いのは…え、私、 <i></i> 回も出撃したの？",
    speak2: "互いに助け合う…これが私の信念。これからも指揮官を守れたら、嬉しい。"
}, _touchHeroGoPlay.qu = {
    name: "曲 雀翎",
    speak1: "出撃回数が最も多いのは私、曲で、 <i></i> 回しました。",
    speak2: "仕方のない人ですね。あなたが無駄なあがきをやめるまで、つきあってあげましょう"
}, _touchHeroGoPlay.changyu = {
    name: "常羽 游麟",
    speak1: "出撃回数が一番多いのは俺、常羽で、全部で <i></i> 回だってさ。",
    speak2: "しゃーない、無料サービスで支援してやるから、俺に任せとけ！"
}, _touchHeroGoPlay.luna = {
    name: "露娜 银冕",
    speak1: "出撃回数が一番多いのは私、ルナ。 <i></i> 回よ。",
    speak2: "昇格ネットワークの力、やっとあなたにもわかったみたいね。"
}, _touchHeroGoPlay);