function mostrarToastErro(){
    var toastErro = document.getElementById('toast-erro');

    toastErro.style.display = 'flex';

    setTimeout(() => {
        toastErro.style.display = 'none';
    }, 2000);
}

function mostrarToastSucesso(){
    var toastSucesso = document.getElementById('toast-sucesso');

    toastSucesso.style.display = 'flex';

    setTimeout(() => {
        toastSucesso.style.display = 'none';
    }, 2000);
}
