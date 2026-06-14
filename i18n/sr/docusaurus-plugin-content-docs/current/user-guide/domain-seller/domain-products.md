---
title: Domena proizvodi i cene
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Domeni proizvodi i cene

Domeni proizvodi su način na koji kontrolišete cene, TLD-ove (top-level domen ime), privatnost WHOIS-a i izbor dobavljača. Svaki domen proizvod je standardni Ultimate Multisite proizvod sa dodatnom karticom **Domain Settings**.

## Kreiranje domena proizvoda

1. Idite na **Network Admin › Ultimate Multisite › Products**
2. Kliknite na **Add New** (Dodaj novi)
3. Postavite tip proizvoda na **Domain** (Domen)
4. Konfigurišite karticu **Domain Settings** (Podešavanja domena) (pogledajte ispod)
5. Sačuvajte

Domeni proizvodi se pojavljuju sa ljubičastom oznakom **Domain** u listi proizvoda i mogu se filtrirati pomoću kartice **Domain Products**.

## Kartica Domain settings

### Dobavljač (Provider)

Izaberite koji registrator će obavljati registraciju za ovaj proizvod. Podrazumevano je globalni **Default provider** (Podrazumevani dobavljač) podešen u podešavanjima Prodavca domena.

### Podržani TLD-ovi (Supported TLDs)

Ostavite prazno da biste kreirali **catch-all proizvod** koji se primenjuje na sve TLD-ove koje drugi proizvodi ne pokrivaju.

Unesite listu TLD-ova razdvojenu zarezima (npr. `.com, .net, .org`) da biste kreirali **TLD-specifičan proizvod** koji se primenjuje samo na te ekstenzije.

**Kako funkcioniće podudaranje proizvoda:** Kada kupac pretražuje domen, dodatak će izabrati najspecifičniji odgovarajući proizvod. Proizvod sa `.com` u listi TLD-ova ima prioritet pred catch-all proizvodom. Ako se ne poklapa nijedan TLD-specifičan proizvod, koristi se catch-all. Ako ne postoje proizvodi, pretraga domena se ne prikazuje.

### Tip markupa (Markup type)

Tri načina kontrolišu kako se vaša maloprodajna cena računa od veleprodajne cene:

| Mode | Kako funkcioniše |
|---|---|
| **Percentage** (Procenat) | Dodaje procenat na vrh veleprodajne cene. 20% markupa na veleprodajni domen od $10 daje $12. |
| **Fixed markup** (Fiksni markup) | Dodaje fiksnu novčanu sumu. Markup od $5 na domenu od $10 daje $15. |
| **Fixed price** (Fiksna cena) | Potpuno ignoriše veleprodajnu cenu. Uvek naplaćuje iznos koji unesete. |

### Uvodna cena (Introductory pricing)

Omogućavanje ponude popusta na prvu godinu. Postavite odvojenu **Uvodnu cenu** (cenu za prvu godinu) pored redovne **Cene za obnavljanje** (cene za drugu i sledeću godinu). Klijent vidi obe cene tokom plaćanja, tako da zna šta ga očekuje pri obnavljanju.

### Privatnost WHOIS-a

Kontroliće se da li je ponuđena zaštita privatnosti WHOIS-a za domene registrovane putem ovog proizvoda.

| Podešavanje | Funkcija |
|---|---|
| **Onemogućeno** | Zaštita privatnosti WHOIS-a nikada nije ponuđena niti uključena. |
| **Uvek uključeno** | Zaštita privatnosti WHOIS-a se automatski aktivira pri registraciji bez ikakve naknade. |
| **Izbor kupca** | Tokom plaćanja pojavi se prosljeđivanje (checkbox). Postavite **Cenu za privatnost** da se naplaćuje po godini, ili ostavite je na $0 da ponudite besplatno. |

Za Namecheap, zaštita privatnosti WHOIS-a koristi WhoisGuard (uvek besplatno). Za OpenSRS, on koristi uslugu privatnosti OpenSRS (može imati trošak u veleprodaji).

---

## Uvoz i sinhronizacija TLD-ova

Proizvodi domena prikazuju cene po veleprodaji u realnom vremenu koje se dohvaćaju od povezanog dobavljača. Da bi ovo radilo, TLD-ovi moraju biti uvezeni.

- **Ručna sinhronizacija:** Settings › Domain Seller › Sync TLDs (po dobavljaču)
- **Automatska sinhronizacija:** Pokreće se svakodnevno putem zakazanog cron posla na svim podešenim dobavljačima.

Nakon sinhronizacije, idite na karticu Domain Settings bilo kojeg produkta domena i koristite TLD birač da vidite dostupne TLD-ove sa trenutnim cenama po veleprodaji.

---

## Automatska obnavljanje

Obnavljanje domena je vezano za status članstva kupca:

- Kada se članstvo obnavlja i domen je povezan, obnavljanje domena se automatski stavlja u red.
- Pokušaji obnavljanja koriste aktivni plaćanje kupca.
- Neuspela obnavljanja se ponovo pokušavaju sa eksponencijalnim odlaganjem (exponential backoff).
- Slanja se e-mail obaveštenja za uspešne obnavljene, neuspešne i predskoro isteku.

ID šablona e-maila za događaje životnog veka domena:

| Event | Template ID |
|---|---|
| Domen je registrovana | `domain_registered` |
| Domen je obnovljena | `domain_renewed` |
| Obnova nije uspela | `domain_renewal_failed` |
| Domen će uskoro isteći | `domain_expiring_soon` |

---

## Admin: Ručna registracija domena

Da biste domen registrovali u ime kupca bez prolaska kroz proces plaćanja (checkout):

1. Idite na **Network Admin › Ultimate Multisite › Register Domain**
2. Izaberite klijenta i unesite naziv domena
3. Popunite podatke o kontakt osobi za registraciju (ime, adresa, telefon)
4. Kliknite na **Register**

Rezervni zapis domena se kreira i povezuje sa nalogom kupca.
