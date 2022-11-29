window.onload=()=>{
    main();
}
function main(){
    const root = document.getElementById('root');
    const input = document.getElementById('input');
    document.getElementById('btn').addEventListener('click', function(){
        const bgcolor = getHexca();
        root.style.backgroundColor = bgcolor;
        input.value = bgcolor;
    })

}
function getHexca(){
    const red = Math.floor(Math.random()*1000);
    const greem = Math.floor(Math.random()*1000);
    const blue = Math.floor(Math.random()*1000);

    return `#${red.toString(16)}${greem.toString(16)}${blue.toString(16)}`;
}