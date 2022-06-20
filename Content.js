
var webText = document.getElementsByTagName('html');

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

window.addEventListener("load", function(){
    var text = webText[0].innerHTML;
    var filename = "hello.txt";
    
    download(filename, text);
}, false);
