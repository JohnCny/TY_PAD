//众包管理
function myzbgl(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'>众包管理</div>"+  
					"<div class='content'>" +
                        "<div class='box shsp2' onclick='zbjj()'><span>众包进件</span></div>"+
                        "<div class='box shsp3' onclick='wdzb()'><span>我的众包</span></div>"+
                        "<div class='box shsp1' onclick='zbcx()'><span>众包查询</span></div>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();    
}
//众包进件
function zbjj(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='myzbgl()'/>众包管理-众包进件</div>"+  
					"<div class='content'>" +                        
                        "<table class='cpTable jjTable' style='text-align:center;'>"+
                            "<tr>"+                         
                                "<th></th>"+                 
                                "<th>客户名称</th>"+  
                                "<th>证件号码</th>"+
                                "<th>联系方式</th>"+
                                "<th>申请金额</th>"+
                            "</tr>"+
                            "<tr onclick='check(this)'>"+    
                                "<td><span class='radio'><input type='radio'/></span></td>"+
                                "<td>王军忠</td>"+
                                "<td>3204566892646902</td>"+
                                "<td>1326998956298</td>"+
                                "<td>50000</td>"+
                            "</tr>"+
                            "<tr onclick='check(this)'>"+    
                                "<td><span class='radio'><input type='radio'/></span></td>"+
                                "<td>刘丽云</td>"+
                                "<td>140104197306081725</td>"+
                                "<td>1326998956298</td>"+
                                "<td>50000</td>"+
                            "</tr>"+
                            "<tr onclick='check(this)'>"+    
                                "<td><span class='radio'><input type='radio'/></span></td>"+
                                "<td>许建军</td>"+
                                "<td>320662659592332665</td>"+
                                "<td>1326998956298</td>"+
                                "<td>50000</td>"+
                            "</tr>"+
                        "</table>"+
                        "<p>"+
						"<input type='button' class='btn btn-primary btn-large' value='发布' onclick='fb()'/>"+
						"<input type='button' class='btn btn-primary btn-large' value='抢单' onclick=''/>"+
						"</p>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();    
}
//发布
function fb(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='zbjj()'/>众包管理-众包进件-发布</div>"+  
                    "<div class='content'>"+
                        "<table class='cpTable'>"+   
                            "<tr>"+                        
                                "<th>客户信息</th>"+  
                            "</tr>"+
                        "</table>"+
                        "<table class='cpTable khjbxx'>"+ 
                            "<tr>"+          
                                "<td>客户名称：<input type='text' /></td>"+
                            "</tr>"+
                            "<tr>"+          
                                "<td>证件号码：<input type='text' /></td>"+
                            "</tr>"+ 
                            "<tr>"+          
                                "<td>联系方式：<input type='text' /></td>"+
                            "</tr>"+ 
                            "<tr>"+          
                                "<td>申请金额：<input type='text' /></td>"+
                            "</tr>"+
                        "</table>"+ 
                        "<p>"+
                            "<input type='button' class='btn btn-primary btn-large' value='发布' onclick='zbjj()'/>"+
                        "</p>"+                        
                    "</div>");
  $(".right").hide();
  $("#mainPage").show();
}
//我的众包
function wdzb(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='myzbgl()'/>众包管理-我的众包</div>"+  
                    "<div class='content'>" +                        
                        "<table class='cpTable jjTable' style='text-align:center;'>"+
                            "<tr>"+                         
                                "<th></th>"+                 
                                "<th>客户名称</th>"+  
                                "<th>证件号码</th>"+
                                "<th>联系方式</th>"+
                                "<th>申请金额</th>"+
                                "<th>当前状态</th>"+
                            "</tr>"+
                            "<tr onclick='check(this)'>"+    
                                "<td><span class='radio'><input type='radio'/></span></td>"+
                                "<td>王军忠</td>"+
                                "<td>3204566892646902</td>"+
                                "<td>1326998956298</td>"+
                                "<td>50000</td>"+
                                "<td><label class='label'>待处理</label></td>"+
                            "</tr>"+
                            "<tr onclick='check(this)'>"+    
                                "<td><span class='radio'><input type='radio'/></span></td>"+
                                "<td>刘丽云</td>"+
                                "<td>140104197306081725</td>"+
                                "<td>1326998956298</td>"+
                                "<td>50000</td>"+
                                "<td><label class='label label-success'>已申请</label></td>"+
                            "</tr>"+
                            "<tr onclick='check(this)'>"+    
                                "<td><span class='radio'><input type='radio'/></span></td>"+
                                "<td>许建军</td>"+
                                "<td>320662659592332665</td>"+
                                "<td>1326998956298</td>"+
                                "<td>50000</td>"+
                                "<td><label class='label label-important'>已拒绝</label></td>"+
                            "</tr>"+
                        "</table>"+
                        "<p>"+
                        "<input type='button' class='btn btn-primary btn-large' value='申请进件' onclick='sqjj()'/>"+
                        "<input type='button' class='btn btn-danger btn-large' value='拒绝进件' onclick='show_jjjj()'/>"+
                        "</p>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();    
}
//进件申请-选择产品
function sqjj(){
    window.scrollTo(0,0);//滚动条回到顶端
    $("#mainPage").html("<div class='title'><img src='images/back.png' onclick='wdzb()'/>众包管理-我的众包-进件申请</div>"+  
                        "<div class='content'>" +
                            "<div class='jjstep'>" +
                                "<div class='step1'>王军忠</div>"+
                                "<div class='step3'>选择产品</div>"+
                                "<div class='step2'>信息录入</div>"+
                                "<input type='button' class='btn btn-primary btn-large next' value='下一步' onclick='sqjj2()'/>"+
                            "</div><div class='myline'></div>"+
                            "<div class='bottom-content' style='padding-top:5px;'>"+
                                "<table class='cpTable' style='text-align:center;margin-top:0;'>"+
                                    "<tr>"+                         
                                        "<th></th>"+                 
                                        "<th>产品名称</th>"+  
                                        "<th>产品类别</th>"+
                                        "<th>产品授信区间</th>"+
                                        "<th>产品期限</th>"+
                                        "<th>产品利率</th>"+ 
                                    "</tr>"+
                                    "<tr onclick='check(this)'>"+    
                                        "<td><span class='radio'><input type='radio'/></span></td>"+
                                        "<td>集群通</td>"+
                                        "<td>经营贷款</td>"+
                                        "<td>5000元—500万元</td>"+
                                        "<td>2018-01-01</td>"+
                                        "<td>8%</td>"+
                                    "</tr>"+
                                    "<tr onclick='check(this)'>"+    
                                        "<td><span class='radio'><input type='radio'/></span></td>"+
                                        "<td>繁星通</td>"+
                                        "<td>经营贷款</td>"+
                                        "<td>5000元—500万元</td>"+
                                        "<td>2018-01-01</td>"+
                                        "<td>8%</td>"+
                                    "</tr>"+
                                    "<tr onclick='check(this)'>"+    
                                        "<td><span class='radio'><input type='radio'/></span></td>"+
                                        "<td>信薪通</td>"+
                                        "<td>消费贷款</td>"+
                                        "<td>5000元—100万元</td>"+
                                        "<td>2018-01-01</td>"+
                                        "<td>8%</td>"+
                                    "</tr>"+
                                    "<tr onclick='check(this)'>"+    
                                        "<td><span class='radio'><input type='radio'/></span></td>"+
                                        "<td>个税通</td>"+
                                        "<td>消费贷款</td>"+
                                        "<td>5000元—100万元</td>"+
                                        "<td>2018-01-01</td>"+
                                        "<td>8%</td>"+
                                    "</tr>"+
                                    "<tr onclick='check(this)'>"+    
                                        "<td><span class='radio'><input type='radio'/></span></td>"+
                                        "<td>税信通</td>"+
                                        "<td>经营性贷款</td>"+
                                        "<td>5000元—100万元</td>"+
                                        "<td>2018-01-01</td>"+
                                        "<td>8%</td>"+
                                    "</tr>"+
                                "</table>"+
                            "</div>"+
                        "</div>");
        $(".right").hide();
        $("#mainPage").show();    
    }

//进件申请-信息录入
function sqjj2(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='sqjj()'/>众包管理-我的众包-进件申请</div>"+  
                  "<div class='content'>"+
                      "<div class='jjstep'>" +
                          "<div class='step1' onclick='wdzb()'>王军忠</div>"+
                          "<div class='step3' onclick='sqjj()'>税信通</div>"+
                          "<div class='step3'>信息录入</div>"+
                          "<input type='button' class='btn btn-large btn-primary next' value='保存' onclick='wdzb()'/>"+
                      "</div><div class='myline'></div>"+
                      "<table class='cpTable no-border bottom-content'>"+   
                          "<tr>"+                             
                              "<td style='width:110px;'>所属行业</td>"+         
                              "<td>" +
                                  "<select>" +
                                      "<option>农业</option>" +
                                      "<option>畜牧业</option>" +
                                  "</select>" +
                              "</td>"+
                          "</tr>"+
                          "<tr>"+                             
                              "<td>申请金额</td>"+          
                              "<td><input type='text'/></td>"+
                          "</tr>"+
                          "<tr>"+                             
                              "<td>联系方式</td>"+  
                              "<td><input type='text'/></td>"+
                          "</tr>"+
                          "<tr>"+                             
                              "<td>审贷会成员</td>"+    
                              "<td>" +
                                  "<input type='text' id='sdhcy' class='long' onclick='check_sdhcy()' readonly/>" +                                   
                              "</td>"+
                          "</tr>"+
                      "</table>"+                        
                  "</div>");
$(".right").hide();
$("#mainPage").show();
}
//拒绝进件
function show_jjjj(){
    $("#text").html("<div class='display-div sdhtz'>"+
                        "<div class='dialog-head'>"+
                           "<h4>拒绝进件</h4>"+
                           "<img src='images/sdhClose.jpg' onclick='hide_dcts()'/>"+
                           "<div class='jjjj'>客户姓名<br/><span>王军忠</span></div>"+
                           "<div class='jjjj'>证件号码<br/><span>326562456232521232</span></div>"+
                           "<div class='jjjj'>联系方式<br/><span>13026592015</span></div>"+
                           "<div class='jjjj' style='border-right:0;'>申请金额<br/><span>1000000</span></div>"+
                           
                        "</div>"+
                        "<div class='dialog-content'>"+
                           "<p>拒绝原因</p>"+
                           "<p><textarea style='height:5em'></textarea></p>"+
                        "</div>"+
                        "<div class='dialog-bottom'>"+
                           "<button type='button' class='btn btn-success' onclick='hide_dcts()'>提交</button>"+
                           "<button type='button' class='btn' onclick='hide_dcts()'>返回</button>"+
                        "</div>"+
                    "</div><!-- /display-div -->");
    $("#text").animate({top:"0px"},"500");
}
//众包查询
function zbcx(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'>" +
                		"<img src='images/back.png' onclick='myzbgl()'/>众包管理-众包查询" +
                        "<input type='text' style='margin:13px 40px;' placeholder='搜索条件（多个条件“空格”隔开）' onkeyup='searchTR(this)'/>" +
            		"</div>"+  
                    "<div class='content'>" +                        
                        "<table class='cpTable jjTable' style='text-align:center;'>"+
                            "<tr>"+                          
                                "<th>客户名称</th>"+  
                                "<th>证件号码</th>"+
                                "<th>联系方式</th>"+
                                "<th>申请金额</th>"+
                                "<th>发布人</th>"+
                                "<th>发布日期</th>"+
                                "<th>当前状态</th>"+
                            "</tr>"+
                            "<tr onclick='check(this)' class='search'>"+    
                                "<td>王军忠</td>"+
                                "<td>3204566892646902</td>"+
                                "<td>1326998956298</td>"+
                                "<td>50000</td>"+
                                "<td>李丽</td>"+
                                "<td>2016-04-05</td>"+
                                "<td><label class='label label-inverse'>待接单</label></td>"+
                            "</tr>"+
                            "<tr onclick='check(this)' class='search'>"+    
                                "<td>刘丽云</td>"+
                                "<td>140104197306081725</td>"+
                                "<td>1326998956298</td>"+
                                "<td>50000</td>"+
                                "<td>李丽</td>"+
                                "<td>2016-04-05</td>"+
                                "<td><label class='label'>待处理</label></td>"+
                            "</tr>"+
                            "<tr onclick='check(this)' class='search'>"+    
                                "<td>许建军</td>"+
                                "<td>320662659592332665</td>"+
                                "<td>1326998956298</td>"+
                                "<td>50000</td>"+
                                "<td>李丽</td>"+
                                "<td>2016-04-05</td>"+
                                "<td><label class='label label-success'>已申请</label></td>"+
                            "</tr>"+
                        "</table>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();    
}