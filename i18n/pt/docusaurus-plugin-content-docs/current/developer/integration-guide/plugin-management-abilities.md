---
title: Capacidades de Gestão de Plugins
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Capacidades de Gestão de Plugins

Gratis AI Agent v1.5.0 inclui **7 capacidades de gestão de plugins** que o assistente AI pode invocar durante uma conversa. Estas capacidades fornecem controlo programático sobre plugins WordPress instalados através do [Sistema Plugin Builder & Sandbox](../../user-guide/administration/plugin-builder-and-sandbox).

## Visão Geral das Capacidades

| Capacidade | Slug | Descrição |
|---|---|---|
| Listar Plugins | `list_plugins` | Devolve uma lista de plugins no armazenamento sandbox com o respetivo estado. |
| Obter Plugin | `get_plugin` | Obtém metadados e código-fonte de um plugin específico por slug. |
| Criar Plugin | `create_plugin` | Gera um novo plugin a partir de uma descrição e guarda-o na sandbox. |
| Atualizar Plugin | `update_plugin` | Substitui o código-fonte de um plugin por uma nova versão. |
| Eliminar Plugin | `delete_plugin` | Remove um plugin do armazenamento sandbox. Desativa primeiro. |
| Instalar Plugin | `install_plugin` | Implementa um plugin em sandbox no diretório de plugins WordPress ativo. |
| Ativar Plugin | `activate_plugin` | Ativa um plugin em sandbox no ambiente sandbox wp-env. |

## Plugin Installer API

O instalador de plugins trata das operações do sistema de ficheiros ao implementar ou remover plugins. Comportamentos principais:

- **Validação de caminho**: Todos os caminhos de plugins são validados em relação ao diretório de plugins permitido antes de qualquer escrita de ficheiro. Tentativas de travessia de diretórios são rejeitadas.
- **Instalação multi-ficheiro**: Um plugin pode consistir em múltiplos ficheiros. O instalador cria o diretório do plugin e escreve todos os ficheiros atomicamente.
- **Atualização**: Substitui ficheiros de plugins existentes. Desativa o plugin antes de escrever para evitar erros de estado parcial.
- **Eliminação por slug**: Localiza o diretório do plugin por slug, desativa em todos os sites e depois remove o diretório.

### Registar um Manipulador de Instalação Personalizado

Pode ligar-se ao ciclo de vida da instalação usando as ações `gratis_ai_plugin_installer_before_install` e `gratis_ai_plugin_installer_after_install`:

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: the plugin's directory name
    // $files: associative array of relative path => file content
    error_log("Installing plugin: {$slug} with " . count($files) . " files.");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("Plugin {$slug} installed successfully.");
    }
}, 10, 2);
```

## Registo do Ecossistema

As capacidades são registadas através do **registo do ecossistema de plugins**. O registo mapeia slugs de capacidades para as respetivas classes de manipulador e expõe-as ao dispatcher de ferramentas do agente AI.

Para registar uma capacidade personalizada de gestão de plugins:

```php
add_filter('gratis_ai_plugin_abilities', function(array $abilities): array {
    $abilities['my_custom_ability'] = [
        'class'       => My_Custom_Plugin_Ability::class,
        'label'       => 'My Custom Ability',
        'description' => 'Does something useful with plugins.',
    ];
    return $abilities;
});
```

A sua classe de capacidade deve implementar a `Gratis_AI_Ability_Interface`:

```php
class My_Custom_Plugin_Ability implements Gratis_AI_Ability_Interface {

    public function get_slug(): string {
        return 'my_custom_ability';
    }

    public function get_schema(): array {
        return [
            'name'        => 'my_custom_ability',
            'description' => 'Does something useful with plugins.',
            'parameters'  => [
                'type'       => 'object',
                'properties' => [
                    'slug' => [
                        'type'        => 'string',
                        'description' => 'The plugin slug to operate on.',
                    ],
                ],
                'required' => ['slug'],
            ],
        ];
    }

    public function execute(array $params): array {
        $slug = sanitize_key($params['slug'] ?? '');
        // ... your implementation ...
        return ['success' => true, 'slug' => $slug];
    }
}
```

## Integração HookScanner

As capacidades `create_plugin` e `update_plugin` executam automaticamente o **HookScanner** no código recém-gerado. HookScanner devolve uma lista de hooks de ação e filtro do WordPress registados pelo plugin.

Para obter resultados do HookScanner programaticamente:

```php
$scanner = new Gratis_AI_Hook_Scanner();
$hooks   = $scanner->scan_plugin_slug('my-generated-plugin');

foreach ($hooks['actions'] as $hook) {
    echo "Action: {$hook['hook']} — callback: {$hook['callback']}\n";
}

foreach ($hooks['filters'] as $hook) {
    echo "Filter: {$hook['hook']} — callback: {$hook['callback']}\n";
}
```

HookScanner ignora automaticamente os diretórios `vendor/` e `node_modules/`.

## Arquitetura de Tarefas Assíncronas

Operações de plugins de longa duração (gerar, instalar) são despachadas como **tarefas assíncronas** com acompanhamento de progresso em direto. A interface de chat AI consulta o progresso e transmite atualizações de estado ao utilizador:

1. **Despachar** — a capacidade cria uma tarefa assíncrona e devolve um ID de tarefa.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Transmitir** — mensagens de progresso intermédias são enviadas para o fio da conversa.
4. **Concluir** — o resultado final (sucesso ou erro) é devolvido e apresentado.

Para se ligar a eventos do ciclo de vida de tarefas:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
