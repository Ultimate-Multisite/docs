---
title: Estética do Sistema de Diseño Habilidade
sidebar_position: 21
_i18n_hash: 3fef8415909ed14038f38e9eda3a4545
---
# Habilidad de Estética do Sistema de Design

A **habilidade de estética do sistema de design** é unha forma guiada de refinar a identidade visual do seu sitio. Axuda a tomar decisións consistentes sobre tipografía, cor, espaciamento e tokens de movimiento que definen o seu sistema de design.

## O que é a Estética do Sistema de Design? {#what-is-design-system-aesthetics}

A Estética do Sistema de Design é unha habilidad estructurada que cubre:

- **Tipografía**: Familias de fontes, tamaños, pesos e alturas de línea
- **Cor**: Paletas primarias, secundarias, de acento e neutras
- **Espaciamento**: Escalas de padding, margin e gap
- **Bordes**: Tokens de raio e largura
- **Sombras**: Tokens de elevación e profundidade
- **Movimento**: Animacións e transicións

Estas decisións están capturadas no ficheiro `theme.json` do seu tema, creando un sistema visual coeso.

## Por que usar a Estética do Sistema de Design? {#why-use-design-system-aesthetics}

### Consistencia {#consistency}

Un sistema de design asegura:

- Que todo o texto use a mesma escala tipográfica
- Que as cores se usen de forma consistente en todo o sitio
- Que o espaciamento siga un patrón predecible
- Que as animacións se sintan unificadas

### Eficiencia {#efficiency}

En lugar de tomar decisións de diseño página por página, tú:

- Define os tokens unha única vez
- Aplícalos en todas partes
- Actualizas globalmente cambiando un único valor

### Flexibilidade {#flexibility}

Podes:

- Ajustar todo o teu sistema de design rapidamente
- Experimentar con estéticas diferentes
- Mantecer a consistencia da marca ao evoluir

## Activación da Habilidad de Estética do Sistema de Design {#triggering-the-design-system-aesthetics-skill}

### Activación Manual {#manual-activation}

Podes empezar a habilidad en cualquier momento:

```
"Help me refine my design system"
```

ou

```
"Let's improve my site's aesthetics"
```

ou

```
"Guide me through design system decisions"
```

### Sugerencias Automáticas {#automatic-suggestions}

Os agentes poden sugerir o uso desta habilidad cuando tú:

- Pidas cambios de diseño
- Solicites un rediseño "moderno" ou "profesional"
- Que que mejorar a consistencia visual
- Estás preparando o lanzamiento do teu sitio

## O Proceso de Estética do Sistema de Diseño {#the-design-system-aesthetics-process}

### Passo 1: Tipografia {#step-1-typography}

O agente pergunta sobre as túas eleccións de fonte:

```
Que estilo de tipografia preferes?
- Serif (tradicional, elegante)
- Sans-serif (moderna, limpa)
- Monospace (técnica, focada en código)

Para a tua fonte de título:
- Queres uma fonte de título distinta, ou usas a mesma do texto normal?
- Preferência: negrita, elegante, divertida, mínima?

Para a tua fonte de corpo de texto:
- A legibilidade é fundamental. Preferes:
  - Texto maior, mais espaçoso
  - Texto compacto, eficiente
  - Tamanho padrão
```

O agente define então:

- **Fonte de título**: Fonte principal para títulos e cabeçalhos
- **Fonte de corpo de texto**: Fonte para parágrafos e texto normal
- **Fonte Monospace**: Fonte para código e conteúdo técnico
- **Escala de tamanhos (Size scale)**: Tamanhos predefinidos (pequeno, base, grande, XL, etc.)
- **Escala de pesos (Weight scale)**: Pesos da fonte (regular, médio, negrito, etc.)
- **Altura da linha (Line height)**: Espaçamento entre linhas para legibilidade

### Passo 2: Paleta de Cores {#step-2-color-palette}

```
Vamos definir a tua paleta de cores.

Cor Primária (a cor da tua marca):
- Atual: [mostra a cor existente]
- Mudar para: [seletor de cores ou código hexadecimal]

Cor Secundária (cor de apoio):
- Atual: [mostra a cor existente]
- Mudar para: [seletor de cores ou código hexadecimal]

Cor de Destaque (destaques e CTAs):
- Atual: [mostra a cor existente]
- Mudar para: [seletor de cores ou código hexadecimal]

Paleta Neutra (cinzas para texto, bordas, fundos):
- Clara: [cor]
- Média: [cor]
- Escura: [cor]
```

O agente cria uma paleta completa que inclui:

- Cores primárias, secundárias e de destaque
- Cinzas neutros (claro, médio, escuro)
- Cores semânticas (sucesso, aviso, erro)
- Estados de hover e ativo

Que espaciamento queres?

Preferência de escala de espaçamento:
- Compacto (layouts apertados, eficientes)
- Normal (espaçamento equilibrado)
- Espaçoso (espacio generoso)

Isto afecta:
- Padding dentro dos botões e cards
- Margens entre as secións
- Gap entre os itens da grid

O agente define os tokens de espaçamento:

- Unidade base (tipicamente 4px ou 8px)
- Escala: xs, sm, md, lg, xl, 2xl
- Valores específicos para padding, margin, gap

### Passo 4: Bordes e Sombras {#step-3-spacing}

```
Profundidade visual e definição:

Preferência de raio do borde (Border radius):
- Nítido (sem arredondamento)
- Sutil (raio pequeno)
- Arredondado (raio médio)
- Muito arredondado (raio grande)

Profundidade da sombra (Shadow depth):
- Plano (sem sombras)
- Sutil (sombras leves)
- Pronunciada (sombras fortes)
```

O agente cria:

- Tokens de raio do borde (para botões, cards, inputs)
- Tokens de sombra para níveis de elevação
- Tokens de largura do borde

### Passo 5: Movimento e Animação {#step-4-borders-and-shadows}

```
Como debe sentirse o seu sitio cuando é interativo?

Preferência de animación:
- Mínima (sem animacións)
- Sutil (transición suaves)
- Lúdica (animacións notoria)

Animacións específicas:
- Transiciones de página: fade, slide ou nenhuma?
- Hover do botão: escala, cambio de cor, ou ambos?
- Estados de carga: spinner, skeleton, o barra de progresso?
```

O agente define:

- Duracións de transición (rápida, normal, lenta)
- Funções de easing (ease-in, ease-out, ease-in-out)
- Keyframes de animación para interacciones comunes

## Aplicar Estética do Design System {#step-5-motion-and-animation}

### Aplicación Automática {#applying-design-system-aesthetics}

Depois de completar a habilidad, o agente:

1. Actualiza o `theme.json` do seu tema con todos os tokens
2. Aplica o design system ao seu tema activo
3. Regenera os estilos dos blocos para combinar co novo sistema
4. Activa o tema actualizado

### Aplicación Manual {#automatic-application}

Poderás editar o `theme.json` directamente:

```json
{
  "version": 3,
  "settings": {
    "color": {
      "palette": [
        {
          "color": "#0066CC",
          "name": "Primary",
          "slug": "primary"
        }
      ]
    },
    "typography": {
      "fontFamilies": [
        {
          "fontFamily": "Inter, sans-serif",
          "name": "Body",
          "slug": "body"
        }
      ]
    },
    "spacing": {
      "spacingSizes": [
        {
          "size": "0.5rem",
          "name": "Small",
          "slug": "sm"
        }
      ]
    }
  }
}
```

## Vistando o Seu Sistema de Diseño {#manual-application}

### Pregunte ao Agente {#viewing-your-design-system}

```
"Mostra-me o meu sistema de design"
```

ou

```
"Quais são os meus tokens de design atuais?"
```

O agente mostrará a súa tipografia, cores, espaçamento e outros tokens.

### Vista theme.json {#ask-the-agent}

Abra `/wp-content/themes/[theme-name]/theme.json` noutro editor de texto para ver as definición brutas dos tokens.

## Actualizando o Seu Sistema de Diseño {#view-themejson}

### Actualizacións Rápidas {#updating-your-design-system}

Pregunte ao agente por cambio específicos:

```
"Torna a cor principal más escura"
```

ou

```
"Aumenta a escala de espaçamento en 20%"
```

ou

```
"Cambia a fonte dos títulos para uma serif"
```

### Rediseño Completo {#quick-updates}

Vista de novo a habilidad Design System Aesthetics:

```
"Vamos redesenhar o meu sistema de design completo"
```

Isto guiará por todas as decisións de novo, começando pelos valores actuais.

### Actualizacións Parciais {#full-redesign}

Actualize aspectos específicos:

```
"Só actualiza a paleta de cores, mantén todo o resto"
```

## Melhores Práticas do Sistema de Diseño {#partial-updates}

### Consistencia {#design-system-best-practices}

- Usa os mesmos tokens en todas partes
- Non crentes cores ou tamaños únicos
- Referencia tokens en vez de codificar valores directamente

### Nomeación {#consistency-1}

Usa nomes claros e semânticos:

- ✓ `primary`, `secondary`, `accent`
- ✗ `blue`, `color-1`, `main`

- ✓ `heading-lg`, `body-sm`
- ✗ `font-size-24`, `text-large`

### Escalabilidade {#naming}

Procura diseñar o teu sistema para escalar:

- Usa unidades relativas (rem, em) en vez de píxeles
- Cria escalas (xs, sm, md, lg, xl) en vez de valores arbitrários
- Planea para adições futuras

### Documentación {#scalability}

Documenta o teu sistema de diseño:

- Por que escolliste colores específicos
- Quando usar cada token
- Excecións e casos límite

## Padrón Comuns do Sistema de Diseño {#documentation}

### Minimalista Moderno {#common-design-system-patterns}

- Tipografía sans-serif (Inter, Helvetica)
- Paleta de cores limitada (2-3 colores)
- Espaciamento generoso
- Sombras sutiles
- Animación suave e rápida

### Cálido y Amigable {#modern-minimalist}

- Mezcla de serif e sans-serif
- Paleta de cores cálida (naranjas, grises quentes)
- Cantos redondeados
- Sombras suaves
- Animaciones juguetonas

### Corporativo Profesional {#warm-and-friendly}

- Sans-serif limpio (Roboto, Open Sans)
- Paleta neutra con color de acento
- Espaciamento estructurado
- Sombras mínimas
- Transiciones sutiles

### Creativo y Audaz {#professional-corporate}

- Tipografía distintiva
- Paleta de cores audaz
- Espaciamento variado
- Sombras fuertes
- Animaciones notables

## Solución de Problemas {#creative-and-bold}

**As mis cambios no se ven**
- Limpa o cache do navegador
- Reconstruí o teu sitio se estás usando un generador estático
- Verifica que o theme.json é JSON válido
- Verifica que o tema está activo

**Os colores parecen diferentes en diferentes páxinas**
- Verifica se hai CSS en conflito nos plugins
- Verifica que todas as páxinas usan o mesmo tema
- Limpa calquera plugin de caching

**Quero volver a un sistema de diseño anterior**
- Pide ao agente: "Mostra-me a historia do meu sistema de diseño"
- Edita manualmente o theme.json para os valores anteriores
- Runcí a habilidad con eleccións diferentes

## Próximos Pasos {#troubleshooting}

Após definir o teu sistema de diseño:

1. **Revisa o teu sitio**: Vinde ao teu sitio para ver o novo diseño
2. **Refúnsalo máis**: Haz ajustamentos usando a mesma habilidad
3. **Crea modelos (templates)**: Construí bloc personalizados usando os teus tokens de design
4. **Documenta**: Parté o teu sistema de design coa membros da equipa
