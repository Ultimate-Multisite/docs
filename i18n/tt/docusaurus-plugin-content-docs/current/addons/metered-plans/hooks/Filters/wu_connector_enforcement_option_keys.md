---
id: wu_connector_enforcement_option_keys
title: Фильтр - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys

Төп сайттан мәҗбүри ителә торган AI тәэмин итүче көйләнеше ачкычлары исемлеген фильтрлагыз.

Үзегезнең яки өченче як AI тәэмин итүче plugin-нар өчен көйләнеш ачкычларын өстәгез, шулай итеп аларның көйләнешләре дә subsite-ларда төп сайттан мирас итеп алына.

## Параметрлар

| Исем | Төр | Тасвирлама |
|------|------|-------------|
| $keys | `string[]` | Мәҗбүри ителәчәк көйләнеш ачкычлары исемнәре (инде динамик рәвештә табылган connector ачкычларын һәм EXTRA_PROVIDER_OPTIONS-ны үз эченә ала). |

### Шуннан бирле

- 1.2.0
### Чыганак

[`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) эчендә 206 нчы юлда билгеләнгән.
