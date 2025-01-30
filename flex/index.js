function aplicaEstilo(containerId, propriedade, valor, descricao) {
  const container = document.getElementById(containerId);
  const descElement = document.getElementById(`desc-${containerId}`);

  if (propriedade === 'alignContent' && container.style.flexWrap !== 'wrap') {
    alert('⚠️ Ative primeiro o flex-wrap: wrap!');
    return;
  }
  container.style[propriedade] = valor;

  if (descricao) {
    descElement.innerHTML = `
          <strong>${propriedade
            .replace(/([A-Z])/g, ' $1')
            .toUpperCase()}: ${valor}</strong><br>
          ${descricao}
      `;
  }

  if (propriedade === 'flexWrap' && valor === 'nowrap') {
    container.style.alignContent = 'stretch';
  }
}
