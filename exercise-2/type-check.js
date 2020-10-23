function type_check_v1(arg, type){
    if (typeof(arg) === "object"){
        if (Array.isArray(arg)){
            if (type === "array"){
                return true;
            }
            return false; 
        }
    }
        if (typeof(arg) !== type) {
            return false;
        }
        return true; 
 }

function type_check_v2(arg, conf){
    if (typeof(arg) == conf.type && arg == conf.value){
        return true;
    }
    return false; 
}

console.log(type_check_v1({"1": "1", "2": "2", "3": "3"}, "object")); // JSON 
console.log(type_check_v1(["1", "2", "3"], "array")); // Array
