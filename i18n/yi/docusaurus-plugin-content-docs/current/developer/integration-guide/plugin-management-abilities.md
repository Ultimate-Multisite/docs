---
title: פּלוגין־פֿאַרוואַלטונג־פֿעיִקייטן
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# פּלוגין־פֿאַרוואַלטונג־פֿעיִקייטן

Gratis AI Agent v1.5.0 קומט מיט **7 פּלוגין־פֿאַרוואַלטונג־פֿעיִקייטן** וואָס דער AI־אַסיסטענט קען אָפּרופן בעת אַ שמועס. די פֿעיִקייטן געבן פּראָגראַמאַטישע קאָנטראָל איבער WordPress פּלוגינס אינסטאַלירט דורך דעם [פּלוגין־בויער און סאַנדבאָקס־סיסטעם](../../user-guide/administration/plugin-builder-and-sandbox).

## איבערבליק פֿון פֿעיִקייטן

| פֿעיִקייט | סלאַג | באַשרײַבונג |
|---|---|---|
| אויסליסטן פּלוגינס | `list_plugins` | גיט צוריק אַ ליסטע פֿון פּלוגינס אין דער סאַנדבאָקס־קראָם מיט זייער סטאַטוס. |
| באַקומען פּלוגין | `get_plugin` | נעמט אַרויס מעטאַדאַטן און מקור־קאָד פֿאַר אַ באַשטימטן פּלוגין לויט סלאַג. |
| שאַפֿן פּלוגין | `create_plugin` | דזשענערירט אַ נײַעם פּלוגין פֿון אַ באַשרײַבונג און לייגט אים אַוועק אין דעם סאַנדבאָקס. |
| דערהײַנטיקן פּלוגין | `update_plugin` | פֿאַרבײַט דעם מקור־קאָד פֿון אַ פּלוגין מיט אַ נײַער ווערסיע. |
| אויסמעקן פּלוגין | `delete_plugin` | נעמט אַוועק אַ פּלוגין פֿון דער סאַנדבאָקס־קראָם. דעאַקטיווירט אים פֿריִער. |
| אינסטאַלירן פּלוגין | `install_plugin` | דעפּלויט אַ סאַנדבאָקסירטן פּלוגין צו דעם לעבעדיקן WordPress פּלוגין־Directory. |
| אַקטיווירן פּלוגין | `activate_plugin` | אַקטיווירט אַ סאַנדבאָקסירטן פּלוגין אין דער wp-env סאַנדבאָקס־סביבה. |

## פּלוגין־אינסטאַלירער API

דער פּלוגין־אינסטאַלירער באַהאַנדלט טעקע־סיסטעם־אָפּעראַציעס בײַם דעפּלויען אָדער באַזײַטיקן פּלוגינס. הויפּט־התנהגויות:

- **דרך־וואַלידאַציע**: אַלע פּלוגין־דרכים ווערן וואַלידירט קעגן דעם דערלויבטן פּלוגין־Directory איידער ס׳ווערט געשריבן סײַ וועלכע טעקע. פּרוּוון פֿון Directory traversal ווערן אָפּגעוואָרפֿן.
- **מולטיטעקע־אינסטאַלאַציע**: אַ פּלוגין קען באַשטיין פֿון עטלעכע טעקעס. דער אינסטאַלירער שאַפֿט דעם פּלוגין־Directory און שרײַבט אַלע טעקעס אַטאָמיש.
- **דערהײַנטיקן**: פֿאַרבײַט עקזיסטירנדיקע פּלוגין־טעקעס. דעאַקטיווירט דעם פּלוגין איידער שרײַבן, כּדי אויסצומײַדן טעותים פֿון טיילווײַזיקן צושטאַנד.
- **אויסמעקן לויט סלאַג**: געפֿינט דעם פּלוגין־Directory לויט סלאַג, דעאַקטיווירט איבער אַלע זייטלעך, און דערנאָך נעמט אַוועק דעם Directory.

### רעגיסטרירן אַ אייגענעם אינסטאַליר־באַהאַנדלער

איר קענט זיך אַרײַנהאַקן אין דעם אינסטאַליר־לעבנסציקל מיט די `gratis_ai_plugin_installer_before_install` און `gratis_ai_plugin_installer_after_install` אַקשאַנז:

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

## עקאָסיסטעם־רעגיסטרי

פֿעיִקייטן ווערן רעגיסטרירט דורך דער **פּלוגין־עקאָסיסטעם־רעגיסטרי**. די רעגיסטרי מאַפּט פֿעיִקייט־סלאַגס צו זייערע באַהאַנדלער־קלאַסן און שטעלט זיי צו פֿאַרן געצייג־דיספּאַטשער פֿונעם AI־אַגענט.

כּדי צו רעגיסטרירן אַ אייגענע פּלוגין־פֿאַרוואַלטונג־פֿעיִקייט:

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

אײַער פֿעיִקייט־קלאַס מוז אימפּלאַמענטירן דעם `Gratis_AI_Ability_Interface`:

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

## HookScanner־אינטעגראַציע

די `create_plugin` און `update_plugin` פֿעיִקייטן לויפֿן אויטאָמאַטיש דעם **HookScanner** קעגן נײַ דזשענערירטן קאָד. HookScanner גיט צוריק אַ ליסטע פֿון WordPress אַקציע־ און פֿילטער־הוקס רעגיסטרירט דורך דעם פּלוגין.

כּדי צו באַקומען HookScanner־רעזולטאַטן פּראָגראַמאַטיש:

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

HookScanner האָפּט איבער `vendor/` און `node_modules/` Directoryס אויטאָמאַטיש.

## אַסינכראָנע דזשאָב־אַרכיטעקטור

לאַנג־לויפֿנדיקע פּלוגין־אָפּעראַציעס (דזשענערירן, אינסטאַלירן) ווערן אָפּגעשיקט ווי **אַסינכראָנע דזשאָבס** מיט לעבעדיקער פֿאָרשריט־נאָכפֿאָלגונג. דער AI־שמועס־אינטערפֿייס פֿרעגט אָפּ פֿאָרשריט און שטרימט סטאַטוס־דערהײַנטיקונגען צום באַניצער:

1. **אָפּשיקן** — די פֿעיִקייט שאַפֿט אַן אַסינכראָנען דזשאָב און גיט צוריק אַ דזשאָב־ID.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **שטרימען** — צווישן־פֿאָרשריט־מעלדונגען ווערן אַרײַנגעשטופּט אין דעם שמועס־פֿאָדעם.
4. **פֿאַרענדיקן** — דער לעצטער רעזולטאַט (דערפֿאָלג אָדער טעות) ווערט צוריקגעגעבן און געוויזן.

כּדי זיך אַרײַנהאַקן אין דזשאָב־לעבנסציקל־געשעענישן:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
