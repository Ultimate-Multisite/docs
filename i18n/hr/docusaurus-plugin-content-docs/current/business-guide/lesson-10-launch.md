---
title: 'Lekcija 10: Dan lansiranja'
sidebar_position: 11
_i18n_hash: 49ba467b8efba57e92cf072bcec53969
---
# Lekcija 10: Dan lansiranja

Sve je izgrađeno. Prije nego što otvorite vrata, ova lekcija prolazi kroz kontrolni popis prije lansiranja kako biste bili sigurni da ništa nije pokvareno, nedostaje ili neugodno.

## Gdje smo stali

FitSite ima predloške, planove, naplatu, brendiranje, uvođenje korisnika i cijene potpuno konfigurirane. Sada provjeravamo radi li sve i krećemo uživo.

## Kontrolni popis prije lansiranja

Prođite kroz svaku stavku. Nemojte preskočiti nijednu.

### Infrastruktura platforme

- [ ] Hosting je stabilan i dobro radi pod opterećenjem
- [ ] Wildcard SSL je aktivan i sve poddomene poslužuju se preko HTTPS-a
- [ ] Mapiranje domena radi -- testirajte izradu web-stranice i mapiranje prilagođene domene
- [ ] Sigurnosne kopije su konfigurirane i testirane (vratite barem jednu kako biste provjerili)
- [ ] Nadzor je postavljen -- znat ćete ako platforma prestane raditi

### Predlošci

- [ ] Sva tri predloška ispravno se učitavaju na novim web-stranicama
- [ ] Zamjenski sadržaj je koristan i bez tipfelera
- [ ] Sve slike imaju odgovarajuće licence (bez vodenih žigova stock fotografija)
- [ ] Mobilna responzivnost radi na svakoj stranici predloška
- [ ] Brzina učitavanja stranice je prihvatljiva (testirajte alatom poput GTmetrix ili PageSpeed Insights)
- [ ] Nema neispravnih poveznica ili nedostajućih resursa ni na jednom predlošku

### Planovi i proizvodi

- [ ] Sva tri plana su aktivna i vidljiva
- [ ] Opisi planova su točni i specifični za nišu
- [ ] Cijene su ispravne (mjesečne i godišnje)
- [ ] Naknade za postavljanje konfigurirane su na pravim planovima
- [ ] Probno razdoblje radi na Starter planu
- [ ] Dodatne ponude uz narudžbu ispravno se prikazuju tijekom naplate
- [ ] Ograničenja pluginova i tema ispravno se primjenjuju po planu

### Tijek naplate

- [ ] Dovršite potpunu testnu prijavu na svakom planu (koristite testni način plaćanja)
- [ ] Odabir predloška prikazuje ispravne predloške po planu
- [ ] Plaćanje se uspješno obrađuje
- [ ] Kupac prima e-poruku dobrodošlice nakon prijave
- [ ] Nova web-stranica izrađuje se s ispravnim predloškom
- [ ] Kupac se može odmah prijaviti na svoju novu web-stranicu
- [ ] Kodovi za popust rade ispravno

### Brendiranje

- [ ] Stranica za prijavu prikazuje FitSite brendiranje
- [ ] Admin dashboard prikazuje FitSite brendiranje
- [ ] Sve sistemske e-poruke koriste FitSite brendiranje i jezik specifičan za fitness
- [ ] Računi se ispravno prikazuju s podacima o vašem poslovanju
- [ ] Marketinška web-stranica je uživo i vodi na obrazac za naplatu

### Uvođenje korisnika

- [ ] Widget za brzi početak pojavljuje se na dashboardima novih kupaca
- [ ] Sve poveznice za brzi početak vode na ispravne stranice
- [ ] Slijed e-poruka dobrodošlice konfiguriran je i testiran
- [ ] Članci baze znanja objavljeni su i dostupni
- [ ] Account stranica prikazuje ispravne informacije o planu i opcije nadogradnje

### Pravno i poslovno

- [ ] Uvjeti korištenja objavljeni su i povezani s naplate
- [ ] Pravila privatnosti objavljena su i dostupna
- [ ] Politika povrata definirana je i dokumentirana
- [ ] Poslovni subjekt postavljen je za primanje plaćanja
- [ ] Payment gateway je u live načinu rada (ne u testnom načinu)
- [ ] Porezna konfiguracija ispravna je za vašu nadležnost

## Probno lansiranje naspram potpunog lansiranja

Razmotrite lansiranje u dvije faze:

### Faza 1: Probno lansiranje

Pozovite 5-10 vlasnika fitness studija da se prijave prije javnog lansiranja. To su vaši beta kupci. Ponudite im značajan popust (50% popusta doživotno ili 3 mjeseca besplatno) u zamjenu za:

- Iskrene povratne informacije o iskustvu prijave i uvođenja
- Dopuštenje da njihovu web-stranicu koristite kao ogledni primjer
- Prijavljivanje bilo kakvih bugova ili problema na koje naiđu

To vam daje stvarne povratne informacije kupaca i žive web-stranice koje možete pokazati prije nego što se otvorite javnosti.

### Faza 2: Javno lansiranje

Nakon što uključite povratne informacije iz probnog lansiranja:

- Prebacite payment gateway u live način rada
- Objavite svoju marketinšku web-stranicu
- Počnite s privlačenjem kupaca (Lekcija 11)
- Objavite na relevantnim kanalima fitness industrije

## Radnje na dan lansiranja

Na dan kada izlazite u javnost:

1. **Prebacite na stvarna plaćanja** -- onemogućite testni način rada na svom payment gatewayu
2. **Provjerite još jednom** -- napravite potpunu testnu prijavu sa stvarnim plaćanjem (nakon toga si vratite novac)
3. **Pažljivo nadzirite** -- pratite pogreške, neuspjele prijave ili probleme s plaćanjem
4. **Budite dostupni** -- vašim prvim stvarnim kupcima možda će trebati pomoć, a brz odgovor gradi povjerenje
5. **Kratko proslavite** -- zatim se vratite na posao

## Što može poći po zlu

Budite spremni na:

- **Probleme s payment gatewayom**: Imajte spreman kontakt podrške svog pružatelja gatewaya
- **Probleme sa SSL certifikatom**: Znajte kako provjeriti i obnoviti certifikate
- **Neuspješnu dostavu e-pošte**: Testirajte stižu li e-poruke zaista (provjerite mape neželjene pošte)
- **Performanse pod opterećenjem**: Ako dobijete nagli porast prometa, znajte kako skalirati svoj hosting
- **Zbunjenost kupaca**: Pripremite bazu znanja i kanale podrške

## FitSite mreža do sada

```
FitSite Network
├── WordPress Multisite (subdomain mode) ✓
├── Ultimate Multisite (configured + branded) ✓
├── Platform Domain (fitsite.com + wildcard SSL) ✓
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain) ✓
├── Products (Starter, Growth, Pro + Order Bumps + Discounts) ✓
├── Checkout Flow (tested end-to-end) ✓
├── Branding (complete) ✓
├── Customer Onboarding (Quick Start, emails, help resources) ✓
├── Pricing Strategy (annual, trials, setup fees, discounts) ✓
├── Pre-Launch Checklist (verified) ✓
├── Soft Launch (beta customers onboarded) ✓
└── LIVE ✓
```

## Što smo izgradili u ovoj lekciji

- **Sveobuhvatan kontrolni popis prije lansiranja** koji pokriva infrastrukturu, sadržaj, plaćanja i pravne aspekte
- **Strategiju probnog lansiranja** za dobivanje stvarnih povratnih informacija prije javnog izlaska
- **Postupke za dan lansiranja** kako biste krenuli uživo s povjerenjem
- **Plan za nepredviđene situacije** za uobičajene probleme na dan lansiranja

---

**Sljedeće:** [Lekcija 11: Pronalaženje kupaca](lesson-11-customers) -- sada kada je FitSite uživo, kako navesti vlasnike fitness studija da se prijave?
