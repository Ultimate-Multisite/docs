---
title: Plaugu robežotā un sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 ieviest **Plugin Builder & Sandbox System**, kas ļauj AI asistentam izveidot, aktivizēt un pārvaldīt WordPress pluginus jūsu tīklā – visu ar drošu, izolētu sandbox vidi.

## Īsskopojums

Plugin Builder ļauj AI asistentam rakstīt pasūtījumos atbilstošus custom WordPress pluginus. Izveidoti pluginus tiek validēti, glabāti un aktivizēti sandbox slāņā pirms, kad tie jebkad vēl ne ietekmē dzīvās vietnes funkcionālumu.

Izmantošanas varianti ietver:

- Līdzspēju lietotdevтелю iesaistes bez izveidotu nelielu lietotdevēja pluginu veidošanu.
- Funkcionalitātes prototipēšanu, kas prasa WordPress hooks vai custom post types.
- Nelielu laika automātiskās skriptu veidošanu partiju operācijām.

## Pluginu izveide ar AI

Lai izveidotu pluginu, atveriet Gratis AI Agent čata interfeisu un aprakstiet, ko jums ir nepieciešams. Piemēram:

> "Izveidi pluginu, kas pievieno custom admin paziņojumu dashboardā."

AI darīs šādus veidus:

1. Izveidīs pluginu PHP kodu izmantojot struktūru kodas veidošanu.
2. Validē iegādāto rezultātu sintaksisvadi un nebezīmas modeļi.
3. Saglabās izveidoto pluginu sandbox apakšviet.
4. Atbildīs ar konfirmazi kopā ar pluginu slug un **Aktivizēt sandbox** pogu.

Jūs varat uzlabot rezultātu, turpinot sarunu tajā, pirms aktivizēšanas.

## Sandbox Aktivizācija

Pluginu aktivizācija sandbox vidē ir atšķirīga no tās aktivizācijas tīklā. Sandbox:

- Run pluginu izolētā WordPress vidi (wp-env).
- Saglabā jebkuru PHP kļūdu, brīdinājumu vai hooks konfliktus.
- Atbild ar aktivizācijas rezultātu čata interfeisā.

Lai aktivizētu pluginu sandbox vidē, noklikšķiniet uz **Aktivizēt sandbox** pogas AI čata atbilde, vai izmantojiet slash komandu:

/activate-plugin <plugin-slug>
```

Statu message atbild, vai izvēlas, vai aktivizācija veiksmīgi notika vai ne. Ja ir kļūda, kļūdas logi parādās chat threadā.

## Izvēles pluginu pārvaldīšana

Izveidoti pluginus ir sarakstīti **Gratis AI Agent → Plugin Builder → Manage Plugins**. No šīs ekrāna jūs varat:

| Darbs | Apraksts |
|---|---|
| **View source** | Pārskatīt pilnu PHP kodu pluginam. |
| **Re-activate in sandbox** | Atveikt sandbox aktivizācijas pārbaudi. |
| **Install on network** | Izvietot pluginu tiešsaistē (prasa manuālu apstiprinājumu). |
| **Update** | Nodrošināt jaunu versiju AI palīdzībā, aizstājot savu kodu. |
| **Delete** | Tūlīt izņemt pluginu no sandboxa veikalu. Pirms to deaktivate visos vietnēs. |

:::warning
**Install on network** izvieto izveidoto pluginu jūsu tiešsaistes WordPress multisaitā. Pārskatiet pluginu kodu pirms turpināt darbību. Gratis AI Agent pieprasīs apstiprinājumu pirms tiešsaistes instalācijas pabeigšanas.
:::

## Izveidota pluginas instalēšana tiešsaistē

Kad jūs esat apmierināts sandboxa pluginu, jūs varat to instalēt tiešsaistē:

1. Dodieties uz **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Nospressiet **Install on Network** blakus pluginam, ko vēlaties izvietot.
3. Apstipriniet dialogu. Plugin ir instalēts vietā `wp-content/plugins/` un aktivizēts tiešsaistē.

Alternatīvi, izmantojiet slash komandu chat interfejsā:

```
/install-plugin <plugin-slug>
```

## Pluginu atjauninājumi

Lai atjaunotu izveidoto pluginu, aprakstiet izmaiņas AI palīdzībā jaunam sarunā:

> "Atjaunināt dashboard-notice pluginu, lai tas parādītu tikai paziņojumu administratori."

AI veido jaunu versiju, kas parādās sandboxa līdzsā, kopā ar pašreizējo versiju. Pārskatiet diffu un apstipriniet pirms atjauninājuma lietošanas.

## Integrācija ar HookScanner

Plugin Builder izmanto integrētu **HookScanner** programmu, lai analizētu hooks un filterus, kas ir reģistrēti katram generētam pluginam. HookScanner rezultāti tiek parādīti чаtā atjauninājumā un ietver:

- Reģistrētos darbības hooks (iz `add_action` saucēm).
- Reģistrētos filteru hooks (iz `add_filter` saucēm).
- Jebkuru hooks, kas atrasti pluginu atkarībās (skatīšanās neietver `vendor/` un `node_modules/` direktoriju).

Tas palīdz jums saprast pluginu uzvedību pirms tās aktivizēšanas.

## Drošības apsvērumi

- Generēti pluginai tiek glabāti atsevišķi no manā manuāli instalētiem pluginiem un nav pieejami ar standarta WordPressa pluginu pārvaldības ekrānu, līdz jūs to ekspluatējat tīklā.
- Sandbox izmanto ceļu validāciju, lai novērstu direktoriju traversijas, kad rakstām pluginu failus.
- Pluginai ar bīstamas funkcijas saucības (piemēram, `eval`, `exec`, `system`) tiek atzīmētas validācijas laikā un neбуs aktivizētas.
