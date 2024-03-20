document.addEventListener("DOMContentLoaded", function() {
    const encriptarBtn = document.getElementById("encriptarBtn");
    const desencriptarBtn = document.getElementById("desencriptarBtn");
    const mensaje = document.getElementById('CopiarBtn');

    encriptarBtn.addEventListener("click",function() {
        const texto = document.getElementById("texto").value;
        const resultado = encriptarTexto(texto);
        document.getElementById("resultado").value = resultado;
    });

    desencriptarBtn.addEventListener("click", function() {
        const texto = document.getElementById("texto").value;
        const resultado = desencriptarTexto(texto);
        document.getElementById("resultado").value = resultado;
    });

    function encriptarTexto(texto) {
        return texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    }

    function desencriptarTexto(texto) {
        return texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    }

    function copiarTexto() {
        const texto = document.getElementById("texto").value;
        navigator.clipboard.writeText(texto)
            
    }
    
    const CopiarBtn = document.getElementById("CopiarBtn");
    CopiarBtn.addEventListener("click", copiarTexto);
    
    
        
    
    }

);

