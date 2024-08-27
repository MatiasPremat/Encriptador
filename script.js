//VARIABLES
const hasSpecialCharacters = /[!@#$%^&*(),.?":{}|<>]/g; // Detecta caracteres especiales
const hasNumbers = /\d/; // Detecta números
const hasMayus = /[A-Z]/; // Detecta mayúsculas
const hasAccent = /[áéíóúÁÉÍÓÚñÑ]/; //Detecta tildes

//FUNCIONES

function encrypt(){
    const text = document.getElementById("text").value;
    
    document.getElementById("copied-text").innerHTML = "";
            
            if(text.trim() === ""){
                alert("Error: El texto está vacío.");
                return;
            }

            if (hasSpecialCharacters.test(text)) {
                alert("Error: El texto contiene caracteres especiales.");
                return;
            } else if (hasNumbers.test(text)) {
                alert("Error: El texto contiene números.");
                return;
            } else if (hasMayus.test(text)) {
                alert("Error: El texto contiene mayúsculas.");
                return;
            } else if(hasAccent.test(text)){
                alert("Error: El texto contiene tildes.");
                return;
            }

        let encryptedText = text.replace(/e/g, "enter")
                                .replace(/i/g, "imes")
                                .replace(/a/g, "ai")
                                .replace(/o/g, "ober")
                                .replace(/u/g, "ufat");
            

        document.getElementById("result-text").value = encryptedText;
}

function decrypt(){
    const text = document.getElementById("text").value;
    
    document.getElementById("copied-text").innerHTML = "";

    if(text.trim() === ""){
        alert("Error: El texto está vacío.");
        return;
    }

    if (hasSpecialCharacters.test(text)) {
        alert("Error: El texto contiene caracteres especiales.");
        return;
    } else if (hasNumbers.test(text)) {
        alert("Error: El texto contiene números.");
        return;
    } else if (hasMayus.test(text)) {
        alert("Error: El texto contiene mayúsculas.");
        return;
    } else if(hasAccent.test(text)){
        alert("Error: El texto contiene tildes.");
        return;
    }

    let decryptedText = text.replace(/enter/g, "e")
                            .replace(/imes/g, "i")
                            .replace(/ai/g, "a")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u");

    document.getElementById("result-text").value = decryptedText;
}

function copy(){
    const resultText = document.getElementById("result-text").value;
    const copiedText = document.getElementById("copied-text");

    navigator.clipboard.writeText(resultText)
        .then(() => {
            copiedText.innerHTML = "Copiado!"
        })
        .catch(err => {
            console.error('Error al copiar al portapapeles:', err)
        })

}