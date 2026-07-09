---
title: ပလပ်အင် စီမံခန့်ခွဲမှု စွမ်းရည်များ
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Plugin စီမံခန့်ခွဲမှု စွမ်းရည်များ {#plugin-management-abilities}

Gratis AI Agent v1.5.0 မှာ **plugin စီမံခန့်ခွဲမှု စွမ်းရည် ၇ ခု** ပါဝင်ပြီး၊ ဤစွမ်းရည်များကို AI assistant က စကားပြောဆိုမှုအတွင်း အသုံးပြုနိုင်ပါတယ်။ ဤစွမ်းရည်များသည် [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox) မှတစ်ဆင့် ထည့်သွင်းထားသော WordPress plugin များအပေါ် ပရိုဂရမ်မာကျကျ ထိန်းချုပ်နိုင်မှုများကို ပေးစွမ်းပါတယ်။

## စွမ်းရည်များ အကျဉ်းချုပ် {#abilities-overview}

| စွမ်းရည် | Slug | ဖော်ပြချက် |
|---|---|---|
| List Plugins | `list_plugins` | sandbox store ရှိ plugin များ၏ အခြေအနေများနှင့်အတူ စာရင်းကို ပြန်ပေးသည်။ |
| Get Plugin | `get_plugin` | slug အလိုက် သတ်မှတ်ထားသော plugin တစ်ခု၏ metadata နှင့် source code များကို ပြန်ရယူသည်။ |
| Create Plugin | `create_plugin` | ဖော်ပြချက်တစ်ခုမှ plugin အသစ်တစ်ခုကို ဖန်တီးပေးပြီး sandbox တွင် သိမ်းဆည်းထားသည်။ |
| Update Plugin | `update_plugin` | plugin ၏ source code ကို မွမ်းမံထားသော version အသစ်ဖြင့် အစားထိုးသည်။ |
| Delete Plugin | `delete_plugin` | sandbox store မှ plugin ကို ဖယ်ရှားသည်။ ပထမဆုံး ပိတ်ထားရမည်။ |
| Install Plugin | `install_plugin` | sandbox တွင် ရှိသော plugin ကို live WordPress plugin directory သို့ ဖြန့်ချထားသည်။ |
| Activate Plugin | `activate_plugin` | wp-env sandbox environment အတွင်း sandbox တွင် ရှိသော plugin ကို အသက်သွင်းသည်။ |

## Plugin Installer API {#plugin-installer-api}

plugin များကို ဖြန့်ချခြင်း သို့မဟုတ် ဖယ်ရှားခြင်းများ ပြုလုပ်သည့်အခါ plugin installer သည် file system လုပ်ဆောင်မှုများကို ကိုင်တွယ်ပေးပါတယ်။ အဓိက လုပ်ဆောင်ပုံများမှာ-

- **Path validation**: မည်သည့် file ကို ရေးသားမည် မဆို plugin path အားလုံးကို ခွင့်ပြုထားသော plugin directory နှင့် စစ်ဆေးပါသည်။ Directory traversal ကြိုးစားမှုများကို ပယ်ချပါသည်။
- **Multi-file install**: plugin တစ်ခုသည် file များစွာဖြင့် ဖွဲ့စည်းနိုင်သည်။ installer သည် plugin directory ကို ဖန်တီးပေးပြီး file အားလုံးကို တစ်ပြိုင်နက် (atomically) ရေးသားပေးသည်။
- **Update**: ရှိပြီးသား plugin file များကို အစားထိုးသည်။ အပိုင်းအစကျန်နေသော အမှားများ မဖြစ်စေရန် ရေးသားခြင်းမပြုမီ plugin ကို ပိတ်ထားရသည်။
- **Delete by slug**: slug ဖြင့် plugin directory ကို ရှာဖွေပေးပြီး၊ site အားလုံးမှ ပိတ်ထားကာ directory ကို ဖယ်ရှားပေးသည်။

### Custom Install Handler တစ်ခု မှတ်ပုံတင်ခြင်း {#registering-a-custom-install-handler}

`gratis_ai_plugin_installer_before_install` နှင့် `gratis_ai_plugin_installer_after_install` actions များကို အသုံးပြု၍ install လုပ်သည့် လုပ်ငန်းစဉ် (lifecycle) အတွင်း hook လုပ်နိုင်ပါတယ်။

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: plugin ၏ directory အမည်
    // $files: relative path => file content ပါဝင်သော associative array
    error_log("Installing plugin: {$slug} with " . count($files) . " files.");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("Plugin {$slug} installed successfully.");
    }
}, 10, 2);
```

## Ecosystem Registry {#ecosystem-registry}

စွမ်းရည်များကို **plugin ecosystem registry** မှတစ်ဆင့် မှတ်ပုံတင်ရပါတယ်။ ဤ registry သည် ability slug များကို ၎င်းတို့၏ handler class များနှင့် ချိတ်ဆက်ပေးပြီး AI agent ၏ tool dispatcher သို့ ပေးအပ်ထားပါတယ်။

Custom plugin management ability တစ်ခုကို မှတ်ပုံတင်ရန်-

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

သင့် ability class သည် `Gratis_AI_Ability_Interface` ကို အကောင်အထည်ဖော်ရပါမည်-

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

## HookScanner Integration {#hookscanner-integration}

`create_plugin` နှင့် `update_plugin` ability များသည် အလိုအလျောက် **HookScanner** ကို အသုံးပြု၍ အသစ်ဖန်တီးထားသော code များအပေါ် စစ်ဆေးပေးပါတယ်။ HookScanner သည် plugin မှ မှတ်ပုံတင်ထားသော WordPress action နှင့် filter hooks များကို စာရင်းထုတ်ပေးပါတယ်။

HookScanner ရလဒ်များကို ပရိုဂရမ်မာကျကျ ပြန်ရယူရန်-

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

HookScanner သည် `vendor/` နှင့် `node_modules/` directory များကို အလိုအလျောက် ကျော်လွန်သွားပါသည်။

## Async Job Architecture {#async-job-architecture}

ကြာမြင့်စွာ လုပ်ဆောင်ရသော plugin လုပ်ဆောင်မှုများ (ဖန်တီးခြင်း၊ ဖြန့်ချခြင်း) ကို live progress tracking နှင့်အတူ **async jobs** အဖြစ် ပေးပို့ပါတယ်။ AI chat interface သည် progress အတွက် စစ်ဆေးပြီး အခြေအနေ အပ်ဒိတ်များကို user ထံသို့ stream လုပ်ပေးပါတယ်။

၁။ **Dispatch** — ability သည် async job တစ်ခုကို ဖန်တီးပြီး job ID ကို ပြန်ပေးသည်။
၂။ **Poll** — agent သည် ၂ စက္ကန့်တိုင်း `gratis_ai_job_status($job_id)` ကို စစ်ဆေးသည်။
၃။ **Stream** — ကြားခံ progress မက်ဆေ့ချ်များကို chat thread သို့ တွန်းပို့ပေးသည်။
၄။ **Complete** — နောက်ဆုံးရလဒ် (အောင်မြင်ခြင်း သို့မဟုတ် အမှား) ကို ပြန်ပေးပြီး ပြသသည်။

Job lifecycle events များတွင် hook လုပ်ရန်-

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
