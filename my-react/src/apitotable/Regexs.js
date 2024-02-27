export const isAlphabatic = (str) =>{

    return  /^[a-zA-Z]+$/.test(str);
}

export const isNumerical = (str) =>{

    return /^[0-9]+$/.test(str);
}