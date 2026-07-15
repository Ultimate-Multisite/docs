---
id: wp_ultimo_skip_network_active_check
title: Фильтр - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check

Эшләүчеләргә челтәр активлаштыру тикшерүен кыска юл белән урап узарга мөмкинлек бирә.

Бу composer-based һәм башка махсус көйләүләр кулланганда файдалы, мәсәлән Bedrock кебек, анда plugin-нарны mu-plugins итеп куллану гадәти хәл.

## Параметрлар {#parameters}

| Исем | Төр | Тасвирлама |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Тикшерүне үткәреп җибәрергәме-юкмы, килешү буенча false. |

### Версиядән {#since}

- 2.0.0
### Чыганак {#source}

[`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) эчендә 272 нче юлда билгеләнгән


## Кайтара {#returns}
тикшерүне үткәреп җибәрергә теләсәгез true, юкса false.
