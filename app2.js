const textInput =document.getElementById('text');
const notes =document.getElementById('msg');

 
 
 function display()
{

 
 
  const para =document.createElement('p');
    para.innerHTML= text.value;
  notes.appendChild(para);
  textInput.value='';
  para.addEventListener('click',function(){

    para.style.textDecoration ='line-through';
    // para.style.backgroundColor ='red';


  })

  para.addEventListener('dblclick',function(){
notes.removeChild(para);
    
  })
  
  

}

// const input =document.getElementById('btn').addEventListener('click',function(){

//     window.alert("hi");
// }
// )