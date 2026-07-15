---
title: Flujo de incorporación del Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Fluxo de Onboarding do Theme Builder

O Superdav AI Agent v1.12.0 introduce un **fluxo guiado de onboarding do Theme Builder** que axuda a crear un tema de bloco personalizado durante a súa configuración inicial. Isto substitú o modo Site Builder antigo por unha forma máis flexible e asistida por agente.

## O que é o Fluxo de Onboarding do Theme Builder? {#what-is-the-theme-builder-onboarding-flow}

O fluxo de onboarding do Theme Builder é un asistente interativo que:

- Te guía ata decisións de diseño (cores, tipografía, disposición)
- Captura as preferencias da identidade visual do teu sitio
- Genera un tema de bloco personalizado adaptado às tus necesidades
- Activa o tema automáticamente ao completarse

O fluxo está impulsado polo **Setup Assistant agent**, que te fai preguntas aclaratorias e constroi o teu tema de forma incremental.

## Comezar o Onboarding do Theme Builder {#starting-the-theme-builder-onboarding}

### Configuración Inicial (First-Run Setup) {#first-run-setup}

Cando inicies Superdav AI Agent por primeira vez en unha instalación nova de WordPress, verás:

```
¡Benxendo ao Superdav AI Agent!

¿Que querrías hacer?
1. Construir un tema personalizado (Theme Builder)
2. Usar un tema existente
3. Saltar a configuración por ahora
```

Seleita **"Construir un tema personalizado"** para entrar no fluxo de onboarding do Theme Builder.

### Activación Manual {#manual-activation}

Tamén podes iniciar o onboarding do Theme Builder en cualquier momento solicitando:

```
"Start the Theme Builder onboarding"
```

ou

```
"Help me create a custom theme"
```

## Os Pasos do Onboarding {#the-onboarding-steps}

### Passo 1: Selección do Modo {#step-1-mode-selection}

O Setup Assistant agent te pregunta sobre a túa preferencia:

```
¿Cómo querrías construir o teu tema?
- Guiado (Te haré preguntas e lo construiré por ti)
- Práctico (Te mostraré opcións e tu decides)
```

O **modo guiado** é recomendado para a mayoría de usuarios; o agente fai recomendacións de diseño basándose na túa industria e nos teus obxectivos.

### Passo 2: Especificación do Sitio {#step-2-site-specification}

Te pedirán información sobre o teu sitio:

- **Propósito do sitio**: E-commerce, blog, portfolio, SaaS, etc.
- **Público-alvo**: Quem são os seus visitantes?
- **Cores da marca**: Cores primárias e secundárias (ou "não tenho a certeza")
- **Tom**: Profissional, criativo, divertido, minimalista, etc.

Esta informação é guardada na sua memória **site_brief**, que os agentes referencian em sessões futuras.

### Passo 3: Decisões do Design System {#step-3-design-system-decisions}

O agente guia-o através da seleção dos *design tokens*:

- **Tipografia**: Família de fontes (serifa, sem serifa, monoespaçada) e escala de tamanhos
- **Paleta de cores**: Cores primárias, secundárias, de destaque (*accent*) e neutras
- **Espaçamento**: Layouts compactos, normais ou espaçosos
- **Movimento**: Animações e transições (se desejar)

### Passo 4: Geração do Tema {#step-4-theme-generation}

O agente Assistente de Configuração cria o seu tema de bloco personalizado com:

- `theme.json` contendo todos os seus *design tokens*
- Modelos de blocos para layouts comuns (página inicial, blog, contacto)
- Estilos de blocos personalizados que correspondem ao seu design system
- Metadados do tema e declarações de suporte a WordPress

### Passo 5: Ativação e Verificação {#step-5-activation-and-verification}

O tema é ativado automaticamente, e verá o seguinte:

```
✓ O seu tema personalizado está agora ativo!
  Nome do Tema: Tema [Nome do Seu Site]
  Cores: [Primária] / [Secundária]
  Tipografia: [Família de Fontes]

  Visite o seu site para ver o novo design.
```

Depois, pode visitar o seu site para verificar se o tema está a aparecer corretamente.

## Especificação do Site e Memória site_brief {#site-specification-and-sitebrief-memory}

Durante a configuração inicial (*onboarding*), o agente captura a especificação do seu site numa categoria de memória chamada **site_brief**. Isto inclui:

- Propósito e objetivos do site
- Público-alvo
- Cores da marca e tom
- Preferências de design
- Estrutura de conteúdo

### Por que o site_brief é importante {#why-sitebrief-matters}

Em sessões futuras, os agentes referenciam o seu *site_brief* para:

### Visualización del resumen de tu sitio_brief {#viewing-your-sitebrief}

Podes preguntar ao agente:

```
"Mostra o meu resumo do sitio brief"
```

ou

```
"Que sabes sobre o meu sitio?"
```

O agente mostrará a tua especificación do sitio almacenada.

## Personalización Após a Onboarding {#customizing-after-onboarding}

Despois de completar a onboarding do Theme Builder, podes:

### Usar a Habilidade Estética do Design System {#use-the-design-system-aesthetics-skill}

Pede refinos de diseño:

```
"Refina a tipografía para ser máis moderna"
```

ou

```
"Ajusta a paleta de cores para ser máis quente"
```

A **habilidade estética do Design System** guía-te ata actualizacións de diseño direcionadas.

### Editar theme.json Diretamente {#edit-themejson-directly}

Para usuarios avanzados, edita `/wp-content/themes/[theme-name]/theme.json` para ajustar:

- Color tokens (tokens de cor)
- Typography scales (escalas tipográficas)
- Spacing values (valores de espaçamento)
- Border and shadow definitions (definición de borda e sombra)

### Crear Modelos de Bloco Personalizados {#create-custom-block-templates}

Usa o editor de bloc do WordPress para crear modelos personalizados para:

- Homepage layouts (disposicións da página inicial)
- Blog post pages (páginas de entrada de blog)
- Product pages (páginas de produto)
- Contact forms (formularios de contacto)

## Comparación: Antigo vs. Novo Onboarding {#comparison-old-vs-new-onboarding}

| Característica | Site Builder (Legado) | Theme Builder (Novo) |
|---------|----------------------|-------------------|
| Método de configuración | Form basado en asistente | Conversa guiada pelo agente |
| Generación de temas | Modelos limitados | Estrutura personalizada |
| Tokens de diseño | Entrada manual | Decididios guiados |
| Flexibilidade | Opcións fixas | Personalizable |
| Actualización futura | Non referenciado | Almacenado no site_brief |

## Solución de Problemas {#troubleshooting}

**A onboarding non se completou**
- Reinicia o fluxo: "Start the Theme Builder onboarding" (Iniciar a onboarding do Theme Builder)
- Verifica que a tua instalación do WordPress está actualizada
- Confirma que o agente Setup Assistant está activado

**O meu site_brief non está a ser usado**
- Confirme que o agente tem acesso à memória
- Peza ao agente para "recordar o meu site brief"
- Verifique se a memória está ativada nas suas configurações

**O tema gerado não corresponde às minhas preferências**
- Use a habilidade Design System Aesthetics para o refinar
- Peza ao agente para "regenerar o tema com [mudanças específicas]"
- Edite o theme.json diretamente para um controlo preciso

## Próximos Passos {#next-steps}

Depois de completar o onboarding do Theme Builder:

1. **Verifique o seu site**: Visite o seu site para ver o novo tema
2. **Refine o design**: Use a habilidade Design System Aesthetics para ajustes
3. **Adicione conteúdo**: Comece a construir o conteúdo do seu site
4. **Explore as capacidades**: Aprenda sobre outras capacidades do agente como scaffold-block-theme e activate-theme
