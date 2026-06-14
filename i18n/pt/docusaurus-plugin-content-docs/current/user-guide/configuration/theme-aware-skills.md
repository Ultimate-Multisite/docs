---
title: Habilidades Conscientes do Tema
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Habilidades Sensíveis ao Tema

O Superdav AI Agent v1.10.0 lança quatro novas habilidades integradas sensíveis ao tema que se adaptam automaticamente ao seu tema do WordPress ativo. Essas habilidades fornecem orientações e capacidades especializadas, personalizadas para a arquitetura e os recursos do seu tema.

## O Que São Habilidades Sensíveis ao Tema?

Habilidades sensíveis ao tema são bases de conhecimento e conjuntos de ferramentas pré-configurados que o assistente de IA seleciona automaticamente com base no tema do WordPress atualmente ativo no seu site. Quando você troca de tema, as habilidades disponíveis do assistente são atualizadas automaticamente — não é necessária nenhuma configuração manual.

Cada habilidade inclui:

- **Documentação específica do tema** — orientações sobre como usar e personalizar o tema
- **Referências a blocos e padrões (patterns)** — blocos, padrões e opções de design disponíveis
- **Exemplos de personalização** — trechos de código e padrões de configuração para tarefas comuns
- **Melhores práticas** — recomendações para a arquitetura e o fluxo de trabalho do tema

## Habilidades Sensíveis ao Tema Disponíveis

### Temas Baseados em Blocos (Block Themes)

**Aplica-se a:** Temas que utilizam a arquitetura baseada em blocos do WordPress (Full Site Editing).

A habilidade Block Themes fornece orientações sobre:

- Criação e edição de templates usando o editor de blocos
- Trabalho com padrões de blocos e blocos reutilizáveis
- Personalização de estilos globais e configurações do theme.json
- Uso de blocos e variações de tema
- Construção de padrões de blocos personalizados para o seu site

**Ativada automaticamente quando:** Seu tema ativo é um tema baseado em blocos (suporta a funcionalidade `block-templates`).

### Temas Clássicos (Classic Themes)

**Aplica-se a:** Temas tradicionais do WordPress que utilizam templates PHP e o editor clássico.

A habilidade Classic Themes fornece orientações sobre:

Trabalhando com arquivos de template PHP e hooks
Personalizando a aparência do tema via Customizer
Usando áreas de widget e barras laterais
Modificando CSS e desenvolvimento de child theme
Entendendo a hierarquia do tema e tags de template

**Ativado automaticamente quando:** Seu tema ativo é um tema clássico (não baseado em blocos).

### Kadence Blocks

**Aplica-se a:** Sites que usam o plugin Kadence Blocks para design avançado baseado em blocos.

A habilidade Kadence Blocks fornece orientações sobre:

- Como usar a biblioteca de blocos avançados do Kadence (Hero, Testemunhos, Preços, etc.)
- Como configurar as opções dos blocos Kadence e as opções responsivas
- Como construir layouts personalizados com os blocos de grade e container do Kadence
- Como integrar os blocos Kadence ao seu tema
- Como aproveitar o sistema de design e os presets do Kadence

**Ativado automaticamente quando:** O plugin Kadence Blocks está ativo no seu site.

### Tema Kadence

**Aplica-se a:** Sites que usam o tema Kadence para design e personalização baseados em blocos.

A habilidade Tema Kadence fornece orientações sobre:

- Como personalizar o tema Kadence via estilos globais e theme.json
- Como usar os padrões de bloco e templates integrados do Kadence
- Como configurar as opções e configurações do tema Kadence
- Como construir designs personalizados com o sistema de design do Kadence
- Como integrar o Kadence com plugins e ferramentas populares

**Ativado automaticamente quando:** O tema Kadence é o seu tema ativo.

## Como as Habilidades São Selecionadas

O assistente detecta automaticamente seu tema ativo e os plugins instalados em cada mensagem. Se uma habilidade compatível com o tema estiver disponível, ela é carregada no contexto do assistente automaticamente. Você não precisa ativar ou alternar habilidades manualmente.

### Múltiplas Habilidades

Se várias habilidades se aplicam ao seu site (por exemplo, se você tem tanto o Kadence Blocks quanto o Kadence Theme ativos), o assistente tem acesso a todas as habilidades aplicáveis e pode fazer referência às orientações de cada uma.

### Trocar de Tema

Quando você muda o tema ativo, as habilidades disponíveis do assistente são atualizadas automaticamente na próxima mensagem. Por exemplo:

1. Você está usando um tema baseado em blocos com a habilidade **Block Themes** ativa.
2. Você troca para um tema clássico.
3. Na sua próxima mensagem, a habilidade **Classic Themes** é carregada automaticamente e a habilidade **Block Themes** não estará mais disponível.

## Usando Habilidades Sensíveis ao Tema

Para aproveitar uma habilidade sensível ao tema, basta descrever o que você quer fazer na interface de chat. O assistente fará referência à orientação da habilidade apropriada automaticamente.

### Exemplos de Prompts

**Para Block Themes:**
> "Crie uma seção de destaque com imagem de fundo e texto centralizado usando padrões de blocos."

**Para Classic Themes:**
> "Adicione uma área de widget personalizada na barra lateral usando um tema filho."

**Para Kadence Blocks:**
> "Construa uma seção de depoimentos usando o bloco Kadence Testimonials."

**Para Kadence Theme:**
> "Personalize o layout do cabeçalho e o estilo do menu de navegação."

O assistente fornecerá orientações específicas do tema e exemplos de código adaptados ao seu tema e plugins ativos.

:::note
Habilidades sensíveis ao tema estão automaticamente disponíveis no Superdav AI Agent v1.10.0 e posteriores. Não é necessária nenhuma configuração ou preparação adicional.
:::
