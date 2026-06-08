---
title: Opstel en Verskafferkonfigurasie
sidebar_position: 1
_i18n_hash: 2a9c0d63fc6ee6bad011c099707fb3f3
---
# Domain Seller: Opstel en Verskafferkonfigurasie

Die Domain Seller addon kom met 'n begeleide opstel-wond wat jou deur elke vereiste stap lei. Hierdie bladsy dek die stroom van die wond en hoe om verskaffers daarna te konfigureer of te herkonfigureer.

## Vereistes

- **Multisite Ultimate** v2.4.12 of hoër, netwerk-geaktiveer
- **PHP** 7.4+
- API-wagwoorde vir ten minste een ondersteunde registeraar

## Opstel-wond vir die eerste keer

Die opstel-wond skiet outomaties wanneer jy die plugin vir die eerste keer netwerk-aktiveer. Dit is ook enige tyd beskikbaar by **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Stap 1 — Kies 'n verskaffer

Kies die registeraar wat jy wil verbind. Ondersteunde opsies:

| Verskaffer | DNS bestuur | WHOIS privaatheid |
|---|---|---|
| OpenSRS | Ja | Ja |
| Namecheap | Nee | Ja (WhoisGuard, gratis) |
| GoDaddy | Nee | Nee |
| ResellerClub | Ja | Nee |
| NameSilo | Nee | Nee |
| Enom | Ja | Nee |

### Stap 2 — Voer wagwoorde in

Elke verskaffer het verskillende wagwoordvelde:

**OpenSRS** — Gebruikersnaam en private sleutel (van die OpenSRS Reseller Control Panel)

**Namecheap** — Gebruikersnaam en API-sleutel (van Account › Tools › API Access)

**GoDaddy** — API-sleutel en geheim (van developer.godaddy.com)

**ResellerClub** — Reseller ID en API-sleutel (van die ResellerClub bedieningspaneel)

**NameSilo** — API-sleutel (van namesilo.com › Account › API Manager)

**Enom** — Rekening-ID en API-token

Kontroleer **Sandbox mode** waar beskikbaar om te toets teen die verskaffer se toetsomgewing voordat jy live gaan.

### Stap 3 — Toets die verbinding

Klik op **Test Connection**. Die wond stuur 'n ligte API-oproep om wagwoorde en konektiwiteit te verifieer. Los enige wagwoordprobleme op voordat jy voortgaan.

### Stap 4 — TLD's Importeer

Klik op **Import TLDs** om alle beskikbare TLD's en groothandelprysing van die gekoppelde verskaffer te haal. Dit vul die TLD-lys wat deur domeinprodukte gebruik word. Die import kan 30–60 sekondes neem vir verskaffers met groot TLD-katalogusse.

TLD's word ook outomaties een keer per dag gesinkroniseer via 'n geplante cron-werk.

### Stap 5 — Skep 'n domeinproduk

Die wond skep 'n standaard 'catch-all' domeinproduk met 'n 10% meerwaarde. Jy kan hierdie produk onmiddellik wysig of kan opsy en produkte handmatig skep onder **Ultimate Multisite › Products**.

Kyk na [Domain Products and Pricing](./domain-products) vir die volledige produkkonfigurasie-gids.

---

## 'n Verskaffer Herkonfigureer

Gaan na **Network Admin › Ultimate Multisite › Settings › Domain Seller** (of klik op **Settings** in die plugin-lys).

Die instellingsbladsy bevat:

- **Enable domain selling** — skakel die hele funksie aan/af
- **Default provider** — die verskaffer wat vir domeinsoektogte en nuwe produkte gebruik word
- **Max TLDs per search** — hoeveel TLD's om te toets wanneer 'n kliënt soek; hoër waardes wys meer opsies maar is stadiger
- **Availability cache duration** — hoe lank om beskikbaarheid en prysinligting te kas (cache); laer waardes is akkuraater maar verhoog API-oproepe
- **Manage domain products** — vinnige skakel na die Produklys
- **Configure providers** — maak die Integrasie-wond oop om verskaffers by te voeg of te herkonfigureer

### 'n Tweede verskaffer byvoeg

Klik op **Configure providers** en hardloop die wond weer vir die nuwe registeraar. Jy kan verskeie verskaffers gelyktydig konfigureer. Wijs elke domeinproduk toe aan 'n spesifieke verskaffer, of laat dit op die standaard.

### TLD's Handmatig Sinkroniseer

In die instellingsbladsy, klik op **Sync TLDs** langs enige gekonfigureerde verskaffer om die nuutste prysing te haal. Dit is nuttig nadat 'n verskaffer groothandelprysing opdateer of nuwe TLD's bygevoeg het.

---

## Logs

Elke verskaffer skryf na sy eie log-kanaal. Logs is gesienbaar onder **Network Admin › Ultimate Multisite › Logs**:

| Log-kanaal | Inhoud |
|---|---|
| `domain-seller-registration` | Alle registrasiepogings (sukses en mislukking) |
| `domain-seller-renewal` | Hernuwingswerkresultate |
| `domain-seller-opensrs` | Ruwe OpenSRS API-aktiwiteit |
| `domain-seller-namecheap` | Ruwe Namecheap API-aktiwiteit |
| `domain-seller-godaddy` | Ruwe GoDaddy API-aktiwiteit |
| `domain-seller-resellerclub` | Ruwe ResellerClub API-aktiwiteit |
| `domain-seller-namesilo` | Ruwe NameSilo API-aktiwiteit |
| `domain-seller-enom` | Ruwe Enom API-aktiwiteit |
