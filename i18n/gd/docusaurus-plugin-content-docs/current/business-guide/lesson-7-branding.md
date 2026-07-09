---
title: 'Leasan 7: Ga dhèanamh leatsa'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Leasan 7: Ga dhèanamh nad chuid fhèin

Cha bu chòir do luchd-ceannach a bhith a’ faireachdainn gu bràth gu bheil iad a’ cleachdadh "plugin WordPress air choreigin." Bu chòir dhaibh a bhith a’ faireachdainn gu bheil iad a’ cleachdadh FitSite -- àrd-ùrlar a chaidh a thogail airson a’ ghnìomhachais aca. Tha an leasan seo a’ còmhdach branndadh, white-labeling, agus mar a bheir thu air an àrd-ùrlar faireachdainn mar thoradh.

## Far an do dh’fhàg sinn e

Tha sruth checkout obrachail aig FitSite a bheir sealbhadairean stiùidio fallaineachd bho thaghadh plana gu làrach bheò. A-nis nì sinn an t-eòlas gu lèir nas coltaiche ri toradh co-leanailteach, branndaichte.

## Àrainn an àrd-ùrlair agad

Is e bunait do bhranda an àrainn agad. Airson FitSite:

- **Prìomh àrainn**: `fitsite.com` (an làrach margaidheachd agad agus freumh an lìonraidh)
- **Làraichean luchd-ceannach**: `studioname.fitsite.com` (fo-àrainnean)
- **Àrainnean gnàthaichte**: Faodaidh luchd-ceannach air planaichean Growth agus Pro an àrainn aca fhèin a mhapadh

### A’ stèidheachadh na h-àrainn agad

1. Clàraich àrainn an àrd-ùrlair agad
2. Stiùir i chun t-solaraiche aoigheachd agad
3. Rèitich wildcard DNS (`*.fitsite.com`) airson fo-àrainnean luchd-ceannach
4. Dèan cinnteach gu bheil wildcard SSL gnìomhach

Faic [Mar a rèiticheas tu mapadh àrainne](/user-guide/domain-mapping/how-to-configure-domain-mapping) airson stiùiridhean mionaideach.

## White-Labeling eòlas an rianaire

Nuair a logas sealbhadair stiùidio fallaineachd a-steach do dashboard na làraich aca, bu chòir dhaibh do bhrand fhaicinn, chan e branndadh WordPress no Ultimate Multisite.

### Duilleag logaidh a-steach ghnàthaichte

Gnàthaich duilleag logaidh a-steach WordPress gus na leanas a shealltainn:

- Suaicheantas FitSite agad
- Ìomhaighean cùl-raoin freagarrach do fhallaineachd
- Dathan do bhranda

### Branndadh Dashboard

Cleachd an addon [Admin Page Creator](/addons/admin-page-creator) no CSS gnàthaichte gus:

- Suaicheantas FitSite agad a chur an àite suaicheantas WordPress
- Sgeama dhathan an rianaire a ghnàthachadh gus a bhith a rèir do bhranda
- Widget dashboard gnàthaichte a chur ris le ceanglaichean luatha agus goireasan cuideachaidh sònraichte do fhallaineachd

### Duilleagan rianaire gnàthaichte

Beachdaich air duilleagan rianaire gnàthaichte a chruthachadh a chuireas na gnìomhan as buntainniche air beulaibh shealbhadairean stiùidio fallaineachd:

- "Deasaich clàr nan clasaichean agad"
- "Ùraich pròifilean nan trèanaichean"
- "Seall an làrach agad"

Lùghdaichidh seo an lùb ionnsachaidh le bhith a’ cur ghnìomhan buntainneach don niche sa mheadhan agus air beulaibh, seach an tiodhlacadh sa chlàr WordPress àbhaisteach.

## A’ branndadh do chonaltraidh

Bu chòir do gach post-d, fàirdeal, agus fiosrachadh do bhrand a dhaingneachadh.

### Puist-d siostaim

Rach gu **Ultimate Multisite > Settings > Emails** agus gnàthaich a h-uile post-d siostaim:

- **Ainm bho**: FitSite
- **Post-d bho**: hello@fitsite.com
- **Teamplaidean puist-d**: Cleachd dathan agus suaicheantas do bhranda
- **Cànan**: Sònraichte do fhallaineachd tron a h-uile àite

Prìomh phuist-d ri ghnàthachadh:

| Post-d | Tionndadh coitcheann | Tionndadh FitSite |
|-------|----------------|-----------------|
| Fàilte | "Tha an làrach ùr agad deiseil" | "Tha làrach-lìn an stiùidio fallaineachd agad beò" |
| Cuidhteas pàighidh | "Fhuaireadh pàigheadh" | "Chaidh pàigheadh ballrachd FitSite a dhearbhadh" |
| Deireadh deuchainn | "Tha an deuchainn agad a’ tighinn gu crìch a dh’aithghearr" | "Thig an deuchainn FitSite agad gu crìch ann an 3 latha -- cùm làrach-lìn an stiùidio agad beò" |

### Fàirdealan

Gnàthaich teamplaidean fàirdeil le:

- Suaicheantas FitSite agad agus dathan do bhranda
- Fiosrachadh do ghnìomhachais
- Ainmean thoraidhean sònraichte do fhallaineachd (chan e IDan plana coitcheann)

## An làrach a chì an luchd-ceannach

Feumaidh an àrainn phrìomh agad (`fitsite.com`) làrach margaidheachd a bhios a’ reic an àrd-ùrlair. Tha seo air leth bho rianaire lìonra Ultimate Multisite -- is e aghaidh phoblach do ghnìomhachais a th’ ann.

Prìomh dhuilleagan:

- **Duilleag-dhachaigh**: Moladh luach soilleir do ghnìomhachasan fallaineachd
- **Feartan**: Na nì FitSite, ann am briathran fallaineachd
- **Prìsean**: Na trì planaichean agad le coimeasan fheartan sònraichte don niche
- **Eisimpleirean**: Taisbean làraichean a chaidh a thogail air an àrd-ùrlar
- **Clàraich**: Ceanglaichean ris an fhoirm checkout agad

:::tip Faodaidh an làrach margaidheachd agad a bhith na làrach lìonraidh
Cruthaich an làrach margaidheachd agad mar làrach taobh a-staigh an lìonraidh agad fhèin. Leigidh seo leat a stiùireadh bhon aon dashboard agus seallaidh e comasan an àrd-ùrlair agad fhèin.
:::

## Àrainn ghnàthaichte do luchd-ceannach

Do luchd-ceannach air planaichean a tha a’ gabhail a-steach àrainnean gnàthaichte, sgrìobh am pròiseas gu soilleir:

1. Bidh an neach-ceannach a’ clàradh no a’ gluasad an àrainn aca gu registrar
2. Bidh an neach-ceannach ag ùrachadh DNS gus a stiùireadh chun àrd-ùrlair agad (thoir seachad na clàran mionaideach)
3. Làimhsichidh Ultimate Multisite mapadh na h-àrainne agus SSL

Cruthaich artaigil cuideachaidh no inntrigeadh bunait-eòlais gu sònraichte airson a’ phròiseis seo, sgrìobhte do shealbhadairean stiùidio fallaineachd nach eil teicnigeach.

## Lìonra FitSite gu ruige seo

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding
│   ├── Custom login page
│   ├── Branded admin dashboard
│   ├── Niche-specific system emails
│   ├── Branded invoices
│   └── Marketing site on fitsite.com
└── Ready for onboarding flow (next lesson)
```

## Na thog sinn san leasan seo

- **Àrainn àrd-ùrlair agus DNS** air an rèiteachadh airson eòlas branndaichte
- **Rianaire white-labeled** le branndadh FitSite tron a h-uile àite
- **Conaltradh gnàthaichte** -- puist-d, fàirdealan, agus fiosrachaidhean uile a rèir a’ bhranda
- **Làrach margaidheachd** a bhios a’ reic FitSite ri sealbhadairean stiùidio fallaineachd
- **Sgrìobhainnean àrainne gnàthaichte** do luchd-ceannach a tha ag iarraidh an àrainn aca fhèin

---

**Air adhart:** [Leasan 8: Onboarding luchd-ceannach](lesson-8-onboarding) -- dealbhaichidh sinn an t-eòlas a thionndaidheas clàradh ùr gu neach-ceannach gnìomhach, toilichte.
