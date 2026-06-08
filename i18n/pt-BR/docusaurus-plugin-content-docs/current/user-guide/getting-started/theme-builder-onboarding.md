---
title: Fluxo de Integração do Construtor de Temas
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Fluxo de Integração do Theme Builder

O Superdav AI Agent v1.12.0 apresenta um **fluxo de integração (onboarding flow) guiado do Theme Builder** que ajuda você a criar um tema de bloco personalizado durante a configuração inicial. Isso substitui o modo Site Builder legado por uma abordagem mais flexível e assistida por agentes.

## O que é o Fluxo de Integração do Theme Builder?

O fluxo de integração do Theme Builder é um assistente de configuração interativo que:

- Guia você pelas decisões de design (cores, tipografia, layout)
- Captura as preferências de identidade visual do seu site
- Gera um tema de bloco personalizado adaptado às suas necessidades
- Ativa o tema automaticamente ao finalizar

O fluxo é alimentado pelo **Setup Assistant agent**, que faz perguntas de esclarecimento e constrói seu tema gradualmente.

## Iniciando o Theme Builder Onboarding

### Configuração na Primeira Vez

Ao lançar o Superdav AI Agent pela primeira vez em uma nova instalação do WordPress, você verá:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Selecione **"Build a custom theme"** para entrar no fluxo de integração do Theme Builder.

### Ativação Manual

Você também pode iniciar o onboarding do Theme Builder a qualquer momento solicitando:

```
"Start the Theme Builder onboarding"
```

ou

```
"Help me create a custom theme"
```

## Os Passos de Integração

### Passo 1: Seleção do Modo

O Setup Assistant agent pergunta sobre sua preferência:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

O **modo Guided** é recomendado para a maioria dos usuários; o agent faz recomendações de design com base no seu setor e objetivos.

### Passo 2: Especificação do Site

Você será questionado sobre o seu site:

- **Site purpose**: E-commerce, blog, portfólio, SaaS, etc.
- **Target audience**: Quem são seus visitantes?
- **Brand colors**: Cores primárias e secundárias (ou "Não tenho certeza")
- **Tone**: Profissional, criativo, divertido, minimalista, etc.

Essa informação é armazenada na sua memória **site_brief**, que os agents consultam em sessões futuras.

### Passo 3: Decisões do Design System

O agent guia você através da seleção de tokens de design:

- **Typography**: Família de fonte (serif, sans-serif, monospace) e escala de tamanho
- **Color palette**: Cores primárias, secundárias, de destaque (accent) e neutras
- **Spacing**: Layouts compactos, normais ou espaçosos
- **Motion**: Animações e transições (se desejado)

### Passo 4: Geração do Tema

O Setup Assistant agent cria o esqueleto do seu tema de bloco personalizado com:

- `theme.json` contendo todos os seus tokens de design
- Modelos de bloco para layouts comuns (homepage, blog, contato)
- Estilos de bloco personalizados que correspondem ao seu design system
- Metadados do tema e declarações de suporte do WordPress

### Passo 5: Ativação e Verificação

O tema é ativado automaticamente, e você verá:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

Em seguida, você pode visitar seu site para verificar se o tema está sendo exibido corretamente.

## Especificação do Site e Memória site_brief

Durante o onboarding, o agent captura a especificação do seu site em uma categoria de memória **site_brief**. Isso inclui:

- Propósito e objetivos do site
- Público-alvo
- Cores e tom da marca
- Preferências de design
- Estrutura de conteúdo

### Por que o site_brief é importante

Em sessões futuras, os agents consultam seu site_brief para:

- Manter a consistência do design em mudanças
- Sugerir recursos alinhados ao propósito do seu site
- Fornecer recomendações contextuais
- Evitar repetir perguntas de configuração

### Visualizando seu site_brief

Você pode perguntar ao agent:

```
"Show me my site brief"
```

ou

```
"What do you know about my site?"
```

O agent exibirá a especificação do seu site armazenada.

## Personalizando Após o Onboarding

Após a conclusão do onboarding do Theme Builder, você pode:

### Usar a Habilidade Design System Aesthetics

Solicitar refinamentos de design:

```
"Refine the typography to be more modern"
```

ou

```
"Adjust the color palette to be warmer"
```

A **Design System Aesthetics skill** guia você por atualizações de design direcionadas.

### Editar theme.json Diretamente

Para usuários avançados, edite `/wp-content/themes/[theme-name]/theme.json` para ajustar:

- Tokens de cor
- Escalas de tipografia
- Valores de espaçamento
- Definições de borda e sombra

### Criar Modelos de Bloco Personalizados

Use o editor de blocos do WordPress para criar modelos personalizados para:

- Layouts de página inicial
- Páginas de posts de blog
- Páginas de produtos
- Formulários de contato

## Comparação: Antigo vs. Novo Onboarding

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Setup method | Formulário baseado em wizard | Conversa guiada por agent |
| Theme generation | Modelos limitados | Estrutura personalizada (scaffolding) |
| Design tokens | Entrada manual | Decisões guiadas |
| Flexibility | Opções fixas | Personalizável |
| Future updates | Não referenciado | Armazenado em site_brief |

## Solução de Problemas (Troubleshooting)

**O fluxo de onboarding não foi concluído**
- Reiniciar o fluxo: "Start the Theme Builder onboarding"
- Verificar se sua instalação do WordPress está atualizada
- Verificar se o Setup Assistant agent está ativado

**Meu site_brief não está sendo usado**
- Confirmar que o agent tem acesso à memória
- Pedir ao agent para "recall my site brief"
- Verificar se a memória está ativada nas suas configurações

**O tema gerado não corresponde às minhas preferências**
- Usar a Design System Aesthetics skill para refinar
- Pedir ao agent para "regenerate the theme with [specific changes]"
- Editar theme.json diretamente para controle preciso

## Próximos Passos

Após concluir o onboarding do Theme Builder:

1. **Verificar seu site**: Visite seu site para ver o novo tema
2. **Refinar o design**: Use a Design System Aesthetics skill para ajustes
3. **Adicionar conteúdo**: Comece a construir o conteúdo do seu site
4. **Explorar habilidades**: Saiba mais sobre outras habilidades do agent, como scaffold-block-theme e activate-theme
