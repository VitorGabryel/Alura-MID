function tocaSomPom(idElementoAudio){
    document.querySelector(idElementoAudio).play('');
}
document.querySelector('.tecla_pom');
//document.querySelector('.tecla_pom').onclick = toca

document.querySelector('.tecla_pom').onclick = tocaSomPom;
 const listaDeTeclas = document.querySelectorAll(',tecla');

 let contador = 0;

 while(contador < 9){
    listaDeTeclas[contador].onclick = function(){
        tocaSomPom('#som_tecla_clap');
    };
    contador = contador + 1;
 }
