let all = document.getElementById('all')
 let krug = document.getElementById('btnColor')
 let poiu = document.getElementById('poiu')
 let lk = document.getElementById('remp')
 let ljk = document.getElementById('poer')
 let wasClick =0;
function changeColor() 
{
    if (wasClick ==0) {
        all.style.background="red"
        krug.style.background="orange"  
        krug.style.transform= "translateX(25px)"
        poiu.style.background="white" 
        lk.style.background="white" 
        ljk.style.color="black"
         wasClick =1;
    } else{
        all.style.background="green"
        krug.style.background="white"  
        krug.style.transform= "translateX(0px)"
        poiu.style.background="#1e1f20be" 
        lk.style.background="#808080" 
        ljk.style.color="red"
        wasClick =0;
    }
   
}
