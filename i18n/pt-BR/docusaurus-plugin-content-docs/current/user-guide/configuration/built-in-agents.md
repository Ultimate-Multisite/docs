---
title: Agentes integrados
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Agentes integrados

Gratis AI Agent v1.9.0 inclui cinco agentes integrados, cada um pré-configurado com um conjunto focado de ferramentas, um prompt de sistema personalizado e sugestões iniciais alinhadas a tarefas comuns nessa área. Alternar entre agentes muda o que o assistente pode fazer e como ele responde — sem nenhuma configuração da sua parte. Superdav AI Agent v1.18.0 pode adicionar ferramentas com reconhecimento de agenda, registros de lembretes, gates de aprovação e notificações por SMS a esses fluxos de trabalho quando as integrações relacionadas estão configuradas.

## O que é um agente? {#what-is-an-agent}

Cada agente é um perfil de configuração nomeado que combina:

- **Ferramentas** — as capacidades que o agente tem permissão para invocar (por exemplo, um Redator de Conteúdo tem acesso a capacidades de criação de posts; um Estúdio de Design tem acesso a capacidades de CSS e theme.json)
- **Prompt de sistema** — instruções que definem o tom, as prioridades e as restrições do agente
- **Sugestões** — prompts pré-escritos exibidos na interface de chat para ajudar você a começar rapidamente

## Acessando o seletor de agentes {#accessing-the-agent-picker}

1. Abra o painel **Gratis AI Agent** na barra lateral de administração do WordPress.
2. Clique no **ícone do agente** no canto superior esquerdo do cabeçalho do chat (o ícone muda para refletir o agente ativo).
3. O **Seletor de Agentes** abre como uma sobreposição em formato de tabela de formulário. Cada agente é listado com seu ícone, nome e uma descrição de uma linha.
4. Clique em uma linha de agente para ativá-lo. O cabeçalho do chat é atualizado imediatamente.

Você também pode alternar agentes no meio da conversa — o prompt de sistema do novo agente entra em vigor a partir da próxima mensagem.

## Os cinco agentes integrados {#the-five-built-in-agents}

### Redator de Conteúdo {#content-writer}

**Foco:** Criar e editar posts, páginas e formulários de contato.

**Ferramentas disponíveis:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Com as integrações do Superdav AI Agent v1.18.0 habilitadas, contexto de calendário configurado, gates de aprovação, lembretes e ferramentas de notificação por SMS também podem estar disponíveis para fluxos de trabalho aprovados.

**O que ele faz bem:**
- Redigir e publicar posts de blog a partir de um briefing ou esboço
- Criar lotes de landing pages para um novo site
- Criar formulários de contato e consulta
- Definir imagens destacadas em posts a partir de uma URL ou busca
- Redigir mensagens de acompanhamento de eventos a partir do contexto configurado do Google Calendar e então pausar para aprovação antes de enviar notificações

**Sugestões iniciais:**
- *Escreva um post de blog de 500 palavras sobre os benefícios do WordPress multisite.*
- *Crie uma página Sobre, Serviços e Contato e publique-as.*
- *Adicione um formulário de consulta de reservas à página Contato.*
- *Redija um lembrete para os participantes do evento configurado no calendário de amanhã e aguarde aprovação antes de enviá-lo.*

---

### Construtor de Sites {#site-builder}

**Foco:** Criação de websites de ponta a ponta a partir de um único prompt.

**Ferramentas disponíveis:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Com Superdav AI Agent v1.18.0, ferramentas configuradas de serviço gerenciado, aprovação, lembrete, calendário e SMS podem estar disponíveis onde os administradores as habilitarem.

**O que ele faz bem:**
- Gerar um plano de construção de site em várias fases para um tipo de negócio descrito
- Executar cada fase de forma autônoma — estrutura, conteúdo, navegação, design
- Recuperar-se de erros no meio do plano sem exigir intervenção manual
- Instalar plugins recomendados como parte da construção
- Criar formulários de contato diretamente pela interface de chat (Superdav AI Agent v1.10.0+)
- Coordenar lembretes de lançamento ou acompanhamento de participantes sem notificações duplicadas quando gates de aprovação e registros de lembretes estão habilitados

**Sugestões iniciais:**
- *Crie um site de portfólio de fotografia com um tipo de post de galeria, uma página de reservas e um formulário de contato.*
- *Crie um website de restaurante com cardápio online, horário de funcionamento e um formulário de consulta para reserva de mesa.*
- *Configure um site de consultoria freelancer com páginas de serviços, uma seção de portfólio e um blog.*
- *Adicione um formulário de contato à página Contato usando o construtor de sites.*
- *Depois que a checklist de lançamento do site for aprovada, envie um lembrete por SMS para o contato do stakeholder configurado.*

---

### Estúdio de Design {#design-studio}

**Foco:** Personalização visual — cores, tipografia, CSS e padrões de blocos.

**Ferramentas disponíveis:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**O que ele faz bem:**
- Aplicar presets de tema nomeados (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Ajustar com precisão a tipografia global e as paletas de cores via theme.json
- Injetar CSS personalizado para sobrescritas específicas da marca
- Capturar uma captura de tela de uma página e analisá-la em busca de problemas de design

**Sugestões iniciais:**
- *Aplique o preset warm-editorial e então defina a cor primária como #2d6a4f.*
- *Capture uma captura de tela da página inicial e me diga o que você melhoraria.*
- *Crie um padrão de bloco hero reutilizável com uma imagem de fundo em largura total e título centralizado.*

### Gerenciador de Plugins {#plugin-manager}

**Foco:** Descobrir, instalar e gerenciar plugins do WordPress.

**Ferramentas disponíveis:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**O que ele faz bem:**
- Recomendar o melhor plugin para um caso de uso descrito
- Instalar pacotes de capacidades a partir do registro
- Navegar pelo catálogo de capacidades disponíveis por categoria

**Sugestões iniciais:**
- *Qual é o melhor plugin para um diretório de membros?*
- *Instale o pacote de capacidades do WooCommerce.*
- *Mostre-me todos os pacotes de capacidades de ecommerce disponíveis.*

---

### Assistente de Suporte {#support-assistant}

**Foco:** Responder perguntas sobre conteúdo do site, configurações e configuração do WordPress.

**Ferramentas disponíveis:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**O que ele faz bem:**
- Consultar configurações e opções atuais do site
- Explicar quais tipos de post, taxonomias e menus estão configurados no site
- Responder a perguntas do tipo "o que esta configuração faz?" lendo valores ao vivo
- Servir como uma camada de diagnóstico somente leitura antes de fazer alterações

**Sugestões iniciais:**
- *Quais plugins e configurações estão ativos atualmente neste site?*
- *Liste todos os tipos de post personalizados registrados neste site.*
- *Quais menus de navegação existem e onde eles estão atribuídos?*

---

## Integrações de automação do Superdav {#superdav-automation-integrations}

Quando as integrações do Superdav AI Agent v1.18.0 estão configuradas, agentes integrados podem participar de fluxos de trabalho de automação mais seguros e conscientes de agenda:

- **Ferramentas de leitura do Google Calendar** permitem que agentes inspecionem calendários e eventos configurados antes de elaborar trabalhos de acompanhamento.
- **Mapeamento de contatos e participantes** ajuda a associar participantes de eventos a usuários do WordPress ou contatos conhecidos.
- **Portões de aprovação humana** pausam ações sensíveis até que um usuário autorizado as revise e confirme.
- **Registros de lembretes** evitam notificações duplicadas quando tarefas agendadas tentam novamente ou se repetem.
- **Notificações SMS do TextBee** enviam mensagens de texto configuradas somente quando as credenciais de SMS e as permissões do fluxo de trabalho estão ativadas.

Fluxo de trabalho recomendado: peça ao agente para preparar a mensagem ou ação, revise a solicitação de aprovação e, em seguida, permita que a ação aprovada seja retomada. Para lembretes recorrentes, mantenha a desduplicação de lembretes ativada para que o mesmo evento ou contato não seja notificado repetidamente.

---

## Personalizando agentes {#customising-agents}

Cada agente integrado pode ser estendido ou substituído por meio do filtro `gratis_ai_agent_agents`.

### Adicionando um prompt de sistema personalizado a um agente existente {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Registrando um novo agente {#registering-a-new-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimises posts and pages for search engines.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'You are an SEO specialist. Focus on keyword optimisation, meta descriptions, and structured data.',
        'suggestions'   => [
            'Review the homepage title and meta description.',
            'Suggest title tag improvements for the five most recent posts.',
        ],
    ];
    return $agents;
} );
```

O novo agente aparece no Seletor de Agentes imediatamente após o filtro ser executado.

### Removendo um agente integrado {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
