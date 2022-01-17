
function plus(){
    var input1=document.getElementById("first1").value;
    var input2=document.getElementById("sec1").value;
    var result=+input1+ +input2;
    document.getElementById("res1").innerHTML=result;  
    
}
function minus(){
    var input1=document.getElementById("first2").value;
    var input2=document.getElementById("sec2").value;
    var result=input1-input2;
    document.getElementById("res2").innerHTML=result;  

}
function umnoshit(){
    var input1=document.getElementById("first3").value;
    var input2=document.getElementById("sec3").value;
    var result=+input1*input2;
    document.getElementById("res3").innerHTML=result;  

}
function rasdelit(){
    var input1=document.getElementById("first4").value;
    var input2=document.getElementById("sec4").value;
    var result=+input1/input2;
    document.getElementById("res4").innerHTML=result;  
}
function clear1(){
    document.getElementById("res1").innerHTML='';
    document.getElementById("first1").value='';
    document.getElementById("sec1").value='';
}
function clear2(){
    document.getElementById("res2").innerHTML='';
    document.getElementById("first2").value='';
    document.getElementById("sec2").value='';
}
function clear3(){
    document.getElementById("res3").innerHTML='';
    document.getElementById("first3").value='';
    document.getElementById("sec3").value='';
}
function clear4(){
    document.getElementById("res4").innerHTML='';
    document.getElementById("first4").value='';
    document.getElementById("sec4").value='';
}
function clear5(){
    document.getElementById("res1").innerHTML='';
    document.getElementById("first1").value='';
    document.getElementById("sec1").value='';
    document.getElementById("res2").innerHTML='';
    document.getElementById("first2").value='';
    document.getElementById("sec2").value='';
    document.getElementById("res3").innerHTML='';
    document.getElementById("first3").value='';
    document.getElementById("sec3").value='';
    document.getElementById("res4").innerHTML='';
    document.getElementById("first4").value='';
    document.getElementById("sec4").value='';
}