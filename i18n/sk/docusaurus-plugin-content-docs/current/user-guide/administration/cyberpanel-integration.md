---
title: Integrácia CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Integrácia CyberPanelu

Toto smernica vysvetľuje, ako skonfigurovať integráciu Ultimate Multisite CyberPanel tak, aby mapované domény v vašej sieti boli automaticky pridávané (a odstraňované) ako virtuálne hosty v CyberPanelu, s možnosťou automatického poskytovania SSL cez Let's Encrypt.

## Čo to robí {#what-it-does}

- Keď je doména mapovaná v Ultimate Multisite, integrácia volá API CyberPanelu na vytvorenie virtuálneho hosta pre danú doménu.
- Keď sa mapovanie domény odstráni, integrácia volá API na odstránenie odpovedajúceho virtuálneho hosta.
- Keď je automatické SSL zapnuté, integrácia spustí vydávanie certifikátu Let's Encrypt okamžite po vytvorení virtuálneho hosta.
- Možnosť pridávať/odstraňovať alias `www.` v závislosti od vašej nastavenia "Auto-create www subdomain" v nastaveniach mapovania domén.

## Požiadavky {#prerequisites}

- Pracujúca inštancia CyberPanelu (doporučuje sa verzia v2.3 alebo novšia), na ktorú je prístup z vášho WordPress servera.
- Existujúci webový portál v CyberPanelu, ktorý už slúži ako základ pre vašu sieti WordPress. Integrácia pridáva nové virtuálne hosty k tomuto serveru.
- Prístup k API CyberPanelu musí byť povolený. Autentifikácia sa vykonáva pomocou vášho používateľského mena a hesla administrátora CyberPanelu.
- Vaše DNS záznamy pre mapované domény musia už smerovať na IP adresu vášho servera, aby mohol automatické SSL vydávať platný certifikát.

## Požiadavky {#requirements}

Nasledujúce kon constantov musí byť definované v súbore `wp-config.php`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Možnosť definovať aj:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Predvolené nastavenie: true — vydajte SSL Let's Encrypt po vytvorení domény
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Predvolené nastavenie: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Používa sa na kontakt pre certifikát SSL
```

## Pokyny na konfiguráciu {#setup-instructions}

### 1. Aktivujte API CyberPanel {#1-enable-the-cyberpanel-api}

1. Prihláste sa do svojho dashboardu CyberPanel ako admin.
2. Prejdite do **Security** > **SSL** a potvrďte, že SSL je aktivný v siamej rozhrnute CyberPanel (vyžaduje sa pre bezpečnú API volaní).
3. API CyberPanel je štandardne dostupná na adrese `https://va-server-ip:8090/api/`. Nie je potrebné robiť žiadne ďalšie kroky na jeho aktiváciu — je to predvolene aktívne pre používateľov admina.

### 2. Pridajte konстанти do wp-config.php {#2-add-constants-to-wp-configphp}

Pridajte nasledujúce konconstantné hodnoty do svojho súboru `wp-config.php` pred čiarom `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://va-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'vaše_bezpečné_heslo');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Aby ste aktivovali auto-SSL (doporučované):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@va-domain.com');
```

### 3. Aktivujte integráciu {#3-enable-the-integration}

1. V administrácii vašej siete WordPress prejdite do **Ultimate Multisite** > **Settings**.
2. Prejdite na záložku **Domain Mapping**.
3. Prejdite dole na sekciu **Host Integrations**.
4. Aktivujte integráciu **CyberPanel**.
5. Kliknite na **Save Changes** (Uložiť zmeny).

### 4. Overtečte pripojenosť {#4-verify-connectivity}

Použite vbudovaný test pripojenia v asistencie nastavení:

1. Prejdite do **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Kliknite na **Test Connection**.
3. Úspešné správy potvrdia, že plugin môže dosiahnuť API CyberPanel a správne sa autentizovať.

## Ako to funguje {#how-it-works}

### Domain Mapping (Mapovanie domén) {#domain-mapping}

Keď je doména mapovaná v Ultimate Multisite:

1. Integrácia pošle `POST` požiadavku na `/api/createWebsite` na vašom hoste CyberPanel.
2. CyberPanel vytvorí nový virtuálny host pre doménu pod konfigurovaným balíkom (package).
3. Doména súborový kameň (document root) je nastavený tak, aby ukazoval na základnú smerovú schránku vašej WordPress siete.
4. Keď sa mapovanie domény odstráni, integrácia volá `/api/deleteWebsite` na uprnit virtuálny host.

### Auto-SSL (Automatické SSL) {#auto-ssl}

Keď je `WU_CYBERPANEL_AUTO_SSL` nastavené na `true`:

1. Po vytvorení virtuálneho hosta volá integrácia `/api/issueSSL` pre doménu.
2. CyberPanel požiada Let's Encrypt o certifikát pomocou ACME HTTP-01 výzvy (challenge).
3. Certifikát je automaticky obnovovaný CyberPanelom pred expiráciou.

> **Dôležité:** DNS musí byť plne propagovaný na IP adresu vášho serveru, aby Let's Encrypt mohol doménu validovať. Ak sa vydávanie SSL okamžite po mapovaní neprenesie, počkajte na propagáciu DNS a znova spustite SSL z dashboardu CyberPanel pod **SSL** > **Manage SSL**.

### www Subdomain (Poddoména www) {#www-subdomain}

Ak je v nastaveniach Domain Mapping zapnutá funkcia **Auto-create www subdomain**, integrácia vytvorí aj alias virtuálneho hosta pre `www.<doména>` a pri zapnutom Auto-SSL vydá certifikát, ktorý pokrýva obe varianty – apex (základnú doménu) a www.

### Email Forwarders (Prekonajky e-mailov) {#email-forwarders}

Keď je aktivý addon [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/), môže CyberPanel poskytovať aj forwardery e-mailov pre zákazníkov. Forwardery presmerujú správy z domény na iný inbox bez vytvárania plného pošтового prepustenia, čo je užitočné pre aliasy ako `info@customer-domain.test` alebo `support@customer-domain.test`.

Pred aktivovaním forwarderov pre zákazníkov:

1. Potvrďte, že vyššie uvedené konštanty CyberPanel sú nakonfigurované a že test pripojenia úspešne prebieha.
2. Aktivujte poskytovatec e-mailov v nastaveniach addon Email.
3. Potvrďte, že doména zákazníka už existuje v CyberPanel pred vytvorením forwardera.
4. Vytvorte testovací forwarder a pošlite si správu cez ne, než ponúknete funkciu na produkčných plánoch.

Ak vytváranie forwardera neúspešne, skontrolujte najprv aktivita logov Ultimate Multisite, potom potvrďte v CyberPanel, že zdrojová doména existuje a že používateľ API má oprávnenia na správu e-mailov.

## Referencia konfiguračnej informácie {#configuration-reference}

| Konstanť | Požadované | Predvolené nastavenie | Popis |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Áno | — | Plný URL na vašu instanciu CyberPanel vrátane portu, napr. `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Áno | — | Používateľské meno admina CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Áno | — | Heslo admina CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Áno | `Default` | Balenie hostingu CyberPanel, ktoré sa priradí novým virtuálnym hostom |
| `WU_CYBERPANEL_AUTO_SSL` | Nie | `true` | Vytvorenie SSL certifikátu Let's Encrypt po vytvorení domény |
| `WU_CYBERPANEL_PHP_VERSION` | Nie | `PHP 8.2` | Verzia PHP pre nové virtuálne hosty (musí zodpovedať verzii nainštalovanej v CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | Nie | — | E-mail kontakt na registráciu SSL certifikátu |

## Dôležité poznámky {#important-notes}

API CyberPanel používa autentifikáciu na základe session tokenov. Integrácia automaticky získava token pri každom API volaní.
Vaše admin účto v CyberPanel musí mať oprávnenia na vytváranie a odstránenie webových stránok.
CyberPanel štartuje po počte `8090` ako štandard. Ak váš server používa firewall, uistite sa, že tento port je prístupný pre server aplikácie WordPress.
Integrácia neobsahuje správu DNS záznamov. Musíte doménne DNS ukázať na IP adresu vášho servera pred mapovaním domény v Ultimate Multisite.
Ak používate OpenLiteSpeed (OLS), po zmenení virtuálho hosta sa automaticky spustí pokojné restartovanie. Nie je potrebná manuálna intervencia.

## Riešenie problémov {#troubleshooting}

### Odmietnuté pripojenie k API {#api-connection-refused}

- Overte, že port `8090` je otvorený v firewall vášho servera.
- Potvrďte, že hodnota `WU_CYBERPANEL_HOST` obsahuje správny protokol (`https://`) a port.
- Skontrolujte, či je váš SSL certifikát CyberPanel platný; samopripravené certifikáty môžu spôsobiť chyby v verifikácii TLS. Nastavte `WU_CYBERPANEL_VERIFY_SSL` na `false` len v zvykových súkromných sieťových prostredích.

### Chyby pri autentifikácii {#authentication-errors}

- Potvrďte, že vaše `WU_CYBERPANEL_USERNAME` a `WU_CYBERPANEL_PASSWORD` sú správne, priamo sa prihlínajte do CyberPanel.
- CyberPanel blokuje účty po opakovaných neúspešných pokusoch na prihlásenie. Skontrolujte **Security** > **Brute Force Monitor** v CyberPanel, ak dôjde k blokádiyam.

### Doména nie je vytvorená {#domain-not-created}

- Skontrolujte aktivita log Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) na zmes chýb API.
- Potvrďte, že balíček definovaný v `WU_CYBERPANEL_PACKAGE` existuje v CyberPanel (**Packages** > **List Packages**).
- Uistite sa, že doména nie je už zaregistrovaná ako webová stránka v CyberPanel — dvojité vytvorenie webovej stránky vráti chybu.

### SSL certifikát nebol vydaný {#ssl-certificate-not-issued}

* Potvrďte, že DNS je úplne propagovaný: Príkaz `dig +short your-domain.com` by mal vrátiť IP adresu vášho serveru.
* Let's Encrypt nastavuje limity rýchlosti (rate limits). Ak ste nedávno vydali niekoľko certifikátov pre rovnakú doménu, počkajte, než sa pokyniete znova.
* Pre detaily o chubovnosti vydávania certifikátov si pozrite logy SSL v CyberPanel pod **Logs** > **Error Logs**.
* Ako záverečnú možnosť môžete SSL manuálne vydať cez CyberPanel: **SSL** > **Manage SSL** > vyberte doménu > **Issue SSL**.

## Referencie {#references}

- Dokumentácia API CyberPanel: https://docs.cyberpanel.net/docs/category/api
- Správa SSL v CyberPanel: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Limity rýchlosti Let's Encrypt: https://letsencrypt.org/docs/rate-limits/
