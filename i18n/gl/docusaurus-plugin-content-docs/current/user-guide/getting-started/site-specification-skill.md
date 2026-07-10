---
title: Especificación de sitio Habilidad
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Habilidad de Especificación do Sitio {#site-specification-skill}

A **habilidade de Especificación do Sitio** é unha forma organizada de capturar os teus objetivos, o público e a identidade da marca do teu sitio. Esta información se guarda na tua memoria **site_brief**, que os agentes referencian entre sesións para proporcionar asistencia consistente e con contexto.

## O que é a Especificación do Sitio? {#what-is-site-specification}

A Especificación do Sitio é o proceso de documentar:

- **Propósito do sitio**: O que fai o teu sitio e por que existe
- **Público alvo**: Qui visita o teu sitio e o que necesitan
- **Identidade da marca**: As túas cores, tono e estilo visual
- **Objetivos de negocio**: Como é o éxito para o teu sitio
- **Estrutura do contenido**: Como está organizado o teu sitio

Esta especificación convierte-se no teu **site_brief**, unha memoria persistente que os agentes utilizan para entender o contexto do teu sitio.

## Por que usar a Especificación do Sitio? {#why-use-site-specification}

### Consistencia entre sesións {#consistency-across-sessions}

Sem o site_brief, terías de explicar o propósito do teu sitio cada vez que inicias unha nova sesión. Con ele, os agentes entenden inmediatamente:

- Os teus objetivos e público
- As túas cores e tono da marca
- A tua estrutura de contenido
- Os teus obxectivos de negocio

### Melhores recomendacións {#better-recommendations}

Os agentes utilizan o teu site_brief para:

- Sugerir características alinhadas co propósito do teu sitio
- Recomendar estruturas de contenido que coincidan con os teus obxectivos
- Propor diseños consistentes coa tua marca
- Evitar sugerir características incompatibles

### Onboarding más rápido {#faster-onboarding}

Os novos agentes (ou agentes en novas sesións) poden quedar rápidos ao ritmo ao ler o teu site_brief en lugar de hacer preguntas aclaratorias.

## Iniciación da Especificación do Sitio {#initiating-site-specification}

### Durante o Onboarding do Theme Builder {#during-theme-builder-onboarding}

A habilidad de Especificación do Sitio se inicia automáticamente durante o **flujo de onboarding do Theme Builder**. O agente Assistant de Configuración fai preguntas e constroi o teu site_brief.

### Iniciación Manual {#manual-initiation}

Podes iniciar a Especificación do Sitio en cualquier momento:

```
"Defina a especificación do meu sitio"
```

ou

```
"Axude-me a crear un resumen do sitio"
```

## O Proceso de Especificación do Sitio {#the-site-specification-process}

### Passo 1: Propósito do Sitio {#step-1-site-purpose}

O agente pregunta:

```
Que é o propósito principal do seu sitio?
- Tienda de comercio electrónico (E-commerce store)
- Blog ou sitio de contenido
- Portafolio o exposición
- Aplicación SaaS
- Comunidad o fórum
- Outro: [descreva]
```

Podes seleccionar unha categoría ou describir o teu propio propósito.

### Passo 2: Público Alvo {#step-2-target-audience}

```
Quén é o seu público principal?
- Consumidores / público en geral
- Profesionais de negocio
- Desenvolvedores / usuarios técnicos
- Estudantes / educadores
- Outro: [descreva]

Que son as súas necesidades principais?
```

### Passo 3: Identidade da Marca {#step-3-brand-identity}

```
Quais son as cores da súa marca?
- Cor principal: [selector de cores ou código hexadecimal]
- Cor secundaria: [selector de cores ou código hexadecimal]
- Cor de acento: [opcional]

Como describirías o tono da súa marca?
- Profesional / corporativo
- Creativo / artístico
- Divertido / casual
- Minimalista / moderno
- Cálido / amigable
```

### Passo 4: Obo Xestivos de Negocio {#step-4-business-goals}

```
Que é o éxito para o seu sitio?
- Generar leads (clientes potenciales)
- Vender produtos
- Construir comunidade
- Compartir conocimiento
- Establecer autoridade
- Outro: [descreva]

Que é a súa métrica principal?
- Receita
- Compromiso do usuario (User engagement)
- Alcance do contenido
- Conversións
- Outra
```

### Passo 5: Estrutura do Contido {#step-5-content-structure}

```
Como está organizado o seu contido?
- Plano (todo o contido no mesmo nivel)
- Jerárquico (categorías e subcategorías)
- Cronolóxico (estilo blog)
- Basado en produtos (catálogo)
- Outro: [descreva]

Que tipos de contido utiliza?
- Publicaciones de blog
- Páginas de produto
- Estudos de caso
- Documentación
- Vídeos
- Outro
```

## A Memoria do seu site_brief {#your-sitebrief-memory}

Após completar a Especificación do Sitio, a súa información está almacenada como **site_brief** na memoria do seu agente. Isto é un registro estructurado que contén:

## Visualizar e Actualizar o seu site_brief {#viewing-and-updating-your-sitebrief}

### Visualizar o seu site_brief {#view-your-sitebrief}

Pergunte ao agente:

```
"Mostra-me o meu site_brief"
```

ou

```
"O que sabes sobre o meu site?"
```

O agente mostrará a súa especificación guardada.

### Actualizar o seu site_brief {#update-your-sitebrief}

Se o seu sitio evolui, pode actualizalo:

```
"Actualiza o meu site_brief: agora estamos a apuntar a clientes B2B"
```

ou

```
"Refresca a mi especificación do sitio"
```

Isto fará volver a correr a habilidad Site Specification con a súa información existente como punto de partida.

## Como os Agentes Usan o site_brief {#how-agents-use-sitebrief}

### Recomendacións de Diseño {#design-recommendations}

Cando pida cambios no diseño, os agentes referencian o seu site_brief:

```
Ti: "Rediseña a mi páxina inicial"
Agente: "Basado no seu site_brief, está apuntando a damas de 25-45 anos
con un tono cálido e artesanal. Crearé un diseño que enfatize
o vosso marme artesanal e os valores sostenibles."
```

### Sugerencias de Funcionalidade {#feature-suggestions}

Os agentes suxíren funcionalidades alinhadas coas súas obxectivos:

```
Ti: "¿Que funcionalidades devo añadir?"
Agente: "Para unha tienda en liña centrada na fidelización do cliente,
recomendaría: programa de fidelidade, avaliacións de clientes,
boletín de email e recomendacións de produtos."
```

### Estrutura do Contido {#content-structure}

Os agentes propósen a organización do contido basándose na súa estrutura:

Como é que devo organizar o meu blog?
A: Como usas un catálogo de produtos com blog, sugiro organizar as publicações por categoria de produto e criar 'guias de estilo' que mostren vários produtos juntos.

## Melhores Práticas {#best-practices}

### Seja Específico {#be-specific}

Em vez de "público geral", descreva o seu público real:

- ✓ "Mulheres entre os 25 e 45 anos, interessadas em moda sustentável"
- ✗ "Todo mundo"

### Atualize Regularmente {#update-regularly}

À medida que o seu site evolui, atualize o seu `site_brief`:

- Quando mudar para um novo público
- Quando adicionar novas linhas de produtos
- Quando a identidade da sua marca mudar
- Quando os seus objetivos de negócio mudarem

### Use Terminologia Consistente {#use-consistent-terminology}

Use os mesmos termos em todas as sessões:

- ✓ Diga sempre "joias sustentáveis" (não "joias ecológicas" e "produtos verdes")
- ✓ Refira o seu público da mesma forma consistentemente

### Inclua Contexto {#include-context}

Forneça informações de fundo que ajudem os agentes a entenderem as suas decisões:

- "Estamos a visar profissionais que valorizam a qualidade acima do preço"
- "O nosso público é conhecedor de tecnologia e espera um design moderno"
- "Somos uma startup com recursos limitados, por isso precisamos de soluções económicas"

## Relação com o Onboarding do Theme Builder {#relationship-to-theme-builder-onboarding}

A habilidade Site Specification está integrada no **fluxo de onboarding do Theme Builder**. Quando termina o onboarding, o seu `site_brief` é criado automaticamente com as informações que forneceu.

Também pode executar a Site Specification de forma independente se quiser:

- Refinar a sua especificação depois da configuração inicial
- Atualizar o seu site brief à medida que o seu site evolui
- Criar uma especificação detalhada antes de começar o Theme Builder

## Resolução de Problemas {#troubleshooting}

**O meu `site_brief` não está a ser usado**
- Confirme se o agente tem acesso à memória
- Peça ao agente para "recordar o meu site brief"
- Verifique se a memória está ativada nas suas definições

**Quero empezar de novo con un novo site\_brief**
- Pide ao agente: "Limpa o meu site\_brief e comeza do zero"
- Depois executa a Especificación do Site outra vez

**O agente está a fazer recomendações que não batem com o meu site\_brief**
- Pide ao agente para "rever o meu site\_brief"
- Atualiza o teu site\_brief se estiver desatualizado
- Proporciona contexto adicional nas tuas solicitações

## Próximos Passos {#next-steps}

Depois de definires a tua especificación do site:

1. **Usa Theme Builder**: Cria un tema personalizado baseado no teu site\_brief
2. **Refina o Design**: Usa a habilidad Design System Aesthetics para traballo de diseño detallado
3. **Planea o Conteúdo**: Pide aos agentes recomendacións de estrutura de conteúdo
4. **Constrúe as Funcionalidades**: Solicita funcionalidades alinhadas coas tes do teu negocio
