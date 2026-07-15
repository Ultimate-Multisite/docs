---
id: wp_ultimo_skip_network_active_check
title: Филтр - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Филтр: wp_ultimo_skip_network_active_check

Ба таҳиягарон имкон медиҳад, ки санҷиши фаъолсозии шабакаро кӯтоҳ кунанд.

Ин ҳангоми истифодаи танзимоти бар composer асосёфта ва дигар танзимоти фармоишӣ, масалан Bedrock, муфид аст, ки дар онҳо истифодаи plugin-ҳо ҳамчун mu-plugins меъёр аст.

## Параметрҳо {#parameters}

| Ном | Навъ | Тавсиф |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Оё мо бояд санҷишро гузаронем ё не, ба таври пешфарз false аст. |

### Аз замони {#since}

- 2.0.0
### Манбаъ {#source}

Дар [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) дар сатри 272 муайян шудааст


## Бармегардонад {#returns}
true, агар хоҳед санҷишро гузаронед, дар акси ҳол false.
