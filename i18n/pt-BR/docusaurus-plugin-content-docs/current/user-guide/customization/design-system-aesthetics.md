---
title: Estética de Habilidades de Design System
sidebar_position: 21
_i18n_hash: 3fef8415909ed14038f38e9eda3a4545
---
# Habilidade de Estética do Design System

A **habilidade de Estética do Design System** é uma abordagem guiada para refinar a identidade visual do seu site. Ela ajuda você a tomar decisões consistentes sobre tokens de tipografia, cor, espaçamento e movimento que definem o seu design system.

## O que é Estética do Design System? {#what-is-design-system-aesthetics}

Estética do Design System é uma habilidade estruturada que cobre:

- **Tipografia**: Famílias de fontes, tamanhos, pesos e alturas de linha
- **Cor**: Paletas primárias, secundárias, de destaque (accent) e neutras
- **Espaçamento**: Escalas de preenchimento (padding), margem (margin) e lacuna (gap)
- **Bordas**: Tokens de raio e largura
- **Sombras**: Tokens de elevação e profundidade
- **Movimento**: Animações e transições

Essas decisões são registradas no arquivo `theme.json` do seu tema, criando um sistema visual coeso.

## Por que usar Estética do Design System? {#why-use-design-system-aesthetics}

### Consistência {#consistency}

Um design system garante:

- Que todo o texto use a mesma escala tipográfica
- Que as cores sejam usadas de forma consistente em todo o site
- Que o espaçamento siga um padrão previsível
- Que as animações pareçam unificadas

### Eficiência {#efficiency}

Em vez de tomar decisões de design página por página, você:

- Define os tokens uma única vez
- Aplica-os em todos os lugares
- Atualiza globalmente mudando apenas um valor

### Flexibilidade {#flexibility}

Você pode:

- Ajustar todo o seu design system rapidamente
- Experimentar diferentes estéticas
- Manter a consistência da marca enquanto evolui

## Acionando a Habilidade de Estética do Design System {#triggering-the-design-system-aesthetics-skill}

### Ativação Manual {#manual-activation}

Você pode iniciar a habilidade a qualquer momento:

```
"Ajude-me a refinar meu design system"
```

ou

```
"Vamos melhorar a estética do meu site"
```

ou

```
"Me guie pelas decisões do design system"
```

### Sugestões Automáticas {#automatic-suggestions}

Os agentes podem sugerir o uso da habilidade quando você:

- Solicitar mudanças de design
- Pedir um redesenho "moderno" ou "profissional"
- Quiser melhorar a consistência visual
- Estiver se preparando para lançar seu site

## O Processo de Estética do Design System {#the-design-system-aesthetics-process}

### Passo 1: Tipografia {#step-1-typography}

O agente pergunta sobre suas escolhas de fontes:

```
Qual é o seu estilo de tipografia preferido?
- Serif (tradicional, elegante)
- Sans-serif (moderno, limpo)
- Monospace (técnico, focado em código)

Para a fonte dos títulos (heading):
- Você quer uma fonte de título distinta, ou usar a mesma do corpo do texto?
- Preferência: ousada (bold), elegante, divertida, minimalista?

Para a fonte do corpo do texto (body):
- A legibilidade é fundamental. Você prefere:
  - Texto maior e mais espaçoso
  - Texto compacto e eficiente
  - Tamanho padrão
```

O agente então define:

- **Fonte de título (Heading font)**: Fonte principal para títulos e cabeçalhos
- **Fonte do corpo (Body font)**: Fonte para parágrafos e texto principal
- **Fonte Monospace**: Fonte para código e conteúdo técnico
- **Escala de tamanho (Size scale)**: Tamanhos pré-definidos (small, base, large, XL, etc.)
- **Escala de peso (Weight scale)**: Pesos de fonte (regular, medium, bold, etc.)
- **Altura da linha (Line height)**: Espaçamento entre linhas para legibilidade

### Passo 2: Paleta de Cores {#step-2-color-palette}

```
Vamos definir sua paleta de cores.

Cor primária (cor da sua marca):
- Atual: [mostra a cor existente]
- Mudar para: [seletor de cores ou código hex]

Cor secundária (cor de apoio):
- Atual: [mostra a cor existente]
- Mudar para: [seletor de cores ou código hex]

Cor de destaque (Destaques e CTAs):
- Atual: [mostra a cor existente]
- Mudar para: [seletor de cores ou código hex]

Paleta neutra (tons de cinza para texto, bordas, fundos):
- Claro: [cor]
- Médio: [cor]
- Escuro: [cor]
```

O agente cria uma paleta completa incluindo:

- Cores primárias, secundárias e de destaque
- Tons de cinza neutros (claro, médio, escuro)
- Cores semânticas (sucesso, aviso, erro)
- Estados de hover e ativo

### Passo 3: Espaçamento {#step-3-spacing}

```
Quanto espaço de respiro você quer?

Preferência de escala de espaçamento:
- Compacto (layouts apertados, eficientes)
- Normal (espaçamento equilibrado)
- Generoso (espaço em branco abundante)

Isso afeta:
- Preenchimento (padding) dentro de botões e cartões
- Margens entre seções
- Lacuna (gap) entre itens de grade
```

O agente define tokens de espaçamento:

- Unidade base (tipicamente 4px ou 8px)
- Escala: xs, sm, md, lg, xl, 2xl
- Valores específicos para padding, margin, gap

### Passo 4: Bordas e Sombras {#step-4-borders-and-shadows}

```
Profundidade e definição visual:

Preferência de raio de borda:
- Nítido (sem arredondamento)
- Sutil (raio pequeno)
- Arredondado (raio médio)
- Muito arredondado (raio grande)

Profundidade da sombra:
- Plano (sem sombras)
- Sutil (sombras leves)
- Pronunciado (sombras fortes)
```

O agente cria:

- Tokens de raio de borda (para botões, cartões, inputs)
- Tokens de sombra para diferentes níveis de elevação
- Tokens de largura de borda

### Passo 5: Movimento e Animação {#step-5-motion-and-animation}

```
Como seu site deve parecer quando interativo?

Preferência de animação:
- Mínimo (sem animações)
- Sutil (transições suaves)
- Divertido (animações perceptíveis)

Animações específicas:
- Transições de página: fade, slide ou nenhuma?
- Hover do botão: escala, mudança de cor ou ambos?
- Estados de carregamento: spinner, skeleton ou barra de progresso?
```

O agente define:

- Duração das transições (rápido, normal, lento)
- Funções de suavização (ease-in, ease-out, ease-in-out)
- Keyframes de animação para interações comuns

## Aplicando Estética do Design System {#applying-design-system-aesthetics}

### Aplicação Automática {#automatic-application}

Após você concluir a habilidade, o agente:

1. Atualiza o `theme.json` do seu tema com todos os tokens
2. Aplica o design system ao seu tema ativo
3. Regenera os estilos de bloco para corresponder ao novo sistema
4. Ativa o tema atualizado

### Aplicação Manual {#manual-application}

Você também pode editar o `theme.json` diretamente:

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

## Visualizando Seu Design System {#viewing-your-design-system}

### Pergunte ao Agente {#ask-the-agent}

```
"Mostrar meu design system"
```

ou

```
"Quais são meus tokens de design atuais?"
```

O agente exibirá sua tipografia, cores, espaçamento e outros tokens.

### Visualizar theme.json {#view-themejson}

Abra `/wp-content/themes/[theme-name]/theme.json` em um editor de texto para ver as definições brutas dos tokens.

## Atualizando Seu Design System {#updating-your-design-system}

### Atualizações Rápidas {#quick-updates}

Peça ao agente por mudanças específicas:

```
"Deixar a cor primária mais escura"
```

ou

```
"Aumentar a escala de espaçamento em 20%"
```

ou

```
"Mudar a fonte de título para serif"
```

### Redesenho Completo {#full-redesign}

Execute a habilidade Estética do Design System novamente:

```
"Vamos redesenhar todo o meu design system"
```

Isso o guiará por todas as decisões novamente, começando pelos seus valores atuais.

### Atualizações Parciais {#partial-updates}

Atualize aspectos específicos:

```
"Apenas atualizar a paleta de cores, manter o resto"
```

## Melhores Práticas do Design System {#design-system-best-practices}

### Consistência {#consistency-1}

- Use os mesmos tokens em todos os lugares
- Não crie cores ou tamanhos isolados
- Referencie tokens em vez de codificar valores fixos (hardcoding)

### Nomenclatura {#naming}

Use nomes claros e semânticos:

- ✓ `primary`, `secondary`, `accent`
- ✗ `blue`, `color-1`, `main`

- ✓ `heading-lg`, `body-sm`
- ✗ `font-size-24`, `text-large`

### Escalabilidade {#scalability}

Projete seu sistema para escalar:

- Use unidades relativas (rem, em) em vez de pixels
- Crie escalas (xs, sm, md, lg, xl) em vez de valores arbitrários
- Planeje adições futuras

### Documentação {#documentation}

Documente seu design system:

- Por que você escolheu cores específicas
- Quando usar cada token
- Exceções e casos de borda

## Padrões Comuns de Design System {#common-design-system-patterns}

### Minimalista Moderno {#modern-minimalist}

- Tipografia sans-serif (Inter, Helvetica)
- Paleta de cores limitada (2-3 cores)
- Espaçamento generoso
- Sombras sutis
- Animações suaves e rápidas

### Acolhedor e Amigável {#warm-and-friendly}

- Mistura de serif e sans-serif
- Paleta de cores quente (laranjas, cinzas quentes)
- Cantos arredondados
- Sombras suaves
- Animações divertidas

### Corporativo Profissional {#professional-corporate}

- Sans-serif limpo (Roboto, Open Sans)
- Paleta neutra com cor de destaque
- Espaçamento estruturado
- Sombras mínimas
- Transições sutis

### Criativo e Ousado {#creative-and-bold}

- Tipografia distinta
- Paleta de cores ousada
- Espaçamento variado
- Sombras fortes
- Animações perceptíveis

## Solução de Problemas {#troubleshooting}

**Minhas mudanças no design system não estão aparecendo**
- Limpe o cache do seu navegador
- Reconstrua seu site se estiver usando um gerador estático
- Verifique se o `theme.json` é um JSON válido
- Verifique se o tema está ativo

**As cores parecem diferentes em páginas diferentes**
- Verifique se há CSS conflitante em plugins
- Verifique se todas as páginas usam o mesmo tema
- Limpe quaisquer plugins de cache

**Quero reverter para um design system anterior**
- Pergunte ao agente: "Mostrar meu histórico de design system"
- Edite manualmente o `theme.json` para os valores anteriores
- Execute a habilidade com escolhas diferentes

## Próximos Passos {#next-steps}

Após definir seu design system:

1. **Revise seu site**: Visite seu site para ver o novo design
2. **Refinar ainda mais**: Faça ajustes usando a habilidade novamente
3. **Criar templates**: Construa templates de bloco personalizados usando seus tokens de design
4. **Documentar**: Compartilhe seu design system com os membros da equipe
