/**
 * Created by Administrator on 2015/9/20.
 */
;(function(jQuery){
    var Floor = function(){
        self = this;
        this._data = {};
        this.getData();
    };

    Floor.prototype = {
        getData:function(){
            /*
            * 判断请求类型            * */

                /* json 数据的 请求 url 地址 */
                var dataJsonUrl = "./data/jsondata.json";

                /* 获取json 数据 */
                $.getJSON(dataJsonUrl, function (data) {
                    self.colorList(data);
                });

        },
        colorList:function(data){
          var mlc = 12,fl1 = [],fl2 = [],fl3 = [],fl4 = [],fl5 = [],fl0 = [];

          for(var i=0;i<mlc;i++){
              fl0.push(data[i]);
          }
          for(var i=mlc;i<mlc*2;i++){
              fl1.push(data[i]);
          }
          for(var i=mlc*2;i<mlc*3;i++){
              fl2.push(data[i]);
          }
          for(var i=mlc*3;i<mlc*4;i++){
              fl3.push(data[i]);
          }
          for(var i=mlc*4;i<mlc*5;i++){
              fl4.push(data[i]);
          }
          for(var i=mlc*5;i<mlc*6;i++){
              fl5.push(data[i]);
          }

            self.FloorOne(fl0);
            self.FloorTwo(fl1);
            self.FloorThree(fl2);
            self.FloorFour(fl3);
            self.FloorFive(fl4);
            self.FloorSix(fl5);

        },
        FloorOne:function(data){
            var str = '';
            for(var i=0;i<data.length;i++){
                var name = data[i].商品名称,
                    price = data[i].商品价格,
                    url = data[i].Panli一键代购链接;
                str += '<li>'+
                       '<a href="'+ url +'" title="'+name+'" target="_blank">'+
                         '<div class="thumb-box"><img src="./images/products/1-'+ (i+1) +'.jpg" alt=""></div>'+
                        ' <h5 title="'+name+'">'+name+'</h5>'+
                         '<p><small>￥</small>'+price+'</p>'+
                        ' <span class="z-cart" title="加入购物车"></span>'+
                      ' </a>'+
                  '   </li>';
            };
            $("#z-floor-1").find("ul").html(str);
        },
        FloorTwo:function(data){
            var str = '';
            for(var i=0;i<data.length;i++){
              var name = data[i].商品名称,
                  price = data[i].商品价格,
                  url = data[i].Panli一键代购链接;
              str += '<li>'+
                     '<a href="'+ url +'" title="'+name+'" target="_blank">'+
                       '<div class="thumb-box"><img src="./images/products/2-'+ (i+1) +'.jpg" alt=""></div>'+
                      ' <h5 title="'+name+'">'+name+'</h5>'+
                       '<p><small>￥</small>'+price+'</p>'+
                      ' <span class="z-cart" title="加入购物车"></span>'+
                    ' </a>'+
                '   </li>';
            };
            $("#z-floor-2").find("ul").html(str);
        },
        FloorThree:function(data){
            var str = '';
            for(var i=0;i<data.length;i++){
              var name = data[i].商品名称,
                  price = data[i].商品价格,
                  url = data[i].Panli一键代购链接;
              str += '<li>'+
                     '<a href="'+ url +'" title="'+name+'" target="_blank">'+
                       '<div class="thumb-box"><img src="./images/products/3-'+ (i+1) +'.jpg" alt=""></div>'+
                      ' <h5 title="'+name+'">'+name+'</h5>'+
                       '<p><small>￥</small>'+price+'</p>'+
                      ' <span class="z-cart" title="加入购物车"></span>'+
                    ' </a>'+
                '   </li>';
            };
            $("#z-floor-3").find("ul").html(str);
        },
        FloorFour:function(data){
            var str = '';
            for(var i=0;i<data.length;i++){
              var name = data[i].商品名称,
                  price = data[i].商品价格,
                  url = data[i].Panli一键代购链接;
              str += '<li>'+
                     '<a href="'+ url +'" title="'+name+'" target="_blank">'+
                       '<div class="thumb-box"><img src="./images/products/4-'+ (i+1) +'.jpg" alt=""></div>'+
                      ' <h5 title="'+name+'">'+name+'</h5>'+
                       '<p><small>￥</small>'+price+'</p>'+
                      ' <span class="z-cart" title="加入购物车"></span>'+
                    ' </a>'+
                '   </li>';
            };
            $("#z-floor-4").find("ul").html(str);
        },
        FloorFive:function(data){
            var str = '';
            for(var i=0;i<data.length;i++){
              var name = data[i].商品名称,
                  price = data[i].商品价格,
                  url = data[i].Panli一键代购链接;
              str += '<li>'+
                     '<a href="'+ url +'" title="'+name+'" target="_blank">'+
                       '<div class="thumb-box"><img src="./images/products/5-'+ (i+1) +'.jpg" alt=""></div>'+
                      ' <h5 title="'+name+'">'+name+'</h5>'+
                       '<p><small>￥</small>'+price+'</p>'+
                      ' <span class="z-cart" title="加入购物车"></span>'+
                    ' </a>'+
                '   </li>';
            };
            $("#z-floor-5").find("ul").html(str);
        },
        FloorSix:function(data){
            var str = '';
            for(var i=0;i<data.length;i++){
              var name = data[i].商品名称,
                  price = data[i].商品价格,
                  url = data[i].Panli一键代购链接;
              str += '<li>'+
                     '<a href="'+ url +'" title="'+name+'" target="_blank">'+
                       '<div class="thumb-box"><img src="./images/products/6-'+ (i+1) +'.jpg" alt=""></div>'+
                      ' <h5 title="'+name+'">'+name+'</h5>'+
                       '<p><small>￥</small>'+price+'</p>'+
                      ' <span class="z-cart" title="加入购物车"></span>'+
                    ' </a>'+
                '   </li>';
            };
            $("#z-floor-6").find("ul").html(str);
        }
    }

    window['Floor'] = Floor;

})(jQuery);

var floorD = new Floor();
