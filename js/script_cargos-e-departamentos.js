// Função para mostrar apenas as áreas necessárias do seletor correspondente
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
    } else if (val.value == 'cargo_aprendiz'){
        document.getElementById('cargo_1_ativo').style.display = 'none';
        document.getElementById('cargo_2_inicio').style.display = 'none';
        document.getElementById('cargo_2_fim').style.display = 'none';
        document.getElementById('cargo_3_inicio').style.display = 'block';
        document.getElementById('cargo_3_fim').style.display = 'block';
    }else {
        document.getElementById('cargo_1_ativo').style.display = 'block';
        document.getElementById('cargo_2_inicio').style.display = 'none';
        document.getElementById('cargo_2_fim').style.display = 'none';
        document.getElementById('cargo_3_inicio').style.display = 'none';
        document.getElementById('cargo_3_fim').style.display = 'none';
    }
};

// Função para ocultar setores
function exibir_ocultar_setor(val) {
  const setorSelect = document.getElementById('setor');
  const setorOptions = setorSelect.getElementsByTagName('option');

  // Redefinir o valor do elemento select setor
  setorSelect.value = 'setor_selecao';

  // Ocultar todas as opções de setor
  for (let i = 1; i < setorOptions.length; i++) {
      setorOptions[i].style.display = 'none';
  }

  // Variável para verificar se há algum setor visível
  let setorVisivel = false;

  // Exibir opções de setor com base no departamento selecionado
  if (val.value === 'administracao') {
      document.getElementById('starq').style.display = 'block';
      document.getElementById('stpr').style.display = 'block';
      document.getElementById('stpd').style.display = 'block';
      document.getElementById('strh').style.display = 'block';
      setorVisivel = true;
  } else if (val.value === 'beneficios') {
      document.getElementById('staf').style.display = 'block';
      setorVisivel = true;
  } else if (val.value === 'contabilidade') {
      // Não fazer nada
  } else if (val.value === 'financas') {
      document.getElementById('stte').style.display = 'block';
      setorVisivel = true;
  } else if (val.value === 'gestao_de_qualidade') {
      // Não fazer nada
  } else if (val.value === 'superintendencia') {
      document.getElementById('aj').style.display = 'block';
      document.getElementById('at').style.display = 'block';
      setorVisivel = true;
  } else if (val.value === 'materiais') {
      document.getElementById('stsg').style.display = 'block';
      setorVisivel = true;
  } else if (val.value === 'procuradoria_juridica') {
      // Não fazer nada
  } else if (val.value === 'saude') {
      document.getElementById('sas').style.display = 'block';
      document.getElementById('stod').style.display = 'block';
      setorVisivel = true;
  }

  // Exibir o elemento select setor somente se houver algum setor visível
  if (setorVisivel) {
      setorSelect.style.display = 'block';
  } else {
      setorSelect.style.display = 'none';
  }

  // Selecionar a opção setor_selecao
  for (let i = 0; i < setorOptions.length; i++) {
      if (setorOptions[i].value === 'setor_selecao') {
          setorOptions[i].selected = true;
          break;
      }
  }
};