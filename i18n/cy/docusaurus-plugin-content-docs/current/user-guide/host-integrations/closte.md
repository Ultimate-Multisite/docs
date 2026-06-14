---
title: Ymddysyn Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Ymystyrchu Closte

## Oglwyddictod
Closte yw ffurf gweithredol WordPress a ddefnyddir ar y gweithro Google Cloud. Mae'r cyfathriau hwn yn sylwio'r symudau o'r domenaid a'r rheoli certydd SSL rhwng Ultimate Multisite a Closte.

## Adranau
- Symudau domenaid awtomatig
- Rheoli certydd SSL
- Cyddefnyddio domenaid gyda *wildcard* (gwylio)
- Nid oes angen i'ch gweithredu os ydych chi yn gweithredu ar Closte

## Cynlluniau
Rhaid i'ch ddefnyddio'r constant canlynol mewn fylfach `wp-config.php` os ydych chi'n defnyddio Closte:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Mae'r constant hwn yn cael ei ddefyn yn uniongyrchol os ydych chi'n gweithredu ar Closte.

## Cynlluniau Rheoli

### 1. Gwylio'r Closte API Key eich

Os ydych chi'n gweithredu ar Closte, bydd y constant `CLOSTE_CLIENT_API_KEY` wedi'i defnyddio mewn fylfach `wp-config.php` eich. Gallwch gwylio hyn drwy gwylio fylfach `wp-config.php` eich.

### 2. Gofyn y Cyfathriau

1. Yn eich admin WordPress, mynd i Ultimate Multisite > Settings
2. Mynd i'r tab "Domain Mapping" (Cysylltiadau Domenaid)
3. Cwmni i'r isel i "Host Integrations" (Cyfathriau Gweithredol)
4. Gofyn y cyfathriau Closte
5. Clic ar "Save Changes" (Safio newidiadau)

## Sut Mae'n Gweithredu

Pan cael domenaid i cysylltu mewn Ultimate Multisite:

1. Mae'r cyfathriau yn anfon gyflwyniad i API Closte i dros y domenaid i'ch ddefnyddi
2. Mae Closte yn rheoli certydd SSL yn awtomatig
3. Pan cael domenaid i ddifynnu, bydd y cyfathriau wedi'u taro o Closte

Mae'r cyfathriau hefyd yn gweithredu gyda'r setiad cynllunio DNS (DNS check interval) mewn Ultimate Multisite, gan gaelch chi ddefnyddio sut mae'r system yn gwylio am ychwanegau DNS a cherdyn certydd SSL.

## Creu Record Domenaid

Mae'r cysylltiad hwn yn sicru bod llwybr y cyfeiriad domaint yn cael ei creu'n awtomatig pan cael site neu ddau. Mae hyn yn bwysig iawn ar gyfer y cysylltiad Closte, oherwydd mae creu'r cyfeiriad domaint yn gwthio API Closte i creu'r domaint a cefndol SSL.

## Cynllunio Problemyńol (Troubleshooting)

### Pัญหาau mewn Cysylltiad API
- Gwylio bod eich llapi API Closte yn corregol
- Sicru bod eich cyfrif Closte gyda'r gynnwys sydd ei angen

### Pัญหาau mewn Cefndol SSL
- Gallai Closte gwneud chymdeithas SSL yn hanes (tywyll wrth 5-10 minuty)
- Gwylio bod eich domaina'n cyfeiriadu'n dda i'r adran IP o'ch server Closte
- Gwylio'r cyfrif DNS ar gyfer eich domaint i sicr ydynt yn cael eu cyflenwi'n iawn

### Domaint Nid wedi cael ei Ogynnu
- Gwylio'r logau Ultimate Multisite am unrhyw atebau drosol
- Sicru bod y domaint nid yn cael ei ogynnu i Closte eto
- Sicru bod y cyfrif DNS o'ch domaint wedi'u cyflenwi'n iawn

### Cymeriad Cysylltiad DNS (DNS Check Interval)
- Os mae chymdeithas SSL yn cael ei hanes yn rhy llawer, gallwch gwahaniaethu'r cymeriad cysylltiad DNS mewn setegau Mapped Domaint (Domain Mapping settings).
- Mae'r cymeriad cyffredinol ar gyfer yw 300 segond (5 minuty), ond gallwch ei setio i'r llawerol o 10 segond i chynllunio gwylio gwell yn ystod gwyliau am ystod.
