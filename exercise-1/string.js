function ucfirst(string) {
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
    const spacedString = string.split(' '); 
    return spacedString.join(''); 
}

function snake_case(string){
    if (typeof string !== "string" || string === "") return ""; 
    string = string.toLowerCase(); 
    spacedString = string.split(' ');
    return spacedString.join('_'); 
}

function leet(string){
    if (typeof string !== "string" || string === "") return "";
    var monCryptage = { "A": 4, "a": 4, "E": 3, "e": 3, "I": 1, "i": 1, "O": "0", "o": 0, "U": "(_)", "u": "(_)", "Y": 7, "y": 7};
    return string.split('').map(s => monCryptage[s] || s).join('')
}