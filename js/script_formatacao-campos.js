// Máscara de CPF
function mascara_cpf(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
 
}

// Máscara de RG
function mascara_rg(i) {
    var v = i.value;

    if (!/[0-9a-zA-Z]/.test(v[v.length - 1])) { // impede entrar outro caractere que não seja número ou letra
        i.value = v.substring(0, v.length - 1);
        return;
    }

    i.setAttribute("maxlength", "12");
    if (v.length == 2 || v.length == 6) i.value += ".";
    if (v.length == 10) i.value += "-";
}
// Máscara do NIT(PIS/PASEP)
function mascara_nit(i) {
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "17");
    if (v.length == 2 || v.length == 6) i.value += ".";
    if (v.length == 10) i.value += "/";
    if (v.length == 15) i.value += "-";
}

// Máscara de Telefones
//Celular
const mascara_telefone_celular = (event) => {
    let input = event.target
    input.value = celMask(input.value)
  }
  
  const celMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
}
// Residencial
const mascara_telefone_residencial = (event) => {
    let input = event.target
    input.value = resdMask(input.value)
  }
  
  const resdMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
}