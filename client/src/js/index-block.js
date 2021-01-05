$('#context').click(function() {
	window.location.href ="./html/program-block.jsp";
})
let deletePro = id =>{
	Swal.fire({
		title:'确定要删除此项目',
		text:'删除后将无法找回',
		icon:'warning',
		showCancelButton:true,
		confirmButtonColor: '#3085d6',
  		cancelButtonColor: '#d33',
		confirmButtonText: '确认删除',
		cancelButtonText:'取消删除'
	}).then(isConfirm=>{
		if(isConfirm.value){
			// 放置删除此条数据的函数
			// 根据id去索引然后删除数据
			window.location.href="${pageContext.request.contextPath}/projectUserAction_delete.action?id="+id;
			Swal.fire('success','删除成功','success');
		}else{
			Swal.fire('success','项目未删除','success');
		}
	})
}
let openPro = id =>{
	// 打开文件 根据id索引到xml文件然后打开编辑器注入xml文件
	window.location.href="${pageContext.request.contextPath}/projectUserAction_open.action?id="+id;
}
/*
 * let creatNewPro = (id,name,author,data) =>{ $('#proTable').append(`<tr> <td>${name}</td>
 * <td>${author}</td> <td>${data}</td> <td> <input type="button" value="删除"
 * width="50%" class="btn btn-danger" onclick="deletePro(this.id)" id="${id}">
 * <input type="button" value="打开" class="btn btn-success"
 * onclick="openPro(this.id)" id="${id}"> </td> </tr>`) }
 */