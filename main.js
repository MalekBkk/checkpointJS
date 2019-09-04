function Bold() 
{
var verif=document.querySelector("#texto").style.fontWeight ; 
 if(verif == 'normal')
    {
        document.querySelector("#texto").style.fontWeight = 'bold';
    }
 else
    {
        document.querySelector("#texto").style.fontWeight = 'normal';
    }
}

function italique() 
{  var verifit=document.getElementById("texto").style.fontStyle
    if (verifit == 'normal')
    {
    document.getElementById ("texto").style.fontStyle = 'italic';}
     else
     document.getElementById ("texto").style.fontStyle = 'normal';


}
function underline() 
{
    var verifun=document.getElementById("texto").style.textDecoration;
    if (verifun == 'underline')
    {
        document.getElementById("texto").style.textDecoration = 'none';
 
    }
    else
    document.getElementById("texto").style.textDecoration = 'underline';
}
var text = document.getElementById("texto");

function changesize() {
    var taille = document.getElementById("taille");
    text.style.fontSize = taille.value ;
    
  }

 function changefont () {
    var font = document.getElementById("font");
    text.style.fontFamily = font.value ;  
 } 


