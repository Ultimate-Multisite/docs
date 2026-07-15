---
title: Asistent za postavljanje multisite
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Asistent za postavljanje Multisite mreže

Ultimate Multisite uključuje ugrađeni asistent koji automatski pretvara standardnu instalaciju WordPress-a u WordPress Multisite mrežu. Time se eliminiše potreba za ručnim uređivanjem `wp-config.php` ili pokretanjem naredbi za bazu podataka.

:::tip
Ako je vaš WordPress instalacija već postavljena kao Multisite mreža, možete potpuno preskočiti ovaj korak. Asistent se pojavljuje samo kada Multisite još nije omogućeno.
:::

## Kada se pojavi asistent? {#when-does-the-wizard-appear}

Kada aktivirate Ultimate Multisite na standardnoj (ne-Multisite) WordPress instalaciji, plugin primijeti da Multisite nije uključen i automatski vas preusmjeri na Asistent za postavljanje Multisite umjesto standardnog asistenta za postavljanje.

Možete ga također pristupiti direktno putem **WP Admin > Ultimate Multisite > Multisite Setup**.

## Preduslovi {#prerequisites}

Prije pokretanja asistenta, provjerite sljedeće:

- Imate **administrator pristup** svojoj WordPress instalaciji
- Datoteka `wp-config.php` na vašem serveru je **pisanja (writable)** za web server
- Imate **novi backup** svojih datoteka i baze podataka

:::warning
Asistent mijenja vašu datoteku `wp-config.php` i kreira nove tabele u bazi podataka. Uvijek napravite backup prije nastavka.
:::

## Korak 1: Dobrodošlica {#step-1-welcome}

Prvi zaslon objašnjava što je WordPress Multisite i što će asistent učiniti:

- Omogućiti značajku Multisite u vašoj WordPress konfiguraciji
- Kreirati potrebne tabele baze podataka za mrežu
- Dodati potrebne konstante multisite u `wp-config.php`
- Aktivirati Ultimate Multisite na mreži

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

Kliknite na **Nastavi** za nastavak.

## Korak 2: Konfiguracija mreže {#step-2-network-configuration}

Ovaj korak vas traži da konfigurišete postavke vaše mreže.

### Struktura stranica {#site-structure}

Odaberite kako će se vaše mreža web stranica organizirati:

- **Subdomena** (Preporučeno) — Svaka stranica dobiva sopstvenu subdomen, npr. `site1.yourdomain.com`
- **Poddirektorijumi** — Stranice se kreiraju kao putanje, npr. `yourdomain.com/site1`

:::note
Ako odaberete subdomene, morat ćete podesiti **wildcard DNS** i **wildcard SSL sertifikat** za vaš domen. Većina hostova WordPress-a to radi automatski. Za detaljan usporedbu pogledajte [Ultimate Multisite 101](./ultimate-multisite-101).
:::

### Naziv mreže (Network Title) {#network-title}

Unesite ime za vašu mrežu. Ovo podrazumevano koristi naziv trenutne stranice sa dodanim "Network". Možete ga kasnije promijeniti u podešavanjima mreže.

### E-mail administratora mreže (Network Admin Email) {#network-admin-email}

E-mail adresa koja se koristi za obavijesti o administraciji mreže. Ovo podrazumevano koristi e-mail adresu trenutnog korisnika.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Nakon što popunite polja, kliknite **Nastavi** (Continue) da nastavite.

## Korak 3: Instalacija {#step-3-installation}

Kliknite na dugme **Instaliraj** (Install) da počnete. Wizard će izvršiti pet automatskih koraka u redoslijedu, svaki prikazujući svoj napredak u stvarnom vremenu:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Korak | Opis |
|---|---|
| **Omogućite Multisite** | Dodajte konstantu `WP_ALLOW_MULTISITE` u datoteku `wp-config.php` |
| **Kreirajte Mrežu (Network)** | Kreirajte tabele baze podataka za multisite (`wp_site`, `wp_sitemeta`, `wp_blogs`, itd.) i popunite ih konfiguracijom vaše mreže |
| **Ažurirajte Konfiguraciju** | Dodajte konačne konstante multisite u `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, itd.) |
| **Popravite Kolače (Cookies)** | Osigurajte da je URL sajta ispravan u metadatama mreže kako biste spriječili probleme s autentifikacijom nakon aktivacije |
| **Aktivirajte Plugin Mreže** | Aktivira Ultimate Multisite na nivou mreže tako da radi kroz cijelu mrežu |

Svaki korak prikazuje jedan od sljedećih statusa:

- **Pending (Očekuje se)** — Čeka se obrada
- **Installing... (Instaliranje...)** — Trenutno se obrađuje
- **Success! (Uspješno!)** — Uspješno završeno
- **Error message (Poruka o grešci)** — Došlo je do greške (poruka će opisati problem)

Kada svi koraci uspješno završe, vidjet ćete zeleni status "Success!" za svaki element:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Zatim će se wizard automatski prebaciti na ekran za završetak.

## Korak 4: Završetak (Complete) {#step-4-complete}

Nakon što je instalacija gotova, vidjet ćete poruku o uspjehu koja potvrđuje da je WordPress Multisite omogućeno.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Sada možete nastaviti s Ultimate Multisite setup wizardom kako biste konfigurirali vaš WaaS platform (podatke o tvrtki, podrazumne sadržaje, platne gatewaye itd.).

:::note
Nakon što se instalacija multisite završi, vaš preglednik će biti preusmjeren putem novonastale administrativne mreže. Možda ćete morati ponovno prijaviti se jer su kolačići za autentifikaciju ažurirani za okruženje multisite.
:::

## Ručna priprema kao rezervno rješenje (Manual Setup Fallback) {#manual-setup-fallback}

Ako wizard ne može pisati u vašu datoteku `wp-config.php` (zbog dozvola na datoteke ili ograničenja servera), on će prikazati točno kod koje trebate dodati ručno:

1. **wp-config.php konstante** koje treba dodati iznad linije `/* To je sve, prestaj s uređivanjem! */`
2. **rewrite pravila za .htaccess** koja su prikladna za vaš odabrani strukturu sajta (poddomena ili poddirektorij).

Nakon što napravite ručne promjene, osvježite stranicu i wizard će primijetiti da je multisite sada aktivno.

## Rješavanje problema (Troubleshooting) {#troubleshooting}

### Wizard kaže da wp-config.php nije writable (nije pisat) {#the-wizard-says-wp-configphp-is-not-writable}

Vaš web server proces treba imati dozvolu za pisanje na datoteku `wp-config.php`. Možete:

- Privremeno promijeniti dozvole datoteke na `644` ili `666`
- Koristiti upute za ručnu pripremu koje vam pruža wizard
- Pitati svog hosting provajdera za pomoć

### Sajti nisu dostupni nakon postavljanja (poddomene) {#sites-are-not-accessible-after-setup-subdomains}

Ako ste odabrali strukturu poddome, trebate konfigurirati **wildcard DNS** za vaš domen. Dodajte DNS zapis:

```
Type: A (ili CNAME)
Host: *
Value: [vaša IP adresa servera]
```

Provjerite s hosting provajderom ako niste sigurni kako to podesiti.

### Problemi s autentifikacijom nakon postavljanja {#authentication-issues-after-setup}

Ako ste se odjavili ili doživjeli greške s kolačićima nakon postavljanja multisite:

1. Obrišite kolačiće preglednika za taj sajt
2. Ponovno se prijavite na `vašdomen.com/wp-login.php`
3. Ako problem traje, provjerite da vaš `wp-config.php` nema postavljenu vrijednost `COOKIE_DOMAIN` na `false` — ovo je poznata problema kod instalacija multisite putem poddomena

### Korak nije prošao tijekom instalacije {#a-step-failed-during-installation}

Ako se jedan od koraka instalacije pojavi greška:

1. Zapišite poruku o grešci koja se prikazuje.
2. Vratite se na korak konfiguriranja i pokušajte ponovo.
3. Ako greška nastavi, provjerite PHP log servera za više detalja.
4. Koraci koji su već završeni će biti preskočeni pri sljedećim pokretanjima (instalator je idempotentan).
