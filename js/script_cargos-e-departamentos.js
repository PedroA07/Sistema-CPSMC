function exibir_ocultar(val) {
    if(val.value == 'cargo_selecao') {
        document.getElementById('cargo_1_ativo').style.display = 'none';
        document.getElementById('cargo_2_inicio').style.display = 'none';
        document.getElementById('cargo_2_fim').style.display = 'none';
        document.getElementById('cargo_3_inicio').style.display = 'none';
        document.getElementById('cargo_3_fim').style.display = 'none';
    } else if (val.value == 'cargo_escriturario') {
        document.getElementById('cargo_1_ativo').style.display = 'block';
        document.getElementById('cargo_2_inicio').style.display = 'none';
        document.getElementById('cargo_2_fim').style.display = 'none';
        document.getElementById('cargo_3_inicio').style.display = 'none';
        document.getElementById('cargo_3_fim').style.display = 'none';
    } else if (val.value == 'cargo_estagiario') {
        document.getElementById('cargo_1_ativo').style.display = 'none';
        document.getElementById('cargo_2_inicio').style.display = 'block';
        document.getElementById('cargo_2_fim').style.display = 'block';
        document.getElementById('cargo_3_inicio').style.display = 'none';
        document.getElementById('cargo_3_fim').style.display = 'none';
    } else {
        document.getElementById('cargo_1_ativo').style.display = 'none';
        document.getElementById('cargo_2_inicio').style.display = 'none';
        document.getElementById('cargo_2_fim').style.display = 'none';
        document.getElementById('cargo_3_inicio').style.display = 'block';
        document.getElementById('cargo_3_fim').style.display = 'block';
    }
};

function exibir_ocultar_setor(val){
    if (val.value == 'selecao'){
        document.getElementById('setor').style.display = 'none';
    } else if (val.value == 'administracao'){
        document.getElementById('setor').style.display = 'block';
        document.getElementById('starq').style.display = 'block';
        document.getElementById('aj').style.display = 'none';
        document.getElementById('at').style.display = 'none';
        document.getElementById('sas').style.display = 'none';
        document.getElementById('staf').style.display = 'none';
        document.getElementById('stte').style.display = 'none';
        document.getElementById('stod').style.display = 'none';
        document.getElementById('stpr').style.display = 'block';
        document.getElementById('stpd').style.display = 'block';
        document.getElementById('strh').style.display = 'block';
        document.getElementById('stsg').style.display = 'none';
    } else if (val.value == 'beneficios'){
        document.getElementById('setor').style.display = 'block';
        document.getElementById('starq').style.display = 'none';
        document.getElementById('aj').style.display = 'none';
        document.getElementById('at').style.display = 'none';
        document.getElementById('sas').style.display = 'none';
        document.getElementById('staf').style.display = 'block';
        document.getElementById('stte').style.display = 'none';
        document.getElementById('stod').style.display = 'none';
        document.getElementById('stpr').style.display = 'none';
        document.getElementById('stpd').style.display = 'none';
        document.getElementById('strh').style.display = 'none';
        document.getElementById('stsg').style.display = 'none';
    } else if (val.value == 'contabilidade'){
        document.getElementById('setor').style.display = 'none';
        document.getElementById('starq').style.display = 'none';
        document.getElementById('aj').style.display = 'none';
        document.getElementById('at').style.display = 'none';
        document.getElementById('sas').style.display = 'none';
        document.getElementById('staf').style.display = 'none';
        document.getElementById('stte').style.display = 'none';
        document.getElementById('stod').style.display = 'none';
        document.getElementById('stpr').style.display = 'none';
        document.getElementById('stpd').style.display = 'none';
        document.getElementById('strh').style.display = 'none';
        document.getElementById('stsg').style.display = 'none';
    } else if (val.value == 'financas'){
        document.getElementById('setor').style.display = 'block';
        document.getElementById('starq').style.display = 'none';
        document.getElementById('aj').style.display = 'none';
        document.getElementById('at').style.display = 'none';
        document.getElementById('sas').style.display = 'none';
        document.getElementById('staf').style.display = 'none';
        document.getElementById('stte').style.display = 'block';
        document.getElementById('stod').style.display = 'none';
        document.getElementById('stpr').style.display = 'none';
        document.getElementById('stpd').style.display = 'none';
        document.getElementById('strh').style.display = 'none';
        document.getElementById('stsg').style.display = 'none';
    } else if (val.value == 'gestao_de_qualidade'){
        document.getElementById('setor').style.display = 'none';
        document.getElementById('starq').style.display = 'none';
        document.getElementById('aj').style.display = 'none';
        document.getElementById('at').style.display = 'none';
        document.getElementById('sas').style.display = 'none';
        document.getElementById('staf').style.display = 'none';
        document.getElementById('stte').style.display = 'none';
        document.getElementById('stod').style.display = 'none';
        document.getElementById('stpr').style.display = 'none';
        document.getElementById('stpd').style.display = 'none';
        document.getElementById('strh').style.display = 'none';
        document.getElementById('stsg').style.display = 'none';
    } else if (val.value == 'superintendencia'){
        document.getElementById('setor').style.display = 'block';
        document.getElementById('starq').style.display = 'none';
        document.getElementById('aj').style.display = 'block';
        document.getElementById('at').style.display = 'block';
        document.getElementById('sas').style.display = 'none';
        document.getElementById('staf').style.display = 'none';
        document.getElementById('stte').style.display = 'none';
        document.getElementById('stod').style.display = 'none';
        document.getElementById('stpr').style.display = 'none';
        document.getElementById('stpd').style.display = 'none';
        document.getElementById('strh').style.display = 'none';
        document.getElementById('stsg').style.display = 'none';
    } else if (val.value == 'materiais'){
        document.getElementById('setor').style.display = 'block';
        document.getElementById('starq').style.display = 'none';
        document.getElementById('aj').style.display = 'none';
        document.getElementById('at').style.display = 'none';
        document.getElementById('sas').style.display = 'none';
        document.getElementById('staf').style.display = 'none';
        document.getElementById('stte').style.display = 'none';
        document.getElementById('stod').style.display = 'none';
        document.getElementById('stpr').style.display = 'none';
        document.getElementById('stpd').style.display = 'none';
        document.getElementById('strh').style.display = 'none';
        document.getElementById('stsg').style.display = 'block';
    } else if (val.value == 'procuradoria_juridica'){
        document.getElementById('setor').style.display = 'none';
        document.getElementById('starq').style.display = 'none';
        document.getElementById('aj').style.display = 'none';
        document.getElementById('at').style.display = 'none';
        document.getElementById('sas').style.display = 'none';
        document.getElementById('staf').style.display = 'none';
        document.getElementById('stte').style.display = 'none';
        document.getElementById('stod').style.display = 'none';
        document.getElementById('stpr').style.display = 'none';
        document.getElementById('stpd').style.display = 'none';
        document.getElementById('strh').style.display = 'none';
        document.getElementById('stsg').style.display = 'none';
    } else if (val.value == 'saude'){
        document.getElementById('setor').style.display = 'block';
        document.getElementById('starq').style.display = 'none';
        document.getElementById('aj').style.display = 'none';
        document.getElementById('at').style.display = 'none';
        document.getElementById('sas').style.display = 'block';
        document.getElementById('staf').style.display = 'none';
        document.getElementById('stte').style.display = 'none';
        document.getElementById('stod').style.display = 'block';
        document.getElementById('stpr').style.display = 'none';
        document.getElementById('stpd').style.display = 'none';
        document.getElementById('strh').style.display = 'none';
        document.getElementById('stsg').style.display = 'none';
    }
};