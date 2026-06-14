---
title: Nastavitve in konfiguracija ponudnika
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Prodajalec domen: Postavitev in konfiguracija ponudnikov

Dodatek Domain Seller prinaša s vodnikom za postavo, ki vas vodi skozi vsak nujno korak. Ta stran pokriva tok vodnika in kako konfigurirati ali ponovno konfigurirati ponudnike po tem.

## Zahtevi

- **Multisite Ultimate** v2.4.12 ali novje verzije, aktiviran na omrežju
- **PHP** 7.4+
- API podatki za vsaj enega podpornega registratorja

## Postavitev prvič (First-run setup wizard)

Postavitev vodnik se samčenoma sproži prvič, ko aktivirate dodatek na omrežju. Je na voljo tudi v katerem koli času pod **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Korak 1 — Izberite ponudnika (provider)

Izberite registrator zanje povezati. Podporana možnosti:

| Ponudnik | Upravljanje DNS-a | Privatnost WHOIS |
|---|---|---|
| OpenSRS | Da | Da |
| Namecheap | Ne | Da (WhoisGuard, brezplačno) |
| HostAfrica | Da | Da (ID zaščita) |
| Openprovider | Da | Da |
| Hostinger | Preko mape domene Hostinger core za hostirane domene | Da |
| GoDaddy | Ne | Ne |
| ResellerClub | Da | Ne |
| NameSilo | Ne | Ne |
| Enom | Da | Ne |

### Korak 2 — Vnesite podatke (credentials)

Vsak ponudnik ima različne polja za podatke:

**OpenSRS** — Uporabnik in zasebna ključ (iz OpenSRS Reseller Control Panel-a)

**Namecheap** — Uporabnik in API ključ (iz Account › Tools › API Access)

**HostAfrica** — Endpoint API domene resellerja in podatki iz HostAfrica reseller modula. Trenutno ni dokumentiran oddiro sandbox endpoint; preverite zanesljivo brskanje brez živih registracij pred uporabo za dejanske registracije.

**Openprovider** — Uporabnik in geslo z omogočenim API dostopom. Opcionalni način sandbox uporablja Openprovider sandbox API, in opcionalni domne customer handle se lahko ponovno uporabi za registracije.

**Hostinger** — Deljeni Hostinger hPanel API token iz jezgra integracije Hostinger. Taj isti token napaja mapiranje osnovnih domena i operacije registracije prodajalcev domen.

**GoDaddy** — API ključ in tajni ključ (iz developer.godaddy.com)

**ResellerClub** — Reseller ID in API ključ (iz kontrolne panela ResellerClub)

**NameSilo** — API ključ (iz namesilo.com › Account › API Manager)

**Enom** — Identitet računa in API token

Preverite **Sandbox mode**, če je na voljo, da preizkusite z testno okolico ponudnika pred uporabo v živo.

### Korak 3 — Preizkus konekcije

Kliknite na **Test Connection**. Wizard pošlje lahkotni API poziv za preverjanje podatkov in povezljivosti. Popravite kakršne koli težave z podatki pred nadaljevanjem.

### Korak 4 — Import TLD-jev

Kliknite na **Import TLDs**, da bi povzročili vse na voljo TLD-je in veleprodajne cene od povezane ponudbe. To popolni TLD seznam, ki ga uporabljajo domena. Import lahko traja 30–60 sekund za ponudnike z velikimi katalogom TLD-jev.

TLD-ji se tako avtomatsko sinhronizirajo vsak dan preko načrtovanega cron joba.

### Korak 5 — Ustvarite domen produkt

Wizard ustvari domnen produkt s podrazdelkom za vse ostale domene z maržo od 10%. Lahko ga uredite takoj ali preskočite in ustvarite produkte ručno pod **Ultimate Multisite › Products**.

Za celoten vodič o konfiguraciji produkta se ogledajte na [Domain Products and Pricing](./domain-products).

---

## Prekonfiguriranje ponudnika

Idi na **Network Admin › Ultimate Multisite › Settings › Domain Seller** (ali kliknite na **Settings** v seznamu pluginov).

Stranica z nastavitvami vsebuje:

- **Omogo domene prodaje** — vklopite/vklopite celotno funkcijo
- **Predstavnik po podrazdelih (Default provider)** — predstavnik ki se uporablja za iskanje domen in nove izdelke
- **Maksimalna količina TLD-jev na iskanje** — koliko TLD-jev preveriti, ko kupec vpiše iskalni niz; višje vrednosti prikazuje več možnosti, vendar so počasnejše
- **Trajanje cache-ja dostopnosti in cen** — kako dolgo ohranjati rezultate dostopnosti in cen; nižje vrednosti so bolj natančna, vendar povečajo API pozive
- **Upravljanje domenih izdelkov (Manage domain products)** — hitri povezava na seznam Izdelkov

### Dodajanje drugega predstavnika

Kliknite na **Configure providers** in ponovite wizard za novo registratorsko podjetje. Lahko imate vklopljene več predstavnikov hkrati. Vsak domen izdelek dodelite določenemu predstavniku ali ga pustite na predvoljeni.

### Ručno sinhroniziranje TLD-jev

Na strani z nastavitvami kliknite na **Sync TLDs** ob vsakom konfiguriranem predstavniku, da bi povzročili najnovejše cene. To je koristno, ko se predstavnik spremeni v grosne cene ali doda nove TLD-je.

---

## Logi

Vsak predstavnik piše v lastni log kanal. Log lahko ogledate pod **Network Admin › Ultimate Multisite › Logs**:

| Log channel | Vsebine |
|---|---|
| `domain-seller-registration` | Vsi posamezne poskušanje registracije (uspeh in neuspeh) |
| `domain-seller-renewal` | Rezultati zadobe za obnovo |
| `domain-seller-opensrs` | Sirova dejavnost OpenSRS API-ja |
| `domain-seller-namecheap` | Sirova dejavnost Namecheap API-ja |
| `domain-seller-hostafrica` | Sirova dejavnost HostAfrica API-ja |
| `domain-seller-openprovider` | Sirova dejavnost Openprovider API-ja |
| `domain-seller-hostinger` | Sirova dejavnost Hostinger API-ja |
| `domain-seller-godaddy` | Sirova dejavnost GoDaddy API-ja |
| `domain-seller-resellerclub` | Sirova dejavnost ResellerClub API-ja |
| `domain-seller-namesilo` | Sirova dejavnost NameSilo API-ja |
| `domain-seller-enom` | Sirova dejavnost Enom API-ja |

---

## Napobe o sposobnostih ponudnikov

Ne vsaka registrar API razlaže iste operacije. Dodonik prikazuje nepodjetne operacije z jasnimi napakami za admina, namesto da bi se ti problemi tiho ukvarjali.

- **HostAfrica** podpira najširši delovni tok za resellerje, vključno s iskušanjem (lookup), sinhronizacijo TLD/cen, registracijo, obnovo, prenosom, nadaljnimi spremembami imen serverjev in DNS zapisov, EPP kodi, zaključevanjem registra in zaščito ID.
- **Openprovider** podpira sinhronizacijo TLD z reseller cenami, registracijo, obnovo, prenose, nadaljnimi spremembami imen serverjev, DNS zon, EPP kode, zaključevanjem registra in zasebnost WHOIS. Avtentičira se s kratkotrajnim bearer tokenom, ki ga dodonik sam avtomatsko obnovi.
- **Hostinger** podpira iskušanje dostopnosti (availability search), registracijo, iskušanje portfolija, nadaljnimi spremembami imen serverjev, zaključevanjem registra in zasebnost WHOIS preko deljenega hPanel API tokena. Public Domains API Hostingerja ne razlaže cen za resellerje/wholesale, vnosne prenose, eksplicitno obnovo ali pridobitev EPP kode; obnove se avtomatsko obnovijo le.
