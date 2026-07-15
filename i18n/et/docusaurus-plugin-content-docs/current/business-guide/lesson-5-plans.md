---
title: 'Õppetund 5: oma plaanide kujundamine'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Õppetund 5: oma plaanide kujundamine

Sinu plaanitasemed ei ole lihtsalt hinnatasemed -- need peegeldavad seda, kuidas sinu nišikliendid tegelikult tegutsevad. Selles õppetunnis kujundad tootetasemed, mis vastavad eri arenguetappides olevate fitness-ettevõtete tegelikele vajadustele.

## Kus me pooleli jäime {#where-we-left-off}

FitSite’il on valmis kolm malli (Studio Essential, Gym Pro, Fitness Chain). Nüüd loome plaanid, mis määravad, millele kliendid ligipääsu saavad ja mille eest nad maksavad.

## Kliendisegmentides mõtlemine {#thinking-in-customer-segments}

Viga, mida enamik inimesi teeb, on plaanide kujundamine tehniliste funktsioonide ümber (salvestusruum, ribalaius, lehtede arv). Sinu nišikliendid ei mõtle nendes terminites. Jõusaali omanik mõtleb sellele, mida tal on vaja oma ettevõtte juhtimiseks.

Fitness-stuudiote puhul on olemas kolm loomulikku segmenti:

| Segment | Kes nad on | Mida nad vajavad |
|---------|-------------|----------------|
| **Üksiktreenerid / väikesed stuudiod** | 1-3 töötajat, üks asukoht, alustamisjärgus | Professionaalne sait, treeningtundide info, kontaktivorm |
| **Väljakujunenud jõusaalid** | 5-20 töötajat, üks asukoht, kasvufaasis | Kõik eelnev ning lisaks broneerimine, blogi, galerii, kohandatud domeen |
| **Fitness-ketid** | Mitu asukohta, väljakujunenud bränd | Kõik eelnev ning lisaks mitme saidi tugi, asukohtade lehed, töötajate kataloog |

Sinu plaanid peaksid vastama neile segmentidele, mitte suvalistele funktsioonipakettidele.

## FitSite’i plaanide loomine {#creating-the-fitsite-plans}

Liigu jaotisse **Ultimate Multisite > Tooted > Lisa toode** iga plaani jaoks.

### Plaan 1: FitSite Starter -- $49/kuus {#plan-1-fitsite-starter----49month}

**Sihtgrupp**: üksiktreenerid ja väikesed stuudiod

**Kirjelduse vahekaart**:
- Nimi: FitSite Starter
- Kirjeldus: "Kõik, mida personaaltreener või väike stuudio vajab, et veebis professionaalne välja näha."

**Üldine vahekaart**:
- Toote tüüp: plaan
- Kliendi roll: administraator

**Saidimallide vahekaart**:
- Luba saidimallid: lubatud
- Saadaolevad mallid: ainult Studio Essential

**Piirangud**:
- Saidid: 1
- Kettaruum: 1 GB
- Kohandatud domeen: keelatud (kasutab `studioname.fitsite.com`)

**Lisamoodulite vahekaart**:
- Kontaktivormi lisamoodul: aktiveeri kohustuslikult
- SEO lisamoodul: aktiveeri kohustuslikult
- Broneerimise lisamoodul: pole saadaval (uuendamise stiimul)

**Teemade vahekaart**:
- Sinu valitud teema: aktiveeri kohustuslikult
- Kõik muud teemad: peidetud

### Plaan 2: FitSite Growth -- $99/kuus {#plan-2-fitsite-growth----99month}

**Sihtgrupp**: väljakujunenud ühe asukohaga jõusaalid

**Kirjelduse vahekaart**:
- Nimi: FitSite Growth
- Kirjeldus: "Väljakujunenud jõusaalidele, kes on valmis kasvatama oma veebikohalolu ja meelitama uusi liikmeid."

**Saidimallide vahekaart**:
- Saadaolevad mallid: Studio Essential ja Gym Pro

**Piirangud**:
- Saidid: 1
- Kettaruum: 5 GB
- Kohandatud domeen: lubatud

**Lisamoodulite vahekaart**:
- Kõik Starteri paketis sisalduv, lisaks:
- Broneerimise lisamoodul: aktiveeri kohustuslikult
- Galerii lisamoodul: aktiveeri kohustuslikult
- Blogi funktsionaalsus: saadaval

**Üles- ja allavahetuste vahekaart**:
- Plaanigrupp: FitSite Plans
- Toote järjestus: 2

### Plaan 3: FitSite Pro -- $199/kuus {#plan-3-fitsite-pro----199month}

**Sihtgrupp**: mitme asukohaga fitness-ketid

**Kirjelduse vahekaart**:
- Nimi: FitSite Pro
- Kirjeldus: "Täielik platvorm mitme asukohaga fitness-brändidele."

**Saidimallide vahekaart**:
- Saadaolevad mallid: kõik kolm malli

**Piirangud**:
- Saidid: 5 (üks iga asukoha kohta)
- Kettaruum: 20 GB
- Kohandatud domeen: lubatud

**Lisamoodulite vahekaart**:
- Kõik Growthi paketis sisalduv, lisaks:
- Kõik premium-lisamoodulid: aktiveeri kohustuslikult

**Üles- ja allavahetuste vahekaart**:
- Plaanigrupp: FitSite Plans
- Toote järjestus: 3

## Plaanigrupi seadistamine {#setting-up-the-plan-group}

Plaanigrupp tagab, et kliendid saavad uuendada või madalamale plaanile liikuda ainult FitSite’i plaaniperekonna sees. Iga plaani vahekaardil **Üles- ja allavahetused**:

1. Määra kõigi kolme plaani **Plaanigrupiks** "FitSite Plans"
2. Määra **Toote järjestuseks** 1 (Starter), 2 (Growth), 3 (Pro)

See loob selge uuendustee: Starter → Growth → Pro.

## Tellimuse lisapakkumiste lisamine {#adding-order-bumps}

Tellimuse lisapakkumised on lisatooted, mida pakutakse ostu vormistamise ajal. FitSite’i puhul kaalu järgmisi:

- **Lisaruumi pakett** ($19/kuus) -- täiendav 5 GB kettaruumi
- **Prioriteetne tugi** ($29/kuus) -- kiiremad vastamisajad
- **Lisait** ($39/kuus) -- klientidele, kes vajavad rohkem saite, kui nende plaan lubab

Loo need Ultimate Multisite’is **paketi** tüüpi toodetena ja seo need asjakohaste plaanidega.

## Miks see struktuur toimib {#why-this-structure-works}

- **Starter** eemaldab sisenemistõkked -- madal hind, lihtne pakkumine, aitab treenerid kiiresti veebi
- **Growth** lisab funktsioonid, mida jõusaalid tegelikult küsivad -- broneerimine, galeriid, kohandatud domeenid
- **Pro** teenindab kõrge väärtusega segmenti, mis vajab mitme asukoha tuge
- **Tellimuse lisapakkumised** võimaldavad klientidel kohandada ilma põhiplaane keerulisemaks muutmata
- **Selge uuendustee** tähendab, et kliendid kasvavad koos sinuga, selle asemel et lahkuda

## FitSite’i võrgustik seni {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo) → Studio Essential template
│   ├── FitSite Growth ($99/mo) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/mo) → All templates
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Ready for checkout configuration (next lesson)
```

## Mida me selles õppetunnis ehitasime {#what-we-built-this-lesson}

- **Kolm plaanitaset**, mis on seotud tegelike fitness-ettevõtete segmentidega
- **Funktsioonidele ligipääsu piiramine**, kasutades Ultimate Multisite’i lisamoodulite ja mallide juhtimist
- **Plaanigrupp** selge uuendusteega
- **Tellimuse lisapakkumise tooted** täiendava tulu jaoks
- **Hinnastruktuur**, mis põhineb kliendi väärtusel, mitte tehnilistel näitajatel

---

**Järgmine:** [Õppetund 6: registreerumiskogemus](lesson-6-checkout) -- ehitame ostu vormistamise voo, mis muudab fitness-stuudio omanikud maksvateks klientideks.
