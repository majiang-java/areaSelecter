#移动端地区选择控件
>这是一个简单的地区选择控件，用来在移动的有地区选择的业务时使用。
##how to start
```
   var selectArea = new MobileSelectArea();
   selectArea.init({trigger:'.region',
                    value:$('#hd_area').val(),
                    data:'data/datac.js'
                });
```
代码中有例子
```
  <div id="container1">  <input class="region" id="region" type="text"  value="北京市 北京市" data-value="110000,110000" />
        <input type="hidden" id="hd_area" value="110000,110000"/></div>

```
>左面省份 右面城市，已经用在了生产环境
