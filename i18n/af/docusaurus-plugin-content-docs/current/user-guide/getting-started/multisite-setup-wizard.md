---
title: Multisite Opstelwonderbord
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Multisite Setup Wizard {#multisite-setup-wizard}

Ultimate Multisite sluit 'n ingeboude wizard in wat 'n standaard WordPress-installasie outomaties ombeeld na 'n WordPress Multisite-netwerk. Dit beteken jy hoef nie handmatig in `wp-config.php` te redigeer of databasedatabasebeveiligingskommandos te hardloop nie.

:::tip
As jou WordPress-installasie reeds as 'n Multisite-netwerk loop, kan jy hierdie stap heeltemal oorskakel. Die wizard verskyn net wanneer Multisite nog nie geaktiveer is nie.
:::

## Wanneer Verskyn die Wizard? {#when-does-the-wizard-appear}

Wanneer jy Ultimate Multisite op 'n standaard (nie-Multisite) WordPress-installasie aktiveer, detecteer die plugin dat Multisite nie geaktiveer is nie en rig jou outomaties na die Multisite Setup Wizard in plaas van die gewone setup wizard.

Jy kan dit ook direk by **WP Admin > Ultimate Multisite > Multisite Setup** bereik.

## Voorvereistes {#prerequisites}

Voordat jy die wizard laat loop, maak seker van die volgende:

- Jy het **administrateurtoegang** tot jou WordPress-installasie
- Jou webwerf se `wp-config.php` lêer is **skryfbaar** deur die webwerfserver
- Jy het 'n **onlangse backup** van jou lêers en databasis

:::warning
Die wizard wysig jou `wp-config.php` lêer en skep nuwe databastable. Maak altyd 'n backup voordat jy voortgaan.
:::

## Stap 1: Welkom {#step-1-welcome}

Die eerste skerm verduidelik wat WordPress Multisite is en wat die wizard gaan doen:

- Die Multisite-funksie in jou WordPress-konfigurasie aktiveer
- Die nodige netwerkdatabasetable skep
- Die vereiste multisite-konstantes by `wp-config.php` voeg
- Ultimate Multisite oor die netwerk aktiver netwerk-wyd

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

Klik op **Continue** om voort te gaan.

## Stap 2: Netwerkkonfigurasie {#step-2-network-configuration}

Hierdie stap vra jou om jou netwerkinstellings te konfigureer.

### Webwerfstruktuur {#site-structure}

Kies hoe jou netwerkwebwerwe georganiseer sal word:

- **Subdomeine** (Aanbeveel) — Webwerwe kry hul eie subdomein, b.v. `site1.joudomein.com`
- **Subdirektories** — Webwerwe word as padname geskep, b.v. `joudomein.com/site1`

:::note
As jy subdomeine kies, sal jy **wildkaart DNS** en 'n **wildkaart SSL-sertifikaat** vir jou domein moet konfigureer. Die meeste beheerde WordPress-hostingproviders hanteer dit outomaties. Kyk na [Ultimate Multisite 101](./ultimate-multisite-101) vir 'n gedetailleerde vergelyking.
:::

### Netwerk Titel {#network-title}

Voer 'n naam in vir jou netwerk. Dit standaardiseer na jou huidige webwerftitel met "Network" bygevoeg. Jy kan dit later van die netwerkinstellings verander.

### Netwerk Admin E-pos {#network-admin-email}

Die e-posadres wat vir netwerkadministrasie-kennisgewings gebruik word. Dit standaardiseer na die huidige gebruiker se e-posadres.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Nadat jy die velde ingevul het, klik op **Continue** om voort te gaan.

## Stap 3: Instalering {#step-3-installation}

Klik op die **Install**-knoppie om te begin. Die wizard voer vyf outomatiese stappe in reeks uit, wat elkeen sy vordering in real-time toon:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Stap | Beskrywing |
|------|-------------|
| **Enable Multisite** | Voeg die `WP_ALLOW_MULTISITE` konstante by `wp-config.php` |
| **Create Network** | Skep die multisite-databasetable (`wp_site`, `wp_sitemeta`, `wp_blogs`, ens.) en vul dit met jou netwerkkonfigurasie |
| **Update Configuration** | Voeg die finale multisite-konstantes by `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, ens.) |
| **Fix Cookies** | Verseker dat die webwerf-URL korrek is in die netwerkmetadata om autentiseringprobleme na aktivering te voorkom |
| **Network Activate Plugin** | Netwerk-aktiveer Ultimate Multisite sodat dit oor die hele netwerk loop |

Elke stap toon een van hierdie statusse:

- **Pending** — Wag om verwerk
- **Installing...** — Loop tans
- **Success!** — Suksesvol voltooi
- **Error message** — Daar het 'n fout voorgekom (die boodskap sal die probleem beskryf)

Sodra al die stappe suksesvol voltooi is, sal jy 'n groen "Success!" status vir elke item sien:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Die wizard sal dan outomaties voortgaan na die voltooiingsskerm.

## Stap 4: Voltooi {#step-4-complete}

Sodra die instalering voltooi is, sal jy 'n suksesboodskap sien wat bevestig dat WordPress Multisite geaktiveer is.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Jy kan nou voortgaan met die Ultimate Multisite setup wizard om jou WaaS-platform te konfigureer (maatskappybesonderhede, standaardinhoud, betalingshekwerk, ens.).

:::note
Nadat die multisite-instalering voltooi is, sal jou browser deur die nuut-geaktiveerde netwerkadmin herlei. Jy kan dalk weer aanmeld moet, aangesien die autentiseringkoekies vir die multisite-omgewing opgedateer word.
:::

## Handmatige Opstel Terugval {#manual-setup-fallback}

As die wizard nie skryf kan na jou `wp-config.php` lêer nie (vanwege lêerverhasilings of serverbeperkings), sal dit die presiese kode wys wat jy handmatig moet byvoeg:

1. Die **wp-config.php konstantes** wat bo die `/* That's all, stop editing! */` lyn bygevoeg moet word
2. Die **.htaccess rewrite reëls** wat geskik is vir jou gekose webwerfstruktuur (subdomein of subdirektorie)

Nadat jy die handmatige veranderinge gemaak het, verfris die bladsy en die wizard sal detecteer dat multisite nou aktief is.

## Probleemoplossing {#troubleshooting}

### Die wizard sê wp-config.php is nie skryfbaar nie {#the-wizard-says-wp-configphp-is-not-writable}

Jou webwerfserverproses benodig skryfverhasilings na die `wp-config.php` lêer. Jy kan óf:

- Die lêerverhasilings tydelik verander na `644` of `666`
- Die handmatige opstel terugval-instruksies wat deur die wizard verskaf word, gebruik
- Jou hostingprovider vra vir hulp

### Webwerwe is nie toeganklik na opstel (subdomeine) {#sites-are-not-accessible-after-setup-subdomains}

As jy die subdomein-struktuur gekies het, moet jy **wildkaart DNS** vir jou domein konfigureer. Voeg 'n DNS-rekord by:

```
Type: A (of CNAME)
Host: *
Value: [jou server IP]
```

Kontroleer met jou hostingprovider as jy onseker is oor hoe om dit te konfigureer.

### Autentiseringprobleme na opstel {#authentication-issues-after-setup}

As jy uitgelog is of koekie-foute ervaar na die multisite-opstel:

1. Maak jou browserkoekies vir die webwerf skoon
2. Meld weer aan by `yourdomain.com/wp-login.php`
3. As die probleem aanhou, kyk of jou `wp-config.php` nie `COOKIE_DOMAIN` op `false` gestel het nie — dit is 'n bekende probleem op subdomein multisite-instalrasies

### 'n Stap het gefaal tydens instalering {#a-step-failed-during-installation}

As een van die instaleringsstappe 'n fout toon:

1. Noteer die foutboodskap wat vertoon word
2. Gaan terug na die konfigurasiestap en probeer weer
3. As die fout aanhou, kyk na jou server se PHP-foutlog vir meer besonderhede
4. Stappe wat reeds voltooi is, sal by daaropvolgende lae oorgeslaan word (die installer is idempotent)
