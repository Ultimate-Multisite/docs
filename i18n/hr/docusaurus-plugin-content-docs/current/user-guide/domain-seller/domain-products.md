---
title: Domenni proizvodi i cijene
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Domeni i cjenovno određivanje {#domain-products-and-pricing}

Domenni proizvodi su način na koji kontrolirate cijene, TLD-ove (top-level domen), privatnost WHOIS-a i odabir pružatelja usluga. Svaki domen proizvod je standardni Ultimate Multisite proizvod s dodatnom karticom **Domain Settings**.

## Kreiranje domena proizvoda {#creating-a-domain-product}

1. Idite na **Network Admin › Ultimate Multisite › Products**
2. Kliknite na **Add New** (Dodaj novi)
3. Postavite tip proizvoda na **Domain** (Domen)
4. Konfigurišajte karticu **Domain Settings** (Postavke domena) (pogledajte ispod)
5. Sačuvajte

Domenni proizvodi se pojavljuju s ljubičastom oznakom **Domain** u listi proizvoda i mogu se filtrirati pomoću kartice **Domain Products**.

## Kartica Domain settings {#domain-settings-tab}

### Pružatelj usluga (Provider) {#provider}

Odaberite koji registrator će obavljati registraciju za ovaj proizvod. Podrazumevano je globalni **Default provider** (Podrazumevani pružatelj) postavljen u podešavanjima Domain Seller.

### Podržani TLD-ovi (Supported TLDs) {#supported-tlds}

Ostavite prazno da biste kreirali **catch-all product** (proizvod koji pokriva sve) koji se primjenjuje na sve TLD-ove koje ne pokrije drugi proizvod.

Unesite listu TLD-ova razdvojenu zarezima (npr. `.com, .net, .org`) da biste kreirali **TLD-specific product** (proizvod specifičan za TLD) koji se primjenjuje samo na te ekstenzije.

**Kako radi podudaranje proizvoda:** Kada kupac pretražuje domen, dodatak odabere najspecifičniji odgovarajući proizvod. Proizvod s `.com` u listi TLD-ova ima prioritet nad catch-all proizvodom. Ako se ne poklapa nijedan TLD-specific proizvod, koristi se catch-all. Ako ne postoje proizvodi, pretraga domena se ne prikazuje.

### Tip markupa (Markup type) {#markup-type}

Tri načina kontroliraju kako se vaš maloprodajni cijena računa od veleprodajne cijene:

| Mode | Kako radi |
|---|---|
| **Percentage** (Procentualno) | Dodaje postotak na veleprodajnu cijenu. 20% markupa na veleprodajnom domenu od $10 daje $12. |
| **Fixed markup** (Fiksni markup) | Dodaje fiksni iznos u dolarima. Markup od $5 na domenu od $10 daje $15. |
| **Fixed price** (Fiksna cijena) | Potpuno ignorira veleprodajnu cijenu. Uvijek naplaćuje iznos koji unesete. |

### Uvodne cijene (Introductory pricing) {#introductory-pricing}

Omogućite ponudu s popustom cijene za prvu godinu. Postavite zasebno **Uvodno cijenu** (cijenę za prvu godinu) pored uobičajene **Cijene obnove** (cijene za 2. godinu i više). Klijent vidi obje cijene tijekom procesa kupnje kako bi znao što ga čeka prilikom obnove.

### Privatnost WHOIS-a {#whois-privacy}

Kontrolira se je li ponuđena zaštita privatnosti WHOIS-a za domene registrirane putem ovog proizvoda.

| Postavka | Ovdje se događa |
|---|---|
| **Onemogućeno** | Zaštita privatnosti WHOIS-a nikada nije ponuđena niti omogućena. |
| **Uvijek uključeno** | Zaštita privatnosti WHOIS-a je automatski uključena pri registraciji bez ikakve naplate. |
| **Izbor klijenta** | Pri kupnji se pojavljuje polje za odabir. Postavite **Cijenu privatnosti** da se naplaćuje po godini, ili ostavite je na $0 kako biste ponudili besplatno. |

Za Namecheap, zaštita privatnosti WHOIS-a koristi WhoisGuard (uvijek besplatno). Za OpenSRS, koristi uslugu privatnosti OpenSRS (može imati trošak u veleprodaji).

---

## Uvoz i sinhronizacija TLD-ova {#tld-import-and-sync}

Proizvodi domena prikazuju cijene po veleprodaji u stvarnom vremenu koje se dohvaćaju iz povezanog pružatelja usluga. Da bi ovo funkcioniralo, moraju se uvesti TLD-ovi.

- **Ručna sinhronizacija:** Postavke › Domain Seller › Sync TLDs (po pružatelju usluga)
- **Automatska sinhronizacija:** Pokreće se svakog dana putem raspoređenog cron zadatka na svim podešenim pružateljima usluga.

Nakon sinhronizacije, u bilo kojem tabu Postavke domena proizvoda možete koristiti odabir TLD-a kako biste vidjeli dostupne TLD-ove s njihovim trenutnim cijenama po veleprodaji.

---

## Automatska obnova {#auto-renewal}

Obnove domena su vezane za status članstva klijenta:

- Kada se članstvo obnove i domen bude povezan, obnova domena se automatski stavlja u red.
- Pokušaji obnove koriste aktivni platni gateway klijenta.
- Neuspješne obnove se automatski ponovo pokušavaju s eksponencijalnim odlaganjem (exponential backoff).
- Slanje e-mail obavijesti za uspješne obnove, neuspjehe i nadolazeće isteku roka.

ID šablona e-maila za događaje životnog ciklusa domena:

| Event | Template ID |
|---|---|
| Domen je registriran | `domain_registered` |
| Domen je obnovljen | `domain_renewed` |
| Obnova nije uspela | `domain_renewal_failed` |
| Domen će uskoro isteći | `domain_expiring_soon` |

---

## Admin: Ručna registracija domena {#admin-manual-domain-registration}

Da biste registrirali domen u ime klijenta bez prolaska kroz proces plaćanja (checkout):

1. Idite na **Network Admin › Ultimate Multisite › Register Domain**
2. Odaberite klijenta i unesite naziv domena
3. Popunite kontakt podatke za registraciju (ime, adresa, telefon)
4. Kliknite na **Register** (Registriraj)

Zapis domena se kreira i povezuje s računom klijenta.
