---
title: ਤੀਜੇ ਧਿਰ ਦੇ ਮੋਡ ਦਾ ਪਰਵਾਸ
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Third-Party Mode Migration {#third-party-mode-migration}

Superdav AI Agent v1.12.0 ਨੇ third-party abilities ਨੂੰ handle ਕਰਨ ਦੇ ਤਰੀਕੇ ਵਿੱਚ ਬਦਲਾਅ ਕੀਤਾ ਹੈ। **Third-party mode ਹੁਣ ਆਪਣੇ ਆਪ 'auto' 'ਤੇ ਸੈੱਟ ਹੋ ਜਾਂਦਾ ਹੈ**, ਜਿਸ ਨਾਲ WordPress 7.0+ 'ਤੇ manual configuration ਤੋਂ ਬਿਨਾਂ native WordPress Abilities API integration ਹੋ ਸਕਦਾ ਹੈ।

## ਕੀ ਬਦਲਿਆ ਹੈ? {#what-changed}

### v1.12.0 ਤੋਂ ਪਹਿਲਾਂ {#before-v1120}

Third-party abilities ਲਈ manual configuration ਦੀ ਲੋੜ ਸੀ:

- ਤੁਹਾਨੂੰ ਖੁਦ "third-party mode" ਨੂੰ enable ਕਰਨਾ ਪੈਂਦਾ ਸੀ
- Abilities ਇੱਕ custom registry ਤੋਂ load ਹੁੰਦੀਆਂ ਸਨ
- WordPress Abilities API ਨਾਲ integration optional ਸੀ
- Legacy mode default ਸੀ

### v1.12.0 ਤੋਂ ਬਾਅਦ {#after-v1120}

Third-party abilities ਆਪਣੇ ਆਪ ਕੰਮ ਕਰਦੀਆਂ ਹਨ:

- Third-party mode 'auto' 'ਤੇ default ਹੈ
- Abilities WordPress Abilities API ਨਾਲ natively integrate ਹੁੰਦੀਆਂ ਹਨ
- WordPress 7.0+ 'ਤੇ ਕਿਸੇ manual configuration ਦੀ ਲੋੜ ਨਹੀਂ
- ਪੁਰਾਣੇ WordPress versions ਲਈ Legacy mode ਹਾਲੇ ਵੀ ਉਪਲਬਧ ਹੈ

## ਕਿਸ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਦਾ ਹੈ? {#who-is-affected}

### ਨਵੀਆਂ Installation (WordPress 7.0+) {#new-installations-wordpress-70}

**ਕੋਈ ਕਾਰਵਾਈ ਦੀ ਲੋੜ ਨਹੀਂ।** Third-party mode ਆਪਣੇ ਆਪ "auto" 'ਤੇ ਸੈੱਟ ਹੋ ਜਾਂਦਾ ਹੈ, ਅਤੇ abilities ਬਿਨਾਂ ਕਿਸੇ ਰੋਕ-ਟੋਕ (out of the box) ਕੰਮ ਕਰਦੀਆਂ ਹਨ।

### ਮੌਜੂਦਾ Installation {#existing-installations}

**ਤੁਹਾਡੀਆਂ ਸੈਟਿੰਗਾਂ ਬਰਕਰਾਰ ਹਨ।** ਜੇ ਤੁਸੀਂ ਵਰਤ ਰਹੇ ਸੀ:

- **Legacy mode**: ਤੁਸੀਂ Legacy mode ਵਿੱਚ ਹੀ ਰਹੋਗੇ (ਕੋਈ ਬਦਲਾਅ ਨਹੀਂ)
- **Manual third-party mode**: ਤੁਸੀਂ Manual mode ਵਿੱਚ ਹੀ ਰਹੋਗੇ (ਕੋਈ ਬਦਲਾਅ ਨਹੀਂ)
- **Auto mode**: ਤੁਸੀਂ Auto mode ਨਾਲ ਹੀ ਜੁੜੇ ਰਹੋਗੇ (ਕੋਈ ਬਦਲਾਅ ਨਹੀਂ)

### WordPress Versions 7.0 ਤੋਂ ਪਹਿਲਾਂ {#wordpress-versions-before-70}

**Legacy mode ਹਾਲੇ ਵੀ ਉਪਲਬਧ ਹੈ।** ਜੇ ਤੁਸੀਂ WordPress 6.x ਜਾਂ ਇਸ ਤੋਂ ਪਹਿਲਾਂ ਵਰਜ਼ਨ 'ਤੇ ਹੋ:

- Third-party mode 'legacy' 'ਤੇ default ਹੈ
- ਤੁਸੀਂ ਲੋੜ ਪੈਣ 'ਤੇ third-party mode ਨੂੰ manual ਤੌਰ 'ਤੇ enable ਕਰ ਸਕਦੇ ਹੋ
- Native Abilities API ਵਰਤਣ ਲਈ WordPress 7.0+ 'ਤੇ upgrade ਕਰੋ

## Modes ਨੂੰ ਸਮਝਣਾ {#understanding-the-modes}

### Auto Mode (ਨਵਾਂ Default) {#auto-mode-new-default}

**Auto mode** native WordPress Abilities API integration ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ:

- Abilities WordPress hooks ਰਾਹੀਂ register ਹੁੰਦੀਆਂ ਹਨ
- WordPress 7.0+ Abilities API ਨਾਲ ਪੂਰੀ compatibility
- Third-party abilities ਦੀ automatic discovery
- ਕਿਸੇ manual configuration ਦੀ ਲੋੜ ਨਹੀਂ

**ਕਦੋਂ ਵਰਤਣਾ ਹੈ**: WordPress 7.0+ ਨਾਲ third-party abilities

### Manual Mode {#manual-mode}

**Manual mode** ਲਈ explicit configuration ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ:

- ਤੁਸੀਂ ਨਿਰਧਾਰਤ ਕਰਦੇ ਹੋ ਕਿ ਕਿਹੜੀਆਂ third-party abilities load ਹੋਣਗੀਆਂ
- ਟੈਸਟਿੰਗ ਜਾਂ ਚੋਣਵੇਂ ability loading ਲਈ ਲਾਭਦਾਇਕ
- configuration files ਨੂੰ edit ਕਰਨ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ
- ਜ਼ਿਆਦਾ ਕੰਟਰੋਲ, ਪਰ ਜ਼ਿਆਦਾ setup

**ਕਦੋਂ ਵਰਤਣਾ ਹੈ**: ਟੈਸਟਿੰਗ, ਚੋਣਵੇਂ ability loading, ਜਾਂ custom configurations

### Legacy Mode {#legacy-mode}

**Legacy mode** ਪੁਰਾਣੇ third-party ability system ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ:

- Custom ability registry (WordPress Abilities API ਨਹੀਂ)
- ਪੁਰਾਣੇ WordPress versions ਨਾਲ backward compatible
- ਕੋਈ native WordPress integration ਨਹੀਂ
- Deprecated ਪਰ ਹਾਲੇ ਵੀ ਸਪੋਰਟ ਕੀਤਾ ਜਾਂਦਾ ਹੈ

**ਕਦੋਂ ਵਰਤਣਾ ਹੈ**: WordPress 6.x ਜਾਂ ਇਸ ਤੋਂ ਪਹਿਲਾਂ, ਜਾਂ ਜਦੋਂ ਤੁਹਾਨੂੰ legacy compatibility ਦੀ ਲੋੜ ਹੋਵੇ

## ਆਪਣਾ ਮੌਜੂਦਾ Mode ਚੈੱਕ ਕਰਨਾ {#checking-your-current-mode}

### Admin Panel ਰਾਹੀਂ {#via-admin-panel}

1. **WordPress Admin** → **Superdav AI Agent** → **Settings** 'ਤੇ ਜਾਓ
2. **Third-Party Mode** ਸੈਟਿੰਗ ਲੱਭੋ
3. ਤੁਹਾਨੂੰ ਆਪਣਾ ਮੌਜੂਦਾ mode ਅਤੇ ਇਸਨੂੰ ਬਦਲਣ ਦੇ options ਦਿਖਾਈ ਦੇਣਗੇ

### Code ਰਾਹੀਂ {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', ਜਾਂ 'legacy'
```

## ਆਪਣਾ Mode ਬਦਲਣਾ {#changing-your-mode}

### Auto Mode 'ਤੇ Switch ਕਰਨਾ {#switch-to-auto-mode}

ਜੇ ਤੁਸੀਂ WordPress 7.0+ 'ਤੇ ਹੋ ਅਤੇ auto mode ਵਰਤਣਾ ਚਾਹੁੰਦੇ ਹੋ:

1. **Superdav AI Agent** → **Settings** 'ਤੇ ਜਾਓ
2. **Third-Party Mode** ਲੱਭੋ
3. **Auto (WordPress Abilities API)** ਚੁਣੋ
4. **Save** 'ਤੇ ਕਲਿੱਕ ਕਰੋ

Superdav AI Agent ਆਪਣੇ ਆਪ third-party abilities ਨੂੰ discover ਅਤੇ register ਕਰ ਦੇਵੇਗਾ।

### Manual Mode 'ਤੇ Switch ਕਰਨਾ {#switch-to-manual-mode}

ਜੇ ਤੁਸੀਂ manually control ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ ਕਿ ਕਿਹੜੀਆਂ abilities load ਹੋਣਗੀਆਂ:

1. **Superdav AI Agent** → **Settings** 'ਤੇ ਜਾਓ
2. **Third-Party Mode** ਲੱਭੋ
3. **Manual** ਚੁਣੋ
4. **Save** 'ਤੇ ਕਲਿੱਕ ਕਰੋ
5. ਕਿਹੜੀਆਂ abilities load ਕਰਨੀਆਂ ਹਨ, ਇਹ ਨਿਰਧਾਰਤ ਕਰਨ ਲਈ ਆਪਣੀ configuration file ਨੂੰ edit ਕਰੋ

### Legacy Mode 'ਤੇ Switch ਕਰਨਾ {#switch-to-legacy-mode}

ਜੇ ਤੁਹਾਨੂੰ legacy compatibility ਦੀ ਲੋੜ ਹੈ:

1. **Superdav AI Agent** → **Settings** 'ਤੇ ਜਾਓ
2. **Third-Party Mode** ਲੱਭੋ
3. **Legacy** ਚੁਣੋ
4. **Save** 'ਤੇ ਕਲਿੱਕ ਕਰੋ

## Auto Mode ਦੇ ਫਾਇਦੇ {#benefits-of-auto-mode}

### Automatic Discovery {#automatic-discovery}

Abilities ਆਪਣੇ ਆਪ ਇਹਨਾਂ ਤੋਂ discover ਹੁੰਦੀਆਂ ਹਨ:

- install ਕੀਤੇ plugins
- active theme
- must-use plugins
- drop-in plugins

manual registration ਦੀ ਲੋੜ ਨਹੀਂ।

### Native Integration {#native-integration}

Abilities WordPress Abilities API ਨਾਲ integrate ਹੁੰਦੀਆਂ ਹਨ:

- WordPress core ਨਾਲ consistent
- WordPress admin ਨਾਲ ਕੰਮ ਕਰਦੀ ਹੈ
- Abilities API ਦੀ ਵਰਤੋਂ ਕਰਨ ਵਾਲੇ ਹੋਰ plugins ਨਾਲ compatible
- ਜਿਵੇਂ-ਜਿਵੇਂ WordPress evolve ਹੁੰਦਾ ਹੈ, ਤਿਆਰੀ ਰੱਖਦੀ ਹੈ

### Simplified Management {#simplified-management}

- edit ਕਰਨ ਲਈ ਕੋਈ configuration files ਨਹੀਂ
- ਕੋਈ manual ability registration ਨਹੀਂ
- Ability Visibility controls ਆਪਣੇ ਆਪ ਕੰਮ ਕਰਦੇ ਹਨ
- Admin notices ਤੁਹਾਨੂੰ unclassified abilities ਬਾਰੇ ਸੂਚਿਤ ਕਰਦੇ ਹਨ

### Better Performance {#better-performance}

- Abilities ਨੂੰ cache ਕੀਤਾ ਜਾਂਦਾ ਹੈ
- ਲੋੜ ਪੈਣ 'ਤੇ lazy-load ਹੁੰਦੇ ਹਨ
- WordPress 7.0+ ਲਈ optimized

## Migration Path {#migration-path}

### ਜੇ ਤੁਸੀਂ WordPress 6.x 'ਤੇ ਹੋ {#if-youre-on-wordpress-6x}

1. **WordPress 7.0+ 'ਤੇ Upgrade ਕਰੋ** (ਜਦੋਂ ਤਿਆਰ ਹੋ)
2. **Superdav AI Agent ਨੂੰ v1.12.0+ 'ਤੇ Update ਕਰੋ**
3. **third-party mode ਨੂੰ Auto 'ਤੇ ਬਦਲੋ** (optional; legacy mode ਹਾਲੇ ਵੀ ਕੰਮ ਕਰਦਾ ਹੈ)
4. ਸਹੀ access controls ਯਕੀਨੀ ਬਣਾਉਣ ਲਈ **ability visibility** ਦੀ ਸਮੀਖਿਆ ਕਰੋ

### ਜੇ ਤੁਸੀਂ WordPress 7.0+ 'ਤੇ ਹੋ {#if-youre-on-wordpress-70}

1. **Superdav AI Agent ਨੂੰ v1.12.0+ 'ਤੇ Update ਕਰੋ**
2. **verify ਕਰੋ ਕਿ third-party mode Auto 'ਤੇ ਸੈੱਟ ਹੈ** (ਇਹ default ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ)
3. ਸਹੀ access controls ਯਕੀਨੀ ਬਣਾਉਣ ਲਈ **ability visibility** ਦੀ ਸਮੀਖਿਆ ਕਰੋ
4. ਇਹ ਪੁਸ਼ਟੀ ਕਰਨ ਲਈ **third-party abilities** ਦਾ ਟੈਸਟ ਕਰੋ ਕਿ ਉਹ ਕੰਮ ਕਰਦੇ ਹਨ

## Troubleshooting {#troubleshooting}

### Auto mode ਵਿੱਚ abilities load ਨਹੀਂ ਹੋ ਰਹੀਆਂ {#abilities-arent-loading-in-auto-mode}

- verify ਕਰੋ ਕਿ ਤੁਸੀਂ WordPress 7.0+ 'ਤੇ ਹੋ
- check ਕਰੋ ਕਿ third-party mode "Auto" 'ਤੇ ਸੈੱਟ ਹੈ
- verify ਕਰੋ ਕਿ ability ਪ੍ਰਦਾਨ ਕਰਨ ਵਾਲਾ plugin active ਹੈ
- registration errors ਲਈ WordPress error logs check ਕਰੋ

### ਮੈਂ legacy mode ਰੱਖਣਾ ਚਾਹੁੰਦਾ ਹਾਂ {#i-want-to-keep-legacy-mode}

- **Settings** → **Third-Party Mode** 'ਤੇ ਜਾਓ
- **Legacy** ਚੁਣੋ
- **Save** 'ਤੇ ਕਲਿੱਕ ਕਰੋ
- Legacy mode ਕੰਮ ਕਰਦਾ ਰਹੇਗਾ

### ਮੇਰੀਆਂ custom abilities ਦਿਖ ਨਹੀਂ ਰਹੀਆਂ {#my-custom-abilities-arent-showing}

- verify ਕਰੋ ਕਿ ਉਹ WordPress hooks ਰਾਹੀਂ register ਹੋਈਆਂ ਹਨ
- check ਕਰੋ ਕਿ ਉਹ Abilities API ਨੂੰ ਸਹੀ ਢੰਗ ਨਾਲ implement ਕਰਦੀਆਂ ਹਨ
- WordPress error logs review ਕਰੋ
- ਸਾਰੀਆਂ registered abilities ਦੇਖਣ ਲਈ **Ability Visibility** admin page ਦੀ ਵਰਤੋਂ ਕਰੋ

### ਮੈਨੂੰ "unclassified ability" notices ਮਿਲ ਰਹੇ ਹਨ {#im-getting-unclassified-ability-notices}

- ਇਹ ਨਵੀਆਂ third-party abilities ਲਈ normal ਹੈ
- admin notice ਵਿੱਚ review ਅਤੇ classify ਕਰੋ
- classification 'ਤੇ details ਲਈ **Ability Visibility** ਦੇਖੋ

## Backward Compatibility {#backward-compatibility}

### ਮੌਜੂਦਾ Configurations {#existing-configurations}

ਜੇ ਤੁਹਾਡੇ ਕੋਲ ਮੌਜੂਦਾ third-party ability configurations ਹਨ:

- **Legacy mode**: ਤੁਹਾਡੀ configuration ਕੰਮ ਕਰਦੀ ਰਹੇਗੀ
- **Manual mode**: ਤੁਹਾਡੀ configuration ਕੰਮ ਕਰਦੀ ਰਹੇਗੀ
- **Auto mode**: ਤੁਹਾਡੀ configuration ਨੂੰ ignore ਕੀਤਾ ਜਾਵੇਗਾ (auto mode ਕੰਮ ਕਰ ਦੇਵੇਗਾ)

ਆਪਣੀ custom configuration ਰੱਖਣ ਲਈ, Manual ਜਾਂ Legacy mode ਵਿੱਚ ਰਹੋ।

### Deprecation Timeline {#deprecation-timeline}

- **v1.12.0**: Legacy ਅਤੇ Manual modes ਪੂਰੀ ਤਰ੍ਹਾਂ ਸਪੋਰਟ ਕੀਤੇ ਜਾਂਦੇ ਹਨ
- **v1.13.0+**: Legacy mode 'ਤੇ deprecation notices ਦਿਖ ਸਕਦੇ ਹਨ
- **v2.0.0**: Legacy mode ਹਟਾਇਆ ਜਾ ਸਕਦਾ ਹੈ (TBD)

## Best Practices {#best-practices}

### ਨਵੀਆਂ Installation ਲਈ {#for-new-installations}

- Auto mode ਦੀ ਵਰਤੋਂ ਕਰੋ (ਇਹ default ਹੈ)
- Superdav AI Agent ਨੂੰ abilities ਨੂੰ ਆਪਣੇ ਆਪ discover ਕਰਨ ਦਿਓ
- access control ਕਰਨ ਲਈ Ability Visibility ਦੀ ਵਰਤੋਂ ਕਰੋ

### ਮੌਜੂਦਾ Installation ਲਈ {#for-existing-installations}

- ਜਿੰਨਾ ਸੰਭਵ ਹੋਵੇ WordPress 7.0+ 'ਤੇ upgrade ਕਰੋ
- ਸਧਾਰਨ ਪ੍ਰਬੰਧਨ ਲਈ Auto mode 'ਤੇ switch ਕਰੋ
- Ability Visibility ਦੀ ਵਰਤੋਂ ਕਰਕੇ abilities ਦੀ ਸਮੀਖਿਆ ਅਤੇ classification ਕਰੋ

### Custom Abilities ਲਈ {#for-custom-abilities}

- abilities ਨੂੰ WordPress hooks (Abilities API) ਰਾਹੀਂ register ਕਰੋ
- custom ability registries ਤੋਂ ਬਚੋ
- Auto mode ਨਾਲ WordPress 7.0+ 'ਤੇ ਟੈਸਟ ਕਰੋ

## Next Steps {#next-steps}

1. **ਆਪਣਾ WordPress version check ਕਰੋ**: Auto mode ਲਈ verify ਕਰੋ ਕਿ ਤੁਸੀਂ 7.0+ 'ਤੇ ਹੋ
2. **ਆਪਣੇ third-party mode ਦੀ ਸਮੀਖਿਆ ਕਰੋ**: Settings 'ਤੇ ਜਾਓ ਅਤੇ ਆਪਣਾ ਮੌਜੂਦਾ mode check ਕਰੋ
3. **ਜੇ ਲੋੜ ਹੋਵੇ ਤਾਂ Update ਕਰੋ**: ਜੇ ਤੁਸੀਂ WordPress 7.0+ 'ਤੇ ਹੋ ਤਾਂ Auto mode 'ਤੇ switch ਕਰੋ
4. **abilities ਨੂੰ classify ਕਰੋ**: ਕਿਸੇ ਵੀ unclassified abilities ਦੀ ਸਮੀਖਿਆ ਅਤੇ classification ਕਰੋ
5. **Test ਕਰੋ**: verify ਕਰੋ ਕਿ ਤੁਹਾਡੀਆਂ third-party abilities ਸਹੀ ਢੰਗ ਨਾਲ ਕੰਮ ਕਰਦੀਆਂ ਹਨ

## Related Topics {#related-topics}

- **Ability Visibility**: ਕੰਟਰੋਲ ਕਰੋ ਕਿ ਕਿਹੜੀਆਂ abilities ਕਿੱਥੇ exposed ਹੋਣਗੀਆਂ
- **WordPress Abilities API**: native WordPress ability registration ਬਾਰੇ ਸਿੱਖੋ
- **Third-Party Ability Development**: abilities ਬਣਾਓ ਜੋ Auto mode ਨਾਲ ਕੰਮ ਕਰਦੀਆਂ ਹਨ
