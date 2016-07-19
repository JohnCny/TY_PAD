//进件管理
function myjjgl(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'>进件管理</div>"+  
					"<div class='content'>" +
                        "<div class='box jjgl1' onclick='jjlb()'><img src='images/jjlb.png'/><span>进件列表</span></div>"+
                        //"<div class='box khgl' onclick='newJJ()'><img src='images/xjkh.jpg'/><span>新增进件</span></div>"+
                        "<div class='box jjgl1' onclick='jjzt()'><img src='images/jjzt.png'/><span>进件状态</span></div>"+
                        "<div class='box jjgl1' onclick='sdh()'><img src='images/sdh.png'/><span>审贷会</span></div>"+
                        "<div class='box jjgl1' onclick='dkqp()'><img src='images/dkqp.png'/><span>贷款签批</span></div>"+
                        "<div class='box jjgl1' onclick='wdsdh()'><img src='images/wdsdh.png'/><span>我的审贷会</span></div>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();    
}
//进件列表
function jjlb(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'>" +
		                "<img src='images/back.png' onclick='myjjgl()'/>进件管理-进件列表" +
                        "<input type='text' style='margin:13px 40px;' placeholder='搜索条件（多个条件“空格”隔开）' onkeyup='searchTR(this)'/>" +
		            "</div>"+  
                    "<div class='content'>" +
                        "<table class='cpTable jjTable' style='text-align:center;'>"+
                            "<tr>"+              
                                "<th>所属客户经理</th>"+                       
                                "<th>客户名称</th>"+  
                                "<th>证件号码</th>"+
                                "<th>产品名称</th>"+
                                "<th>申请金额</th>"+
                                "<th>当前状态</th>"+
                                "<th>操作</th>"+
                            "</tr>"+
                            "<tr onclick='check(this)' class='search'>"+ 
                                "<td>李丽</td>"+   
                                "<td>王军忠</td>"+
                                "<td>3204566892646902</td>"+
                                "<td>集群通</td>"+
                                "<td>50000</td>"+
                                "<td><label class='label' style='background:#7a867f;'>未上会</label></td>"+
                                "<td></td>"+
                            "</tr>"+
                            "<tr onclick='check(this)' class='search'>"+ 
                                "<td>李丽</td>"+   
                                "<td>张三</td>"+
                                "<td>3204566892646902</td>"+
                                "<td>集群通</td>"+
                                "<td>50000</td>"+
                                "<td><label class='label' style='background:#f9b72f;'>重新上会</label></td>"+
                                "<td><a onclick='' class='cz'>重新上会</a></td>"+
                            "</tr>"+
                            "<tr onclick='check(this)' class='search'>"+ 
                                "<td>李丽</td>"+   
                                "<td>李四</td>"+
                                "<td>3204566892646902</td>"+
                                "<td>集群通</td>"+
                                "<td>50000</td>"+
                                "<td><label class='label' style='background:#8bcb54'>上会已通过</label></td>"+
                                "<td><a onclick='sdhjy()' class='cz'>审贷会决议</a></td>"+
                            "</tr>"+
                            "<tr onclick='check(this)' class='search'>"+ 
                                "<td>李丽</td>"+   
                                "<td>王五</td>"+
                                "<td>3204566892646902</td>"+
                                "<td>集群通</td>"+
                                "<td>50000</td>"+
                                "<td><label class='label' style='background:#f26d6e'>上会未通过</label></td>"+
                                "<td></td>"+
                            "</tr>"+
                        "</table>"+
                        "<p>"+
                            "<input type='button' class='btn btn-primary btn-large' value='进件申请' onclick='jjsq()'/>"+
                        "</p>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();    
}
//审贷会决议
function sdhjy(){
    window.scrollTo(0,0);//滚动条回到顶端
    $("#mainPage").html("<div class='title'><img src='images/back.png' onclick='jjlb()'/>进件管理-进件列表-审贷会决议</div>"+  
                        "<div class='content'>" +
                            "<table class='cpTable'>"+
                                "<colgroup>"+
                                    "<col width='33.3%'/>"+
                                    "<col width='33.3%'/>"+
                                    "<col width='33.3%'/>"+
                                "</colgroup>"+
                                "<tr>"+                        
                                    "<th colspan='3'>客户信息</th>"+  
                                "</tr>"+
                                "<tr>"+    
                                    "<td>客户经理：<span class='info'>李丽</span></td>"+
                                    "<td>客户姓名：<span class='info'>李四</span></td>"+
                                    "<td>身份证号码：<span class='info'>3204566892646902</span></td>"+
                                "</tr>"+
                                "<tr>"+    
                                    "<td>产品名称：<span class='info'>集群通</span></td>"+
                                    "<td colspan='2'>申请金额：<span class='info'>50000</span></td>"+
                                "</tr>"+
                                "<tr>"+                        
                                    "<th colspan='3'>审贷会信息</th>"+  
                                "</tr>"+
                                "<tr>"+    
                                    "<td>审贷会成员姓名：<span class='info'>成员1</span></td>"+
                                    "<td>审贷会意见：<span class='info'>XX</span></td>"+
                                    "<td>审贷结论：<span class='info'>XXXXXX</span></td>"+
                                "</tr>"+
                                "<tr>"+    
                                    "<td colspan='3'>备注：<span class='info'>XXXXX</span></td>"+
                                "</tr>"+
                                "<tr>"+    
                                    "<td>审贷会成员姓名：<span class='info'>成员2</span></td>"+
                                    "<td>审贷会意见：<span class='info'>XX</span></td>"+
                                    "<td>审贷结论：<span class='info'>XXXXXX</span></td>"+
                                "</tr>"+
                                "<tr>"+    
                                    "<td colspan='3'>备注：<span class='info'>XXXXX</span></td>"+
                                "</tr>"+
                                "<tr>"+                        
                                    "<th colspan='3'>签批信息</th>"+  
                                "</tr>"+
                                "<tr>"+    
                                    "<td>签批人：<span class='info'>签批人1</span></td>"+
                                    "<td>审贷意见：<span class='info'>XXXXX</span></td>"+
                                    "<td>是否通过：<span class='info'>XXXXX</span></td>"+
                                "</tr>"+
                                "<tr>"+    
                                    "<td colspan='3'>备注：<span class='info'>XXXXX</span></td>"+
                                "</tr>"+
                                "<tr>"+    
                                    "<td>签批人：<span class='info'>签批人2</span></td>"+
                                    "<td>审贷意见：<span class='info'>XXXXX</span></td>"+
                                    "<td>是否通过：<span class='info'>XXXXX</span></td>"+
                                "</tr>"+
                                "<tr>"+    
                                    "<td colspan='3'>备注：<span class='info'>XXXXX</span></td>"+
                                "</tr>"+
                            "</table>"+
                        "</div>");
        $(".right").hide();
        $("#mainPage").show();    
    }

//进件申请-选择客户
function jjsq(){
    window.scrollTo(0,0);//滚动条回到顶端
    $("#mainPage").html("<div class='title'>"+
							"<img src='images/back.png' onclick='jjlb()'/>进件管理-进件列表-进件申请 "+
                            "<input type='text' style='margin:13px 40px;' placeholder='搜索' onkeyup='searchTR(this)'/>" +
						"</div>"+  
                        "<div class='content'>" +
                            "<div class='jjstep'>" +
                                "<div class='step1'>选择客户</div>"+
                                "<div class='step2'>选择产品</div>"+
                                "<div class='step2'>信息录入</div>"+
                                "<input type='button' class='btn btn-primary btn-large next' value='下一步' onclick='jjsq2()'/>"+
                            "</div><div class='myline'></div>"+
                            "<div class='bottom-content' style='padding-top:5px;'>"+
                                "<table class='cpTable' style='text-align:center;margin-top:0;'>"+
									"<tr>"+                         
                                        "<th></th>"+                 
                                        "<th>客户名称</th>"+  
                                        "<th>证件号码</th>"+
                                    "</tr>"+
                                    "<tr onclick='check(this);' class='search'>"+    
                                        "<td><span class='radio'><input type='radio'/></span></td>"+
                                        "<td>刘丽云 </td>"+
                                        "<td>140104197306081725</td>"+
                                    "</tr>"+
                                    "<tr onclick='check(this);' class='search'>"+    
                                        "<td><span class='radio'><input type='radio'/></span></td>"+
                                        "<td>张大军 </td>"+
                                        "<td>142602197408020057</td>"+
                                    "</tr>"+
                                    "<tr onclick='check(this);' class='search'>"+    
                                        "<td><span class='radio'><input type='radio'/></span></td>"+
                                        "<td>许建军 </td>"+
                                        "<td>140302197602102816</td>"+
                                    "</tr>"+
                                "</table>"+
                            "</div>"+
                        "</div>");
        $(".right").hide();
        $("#mainPage").show();    
    }
//进件申请-选择产品
function jjsq2(){
    window.scrollTo(0,0);//滚动条回到顶端
    $("#mainPage").html("<div class='title'>" +
                            "<img src='images/back.png' onclick='jjsq()'/>进件管理-进件列表-进件申请"+
                        "</div>"+  
                        "<div class='content'>" +
                            "<div class='jjstep'>" +
                                "<div class='step1' onclick='jjsq()'>许建军</div>"+
                                "<div class='step3'>选择产品</div>"+
                                "<div class='step2'>信息录入</div>"+
                                "<input type='button' class='btn btn-primary btn-large next' value='下一步' onclick='jjsq3()'/>"+
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
function jjsq3(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='jjsq2()'/>进件管理-进件列表-进件申请</div>"+  
                    "<div class='content'>"+
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='jjsq()'>许建军</div>"+
                            "<div class='step3' onclick='jjsq2()'>税信通</div>"+
                            "<div class='step3'>信息录入</div>"+
                            "<input type='button' class='btn btn-large btn-primary next' value='保存' onclick='jjlb()'/>"+
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
//选择审贷会成员
function check_sdhcy(){
    $("#text").html("<div class='display-div sdhtz'>"+
                        "<div class='dialog-head'>"+
                           "<h4>选择审贷会成员</h4>"+
                           "<img src='images/sdhClose.jpg' onclick='hide_dcts()'/>"+
                           "<input type='text' style='margin:13px 40px;' placeholder='搜索客户经理' onkeyup='search(this,\"khjl\")'/>"+                           
                        "</div>"+
                        "<div class='dialog-content'>"+
                           "<span class='khjl'><label onclick='checkBox2(this,\"sdhcy\")' class='checkbox'><input type='checkbox' id='checkbox'/>李丽</label></span>" +
                           "<span class='khjl'><label onclick='checkBox2(this,\"sdhcy\")' class='checkbox'><input type='checkbox' id='checkbox'/>吉力</label></span>" +
                           "<span class='khjl'><label onclick='checkBox2(this,\"sdhcy\")' class='checkbox'><input type='checkbox' id='checkbox'/>倪文斌</label></span>" +
                           "<span class='khjl'><label onclick='checkBox2(this,\"sdhcy\")' class='checkbox'><input type='checkbox' id='checkbox'/>朱远炎</label></span>" +
                           "<span class='khjl'><label onclick='checkBox2(this,\"sdhcy\")' class='checkbox'><input type='checkbox' id='checkbox'/>王旭</label></span>" +
                           "<span class='khjl'><label onclick='checkBox2(this,\"sdhcy\")' class='checkbox'><input type='checkbox' id='checkbox'/>谭文华</label></span>" +
                           "<span class='khjl'><label onclick='checkBox2(this,\"sdhcy\")' class='checkbox'><input type='checkbox' id='checkbox'/>宋辰</label></span>" +
                           "<span class='khjl'><label onclick='checkBox2(this,\"sdhcy\")' class='checkbox'><input type='checkbox' id='checkbox'/>王丽君</label></span>" +
                        "</div>"+
                        "<div class='dialog-bottom'>"+
                           "<button type='button' class='btn btn-success' onclick='setSdhcy(),hide_dcts()'>提交</button>"+
                           "<button type='button' class='btn' onclick='hide_dcts()'>返回</button>"+
                        "</div>"+
                    "</div><!-- /display-div -->");
    $("#text").animate({top:"0px"},"500");
}
//新建进件
function newJJ(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='myjjgl()'/>进件管理-新增进件</div>"+  
					"<div class='content'>" +
					    "<div class='jjstep'>" +
    					    "<div class='step1'>选择产品</div>"+
                            "<div class='step2'>选择客户</div>"+
                            "<div class='step2'>选择资料类型</div>"+
                            "<div class='step2'>选择信息类型</div>"+
                            "<div class='step2'>信息录入</div>"+
                            "<input type='button' class='btn btn-primary btn-large next' value='下一步' onclick='newJJ2()'/>"+
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
function newJJ2(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'>" +
            		    "<img src='images/back.png' onclick='newJJ()'/>进件管理-新增进件" +
                        "<input type='text' style='margin:13px 40px;' placeholder='搜索' onkeyup='searchTR(this)'/>" +
            		"</div>"+  
					"<div class='content'>" +
    					"<div class='jjstep'>" +
                            "<div class='step1' onclick='newJJ()'>税信通</div>"+
                            "<div class='step3'>选择客户</div>"+
                            "<div class='step2'>选择资料类型</div>"+
                            "<div class='step2'>选择信息类型</div>"+
                            "<div class='step2'>信息录入</div>"+
                            "<input type='button' class='btn btn-primary btn-large next' value='下一步' onclick='newUser1()'/>"+
                        "</div><div class='myline'></div>"+
                        "<div class='bottom-content' style='padding-top:5px;'>"+
    						"<table class='cpTable' style='text-align:center;margin-top:0;'>"+
                                "<tr>"+                         
                                    "<th></th>"+                 
                                    "<th>客户名称</th>"+  
                                    "<th>证件号码</th>"+
                                "</tr>"+
                                "<tr onclick='check(this);' class='search'>"+    
                                    "<td><span class='radio'><input type='radio'/></span></td>"+
                                    "<td>刘丽云 </td>"+
                                    "<td>140104197306081725</td>"+
                                "</tr>"+
                                "<tr onclick='check(this);' class='search'>"+    
                                    "<td><span class='radio'><input type='radio'/></span></td>"+
                                    "<td>张大军 </td>"+
                                    "<td>142602197408020057</td>"+
                                "</tr>"+
                                "<tr onclick='check(this);' class='search'>"+    
                                    "<td><span class='radio'><input type='radio'/></span></td>"+
                                    "<td>许建军 </td>"+
                                    "<td>140302197602102816</td>"+
                                "</tr>"+
                            "</table>"+
                        "</div>"+
					"</div>");
    $(".right").hide();
    $("#mainPage").show();
    
}
//新建进件
function newUser1(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='newJJ2()'/>进件管理-新增进件</div>"+  
                    "<div class='content'>" +
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='newJJ()'>税信通</div>"+
                            "<div class='step3' onclick='newJJ2()'>许建军</div>"+
                            "<div class='step3'>选择资料类型</div>"+
                            "<div class='step2'>选择信息类型</div>"+
                            "<div class='step2'>信息录入</div>"+
                        "</div><div class='myline'></div>"+
                        "<div class='bottom-content'>"+
                            "<div class='box jjgl' onclick='khxxzlcj()' style='margin-left:400px;margin-right:50px;display:inline-block;'>" +
                                "<img src='images/xxzl.png'/>" +
                                "<span>客户信息资料采集</span>"+
                            "</div>"+
                            "<div class='box jjgl' onclick='khyxzlcj()' style='float:none;display:inline-block;'>" +
                                "<img src='images/yxzl.png'/>" +
                                "<span>客户影像资料采集</span>"+
                            "</div>"+
						"</div>"+
					"</div>");
    $(".right").hide();
    $("#mainPage").show();
}

//客户信息资料采集
function khxxzlcj(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='newUser1()'/>进件管理-新增进件</div>"+  
                    "<div class='content'>" +
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='newJJ()'>税信通</div>"+
                            "<div class='step3' onclick='newJJ2()'>许建军</div>"+
                            "<div class='step3' onclick='newUser1()'>信息资料采集</div>"+
                            "<div class='step3'>选择信息类型</div>"+
                            "<div class='step2'>信息录入</div>"+
                        "</div><div class='myline'></div>"+
                        "<div class='bottom-content'>"+
                            "<table id='message1' class='cpTable'>"+
                                "<tr>"+                             
                                    "<th colspan='6'>客户基本信息</th>"+ 
                                "</tr>"+
                                "<tr>"+                             
                                    "<td>个人信息<span class='label label-success'>已录入</span></td>"+             
                                    "<td>房产信息<span class='label label-success'>已录入</span></td>"+
                                    "<td>家庭信息<span class='label label-success'>已录入</span></td>"+ 
                                    "<td>车产信息<span class='label label-important'>未录入</span></td>"+ 
                                    "<td>联系人信息<span class='label label-important'>未录入</span></td>"+ 
                                    "<td>居住信息<span class='label label-success'>已录入</span></td>"+
                                "</tr>"+
                                "<tr>"+       
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='grxx_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='grxx_edit()'/>" +
                                    "</td>"+         
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='fcxx_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='fcxx_edit()'/>" +
                                    "</td>"+
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='jtxx_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='jtxx_edit()'/>" +
                                    "</td>"+
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='ccxx_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='ccxx_edit()'/>" +
                                    "</td>"+
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='lxrxx_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='lxrxx_edit()'/>" +
                                    "</td>"+   
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='jzxx_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='jzxx_edit()'/>" +
                                    "</td>"+
                                "</tr>"+                           
                            "</table>"+
                            "<table id='message2' class='cpTable'>"+
                                "<tr>"+                             
                                    "<th colspan='5'>客户经营信息</th>"+ 
                                "</tr>"+
                                "<tr>"+                             
                                    "<td>企业基本信息<span class='label label-success'>已录入</span></td>"+             
                                    "<td>企业业务信息<span class='label label-success'>已录入</span></td>"+            
                                    "<td>企业店铺信息<span class='label label-success'>已录入</span></td>"+            
                                    "<td>企业开户信息<span class='label label-success'>已录入</span></td>"+            
                                    "<td>其他信息<span class='label label-success'>已录入</span></td>"+     
                                "</tr>"+
                                "<tr>"+                             
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='qyjbxx_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='qyjbxx_edit()'/>" +
                                    "</td>"+
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='qyywxx_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='qyywxx_edit()'/>" +
                                    "</td>"+
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='qydpxx_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='qydpxx_edit()'/>" +
                                    "</td>"+
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='qykhxx_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='qykhxx_edit()'/>" +
                                    "</td>"+
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='qyqtxx_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='qyqtxx_edit()'/>" +
                                    "</td>"+
                                "</tr>"+
                            "</table>"+
                            "<table id='message3' class='cpTable'>"+
                                "<tr>"+                             
                                    "<th colspan='6'>客户财务信息</th>"+ 
                                "</tr>"+
                                "<tr>"+                             
                                    "<td rowspan='2'>资产负债表</td>"+              
                                    "<td>资产状况<span class='label label-success'>已录入</span></td>"+                  
                                    "<td>负债情况<span class='label label-success'>已录入</span></td>"+             
                                    "<td>权益状况<span class='label label-important'>未录入</span></td>"+             
                                    "<td>其他信息<span class='label label-important'>未录入</span></td>"+            
                                    "<td></td>"+ 
                                "</tr>"+
                                "<tr>"+
    								"<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='zczk_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='zczk_edit()'/>" +
                                    "</td>"+
    								"<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='fzqk_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='fzqk_edit()'/>" +
                                    "</td>"+								
    								"<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='qyzk_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='qyzk_edit()'/>" +
                                    "</td>"+															
    								"<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='zcfzqtxx_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='zcfzqtxx_edit()'/>" +
                                    "</td>"+           
                                    "<td></td>"+ 
                                "</tr>"+
                                "<tr>"+   								
                                    "<td rowspan='2'>损益表</td>"+              
                                    "<td>利润表简表<span class='label label-important'>未录入</span></td>"+                  
                                    "<td>利润表标准表<span class='label label-important'>未录入</span></td>"+             
                                    "<td>其他信息<span class='label label-important'>未录入</span></td>"+                 
                                    "<td></td>"+            
                                    "<td></td>"+ 
                                "</tr>"+
                                "<tr>"+
    								"<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='lrbjb_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='lrbjb_edit()'/>" +
                                    "</td>"+
    								"<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='lrbbzb_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='lrbbzb_edit()'/>" +
                                    "</td>"+								
    								"<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='syqtxx_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='syqtxx_edit()'/>" +
                                    "</td>"+           
                                    "<td></td>"+            
                                    "<td></td>"+ 
                                "</tr>"+	
                                "<tr>"+          
                                    "<td>现金流表<span class='label label-important'>未录入</span></td>"+            
                                    "<td>点货单<span class='label label-success'>已录入</span></td>"+            
                                    "<td>固定资产清单<span class='label label-success'>已录入</span></td>"+        
                                    "<td>应收预付清单<span class='label label-important'>未录入</span></td>"+      
                                    "<td>应付预收清单<span class='label label-important'>未录入</span></td>"+      
                                    "<td>负债项目明细清单<span class='label label-important'>未录入</span></td>"+   
                                "</tr>"+
                                "<tr>"+  
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='xjlb_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='xjlb_edit()'/>" +
                                    "</td>"+
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='dhd_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='dhd_edit()'/>" +
                                    "</td>"+
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='gdzcqd_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='gdzcqd_edit()'/>" +
                                    "</td>"+
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='ysyfqd_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='ysyfqd_edit()'/>" +
                                    "</td>"+
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='yfysqd_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='yfysqd_edit()'/>" +
                                    "</td>"+
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='fzxmmxqd_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='fzxmmxqd_edit()'/>" +
                                    "</td>"+
                                "</tr>"+
                            "</table>"+ 
                        "</div>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
}

//客户影像资料采集
function khyxzlcj(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='newUser1()'/>进件管理-新增进件</div>"+  
                    "<div class='content' style='text-align:center;'>" +  
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='newJJ()'>税信通</div>"+
                            "<div class='step3' onclick='newJJ2()'>许建军</div>"+
                            "<div class='step3' onclick='newUser1()'>影像资料采集</div>"+
                            "<div class='step3'>选择信息类型</div>"+
                            "<div class='step2'>信息录入</div>"+
                        "</div><div class='myline'></div>"+
                        "<div class='bottom-content'>"+
                            "<table id='message1' class='cpTable' style='margin-top:20px;'>"+
                                "<tr>"+                             
                                    "<th colspan='6'>客户影像资料</th>"+ 
                                "</tr>"+
                                "<tr>"+                             
                                    "<td>房产证<span class='label label-success'>已录入</span></td>"+             
                                    "<td>结婚证<span class='label label-success'>已录入</span></td>"+
                                    "<td>征信报告<span class='label label-important'>未录入</span></td>"+ 
                                    "<td>银行流水<span class='label label-important'>未录入</span></td>"+            
                                    "<td>其他影像资料<span class='label label-success'>已录入</span></td>"+
                                "</tr>"+
                                "<tr>"+       
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='fcz_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='fcz_edit()'/>" +
                                    "</td>"+         
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='jhz_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='jhz_edit()'/>" +
                                    "</td>"+
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='zxbg_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='zxbg_edit()'/>" +
                                    "</td>"+
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='yhls_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='yhls_edit()'/>" +
                                    "</td>"+
                                    "<td>" +
                                    "<input type='button' class='btn' value='添加' onclick='qtyxzl_add()'/>" +
                                    "<input type='button' class='btn' value='查看' onclick='qtyxzl_edit()'/>" +
                                "</td>"+
                                "</tr>"+                           
                            "</table>"+ 
                        "</div>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
}
//进件状态
function jjzt(){
    window.scrollTo(0,0);//滚动条回到顶端
    $("#mainPage").html("<div class='title'><img src='images/back.png' onclick='myjjgl()'/>进件管理-进件状态</div>"+  
                        "<div class='content'>" +
                            "<div class='treeBox'><ul id='treeDemo' class='ztree'></ul></div>"+
                            "<div style='display:inline-block;width:70%;float:left;margin-left:0.5%;'>" +
                                "<table class='cpTable jjsl' style='text-align:center;margin-top:0;margin-bottom:0;'>"+ 
                                    "<tr>"+    
                                        "<td>未上会<font class='pf' id='zf'>1</font></td>"+
                                        "<td style='background:#b681c8;'>审贷会排队中<font class='pf' id='pfdj'>0</font><font id='ed1'>20000</font></td>"+
                                        "<td style='background:#3cbae7;'>审贷会中<font class='pf' id='jyed'>0</font></td>"+   
                                        "<td style='background:#8bcb54;'>已通过<font class='pf' id='jyed'>1</font></td>"+   
                                        "<td style='background:#f26d6e;'>未通过<font class='pf' id='jyed'>1</font></td>"+   
                                        "<td style='background:#f9b72f;'>重新上会<font class='pf' id='jyed'>1</font></td>"+   
                                    "</tr>"+
                                "</table>" +
                                "<table class='cpTable' style='text-align:center;margin-top:0;'>"+
                                    "<tr>"+              
                                        "<th>所属客户经理</th>"+                       
                                        "<th>客户名称</th>"+  
                                        "<th>证件号码</th>"+
                                        "<th>产品名称</th>"+
                                        "<th>申请金额</th>"+
                                        "<th>当前状态</th>"+
                                    "</tr>"+
                                    "<tr onclick='check(this)' class='search'>"+ 
                                        "<td>李丽</td>"+   
                                        "<td>王军忠</td>"+
                                        "<td>3204566892646902</td>"+
                                        "<td>集群通</td>"+
                                        "<td>50000</td>"+
                                        "<td><label class='label' style='background:#7a867f;'>未上会</label></td>"+
                                    "</tr>"+
                                    "<tr onclick='check(this)' class='search'>"+ 
                                        "<td>李丽</td>"+   
                                        "<td>张三</td>"+
                                        "<td>3204566892646902</td>"+
                                        "<td>集群通</td>"+
                                        "<td>50000</td>"+
                                        "<td><label class='label' style='background:#f9b72f;'>重新上会</label></td>"+
                                    "</tr>"+
                                    "<tr onclick='check(this)' class='search'>"+ 
                                        "<td>李丽</td>"+   
                                        "<td>李四</td>"+
                                        "<td>3204566892646902</td>"+
                                        "<td>集群通</td>"+
                                        "<td>50000</td>"+
                                        "<td><label class='label' style='background:#8bcb54'>上会已通过</label></td>"+
                                    "</tr>"+
                                    "<tr onclick='check(this)' class='search'>"+ 
                                        "<td>李丽</td>"+   
                                        "<td>王五</td>"+
                                        "<td>3204566892646902</td>"+
                                        "<td>集群通</td>"+
                                        "<td>50000</td>"+
                                        "<td><label class='label' style='background:#f26d6e'>上会未通过</label></td>"+
                                    "</tr>"+
                                "</table>"+    
                            "</div>"+
                            
                                                    
                        "</div>");
    var setting = { };

    var zNodes =[
        { name:"机构1",
            children: [
                { name:"团队1",
                    children: [
                        { name:"客户经理主管1",
                            children: [
                                       { name:"客户经理1"},
                                       { name:"客户经理2"},
                                       { name:"客户经理3"},
                                       { name:"客户经理4"}
                                   ]},
                       { name:"客户经理主管2",
                           children: [
                                      { name:"客户经理1"},
                                      { name:"客户经理2"},
                                      { name:"客户经理3"}
                                  ]},
                    ]},
                { name:"团队2",
                    children: [
                        { name:"客户经理1"},
                        { name:"客户经理2"},
                        { name:"客户经理3"},
                        { name:"客户经理4"}
                    ]}
            ]},
        { name:"机构2",
            children: [
                { name:"团队1",
                    children: [
                        { name:"客户经理1"},
                        { name:"客户经理2"},
                    ]},
                { name:"团队2",
                    children: [
                        { name:"客户经理1"},
                        { name:"客户经理2"},
                        { name:"客户经理3"},
                        { name:"客户经理4"}
                    ]},
                { name:"团队3",
                    children: [
                        { name:"客户经理1"}
                    ]}
            ]}
    ];

        $.fn.zTree.init($("#treeDemo"), setting, zNodes);
   
        $(".right").hide();
        $("#mainPage").show();    
    }
//审贷会
function sdh(){
    window.scrollTo(0,0);//滚动条回到顶端
    $("#mainPage").html("<div class='title'><img src='images/back.png' onclick='myjjgl()'/>进件管理-审贷会</div>"+  
                        "<div class='content'>" +
                            "<table class='cpTable jjTable' style='text-align:center;'>"+
                                "<tr>"+                   
                                    "<th></th>"+           
                                    "<th>所属客户经理</th>"+                       
                                    "<th>客户名称</th>"+  
                                    "<th>证件号码</th>"+
                                    "<th>产品名称</th>"+
                                    "<th>申请金额</th>"+
                                    "<th>当前状态</th>"+
                                    "<th>是否重新上会</th>"+
                                "</tr>"+
                                "<tr onclick='check(this)' class='search'>"+    
                                    "<td><span class='radio'><input type='radio'/></span></td>"+
                                    "<td>李丽</td>"+   
                                    "<td>王军忠</td>"+
                                    "<td>3204566892646902</td>"+
                                    "<td>集群通</td>"+
                                    "<td>50000</td>"+
                                    "<td><label class='label' style='background:#7a867f;'>未开始</label></td>"+
                                    "<td><label class='label' style='background:#f9b72f;'>是</label></td>"+
                                "</tr>"+
                                "<tr onclick='check(this)' class='search'>"+ 
                                    "<td><span class='radio'><input type='radio'/></span></td>"+
                                    "<td>李丽</td>"+   
                                    "<td>李四</td>"+
                                    "<td>3204566892646902</td>"+
                                    "<td>集群通</td>"+
                                    "<td>50000</td>"+
                                    "<td><label class='label' style='background:#8bcb54'>已开始</label></td>"+
                                    "<td><label class='label' style='background:#7a867f;'>否</label></td>"+
                                "</tr>"+
                            "</table>"+  
                            "<p>"+
                                "<input type='button' class='btn btn-primary btn-large' value='开始审贷会' onclick='sdhjl()'/>"+
                                "<input type='button' class='btn btn-primary btn-large' value='进入审贷会' onclick='sdhjl()'/>"+
                                "<input type='button' class='btn btn-primary btn-large' value='上调' onclick=''/>"+
                                "<input type='button' class='btn btn-primary btn-large' value='下调' onclick=''/>"+
                            "</p>"+          
                        "</div>");    
        $(".right").hide();
        $("#mainPage").show();    
    }
//进件申请-审贷会记录
function sdhjl(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='sdh()'/>进件管理-审贷会-审贷会记录</div>"+  
                    "<div class='content'>"+
                        "<table class='cpTable'>"+   
                            "<tr>"+                        
                                "<th>审贷会记录</th>"+  
                            "</tr>"+
                        "</table>"+
                        "<table class='cpTable khjbxx'>"+  
                            "<tr>"+                             
                                "<td>客户经理：<span>李丽</span></td>"+  
                                "<td>客户姓名：<span>张三</span></td>"+  
                                "<td>证件号码：<span>3303241562526211236</span></td>"+ 
                                "<td>产品名称：<span>集群通</span></td>"+  
                                "<td>申请金额：<span>1000000</span></td>"+
                            "</tr>"+
                            "<tr>"+          
                                "<td colspan='5'>审贷会意见："+ 
                                    "<textarea style='width:70%'></textarea>" +
                                "</td>"+
                            "</tr>"+
                            "<tr>"+          
                                "<td colspan='5'>审&nbsp;贷&nbsp;结&nbsp;论：&nbsp;&nbsp;&nbsp;&nbsp;"+ 
                                    "<label onclick='checkRadio(this);$(\"#tg\").show();$(\"#jj\").hide();' class='radio'><input type='radio' name='radio'/>通过</label>" +
                                    "<label onclick='checkRadio(this);$(\"#jj\").show();$(\"#tg\").hide();' class='radio'><input type='radio' name='radio'/>拒绝</label>" +
                                    "<label onclick='checkRadio(this);$(\"#jj\").show();$(\"#tg\").hide();' class='radio'><input type='radio' name='radio'/>重新上会</label>" +
                                "</td>"+
                            "</tr>"+
                            "<tr>"+          
                                "<td colspan='5'>备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注："+ 
                                    "<textarea style='width:70%'></textarea>" +
                                "</td>"+
                            "</tr>"+
                        "</table>"+ 
                        "<p>"+
                            "<input type='button' class='btn btn-primary btn-large' value='提交' onclick='sdh()'/>"+
                        "</p>"+                        
                    "</div>");
  $(".right").hide();
  $("#mainPage").show();
}
//贷款签批
function dkqp(){
    window.scrollTo(0,0);//滚动条回到顶端
    $("#mainPage").html("<div class='title'><img src='images/back.png' onclick='myjjgl()'/>进件管理-贷款签批</div>"+  
                        "<div class='content'>" +
                            "<table class='cpTable jjTable' style='text-align:center;'>"+
                                "<tr>"+                   
                                    "<th></th>"+           
                                    "<th>所属客户经理</th>"+                       
                                    "<th>客户名称</th>"+  
                                    "<th>证件号码</th>"+
                                    "<th>产品名称</th>"+
                                    "<th>申请金额</th>"+
                                "</tr>"+
                                "<tr onclick='check(this)' class='search'>"+    
                                    "<td><span class='radio'><input type='radio'/></span></td>"+
                                    "<td>李丽</td>"+   
                                    "<td>王军忠</td>"+
                                    "<td>3204566892646902</td>"+
                                    "<td>集群通</td>"+
                                    "<td>50000</td>"+
                                "</tr>"+
                                "<tr onclick='check(this)' class='search'>"+ 
                                    "<td><span class='radio'><input type='radio'/></span></td>"+
                                    "<td>李丽</td>"+   
                                    "<td>李四</td>"+
                                    "<td>3204566892646902</td>"+
                                    "<td>集群通</td>"+
                                    "<td>50000</td>"+
                                "</tr>"+
                            "</table>"+  
                            "<p>"+
                                "<input type='button' class='btn btn-primary btn-large' value='贷款审批' onclick='dksp()'/>"+
                            "</p>"+          
                        "</div>");    
        $(".right").hide();
        $("#mainPage").show();    
    }
//贷款签批-贷款审批
function dksp(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='dkqp()'/>进件管理-贷款签批-贷款审批</div>"+  
                    "<div class='content'>"+
                        "<table class='cpTable khjbxx' style='margin-top:20px;'>"+                          
                            "<tr colspan='5'>"+                        
                                "<th colspan='5'>客户信息</th>"+  
                            "</tr>"+
                            "<tr>"+                             
                                "<td>客户经理：<span>李丽</span></td>"+  
                                "<td>客户姓名：<span>张三</span></td>"+  
                                "<td>证件号码：<span>3303241562526211236</span></td>"+ 
                                "<td>产品名称：<span>集群通</span></td>"+  
                                "<td>申请金额：<span>1000000</span></td>"+
                            "</tr>"+
                            "<tr colspan='5'>"+                        
                                "<th colspan='5'>审贷会信息</th>"+  
                            "</tr>"+
                            "<tr>"+                             
                                "<td>审贷会成员姓名：<span>成员1</span></td>"+  
                                "<td>审贷会意见：<span>XX</span></td>"+  
                                "<td>审贷结论：<span>XX</span></td>"+ 
                                "<td colspan='2'>备注：<span>XX</span></td>"+  
                            "</tr>"+
                            "<tr>"+                             
                                "<td>审贷会成员姓名：<span>成员2</span></td>"+  
                                "<td>审贷会意见：<span>XX</span></td>"+  
                                "<td>审贷结论：<span>XX</span></td>"+ 
                                "<td colspan='2'>备注：<span>XX</span></td>"+  
                            "</tr>"+
                            "<tr>"+                        
                                "<th colspan='5'>签批信息</th>"+  
                            "</tr>"+
                            "<tr>"+    
                                "<td>签批人：<span class='info'>签批人1</span></td>"+
                                "<td>审贷意见：<span class='info'>XXXXX</span></td>"+
                                "<td>是否通过：<span class='info'>XXXXX</span></td>"+
                                "<td colspan='2'>备注：<span class='info'>XXXXX</span></td>"+
                            "</tr>"+
                            "<tr>"+    
                                "<td>签批人：<span class='info'>签批人2</span></td>"+
                                "<td>审贷意见：<span class='info'>XXXXX</span></td>"+
                                "<td>是否通过：<span class='info'>XXXXX</span></td>"+
                                "<td colspan='2'>备注：<span class='info'>XXXXX</span></td>"+
                            "</tr>"+
                            "<tr colspan='5'>"+                        
                                "<th colspan='5'>签批</th>"+  
                            "</tr>"+
                            "<tr>"+          
                                "<td colspan='5'>审贷意见："+ 
                                    "<textarea style='width:70%'></textarea>" +
                                "</td>"+
                            "</tr>"+
                            "<tr>"+          
                                "<td colspan='5'>是否通过：&nbsp;&nbsp;&nbsp;&nbsp;"+ 
                                    "<label onclick='checkRadio(this);$(\"#tg\").show();$(\"#jj\").hide();' class='radio'><input type='radio' name='radio'/>是</label>" +
                                    "<label onclick='checkRadio(this);$(\"#jj\").show();$(\"#tg\").hide();' class='radio'><input type='radio' name='radio'/>否</label>" +
                                "</td>"+
                            "</tr>"+
                            "<tr>"+          
                                "<td colspan='5'>备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注："+ 
                                    "<textarea style='width:70%'></textarea>" +
                                "</td>"+
                            "</tr>"+
                        "</table>"+ 
                        "<p>"+
                            "<input type='button' class='btn btn-primary btn-large' value='提交' onclick='dkqp()'/>"+
                        "</p>"+                        
                    "</div>");
  $(".right").hide();
  $("#mainPage").show();
}
//我的审贷会
function wdsdh(){
    window.scrollTo(0,0);//滚动条回到顶端
    $("#mainPage").html("<div class='title'><img src='images/back.png' onclick='myjjgl()'/>进件管理-我的审贷会</div>"+  
                        "<div class='content'>" +
                            "<table class='cpTable jjTable' style='text-align:center;'>"+
                                "<tr>"+                   
                                    "<th></th>"+           
                                    "<th>所属客户经理</th>"+                       
                                    "<th>客户名称</th>"+  
                                    "<th>证件号码</th>"+
                                    "<th>产品名称</th>"+
                                    "<th>申请金额</th>"+
                                    "<th>当前状态</th>"+
                                "</tr>"+
                                "<tr onclick='check(this)' class='search'>"+    
                                    "<td><span class='radio'><input type='radio'/></span></td>"+
                                    "<td>李丽</td>"+   
                                    "<td>王军忠</td>"+
                                    "<td>3204566892646902</td>"+
                                    "<td>集群通</td>"+
                                    "<td>50000</td>"+
                                    "<td><label class='label' style='background:#8bcb54;'>通过</label></td>"+
                                "</tr>"+
                                "<tr onclick='check(this)' class='search'>"+ 
                                    "<td><span class='radio'><input type='radio'/></span></td>"+
                                    "<td>李丽</td>"+   
                                    "<td>李四</td>"+
                                    "<td>3204566892646902</td>"+
                                    "<td>集群通</td>"+
                                    "<td>50000</td>"+
                                    "<td><label class='label' style='background:#f26d6e'>未通过</label></td>"+
                                "</tr>"+
                                "<tr onclick='check(this)' class='search'>"+ 
                                    "<td><span class='radio'><input type='radio'/></span></td>"+
                                    "<td>李丽</td>"+   
                                    "<td>李四</td>"+
                                    "<td>3204566892646902</td>"+
                                    "<td>集群通</td>"+
                                    "<td>50000</td>"+
                                    "<td><label class='label' style='background:#f9b72f'>重新上会</label></td>"+
                                "</tr>"+
                            "</table>"+  
                            "<p>"+
                                "<input type='button' class='btn btn-primary btn-large' value='查看审贷会决议' onclick='cksdhjy()'/>"+
                            "</p>"+          
                        "</div>");    
        $(".right").hide();
        $("#mainPage").show();    
    }
//查看审贷会决议
function cksdhjy(){
    window.scrollTo(0,0);//滚动条回到顶端
    $("#mainPage").html("<div class='title'><img src='images/back.png' onclick='wdsdh()'/>进件管理-我的审贷会-审贷会决议</div>"+  
                        "<div class='content'>" +
                            "<table class='cpTable'>"+
                                "<colgroup>"+
                                    "<col width='33.3%'/>"+
                                    "<col width='33.3%'/>"+
                                    "<col width='33.3%'/>"+
                                "</colgroup>"+
                                "<tr>"+                        
                                    "<th colspan='3'>客户信息</th>"+  
                                "</tr>"+
                                "<tr>"+    
                                    "<td>客户经理：<span class='info'>李丽</span></td>"+
                                    "<td>客户姓名：<span class='info'>李四</span></td>"+
                                    "<td>身份证号码：<span class='info'>3204566892646902</span></td>"+
                                "</tr>"+
                                "<tr>"+    
                                    "<td>产品名称：<span class='info'>集群通</span></td>"+
                                    "<td colspan='2'>申请金额：<span class='info'>50000</span></td>"+
                                "</tr>"+
                                "<tr>"+                        
                                    "<th colspan='3'>审贷会信息</th>"+  
                                "</tr>"+
                                "<tr>"+    
                                    "<td>审贷会成员姓名：<span class='info'>成员1</span></td>"+
                                    "<td>审贷会意见：<span class='info'>XX</span></td>"+
                                    "<td>审贷结论：<span class='info'>XXXXXX</span></td>"+
                                "</tr>"+
                                "<tr>"+    
                                    "<td colspan='3'>备注：<span class='info'>XXXXX</span></td>"+
                                "</tr>"+
                                "<tr>"+    
                                    "<td>审贷会成员姓名：<span class='info'>成员2</span></td>"+
                                    "<td>审贷会意见：<span class='info'>XX</span></td>"+
                                    "<td>审贷结论：<span class='info'>XXXXXX</span></td>"+
                                "</tr>"+
                                "<tr>"+    
                                    "<td colspan='3'>备注：<span class='info'>XXXXX</span></td>"+
                                "</tr>"+
                                "<tr>"+                        
                                    "<th colspan='3'>签批信息</th>"+  
                                "</tr>"+
                                "<tr>"+    
                                    "<td>签批人：<span class='info'>签批人1</span></td>"+
                                    "<td>审贷意见：<span class='info'>XXXXX</span></td>"+
                                    "<td>是否通过：<span class='info'>XXXXX</span></td>"+
                                "</tr>"+
                                "<tr>"+    
                                    "<td colspan='3'>备注：<span class='info'>XXXXX</span></td>"+
                                "</tr>"+
                                "<tr>"+    
                                    "<td>签批人：<span class='info'>签批人2</span></td>"+
                                    "<td>审贷意见：<span class='info'>XXXXX</span></td>"+
                                    "<td>是否通过：<span class='info'>XXXXX</span></td>"+
                                "</tr>"+
                                "<tr>"+    
                                    "<td colspan='3'>备注：<span class='info'>XXXXX</span></td>"+
                                "</tr>"+
                            "</table>"+
                        "</div>");
        $(".right").hide();
        $("#mainPage").show();    
    }