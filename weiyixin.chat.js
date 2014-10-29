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

var nyphile = function() {};
var _callback = shareData.callback || nyphile;
var _size = shareData.imgSize || 200;
var _title = shareData.title || document.title;
var _link = shareData.link || window.location.href;
var _desc = shareData.desc || document.title;
function shareFriend(){
	WeixinJSBridge.invoke('sendAppMessage',{
		"appid": shareData.appid,
		"img_url": shareData.imgUrl,
		"img_width": _size,
		"img_height": _size,
		"link": _link,
		"desc": _desc,
		"title": _title
	},_callback);
}
function shareTimeline() {
	WeixinJSBridge.invoke('shareTimeline',{
		"appid": shareData.appid,
		"img_url": shareData.imgUrl,
		"img_width": _size,
		"img_height": _size,
		"link": _link,
		"desc": _desc,
		"title": _title
	},_callback);
}
function shareWeibo() {
	WeixinJSBridge.invoke('shareWeibo',{
		"content": _desc,
		"url": _link
	},_callback);
}
function shareFriendYi() {
	YixinJSBridge.invoke('sendAppMessage',{
		"appid": shareData.appid,
		"img_url": shareData.imgUrl,
		"img_width": _size,
		"img_height": _size,
		"link": _link,
		"desc": _desc,
		"title": _title
	},_callback);
}
function shareTimelineYi() {
	YixinJSBridge.invoke('shareTimeline',{
		"appid": shareData.appid,
		"img_url": shareData.imgUrl,
		"img_width": _size,
		"img_height": _size,
		"link": _link,
		"desc": _desc,
		"title": _title
	},_callback);
}
function shareWeiboYi() {
	YixinJSBridge.invoke('shareWeibo',{
		"content": _desc,
		"url": _link
	},_callback);
}
// 当微信/易信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady/YixinJSBridgeReady事件。
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