let apple = document.getElementById("T34") 
let wasClick = 0;



function change(){
    if(wasClick>0){

        apple.classList.remove('bActive')
    //apple.style.background = "red"
    wasClick = 0;                              }
    else{ 
        apple.classList.add('bActive')
//apple.style.background= 'blue' 
wasClick = 1;
    }



}
