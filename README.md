配置好后执行，node server
===

## 功能介绍
vhosts及静态文件服务器。
提供静态服务器的基本功能，列目录，查看文件等。
 
支持动态合并js文件，开发期间能够快速的预览页面。
目前开发模式下，动态script载入小文件比较慢，通过麒麟自动合并，加载速度能够提升不少。
 
支持php的include和require语法。
页面制作时,通过include的方式，重用公用的HTML代码，以提高复用和维护性。
 
404文件代理
开发机或测试机上不存在的样式或js文件，会从外网去获取这些不存在的问题。
 
网站代理和页面碎片本地化
设置host 127.0.0.1 www.iqiyi.com ,页可以访问主站页面，这是麒麟的网站代理功能，这为页面碎片本地化提供了支持。
可以在开发阶段能够使用本地的碎片文件替换线上页面的局部碎片，从而简化以前需要反复编辑查看cms碎片带来的复杂度和降低请php同学反复修改smarty模板带来的沟通成本。

## 麒麟配置文件(conf.json)说明:

 {
      "ip": "127.0.0.1",
      "port": "80",
      "vhosts": {
       "127.0.0.1": {
        "DocumentRoot": "e:/static"          //本地静态文件目录
       },
       "www.iqiyi.com": {
        "DocumentRoot": "d:/qilin", 
        "goback": "true",                    //网站代理，设为true会直接请求外网资源。
        "backIp": "202.108.14.55",           //www.iqiyi.com 的外网ip
        "PageSection": {                     //页面碎片配置,用本地文件替换线上页面标识的碎片。 <!--section comment-->评论区碎片内容<!--end section-->
         "comment": "E:/static/dailybuild/section/playcmt.htm",
         "reviewlist": "E:/static/dailybuild/section/qiyireview.htm"
        }
       },
       "yule.iqiyi.com": {
        "DocumentRoot": "d:/qilin", 
        "goback": "true",  
        "backIp": "202.108.14.16"
       },
       "static.qiyi.com": {
        "DocumentRoot": "e:/static", 
        "notFundtoBack": "true",            //设为true，本地不存在的文件会从外网获取相关文件，从而实现一个完美的开发和测试环境。
        "backIp": "202.108.14.15"
       }
      }
 }



