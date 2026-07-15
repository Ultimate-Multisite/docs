---
title: Especificação de Habilidade do Site
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Habilidade de Especificação do Site

A habilidade de **Especificação do Site** é uma abordagem estruturada para capturar os objetivos, o público e a identidade da sua marca no site. Essas informações são armazenadas na sua memória **site\_brief**, que os agentes referenciam entre sessões para fornecer assistência consistente e contextualizada.

## O que é Especificação do Site? {#what-is-site-specification}

Especificação do Site é o processo de documentar:

- **Propósito do site**: O que seu site faz e por que ele existe
- **Público-alvo**: Quem visita seu site e o que eles precisam
- **Identidade da marca**: Suas cores, tom e estilo visual
- **Objetivos de negócio**: Como o sucesso se parece para o seu site
- **Estrutura do conteúdo**: Como seu site está organizado

Esta especificação se torna o seu **site\_brief**, uma memória persistente que os agentes usam para entender o contexto do seu site.

## Por que usar a Especificação do Site? {#why-use-site-specification}

### Consistência entre Sessões {#consistency-across-sessions}

Sem o site\_brief, você teria que explicar o propósito do seu site toda vez que iniciasse uma nova sessão. Com ele, os agentes entendem imediatamente:

- Os objetivos e o público do seu site
- As cores e o tom da sua marca
- A estrutura do seu conteúdo
- Os seus objetivos de negócio

### Melhores Recomendações {#better-recommendations}

Os agentes usam o seu site\_brief para:

- Sugerir recursos alinhados ao propósito do seu site
- Recomendar estruturas de conteúdo que correspondam aos seus objetivos
- Propor designs consistentes com a sua marca
- Evitar sugerir recursos incompatíveis

### Onboarding Mais Rápido {#faster-onboarding}

Novos agentes (ou agentes em novas sessões) podem se atualizar rapidamente lendo o seu site\_brief em vez de fazer perguntas de esclarecimento.

## Iniciando a Especificação do Site {#initiating-site-specification}

### Durante o Onboarding do Theme Builder {#during-theme-builder-onboarding}

A habilidade de Especificação do Site é iniciada automaticamente durante o fluxo de **onboarding do Theme Builder**. O agente Assistente de Configuração faz perguntas e constrói seu site\_brief.

### Iniciação Manual {#manual-initiation}

Você pode iniciar a Especificação do Site a qualquer momento:

```
"Vamos definir a especificação do meu site"
```

ou

```
"Ajude-me a criar um briefing do site"
```

## O Processo de Especificação do Site {#the-site-specification-process}

### Passo 1: Propósito do Site {#step-1-site-purpose}

O agente perguntará:

```
Qual é o propósito principal do seu site?
- Loja de e-commerce
- Blog ou site de conteúdo
- Portfólio ou vitrine
- Aplicação SaaS
- Comunidade ou fórum
- Outro: [descreva]
```

Você pode selecionar uma categoria ou descrever o seu próprio propósito.

### Passo 2: Público-Alvo {#step-2-target-audience}

```
Quem é o seu público principal?
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
- Cor de destaque (opcional): [seletor de cores ou código hexadecimal]

Como você descreveria o tom da sua marca?
- Profissional / corporativo
- Criativo / artístico
- Divertido / casual
- Minimalista / moderno
- Aconchegante / amigável
```

### Passo 4: Metas de Negócio {#step-4-business-goals}

```
Como é o sucesso para o seu site?
- Gerar leads
- Vender produtos
- Construir comunidade
- Compartilhar conhecimento
- Estabelecer autoridade
- Outro: [descreva]

Qual é a sua métrica principal?
- Receita
- Engajamento do usuário
- Alcance do conteúdo
- Conversões
- Outra
```

### Passo 5: Estrutura de Conteúdo {#step-5-content-structure}

```
Como seu conteúdo está organizado?
- Plano (todo o conteúdo no mesmo nível)
- Hierárquico (categorias e subcategorias)
- Cronológico (estilo blog)
- Baseado em produtos (catálogo)
- Outro: [descreva]

Que tipos de conteúdo você usa?
- Posts de blog
- Páginas de produtos
- Estudos de caso
- Documentação
- Vídeos
- Outro
```

## Memória do seu site_brief {#your-sitebrief-memory}

Após completar a Especificação do Site, suas informações são armazenadas como **site_brief** na memória do seu agente. Este é um registro estruturado contendo:

## Visualizar e Atualizar Seu site_brief {#viewing-and-updating-your-sitebrief}

### Visualizar seu site_brief {#view-your-sitebrief}

Pergunte ao agente:

```
"Mostre meu site brief"
```

ou

```
"O que você sabe sobre meu site?"
```

O agente exibirá sua especificação salva.

### Atualizar seu site_brief {#update-your-sitebrief}

Se o seu site evoluir, você pode atualizá-lo:

```
"Atualize meu site brief: agora estamos mirando clientes B2B"
```

ou

```
"Atualize minha especificação do site"
```

Isso executará novamente a habilidade Site Specification com suas informações existentes como ponto de partida.

## Como os Agentes Usam o site_brief {#how-agents-use-sitebrief}

### Recomendações de Design {#design-recommendations}

Quando você pede alterações de design, os agentes se referem ao seu site_brief:

```
Você: "Redesenhe minha página inicial"
Agente: "Com base no seu site brief, você está mirando mulheres
de 25 a 45 anos com um tom caloroso e artesanal. Criarei um design que enfatize
suas joias artesanais e valores sustentáveis."
```

### Sugestões de Funcionalidades {#feature-suggestions}

Os agentes sugerem funcionalidades alinhadas aos seus objetivos:

```
Você: "Que funcionalidades devo adicionar?"
Agente: "Para uma loja de e-commerce focada na fidelidade do cliente,
eu recomendaria: programa de fidelidade, avaliações de clientes, newsletter por e-mail
e recomendações de produtos."
```

### Estrutura de Conteúdo {#content-structure}

Os agentes propõem a organização do conteúdo com base na sua estrutura:

Você: "Como devo organizar meu blog?"
Agente: "Como você usa um catálogo de produtos com blog, sugiro organizar as postagens por categoria de produto e criar 'guias de estilo' que mostrem vários produtos juntos."

## Melhores Práticas {#best-practices}

### Seja Específico {#be-specific}

Em vez de dizer "público geral", descreva seu público real:

- ✓ "Mulheres de 25 a 45 anos, interessadas em moda sustentável"
- ✗ "Todo mundo"

### Atualize Regularmente {#update-regularly}

À medida que seu site evolui, atualize seu `site_brief`:

- Quando você mudar o foco para um novo público
- Quando você adicionar novas linhas de produtos
- Quando sua identidade de marca mudar
- Quando seus objetivos de negócio mudarem

### Use Terminologia Consistente {#use-consistent-terminology}

Use os mesmos termos em todas as sessões:

- ✓ Sempre diga "joias sustentáveis" (não "joias ecológicas" e "produtos verdes")
- ✓ Refira seu público da mesma forma consistentemente

### Inclua Contexto {#include-context}

Forneça o contexto que ajuda os agentes a entenderem suas decisões:

- "Estamos mirando profissionais que valorizam qualidade acima do preço"
- "Nosso público é antenado em tecnologia e espera um design moderno"
- "Somos uma startup com recursos limitados, então precisamos de soluções econômicas"

## Relação com o Onboarding do Theme Builder {#relationship-to-theme-builder-onboarding}

A habilidade Site Specification está integrada ao **fluxo de onboarding do Theme Builder**. Ao concluir o onboarding, seu `site_brief` é criado automaticamente com as informações que você forneceu.

Você também pode executar a Site Specification independentemente se quiser:

- Refinar sua especificação após a configuração inicial
- Atualizar seu site brief à medida que seu site evolui
- Criar uma especificação detalhada antes de começar o Theme Builder

## Solução de Problemas {#troubleshooting}

**Meu site_brief não está sendo usado**
- Confirme se o agente tem acesso à memória
- Peça ao agente para "recuperar meu site brief" (recall my site brief)
- Verifique se a memória está ativada nas suas configurações

**Quero começar do zero com um novo site\_brief**
- Peça ao agente: "Limpe meu site brief e comece do zero"
- Depois, execute a Especificação do Site novamente

**O agente está fazendo recomendações que não batem com o meu site\_brief**
- Peça ao agente para "revisar meu site brief"
- Atualize seu site\_brief se ele estiver desatualizado
- Forneça contexto adicional nas suas solicitações

## Próximos Passos {#next-steps}

Depois de definir a especificação do seu site:

1. **Use Theme Builder**: Crie um tema personalizado baseado no seu site\_brief
2. **Refine Design**: Use a habilidade Estética do Design System para trabalhos de design detalhados
3. **Planeje o Conteúdo**: Peça recomendações de estrutura de conteúdo aos agentes
4. **Construa Funcionalidades**: Solicite funcionalidades alinhadas com seus objetivos de negócio
