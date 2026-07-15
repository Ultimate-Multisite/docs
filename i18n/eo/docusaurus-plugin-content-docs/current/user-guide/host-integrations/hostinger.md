---
title: Integrado Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Hostinger (hPanel) Integation

## Generalinformo {#overview}

Hostinger est popular web hosting provayder, kiu havas modernan kontrolpanel nomatan hPanel. La integracio Ultimate Multisite Hostinger permesas sincronizajn de domeno otomatik entre Ultimate Multisite kaj Hostinger's hPanel, per permiti al vi aŭtomate administra domeno mapigojn kaj subdominios direkte el via WordPress admino.

## Karakteristoj {#features}

- Automata kreo de addon domeno en hPanel
- Automata kreo de subdomino en hPanel (por subdomino multisite instalacioj)
- Domeno forigo, kiam mapigoj estas delete
- Senaca integracio kun la API de domeno administrio de hPanel

## Requisitoj {#requirements}

Por uzi la Hostinger integracion, vi bezonas:

1. Hostinger konton kun aliro al hPanel
2. API token de Hostinger
3. La seguenti konstanta definita en via `wp-config.php` filiro:

```php
define('WU_HOSTINGER_API_TOKEN', 'via_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'via_hostinger_account_id');
```

Opicionalajne, vi ankaŭ povas defini:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Default API endpoint
```

## Instalado Instrukoj {#setup-instructions}

### 1. Genere Via Hostinger API Token {#1-generate-your-hostinger-api-token}

1. Logi-ĝu al via Hostinger konto kaj aliri hPanel
2. Navigu al **Account Settings** → **API Tokens**
3. Klikui sur **Create New Token**
4. Doni via token deskriptivan nomon (ekz., "Ultimate Multisite")
5. Selektoj la necesajn permesojn:
   - Domain management
   - Subdomain management
6. Kopii la generitan token kaj konservu ĝin sekure

### 2. Trovi Via Konto ID {#2-find-your-account-id}

1. En hPanel, navigu al **Account Settings** → **Account Information**
2. Via Konto ID estas prezentita sur ĉi tiu paĝo
3. Kopii kaj konservu ĉi tiun ID por la sekva paŝo

### 3. Apliigi Konstanto en wp-config.php {#3-add-constants-to-wp-configphp}

Adu la seguenti konstanto al via `wp-config.php` filiro:

```php
define('WU_HOSTINGER_API_TOKEN', 'vaša_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'vaša_hostinger_account_id');
```

Se via uza Hostinger konto uzu diversan API endpoint, vi povas personalizi lin ion:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Aktivi la Integrazionejn {#4-enable-the-integration}

1. En via WordPress admin, rajdu **Ultimate Multisite > Settings** (Ajustoj)
2. Navigu al tabulo **Domain Mapping** (Mappado de domenoj)
3. Scrollu nedal por **Host Integrations** (Integrazioni Host)
4. Aktivi la integrazionejn **Hostinger (hPanel)**
5. Kliku surti **Save Changes** (Konservu ŝanĝojn)

## Kiel Ĝi Funkcias {#how-it-works}

### Addon Domains (Dominios-dodado) {#addon-domains}

Kiam vi mappas domenon en Ultimate Multisite:

1. La integrazione sendas petiron al API de Hostinger por aĉadi la domenon kiel addon domaino
2. La dominio estas konfigurita por pointedigi al via ĉefa direktorio
3. Kiam mappado de dominio estas forigita, la integrazione aŭtomate forigas la addon domainon el hPanel

### Subdomains (Subdominios) {#subdomains}

Por subdomina multisite instalacioj, kiam nova sitio estas kreita:

1. La integrazione ekstraktas la subdomina partion el la kompleta dominio
2. Ĝi sendas petiron al API de Hostinger por aĉadi la subdominion
3. La subdominio estas konfigurita por pointedigi al via ĉefa direktorio

## Importanta Notoj {#important-notes}

- La integrazione uzas la REST API de Hostinger por komunikado kun via konto
- Via API token devas havi necesajn permesojn por domeno kaj subdomino gestado
- La integrazione ne maneĝas DNS konfiguracion; domenoj devas esti pointedigitaj al via Hostinger konto antaŭ ĉio
- API petoj estas fari sekure per HTTPS
- Gardu vian API token sekure kaj ne partofu ĝin publikan

## Problemoj (Troubleshooting) {#troubleshooting}

### API Connection Issues (Problemoj kun API konekto) {#api-connection-issues}

Verifuji, ke si via API token vala ĝiaŭ ne da ŝanĝi aŭ expirita.
Kontrolu, ke via Account ID estas ĝusta.
Siguru, ke via API token havas la necesajn permesojn por domajnoj-menado.
Verifuji, ke via Hostinger konto estas aktiva kaj en bona estado.

### Domajno Ne Adata {#domain-not-added}

- Kontrolu la logojn de Ultimate Multisite por ĉian eraro mesaĝoj.
- Verifuji, ke la domajno ne estas déjà data al via Hostinger konto.
- Siguru, ke via Hostinger konto ne atingis sian liman por addon domajnoj.
- Konfirme, ke la domajno estas ĝuste pointed al via Hostinger nameserverej.

### Problemo kun SSL Sertifikatoj {#ssl-certificate-issues}

- La integriĝo ne maneĝas la emitadon de SSL sertifikatoj.
- Hostinger tipike provizas senpagajn SSL sertifikatojn per AutoSSL.
- Vi povas maneĝi SSL sertifikatojn direkte en hPanel sub **SSL/TLS**.
- Alternativ, uzu Let's Encrypt kun la AutoSSL funkcio de Hostinger.

## Subteno {#support}

Por pli da helpado kun la integriĝo de Hostinger, renvu:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
