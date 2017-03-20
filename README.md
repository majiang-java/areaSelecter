# 移动端地区选择控件
>这是一个简单的地区选择控件，用来在移动的有地区选择的业务时使用。

## quickly to start

引入
```
<link rel="stylesheet"  type="text/css" href="css/dialog.css">
<link rel="stylesheet"  type="text/css" href="css/selecter.css">
<script src="js/zepto.js"></script>
<script src="js/dialog-new.js"></script>
<script src="js/areaselecter.js"></script>
```

在js代码初始化区域加入如下代码
```
   var selectArea = new MobileSelectArea();
   selectArea.init({trigger:'.region',
                    value:$('#hd_area').val(),
                    data:'data/datac.js'
                });
```
然后在需要调用的body中加入如下代码
```
  <div id="container1">  
  <input class="region" id="region" type="text"  value="北京市 北京市" data-value="110000,110000" />
  <input type="hidden" id="hd_area" value="110000,110000"/>
 </div>

```

初始化API
 
```
trigger:'.region',//需要构建的容器

value:$('#hd_area').val(),//选中后生成的值
data:'data/datac.js' //数据 可以为url,或者静态列表 推荐静态
```

  


>左面省份 右面城市，已经用在了生产环境
