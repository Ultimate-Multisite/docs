---
title: ಮೂರನೇ ಪಕ್ಷದ ಮೋಡ್ ಸ್ಥಳಾಂತರ
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Third-Party Mode Migration

Superdav AI Agent v1.12.0, third-party abilities ಅನ್ನು ಹೇಗೆ ನಿರ್ವಹಿಸಲಾಗುತ್ತದೆ ಎಂಬುದನ್ನು ಬದಲಾಯಿಸಿದೆ. **Third-party mode ಈಗ ಸ್ವಯಂಚಾಲಿತವಾಗಿ (auto) ಸೆಟ್ ಆಗುತ್ತದೆ**, ಇದರಿಂದ ಯಾವುದೇ manual configuration ಇಲ್ಲದೆ WordPress 7.0+ ನಲ್ಲಿ native WordPress Abilities API integration ಸಾಧ್ಯವಾಗುತ್ತದೆ.

## ಏನ ಬದಲಾಗಿದೆ? {#what-changed}

### v1.12.0 ಕ್ಕಿಂತ ಮೊದಲು {#before-v1120}

Third-party abilities ಗಾಗಿ manual configuration ಅಗತ್ಯವಿತ್ತು:

- ನೀವು "third-party mode" ಅನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ಆನ್ ಮಾಡಬೇಕಾಗಿತ್ತು
- Abilities ಅನ್ನು ಒಂದು custom registry ನಿಂದ ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿತ್ತು
- WordPress Abilities API ಜೊತೆ integration ಐಚ್ಛಿಕವಾಗಿತ್ತು
- Legacy mode ಯೇ default ಆಗಿತ್ತು

### v1.12.0 ನಂತರ {#after-v1120}

Third-party abilities ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತವೆ:

- Third-party mode default ಆಗಿ "auto" ಆಗಿರುತ್ತದೆ
- Abilities ನೇರವಾಗಿ WordPress Abilities API ಜೊತೆ integrate ಆಗುತ್ತವೆ
- WordPress 7.0+ ನಲ್ಲಿ ಯಾವುದೇ manual configuration ಅಗತ್ಯವಿಲ್ಲ
- ಹಳೆಯ WordPress version ಗಾಗಿ Legacy mode ಇನ್ನೂ ಲಭ್ಯವಿದೆ

## ಯಾರು ಬಾಧಿತರಾಗುತ್ತಾರೆ? {#who-is-affected}

### ಹೊಸ Installation (WordPress 7.0+) {#new-installations-wordpress-70}

**ಏನೂ ಮಾಡಬೇಕಾಗಿಲ್ಲ.** Third-party mode ಸ್ವಯಂಚಾಲಿತವಾಗಿ "auto" ಗೆ ಸೆಟ್ ಆಗುತ್ತದೆ, ಮತ್ತು abilities ಬಾಕ್ಸ್‌ನಿಂದಲೇ ಕೆಲಸ ಮಾಡುತ್ತವೆ.

### ಇರುವ Installation {#existing-installations}

**ನಿಮ್ಮ ಸೆಟ್ಟಿಂಗ್‌ಗಳು ಉಳಿಯುತ್ತವೆ.** ನೀವು ಬಳಸುತ್ತಿದ್ದರೆ:

- **Legacy mode**: ನೀವು Legacy mode ಯಲ್ಲೇ ಉಳಿಯುತ್ತೀರಿ (ಬದಲಾವಣೆ ಇಲ್ಲ)
- **Manual third-party mode**: ನೀವು Manual mode ಯಲ್ಲೇ ಉಳಿಯುತ್ತೀರಿ (ಬದಲಾವಣೆ ಇಲ್ಲ)
- **Auto mode**: ನೀವು Auto mode ಯಲ್ಲೇ ಮುಂದುವರಿಯುತ್ತೀರಿ (ಬದಲಾವಣೆ ಇಲ್ಲ)

### 7.0 ಕ್ಕಿಂತ ಹಳೆಯ WordPress version ಗಾಗಿ {#wordpress-versions-before-70}

**Legacy mode ಇನ್ನೂ ಲಭ್ಯವಿದೆ.** ನೀವು WordPress 6.x ಅಥವಾ ಅದಕ್ಕಿಂತ ಹಳೆಯದಲ್ಲಿದ್ದರೆ:

- Third-party mode default ಆಗಿ "legacy" ಆಗಿರುತ್ತದೆ
- ನಿಮಗೆ ಬೇಕಿದ್ದರೆ Third-party mode ಅನ್ನು manual ಆಗಿ ಆನ್ ಮಾಡಬಹುದು
- native Abilities API ಬಳಸಲು WordPress 7.0+ ಗೆ ಅಪ್গ্রেಡ್ ಮಾಡಿ

## Modes ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು {#understanding-the-modes}

### Auto Mode (ಹೊಸ Default) {#auto-mode-new-default}

**Auto mode** native WordPress Abilities API integration ಅನ್ನು ಬಳಸುತ್ತದೆ:

- Abilities ಅನ್ನು WordPress hooks ಮೂಲಕ register ಮಾಡಲಾಗುತ್ತದೆ
- WordPress 7.0+ Abilities API ಜೊತೆ ಸಂಪೂರ್ಣ compatibility
- third-party abilities ಯ ಸ್ವಯಂಚಾಲಿತ discovery
- ಯಾವುದೇ manual configuration ಅಗತ್ಯವಿಲ್ಲ

**ಯಾವಾಗ ಬಳಸಬೇಕು**: WordPress 7.0+ ಜೊತೆ third-party abilities ಬಳಸುವಾಗ

### Manual Mode {#manual-mode}

**Manual mode** ಗಾಗಿ ಸ್ಪಷ್ಟವಾದ configuration ಅಗತ್ಯವಿದೆ:

- ನೀವು ಯಾವ third-party abilities ಅನ್ನು ಲೋಡ್ ಮಾಡಬೇಕೆಂದು ನಿರ್ದಿಷ್ಟಪಡಿಸುತ್ತೀರಿ
- ಟೆಸ್ಟಿಂಗ್ ಅಥವಾ ನಿರ್ದಿಷ್ಟ abilities ಲೋಡ್ ಮಾಡಲು ಉಪಯುಕ್ತ
- configuration files ಅನ್ನು ಎಡಿಟ್ ಮಾಡಬೇಕಾಗುತ್ತದೆ
- ಹೆಚ್ಚು ನಿಯಂತ್ರಣ, ಆದರೆ ಹೆಚ್ಚು ಸೆಟಪ್ ಬೇಕು

**ಯಾವಾಗ ಬಳಸಬೇಕು**: ಟೆಸ್ಟಿಂಗ್, ನಿರ್ದಿಷ್ಟ abilities ಲೋಡ್ ಮಾಡುವುದು, ಅಥವಾ ಕಸ್ಟಮ್ configuration ಮಾಡುವಾಗ

### Legacy Mode {#legacy-mode}

**Legacy mode** ಹಳೆಯ third-party ability system ಅನ್ನು ಬಳಸುತ್ತದೆ:

- Custom ability registry (WordPress Abilities API ಅಲ್ಲ)
- ಹಳೆಯ WordPress version ಗಳೊಂದಿಗೆ backward compatible
- native WordPress integration ಇಲ್ಲ
- Deprecated ಆಗಿದೆ ಆದರೆ ಇನ್ನೂ ಬೆಂಬಲಿತವಾಗಿದೆ

**ಯಾವಾಗ ಬಳಸಬೇಕು**: WordPress 6.x ಅಥವಾ ಅದಕ್ಕಿಂತ ಹಳೆಯದಾದಾಗ, ಅಥವಾ ನಿಮಗೆ legacy compatibility ಬೇಕಾದಾಗ

## ನಿಮ್ಮ ಪ್ರಸ್ತುತ Mode ಅನ್ನು ಪರಿಶೀಲಿಸುವುದು {#checking-your-current-mode}

### Admin Panel ಮೂಲಕ {#via-admin-panel}

1. **WordPress Admin** → **Superdav AI Agent** → **Settings** ಗೆ ಹೋಗಿ
2. **Third-Party Mode** ಸೆಟ್ಟಿಂಗ್ ಹುಡುಕಿ
3. ನಿಮ್ಮ ಪ್ರಸ್ತುತ mode ಮತ್ತು ಅದನ್ನು ಬದಲಾಯಿಸಲು ಆಯ್ಕೆಗಳು ಇಲ್ಲಿ ಕಾಣಿಸುತ್ತವೆ

### Code ಮೂಲಕ {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', ಅಥವಾ 'legacy'
```

## ನಿಮ್ಮ Mode ಅನ್ನು ಬದಲಾಯಿಸುವುದು {#changing-your-mode}

### Auto Mode ಗೆ ಬದಲಾಯಿಸುವುದು {#switch-to-auto-mode}

ನೀವು WordPress 7.0+ ನಲ್ಲಿ ಇದ್ದೀರಿ ಮತ್ತು auto mode ಬಳಸಲು ಬಯಸಿದರೆ:

1. **Superdav AI Agent** → **Settings** ಗೆ ಹೋಗಿ
2. **Third-Party Mode** ಹುಡುಕಿ
3. **Auto (WordPress Abilities API)** ಆಯ್ಕೆಮಾಡಿ
4. **Save** ಕ್ಲಿಕ್ ಮಾಡಿ

Superdav AI Agent ಸ್ವಯಂಚಾಲಿತವಾಗಿ third-party abilities ಅನ್ನು discover ಮಾಡಿ ಮತ್ತು register ಮಾಡುತ್ತದೆ.

### Manual Mode ಗೆ ಬದಲಾಯಿಸುವುದು {#switch-to-manual-mode}

ಯಾವ abilities ಲೋಡ್ ಆಗಬೇಕು ಎಂಬುದನ್ನು ನೀವು manual ಆಗಿ ನಿಯಂತ್ರಿಸಲು ಬಯಸಿದರೆ:

1. **Superdav AI Agent** → **Settings** ಗೆ ಹೋಗಿ
2. **Third-Party Mode** ಹುಡುಕಿ
3. **Manual** ಆಯ್ಕೆಮಾಡಿ
4. **Save** ಕ್ಲಿಕ್ ಮಾಡಿ
5. ಯಾವ abilities ಅನ್ನು ಲೋಡ್ ಮಾಡಬೇಕೆಂದು ನಿರ್ದಿಷ್ಟಪಡಿಸಲು ನಿಮ್ಮ configuration file ಅನ್ನು ಎಡಿಟ್ ಮಾಡಿ

### Legacy Mode ಗೆ ಬದಲಾಯಿಸುವುದು {#switch-to-legacy-mode}

ನಿಮಗೆ legacy compatibility ಬೇಕಿದ್ದರೆ:

1. **Superdav AI Agent** → **Settings** ಗೆ ಹೋಗಿ
2. **Third-Party Mode** ಹುಡುಕಿ
3. **Legacy** ಆಯ್ಕೆಮಾಡಿ
4. **Save** ಕ್ಲಿಕ್ ಮಾಡಿ

## Auto Mode ನ ಪ್ರಯೋಜನಗಳು {#benefits-of-auto-mode}

### ಸ್ವಯಂಚಾಲಿತ Discovery {#automatic-discovery}

abilities ಈ ಕೆಳಗಿನ ಸ್ಥಳಗಳಿಂದ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಕಂಡುಬರುತ್ತವೆ:

- installed plugins
- active theme
- must-use plugins
- drop-in plugins

manual registration ಅಗತ್ಯವಿಲ್ಲ.

### Native Integration {#native-integration}

abilities WordPress Abilities API ಜೊತೆ integrate ಆಗುತ್ತವೆ:

- WordPress core ಜೊತೆ ಸ್ಥಿರವಾಗಿರುತ್ತದೆ
- WordPress admin ಜೊತೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ
- Abilities API ಬಳಸುವ ಇತರ plugins ಜೊತೆ compatible
- WordPress ವಿಕಸನಗೊಳ್ಳುತ್ತಿದ್ದಂತೆ ಭವಿಷ್ಯಕ್ಕೆ ಸಿದ್ಧ (Future-proof)

### ಸರಳೀಕೃತ ನಿರ್ವಹಣೆ (Simplified Management) {#simplified-management}

- ಎಡಿಟ್ ಮಾಡುವ configuration files ಇಲ್ಲ
- manual ability registration ಇಲ್ಲ
- Ability Visibility controls ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತವೆ
- Admin notices ನಿಮಗೆ ವರ್ಗೀಕರಿಸದ abilities ಬಗ್ಗೆ ಎಚ್ಚರಿಕೆ ನೀಡುತ್ತವೆ

### ಉತ್ತಮ ಕಾರ್ಯಕ್ಷಮತೆ (Better Performance) {#better-performance}

- abilities ಅನ್ನು cache ಮಾಡಲಾಗುತ್ತದೆ
- தேவைದ ಮೇಲೆ lazy-load ಆಗುತ್ತದೆ
- WordPress 7.0+ ಗಾಗಿ ಆಪ್ಟಿಮೈಸ್ ಮಾಡಲಾಗಿದೆ

## Migration Path {#migration-path}

### ನೀವು WordPress 6.x ನಲ್ಲಿ ಇದ್ದರೆ {#if-youre-on-wordpress-6x}

1. **WordPress 7.0+ ಗೆ ಅಪ್গ্রেಡ್ ಮಾಡಿ** (ಸಿದ್ಧವಾದಾಗ)
2. **Superdav AI Agent ಅನ್ನು v1.12.0+ ಗೆ ಅಪ್ಡೇಟ್ ಮಾಡಿ**
3. **third-party mode ಅನ್ನು Auto ಗೆ ಬದಲಾಯಿಸಿ** (ಐಚ್ಛಿಕ; legacy mode ಇನ್ನೂ ಕೆಲಸ ಮಾಡುತ್ತದೆ)
4. ಸರಿಯಾದ access controls ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು **ability visibility** ಅನ್ನು ಪರಿಶೀಲಿಸಿ

### ನೀವು WordPress 7.0+ ನಲ್ಲಿ ಇದ್ದರೆ {#if-youre-on-wordpress-70}

1. **Superdav AI Agent ಅನ್ನು v1.12.0+ ಗೆ ಅಪ್ಡೇಟ್ ಮಾಡಿ**
2. **third-party mode Auto ಗೆ ಸೆಟ್ ಆಗಿದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ** (ಇದು default ಆಗಿರಬೇಕು)
3. ಸರಿಯಾದ access controls ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು **ability visibility** ಅನ್ನು ಪರಿಶೀಲಿಸಿ
4. ಅವು ಕೆಲಸ ಮಾಡುತ್ತವೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು **third-party abilities ಅನ್ನು ಟೆಸ್ಟ್ ಮಾಡಿ**

## ಸಮಸ್ಯೆ ಪರಿಹಾರ (Troubleshooting) {#troubleshooting}

### auto mode ನಲ್ಲಿ abilities ಲೋಡ್ ಆಗುತ್ತಿಲ್ಲ {#abilities-arent-loading-in-auto-mode}

- ನೀವು WordPress 7.0+ ನಲ್ಲಿ ಇದ್ದೀರಾ ಎಂದು ಪರಿಶೀಲಿಸಿ
- third-party mode "Auto" ಗೆ ಸೆಟ್ ಆಗಿದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ
- ability ಒದಗಿಸುವ plugin active ಆಗಿದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ
- registration errors ಗಾಗಿ WordPress error logs ಅನ್ನು ಪರಿಶೀಲಿಸಿ

### ನಾನು legacy mode ಅನ್ನು ಉಳಿಸಲು ಬಯಸುತ್ತೇನೆ {#i-want-to-keep-legacy-mode}

- **Settings** → **Third-Party Mode** ಗೆ ಹೋಗಿ
- **Legacy** ಆಯ್ಕೆಮಾಡಿ
- **Save** ಕ್ಲಿಕ್ ಮಾಡಿ
- Legacy mode ಕೆಲಸ ಮಾಡುವುದನ್ನು ಮುಂದುವರಿಸುತ್ತದೆ

### ನನ್ನ custom abilities ಕಾಣಿಸುತ್ತಿಲ್ಲ {#my-custom-abilities-arent-showing}

- ಅವು WordPress hooks ಮೂಲಕ register ಆಗಿವೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ
- ಅವು Abilities API ಅನ್ನು ಸರಿಯಾಗಿ implement ಮಾಡುತ್ತವೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ
- WordPress error logs ಅನ್ನು ಪರಿಶೀಲಿಸಿ
- ಎಲ್ಲಾ registered abilities ಅನ್ನು ನೋಡಲು **Ability Visibility** admin page ಅನ್ನು ಬಳಸಿ

### ನನಗೆ "unclassified ability" notices ಬರುತ್ತಿವೆ {#im-getting-unclassified-ability-notices}

- ಇದು ಹೊಸ third-party abilities ಗಾಗಿ ಸಾಮಾನ್ಯವಾಗಿದೆ
- admin notice ನಲ್ಲಿ ಅವುಗಳನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ವರ್ಗೀಕರಿಸಿ
- classification ಕುರಿತು ವಿವರಗಳಿಗಾಗಿ **Ability Visibility** ನೋಡಿ

## Backward Compatibility {#backward-compatibility}

### ಇರುವ Configurations {#existing-configurations}

ನಿಮಗೆ ಈಗಾಗಲೇ third-party ability configurations ಇದ್ದರೆ:

- **Legacy mode**: ನಿಮ್ಮ configuration ಕೆಲಸ ಮಾಡುವುದನ್ನು ಮುಂದುವರಿಸುತ್ತದೆ
- **Manual mode**: ನಿಮ್ಮ configuration ಕೆಲಸ ಮಾಡುವುದನ್ನು ಮುಂದುವರಿಸುತ್ತದೆ
- **Auto mode**: ನಿಮ್ಮ configuration ಅನ್ನು ನಿರ್ಲಕ್ಷಿಸಲಾಗುತ್ತದೆ (auto mode ನಿಯಂತ್ರಣ ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ)

ನಿಮ್ಮ ಕಸ್ಟಮ್ configuration ಅನ್ನು ಉಳಿಸಲು, Manual ಅಥವಾ Legacy mode ನಲ್ಲಿರಿ.

### Deprecation Timeline {#deprecation-timeline}

- **v1.12.0**: Legacy ಮತ್ತು Manual modes ಇನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಬೆಂಬಲಿತವಾಗಿವೆ
- **v1.13.0+**: Legacy mode ನಲ್ಲಿ deprecation notices ಬರಬಹುದು
- **v2.0.0**: Legacy mode ಅನ್ನು ತೆಗೆದುಹಾಕಬಹುದು (TBD)

## ಉತ್ತಮ ಅಭ್ಯಾಸಗಳು (Best Practices) {#best-practices}

### ಹೊಸ Installation ಗಾಗಿ {#for-new-installations}

- Auto mode ಬಳಸಿ (ಇದು default ಆಗಿದೆ)
- Superdav AI Agent ಅನ್ನು abilities ಅನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ discover ಮಾಡಲು ಬಿಡಿ
- access ನಿಯಂತ್ರಣಕ್ಕಾಗಿ Ability Visibility ಬಳಸಿ

### ಇರುವ Installation ಗಾಗಿ {#for-existing-installations}

- ಸಾಧ್ಯವಾದಷ್ಟು WordPress 7.0+ ಗೆ ಅಪ್গ্রেಡ್ ಮಾಡಿ
- ಸರಳೀಕೃತ ನಿರ್ವಹಣೆಗಾಗಿ Auto mode ಗೆ ಬದಲಾಯಿಸಿ
- Ability Visibility ಬಳಸಿ abilities ಅನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ವರ್ಗೀಕರಿಸಿ

### Custom Abilities ಗಾಗಿ {#for-custom-abilities}

- abilities ಅನ್ನು WordPress hooks ಮೂಲಕ register ಮಾಡಿ (Abilities API)
- custom ability registries ನಿಂದ ದೂರವಿರಿ
- Auto mode ಜೊತೆ WordPress 7.0+ ನಲ್ಲಿ ಟೆಸ್ಟ್ ಮಾಡಿ

## ಮುಂದಿನ ಹಂತಗಳು {#next-steps}

1. **ನಿಮ್ಮ WordPress version ಅನ್ನು ಪರಿಶೀಲಿಸಿ**: Auto mode ಗಾಗಿ ನೀವು 7.0+ ನಲ್ಲಿ ಇದ್ದೀರಾ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ
2. **ನಿಮ್ಮ third-party mode ಅನ್ನು ಪರಿಶೀಲಿಸಿ**: Settings ಗೆ ಹೋಗಿ ನಿಮ್ಮ ಪ್ರಸ್ತುತ mode ಅನ್ನು ಪರಿಶೀಲಿಸಿ
3. **ಅಗತ್ಯವಿದ್ದರೆ ಅಪ್ಡೇಟ್ ಮಾಡಿ**: ನೀವು WordPress 7.0+ ನಲ್ಲಿ ಇದ್ದರೆ Auto mode ಗೆ ಬದಲಾಯಿಸಿ
4. **abilities ಅನ್ನು ವರ್ಗೀಕರಿಸಿ**: ಯಾವುದೇ unclassified abilities ಅನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ವರ್ಗೀಕರಿಸಿ
5. **ಟೆಸ್ಟ್ ಮಾಡಿ**: ನಿಮ್ಮ third-party abilities ಸರಿಯಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತವೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ

## ಸಂಬಂಧಿತ ವಿಷಯಗಳು {#related-topics}

- **Ability Visibility**: ಯಾವ abilities ಎಲ್ಲಿ ಪ್ರದರ್ಶಿಸಬೇಕು ಎಂಬುದನ್ನು ನಿಯಂತ್ರಿಸಿ
- **WordPress Abilities API**: native WordPress ability registration ಬಗ್ಗೆ ಕಲಿಯಿರಿ
- **Third-Party Ability Development**: Auto mode ಜೊತೆ ಕೆಲಸ ಮಾಡುವ abilities ಅನ್ನು ರಚಿಸಿ
