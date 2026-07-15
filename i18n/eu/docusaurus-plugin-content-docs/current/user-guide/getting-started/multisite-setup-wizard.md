---
title: Multisite Setup Wizard
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Multisite Konfigurazioa Auritzapenari (Wizard)

Ultimate Multisite-ek arau-dian beste WordPress instalazio bat automatikoki konvertatzen du WordPress Multisite network batean. Horrek `wp-config.php` edo database komandament manuel editeatzea edo jarraitzea beharrezkoa ez du.

:::tip
WordPress instalazioa aldatuta dagoen Multisite network batean, horiko etapariak guztiz ustez daiteke. Arauzapenaren (wizard) irudiak Multisite ez dagoenean gaurkatu egiten dira.
:::

## Hau Eguna Aurreratzen da? {#when-does-the-wizard-appear}

Standard (ez-Multisite) WordPress instalazio bat da Ultimate Multisite aktibatu duenean, plugin-ek Multisite ez dagoela jakusten du eta normala dagoen setup wizard-aren lekuan aurkitu hiru egiten du Multisite Setup Wizard-era.

Aurreratuta **WP Admin > Ultimate Multisite > Multisite Setup** mailari direktu zuzenean ere jartu dituzte.

## Aurreratutako Konditiotak (Prerequisites) {#prerequisites}

Wizarda jarraitu aurretik, daudenak seguruatu:

- WordPress instalazioaren **administrator aksesua** duzu
- Server-ren `wp-config.php` mailari web server-ek **eskoldeko** (writable) izan behar duzu
- File eta database-ren **dundu backupa** duzu

:::warning
Wizarda daudenak `wp-config.php` mailari aldatzen ditu eta database-aren lekuak (tables) zuregatik sortzen du. Aurrera jarraitu aurretik, han sempre backup bat egin duzu.
:::

## Etapa 1: Egun on {#step-1-welcome}

Lehen ekraneak zer da WordPress Multisite eta wizarda zein gauza egiten duen esaltzen du:

- Zure WordPress konfigurazioan Multisite funtazioa aktibatu
- Necesitarteko database tables (lekuak) sortzea
- `wp-config.php` mailari beharrezko multisite constants (constantes) gehitu
- Network-ek Ultimate Multisite aktibatu

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

Aurrera jarraitu eta **Continue** klikatu.

## Etapa 2: Konfigurazioa Network-aren (Network Configuration) {#step-2-network-configuration}

Hau etapak zure network-aren konfigurazioa eskaintzen du.

### Site Structure (Estructura Sailak) {#site-structure}

Zergatikon zerbitzietara on gehitzeko modu aipatzi duzu:

- **Sub-domeniak** (Aurrekontzatu) — Zerbitzietzak jakin bat subdomain izango dute, adibidez `site1.yourdomain.com`
- **Sub-direktoriak** — Zerbitzietzak bideak gisa sortzen dira, adibidez `yourdomain.com/site1`

:::note
Sub-domeniak aukeratu duzu, domain-ekarreko **wildcard DNS** eta **wildcard SSL certificate** konfiguratzea behar duzu. Nagusi gestionatutako WordPress host-ek hori automatikoki jartzen dute. Erabiltzeko erantzun bat da [Ultimate Multisite 101](./ultimate-multisite-101) testuaren bitartean.
:::

### Zerbitzietaren Titulu (Network Title) {#network-title}

Zerbitzietu bat nazioa emateko irudiak ematen duzu. Horrek oraindian dagoen site tituluari "Network" eta apenderitzu ditu. Horrek zerbitzietaren konfiguratzen daiteke geroago.

### Zerbitzietaren Administrazio Emaila (Network Admin Email) {#network-admin-email}

Zerbitzietaren administrazio notifikazioak jasotzeko erabilgarria emaila. Horrek oraindian dagoen erabiltzailearen emaila da.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Erabiltzen dituzik, aurrera egiteko **Continue** (Aurrera egin) testuaren klik egin.

## Irrenditua 3: Instalazioa (Step 3: Installation) {#step-3-installation}

Zerbitzietatu eta hasi eta. Wizard-ek automatikoki irrenditutako irrendituen bitartean, hiru irrenditua irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean, irrendituen bitartean,

| Irrendi | Deskribapena |
|---|---|
| **Multisite Aktiboa** | `wp-config.php`-ean `WP_ALLOW_MULTISITE` konstanta hasu ez da. |
| **Networka Jartu** | Multisite dataguruenak (`wp_site`, `wp_sitemeta`, `wp_blogs`, eta besteak) jartu eta network konfiguratura daingoakarekin plibiltzen ditu. |
| **Konfigurazioa Updatea** | `wp-config.php`-ean egindako konstanta nagusi hasi ez da (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, eta besteak). |
| **Cookies Aurreratzea** | Aktiboa gabe autentifikazio problema ez dute, network metadata-ean site URL-a jartu behar da. |
| **Network Plugin Aktiboa** | Ultimate Multisite-a network-aktibo egiten da, nahiz eta hori arlo guztia ireki du. |

Besteak status bat erakusten du:

- **Pending** — Prozesatu behar da.
- **Installing...** — Aktualenean dago.
- **Success!** — Ondo eginduta da.
- **Error message** — Erroren bat izan da (testuaren espezifikazioa hasterako problemaa adierazten du).

Gaur duela, guztiz ondo eginduta jakinarazteko verde "Success!" status bat erakusten du:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Gero, wizard-ek automatikoki amaituko pertsonaera (completion screen)-era iradokitzen da.

## Irrendi 4: Amaitu {#step-4-complete}

Instalazioa amaitu gabe, WordPress Multisite hasi ez duela jakinarazteko status bat erakusten du.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Aurrerazten ditzake Ultimate Multisite setup wizard-ean eta WaaS platforma-n konfiguratzeko (kompañiaren datuak, kontentua defaulta, koagmentu-gainak, eta besteak).

:::note
Multisite instalazioa amaitu ondoren, browser-ek irraldatu dauden network admin berri erabilera bidez. Aurrez lehenen indizazioak (authentication cookies) multisite erabilera dauden artean update dira, gertuzketu behar izan dezake.
:::

## Manual Setup Fallback (Manual konponbidea) {#manual-setup-fallback}

Ez dutra ez du `wp-config.php` file-era eskuratzeko (file permissions edo server restrikzio batdu ondorioz), wizard-ek handi eta handi codea emateko da:

1. **wp-config.php constantak** zehatzeko, `/* That's all, stop editing! */` lina gaineko.
2. **.htaccess rewrite rules** irudien erabilera (subdomain edo subdirectory) esaitzen duen site structure-ra parehasatu.

Manual hasierak egin ondoren, lapurua refreshatu eta wizard-ek multisitea aktibo dauden jakotsi du.

## Troubleshooting (Problema ezberdinetzat) {#troubleshooting}

### Wizard-ek `wp-config.php` ez dago eskuratzeko duen esaten {#the-wizard-says-wp-configphp-is-not-writable}

Web server process-ek `wp-config.php` file-era eskuratzeko izin behar du. Hau egin dezakezu:

- File permissions-ak mugikorra (temporarily) `644` edo `666`-r bitartean aldatu.
- Wizard-ek emateko manual setup fallback instruktioak erabilu.
- Hosting provider-rek laguntza gautu.

### Siteak ez dauden erabilera ondoren (subdomains) {#sites-are-not-accessible-after-setup-subdomains}

Subdomain structurea aukeratu dutenean, domain-eko **wildcard DNS** konfiguratzea behar duzu. DNS record bat gehitu:

```
Type: A (edo CNAME)
Host: *
Value: [server IP-ak]
```

Konfigurazioa ez jakusten dugu beharko luke hosting provider-rekin.

### Setup ondoren autentikazio problemaak {#authentication-issues-after-setup}

Multisite setup-aren ondoren, erabilera deshabilitatuta dago edo cookie errorrak eragiten duzu:

1. Browser-ren site-ko cookies-ek borratu (clear)
2. `yourdomain.com/wp-login.php` aukerapean indizatu (log in)
3. Problema jarraitzen du, `wp-config.php`-re `COOKIE_DOMAIN` ez dago "false" eratu duen jakotsi — multisite subdomain instalazioetan ezagututako problema hori da.

### Instalazioaren ondorioz leku bat ez hasi (A step failed during installation) {#a-step-failed-during-installation}

Ez dago instalazio urrin bat erantzuna ematen:

1. Erantzunaren testuak eskatzen duzu.
2. Konfigurazio urrine itzalezi eta jartuzinago coba dezakezu.
3. Erantzuna jarraitzen du, server-ren PHP error log-a (erantzunaren errazi) ikustu behar duzu faseko informazio gehiago hartzeko.
4. Beste urrinak joan duten aurrera egin ondoren, iradokizune horiek ez daitezke jartuzinagoko runetan berri egiten (instalador-rak idempotenta da).
