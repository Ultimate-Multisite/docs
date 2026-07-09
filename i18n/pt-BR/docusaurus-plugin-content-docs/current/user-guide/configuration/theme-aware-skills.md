---
title: Habilidades Sensíveis ao Tema
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Habilidades Sensíveis ao Tema {#theme-aware-skills}

O Superdav AI Agent v1.10.0 inclui quatro novas habilidades embutidas e sensíveis ao tema que se adaptam automaticamente ao tema WordPress ativo. Essas habilidades fornecem orientações e capacidades especializadas adaptadas à arquitetura e aos recursos do seu tema.

## O Que São Habilidades Sensíveis ao Tema? {#what-are-theme-aware-skills}

Habilidades sensíveis ao tema são bases de conhecimento e conjuntos de ferramentas pré-configurados que o assistente de IA seleciona automaticamente com base no tema WordPress que está ativo no seu site. Quando você muda de tema, as habilidades disponíveis do assistente são atualizadas automaticamente — sem necessidade de configuração manual.

Cada habilidade inclui:

- **Documentação específica do tema** — orientação sobre como usar e personalizar o tema
- **Referências a blocos e padrões** — blocos, padrões e opções de design disponíveis
- **Exemplos de personalização** — trechos de código e padrões de configuração para tarefas comuns
- **Melhores práticas** — recomendações para a arquitetura e o fluxo de trabalho do tema

## Habilidades Sensíveis ao Tema Disponíveis {#available-theme-aware-skills}

### Block Themes (Temas de Blocos) {#block-themes}

**Aplica-se a:** Temas que usam a arquitetura baseada em blocos (Full Site Editing) do WordPress.

A habilidade Block Themes fornece orientação sobre:

- Criação e edição de templates usando o editor de blocos
- Trabalho com padrões de blocos e blocos reutilizáveis
- Personalização de estilos globais e configurações do theme.json
- Uso de blocos e variações de tema
- Construção de padrões de blocos personalizados para o seu site

**Ativada automaticamente quando:** Seu tema ativo é um tema de blocos (suporta o recurso `block-templates`).

### Classic Themes (Temas Clássicos) {#classic-themes}

**Aplica-se a:** Temas WordPress tradicionais que usam templates PHP e o editor clássico.

A habilidade Classic Themes fornece orientação sobre:

- Trabalho com arquivos de template PHP e hooks
- Personalização da aparência do tema via Customizer
- Uso de áreas de widget e barras laterais
- Modificação de CSS e desenvolvimento de temas filhos (child theme)
- Entendimento da hierarquia do tema e tags de template

**Ativada automaticamente quando:** Seu tema ativo é um tema clássico (não baseado em blocos).

### Kadence Blocks {#kadence-blocks}

**Aplica-se a:** Sites que usam o plugin Kadence Blocks para design avançado baseado em blocos.

A habilidade Kadence Blocks fornece orientação sobre:

- Uso da biblioteca avançada de blocos do Kadence (Hero, Testimonials, Pricing, etc.)
- Configuração das configurações de blocos e opções responsivas do Kadence
- Construção de layouts personalizados com os blocos de grade e container do Kadence
- Integração dos blocos Kadence com o seu tema
- Aproveitamento do sistema de design e presets do Kadence

**Ativada automaticamente quando:** O plugin Kadence Blocks está ativo no seu site.

### Kadence Theme {#kadence-theme}

**Aplica-se a:** Sites que usam o tema Kadence para design e personalização baseados em blocos.

A habilidade Kadence Theme fornece orientação sobre:

- Personalização do tema Kadence via estilos globais e theme.json
- Uso dos padrões e templates embutidos do Kadence
- Configuração das configurações e opções do tema Kadence
- Construção de designs personalizados com o sistema de design do Kadence
- Integração do Kadence com plugins e ferramentas populares

**Ativada automaticamente quando:** O tema Kadence é o seu tema ativo.

## Como as Habilidades São Selecionadas {#how-skills-are-selected}

O assistente detecta automaticamente seu tema ativo e os plugins instalados em cada mensagem. Se houver uma habilidade sensível ao tema correspondente disponível, ela é carregada automaticamente no contexto do assistente. Você não precisa habilitar ou alternar habilidades manualmente.

### Múltiplas Habilidades {#multiple-skills}

Se várias habilidades se aplicam ao seu site (por exemplo, se você tiver o Kadence Blocks e o Kadence Theme ativos), o assistente tem acesso a todas as habilidades aplicáveis e pode fazer referência a orientações de cada uma.

### Alternando Temas {#switching-themes}

Quando você muda seu tema ativo, as habilidades disponíveis do assistente são atualizadas automaticamente na próxima mensagem. Por exemplo:

1. Você está usando um tema de blocos com a habilidade **Block Themes** ativa.
2. Você muda para um tema clássico.
3. Na sua próxima mensagem, a habilidade **Classic Themes** é carregada automaticamente, e a habilidade **Block Themes** não está mais disponível.

## Usando Habilidades Sensíveis ao Tema {#using-theme-aware-skills}

Para aproveitar uma habilidade sensível ao tema, basta descrever o que você deseja fazer na interface de chat. O assistente fará referência à orientação da habilidade apropriada automaticamente.

### Exemplos de Prompts {#example-prompts}

**Para Block Themes:**
> "Crie uma seção hero com uma imagem de fundo e texto centralizado usando padrões de blocos."

**Para Classic Themes:**
> "Adicione uma área de widget personalizada à barra lateral usando um tema filho."

**Para Kadence Blocks:**
> "Construa uma seção de depoimentos usando o bloco Testimonials do Kadence."

**Para Kadence Theme:**
> "Personalize o layout do cabeçalho e o estilo do menu de navegação."

O assistente fornecerá orientações específicas do tema e exemplos de código adaptados ao seu tema e plugins ativos.

:::note
As habilidades sensíveis ao tema estão automaticamente disponíveis no Superdav AI Agent v1.10.0 e versões posteriores. Nenhuma configuração ou ajuste adicional é necessário.
:::
