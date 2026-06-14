---
title: Migracwn Modau Tŵr Trydder
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migracwn i'r Modau Troddori

Mae Superdav AI Agent v1.12.0 yn newid y ffordd y mae cyfyngedigau troddori wedi cael eu gael. **Mae modau troddori yn deallt i "auto"** ar hyn o bryd, gan sylw'r cyfathriadau WordPress Abilities API yn naturiol ar WordPress 7.0+ heb ddefnyddio cyflwyniad manwl.

## Beth yw'r newid?

### Cyn v1.12.0

Roedd y cyfyngedigau troddori angen cyflwyniad manwl:

- Roedd rydych chi'n gynnwys "third-party mode" yn ddefnyddiol
- Roedd y cyfyngedigau wedi eu llwytho o regristry custom
- Roedd y cyfathriad â WordPress Abilities API yn ddefnyddiol (optional)
- Roedd mod legacy yn deallt

### Ar ôl v1.12.0

Mae cyfyngedigau troddori'n gweithio'n auto:

- Modau troddori yn deallt i "auto"
- Mae'r cyfyngedigau yn cysylltu'n naturiol â WordPress Abilities API
- Nid oes angen cyflwyniad manwl ar WordPress 7.0+
- Mae mod legacy yn barhau i'w gael ar gyfer farchnadion WordPress achr

## Pwy yw'r ei fod yn cael eu newid?

### Newyddion (WordPress 7.0+)

**Nid oes angen unrhyw weithrediadau.** Mae mod troddori wedi'i setio i "auto" yn awtomatig, ac mae cyfyngedigau yn gweithio o'r bwrpas.

### Farchnadion sydd ar gael

**Mae eich seteffau wedi'u cadw.** Os ydych chi'n defnyddio:

- **Mod legacy**: Byddwch yn parhau mewn mod legacy (nad oes newid)
- **Mod troddori manwl**: Byddwch yn parhau mewn mod manwl (nad oes newid)
- **Mod auto**: Byddwch yn parhau gyda mod auto (nad oes newid)

### Farchnadion WordPress cyn 7.0

**Mae mod legacy'n barhau i'w gael.** Os ydych chi ar WordPress 6.x neu oer:

- Mod troddori yn deallt i "legacy"
- Gallwch chi ddefnyddio mod troddori manwl os byddwch yn ei dymuno
- Gorffennu i WordPress 7.0+ i ddefnyddio Abilities API naturiol

## Cyflwyniad y Modau

### Mod Auto (Deallt Newydd)

**Mod auto** yn defnyddio cyfathriad WordPress Abilities API naturiol:

- Mae'r cyfyngedigau wedi'u regrhu drwy hookau WordPress
- Cysylltiad llawn â WordPress 7.0+ Abilities API
- Disgwyliad awtomatig o cyfyngedigau troddori
- Nid oes angen cyflwyniad manwl

**Pethau i'r cyfryngedig**: WordPress 7.0+ gyda ffyddion trefnol (third-party)

### Mod Manual

Mae **mod manual** yn rhoi angen cynnig o ddefnyddio:

- Mae'n dyfynnu beth yw'r fyddion trefnol sydd i'w llwytho
- Mae'n ddefnyddiol ar gyfer gwylio neu llwytho fyddion yn wybodaethol
- Mae angen redig o fylchigion cynnig (configuration files)
- Mae'n rhoi gael mwy o rheolaeth, ond mae angen roi mwy o setffryd

**Pethau i ddefnyddio**: Gwylio, llwytho fyddion yn wybodaethol, neu setffrydiaethau manwl

### Mod Legacy (Anhydeddol)

Mae **mod legacy** yn defnyddio'r system fyddion trefnol uchel:

- Regrist fyddion manwl (nid API Fyddion WordPress)
- Mae'n cyflawni gyda chyfnodau WordPress arianig (older versions)
- Nid oes ychwanegiad WordPress naturiol
- Mae wedi cael ei ddefnyddio, ond mae'n cael ei chymorth

**Pethau i ddefnyddio**: WordPress 6.x neu o'r blaen, neu pan mae angen rhyngweithiol legacy

## Gwylio eich mod cyfyngedig

### Trwy Panel Admin

1. Gaws ar **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Cynhelwch ar gyfer y setffryd **Third-Party Mode**
3. Byddwch yn gweld eich mod cyfyngedig a opsiynau i newid ei ffurf

### Trwy Cod

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', neu 'legacy'
```

## Newid eich mod

### Newid i Mod Auto (Auto)

Os ydych chi ar WordPress 7.0+ ac os ydych chi eisiau defnyddio mod auto:

1. Gaws ar **Superdav AI Agent** → **Settings**
2. Cynhelwch ar gyfer y setffryd **Third-Party Mode**
3. Dewch yn debyg **Auto (WordPress Abilities API)**
4. Clic ar **Save**

Bydd Superdav AI Agent yn mynd â'r fyddion trefnol i ddod o'r blaen a chwarae'u.

### Newid i Mod Manual

Os ydych chi eisiau rheoli manwl beth yw fyddion sydd i'w llwytho:

1. Gaws ar **Superdav AI Agent** → **Settings**
2. Cynhelwch ar gyfer y setffryd **Third-Party Mode**
3. Dewch yn debyg **Manual**
4. Clic ar **Save**
5. Redig eich fylchigion cynnig i ddefyn beth yw fyddion sydd i'w llwytho

### Newid i Mod Legacy (Anhydeddol)

Os ydych chi angen cyflawni legacy:

1. Ymddwch i **Superdav AI Agent** → **Settings**
2. Gweld ar **Third-Party Mode** (Modau Trefn)
3. Dewch **Legacy** (Lleoliad)
4. Clic ar **Save** (Safio)

## Prifau Super Modau (Benefits of Auto Mode)

### Disgyrch Automatigol (Automatic Discovery)

Mae'r fyduriau yn cael eu disgyrchu'n autodom gan:

- Pluginau a gaeledig
- Theim (theme) sydd ar gweithrediad
- Pluginau sydd angen i'w defnyddio
- Pluginau sydd wedi'u cyflwyno (Drop-in plugins)

Nid oes angen i'w regrffyn manwl.

### Cyfathrebu Natif (Native Integration)

Mae'r fyduriau yn cysylltu â Abilities API o WordPress:

- Mae'n gyfathoghol gyda core WordPress
- Mae'n gweithio gyda admin WordPress
- Mae'n cyfathoghol gyda pluginau eraill sydd wedi'u defnyddio y Abilities API
- Mae'n sicr arfer yn ddefnyddio WordPress

### Rheoliad Cynllunol (Simplified Management)

- Nid oes angen i'w redig fylchedau cynllunol (configuration files) i redig
- Nid oes angen i'w regrffyn y fyduriau manwl
- Mae rheoliad Cyfathrebu Fyduriau yn gweithio'n autodom
- Mae notefau Admin yn dangos eich bod arall fyduriau nid yn cael eu cyflwyno

### Perfformiad Bytter (Better Performance)

- Mae'r fyduriau wedi'u cacheio (cached)
- Mae'n cael eu lladdio gyda'r hanes i ddeall y angen ar gyfer
- Mae'n optimiwyd ar gyfer WordPress 7.0+

## Ffordd Mynediad (Migration Path)

### Os ydych chi ar WordPress 6.x

1. **Cyflwynwch i WordPress 7.0+** (pan bydd yn barod)
2. **Cyfnewidiwch Superdav AI Agent** i v1.12.0+
3. **Gwylchwch y modau trefn i Auto** (optiol; mae mod legacy yn gweithio hefyd)
4. **Ddysg y rheoliad fyduriau** i sicr y rheolegau cyffredinol

### Os ydych chi ar WordPress 7.0+

1. **Cyfnewidiwch Superdav AI Agent** i v1.12.0+
2. **Gwylchwch bod modau trefn wedi'u setio i Auto** (dylai fod yn ddefnyddiol o'r ddefnyddiol)
3. **Ddysg y rheoliad fyduriau** i sicr y rheolegau cyffredinol
4. **Gynalwch y fyduriau trefn** i sicr ei gweithio

## Cyflwyniad (Troubleshooting)

### Nid oes angen i'r fyduriau lladdio mewn mod auto

- Assailwch bod chi ar WordPress 7.0+
- Gwylchwch bod modau trefn wedi'u setio i "Auto"
- Assailwch y plugin sydd yn rhoi'r fydur yn gaeledig (active)
- Gwylchwch logau eror WordPress ar gyfer erorau regrffyn

### Os gallaf i mi gweld mod legacy

- Ymddwch i **Settings** → **Third-Party Mode**
- Dewch **Legacy** (Lleoliad)
- Clic ar **Save** (Safio)
- Bydd y mod legacy yn parhau i weithio

### Mae fy nghybiadau troseddol yn dangos nid yw'n dangos

- Gwylio i'w gael ei gyfrifol drwy hookau WordPress
- Cynllunwch bod yn cyflwyno'r Abilities API'n dda
- Ddychmygu logau eror WordPress
- Defnyddiwch y pagedd admin **Ability Visibility** i weld pob ability wedi'i gyfrifol

### Rwy'n cael "ability nid yn cael ei gyfrifol"

- Mae hyn yn normol ar gyfer abilityau newydd o thurddiol
- Ddychmygu a gyfrifol eu mewn amgylchedd admin
- Gweld **Ability Visibility** am fanylion ar gyfer gyfrifol

## Cyflwyniad Cynllunol (Backward Compatibility)

### Cynhyrchiadau sy'n syrthio

Os oes gennych chi'n cael cyflogau ability troseddol sydd yma:

- **Mod legacy**: Mae eich cynrychiad yn parhau i weithio
- **Mod manual**: Mae eich cynrychiad yn parhau i weithio
- **Mod auto**: Mae eich cynrychiad yn cael ei gwneud yn anghosio (mae mod auto'n cymryd y swydd)

I sicrwch eich cynrychiad troseddol, parhau mewn mod Manual neu Legacy.

### Llinell Deprecation

- **v1.12.0**: Mae modau Legacy a Manual yn cael eu chwanegu'n llawn
- **v1.13.0+**: Gall y mod Legacy dangos amser o ddefnyddio
- **v2.0.0**: Gall y mod Legacy cael ei gwario (TBD)

## Prif Gwybodaeth (Best Practices)

### Ar gyfer cyflwyniadau newydd

- Defnyddiwch Mod auto (mae'n y cyffredin)
- Gad Superdav AI Agent dod o hyd i abilityau yn awtomatig
- Defnyddiwch Ability Visibility i gwario cyffredin

### Ar gyfer cyflwyniadau sydd yma

- Cyfathriat i WordPress 7.0+ pan fydd yn gallu
- Gwylio i'w newid i Mod auto ar gyfer rheoli sy'n cael ei ddefnyddio
- Ddychmygu a gyfrifol eu mewn abilityau drwy Ability Visibility

### Ar gyfer abilityau troseddol

- Cyfathriat abilityau drwy hookau WordPress (Abilities API)
- Osgoi o gynrychiadau abilityau troseddol
- Gwylio ar WordPress 7.0+ gyda Mod auto

## Cynlluniau Canlynol

1. **Gwylchwch eich fersiwn WordPress**: Cynnal y byddwch yn ar gael 7.0+ i Ffodel Auto (Auto mode)
2. **Ddysg am y fmode trefyddol (third-party mode)**: Ymddangos i Settings a gwylchwch eich fmode ar gyfer cyfyngedig
3. **Cyflenwi os oes angenid**: Swiithwch i Ffodel Auto os ydych yn ar WordPress 7.0+
4. **Clasify'r galluonau (abilities)**: Ddysg a clasifywch unrhyw galluonau sydd wedi'u clasify'n ddefnyddiol
5. **Gwylch**: Cynnal y bydd eich galluonau trefyddol yn gweithio'n iawn

## Pethau Cyflwynig (Related Topics)

- **Gynllunio Galluonau (Ability Visibility)**: Rheoli beth yw galluonau sydd wedi'u cyflwyno lle
- **WordPress Abilities API**: Dysg am y cyfrifolion WordPress ar gyfer cyflenwi galluonau newydd
- **Cyflenwi Galluonau Trefyddol (Third-Party Ability Development)**: Creu galluonau sydd yn gweithio gyda Ffodel Auto
