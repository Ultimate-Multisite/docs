---
title: Cyfathrebu Safonau
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Cyfalu'r Safonau {#managing-sites}

Ynysion (neu subsites) yw cyd-fyddol o'r gweithrediad WaaS eich busnes. Mae Ultimate Multisite gyda 3 rheol o safonau:

- **Safonau eiddo'r cleient** — Safonau sydd yn perthyn i cleiention penodol
- **Modelau Safonau (Site Templates)** — Safonau preifat y gall cleiention dewis fel نقطa dechrau
- **Safon Gynain** — Safon eich rheol cyntaf

## Gwylio Safonau {#viewing-sites}

Mynolwch i **Ultimate Multisite → Sites** i weld pob subsites yn eich rheol. Mae pob safon wedi'i llwybr gan ddefnydd, ac gallwch gwch ymlaen trwy All Sites (Pob Safon), Customer-Owned (Eiddo'r Cleient), Templates (Modelau), neu Pending (Ar Gweithredu).

![Sites list page](/img/admin/sites-list.png)

## Ymyddu Safon Newydd {#adding-a-new-site}

Clicwch ar y bot **Add Site** i creu safon newydd. Byddwch yn angen rhoi:

- **Site Title** — Enw y safon newydd
- **Site URL** — Ddomain/llwybr ar gyfer y safon
- **Site Type** — A oes hi safon cleient, modelau, neu safon arferol?

Mae'r opsiwn **Copy Site** yn gallwch creu safon newydd yn seiliedig ar model safon sydd. Pan yw'r canolbwyntio, gallwch dewis y model i ddefnyddio fel نقطa dechrau. Rhowch i gyd yn gael **Copy Media on Duplication** yn gyffredinol i gynnwys ffiliad media.

## Rheoli Safon Arferol {#managing-an-existing-site}

Clicwch ar **Manage** ar unrhyw safon i agor y peidiad **Edit Site**. Yn yma byddwch yn gweld:

### Informiad Cynhwys {#basic-information}
Enw y safon, ddefnydd, ID y safon, a chyflwyniad. Byddwch hefyd yn gweld y domain a chwarae, y cyfrifolion sy'n perthyn â'r safon, a'r cyfrifol cleient sy'n eiddo i'r safon.

### Opsiwion Safon {#site-options}
Rheoli'r galluon a hanesau'r safon:

- **Visit limits** — Ymddiriedig am ymlaen o gyffredin safon
- **User account limits** — Hanesau perthynol i rôl user
- **Disk space** — Cyflwyniad storio ar gyfer y safon
- **Custom domain** — Mae gan ddefnyddio mappio domain ar gyfer y safon hon
- **Plugin and theme visibility** — Rheoli beth yw'r pluginau a'r themau sydd yn gweld, wedi'u gwahanu, neu wedi'u cyflwyno



Yn ddefnyddio'r gwefan yn ddefnyddiol, mae sitiau yn dilyn y cyflwyniadau a cheffroedig ar lefel y cyfrifoldeb (membership level). Mae setiadau ar lefel y siti hefyd yn gwneud i'r setiadau o'r cyfrifoldeb fod yn gyflwyni.

### Cysylltiadau (Associations) {#associations}

Ondaf y opsiynau ar lefel y siti, byddwch chi dod ag wybodaeth am:

- **Ddeialion sydd wedi'u cysylltu** â'r siti
- **Cyfrifoldeb** yr oedd y siti yn cael ei ddefnyddio
- **Cyfrifoldeb cleient** sydd wedi'i cysylltu â'r siti

### Llawr Gwir (Right Sidebar) {#right-sidebar}

Ar y ochr osgol, gallwch:

- **Gofal/Ail gofal y siti** gyda chwynnig bach
- **Gwylio'r math y siti** neu ddatblygu'r rhywunol
- **Setio'r pwyllgor/thumbnail y siti** (a ddangos ar y cyflym o'r flaen ar gyfer modelau siti)
- **Tystiolaeth y siti** yn llawn

:::warning
Mae tystiolaeth y siti yn anghyfrifol. Bydd y siti a'r holl ddatblygu ei fod yn cael eu taro'n ddefnyddiol.
:::
