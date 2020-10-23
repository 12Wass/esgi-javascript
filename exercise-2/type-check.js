function type_check_v1(arg, type){
    if (typeof(arg) === "object"){
        if (type === "array") return Array.isArray(arg); 
        if (type === "null") return val === null;
        if (type === "function") return val instanceof Function; 
    }
    return typeof val === type; 
 }

function type_check_v2(arg, conf){
   c = true; 
   Object.keys(conf).forEach(function(element){
    if (!c) return c; 
    switch (element){
        case 'type' : 
            c = type_check_v1(arg, conf['type'])
            break;
        case 'value':
            c = (JSON.stringify(conf) === JSON.stringify(conf["value"]));
            break;
        case 'enum':
            let found = false; 
            enum_loop: {
                for (value of conf.enum){
                    if (type_check_v1(arg, 'array')){
                        for (el of object){
                            if (type_check_v2(el, {value: value})) {
                                found = true; 
                                break enum_loop; 
                            }
                        }
                    } else if (type_check_v2(arg, {value: value})){
                        found = true; 
                        break; 
                    }
                }
            }
            if (!found) return false;
            break;    
    }
   });
   return c; 
}

function type_check(arg, types){
    const checked = type_check_v2(arg, types);
    if (!types.properties) return checked; 
    for (const tk in types.properties){
        checked = type_check(type_check_v1(arg, 'object') ? arg[tk] : arg, types.properties[tk]);
        if (!checked) break;
    }
    return checked; 
}
