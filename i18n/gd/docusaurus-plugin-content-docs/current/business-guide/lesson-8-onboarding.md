---
title: 'Leasan 8: Inntrigeadh Luchd-ceannach'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# Leasan 8: Cur Luchd-ceannach air Bhonn

Chan eil toirt air neach-ceannach clàradh ach leth na h-obrach. Ma logas iad a-steach, ma bhios iad fo bhrùthadh, agus mura till iad gu bràth, tha thu air an call. Tha an leasan seo a’ dealbhadh na h-eòlas a thionndaidheas clàradh ùr gu neach-ceannach gnìomhach, an sàs.

## Far an do Dh’fhàg Sinn e {#where-we-left-off}

Tha FitSite làn-bhranndaichte le sruth pàighidh a tha ag obair. A-nis tha sinn a’ cuimseachadh air na thachras às dèidh do shealbhadair stiùidio fallaineachd crìoch a chur air clàradh agus tighinn air an làrach ùr aca airson a’ chiad uair.

## Carson a tha Cur air Bhonn Cudromach {#why-onboarding-matters}

Bidh a’ chiad 30 mionaid às dèidh clàraidh a’ dearbhadh am fuirich neach-ceannach no am fàg iad. Sealbhadair stiùidio fallaineachd a bhios:

- A’ logadh a-steach agus a’ faicinn làrach a tha mar-thà a’ coimhead coltach ri làrach-lìn fallaineachd → fuirichidh e
- A’ tuigsinn gu mionaideach dè bu chòir a dhèanamh an ath rud → fuirichidh e
- A’ faireachdainn caillte ann an Dashboard WordPress coitcheann → fàgaidh e

Bidh na teamplaidean raoin agad (Leasan 4) a’ làimhseachadh a’ chiad phuing. Bidh an leasan seo a’ làimhseachadh an dàrna tè.

## Eòlas a’ Chiad Logadh a-steach {#the-first-login-experience}

### Widget Dashboard Fàilte {#welcome-dashboard-widget}

Cruthaich widget Dashboard gnàthaichte a chuireas fàilte air luchd-ceannach ùra agus a stiùireas iad tron rèiteachadh. Bu chòir seo nochdadh gu follaiseach nuair a logas iad a-steach airson a’ chiad uair.

**Tòiseachadh Luath FitSite:**

1. **Cuir ainm is suaicheantas an stiùidio agad ris** -- Ceangal gu roghainnean Customizer no Dearbh-aithne na Làraich
2. **Ùraich clàr-ama nan clasaichean agad** -- Ceangal dìreach gu deasaiche duilleag nan Clasaichean
3. **Cuir na trèanaichean agad ris** -- Ceangal gu deasaiche duilleag nan Trèanaichean
4. **Suidhich am fiosrachadh conaltraidh agad** -- Ceangal gu deasaiche duilleag Conaltraidh
5. **Ro-sheall an làrach agad** -- Ceangal ris an frontend

Bidh gach ceum a’ ceangal gu dìreach ris an duilleag no an suidheachadh buntainneach. Gun sealg tro chlàran-taice.

### Sìmplich an Dashboard {#simplify-the-dashboard}

Chan fheum luchd-ceannach ùra gach nì clàr-taice WordPress fhaicinn. Beachdaich air:

- A’ falach nithean clàr-taice nach eil buntainneach do riaghladh làrach fallaineachd (m.e., Beachdan mura h-eil iad gan cleachdadh)
- Ag ath-òrdachadh a’ chlàr-taice gus na nithean as motha a chleachdar a chur an toiseach
- A’ cur bileagan clàr-taice gnàthaichte ris a tha ciallach don raon ("An Stiùidio Agad" an àite "Coltas")

Faodaidh an addon [Manaidsear Plugin & Theme](/addons/plugin-and-theme-manager) cuideachadh le smachd a chumail air na chì luchd-ceannach.

## Sreath Phuist-d Fàilte {#welcome-email-sequence}

Chan eil aon phost-d fàilte gu leòr. Suidhich sreath a stiùireas luchd-ceannach tron chiad seachdain aca:

### Post-d 1: Fàilte (Sa bhad às dèidh clàraidh) {#email-1-welcome-immediately-after-signup}

- Cuspair: "Fàilte gu FitSite -- tha làrach-lìn an stiùidio agad beò"
- Susbaint: Ceangal logaidh a-steach, ceumannan tòiseachaidh luatha, ceangal gu goireasan cuideachaidh
- Tòn: Toilichte, brosnachail, sònraichte do dh’fhallaineachd

### Post-d 2: Buannachdan Luatha (Latha 1) {#email-2-quick-wins-day-1}

- Cuspair: "3 rudan ri dhèanamh an toiseach air do FitSite"
- Susbaint: Cuir an suaicheantas agad ris, ùraich ìomhaigh gaisgeach na duilleig-dachaigh, cuir clàr-ama nan clasaichean agad ris
- Cuir a-steach glacadh-sgrìn a sheallas gu mionaideach càit an cliogar

### Post-d 3: Dèan Leatsa e (Latha 3) {#email-3-make-it-yours-day-3}

- Cuspair: "Thoir air an làrach fallaineachd agad seasamh a-mach"
- Susbaint: Gnàthaich dathan, cuir dealbhan trèanaichean ris, sgrìobh sgeulachd an stiùidio agad
- Ceangail ri eisimpleirean de làraichean fallaineachd sgoinneil air an àrd-ùrlar

### Post-d 4: Rach Beò (Latha 7) {#email-4-go-live-day-7}

- Cuspair: "Deiseil airson do FitSite a cho-roinn leis an t-saoghal?"
- Susbaint: Liosta-sgrùdaidh de na bu chòir dearbhadh mus roinn thu, mar a cheanglas tu àrainn ghnàthaichte (ma tha thu air Growth/Pro), molaidhean co-roinn sòisealta

:::tip Fèin-obrachadh Puist-d
Cleachd [Webhooks](/user-guide/integrations/webhooks) no [Zapier](/user-guide/integrations/zapier) gus na puist-d seo a bhrosnachadh tron àrd-ùrlar margaidheachd puist-d agad. Bheir seo barrachd smachd dhut air àmachadh agus leigidh e leat conaltradh a thracadh.
:::

## Goireasan Cuideachaidh {#help-resources}

Cruthaich susbaint cuideachaidh sònraichte don raon a fhreagras na ceistean a bhios sealbhadairean stiùidio fallaineachd dha-rìribh a’ faighneachd:

### Artaigilean Stòr-eòlais {#knowledge-base-articles}

- "Mar a dh’ùraicheas tu clàr-ama nan clasaichean agad"
- "A’ cur ris agus a’ deasachadh phròifilean trèanaichean"
- "Ag atharrachadh suaicheantas is dathan an stiùidio agad"
- "A’ ceangal ainm na h-àrainne agad fhèin" (airson luchd-ceannach Growth/Pro)
- "A’ cur widget glèidhidh ris an làrach agad"

Sgrìobh iad seo airson luchd-cleachdaidh neo-theicnigeach. Cleachd glacadh-sgrìn. Seachain briathrachas WordPress.

### Cuairtean Bhidio {#video-walkthroughs}

Clàraidhean-sgrìn goirid (2-3 mionaidean) a’ sealltainn:

- A’ chiad logadh a-steach agus stiùireadh
- Deasachadh na duilleig-dachaigh
- Ùrachadh clàr-ama nan clasaichean
- A’ cur trèanair ùr ris

Chan fheum iad seo a bhith nan riochdachaidhean snasta. ’S e soilleir, cuideachail, agus sònraichte don raon a tha cudromach.

## Duilleag Account {#the-account-page}

Tha Ultimate Multisite a’ gabhail a-steach [Duilleag Account](/user-guide/client-management/account-page) a tha aghaidh ri luchd-ceannach far am bi luchd-ceannach a’ riaghladh an fho-sgrìobhaidh aca. Gnàthaich seo gus:

- Am plana FitSite làithreach aca a shealltainn
- Roghainnean ùrachadh a thaisbeanadh le buannachdan sònraichte do dh’fhallaineachd
- Eachdraidh bhileachaidh agus luchdachadh a-nuas fhàirdealan a thoirt seachad
- Ceangal ri goireasan cuideachaidh

## A’ Tomhas Soirbheachas Cur air Bhonn {#measuring-onboarding-success}

Trac na comharran seo gus faighinn a-mach a bheil do chur air bhonn ag obair:

- **Ìre gnìomhachaidh**: Dè an ceudad de chlàraidhean a bhios dha-rìribh a’ gnàthachadh an làraich aca taobh a-staigh a’ chiad seachdain?
- **Logaidhean a-steach sa chiad seachdain**: Cò mheud turas a logas neach-ceannach ùr a-steach rè a’ chiad seachdain aca?
- **Tiogaidean taice bho luchd-ceannach ùra**: Tha tomhas àrd a’ ciallachadh gu bheil beàrnan anns a’ chur air bhonn agad
- **Tionndadh bho dheuchainn gu pàighte**: Ma tha thu a’ tabhann deuchainnean, dè an ceudad a thionndaidheas?

## Lìonra FitSite Gu Ruige Seo {#the-fitsite-network-so-far}

```
Lìonra FitSite
├── WordPress Multisite (modh fo-àrainn)
├── Ultimate Multisite (rèitichte + branndaichte)
├── Àrainn an Àrd-ùrlair (fitsite.com + wildcard SSL)
├── Teamplaidean Làraich (Studio Essential, Gym Pro, Fitness Chain)
├── Batharan (Starter, Growth, Pro + Order Bumps)
├── Sruth Pàighidh (sònraichte don raon, deuchainneach)
├── Branndadh (logadh a-steach, Dashboard, puist-d, fàirdealan, làrach margaidheachd)
├── Cur Luchd-ceannach air Bhonn
│   ├── Widget Dashboard Tòiseachadh Luath
│   ├── Dashboard sìmplichte airson riaghladh làrach fallaineachd
│   ├── Sreath fàilte 4 puist-d
│   ├── Stòr-eòlais sònraichte don raon
│   ├── Cuairtean bhidio
│   └── Duilleag Account ghnàthaichte
└── Deiseil airson ro-innleachd phrìsean (an ath leasan)
```

## Na Thog Sinn San Leasan Seo {#what-we-built-this-lesson}

- **Eòlas treòraichte a’ chiad logaidh a-steach** le widget Tòiseachadh Luath
- **Dashboard sìmplichte** le fòcas air gnìomhan riaghlaidh làrach fallaineachd
- **Sreath phuist-d fàilte** a stiùireas luchd-ceannach tron chiad seachdain aca
- **Goireasan cuideachaidh sònraichte don raon** sgrìobhte airson sealbhadairean stiùidio fallaineachd neo-theicnigeach
- **Meatairean cur air bhonn** gus an t-eòlas a thracadh agus a leasachadh

---

**Air adhart:** [Leasan 9: Prìseadh airson Prothaid](lesson-9-pricing) -- bidh sinn a’ gleusadh an ro-innleachd phrìsean gus teachd-a-steach a mheudachadh agus churn a lùghdachadh.
