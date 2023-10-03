function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play('');
}
document.querySelector('.tecla_pom');
//document.querySelector('.tecla_pom').onclick = toca

document.querySelector('.tecla_pom').onclick = tocaSomPom;
 const listaDeTeclas = document.querySelectorAll(',tecla');
 listaDeTeclas[0].onclick = tocaSomPom;
 listaDeTeclas[1].onclick = tocaSomClap;
 listaDeTeclas[2].onclick = tocaSomTim;
 listaDeTeclas[3].onclick = tocaSomFuff;
 listaDeTeclas[4].onclick = tocaSomSplash;
 listaDeTeclas[5].onclick = tocaSomToim;
 listaDeTeclas[6].onclick = tocaSmoPsh;