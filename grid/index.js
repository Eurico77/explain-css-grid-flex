function aplicaEstiloGrid(containerId, propriedade, valor, descricao) {
  const container = document.getElementById(containerId);
  const descElement = document.getElementById(`desc-${containerId}`);

  // Converter valores string para notação correta
  if (propriedade === 'gridTemplateAreas') {
    valor = valor.replace(/'/g, '"');
  }

  container.style[propriedade] = valor;

  if (descricao) {
    descElement.innerHTML = `
              <strong>${propriedade}: ${valor}</strong><br>
              ${descricao}
          `;
  }
}
