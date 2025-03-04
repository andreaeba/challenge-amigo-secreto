// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Se crea un array para almacenar los nombres
let friends = [];
let selectedSecretFriend = 0;


let ulFriends = document.getElementById('listaAmigos');

// Se crea un array para captar el valor de input donde se va a colocar cada nombre
function inputAddFriends() {
    let textInputAddFriends = document.getElementById('amigo').value;
    return textInputAddFriends;
}



// Implementa una función para agregar amigos
function agregarAmigo() {

   if(inputAddFriends().length == 0){
        alert('Por favor, inserte un nombre');
    } else {
      friends.push(inputAddFriends());
      console.log(friends);
      cleanInputAddFriends();
      addFriendToVisual();
    }
}

// Limpiar el campo de entrada: 
function cleanInputAddFriends() {
   let valueInput = document.getElementById('amigo');
   valueInput.value = '';
}

// Añadir lista de amigos
function addFriendToVisual() {
          ulFriends.innerHTML = '';

        for(let i = 0; i < friends.length ; i++){
        let li = document.createElement('li');
        li.textContent = friends[i];
        ulFriends.appendChild(li);

    }

} 

// Implementa una función para sortear los amigos
function sortearAmigo() {

    if(friends.length >= 1) {
        
        selectedSecretFriend = Math.floor(Math.random()*friends.length);
        console.log(selectedSecretFriend);
        showSecretFriend();
        ulFriends.innerHTML = '';
     
    } else {
        alert('No puede realizar el sorteo porque todavía no ha añadido ningún amigo.');
    }

}

function showSecretFriend() {
   
    let result = document.getElementById('resultado');
    let li = document.createElement('li');
    li.textContent = `El amigo sorteado secreto es: ` + friends[selectedSecretFriend];
    result.appendChild(li);

    
}

