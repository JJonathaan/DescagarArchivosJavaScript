// //Función para confirmar la descarga.
function mensajeAlertaDescarga() {
    const descarAlert = document.getElementById('descarga_Alert');
    descarAlert.addEventListener("click", () => {
        const confirmar = window.confirm('¿Deseas descargar el documento?');
        if (confirmar) {
            downloadFile("documentos/DocumentoDescarga.txt");
        }       
    });    
    };
    //Iniciar el boton de descarga.
    mensajeAlertaDescarga();
    
    //Función para iniciar la descarga de un archivo.
    function downloadFile(filePath) {
        const link = document.createElement('a');
        link.href = filePath;
        link.target = '_blank'; 
        link.download = filePath.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    
    