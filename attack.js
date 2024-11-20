function findCsrf(cookieName) {
	var nameEQ = cookieName + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i].trim();
		if (c.indexOf(nameEQ) == 0){ 
			return c.substring(nameEQ.length,c.length)
		};
	}
	return null;
}
function xhr() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
	xmlhttp=new XMLHttpRequest();
    }
    else if(window.ActiveXObject) {
	try {
	    xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");
	}
	catch(e) {
	    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
    }
    return xmlhttp;
}
function getPlainResponse(action, params) {
    
    var objHTTP,result;objHTTP = xhr();
    objHTTP.open('POST', action, false);
    objHTTP.setRequestHeader('Content-Type','application/x-www-form-urlencoded;charset=UTF-8');
    objHTTP.setRequestHeader('Content-length', params.length);
    objHTTP.setRequestHeader('X-ZCSRF-TOKEN',"crmcsrfparam="+findCsrf('crmcsr'))
    objHTTP.send(params);
    
    return objHTTP;

}
//livenandha
var params= {"firstName":"","lastName":"Jamess","associatedDepartmentIds":["1062072000000006907"],"rolePermissionType":"Admin","aboutInfo":"","mobile":"","phone":"","extn":"","status":"ACTIVE","emailId":"voyix37996@merotx.com"}//No I18N
var result = getPlainResponse('https://desk.zoho.com/api/v1/agents?orgId=871824321', JSON.stringify(params)); //No I18N 
//ZOHOCOrp
//var params= {"firstName":"","lastName":"Nagarajan","associatedDepartmentIds":["4000000099140"],"rolePermissionType":"Admin","aboutInfo":"","mobile":"","phone":"","extn":"","status":"ACTIVE","emailId":"jareh86128@molyg.com"}//No I18N
//var result = getPlainResponse('https://crmplus.zoho.com/supportapi/zohocorp/api/v1/agents?portalname=zohocorp', JSON.stringify(params)); //No I18N 
