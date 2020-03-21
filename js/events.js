
$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();

});

//define functions here

function getIt() {
  $('p').on('click', function(event) {
     alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function(event) {
    $('img').addClass("tasty");
  });
}

function pressIt() {
  $('form').on('keydown', function(event) {
    if (event.which == 71) {
      alert('Pressed the G key');
    }
  });
}

function submitIt() {
  $('form').on('submit', function(event) {
    alert("Your form is going to be submitted now.");
  });
}


