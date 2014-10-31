# Yixin.chat.js
一个微信和易信的分享的简单js~

微信/易信扫描下图二维码打开页面，并分享

![nyphile](http://nyphile.github.io/Yixin.chat.js/images/qcode.png)

或微信/易信打开[http://nyphile.github.io/Yixin.chat.js/](http://nyphile.github.io/Yixin.chat.js/)

**1.配置参数~**

在页面中写入`<script>`标签，内容如下：

```js

var shareData = {
	link : 'http://jiankang.163.com/special/weixin_quiz/',
	imgUrl : 'http://img1.cache.netease.com/f2e/health/weixin_quiz/images/120x120-5star.jpg',
	imgSize : '300',
	title : '测测你的“白领症”中招指数吧！',
	desc : '我刚测完自己的”白领症“中招指数，你也来测测你的“白领症”中招指数吧！',
	appid : '',
	callback : function(){
		document.getElementsByTagName("h1")[0].innerHTML="I'm back!";
	}
};

```

其中：

link：想让看到分享的用户点击的链接，不设置即为当前页面；

imgUrl：分享块左侧的图片；

imgSize：图片的尺寸；

title：分享块的标题文字，不设置即为当前页面title；

desc：分享块的描述文字，不设置即为当前页面title(在微信下，分享到朋友圈没有描述)；

appid：app的id，可不设置；

callback：点击时触发的方法(是点击时，而非分享成功)，可留空。

**2.页面引入~**

除了上述配置，再在配置之后引入js：

> `<script src="http://nyphile.github.io/Yixin.chat.js/weiyixin.chat.js"></script>`

即可。

**3.实现效果~**

微信发给好友：

![nyphile](http://img1.cache.netease.com/f2e/health/index2014/images/wechat_friend.png)

微信发给好友圈：

![nyphile](http://img1.cache.netease.com/f2e/health/index2014/images/wechat_timeline.png)

易信发给好友和发给朋友圈长得一样：

![nyphile](http://img1.cache.netease.com/f2e/health/index2014/images/yixin_timeline.png)


最后感谢[sofish](https://github.com/sofish)同学的[wechat.js](http://sofish.github.io/wechat.js)~

