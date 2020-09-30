setInterval(imagensFundo, 10000)

function imagensFundo() {
    var res = parseInt(Math.random(1)*5)

    if (res == 1) {

        document.body.style.background = "url('../_imagens/_fundo/foto-paisagem-cinco.png') no-repeat"

    } else if (res == 2) {

        document.body.style.background = "url('../_imagens/_fundo/foto-paisagem-dois.png') no-repeat"

    } else if (res == 3) {

        document.body.style.background = "url('../_imagens/_fundo/foto-paisagem-tres.png') no-repeat"

    } else if (res == 4) {

        document.body.style.background = "url('../_imagens/_fundo/foto-paisagem-quatro.png') no-repeat"

    } else {

        document.body.style.background = "url('../_imagens/_fundo/foto-paisagem-cinco.png') no-repeat"

    }

    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.transition = "background 1.5s";
}