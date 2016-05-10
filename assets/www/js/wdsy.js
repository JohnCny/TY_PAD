  
//我的首页
function mywdsy(){
    window.scrollTo(0,0);//滚动条回到顶端
    $("#mainPage").html("<div class='title'>我的首页</div>"+  
                        "<div class='content'>" +
                            "<div class='user-info'>" +
                                "<img src='images/sq.jpg'/>"+
                                "<p class='h2'>客户经理信息</p>"+
                                "<p>姓名：杨景琳</p>"+
                                "<p>性别：女</p>"+
                                "<p>年龄：36岁</p>"+
                                "<p>所属银行：济南农商行总行</p>"+
                                "<p>客户经理编号：01010419</p>"+
                                "<p>职位：客户经理主管</p>"+
                                "<p>授信权限：50万</p>"+
                                "<p>放款总额：100万</p>"+
                            "</div>"+
                            "<div class='box wdsy1' onclick='mycpgl()'><img src='images/clkh.png'/><span>产品查询</span></div>"+
                            "<div class='box wdsy2' onclick='khjjxx();pie()'><img src='images/khjjxx.png'/><span>客户进件信息</span></div>"+
                            "<div class='box wdsy3' onclick='khyyzk()'><img src='images/khyyzk.png'/><span>客户运营状况</span></div>"+
                            "<div class='box wdsy4' onclick='tz()'><img src='images/tz.png'/><span>通知</span></div>"+
                            "<div class='box wdsy5' onclick='jljlxx()'><img src='images/jljlxx.png'/><span>奖励激励信息</span></div>"+                           
                        "</div>");
    $(".right").hide();
    $("#mainPage").show();
}
//客户进件信息
function khjjxx(){
    window.scrollTo(0,0);//滚动条回到顶端
    $("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdsy()'/>客户进件信息</div>"+  
						"<div class='content'>" +
							"<div id='ex_1' class='zingchart'></div>"+ 
							"<div class='ban'></div>"+
							"<p>" +
								"<input type='button' class='tab-button' style='margin-left:40px;' value='补充进件' onclick='bcjj()'/>" +
								"<input type='button' class='tab-button' value='拒绝进件' onclick='jjjj()'/>" +
							"</p>" +
						"</div>");
    $(".right").hide();
    $("#mainPage").show();
}
function pie() {
    // example one data
    var ex1 = {                         
        "type": "pie",
        "legend":{},
        "backgroundColor":"#fff",
        "series": [
            {   
              "backgroundColor":"#e62163","text": "拒绝进件数量  "+10,"values": [10]
            },
            {   
              "backgroundColor":"#4e74c0","text": "审核通过数量  "+60,"values": [60]
            }
        ]
    };
    // render example one
    $('#ex_1').zingchart({
        data:ex1
    }); 
}
//客户进件信息-补充进件
function bcjj(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khjjxx();pie()'/>客户进件信息-补充进件</div>"+ 
                    "<div class='content'>"+
                        "<table class='cpTable' style='text-align:center;'>"+
                            "<tr>"+                             
                                "<th>序号</th>"+  
                                "<th>客户姓名</th>"+
                                "<th>客户身份标识</th>"+
                                "<th>接受</th>"+
                                "<th>拒绝</th>"+
                                "<th>是否变更维护计划</th>"+
                            "</tr>"+
                            "<tr>"+    
                                "<td>1</td>"+
                                "<td>郝俊芝</td>"+
                                "<td></td>"+
                                "<td><img src='images/success.png'/></td>"+
                                "<td></td>"+
                                "<td><input type='button' class='btn btn-warning' value='是'/></td>"+
                            "</tr>"+
                            "<tr>"+    
                                "<td>2</td>"+
                                "<td>郝俊芝</td>"+
                                "<td></td>"+
                                "<td></td>"+
                                "<td><img src='images/wrong.png'/></td>"+
                                "<td><input type='button' class='btn btn-warning' value='是'/></td>"+
                            "</tr>"+
                        "</table>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
  }   
  
//客户进件信息-拒绝进件
function jjjj(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khjjxx();pie()'/>客户进件信息-拒绝进件</div>"+ 
                    "<div class='content'>"+
                        "<table class='cpTable' style='text-align:center;'>"+
                            "<tr>"+                             
                                "<th>序号</th>"+  
                                "<th>客户姓名</th>"+
                                "<th>客户身份标识</th>"+
                                "<th>接受</th>"+
                                "<th>拒绝</th>"+
                            "</tr>"+
                            "<tr>"+    
                                "<td>1</td>"+
                                "<td>郝俊芝</td>"+
                                "<td></td>"+
                                "<td><img src='images/success.png'/></td>"+
                                "<td></td>"+
                            "</tr>"+
                            "<tr>"+    
                                "<td>2</td>"+
                                "<td>郝俊芝</td>"+
                                "<td></td>"+
                                "<td></td>"+
                                "<td><img src='images/wrong.png'/></td>"+
                            "</tr>"+
                        "</table>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
  }   
//客户运营状况
function khyyzk(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdsy()'/>客户运营状况</div>"+  
                    "<div class='content' style='width:70%;margin:0 auto;'>" +
                        "<div class='span3' style='background:#f86817;'>客户授信余额总额<br/><span>1000万</span></div>"+
                        "<div class='span3' style='background:#e93c3f;'>客户授信用信总额<br/><span>1000万</span></div>"+
                        "<div class='span3' style='background:#67cdcc;'>客户逾期余额总额<br/><span>1000万</span></div>"+
                        "<div class='span2' style='background:#046589;'>逾期客户数<br/><span>100</span></div>"+
                        "<div class='span2' style='background:#d6bf00;'>核销客户数<br/><span>500</span></div>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
}
//我的足迹
function wdzj(){
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdsy()'/>杨景琳&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01010419</div>"+  
                    "<div class='content'>" +
                        "<div class='map'>地图</div>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
}
//通知
function tz(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdsy()'/>通知</div>"+  
                    "<div class='content'>" +
                        "<table class='cpTable' style='width:100%;height:85%;position:fixed;top:100px;bottom:0;text-align:center;'>"+
                            "<tr>"+                             
                                "<td style='width:33.3%;' onclick='sdhtz()'>" +
                                    "<img src='images/sdh.png'/><br/><span class='tongzhi'>10</span><br/>" +
                                    "<span class='tz_message'>审贷会通知</span>" +
                                "</td>"+                           
                                "<td style='width:33.3%;' onclick='pxtz()'>" +
                                    "<img src='images/px.png'/><br/><span class='tongzhi'>10</span><br/>" +
                                    "<span class='tz_message'>培训通知</span>" +
                                "</td>"+                      
                                "<td style='width:33.3%;' onclick='fpjjtz()'>" +
                                    "<img src='images/fpjj.png'/><br/><span class='tongzhi'>10</span><br/>" +
                                    "<span class='tz_message'>分配进件通知</span>" +
                                "</td>"+
                            "</tr>"+
                            "<tr>"+                         
                                "<td onclick='fxsxtz()'>" +
                                    "<img src='images/fxsx.png'/><br/><span class='tongzhi'>10</span><br/>" +
                                    "<span class='tz_message'>风险事项通知</span>" +
                                "</td>"+                    
                                "<td onclick='bcdctz()'>" +
                                    "<img src='images/bcdc.png'/><br/><span class='tongzhi'>10</span><br/>" +
                                    "<span class='tz_message'>补充调查通知</span>" +
                                "</td>"+                  
                                "<td onclick='jjjjtz()'>" +
                                    "<img src='images/jjjj.png'/><br/><span class='tongzhi'>10</span><br/>" +
                                    "<span class='tz_message'>拒绝进件通知</span>" +
                                "</td>"+ 
                            "</tr>"+
                            "<tr>"+                         
                                "<td onclick='cskhtz()'>" +
                                    "<img src='images/cs.png'/><br/><span class='tongzhi'>10</span><br/>" +
                                    "<span class='tz_message'>催收客户通知</span>" +
                                "</td>"+                    
                                "<td onclick='khzlbgtz()'>" +
                                    "<img src='images/khzlbg.png'/><br/><span class='tongzhi'>10</span><br/>" +
                                    "<span class='tz_message'>客户资料变更通知</span>" +
                                "</td>"+                  
                                "<td></td>"+ 
                            "</tr>"+
                        "</table>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
}
//通知-审贷会通知
function sdhtz(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='tz()'/>通知-审贷会通知</div>"+  
                    "<div class='content' style='margin-top:146px;'>" +
                        "<div class='rcap' onclick='show_sdhtz()'>" +
                            "<table>" +
                                "<tr>" +
                                    "<td class='center' style='width:20%;'>2015-06-12 13:00<br/>~<br/>2015-06-12 14:00</td>"+
                                    "<td style='width:40%;'>" +
                                        "<p class='rcTitle'>王军忠进件002316审贷会</p>" +
                                        "<p class='cyz'>参与者</p>" +
                                        "<p class='cyzxm'>王旭、朱远炎、宋辰、谭文华</p>" +
                                    "</td>"+
                                    "<td style='width:35%;'>" +
                                        "<p class='center'>江苏省常州市九州环宇505</p>" +
                                    "</td>"+
                                    "<td style='width:5%;'>" +
                                        "<img src='images/right.png'/>" +
                                    "</td>"+
                                "</tr>"+                            
                            "</table>"+
                        "</div>"+
                        "<div class='rcap' onclick='show_sdhtz()'>" +
                            "<table>" +
                                "<tr>" +
                                    "<td class='center' style='width:20%;'>2015-06-13 13:00<br/>~<br/>2015-06-13 14:00</td>"+
                                    "<td style='width:40%;'>" +
                                        "<p class='rcTitle'>王军忠进件02356561审贷会</p>" +
                                        "<p class='cyz'>参与者</p>" +
                                        "<p class='cyzxm'>王旭、朱远炎</p>" +
                                    "</td>"+
                                    "<td style='width:35%;'>" +
                                        "<p class='center'>江苏省常州市九州环宇505</p>" +
                                    "</td>"+
                                    "<td style='width:5%;'>" +
                                        "<img src='images/right.png'/>" +
                                    "</td>"+
                                "</tr>"+                            
                            "</table>"+
                        "</div>"+
                        /*"<table class='cpTable' style='text-align:center;'>"+
                            "<tr>"+                       
                                "<th></th>"+           
                                "<th style='width:25%;'>审贷会时间</th>"+          
                                "<th>审贷会地点</th>"+       
                                "<th>审贷会进件提示</th>"+   
                            "</tr>"+
                            "<tr onclick='check(this)'>"+       
                                "<td><span class='radio'><input type='radio'/></span></td>"+              
                                "<td>2015-06-12</td>"+          
                                "<td>综合部</td>"+          
                                "<td></td>"+
                            "</tr>"+
                            "<tr onclick='check(this)'>"+       
                                "<td><span class='radio'><input type='radio'/></span></td>"+              
                                "<td>2015-06-15</td>"+          
                                "<td>综合部</td>"+          
                                "<td></td>"+
                            "</tr>"+
                        "</table>"+
                        "<p>" +
                            "<button class='success-button'><img src='images/yes.png'/> 确认</button>" +
                            "<button class='error-button'><img src='images/no.png'/> 拒绝</button>" +
                        "</p>" +*/
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
}
function show_sdhtz(){
    $("#text").html("<div class='display-div sdhtz'>"+
                        "<div class='dialog-head'>"+
                           "<h4>王军忠进件02356561审贷会</h4>"+
                           "<div style='border-right:1px solid #57c5f7;'>开始时间<br/><span>2015-06-12 13:00</span></div>"+
                           "<div>结束时间<br/><span>2015-06-12 14:00</span></div>"+
                           "<img src='images/sdhClose.jpg' onclick='hide_dcts()'/>"+
                        "</div>"+
                        "<div class='dialog-content'>"+
                           "<p>创建人</p>"+
                           "<p class='cy'>管理员</p>"+
                           "<p>参与者</p>"+
                           "<p class='cy'>王旭、朱远炎、宋辰、谭文华</p>"+
                           "<p>地点</p>"+
                           "<p class='cy'>江苏省常州市九州环宇505</p>"+
                        "</div>"+
                        "<div class='dialog-bottom'>"+
                           "<button type='button' class='btn btn-success' onclick='hide_dcts()'>接受</button>"+
                           "<button type='button' class='btn btn-danger' onclick='hide_dcts()'>拒绝</button>"+
                        "</div>"+
                    "</div><!-- /display-div -->");
    $("#text").animate({top:"0px"},"500");
}
//通知-培训通知
function pxtz(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='tz()'/>通知-培训通知</div>"+  
                    "<div class='content' style='margin-top:146px;'>" +
                        "<div class='rcap' onclick='show_pxtz()'>" +
                            "<table>" +
                                "<tr>" +
                                    "<td class='center' style='width:20%;'>2015-06-12<br/>~<br/>2015-06-13</td>"+
                                    "<td style='width:40%;'>" +
                                        "<p class='rcTitle'>客户经理业务培训</p>" +
                                        "<p class='cyz'>参与者</p>" +
                                        "<p class='cyzxm'>王旭、朱远炎、宋辰、谭文华</p>" +
                                    "</td>"+
                                    "<td style='width:35%;'>" +
                                        "<p class='center'>江苏省常州市九州环宇505</p>" +
                                    "</td>"+
                                    "<td style='width:5%;'>" +
                                        "<img src='images/right.png'/>" +
                                    "</td>"+
                                "</tr>"+                            
                            "</table>"+
                        "</div>"+   
                       /*"<table class='cpTable' style='text-align:center;'>"+
                            "<tr>"+                             
                                "<th>序号</th>"+  
                                "<th>培训目标</th>"+
                                "<th>培训方式</th>"+
                                "<th>培训时间</th>"+
                                "<th>考核方式</th>"+
                                "<th>客户经理确认</th>"+
                            "</tr>"+
                            "<tr>"+    
                                "<td>1</td>"+
                                "<td></td>"+
                                "<td></td>"+
                                "<td></td>"+
                                "<td></td>"+
                                "<td></td>"+
                            "</tr>"+
                        "</table>"+*/
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
}
function show_pxtz(){
    $("#text").html("<div class='display-div sdhtz'>"+
                        "<div class='dialog-head'>"+
                           "<h4>客户经理业务培训</h4>"+
                           "<div style='border-right:1px solid #57c5f7;'>开始时间<br/><span>2015-06-12</span></div>"+
                           "<div>结束时间<br/><span>2015-06-13</span></div>"+
                           "<img src='images/sdhClose.jpg' onclick='hide_dcts()'/>"+
                        "</div>"+
                        "<div class='dialog-content'>"+
                           "<p>创建人：<span class='cy'>管理员</span></p>"+
                           "<p>参与者：<span class='cy'>王旭、朱远炎、宋辰、谭文华</span></p>"+
                           "<p>地点：<span class='cy'>江苏省常州市九州环宇505</span></p>"+
                           "<p>培训方式：<span class='cy'>上课</span></p>"+
                           "<p>考核方式：<span class='cy'>笔试</span></p>"+
                        "</div>"+
                        "<div class='dialog-bottom'>"+
                           "<button type='button' class='btn btn-success' onclick='hide_dcts()'>接受</button>"+
                           "<button type='button' class='btn btn-danger' onclick='hide_dcts()'>拒绝</button>"+
                        "</div>"+
                    "</div><!-- /display-div -->");
    $("#text").animate({top:"0px"},"500");
}
//通知-分配进件通知
function fpjjtz(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='tz()'/>通知-分配进件通知</div>"+  
                    "<div class='content' style='margin-top:146px;'>" +
                        "<div class='rcap' onclick='show_fpjjtz()'>" +
                            "<table>" +
                                "<tr>" +
                                    "<td class='center' style='width:20%;'>2015-06-12<br/>13:00:58</td>"+
                                    "<td style='width:40%;'>" +
                                        "<p class='rcTitle'>王军忠 / 00023</p>" +
                                        "<p class='cyz'>分配人</p>" +
                                        "<p class='cyzxm'>管理员</p>" +
                                    "</td>"+
                                    "<td style='width:35%;'>" +
                                        "<p class='center'>济南农商行</p>" +
                                    "</td>"+
                                    "<td style='width:5%;'>" +
                                        "<img src='images/right.png'/>" +
                                    "</td>"+
                                "</tr>"+                            
                            "</table>"+
                        "</div>"+   
                       /*"<table class='cpTable' style='text-align:center;'>"+
                            "<tr>"+                             
                                "<th>序号</th>"+  
                                "<th>客户姓名</th>"+
                                "<th>客户身份标识</th>"+
                                "<th>接受</th>"+
                                "<th>拒绝</th>"+
                                "<th>是否变更维护计划</th>"+
                            "</tr>"+
                            "<tr>"+    
                                "<td>1</td>"+
                                "<td></td>"+
                                "<td></td>"+
                                "<td></td>"+
                                "<td></td>"+
                                "<td></td>"+
                            "</tr>"+
                        "</table>"+*/
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
}
function show_fpjjtz(){
    $("#text").html("<div class='display-div sdhtz'>"+
                        "<div class='dialog-head'>"+
                           "<h4>王军忠 / 00023</h4>"+
                           "<div style='width:80%'>分配时间<br/><span>2015-06-12&nbsp;&nbsp;&nbsp;&nbsp;13:00:58</span></div>"+                           
                           "<img src='images/sdhClose.jpg' onclick='hide_dcts()'/>"+
                        "</div>"+
                        "<div class='dialog-content'>"+
                            "<p>分配人</p>"+
                            "<p class='cy'>管理员</p>"+
                            "<p>客户所属银行</p>"+
                            "<p class='cy'>济南农商行</p>"+
                            "<p>变更维护计划</p>"+
                            "<p class='cy'>否</p>"+
                        "</div>"+
                        "<div class='dialog-bottom'>"+
                           "<button type='button' class='btn btn-success' onclick='hide_dcts()'>接受</button>"+
                           "<button type='button' class='btn btn-danger' onclick='hide_dcts()'>拒绝</button>"+
                        "</div>"+
                    "</div><!-- /display-div -->");
    $("#text").animate({top:"0px"},"500");
}
//通知-风险事项通知
function fxsxtz(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='tz()'/>通知-风险事项通知</div>"+  
                    "<div class='content'>" +
                       "<table class='cpTable' style='text-align:center;'>"+
                            "<tr>"+                             
                                "<th>序号</th>"+  
                                "<th>风险事项描述</th>"+
                                "<th>是否变更维护计划</th>"+
                                "<th>是否变更工作计划</th>"+
                            "</tr>"+
                            "<tr>"+    
                                "<td>1</td>"+
                                "<td></td>"+
                                "<td></td>"+
                                "<td></td>"+
                            "</tr>"+
                        "</table>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
}
//通知-催收客户通知
function cskhtz(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='tz()'/>通知-催收客户通知</div>"+  
                    "<div class='content'>" +
                       "<table class='cpTable' style='text-align:center;'>"+
                            "<tr>"+                        
                                "<th>序号</th>"+  
                                "<th>客户姓名</th>"+
                                "<th>客户身份标识</th>"+
                                "<th>产品标识</th>"+
                                "<th>逾期金额</th>"+
                                "<th>逾期期数</th>"+
                                "<th>是否变更维护计划</th>"+
                            "</tr>"+
                            "<tr>"+    
                                "<td>1</td>"+
                                "<td></td>"+
                                "<td></td>"+
                                "<td></td>"+
                                "<td></td>"+
                                "<td></td>"+
                                "<td></td>"+
                            "</tr>"+
                        "</table>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
}
//通知-客户资料变更通知
function khzlbgtz(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='tz()'/>通知-客户资料变更通知</div>"+  
                    "<div class='content'>" +
                       "<table class='cpTable' style='text-align:center;'>"+
                            "<tr>"+                        
                                "<th>序号</th>"+  
                                "<th>客户姓名</th>"+
                                "<th>客户身份标识</th>"+
                                "<th>产品标识</th>"+
                                "<th>变更项</th>"+
                                "<th>是否变更维护计划</th>"+
                            "</tr>"+
                            "<tr>"+    
                                "<td>1</td>"+
                                "<td></td>"+
                                "<td></td>"+
                                "<td></td>"+
                                "<td></td>"+
                                "<td></td>"+
                            "</tr>"+
                        "</table>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
}

//奖励激励信息
function jljlxx(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdsy()'/>奖励激励信息</div>"+  
                    "<div class='content'>" +
                        "<ul class='tab tab2 '>" +
                            "<li class='active' onclick='changeTab(this,\"jljlxx\")'>奖励激励信息</li>" +
                            "<li onclick='changeTab(this,\"fxbzjye\")'>风险保证金余额</li>" +
                        "</ul>"+
                        "<div class='tabDIV' id='jljlxx'>" +
                            "<table class='cpTable' style='text-align:center;'>"+
                                "<tr>"+                        
                                    "<th>序号</th>"+  
                                    "<th>奖励激励信息</th>"+
                                    "<th>时间</th>"+
                                "</tr>"+
                                "<tr>"+    
                                    "<td>1</td>"+
                                    "<td>月销售额超出预计标准10%，奖励1000元</td>"+
                                    "<td>2016-02-03</td>"+
                                "</tr>"+
                            "</table>"+
                        "</div>"+
                        "<div class='tabDIV' id='fxbzjye' style='display:none;'>" +
                            "<table class='cpTable' style='text-align:center;'>"+
                                "<tr>"+                        
                                    "<th>工号</th>"+  
                                    "<th>姓名</th>"+
                                    "<th>返还总保证金 </th>"+
                                    "<th>逾期保证金</th>"+
                                    "<th>已扣保证金</th>"+
                                    "<th>总保证金</th>"+
                                    "<th>时间</th>"+
                                "</tr>"+
                                "<tr>"+    
                                    "<td>01010419</td>"+
                                    "<td>杨景琳</td>"+
                                    "<td>1000</td>"+
                                    "<td>0</td>"+
                                    "<td>500</td>"+
                                    "<td>3000</td>"+
                                    "<td>2016-02-03</td>"+
                                "</tr>"+
                            "</table>"+
                        "</div>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
}