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