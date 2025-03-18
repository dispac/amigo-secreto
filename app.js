// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos=[];

function agregarAmigo()
{
    let ingreso = document.getElementById('amigo').value;
    console.log(ingreso);
   
     if (ingreso==="")
	 {
		 alert("Por favor ingrese un nombre");
	 }
	 else{
		 listaAmigos.push(ingreso);
		 document.getElementById('amigo').value="";//se limpia el textbox amigo
		 actualizarListaAmigos();
	 }
   
    return;
}

function actualizarListaAmigos()
{
 let elementoLista = document.getElementById("listaAmigos");
 elementoLista.innerHTML="";
 
 for (let i=0; i<listaAmigos.length;i++)
 {
	 let itemLista=document.createElement("li"); //agregar los elementos a la lista
	 itemLista.innerHTML = listaAmigos[i];
	 elementoLista.appendChild(itemLista);
	 
 }
	
	
}


function sortearAmigo()
{
    if(listaAmigos.length==0) //Se valida la existencia de amigos disponibles
	{
		alert("La lista se encuentra vacia, favor llenarla!!");
		return;
	}
	else 
	{
		numeroAleatorio = Math.floor(Math.random()* listaAmigos.length); //se genera un número aleatorio de acuerdo a la cantidad de usuarios ingresados
		usuarioEscogido=listaAmigos[numeroAleatorio]; //se escoge el nombre del usuario generado en el punto anterior
		document.getElementById("resultado").innerHTML= `Su amigo secreto es: ${usuarioEscogido}`; 
		
		
	}
}
