const notes=[];
let noteCount=0;

const titleOnblur=()=>{
    document.getElementById("note").focus();
}

let newDate=new Date();
document.getElementById("timer").innerHTML=`${newDate.toLocaleTimeString()} ${newDate.toDateString()}`;

const timerFun=()=>{
    let newDate=new Date();
    document.getElementById("timer").innerHTML=`${newDate.toLocaleTimeString()} ${newDate.toDateString()}`;
}
let interval;
interval=setInterval(timerFun, 1000);

const titleClickFun=()=>{
    // to convert collection into an array three ways :-
    // 1.) Array.from(document.getElementsByClassName("liBtn")).forEach(...) 
    // 2.) documnet.querySelectorAll(.liBtn).forEach(...)
    // 3.) [...document.getElementsByClassName("liBtn")].forEach(...)
    [...document.getElementsByClassName("liBtn")].forEach(ele=>{
        ele.addEventListener("click",(event)=>{
            let titleClick = event.target.id;
            document.getElementById("title").innerHTML = JSON.parse(localStorage.getItem(titleClick)).title;
            console.log(document.getElementById("title").innerHTML);
            document.getElementById("note").innerHTML = JSON.parse(localStorage.getItem(titleClick)).note;
            console.log(document.getElementById("note").innerHTML);
            document.getElementById("timer").innerHTML = JSON.parse(localStorage.getItem(titleClick)).timer;
            console.log(document.getElementById("timer").innerHTML);
            clearInterval(interval);
        })
    })
}
const addNote=()=>{
    const title=document.getElementById("title").value;
    const note=document.getElementById("note").value;
    const timer=document.getElementById("timer").innerHTML;
    console.log(timer);

    notes.push({title, note, timer});
    
    localStorage.setItem(localStorage.length, JSON.stringify(notes[noteCount]));
    console.log(notes); 

    let li=document.createElement("li");
    li.innerHTML+=`<button class="liBtn">${JSON.parse(localStorage.getItem(localStorage.length-1)).title}</button>`;
    document.getElementById("titles").insertBefore(li, document.getElementById("titles").firstElementChild);

    noteCount++;
    window.location.reload();
    document.getElementById("title").focus();
}

for(let i=0;i<localStorage.length;i++){
    let li=document.createElement("li");
    li.innerHTML+=`<button class="liBtn" id=${i}>${JSON.parse(localStorage.getItem(i)).title}</button>`;
    document.getElementById("titles").insertBefore(li, document.getElementById("titles").firstElementChild);
}

titleClickFun();

document.getElementById("title").addEventListener("blur", titleOnblur);