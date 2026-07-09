---
title: Įskiepių valdymo galimybės
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Įskiepių valdymo gebėjimai

Gratis AI Agent v1.5.0 pateikiamas su **7 įskiepių valdymo gebėjimais**, kuriuos AI asistentas gali iškviesti pokalbio metu. Šie gebėjimai suteikia programinį WordPress įskiepių, įdiegtų per [Įskiepių kūrimo ir Sandbox sistemą](../../user-guide/administration/plugin-builder-and-sandbox), valdymą.

## Gebėjimų apžvalga

| Gebėjimas | Slug | Aprašymas |
|---|---|---|
| Išvardyti įskiepius | `list_plugins` | Grąžina sandbox saugykloje esančių įskiepių sąrašą su jų būsena. |
| Gauti įskiepį | `get_plugin` | Gauna konkretaus įskiepio metaduomenis ir šaltinio kodą pagal slug. |
| Sukurti įskiepį | `create_plugin` | Sugeneruoja naują įskiepį pagal aprašymą ir išsaugo jį sandbox. |
| Atnaujinti įskiepį | `update_plugin` | Pakeičia įskiepio šaltinio kodą nauja versija. |
| Ištrinti įskiepį | `delete_plugin` | Pašalina įskiepį iš sandbox saugyklos. Pirmiausia deaktyvuoja. |
| Įdiegti įskiepį | `install_plugin` | Įdiegia sandbox įskiepį į aktyvų WordPress įskiepių katalogą. |
| Aktyvuoti įskiepį | `activate_plugin` | Aktyvuoja sandbox įskiepį wp-env sandbox aplinkoje. |

## Įskiepių diegiklio API

Įskiepių diegiklis tvarko failų sistemos operacijas diegiant arba šalinant įskiepius. Pagrindinės elgsenos:

- **Kelio validavimas**: Visi įskiepių keliai validuojami pagal leidžiamą įskiepių katalogą prieš bet kokį failo įrašymą. Katalogų apėjimo bandymai atmetami.
- **Kelių failų diegimas**: Įskiepis gali būti sudarytas iš kelių failų. Diegiklis sukuria įskiepio katalogą ir atominiu būdu įrašo visus failus.
- **Atnaujinimas**: Pakeičia esamus įskiepio failus. Prieš rašant deaktyvuoja įskiepį, kad būtų išvengta dalinės būsenos klaidų.
- **Ištrynimas pagal slug**: Suranda įskiepio katalogą pagal slug, deaktyvuoja visose svetainėse, tada pašalina katalogą.

### Pasirinktinės diegimo tvarkyklės registravimas

Į diegimo gyvavimo ciklą galite įsijungti naudodami `gratis_ai_plugin_installer_before_install` ir `gratis_ai_plugin_installer_after_install` veiksmus:

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

## Ekosistemos registras

Gebėjimai registruojami per **įskiepių ekosistemos registrą**. Registras susieja gebėjimų slug su jų tvarkyklių klasėmis ir pateikia juos AI agento įrankių dispečeriui.

Norėdami užregistruoti pasirinktinį įskiepių valdymo gebėjimą:

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

Jūsų gebėjimo klasė turi įgyvendinti `Gratis_AI_Ability_Interface`:

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

## HookScanner integracija

`create_plugin` ir `update_plugin` gebėjimai automatiškai paleidžia **HookScanner** naujai sugeneruotam kodui. HookScanner grąžina WordPress veiksmų ir filtrų hook sąrašą, kurį užregistravo įskiepis.

Norėdami programiškai gauti HookScanner rezultatus:

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

HookScanner automatiškai praleidžia `vendor/` ir `node_modules/` katalogus.

## Asinchroninių užduočių architektūra

Ilgai trunkančios įskiepių operacijos (generavimas, diegimas) paleidžiamos kaip **asinchroninės užduotys** su tiesioginiu progreso stebėjimu. AI pokalbių sąsaja periodiškai tikrina progresą ir transliuoja būsenos atnaujinimus naudotojui:

1. **Paleidimas** — gebėjimas sukuria asinchroninę užduotį ir grąžina užduoties ID.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Transliavimas** — tarpiniai progreso pranešimai siunčiami į pokalbio giją.
4. **Užbaigimas** — galutinis rezultatas (sėkmė arba klaida) grąžinamas ir parodomas.

Norėdami įsijungti į užduoties gyvavimo ciklo įvykius:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
