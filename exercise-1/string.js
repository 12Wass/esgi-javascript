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
    var monCryptage = { "A": 4, "a": 4, "E": 3, "e": 3, "I": 1, "i": 1, "O": "0", "o": "0", "U": "(_)", "u": "(_)", "Y": 7, "y": 7};
    return string.split('').map(s => monCryptage[s] || s).join('')
}

function verlan(string){
    if (typeof string !== "string" || string === "") return "";
    return string
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

function yoda(string){
    if (typeof string !== "string" || string === "") return "";
    return string.split(" ").reverse().join(" "); 
}

function vig(string, code){
    if (typeof string !== "string") return ""; 
    if (string.length === 0) return string;

    while (code.length < string.length){
        code += code;
    };
    code = code.substr(0, string.length); 
    let codeIndex = 0; 

    return string.split("").map((letter, index) => {
        letter = letter.toLowerCase(); 
        const aCode = "a".charCodeAt(0);
        const letterNumber = letter.charCodeAt(0) - aCode; // [0 - 25]
        
        if (letterNumber < 0 || letterNumber > 25) return letter;
        const codeNumber = code.charCodeAt(codeIndex) - aCode;
        codeIndex++; 

        return String.fromCharCode(((letterNumber + codeNumber) % 26) + aCode);
    }).join(""); 
}

function prop_access(obj, path){
    if (typeof(obj) != "object" || obj == null) return path+" not exist";
    if (typeof(path) != "string" || path === "") return obj; 
    let pathSplitted = path.split(".");
    for (let elem of pathSplitted) {
        if (typeof(obj[elem]) == "undefined") {
            return path+" not exist"; 
        }
        obj = obj[elem];
    }
    return obj; 
}

function type_check_v1(arg, type){
    if (typeof(arg) !== type) {
        return false;
    }
    return true; 
}

function type_check_v2(){}