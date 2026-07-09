---
title: '4. õppetund: Nišimallide loomine'
sidebar_position: 5
_i18n_hash: 3ade990de5fd404a7f09a9d42d7535ee
---
# Õppetund 4: Nišimallide loomine

Mallid on sinu nišiväärtuspakkumise tuum. Fitness-stuudio omanik, kes registreerub ja näeb saiti, mis näeb juba välja nagu fitnessi veebisait -- koos treeningtundide ajakavade, treeneriprofiilide ja sobivate piltidega -- jääb palju tõenäolisemalt kasutajaks kui see, kes näeb tühja lõuendit.

## Kuhu pooleli jäime

Meil on töötav FitSite’i võrgustik, kuhu Ultimate Multisite on paigaldatud ja seadistatud. Nüüd loome mallid, mis panevad FitSite’i tunduma spetsiaalselt fitness-ettevõtetele looduna.

## Miks nišimallid on olulised

Üldised mallid sunnivad sinu kliente tegema raske töö: välja mõtlema, milliseid lehti neil vaja on, milline sisustruktuur toimib ja kuidas see nende valdkonna jaoks õige välja näeks. Nišimallid eemaldavad selle hõõrdumise.

Fitness-stuudio omanik, kes FitSite’i registreerub, peaks nägema:

- Avalehte, mis näeb välja nagu fitness-stuudio veebisait
- Lehed tundide, ajakavade, treenerite ja hinnastuse jaoks on juba loodud
- Pildid ja kohatäitesisu, mis sobivad nende valdkonnaga
- Kujundust, mis tundub fitnessi jaoks professionaalne ja brändiga kooskõlas

Nad täidavad oma andmed. Nad ei alusta nullist.

## Mallide planeerimine

Enne loomist otsusta, milliseid malle pakkuda. FitSite’i jaoks loome kolm:

### Mall 1: Studio Essential

Väikestele stuudiotele ja personaaltreeneritele.

- **Avaleht** kangelaspildi, tundide esiletõstmise ja üleskutsega
- **Meist** leht stuudio loo ja missiooniga
- **Tunnid** leht ajakava paigutusega
- **Treenerid** leht profiilikaartidega
- **Kontakt** leht asukohakaardi ja vormiga
- **Puhas, kaasaegne kujundus** fitnessile sobiva värviskeemiga

### Mall 2: Gym Pro

Väljakujunenud spordiklubidele, millel on rohkem teenuseid.

- Kõik, mis sisaldub Studio Essentialis, lisaks:
- **Liikmesus** leht hinnatabeliga
- **Galerii** leht ruumide fotode jaoks
- **Blogi** jaotis fitnessinõuannete ja uudiste jaoks
- **Iseloomustused** jaotis avalehel
- **Silmapaistvamad brändingu** valikud

### Mall 3: Fitness Chain

Mitme asukohaga ettevõtmistele.

- Kõik, mis sisaldub Gym Pros, lisaks:
- **Asukohad** leht mitme rajatise loenditega
- **Frantsiisi/asukoha** alamlehe mall
- **Tsentraliseeritud bränding** asukohapõhiste detailidega
- **Töötajate kataloog** asukohtade lõikes

## Mallisaidi loomine

Ultimate Multisite’is on mall lihtsalt WordPressi sait, mis on seadistatud nii, nagu soovid, et uued kliendisaidid välja näeksid. Selle loomiseks tee järgmist:

### Samm 1: Loo mallisait

1. Liigu oma võrgustiku haldusesse **Sites > Add New**
2. Loo sait nimega `template-studio-essential`
3. Sellest saidist saab sinu tööpind

### Samm 2: Paigalda ja seadista teema

Mine mallisaidi Dashboardile ja:

1. Aktiveeri fitness-ettevõtetele sobiv teema
2. Seadista teema sätted, värvid ja tüpograafia
3. Pane paika päis ja jalus fitnessile sobiva navigeerimisega

:::tip Theme Selection
Choose a theme that is flexible enough to look good for fitness but not so complex that your customers cannot manage it. Themes like Astra, GeneratePress, or Kadence work well because they are lightweight, customizable, and well-supported.
:::

### Samm 3: Loo lehed

Ehita iga leht järgmiste elementidega:

- **Kohatäitesisu**, mis kõlab fitnessi jaoks loomulikult ("Tere tulemast, [Studio Name]" mitte "Lorem ipsum")
- **Kohatäitepildid** tasuta fotopankadest, mis näitavad fitnessitegevusi
- **Funktsionaalsed paigutused**, kasutades leheehitajat või plokiredaktorit

Tee kohatäitesisu võimaluse korral juhendavaks. Üldise täiteteksti asemel kirjuta näiteks: "Asenda see oma stuudio lühikirjeldusega ja sellega, mis teeb selle eriliseks. Maini oma treeningfilosoofiat, kogemusaastaid või seda, mida kliendid võivad oodata."

### Samm 4: Seadista pluginad

Paigalda ja aktiveeri pluginad, mida fitness-stuudiod vajavad:

- Broneerimise või ajastamise plugin (kui see kehtib sinu plaanitasemele)
- Kontaktivormi plugin
- SEO plugin (eelnevalt seadistatud fitnessiga seotud vaikeseadetega)

### Samm 5: Märgi malliks

1. Liigu jaotisse **Ultimate Multisite > Sites**
2. Muuda mallisaiti
3. Lülita sisse **Site Template** lüliti

Korda seda protsessi iga malli jaoks, mida soovid pakkuda.

## Malli kvaliteedikontrolli nimekiri

Enne malli kättesaadavaks tegemist kontrolli:

- [ ] Kõik lehed laadivad õigesti ja näevad professionaalsed välja
- [ ] Kohatäitesisu on kasulik ja nišipõhine
- [ ] Pildid on sobivad ja õigesti litsentsitud
- [ ] Mobiilitundlikkus töötab kõigil lehtedel
- [ ] Navigeerimine on loogiline ja täielik
- [ ] Kontaktivormid töötavad
- [ ] Katkiseid linke ega puuduvaid varasid ei ole
- [ ] Lehe laadimiskiirus on vastuvõetav

## FitSite’i võrgustik seni

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL
├── Domain mapping configured
├── Site Templates
│   ├── Studio Essential (small studios, trainers)
│   ├── Gym Pro (established gyms)
│   └── Fitness Chain (multi-location)
└── Ready for plan configuration (next lesson)
```

## Mida selles õppetunnis lõime

- **Kolm nišipõhist malli**, mis on loodud eri suurusega fitness-ettevõtetele
- **Fitnessile sobiv sisu ja pildid**, mis panevad platvormi tunduma spetsiaalselt looduna
- **Juhendav kohatäitesisu**, mis suunab kliente kohandamisel
- **Kvaliteedikontrolli nimekiri**, et tagada mallide valmidus tootmiskeskkonnaks

---

**Järgmine:** [Õppetund 5: Plaanide kujundamine](lesson-5-plans) -- loome tootetasemed, mis vastavad sellele, kuidas fitness-ettevõtted tegelikult tegutsevad.
