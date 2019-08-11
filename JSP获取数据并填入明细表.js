var applyidCid="field16179";

var xmbhCid="field17080";
var xmmcCid="field16187";
var ywlbCid="field17081";
var zcdgsCid="field17082";
var jsdwCid="field17083";
var ctfzrCid="field17084";
var xmfzrCid="field17085";
var zcsjCid="field17086";
var sqztCid="field16188";
//dt
var wjmcCid="field17087";
var sjrCid="field17088";
var wcsjCid="field17089";

jQuery(document).ready(function(){   
    if(!jQuery("#requestid").val()){
		var guid = getQueryString("applyId");      
                $GetEle("field16179").value=guid; 
		if(guid) {
			loadContent(guid);
		}   
        else {
			top.Dialog.alert("参数错误，请在图档系统里发起！");
		}
    }
});

function loadContent(applyId){
    var url = "/workflow/include/operation/tdgetfileproject.jsp";
    jQuery.ajax({
                    type:'post',
                    url:url,
                    data:{"applyid":applyId} ,          
                    dataType:"json",//返回类型
                    async:false,
                    success:function do4Success (obj){
                        if(window.console)console.log(obj);		
			if(obj.status==1) {	
loaddt(obj);

 jQuery("#"+xmbhCid).val(obj.xmbh); jQuery("#"+xmbhCid+"span").text(obj.xmbh);
 jQuery("#"+xmmcCid).val(obj.xmmc); jQuery("#"+xmmcCid+"span").text(obj.xmmc);

jQuery("#"+ywlbCid).val(obj.ywlb); jQuery("#"+ywlbCid+"span").text(obj.ywlb);
 jQuery("#"+zcdgsCid).val(obj.zcdgs); jQuery("#"+zcdgsCid+"span").text(obj.zcdgs);
jQuery("#"+jsdwCid).val(obj.jsdw); jQuery("#"+jsdwCid+"span").text(obj.jsdw);
 jQuery("#"+ctfzrCid).val(obj.ctfzr); jQuery("#"+ctfzrCid+"span").text(obj.ctfzr);
jQuery("#"+xmfzrCid).val(obj.xmfzr); jQuery("#"+xmfzrCid+"span").text(obj.xmfzr);
 jQuery("#"+zcsjCid).val(obj.zcsj); jQuery("#"+zcsjCid+"span").text(obj.zcsj);


			}else if(obj.status==0) {                               
                                top.Dialog.alert(obj.msg);
                        }			
                    },
                   error:function (){
		           top.Dialog.alert("Error");
                  }
         });
}

function getQueryString(name) {   
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	results = regex.exec(location.search);
	return results == null ? "": decodeURIComponent(results[1]);
} 

function getQueryString(name) {   
	var regex = new RegExp(name + "=([^]*)"),
	results = regex.exec(location.search);
	return results == null ? "": decodeURIComponent(results[1]);
} 


'?workflowid=454&applyId=A65F2DF2-C240-44AF-AB9D-869740D3D90E'


function loaddt(obj){
	jQuery("input[name='check_node_0']").each(function(){
		jQuery(this).attr("checked",true);
	});	
	deleteRow0(0,1);

	//延迟执行,解决IE下因设置字段联动导致赋值失败
	var arrk = 0;
	mytime = setInterval(function () {
		show();	
	}, 10);
	function show(){
		if(obj.data.length==0) {clearInterval(mytime);return false;}
		var dt = obj.data[arrk];			
		addRow0(0);	
		var index0 = jQuery("#indexnum0").val()-1;	

               jQuery("#"+wjmcCid+"_"+index0).val(dt.wjmc);
	       jQuery("#"+wjmcCid+"_"+index0+"span").html(dt.wjmc);

               jQuery("#"+sjrCid+"_"+index0).val(dt.sjr);
	       jQuery("#"+sjrCid+"_"+index0+"span").html(dt.sjr);

 	       jQuery("#"+wcsjCid+"_"+index0).val(dt.wcsj);
	       jQuery("#"+wcsjCid+"_"+index0+"span").html(dt.wcsj);

		arrk += 1;
		if(arrk>=(obj.data.length))  {
                   clearInterval(mytime);                 
		}
	}

}