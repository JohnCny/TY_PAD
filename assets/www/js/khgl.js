//客户管理
function mykhgl(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'>客户管理</div>"+  
                    "<div class='content'>" +
                        "<div class='box khgl' onclick='newUser()'><img src='images/xjkh.jpg'/><span>新建客户</span></div>"+
                        "<div class='box khgl' onclick='editUser()'><img src='images/khwh.jpg'/><span>客户维护</span></div>"+
                        "<div class='box khgl' onclick='yqhktx()'><img src='images/yqhkkhtx.png'/><span>预期还款客户提醒</span></div>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
}
//新建客户
function newUser(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mykhgl()'/>客户管理-新建客户</div>"+  
                    "<div class='content' style='height:280px;padding-top:80px;background:url(images/book.jpg) no-repeat center center;'>" +
                        "<p>客户姓名:<input type='text'/></p>"+
                        "<p>证件类型:<select><option>身份证</option></select></p>"+
                        "<p>证件号码:<input type='text'/></p>"+
                        "<p>" +
                            "<input type='button' class='btn btn-large btn-primary' value='确定'/>"+  
                        "</p>" +
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
}
//客户维护
function editUser(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mykhgl()'/>客户管理-客户维护</div>"+  
                    "<div class='content'>" +
                        "<div class='khwh1' onclick='khzlcx()'><img src='images/khzlcx.png'/><span>客 户 资 料 查 询</span></div>"+
                        "<div class='khwh2' onclick='khwhjh()'><img src='images/khwhjh2.png'/><span>客<br/>户<br/>维<br/>护<br/>计<br/>划</span></div>"+
                        "<div class='khwh3' onclick='khwhrz()'><img src='images/khwhrz.png'/><span>客<br/>户<br/>维<br/>护<br/>日<br/>志</div>"+
                        "<div class='khwh4' onclick='khcsrz()'><img src='images/khcsrz.png'/><span>客 户 催 收 日 志</span></div>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
}
//预期还款客户提醒
function yqhktx(){
    window.scrollTo(0,0);//滚动条回到顶端
    $("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mykhgl()'/>客户管理-预期还款客户提醒</div>"+  
                        "<div class='content'>" +
                            "<table class='cpTable jjTable' style='text-align:center;'>"+
                                "<tr>"+                                        
                                    "<th>客户名称</th>"+  
                                    "<th>证件号码</th>"+
                                    "<th>产品名称</th>"+
                                    "<th>贷款金额</th>"+
                                    "<th>还款日期</th>"+
                                    "<th>还款金额</th>"+
                                    "<th>联系方式</th>"+
                                "</tr>"+
                                "<tr onclick='check(this)' class='search'>"+  
                                    "<td>王军忠</td>"+
                                    "<td>3204566892646902</td>"+
                                    "<td>集群通</td>"+
                                    "<td>50000</td>"+
                                    "<td>2016-03-04</td>"+
                                    "<td>2000</td>"+
                                    "<td>133265699113</td>"+
                                "</tr>"+
                                "<tr onclick='check(this)' class='search'>"+ 
                                    "<td>李四</td>"+
                                    "<td>3204566892646902</td>"+
                                    "<td>集群通</td>"+
                                    "<td>50000</td>"+
                                    "<td>2016-03-05</td>"+
                                    "<td>2000</td>"+
                                    "<td>136959989563</td>"+
                                "</tr>"+
                            "</table>"+  
                        "</div>");
        $(".right").hide();
        $("#mainPage").show();
    }
