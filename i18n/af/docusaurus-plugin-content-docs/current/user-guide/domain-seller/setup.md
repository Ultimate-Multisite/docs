---
title: Opstelling en Verskafferkonfigurasie
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: Opstelling en verskafferkonfigurasie

Die Domain Seller-byvoeging word met ’n begeleide opstellingsassistent verskaf wat jou deur elke vereiste stap lei. Hierdie bladsy dek die assistentvloei en hoe om verskaffers daarna te konfigureer of te herkonfigureer.

## Vereistes

- **Multisite Ultimate** v2.4.12 of hoër, netwerk-geaktiveer
- **PHP** 7.4+
- API-bewyse vir ten minste een ondersteunde registrateur

## Eerste-loop-opstellingsassistent

Die opstellingsassistent begin outomaties die eerste keer wat jy die plugin netwerk-aktiveer. Dit is ook enige tyd beskikbaar vanaf **Netwerkadministrasie › Ultimate Multisite › Domain Seller-opstelling**.

### Stap 1 — Kies ’n verskaffer

Kies die registrateur wat jy wil koppel. Ondersteunde opsies:

| Verskaffer | DNS-bestuur | WHOIS-privaatheid |
|---|---|---|
| OpenSRS | Ja | Ja |
| Namecheap | Nee | Ja (WhoisGuard, gratis) |
| HostAfrica | Ja | Ja (ID-beskerming) |
| Openprovider | Ja | Ja |
| Hostinger | Via kern-Hostinger-domeinkartering vir gehuisveste domeine | Ja |
| GoDaddy | Nee | Nee |
| ResellerClub | Ja | Nee |
| NameSilo | Nee | Nee |
| Enom | Ja | Nee |

### Stap 2 — Voer bewyse in

Elke verskaffer het verskillende bewysvelde:

**OpenSRS** — Gebruikersnaam en private sleutel (vanaf die OpenSRS Reseller Control Panel)

**Namecheap** — Gebruikersnaam en API-sleutel (vanaf Account › Tools › API Access)

**HostAfrica** — Domains Reseller API-endpoint en bewyse vanaf die HostAfrica-herverkopermodule. Geen aparte sandbox-endpoint is tans gedokumenteer nie; toets met veilige leesalleen-kontroles voordat jy lewendige registrasies uitvoer.

**Openprovider** — Gebruikersnaam en wagwoord met API-toegang geaktiveer. Opsionele sandbox-modus gebruik die Openprovider-sandbox-API, en ’n opsionele verstek-kliënthandvatsel kan vir registrasies hergebruik word.

**Hostinger** — Die gedeelde Hostinger hPanel API-token vanaf die kern-Hostinger-integrasie. Dieselfde token dryf kern-domeinkartering en Domain Seller-registrasiebewerkings aan.

**GoDaddy** — API-sleutel en geheim (vanaf developer.godaddy.com)

**ResellerClub** — Herverkoper-ID en API-sleutel (vanaf die ResellerClub-beheerpaneel)

**NameSilo** — API-sleutel (vanaf namesilo.com › Account › API Manager)

**Enom** — Account-ID en API-token

Merk **Sandbox-modus** waar beskikbaar om teen die verskaffer se toetsomgewing te toets voordat jy lewendig gaan.

### Stap 3 — Toets die verbinding

Klik **Toets verbinding**. Die assistent stuur ’n liggewig-API-oproep om bewyse en konnektiwiteit te verifieer. Los enige bewysprobleme op voordat jy voortgaan.

### Stap 4 — Voer TLD’s in

Klik **Voer TLD’s in** om alle beskikbare TLD’s en groothandelpryse vanaf die gekoppelde verskaffer te trek. Dit vul die TLD-lys wat deur domeinprodukte gebruik word. Die invoer kan 30–60 sekondes neem vir verskaffers met groot TLD-katalogusse.

TLD’s word ook outomaties een keer per dag weer gesinkroniseer via ’n geskeduleerde cron-taak.

### Stap 5 — Skep ’n domeinproduk

Die assistent skep ’n verstek vang-alles-domeinproduk met ’n 10%-opslag. Jy kan hierdie produk onmiddellik wysig of oorslaan en produkte handmatig onder **Ultimate Multisite › Produkte** skep.

Sien [Domeinprodukte en pryse](./domain-products) vir die volledige produkkonfigurasiegids.

---

## Herkonfigureer ’n verskaffer

Gaan na **Netwerkadministrasie › Ultimate Multisite › Instellings › Domain Seller** (of klik **Instellings** in die plugin-lys).

Die instellingsbladsy bevat:

- **Aktiveer domeinverkope** — skakel die hele funksie aan/af
- **Verstekverskaffer** — die verskaffer wat vir domeinsoektogte en nuwe produkte gebruik word
- **Maks. TLD’s per soektog** — hoeveel TLD’s om na te gaan wanneer ’n klant soek; hoër waardes wys meer opsies maar is stadiger
- **Beskikbaarheidskasduur** — hoe lank om beskikbaarheids- en prysresultate te kas; laer waardes is akkurater maar verhoog API-oproepe
- **Bestuur domeinprodukte** — vinnige skakel na die Produktelys
- **Konfigureer verskaffers** — maak die Integrasie-assistent oop om verskaffers by te voeg of te herkonfigureer

### Voeg ’n tweede verskaffer by

Klik **Konfigureer verskaffers** en laat die assistent weer loop vir die nuwe registrateur. Jy kan meerdere verskaffers gelyktydig gekonfigureer hê. Ken elke domeinproduk aan ’n spesifieke verskaffer toe, of laat dit op die verstek.

### Sinkroniseer TLD’s handmatig

Op die instellingsbladsy, klik **Sinkroniseer TLD’s** langs enige gekonfigureerde verskaffer om die jongste pryse te trek. Dit is nuttig nadat ’n verskaffer groothandelpryse opdateer of nuwe TLD’s byvoeg.

---

## Logboeke

Elke verskaffer skryf na sy eie logkanaal. Logboeke is sigbaar onder **Netwerkadministrasie › Ultimate Multisite › Logboeke**:

| Logkanaal | Inhoud |
|---|---|
| `domain-seller-registration` | Alle registrasiepogings (sukses en mislukking) |
| `domain-seller-renewal` | Hernuwingstaakresultate |
| `domain-seller-opensrs` | Rou OpenSRS API-aktiwiteit |
| `domain-seller-namecheap` | Rou Namecheap API-aktiwiteit |
| `domain-seller-hostafrica` | Rou HostAfrica API-aktiwiteit |
| `domain-seller-openprovider` | Rou Openprovider API-aktiwiteit |
| `domain-seller-hostinger` | Rou Hostinger API-aktiwiteit |
| `domain-seller-godaddy` | Rou GoDaddy API-aktiwiteit |
| `domain-seller-resellerclub` | Rou ResellerClub API-aktiwiteit |
| `domain-seller-namesilo` | Rou NameSilo API-aktiwiteit |
| `domain-seller-enom` | Rou Enom API-aktiwiteit |

---

## Verskaffervermoë-aantekeninge

Nie elke registrateur-API stel dieselfde bewerkings bloot nie. Die byvoeging wys nie-ondersteunde bewerkings met duidelike admin-gerigte foute in plaas daarvan om stilweg te misluk.

- **HostAfrica** ondersteun die breedste lewendige herverkoperwerkvloei, insluitend opsoek, TLD-/pryssinkronisering, registrasie, hernuwing, oordrag, nameserver-opdaterings, DNS-rekords, EPP-kodes, registrar lock, en ID-beskerming.
- **Openprovider** ondersteun TLD-sinkronisering teen herverkoperpryse, registrasie, hernuwing, oordragte, nameserver-opdaterings, DNS-sones, EPP-kodes, registrar lock, en WHOIS-privaatheid. Dit verifieer met ’n kortstondige bearer token wat die addon outomaties verfris.
- **Hostinger** ondersteun beskikbaarheidssoektog, registrasie, portefeulje-opsoek, nameserver-opdaterings, registrar lock, en WHOIS-privaatheid deur die gedeelde hPanel API-token. Hostinger se openbare Domains API stel nie herverkoper-/groothandelpryse, inkomende oordrag, eksplisiete hernuwing, of EPP-kode-ophaling beskikbaar nie; hernuwings is slegs outomatiese hernuwing.
