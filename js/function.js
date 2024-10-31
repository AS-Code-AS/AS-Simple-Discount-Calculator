
function descuento(){
    let endInput = document.getElementById("end");
    let porInput = document.getElementById("por");
    let iqualButton = document.getElementById("iqual");
    let result = document.getElementById("result");
    
    iqualButton.addEventListener("click", function() {  
      
      let end = parseFloat(endInput.value);
      let por = parseFloat(porInput.value);
      
      if(isNaN(end) || end < 0 ){
        
        showAlertPrice();

        return; // Detiene la ejecución si es inválido
      }
      
      if(isNaN(por) || por < 0 || por > 100 ){

        showAlertDiscount();

        return;
      }
      
      let total = end - (end * (por / 100));
      total = total.toFixed(2);
      
      result.innerHTML = ` ${total}`
    
      // Desactivar los inputs y el boton por 3 segundos
      endInput.disabled = true;
      porInput.disable = true;
      iqualButton.disable = true;
      
      // Esperar 2 segundos y reactivar los inputs y el boton
      setTimeout(function(){
        endInput.disabled = false;
        porInput.disable = false;
        iqualButton.disable = false;
        
        // Limpiar los valores de los inputs
        endInput.value = "";
        porInput.value = "";
        result.innerHTML = ""; // También puedes limpiar el resultado si es necesario
      },2500);
      
    })

    function showAlertPrice(){
        Swal.fire({
            title: "Error",
            text: "Invalid Price Value",
            imageUrl: '../assets/img/error_35.png', // Ruta de tu imagen
            imageAlt: 'Eror', // Texto alternativo de la imagen
            background:"#d5dade",
            customClass:{
                title: 'my-custom-swall-title',
                htmlContainer: 'my-custom-swall-text',
                confirmButton: 'my-custom-button',
            },

            backdrop: "rgba(0, 0, 0, 0.3)",
            position: 'center', // Asegúrate de que esté centrado
          });
    }

    function showAlertDiscount(){
        Swal.fire({
            title: "Error",
            text: "Invalid Discount Value",
            imageUrl: '../assets/img/error_35.png', // Ruta de tu imagen
            imageAlt: 'Eror', // Texto alternativo de la imagen
            background:"#d5dade",
            customClass:{
                title: 'my-custom-swall-title',
                htmlContainer: 'my-custom-swall-text',
                confirmButton: 'my-custom-button',
            },

            backdrop: "rgba(0, 0, 0, 0.3)",
            position: 'center', // Asegúrate de que esté centrado
          });
    }
  }
  
  descuento()

/*

function descuento() {
    const endInput = document.getElementById("end");
    const porInput = document.getElementById("por");
    const iqualButton = document.getElementById("iqual");
    const result = document.getElementById("result");

    // Configura el evento de clic en el botón
    iqualButton.addEventListener("click", () => {
        const end = getInputValue(endInput);
        const por = getInputValue(porInput);

        if (isInputValid(end, por)) {
            const total = calculateDiscount(end, por);
            displayResult(total);
            disableInputs(endInput, porInput, iqualButton);
            resetInputs(endInput, porInput, result);
        }
    });
}

// Función para obtener y validar el valor de entrada
function getInputValue(input) {
    const value = parseFloat(input.value);
    return isNaN(value) ? null : value;
}

// Función para validar las entradas
function isInputValid(end, por) {
    if (end === null || end < 0) {
        showAlert("Invalid Price Value");
        return false;
    }
    if (por === null || por < 0 || por > 100) {
        showAlert("Invalid Discount Value");
        return false;
    }
    return true;
}

// Función para calcular el precio final después del descuento
function calculateDiscount(end, por) {
    const total = end - (end * (por / 100));
    return total.toFixed(2);
}

// Función para mostrar el resultado en la UI
function displayResult(total) {
    const result = document.getElementById("result");
    result.innerHTML = `${total}`;
}

// Función para deshabilitar los inputs y el botón
function disableInputs(endInput, porInput, iqualButton) {
    endInput.disabled = true;
    porInput.disabled = true;
    iqualButton.disabled = true;

    // Rehabilita los inputs después de 2.5 segundos
    setTimeout(() => {
        endInput.disabled = false;
        porInput.disabled = false;
        iqualButton.disabled = false;
    }, 2500);
}

// Función para reiniciar los inputs y el resultado
function resetInputs(endInput, porInput, result) {
    setTimeout(() => {
        endInput.value = "";
        porInput.value = "";
        result.innerHTML = "";
    }, 2500);
}

// Función para mostrar una alerta
function showAlert(message) {
    Swal.fire({
        title: "Error",
        text: message,
        imageUrl: '../assets/img/error_35.png', // Ruta de tu imagen
        imageAlt: 'Error', // Texto alternativo de la imagen
        background: "#d5dade",
        customClass: {
            title: 'my-custom-swall-title',
            htmlContainer: 'my-custom-swall-text',
            confirmButton: 'my-custom-button',
        },
        backdrop: "rgba(0, 0, 0, 0.3)",
        position: 'center', // Asegúrate de que esté centrado
    });
}

// Llama a la función principal
descuento();

*/