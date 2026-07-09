---
title: Registro de alterações
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Registro de alterações

## 1.18.0 — Lançado em 2026-06-29

### Novo

- **Ferramentas do Google Calendar** — leem calendários e eventos configurados para automações sensíveis à agenda
- **Mapeamento de contatos e auxiliares de participantes** — associam participantes do calendário a usuários e contatos do site
- **Portões de aprovação humana e registros de lembretes** — pausam automações para revisão e evitam notificações duplicadas
- **Provedor de SMS TextBee** — envia notificações configuradas por mensagem de texto pelo TextBee
- **Pacote complementar avançado** — adiciona ferramentas de sistema de arquivos para desenvolvedor confiável, banco de dados, WP-CLI, despachante REST, construtor de plugins, snapshot do git, gerenciamento de usuários e benchmark, distribuídas separadamente da versão do WordPress.org

### Melhorado

- **Configuração do serviço Superdav gerenciado** — adiciona endpoints de serviço hospedado e provisionamento automático de conexão para sites compatíveis
- **Empacotamento da versão** — compila ZIPs separados do núcleo e do Advanced, publica ambos no GitHub e envia apenas o pacote do núcleo para o WordPress.org

### Corrigido

- **Confiabilidade das solicitações de IA** — melhora a seleção de modelos, os tempos limite de solicitação, o modelo padrão de configuração, o tratamento de texto de raciocínio e a orientação de novas tentativas para chamadas de ferramentas inválidas
- **Reforço de calendário e lembretes** — fortalece os tokens do Google Calendar e a desduplicação de lembretes
- **Integração inicial e retomadas de aprovação** — corrige inicializações de integração inicial no frontend e retomadas de habilidades confirmadas
- **Problemas de revisão de empacotamento do WordPress.org** — aborda o feedback da revisão de empacotamento para a versão do núcleo

## 1.16.0 — Lançado em 2026-05-20

### Novo

- **Habilidade Gerar Logo SVG** — Theme Builder agora pode gerar e incorporar SVGs de logo personalizados com sanitização segura para namespaces
- **Upload de foto na entrevista de descoberta** — a entrevista de descoberta do Theme Builder agora inclui uma etapa de upload de foto para um contexto de design mais rico
- **Habilidade Validar Contraste da Paleta** — verifica pares de cores quanto à conformidade com WCAG antes de aplicá-los a um tema
- **Menus de hospitalidade** — Theme Builder agora pode gerar páginas estruturadas de menu de alimentos e bebidas para empresas de hospitalidade
- **Renderização de prévia em desktop e mobile** — visualize seu design em dispositivos desktop e mobile durante a seleção da direção de design
- **Parâmetro de rótulo de navegação** — a habilidade Criar Menu agora aceita um `navigation_label` distinto, separado do título da página
- **Disponibilidade de ferramenta de Tier 1** — sd-ai-agent/site-scrape agora é uma ferramenta de Tier 1 disponível por padrão no Theme Builder

### Corrigido

- **Cache do Cliente de IA** — agora é apoiado por transients para persistência entre solicitações, evitando perda de dados em tarefas de agente de longa duração
- **Links de ação da linha do plugin** — corrigidos e renomeados para maior clareza

## 1.10.0 — Lançado em 2026-05-05

### Novo

- **Busca na internet Tavily** — adiciona Tavily como provedor de busca para resultados de busca na internet mais ricos junto com Brave Search
- **Habilidades integradas cientes do tema** — guias de habilidades para Block Themes, Classic Themes, Kadence Blocks e Kadence Theme agora são enviados com o plugin
- **Habilidade de formulário de contato do construtor de sites** — adiciona um formulário de contato a qualquer página diretamente pela interface de chat

### Melhorado

- **Integração com WooCommerce refatorada** — agora usa APIs nativas do WooCommerce para melhor confiabilidade e compatibilidade
- **Lista de provedores atualizada automaticamente** — quando qualquer plugin é ativado ou desativado

### Corrigido

- **Habilidade navigate-to** — corrigido o loop infinito de recarregamento em algumas páginas de administração
- **Habilidade list-posts** — agora resolve corretamente nomes de categorias e tags para slugs
- **Comandos WP-CLI** — aliases de namespace ausentes restaurados após uma refatoração anterior
- **Automação de eventos** — lida de forma adequada com sites em que as tabelas de automação ainda não foram criadas
- **Habilidade memory-save** — agora usa o prefixo de namespace correto no construtor de instruções do sistema
- **Resultados escalares de ferramentas** — agora são encapsulados corretamente antes de serem retornados à IA
- **Estatísticas de uso** — agora lidam corretamente com o formato legado de chave de habilidade ao atualizar de versões mais antigas
