---
title: 'Lekcija 6: Iskustvo registracije'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Lekcija 6: Iskustvo prijave {#lesson-6-the-signup-experience}

Checkout tok je mjesto gdje interes postaje prihod. Zbunjujući ili generički proces prijave gubi klijente. Niche-specifičan tok koji govori njihovim jezikom i koji se čini nezahtjevan konvertira ih.

## Gdje smo stali {#where-we-left-off}

FitSite ima konfigurirane šablone i planove. Sada gradimo proces registracije i plaćanja koji vlasnike fitness studija pretvara u plaćene klijente.

## Razumijevanje toka registracije {#understanding-the-registration-flow}

Ultimate Multisite checkout forme su potpuno prilagodljive višestepene forme. Za FitSite, želimo tok koji:

1.  Izgleda kao da je napravljen za fitness biznise
2.  Sakuplja samo ono što je potrebno
3.  Klijenta dovede do funkcionalnog sajta što je moguće brže

Pogledajte [The Registration Flow](/user-guide/configuration/the-registration-flow) za potpunu tehničku referencu.

## Dizajniranje FitSite Checkout-a {#designing-the-fitsite-checkout}

Idite na **Ultimate Multisite > Checkout Forms** i kreirajte novu formu.

### Korak 1: Odabir plana {#step-1-plan-selection}

Prva stvar koju vlasnik fitness studija treba vidjeti treba biti planovi, predstavljeni terminologijom koju razumiju.

- Dodajte polje **Pricing Table**
- Konfigurišite ga da prikaže sva tri FitSite plana
- Opisi planova koje ste napisali u Lekciji 5 pojavljuju se ovdje — pazite da govore o potrebama fitness biznisa, a ne o tehničkim značajkama

:::tip Niche jezik je važan
"1 GB skladišta" ništa ne znači vlasniku teretane. "Sve što vam treba za profesionalni sajt studija" znači sve. Opise planova pišite na jeziku vašeg klijenta.
:::

### Korak 2: Odabir šablona {#step-2-template-selection}

Nakon odabira plana, klijent bira svoj početni šablon.

- Dodajte polje **Template Selection**
- Dostupni šabloni filtriraju se prema planu koji su odabrali (konfigurisano u Lekciji 5)
- Svaki šablon treba imati preglednu sliku koja prikazuje dizajn specifičan za fitness

### Korak 3: Kreiranje računa {#step-3-account-creation}

Držite ovo minimalnim. Sakupljajte samo:

- Adresa e-pošte
- Lozinka
- Ime studija/biznisa (ovo postaje ime njihovog sajta)

Nemojte tražiti informacije koje vam nisu potrebne prilikom prijave. Svako dodatno polje smanjuje konverzije.

### Korak 4: Postavljanje sajta {#step-4-site-setup}

- **Site title**: Popunite automatski iz imena studija unesenog u Koraku 3
- **Site URL**: Automatski generišite iz imena studija (npr. `ironworks.fitsite.com`)

### Korak 5: Plaćanje {#step-5-payment}

- Dodajte polje **Payment**
- Konfigurišite svoju plaćanja gateway ([Stripe](/user-guide/payment-gateways/stripe) je preporučljiv za naplatu pretplate)
- Ako ste kreirali *order bumps* u Lekciji 5, dodajte polje **Order Bump** prije koraka plaćanja

### Korak 6: Potvrda {#step-6-confirmation}

- Prilagodite poruku potvrde jezikom specifičnim za fitness
- Primjer: "Vaš sajt fitness studija se kreira. Preusmjerat ćemo vas na vaš novi sajt za nekoliko sekundi."

## Dodavanje prekida za odabir perioda {#adding-a-period-selection-toggle}

Ako ste postavili varijacije cijena u svojim planovima (mjesečno naspram godišnje), dodajte polje **Period Selection** na checkout formu kako bi klijenti mogli prebacivati između perioda naplate. Pogledajte [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) za uputstva.

## Konfigurisanje plaćanja {#configuring-payment}

Ako još niste postavili plaćanja gateway:

1. Idite na **Ultimate Multisite > Settings > Payment Gateways**
2. Pratite [Stripe setup guide](/user-guide/payment-gateways/stripe) ili vaš preferirani gateway
3. Testirajte kompletan checkout tok sa test plaćanjem

Pogledajte [Getting Paid](/user-guide/payment-gateways/getting-paid) za detalje o tome kako novac teče na vaš račun.

## Testiranje toka {#testing-the-flow}

Prije nego nastavite, obavite puni test prijave:

1. Otvorite checkout formu u incognito/privatnom pregledniku
2. Odaberite plan
3. Izaberite šablon
4. Kreirajte račun
5. Završite plaćanje (koristite testni način)
6. Provjerite da li je sajt kreiran sa ispravnim šablonom

Provjerite da:

- [ ] Opisi planova su jasni i specifični za niche
- [ ] Pregledi šablona prikazuju dizajne prikladne za fitness
- [ ] URL sajta se generiše ispravno iz imena studija
- [ ] Plaćanje uspješno prolazi
- [ ] Klijent stigne na funkcionalni sajt sa odabranim šablonom
- [ ] E-mailovi potvrde koriste jezik specifičan za fitness

## FitSite Mreža do sada {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow
│   ├── Plan selection with niche-specific descriptions
│   ├── Template selection with fitness previews
│   ├── Minimal account creation
│   ├── Payment via Stripe
│   └── Fitness-specific confirmation
└── Ready for branding (next lesson)
```

## Što smo izgradili u ovoj lekciji {#what-we-built-this-lesson}

- **Višestepena checkout forma** prilagođena vlasnicima fitness studija
- **Jezik specifičan za niche** kroz cijeli tok prijave
- **Minimalni otpor** — samo esencijalna polja, brzi put do funkcionalnog sajta
- **Integracija plaćanja** sa testnom provjerom
- **Testirani end-to-end tok** od odabira plana do funkcionalnog sajta

---

**Sljedeće:** [Lekcija 7: Da mu date svoj izgled](lesson-7-branding) — *white-label* platformu i uspostavimo FitSite kao brend.
