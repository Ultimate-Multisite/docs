---
title: Habilidade de Estética de Design System
sidebar_position: 21
_i18n_hash: 3fef8415909ed14038f38e9eda3a4545
---
# Habilidade de Estética do Design System

A **habilidade de Estética do Design System** é uma abordagem guiada para refinar a identidade visual do seu site. Ela ajuda você a tomar decisões consistentes sobre tipografia, cores, espaçamento e tokens de movimento que definem o seu design system.

## O que é Estética do Design System?

Estética do Design System é uma habilidade estruturada que abrange:

- **Tipografia**: Famílias de fontes, tamanhos, pesos e alturas de linha
- **Cor**: Paletas primárias, secundárias, de destaque (accent) e neutras
- **Espaçamento**: Escalas de preenchimento (padding), margem (margin) e espaçamento entre elementos (gap)
- **Bordas**: Tokens de raio e largura
- **Sombras**: Tokens de elevação e profundidade
- **Movimento**: Animações e transições

Essas decisões são capturadas no arquivo `theme.json` do seu tema, criando um sistema visual coeso.

## Por que usar Estética do Design System?

### Consistência

Um design system garante:

- Que todo o texto use a mesma escala tipográfica
- Que as cores sejam usadas de forma consistente em todo o site
- Que o espaçamento siga um padrão previsível
- Que as animações parem unificadas

### Eficiência

Em vez de tomar decisões de design página por página, você:

- Define os tokens uma única vez
- Aplica-os em todos os lugares
- Atualiza globalmente mudando apenas um valor

### Flexibilidade

Você pode:

- Ajustar todo o seu design system rapidamente
- Experimentar diferentes estéticas
- Manter a consistência da marca enquanto evolui

## O Processo de Estética do Design System

### Passo 1: Tipografia

O agente pergunta sobre suas escolhas de fonte:

```
Qual é o seu estilo de tipografia preferido?
- Serif (tradicional, elegante)
- Sans-serif (moderna, limpa)
- Monospace (técnica, focada em código)

Para a fonte dos seus títulos:
- Você quer uma fonte de título distinta ou usar a mesma do texto principal?
- Preferência: negrito, elegante, divertida, minimalista?

Para a fonte do corpo do texto:
- A legibilidade é fundamental. Você prefere:
  - Texto maior e mais espaçoso
  - Texto compacto e eficiente
  - Tamanho padrão
```

O agente então define:

- **Fonte de título**: Fonte principal para títulos e cabeçalhos
- **Fonte do corpo do texto**: Fonte para parágrafos e texto corrido
- **Fonte monoespaçada (Monospace)**: Fonte para código e conteúdo técnico
- **Escala de tamanhos**: Tamanhos pré-definidos (pequeno, base, grande, XL, etc.)
- **Escala de pesos**: Pesos da fonte (regular, medium, bold, etc.)
- **Altura da linha (Line height)**: Espaçamento entre as linhas para facilitar a leitura

### Passo 2: Paleta de Cores

```
Vamos definir sua paleta de cores.

Cor primária (sua cor da marca):
- Atual: [mostra a cor existente]
- Mudar para: [seletor de cores ou código hexadecimal]

Cor secundária (cor de apoio):
- Atual: [mostra a cor existente]
- Mudar para: [seletor de cores ou código hexadecimal]

Cor de destaque (para destaques e CTAs - Chamadas para Ação):
- Atual: [mostra a cor existente]
- Mudar para: [seletor de cores ou código hexadecimal]

Paleta neutra (cinzas para texto, bordas, fundos):
- Claro: [cor]
- Médio: [cor]
- Escuro: [cor]
```

O agente cria uma paleta completa incluindo:

- Cores primária, secundária e de destaque
- Cinzas neutros (claro, médio, escuro)
- Cores semânticas (sucesso, aviso, erro)
- Estados de hover (ao passar o mouse) e ativo

Quanto de espaço você deseja?

Preferência de escala de espaçamento:
- Compacta (layouts apertados e eficientes)
- Normal (espaçamento equilibrado)
- Espaçosa (muito espaço em branco)

Isso afeta:
- Padding dentro de botões e cards
- Margens entre seções
- Espaço entre itens da grade

O agente define os tokens de espaçamento:

- Unidade base (tipicamente 4px ou 8px)
- Escala: xs, sm, md, lg, xl, 2xl
- Valores específicos para padding, margin e gap

### Passo 4: Bordas e Sombras

```
Profundidade visual e definição:

Preferência de raio da borda (Border radius):
- Nítida (sem arredondamento)
- Sutil (raio pequeno)
- Arredondada (raio médio)
- Muito arredondada (raio grande)

Profundidade da sombra (Shadow depth):
- Plana (sem sombras)
- Sutil (sombras leves)
- Marcante (sombras fortes)
```

O agente cria:

- Tokens de raio da borda (para botões, cards, inputs)
- Tokens de sombra para níveis de elevação
- Tokens de largura da borda

### Passo 5: Movimento e Animação

```
Como seu site deve parecer quando interativo?

Preferência de animação:
- Mínima (sem animações)
- Sutil (transições suaves)
- Divertida (animações perceptíveis)

Animações específicas:
- Transições de página: fade, slide ou nenhuma?
- Hover do botão: escala, mudança de cor ou ambos?
- Estados de carregamento: spinner, skeleton ou barra de progresso?
```

O agente define:

- Duração das transições (rápida, normal, lenta)
- Funções de easing (ease-in, ease-out, ease-in-out)
- Keyframes de animação para interações comuns

## Aplicando Estética do Design System

### Aplicação Automática

Após completar a habilidade, o agente:

1. Atualiza o `theme.json` do seu tema com todos os tokens
2. Aplica o design system ao seu tema ativo
3. Regenera os estilos de bloco para corresponder ao novo sistema
4. Ativa o tema atualizado

### Aplicação Manual

Você também pode editar o `theme.json` diretamente:

## Visualizando Seu Design System

### Pergunte ao Agente

```
"Mostre meu design system"
```

ou

```
"Quais são meus tokens de design atuais?"
```

O agente exibirá suas tipografias, cores, espaçamentos e outros tokens.

### Visualizar theme.json

Abra `/wp-content/themes/[nome-do-tema]/theme.json` em um editor de texto para ver as definições brutas dos tokens.

## Atualizando Seu Design System

### Atualizações Rápidas

Peça ao agente por alterações específicas:

```
"Torne a cor primária mais escura"
```

ou

```
"Aumente a escala de espaçamento em 20%"
```

ou

```
"Mude a fonte dos títulos para uma serifada"
```

### Redesign Completo

Execute novamente a habilidade Design System Aesthetics:

```
"Vamos redesenhar todo o meu design system"
```

Isso irá guiá-lo por todas as decisões novamente, começando pelos seus valores atuais.

### Atualizações Parciais

Atualize aspectos específicos:

```
"Apenas atualize a paleta de cores, mantenha o resto igual"
```

## Melhores Práticas do Design System

### Consistência

- Use os mesmos tokens em todos os lugares
- Não crie cores ou tamanhos únicos
- Referencie tokens em vez de codificar valores diretamente no código

### Nomenclatura

Use nomes claros e semânticos:

- ✓ `primary`, `secondary`, `accent`
- ✗ `blue`, `color-1`, `main`

- ✓ `heading-lg`, `body-sm`
- ✗ `font-size-24`, `text-large`

### Escalabilidade

Projete seu sistema para escalar:

- Use unidades relativas (rem, em) em vez de pixels
- Crie escalas (xs, sm, md, lg, xl) em vez de valores arbitrários
- Planeje adições futuras

### Documentação

Documente seu design system:

- Por que escolheu cores específicas
- Quando usar cada token
- Exceções e casos extremos

## Padrões Comuns do Design System

### Minimalista Moderno

- Tipografia sem serifa (Inter, Helvetica)
- Paleta de cores limitada (2-3 cores)
- Espaçamento generoso
- Sombras sutis
- Animações suaves e rápidas

### Quente e Amigável

- Mistura de serifada e sem serifa
- Paleta de cores quentes (laranjas, cinzas quentes)
- Cantos arredondados
- Sombras suaves
- Animações lúdicas

### Corporativo Profissional

- Sem serifa limpa (Roboto, Open Sans)
- Paleta neutra com cor de destaque
- Espaçamento estruturado
- Sombras mínimas
- Transições sutis

### Criativo e Ousado

- Tipografia distinta
- Paleta de cores ousada
- Espaçamento variado
- Sombras fortes
- Animações notáveis

## Solução de Problemas (Troubleshooting)

**Minhas mudanças no design system não estão aparecendo**
- Limpe o cache do seu navegador
- Reconstrua seu site se estiver usando um gerador estático
- Verifique se o theme.json é JSON válido
- Confirme se o tema está ativo

**As cores parecem diferentes em páginas diferentes**
- Verifique conflitos de CSS em plugins
- Verifique se todas as páginas usam o mesmo tema
- Limpe quaisquer plugins de cache

**Eu quero reverter para um design system anterior**
- Pergunte ao agente: "Mostre meu histórico de design system"
- Edite manualmente o theme.json com os valores anteriores
- Execute a habilidade novamente com escolhas diferentes

## Próximos Passos

Após definir seu design system:

1. **Revise seu site**: Visite o seu site para ver o novo design
2. **Refine ainda mais**: Faça ajustes usando a habilidade novamente
3. **Crie templates**: Construa templates de blocos personalizados usando seus tokens de design
4. **Documente**: Compartilhe seu sistema de design com os membros da equipe
