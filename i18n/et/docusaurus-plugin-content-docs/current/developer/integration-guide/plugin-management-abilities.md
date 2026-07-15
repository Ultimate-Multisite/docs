---
title: Pluginate haldamise võimalused
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Lisamoodulite haldamise võimed

Gratis AI Agent v1.5.0 sisaldab **7 lisamoodulite haldamise võimet**, mida AI-assistent saab vestluse ajal kasutada. Need võimed pakuvad programmilist juhtimist WordPressi lisamoodulite üle, mis on installitud [lisamoodulite koostaja ja liivakasti süsteemi](../../user-guide/administration/plugin-builder-and-sandbox) kaudu.

## Võimete ülevaade {#abilities-overview}

| Võime | Slug | Kirjeldus |
|---|---|---|
| Loetle lisamoodulid | `list_plugins` | Tagastab liivakasti hoidlas olevate lisamoodulite loendi koos nende olekuga. |
| Hangi lisamoodul | `get_plugin` | Toob kindla lisamooduli metaandmed ja lähtekoodi slug'i alusel. |
| Loo lisamoodul | `create_plugin` | Genereerib kirjelduse põhjal uue lisamooduli ja salvestab selle liivakasti. |
| Uuenda lisamoodulit | `update_plugin` | Asendab lisamooduli lähtekoodi uue versiooniga. |
| Kustuta lisamoodul | `delete_plugin` | Eemaldab lisamooduli liivakasti hoidlast. Deaktiveerib selle esmalt. |
| Installi lisamoodul | `install_plugin` | Juurutab liivakastis oleva lisamooduli aktiivsesse WordPressi lisamoodulite kataloogi. |
| Aktiveeri lisamoodul | `activate_plugin` | Aktiveerib liivakastis oleva lisamooduli wp-env liivakastikeskkonnas. |

## Lisamooduli installija API {#plugin-installer-api}

Lisamooduli installija haldab failisüsteemi toiminguid lisamoodulite juurutamisel või eemaldamisel. Peamised käitumisviisid:

- **Tee valideerimine**: Kõik lisamooduli teed valideeritakse enne mis tahes faili kirjutamist lubatud lisamoodulite kataloogi suhtes. Kataloogist väljumise katsed lükatakse tagasi.
- **Mitme faili install**: Lisamoodul võib koosneda mitmest failist. Installija loob lisamooduli kataloogi ja kirjutab kõik failid aatomiliselt.
- **Uuendamine**: Asendab olemasolevad lisamooduli failid. Deaktiveerib lisamooduli enne kirjutamist, et vältida osalise oleku vigu.
- **Kustutamine slug'i järgi**: Leiab lisamooduli kataloogi slug'i järgi, deaktiveerib selle kõigil saitidel ja seejärel eemaldab kataloogi.

### Kohandatud installikäsitleja registreerimine {#registering-a-custom-install-handler}

Saad installi elutsüklisse haakuda, kasutades toiminguid `gratis_ai_plugin_installer_before_install` ja `gratis_ai_plugin_installer_after_install`:

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

## Ökosüsteemi register {#ecosystem-registry}

Võimed registreeritakse **lisamoodulite ökosüsteemi registri** kaudu. Register seob võimete slug'id nende käsitlejaklassidega ja teeb need kättesaadavaks AI agenti tööriistade jaoturile.

Kohandatud lisamooduli haldamise võime registreerimiseks:

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

Sinu võimeklass peab implementeerima liidese `Gratis_AI_Ability_Interface`:

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

## HookScanneri integratsioon {#hookscanner-integration}

Võimed `create_plugin` ja `update_plugin` käivitavad automaatselt **HookScanneri** vastloodud koodi vastu. HookScanner tagastab loendi WordPressi action- ja filter-hook'idest, mille lisamoodul registreeris.

HookScanneri tulemuste programmiliseks hankimiseks:

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

HookScanner jätab kataloogid `vendor/` ja `node_modules/` automaatselt vahele.

## Asünkroonsete tööde arhitektuur {#async-job-architecture}

Pika kestusega lisamooduli toimingud (genereerimine, installimine) saadetakse välja **asünkroonsete töödena** koos reaalajas edenemise jälgimisega. AI vestlusliides küsib edenemist ja voogedastab olekuuuendused kasutajale:

1. **Väljasaatmine** — võime loob asünkroonse töö ja tagastab töö ID.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Voogedastus** — vahepealsed edenemissõnumid saadetakse vestluslõime.
4. **Lõpetamine** — lõpptulemus (edu või viga) tagastatakse ja kuvatakse.

Töö elutsükli sündmustesse haakumiseks:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
