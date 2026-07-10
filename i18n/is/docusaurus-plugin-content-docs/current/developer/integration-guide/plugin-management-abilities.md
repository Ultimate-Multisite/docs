---
title: Stjórnunargeta viðbóta
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Stjórnunargetur viðbóta {#plugin-management-abilities}

Gratis AI Agent v1.5.0 kemur með **7 stjórnunargetur viðbóta** sem AI aðstoðarmaðurinn getur kallað á í samtali. Þessar getu veita forritunarlega stjórn á WordPress viðbótum sem eru settar upp í gegnum [Viðbótarsmið og Sandbox-kerfi](../../user-guide/administration/plugin-builder-and-sandbox).

## Yfirlit yfir getu {#abilities-overview}

| Geta | Slug | Lýsing |
|---|---|---|
| Lista viðbætur | `list_plugins` | Skilar lista yfir viðbætur í sandkassageymslunni ásamt stöðu þeirra. |
| Sækja viðbót | `get_plugin` | Sækir lýsigögn og frumkóða fyrir tiltekna viðbót eftir slug. |
| Búa til viðbót | `create_plugin` | Býr til nýja viðbót út frá lýsingu og geymir hana í sandkassanum. |
| Uppfæra viðbót | `update_plugin` | Skiptir frumkóða viðbótar út fyrir nýja útgáfu. |
| Eyða viðbót | `delete_plugin` | Fjarlægir viðbót úr sandkassageymslunni. Afvirkjar fyrst. |
| Setja upp viðbót | `install_plugin` | Setur sandkassaða viðbót í virku WordPress viðbótamöppuna. |
| Virkja viðbót | `activate_plugin` | Virkjar sandkassaða viðbót í wp-env sandkassaumhverfinu. |

## API fyrir uppsetningu viðbóta {#plugin-installer-api}

Uppsetningarkerfi viðbóta sér um skráakerfisaðgerðir þegar viðbætur eru settar upp eða fjarlægðar. Helstu hegðanir:

- **Slóðastaðfesting**: Allar viðbótaslóðir eru staðfestar gagnvart leyfðu viðbótamöppunni áður en nokkur skrá er skrifuð. Tilraunum til möppuflakks er hafnað.
- **Uppsetning með mörgum skrám**: Viðbót getur samanstaðið af mörgum skrám. Uppsetningarkerfið býr til viðbótarmöppuna og skrifar allar skrár í einni lotu.
- **Uppfærsla**: Skiptir út núverandi viðbótarskrám. Afvirkjar viðbótina áður en skrifað er til að forðast villur vegna ófullkominnar stöðu.
- **Eyðing eftir slug**: Finnur viðbótarmöppuna eftir slug, afvirkjar á öllum vefjum og fjarlægir síðan möppuna.

### Skráning sérsniðins uppsetningarmeðhöndlara {#registering-a-custom-install-handler}

Þú getur tengst uppsetningarferlinu með `gratis_ai_plugin_installer_before_install` og `gratis_ai_plugin_installer_after_install` aðgerðunum:

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

## Vistkerfisskrá {#ecosystem-registry}

Getur eru skráðar í gegnum **vistkerfisskrá viðbóta**. Skráin varpar getu-slugum á meðhöndlaraklasa þeirra og birtir þær fyrir verkfæradreifara AI agent-sins.

Til að skrá sérsniðna stjórnunargetu viðbóta:

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

Getuklasinn þinn verður að útfæra `Gratis_AI_Ability_Interface`:

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

## HookScanner samþætting {#hookscanner-integration}

`create_plugin` og `update_plugin` geturnar keyra sjálfkrafa **HookScanner** á nýlega myndaðan kóða. HookScanner skilar lista yfir WordPress action og filter hooks sem viðbótin skráir.

Til að sækja niðurstöður HookScanner með forritunarlegum hætti:

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

HookScanner sleppir `vendor/` og `node_modules/` möppum sjálfkrafa.

## Arkitektúr ósamstilltra verka {#async-job-architecture}

Langkeyrandi viðbótaaðgerðum (myndun, uppsetningu) er dreift sem **ósamstilltum verkum** með lifandi framvindurakningu. AI spjallviðmótið kannar framvindu og streymir stöðuuppfærslum til notandans:

1. **Dreifing** — getan býr til ósamstillt verk og skilar verksauðkenni.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Streymi** — millistigs framvinduskilaboðum er ýtt í spjallþráðinn.
4. **Lokið** — lokaniðurstaðan (árangur eða villa) er skilað og birt.

Til að tengjast atburðum í líftíma verks:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
