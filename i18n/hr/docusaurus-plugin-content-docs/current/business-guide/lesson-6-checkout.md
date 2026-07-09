---
title: 'Lekcija 6: Iskustvo registracije'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Lekcija 6: Iskustvo registracije {#lesson-6-the-signup-experience}

Tijek naplate mjesto je gdje se interes pretvara u prihod. Zbunjujući ili generički proces registracije gubi kupce. Tijek specifičan za nišu, koji govori njihovim jezikom i djeluje jednostavno, pretvara ih u kupce.

## Gdje smo stali {#where-we-left-off}

FitSite ima konfigurirane predloške i planove. Sada gradimo iskustvo registracije i naplate koje vlasnike fitness studija pretvara u kupce koji plaćaju.

## Razumijevanje tijeka registracije {#understanding-the-registration-flow}

Obrasci za naplatu u Ultimate Multisite potpuno su prilagodljivi obrasci s više koraka. Za FitSite želimo tijek koji:

1. Djeluje kao da je izrađen za fitness tvrtke
2. Prikuplja samo ono što je potrebno
3. Dovodi kupca do funkcionalnog web-mjesta što je brže moguće

Pogledajte [Tijek registracije](/user-guide/configuration/the-registration-flow) za potpunu tehničku referencu.

## Dizajniranje FitSite naplate {#designing-the-fitsite-checkout}

Idite na **Ultimate Multisite > Obrasci za naplatu** i izradite novi obrazac.

### Korak 1: Odabir plana {#step-1-plan-selection}

Prvo što vlasnik fitness studija treba vidjeti su planovi, predstavljeni pojmovima koje razumije.

- Dodajte polje **Tablica cijena**
- Konfigurirajte ga tako da prikazuje sva tri FitSite plana
- Opisi planova koje ste napisali u Lekciji 5 pojavljuju se ovdje -- pobrinite se da govore o potrebama fitness poslovanja, a ne o tehničkim značajkama

:::tip Jezik niše je važan
"1 GB prostora za pohranu" vlasniku teretane ne znači ništa. "Sve što vam treba za profesionalnu web-stranicu studija" znači sve. Pišite opise planova jezikom svojih kupaca.
:::

### Korak 2: Odabir predloška {#step-2-template-selection}

Nakon odabira plana, kupac bira početni predložak.

- Dodajte polje **Odabir predloška**
- Dostupni predlošci filtriraju se prema planu koji su odabrali (konfigurirano u Lekciji 5)
- Svaki predložak treba imati sliku pregleda koja prikazuje dizajn specifičan za fitness

### Korak 3: Stvaranje Account {#step-3-account-creation}

Neka ovo bude minimalno. Prikupite samo:

- Adresu e-pošte
- Lozinku
- Naziv studija/tvrtke (to postaje naziv njihova web-mjesta)

Ne tražite informacije koje vam nisu potrebne pri registraciji. Svako dodatno polje smanjuje konverzije.

### Korak 4: Postavljanje web-mjesta {#step-4-site-setup}

- **Naslov web-mjesta**: Unaprijed ispunite nazivom studija unesenim u Koraku 3
- **URL web-mjesta**: Automatski generirajte iz naziva studija (npr. `ironworks.fitsite.com`)

### Korak 5: Plaćanje {#step-5-payment}

- Dodajte polje **Plaćanje**
- Konfigurirajte svoj pristupnik za plaćanje ([Stripe](/user-guide/payment-gateways/stripe) preporučuje se za naplatu pretplata)
- Ako ste izradili dodatne ponude uz narudžbu u Lekciji 5, dodajte polje **Dodatna ponuda uz narudžbu** prije koraka plaćanja

### Korak 6: Potvrda {#step-6-confirmation}

- Prilagodite poruku potvrde jezikom specifičnim za fitness
- Primjer: "Vaša web-stranica fitness studija se izrađuje. Bit ćete preusmjereni na svoje novo web-mjesto za nekoliko sekundi."

## Dodavanje preklopnika za odabir razdoblja {#adding-a-period-selection-toggle}

Ako ste postavili varijacije cijena u svojim planovima (mjesečno naspram godišnje), dodajte polje **Odabir razdoblja** u obrazac za naplatu kako bi kupci mogli prebacivati između razdoblja naplate. Pogledajte [Obrasci za naplatu](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) za upute.

## Konfiguriranje plaćanja {#configuring-payment}

Ako još niste postavili pristupnik za plaćanje:

1. Idite na **Ultimate Multisite > Postavke > Pristupnici za plaćanje**
2. Slijedite [vodič za postavljanje Stripe](/user-guide/payment-gateways/stripe) ili svoj željeni pristupnik
3. Testirajte potpuni tijek naplate s testnim plaćanjem

Pogledajte [Primanje uplata](/user-guide/payment-gateways/getting-paid) za pojedinosti o tome kako uplate dolaze na vaš račun.

## Testiranje tijeka {#testing-the-flow}

Prije nego nastavite, dovršite potpunu testnu registraciju:

1. Otvorite obrazac za naplatu u anonimnom/privatnom prozoru preglednika
2. Odaberite plan
3. Odaberite predložak
4. Izradite Account
5. Dovršite plaćanje (upotrijebite testni način rada)
6. Provjerite je li web-mjesto izrađeno s ispravnim predloškom

Provjerite da:

- [ ] Opisi planova su jasni i specifični za nišu
- [ ] Pregledi predložaka prikazuju dizajne prikladne za fitness
- [ ] URL web-mjesta ispravno se generira iz naziva studija
- [ ] Plaćanje se uspješno obrađuje
- [ ] Kupac dolazi na funkcionalno web-mjesto s odabranim predloškom
- [ ] E-poruke potvrde koriste jezik specifičan za fitness

## FitSite mreža do sada {#the-fitsite-network-so-far}

```
FitSite mreža
├── WordPress Multisite (način rada s poddomenama)
├── Ultimate Multisite (konfigurirano)
├── Hosting s wildcard SSL + mapiranje domene
├── Predlošci web-mjesta (Studio Essential, Gym Pro, Fitness Chain)
├── Proizvodi (Starter, Growth, Pro + dodatne ponude uz narudžbu)
├── Tijek naplate
│   ├── Odabir plana s opisima specifičnim za nišu
│   ├── Odabir predloška s fitness pregledima
│   ├── Minimalno stvaranje Account
│   ├── Plaćanje putem Stripe
│   └── Potvrda specifična za fitness
└── Spremno za brendiranje (sljedeća lekcija)
```

## Što smo izgradili u ovoj lekciji {#what-we-built-this-lesson}

- **Obrazac za naplatu s više koraka** prilagođen vlasnicima fitness studija
- **Jezik specifičan za nišu** kroz cijeli tijek registracije
- **Minimalno trenje** -- samo osnovna polja, brz put do funkcionalnog web-mjesta
- **Integracija plaćanja** s testnom provjerom
- **Testiran tijek od početka do kraja** od odabira plana do funkcionalnog web-mjesta

---

**Sljedeće:** [Lekcija 7: Učinite ga svojim](lesson-7-branding) -- platformu prilagođavamo kao white-label rješenje i uspostavljamo FitSite kao brend.
