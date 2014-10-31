var nyphile = function() {};
var _callback = shareData.callback || nyphile;
var _size = shareData.imgSize || 200;
var _title = shareData.title || document.title;
var _link = shareData.link || window.location.href;
var _desc = shareData.desc || document.title;
var _appid = shareData.appid || '';
function shareFriend(){
	WeixinJSBridge.invoke('sendAppMessage',{
		"appid": _appid,
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
		"appid": _appid,
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
		"appid": _appid,
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
		"appid": _appid,
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