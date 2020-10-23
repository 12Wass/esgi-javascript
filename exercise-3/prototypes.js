String.prototype.ucfirst = function () {
    let value = this.valueOf(); 
    if (typeof value !== "string" || value === "") return ""; 
    return this.valueOf().charAt(0).toUpperCase() + this.valueOf().slice(1); 
}

String.prototype.capitalize = function (){
    let value = this.valueOf();
    if (typeof value !== "string" ||value === "") return ""; 
    const splitString = value.toLowerCase().split(' '); 
    for (let i = 0; i < splitString.length; i++){
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1); 
    }
    return splitString.join(' '); 
}

String.prototype.camelCase = function (){
    let value = this.valueOf();
    if (typeof value !== "string" ||value === "") return ""; 
    value = value.capitalize();
    const spacedString = value.split(' '); 
    return spacedString.join(''); 
}

String.prototype.snake_case = function (){
    let value = this.valueOf();
    if (typeof value !== "string" ||value === "") return ""; 
    value = value.toLowerCase(); 
    spacedString = value.split(' ');
    return spacedString.join('_'); 
}

String.prototype.leet = function (){
    let value = this.valueOf(); 
    if (typeof value !== "string" || value === "") return "";
    var monCryptage = { "A": 4, "a": 4, "E": 3, "e": 3, "I": 1, "i": 1, "O": "0", "o": "0", "U": "(_)", "u": "(_)", "Y": 7, "y": 7};
    return value.split('').map(s => monCryptage[s] || s).join('')
}

String.prototype.verlan = function (){
    let value = this.valueOf();
    if (typeof value !== "string" || value === "") return "";
    return value
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

String.prototype.yoda = function (){
    let value = this.valueOf(); 
    if (typeof value !== "string" || value === "") return "";
    return value.split(" ").reverse().join(" "); 
}

String.prototype.vig = function (code){
    let string = this.valueOf(); 
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

Object.prototype.prop_access = function (path){
    let obj = this; 
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

const prairie = { animal : {type: { name : "chien" }}}

console.log(prairie.prop_access("animal.type.name"));