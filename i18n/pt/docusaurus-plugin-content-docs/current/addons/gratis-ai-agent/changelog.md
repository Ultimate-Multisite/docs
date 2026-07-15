---
title: Registo de alterações
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Registo de alterações

## 1.9.0 — Lançado em 2026-04-28 {#190--released-on-2026-04-28}

### Novo {#new}

- **capacidade `create_contact_form`** — cria um formulário de contacto usando a extensão de formulários ativa (Contact Form 7, WPForms, Fluent Forms ou Gravity Forms) e devolve um shortcode pronto para incorporar em qualquer artigo ou página.
- **capacidade `set_featured_image`** — atribui uma imagem de destaque a um artigo ou página a partir de um ID de anexo existente da Biblioteca de Média ou de um URL remoto; importa automaticamente a imagem quando é fornecido um URL.
- **capacidade `batch_create_posts`** — cria vários artigos numa única chamada de capacidade. Suporta os mesmos parâmetros que `create_post`, comunica o sucesso/falha por artigo e tem um modo opcional `stop_on_error`.
- **parâmetro `page_template`** — adicionado a `create_post` e `update_post`. Atribui um ficheiro de modelo de página PHP (por exemplo, `page-full-width.php`) no momento da criação ou atualização. Passe uma string vazia para `update_post` para reverter para a predefinição do tema.
- **Capacidades de captura de ecrã do lado do cliente** — `capture_screenshot`, `compare_screenshots` e `review_page_design`. Captura screenshots completos ou da viewport de páginas ativas através de um navegador headless do lado do servidor, compara dois screenshots e obtém uma análise de design gerada por AI que abrange layout, tipografia, cor e acessibilidade.
- **Cinco agentes integrados** — Redator de Conteúdo, Criador de Site, Estúdio de Design, Gestor de Extensões e Assistente de Suporte. Cada agente tem um conjunto dedicado de ferramentas, uma instrução de sistema personalizada e sugestões iniciais. Alternável através do novo **Seletor de Agente** no cabeçalho do chat. Consulte [Agentes integrados](../../user-guide/configuration/built-in-agents).
- **Sinalizadores de funcionalidades** — novo separador **Definições → Sinalizadores de funcionalidades** com alternadores de controlo de acesso (restringir a administradores, restringir a administradores de rede, acesso de subscritores, desativar para não membros) e opções de branding (ocultar atribuição no rodapé, nome de agente personalizado, ocultar seletor de agente, usar o ícone do site como avatar do chat). Consulte [Definições do Gratis AI Agent](../../user-guide/administration/gratis-ai-agent-settings).
- **Restaurar última sessão** — o painel de chat agora recarrega automaticamente a conversa mais recente ao carregar a página e ao abrir o widget, para que o contexto nunca se perca entre navegações de página.
- **Links de ação da extensão** — links rápidos para Definições e para o Registo de Capacidades agora aparecem no ecrã **Extensões → Extensões instaladas** do WordPress abaixo da descrição da extensão.

### Melhorado {#improved}

- **Nova tentativa de fonte de imagem** — o agente agora tenta novamente todas as fontes de imagens gratuitas configuradas antes de recorrer a uma imagem gerada por AI em caso de falha no download.
- **Painel de informações do modelo** — sempre visível no cabeçalho do chat; já não fica oculto após a primeira mensagem.
- **Comportamento de deslocamento automático** — o deslocamento automático pausa quando o utilizador se desloca para cima para ler; aparece um botão flutuante **Deslocar para o fim** e este desaparece automaticamente quando o utilizador chega à mensagem mais recente.
- **UI do Seletor de Agente** — redesenhada como uma sobreposição em formato de tabela de formulário com ícones por agente, facilitando a identificação e a alternância entre agentes rapidamente.
- **Blocos JS carregados de forma diferida** — o pacote JavaScript inicial do widget de chat agora é dividido em blocos carregados de forma diferida, reduzindo os tamanhos do pacote inicial em 75–90%.
- **Redesenho do widget de chat** — um ícone AI unificado substitui o avatar personalizado anterior; consistente com o sistema de agentes integrados.
- **Transformação de URLs em links** — os URLs que aparecem em mensagens do sistema e balões de mensagens de erro agora são apresentados como links clicáveis.

### Corrigido {#fixed}

- **Detetabilidade das capacidades** — descrições, referências de instruções do sistema e alinhamento de namespace corrigidos para que todas as capacidades apareçam de forma fiável na lista de ferramentas do agente.
- **Cache de fornecedores** — os fornecedores agora são armazenados em cache em todo o site através de um contador de versão, evitando problemas de fornecedores desatualizados em redes multisite.
- **`ability_invalid_output`** — resolvido em 12 handlers de capacidades; todos devolvem respostas JSON corretamente estruturadas.
- **pipeline `pending_client_tool_calls`** — ligado de ponta a ponta para que as chamadas de ferramentas do lado do cliente sejam concluídas corretamente e devolvam resultados ao modelo.
- **Gaveta de histórico** — alterações não reversíveis são excluídas da lista de reversão; o link **Ver histórico completo** agora funciona corretamente.
- **Sistema de alterações/reversão** — cinco erros separados corrigidos e unificados sob a nova interface de administração.
- **Toast de Guardar Definições** — a notificação snackbar agora aparece de forma fiável após clicar em **Guardar Definições**.
- **Menu de contexto do lixo** — adicionada a opção **Eliminar permanentemente** para que os itens possam ser eliminados de forma definitiva sem sair da vista do lixo.
- **Editar e reenviar** — clicar no ícone de edição agora entra no modo de edição apenas para a mensagem clicada, não para todas as mensagens no tópico.
- **Altura do layout do chat** — o painel de chat adapta a sua altura quando conteúdo injetado por extensões (avisos de administração, banners) aparece acima da página, impedindo que a área de entrada seja empurrada para fora do ecrã.

---

## 1.4.0 — Lançado em 2026-04-09 {#140--released-on-2026-04-09}

### Novo {#new-1}

- **Comando de benchmark WP-CLI** (`wp gratis-ai-agent benchmark`) — executa a suite de benchmark Agent Capabilities v1 a partir da linha de comandos para pipelines de CI e fluxos de trabalho de avaliação de modelos. Suporta execuções por pergunta, substituições de fornecedor/modelo e saída JSON/CSV.
- **Suite de benchmark Agent Capabilities v1** — um conjunto estruturado de prompts complexos e de várias etapas que exercitam toda a superfície de capacidades, com pontuação e relatórios de tokens/duração.
- **Capacidades de Custom Post Type** — `register_post_type`, `list_post_types`, `delete_post_type`. Os registos persistem entre reinícios através da tabela de opções.
- **Capacidades de Custom Taxonomy** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Suporta taxonomias hierárquicas e planas com slugs de reescrita opcionais.
- **Capacidades de Design System** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Inclui cinco predefinições selecionadas: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Capacidades de Global Styles** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Lê e escreve valores theme.json através da WordPress Global Styles API.
- **Capacidade de gestão de Menu de Navegação** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Suporta menus aninhados e atribuição de localização do theme.
- **Capacidade de Gestão de Opções** — `get_option`, `set_option`, `delete_option`, `list_options`. Inclui uma lista de bloqueio de segurança integrada que protege opções críticas do WordPress contra modificações.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Descubra e ative pacotes de capacidades distribuídos como plugins WordPress.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Planos de criação de sites em várias fases, com descoberta de plugins, referências a saídas de etapas, acompanhamento de progresso e recuperação autónoma de erros.
- **Pergunta de benchmark de website de restaurante** (`q-restaurant-website`) — teste de ponta a ponta que cobre o registo de CPT, design system, navegação e descoberta de plugins.
- **Plugins de conector de fornecedor AI** adicionados aos blueprints do WordPress Playground para uma configuração de desenvolvimento local mais rápida.

### Melhorado {#improved-1}

- README atualizado com documentação de conectores de fornecedores AI e instruções de configuração.

### Corrigido {#fixed-1}

- 25 falhas de testes PHPUnit no ramo `main` resolvidas.
- Formato do URL de releases do GitHub em `blueprint.json` corrigido.
- Renumeração de IDs de tarefas para evitar colisões com IDs antigos.

---

## 1.3.x {#13x}

_As notas de versões anteriores são mantidas no repositório do plugin._
