---
title: Registro de Alterações
sidebar_position: 5
_i18n_hash: d18a5d0a6c766913ed5d348b54dd6acc
---
# Registro de Alterações

## 1.16.0 — Lançado em 2026-05-20

### Novidades

- **Geração de SVG de Logo** — O Theme Builder agora pode gerar e incorporar SVGs de logo personalizados com sanitização segura de namespace.
- **Upload de foto na entrevista de descoberta** — A entrevista de descoberta do Theme Builder agora inclui uma etapa de upload de foto, proporcionando um contexto de design mais rico.
- **Capacidade de Validar Contraste da Paleta** — Verifica pares de cores para conformidade WCAG antes de aplicar a um tema.
- **Menus de Hospitalidade** — O Theme Builder agora pode gerar páginas de menu de alimentos e bebidas estruturadas para negócios de hospitalidade.
- **Renderização de pré-visualização para desktop e mobile** — Pré-visualize seu design em dispositivos desktop e mobile durante a seleção da direção de design.
- **Parâmetro de Rótulo de Navegação** — A capacidade "Create Menu" agora suporta um `navigation_label` distinto, separado do título da página.
- **Disponibilidade de Ferramenta Tier 1** — sd-ai-agent/site-scrape é agora uma ferramenta Tier 1 disponível por padrão no Theme Builder.

### Corrigido

- **Cache do Cliente AI** — Agora é suportado por *transients* para persistência entre requisições, prevenindo perda de dados em tarefas de agente de longa duração.
- **Links de ação de linha do Plugin** — Corrigidos e renomeados para maior clareza.

## 1.10.0 — Lançado em 2026-05-05

### Novidades

- **Busca na internet Tavily** — Adiciona o Tavily como um provedor de busca para resultados de pesquisa na internet mais ricos, juntamente com o Brave Search.
- **Habilidades nativas conscientes do tema** — Guias de habilidades para Block Themes, Classic Themes, Kadence Blocks e Kadence Theme agora vêm com o plugin.
- **Capacidade de formulário de contato do site builder** — Adiciona um formulário de contato a qualquer página diretamente da interface de chat.

### Melhorado

- **Integração WooCommerce refatorada** — Agora usa as APIs nativas do WooCommerce para melhor confiabilidade e compatibilidade.
- **Lista de provedores atualiza automaticamente** — Quando qualquer plugin é ativado ou desativado.

### Corrigido

- **Capacidade 'navigate-to'** — Corrigado o loop de recarregamento infinito em algumas páginas de administração.
- **Capacidade 'list-posts'** — Agora resolve corretamente os nomes de categoria e tag para *slugs*.
- **Comandos WP-CLI** — Restaurados aliases de namespace ausentes após um refatoramento anterior.
- **Automação de eventos** — Lida de forma elegante com sites onde as tabelas de automação ainda não foram criadas.
- **Capacidade 'memory-save'** — Agora usa o prefixo de namespace correto no construtor de instruções do sistema.
- **Resultados da ferramenta Scalar** — Agora são corretamente encapsulados antes de serem retornados ao AI.
- **Estatísticas de uso** — Agora lidam corretamente com o formato de chave de capacidade legado ao atualizar de versões mais antigas.
