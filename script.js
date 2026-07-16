function openWindow(app){

let win=document.getElementById("window");
let content=document.getElementById("content");

win.style.display="block";


if(app=="Files"){

content.innerHTML=
`
<h2>📁 File Manager</h2>
<br>
📄 Documents<br>
🎮 Games<br>
💻 Projects
`;

}


else if(app=="Browser"){

content.innerHTML=
`
<h2>🌐 MANTRA Browser</h2>
<br>
<input placeholder="Search Internet">
`;

}


else if(app=="Terminal"){

content.innerHTML=
`
<h2>💻 Terminal</h2>
<br>
> System Online<br>
> Security Active<br>
> MANTRA Core Running
`;

}


else if(app=="Settings"){

content.innerHTML=
`
<h2>⚙️ Settings</h2>
<br>
Theme: Dark<br>
Version: 1.2
`;

}


}



function closeWindow(){

document.getElementById("window").style.display="none";

}



function startMenu(){

let menu=document.getElementById("startmenu");

menu.style.display=
menu.style.display=="block"?
"none":"block";

}



setInterval(()=>{

document.getElementById("time").innerHTML=
new Date().toLocaleTimeString();

},1000);




// Window Drag

let win=document.getElementById("window");

let drag=false;

let x,y;


win.addEventListener("mousedown",(e)=>{

drag=true;

x=e.clientX-win.offsetLeft;
y=e.clientY-win.offsetTop;

});


document.addEventListener("mousemove",(e)=>{

if(drag){

win.style.left=
(e.clientX-x)+"px";

win.style.top=
(e.clientY-y)+"px";

}

});


document.addEventListener("mouseup",()=>{

drag=false;

});