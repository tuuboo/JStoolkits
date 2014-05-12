### 前言.
这里收集或实现了一些Javascript代码，共享给需要的同学使用。

### Font-Metrics
网页中常常遇到需要对显示的标题做截断处理的情况，但是由于不同字符所要占的宽度不尽相同，所以经常遇到英文中文等混排的情况。如果仅仅根据字符个数进行截断，往往会导致截的过短或者过长的问题。所以更好的方法是根据显示区域的宽度进行字符截断，`font-metrics.js`这个脚本就是用来完成这个功能的（Demo：http://sandbox.runjs.cn/show/9uwdbudb ），使用方法如下：
```
var fm12 = new FontMetrics($, 12); //设置为12px大小字符
str = fm12.strip("你好，hello:12345678", 100); //显示区域为100px宽，返回结果为截取后的字符串
/*结果为："你好，hello:123..."*/
var fm16 = new FontMetrics($, 16, "font-weight:bold"); //设置为16px大小字体，而且为粗体
str = fm16.strip("你好，hello:12345678", 100);
/*结果为："你好，hello..."*/
```
