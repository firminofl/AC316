function eventoTabela() {

    console.log("\n\nDados: fafa\n\n");

    var tabela = document.getElementById("minhaTabela");
    var linhas = tabela.getElementsByTagName("tr");
  
    for(var i = 0; i < linhas.length; i++){
        var linha = linhas[i];
      linha.addEventListener("click", function(){
          //Adicionar ao atual
            selLinha(this, false); //Selecione apenas um
        //selLinha(this, true); //Selecione quantos quiser
        });
    }
    /**
    Caso passe true, você pode selecionar multiplas linhas.
    Caso passe false, você só pode selecionar uma linha por vez.
    **/
  
    function selLinha(linha, multiplos){
        if(!multiplos){
          var linhas = linha.parentElement.getElementsByTagName("tr");
        for(var i = 0; i < linhas.length; i++){
          var linha_ = linhas[i];
          linha_.classList.remove("selecionado");
        }
      }
      linha.classList.toggle("selecionado");
    }
  
    /**
    Exemplo de como capturar os dados
    **/
    var btnEditar = document.getElementById("editar");
  
    btnEditar.addEventListener("click", function(){
        console.log("CLiquei");

        var selecionados = tabela.getElementsByClassName("selecionado");
      //Verificar se eestá selecionado
      if(selecionados.length < 1){
          alert("Selecione pelo menos uma linha");
        return false;
      }
  
      var dados = "";
  
      for(var i = 0; i < selecionados.length; i++){
          var selecionado = selecionados[i];
        selecionado = selecionado.getElementsByTagName("td");
        dados +=
        "Sensor: " + selecionado[0].innerHTML + "\n"+
        "Status: " + selecionado[1].innerHTML
      }
  
      console.log("\n\nDados: "+ dados);
    });
  
  }