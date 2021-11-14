/*
 * @Author: lixuefeng
 * @Date:   2019-07-15 11:27:25
 * @Last Modified by:   A
 * @Last Modified time: 2021-06-03 13:53:28
 * @File_path:  E:\0_job_progect\20200101_huaer\gulpfile_xiaochu\app\js\webmain$Axios.js
 */
/*========================Axios====================*/
//当创建实例的时候配置默认配置
var instance = axios.create({
    method: 'post',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    //transformRequest是你在data传输前进行数据处理，如果不处理你的数据会显示object.object
    transformRequest: [function(data) {
        // 对 data 进行任意转换处理
        let ret = '';
        for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
        };
        return ret;
    }]
});

// 添加请求拦截器
instance.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    var index = layer.load(2, {
        shade: [0.1, '#fff'] //0.1透明度的白色背景
    });
    return config;
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function(response) {
    // 对响应数据做点什么
    layer.closeAll();
    return response;
}, function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
/* ======================= $axios end ======================= **/


var Projet_Global_Parameter = {
    // 重复点击开关
    bOff: true, // 自定义开关 布尔值
    bEmail: null, // 是否是一个邮箱 布尔值
    upData: null, // url中返回的携带的参数
    aUrlData: [], // 存储url中返回的参数数组
    user_from_uid: '', // 分享参数
    // 补0操作 如果数字为3，则输出0003，不够位数就在之前补足0，
    PrefixInteger: function(num, length) {
        return ("0000000000000000" + num).substr(-length);
    },
    // 获取返回链接的参数对象
    getUrlData: function() {
        url = window.location.href; //获取当前页面的url
        // console.log(url)
        if (url.indexOf('?from_uid') == -1) {
            arr = url;
            // console.log('没找到');
        } else {
            arr = url.split("?")[1].split("&");
            // console.log('找到了');
            var enUrl = decodeURI(url); //解码
            var len = enUrl.length; //获取url的长度值
            var a = enUrl.indexOf("?"); //获取第一次出现？的位置下标
            var b = enUrl.substr(a + 1, len); //截取问号之后的内容
            var c = b.split("&"); //从指定的地方将字符串分割成字符串数组
            var arr = new Array(); //新建一个数组
            for (var i = 0; i < c.length; i++) {
                var d = c[i].split("=")[1]; //从=处将字符串分割成字符串数组,并选择第2个元素
                arr.push(d); //将获取的元素存入到数组中
            }

            return arr;
        }
    },
    resGetUrlData: function() {
        // 浏览器参数,返回数组
        Projet_Global_Parameter.aUrlData = Projet_Global_Parameter.getUrlData();
        if (Projet_Global_Parameter.aUrlData) {
            if (Projet_Global_Parameter.aUrlData[0]) {
                if (typeof(Projet_Global_Parameter.aUrlData[0]) == undefined) {
                    // console.log('没有参数啥也不干');
                    Projet_Global_Parameter.upData = '';
                } else {
                    Projet_Global_Parameter.upData = Projet_Global_Parameter.aUrlData[0];
                    // console.log('看见参数了' + Projet_Global_Parameter.upData)
                }
            }
        };
    },
    // 复制粘贴功能
    tapCopy: function($id) {
        Projet_Global_Parameter.selectText($id);
        document.execCommand('copy');
    },
    //选中文本
    selectText: function(element) {
        var text = document.getElementById(element);
        //做下兼容
        if (document.body.createTextRange) { //如果支持
            var range = document.body.createTextRange(); //获取range
            range.moveToElementText(text); //光标移上去
            range.select(); //选择
        } else if (window.getSelection) {
            var selection = window.getSelection(); //获取selection
            var range = document.createRange(); //创建range
            range.selectNodeContents(text); //选择节点内容
            selection.removeAllRanges(); //移除所有range
            selection.addRange(range); //添加range
            /*if(selection.setBaseAndExtent){
             selection.setBaseAndExtent(text, 0, text, 1);
             }*/
        } else {
            layer.msg('请稍后再试');
        }
    },
    // 校验邮箱
    isEmail: function(strEmail) {
        if (strEmail.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1) {
            return true;
        } else {
            return false;
        }
    },
    // 获取用户信息
    getUserInfo:async function(gameId){
        var res = await instance.post('/first-year/get-user-info',{
            role_id:gameId
        });
        console.log(res.data)
        var data = res.data.data;
        if (res.data.code == 0) {
            // 登陆状态
            sessionStorage.setItem('sess-isLogin', JSON.stringify(true));
            // 分享状态
            sessionStorage.setItem('sess-isShare', JSON.stringify(data.user_info.is_share));
            // 当前积分
            sessionStorage.setItem('sess-left_points', JSON.stringify(data.user_info.left_points));

        }
    },
}



/*
* 接口问题：
* 1-获取用户信息少，分享状态
* 2-领取奖励状态 0 - 1 - 2
* 3-加一个奖励列表的接口 或 背包接口
* 4-晚安电话少个一个提交按钮 和 二次确认弹框 和成功弹框
*/


$(function() {

    // 获取用户信息
    // Projet_Global_Parameter.getUserInfo();

    // 如果是从游戏内进入
    // 截取url中的id参数
    // 判断新老用户   new --> page1 || old --> index
    // 点击登录直接 进度数据展示



    // 如果是从链接进入
    // 登录输入id
    // 判断新老用户 new --> page1 || old --> index
    // 登录完毕,进入数据展示


    // 登录
    $('.btn_play').on('click', function(event) {
        event.preventDefault();
        //登录弹框
        dialog.alertPopLogin();
    });

    // 模拟登录成功
    $(document).on('click','.pop_login .btn_login',function(event){
        event.preventDefault();
        // 登录成功
        if (true) {
            dialog.closeDiv();
            $('.page1').hide();

            gsap.fromTo(".page2", {
                opacity: 0,
            }, {
                opacity: 1,
                duration: 1
            });

            // 春天落花
            flower();
        }else{
            // 登录错误 从新输入
            dialog.alertPopLoginError();
        }
    })




    // 请求接口 游戏内发奖励
    $(document).on('click', '.page2_footer_btns .btn_goLott', function(event) {
        event.preventDefault();
        layer.msg('请求接口 游戏内发奖励');
        if (true) {
            // 领奖成功后 弹出打开游侠弹框
            dialog.alertPopLottend();

            // 结束页面领奖按钮变分享按钮
        }
    });
})

