---
title: Integrácia RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Integrácia s RunCloud

## Prehľad {#overview}
RunCloud je platforma na správu serverov v chabe, ktorá vám umožňuje jednoducho nasporiť a spravovať webové aplikácie na vlastných chabách. Táto integrácia umožňuje automatické synchronizovanie domén a správu SSL certifikátov medzi Ultimate Multisite a RunCloud.

## Funkcionality {#features}
- Automatické synchronizovanie domén
- Správa SSL certifikátov
- Odstránenie domény pri odstránení mapovania

## Požiadavky {#requirements}
Nasledujúce kon constanty musia byť definované v súbore `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Pokyny na konfiguráciu {#setup-instructions}

### 1. Získajte svoje RunCloud API poverenia (credentials) {#1-get-your-runcloud-api-credentials}

1. Prihláste sa do svojho dashboardu RunCloud.
2. Prejdite do sekcie "User Profile" (kliknite na svoju profilovú fotku v pravom hornom rohu).
3. Vyberte "API" z menu.
4. Kliknite na "Generate API Key", ak ešte nemáte vytvorený kľúč.
5. Skopírujte svoj API Key a API Secret.

### 2. Získajte svoje ID serverov a aplikácií {#2-get-your-server-and-app-ids}

1. V dashboarde RunCloud prejdite do sekcie "Servers".
2. Vyberte server, kde je hostovaná vaša WordPress multisite.
3. Server ID je viditeľný v URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Prejdite do sekcie "Web Applications" a vyberte svoju aplikáciu WordPress.
5. App ID je viditeľný v URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Pridajte constanty do wp-config.php {#3-add-constants-to-wp-configphp}

Pridajte nasledujúce constanty do svojho súboru `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Aktivujte integráciu {#4-enable-the-integration}

1. V administrá WordPress prejdite do Ultimate Multisite > Settings
2. Prejdite na záľava "Domain Mapping" (Mapovanie domén)
3. Prejdite dole na sekciu "Host Integrations" (Integrácie hostov)
4. Aktivujte integráciu RunCloud
5. Kliknite na "Save Changes" (Uložiť zmeny)

## Ako to funguje {#how-it-works}

Keď je doména mapovaná v Ultimate Multisite:

1. Integrácia pošle požiadavku API RunCloud, aby prispôsobil doménu vašej aplikácii
2. Ak sa doména úspešne prispôsobi, integrácia tiež znovu nasadí SSL certifikáty
3. Keď odstránite mapovanie domény, integrácia doménu odstráni z RunCloud

Pre inštaláciu poddoméniek bude integrácia automaticky spravovať vytvorenie poddoméniek v RunCloud pri pridávaní nových sítí do vašej siete.

## Riešenie problémov {#troubleshooting}

### Problémy s API pripojením {#api-connection-issues}
- Skontrolujte, či sú vaše API heslá správne
- Prejdite na kontrolu, či sú vaše serverové a app ID správne
- Uistite sa, že váš účet RunCloud má potrebné povolenia

### Problémy so SSL certifikátmi {#ssl-certificate-issues}
- RunCloud môže trvať dlhšie na vydanie SSL certifikátov
- Prejdite na kontrolu, či vaše domény správne ukážu IP adresu vášho servera
- Skontrolujte nastavenia SSL v RunCloud pre vašu aplikáciu

### Doména nie bola pridaná {#domain-not-added}
- Skontrolujte logy Ultimate Multisite na akékoľvek chybové správy
- Prejdite na kontrolu, či doména nebola už pridaná do RunCloud
- Uistite sa, že váš plán RunCloud podporuje viacero domén
