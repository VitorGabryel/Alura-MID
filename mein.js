function tocaSomPom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

 const listaDeTeclas = document.querySelectorAll(',tecla');

 for (contador = 0; contador < listaDeTeclas.length; contador++){

    const instrumento = listaDeTeclas[contador].classList[1];

    const tecla = listaDeTeclas[contador];

    const idAudio = `#som_${instrumento}`

    tecla.onclick = function(){
        tocaSomPom(idAudio);
    }
 }

 while(contador < 9){
    listaDeTeclas[contador].onclick = function(){
        tocaSomPom('#som_tecla_clap');
    };
    contador = contador + 1;
 }
