function type_check_v1(arg, type){
    if (typeof(arg) === "object"){
        if (type === "array") return Array.isArray(arg); 
        if (type === "null") return val === null;
        if (type === "function") return val instanceof Function; 
    }
    return typeof val === type; 
 }

function type_check_v2(arg, conf){
    if (typeof(arg) === "object"){
        arg.forEach(a => {
            if (typeof(conf) === "enum"){
                conf.forEach(en => {
                    if (en === arg){
                        return true;
                    }
                });
            }
        });
    }
    if (typeof(arg) == conf.type && arg == conf.value){
        return true;
    }
    return false; 
}

console.log(type_check_v1(undefined, "undefined")); // JSON 

console.log(type_check_v2()); 