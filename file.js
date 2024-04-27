let btn=document.querySelectorAll('.circle');
let reset=document.querySelector('#reset');
let msgcontainer=document.querySelector('.msgwin');
let msg=document.querySelector("#msg");
let newbtn=document.querySelector("#newgm");
let X=true;

let arr=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


const resett=()=>{
    X=true;
    enable();
    msgcontainer.classList.add("hide");
}


btn.forEach((box) => {
    box.addEventListener("click", () => {
        if(X){
            box.innerText="X";
            X=false;
        }else{
            box.innerText="O";
            X=true;
        }
        box.disabled=true;

        winner();
    });
});


const disble=()=>{
    for(boxx of btn){
        boxx.disabled=true;
    }
}

const enable=()=>{
    for(boxx of btn){
        boxx.disabled=false;
        boxx.innerText='';
    }
}


const gamewinner=(win) =>{
    msg.innerText = `WINNER IS  ${win}`;

    msgcontainer.classList.remove('hide');
    disble();
}
//p=patterm
const winner=() =>{
    for(let p of arr){
        let pos1=btn[p[0]].innerText;
        let pos2=btn[p[1]].innerText;
        let pos3=btn[p[2]].innerText;

        if(pos1 != "" && pos2 != "" &&  pos3 != ""){
            if(pos1 ===  pos2 && pos2 === pos3){
                gamewinner(pos1);
            }
        }

    }  
}

newbtn.addEventListener("click",resett);
reset.addEventListener("click",resett);


