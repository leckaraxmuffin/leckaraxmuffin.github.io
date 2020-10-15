let main = '<div onclick="web()"><h1 id="h1">Hallo</h1></div>';
let bye = '<div onclick="webb()"><h1 id="h1">Tschüss</h1></div>';

function web(){
    document.getElementById('body').innerHTML = main;
}

function webb(){
    document.getElementById('body').innerHTML = bye;
}
