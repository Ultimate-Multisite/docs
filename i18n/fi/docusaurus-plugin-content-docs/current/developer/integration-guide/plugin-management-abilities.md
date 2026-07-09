---
title: Lisäosien hallintavalmiudet
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Lisäosien hallintakyvyt

Gratis AI Agent v1.5.0 toimitetaan **7 lisäosien hallintakyvyllä**, joita AI-avustaja voi kutsua keskustelun aikana. Nämä kyvyt tarjoavat ohjelmallisen hallinnan WordPress-lisäosiin, jotka on asennettu [Lisäosien rakentaja- ja hiekkalaatikkojärjestelmän](../../user-guide/administration/plugin-builder-and-sandbox) kautta.

## Kykyjen yleiskatsaus

| Kyky | Tunniste | Kuvaus |
|---|---|---|
| Listaa lisäosat | `list_plugins` | Palauttaa luettelon hiekkalaatikkovaraston lisäosista ja niiden tilasta. |
| Hae lisäosa | `get_plugin` | Noutaa tietyn lisäosan metatiedot ja lähdekoodin tunnisteen perusteella. |
| Luo lisäosa | `create_plugin` | Luo uuden lisäosan kuvauksen perusteella ja tallentaa sen hiekkalaatikkoon. |
| Päivitä lisäosa | `update_plugin` | Korvaa lisäosan lähdekoodin uudella versiolla. |
| Poista lisäosa | `delete_plugin` | Poistaa lisäosan hiekkalaatikkovarastosta. Poistaa sen ensin käytöstä. |
| Asenna lisäosa | `install_plugin` | Julkaisee hiekkalaatikossa olevan lisäosan live-WordPress-lisäosahakemistoon. |
| Aktivoi lisäosa | `activate_plugin` | Aktivoi hiekkalaatikossa olevan lisäosan wp-env-hiekkalaatikkoympäristössä. |

## Lisäosien asentajan API

Lisäosien asentaja käsittelee tiedostojärjestelmätoiminnot lisäosia käyttöönotettaessa tai poistettaessa. Keskeiset toimintatavat:

- **Polun validointi**: Kaikki lisäosapolut validoidaan sallittua lisäosahakemistoa vasten ennen tiedoston kirjoittamista. Hakemistopolun läpikäyntiyritykset hylätään.
- **Monitiedostoasennus**: Lisäosa voi koostua useista tiedostoista. Asentaja luo lisäosahakemiston ja kirjoittaa kaikki tiedostot atomisesti.
- **Päivitys**: Korvaa olemassa olevat lisäosatiedostot. Poistaa lisäosan käytöstä ennen kirjoittamista osittaisen tilan virheiden välttämiseksi.
- **Poisto tunnisteen perusteella**: Paikantaa lisäosahakemiston tunnisteen perusteella, poistaa käytöstä kaikilla sivustoilla ja poistaa sitten hakemiston.

### Mukautetun asennuskäsittelijän rekisteröinti

Voit liittyä asennuksen elinkaareen käyttämällä `gratis_ai_plugin_installer_before_install`- ja `gratis_ai_plugin_installer_after_install`-toimintoja:

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

## Ekosysteemirekisteri

Kyvyt rekisteröidään **lisäosaekosysteemirekisterin** kautta. Rekisteri yhdistää kykyjen tunnisteet niiden käsittelijäluokkiin ja altistaa ne AI-agentin työkalujen välittäjälle.

Mukautetun lisäosien hallintakyvyn rekisteröinti:

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

Kykyluokkasi on toteutettava `Gratis_AI_Ability_Interface`:

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

## HookScanner-integraatio

`create_plugin`- ja `update_plugin`-kyvyt suorittavat automaattisesti **HookScannerin** vastikään luodulle koodille. HookScanner palauttaa luettelon WordPress-toiminto- ja suodatinkoukuista, jotka lisäosa rekisteröi.

HookScanner-tulosten noutaminen ohjelmallisesti:

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

HookScanner ohittaa `vendor/`- ja `node_modules/`-hakemistot automaattisesti.

## Asynkronisten töiden arkkitehtuuri

Pitkään kestävät lisäosatoiminnot (luonti, asennus) lähetetään **asynkronisina töinä**, joissa on reaaliaikainen edistymisen seuranta. AI-chat-käyttöliittymä kyselee edistymistä ja suoratoistaa tilapäivityksiä käyttäjälle:

1. **Lähetys** — kyky luo asynkronisen työn ja palauttaa työn tunnuksen.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Suoratoisto** — välivaiheen edistymisviestit työnnetään chat-ketjuun.
4. **Valmis** — lopullinen tulos (onnistuminen tai virhe) palautetaan ja näytetään.

Työn elinkaaritapahtumiin liittyminen:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
