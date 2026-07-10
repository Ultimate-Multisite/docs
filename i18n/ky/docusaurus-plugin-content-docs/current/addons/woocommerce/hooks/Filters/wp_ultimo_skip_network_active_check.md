---
id: wp_ultimo_skip_network_active_check
title: Чыпка - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Чыпка: wp_ultimo_skip_network_active_check {#filter-wpultimoskipnetworkactivecheck}

Иштеп чыгуучуларга тармактык активдештирүүнү текшерүүнү айланып өтүүгө мүмкүндүк берет.

Бул composer негизиндеги жана башка ыңгайлаштырылган орнотууларды колдонгондо пайдалуу, мисалы Bedrock сыяктуу, анда pluginдерди mu-plugins катары колдонуу кадимки көрүнүш.

## Параметрлер {#parameters}

| Аты | Түрү | Сүрөттөмө |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Текшерүүнү өткөрүп жиберишибиз керекпи же жокпу, демейкиси false. |

### Нускадан бери {#since}

- 2.0.0
### Булак {#source}

[`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) файлында 272-сапта аныкталган


## Кайтарат {#returns}
Эгер текшерүүнү өткөрүп жибергиңиз келсе true, болбосо false.
