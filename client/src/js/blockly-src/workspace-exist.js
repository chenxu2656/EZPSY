var toolbox = document.getElementById("toolbox");
var options = {
	toolbox : toolbox,
	collapse : true,
	comments : true,
	disable : true,
	maxBlocks : Infinity,
	trashcan : true,
	horizontalLayout : false,
	toolboxPosition : 'start',
	css : true,
	grid : {
		spacing : 20,
		length : 3,
		colour : '#ccc',
		snap : true
	},
	zoom : {
		controls : true,
		wheel : true,
		startScale : 1.0,
		maxScale : 3,
		minScale : 0.3,
		scaleSpeed : 1.2
	},
	media : 'media/',
	rtl : false,
	scrollbars : true,
	sounds : false,
	oneBasedIndex : true
};
let workspace = Blockly.inject('blocklyDiv', options);
var btn2 = document.getElementById('load');
btn2.addEventListener('click', function() {
	Blockly.Xml.domToWorkspace(document.getElementById('toolbox1'), workspace);
});

// 加载用户的项目信息
function init(){
	let projectXmlDom=document.getElementById('projectXml');
	let projectXmlValue = projectXmlDom.value;
	var xml = Blockly.Xml.textToDom(projectXmlValue);
	Blockly.Xml.domToWorkspace(xml, workspace);
}

// 运行项目
var runJs = document.getElementById('run');
runJs.addEventListener('click', function() {
	// Generate JavaScript code and display it.
	Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
	// 将工作空间的模块转译成JS代码，Blockly.JavaScript.workspaceToCode需要引入javascript_compressed.js
	var code = Blockly.JavaScript.workspaceToCode(workspace);
	code = '(async function(){' + '\n' + code + '\n' + '}())';
	// 放入系统缓存
	sessionStorage.setItem('key', code);
	window.open("experment.html?key");
});

// 保存事件
var saveJs = document.getElementById('save');
saveJs.addEventListener('click', function() {
	var xml = Blockly.Xml.workspaceToDom(workspace);
    var xml_text = Blockly.Xml.domToText(xml);
	resultStr=xml_text.replace(/></g,">\n<");
		document.getElementById('jsFile').value = resultStr;
		var name = window.confirm("确定保存修改后的项目？");
		if (name) {
			document.getElementById('name').value = name;
			alert("保存成功");
			document.getElementById('saveForm').submit();
		}
		else {
		}
});

// 下载事件
var downloadJs = document.getElementById('download');
downloadJs.addEventListener('click', function() {
	var xml = Blockly.Xml.workspaceToDom(workspace);
    var xml_text = Blockly.Xml.domToText(xml);
	resultStr=xml_text.replace(/></g,">\n<");
	var pom = document.createElement('a');
	pom.setAttribute('href', 'data:text/plain;charset=utf-8,'
				+ encodeURIComponent(resultStr));
	pom.setAttribute('download', "项目.xml");
	if (document.createEvent) {
		var event = document.createEvent('MouseEvents');
			event.initEvent('click', true, true);
			pom.dispatchEvent(event);
		} else {
			pom.click();
		}
});

// 返回事件
var returnJs = document.getElementById('return');
returnJs.addEventListener('click', function() {
	document.getElementById('returnForm').submit();
});

// js监听
function myUpdateFunction(event) {
	var code = Blockly.JavaScript.workspaceToCode(workspace);
	document.getElementById('code_area').innerText = code;
}

let xmlCode = ()=>{
	var xml = Blockly.Xml.workspaceToDom(workspace);
    var xml_text = Blockly.Xml.domToText(xml);
	resultStr=xml_text.replace(/></g,">\n<");
	return resultStr;
}

workspace.addChangeListener(myUpdateFunction);