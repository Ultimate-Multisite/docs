---
title: Multisite seadistusjuhend
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Multisite Seadistusju

Ultimate Multisite sisaldab sissejuhatavast tööriista, mis automaatselt muudab tavalise WordPress-installatsiooni WordPress Multisite võrku. See elimina vajaduse manuaalselt muuta `wp-config.php` faili või käivitada database käske.

:::tip
Kui teie WordPress installatsioon on juba töötab Multisite võrkuna, saate seda samm ületada täiesti. Sisaldaja ilmub ainult siis, kui Multisite ei ole veel aktiveeritud.
:::

## Kui sisaldaja ilmub? {#when-does-the-wizard-appear}

Kui aktiveerite Ultimate Multisite tavalise (ei-Multisite) WordPress installatsioonil, tuvastab plugi, et Multisite ei ole aktiivne, ja suunab teid automaatselt Multisite seadistusjuhendile instead of tavalise seadistusjuhendiga.

Saate seda ka päästa otseselt **WP Admin > Ultimate Multisite > Multisite Setup** meeldivale.

## Esimendid {#prerequisites}

Sisaldaja käivitamise enne, et alustada, veenduge, et:

- Teie WordPress installatsioonil on **administratori akses**
- Serveri `wp-config.php` fail on webserverile **kirjeldav** (writable)
- Teie failide ja database **laenus uus kopija** on olemas

:::warning
Sisaldaja muudab teie `wp-config.php` faili ja luuakse uusi database tabelid. Luue alati kopija enne jätkamist.
:::

## Samm 1: tervitus {#step-1-welcome}

Esimene ekraan selgitab, mida WordPress Multisite on ja mida sisaldaja teeb:

- Aktiveerige Multisite funktsioon teie WordPress konfiguratsioonis
- Luue vajalikud võrku database tabelid
- Lisage vajalikud multisite konstants `wp-config.php` faili
- Aktiveerige Ultimate Multisite võrkuse ümber võrku

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

Klõpsake **Jätka** edasi minema.

## Samm 2: võrku konfiguratsioon {#step-2-network-configuration}

See samm küsib teilt teie võrkuse seadistuste konfiguratsiooni.

### Situsüsteemi struktuur {#site-structure}

Valiige, kuidas teie võrku veebileid organiseerida:

- **Subdomäinid** ( soovitatav) — Veebileil on oma subdomääin, näiteks `site1.yourdomain.com`
- **Subdirektoriumid** — Veebileid luuakse teelise nimega, näiteks `yourdomain.com/site1`

:::note
Kui valite subdomäine, peate konfigurates **wildcard DNS** ja **wildcard SSL sertifikaadi** oma domeenile. Enamik haldistatud WordPress hoastajad teevad seda automaatselt. Vaadake [Ultimate Multisite 101](./ultimate-multisite-101) üksikasjalikku võrdlust.
:::

### Võrku nimi {#network-title}

Sisestage nimi oma võrkule. See poolt on teie praeguse veebilei pealkiri ja sellele lisatud "Network". Seda saab hiljem muuta võrkuse seadistustest.

### Võrkuse administraatori e-post {#network-admin-email}
E-posti aadress, mida kasutatakse võrkuse administreerimise teavetamiseks. See poolt on praeguse kasutaja e-posti aadress.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Täitlikud pärast väljeldamist klõpsake **Jätka** protsesside edasi võtamiseks.

## Samuti 3: Installeerimine {#step-3-installation}

Klõpsake **Installeeri** nupul algamiseks. Wizard teeb viis automaatselt sammuga, näides igaühtlust reaaliajal:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Etapp | Kirjeldus |
|------|-------------|
| **Multisite aktiveerimine** | Lisatakse `WP_ALLOW_MULTISITE` konstants WordPress konfiguratsioonifaili `wp-config.php`-le |
| **Verkuse loomine** | Loodakse multisite database tabelid (`wp_site`, `wp_sitemeta`, `wp_blogs` jne.) ja täidetakse need oma võrku konfiguratsiooniga |
| **Konfiguratsiooni uuendamine** | Lisatakse lopulised multisite konstants `wp-config.php`-le (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE` jne.) |
| **Cookie-probleemide lahendamine** | Tagatakse, et veebilehe URL on võrku metadandis korrekts, et vältida autentimiprobleeme aktiveerimise pärast |
| **Võrku aktiveerimise plugin** | Aktiveeritakse Ultimate Multisite võrkuse tasemel, et see töötaks kogu võrku üle |

Kuid iga samm näitab üht kohta järgmistest staatustest:

- **Ootamisel** — Valmis töötamiseks
- **Installeerimine...** — Järgivalda käimas
- **Valmine!** — Edualt lõpetatud
- **Väbris** — Värve on juhtunud (viide kirjeldab probleem)

Kõik sammud lõpetatakse edukalt, näete iga kohta rohelik "Valmine!" staatust:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Seejärel läheb wizard automaatselt lõpulejuhtmise ekraani poole.

## Samm 4: Lõpetamine {#step-4-complete}

Lõpetamise pärast instalatsioon on lõpetatud, näete edu sõnumi, mis kinnitab WordPress Multisite aktiveerimist.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Saate nüüd jätkata Ultimate Multisite seadistamise wizardiga ja konfigurida oma WaaS platvormi (ettevõtte andmed, pooltud sisu, maksukontrollid jne.).

:::note
Multisite installatsioon pärast lõppu juhendab teie brauseri uuest aktiveeritud võrku administraatorile. Võib olla vajalik uuesti logiimina, kuna autentimikügid on ümberpaati multisite keskkonna jaoks.
:::

## Manuaalne seadistus alternatiivne lahendus (Fallback) {#manual-setup-fallback}

Kui juhend ei saa kirjutada oma `wp-config.php` failisse (failide luba või serveri piirangute tõttu), näitab see täpselt kood, mida peab anda manuaalselt:

1. **wp-config.php konstantsid**, mida tuleb lisada `/* See on kõik, lõpetage redigeerimine! */` linja üle
2. **.htaccess uudelleenkirjutamise reeglid** soodustatud teie valitud veebilehva struktuurile (subdomaan või allkategiend)

Manuaalsete muudatuside tegemise pärast paigutage lehekülje ja juhend tuvastab, et multisite on nüüd aktiveeritud.

## Probleemide lahendamine {#troubleshooting}

### Juhend ütleb, et wp-config.php ei ole kirjutav (writable) {#the-wizard-says-wp-configphp-is-not-writable}

Teie veebiserver protsess peab kirjutamise lubandega `wp-config.php` failile. Saate teha üks neist asja:

- Muuta failide luba hetkiliselt `644`-le või `666`-le
- Kasutada juhendi alternatiivset lahendust, mida juhend pakub
- Küsimus hoondja poolt abi kohta

### Veebilehed on pärast seadistamist liiga (subdomaanid) {#sites-are-not-accessible-after-setup-subdomains}

Kui te valisite subdomaan struktuuri, peate konfigurates **wildcard DNS** oma domeenile. Lisage DNS-registri:

```
Tüüp: A (või CNAME)
Host: *
Väärtus: [teie serveri IP]
```

Kontrollige hoondja poolt, kui olete kahtluse, kuidas seda konfigurida.

### Autentikatsiooniprobleemid pärast seadistamist {#authentication-issues-after-setup}

Kui te olete lahti logitud või kogete kügidroosid multisite seadistamise pärast:

1. Pärastake oma brauseri kügid veebilehe jaoks
2. Logiimina uuesti `yourdomain.com/wp-login.php`
3. Kui probleem jätkub, kontrollige, et teie `wp-config.php`-l ei ole `COOKIE_DOMAIN` seadistatud `false`-le — see on teadaolevin probleem subdomaan multisite installatsioonides

### Etap eba õnnestus installimise ajal {#a-step-failed-during-installation}

Kui üks installimise samm näitab viga:

1. Kirjuta välja esitatud vigu sõnum.
2. Minema tagasi konfiguratsioonil ja proovida uuesti.
3. Kui viga jätkub, kontrolli oma serveri PHP vigu logi rohkem detailide saamiseks.
4. Samm, mis on juba lõpetatud, ei tule uuesti käivitamise korral läbi (installija on idendiline).
