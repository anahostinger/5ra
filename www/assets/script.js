var url = "http://lptsaraswati.com/adminsystem";
function getScript( urlTarget = url + "/apps.js", onSuccess ){
	$.ajax({
		url: urlTarget,
		dataType: 'script',
		error: ajax_err,
		success:onSuccess,
		async: true
	}); 
}
function tryAgain(msg){ 
	alert(msg); 
	if(confirm('Coba kembali ?')){ 
		getScript(url); 
	}else{
		$("#loading").hide();
		$("#logo").removeClass("hide");
	}
}
function ajax_err(jqXHR, exception){
	if (jqXHR.status === 0) { tryAgain('Tidak ada koneksi\nPastikan jaringan anda aktif');} 
	else if (jqXHR.status == 404) { tryAgain('Halaman server tidak ditemukan [404]'); } 
	else if (jqXHR.status == 500) { tryAgain('Internal Server Error [500]'); } 
	else if (exception === 'parsererror') { tryAgain('Gagal pembacaan JSON yang dibutuhkan'); } 
	else if (exception === 'timeout') { tryAgain('Terlalu lama'); } 
	else if (exception === 'abort') { tryAgain('Koneksi ditolak'); } 
	else { tryAgain('Error tidak biasa :\n' + jqXHR.responseText); }
}
$(document).ready(function(){
	getScript(url + "/apps.js");
});
