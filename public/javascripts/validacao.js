function validacao(){

  var nomeLogin = $("#nomeLogin").val();
	var senhaLogin = $("#senhaLogin").val();

	//primeira validação
	if (nomeLogin == "") {
		alert("Por favor digite seu login.");
		$("nomeLogin").focus();
		return false; //Mantem na pagina até o campo ser preenchido
	}

	//segunda validação
	if (senhaLogin == "") {
		alert("Por favor digite sua senha.");
		$("senhaLogin").focus();
		return false; //Mantem na pagina até o campo ser preenchido
	}
	return true
}

function validacaoUsuario() {
  var usuarioCadastroLogin = $("#usuarioCadastro").val();
	var senhaCadastroLogin = $("#senhaCadastro").val();

	//primeira validação
	if (usuarioCadastroLogin == '') {
		alert("Por favor digite seu login.");
		$("usuarioCadastro").focus();
		return false; //Mantem na pagina até o campo ser preenchido
	}

	//segunda validação
	if (senhaCadastroLogin == '') {
		alert("Por favor digite sua senha.");
		$("senhaCadastro").focus();
		return false; //Mantem na pagina até o campo ser preenchido
	}
	return true
}

function validacaoSensor(){

  var sensor = $("#sensor").val();
	var status = $("#status").val();

	//primeira validação
	if (sensor == "") {
		alert("Por favor digite o nome do sensor.\nExemplo: cerca eletrica.");
		$("sensor").focus();
		return false; //Mantem na pagina até o campo ser preenchido
	}

	//segunda validação
	if (status == "") {
		alert("Por favor selecione um valor entre 0 e 1.");
		$("status").focus();
		return false; //Mantem na pagina até o campo ser preenchido
	}
	return true
}
