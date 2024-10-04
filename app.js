const resultbtn=document.getElementById(`result`);
const clearbtn=document.getElementById(`clear`);
const deletebtn=document.getElementById(`delete`);
const dividebtn=document.getElementById(`divide`);
const mulbtn=document.getElementById(`mul`);
const minusbtn=document.getElementById(`minus`);
const plusbtn=document.getElementById(`plus`);
const dotbtn=document.getElementById(`dot`);
const eqbtn=document.getElementById(`eq`);
const numbtn=document.querySelectorAll(`.number`);
let result='';
let op='';
let poper=0;
let hello="2";

//append number
const appnum=(n)=>{
    if(n==='.'&& result.includes('.')) return;
    result +=n;
    updisplay();
   

}
//add event listener to number button
numbtn.forEach(b =>{
    b.addEventListener(`click`,()=>{
       appnum(b.innerText);
    })
});

//funtion to update display
const updisplay =()=>
{
    if(op)
    {
        resultbtn.innerText=`${poper} ${op} ${result}`;
    }
    else{
        resultbtn.innerText=result;
    }
    
}

//function to select operator
const selectop =(opv)=>{
     if(result==='') return;
     if(opv!==''&& poper!=='')
     {
        calculateresult();
     }

     op=opv;
     poper=result;
     result='';
     updisplay();
}

const calculateresult=()=>{
    let eval;
    const prev=parseFloat(poper);
    const current=parseFloat(result);

    if(isNaN(prev) || isNaN (current)) return;

    switch (op) {
        case '+':
            eval=prev+current;
            break;
        case '-':
            eval=prev-current;
            break;
        case '*':
              eval=prev*current;
              break; 
        case '/':
              eval=prev/current;
              break;
        default:
            return;
    }
    result=eval.toString();
    op='';
    poper='';

};

dotbtn.addEventListener(`click`,()=>appnum('.'));
plusbtn.addEventListener(`click`,()=>selectop('+'));
minusbtn.addEventListener(`click`,()=>selectop('-'));
mulbtn.addEventListener(`click`,()=>selectop('*'));
dividebtn.addEventListener(`click`,()=>selectop('/'));
eqbtn.addEventListener(`click`,()=>{
    if(result==='') return;
    calculateresult();
    updisplay();
});

clearbtn.addEventListener(`click`,()=>{
    result=='';
    poper='';
    op='';
    updisplay();
});
deletebtn.addEventListener(`click`,()=>{
      if(op!==''&&result===''){
        op="";
        result=poper;
        updisplay();
      }
      else{
        result=result.slice(0,-1);
      updisplay();
      }
})



