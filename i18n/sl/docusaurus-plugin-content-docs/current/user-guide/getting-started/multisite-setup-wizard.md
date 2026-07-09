---
title: Asistent za nastavitvo multisite
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Multisite nastavitveni vodič {#multisite-setup-wizard}

Ultimate Multisite vključuje zgrajen vodič, ki sam avtomatsko spremeni standardno WordPress instalacijo v WordPress Multisite omrežje. To odloča potrebo po ručnem urejanju datoteke `wp-config.php` ali uporabi baznih komand.

:::tip
Če je vaša WordPress instalacija že deluje kot Multisite omrežje, lahko ta korak popolnoma preskočite. Vodič se pojavlja le, ko ni Multisite še vključeno.
:::

## Kdaj se pojavi vodič? {#when-does-the-wizard-appear}

Ko aktivirate Ultimate Multisite na standardni (ne-Multisite) WordPress instalaciji, plugin zazna, da Multisite ni vklopljen in vas sam avtomatsko preusmeri na Multisite nastavitveni vodič namesto običajnega vodiča za nastavitve.

Lahko ga lahko dostopate tudi neposredno preko **WP Admin > Ultimate Multisite > Multisite Setup**.

## Predhodni podatki {#prerequisites}

Pred začetkom uporabe vodiča se prepričajte, da imate:

- **Administratorški dostop** do vaše WordPress instalacije
- Da je datoteka `wp-config.php` na serverju **pisna** za spletno orodje (web server)
- **Nedavni rezervni kopič** svojih datotek in baze podatkov

:::warning
Vodič spremeni vašo datoteko `wp-config.php` in ustvarja nove tabele v bazi podatkov. vedno ustvarite rezervno kopijo pred nadaljnjo uporabo.
:::

## Korak 1: Dobši dobiček (Welcome) {#step-1-welcome}

Prvi zaslon pojasni, kaj je WordPress Multisite in kaj bo vodič naredil:

- Vključite funkcijo Multisite v vaš WordPress konfiguraciji
- Ustvarite potrebne tabele baze podatkov za omrežje
- Dodajte potrebne konstante za omrežje do `wp-config.php`
- Aktivirajte Ultimate Multisite na omrežju

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

Kliknite na **Nastavi nadalje** (Continue), da nadaljujete.

## Korak 2: Konfiguracija omrežja (Network Configuration) {#step-2-network-configuration}

Ta korak vam vpraša, kako želite konfigurirati nastavitve vaše mreže.

### Struktura spletnih strani (Site Structure) {#site-structure}

Izberite kako bodo vaše spletne strani v mreži organizirane:

- **Subdomene** (Priporočamo) — Strani dobijo lastno subdomen, npr. `site1.yourdomain.com`
- **Poddirektori** — Strani se ustvarjajo kot poti, npr. `yourdomain.com/site1`

:::note
Če izberete subdomene boste morali konfigurirati **wildcard DNS** in **wildcard SSL certificate** za vaš domen. Večina upravljanih WordPress hostov to obravnava samodejno. Pogledajte [Ultimate Multisite 101](./ultimate-multisite-101) za podrobno primerjavo.
:::

### Ime mreže (Network Title) {#network-title}

Vnesite ime za vašo mrežno stran. To po defaultu uporablja trenutno ime vaše strani z pripomočnim besedilom "Network" na koncu. Lahko ga kasneje spremenite v nastavitvah mreže.

### E-pošta administratorja mreže (Network Admin Email) {#network-admin-email}

E-pošta, ki se uporablja za obvestila o administraciji mreže. To po defaultu uporablja e-pošto trenutnega uporabnika.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Po zapolnjenju polj kliknite na **Continue** (Naslednji), da nadaljujete.

## Korak 3: Instalacija {#step-3-installation}

Kliknite na gumb **Install** (Instaliraj), da začnete. Wizard opravi pet avtomatiziranih korakov v vrstvi, ki vsak prikazuje svoj napredek v realnem času:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Korak | Opis |
|------|-------------|
| **Omogočite Multisite** | Dodajte konstantu `WP_ALLOW_MULTISITE` v datoteko `wp-config.php` |
| **Ustvarite omrežje** | Ustvarite bazo podatkovne tabele za multisite (`wp_site`, `wp_sitemeta`, `wp_blogs`, itd.) in jih popunite z vašo konfiguracijo omrežja |
| **Obnovite konfiguracijo** | Dodajte končne konstante za multisite v `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, itd.) |
| **Popravite piškotke** | Preverite, da je URL spletne strani pravilna v podatkih omrežja, da preprečite težave z avtenticiranjem po aktivaciji |
| **Aktivirajte plugin omrežja** | Aktivirajte Ultimate Multisite, da deluje na celotni mreži |

Vsak korak prikazuje eno od naslednjih stavkov:

- **Pending** — Čaka obdelave
- **Installing...** — Trenutno se izvaja
- **Success!** — Uspešno končano
- **Error message** — Došlo do napake (besedilo bo opisalo problem)

Ko bodo vsi koraki uspešno končani, boste videli zeleno stanje "Success!" za vsoto elementa:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Potem bo wizard sam avtomatsko prešel na zaslon dokončanja.

## Korak 4: Končanje {#step-4-complete}

Ko je instalacija končana, boste videli sporočilo uspeha, ki potrjuje, da je WordPress Multisite omogočen.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Zdaj lahko nadaljujete z wizardom za nastavitvo Ultimate Multisite, da bi konfigurirali vaš WaaS platform (podjetni podatki, osnovni vsebine, plačilne bramke itd.).

:::note
Po dokončan namestitvi multisite se bo vaš preglednik preusmeril skozi novonastavljeni admin omrežja. Morda boste morali ponovno prijaviti, ker so piškotki za avtorizacijo posodobljeni za okolje multisite.
:::

## Rezerva za ručno namestitev {#manual-setup-fallback}

Če wizard ne more zapisati v vaš `wp-config.php` datotek (zaradi dovoljenj za datoteke ali omejitev serverja), prikazuje vam točno kod, ki ga morate dodati ručno:

1. **Konstante wp-config.php** ki jih morate dodati zgoraj vrstice `/* To je vse, pre prestaj s urejanjem! */`
2. **Rewrite pravila .htaccess** ki so primerna za vaš izbran strukturjo spletne strani (poddomena ali poddirektna smer).

Po opravitvi ručnih sprememb, osvežite stran in wizard bo opazil, da je multisite zdaj aktiv.

## Reševanje težav {#troubleshooting}

### Wizard pravi, da wp-config.php ni zapisabilen {#the-wizard-says-wp-configphp-is-not-writable}

Vaš proces spletnega serverja potrebuje pisni dovoljenje za datoteko `wp-config.php`. Lahko:

- Prenosno spremenite dovoljenja za datoteke na `644` ali `666`
- Uporabite navodila za rezervno namestitev, ki jih zagotavlja wizard
- Vprašajte vašega hostnega ponudnika za pomoč

### Stranki niso dostopne po namestitvi (poddomene) {#sites-are-not-accessible-after-setup-subdomains}

Če ste izbrali strukturo poddomen, morate konfigurirati **wildcard DNS** za svojo domeno. Dodajte zapis DNS:

```
Type: A (ali CNAME)
Host: *
Value: [vaša server IP]
```

Preverite z vašim hostnim ponudnikom, če niste prepričani kako to konfigurirati.

### Problemi z avtorizacijo po namestitvi {#authentication-issues-after-setup}

Če ste izbrisali prijavu ali imate napake s piškotki po namestitvi multisite:

1. Obrišite piškotke v svojem pregledniku za stran
2. Ponovno se prijavite na `yourdomain.com/wp-login.php`
3. Če je problem še vedno, preverite, da ni v vašem `wp-config.php` nastavljeno `COOKIE_DOMAIN` na `false` — to je znana težava pri namestitvah multisite z poddomenami

### Enakratni korak ni uspešil med namestitvijo {#a-step-failed-during-installation}

Če vam pri eni od korakov namestitve nastane napaka:

1. Opazite sporočilo o napaki, ki se prikazuje.
2. Vracite se na korak konfiguracije in poskusite ponoviti.
3. Če napaka ostaja, preverite PHP log serverja za več podrobnosti.
4. Koraki, ki so že končani, bodo pri naslednjih uporabah preskočeni (instalator je idempotenten).
