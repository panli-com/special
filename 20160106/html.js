function FloorList(data){
      var mlc = 15,fl1 = [],fl2 = [],fl3 = [],fl4 = [],fl0 = [];

          for(var i=0;i<mlc+4;i++){
              fl0.push(data[i]);
          }
          for(var i=mlc+4;i<mlc*2+8;i++){
              fl1.push(data[i]);
          }
          for(var i=mlc*2+8;i<mlc*3+8;i++){
              fl2.push(data[i]);
          }
          for(var i=mlc*3+8;i<mlc*4+8;i++){
              fl3.push(data[i]);
          }
         
         
        
          FloorAll(fl0,'coat',4);
          FloorAll(fl1,'pants',5);
          FloorAll(fl2,'shoes',6);
          FloorAll(fl3,'hats',7);
          FloorAll(fl4,'others',8);
        
}

function FloorAll(data,imgHead,id){

	var str = '';
            for(var i=0;i<data.length;i++){
                var name = data[i].商品名称,
                    price = data[i].价格,                  
                    imgUrl = './build/images/products/'+data[i].图片名称,
                    proUrl = data[i].链接;
                    
                  str +='   <li class="">'+
                            '     <a target="_blank"  href="http://www.panli.com/Crawler.aspx?purl='+ proUrl +'">'+
                               '      <div class="thumb">'+
                                '         <img src="'+ imgUrl +'" alt="">'+
                                 '    </div>'+
                                 '    <h6 class="p-title">'+ name +'</h6>'+
                                 '    <p class="p1">'+
                                  '       <span class="symbol">￥</span>'+ price +
                                  '   </p>'+
                                   '  <span class="buy-btn">&nbsp;</span>'+
                               '  </a>'+
                           '  </li>';
                    
                    
               

            };
     $("#floor-"+id).find("ul").append(str);
}