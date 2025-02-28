function cursorPointer(id){
    const element = document.getElementById(id);
    if(element){
        element.addEventListener("mouseenter",function(event){
            element.style.cursor = "pointer";
    })}
    else{
        element.addEventListener("mouseleave",function(event){
            element.style.cursor = "default";
        })
    }
        
}
