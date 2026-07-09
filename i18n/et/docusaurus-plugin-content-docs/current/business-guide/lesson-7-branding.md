---
title: 'Õppetund 7: Selle enda omaks tegemine'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Õppetund 7: Tee see enda omaks

Sinu kliendid ei tohiks kunagi tunda, et nad kasutavad „mingit WordPressi pistikprogrammi“. Nad peaksid tundma, et nad kasutavad FitSite’i -- oma valdkonna jaoks loodud platvormi. See õppetund käsitleb brändingut, white-label-lahendust ja seda, kuidas panna platvorm tunduma tootena.

## Kuhu me pooleli jäime

FitSite’il on toimiv checkouti voog, mis viib fitnessistuudio omanikud plaani valikust toimiva saidini. Nüüd muudame kogu kogemuse terviklikuks, bränditud tooteks.

## Sinu platvormi domeen

Sinu brändi vundament on sinu domeen. FitSite’i puhul:

- **Põhidomeen**: `fitsite.com` (sinu turundussait ja võrgu juur)
- **Kliendisaitid**: `studioname.fitsite.com` (alamdomeenid)
- **Kohandatud domeenid**: Growth- ja Pro-plaanide kliendid saavad siduda oma domeeni

### Domeeni seadistamine

1. Registreeri oma platvormi domeen
2. Suuna see oma hostingupakkuja juurde
3. Seadista wildcard DNS (`*.fitsite.com`) kliendi alamdomeenide jaoks
4. Veendu, et wildcard SSL oleks aktiivne

Üksikasjalikud juhised leiad jaotisest [Kuidas seadistada domeeni sidumist](/user-guide/domain-mapping/how-to-configure-domain-mapping).

## Adminikogemuse white-label

Kui fitnessistuudio omanik logib sisse oma saidi Dashboardile, peaks ta nägema sinu brändi, mitte WordPressi ega Ultimate Multisite’i brändingut.

### Kohandatud sisselogimisleht

Kohanda WordPressi sisselogimislehte nii, et see kuvaks:

- Sinu FitSite’i logo
- Fitnessiga sobiva taustapildi
- Sinu brändivärvid

### Dashboardi bränding

Kasuta [Admin Page Creator](/addons/admin-page-creator) lisamoodulit või kohandatud CSS-i, et:

- Asendada WordPressi logo sinu FitSite’i logoga
- Kohandada admini värviskeem sinu brändiga sobivaks
- Lisada kohandatud Dashboardi vidin fitnessispetsiifiliste kiirlinkide ja abiressurssidega

### Kohandatud adminilehed

Kaalu kohandatud adminilehtede loomist, mis toovad fitnessistuudio omanike jaoks kõige asjakohasemad toimingud esile:

- „Muuda oma tunniplaani“
- „Uuenda treenerite profiile“
- „Vaata oma saiti“

See vähendab õppimiskõverat, asetades nišiga seotud toimingud nähtavale kohale, selle asemel et peita need standardsesse WordPressi menüüsse.

## Sinu suhtluse brändimine

Iga e-kiri, arve ja teavitus peaks tugevdama sinu brändi.

### Süsteemi e-kirjad

Liigu jaotisse **Ultimate Multisite > Settings > Emails** ja kohanda kõik süsteemi e-kirjad:

- **Saatja nimi**: FitSite
- **Saatja e-post**: hello@fitsite.com
- **E-kirja mallid**: Kasuta oma brändivärve ja logo
- **Keel**: Läbivalt fitnessispetsiifiline

Olulised e-kirjad, mida kohandada:

| E-kiri | Üldine versioon | FitSite’i versioon |
|-------|----------------|-----------------|
| Tervitus | „Sinu uus sait on valmis“ | „Sinu fitnessistuudio veebisait on live’is“ |
| Maksekviitung | „Makse vastu võetud“ | „FitSite’i tellimuse makse kinnitatud“ |
| Prooviperioodi lõpp | „Sinu prooviperiood lõpeb varsti“ | „Sinu FitSite’i prooviperiood lõpeb 3 päeva pärast -- hoia oma stuudio veebisait live’is“ |

### Arved

Kohanda arvemalle järgmisega:

- Sinu FitSite’i logo ja brändivärvid
- Sinu ettevõtte andmed
- Fitnessispetsiifilised tootenimed (mitte üldised plaani ID-d)

## Kliendile suunatud sait

Sinu põhidomeen (`fitsite.com`) vajab turundussaiti, mis müüb platvormi. See on eraldi Ultimate Multisite’i võrgu administ -- see on sinu ettevõtte avalik nägu.

Olulised lehed:

- **Avaleht**: Selge väärtuspakkumine fitnessiettevõtetele
- **Funktsioonid**: Mida FitSite teeb, fitnessi terminites
- **Hinnastamine**: Sinu kolm plaani nišispetsiifiliste funktsioonide võrdlustega
- **Näited**: Näita platvormile ehitatud saite
- **Registreeru**: Lingid sinu checkouti vormile

:::tip Sinu turundussait võib olla võrgusait
Loo oma turundussait saidina omaenda võrgus. See võimaldab sul seda hallata samalt Dashboardilt ja näitab sinu enda platvormi võimalusi.
:::

## Kohandatud domeen klientidele

Klientide puhul, kelle plaanid sisaldavad kohandatud domeene, dokumenteeri protsess selgelt:

1. Klient registreerib oma domeeni või kannab selle registripidaja juurde üle
2. Klient uuendab DNS-i, et see osutaks sinu platvormile (anna täpsed kirjed)
3. Ultimate Multisite haldab domeeni sidumist ja SSL-i

Loo spetsiaalselt selle protsessi jaoks abiartikkel või teadmistebaasi kirje, mis on kirjutatud mittetehnilistele fitnessistuudio omanikele.

## FitSite’i võrk seni

```
FitSite’i võrk
├── WordPress Multisite (alamdomeeni režiim)
├── Ultimate Multisite (seadistatud + bränditud)
├── Platvormi domeen (fitsite.com + wildcard SSL)
├── Saidimallid (Studio Essential, Gym Pro, Fitness Chain)
├── Tooted (Starter, Growth, Pro + Order Bumps)
├── Checkouti voog (nišispetsiifiline, testitud)
├── Bränding
│   ├── Kohandatud sisselogimisleht
│   ├── Bränditud admini Dashboard
│   ├── Nišispetsiifilised süsteemi e-kirjad
│   ├── Bränditud arved
│   └── Turundussait aadressil fitsite.com
└── Valmis onboarding-voo jaoks (järgmine õppetund)
```

## Mida me selles õppetunnis ehitasime

- **Platvormi domeen ja DNS**, mis on seadistatud bränditud kogemuse jaoks
- **White-label admin**, kus FitSite’i bränding on läbiv
- **Kohandatud suhtlus** -- e-kirjad, arved ja teavitused kõik brändiga kooskõlas
- **Turundussait**, mis müüb FitSite’i fitnessistuudio omanikele
- **Kohandatud domeeni dokumentatsioon** klientidele, kes soovivad oma domeeni

---

**Järgmine:** [Õppetund 8: Kliendi onboarding](lesson-8-onboarding) -- kujundame kogemuse, mis muudab uue registreerunu aktiivseks ja rahulolevaks kliendiks.
