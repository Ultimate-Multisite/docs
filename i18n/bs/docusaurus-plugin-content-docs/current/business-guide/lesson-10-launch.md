---
title: 'Lekcija 10: Dan lansiranja'
sidebar_position: 11
_i18n_hash: 49ba467b8efba57e92cf072bcec53969
---
# Lekcija 10: Dan lansiranja

Sve je napravljeno. Prije nego što otvorite vrata, ova lekcija vodi kroz listu provjera prije lansiranja kako bismo bili sigurni da ništa nije pokvareno, nedostaje ili je neugodno.

## Gdje smo stali

FitSite ima predloške, planove, checkout, branding, onboarding i određivanje cijena sve konfigurirano. Sada provjeravamo da li sve radi i idemo u rad.

## Lista provjera prije lansiranja

Prođite kroz svaki stavku. Ne preskočite ništa.

### Infrastruktura platforme

- [ ] Hosting je stabilan i dobro radi pod opterećenjem
- [ ] Wildcard SSL je aktivan i svi poddomeni se serviraju preko HTTPS-a
- [ ] Mapiranje domena radi – testirajte kreiranje sajta i mapiranje prilagođenog domena
- [ ] Backup-i su konfigurirani i testirani (restore barem jedan radi provjere)
- [ ] Monitoring je na mjestu – znati ćete ako platforma padne

### Predlošci (Templates)

- [ ] Sve tri predloška se ispravno učitavaju na novim sajtovima
- [ ] Placeholder sadržaj je koristan i bez pravopisnih grešaka
- [ ] Sve slike su pravilno licencirane (bez vodotonih znakova sa stock fotografija)
- [ ] Mobilna prilagodljivost radi na svakoj stranici predloška
- [ ] Brzina učitavanja stranice je prihvatljiva (testirajte alatima poput GTmetrix ili PageSpeed Insights)
- [ ] Nema pokvarenih linkova ili nedostajućih resursa na bilo kojem predlošku

### Planovi i proizvodi

- [ ] Svi tri plana su aktivni i vidljivi
- [ ] Opisi planova su točni i specifični za nišu
- [ ] Cijena je ispravna (mjesečno i godišnje)
- [ ] Naknade za postavljanje su konfigurirane na pravim planovima
- [ ] Period probnog korištenja radi na Starter planu
- [ ] Dodatne stavke (Order bumps) se pojavljuju ispravno tokom checkouta
- [ ] Ograničenja plugin-a i teme su pravilno nametnuta po planu

### Tok checkouta (Checkout Flow)

- [ ] Obavite pun test registracije na svakom planu (koristite test način plaćanja)
- [ ] Odabir predloška prikazuje ispravne predloške po planu
- [ ] Plaćanje se uspješno obrađuje
- [ ] Kupac prima e-mail s pozdravom nakon registracije
- [ ] Kreira se novi sajt s ispravnim predloškom
- [ ] Kupac može odmah ući na svoj novi sajt
- [ ] Popusti se ispravno obrađuju

### Branding

- [ ] Stranica za prijavu prikazuje FitSite branding
- [ ] Admin dashboard prikazuje FitSite branding
- [ ] Svi sistemski e-mailovi koriste FitSite branding i jezik specifičan za fitness
- [ ] Fakture se ispravno prikazuju sa vašim poslovnim detaljima
- [ ] Marketing sajt je aktivan i linkuje na formular za checkout

### Onboarding

- [ ] Widget "Quick Start" se pojavljuje na dashboardu novih kupaca
- [ ] Sve Quick Start veze vode na ispravne stranice
- [ ] Sekvenca e-maila s pozdravom je konfigurirana i testirana
- [ ] Članci u bazi znanja su objavljeni i dostupni
- [ ] Stranica računa prikazuje ispravne informacije o planu i opcije nadogradnje

### Pravno i poslovanje

- [ ] Uslovi korištenja su objavljeni i linkovani sa checkouta
- [ ] Politika privatnosti je objavljena i dostupna
- [ ] Politika povrata novca je definirana i dokumentovana
- [ ] Poslovna entiteta je postavljena za primanje plaćanja
- [ ] Payment gateway je u live modu (ne u test modu)
- [ ] Konfiguracija poreza je ispravna za vašu jurisdikciju

## Soft Launch vs. Hard Launch

Razmislite o lansiranju u dvije faze:

### Faza 1: Soft Launch

Pozovite 5-10 vlasnika fitness studija da se registruju prije javnog lansiranja. To su vaši beta kupci. Ponudite im značajan popust (50% doživotno, ili 3 mjeseca besplatno) u zamjenu za:

- Iskreno mišljenje o iskustvu registracije i onboardinga
- Dopuštenje da koriste njihov sajt kao primjer za pokazivanje
- Izvještavanje o bilo kojim greškama ili problemima koje naiđu

Ovo vam daje stvarni povratak kupaca i live sajtove za pokazivanje prije nego što se otvorite javnosti.

### Faza 2: Public Launch

Nakon što je povratak iz soft launcha ugrađen:

- Prebacite payment gateway na live mod
- Objavite svoj marketing sajt
- Počnite s akvizicijom kupaca (Lekcija 11)
- Obavijestite na relevantnim kanalima fitness industrije

## Akcije dana lansiranja

Dan kada idete u javnost:

1. **Prebacite na live plaćanja** – onemogućite test mod na vašem payment gatewayu
2. **Provjerite još jednom** – obavite pun test registracije s pravim plaćanjem (refundirajte sebi poslije)
3. **Pratite pažljivo** – pazite na greške, neuspješne registracije ili probleme s plaćanjem
4. **Budite dostupni** – vaši prvi pravi kupci možda će vam trebati pomoć, a brzi odgovor gradi povjerenje
5. **Proslavite kratko** – a zatim se vratite poslu

## Što može ići po zlu

Budite spremni za:

- **Probleme s payment gatewayom**: Imate li spreman kontakt podrške vašeg provajdera gatewaya
- **Probleme s SSL certifikatima**: Znate kako provjeriti i obnoviti certifikate
- **Poračunavanje e-mailova**: Testirajte da li e-mailovi zaista dolaze (provjerite spam mape)
- **Performanse pod opterećenjem**: Ako dođe do skoka prometa, znate kako skalirati hosting
- **Konfuziju kupaca**: Imate li spremnu bazu znanja i kanale podrške

## FitSite Network do sada

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

## Što smo napravili u ovoj lekciji

- **Sveobuhvatna lista provjera prije lansiranja** koja pokriva infrastrukturu, sadržaj, plaćanja i pravne stvari
- **Strategija soft launcha** kako biste dobili stvarni povratak prije javnosti
- **Postupci dana lansiranja** za ulazak u rad s samopouzdanjem
- **Plan za nepredviđene okolnosti** za uobičajene probleme dana lansiranja

---

**Sljedeće:** [Lekcija 11: Pronalaženje kupaca](lesson-11-customers) — sada kada je FitSite aktivan, kako ćete dovesti vlasnike fitness studija da se registriraju?
