---
title: Agentes embutidos
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Agentes Integrados

O Gratis AI Agent v1.9.0 acompanha cinco agentes integrados, cada um pré-configurado com um conjunto focado de ferramentas, um sistema de prompt personalizado e sugestões iniciais adaptadas a tarefas comuns naquela área. Mudar entre os agentes altera o que o assistente pode fazer e como ele responde — sem nenhuma configuração da sua parte.

## O Que é um Agente?

Cada agente é um perfil de configuração nomeado que combina:

- **Ferramentas** — as habilidades que o agente tem permissão para usar (por exemplo, um Redator de Conteúdo tem acesso a habilidades de criação de posts; um Estúdio de Design tem acesso a habilidades de CSS e theme.json)
- **System prompt** — instruções que definem o tom, prioridades e restrições do agente
- **Sugestões** — prompts pré-escritos exibidos na interface de chat para ajudar você a começar rapidamente

## Acessando o Seletor de Agentes (Agent Picker)

1. Abra o painel **Gratis AI Agent** na barra lateral do admin do WordPress.
2. Clique no **ícone do agente** no canto superior esquerdo do cabeçalho do chat (o ícone muda para refletir o agente ativo).
3. O **Seletor de Agentes (Agent Picker)** abre como uma sobreposição em formato de tabela de formulário. Cada agente é listado com seu ícone, nome e uma descrição de uma linha.
4. Clique em uma linha do agente para ativá-lo. O cabeçalho do chat é atualizado imediatamente.

Você também pode mudar de agente no meio da conversa — o system prompt do novo agente entra em vigor a partir da próxima mensagem.

## Os Cinco Agentes Integrados

### Redator de Conteúdo (Content Writer)

**Foco:** Criar e editar posts, páginas e formulários de contato.

**Ferramentas disponíveis:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**O que ele faz bem:**
- Rascunhar e publicar posts de blog a partir de um esboço ou estrutura
- Criar lotes de landing pages para um novo site
- Construir formulários de contato e solicitação de informações
- Definir imagens em destaque em posts a partir de uma URL ou pesquisa

**Sugestões iniciais:**
- *Escreva um post de blog de 500 palavras sobre os benefícios do WordPress multisite.*
- *Crie as páginas Sobre, Serviços e Contato e publique-as.*
- *Adicione um formulário de solicitação de reserva à página de Contato.*

---

### Site Builder (Construtor de Sites)

**Foco:** Criação completa de sites a partir de um único comando.

**Ferramentas disponíveis:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**O que ele faz bem:**
- Gerar um plano de construção de site em várias fases para um tipo de negócio descrito
- Executar cada fase de forma autônoma — estrutura, conteúdo, navegação, design
- Recuperar erros no meio do plano sem exigir intervenção manual
- Instalar plugins recomendados como parte da construção
- Criar formulários de contato diretamente da interface de chat (Superdav AI Agent v1.10.0+)

**Sugestões iniciais:**
- *Construa um site de portfólio fotográfico com um tipo de post de galeria, uma página de reserva e um formulário de contato.*
- *Crie um site de restaurante com menu online, horários de funcionamento e um formulário de solicitação de reserva de mesa.*
- *Configure um site de consultoria freelancer com páginas de serviços, uma seção de portfólio e um blog.*
- *Adicione um formulário de contato à página de Contato usando o Site Builder.*

---

### Design Studio (Estúdio de Design)

**Foco:** Personalização visual — cores, tipografia, CSS e padrões de blocos.

**Ferramentas disponíveis:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**O que faz bem:**
- Aplicar presets de tema nomeados (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Ajustar a tipografia global e as paletas de cores com precisão através do theme.json
- Injetar CSS personalizado para sobrescrever estilos específicos da marca
- Tirar um screenshot de uma página e revisá-la em busca de problemas de design

**Sugestões iniciais:**
- *Aplique o preset warm-editorial e depois defina a cor primária para #2d6a4f.*
- *Tire um screenshot da página inicial e me diga o que você melhoraria.*
- *Crie um pattern de bloco hero reutilizável com uma imagem de fundo de largura total e título centralizado.*

---

### Plugin Manager (Gerenciador de Plugins)

**Foco:** Descobrir, instalar e gerenciar plugins do WordPress.

**Ferramentas disponíveis:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**O que faz bem:**
- Recomendar o melhor plugin para um caso de uso descrito
- Instalar pacotes de habilidades do registry
- Navegar pelo catálogo de habilidades disponíveis por categoria

**Sugestões iniciais:**
- *Qual é o melhor plugin para um diretório de membros?*
- *Instale o pacote de habilidades do WooCommerce.*
- *Mostre-me todos os pacotes de habilidades de e-commerce disponíveis.*

---

### Support Assistant (Assistente de Suporte)

**Foco:** Responder perguntas sobre conteúdo do site, configurações e configuração do WordPress.

**Ferramentas disponíveis:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**O que ele faz bem:**
- Consultar as configurações e opções atuais do site.
- Explicar quais tipos de post, taxonomias e menus estão configurados no site.
- Responder perguntas do tipo "o que esta configuração faz?" lendo os valores em tempo real.
- Servir como uma camada de diagnóstico apenas para leitura antes de fazer alterações.

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
        'name'          => 'Especialista em SEO',
        'description'   => 'Otimiza posts e páginas para mecanismos de busca.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'Você é um especialista em SEO. Concentre-se na otimização de palavras-chave, meta descrições e dados estruturados.',
        'suggestions'   => [
            'Revise o título da página inicial e a meta descrição.',
            'Sugira melhorias no tag de título para os cinco posts mais recentes.',
        ],
    ];
    return $agents;
} );
```

O novo agente aparece no Seletor de Agentes logo após a execução do filtro.

### Removendo um agente nativo

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
