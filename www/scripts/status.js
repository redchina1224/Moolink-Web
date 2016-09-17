if (typeof (moolink) == 'undefined') {
    moolink = {}
}
moolink.GetUrlObject = function GetUrlObject(Name) {
    var get = window.$_GET = {};
    var args = location.search.replace('?', '').split('&');
    for (var i = 0, j = args.length, temp; i < j; i++) {
        temp = args[i].split('=');
        get[temp[0]] = temp[1];
    }
    return $_GET[Name];
}("A")


moolink.LoadAntData = function (PageCurrent, PageSize, UserId) {

    // var obj = new Object();
    // obj.request = new Object();
    // obj.request.PageCurrent = PageCurrent;
    // obj.request.PageSize = PageSize;
    // //    if (!$("#UserId")) {
    // //        $_GET['AgentId'] = 0;
    // //    }
    // //obj.request.AgentId = UserId;
    // var jsonstr = window.JSON.stringify(obj);

    $.ajax({
        type: 'GET',
        url: '../mysql/get/eventlist/'+PageCurrent+'/',
        async: true,
        contentType: "application/json;",
        // data: jsonstr,
        dataType: "json",
        success: function (json) {

            if (!json) {
                $("#Antdatatbody").html('<br><br>数据格式错误....');
            }
            else {
                json = eval(json);
                //            var str = "<table \"class=table table-hover\"><tr \"class=success\"><td>类型</td><td>开始时间</td><td>清零时间</td><td>总工时</td><td>计数器数值</td><td>系数</td><td>实际产量</td><td>转数</td><td>标准产量</td><td>生产效率</td><td>机器实际运转时间</td><td>机器效率</td></tr>";
                var str = "";
                var ts ="";
                for (var i = 0; i < json.length; i++) {
                    str += "<a><tr>";

                        str += "<td>" + json[i].devcode + "</td>";
                    ts =json[i].starttime;//.replace("Z", " UTC");
                    dateObj=new Date(ts);
                    str += "<td>" + date2str(dateObj,"yyyy-MM-dd hh:mm:ss")  + "</td>";


                    str += "<td>" + json[i].state  + "</td>";

                        str += "<td>" + json[i].runtime + "</td>";  
                       str += "<td>" + json[i].ontime + "</td>";  
                    ts =json[i].datainsert;//.replace("Z", " UTC");
                    dateObj=new Date(ts);
                    str += "<td>" + date2str(dateObj,"yyyy-MM-dd hh:mm:ss")  + "</td>";

 //                       str += "<td><a href=\"#ejb\" data-toggle=\"tab\" class=\"btn btn-default btn-xs\" role=\"button\" onclick=\"seteditinfo('"+json[i].CODE+"');\">管理</a></td>";
                        str += "<td></td>";

                    str += "</tr></a>";
                    //str += "<tr><td>" + json.d[i].Card + "</td><td>" + json.d[i].Type + "</td><td>" + json.d[i].Customer + "</td><td>" + json.d[i].EndTime + "</td><td>" + json.d[i].PayDay + "</td></tr>"

                }
                $("#Antdatatbody").html(str);
            }
        },
        error: function (msg) {
            $("#Antdatatbody").html('<br><br>很抱歉，载入数据失败....'+JSON.stringify(msg));
        }
    });

}

moolink.LoadAntData2 = function (PageCurrent, PageSize, UserId) {

    // var obj = new Object();
    // obj.request = new Object();
    // obj.request.PageCurrent = PageCurrent;
    // obj.request.PageSize = PageSize;
    // //    if (!$("#UserId")) {
    // //        $_GET['AgentId'] = 0;
    // //    }
    // //obj.request.AgentId = UserId;
    // var jsonstr = window.JSON.stringify(obj);

    $.ajax({
        type: 'GET',
        url: '../mysql/get/stin/'+PageCurrent+'/',
        async: true,
        contentType: "application/json;",
        // data: jsonstr,
        dataType: "json",
        success: function (json) {

            if (!json) {
                $("#Antdatatbody").html('<br><br>数据格式错误....');
            }
            else {
                json = eval(json);
                //            var str = "<table \"class=table table-hover\"><tr \"class=success\"><td>类型</td><td>开始时间</td><td>清零时间</td><td>总工时</td><td>计数器数值</td><td>系数</td><td>实际产量</td><td>转数</td><td>标准产量</td><td>生产效率</td><td>机器实际运转时间</td><td>机器效率</td></tr>";
                var str = "";
                var ts ="";
                for (var i = 0; i < json.length; i++) {
                    str += "<a><tr>";

                        str += "<td>" + json[i].CODE + "</td>";
                    ts =json[i].INTIME;//.replace("Z", " UTC");
                    dateObj=new Date(ts);
                    str += "<td>" + date2str(dateObj,"yyyy-MM-dd hh:mm:ss")  + "</td>";
                        str += "<td>" + json[i].DAY + "</td>";

 //                       str += "<td><a href=\"#ejb\" data-toggle=\"tab\" class=\"btn btn-default btn-xs\" role=\"button\" onclick=\"seteditinfo('"+json[i].CODE+"');\">管理</a></td>";
                        str += "<td></td>";

                    str += "</tr></a>";
                    //str += "<tr><td>" + json.d[i].Card + "</td><td>" + json.d[i].Type + "</td><td>" + json.d[i].Customer + "</td><td>" + json.d[i].EndTime + "</td><td>" + json.d[i].PayDay + "</td></tr>"

                }
                $("#Antdatatbody").html(str);
            }
        },
        error: function (msg) {
            $("#Antdatatbody").html('<br><br>很抱歉，载入数据失败....'+JSON.stringify(msg));
        }
    });

}


moolink.LoadAntData3 = function (PageCurrent, PageSize, UserId) {

    // var obj = new Object();
    // obj.request = new Object();
    // obj.request.PageCurrent = PageCurrent;
    // obj.request.PageSize = PageSize;
    // //    if (!$("#UserId")) {
    // //        $_GET['AgentId'] = 0;
    // //    }
    // //obj.request.AgentId = UserId;
    // var jsonstr = window.JSON.stringify(obj);

    $.ajax({
        type: 'GET',
        url: '../mysql/stdzin/'+UserId+'/'+PageCurrent+'/',
        async: true,
        contentType: "application/json;",
        // data: jsonstr,
        dataType: "json",
        success: function (json) {

            if (!json) {
                $("#Antdatatbody").html('<br><br>数据格式错误....');
            }
            else {
                json = eval(json);
                //            var str = "<table \"class=table table-hover\"><tr \"class=success\"><td>类型</td><td>开始时间</td><td>清零时间</td><td>总工时</td><td>计数器数值</td><td>系数</td><td>实际产量</td><td>转数</td><td>标准产量</td><td>生产效率</td><td>机器实际运转时间</td><td>机器效率</td></tr>";
                var str = "";
                var ts ="";
                for (var i = 0; i < json.length; i++) {
                    str += "<a><tr>";

                        str += "<td>" + json[i].CODE + "</td>";
                    ts =json[i].INTIME;//.replace("Z", " UTC");
                    dateObj=new Date(ts);
                    str += "<td>" + date2str(dateObj,"yyyy-MM-dd hh:mm:ss")  + "</td>";
                        str += "<td>" + json[i].DAY + "</td>";

 //                       str += "<td><a href=\"#ejb\" data-toggle=\"tab\" class=\"btn btn-default btn-xs\" role=\"button\" onclick=\"seteditinfo('"+json[i].CODE+"');\">管理</a></td>";
                        str += "<td></td>";

                    str += "</tr></a>";
                    //str += "<tr><td>" + json.d[i].Card + "</td><td>" + json.d[i].Type + "</td><td>" + json.d[i].Customer + "</td><td>" + json.d[i].EndTime + "</td><td>" + json.d[i].PayDay + "</td></tr>"

                }
                $("#Antdatatbody").html(str);
            }
        },
        error: function (msg) {
            $("#Antdatatbody").html('<br><br>很抱歉，载入数据失败....'+JSON.stringify(msg));
        }
    });

}




moolink.LoadDatacount = function (tablename) {

    // var obj = new Object();
    // obj.request = new Object();
    // obj.request.PageCurrent = PageCurrent;
    // obj.request.PageSize = PageSize;
    // //    if (!$("#UserId")) {
    // //        $_GET['AgentId'] = 0;
    // //    }
    // //obj.request.AgentId = UserId;
    // var jsonstr = window.JSON.stringify(obj);
    $.ajax({
        type: 'GET',
        url: '../mysql/count/'+tablename+'/',
        async: true,
        contentType: "application/json;",
        // data: jsonstr,
        dataType: "json",
        success: function (json) {

            if (!json) {
                  return 0;
            }
            else {
                json = eval(json);
                //            var str = "<table \"class=table table-hover\"><tr \"class=success\"><td>类型</td><td>开始时间</td><td>清零时间</td><td>总工时</td><td>计数器数值</td><td>系数</td><td>实际产量</td><td>转数</td><td>标准产量</td><td>生产效率</td><td>机器实际运转时间</td><td>机器效率</td></tr>";

                 
                  //$("#Antdatatbody").html('<br><br>很抱歉，载入数据失败....'+json.[COUNT(*)]);
                  InitPager(json[0].count, 1);
            }
        },
        error: function (msg) {
            return 0;
        }
    });

}



moolink.LoadstdzinDatacount = function (days) {

    // var obj = new Object();
    // obj.request = new Object();
    // obj.request.PageCurrent = PageCurrent;
    // obj.request.PageSize = PageSize;
    // //    if (!$("#UserId")) {
    // //        $_GET['AgentId'] = 0;
    // //    }
    // //obj.request.AgentId = UserId;
    // var jsonstr = window.JSON.stringify(obj);
    $.ajax({
        type: 'GET',
        url: '../mysql/stdzincount/'+days+'/',
        async: true,
        contentType: "application/json;",
        // data: jsonstr,
        dataType: "json",
        success: function (json) {

            if (!json) {
                  return 0;
            }
            else {
                json = eval(json);
                //            var str = "<table \"class=table table-hover\"><tr \"class=success\"><td>类型</td><td>开始时间</td><td>清零时间</td><td>总工时</td><td>计数器数值</td><td>系数</td><td>实际产量</td><td>转数</td><td>标准产量</td><td>生产效率</td><td>机器实际运转时间</td><td>机器效率</td></tr>";

                 
                  //$("#Antdatatbody").html('<br><br>很抱歉，载入数据失败....'+json.[COUNT(*)]);
                  InitPager(json[0].count, 1);
            }
        },
        error: function (msg) {
            return 0;
        }
    });

}






moolink.LoaduserData = function (PageCurrent, PageSize, UserId) {

    // var obj = new Object();
    // obj.request = new Object();
    // obj.request.PageCurrent = PageCurrent;
    // obj.request.PageSize = PageSize;
    // //    if (!$("#UserId")) {
    // //        $_GET['AgentId'] = 0;
    // //    }
    // //obj.request.AgentId = UserId;
    // var jsonstr = window.JSON.stringify(obj);
    $.ajax({
        type: 'GET',
        url: '../mysql/get/userlist/'+PageCurrent+'/',
        async: true,
        contentType: "application/json;",
        // data: jsonstr,
        dataType: "json",
        success: function (json) {

            if (!json) {
                $("#userdatatbody").html('<br><br>数据格式错误....');
            }
            else {
                json = eval(json);
                //            var str = "<table \"class=table table-hover\"><tr \"class=success\"><td>类型</td><td>开始时间</td><td>清零时间</td><td>总工时</td><td>计数器数值</td><td>系数</td><td>实际产量</td><td>转数</td><td>标准产量</td><td>生产效率</td><td>机器实际运转时间</td><td>机器效率</td></tr>";
                var str = "";
                for (var i = 0; i < json.length; i++) {
                    str += "<a><tr>";


                        str += "<td>" + json[i].UserId + "</td>";
                        str += "<td>" + json[i].UserName + "</td>";
                        str += "<td>" + json[i].UserCertNo + "</td>";
                        str += "<td>" + json[i].UserUnit + "</td>";

                        str += "<td><a href=\"#ejb\" data-toggle=\"tab\" class=\"btn btn-default btn-xs\" role=\"button\" onclick=\"seteditinfo('"+json[i].UserId+"','"+json[i].UserName+"','"+json[i].UserCertNo+"','"+json[i].UserUnit+"');\">管理</a></td>";


                    str += "</tr></a>";
                    //str += "<tr><td>" + json.d[i].Card + "</td><td>" + json.d[i].Type + "</td><td>" + json.d[i].Customer + "</td><td>" + json.d[i].EndTime + "</td><td>" + json.d[i].PayDay + "</td></tr>"

                }
                $("#userdatatbody").html(str);
            }
        },
        error: function (msg) {
            $("#userdatatbody").html('<br><br>很抱歉，载入数据失败....'+JSON.stringify(msg));
        }
    });

}


moolink.Loaduserselectlist = function (PageCurrent, PageSize, UserId) {

    // var obj = new Object();
    // obj.request = new Object();
    // obj.request.PageCurrent = PageCurrent;
    // obj.request.PageSize = PageSize;
    // //    if (!$("#UserId")) {
    // //        $_GET['AgentId'] = 0;
    // //    }
    // //obj.request.AgentId = UserId;
    // var jsonstr = window.JSON.stringify(obj);
    $.ajax({
        type: 'GET',
        url: '../mysql/get/userlist/'+PageCurrent+'/',
        async: true,
        contentType: "application/json;",
        // data: jsonstr,
        dataType: "json",
        success: function (json) {

            if (!json) {
                alert("读取用户列表失败:数据格式错误");
            }
            else {
                json = eval(json);
                //            var str = "<table \"class=table table-hover\"><tr \"class=success\"><td>类型</td><td>开始时间</td><td>清零时间</td><td>总工时</td><td>计数器数值</td><td>系数</td><td>实际产量</td><td>转数</td><td>标准产量</td><td>生产效率</td><td>机器实际运转时间</td><td>机器效率</td></tr>";
                var str = "";
                for (var i = 0; i < json.length; i++) {

                    str +="<option value=\""+json[i].UserId+"\">"+json[i].UserCertNo+"-"+json[i].UserUnit+"-"+json[i].UserName+"</option>"

                }
                $("#carduserlist").html(str);
            }

        },
        error: function (msg) {
            alert("读取用户列表失败:接口错误");
        }
    });

}








moolink.LoadcardData = function (PageCurrent, PageSize, UserId) {

    // var obj = new Object();
    // obj.request = new Object();
    // obj.request.PageCurrent = PageCurrent;
    // obj.request.PageSize = PageSize;
    // //    if (!$("#UserId")) {
    // //        $_GET['AgentId'] = 0;
    // //    }
    // //obj.request.AgentId = UserId;
    // var jsonstr = window.JSON.stringify(obj);
    $.ajax({
        type: 'GET',
        url: '../mysql/get/carduserinfo/'+PageCurrent+'/',
        async: true,
        contentType: "application/json;",
        // data: jsonstr,
        dataType: "json",
        success: function (json) {

            if (!json) {
                $("#carddatatbody").html('<br><br>数据格式错误....');
            }
            else {
                json = eval(json);
                //            var str = "<table \"class=table table-hover\"><tr \"class=success\"><td>类型</td><td>开始时间</td><td>清零时间</td><td>总工时</td><td>计数器数值</td><td>系数</td><td>实际产量</td><td>转数</td><td>标准产量</td><td>生产效率</td><td>机器实际运转时间</td><td>机器效率</td></tr>";
                var str = "";

                for (var i = 0; i < json.length; i++) {
                    str += "<a><tr>";
                    str += "<td>" +pad(parseInt(json[i].CardCode, 16),8) + "</td>";
                    str += "<td>" + json[i].CardCode + "</td>";                    
                    str += "<td>" + json[i].UserName+"("+json[i].UserUnit+")("+json[i].CardUserId + ")</td>";
                    str += "<td></td>";
                    //"<td><a href=\"#ejb\" data-toggle=\"tab\" class=\"btn btn-default btn-xs\" role=\"button\" onclick=\"seteditinfo('"+pad(parseInt(json[i].CardCode, 16),8)+"','"+json[i].CardCode+"','"+json[i].CardUserId+"');\">管理</a></td>";


                    str += "</tr></a>";
                    //str += "<tr><td>" + json.d[i].Card + "</td><td>" + json.d[i].Type + "</td><td>" + json.d[i].Customer + "</td><td>" + json.d[i].EndTime + "</td><td>" + json.d[i].PayDay + "</td></tr>"

                }
                $("#carddatatbody").html(str);
            }
        },
        error: function (msg) {
            $("#carddatatbody").html('<br><br>很抱歉，载入数据失败....'+JSON.stringify(msg));
        }
    });

}

moolink.LoadNewcardList = function (PageCurrent, PageSize, UserId) {

    // var obj = new Object();
    // obj.request = new Object();
    // obj.request.PageCurrent = PageCurrent;
    // obj.request.PageSize = PageSize;
    // //    if (!$("#UserId")) {
    // //        $_GET['AgentId'] = 0;
    // //    }
    // //obj.request.AgentId = UserId;
    // var jsonstr = window.JSON.stringify(obj);
    $.ajax({
        type: 'GET',
        url: '../mysql/get/newcardlist/'+PageCurrent+'/',
        async: true,
        contentType: "application/json;",
        // data: jsonstr,
        dataType: "json",
        success: function (json) {

            if (!json) {
                $(".typeahead").typeahead({
                                    source: [] 
                                });
            }
            else {
                json = eval(json);
                var arr = [];

                for (var i = 0; i < json.length; i++) {
                    arr.push(pad(parseInt(json[i].CardCode, 16),8));             
                }

                 $(".typeahead").typeahead({
                                    source: arr
                                });
            }
        },
        error: function (msg) {
                $(".typeahead").typeahead({
                                    source: [] 
                                });
        }
    });

}




moolink.LoadeventtypeData = function (PageCurrent, PageSize, UserId) {

    // var obj = new Object();
    // obj.request = new Object();
    // obj.request.PageCurrent = PageCurrent;
    // obj.request.PageSize = PageSize;
    // //    if (!$("#UserId")) {
    // //        $_GET['AgentId'] = 0;
    // //    }
    // //obj.request.AgentId = UserId;
    // var jsonstr = window.JSON.stringify(obj);
    $.ajax({
        type: 'GET',
        url: '../mysql/get/eventtype/'+PageCurrent+'/',
        async: true,
        contentType: "application/json;",
        // data: jsonstr,
        dataType: "json",
        success: function (json) {

            if (!json) {
                $("#eventtypedatatbody").html('<br><br>数据格式错误....');
            }
            else {
                json = eval(json);
                //            var str = "<table \"class=table table-hover\"><tr \"class=success\"><td>类型</td><td>开始时间</td><td>清零时间</td><td>总工时</td><td>计数器数值</td><td>系数</td><td>实际产量</td><td>转数</td><td>标准产量</td><td>生产效率</td><td>机器实际运转时间</td><td>机器效率</td></tr>";
                var str = "";
                for (var i = 0; i < json.length; i++) {
                    str += "<a><tr>";
                    str += "<td>" + json[i].eventtypeid + "</td>";
                     str += "<td>" + json[i].eventtypename + "</td>";
                     str += "<td></td>";

                    //str += "<td><a href=\"" + window.location.pathname + "?ManageId=" + json[i].UserId + "\" class=\"btn btn-default btn-xs\" role=\"button\">管理</a></td>"; 



                    str += "</tr></a>";
                    //str += "<tr><td>" + json.d[i].Card + "</td><td>" + json.d[i].Type + "</td><td>" + json.d[i].Customer + "</td><td>" + json.d[i].EndTime + "</td><td>" + json.d[i].PayDay + "</td></tr>"

                }
                $("#eventtypedatatbody").html(str);
            }
        },
        error: function (msg) {
            $("#eventtypedatatbody").html('<br><br>很抱歉，载入数据失败....'+JSON.stringify(msg));
        }
    });

}





moolink.AntUpdataInfo2 = function (devid,devcode) {

    var obj = new Object();
    obj.request = new Object();
    //    if (!$("#UserId")) {
    //        $_GET['AgentId'] = 0;
    //    }
    obj.request.devid = devid;
    obj.request.devcode = devcode;


    var jsonstr = window.JSON.stringify(obj);
    $.ajax({
        type: 'POST',
        url: '../mysql/post/stindz/',
        async: true,
        contentType: "application/json",
        data: jsonstr,
        dataType: "json",
        success: function (json) {
            if (!json) {
                $("#Antdatatbody").html('<br><br>数据格式错误....');
            }
            else {
                json = eval(json);
                //            var str = "<table \"class=table table-hover\"><tr \"class=success\"><td>类型</td><td>开始时间</td><td>清零时间</td><td>总工时</td><td>计数器数值</td><td>系数</td><td>实际产量</td><td>转数</td><td>标准产量</td><td>生产效率</td><td>机器实际运转时间</td><td>机器效率</td></tr>";
                var str = "";
                var ts ="";
                for (var i = 0; i < json.length; i++) {
                    str += "<a><tr>";

                        str += "<td>" + json[i].CODE + "</td>";
                    ts =json[i].INTIME;//.replace("Z", " UTC");
                    dateObj=new Date(ts);
                    str += "<td>" + date2str(dateObj,"yyyy-MM-dd hh:mm:ss")  + "</td>";
                        str += "<td>" + json[i].DAY + "</td>";

 //                       str += "<td><a href=\"#ejb\" data-toggle=\"tab\" class=\"btn btn-default btn-xs\" role=\"button\" onclick=\"seteditinfo('"+json[i].CODE+"');\">管理</a></td>";
                        str += "<td></td>";

                    str += "</tr></a>";
                    //str += "<tr><td>" + json.d[i].Card + "</td><td>" + json.d[i].Type + "</td><td>" + json.d[i].Customer + "</td><td>" + json.d[i].EndTime + "</td><td>" + json.d[i].PayDay + "</td></tr>"

                }
                $("#Antdatatbody").html(str);
            }
            },
        error: function (msg) {
            alert("操作失败，接口错误!");
        }
    });
}

moolink.CardUpdataInfo = function (cdid,cdcode,cduid) {

    var obj = new Object();
    obj.request = new Object();
    //    if (!$("#UserId")) {
    //        $_GET['AgentId'] = 0;
    //    }
    obj.request.cardid = cdid;
    obj.request.cardcode = cdcode;
    obj.request.carduserid = cduid;


    var jsonstr = window.JSON.stringify(obj);
    $.ajax({
        type: 'POST',
        url: '../mysql/post/updatacardlistinfo/',
        async: true,
        contentType: "application/json",
        data: jsonstr,
        dataType: "json",
        success: function (json) {
            alert("操作完成，请返回卡片列表查看");
            },
        error: function (msg) {
            alert("操作失败，接口错误!");
        }
    });
}


moolink.UserUpdataInfo = function (userid,username,userno,userunit) {

    var obj = new Object();
    obj.request = new Object();
    //    if (!$("#UserId")) {
    //        $_GET['AgentId'] = 0;
    //    }
    obj.request.userid = userid;
    obj.request.username = username;
    obj.request.userno = userno;
    obj.request.userunit = userunit;


    var jsonstr = window.JSON.stringify(obj);
    $.ajax({
        type: 'POST',
        url: '../mysql/post/updatauserlistinfo/',
        async: true,
        contentType: "application/json",
        data: jsonstr,
        dataType: "json",
        success: function (json) {
            alert("操作完成，请返回人员列表查看");
            },
        error: function (msg) {
            alert("操作失败，接口错误!");
        }
    });
}





moolink.LoadactionlistData = function (PageCurrent, PageSize, UserId) {

    var obj = new Object();
    obj.request = new Object();
    obj.request.PageCurrent = PageCurrent;
    obj.request.PageSize = PageSize;
    //    if (!$("#UserId")) {
    //        $_GET['AgentId'] = 0;
    //    }
    obj.request.AgentId = UserId;
    var jsonstr = window.JSON.stringify(obj);
    $.ajax({
         type: 'GET',
        url: '../mysql/get/actionlist/'+PageCurrent+'/',
        async: true,
        contentType: "application/json",
        // data: jsonstr,
        dataType: "json",
        success: function (json) {

            if (!json) {
                $("#actionlistdatatbody").html('<br><br>数据格式错误....');
            }
            else {
                json = eval(json);
                //            var str = "<table \"class=table table-hover\"><tr \"class=success\"><td>类型</td><td>开始时间</td><td>清零时间</td><td>总工时</td><td>计数器数值</td><td>系数</td><td>实际产量</td><td>转数</td><td>标准产量</td><td>生产效率</td><td>机器实际运转时间</td><td>机器效率</td></tr>";
                var str = "";
                var ts ="";
                for (var i = 0; i < json.length; i++) {
                    str += "<a><tr>";

                    str += "<td>" + json[i].ActionCardCode + "</td>";
                    str += "<td>" + json[i].ActionAreaCode + "</td>";
                    ts =json[i].EnterTime;//.replace("Z", " UTC");
                    dateObj=new Date(ts);
                    str += "<td>" + date2str(dateObj,"yyyy-MM-dd hh:mm:ss")  + "</td>";
                    ts =json[i].ActionTime;//.replace("Z", " UTC");
                    dateObj=new Date(ts);
                    str += "<td>" + date2str(dateObj,"yyyy-MM-dd hh:mm:ss")  + "</td>";

                    str += "</tr></a>";
                    //str += "<tr><td>" + json.d[i].Card + "</td><td>" + json.d[i].Type + "</td><td>" + json.d[i].Customer + "</td><td>" + json.d[i].EndTime + "</td><td>" + json.d[i].PayDay + "</td></tr>"

                }
                $("#actionlistdatatbody").html(str);
            }
        },
        error: function (msg) {
            $("#eventtypedatatbody").html('<br><br>很抱歉，载入数据失败....'+JSON.stringify(msg));
        }
    });

}


moolink.LoadusereventData = function (PageCurrent, PageSize, UserId) {

    var obj = new Object();
    obj.request = new Object();
    obj.request.PageCurrent = PageCurrent;
    obj.request.PageSize = PageSize;
    //    if (!$("#UserId")) {
    //        $_GET['AgentId'] = 0;
    //    }
    obj.request.AgentId = UserId;
    var jsonstr = window.JSON.stringify(obj);
    $.ajax({
         type: 'GET',
        url: '../mysql/get/userevent/'+PageCurrent+'/',
        async: true,
        contentType: "application/json",
        // data: jsonstr,
        dataType: "json",
        success: function (json) {

            if (!json) {
                $("#usereventdatatbody").html('<br><br>数据格式错误....');
            }
            else {
                json = eval(json);
                //            var str = "<table \"class=table table-hover\"><tr \"class=success\"><td>类型</td><td>开始时间</td><td>清零时间</td><td>总工时</td><td>计数器数值</td><td>系数</td><td>实际产量</td><td>转数</td><td>标准产量</td><td>生产效率</td><td>机器实际运转时间</td><td>机器效率</td></tr>";
                var str = "";
                var ts ="";

                for (var i = 0; i < json.length; i++) {
                    str += "<a><tr>";

                    str += "<td>" + json[i].EventId + "</td>";
                    str += "<td>"+json[i].UserName +"(" + json[i].UserID+ ")</td>";
                    str += "<td>" + json[i].EventName + "</td>";
                    ts =json[i].EventTime;//.replace("Z", " UTC");
                    dateObj=new Date(ts);
                    str += "<td>" + date2str(dateObj,"yyyy-MM-dd hh:mm:ss")  + "</td>";

                    str += "</tr></a>";
                    //str += "<tr><td>" + json.d[i].Card + "</td><td>" + json.d[i].Type + "</td><td>" + json.d[i].Customer + "</td><td>" + json.d[i].EndTime + "</td><td>" + json.d[i].PayDay + "</td></tr>"

                }
                $("#usereventdatatbody").html(str);
            }
        },
        error: function (msg) {
            $("#usereventdatatbody").html('<br><br>很抱歉，载入数据失败....'+JSON.stringify(msg));
        }
    });

}








moolink.SelectLoadData = function (PageCurrent, PageSize) {

    //    var obj = new Object();
    //    obj.request = new Object();
    //    obj.request.PageCurrent = PageCurrent;
    //    obj.request.PageSize = PageSize;
    //    if (!$_GET['idArea']) {
    //        $_GET['idArea'] = 0;
    //    }

    //    obj.request.devicetype = $("#putArea").val();
    //    if ($("#CSTM").val() != undefined && $("#CSTM").val() != "") {
    //        obj.request.CSTM = $("#CSTM").val();
    //    }
    //    if ($("#CETM").val() != undefined && $("#CETM").val() != "") {
    //        obj.request.CETM = $("#CETM").val();
    //    }
    //    obj.request.idArea = $_GET['idArea'];
    //    obj.request.remark = $('#remark').val();
    var jsonstr = moolink.SelectJson(PageCurrent, PageSize);
    $.ajax({
        type: "POST",
        //url: window.location.pathname + "/LoadData",
        url: window.location.pathname + "/selectDate",
        async: true,
        contentType: "application/json;",
        data: jsonstr,
        dataType: "json",
        success: function (json) {

            var str = "暂无相关数据";
            if (json == "" || json == null || !json.d) {
                // $("#tbody").html(st);
            }
            else {
                json.d = json.d.split('`');
                var count = json.d[0];
                json.d = eval(json.d[1]);
                if (!json.d) {
                    $("#table1 tbody").html(str);
                    window.parent.$('#statusA').height(document.height);
                    $('#test').html('');
                    return;
                }
                InitPager(count, PageCurrent);
                var str = "";
                for (var i = 0; i < json.d.length; i++) {
                    str += "<tr>";
                    $('.success th').each(function () {
                        str += "<td>" + json.d[i][$.trim($(this).html().replace('(秒)', ''))] + "</td>"
                    });
                    str += "</tr>";

                }
                //    str += "</table>";
                $("#table1 tbody").html(str);
                window.parent.$('#statusA').height($(document).height());
            }

        },
        error: function (msg) {
            document.write(msg.status);
        }
    });

}




moolink.report = function (PageCurrent, PageSize) {

    var obj = new Object();
    obj.request = new Object();
    obj.request.PageCurrent = PageCurrent;
    obj.request.PageSize = PageSize;
    if (!$_GET['idArea']) {
        $_GET['idArea'] = 0;
    }
    obj.request.idArea = $_GET['idArea'];
    var month = $('#Month').val();
    if (month != '') {
        var isyser = month.length == 4 ? (month = month + "-1-1", true) : (month = month + "-1", false);
        obj.request.isyser = isyser;
        obj.request.CSTM = month;
    }
    else { return; }
    obj.request.remark = $('#remark').val();
    var jsonstr = window.JSON.stringify(obj);
    $.ajax({
        type: "POST",
        //url: window.location.pathname + "/LoadData",
        url: window.location.pathname + "/selectDate",
        async: true,
        contentType: "application/json;",
        data: jsonstr,
        dataType: "json",
        success: function (json) {


            var str = "<tr><td>暂无相关数据</td></tr>";
            if (json == "" || json == null || !json.d) {

            }
            else {
                json.d = json.d.split('`');
                var count = json.d[0];
                json.d = eval(json.d[1]);

                if (!json.d && count == 0) {
                    $("#table1 tbody").html(str);
                    $("#table1 thead").html('');
                    window.parent.$('#statusA').height(document.height);
                    //$('#test').html('');
                    json.d = [];
                    FixTable("table1", 0, '100%', $(window).height() - 130 + "px");
                    return;
                }
                json = json.d;
                InitPager(count, PageCurrent);
                str = "";
                if (isyser) {
                    var thead = $("#table1 thead");
                    thead.html('');
                    thead.append("<tr></tr>");

                    $("table.table").width(1500);
                    thead = thead.find('tr');
                    thead.append("<th>编号</th><th></th>");
                    for (var i = 1; i < 13; i++) {
                        thead.append('<th>' + i + '月</th>');
                    }
                    var tbody = $("table.table").find("tbody");
                    tbody.html('');

                    for (var i in json) {
                        var $reality = "<tr>";
                        var $standard = "<tr>";
                        var $workinghours = "<tr>";

                        $reality += "<td rowspan='3' width='120' style='vertical-align: middle;'>" + json[i].UseLocation + "</td>";
                        $reality += "<td width='100'>实时产量</td>";
                        $standard += "<td width='100'>标准产量</td>";
                        $workinghours += "<td width='100'>总工时</td>";
                        for (var a = 1; a <= 12; a++) {
                            $reality += "<td>";
                            $standard += "<td>";
                            $workinghours += "<td>";
                            for (var ii in json[i].Months) {
                                var value = json[i].Months[ii];
                                if (value.monthname == a) {
                                    $reality += value.datavalue.reality;
                                    $standard += value.datavalue.standard;
                                    $workinghours += value.datavalue.workinghours;
                                }
                            }
                            $reality += "</td>";
                            $standard += "</td>";
                            $workinghours += "</td>";
                        }
                        $reality += "</tr>";
                        $standard += "</tr>";
                        $workinghours += "</tr>";
                        str += $reality + $standard + $workinghours;

                    }
                    tbody.append(str);
                }
                else {
                    $("table.table").width(5000);
                    var daycount = getDaysInMonth(month.split('-')[1], month.split('-')[0]);
                    var thead = $("#table1 thead");
                    thead.html('');
                    thead.append("<tr></tr>");
                    thead = thead.find('tr');

                    thead.append("<th>编号</th><th></th>");

                    for (var i = 1; i <= daycount; i++) {
                        thead.append('<th>' + i + '日</th>');
                    }

                    var tbody = $("table.table").find("tbody");

                    tbody.html('');

                    for (var item in json) {
                        var $reality = "<tr>";
                        var $standard = "<tr>";
                        var $workinghours = "<tr>";

                        $reality += "<td rowspan='3' width='120' style='vertical-align: middle;'>" + json[item].UseLocation + "</td>";
                        $reality += "<td width='100'>实时产量</td>";
                        $standard += "<td width='100'>标准产量</td>";
                        $workinghours += "<td width='100'>总工时</td>";
                        for (var i = 1; i <= daycount; i++) {
                            $reality += "<td>";
                            $standard += "<td>";
                            $workinghours += "<td>";
                            var Days = JSON.parse(json[item].Days);
                            for (var iitem in Days) {
                                if (Days[iitem].dayname == i) {
                                    var value = Days[iitem];
                                    $reality += value.datavalue.reality;
                                    $standard += value.datavalue.standard;
                                    $workinghours += value.datavalue.workinghours;

                                }

                            }
                            $reality += "</td>";
                            $standard += "</td>";
                            $workinghours += "</td>";
                        }
                        $reality += "</tr>";
                        $standard += "</tr>";
                        $workinghours += "</tr>";
                        str += $reality + $standard + $workinghours;
                    }
                    tbody.append(str);

                }
                window.parent.$('#statusA').height($(document).height());
                FixTable("table1", 2, '100%', $(window).height() - 130 + "px");
                $("#table1_tableData").height($(window).height() - 130);
                $("#table1_tableData").height($("#table1_tableLayout").height());
                //   init();
            }

        },
        error: function (msg) {
            alert(msg.status);
        }
    });
}
moolink.SelectJson = function (PageCurrent, PageSize) {
    var obj = new Object();
    obj.request = new Object();
    obj.request.PageCurrent = PageCurrent;
    obj.request.PageSize = PageSize;
    if (!$_GET['idArea']) {
        $_GET['idArea'] = 0;
    }

    obj.request.devicetype = $("#putArea").val();
    if ($("#CSTM").val() != undefined && $("#CSTM").val() != "") {
        obj.request.CSTM = $("#CSTM").val();
    }
    if ($("#CETM").val() != undefined && $("#CETM").val() != "") {
        obj.request.CETM = $("#CETM").val();
    }
    obj.request.idArea = $_GET['idArea'];
    obj.request.remark = $('#remark').val();
    return window.JSON.stringify(obj);
}
moolink.toexecl = function () {
    var json = window.JSON.parse(moolink.SelectJson(1, 1)).request;
    if (json.CSTM == undefined) {
        json.CSTM = "";
    }
    if (json.CETM == undefined) {
        json.CETM = "";
    }
    var name = window.location.pathname.split('/');
    name = name[name.length - 1];
    $('#iframe1').html('<iframe src="Handler/execl.ashx?name=' + name + '&idArea=' + json.idArea + '&remark=' + json.remark + '&CSTM=' + json.CSTM + '&CETM=' + json.CETM + '&devicetype=' + json.devicetype + '" ></iframe>');





}
moolink.PageList = function () {
    var Current = 1;
    var PageCount = 1;
}
function getDaysInMonth(month, year) {
    var days;
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) days = 31;
    else if (month == 4 || month == 6 || month == 9 || month == 11) days = 30;
    else if (month == 2) {
        if (isLeapYear(year)) { days = 29; }
        else { days = 28; }
    }
    return (days);
}
function isLeapYear(inYear) {
    if ((inYear % 4 == 0 && inYear % 100 != 0) || inYear % 400 == 0) {
        return true;
    } else {
        return false;
    }
}



function date2str(x,y) { 
var z ={y:x.getFullYear(),M:x.getMonth()+1,d:x.getDate(),h:x.getHours(),m:x.getMinutes(),s:x.getSeconds()}; 
return y.replace(/(y+|M+|d+|h+|m+|s+)/g,function(v) {return ((v.length>1?"0":"")+eval('z.'+v.slice(-1))).slice(-(v.length>2?v.length:2))}); 
} 

function pad(num, n) {  
    var len = num.toString().length;  
    while(len < n) {  
        num = "0" + num;  
        len++;  
    }  
    return num;  
}  