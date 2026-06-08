---
title: Agentes Integrados
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Agentes Nativos

O Gratis AI Agent v1.9.0 vem com cinco agentes nativos, cada um pré-configurado com um conjunto focado de ferramentas, um prompt de sistema personalizado e sugestões iniciais alinhadas a tarefas comuns naquela área. Mudar entre os agentes altera o que o assistente pode fazer e como ele responde — sem que você precise fazer qualquer configuração.

## O Que É um Agente?

Cada agente é um perfil de configuração nomeado que combina:

- **Tools** — as habilidades que o agente tem permissão para chamar (por exemplo, um Content Writer tem acesso a habilidades de criação de posts; um Design Studio tem acesso a habilidades de CSS e theme.json)
- **System prompt** — instruções que definem o tom, as prioridades e as restrições do agente
- **Suggestions** — prompts pré-escritos exibidos na interface de chat para ajudar você a começar rapidamente

## Acessando o Seletor de Agentes (Agent Picker)

1. Abra o painel **Gratis AI Agent** na barra lateral do administrador do WordPress.
2. Clique no **ícone do agente** no canto superior esquerdo do cabeçalho do chat (o ícone muda para refletir o agente ativo).
3. O **Agent Picker** se abre como uma sobreposição em formato de tabela de formulário. Cada agente é listado com seu ícone, nome e uma descrição de uma linha.
4. Clique em uma linha de agente para ativá-lo. O cabeçalho do chat é atualizado imediatamente.

Você também pode mudar de agente no meio de uma conversa — o prompt de sistema do novo agente entra em vigor a partir da próxima mensagem.

## Os Cinco Agentes Nativos

### Content Writer (Redator de Conteúdo)

**Foco:** Criar e editar posts, páginas e formulários de contato.

**Tools disponíveis:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**O que ele faz bem:**
- Redigir e publicar posts de blog a partir de um resumo ou esboço
- Criar lotes de páginas de destino (landing pages) para um novo site
- Construir formulários de contato e de consulta
- Definir imagens em destaque em posts a partir de um URL ou pesquisa

**Sugestões iniciais:**
- *Escreva um post de blog de 500 palavras sobre os benefícios do WordPress multisite.*
- *Crie e publique uma página Sobre, Serviços e Contato.*
- *Adicione um formulário de consulta de reserva na página de Contato.*

---

### Site Builder (Construtor de Sites)

**Foco:** Criação de sites ponta a ponta a partir de um único prompt.

**Tools disponíveis:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**O que ele faz bem:**
- Gerar um plano de construção de site multifásico para um tipo de negócio descrito
- Executar cada fase de forma autônoma — estrutura, conteúdo, navegação, design
- Recuperar de erros no meio do plano sem exigir intervenção manual
- Instalar plugins recomendados como parte da construção
- Criar formulários de contato diretamente da interface de chat (Superdav AI Agent v1.10.0+)

**Sugestões iniciais:**
- *Construa um site de portfólio de fotografia com um tipo de post de galeria, uma página de reserva e um formulário de contato.*
- *Crie um site de restaurante com um menu online, horário de funcionamento e um formulário de consulta de reserva de mesa.*
- *Configure um site de consultoria freelancer com páginas de serviço, uma seção de portfólio e um blog.*
- *Adicione um formulário de contato à página de Contato usando o construtor de sites.*

---

### Design Studio (Estúdio de Design)

**Foco:** Customização visual — cores, tipografia, CSS e padrões de bloco.

**Tools disponíveis:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**O que ele faz bem:**
- Aplicar presets de tema nomeados (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Ajustar a tipografia global e as paletas de cores via theme.json
- Injetar CSS personalizado para substituições específicas da marca
- Tirar um screenshot de uma página e revisá-la em busca de problemas de design

**Sugestões iniciais:**
- *Aplique o preset warm-editorial e depois defina a cor primária como #2d6a4f.*
- *Tire um screenshot da página inicial e me diga o que você melhoraria.*
- *Crie um padrão de bloco hero reutilizável com uma imagem de fundo de largura total e um título centralizado.*

---

### Plugin Manager (Gerenciador de Plugins)

**Foco:** Descobrir, instalar e gerenciar plugins do WordPress.

**Tools disponíveis:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**O que ele faz bem:**
- Recomendar o melhor plugin para um caso de uso descrito
- Instalar pacotes de habilidades do registro
- Navegar pelo catálogo de habilidades disponíveis por categoria

**Sugestões iniciais:**
- *Qual é o melhor plugin para um diretório de membros?*
- *Instale o pacote de habilidades do WooCommerce.*
- *Mostre todos os pacotes de habilidades de e-commerce disponíveis.*

---

### Support Assistant (Assistente de Suporte)

**Foco:** Responder perguntas sobre conteúdo do site, configurações e configuração do WordPress.

**Tools disponíveis:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**O que ele faz bem:**
- Consultar as configurações e opções atuais do site
- Explicar o que são os tipos de post, taxonomias e menus configurados no site
- Responder a perguntas como "o que faz esta configuração?" lendo valores em tempo real
- Servir como uma camada de diagnóstico somente leitura antes de fazer alterações

**Sugestões iniciais:**
- *Quais plugins e configurações estão ativos neste site?*
- *Liste todos os tipos de post personalizados registrados neste site.*
- *Quais menus de navegação existem e onde eles estão atribuídos?*

---

## Personalizando Agentes

Cada agente nativo pode ser estendido ou substituído através do filtro `gratis_ai_agent_agents`.

### Adicionando um prompt de sistema personalizado a um agente existente

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nSempre escreva em inglês britânico e use a vírgula de Oxford.";
    }
    return $agents;
} );
```

### Registrando um novo agente

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Otimiza posts e páginas para mecanismos de busca.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'Você é um especialista em SEO. Concentre-se em otimização de palavras-chave, meta descrições e dados estruturados.',
        'suggestions'   => [
            'Revise o título e a meta descrição da página inicial.',
            'Sugira melhorias no título da tag para os cinco posts mais recentes.',
        ],
    ];
    return $agents;
} );
```

O novo agente aparece no Agent Picker imediatamente após a execução do filtro.

### Removendo um agente nativo

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
