var logg = null, dialog = dialog || {}, flagPC = !0;

function timestampToTime(d) {
    d = new Date(1e3 * d);
    return d.getFullYear() + "-" + ((d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1) + "-") + ((d.getDate() < 10 ? "0" + d.getDate() : d.getDate()) + " ") + ((d.getHours() < 10 ? "0" + d.getHours() : d.getHours()) + ":") + ((d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()) + ":") + (d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds());
}

dialog = {
    closeDiv: function() {
        $("body").css("position", "relative"), $("#alertInfo").stop(!0, !0).animate({
            top: "-100%",
            opacity: "0"
        }, "fast", function() {
            $("#maskLayer,#alertInfo").remove().hide(), $(".wrap").removeClass("row"), setTimeout(function() {
                istureZunj = 0;
            }, 500);
        });
    },
    maskLayer: function() {
        $("#maskLayer,#alertInfo").remove();
        $("body").append("<div id='maskLayer'></div>", "<div id='alertInfo'><span class='close'>关闭</span></div>"), 
        $(".wrap").addClass("row"), $("#maskLayer").height("100%").show();
    },
    showInfo: function(d) {
        dialog.maskLayer();
        var n = $(window).height(), t = $(document).scrollTop();
        $("#alertInfo").append(d).show();
        var o = $("#alertInfo").outerWidth(), i = $("#alertInfo").outerHeight(), d = parseInt(t + (n - i) / 2), o = parseInt(o / 2);
        n <= i ? ((d = t) + i >= $(document).height() && (d = $(document).height() - i), 
        $("#alertInfo").css("position", "absolute")) : (d = (n - i) / 2, $("#alertInfo").css("position", "fixed")), 
        $("#alertInfo").css({
            "margin-left": "-" + o + "px"
        }).stop(!0, !0).animate({
            top: d + "px",
            "margin-left": "-" + o + "px",
            opacity: "1"
        }, "fast"), gloScale();
    },
    alertInfoPo: function() {
        var d = $(window).height(), n = $(document).scrollTop(), t = $("#alertInfo").outerWidth(), o = $("#alertInfo").outerHeight(), i = parseInt(n + (d - o) / 2);
        i >= $("body").height() - o && (i = (n = $("body").height() - o) - (d - o) / 2), 
        d <= o ? ((i = n) + o >= $(document).height() && (i = $(document).height() - o), 
        $("#alertInfo").css("position", "absolute")) : (i = (d - o) / 2, $("#alertInfo").css("position", "fixed")), 
        $("html,body").stop(!0, !0).animate({
            scrollTop: n
        }), $("#alertInfo").stop(!0, !0).animate({
            top: i + "px",
            "margin-left": "-" + t / 2 + "px"
        }), $("#maskLayer").height($("body").height());
    },
    alertVideo: function(d) {
        dialog.showInfo("<div class='pop_warp popVideo'><div class='before dialog-iframe'><iframe border='0' marginwidth='0' framespacing='0' marginheight='0' src='" + d + "' frameborder='0' noresize='scrolling='no' width='100%' height='100%' vspale='0' id='iframe' name='iframe' allowfullscreen></iframe></div></div>");
    },
    alertPopGameLott: function(d, n, t) {
        dialog.showInfo('<div class="pop lingjiang">\n            <div class="borbox">\n                ' + ('\n        <div class="pop_yuliu_wrap">\n            <div class="lott_code">\n                <dl>\n                    <dd>\n                        <span>恭喜您獲得</span>\n                        <b><img class="imgcove" src="' + d + '" alt=""></b>\n                        <em>' + t + '</em>\n                    </dd>\n                </dl>\n                <p class="tips">請複製下列虛寶碼進入遊戲兌換獎勵！</p>\n                <p id="send_code">' + n + '</p>  <i class=\'copyele\'>COPY</i>\n            </div>\n            <a href="https://crisisaction.onelink.me/8GFM?pid=CA-5th-website" target="_blank" class="btn btn_end_lingqu">现在领取</a>\n        </div>\n         ') + "\n            </div>\n        </div>");
    },
    alertPopGameLottTow: function(d, n) {
        dialog.showInfo('<div class="pop lingjiangTwo">\n            <div class="borbox">\n                ' + ('\n        <div class="pop_shiwu">\n            <div class="lott_code">\n                <h1>恭喜您獲得</h1>\n                <b><img class="imgcove" src="' + d + '" alt=""></b>\n                <p class="sw_name">' + n + '</p>\n                <h3>請聯繫客服郵箱：<a href="mailto:crisisaction@herogame.com.tw">crisisaction@herogame.com.tw</a> 幫您核實獎勵郵寄派發</h3>\n            </div>\n        </div>\n         ') + "\n            </div>\n        </div>");
    },
    alertPopGameDhm: function(d) {
        for (var n = "", t = 0; t < d.length; t++) {
            var o, i = timestampToTime(d[t].created_at);
            "836" == d[t].gift_id && (o = "鑽石*66"), "837" == d[t].gift_id && (o = "鑽石*88"), 
            "838" == d[t].gift_id && (o = "鑽石*166"), "839" == d[t].gift_id && (o = "鑽石*666"), 
            "840" == d[t].gift_id && (o = "鑽石*1666"), "841" == d[t].gift_id && (o = "電競滑鼠"), 
            "842" == d[t].gift_id && (o = "電競鍵盤"), n += "<dl class='dl_lists'><dd><span>" + i + "</span><span>" + (o = "843" == d[t].gift_id ? "藍牙耳麥" : o) + '</span> <p class="copy_target" id=\'dum' + (t + 1) + "'>" + d[t].gift_code + "</p></dd>\n                        <i class='copyele' data-arrtId=\"dum" + (t + 1) + '">COPY</i></dl>', 
            "841" != d[t].gift_id && "842" != d[t].gift_id && "843" != d[t].gift_id || (n += "<dl class='dl_lists'><dd><span>" + i + "</span><span>" + o + "</span> </dd>\n                            <a href=\"mailto:crisisaction@herogame.com.tw\" class='line_kefu'>联系客服</a></dl>");
        }
        dialog.showInfo('<div class="pop ">\n            <div class="borbox popYqh_bg">\n                <h2>獎勵列表</h2>\n                <p class="logs_tit"> <span>獎勵</span> <span>虛寶碼</span> <span>操作</span> </p>\n                <div class="dhm">\n                    ' + n + "\n                </div>\n            </div>\n        </div>"), 
        $(".dhm").mCustomScrollbar();
    },
    alertPopLogin: function() {
        dialog.showInfo('<div class="pop pop_login pop_sprite">\n            <div class="borbox">\n                \n            <input type="text" class="loadNum pop_sprite" placeholder="指揮官IDを入力">\n            <a href="" class="btn btn_login pop_sprite"></a>\n        \n            </div>\n        </div>');
    },
    alertPopLoginError: function() {
        dialog.showInfo('<div class="pop pop_login_error pop_sprite">\n            <div class="borbox">\n                \n            <a href="javascript:;" class="btn btn_login_error pop_sprite"></a>\n        \n            </div>\n        </div>');
    },
    alertPopLottend: function() {
        dialog.showInfo('<div class="pop pop_lott_end  glo-scale  pop_sprite">\n            <div class="borbox">\n                \n        <div class="pop_hdgz pop_sprite">\n            <div class="pop_hdgz_cc ">\n                <p>空中庭園パーソナルデータシステムをご利用いただき、誠にありがとうございます。</p>\n                <p>指揮官様の健闘と貢献を称え、報酬を支給いたします。ぜひ今後の任務にお役立てください。</p>\n                <p>（報酬はゲーム内メールボックスに届きます。受取はお一人様1回限定です）</p>\n                <p>また本キャンペーン情報やパーソナルデータをTwitterでシェアするとシェア報酬がもらえ、さらに抽選で公式グッズやオリジナルサウンドトラックが当たるチャンスがあります。ぜひシェアをお願いします！</p>\n\n                <a href="javascript:layer.msg(\'打开游戏链接\');" class="btn btn_openGame"></a>\n                <a href="javascript:layer.msg(\'\');;" class="btn btn_share"></a>\n                <a href="javascript:;" class="btn btn_top"></a>\n            </div>\n        </div>\n         \n            </div>\n        </div>');
    },
    alertPopFbLogin: function() {
        dialog.showInfo('<div class="pop pop_fblogin ">\n            <div class="borbox">\n                \n            <h2>溫馨提示</h2>\n            <h3>抽獎的話，需要先登錄Facebook喲！</h3>\n            <a href="https://ca.herogames.com.tw/six-years/auth.html?authclient=facebook" class="btn btn_login"></a>\n        \n            </div>\n        </div>');
    },
    alertPopHDGZ: function() {
        dialog.showInfo('<div class="pop glo-scale">\n            <div class="borbox">\n                \n        <div class="pop_hdgz pop_sprite">\n            <div class="pop_hdgz_cc ">\n                <p>指揮官様の着任1周年を記念して、空中庭園パーソナルデータシステムを開放いたします。 本データシステムでは指揮官様の着任以来の各種データをご覧いただけます。さらにデータを閲覧された指揮官は報酬を獲得できます。</p>\n\n                <dl>\n                    <dt>■データ閲覧期間：</dt>\n                    <dd>2021年12月4日（土）12:00～2022年1月12日（水）12:00</dd>\n                </dl>\n                <dl>\n                    <dt>■データ閲覧方法：</dt>\n                    <dd>トップページの「データ閲覧」をタップして指揮官IDを入力してください。</dd>\n                    <dd>※指揮官IDはパニグレのログイン画面右上に表示される9桁の数字です。</dd>\n                </dl>\n                <dl>\n                    <dt>■データ閲覧対象：</dt>\n                    <dd>2021年11月25日（木）までにアカウントを作成した指揮官様</dd>\n                </dl>\n                <dl>\n                    <dt>■データ閲覧報酬：</dt>\n                    <dd>2021年11月25日（木）までにアカウントを作成した指揮官様と、それ以降にアカウントを作成された指揮官様のいずれも報酬をお受取りいただけます。詳しくは＜こちら＞をご覧ください。</dd>\n                </dl>\n\n                <dl>\n                    <dt>■ご注意：</dt>\n                    <dd>パーソナルデータは何度でも閲覧可能ですが、報酬受取りはお一人様1回限定となります。</dd>\n                </dl>\n            </div>\n        </div>\n         \n            </div>\n        </div>'), 
        $(".pop_hdgz_cc").mCustomScrollbar();
    },
    alertPopHDGZ_yh: function() {
        dialog.showInfo('<div class="pop glo-scale">\n            <div class="borbox">\n                \n            <div class="pop_hdgz_yh pop_sprite">\n                <div class="pop_hdgz_ccc">\n                    <dl>\n                        <dt>＜ベテラン指揮官向け＞</dt>\n                        <dd>■パニグレ1周年データ閲覧報酬</dd>\n                        <dd>\n                            対象：<br>\n                            2021年XX月XX日（X）までにアカウントを作成し、なおかつパーソナルデータを閲覧された指揮官様\n                        </dd>\n                    </dl>\n\n                    <dl>\n                        <dt>報酬配布期間：</dt>\n                        <dd>2021年12月4日（土）12：00～2022年1月12（水）12：00</dd>\n                    </dl>\n                    <dl>\n                        <dt>報酬内容：</dt>\n                        <dd><img src="images/pop/1.png" alt=""></dd>\n                    </dl>\n                    <dl>\n                        <dt>報酬受取方法:</dt>\n                        <dd>①TOPページの「TOUCH HERE」をタップして8桁の指揮官IDを入力すると、パーソナルデータ閲覧画面に遷移します。</dd>\n                        <dd>※指揮官IDはパニグレにログイン後のメイン画面左上に表示される8桁の数字です。</dd>\n                        <dd>※パニグレアプリ内バナーから本サイトにアクセスする場合は、バナーをタップすると指揮官IDを自動的に取得し、本サイトのパーソナルデータ閲覧画面に直接遷移します。</dd>\n                        <dd>②パーソナルデータを閲覧後、データ閲覧画面下の「閲覧報酬受取り」ボタンをタップすると、パニグレのアプリが起動します。</dd>\n                        <dd>③パニグレにログインして、メールボックスより報酬をお受取りください。</dd>\n                    </dl>\n\n                     <dl>\n                        <dt>\n                        ■パニグレ1周年データシェア報酬\n                        </dt>\n                        <dd>対象：<br>\n                        2021年XX月XX日（X）までにアカウントを作成し、なおかつパニグレ公式Twitterアカウント（@punigray_staff）をフォローして、パーソナルデータをTwitterでシェアした指揮官様\n                        </dd>\n                     </dl>\n                    <dl>\n                        <dt>報酬配布期間：</dt>\n                        <dd>2021年12月4日（土）12：00～2022年1月12（水）12：00</dd>\n                    </dl>\n                    <dl>\n                        <dt>報酬内容：</dt>\n                        <dd><img src="images/pop/2.png" alt=""></dd>\n                    </dl>\n                    <dl>\n                        <dt> 報酬受取方法：</dt>\n                        <dd>①パーソナルデータを閲覧後、データ閲覧画面下の「Twitterでシェア」ボタンをタップし、生成される画像を「#パニグレ1周年」「#パニグレ指揮官データシェア」をつけてツイートしてください</dd>\n                        <dd>②パニグレにログインして、メールボックスより報酬をお受取りください。</dd>\n                    </dl>\n\n\n                    <dl>\n                        <dt>＜新人指揮官向け＞</dt>\n                        <dd> ■パニグレ1周年新任報酬</dd>\n                        <dd>\n                            対象：<br>\n                            2021年XX月XX日（X）以降にアカウントを作成し、なおかつ指揮官IDを本データシステムに入力された指揮官様\n                        </dd>\n                    </dl>\n\n                    <dl>\n                        <dt>報酬配布期間：</dt>\n                        <dd>2021年12月4日（土）12：00～2022年1月12（水）12：00</dd>\n                    </dl>\n\n                    <dl>\n                        <dt>報酬内容：</dt>\n                        <dd><img src="images/pop/3.png" alt=""></dd>\n                    </dl>\n\n                    <dl>\n                        <dt>報酬受取方法：</dt>\n                        <dd>①TOPページの「TOUCH HERE」をタップして8桁の指揮官IDを入力すると、新任指揮官向けのメッセージ画面に遷移します。</dd>\n                        <dd>※指揮官IDはパニグレにログイン後のメイン画面左上に表示される8桁の数字です。</dd>\n                        <dd>※パニグレアプリ内バナーから本サイトにアクセスする場合は、バナーをタップすると指揮官IDを自動的に取得し、本サイトの新任指揮官向け画面に直接遷移します。</dd>\n                        <dd>②新任指揮官向け画面下の「閲覧報酬受取り」ボタンをタップすると、パニグレのアプリが起動します。</dd>\n                        <dd>③パニグレにログインして、メールボックスより報酬をお受取りください。    </dd>\n                    </dl>\n\n                    <dl>\n                        <dt>■パニグレ1周年新任シェア報酬</dt>\n                        <dd>\n                            対象：<br>\n                            2021年XX月XX日（X）以降にアカウントを作成し、パニグレ公式Twitterアカウント（@punigray_staff）をフォローして、本キャンペーン情報をTwitterでシェアした指揮官様\n                        </dd>\n                    </dl>\n\n\n                    <dl>\n                        <dt>報酬配布期間：</dt>\n                        <dd>2021年12月4日（土）12：00～2022年1月12（水）12：00</dd>\n                    </dl>\n\n\n                    <dl>\n                        <dt>報酬内容：</dt>\n                        <dd><img src="images/pop/4.png" alt=""></dd>\n                    </dl>\n\n\n\n                    <dl>\n                        <dt>報酬受取方法：</dt>\n                        <dd>①新任指揮官向け画面下の「Twitterでシェア」ボタンをタップし、生成される画像を「#パニグレ1周年」「#パニグレ新任シェア」をつけてツイートしてください。</dd>\n                        <dd>②パニグレにログインして、メールボックスより報酬をお受取りください。</dd>\n                    </dl>\n\n                    <dl>\n                        <dt>＜ベテラン指揮官＆新人指揮官共通＞</dt>\n                        <dd>■パニグレ1周年Twitter抽選報酬</dd>\n                        <dd>対象：<br>「パニグレ1周年データシェア報酬」または「パニグレ1周年新任シェア報酬」の報酬受取条件を満たす指揮官様</dd>\n                    </dl>\n\n                    <dl>\n                        <dt>報酬内容：</dt>\n                        <dt>【特賞 1名様】　</dt>\n                        <dd>石川由依さんサイン色紙×1、オリジナル・サウンドトラックVol.1×1、Amazonギフト券30000円</dd>\n                        <dd>ルシア・鴉羽のSP塗装「朱鷺色雲」×1とアイコン「朱鷺色雲」×1、ビアンカ・真理のSP塗装「幽趣佳境」×1とアイコン「幽趣佳境」×1、指定武器開発券2500枚、特別構造体開発券2500枚</dd>\n                    </dl>\n\n                    <dl>\n                        <dt>【一等賞 5名様】　</dt>\n                        <dd>オリジナル・サウンドトラックVol.1×1、Amazonギフト券10000円</dd>\n                        <dd>ルシア・鴉羽のSP塗装「朱鷺色雲」×1とアイコン「朱鷺色雲」×1もしくはビアンカ・真理のSP塗装「幽趣佳境」×1とアイコン「幽趣佳境」×1（ランダムでいずれか1種類）、指定武器開発券2500枚もしくは特別構造体開発券2500枚（ランダムでいずれか1種類）</dd>\n                    </dl>\n\n                    <dl>\n                        <dt>【二等賞 8名様】　</dt>\n                        <dd>パニグレ公式グッズ-ちびキャラアクリルスタンド×1（ランダムでいずれか1種類）、Amazonギフト券5000円</dd>\n                        <dd>ルシア・鴉羽のSP塗装「朱鷺色雲」×1とアイコン「朱鷺色雲」×1もしくはビアンカ・真理のSP塗装「幽趣佳境」*1とアイコン「幽趣佳境」×1（ランダムでいずれか1種類）</dd>\n                    </dl>\n\n                    <dl>\n                        <dt>【三等賞　8名様】</dt>\n                        <dd>パニグレ公式グッズ-ちびキャラアクリルスタンド×1（ランダムでいずれか1種類）、Amazonギフト券3000円</dd>\n                        <dd>指定武器開発券2500枚もしくは特別構造体開発券2500枚（ランダムでいずれか1種類）</dd>\n                    </dl>\n\n                    <dl>\n                        <dt>【四等賞 10名様】</dt>\n                        <dd>パニグレ公式グッズ-缶バッジ*1（ランダムで1件）、Amazonギフト券2000円</dd>\n                        <dd>指定武器開発券1250枚もしくは特別構造体開発券1250枚（ランダムでいずれか1種類）</dd>\n                    </dl>\n\n\n                    <dl>\n                        <dt>【五等賞 30名様】　</dt>\n                        <dd>Amazonギフト券1000円</dd>\n                    </dl>\n                    <dl>\n                        <dt>参加方法：</dt>\n                        <dd>2021年12月4日（土）12：00～2022年1月12（水）12：00に「パニグレ1周年データシェア報酬」または「パニグレ1周年新任シェア報酬」の条件を満たすツイートを投稿し、なおかつパニグレ公式Twitter（＠punigray_staff）をフォローしている指揮官様から抽選で当選者を決定し、イベント終了後10営業日以内にTwitterのDMでご当選者様までご連絡いたします。</dd>\n                    </dl>\n\n\n\n                    <dl>\n                        <dt>■ご注意</dt>\n                        <dd>①「パニグレ1周年データ閲覧報酬」「パニグレ1周年データシェア報酬」「パニグレ1周年新任報酬」「パニグレ1周年新任シェア報酬」の受取期限は2022年1月31日（月）です。期限を過ぎると報酬を受け取れなくなりますのでご注意ください。</dd>\n                        <dd>②「パニグレ1周年Twitter抽選報酬」の発送先は日本国内に限定させていただきます。</dd>\n                        <dd>③「パニグレ1周年Twitter抽選報酬」はパニグレ公式Twitter（＠punigray_staff）よりご当選者様にDMでご連絡いたします。パニグレ公式Twitterをフォローしていない、またはDMを受け取れる設定になっていない指揮官様は抽選対象外とさせていただきますので、予めご了承ください。</dd>\n                    </dl>\n\n\n                </div>\n            </div>\n         \n            </div>\n        </div>'), 
        $(".pop_hdgz_ccc").mCustomScrollbar({
            callbacks: {
                whileScrolling: function() {},
                alwaysTriggerOffsets: !1
            }
        });
    }
};