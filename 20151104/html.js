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
          var mlc = 12,fl1 = [],fl2 = [],fl3 = [],fl4 = [],fl5 = [],fl6 = [],fl0 = [];

          for(var i=0;i<mlc+4;i++){
              fl0.push(data[i]);
          }
          for(var i=mlc+4;i<mlc*2+4;i++){
              fl1.push(data[i]);
          }
          for(var i=mlc*2+4;i<mlc*3+4;i++){
              fl2.push(data[i]);
          }
          for(var i=mlc*3+4;i<mlc*4+4;i++){
              fl3.push(data[i]);
          }
          for(var i=mlc*4+4;i<mlc*5+4;i++){
              fl4.push(data[i]);
          }
          for(var i=mlc*5+4;i<mlc*6+4;i++){
              fl5.push(data[i]);
          }
          for(var i=mlc*6+4;i<mlc*7+4;i++){
              fl6.push(data[i]);
          }
        //   self.FloorAll(fl0,'NZ','nz');
        //   self.FloorAll(fl1,'男装','naz');
        //   self.FloorAll(fl2,'xx','xx');
        //   self.FloorAll(fl3,'xb','xb');
        //   self.FloorAll(fl4,'mz','mz');
        //   self.FloorAll(fl5,'PS','ps');
        //   self.FloorAll(fl6,'jj','jj');
        
          self.FloorAll(fl0,'NZ',1);
          self.FloorAll(fl1,'男装',2);
          self.FloorAll(fl2,'xx',3);
          self.FloorAll(fl3,'xb',4);
          self.FloorAll(fl4,'mz',5);
          self.FloorAll(fl5,'PS',6);
          self.FloorAll(fl6,'jj',7);

        },
        FloorAll:function(data,imgHead,id){
            var str = '';
            for(var i=0;i<data.length;i++){
                var name = data[i].商品名称,
                    price = data[i].专柜价原价,
                    price2 = data[i].狂欢价双11价,
                    imgUrl = './css/products/'+imgHead+(i+1)+'.jpg',
                    proUrl = data[i].商品纯净链接,
                    gouUrl = 'http://www.panli.com/Crawler.aspx?purl='+proUrl,
                    Collect = 'http://www.panli.com/mypanli/Favorite.aspx?url='+proUrl;
                str += '<li><a href="'+ gouUrl +'" target="_blank"><img src="'+ imgUrl +'" /></a>'+
                    '<div class="Ladies_title"><a href="'+ gouUrl +'" title="'+ name +'" target="_blank">'+
                    ''+ name +'</a></div>'+
                    '<div class="Ladies_Carnival">狂欢价：<span class="ys_yuanjia">'+ price2 +'</span><span class="ys_Eleven">'+
                    '专柜价：'+ price +'</span></div>'+
                    '<div class="ys_price">'+
                    '<div><a href="'+ Collect +'" title="点击收藏" target="_blank" class="Deposit_left"></a></div>'+
                    '<div><a href="'+ gouUrl +'" title="立即购买" target="_blank" class="price_right"></a></div>'+
                    '</div>'+
                    '</li>';

            };
            $("#floor_"+id).html(str+'<div class="clear"></div>');
          
        },
        FloorOne:function(data){

            
        }
    }

    window['Floor'] = Floor;

})(jQuery);

var floorD = new Floor();
