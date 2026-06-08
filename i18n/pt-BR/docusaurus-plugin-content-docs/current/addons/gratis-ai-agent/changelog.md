---
title: Registro de alterações
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Registro de Alterações

## 1.9.0 — Lançado em 2026-04-28

### Novo

- **Ability `create_contact_form`** — cria um formulário de contato usando o plugin de formulário ativo (Contact Form 7, WPForms, Fluent Forms ou Gravity Forms) e retorna um shortcode pronto para ser incorporado em qualquer post ou página.
- **Ability `set_featured_image`** — atribui uma imagem em destaque a um post ou página usando um ID de anexo existente na Biblioteca de Mídia ou uma URL remota; importa automaticamente a imagem quando uma URL é fornecida.
- **Ability `batch_create_posts`** — cria múltiplos posts em uma única chamada de ability. Suporta os mesmos parâmetros de `create_post`, relata sucesso/falha por post e possui um modo opcional `stop_on_error`.
- **Parâmetro `page_template`** — adicionado a `create_post` e `update_post`. Atribui um arquivo de template de página PHP (ex: `page-full-width.php`) no momento da criação ou atualização. Passe uma string vazia para `update_post` para reverter ao padrão do tema.
- **Abilities de captura de tela no lado do cliente** — `capture_screenshot`, `compare_screenshots` e `review_page_design`. Capturam screenshots completos ou de viewport de páginas ativas via um navegador headless no lado do servidor, comparam dois screenshots e fornecem uma revisão de design gerada por IA, cobrindo layout, tipografia, cor e acessibilidade.
- **Cinco agentes embutidos** — Content Writer, Site Builder, Design Studio, Plugin Manager e Support Assistant. Cada agente possui um conjunto dedicado de ferramentas, um prompt de sistema personalizado e sugestões iniciais. Eles podem ser alternados usando o novo **Agent Picker** no cabeçalho do chat. Veja [Built-in Agents](../../user-guide/configuration/built-in-agents).
- **Flags de recurso (Feature flags)** — nova aba **Settings → Feature Flags** com toggles de controle de acesso (restringir a administradores, restringir a administradores de rede, acesso de assinante, desativar para não membros) e opções de branding (ocultar atribuição do rodapé, nome personalizado do agente, ocultar agent picker, usar ícone do site como avatar do chat). Veja [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings).
- **Restaurar última sessão** — o painel de chat agora recarrega automaticamente a conversa mais recente ao carregar a página e ao abrir o widget, para que o contexto nunca se perca durante a navegação entre páginas.
- **Links de ação de plugin** — links rápidos para Configurações e para o Registro de Abilities agora aparecem na tela **Plugins → Installed Plugins** do WordPress, abaixo da descrição do plugin.

### Melhorado

- **Tentativa de fonte de imagem** — o agente agora tenta novamente todas as fontes de imagem gratuitas configuradas antes de recorrer a uma imagem gerada por IA em caso de falha de download.
- **Painel de informações do modelo** — sempre visível no cabeçalho do chat; não fica mais oculto após a primeira mensagem.
- **Comportamento de rolagem automática** — a rolagem automática pausa quando o usuário rola para cima para ler; um botão flutuante **Scroll to bottom** aparece e desaparece automaticamente quando o usuário chega à mensagem mais recente.
- **UI do Agent Picker** — redesenhado como uma sobreposição de tabela de formulário com ícones por agente, facilitando a identificação e a troca de agentes em um relance.
- **Chunks JS carregados sob demanda (Lazy-loaded JS chunks)** — o bundle JavaScript inicial do widget de chat agora é dividido em chunks carregados sob demanda, reduzindo os tamanhos iniciais do bundle em 75–90%.
- **Redesenho do widget de chat** — ícone unificado de IA substitui o avatar personalizado anterior; é consistente com o sistema de agentes embutidos.
- **Linkificação de URL** — URLs que aparecem em mensagens do sistema e bolhas de mensagens de erro agora são renderizadas como links clicáveis.

### Corrigido

- **Descoberta de Abilities** — descrições, referências de prompt de sistema e alinhamento de namespace corrigidos para que todas as abilities apareçam na lista de ferramentas do agente de forma confiável.
- **Cache de provedores** — os provedores agora são cacheados em todo o site via um contador de versão, prevenindo problemas de provedores desatualizados em redes multisite.
- **`ability_invalid_output`** — resolvido em 12 manipuladores de abilities; todos retornam respostas JSON com estrutura correta.
- **Pipeline `pending_client_tool_calls`** — conectado de ponta a ponta para que as chamadas de ferramentas no lado do cliente sejam concluídas corretamente e retornem resultados ao modelo.
- **Gaveta de histórico** — alterações não revertíveis são excluídas da lista de reversão; o link **View full history** agora funciona corretamente.
- **Sistema de Alterações/Reverter** — cinco bugs separados corrigidos e unificados sob a nova interface de administração.
- **Toast de Salvamento de Configurações** — a notificação snackbar agora aparece de forma confiável após clicar em **Save Settings**.
- **Menu de contexto de Lixeira** — adicionada a opção **Delete Permanently** para que os itens possam ser excluídos permanentemente sem sair da visualização da lixeira.
- **Editar e reenviar** — clicar no ícone de edição agora entra no modo de edição apenas para a mensagem clicada, e não para todas as mensagens do tópico.
- **Altura do layout do chat** — o painel de chat adapta sua altura quando conteúdo injetado pelo plugin (avisos de administrador, banners) aparece acima da página, impedindo que a área de entrada seja empurrada para fora da tela.

---

## 1.4.0 — Lançado em 2026-04-09

### Novo

- **Comando de benchmark WP-CLI** (`wp gratis-ai-agent benchmark`) — executa o conjunto de benchmarks Agent Capabilities v1 a partir da linha de comando para pipelines de CI e fluxos de trabalho de avaliação de modelo. Suporta execuções por pergunta, substituições de provedor/modelo e saída JSON/CSV.
- **Conjunto de benchmarks Agent Capabilities v1** — um conjunto estruturado de prompts complexos e de múltiplas etapas que exercitam toda a superfície de abilities, com pontuação e relatórios de tokens/duração.
- **Abilities para Custom Post Type** — `register_post_type`, `list_post_types`, `delete_post_type`. Os registros persistem após reinicializações via tabela de opções.
- **Abilities para Custom Taxonomy** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Suporta taxonomias hierárquicas e planas com slugs de reescrita opcionais.
- **Abilities de Design System** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Inclui cinco presets curados: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Abilities de Global Styles** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Lê e escreve valores do theme.json através da API Global Styles do WordPress.
- **Ability de gerenciamento de menu de navegação** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Suporta menus aninhados e atribuição de localização de tema.
- **Ability de gerenciamento de opções** — `get_option`, `set_option`, `delete_option`, `list_options`. Inclui uma lista de bloqueio de segurança embutida protegendo opções críticas do WordPress de modificações.
- **Registro de Abilities instaláveis** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Descubra e ative pacotes de abilities distribuídos como plugins do WordPress.
- **Orquestração de Site Builder v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Planos de construção de site multifase com descoberta de plugins, referências de saída de etapas, rastreamento de progresso e recuperação de erros autônoma.
- **Pergunta de benchmark para site de restaurante** (`q-restaurant-website`) — teste de ponta a ponta cobrindo registro de CPT, design system, navegação e descoberta de plugins.
- **Plugins de conector de provedor de IA** adicionados aos blueprints do WordPress Playground para configuração de desenvolvimento local mais rápida.

### Melhorado

- README atualizado com documentação e instruções de configuração de conectores de provedores de IA.

### Corrigido

- 25 falhas de teste PHPUnit no branch `main` resolvidas.
- Formato de URL de lançamento do GitHub em `blueprint.json` corrigido.
- Renumeração do ID da tarefa para evitar colisões com IDs antigos.

---

## 1.3.x

_As notas de lançamento anteriores são mantidas no repositório do plugin._
