---
title: Mogućnosti upravljanja dodacima
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Mogućnosti upravljanja dodacima

Gratis AI Agent v1.5.0 isporučuje se sa **7 mogućnosti upravljanja dodacima** koje AI asistent može pozvati tijekom razgovora. Te mogućnosti pružaju programsku kontrolu nad WordPress dodacima instaliranima putem [Sustava za izradu dodataka i sandbox](../../user-guide/administration/plugin-builder-and-sandbox).

## Pregled mogućnosti

| Mogućnost | Slug | Opis |
|---|---|---|
| Popis dodataka | `list_plugins` | Vraća popis dodataka u sandbox spremištu s njihovim statusom. |
| Dohvati dodatak | `get_plugin` | Dohvaća metapodatke i izvorni kod za određeni dodatak prema slugu. |
| Izradi dodatak | `create_plugin` | Generira novi dodatak iz opisa i sprema ga u sandbox. |
| Ažuriraj dodatak | `update_plugin` | Zamjenjuje izvorni kod dodatka novom verzijom. |
| Izbriši dodatak | `delete_plugin` | Uklanja dodatak iz sandbox spremišta. Prvo ga deaktivira. |
| Instaliraj dodatak | `install_plugin` | Postavlja sandbox dodatak u aktivni WordPress direktorij dodataka. |
| Aktiviraj dodatak | `activate_plugin` | Aktivira sandbox dodatak u wp-env sandbox okruženju. |

## API instalatera dodataka

Instalater dodataka obrađuje operacije datotečnog sustava pri postavljanju ili uklanjanju dodataka. Ključna ponašanja:

- **Provjera putanje**: Sve putanje dodataka provjeravaju se u odnosu na dopušteni direktorij dodataka prije bilo kakvog pisanja datoteka. Pokušaji prolaska kroz direktorije se odbijaju.
- **Instalacija s više datoteka**: Dodatak se može sastojati od više datoteka. Instalater stvara direktorij dodatka i atomski zapisuje sve datoteke.
- **Ažuriranje**: Zamjenjuje postojeće datoteke dodatka. Deaktivira dodatak prije pisanja kako bi se izbjegle pogreške djelomičnog stanja.
- **Brisanje prema slugu**: Locira direktorij dodatka prema slugu, deaktivira ga na svim web-mjestima, zatim uklanja direktorij.

### Registriranje prilagođenog rukovatelja instalacijom

Možete se uključiti u životni ciklus instalacije pomoću akcija `gratis_ai_plugin_installer_before_install` i `gratis_ai_plugin_installer_after_install`:

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

## Registar ekosustava

Mogućnosti se registriraju putem **registra ekosustava dodataka**. Registar mapira slugove mogućnosti na njihove klase rukovatelja i izlaže ih dispečeru alata AI agenta.

Za registriranje prilagođene mogućnosti upravljanja dodacima:

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

Vaša klasa mogućnosti mora implementirati `Gratis_AI_Ability_Interface`:

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

## Integracija HookScanner

Mogućnosti `create_plugin` i `update_plugin` automatski pokreću **HookScanner** nad novogeneriranim kodom. HookScanner vraća popis WordPress action i filter hookova koje je dodatak registrirao.

Za programsko dohvaćanje rezultata HookScanner:

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

HookScanner automatski preskače direktorije `vendor/` i `node_modules/`.

## Arhitektura asinkronih poslova

Dugotrajne operacije dodataka (generiranje, instalacija) šalju se kao **asinkroni poslovi** s praćenjem napretka uživo. Sučelje AI chata ispituje napredak i korisniku struji ažuriranja statusa:

1. **Slanje** — mogućnost stvara asinkroni posao i vraća ID posla.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Strujanje** — međuporuke o napretku šalju se u nit chata.
4. **Završetak** — konačni rezultat (uspjeh ili pogreška) vraća se i prikazuje.

Za uključivanje u događaje životnog ciklusa posla:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
