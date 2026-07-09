---
title: ຄວາມສາມາດໃນການຈັດການປລັກອິນ
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# ຄວາມສາມາດໃນການຈັດການປລັກອິນ

Gratis AI Agent v1.5.0 ມາພ້ອມກັບ **7 ຄວາມສາມາດໃນການຈັດການປລັກອິນ** ທີ່ຜູ້ຊ່ວຍ AI ສາມາດເອີ້ນໃຊ້ໄດ້ລະຫວ່າງການສົນທະນາ. ຄວາມສາມາດເຫຼົ່ານີ້ໃຫ້ການຄວບຄຸມແບບໂປຣແກຣມເໜືອປລັກອິນ WordPress ທີ່ຕິດຕັ້ງຜ່ານ [ລະບົບສ້າງປລັກອິນ ແລະ Sandbox](../../user-guide/administration/plugin-builder-and-sandbox).

## ພາບລວມຄວາມສາມາດ

| ຄວາມສາມາດ | Slug | ຄຳອະທິບາຍ |
|---|---|---|
| ສະແດງລາຍການປລັກອິນ | `list_plugins` | ສົ່ງຄືນລາຍການປລັກອິນໃນຄັງ Sandbox ພ້ອມສະຖານະຂອງພວກມັນ. |
| ຮັບປລັກອິນ | `get_plugin` | ດຶງຂໍ້ມູນ metadata ແລະ source code ສຳລັບປລັກອິນສະເພາະໂດຍ slug. |
| ສ້າງປລັກອິນ | `create_plugin` | ສ້າງປລັກອິນໃໝ່ຈາກຄຳອະທິບາຍ ແລະເກັບໄວ້ໃນ Sandbox. |
| ອັບເດດປລັກອິນ | `update_plugin` | ແທນທີ່ source code ຂອງປລັກອິນດ້ວຍເວີຊັນໃໝ່. |
| ລຶບປລັກອິນ | `delete_plugin` | ລຶບປລັກອິນອອກຈາກຄັງ Sandbox. ປິດໃຊ້ງານກ່ອນ. |
| ຕິດຕັ້ງປລັກອິນ | `install_plugin` | ນຳໃຊ້ປລັກອິນໃນ Sandbox ໄປຍັງໄດເຣັກທໍຣີປລັກອິນ WordPress ຈິງ. |
| ເປີດໃຊ້ງານປລັກອິນ | `activate_plugin` | ເປີດໃຊ້ງານປລັກອິນໃນ Sandbox ໃນສະພາບແວດລ້ອມ wp-env Sandbox. |

## API ຕົວຕິດຕັ້ງປລັກອິນ

ຕົວຕິດຕັ້ງປລັກອິນຈັດການການດຳເນີນການລະບົບໄຟລ໌ເມື່ອນຳໃຊ້ ຫຼືລຶບປລັກອິນ. ພຶດຕິກຳຫຼັກ:

- **ການກວດສອບ path**: path ຂອງປລັກອິນທັງໝົດຖືກກວດສອບກັບໄດເຣັກທໍຣີປລັກອິນທີ່ອະນຸຍາດ ກ່ອນການຂຽນໄຟລ໌ໃດໆ. ຄວາມພະຍາຍາມເຂົ້າອອກນອກໄດເຣັກທໍຣີຈະຖືກປະຕິເສດ.
- **ການຕິດຕັ້ງຫຼາຍໄຟລ໌**: ປລັກອິນອາດປະກອບດ້ວຍຫຼາຍໄຟລ໌. ຕົວຕິດຕັ້ງຈະສ້າງໄດເຣັກທໍຣີປລັກອິນ ແລະຂຽນໄຟລ໌ທັງໝົດແບບ atomic.
- **ອັບເດດ**: ແທນທີ່ໄຟລ໌ປລັກອິນທີ່ມີຢູ່. ປິດໃຊ້ງານປລັກອິນກ່ອນຂຽນ ເພື່ອຫຼີກລ່ຽງຂໍ້ຜິດພາດສະຖານະບາງສ່ວນ.
- **ລຶບໂດຍ slug**: ຄົ້ນຫາໄດເຣັກທໍຣີປລັກອິນໂດຍ slug, ປິດໃຊ້ງານຂ້າມເວັບໄຊທັງໝົດ, ແລ້ວລຶບໄດເຣັກທໍຣີ.

### ການລົງທະບຽນຕົວຈັດການການຕິດຕັ້ງແບບກຳນົດເອງ

ທ່ານສາມາດ hook ເຂົ້າກັບວົງຈອນຊີວິດການຕິດຕັ້ງໂດຍໃຊ້ action `gratis_ai_plugin_installer_before_install` ແລະ `gratis_ai_plugin_installer_after_install`:

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

## ທະບຽນລະບົບນິເວດ

ຄວາມສາມາດຖືກລົງທະບຽນຜ່ານ **ທະບຽນລະບົບນິເວດປລັກອິນ**. ທະບຽນນີ້ແມັບ slug ຂອງຄວາມສາມາດໄປຫາ class ຕົວຈັດການຂອງມັນ ແລະເປີດໃຫ້ຕົວກະຈາຍເຄື່ອງມືຂອງ AI agent ໃຊ້ໄດ້.

ເພື່ອລົງທະບຽນຄວາມສາມາດຈັດການປລັກອິນແບບກຳນົດເອງ:

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

class ຄວາມສາມາດຂອງທ່ານຕ້ອງ implement `Gratis_AI_Ability_Interface`:

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

## ການຜະສານກັບ HookScanner

ຄວາມສາມາດ `create_plugin` ແລະ `update_plugin` ຈະແລ່ນ **HookScanner** ກັບ code ທີ່ສ້າງຂຶ້ນໃໝ່ໂດຍອັດຕະໂນມັດ. HookScanner ສົ່ງຄືນລາຍການ hook ປະເພດ action ແລະ filter ຂອງ WordPress ທີ່ປລັກອິນລົງທະບຽນໄວ້.

ເພື່ອດຶງຜົນລັບ HookScanner ແບບໂປຣແກຣມ:

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

HookScanner ຂ້າມໄດເຣັກທໍຣີ `vendor/` ແລະ `node_modules/` ໂດຍອັດຕະໂນມັດ.

## ສະຖາປັດຕະຍະກຳງານ Async

ການດຳເນີນການປລັກອິນທີ່ໃຊ້ເວລາດົນ (ສ້າງ, ຕິດຕັ້ງ) ຈະຖືກສົ່ງເປັນ **ງານ async** ພ້ອມການຕິດຕາມຄວາມຄືບໜ້າແບບສົດ. ອິນເຕີເຟດແຊັດ AI ຈະ poll ເພື່ອເບິ່ງຄວາມຄືບໜ້າ ແລະ stream ການອັບເດດສະຖານະໃຫ້ຜູ້ໃຊ້:

1. **ສົ່ງງານ** — ຄວາມສາມາດສ້າງງານ async ແລະສົ່ງຄືນ ID ງານ.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Stream** — ຂໍ້ຄວາມຄວາມຄືບໜ້າລະຫວ່າງກາງຖືກສົ່ງໄປຍັງເສັ້ນສົນທະນາ.
4. **ສຳເລັດ** — ຜົນລັບສຸດທ້າຍ (ສຳເລັດ ຫຼື ຜິດພາດ) ຖືກສົ່ງຄືນ ແລະສະແດງ.

ເພື່ອ hook ເຂົ້າກັບເຫດການວົງຈອນຊີວິດງານ:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
