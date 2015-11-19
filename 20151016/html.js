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
          var mlc = 7,fl1 = [],fl2 = [],fl3 = [],fl4 = [],fl5 = [],fl0 = [];

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
          self.FloorAll(fl0,'costume',1);
          self.FloorAll(fl1,'backpack',2);
          self.FloorAll(fl2,'supplies',3);
          self.FloorAll(fl3,'food',4);
          self.FloorAll(fl4,'toy',5);
            //self.FloorOne(fl0);
            // self.FloorTwo(fl1);
            // self.FloorThree(fl2);
            // self.FloorFour(fl3);
            // self.FloorFive(fl4);


        },
        FloorAll:function(data,imgHead,id){

            var fistH = '<a class="hvr-float" href="'+ data[0].站内链接 +'" target="_blank" title="'+ data[0].简短商品名 +'">'+
              '<div class="z-thumb">'+
                  '<img src="./images/products/'+imgHead+'1.jpg" alt="">'+
                '</div>'+
                '<div class="z-desc">'+
                  '<p>'+ data[0].简短商品名 +'</p>'+
                  '<p>Price: $'+ data[0].商品价格 +'</p>'+
                '</div>'+
            '</a>';

            var str = '';
            for(var i=1;i<data.length;i++){
                var name = data[i].简短商品名,
                    price = data[i].商品价格,
                    imgUrl = './images/products/'+imgHead+(i+1)+'.jpg';
                    url = data[i].站内链接;
                str += '<li class="hvr-float">'+
                  '<a href="'+ url +'"  target="_blank" title="'+ name +'" >'+
                    '<div class="z-thumb">'+
                      '<img src="'+ imgUrl +'" alt="">'+
                      '</div>'+
                    '<div class="z-desc">'+
                    '  <p>'+ name +'</p>'+
                    '  <p>Price: $'+ price +'</p>'+
                  '  </div>'+
                '  </a>'+
                '</li>';
            };
            $("#floor-"+id).find(".pro-list-u").html(str);
            $("#floor-"+id).find(".z-pro-first").html(fistH);
        },
        FloorOne:function(data){

            var fistH = '<a href="'+ data[0].站内链接 +'" target="_blank">'+
              '<div class="z-thumb">'+
                  '<img src="./images/products/costume1.jpg" alt="">'+
                '</div>'+
                '<div class="z-desc">'+
                  '<p>'+ data[0].简短商品名 +'</p>'+
                  '<p>Price: $'+ data[0].商品价格 +'</p>'+
                '</div>'+
            '</a>';

            var str = '';
            for(var i=1;i<data.length;i++){
                var name = data[i].简短商品名,
                    price = data[i].商品价格,
                    imgUrl = './images/products/costume'+(i+1)+'.jpg';
                    url = data[i].站内链接;
                str += '<li>'+
                  '<a href="'+ url +'"  target="_blank">'+
                    '<div class="z-thumb">'+
                      '<img src="'+ imgUrl +'" alt="">'+
                      '</div>'+
                    '<div class="z-desc">'+
                    '  <p>'+ name +'</p>'+
                    '  <p>Price: $'+ price +'</p>'+
                  '  </div>'+
                '  </a>'+
                '</li>';
            };
            $("#floor-1").find(".pro-list-u").html(str);
            $("#floor-1").find(".z-pro-first").html(fistH);
        }
    }

    window['Floor'] = Floor;

})(jQuery);

var floorD = new Floor();
