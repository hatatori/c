
linguagens = [
    {img: "arduino", name:"arduino" },
    {img: "bootstrap", name:"bootstrap" },
    {img: "c", name:"c" },
    {img: "css", name:"css" },
    {img: "github", name:"github" },
    {img: "html5", name:"html5" },
    {img: "javascript", name:"javascript" },
    {img: "mathploit", name:"mathploitlib" },
    {img: "mysql", name:"mysql" },
    {img: "npm", name:"npm" },
    {img: "photoshop", name:"photoshop" },
    {img: "premiere", name:"premiere" },
    {img: "python", name:"python" },
    {img: "sass", name:"sass" },
    {img: "visualstudio", name:"visualstudio" },
    {img: "vuejs", name:"vuejs" }
]

extra = [
    {img:"excel", name:"Excel"},
    {img:"powerpoint", name:"Power Point"},
    {img:"word", name:"word"},
]

lista_3_obj = [
    {img:"math", name:"Matemática"},
    {img:"english", name:"English intermediate"},
]

function put(div, obj){
    for(i of obj){
        div.innerHTML += `
        <div class="flex items-center p-1">
            <img class='mr-5 h-10' src='icons/${i.img}.svg'>
            <p>${i.name}</p>
        </div>`
    }
}

put(lista_linguagens, linguagens)
put(lista_2, extra)
put(lista_3, lista_3_obj)

function openDialog(){dialog.classList.remove("hidden")}
function closeDialog(){dialog.classList.add("hidden")}

dialog_bt_close.onclick = () => closeDialog()
window.onkeyup=function(e){ if(e.key == "Escape") closeDialog()  }


