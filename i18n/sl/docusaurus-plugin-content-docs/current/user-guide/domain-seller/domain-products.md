---
title: Domena izdelki in cenik
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Domenični izdelki in cenik

Domenični izdelki so način, kako kontrolirate cene, TLD-e (top-level domena), zasebnost WHOIS in izbiro ponudnika. Vsak domen izdelek je standardni Multisite Ultimate izdelek z dodatno tabo **Domain Settings**.

## Ustvarjanje domennega izdelka {#creating-a-domain-product}

1. Pojdite na **Network Admin › Ultimate Multisite › Products**
2. Kliknite na **Add New** (Dodaj novo)
3. Ustavite tip izdelka na **Domain** (Domen).
4. Konfigurišajte tabo **Domain Settings** (Nastavitve domena) (pogledajte spodaj).
5. Shranite

Domenični izdelki se pojavljajo z ljubkavim vijoličnim oznako **Domain** v seznamu izdelkov in jih lahko filtrirate z uporabo tabe **Domain Products**.

## Tab Domain settings {#domain-settings-tab}

### Ponudnik (Provider) {#provider}

Izberite, kateri registrator bo obravnaval registracijo za ta izdelek. Počitno je globalni **Default provider** (Predvoljni ponudnik), ki je nastavljen v nastavitvah Domen Seller.

### Podporana TLD-e (Supported TLDs) {#supported-tlds}

Prazno pustite, če želite ustvariti **catch-all product** (izdelek za vse) na katere se nanaša na vse TLD-e, ki jih ne prekrije drugi izdelek.

Vnesite seznam TLD-jev z razdelitvijo z zagoni (npr. `.com, .net, .org`), da ustvarite **TLD-specific product** (izdelek specifičen za TLD), ki se nanaša le na te ekstenzije.

**Kako deluje podbočanje izdelkov (How product matching works):** Ko kupec iskal domen, dodatek izbere najbolj specifični ustrezen izdelek. Izdelek z `.com` v seznamu TLD-jev ima prednost pred izdelkom za vse. Če se ne ustreza noben spesifičen izdelek za TLD, se uporabi catch-all. Če ne obstaja noben izdelek, iskanje domena ni prikazano.

### Tip podbočanja (Markup type) {#markup-type}

Tri načina upravljajo, kako se vaš retail cena računa od velevene cene:

| Mode | Kako deluje |
|---|---|
| **Percentage** (Procenta) | Dodaja odstotek na veleveno ceno. 20-procentno podbočanje na veleveno domeno v 10 dolarjev daje 12 dolarjev. |
| **Fixed markup** (Fiksna podbočanja) | Dodaja fiksno dolžino denarja. Podbočanje od 5 dolarjev na domeno v 10 dolarjev daje 15 dolarjev. |
| **Fixed price** (Fiksna cena) | Vse velevene cene zanima. vedno določi znesek, ki ga vnesete. |

### Uvodna cena (Introductory pricing) {#introductory-pricing}

Om ponudbo zniženo ceno za prvi leto. Ustavite ločeno **Uvodno ceno** (ceno za prvo leto) obravnavano v redno **Ceno za obnovitev** (za leto 2+). Na strani za nakup vidijo oba cena, tako da vedete, kaj se bo zgodilo pri obnovitvi.

### zasebnost WHOIS {#whois-privacy}

Odpravlja, ali je ponudba zasebnosti WHOIS za domene, ki so registrirani z uporabo tega izdelka.

| Postavitev | Delovanje |
|---|---|
| **Iščeteno** | Zasebnost WHOIS ni ponujena niti vključena. |
| **Vedno vključeno** | Zasebnost WHOIS je avtomatsko vključena ob registraciji brezplačno. |
| **Izbira stranke** | Pri nakupu se pojavi polje za označevanje. Ustavite **Ceno zasebnosti** na ceno po letu ali jo pustite na $0, da jo ponudite brezplačno. |

Za Namecheap uporablja WHOIS zasebnost WhoisGuard ( vedno brezplačno). Za OpenSRS uporablja storitev zasebnosti OpenSRS (mohtem obstaja cena pri grosnih cenah).

---

## Import in sinhronizacija TLD-jev {#tld-import-and-sync}

Domene prikazujejo ceno po grosih v realnem času, ki jo preneseta povezava z omrežjem. Za to je potrebno, da se TLD-ji uvedeta.

- **Ročna sinhronizacija:** Postavke › Prodajalec domen › Sinhroniziraj TLD-je (po ponudavcu)
- **Avtomatska sinhronizacija:** Se izvaja vsak dan preko načrtovanega cron joba na vseh konfiguriranih ponudavcih.

Po sinhronizaciji se obiščite tab za Postavke domena in uporabite izberovalec TLD-jev, da vidite na voljo TLD-je z njihovimi trenutnimi cenami po grosih.

---

## Avtomatska obnovitev {#auto-renewal}

Obnovitve domen so povezane s statusom članstva stranke:

- Ko se članstvo obnavlja in je povezan domen, je obnovitev domena avtomatsko včrtana
- Poskusi za obnovitev uporabljajo aktivno plačilno brambo stranke
- Neuspešne obnovitve so ponovljene avtomatsko z eksponencijalnim odzivom (exponential backoff)
- Pošiljajo se e-poštni obvestila za uspešno obnovitev, neuspešne poskušanje in prihajajoče poteku.

IDe e-poštnih obrazcev za dogodke v življenjskem ciklu domena:

| Dogodek | Template ID |
|---|---|
| Domen je registriran | `domain_registered` |
| Domen je obnovljen | `domain_renewed` |
| Obnova dosegla napako | `domain_renewal_failed` |
| Domen imenuje se kmalu izteče | `domain_expiring_soon` |

---

## Admin: Ručna registracija domena {#admin-manual-domain-registration}

Da bi domen registrirali za strankoprimel, neprehodno preko procesa plačanja (checkout):

1. Pojdite na **Network Admin › Ultimate Multisite › Register Domain**
2. Izberite stranko in vnesite ime domena
3. Popolnite podatke o registratorju (ime, naslov, telefon)
4. Kliknite na **Register**

Registrska zapis je ustvarjen in povezan z računom stranke.
