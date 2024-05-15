// Formatador do Celular
const celMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
}
// Formatador do Residencial
const resdMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
}
// Formatador da Matricula
const matricula_Mask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"$1.$2")
    value = value.replace(/(\d)(\d{1})$/,"$1-$2")
    return value
}
// Formatador do CEP
const cep_Mask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"$1 $2")
    value = value.replace(/(\d)(\d{3})$/,"$1-$2")
    return value
}
// Fim dos Formatadores

// Manipulador de evento para input do CPF
function mascaraCPFInput(i) {
    var v = i.value;

    if (!/[0-9a-zA-Z]/.test(v[v.length - 1])) { // impede entrar outro caractere que não seja número ou letra
        i.value = v.substring(0, v.length - 1);
        return;
    }

    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
};
// Manipulador de evento para input do RG
function mascaraRGInput(i) {
    var v = i.value;

    if (!/[0-9a-zA-Z]/.test(v[v.length - 1])) { // impede entrar outro caractere que não seja número ou letra
        i.value = v.substring(0, v.length - 1);
        return;
    }

    i.setAttribute("maxlength", "12");
    if (v.length == 2 || v.length == 6) i.value += ".";
    if (v.length == 10) i.value += "-";
};
// Manipulador de evento para input do NIT(PIS/PASEP)
function mascaraNITInput(i) {
    var v = i.value;

    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 9) i.value += ".";
    if (v.length == 12) i.value += "-";
};
// Manipulador de evento para input dos Telefones
// Celular
const mascara_telefone_celular = (event) => {
    let input = event.target
    input.value = celMask(input.value)
};
// Residencial
const mascara_telefone_residencial = (event) => {
    let input = event.target
    input.value = resdMask(input.value)
};
// Manipulador de evento para input de Matrícula
const mascara_matricula = (event) => {
    let input = event.target
    input.value = matricula_Mask(input.value)
};
// Manipulador de evento para input de CEP
const mascara_cep = (event) => {
    let input = event.target
    input.value = cep_Mask(input.value)
};
// Fim dos Manipuladores de evento