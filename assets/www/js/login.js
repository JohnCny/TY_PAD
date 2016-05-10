
//登录
function dl(){
	/*//工厂模式
    var data = JSON.stringify({
        "user_name": $("#user_name").val(),
        "pass_word": $("#user_name").val()
    });
    var post = crud.dom.factory("POST");
    post.doPost(wsLogin,data,checkLoginCallback,"登陆失败！");*/
	
	checkLoginCallback(1);
	$(".left").show();
}
//回调
function checkLoginCallback(json){
    /*var obj = $.evalJSON(json);
    var result = obj.result;
    if(result="fail"){
    	$(".errorMessage").css('display','block');
    	return;
    }
    var session = window.sessionStorage;//有些不支持sessionStorage，而是globalStroage.
    session.setItem("user_id",obj.userId);*/
    //$("#page1").show();
    $("#login").hide();
    $("#mainPage").show();
    $("#index").click();
}
function show_dcts(){//显示登出提示
    $("#text").html("<div class='display-div' id='xdyss'>"+
                        "<div class='dialog-head'>"+
                           "<h4>提示</h4>"+
                        "</div>"+
                        "<div class='dialog-content'>"+
                           " 你确定要退出系统吗？"+
                        "</div>"+
                        "<div class='dialog-bottom'>"+
                           "<button type='button' class='btn btn-default' onclick='hide_dcts()'>取消</button>"+
                           "<button type='button' class='btn btn-danger' onclick='dc();hide_dcts()'>确定</button>"+
                        "</div>"+
                    "</div><!-- /display-div -->");
    $("#text").animate({top:"0px"},"500");
}
function hide_dcts(){//隐藏登出提示
   // $(".display-div").animate({marginTop:"-250px"},"500");
    $("#text").animate({top:"-800px"},"500");
}    
//登出
function dc(){
    $("#login").show();
    $(".right").hide();
    $(".left .nav li").css("background","#009fe7");
    $(".left").hide();
}