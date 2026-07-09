---
title: პლაგინების მართვის შესაძლებლობები
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# პლაგინების მართვის შესაძლებლობები {#plugin-management-abilities}

Gratis AI Agent v1.5.0-ს მოყვება **პლაგინების მართვის 7 შესაძლებლობა**, რომელთა გამოძახებაც AI ასისტენტს საუბრის დროს შეუძლია. ეს შესაძლებლობები უზრუნველყოფს პროგრამულ კონტროლს WordPress პლაგინებზე, რომლებიც დაინსტალირებულია [პლაგინების შემქმნელი და Sandbox სისტემის](../../user-guide/administration/plugin-builder-and-sandbox) მეშვეობით.

## შესაძლებლობების მიმოხილვა {#abilities-overview}

| შესაძლებლობა | Slug | აღწერა |
|---|---|---|
| პლაგინების ჩამოთვლა | `list_plugins` | აბრუნებს sandbox საცავში არსებული პლაგინების სიას მათი სტატუსით. |
| პლაგინის მიღება | `get_plugin` | იღებს მეტამონაცემებსა და საწყის კოდს კონკრეტული პლაგინისთვის slug-ის მიხედვით. |
| პლაგინის შექმნა | `create_plugin` | აღწერიდან აგენერირებს ახალ პლაგინს და ინახავს მას sandbox-ში. |
| პლაგინის განახლება | `update_plugin` | პლაგინის საწყის კოდს ახალი ვერსიით ანაცვლებს. |
| პლაგინის წაშლა | `delete_plugin` | შლის პლაგინს sandbox საცავიდან. ჯერ ახდენს დეაქტივაციას. |
| პლაგინის ინსტალაცია | `install_plugin` | განათავსებს sandbox-ში არსებულ პლაგინს ცოცხალ WordPress პლაგინების დირექტორიაში. |
| პლაგინის გააქტიურება | `activate_plugin` | ააქტიურებს sandbox-ში არსებულ პლაგინს wp-env sandbox გარემოში. |

## პლაგინის ინსტალერის API {#plugin-installer-api}

პლაგინის ინსტალერი ამუშავებს ფაილური სისტემის ოპერაციებს პლაგინების განთავსების ან წაშლისას. ძირითადი ქცევები:

- **ბილიკის ვალიდაცია**: ყველა პლაგინის ბილიკი მოწმდება დაშვებული პლაგინების დირექტორიასთან მიმართებით, სანამ რაიმე ფაილი ჩაიწერება. დირექტორიაში უკანონო გადაადგილების მცდელობები უარყოფილია.
- **მრავალფაილიანი ინსტალაცია**: პლაგინი შეიძლება შედგებოდეს რამდენიმე ფაილისგან. ინსტალერი ქმნის პლაგინის დირექტორიას და ატომურად წერს ყველა ფაილს.
- **განახლება**: ანაცვლებს არსებულ პლაგინის ფაილებს. ჩაწერამდე ახდენს პლაგინის დეაქტივაციას, რათა თავიდან აიცილოს ნაწილობრივი მდგომარეობის შეცდომები.
- **წაშლა slug-ის მიხედვით**: პოულობს პლაგინის დირექტორიას slug-ის მიხედვით, ახდენს დეაქტივაციას ყველა საიტზე, შემდეგ კი შლის დირექტორიას.

### მორგებული ინსტალაციის დამმუშავებლის რეგისტრაცია {#registering-a-custom-install-handler}

შეგიძლიათ ჩაერთოთ ინსტალაციის სასიცოცხლო ციკლში `gratis_ai_plugin_installer_before_install` და `gratis_ai_plugin_installer_after_install` მოქმედებების გამოყენებით:

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

## ეკოსისტემის რეესტრი {#ecosystem-registry}

შესაძლებლობები რეგისტრირდება **პლაგინების ეკოსისტემის რეესტრის** მეშვეობით. რეესტრი აკავშირებს შესაძლებლობების slug-ებს მათ დამმუშავებელ კლასებთან და მათ AI აგენტის ხელსაწყოების დისპეტჩერს აწვდის.

მორგებული პლაგინების მართვის შესაძლებლობის დასარეგისტრირებლად:

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

თქვენმა შესაძლებლობის კლასმა უნდა განახორციელოს `Gratis_AI_Ability_Interface`:

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

## HookScanner ინტეგრაცია {#hookscanner-integration}

`create_plugin` და `update_plugin` შესაძლებლობები ავტომატურად უშვებს **HookScanner**-ს ახლად გენერირებულ კოდზე. HookScanner აბრუნებს WordPress action და filter hooks-ის სიას, რომლებიც პლაგინის მიერ არის რეგისტრირებული.

HookScanner-ის შედეგების პროგრამულად მისაღებად:

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

HookScanner ავტომატურად გამოტოვებს `vendor/` და `node_modules/` დირექტორიებს.

## ასინქრონული დავალებების არქიტექტურა {#async-job-architecture}

ხანგრძლივი პლაგინის ოპერაციები (გენერირება, ინსტალაცია) იგზავნება როგორც **ასინქრონული დავალებები** ცოცხალი პროგრესის თვალყურისდევნებით. AI ჩატის ინტერფეისი პერიოდულად ამოწმებს პროგრესს და სტატუსის განახლებებს მომხმარებელს ნაკადურად აწვდის:

1. **გაგზავნა** — შესაძლებლობა ქმნის ასინქრონულ დავალებას და აბრუნებს დავალების ID-ს.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **ნაკადი** — შუალედური პროგრესის შეტყობინებები იგზავნება ჩატის თემაში.
4. **დასრულება** — საბოლოო შედეგი (წარმატება ან შეცდომა) ბრუნდება და გამოჩნდება.

დავალების სასიცოცხლო ციკლის მოვლენებში ჩასართავად:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
