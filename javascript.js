
var imagem = window.document.getElementById("img2")
imagem.addEventListener("mouseenter", clicou)
imagem.addEventListener("click", msg)

function clicou(){
	do{
		valorX = Math.ceil(Math.random()*800)
	}while(valorX > 350 & valorX < 650)
	do{	
		valorY = Math.ceil(Math.random()*800)
	}while(valorY > 60 & valorY < 360)
		
	imagem.style.left = valorX+"px"
	imagem.style.top = valorY+"px"
}
function msg(){
	alert("Parabéns")
}