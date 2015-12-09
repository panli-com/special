function FloorList(data){
      var mlc = 8,fl1 = [],fl2 = [],fl3 = [],fl4 = [],fl0 = [];

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
         
        
          FloorAll(fl0,'coat',1);
          FloorAll(fl1,'pants',2);
          FloorAll(fl2,'shoes',3);
          FloorAll(fl3,'hats',4);
          FloorAll(fl4,'others',5);
        
}

function FloorAll(data,imgHead,id){

	var str = '';
            for(var i=0;i<data.length;i++){
                var name = data[i].name,
                    price = data[i].商品价格,                  
                    imgUrl = './build/images/products/'+imgHead+(i+1)+'.jpg',
                    proUrl = data[i].站内链接;
                    
                str += '<li>'+
                            '<a href="'+ proUrl +'" target="_black" title='+ name +'>'+
                             '   <div class="thumb">'+
                              '      <img src="'+ imgUrl +'" alt="">'+
                               ' </div>'+
                                '<div class="count">'+
                                 '   <p>'+ name +'</p>'+
                                  '  <p>Price: $'+ price +'</p>'+
                               ' </div>'+
                            '</a>'+
                        '</li>';

            };
     $("#floor-"+id).find("ul").html(str);
}