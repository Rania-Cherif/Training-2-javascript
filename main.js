function change(number){
    if ( number==1 ){
        document.getElementById("aboutabout").style.borderBottom="none";
        document.getElementById("serviceservice").style.borderBottom="1px solid black";
        document.getElementById("about").style.display="block";
        document.getElementById("service").style.display="none";
    }else{
        document.getElementById("serviceservice").style.borderBottom="none";
        document.getElementById("aboutabout").style.borderBottom="1px solid black";
        document.getElementById("service").style.display="block";
        document.getElementById("about").style.display="none";
    }
}