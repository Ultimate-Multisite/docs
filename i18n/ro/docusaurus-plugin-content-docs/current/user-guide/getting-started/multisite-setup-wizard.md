---
title: Asistent de Configurare Multisite
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Asistentul de configurare Multisite

Ultimate Multisite include un asistent integrat care transformă automat o instalare WordPress standard într-o rețea WordPress Multisite. Astfel, nu mai trebuie să editezi manual fișierul `wp-config.php` sau să rulezi comenzi în baza de date.

:::tip
Dacă instalarea ta WordPress funcționează deja ca rețea Multisite, poți sări peste acest pas. Asistentul apare doar când Multisite nu este încă activat.
:::

## Când apare asistentul?

Când activezi Ultimate Multisite pe o instalare WordPress standard (non-Multisite), pluginul detectează că Multisite nu este activat și te redirecționează automat către Asistentul de configurare Multisite în loc de asistentul obișnuit de configurare.

Poți să-l accesezi și direct din **WP Admin > Ultimate Multisite > Multisite Setup**.

## Cerințe preliminare

Înainte de a rula asistentul, asigură-te că:

- Ai **acces de administrator** la instalarea WordPress
- Fișierul `wp-config.php` de pe server este **editabil** de către serverul web
- Ai o **copie de rezervă recentă** a fișierelor și bazei de date

:::warning
Asistentul modifică fișierul `wp-config.php` și creează tabele noi în baza de date. Creează întotdeauna o copie de rezervă înainte de a continua.
:::

## Pasul 1: Bun venit

Primul ecran explică ce este WordPress Multisite și ce va face asistentul:

- Activează funcția Multisite în configurația WordPress
- Creează tabelele necesare în baza de date pentru rețea
- Adaugă constantele multisite necesare în `wp-config.php`
- Activează Ultimate Multisite la nivel de rețea

![Asistentul de configurare Multisite - Pasul de bun venit](/img/installation/multisite-wizard/wizard-welcome.png)

Apasă **Continue** pentru a continua.

## Pasul 2: Configurarea rețelei

În acest pas configurezi setările rețelei.

### Structura site-urilor

Alege cum vor fi organizate site-urile din rețea:

- **Subdomenii** (Recomandat) — Fiecare site primește propriul subdomeniu, de exemplu `site1.domeniultau.com`
- **Subdirectoare** — Site-urile sunt create ca căi, de exemplu `domeniultau.com/site1`

:::note
Dacă alegi subdomenii, va trebui să configurezi **DNS wildcard** și un **certificat SSL wildcard** pentru domeniul tău. Majoritatea gazdelor WordPress administrate se ocupă de asta automat. Consultă [Ultimate Multisite 101](./ultimate-multisite-101) pentru o comparație detaliată.
:::

### Titlul rețelei

Introdu un nume pentru rețeaua ta. Implicit, acesta este titlul site-ului curent cu „Network" adăugat la final. Poți schimba asta ulterior din setările rețelei.

### Emailul administratorului de rețea

Adresa de email folosită pentru notificările de administrare a rețelei. Implicit, aceasta este adresa de email a utilizatorului curent.

![Asistentul de configurare Multisite - Configurarea rețelei](/img/installation/multisite-wizard/wizard-network-configuration.png)

După ce completezi câmpurile, apasă **Continue** pentru a continua.

## Pasul 3: Instalarea

Apasă butonul **Install** pentru a începe. Asistentul execută cinci pași automatizați în ordine, afișând progresul fiecăruia în timp real:

![Asistentul de configurare Multisite - Instalare în așteptare](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Pas | Descriere |
|-----|-----------|
| **Enable Multisite** | Adaugă constanta `WP_ALLOW_MULTISITE` în `wp-config.php` |
| **Create Network** | Creează tabelele multisite în baza de date (`wp_site`, `wp_sitemeta`, `wp_blogs`, etc.) și le populează cu configurația rețelei tale |
| **Update Configuration** | Adaugă constantele multisite finale în `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, etc.) |
| **Fix Cookies** | Se asigură că URL-ul site-ului este corect în metadatele rețelei pentru a preveni probleme de autentificare după activare |
| **Network Activate Plugin** | Activează Ultimate Multisite la nivel de rețea pentru a funcționa în întreaga rețea |

Fiecare pas afișează unul dintre aceste statusuri:

- **Pending** — În așteptare pentru procesare
- **Installing...** — În curs de rulare
- **Success!** — Finalizat cu succes
- **Mesaj de eroare** — A apărut o eroare (mesajul va descrie problema)

După ce toți pașii se finalizează cu succes, vei vedea statusul verde „Success!" pentru fiecare element:

![Asistentul de configurare Multisite - Instalare completă](/img/installation/multisite-wizard/wizard-installation-complete.png)

Asistentul va trece apoi automat la ecranul de finalizare.

## Pasul 4: Finalizare

După ce instalarea este completă, vei vedea un mesaj de succes care confirmă că WordPress Multisite a fost activat.

![Asistentul de configurare Multisite - Configurare finalizată](/img/installation/multisite-wizard/wizard-complete.png)

Acum poți continua cu asistentul de configurare Ultimate Multisite pentru a-ți configura platforma WaaS (detalii despre companie, conținut implicit, gateway-uri de plată, etc.).

:::note
După ce instalarea multisite se finalizează, browserul te va redirecționa prin panoul de administrare al rețelei nou activate. Este posibil să fie nevoie să te autentifici din nou, deoarece cookie-urile de autentificare sunt actualizate pentru mediul multisite.
:::

## Configurare manuală alternativă

Dacă asistentul nu poate scrie în fișierul `wp-config.php` (din cauza permisiunilor fișierului sau restricțiilor serverului), va afișa codul exact pe care trebuie să-l adaugi manual:

1. **Constantele wp-config.php** care trebuie adăugate deasupra liniei `/* That's all, stop editing! */`
2. **Regulile de rescriere .htaccess** corespunzătoare structurii de site-uri alese (subdomeniu sau subdirector)

După ce faci modificările manuale, reîmprospătează pagina și asistentul va detecta că multisite este acum activ.

## Depanare

### Asistentul spune că wp-config.php nu poate fi scris

Procesul serverului web are nevoie de permisiune de scriere pentru fișierul `wp-config.php`. Poți fie:

- Să schimbi temporar permisiunile fișierului la `644` sau `666`
- Să folosești instrucțiunile de configurare manuală alternativă furnizate de asistent
- Să ceri asistență de la furnizorul tău de hosting

### Site-urile nu sunt accesibile după configurare (subdomenii)

Dacă ai ales structura cu subdomenii, trebuie să configurezi **DNS wildcard** pentru domeniul tău. Adaugă o înregistrare DNS:

```
Type: A (or CNAME)
Host: *
Value: [IP-ul serverului tău]
```

Verifică la furnizorul tău de hosting dacă nu ești sigur cum să configurezi asta.

### Probleme de autentificare după configurare

Dacă ești deconectat sau întâmpini erori de cookie-uri după configurarea multisite:

1. Șterge cookie-urile browserului pentru site
2. Autentifică-te din nou la `domeniultau.com/wp-login.php`
3. Dacă problema persistă, verifică dacă fișierul `wp-config.php` nu are `COOKIE_DOMAIN` setat la `false` — aceasta este o problemă cunoscută la instalările multisite cu subdomenii

### Un pas a eșuat în timpul instalării

Dacă unul dintre pașii de instalare afișează o eroare:

1. Notează mesajul de eroare afișat
2. Întoarce-te la pasul de configurare și încearcă din nou
3. Dacă eroarea persistă, verifică jurnalul de erori PHP al serverului pentru mai multe detalii
4. Pașii care s-au finalizat deja vor fi omisi la rulările ulterioare (instalatorul este idempotent)
