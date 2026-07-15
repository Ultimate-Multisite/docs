---
title: Marrëdhënia Multsite
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Wizard për Konfigurimin Multisite

Ultimate Multisite përfshin një wizard të integruar që automatikisht konverton një instalim standard WordPress në një rrjet WordPress Multisite. Kjo eliminojnë nevojën për të redaktuar manualisht `wp-config.php` ose ekzekutuar komanda në bazë të të dhënave.

:::tip
Nëse instalimi juar WordPress tashmë po funksionon si një rrjet Multisite, mund ta kaloni këtë hap pa u nevojë. Wizard-i shfaqet vetëm kur Multisite nuk është aktiv ende.
:::

## Kur Shfaqet Wizard-i? {#when-does-the-wizard-appear}

Kur aktivizoni Ultimate Multisite në një instalim standard (jo Multisite), plugin-i zbulon se Multisite nuk është i aktivizuar dhe ju drejton automatikisht te Wizard-i i Konfigurimit Multisite në vend të wizard-it standard.

A mund ta aksesoni direkt në **WP Admin > Ultimate Multisite > Multisite Setup**.

## Përparueshmëri {#prerequisites}

Para se të ekzekutoni wizard-in, sigurohuni që:

- Keni **akses administrator** në instalimin tuaj WordPress
- File `wp-config.php` i serverit tuaj është **shkrimtar** nga web serveri
- Keni një **backup të fundit** të skedarëve dhe bazës së të dhënave

:::warning
Wizard-i modifikon file-in tuaj `wp-config.php` dhe krijon tabela të reja në bazë të dhënash. Gjithmonë keni duhet të bëni një backup para se të vazhdoni.
:::

## Hapi 1: Mirëseja {#step-1-welcome}

Ekrandi i parë shpjegon se çfarë është WordPress Multisite dhe se çfarë do të bëjë wizard-i:

- Aktivizimi i veçorive Multisite në konfigurimin tuaj WordPress
- Krijimi i tabelave të nevojshme të bazës së rrjetit
- Shtimi i konstanteve të nevojshme multisite në `wp-config.php`
- Aktivizimi i Ultimate Multisite në rrjet gjatë rrjetit

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

Klikoni **Continue** për të vazhduar.

## Hapi 2: Konfigurimi i Rrjetit {#step-2-network-configuration}

Ky hap ju kërkon të konfigurosh cilësimet tuaja të rrjetit.

### Struktura e Sitetve {#site-structure}

Zgjidhni si do të organizohen sitet tuaj në rrjet:

- **Sub-domena** (Rekomandohet) — Sitet marrin sub-domenë të tyre, p.sh. `site1.yourdomain.com`
- **Sub-direktorit** — Sitet krijohen si rrugë, p.sh. `yourdomain.com/site1`

:::note
Nëse zgjidhni sub-domena, do të keni nevojë të konfigurojëni **wildcard DNS** dhe një **certifikat wildcard SSL** për domenit tuaj. Shumica e hostave të menjuara WordPress bëjnë këtë automatikisht. Shijeni [Ultimate Multisite 101](./ultimate-multisite-101) për një krahasim më të detajuar.
:::

### Titulli i Rrjetit (Network Title) {#network-title}

Vendosni një emër për rrjetin tuaj. Ky varet me titullin e aktualit të faqes tuaj dhe i shtojnë "Network". Mund ta ndryshoni më vonë nga cilësimet e rrjetit.

### Emaili i Administratorit të Rrjetit (Network Admin Email) {#network-admin-email}

Adresa e emailit që përdoret për njoftime administrimi të rrjetit. Ky varet me adresën e emailit të përdoruesit aktual.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Pas plotësimit i fushave, klikoni **Continue** për të vazhduar.

## Hapi 3: Instalimi (Installation) {#step-3-installation}

Klikoni butonin **Install** për të nisur. Wizard-i kryen pesë hapa automatike në një rreshtim, duke treguar progresin e secilit prej tyre në kohë reale:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Hapi | Përshkrimi |
|------|-------------|
| **Aktivizoni Multisite** | Shtoni konstanten `WP_ALLOW_MULTISITE` në `wp-config.php` |
| **Krijoni Rrjetin (Network)** | Krijoni tabelat e bazës së të gjitha sitëve (`wp_site`, `wp_sitemeta`, `wp_blogs`, etj.) dhe mbushini ato me konfigurimin e rrjetit tuaj |
| **Përditësoni Konfigurimin** | Shtoni konstantit final të multisite në `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, etj.) |
| **Rregulloni Cookie-t** | Sigurohuni që URL i sitit të jetë i saktë në metadata të rrjetit për të parandaluar probleme autentikimi pas aktivizimit |
| **Aktivizoni Pluginin e Rrjetit** | Aktivizoni Ultimate Multisite në nivel i rrjetit që të funksionojë gjithë rrjetit |

Secili hap tregon një nga këto statause:

- **Pending (Nën proces)** — Po pres për të përpunuar
- **Installing... (Po instalohet...)** — Po ekzekutohet aktualisht
- **Success! (Sukses!)** — Përfundimi i suksesshëm
- **Error message (Mesazhi i gabimit)** — Një gabim është ndodhur (mesazhi do të përshkruajë problemin)

Pasi të gjitha hapat përfundojnë me sukses, do të shihni një status të gjelbër "Success!" për çdo element:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Marrëpas kësaj, wizardi do të vazhdojë automatikisht drejt ekranit të përfundimit.

## Hapi 4: Përfundimi (Complete) {#step-4-complete}

Pasi instalimi të jetë i përfunduar, do të shihni një mesazh sukses që konfirmon se WordPress Multisite është aktivizuar.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Tani mund të vazhdoni me wizardin e Ultimate Multisite për të konfiguruar platformën tuaj WaaS (detajet e kompanisë, përmbajtja fillestare, gateway-të e pagesave, etj.).

:::note
Pas instalimi i multisite të përfundojë, shfletuesi juaj do të redihjojë nëpër administratorin e rrjetit që është aktivuar. Mund të keni nevojë të hyeni sërish në logarimi sepse kokat autentikimi (authentication cookies) janë aktualizuar për mjedisin multisite.
:::

## Rezervues Manual i Konfigurimit {#manual-setup-fallback}

Nëse wizard-i nuk mund të shkruajë në skedarin tuaj `wp-config.php` (për shkak të lejeve të skedarit ose kufizimeve të serverit), ai do t'ju tregojë kodin e saktë që duhet të shtoni manualisht:

1. **Konstantat e wp-config.php** që duhet të shtoni mbi linjën `/* Kjo është gjithçka, ndalni redaktimin! */`
2. **Rregjet e rewrite .htaccess** të përshtatura për strukturën e faqes që keni zgjedhur (subdomain ose subdirectory)

Pas bërjes së këtyre ndryshimeve manuale, refreshoni faqen dhe wizard-i do të zbulojë se multisite është tashmë aktiv.

## Zgjidhja e Problemeve (Troubleshooting) {#troubleshooting}

### Wizard-i thotë se wp-config.php nuk mund të shkruhet (is not writable) {#the-wizard-says-wp-configphp-is-not-writable}

Procesi i serverit tuaj web duhet të ketë leje për shkrimin në skedarin `wp-config.php`. Ju mund të bëni një nga këto:

- Ndryshoni përkohshimisht lejet e skedarit në `644` ose `666`
- Përdorni udhëzimet e rezervuesit manual të konfigurimit të ofruara nga wizard-i
- Kërkoni ndihmë nga provizuesi juaj i hostingut

### Faqet nuk janë të aksesueshme pas instalimit (subdomains) {#sites-are-not-accessible-after-setup-subdomains}

Nëse keni zgjedhur strukturën e subdomainit, duhet të konfiguroheni **wildcard DNS** për domenit tuaj. Shtoni një regjistrim DNS:

```
Type: A (ose CNAME)
Host: *
Value: [IP adresa e serverit tuaj]
```

Kontrolloni me provizuesin tuaj të hostingut nëse nuk jeni të sigurt se si duhet të konfiguroheni këtë.

### Problemet me autentikimin pas instalimit {#authentication-issues-after-setup}

Nëse jeni jashtë logarimit ose keni probleme me kokat (cookies) pas konfigurimit të multisite:

1. Fshini kokat e shfletuesit për faqen
2. Hyjeni sërish në logarim te `yourdomain.com/wp-login.php`
3. Nëse problemi vazhdon, kontrolloni që skedari juaj `wp-config.php` nuk ka të vendosur `COOKIE_DOMAIN` në `false` — ky është një problem i njohur në instalimet multisite me subdomain.

### Një hap dështoi gjatë instalimit {#a-step-failed-during-installation}

Nëse një nga hapat e instalimit tregon një gabim:

1. Vëreni mesazhin e gabimit të shfaqur.
2. Kthehu te hapi i konfigurimit dhe provoni përsëri.
3. Nëse gabimi vazhdon, kontrolloni logun e gabimeve të PHP në serverin tuaj për më shumë detaje.
4. Hapat që janë tashmë përfunduar do të kalojnë derisa herëve të mëvonshme (instaluesi është idempont).
