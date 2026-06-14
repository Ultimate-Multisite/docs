---
title: Integrado con cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Integrado kun cPanel

## Ĝenerala Informoj
cPanel estas unu el plej popularaj web-hosto kontrolpaneloj, kiuj estas uzata de multaj partaj kaj dedikaj hosto providantoj. Ĉi tiu integracio permesas aŭtomatan domeno sincronigon inter Ultimate Multisite kaj cPanel, permesante al vi aŭtomate aĉoti domeno aliasajn kaj subdomenojn al via cPanel konto.

## Funkcioj
- Aŭtomata kreo de addon domeno en cPanel
- Aŭtomata kreo de subdomeno en cPanel (por instalado de subdomeno multisite)
- Domeno forigo, kiam mapoj estas delete

## Requisitoj
La seguenti konstanta devas esti definita en via `wp-config.php` fakto:

```php
define('WU_CPANEL_USERNAME', 'via_cpanel_username');
define('WU_CPANEL_PASSWORD', 'via_cpanel_password');
define('WU_CPANEL_HOST', 'via_cpanel_host');
```

Opционаle, vi ankaŭ povas defini:

```php
define('WU_CPANEL_PORT', 2083); // Default estas 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Default estas /public_html
```

## Montado Instrukoj

### 1. Akcepte Vian cPanel kredencojn

1. Obtenu vian username kaj password de via hosto providanto
2. Determini vian cPanel hoston (solue `cpanel.via-domeno.com` aŭ `via-domeno.com:2083`)

### 2. Aggiģi Konstanto al wp-config.php

Aggiģu la seguenti konstanto al via `wp-config.php` fakto:

```php
define('WU_CPANEL_USERNAME', 'via_cpanel_username');
define('WU_CPANEL_PASSWORD', 'via_cpanel_password');
define('WU_CPANEL_HOST', 'via_cpanel_host');
```

Opционаle, vi povas personalizi la porton kaj la radikan direktorion:

```php
define('WU_CPANEL_PORT', 2083); // Renvu se via cPanel uzas apartan porton
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Renvu se via dokumentradiko estas diferenca
```

### 3. Aktivizi la Integradon

1. Dans la admin de WordPress, allez à Ultimate Multisite > Settings (Konfiguracio).
2. Navigez zur "Domain Mapping" (Domena Mappo).
3. Scrollt ab zur "Host Integrations" (Integracioj Host).
4. Aktivet die cPanel integration.
5. Klickt uf "Save Changes" (Ändrige Speichern).

## Kiel Funktiert Das?

### Addon Domains (Zusätzliche Domena)

Wenn e domena in Ultimate Multisite mappet wird:

1. Die integration sendet en anfrag zu cPanel's API, um d domena als addon domain hinzuzfüege.
2. D domena isch so konfiguriert, dass sie uf de root directory zeigt.
3. Wenn e domena mapping entfernt wird, wird die integration d addon domain vo cPanel entferne.

### Subdomains (Unterdomäne)

Für subdomain multisite installationen, wenn e neus site erstellt wird:

1. Die integration extrahiert de subdomain teil us de volle domena.
2. Sie sendet en anfrag zu cPanel's API, um d subdomain hinzuzfüege.
3. D subdomain isch so konfiguriert, dass sie uf de root directory zeigt.

## Wichtigi Notize

- Die integration brucht cPanel's API2, um mit Ihrem cPanel account z'kommuniziere.
- Ihr cPanel account muess d berechtigunge ha, addon domains und subdomains hinzuzfüege.
- Manche hosting provider chönnte d Anzahl vo addon domains oder subdomains beschränke, wo Sie erstelle chönd.
- Die integration behandelt kei DNS konfiguration; Sie müend Ihre domena trotzdem uf d IP-Adrässe vom server zeige.

## Fehlerbehebung (Troubleshooting)

### API Connection Issues (API Verbindigsproblem)
- Überprüfet, ob Ihr cPanel username und Passwort korrekt sind.
- Prüfet, ob Ihr cPanel host korrekt isch und zugänglich isch.
- Stelled sicher, dass Ihr cPanel account d nötige berechtigunge het.
- Versuefe Sie, d volle URL für de host z'bruche (z.B. `https://cpanel.yourdomain.com`).

### Domain Not Added (Domena Nicht hinzugefügt)
- Überprüfet d Ultimate Multisite logs uf irgendwelchi fehlerbotschafte.
- Verifiziere, dass d domena scho nöd in cPanel hinzugefügt isch.
- Stelled sicher, dass Ihr cPanel account sini limit für addon domains oder subdomains nöd erreicht het.

### Problema kun SSL Sertifikato

- La integracio ne mane ne emisi de sertifikato SSL.
- Vi bezonari uzi la tool SSL/TLS de cPanel aŭ la funkcio AutoSSL por emiti sertifikato SSL por viajn domeno.
- Alternativ, vi povas uzi servon kiel Let's Encrypt kun la AutoSSL de cPanel.
