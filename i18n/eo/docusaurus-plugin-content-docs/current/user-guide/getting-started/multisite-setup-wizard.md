---
title: Multisito Montiligo Wizard
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Multisite Setup Wizard

Ultimate Multisite inkluzas un wizard, kiu konverte automatice standard WordPress instalacion en rekuperanto de WordPress Multisite. Tio eliminas la neceson de editi manuele `wp-config.php` aŭ fari komandoj por baza.

:::tip
Se via WordPress instalacio estas już funkcias kiel Multisite rekuperanto, vi povas pasigi ĉi ti paŝon komplete. La wizard nur aperas, kiam Multisite ne estas aktiva.
:::

## Kiam Aperas la Wizard? {#when-does-the-wizard-appear}

Kiam vi aktivas Ultimate Multisite sur standarda (ne-Multisite) WordPress instalacio, la plugin detektas, ke Multisite ne estas aktiva, kaj aŭtomate redirektas vin al la Multisite Setup Wizard en sto de la regulara setup wizard.

Vi ankaŭ povas akcesi ĝin direkte per **WP Admin > Ultimate Multisite > Multisite Setup**.

## Prarekoj {#prerequisites}

Mankio ĉi tijn prarekojn antaŭ ol fari la wizard:

- Vi havas **administratoran alparencon** al via WordPress instalacio
- La filiro `wp-config.php` de via server estas **skribbla** per la webservero
- Vi havas **fresan bazon** de viaj filiro kaj baza

:::warning
La wizard modifas via `wp-config.php` filiron kaj kreas novajn bazdatobazon. Kreu ĉiam bazon antaŭ ol pliigi.
:::

## Paŝto 1: Bienvenon {#step-1-welcome}

La unua skrino klarigas, kion estas WordPress Multisite kaj kion la wizard faros:

- Aktivi la Multisite funkcion en via WordPress konfiguracio
- Krei la necesajn bazdatobazrangojn por rekuperanto
- Apliizi la necesajn multisite konstantojn al `wp-config.php`
- Aktivado de Ultimate Multisite sur la rekuperanto

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

Klaknu **Kontinu** por pliigi.

## Paŝto 2: Reperanto de la Rektado (Network Configuration) {#step-2-network-configuration}

Tio paŝo perfaras vin konfigurigi via rekuperanto ŝancojn.

### Site Strukturo {#site-structure}

Kiesan, kiel vi organizi la viajportoj de sian reto?

- **Subdomenoj** (Rekomandita) — La viajportoj akrevi sian propran subdomena, ek exemplo: `site1.yourdomain.com`
- **Subdirektorijoj** — Viajportoj estas kreitaj kiel jaroj, ek ekzemplo: `yourdomain.com/site1`

:::note
Se vi elektas subdomenojn, vi bezonas konfiguri **wildcard DNS** kaj **wildcard SSL-sertifikadon** por viaja domeno. La plej multaj administritaj WordPress-hostoj faran tion aŭtomate. Vidu [Ultimate Multisite 101](./ultimate-multisite-101) por detala komparo.
:::

### Rete Titolo {#network-title}

Inscriach nomon por viaja reto. Tio defaultas al via nunaj site titolo kun "Network" alfiita. Vi povas ŝanĝi tion pli mal tande el la reto-konfiguradoj.

### Rete Administrajo E-mailo {#network-admin-email}

La e-maila adresoj uzata por notoj de administriĝo de la reto. Tio defaultas al la nunaj uzanto's e-maila adresoj.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Post plenumado de la kampoj, kliku **Kontinu** por procedi.

## Paŝo 3: Instigo {#step-3-installation}

Kliku la butonon **Instali** por komenci. La wizard faras kvin aŭtomatajn paŝojn en sekvenco, ĉiu montrante sian progreson en reala tempo:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Paŝto | Deskribcio |
|---|---|
| **Aktive Multisite** | Adoz la konstanten `WP_ALLOW_MULTISITE` al `wp-config.php` |
| **Kreizo Rete** | Kreas la tabulojn de bazadatan por multisite (`wp_site`, `wp_sitemeta`, `wp_blogs`, etc.) kaj pleni ilin per vian retoj konfiguracion |
| **Aktualizu Konfiguracion** | Adoz la finajn multisite konstanto al `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, etc.) |
| **Rekonstrui Cookiejn** | Seruras, ke la URL de la sitio estas ĝusta en la metadaten de la retoj por preveni autentifikajn problemoj post aktivaĵo |
| **Aktive Plugin Reto** | Aktive la Ultimate Multisite por rete-aktivi (network-activate) por ĝi funkcii sur tuta la retoj |

Chak step prezentas unu el ĉi ti statusoj:

- **Pending** — Awaiti sei procesiĝi
- **Installing...** — Ĝene funkcias
- **Success!** — Kompleta sukcese
- **Error message** — Okresita eraro okazis (la mesaĝo describus la problemin)

Kiam ĉiuj stepoj kompletas sukcese, vi vidos verde statuson "Success!" por ĉiu el ili:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Tamen la wizard aŭtomate progresos al la finita skritu.

## Paŝto 4: Kompleta {#step-4-complete}

Kiam instalado kompletas, vi vidos sukcesan mesaĝon konfirmanta, ke WordPress Multisite estis aktiva.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Nun vi povas kontakti la Ultimate Multisite setup wizard por konfigurigi vian WaaS platformon (kompania detaloj, defaulta enviso, pagamentaj portoj, etc.).

:::note
Ansek po dat la instalado de multisite, viajistio de via per la nova administradora de reto. Puŝi necesas logi pli fois ĉar la cookie-k de autentifo estas aktualigitaj por la multisite aĉeto.
:::

## Alternativa por Manua Montado (Manual Setup Fallback) {#manual-setup-fallback}

Se la wizard ne povas skribi en via `wp-config.php` filon (profi grun la permesoj de la filoj aŭ restrikoj de la servero), ĝi prezentos la eksakton kodon, kiun vi bezonas aĉi manue:

1. La **wp-config.php konstantaĵoj** kiuj bezonas esti aĉitaj supren la linio `/* That's all, stop editing! */`
2. La **.htaccess rewritaj reguloj** adekva por via elektita strukturo de sita (subdomajno aŭ subdirektorio)

Post fari ti manua ŝanĝojn, refreski la paĝon kaj la wizard detektos, ke multisite nun estas aktiva.

## Problemo-solviĝo (Troubleshooting) {#troubleshooting}

### La wizard diras, ke wp-config.php ne estas skribbla (not writable) {#the-wizard-says-wp-configphp-is-not-writable}

Via webserver proceso bezonas skribi permesojn al la filon `wp-config.php`. Vi povas fari unu el ĉi ti:

- Temporare ŝanĝi la permesojn de la filoj al `644` aŭ `666`
- Uzi la instruojn de la alternativa por manua montado, kiuj estas providencitaj de la wizard
- Perfi via alojistanto por helpo

### Sitoj ne estas aksesaj post montado (subdomajno) {#sites-are-not-accessible-after-setup-subdomains}

Se vi elektis la strukturon de subdomajno, vi bezonas konfigurigi **wildcard DNS** por via domeno. Apliigi registron DNS:

```
Type: A (aŭ CNAME)
Host: *
Value: [via server IP]
```

Kontaktiari via alojistanton se vi ne estas certa kiel konfigurigi tion.

### Problemoj de autentifo post montado {#authentication-issues-after-setup}

Se vi estas logita el aŭ eksperenci rierrojn pri cookie-oj post la multisite montado:

1. Limigi via browser cookie-ojn por tiu sita
2. Logi pli fois al `yourdomain.com/wp-login.php`
3. Se la problemo persistas, kontroli ke via `wp-config.php` ne havas `COOKIE_DOMAIN` setita al `false` — tio estas konata problemo pri multisite montado per subdomajno.

### Un step ne funkcias dum instalado {#a-step-failed-during-installation}

Se unu el instalado paŝoj donas eruron:

1. Notu la mesaĝo de eror aperita.
2. Revenu al la paŝto de konfigurita kaj provu fali priankon.
3. Se la eroro persistas, kontrolu la PHP-erorlogon de via server por pli da detaloj.
4. Paŝoj, kiuj już komplitis, estas saltitaj sur sekvaj provoj (la instalisto estas idempota).
