---
title: Habilidades conscientes do tema
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Habilidades Conscientes do Tema

O Superdav AI Agent v1.10.0 lanza quatro novas habilidades integradas conscientes do tema que se adaptan automáticamente ao seu tema WordPress ativo. Estas habilidades fornecen orientação e capacidades especializadas adaptadas à arquitetura e aos recursos do seu tema.

## O Que São Habilidades Conscientes do Tema?

As habilidades conscientes do tema são bases de conhecimento pré-configuradas e conjuntos de ferramentas que o assistente de IA seleciona automaticamente com base no tema WordPress atualmente ativo no seu site. Quando muda de tema, as habilidades disponíveis do assistente atualizam-se automaticamente — não é necessária nenhuma configuração manual.

Cada habilidade inclui:

- **Documentação específica do tema** — orientação sobre como usar e personalizar o tema
- **Referências a blocos e padrões (patterns)** — blocos, padrões e opções de design disponíveis
- **Exemplos de personalização** — trechos de código e padrões de configuração para tarefas comuns
- **Melhores práticas** — recomendações para a arquitetura e o fluxo de trabalho do tema

## Habilidades Conscientes do Tema Disponíveis

### Temas de Blocos (Block Themes)

**Aplica-se a:** Temas que usam a arquitetura baseada em blocos do WordPress (Full Site Editing).

A habilidade Block Themes fornece orientação sobre:

- Criação e edição de templates usando o editor de blocos
- Trabalho com padrões de blocos e blocos reutilizáveis
- Personalização de estilos globais e configurações do theme.json
- Uso de blocos e variações de tema
- Construção de padrões de blocos personalizados para o seu site

**Ativada automaticamente quando:** O seu tema ativo é um tema de blocos (suporta a funcionalidade `block-templates`).

### Temas Clássicos (Classic Themes)

**Aplica-se a:** Temas WordPress tradicionais que usam templates PHP e o editor clássico.

A habilidade Classic Themes fornece orientação sobre:

Traballo con ficheiros de template PHP e hooks
Personalizar a apariencia do tema vía Customizer
Usar áreas de widget e barras laterais
Modificar CSS e desenvolvimento de child theme
Comprender a hierarquia do tema e as tags de template

**Ativado automáticamente quando:** O seu tema ativo é un clásico (non-block).

### Kadence Blocks

**Aplica-se a:** Sites que usen o plugin Kadence Blocks para design avançado basado en blocos.

A habilidade Kadence Blocks dá orientación sobre:

- Usar a biblioteca de blocos avançada do Kadence (Hero, Testimonials, Pricing, etc.)
- Configurar as opções dos blocos Kadence e as opções responsivas
- Construir layouts personalizados com os blocos grid e container do Kadence
- Integrar os blocos Kadence com o seu tema
- Aproveitar o sistema de design e os presets do Kadence

**Ativado automaticamente quando:** O plugin Kadence Blocks está ativo no seu site.

### Kadence Theme

**Aplica-se a:** Sites que usen o tema Kadence para design baseado em blocos e personalização.

A habilidade Kadence Theme dá orientação sobre:

- Personalizar o tema Kadence através de estilos globais e theme.json
- Usar os padrões e templates de blocos integrados do Kadence
- Configurar as opções e configurações do tema Kadence
- Construir designs personalizados com o sistema de design do Kadence
- Integrar o Kadence com plugins e ferramentas populares

**Ativado automaticamente quando:** O tema Kadence é o seu tema ativo.

## Como são selecionadas as Habilidades

O assistente deteta automaticamente o seu tema ativo e os plugins instalados em cada mensagem. Se houver uma habilidade compatível com o tema disponível, ela carrega-se automaticamente no contexto do assistente. Não precisa de ativar ou mudar habilidades manualmente.

### Múltiplas Habilidades

Se se aplican varias habilidades ao seu sitio (por exemplo, se tiver tanto Kadence Blocks como Kadence Theme activos), o assistente terá acesso a todas as habilidades aplicáveis e poderá referenciar orientações de cada uma.

### Mudar de Tema

Quando muda o tema ativo, as habilidades disponíveis do assistente atualizam automaticamente na próxima mensagem. Por exemplo:

1. Está a usar um tema baseado em blocos com a habilidade **Block Themes** ativa.
2. Muda para um tema clássico.
3. Na sua próxima mensagem, a habilidade **Classic Themes** é carregada automaticamente e a habilidade **Block Themes** deixa de estar disponível.

## Usar Habilidades Sensíveis ao Tema (Theme-Aware Skills)

Para aproveitar uma habilidade sensível ao tema, basta descrever o que quer fazer na interface de chat. O assistente referenciará automaticamente as orientações da habilidade apropriada.

### Exemplos de Prompts

**Para Block Themes:**
> "Cria uma secção de herói com imagem de fundo e texto centralizado usando padrões de blocos."

**Para Classic Themes:**
> "Adicionar uma área de widget personalizada à barra lateral usando um child theme."

**Para Kadence Blocks:**
> "Construir uma secção de depoimentos usando o bloco Kadence Testimonials."

**Para Kadence Theme:**
> "Personalizar o layout do cabeçalho e o estilo do menu de navegação."

O assistente fornecerá orientações específicas do tema e exemplos de código adaptados ao seu tema e plugins ativos.

:::note
As habilidades sensíveis ao tema estão automaticamente disponíveis no Superdav AI Agent v1.10.0 e posteriores. Não é necessária nenhuma configuração ou preparação adicional.
:::
