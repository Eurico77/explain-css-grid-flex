# Flexbox: A Caixa de Brinquedos Horizontal 🎲📦

Imagine uma caixa de brinquedos onde você coloca seus brinquedos em uma fila (como carrinhos ou bonecos).  
Você decide como arrumar esses brinquedos na caixa:

## 1. `justify-content`: "Como os brinquedos ficam na fila?"

```css
.caixa {
  display: flex;
  justify-content: center; /* 🎯 Centraliza os brinquedos na fila */
}
```

- center: Brinquedos no meio da caixa.
- flex-start: Brinquedos à esquerda.
- flex-end: Brinquedos à direita.
- space-between: Espalha igualmente (sem espaço nas pontas).

## 2. align-items: “Como os brinquedos ficam na altura?”

```css
.caixa {
  display: flex;
  height: 200px; /* Altura da caixa */
  align-items: center; /* 🎯 Centraliza verticalmente */
}
```

- center: Brinquedos no meio da altura.
- flex-start: Brinquedos no topo.
- flex-end: Brinquedos na base.

## Grid: A Prateleira Mágica 🏗✨

Imagine uma prateleira com divisórias (como um tabuleiro).
Cada divisória guarda um brinquedo.
Você controla a prateleira toda e cada brinquedo dentro da sua divisória!

### 1. justify-content e align-content: “Como a prateleira inteira fica na parede?”

Se a prateleira for menor que o espaço da parede:

```css
.prateleira {
  display: grid;
  grid-template-columns: 100px 100px;
  height: 400px;
  justify-content: center; /* 🎯 Centraliza a prateleira na horizontal */
  align-content: center; /* 🎯 Centraliza a prateleira na vertical */
}
```

### 2. justify-items e align-items: “Como todos os brinquedos ficam nas divisórias?”

```css
.prateleira {
  display: grid;
  grid-template-columns: 100px 100px;
  justify-items: end; /* 🎯 Todos os brinquedos à direita das divisórias */
  align-items: center; /* 🎯 Todos no meio da altura das divisórias */
}
```

### 3. justify-self e align-self: “Como um brinquedo específico fica na divisória?”

```css
.brinquedo-especial {
  justify-self: start; /* 🎯 Este brinquedo fica à esquerda */
  align-self: end; /* 🎯 Este brinquedo fica na base */
}
````

| Flexbox (Caixa de Brinquedos)  | Grid (Prateleira Mágica) |
|-------|------|
| Eixo Principal   | justify-content (horizontal) |
| Eixo Secundário  |align-items (vertical) |
| Dentro do Item | ❌ Não tem |
| Item Específico | ❌ Não tem|
