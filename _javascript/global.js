setInterval(imagensFundo, 10000)

function imagensFundo() {
    var res = parseInt(Math.random(1)*5)
    var foto = ""

    if (res == 1) {

        foto = "url('_imagens/_fundo/foto-paisagem-dois.png')"

    } else if (res == 2) {

        foto = "url('_imagens/_fundo/foto-paisagem-tres.png')"

    } else if (res == 3) {

        foto = "url('_imagens/_fundo/foto-paisagem-quatro.png')"

    } else {

        foto = "url('_imagens/_fundo/foto-paisagem-cinco.png')"

    }
    document.body.style.backgroundImage = foto
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.transition = "background 1.5s";
}