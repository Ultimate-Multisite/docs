---
title: 'Ceacht 7: Á dhéanamh de do chuid féin'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Ceacht 7: Á Dhéanamh Leatsa

Níor cheart do do chustaiméirí mothú riamh go bhfuil siad ag úsáid "plugin WordPress éigin." Ba cheart dóibh mothú go bhfuil siad ag úsáid FitSite -- ardán tógtha dá dtionscal. Clúdaíonn an ceacht seo brandáil, white-labeling, agus an t-ardán a dhéanamh cosúil le táirge.

## An Áit ar Fhágamar É

Tá sreabhadh íocaíochta oibre ag FitSite a thugann úinéirí stiúideonna aclaíochta ó roghnú plean go láithreán beo. Anois déanaimid an t-eispéireas iomlán cosúil le táirge comhtháite, brandáilte.

## Fearann D’Ardáin

Is é do fhearann bunús do bhranda. Do FitSite:

- **Príomhfhearann**: `fitsite.com` (do láithreán margaíochta agus fréamh an líonra)
- **Láithreáin chustaiméirí**: `studioname.fitsite.com` (fofhearainn)
- **Fearainn shaincheaptha**: Is féidir le custaiméirí ar phleananna Growth agus Pro a bhfearann féin a mhapáil

### Do Fhearann a Shocrú

1. Cláraigh fearann d’ardáin
2. Díreáil é chuig do sholáthraí óstála
3. Cumraigh DNS saoróg (`*.fitsite.com`) d’fhofhearainn chustaiméirí
4. Cinntigh go bhfuil SSL saoróg gníomhach

Féach [Conas Mapáil Fearainn a Chumrú](/user-guide/domain-mapping/how-to-configure-domain-mapping) le haghaidh treoracha mionsonraithe.

## White-Labeling an Eispéiris Riaracháin

Nuair a logálann úinéir stiúideo aclaíochta isteach ina dashboard láithreáin, ba cheart dóibh do bhranda a fheiceáil, ní brandáil WordPress ná Ultimate Multisite.

### Leathanach Logála Isteach Saincheaptha

Saincheap leathanach logála isteach WordPress chun iad seo a thaispeáint:

- Do lógó FitSite
- Íomhánna cúlra oiriúnacha don aclaíocht
- Dathanna do bhranda

### Brandáil Dashboard

Úsáid an breiseán [Cruthaitheoir Leathanaigh Riaracháin](/addons/admin-page-creator) nó CSS saincheaptha chun:

- Do lógó FitSite a chur in ionad lógó WordPress
- Scéim dathanna an riaracháin a shaincheapadh chun teacht le do bhranda
- Giuirléid dashboard shaincheaptha a chur leis le naisc thapa agus acmhainní cabhrach a bhaineann go sonrach leis an aclaíocht

### Leathanaigh Riaracháin Shaincheaptha

Smaoinigh ar leathanaigh riaracháin shaincheaptha a chruthú a chuireann na gníomhartha is ábhartha d’úinéirí stiúideonna aclaíochta chun cinn:

- "Cuir Do Sceideal Ranganna in Eagar"
- "Nuashonraigh Próifílí Traenálaithe"
- "Féach ar Do Láithreán"

Laghdaíonn sé seo an cuar foghlama trí ghníomhartha ábhartha don nideoige a chur chun tosaigh agus i lár an aonaigh in ionad iad a chur i bhfolach i ngnáth-roghchlár WordPress.

## Do Chumarsáid a Bhrandáil

Ba cheart do gach ríomhphost, sonrasc, agus fógra do bhranda a threisiú.

### Ríomhphoist Chórais

Téigh go **Ultimate Multisite > Settings > Emails** agus saincheap gach ríomhphost córais:

- **Ainm seoltóra**: FitSite
- **Ríomhphost seoltóra**: hello@fitsite.com
- **Teimpléid ríomhphoist**: Úsáid dathanna agus lógó do bhranda
- **Teanga**: Sonrach don aclaíocht tríd síos

Príomh-ríomhphoist le saincheapadh:

| Ríomhphost | Leagan Ginearálta | Leagan FitSite |
|-------|----------------|-----------------|
| Fáilte | "Tá do láithreán nua réidh" | "Tá suíomh gréasáin do stiúideo aclaíochta beo" |
| Admháil íocaíochta | "Fuarthas íocaíocht" | "Deimhníodh íocaíocht síntiúis FitSite" |
| Triail ag críochnú | "Tá do thriail ag críochnú go luath" | "Críochnaíonn do thriail FitSite i gceann 3 lá -- coinnigh suíomh gréasáin do stiúideo beo" |

### Sonraisc

Saincheap teimpléid sonraisc le:

- Do lógó FitSite agus dathanna do bhranda
- Sonraí do ghnólachta
- Ainmneacha táirgí a bhaineann go sonrach leis an aclaíocht (ní IDanna plean cineálacha)

## An Láithreán a Fheiceann Custaiméirí

Teastaíonn láithreán margaíochta ó do phríomhfhearann (`fitsite.com`) a dhíolann an t-ardán. Tá sé seo ar leithligh ó riarachán líonra Ultimate Multisite -- is é aghaidh phoiblí do ghnólachta é.

Príomhleathanaigh:

- **Leathanach baile**: Tairiscint luacha shoiléir do ghnólachtaí aclaíochta
- **Gnéithe**: Cad a dhéanann FitSite, i dtéarmaí aclaíochta
- **Praghsáil**: Do thrí phlean le comparáidí gnéithe a bhaineann go sonrach leis an nideoige
- **Samplaí**: Taispeáin láithreáin tógtha ar an ardán
- **Cláraigh**: Naisc chuig d’fhoirm íocaíochta

:::tip Is Féidir le Do Láithreán Margaíochta a Bheith ina Láithreán Líonra
Cruthaigh do láithreán margaíochta mar láithreán laistigh de do líonra féin. Ligeann sé seo duit é a bhainistiú ón dashboard céanna agus léiríonn sé cumais d’ardáin féin.
:::

## Fearann Saincheaptha do Chustaiméirí

Do chustaiméirí ar phleananna a chuimsíonn fearainn shaincheaptha, doiciméadaigh an próiseas go soiléir:

1. Cláraíonn nó aistríonn an custaiméir a bhfearann chuig cláraitheoir
2. Nuashonraíonn an custaiméir DNS chun díriú ar d’ardán (tabhair na taifid bheachta)
3. Láimhseálann Ultimate Multisite mapáil an fhearainn agus SSL

Cruthaigh alt cabhrach nó iontráil i mbunachar eolais go sonrach don phróiseas seo, scríofa d’úinéirí stiúideonna aclaíochta nach bhfuil teicniúil.

## Líonra FitSite Go dtí Seo

```
Líonra FitSite
├── WordPress Multisite (mód fofhearainn)
├── Ultimate Multisite (cumraithe + brandáilte)
├── Fearann Ardáin (fitsite.com + SSL saoróg)
├── Teimpléid Láithreáin (Studio Essential, Gym Pro, Fitness Chain)
├── Táirgí (Starter, Growth, Pro + Order Bumps)
├── Sreabhadh Íocaíochta (sonrach don nideoige, tástáilte)
├── Brandáil
│   ├── Leathanach logála isteach saincheaptha
│   ├── Dashboard riaracháin brandáilte
│   ├── Ríomhphoist chórais a bhaineann go sonrach leis an nideoige
│   ├── Sonraisc bhandáilte
│   └── Láithreán margaíochta ar fitsite.com
└── Réidh don sreabhadh ionduchtaithe (an chéad cheacht eile)
```

## An Rud a Thógamar sa Cheacht Seo

- **Fearann ardáin agus DNS** cumraithe le haghaidh eispéireas brandáilte
- **Riarachán white-labeled** le brandáil FitSite tríd síos
- **Cumarsáid shaincheaptha** -- ríomhphoist, sonraisc, agus fógraí ar fad de réir an bhranda
- **Láithreán margaíochta** a dhíolann FitSite le húinéirí stiúideonna aclaíochta
- **Doiciméadú fearainn shaincheaptha** do chustaiméirí ar mian leo a bhfearann féin a bheith acu

---

**Ar aghaidh:** [Ceacht 8: Ionduchtú Custaiméirí](lesson-8-onboarding) -- dearfaidh muid an t-eispéireas a dhéanann custaiméir gníomhach, sásta de dhuine atá díreach tar éis clárú.
