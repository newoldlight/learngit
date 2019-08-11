jQuery(document).ready(function(){
    checkCustomize=function(){
        var flag =top.Dialog.confirm("你确定流程转任务？" );
        alert(flag);
        if(flag==true){
            var wtms=jQuery("#field5913").val();
            var bt=jQuery("input[name='requestname']").val();
            openDialog("流程转任务","lbx/workflowTotask.jsp?wtms="+wtms+"&bt="+bt) ;
        }
    return false;
    }
});
function openDialog(title,url) {
　　var dlg=new window.top.Dialog();//定义Dialog对象
    dialog.currentWindow = window;
　　dlg.Model=true;
　　dlg.Width=100;
　　dlg.Height=100;
　　dlg.URL=url;
　　dlg.Title=title;
　　dlg.show();
}
