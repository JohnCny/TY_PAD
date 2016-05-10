function  checkRadio(obj){   //单选样式 
    $(obj).parent().find('.radio').attr("class","radio");
    $(obj).parent().find('input[type=radio]').removeAttr('checked');
    $(obj).attr("class","radio radio_checked");
    $(obj).find('input[type=radio]').attr('checked',"checked");
}
function checkimg(obj){//选择图片
    if($(obj).find(".zz").css("display")=="none"){
        $(obj).find(".zz").css("display","block")
    }
    else{     
        $(obj).find(".zz").css("display","none")
    }
}
//左侧导航
function changeNav(obj,num){
    var images=$(".nav img");
    $(".left .nav .li").css("background","#e7e7eb");
    $(obj).css("background","#fff");//背景
    $(".left .nav .li span").css("color","#858fa6");
    $(obj).find("span").css("color","#298dd7");//文字
    for(i=1;i<6;i++){
        images[i].src="images/"+i+".png";
    }
    images[num].src="images/"+num+"_b.png";
    $(".left").animate({left:"-13.1em"},"500");
    $(".right").animate({left:"0"},"500");
    //setTimeout("$('.left').hide()",500);
}
function showNav(){
    if($(".left").css("left")!="0px"){
       // $(".left").show();
        $(".left").animate({left:"0"},"500");
        //$(".right").animate({left:"13.1em"},"500"); 
    }
    else{
        $(".left").animate({left:"-13.1em"},"500");
       // $(".right").animate({left:"0"},"500"); 
       // setTimeout("$('.left').hide()",500);
    }
        
}
function changeTab(obj,id){
    $('.tab li').attr('class','');
    $(obj).attr('class','active');
    $('.tabDIV').hide();
    $('#'+id).show();
}
//选择行
function check(obj){
    $("input[type=radio]").removeAttr("checked");
    $(".radio").attr("class","radio");
    $(obj).parent().find("tr").css("background","#fff");
    $(obj).find("input[type=radio]").attr('checked','checked');
    $(obj).find(".radio").attr("class","radio radio_checked");
    $(obj).css("background","#dceafc");
}

//搜索DIV
function search(obj){
    var value=$(obj).val();
    if(value==""){
        $(".cplb").show();
    }
    else{
        $(".cplb").each(function(){
            if(this.innerHTML.indexOf(value)>=0){
                $(this).show();
            }                       
            else{
                $(this).hide();
            }
                
        })
    }    
}
function searchTR(obj){
    var value=$(obj).val();
    if(value==""){
        $("tr.search").show();
    }
    else{
        $("tr.search").each(function(){
            if(this.innerHTML.indexOf(value)>=0){
                $(this).show();
            }                       
            else{
                $(this).hide();
            }
                
        })
    }    
}
//表格添加行
function addTd(table){ 
    if(table=="lxrxx"){//联系人信息
        var num= $('#lxrxx tr').length;
        $("#"+table).append("<tr>"+    
                                "<td>"+num+"</td>"+
                                "<td><input type='text' value=''/></td>"+
                                "<td><input type='text' value=''/></td>"+
                                "<td><input type='text' value=''/></td>"+
                            "</tr>");      
    }
    if(table=="csqy"){//初始权益
        $("#"+table).append("<tr>"+    
                                "<td><input type='text' value=''/></td>" +
                                "<td><input type='text' value=''/></td>" +
                                "<td><input type='text' value=''/></td>" +
                                "<td><input type='text' value=''/></td>" +
                            "</tr>");      
    }
    if(table=="dxzc"){//大项支出
        $("#"+table).append("<tr>"+    
                                "<td><input type='text' value=''/></td>" +
                                "<td><input type='text' value=''/></td>" +
                                "<td><input type='text' value=''/></td>" +
                                "<td><input type='text' value=''/></td>" +
                            "</tr>");      
    }
    if(table=="szzj"){//升值/折旧
        $("#"+table).append("<tr>"+    
                                "<td><input type='text' value=''/></td>" +
                                "<td><input type='text' value=''/></td>" +
                            "</tr>");      
    }
    if(table=="yyfy"){//营业费用
        var num= $('#yyfy tr').length-1;
        $("#"+table).append("<tr>"+    
                                "<td>"+num+"</td>"+
                                "<td><input type='text' value=''/></td>" +
                                "<td><input type='text' value=''/></td>" +
                            "</tr>");      
    }
    if(table=="khxx"){//企业开户信息
        var num= $('#khxx tr').length;
        $("#"+table).append("<tr>"+    
                                "<td>"+num+"</td>"+
                                "<td><input type='text'/></td>"+  
                                "<td><input type='text' class='addinput'/></td>"+
                            "</tr>");      
    }
    if(table=="dhd"){//点货单
        var num= $('#dhd tr').length;
        $("#"+table).append("<tr>"+    
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                            "</tr>");      
    }
    if(table=="gdzcqd"){//固定资产清单
        var num= $('#gdzcqd tr').length-1;
        $("#"+table).append("<tr>"+   
                                "<td>"+num+"</td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='date' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                            "</tr>");      
    }
    if(table=="ysyfqd"){//应收预付清单
        var num= $('#ysyfqd tr').length-1;
        $("#"+table).append("<tr>"+   
                                "<td>"+num+"</td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='date' class='addinput'/></td>"+
                                "<td><input type='date' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                            "</tr>");      
    }
    if(table=="yfysqd"){//应付预收清单
        var num= $('#yfysqd tr').length-1;
        $("#"+table).append("<tr>"+   
                                "<td>"+num+"</td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='date' class='addinput'/></td>"+
                                "<td><input type='date' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                            "</tr>");      
    }
    if(table=="fzxmmxqd"){//负债项目明细清单
        var num= $('#fzxmmxqd tr').length-1;
        $("#"+table).append("<tr>"+   
                                "<td>"+num+"</td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='date' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='date' class='addinput'/></td>"+
                                "<td><input type='date' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                            "</tr>");      
    }
	if(table=="fcxx"){//房产信息
        var num= $('#fcxx tr').length;
        $("#"+table).append("<tr>"+    
                                "<td>"+num+"</td>"+
                                "<td><input type='text' class='addinput'/></td>"+
								"<td><input type='text' class='addinput'/></td>"+
								"<td><input type='date' class='addinput'/></td>"+
								"<td><input type='text' class='addinput'/></td>"+
								"<td><input type='text' class='addinput'/></td>"+
								"<td>" +
                                    "<select>" +
                                        "<option>现金</option>" +
                                    "</select>" +
                                "</td>"+
								"<td><input type='text' class='addinput'/></td>"+
                            "</tr>");      
    }
	if(table=="ccxx"){//车产信息
        var num= $('#ccxx tr').length;
        $("#"+table).append("<tr>"+    
                                "<td>"+num+"</td>"+
                                "<td><input type='text' class='addinput'/></td>"+
								"<td><input type='text' class='addinput'/></td>"+
								"<td><input type='date' class='addinput'/></td>"+
								"<td><input type='text' class='addinput'/></td>"+
								"<td><input type='text' class='addinput'/></td>"+
								"<td>" +
                                    "<select>" +
                                        "<option>现金</option>" +
                                    "</select>" +
                                "</td>"+
								"<td><input type='text' class='addinput'/></td>"+
                            "</tr>");      
    }
    if(table=="fcz"){//房产证
        var num= $('#fcz tr').length;
        $("#"+table).append("<tr>"+    
                                "<td>"+num+"</td>"+
                                "<td><input type='text' id='fcz_sheet"+num+"' class='readonly' readonly='readonly'/><input type='button' class='btn' value='选择文件' onclick='getMedia(\"fcz_sheet"+num+"\",\"img\");'/></td>"+
                                "<td><img src='images/ugc_icon_type_photo.png' onclick='capture(\"fcz_sheet"+num+"\",\"img\");'/></td>"+
                            "</tr>");      
    }
    if(table=="jhz"){//结婚证
        var num= $('#jhz tr').length;
        $("#"+table).append("<tr>"+    
                                "<td>"+num+"</td>"+
                                "<td><input type='text' id='jhz_sheet"+num+"' class='readonly' readonly='readonly'/><input type='button' class='btn' value='选择文件' onclick='getMedia(\"jhz_sheet"+num+"\",\"img\");'/></td>"+
                                "<td><img src='images/ugc_icon_type_photo.png' onclick='capture(\"jhz_sheet"+num+"\",\"img\");'/></td>"+
                            "</tr>");      
    }
    if(table=="zxbg"){//征信报告
        var num= $('#zxbg tr').length;
        $("#"+table).append("<tr>"+    
                                "<td>"+num+"</td>"+
                                "<td><input type='text' id='zxbg_sheet"+num+"' class='readonly' readonly='readonly'/><input type='button' class='btn' value='选择文件' onclick='getMedia(\"zxbg_sheet"+num+"\",\"img\");'/></td>"+
                                "<td><img src='images/ugc_icon_type_photo.png' onclick='capture(\"zxbg_sheet"+num+"\",\"img\");'/></td>"+
                            "</tr>");      
    }
    if(table=="yhls"){//银行流水
        var num= $('#yhls tr').length;
        $("#"+table).append("<tr>"+    
                                "<td>"+num+"</td>"+
                                "<td><input type='text' id='yhls_sheet"+num+"' class='readonly' readonly='readonly'/><input type='button' class='btn' value='选择文件' onclick='getMedia(\"yhls_sheet"+num+"\",\"img\");'/></td>"+
                                "<td><img src='images/ugc_icon_type_photo.png' onclick='capture(\"yhls_sheet"+num+"\",\"img\");'/></td>"+
                            "</tr>");      
    }
    if(table=="qtyxzl"){//其他影像资料
        var num= $('#qtyxzl tr').length;
        $("#"+table).append("<tr>"+    
                                "<td>"+num+"</td>"+
                                "<td><input type='text' id='qtyxzl_sheet"+num+"' class='readonly' readonly='readonly'/><input type='button' class='btn' value='选择文件' onclick='getMedia(\"qtyxzl_sheet"+num+"\",\"img\");'/></td>"+
                                "<td><img src='images/ugc_icon_type_photo.png' onclick='capture(\"qtyxzl_sheet"+num+"\",\"img\");'/></td>"+
                            "</tr>");      
    }
  if(table=="gzjh"){//工作计划
      var num= $('#gzjh tr').length;
      $("#"+table).append("<tr>"+    
                              "<td>"+num+"</td>"+
                              "<td><input type='text' class='addinput'/></td>"+
                              "<td><input type='text' class='addinput'/></td>"+
                              "<td><input type='date' class='addinput'/></td>"+
                              "<td><input type='text' class='addinput'/></td>"+
                              "<td><input type='text' class='addinput'/></td>"+
                          "</tr>");      
  }
}
//表格删除行
function removeTd(table){   
    var tr= document.getElementById(table).getElementsByTagName("tr");
    if(table=="yyfy"||table=="dxzc"||table=="szzj"){
        if(tr.length>1)//至少要保留一行
            document.getElementById(table).deleteRow(tr.length-1);//删除最后一行
    }
    else{
        if(tr.length>2)//至少要保留一行
            document.getElementById(table).deleteRow(tr.length-1);//删除最后一行
    }
        
       
}