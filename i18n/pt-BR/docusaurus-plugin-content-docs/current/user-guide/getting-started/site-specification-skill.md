---
title: Habilidade de Especificação de Site
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Habilidade de Especificação do Site

A **habilidade de Especificação do Site** é uma abordagem estruturada para capturar os objetivos, o público e a identidade da marca do seu site. Essas informações são armazenadas na sua memória **site_brief**, que os agents consultam em diferentes sessões para fornecer assistência consistente e que entende o contexto.

## O que é Especificação do Site? {#what-is-site-specification}

Especificação do Site é o processo de documentar:

- **Propósito do site**: O que seu site faz e por que ele existe
- **Público-alvo**: Quem visita seu site e o que eles precisam
- **Identidade da marca**: Suas cores, tom e estilo visual
- **Objetivos de negócio**: Como o sucesso se parece para o seu site
- **Estrutura de conteúdo**: Como seu site está organizado

Essa especificação se torna o seu **site_brief**, uma memória persistente que os agents usam para entender o contexto do seu site.

## Por que usar Especificação do Site? {#why-use-site-specification}

### Consistência entre Sessões {#consistency-across-sessions}

Sem o site_brief, você teria que explicar o propósito do seu site toda vez que iniciasse uma nova sessão. Com ele, os agents entendem imediatamente:

- Os objetivos e o público do seu site
- As cores e o tom da sua marca
- A estrutura do seu conteúdo
- Os objetivos de negócio

### Melhores Recomendações {#better-recommendations}

Os agents usam o seu site_brief para:

- Sugerir funcionalidades alinhadas ao propósito do seu site
- Recomendar estruturas de conteúdo que combinam com seus objetivos
- Propor designs consistentes com sua marca
- Evitar sugerir funcionalidades que não combinam

### Onboarding Mais Rápido {#faster-onboarding}

Novos agents (ou agents em novas sessões) podem se atualizar rapidamente lendo o seu site_brief, em vez de fazer perguntas de esclarecimento.

## Iniciando a Especificação do Site {#initiating-site-specification}

### Durante o Onboarding do Theme Builder {#during-theme-builder-onboarding}

A habilidade de Especificação do Site é iniciada automaticamente durante o **fluxo de onboarding do Theme Builder**. O agent Setup Assistant faz perguntas e constrói o seu site_brief.

### Iniciação Manual {#manual-initiation}

Você pode iniciar a Especificação do Site a qualquer momento:

```
"Vamos definir a especificação do meu site"
```

ou

```
"Ajude-me a criar um site brief"
```

## O Processo de Especificação do Site {#the-site-specification-process}

### Passo 1: Propósito do Site {#step-1-site-purpose}

O agent pergunta:

```
Qual é o propósito principal do seu site?
- Loja de e-commerce
- Blog ou site de conteúdo
- Portfólio ou vitrine
- Aplicação SaaS
- Comunidade ou fórum
- Outro: [descreva]
```

Você pode selecionar uma categoria ou descrever seu próprio propósito.

### Passo 2: Público-Alvo {#step-2-target-audience}

```
Quem é seu público principal?
- Consumidores / público geral
- Profissionais de negócios
- Desenvolvedores / usuários técnicos
- Estudantes / educadores
- Outro: [descreva]

Quais são as principais necessidades deles?
```

### Passo 3: Identidade da Marca {#step-3-brand-identity}

```
Quais são as cores da sua marca?
- Cor primária: [seletor de cores ou código hexadecimal]
- Cor secundária: [seletor de cores ou código hexadecimal]
- Cor de destaque: [opcional]

Como você descreveria o tom da sua marca?
- Profissional / corporativo
- Criativo / artístico
- Divertido / casual
- Minimalista / moderno
- Acolhedor / amigável
```

### Passo 4: Objetivos de Negócio {#step-4-business-goals}

```
Como é o sucesso para o seu site?
- Gerar leads
- Vender produtos
- Construir comunidade
- Compartilhar conhecimento
- Estabelecer autoridade
- Outro: [descreva]

Qual é sua métrica principal?
- Receita
- Engajamento do usuário
- Alcance de conteúdo
- Conversões
- Outro
```

### Passo 5: Estrutura de Conteúdo {#step-5-content-structure}

```
Como seu conteúdo é organizado?
- Plano (todo o conteúdo no mesmo nível)
- Hierárquico (categorias e subcategorias)
- Cronológico (estilo blog)
- Baseado em produtos (catálogo)
- Outro: [descreva]

Quais tipos de conteúdo você usa?
- Posts de blog
- Páginas de produto
- Estudos de caso
- Documentação
- Vídeos
- Outro
```

## Sua Memória site_brief {#your-sitebrief-memory}

Após completar a Especificação do Site, suas informações são armazenadas como **site_brief** na memória do seu agent. Este é um registro estruturado contendo:

```json
{
  "site_purpose": "Loja de e-commerce de joias artesanais",
  "target_audience": "Mulheres de 25-45 anos, interessadas em moda sustentável",
  "brand_colors": {
    "primary": "#8B4513",
    "secondary": "#D2B48C",
    "accent": "#2F4F4F"
  },
  "brand_tone": "Acolhedor, artesanal, sustentável",
  "business_goals": ["Gerar vendas", "Construir fidelidade à marca"],
  "primary_metric": "Receita",
  "content_structure": "Catálogo de produtos com blog",
  "content_types": ["Páginas de produto", "Posts de blog", "Histórias de clientes"]
}
```

## Visualizando e Atualizando seu site_brief {#viewing-and-updating-your-sitebrief}

### Visualizar seu site_brief {#view-your-sitebrief}

Pergunte ao agent:

```
"Mostre meu site brief"
```

ou

```
"O que você sabe sobre o meu site?"
```

O agent exibirá sua especificação armazenada.

### Atualizar seu site_brief {#update-your-sitebrief}

Se o seu site evoluir, você pode atualizá-lo:

```
"Atualize meu site brief: agora estamos focando em clientes B2B"
```

ou

```
"Atualizar minha especificação do site"
```

Isso irá reexecutar a habilidade de Especificação do Site com suas informações existentes como ponto de partida.

## Como os Agents Usam o site_brief {#how-agents-use-sitebrief}

### Recomendações de Design {#design-recommendations}

Quando você pede mudanças de design, os agents consultam seu site_brief:

```
Você: "Redesenhe minha página inicial"
Agent: "Com base no seu site brief, você está focado em mulheres de 25-45 anos
com um tom acolhedor e artesanal. Vou criar um design que enfatiza
suas joias artesanais e valores sustentáveis."
```

### Sugestões de Funcionalidades {#feature-suggestions}

Os agents sugerem funcionalidades alinhadas aos seus objetivos:

```
Você: "Que funcionalidades devo adicionar?"
Agent: "Para uma loja de e-commerce focada na fidelidade do cliente,
eu recomendaria: programa de fidelidade, avaliações de clientes, newsletter por e-mail
e recomendações de produtos."
```

### Estrutura de Conteúdo {#content-structure}

Os agents propõem organização de conteúdo baseada na sua estrutura:

```
Você: "Como devo organizar meu blog?"
Agent: "Como você usa um catálogo de produtos com blog, eu sugiro
organizar os posts por categoria de produto e criar 'guias de estilo'
que mostrem vários produtos juntos."
```

## Melhores Práticas {#best-practices}

### Seja Específico {#be-specific}

Em vez de "público geral", descreva seu público real:

- ✓ "Mulheres de 25-45 anos, interessadas em moda sustentável"
- ✗ "Todo mundo"

### Atualize Regularmente {#update-regularly}

À medida que seu site evolui, atualize seu site_brief:

- Quando você mudar o foco para um novo público
- Quando adicionar novas linhas de produtos
- Quando sua identidade de marca mudar
- Quando seus objetivos de negócio mudarem

### Use Terminologia Consistente {#use-consistent-terminology}

Use os mesmos termos em diferentes sessões:

- ✓ Diga sempre "joias sustentáveis" (e não "joias ecológicas" e "produtos verdes")
- ✓ Refira-se consistentemente ao seu público da mesma maneira

### Inclua Contexto {#include-context}

Forneça informações de fundo que ajudem os agents a entender suas decisões:

- "Estamos focando em profissionais que valorizam a qualidade acima do preço"
- "Nosso público é antenado em tecnologia e espera um design moderno"
- "Somos uma startup sem investimento, então precisamos de soluções econômicas"

## Relação com o Onboarding do Theme Builder {#relationship-to-theme-builder-onboarding}

A habilidade de Especificação do Site é integrada ao **fluxo de onboarding do Theme Builder**. Quando você completa o onboarding, seu site_brief é criado automaticamente com as informações que você forneceu.

Você também pode executar a Especificação do Site de forma independente se quiser:

- Refinar sua especificação após a configuração inicial
- Atualizar seu site brief à medida que seu site evolui
- Criar uma especificação detalhada antes de começar o Theme Builder

## Solução de Problemas {#troubleshooting}

**Meu site_brief não está sendo usado**
- Confirme se o agent tem acesso à memória
- Peça ao agent para "recordar meu site brief"
- Verifique se a memória está ativada nas suas configurações

**Quero começar do zero com um novo site_brief**
- Peça ao agent: "Limpar meu site brief e começar do zero"
- Em seguida, execute a Especificação do Site novamente

**O agent está fazendo recomendações que não combinam com meu site_brief**
- Peça ao agent para "revisar meu site brief"
- Atualize seu site_brief se ele estiver desatualizado
- Forneça contexto adicional em seus pedidos

## Próximos Passos {#next-steps}

Após definir a especificação do seu site:

1. **Usar Theme Builder**: Crie um tema personalizado baseado no seu site_brief
2. **Refinar Design**: Use a habilidade Design System Aesthetics para trabalhos de design detalhados
3. **Planejar Conteúdo**: Peça aos agents recomendações de estrutura de conteúdo
4. **Construir Funcionalidades**: Solicite funcionalidades alinhadas aos seus objetivos de negócio
