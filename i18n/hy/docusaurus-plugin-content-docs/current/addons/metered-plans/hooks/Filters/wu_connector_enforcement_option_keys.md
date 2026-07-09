---
id: wu_connector_enforcement_option_keys
title: Զտիչ - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Զտիչ՝ wu_connector_enforcement_option_keys

Զտում է հիմնական կայքից պարտադրվող AI մատակարարի կարգավորման բանալիների ցանկը։

Ավելացրեք կարգավորման բանալիներ անհատական կամ երրորդ կողմի AI մատակարարի plugin-ների համար, որպեսզի դրանց կարգավորումները նույնպես ժառանգվեն հիմնական կայքից ենթակայքերում։

## Պարամետրեր

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $keys | `string[]` | Պարտադրման ենթակա կարգավորման բանալիների անուններ (արդեն ներառում է դինամիկ հայտնաբերված connector բանալիները և EXTRA_PROVIDER_OPTIONS)։ |

### Սկսած

- 1.2.0
### Աղբյուր

Սահմանված է [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) ֆայլում՝ 206-րդ տողում։
