---
title: Agentes integrados
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Agentes incorporados

Gratis AI Agent v1.9.0 inclui cinco agentes incorporados, cada um pré-configurado com um conjunto focado de ferramentas, um prompt de sistema adaptado e sugestões iniciais correspondentes a tarefas comuns nessa área. Alternar entre agentes altera o que o assistente pode fazer e como responde — sem qualquer configuração da sua parte. Superdav AI Agent v1.18.0 pode adicionar ferramentas sensíveis a agendamento, registos de lembretes, portas de aprovação e notificações por SMS a estes fluxos de trabalho quando as integrações relacionadas estão configuradas.

## O que é um agente?

Cada agente é um perfil de configuração nomeado que combina:

- **Ferramentas** — as capacidades que o agente tem permissão para invocar (por exemplo, um Redator de Conteúdo tem acesso a capacidades de criação de publicações; um Estúdio de Design tem acesso a capacidades de CSS e theme.json)
- **Prompt de sistema** — instruções que definem o tom, as prioridades e as restrições do agente
- **Sugestões** — prompts pré-escritos apresentados na interface de chat para o ajudar a começar rapidamente

## Aceder ao seletor de agentes

1. Abra o painel **Gratis AI Agent** na barra lateral de administração do WordPress.
2. Clique no **ícone de agente** no canto superior esquerdo do cabeçalho do chat (o ícone muda para refletir o agente ativo).
3. O **Seletor de Agentes** abre como uma sobreposição de tabela de formulário. Cada agente é listado com o seu ícone, nome e uma descrição de uma linha.
4. Clique numa linha de agente para o ativar. O cabeçalho do chat é atualizado imediatamente.

Também pode alternar agentes a meio da conversa — o prompt de sistema do novo agente entra em vigor a partir da mensagem seguinte.

## Os cinco agentes incorporados

### Redator de Conteúdo

**Foco:** Criar e editar publicações, páginas e formulários de contacto.

**Ferramentas disponíveis:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Com as integrações do Superdav AI Agent v1.18.0 ativadas, contexto de calendário configurado, portas de aprovação, lembretes e ferramentas de notificação por SMS também podem estar disponíveis para fluxos de trabalho aprovados.

**O que faz bem:**
- Redigir e publicar publicações de blog a partir de um briefing ou esboço
- Criar lotes de landing pages para um novo site
- Construir formulários de contacto e pedido de informação
- Definir imagens destacadas em publicações a partir de um URL ou pesquisa
- Redigir mensagens de acompanhamento de eventos a partir do contexto configurado do Google Calendar e, em seguida, pausar para aprovação antes de enviar notificações

**Sugestões iniciais:**
- *Escreva uma publicação de blog de 500 palavras sobre os benefícios do WordPress multisite.*
- *Crie uma página Sobre, Serviços e Contacto e publique-as.*
- *Adicione um formulário de pedido de reserva à página Contacto.*
- *Redija um lembrete para os participantes no evento de calendário configurado de amanhã e aguarde aprovação antes de o enviar.*

---

### Construtor de Sites

**Foco:** Criação de websites de ponta a ponta a partir de um único prompt.

**Ferramentas disponíveis:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Com Superdav AI Agent v1.18.0, ferramentas configuradas de serviço gerido, aprovação, lembrete, calendário e SMS podem estar disponíveis quando os administradores as ativam.

**O que faz bem:**
- Gerar um plano de construção de site em várias fases para um tipo de negócio descrito
- Executar cada fase autonomamente — estrutura, conteúdo, navegação, design
- Recuperar de erros a meio do plano sem exigir intervenção manual
- Instalar plugins recomendados como parte da construção
- Criar formulários de contacto diretamente a partir da interface de chat (Superdav AI Agent v1.10.0+)
- Coordenar lembretes de lançamento ou acompanhamento de participantes sem notificações duplicadas quando portas de aprovação e registos de lembretes estão ativados

**Sugestões iniciais:**
- *Construa um site de portefólio de fotografia com um tipo de publicação de galeria, uma página de reservas e um formulário de contacto.*
- *Crie um website de restaurante com um menu online, horário de funcionamento e um formulário de pedido de reserva de mesa.*
- *Configure um site de consultoria freelance com páginas de serviços, uma secção de portefólio e um blog.*
- *Adicione um formulário de contacto à página Contacto usando o construtor de sites.*
- *Depois de a lista de verificação de lançamento do site ser aprovada, envie um lembrete por SMS para o contacto da parte interessada configurado.*

---

### Estúdio de Design

**Foco:** Personalização visual — cores, tipografia, CSS e padrões de blocos.

**Ferramentas disponíveis:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**O que faz bem:**
- Aplicar predefinições de theme nomeadas (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Ajustar finamente a tipografia global e as paletas de cores via theme.json
- Injetar CSS personalizado para substituições específicas da marca
- Capturar um screenshot de uma página e revê-lo quanto a problemas de design

**Sugestões iniciais:**
- *Aplique a predefinição warm-editorial e depois defina a cor primária como #2d6a4f.*
- *Capture um screenshot da página inicial e diga-me o que melhoraria.*
- *Crie um padrão de bloco hero reutilizável com uma imagem de fundo de largura total e título centrado.*

### Gestor de Plugins

**Foco:** Descobrir, instalar e gerir plugins WordPress.

**Ferramentas disponíveis:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**O que faz bem:**
- Recomendar o melhor plugin para um caso de utilização descrito
- Instalar pacotes de capacidades a partir do registry
- Navegar pelo catálogo de capacidades disponível por categoria

**Sugestões iniciais:**
- *Qual é o melhor plugin para um diretório de membership?*
- *Instale o pacote de capacidades WooCommerce.*
- *Mostre-me todos os pacotes de capacidades de ecommerce disponíveis.*

---

### Assistente de Suporte

**Foco:** Responder a perguntas sobre conteúdo do site, definições e configuração do WordPress.

**Ferramentas disponíveis:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**O que faz bem:**
- Consultar definições e opções atuais do sítio
- Explicar que tipos de conteúdo, taxonomias e menus estão configurados no sítio
- Responder a perguntas do tipo "o que faz esta definição?" lendo valores em tempo real
- Servir como uma camada de diagnóstico só de leitura antes de fazer alterações

**Sugestões iniciais:**
- *Que plugins e definições estão atualmente ativos neste sítio?*
- *Lista todos os tipos de conteúdo personalizados registados neste sítio.*
- *Que menus de navegação existem e onde estão atribuídos?*

---

## Integrações de automação do Superdav

Quando as integrações do Superdav AI Agent v1.18.0 estão configuradas, os agentes integrados podem participar em fluxos de trabalho de automação mais seguros e sensíveis a agendamento:

- **Ferramentas de leitura do Google Calendar** permitem que os agentes inspecionem calendários e eventos configurados antes de redigir trabalho de acompanhamento.
- **Mapeamento de contactos e participantes** ajuda a associar participantes de eventos a utilizadores do WordPress ou contactos conhecidos.
- **Pontos de aprovação humana** pausam ações sensíveis até que um utilizador autorizado as reveja e confirme.
- **Registos de lembretes** impedem notificações duplicadas quando tarefas agendadas tentam novamente ou se repetem.
- **Notificações SMS do TextBee** enviam mensagens de texto configuradas apenas quando as credenciais de SMS e as permissões do fluxo de trabalho estão ativadas.

Fluxo de trabalho recomendado: peça ao agente para preparar a mensagem ou ação, reveja o pedido de aprovação e, em seguida, permita que a ação aprovada seja retomada. Para lembretes recorrentes, mantenha a desduplicação de lembretes ativada para que o mesmo evento ou contacto não seja notificado repetidamente.

---

## Personalizar agentes

Cada agente integrado pode ser estendido ou substituído através do filtro `gratis_ai_agent_agents`.

### Adicionar uma prompt de sistema personalizada a um agente existente

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Registar um novo agente

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

O novo agente aparece no seletor de agentes imediatamente após a execução do filtro.

### Remover um agente integrado

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
