---
title: Registo de alterações
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Registo de alterações {#changelog}

## 1.18.0 — Lançado em 2026-06-29 {#1180--released-on-2026-06-29}

### Novo {#new}

- **Ferramentas Google Calendar** — leem calendários e eventos configurados para automações sensíveis ao horário
- **Mapeamento de contactos e auxiliares de participantes** — correspondem participantes do calendário a utilizadores e contactos do site
- **Portas de aprovação humana e registos de lembretes** — pausam automações para revisão e evitam notificações duplicadas
- **Fornecedor de SMS TextBee** — envia notificações por mensagem de texto configuradas através do TextBee
- **Pacote complementar avançado** — adiciona ferramentas de sistema de ficheiros de programador de confiança, base de dados, WP-CLI, despachante REST, criador de plugin, instantâneo git, gestão de utilizadores e benchmark distribuídas separadamente da versão do WordPress.org

### Melhorado {#improved}

- **Configuração do serviço gerido Superdav** — adiciona endpoints de serviço alojado e aprovisionamento automático de ligação para sites suportados
- **Empacotamento de versão** — cria ZIPs separados do núcleo e Advanced, publica ambos no GitHub e envia apenas o pacote do núcleo para WordPress.org

### Corrigido {#fixed}

- **Fiabilidade de pedidos de AI** — melhora a seleção de modelos, tempos limite de pedidos, modelo de configuração predefinido, tratamento de texto de raciocínio e orientação de repetição para chamadas de ferramentas inválidas
- **Reforço de calendários e lembretes** — reforça tokens do Google Calendar e a eliminação de duplicados de lembretes
- **Retoma de integração inicial e aprovações** — corrige lançamentos de integração inicial no frontend e retomas de capacidades confirmadas
- **Problemas de revisão de empacotamento do WordPress.org** — aborda feedback da revisão de empacotamento para a versão do núcleo

## 1.16.0 — Lançado em 2026-05-20 {#1160--released-on-2026-05-20}

### Novo {#new-1}

- **Capacidade de gerar Logo SVG** — Theme Builder agora consegue gerar e incorporar SVGs de logótipo personalizados com sanitização segura para namespaces
- **Carregamento de fotografias na entrevista de descoberta** — a entrevista de descoberta do Theme Builder agora inclui um passo de carregamento de fotografias para um contexto de design mais rico
- **Capacidade de validar contraste da paleta** — verifica pares de cores quanto à conformidade com WCAG antes de os aplicar a um tema
- **Menus de hotelaria e restauração** — Theme Builder agora consegue gerar páginas estruturadas de menus de comida e bebidas para empresas de hotelaria e restauração
- **Renderização de pré-visualização em desktop e móvel** — pré-visualiza o teu design em dispositivos desktop e móveis durante a seleção da direção de design
- **Parâmetro de rótulo de navegação** — a capacidade Criar Menu agora suporta um `navigation_label` distinto, separado do título da página
- **Disponibilidade de ferramenta de Nível 1** — sd-ai-agent/site-scrape é agora uma ferramenta de Nível 1 disponível por predefinição no Theme Builder

### Corrigido {#fixed-1}

- **Cache do Cliente de AI** — agora suportada por transients para persistência entre pedidos, prevenindo perda de dados em tarefas de agente de longa duração
- **Links de ação de linha do plugin** — corrigidos e renomeados para maior clareza

## 1.10.0 — Lançado em 2026-05-05 {#1100--released-on-2026-05-05}

### Novo {#new-2}

- **Pesquisa na Internet Tavily** — adiciona Tavily como fornecedor de pesquisa para resultados de pesquisa na Internet mais ricos, juntamente com Brave Search
- **Competências integradas sensíveis ao tema** — guias de competências para Block Themes, Classic Themes, Kadence Blocks e Kadence Theme agora são fornecidos com o plugin
- **Capacidade de formulário de contacto do criador de sites** — adiciona um formulário de contacto a qualquer página diretamente a partir da interface de chat

### Melhorado {#improved-1}

- **Integração WooCommerce refatorizada** — agora usa APIs nativas do WooCommerce para melhor fiabilidade e compatibilidade
- **Lista de fornecedores atualiza automaticamente** — quando qualquer plugin é ativado ou desativado

### Corrigido {#fixed-2}

- **Capacidade navigate-to** — corrigido ciclo de recarregamento infinito em algumas páginas de administração
- **Capacidade list-posts** — agora resolve corretamente nomes de categorias e etiquetas para slugs
- **Comandos WP-CLI** — restaurados aliases de namespace em falta após uma refatoração anterior
- **Automação de eventos** — trata de forma elegante sites onde as tabelas de automação ainda não foram criadas
- **Capacidade memory-save** — agora usa o prefixo de namespace correto no construtor de instruções do sistema
- **Resultados escalares de ferramentas** — agora corretamente encapsulados antes de serem devolvidos à AI
- **Estatísticas de utilização** — agora tratam corretamente o formato legado de chave de capacidade na atualização a partir de versões mais antigas
