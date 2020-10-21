function ucFirst(string) {
    if (typeof string !== "string" || string === "") return ""; 
    return string.charAt(0).toUpperCase() + string.slice(1); 
}

function capitalize(string){
    if (typeof string !== "string" || string === "") return ""; 
    const splitString = string.toLowerCase().split(' '); 
    for (let i = 0; i < splitString.length; i++){
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1); 
    }
    return splitString.join(' '); 
}

function camelCase(string){
    if (typeof string !== "string" || string === "") return ""; 
    string = capitalize(string);
    spacedString = capitalize(string.split(' ')); 
    return spacedString.join(''); 
}

