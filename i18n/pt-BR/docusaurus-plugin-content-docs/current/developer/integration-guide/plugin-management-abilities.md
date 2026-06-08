---
title: Habilidades de Gerenciamento de Plugins
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Habilidades de Gerenciamento de Plugins

O Gratis AI Agent v1.5.0 vem equipado com **7 habilidades de gerenciamento de plugins** que o assistente de IA pode invocar durante uma conversa. Essas habilidades fornecem controle programático sobre os plugins do WordPress instalados através do [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox).

## Visão Geral das Habilidades

| Habilidade | Slug | Descrição |
|---|---|---|
| Listar Plugins | `list_plugins` | Retorna uma lista de plugins na loja sandbox com o status deles. |
| Obter Plugin | `get_plugin` | Recupera metadados e código-fonte de um plugin específico por slug. |
| Criar Plugin | `create_plugin` | Gera um novo plugin a partir de uma descrição e o armazena no sandbox. |
| Atualizar Plugin | `update_plugin` | Substitui o código-fonte de um plugin por uma nova versão. |
| Excluir Plugin | `delete_plugin` | Remove um plugin da loja sandbox. Desativa primeiro. |
| Instalar Plugin | `install_plugin` | Implanta um plugin sandboxed no diretório de plugins ativo do WordPress. |
| Ativar Plugin | `activate_plugin` | Ativa um plugin sandboxed no ambiente sandbox do wp-env. |

## API do Instalador de Plugins

O instalador de plugins lida com operações de sistema de arquivos ao implantar ou remover plugins. Comportamentos principais:

- **Validação de Caminho**: Todos os caminhos de plugins são validados em relação ao diretório de plugins permitido antes de qualquer escrita de arquivo. Tentativas de travessia de diretório são rejeitadas.
- **Instalação Multi-arquivos**: Um plugin pode consistir em vários arquivos. O instalador cria o diretório do plugin e escreve todos os arquivos atomicamente.
- **Atualização**: Substitui os arquivos de plugin existentes. Desativa o plugin antes de escrever para evitar erros de estado parcial.
- **Exclusão por slug**: Localiza o diretório do plugin pelo slug, desativa em todos os sites e, em seguida, remove o diretório.

### Registrando um Manipulador de Instalação Personalizado

Você pode se conectar ao ciclo de vida de instalação usando as ações `gratis_ai_plugin_installer_before_install` e `gratis_ai_plugin_installer_after_install`:

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: o nome do diretório do plugin
    // $files: array associativo de caminho relativo => conteúdo do arquivo
    error_log("Instalando plugin: {$slug} com " . count($files) . " arquivos.");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("Plugin {$slug} instalado com sucesso.");
    }
}, 10, 2);
```

## Registro do Ecossistema

As habilidades são registradas através do **registro de ecossistema de plugins**. O registro mapeia os slugs das habilidades para suas classes manipuladoras e as expõe ao despachante de ferramentas do agente de IA.

Para registrar uma habilidade de gerenciamento de plugins personalizada:

```php
add_filter('gratis_ai_plugin_abilities', function(array $abilities): array {
    $abilities['my_custom_ability'] = [
        'class'       => My_Custom_Plugin_Ability::class,
        'label'       => 'Minha Habilidade Personalizada',
        'description' => 'Faz algo útil com plugins.',
    ];
    return $abilities;
});
```

Sua classe de habilidade deve implementar a `Gratis_AI_Ability_Interface`:

```php
class My_Custom_Plugin_Ability implements Gratis_AI_Ability_Interface {

    public function get_slug(): string {
        return 'my_custom_ability';
    }

    public function get_schema(): array {
        return [
            'name'        => 'my_custom_ability',
            'description' => 'Faz algo útil com plugins.',
            'parameters'  => [
                'type'       => 'object',
                'properties' => [
                    'slug' => [
                        'type'        => 'string',
                        'description' => 'O slug do plugin a ser operado.',
                    ],
                ],
                'required' => ['slug'],
            ],
        ];
    }

    public function execute(array $params): array {
        $slug = sanitize_key($params['slug'] ?? '');
        // ... sua implementação ...
        return ['success' => true, 'slug' => $slug];
    }
}
```

## Integração com HookScanner

As habilidades `create_plugin` e `update_plugin` executam automaticamente o **HookScanner** no código recém-gerado. O HookScanner retorna uma lista de hooks de ação e filtro do WordPress registrados pelo plugin.

Para recuperar os resultados do HookScanner programaticamente:

```php
$scanner = new Gratis_AI_Hook_Scanner();
$hooks   = $scanner->scan_plugin_slug('my-generated-plugin');

foreach ($hooks['actions'] as $hook) {
    echo "Ação: {$hook['hook']} — callback: {$hook['callback']}\n";
}

foreach ($hooks['filters'] as $hook) {
    echo "Filtro: {$hook['hook']} — callback: {$hook['callback']}\n";
}
```

O HookScanner pula automaticamente os diretórios `vendor/` e `node_modules/`.

## Arquitetura de Tarefas Assíncronas

Operações de plugin de longa duração (gerar, instalar) são despachadas como **tarefas assíncronas** com rastreamento de progresso em tempo real. A interface de chat de IA consulta o progresso e transmite atualizações de status para o usuário:

1. **Disparar** — a habilidade cria uma tarefa assíncrona e retorna um ID da tarefa.
2. **Consultar** — o agente consulta `gratis_ai_job_status($job_id)` a cada 2 segundos.
3. **Transmitir** — mensagens de progresso intermediário são enviadas ao tópico de chat.
4. **Concluir** — o resultado final (sucesso ou erro) é retornado e exibido.

Para se conectar aos eventos do ciclo de vida da tarefa:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Tarefa {$job_id} iniciada para habilidade: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Tarefa {$job_id} concluída. Sucesso: " . ($result['success'] ? 'sim' : 'não'));
}, 10, 2);
```
