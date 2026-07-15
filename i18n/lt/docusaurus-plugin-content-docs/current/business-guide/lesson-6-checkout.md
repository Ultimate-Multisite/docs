---
title: '6 pamoka: Registracijos patirtis'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# 6 pamoka: registracijos patirtis

Atsiskaitymo eiga yra vieta, kur susidomėjimas tampa pajamomis. Painus arba bendrinis registracijos procesas praranda klientus. Nišai pritaikyta eiga, kalbanti jų kalba ir atrodanti be pastangų, juos konvertuoja.

## Kur sustojome {#where-we-left-off}

FitSite turi sukonfigūruotus šablonus ir planus. Dabar kuriame registracijos ir atsiskaitymo patirtį, kuri fitneso studijų savininkus paverčia mokančiais klientais.

## Registracijos eigos supratimas {#understanding-the-registration-flow}

Ultimate Multisite atsiskaitymo formos yra visiškai pritaikomos kelių žingsnių formos. FitSite norime eigos, kuri:

1. Atrodytų tarsi sukurta fitneso verslams
2. Rinktų tik tai, ko reikia
3. Kuo greičiau nuvestų klientą į veikiančią svetainę

Visą techninę informaciją rasite [Registracijos eiga](/user-guide/configuration/the-registration-flow).

## FitSite atsiskaitymo kūrimas {#designing-the-fitsite-checkout}

Eikite į **Ultimate Multisite > Atsiskaitymo formos** ir sukurkite naują formą.

### 1 žingsnis: plano pasirinkimas {#step-1-plan-selection}

Pirmas dalykas, kurį mato fitneso studijos savininkas, turėtų būti planai, pateikti jam suprantamais terminais.

- Pridėkite **kainodaros lentelės** lauką
- Sukonfigūruokite jį rodyti visus tris FitSite planus
- Plano aprašymai, kuriuos parašėte 5 pamokoje, rodomi čia -- įsitikinkite, kad jie kalba apie fitneso verslo poreikius, o ne technines funkcijas

:::tip Nišos kalba svarbi
„1 GB saugyklos“ sporto salės savininkui nieko nereiškia. „Viskas, ko reikia profesionaliai studijos svetainei“ reiškia viską. Rašykite planų aprašymus savo kliento kalba.
:::

### 2 žingsnis: šablono pasirinkimas {#step-2-template-selection}

Pasirinkęs planą, klientas išsirenka pradinį šabloną.

- Pridėkite **šablono pasirinkimo** lauką
- Galimi šablonai filtruojami pagal pasirinktą planą (sukonfigūruota 5 pamokoje)
- Kiekvienas šablonas turėtų turėti peržiūros paveikslėlį, rodantį fitnesui pritaikytą dizainą

### 3 žingsnis: Account kūrimas {#step-3-account-creation}

Laikykite tai minimaliai. Rinkite tik:

- El. pašto adresą
- Slaptažodį
- Studijos / verslo pavadinimą (jis tampa jų svetainės pavadinimu)

Registracijos metu neprašykite informacijos, kurios jums nereikia. Kiekvienas papildomas laukas mažina konversijas.

### 4 žingsnis: svetainės nustatymas {#step-4-site-setup}

- **Svetainės pavadinimas**: iš anksto užpildykite iš studijos pavadinimo, įvesto 3 žingsnyje
- **Svetainės URL**: automatiškai sugeneruokite iš studijos pavadinimo (pvz., `ironworks.fitsite.com`)

### 5 žingsnis: mokėjimas {#step-5-payment}

- Pridėkite **mokėjimo** lauką
- Sukonfigūruokite mokėjimo šliuzą ([Stripe](/user-guide/payment-gateways/stripe) rekomenduojamas prenumeratų atsiskaitymui)
- Jei 5 pamokoje sukūrėte užsakymo papildymų, prieš mokėjimo žingsnį pridėkite **užsakymo papildymo** lauką

### 6 žingsnis: patvirtinimas {#step-6-confirmation}

- Pritaikykite patvirtinimo pranešimą naudodami fitnesui būdingą kalbą
- Pavyzdys: „Jūsų fitneso studijos svetainė kuriama. Po kelių sekundžių būsite nukreipti į savo naują svetainę.“

## Laikotarpio pasirinkimo perjungiklio pridėjimas {#adding-a-period-selection-toggle}

Jei savo planuose nustatėte kainų variantus (mėnesinį ir metinį), į atsiskaitymo formą pridėkite **laikotarpio pasirinkimo** lauką, kad klientai galėtų perjungti atsiskaitymo laikotarpius. Instrukcijas rasite [Atsiskaitymo formos](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

## Mokėjimo konfigūravimas {#configuring-payment}

Jei dar nesukonfigūravote mokėjimo šliuzo:

1. Eikite į **Ultimate Multisite > Settings > Payment Gateways**
2. Vadovaukitės [Stripe nustatymo vadovu](/user-guide/payment-gateways/stripe) arba savo pasirinkto šliuzo instrukcijomis
3. Išbandykite visą atsiskaitymo eigą su bandomuoju mokėjimu

Daugiau informacijos apie tai, kaip mokėjimai patenka į jūsų Account, rasite [Kaip gauti mokėjimus](/user-guide/payment-gateways/getting-paid).

## Eigos testavimas {#testing-the-flow}

Prieš tęsdami, atlikite pilną bandomąją registraciją:

1. Atidarykite atsiskaitymo formą inkognito / privačiame naršyklės lange
2. Pasirinkite planą
3. Pasirinkite šabloną
4. Sukurkite Account
5. Užbaikite mokėjimą (naudokite testavimo režimą)
6. Patikrinkite, ar svetainė sukurta su teisingu šablonu

Patikrinkite, ar:

- [ ] Planų aprašymai aiškūs ir pritaikyti nišai
- [ ] Šablonų peržiūros rodo fitnesui tinkamus dizainus
- [ ] Svetainės URL teisingai sugeneruojamas iš studijos pavadinimo
- [ ] Mokėjimas apdorojamas sėkmingai
- [ ] Klientas patenka į veikiančią svetainę su pasirinktu šablonu
- [ ] Patvirtinimo el. laiškai naudoja fitnesui būdingą kalbą

## FitSite tinklas iki šiol {#the-fitsite-network-so-far}

```
FitSite tinklas
├── WordPress Multisite (subdomenų režimas)
├── Ultimate Multisite (sukonfigūruota)
├── Priegloba su wildcard SSL + domenų susiejimu
├── Svetainių šablonai (Studio Essential, Gym Pro, Fitness Chain)
├── Produktai (Starter, Growth, Pro + užsakymo papildymai)
├── Atsiskaitymo eiga
│   ├── Plano pasirinkimas su nišai pritaikytais aprašymais
│   ├── Šablono pasirinkimas su fitneso peržiūromis
│   ├── Minimalus Account kūrimas
│   ├── Mokėjimas per Stripe
│   └── Fitnesui pritaikytas patvirtinimas
└── Paruošta prekės ženklui (kita pamoka)
```

## Ką sukūrėme šioje pamokoje {#what-we-built-this-lesson}

- **Kelių žingsnių atsiskaitymo formą**, pritaikytą fitneso studijų savininkams
- **Nišai pritaikytą kalbą** visoje registracijos eigoje
- **Minimalų pasipriešinimą** -- tik būtini laukai, greitas kelias į veikiančią svetainę
- **Mokėjimų integraciją** su testiniu patikrinimu
- **Ištestuotą eigą nuo pradžios iki pabaigos** nuo plano pasirinkimo iki veikiančios svetainės

---

**Toliau:** [7 pamoka: paverskite tai savu](lesson-7-branding) -- suteiksime platformai white-label išvaizdą ir įtvirtinsime FitSite kaip prekės ženklą.
