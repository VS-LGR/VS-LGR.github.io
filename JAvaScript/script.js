

//FUNÇÕES POP-UP CONTEUDOS
// Adicione um ouvinte de evento de clique ao elemento correspondente à primeira janela




function openWindows() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("window").style.display = "block";
    
    document.getElementById("overlay").style.opacity = 1; // Garante que a transição de opacidade comece a partir de 1
    document.getElementById("window").style.opacity = 1;
    
    document.querySelector('.container-popup').classList.add('active'); // Adiciona classe para exibir a janela
    


  }


  
function openWindows2() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("window-2").style.display = "block";
  document.getElementById("overlay").style.opacity = 1; // Garante que a transição de opacidade comece a partir de 1
  document.getElementById("window-2").style.opacity = 1;
  document.querySelector('.container-popup').classList.add('active'); // Adiciona classe para exibir a janela
  


}

  
  function closeWindow() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("window").style.display = "none";
    document.getElementById("window-2").style.display = "none";
    document.querySelector('.container-popup').classList.remove('active'); // Remove classe para esconder a janela

  }

  function checkWindow() {
    var window = document.getElementById('window');
    var window2 = document.getElementById('window-2');
    var container = document.querySelector('.container-popup');

    // Verifique se a janela 2 está ativa antes de ativar a janela 1
    if (!window2.classList.contains('active')) {
        window.classList.toggle('active'); // Alterna a classe ativa da window
        container.classList.toggle('active');
    } else{!window.classList.contains('active');
    window2.classList.toggle('active');
    container.classList.toggle('active');
    document.getElementById('window-2').addEventListener('click', checkWindow);
}
}

function checkWindow2() {
  var window = document.getElementById('window-2');
  var window2 = document.getElementById('window');
  var container = document.querySelector('.container-popup');

  // Verifique se a janela 2 está ativa antes de ativar a janela 1
  if (!window2.classList.contains('active')) {
      window.classList.toggle('active'); // Alterna a classe ativa da window
      container.classList.toggle('active');
  } else{!window.classList.contains('active');
  window2.classList.toggle('active');
  container.classList.toggle('active');
  document.getElementById('window-2').addEventListener('click', checkWindow);
}
}


// Adicione um ouvinte de evento de clique ao elemento correspondente à segunda janela



// FUNÇÕES CORTINAS DOS APARTAMENTOS (FUNCIONANDO 80%)
// POSICIONAR TODAS

function openGate() {
  // document.getElementById("g-overlay").style.display = "block";
  // document.getElementById("gate-on").style.display = "block";
  document.getElementById("gate-off").style.display = "block";
  document.getElementById("g-component").style.display = "block";
  document.getElementById("g-component").style.backgroundImage = "https://i.imgur.com/vBLQkCn.gif";
  // document.getElementById("g-overlay").style.opacity = 1; // Garante que a transição de opacidade comece a partir de 1
  // document.getElementById("gate-on").style.opacity = 1;
  // document.getElementById("gate-off").style.opacity = 1;
  document.querySelector('.g-component').classList.add('active'); // Adiciona classe para exibir a janela

}


function closeGate() {
  document.getElementById("gid-overlay").style.display = "none";
  // document.getElementById("g-component").style.display = "block"
  document.getElementById("g-component").style.backgroundImage = "https://i.imgur.com/tdVCRoO.png";
  // document.getElementById("gate-on").style.display = "none";
  // document.getElementById("gate-off").style.display = "none";
  document.querySelector('.g-component').classList.remove('active'); // Remove classe para esconder a janela


}

function checkGate() {
  var gcomponent = document.getElementById('g-component');
  var gateoff = document.getElementById('gate-off');
  var gcontainer = document.querySelector('.g-container');

  // Verifique se a janela 2 está ativa antes de ativar a janela 1
  if (!gateoff.classList.contains('active')) {
      gcomponent.classList.toggle('active'); // Alterna a classe ativa da window
      gcontainer.classList.toggle('active');
  } else{!gcomponent.classList.contains('active');
  gateoff.classList.toggle('active');
  gcontainer.classList.toggle('active');

}
}


// Função para abrir o novo portão
function openGate2() {
  var gidOverlay2 = document.getElementById("gid-overlay-2");
  var gateOff2 = document.getElementById("gate-off-2");
  var gComponent2 = document.getElementById("g-component-2");

  gidOverlay2.style.display = "block";
  gateOff2.style.display = "block";
  gComponent2.style.display = "block";
  gComponent2.style.backgroundImage = "url('https://i.imgur.com/vBLQkCn.gif')";
}

// Função para fechar o novo portão
function closeGate2() {
  var gidOverlay2 = document.getElementById("gid-overlay-2");
  var gComponent2 = document.getElementById("g-component-2");

  gidOverlay2.style.display = "none";
  gComponent2.style.backgroundImage = "url('https://i.imgur.com/tdVCRoO.png')";
}


function checkGate2() {
  var gcomponent2 = document.getElementById('g-component-2');
  var gateoff2 = document.getElementById('gate-off-2');
  var gcontainer2 = document.querySelector('.g-container-2');

  // Verifique se a janela 2 está ativa antes de ativar a janela 1
  if (!gateoff2.classList.contains('active')) {
      gcomponent2.classList.toggle('active'); // Alterna a classe ativa da window
      gcontainer2.classList.toggle('active');
  } else{!gcomponent2.classList.contains('active');
  gateoff2.classList.toggle('active');
  gcontainer2.classList.toggle('active');

}
}

//RESETAR GIF DE ABERTURA. ESTADO: NÃO FUNCIONANDO! MOTIVO: SÓ DEUS SABE
 
// // Selecionar o elemento que contém o GIF

// var gifContainers = document.getElementsByClassName("g-overlay");

// // Função para reiniciar o GIF em todos os elementos
// function restartGif() {
//     // Iterar sobre todos os elementos com a classe "gid-overlay"
//     for (var i = 0; i < gifContainers.length; i++) {
//         var gifContainer = gifContainers[i];
        
//         // Remover a classe que contém a animação
//         gifContainer.classList.remove("g-overlay");
        
//         // Forçar um reflow
//         void gifContainer.offsetWidth;
        
//         // Adicionar a classe novamente para reiniciar a animação
//         gifContainer.classList.add("g-overlay");
//     }
//     document.addEventListener("DOMContentLoaded", function() {
//       restartGif();
//   });
// }





        

        
    




// Adicione um ouvinte de evento de clique ao elemento correspondente à segunda janela



// FUNÇÕES CORTINAS DOS APARTAMENTOS (FUNCIONANDO 80%)
// POSICIONAR TODAS

function openGate() {
  // document.getElementById("g-overlay").style.display = "block";
  // document.getElementById("gate-on").style.display = "block";
  document.getElementById("gate-off").style.display = "block";
  document.getElementById("g-component").style.display = "block";
  document.getElementById("g-component").style.backgroundImage = "https://i.imgur.com/vBLQkCn.gif";
  // document.getElementById("g-overlay").style.opacity = 1; // Garante que a transição de opacidade comece a partir de 1
  // document.getElementById("gate-on").style.opacity = 1;
  // document.getElementById("gate-off").style.opacity = 1;
  document.querySelector('.g-component').classList.add('active'); // Adiciona classe para exibir a janela

}


function closeGate() {
  document.getElementById("gid-overlay").style.display = "none";
  // document.getElementById("g-component").style.display = "block"
  document.getElementById("g-component").style.backgroundImage = "https://i.imgur.com/tdVCRoO.png";
  // document.getElementById("gate-on").style.display = "none";
  // document.getElementById("gate-off").style.display = "none";
  document.querySelector('.g-component').classList.remove('active'); // Remove classe para esconder a janela


}

function checkGate() {
  var gcomponent = document.getElementById('g-component');
  var gateoff = document.getElementById('gate-off');
  var gcontainer = document.querySelector('.g-container');

  // Verifique se a janela 2 está ativa antes de ativar a janela 1
  if (!gateoff.classList.contains('active')) {
      gcomponent.classList.toggle('active'); // Alterna a classe ativa da window
      gcontainer.classList.toggle('active');
  } else{!gcomponent.classList.contains('active');
  gateoff.classList.toggle('active');
  gcontainer.classList.toggle('active');

}
}


// Função para abrir o novo portão
function openGate2() {
  var gidOverlay2 = document.getElementById("gid-overlay-2");
  var gateOff2 = document.getElementById("gate-off-2");
  var gComponent2 = document.getElementById("g-component-2");

  gidOverlay2.style.display = "block";
  gateOff2.style.display = "block";
  gComponent2.style.display = "block";
  gComponent2.style.backgroundImage = "url('https://i.imgur.com/vBLQkCn.gif')";
}

// Função para fechar o novo portão
function closeGate2() {
  var gidOverlay2 = document.getElementById("gid-overlay-2");
  var gComponent2 = document.getElementById("g-component-2");

  gidOverlay2.style.display = "none";
  gComponent2.style.backgroundImage = "url('https://i.imgur.com/tdVCRoO.png')";
}


function checkGate2() {
  var gcomponent2 = document.getElementById('g-component-2');
  var gateoff2 = document.getElementById('gate-off-2');
  var gcontainer2 = document.querySelector('.g-container-2');

  // Verifique se a janela 2 está ativa antes de ativar a janela 1
  if (!gateoff2.classList.contains('active')) {
      gcomponent2.classList.toggle('active'); // Alterna a classe ativa da window
      gcontainer2.classList.toggle('active');
  } else{!gcomponent2.classList.contains('active');
  gateoff2.classList.toggle('active');
  gcontainer2.classList.toggle('active');

}
}

//RESETAR GIF DE ABERTURA. ESTADO: NÃO FUNCIONANDO! MOTIVO: SÓ DEUS SABE
 
// // Selecionar o elemento que contém o GIF

// var gifContainers = document.getElementsByClassName("g-overlay");

// // Função para reiniciar o GIF em todos os elementos
// function restartGif() {
//     // Iterar sobre todos os elementos com a classe "gid-overlay"
//     for (var i = 0; i < gifContainers.length; i++) {
//         var gifContainer = gifContainers[i];
        
//         // Remover a classe que contém a animação
//         gifContainer.classList.remove("g-overlay");
        
//         // Forçar um reflow
//         void gifContainer.offsetWidth;
        
//         // Adicionar a classe novamente para reiniciar a animação
//         gifContainer.classList.add("g-overlay");
//     }
//     document.addEventListener("DOMContentLoaded", function() {
//       restartGif();
//   });
// }





        

        
    