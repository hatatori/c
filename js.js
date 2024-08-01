
// linguagens = [
//     {img: "arduino.svg"      , name:"arduino" },
//     {img: "bootstrap.svg"    , name:"bootstrap" },
//     {img: "c.svg"            , name:"c" },
//     {img: "css.svg"          , name:"css" },
//     {img: "github.svg"       , name:"github" },
//     {img: "node.svg"         , name:"node" },
//     {img: "javascript.svg"   , name:"javascript" },
//     {img: "mathploit.svg"    , name:"mathploitlib" },
//     {img: "mysql.svg"        , name:"mysql" },
//     {img: "npm.svg"          , name:"npm" },
//     {img: "photoshop.svg"    , name:"photoshop" },
//     {img: "premiere.svg"     , name:"premiere" },
//     {img: "python.svg"       , name:"python" },
//     {img: "sass.svg"         , name:"sass" },
//     {img: "visualstudio.svg" , name:"visualstudio" },
//     {img: "vuejs.svg"        , name:"vuejs" },
//     {img: "php.svg"          , name:"php" },
//     {img: "laravel.svg"      , name:"laravel" },
//     {img: "tailwindcss.svg"  , name:"tailwindcss" },
//     {img: "react.svg"        , name:"react" }
// ]

// extra = [
//     {img:"excel.svg", name:"Excel"},
//     {img:"powerpoint.svg", name:"Power Point"},
//     {img:"word.svg", name:"word"},
// ]

// lista_3_obj = [
//     {img:"math.svg", name:"Matemática"},
//     {img:"english.svg", name:"English intermediate"},
// ]

// function put(div, obj){
//     for(i of obj){
//         div.innerHTML += `
//         <div class="flex items-center p-1">
//             <img class='mr-5 h-10' src='icons/${i.img}' style='width:40px'>
//             <p>${i.name}</p>
//         </div>`
//     }
// }

// put(lista_linguagens, linguagens)
// put(lista_2, extra)
// put(lista_3, lista_3_obj)

function openDialog(){dialog.classList.remove("hidden")}
function closeDialog(){dialog.classList.add("hidden")}

dialog_bt_close.onclick = () => closeDialog()
window.onkeyup=function(e){ if(e.key == "Escape") closeDialog()  }


