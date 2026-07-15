---
title: Fluxo de Integração do Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Fluxo de Onboarding do Theme Builder

O Superdav AI Agent v1.12.0 introduz um **fluxo de onboarding do Theme Builder** guiado que ajuda você a criar um tema de bloco personalizado durante sua configuração inicial. Isso substitui o modo Site Builder legado por uma abordagem mais flexível e assistida por agente.

## O que é o Fluxo de Onboarding do Theme Builder? {#what-is-the-theme-builder-onboarding-flow}

O fluxo de onboarding do Theme Builder é um assistente interativo de configuração que:

- Orienta você através das decisões de design (cores, tipografia, layout)
- Captura as preferências da identidade visual do seu site
- Gera um tema de bloco personalizado adaptado às suas necessidades
- Ativa o tema automaticamente quando concluído

O fluxo é alimentado pelo **Setup Assistant agent**, que faz perguntas esclarecedoras e constrói seu tema incrementalmente.

## Iniciando o Onboarding do Theme Builder {#starting-the-theme-builder-onboarding}

### Configuração na Primeira Execução {#first-run-setup}

Quando você inicia o Superdav AI Agent pela primeira vez em uma nova instalação do WordPress, você verá:

```
Bem-vindo ao Superdav AI Agent!

O que você gostaria de fazer?
1. Construir um tema personalizado (Theme Builder)
2. Usar um tema existente
3. Pular a configuração por enquanto
```

Selecione **"Construir um tema personalizado"** para entrar no fluxo de onboarding do Theme Builder.

### Ativação Manual {#manual-activation}

Você também pode iniciar o onboarding do Theme Builder a qualquer momento solicitando:

```
"Iniciar o onboarding do Theme Builder"
```

ou

```
"Ajude-me a criar um tema personalizado"
```

## Os Passos do Onboarding {#the-onboarding-steps}

### Passo 1: Seleção do Modo {#step-1-mode-selection}

O Setup Assistant agent pergunta sobre sua preferência:

```
Como você gostaria de construir seu tema?
- Guiado (Eu farei perguntas e construo para você)
- Prático (Eu mostra as opções e você decide)
```

O **modo guiado** é recomendado para a maioria dos usuários; o agente faz recomendações de design com base no seu setor e objetivos.

### Passo 2: Especificação do Site {#step-2-site-specification}

Você será questionado sobre o seu site:

- **Propósito do site**: E-commerce, blog, portfólio, SaaS, etc.
- **Público-alvo**: Quem são seus visitantes?
- **Cores da marca**: Cores primárias e secundárias (ou "não tenho certeza")
- **Tom de voz**: Profissional, criativo, divertido, minimalista, etc.

Esta informação é armazenada na sua memória **site_brief**, que os agentes referenciam em sessões futuras.

### Passo 3: Decisões do Design System {#step-3-design-system-decisions}

O agente o guia através da seleção dos tokens de design:

- **Tipografia**: Família de fontes (serifa, sem serifa, monoespaçada) e escala de tamanhos
- **Paleta de cores**: Cores primárias, secundárias, de destaque (accent) e neutras
- **Espaçamento**: Layouts compactos, normais ou espaçosos
- **Movimento**: Animações e transições (se desejado)

### Passo 4: Geração do Tema {#step-4-theme-generation}

O agente Assistente de Configuração cria o esqueleto do seu tema de bloco personalizado com:

- `theme.json` contendo todos os seus tokens de design
- Modelos de blocos para layouts comuns (página inicial, blog, contato)
- Estilos de bloco personalizados que correspondem ao seu design system
- Metadados do tema e declarações de suporte ao WordPress

### Passo 5: Ativação e Verificação {#step-5-activation-and-verification}

O tema é ativado automaticamente, e você verá:

```
✓ Seu tema personalizado está no ar!
  Nome do Tema: Tema [Nome do Seu Site]
  Cores: [Primária] / [Secundária]
  Tipografia: [Família da Fonte]

  Visite seu site para ver o novo design.
```

Você pode então visitar seu site para verificar se o tema está sendo exibido corretamente.

## Especificação do Site e Memória site_brief {#site-specification-and-sitebrief-memory}

Durante a configuração inicial (onboarding), o agente captura a especificação do seu site na categoria de memória **site_brief**. Isso inclui:

- Propósito e objetivos do site
- Público-alvo
- Cores da marca e tom de voz
- Preferências de design
- Estrutura de conteúdo

### Por que o site_brief é importante {#why-sitebrief-matters}

Em sessões futuras, os agentes referenciam seu site_brief para:

### Visualizando o seu site_brief {#viewing-your-sitebrief}

Você pode perguntar ao agente:

```
"Mostre meu resumo do site"
```

ou

```
"O que você sabe sobre meu site?"
```

O agente exibirá a especificação do seu site armazenada.

## Personalizando Após o Onboarding {#customizing-after-onboarding}

Após a conclusão do onboarding do Theme Builder, você pode:

### Usar a Habilidade Estética do Design System {#use-the-design-system-aesthetics-skill}

Solicitar refinamentos de design:

```
"Refine a tipografia para ser mais moderna"
```

ou

```
"Ajuste a paleta de cores para ser mais quente"
```

A **habilidade Estética do Design System** o guiará por atualizações de design direcionadas.

### Editar theme.json Diretamente {#edit-themejson-directly}

Para usuários avançados, edite `/wp-content/themes/[nome-do-tema]/theme.json` para ajustar:

- Tokens de cor
- Escalas de tipografia
- Valores de espaçamento
- Definições de borda e sombra

### Criar Modelos de Bloco Personalizados {#create-custom-block-templates}

Use o editor de blocos do WordPress para criar modelos personalizados para:

- Layouts da página inicial
- Páginas de posts do blog
- Páginas de produtos
- Formulários de contato

## Comparação: Antigo vs. Novo Onboarding {#comparison-old-vs-new-onboarding}

| Recurso | Site Builder (Legado) | Theme Builder (Novo) |
|---------|----------------------|-------------------|
| Método de configuração | Formulário baseado em assistente | Conversa guiada pelo agente |
| Geração do tema | Modelos limitados | Estrutura personalizada |
| Tokens de design | Entrada manual | Decisões guiadas |
| Flexibilidade | Opções fixas | Personalizável |
| Atualizações futuras | Não referenciadas | Armazenadas no site_brief |

## Solução de Problemas {#troubleshooting}

**O fluxo de onboarding não foi concluído**
- Reinicie o fluxo: "Iniciar o onboarding do Theme Builder"
- Verifique se sua instalação do WordPress está atualizada
- Verifique se o assistente de configuração (Setup Assistant agent) está ativado

**Meu site_brief não está sendo usado**
- Confirme se o agente tem acesso à memória
- Peça ao agente para "recuperar meu site brief"
- Verifique se a memória está ativada nas suas configurações

**O tema gerado não corresponde às minhas preferências**
- Use a habilidade Design System Aesthetics para refinar
- Peça ao agente para "regenerar o tema com [mudanças específicas]"
- Edite o theme.json diretamente para controle preciso

## Próximos Passos {#next-steps}

Após concluir o onboarding do Theme Builder:

1. **Verifique seu site**: Acesse seu site para ver o novo tema
2. **Refine o design**: Use a habilidade Design System Aesthetics para ajustes
3. **Adicione conteúdo**: Comece a construir o conteúdo do seu site
4. **Explore as habilidades**: Aprenda sobre outras capacidades do agente, como scaffold-block-theme e activate-theme
