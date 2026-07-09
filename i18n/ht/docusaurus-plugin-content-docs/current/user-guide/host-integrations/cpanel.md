---
title: Entegrasyon cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Entegrasyon akpanel (cPanel) {#cpanel-integration}

## Genel Bakış {#overview}
cPanel, birçok paylaşımlı ve özel hosting sağlayıcısı tarafından kullanılan en popüler web barındırma kontrol panellerinden biridir. Bu entegrasyon, Ultimate Multisite ile cPanel arasında otomatik alan adı senkronizasyonu sağlar; böylece domain takma adlarını (aliases) ve alt alan adlarını (subdomains) cPanel hesabınıza otomatik olarak ekleyebilirsiniz.

## Özellikler {#features}
- cPanel'de otomatik eklenti alanı oluşturma
- cPanel'de otomatik alt alan adı oluşturma (alt alan adı multisite kurulumları için)
- Eşleştirmeler silindiğinde alan adının kaldırılması

## Gereksinimler {#requirements}
Aşağıdaki sabitleri `wp-config.php` dosyanıza tanımlamanız gerekir:

```php
define('WU_CPANEL_USERNAME', 'sizin_cpanel_kullanici_adiniz');
define('WU_CPANEL_PASSWORD', 'sizin_cpanel_sifreniz');
define('WU_CPANEL_HOST', 'sizin_cpanel_hostunuz');
```

İsteğe bağlı olarak şunları da tanımlayabilirsiniz:

```php
define('WU_CPANEL_PORT', 2083); // Varsayılan değer 2083'tür
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Varsayılan değer /public_html'dir
```

## Kurulum Talimatları {#setup-instructions}

### 1. cPanel Kimlik Bilgilerinizi Alın {#1-get-your-cpanel-credentials}

1. Hosting sağlayıcınızdan cPanel kullanıcı adınızı ve şifrenizi alın.
2. cPanel ana bilgisayarınızı (genellikle `cpanel.sitenizinadi.com` veya `sitenizinadi.com:2083`) belirleyin.

### 2. wp-config.php'ye Sabitleri Ekleyin {#2-add-constants-to-wp-configphp}

Aşağıdaki sabitleri `wp-config.php` dosyanıza ekleyin:

```php
define('WU_CPANEL_USERNAME', 'sizin_cpanel_kullanici_adiniz');
define('WU_CPANEL_PASSWORD', 'sizin_cpanel_sifreniz');
define('WU_CPANEL_HOST', 'sizin_cpanel_hostunuz');
```

İsteğe bağlı olarak port ve kök dizin ayarlarını özelleştirebilirsiniz:

```php
define('WU_CPANEL_PORT', 2083); // cPanel farklı bir port kullanıyorsa değiştirin
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Belge kök dizininiz farklıysa değiştirin
```

### 3. Entegrasyonu Etkinleştirin {#3-enable-the-integration}

1. Nan ou WordPress admin ou, ale nan Ultimate Multisite > Settings ale.
2. Ale nan onglet "Domain Mapping".
3. Fè scroll anba pou "Host Integrations".
4. Enable integrasyon cPanel la.
5. Klike sou "Save Changes" (Konserve Chanjman yo).

## Kijan Li Travay {#how-it-works}

### Addon Domains {#addon-domains}

Lè yon domain mapye nan Ultimate Multisite:

1. Integrasyon an voye yon demann pou API cPanel la pou ajoute domain sa a kòm yon addon domain.
2. Domain an configure pou pointer (pointer) nan dirèktwa ra (root directory) ou.
3. Lè yon domain mapping retire, integrasyon an ap retire addon domain sa a nan cPanel.

### Subdomains {#subdomains}

Pou enstalasyon subdomain multisite, lè yon nou site kreye:

1. Integrasyon an pran pati subdomain la soti nan domain konplè a.
2. Li voye yon demann pou API cPanel la pou ajoute subdomain sa a.
3. Subdomain sa a configure pou pointer (pointer) nan dirèktwa ra ou.

## Nòt Enpòtan {#important-notes}

- Integrasyon an itilize API2 cPanel la pou kominike ak kont cPanel ou.
- Kont cPanel ou dwe gen pèmisyon pou ajoute addon domains ak subdomains.
- Gen kèk fournisseur hosting ki ka limite kantite addon domains oswa subdomains ou ka kreye.
- Integrasyon an pa jere konfigirasyon DNS; ou toujou bezwen pointer domain ou nan adrès IP sèvè ou a.

## RezolisasyonPwoblèm (Troubleshooting) {#troubleshooting}

### pwoblèm koneksyon API {#api-connection-issues}
- Verifye ke non itilizatè ak mot de pase cPanel ou yo kòrèk.
- Kontinye ke host cPanel ou an kòrèk epi li rive jwenn aksè.
- Asire w ke kont cPanel ou gen pèmisyon ki nesesè.
- Esaye itilize URL konplè pou host la (egzanp: `https://cpanel.yourdomain.com`).

### Domain pa ajoute {#domain-not-added}
- Kont nan logs Ultimate Multisite a pou nenpòt mesaj erè.
- Verifye ke domain an pa deja ajoute nan cPanel.
- Asire w ke kont cPanel ou pa rive nan limit li pou addon domains oswa subdomains.

### Problèm ak Sèflet SSL (SSL Certificate Issues) {#ssl-certificate-issues}
- Entegrasyon anpa jere emisyon sèflet SSL la.
- Ou pral bezwen itilize zouti SSL/TLS nan cPanel oswa fonksyon AutoSSL pou emisyon sèflet SSL pou domèn ou yo.
- Oswa, ou ka itilize yon sèvis tankou Let's Encrypt ak AutoSSL cPanel la.
