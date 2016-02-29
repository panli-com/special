function FloorList(data){
      var mlc = 8,fl1 = [],fl2 = [],fl3 = [],fl4 = [],fl0 = [];

          for(var i=0;i<mlc;i++){
              fl0.push(data[i]);
          }
          for(var i=mlc;i<mlc*2+4;i++){
              fl1.push(data[i]);
          }
          for(var i=mlc*2+4;i<mlc*3+8;i++){
              fl2.push(data[i]);
          }
          for(var i=mlc*3+8;i<mlc*4+12;i++){
              fl3.push(data[i]);
          }
          for(var i=mlc*4+12;i<mlc*5+16;i++){
              fl4.push(data[i]);
              console.log(data[i])
          }
         
         
        
          FloorAll(fl0,'coat',1);
          FloorAll(fl1,'pants',2);
          FloorAll(fl2,'shoes',3);
          FloorAll(fl3,'hats',4);
          FloorAll(fl4,'hats',5);
     
        
}

function FloorAll(data,imgHead,id){

	var str = '';
            for(var i=0;i<data.length;i++){
                var name = data[i].商品名称,
                    price = data[i].原价,
                    price2 = data[i].现价,
                    Popular = data[i].人气值,                
                    imgUrl = './build/css/cssImg/products/'+data[i].图片名称,
                    proUrl = 'http://www.panli.com/Crawler.aspx?purl='+data[i].链接;
                    
                  str =  str +'<li><a href="'+ proUrl +'" target="_blank"><img src="'+ imgUrl +'.jpg" width="240" height="270" /></a>'+
                   ' <div class="Support">'+
                    '<div class="ceng"></div>'+
                    '<dl>'+
                    '    <dt>人气值：'+ Popular +'</dt>'+
                    '</dl>'+
                    '</div><div class="Support">'+
                    '<div class="ceng"></div>'+
                    '<dl>'+
                    '    <dt>人气值：'+ Popular +'</dt>'+
                    '</dl>'+
                    '</div>'+
                    '<div class="pro_title">'+
                    '    <p><span class="money_icon">￥</span><span class="pro_Price">'+ price2 +'</span>'+
                    '     　<span class="original_price">原价：<span class="original_xian">￥'+ price +'</span></span></p>'+
                    '    <p><a href="'+ proUrl +'" target="_blank">'+ name +'</a></p>'+
                    '</div>'+
                    '</li> ';
                    
               

            };
     PD("#floor-"+id).find("ul").html(str);
}