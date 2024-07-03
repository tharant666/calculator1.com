var input=document.getElementById("one")
var input1=document.getElementById("two")
var input2=document.getElementById("three")
var input3=document.getElementById("four")
var input4=document.getElementById("one1")
var input5=document.getElementById("two1")
var input6=document.getElementById("three1")
var input7=document.getElementById("four1")
var input8=document.getElementById("one2")
var input9=document.getElementById("two2")
var input10=document.getElementById("three2")
var input11=document.getElementById("four2")
var input12=document.getElementById("one3")
var input13=document.getElementById("two3")
var input14=document.getElementById("three3")
var input15=document.getElementById("four3")
var input16=document.getElementById("one4")
var input17=document.getElementById("two4")
var input18=document.getElementById("three4")
var input19=document.getElementById("five4")
var out=document.getElementById("input1")
var put=document.getElementById("result")

function output(){
     out.textContent+=input.value
    
}
function output1(){
    out.textContent+=input1.value
    
}
function output2(){
    out.textContent+=input2.value
    
}
function output3(){
    out.textContent+=input3.value
    
}
function output4(){
    out.textContent+=input4.value
    result.textContent=eval(out.textContent)
}
function output5(){
    out.textContent+=input5.value
    result.textContent=eval(out.textContent)
}
function output6(){
    out.textContent+=input6.value
    result.textContent=eval(out.textContent)
}
function output7(){
    out.textContent+=input7.value
    
}
function output8(){
    out.textContent+=input8.value
    result.textContent=eval(out.textContent)
}
function output9(){
    out.textContent+=input9.value
    result.textContent=eval(out.textContent)
}
function output10(){
    out.textContent+=input10.value
    result.textContent=eval(out.textContent)
}
function output11(){
    out.textContent+=input11.value
    
}
function output12(){
    out.textContent+=input12.value
    result.textContent=eval(out.textContent)
}
function output13(){
    out.textContent+=input13.value
    result.textContent=eval(out.textContent)

}
function output14(){
    out.textContent+=input14.value
    result.textContent=eval(out.textContent)
    
}
function output15(){
    out.textContent+=input15.value
    
}
function output16(){
    out.textContent+=input16.value
    result.textContent=eval(out.textContent)
}
function output17(){
    out.textContent+=input17.value
    result.textContent=eval(out.textContent)
}
function output18(){
    out.textContent+=input18.value
    result.textContent=eval(out.textContent)
}
function output19(){
    out.textContent+=input19.value
    
}
result.textContent=eval(out.textContent)
function calaulator(){
    try{
        out.textContent=eval(out.textContent)
        result.textContent="";
    }
    catch(err){}
}
function delet(){
    out.textContent=out.textContent.slice(0,-1)
    result.textContent=result.textContent.slice(0,-1)
}
