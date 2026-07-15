---
title: 'Lekcija 9: Određivanje cijena za profit'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# Lekcija 9: Određivanje cijena za profit

U Lekciji 5 postavili smo početne cijene za FitSite planove. Sada dorađujemo strategiju cijena tehnikama koje povećavaju prihod, potiču nadogradnje i smanjuju odljeve korisnika.

## Gdje smo stali {#where-we-left-off}

FitSite ima postavljene planove, predloške, naplatu, brendiranje i uvođenje korisnika. Početne cijene bile su $49/$99/$199 mjesečno. Sada ćemo učiniti da te cijene rade više.

## Načela određivanja cijena za nišne platforme {#pricing-principles-for-niche-platforms}

### Odredite cijenu prema vrijednosti, a ne trošku {#price-on-value-not-cost}

Vaši troškovi hostinga mogu biti $5-$15 po korisničkom web-mjestu. To ne znači da bi vaša cijena trebala biti $20. Ne prodajete hosting. Prodajete:

- Profesionalnu fitness web-stranicu čija bi prilagođena izrada koštala $2,000-$5,000
- Kontinuirano održavanje, ažuriranja i sigurnost o kojima ne moraju razmišljati
- Značajke specifične za nišu koje generički alati za izradu ne nude
- Vjerodostojnost platforme izrađene za njihovu industriju

Odredite cijenu na temelju vrijednosti koju isporučujete, a ne troška njezine isporuke.

### Usporedite s alternativama {#anchor-to-alternatives}

Kada vlasnik fitness studija procjenjuje FitSite, uspoređuje ga s:

- **Angažiranjem web developera**: $2,000-$5,000 unaprijed + $50-$100/mjesečno za održavanje
- **Wix/Squarespace**: $16-$45/mjesečno, ali bez značajki specifičnih za fitness; sami ga izrađuju
- **Ne poduzimanjem ničega**: Izgubljeni članovi koji ih ne mogu pronaći na internetu

Uz $49-$199/mjesečno, FitSite je jeftiniji od developera, sposobniji od generičkih alata za izradu i beskonačno bolji od nepostojanja web-stranice.

## Implementacija varijacija cijena {#implementing-price-variations}

Godišnje cijene potiču obvezu i smanjuju odljev korisnika. Idite na karticu **Varijacije cijena** svakog plana i dodajte godišnje opcije:

| Plan | Mjesečno | Godišnje (mjesečno) | Godišnji ukupni iznos | Ušteda |
|------|---------|-------------------|--------------|---------|
| Starter | $49/mj. | $39/mj. | $468/god. | 20% popusta |
| Growth | $99/mj. | $79/mj. | $948/god. | 20% popusta |
| Pro | $199/mj. | $159/mj. | $1,908/god. | 20% popusta |

Dodajte polje **Odabir razdoblja** u svoj obrazac za naplatu kako bi korisnici mogli prebacivati između mjesečne i godišnje naplate. Pogledajte [Obrasci za naplatu](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

### Zašto godišnje cijene funkcioniraju {#why-annual-pricing-works}

- **Za vas**: Novac unaprijed, manji odljev (korisnici koji plaćaju godišnje manje su skloni otkazati usred razdoblja)
- **Za njih**: Stvarne uštede, predvidljivost budžeta

## Naknade za postavljanje {#setup-fees}

Razmislite o jednokratnoj naknadi za postavljanje za planove koji uključuju praktičnu konfiguraciju:

- **Starter**: Bez naknade za postavljanje (uklonite prepreke za ulazak)
- **Growth**: Naknada za postavljanje od $99 (pokriva konfiguraciju prilagođene domene i početne konzultacije)
- **Pro**: Naknada za postavljanje od $299 (pokriva postavljanje više lokacija i poziv za uvođenje korisnika)

Konfigurirajte naknade za postavljanje u odjeljku cijena svakog plana. Za detalje pogledajte [Izrada vašeg prvog pretplatničkog proizvoda](/user-guide/configuration/creating-your-first-subscription-product).

## Probna razdoblja {#trial-periods}

Ponuda probnog razdoblja smanjuje trenje pri prijavi, ali uvodi rizik od nekonverzije. Za FitSite:

- **7-dnevno besplatno probno razdoblje** samo na Starter planu
- Bez probnog razdoblja na Growth i Pro (ti su korisnici predaniji i očekuju plaćanje)

Konfigurirajte probno razdoblje u odjeljku cijena Starter plana omogućavanjem preklopke **Ponudi probno razdoblje** i postavljanjem trajanja na 7 dana.

### Kako postići da se probna razdoblja pretvore u kupce {#making-trials-convert}

Probno razdoblje funkcionira samo ako korisnik doživi vrijednost tijekom probnog razdoblja. Vaša sekvenca uvođenja korisnika (Lekcija 8) ovdje je ključna -- e-poruke dobrodošlice trebale bi biti vremenski usklađene kako bi potaknule angažman unutar 7-dnevnog prozora.

## Kodovi za popust {#discount-codes}

Izradite strateške kodove za popust za određene svrhe:

- **FITLAUNCH** -- 30% popusta za prva 3 mjeseca (za promociju lansiranja)
- **ANNUAL20** -- 20% popusta na godišnje planove (ako već nisu sniženi)
- **REFERRAL** -- 1 mjesec besplatno (za preporuke korisnika)

Idite na **Ultimate Multisite > Kodovi za popust** kako biste ih izradili. Pogledajte [Izrada kodova za popust](/user-guide/configuration/creating-discount-codes) za potpuni vodič.

:::tip Nemojte zadano davati popuste
Popusti bi trebali biti strateški alati, a ne trajne stavke. Ako svi dobiju popust, to nije popust -- to je vaša stvarna cijena. Koristite ih za određene kampanje, preporuke i vremenski ograničene promocije.
:::

## Obrada poreza {#tax-handling}

Ako poslujete u jurisdikciji koja zahtijeva naplatu poreza:

1. Konfigurirajte porezne stope u **Ultimate Multisite > Postavke > Porezi**
2. Primijenite porezne kategorije na svoje planove
3. Osigurajte da računi ispravno prikazuju porez

Pogledajte [Obrada poreza](/user-guide/payment-gateways/tax-handling) za detaljnu konfiguraciju. Ako poslujete s korisnicima međunarodno, razmotrite [VAT dodatak](/addons/vat) za usklađenost u EU-u.

## Pregled vaših cijena {#reviewing-your-pricing}

Nakon lansiranja, ponovno pregledajte cijene svaka tri mjeseca. Pogledajte:

- **Stopu konverzije po planu**: Ako se Starter dobro konvertira, ali Growth ne, razmak između njih možda je prevelik
- **Stopu nadogradnje**: Ako malo korisnika nadograđuje sa Starter na Growth, Growth plan možda ne nudi dovoljno dodatne vrijednosti
- **Odljev po planu**: Ako godišnji korisnici manje odlaze, snažnije gurajte godišnje cijene
- **Cijene konkurencije**: Koliko naplaćuju alternative? Jeste li ispravno pozicionirani?

## FitSite mreža dosad {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo or $468/yr) + 7-day trial
│   ├── FitSite Growth ($99/mo or $948/yr) + $99 setup fee
│   ├── FitSite Pro ($199/mo or $1,908/yr) + $299 setup fee
│   └── Order Bumps + Discount Codes
├── Checkout Flow (with period selection toggle)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding (Quick Start, emails, help resources)
├── Pricing Strategy
│   ├── Annual discounts (20% off)
│   ├── Strategic setup fees
│   ├── 7-day trial on Starter
│   ├── Discount codes for campaigns and referrals
│   └── Tax configuration
└── Ready for launch (next lesson)
```

## Što smo izgradili u ovoj lekciji {#what-we-built-this-lesson}

- **Godišnje cijene** s popustom od 20% za poticanje obveze
- **Naknade za postavljanje** na višim razinama za pokrivanje truda oko uvođenja
- **Probno razdoblje** na početnom planu za smanjenje prepreka pri registraciji
- **Strateški kodovi za popust** za lansiranje, preporuke i kampanje
- **Konfiguracija poreza** za usklađenu naplatu
- **Okvir za pregled cijena** za kontinuiranu optimizaciju

---

**Sljedeće:** [Lekcija 10: Dan lansiranja](lesson-10-launch) -- kontrolni popis prije lansiranja i objava uživo.
