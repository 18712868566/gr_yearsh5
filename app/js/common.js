/*wlo:Cflower*/
var logg = null;
var dialog;
if (!dialog) dialog = {};
var flagPC = true;
dialog = {
    //关闭  document.location.reload()
    closeDiv: function() {
        $("body").css("position", "relative");
        $("#alertInfo").stop(true, true).animate({
            "top": "-100%",
            "opacity": "0"
        }, "fast", function() {
            $("#maskLayer,#alertInfo").remove().hide();
            $('.wrap').removeClass('row');
            // $('.yqh').hide();
            setTimeout(function() {
                // 获得奖励弹框
                istureZunj = 0;
            }, 500);
        });
    },
    //
    maskLayer: function() {
        $("#maskLayer,#alertInfo").remove();
        var maskLayer = "<div id='maskLayer'></div>";
        var alertInfo = "<div id='alertInfo'><span class='close'>关闭</span></div>";
        $("body").append(maskLayer, alertInfo);
        $('.wrap').addClass('row');
        $("#maskLayer").height('100%').show();
    },
    //显示提示信息框
    showInfo: function(alertHtml) {
        dialog.maskLayer();
        // $("body").css({'position':'fixed','width':'100%'});
        var _winH = $(window).height(); //﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣┐
        var _scrollTop = $(document).scrollTop(); //　　　　　　　　　　　      ├→
        $("#alertInfo").append(alertHtml).show(); //﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣┘
        var _thisDomWidth = $("#alertInfo").outerWidth();
        var _thisDomHeight = $("#alertInfo").outerHeight();
        var topD = parseInt(_scrollTop + (_winH - _thisDomHeight) / 2);
        var mL = parseInt(_thisDomWidth / 2);
        if (_thisDomHeight >= _winH) {
            topD = _scrollTop;
            if (_scrollTop + _thisDomHeight >= $(document).height()) {
                topD = $(document).height() - _thisDomHeight;
            };
            $("#alertInfo").css("position", "absolute");
        } else {
            topD = (_winH - _thisDomHeight) / 2;
            $("#alertInfo").css("position", "fixed");
        };
        $("#alertInfo").css({
            "margin-left": "-" + mL + "px"
        }).stop(true, true).animate({
            "top": topD + "px",
            "margin-left": "-" + mL + "px",
            "opacity": "1"
        }, "fast");
    },
    //改变窗口大小时改变弹出层的位置
    alertInfoPo: function() {
        var _winHResize = $(window).height();
        var _scrollTopResize = $(document).scrollTop();
        var _thisDomWidthResize = $("#alertInfo").outerWidth();
        var _thisDomHeightResize = $("#alertInfo").outerHeight();
        var topResize = parseInt(_scrollTopResize + (_winHResize - _thisDomHeightResize) / 2);
        if (topResize >= $("body").height() - _thisDomHeightResize) {
            _scrollTopResize = $("body").height() - _thisDomHeightResize;
            topResize = _scrollTopResize - (_winHResize - _thisDomHeightResize) / 2;
        };
        if (_thisDomHeightResize >= _winHResize) {
            topResize = _scrollTopResize;
            if (_scrollTopResize + _thisDomHeightResize >= $(document).height()) {
                topResize = $(document).height() - _thisDomHeightResize;
            };
            $("#alertInfo").css("position", "absolute");
        } else {
            topResize = (_winHResize - _thisDomHeightResize) / 2;
            $("#alertInfo").css("position", "fixed");
        };
        $("html,body").stop(true, true).animate({
            scrollTop: _scrollTopResize
        });
        $("#alertInfo").stop(true, true).animate({
            "top": topResize + "px",
            "margin-left": "-" + (_thisDomWidthResize / 2) + "px"
        })
        $("#maskLayer").height($("body").height());
    },
    //视频弹窗
    alertVideo: function(videoUrl) {
        dialog.showInfo(
            "<div class='pop_warp popVideo'>" +
            "<div class='before dialog-iframe'>"
            // +"<embed src='"+videoUrl+"' type='application/x-shockwave-flash' allowscriptaccess='always' allowfullscreen='true' wmode='opaque'>"
            +
            "<iframe border='0' marginwidth='0' framespacing='0' marginheight='0' src='" + videoUrl + "' frameborder='0' noresize='scrolling='no' width='100%' height='100%' vspale='0' id='iframe' name='iframe' allowfullscreen></iframe>" +
            // + '<video src="' + videoUrl + '" autoplay="autoplay" playsinline="" webkit-playsinline="" x5-playsinline="" controls="controls"></video>' +
            "</div>" +
            "</div>")
    },
    // 获得奖励弹框
    alertPopGameLott(imgUrl, code, lottname) {
        var lottHtml = `
        <div class="pop_yuliu_wrap">
            <div class="lott_code">
                <dl>
                    <dd>
                        <span>恭喜您獲得</span>
                        <b><img class="imgcove" src="${imgUrl}" alt=""></b>
                        <em>${lottname}</em>
                    </dd>
                </dl>
                <p class="tips">請複製下列虛寶碼進入遊戲兌換獎勵！</p>
                <p id="send_code">${code}</p>  <i class='copyele'>COPY</i>
            </div>
            <a href="https://crisisaction.onelink.me/8GFM?pid=CA-5th-website" target="_blank" class="btn btn_end_lingqu">现在领取</a>
        </div>
         `;

        dialog.showInfo(`<div class="pop lingjiang">
            <div class="borbox">
                ${lottHtml}
            </div>
        </div>`)
    },
    alertPopGameLottTow(imgUrl, lottName) {
        var lottHtml = `
        <div class="pop_shiwu">
            <div class="lott_code">
                <h1>恭喜您獲得</h1>
                <b><img class="imgcove" src="${imgUrl}" alt=""></b>
                <p class="sw_name">${lottName}</p>
                <h3>請聯繫客服郵箱：<a href="mailto:crisisaction@herogame.com.tw">crisisaction@herogame.com.tw</a> 幫您核實獎勵郵寄派發</h3>
            </div>
        </div>
         `;

        dialog.showInfo(`<div class="pop lingjiangTwo">
            <div class="borbox">
                ${lottHtml}
            </div>
        </div>`)
    },
    // 我的兑换码
    alertPopGameDhm(lottDataHtml) {
        /*var lottHtml = `
            <dl class='dl_lists'>
                <dd> <span> 2020-10-9 02:22:54 <br/><i>Holy Knighttime</i></span> <span id='dum1'>XDF3FXCV</span> </dd>
                <i class='copyele'>COPY</i>
            </dl>
            <dl class='dl_lists'>
                <dd> <span> 2020-10-9 02:22:54 <br/><i>Holy Knighttime</i></span> <span id='dum1'>XDF3FXCV</span> </dd>
                <i class='copyele'>COPY</i>
            </dl>
            <dl class='dl_lists'>
                <dd> <span> 2020-10-9 02:22:54 <br/><i>Holy Knighttime</i></span> <span id='dum1'>XDF3FXCV</span> </dd>
                <i class='copyele'>COPY</i>
            </dl>
            <dl class='dl_lists'>
                <dd> <span> 2020-10-9 02:22:54 <br/><i>Holy Knighttime</i></span> <span id='dum1'>XDF3FXCV</span> </dd>
                <i class='copyele'>COPY</i>
            </dl>
            <dl class='dl_lists'>
                <dd> <span> 2020-10-9 02:22:54 <br/><i>Holy Knighttime</i></span> <span id='dum1'>XDF3FXCV</span> </dd>
                <i class='copyele'>COPY</i>
            </dl>
            <dl class='dl_lists'>
                <dd> <span> 2020-10-9 02:22:54 <br/><i>Holy Knighttime</i></span> <span id='dum1'>XDF3FXCV</span> </dd>
                <i class='copyele'>COPY</i>
            </dl>
            <dl class='dl_lists'>
                <dd> <span> 2020-10-9 02:22:54 <br/><i>Holy Knighttime</i></span> <span id='dum1'>XDF3FXCV</span> </dd>
                <i class='copyele'>COPY</i>
            </dl>
            <dl class='dl_lists'>
                <dd> <span> 2020-10-9 02:22:54 <br/><i>Holy Knighttime</i></span> <span id='dum1'>XDF3FXCV</span> </dd>
                <i class='copyele'>COPY</i>
            </dl>
         `;*/

        var lottHtml = '';
        var lottDdHtml = '';
        for (var i = 0; i < lottDataHtml.length; i++) {
            var getTime = timestampToTime(lottDataHtml[i].created_at);
            var prizeName;
            if (lottDataHtml[i].gift_id == '836') {
                prizeName = '鑽石*66';
            }

            if (lottDataHtml[i].gift_id == '837') {
                prizeName = '鑽石*88';
            }

            if (lottDataHtml[i].gift_id == '838') {
                prizeName = '鑽石*166';
            }

            if (lottDataHtml[i].gift_id == '839') {
                prizeName = '鑽石*666';
            }

            if (lottDataHtml[i].gift_id == '840') {
                prizeName = '鑽石*1666';
            }

            if (lottDataHtml[i].gift_id == '841') {
                prizeName = '電競滑鼠';
            }

            if (lottDataHtml[i].gift_id == '842') {
                prizeName = '電競鍵盤';
            }

            if (lottDataHtml[i].gift_id == '843') {
                prizeName = '藍牙耳麥';
            }

            lottDdHtml += `<dl class='dl_lists'><dd><span>${getTime}</span><span>${prizeName}</span> <p class="copy_target" id='dum${i+1}'>${lottDataHtml[i].gift_code}</p></dd>
                        <i class='copyele' data-arrtId="dum${i+1}">COPY</i></dl>`;


            if (lottDataHtml[i].gift_id == '841' || lottDataHtml[i].gift_id == '842' || lottDataHtml[i].gift_id == '843') {
                lottDdHtml += `<dl class='dl_lists'><dd><span>${getTime}</span><span>${prizeName}</span> </dd>
                            <a href="mailto:crisisaction@herogame.com.tw" class='line_kefu'>联系客服</a></dl>`;
            }
        };

        dialog.showInfo(`<div class="pop ">
            <div class="borbox popYqh_bg">
                <h2>獎勵列表</h2>
                <p class="logs_tit"> <span>獎勵</span> <span>虛寶碼</span> <span>操作</span> </p>
                <div class="dhm">
                    ${lottDdHtml}
                </div>
            </div>
        </div>`);

        $(".dhm").mCustomScrollbar();
    },
    // cbd登录
    alertPopLogin() {
        var LoginHtml = `
            <input type="text" class="loadNum pop_sprite" placeholder="指揮官IDを入力">
            <a href="javascript:;" class="btn btn_login pop_sprite"></a>
        `;

        dialog.showInfo(`<div class="pop pop_login pop_sprite">
            <div class="borbox">
                ${LoginHtml}
            </div>
        </div>`)
    },
    // cbd登录Error
    alertPopLoginError() {
        var LoginHtml = `
            <a href="javascript:;" class="btn btn_login_error pop_sprite"></a>
        `;

        dialog.showInfo(`<div class="pop pop_login_error pop_sprite">
            <div class="borbox">
                ${LoginHtml}
            </div>
        </div>`)
    },
    // 领取报酬成功
    alertPopLottend(){
        const lottEndHtml = `
        <div class="pop_hdgz pop_sprite">
            <div class="pop_hdgz_cc ">
                <p>空中庭園パーソナルデータシステムをご利用いただき、誠にありがとうございます。</p>
                <p>指揮官様の健闘と貢献を称え、報酬を支給いたします。ぜひ今後の任務にお役立てください。</p>
                <p>（報酬はゲーム内メールボックスに届きます。受取はお一人様1回限定です）</p>
                <p>また本キャンペーン情報やパーソナルデータをTwitterでシェアするとシェア報酬がもらえ、さらに抽選で公式グッズやオリジナルサウンドトラックが当たるチャンスがあります。ぜひシェアをお願いします！</p>

                <a href="javascript:layer.msg('打开游戏链接');" class="btn btn_openGame"></a>
                <a href="javascript:layer.msg('');;" class="btn btn_share"></a>
                <a href="javascript:;" class="btn btn_top"></a>
            </div>
        </div>
         `;

        dialog.showInfo(`<div class="pop pop_lott_end  pop_sprite">
            <div class="borbox">
                ${lottEndHtml}
            </div>
        </div>`)
    },
    // facebook登陆
    alertPopFbLogin() {
        var fbLoginHtml = `
            <h2>溫馨提示</h2>
            <h3>抽獎的話，需要先登錄Facebook喲！</h3>
            <a href="https://ca.herogames.com.tw/six-years/auth.html?authclient=facebook" class="btn btn_login"></a>
        `;

        dialog.showInfo(`<div class="pop pop_fblogin">
            <div class="borbox">
                ${fbLoginHtml}
            </div>
        </div>`)
    },
    // 活动规则
    alertPopHDGZ: function() {
        var lottHtml = `
        <div class="pop_hdgz pop_sprite">
            <div class="pop_hdgz_cc ">
                <p>指揮官様の着任1周年を記念して、空中庭園パーソナルデータシステムを開放いたします。 本データシステムでは指揮官様の着任以来の各種データをご覧いただけます。さらにデータを閲覧された指揮官は報酬を獲得できます。</p>

                <dl>
                    <dt>■データ閲覧期間：</dt>
                    <dd>2021年12月4日（土）12:00～2022年1月12日（水）12:00</dd>
                </dl>
                <dl>
                    <dt>■データ閲覧方法：</dt>
                    <dd>トップページの「データ閲覧」をタップして指揮官IDを入力してください。</dd>
                    <dd>※指揮官IDはパニグレのログイン画面右上に表示される9桁の数字です。</dd>
                </dl>
                <dl>
                    <dt>■データ閲覧対象：</dt>
                    <dd>2021年11月25日（木）までにアカウントを作成した指揮官様</dd>
                </dl>
                <dl>
                    <dt>■データ閲覧報酬：</dt>
                    <dd>2021年11月25日（木）までにアカウントを作成した指揮官様と、それ以降にアカウントを作成された指揮官様のいずれも報酬をお受取りいただけます。詳しくは＜こちら＞をご覧ください。</dd>
                </dl>

                <dl>
                    <dt>■ご注意：</dt>
                    <dd>パーソナルデータは何度でも閲覧可能ですが、報酬受取りはお一人様1回限定となります。</dd>
                </dl>
            </div>
        </div>
         `;
        dialog.showInfo(`<div class="pop">
            <div class="borbox">
                ${lottHtml}
            </div>
        </div>`)


        $(".pop_hdgz_cc").mCustomScrollbar();
    },
    // 活动规则2
    alertPopHDGZ_yh: function() {
        var lottHtml = `
            <div class="pop_hdgz_yh pop_sprite">
                <div class="pop_hdgz_ccc">
                    <dl>
                        <dt>＜ベテラン指揮官向け＞</dt>
                        <dd>■パニグレ1周年データ閲覧報酬</dd>
                        <dd>
                            対象：<br>
                            2021年XX月XX日（X）までにアカウントを作成し、なおかつパーソナルデータを閲覧された指揮官様
                        </dd>
                    </dl>

                    <dl>
                        <dt>報酬配布期間：</dt>
                        <dd>2021年12月4日（土）12：00～2022年1月12（水）12：00</dd>
                    </dl>
                    <dl>
                        <dt>報酬内容：</dt>
                        <dd><img src="images/pop/1.png" alt=""></dd>
                    </dl>
                    <dl>
                        <dt>報酬受取方法:</dt>
                        <dd>①TOPページの「TOUCH HERE」をタップして8桁の指揮官IDを入力すると、パーソナルデータ閲覧画面に遷移します。</dd>
                        <dd>※指揮官IDはパニグレにログイン後のメイン画面左上に表示される8桁の数字です。</dd>
                        <dd>※パニグレアプリ内バナーから本サイトにアクセスする場合は、バナーをタップすると指揮官IDを自動的に取得し、本サイトのパーソナルデータ閲覧画面に直接遷移します。</dd>
                        <dd>②パーソナルデータを閲覧後、データ閲覧画面下の「閲覧報酬受取り」ボタンをタップすると、パニグレのアプリが起動します。</dd>
                        <dd>③パニグレにログインして、メールボックスより報酬をお受取りください。</dd>
                    </dl>

                     <dl>
                        <dt>
                        ■パニグレ1周年データシェア報酬
                        </dt>
                        <dd>対象：<br>
                        2021年XX月XX日（X）までにアカウントを作成し、なおかつパニグレ公式Twitterアカウント（@punigray_staff）をフォローして、パーソナルデータをTwitterでシェアした指揮官様
                        </dd>
                     </dl>
                    <dl>
                        <dt>報酬配布期間：</dt>
                        <dd>2021年12月4日（土）12：00～2022年1月12（水）12：00</dd>
                    </dl>
                    <dl>
                        <dt>報酬内容：</dt>
                        <dd><img src="images/pop/2.png" alt=""></dd>
                    </dl>
                    <dl>
                        <dt> 報酬受取方法：</dt>
                        <dd>①パーソナルデータを閲覧後、データ閲覧画面下の「Twitterでシェア」ボタンをタップし、生成される画像を「#パニグレ1周年」「#パニグレ指揮官データシェア」をつけてツイートしてください</dd>
                        <dd>②パニグレにログインして、メールボックスより報酬をお受取りください。</dd>
                    </dl>


                    <dl>
                        <dt>＜新人指揮官向け＞</dt>
                        <dd> ■パニグレ1周年新任報酬</dd>
                        <dd>
                            対象：<br>
                            2021年XX月XX日（X）以降にアカウントを作成し、なおかつ指揮官IDを本データシステムに入力された指揮官様
                        </dd>
                    </dl>

                    <dl>
                        <dt>報酬配布期間：</dt>
                        <dd>2021年12月4日（土）12：00～2022年1月12（水）12：00</dd>
                    </dl>

                    <dl>
                        <dt>報酬内容：</dt>
                        <dd><img src="images/pop/3.png" alt=""></dd>
                    </dl>

                    <dl>
                        <dt>報酬受取方法：</dt>
                        <dd>①TOPページの「TOUCH HERE」をタップして8桁の指揮官IDを入力すると、新任指揮官向けのメッセージ画面に遷移します。</dd>
                        <dd>※指揮官IDはパニグレにログイン後のメイン画面左上に表示される8桁の数字です。</dd>
                        <dd>※パニグレアプリ内バナーから本サイトにアクセスする場合は、バナーをタップすると指揮官IDを自動的に取得し、本サイトの新任指揮官向け画面に直接遷移します。</dd>
                        <dd>②新任指揮官向け画面下の「閲覧報酬受取り」ボタンをタップすると、パニグレのアプリが起動します。</dd>
                        <dd>③パニグレにログインして、メールボックスより報酬をお受取りください。    </dd>
                    </dl>

                    <dl>
                        <dt>■パニグレ1周年新任シェア報酬</dt>
                        <dd>
                            対象：<br>
                            2021年XX月XX日（X）以降にアカウントを作成し、パニグレ公式Twitterアカウント（@punigray_staff）をフォローして、本キャンペーン情報をTwitterでシェアした指揮官様
                        </dd>
                    </dl>


                    <dl>
                        <dt>報酬配布期間：</dt>
                        <dd>2021年12月4日（土）12：00～2022年1月12（水）12：00</dd>
                    </dl>


                    <dl>
                        <dt>報酬内容：</dt>
                        <dd><img src="images/pop/4.png" alt=""></dd>
                    </dl>



                    <dl>
                        <dt>報酬受取方法：</dt>
                        <dd>①新任指揮官向け画面下の「Twitterでシェア」ボタンをタップし、生成される画像を「#パニグレ1周年」「#パニグレ新任シェア」をつけてツイートしてください。</dd>
                        <dd>②パニグレにログインして、メールボックスより報酬をお受取りください。</dd>
                    </dl>

                    <dl>
                        <dt>＜ベテラン指揮官＆新人指揮官共通＞</dt>
                        <dd>■パニグレ1周年Twitter抽選報酬</dd>
                        <dd>対象：<br>「パニグレ1周年データシェア報酬」または「パニグレ1周年新任シェア報酬」の報酬受取条件を満たす指揮官様</dd>
                    </dl>

                    <dl>
                        <dt>報酬内容：</dt>
                        <dt>【特賞 1名様】　</dt>
                        <dd>石川由依さんサイン色紙×1、オリジナル・サウンドトラックVol.1×1、Amazonギフト券30000円</dd>
                        <dd>ルシア・鴉羽のSP塗装「朱鷺色雲」×1とアイコン「朱鷺色雲」×1、ビアンカ・真理のSP塗装「幽趣佳境」×1とアイコン「幽趣佳境」×1、指定武器開発券2500枚、特別構造体開発券2500枚</dd>
                    </dl>

                    <dl>
                        <dt>【一等賞 5名様】　</dt>
                        <dd>オリジナル・サウンドトラックVol.1×1、Amazonギフト券10000円</dd>
                        <dd>ルシア・鴉羽のSP塗装「朱鷺色雲」×1とアイコン「朱鷺色雲」×1もしくはビアンカ・真理のSP塗装「幽趣佳境」×1とアイコン「幽趣佳境」×1（ランダムでいずれか1種類）、指定武器開発券2500枚もしくは特別構造体開発券2500枚（ランダムでいずれか1種類）</dd>
                    </dl>

                    <dl>
                        <dt>【二等賞 8名様】　</dt>
                        <dd>パニグレ公式グッズ-ちびキャラアクリルスタンド×1（ランダムでいずれか1種類）、Amazonギフト券5000円</dd>
                        <dd>ルシア・鴉羽のSP塗装「朱鷺色雲」×1とアイコン「朱鷺色雲」×1もしくはビアンカ・真理のSP塗装「幽趣佳境」*1とアイコン「幽趣佳境」×1（ランダムでいずれか1種類）</dd>
                    </dl>

                    <dl>
                        <dt>【三等賞　8名様】</dt>
                        <dd>パニグレ公式グッズ-ちびキャラアクリルスタンド×1（ランダムでいずれか1種類）、Amazonギフト券3000円</dd>
                        <dd>指定武器開発券2500枚もしくは特別構造体開発券2500枚（ランダムでいずれか1種類）</dd>
                    </dl>

                    <dl>
                        <dt>【四等賞 10名様】</dt>
                        <dd>パニグレ公式グッズ-缶バッジ*1（ランダムで1件）、Amazonギフト券2000円</dd>
                        <dd>指定武器開発券1250枚もしくは特別構造体開発券1250枚（ランダムでいずれか1種類）</dd>
                    </dl>


                    <dl>
                        <dt>【五等賞 30名様】　</dt>
                        <dd>Amazonギフト券1000円</dd>
                    </dl>
                    <dl>
                        <dt>参加方法：</dt>
                        <dd>2021年12月4日（土）12：00～2022年1月12（水）12：00に「パニグレ1周年データシェア報酬」または「パニグレ1周年新任シェア報酬」の条件を満たすツイートを投稿し、なおかつパニグレ公式Twitter（＠punigray_staff）をフォローしている指揮官様から抽選で当選者を決定し、イベント終了後10営業日以内にTwitterのDMでご当選者様までご連絡いたします。</dd>
                    </dl>



                    <dl>
                        <dt>■ご注意</dt>
                        <dd>①「パニグレ1周年データ閲覧報酬」「パニグレ1周年データシェア報酬」「パニグレ1周年新任報酬」「パニグレ1周年新任シェア報酬」の受取期限は2022年1月31日（月）です。期限を過ぎると報酬を受け取れなくなりますのでご注意ください。</dd>
                        <dd>②「パニグレ1周年Twitter抽選報酬」の発送先は日本国内に限定させていただきます。</dd>
                        <dd>③「パニグレ1周年Twitter抽選報酬」はパニグレ公式Twitter（＠punigray_staff）よりご当選者様にDMでご連絡いたします。パニグレ公式Twitterをフォローしていない、またはDMを受け取れる設定になっていない指揮官様は抽選対象外とさせていただきますので、予めご了承ください。</dd>
                    </dl>


                </div>
            </div>
         `;
        dialog.showInfo(`<div class="pop">
            <div class="borbox">
                ${lottHtml}
            </div>
        </div>`)


        $(".pop_hdgz_ccc").mCustomScrollbar();
    },
}

function timestampToTime(timestamp) {
    let date = new Date(timestamp * 1000);
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
    let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    return Y + M + D + h + m + s
}


// 兑换码列表
// dialog.alertPopGameDhm();

// code
// dialog.alertPopGameLott('','CA6YEARS2021');

// 实物
// dialog.alertPopGameLottTow();