var shareData = {
	'link' = 'http://jiankang.163.com/special/weixin_quiz/',
	'imgUrl' = 'http://img1.cache.netease.com/f2e/health/weixin_quiz/images/120x120-5star.jpg',
	'imgSize' = '300',
	'title' = '测测你的“白领症”中招指数吧！',
	'desc' = '我刚测完自己的”白领症“中招指数，你也来测测你的“白领症”中招指数吧！',
	'appid' = '',
	'callback' = function(){
		console.log("I'm back!")
	}
}
;function(global, doc){
	function shareFriend(){
		WeixinJSBridge.invoke('sendAppMessage',{
			"appid": shareData.appid,
			"img_url": shareData.imgUrl,
			"img_width": shareData.imgSize,
			"img_height": shareData.imgSize,
			"link": shareData.link,
			"desc": shareData.desc,
			"title": shareData.title
		},shareData.callback);
	}

	function shareTimeline() {
		WeixinJSBridge.invoke('shareTimeline',{
			"appid": shareData.appid,
			"img_url": shareData.imgUrl,
			"img_width": shareData.imgSize,
			"img_height": shareData.imgSize,
			"link": shareData.link,
			"desc": shareData.desc,
			"title": shareData.title
		},shareData.callback);
	}

})(window, document);

function shareWeibo() {
	WeixinJSBridge.invoke('shareWeibo',{
		"content": descContent,
		"url": lineLink,
	}, function(res) {
		_report('weibo', res.err_msg);
	});
}
function shareFriendYi() {
	YixinJSBridge.invoke('sendAppMessage',{
		"appid": appid,
		"img_url": imgUrl,
		"img_width": "120",
		"img_height": "120",
		"link": lineLink,
		"desc": descContent,
		"title": shareTitle
	}, function(res) {
		_report('send_msg', res.err_msg);
	})
}
function shareTimelineYi() {
	YixinJSBridge.invoke('shareTimeline',{
		"img_url": imgUrl,
		"img_width": "120",
		"img_height": "120",
		"link": lineLink,
		"desc": descContent,
		"title": shareTitle
	}, function(res) {
		_report('timeline', res.err_msg);
	});
}
function shareWeiboYi() {
	YixinJSBridge.invoke('shareWeibo',{
		"content": descContent,
		"url": lineLink,
	}, function(res) {
		_report('weibo', res.err_msg);
	});
}

		// 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
		document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {

		        // 发送给好友
		        WeixinJSBridge.on('menu:share:appmessage', function(argv){
		        	shareFriend();
		        });

		        // 分享到朋友圈
		        WeixinJSBridge.on('menu:share:timeline', function(argv){
		        	shareTimeline();
		        });

		        // 分享到微博
		        WeixinJSBridge.on('menu:share:weibo', function(argv){
		        	shareWeibo();
		        });
		    }, false);
		// 当易信内置浏览器完成内部初始化后会触发YixinJSBridgeReady事件。
		document.addEventListener('YixinJSBridgeReady', function onBridgeReady() {

		    // 发送给好友
		    YixinJSBridge.on('menu:share:appmessage', function(argv){
		    	shareFriendYi();
		    });

		    // 分享到朋友圈
		    YixinJSBridge.on('menu:share:timeline', function(argv){
		    	shareTimelineYi();
		    });

		    // 分享到微博
		    YixinJSBridge.on('menu:share:weibo', function(argv){
		    	shareWeiboYi();
		    });
		}, false);