---
title: Multisite Postavljanje Čarobnik
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Ultimate Multisite Setup Wizard

Ultimate Multisite uključuje ugrađeni wizard koji automatski pretvara standardnu WordPress instalaciju u WordPress Multisite mrežu. Time se eliminiše potreba da ručno uređujete `wp-config.php` ili pokrećete komande u bazi podataka.

:::tip
Ako je vaša WordPress instalacija već pokrenuta kao Multisite mreža, možete potpuno preskočiti ovaj korak. Wizard se pojavljuje samo kada Multisite nije omogućen.
:::

## Kada se wizard pojavljuje?

Kada aktivirate Ultimate Multisite na standardnoj (ne-Multisite) WordPress instalaciji, plugin detektuje da Multisite nije omogućen i automatski vas preusmerava na Multisite Setup Wizard umjesto regularnog setup wizard-a.

Takođe ga možete pristupiti direktno na **WP Admin > Ultimate Multisite > Multisite Setup**.

## Preduslovi

Prije pokretanja wizard-a, pobrinite se da:

- Imate **administratorski pristup** svojoj WordPress instalaciji
- Datoteka `wp-config.php` vašeg servera ima **mogućnost pisanja** (writable) za web server
- Imate **nedavni backup** svojih datoteka i baze podataka

:::warning
Wizard mijenja vašu datoteku `wp-config.php` i kreira nove tabele u bazi podataka. Uvijek napravite backup prije nego što nastavite.
:::

## Korak 1: Dobrodošlica

Prvi ekran objašnjava šta je WordPress Multisite i šta će wizard uraditi:

- Omogućiti Multisite funkciju u vašoj WordPress konfiguraciji
- Kreirati potrebne tabele baze podataka za mrežu
- Dodati potrebne multisite konstante u `wp-config.php`
- Mrežno aktivirati Ultimate Multisite širom mreže

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

Kliknite na **Continue** da nastavite.

## Korak 2: Konfiguracija mreže

Ovaj korak vas traži da konfigurišete postavke vaše mreže.

### Struktura sajta

Izaberite kako će biti organizovani sajtovi vaše mreže:

- **Poddomeni** (Preporučeno) — Sajtovi dobijaju svoj poddomen, npr. `site1.vašdomen.com`
- **Poddirektoriji** — Sajtovi se kreiraju kao putanje, npr. `vašdomen.com/site1`

:::note
Ako izaberete poddomene, moraćete da konfigurišete **wildcard DNS** i **wildcard SSL certifikat** za vaš domen. Većina hosting provajdera za WordPress to radi automatski. Pogledajte [Ultimate Multisite 101](./ultimate-multisite-101) za detaljno poređenje.
:::

### Naslov mreže

Unesite ime za svoju mrežu. Ovo se podrazumeva na naslov vašeg trenutnog sajta sa dodanim "Network". To možete kasnije promijeniti iz postavki mreže.

### Email administratora mreže

Adresa e-pošte koja se koristi za obavještavanje o administraciji mreže. Ovo se podrazumeva na e-mail adresu trenutnog korisnika.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Nakon popunjavanja polja, kliknite na **Continue** da nastavite.

## Korak 3: Instalacija

Kliknite na dugme **Install** da započnete. Wizard obavlja pet automatizovanih koraka sekvencijalno, pri čemu svaki prikazuje svoj napredak u realnom vremenu:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Korak | Opis |
|------|-------------|
| **Enable Multisite** | Dodaje konstantu `WP_ALLOW_MULTISITE` u `wp-config.php` |
| **Create Network** | Kreira multisite tabele baze podataka (`wp_site`, `wp_sitemeta`, `wp_blogs`, itd.) i popunjava ih vašom mrežnom konfiguracijom |
| **Update Configuration** | Dodaje finalne multisite konstante u `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, itd.) |
| **Fix Cookies** | Osigurava da je URL sajta ispravan u mrežnim metadata podacima kako bi se spriječili problemi sa autentifikacijom nakon aktivacije |
| **Network Activate Plugin** | Mrežno aktivira Ultimate Multisite tako da radi širom cijele mreže |

Svaki korak prikazuje jedan od ovih statusa:

- **Pending** — Čeka obradu
- **Installing...** — Trenutno radi
- **Success!** — Uspješno završeno
- **Error message** — Došlo je do greške (poruka će opisati problem)

Nakon što svi koraci uspješno završe, vidjet ćete zeleni status "Success!" za svaki stavku:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Wizard će zatim automatski nastaviti na ekran za završetak.

## Korak 4: Završetak

Nakon što je instalacija završena, vidjet ćete poruku o uspjehu koja potvrđuje da je WordPress Multisite omogućen.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Sada možete nastaviti sa Ultimate Multisite setup wizard-om kako biste konfigurisali svoju WaaS platformu (detalji kompanije, podrazumevani sadržaj, plaćanja, itd.).

:::note
Nakon što se multisite instalacija završi, vaš preglednik će vas preusmeriti preko novom omogućenog mrežnog administratora. Možda ćete morati ponovo da se prijavite jer se ažuriraju kolačići za autentikaciju za multisite okruženje.
:::

## Ručna postavka (Fallback)

Ako wizard ne može da piše u vašu datoteku `wp-config.php` (zbog dozvola za fajlove ili ograničenja servera), on će prikazati tačan kod koji morate dodati ručno:

1. **Konstante wp-config.php** koje treba dodati iznad linije `/* That's all, stop editing! */`
2. **.htaccess rewrite pravila** odgovarajuća za izabranu strukturu sajta (poddomen ili poddirektorij)

Nakon što napravite ručne promjene, osvježite stranicu i wizard će detektovati da je multisite sada aktivno.

## Rješavanje problema

### Wizard kaže da wp-config.php nije writable

Proces vašeg web servera treba da ima dozvolu za pisanje na datoteku `wp-config.php`. Možete:

- Privremeno promijeniti dozvole fajla na `644` ili `666`
- Upotrijebiti uputstva za ručnu postavku (manual setup fallback) koja vam je pružena od strane wizard-a
- Zatražiti pomoć od vašeg hosting provajdera

### Sajtovi nisu dostupni nakon postavljanja (poddomeni)

Ako ste izabrali strukturu poddomena, morate konfigurisati **wildcard DNS** za vaš domen. Dodajte DNS zapis:

```
Type: A (ili CNAME)
Host: *
Value: [IP adresa vašeg servera]
```

Provjerite sa vašim hosting provajderom ako niste sigurni kako ovo konfigurisati.

### Problemi sa autentikacijom nakon postavljanja

Ako ste odjavljeni ili doživljavate greške sa kolačićima nakon multisite postavljanja:

1. Obrišite kolačiće preglednika za sajt
2. Prijavite se ponovo na `yourdomain.com/wp-login.php`
3. Ako problem ostaje, provjerite da li vaša `wp-config.php` nije postavljena sa `COOKIE_DOMAIN` na `false` — ovo je poznat problem na multisite instalacijama sa poddomenima.

### Korak je propao tokom instalacije

Ako jedan od koraka instalacije prikazuje grešku:

1. Zapišite prikazanu poruku o grešci
2. Vratite se na korak konfiguracije i pokušajte ponovo
3. Ako greška ostaje, provjerite PHP log grešaka vašeg servera za više detalja
4. Koraci koji su već završeni bit će preskočeni pri naknadnim pokretima (instalator je idempotentan)
