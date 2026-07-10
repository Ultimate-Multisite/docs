---
title: Domenska proizvodi i cijene
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Domain Proizvodi i Cjenovna Struktura {#domain-products-and-pricing}

Domain proizvodi su način na koji kontrolišete cijene, TLD-ove, WHOIS privatnost i izbor provajdera. Svaki domain proizvod je standardni Multisite Ultimate proizvod sa dodatnom **Domain Settings** karticom.

## Kreiranje domain proizvoda {#creating-a-domain-product}

1. Idite na **Network Admin › Ultimate Multisite › Products**
2. Kliknite na **Add New**
3. Postavite tip proizvoda na **Domain**
4. Konfigurišite karticu **Domain Settings** (vidjeti ispod)
5. Sačuvajte

Domain proizvodi se pojavljuju sa ljubičastim **Domain** žigom u listi proizvoda i mogu se filtrirati pomoću kartice **Domain Products**.

## Kartica Domain Settings {#domain-settings-tab}

### Provider {#provider}

Izaberite koji registar rukuje registracijom za ovaj proizvod. Podrazumevano je globalni **Default provider** postavljen u Domain Seller podešavanjima.

### Supported TLDs {#supported-tlds}

Ostavite prazno da biste kreirali **catch-all proizvod** koji važi za sve TLD-ove koji nisu pokriveni drugim proizvodom.

Unesite listu TLD-ova razdvojenu zarezima (npr. `.com, .net, .org`) da biste kreirali **TLD-specifičan proizvod** koji važi samo za te ekstenzije.

**Kako funkcioniše podudarnost proizvoda:** Kada klijent pretražuje domen, dodatak bira najspecifičniji podudarni proizvod. Proizvod sa `.com` u svojoj listi TLD-ova ima prioritet nad catch-all proizvodom. Ako nijedan TLD-specifičan proizvod ne odgovara, koristi se catch-all. Ako ne postoji nijedan proizvod, pretraga domena se neće prikazati.

### Markup type {#markup-type}

Tri režima kontrolišu kako se vaš maloprodajni cenovnik računa na osnovu veleprodajne cene:

| Mode | How it works |
|---|---|
| **Percentage** | Dodaje procenat na veleprodajnu cenu. 20% naknade na veleprodajni domen od $10 daje $12. |
| **Fixed markup** | Dodaje fiksni novčani iznos. Naknada od $5 na domen od $10 daje $15. |
| **Fixed price** | Potpuno ignoriše veleprodajnu cenu. Uvek naplaćuje iznos koji unesete. |

### Introductory pricing {#introductory-pricing}

Omogućite da ponudite sniženu cenu za prvu godinu. Postavite zasebnu **Introductory price** (cena za godinu 1) pored regularne **Renewal price** (cena za godinu 2+). Klijent vidi obe cene tokom naplate kako bi znao šta ga očekuje prilikom obnove.

### WHOIS privacy {#whois-privacy}

Kontroliše da li je WHOIS privatnost zaštićena i ponuđena za domene registrovane putem ovog proizvoda.

| Setting | Behaviour |
|---|---|
| **Disabled** | WHOIS privatnost nikada se ne nudi niti omogućava. |
| **Always Included** | WHOIS privatnost se automatski omogućava pri registraciji bez dodatne naplate. |
| **Customer Choice** | Prikazuje se polje za označavanje tokom naplate. Postavite **Privacy price** da naplaćuje se po godini, ili ga ostavite na $0 da ga ponudite besplatno. |

Za Namecheap, WHOIS privatnost koristi WhoisGuard (uvek besplatno). Za OpenSRS, koristi OpenSRS privatni servis (može imati trošak na veleprodajnom nivou).

---

## Uvoz i sinhronizacija TLD-ova {#tld-import-and-sync}

Domain proizvodi prikazuju veleprodajne cene u realnom vremenu, preuzete od povezanog provajdera. Da bi ovo funkcionisalo, TLD-ovi moraju biti uvezeni.

- **Manual sync:** Settings › Domain Seller › Sync TLDs (po provajderu)
- **Automatic sync:** Pokreće se svakodnevno putem zakazanog cron posla za sve konfigurisane provajdere

Nakon sinhronizacije, idite na karticu Domain Settings bilo kog domain proizvoda i koristite TLD picker da vidite dostupne TLD-ove sa njihovim trenutnim veleprodajnim cenama.

---

## Automatska obnova {#auto-renewal}

Obnove domena vezane su za status članstva klijenta:

- Kada članstvo obnavlja i domen je povezan, obnova domena se automatski stavlja u red
- Pokušaji obnove koriste aktivnu plaćanje gateway klijenta
- Neuspješne obnove se ponovo pokušavaju automatski sa eksponencijalnim backoff-om
- Slanje e-mail obavještenja za uspješne obnove, neuspjele obnove i nadolazeće isteke

ID-ovi šablona za e-mail za događaje životnog ciklusa domena:

| Event | Template ID |
|---|---|
| Domain registered | `domain_registered` |
| Domain renewed | `domain_renewed` |
| Renewal failed | `domain_renewal_failed` |
| Domain expiring soon | `domain_expiring_soon` |

---

## Administrator: Ručna registracija domena {#admin-manual-domain-registration}

Da biste registrovali domen u ime klijenta bez da on prolazi kroz proces naplate:

1. Idite na **Network Admin › Ultimate Multisite › Register Domain**
2. Izaberite klijenta i unesite naziv domena
3. Popunite kontakt podatke registratora (ime, adresa, telefon)
4. Kliknite na **Register**

Domenni zapis se kreira i povezuje sa računom klijenta.
