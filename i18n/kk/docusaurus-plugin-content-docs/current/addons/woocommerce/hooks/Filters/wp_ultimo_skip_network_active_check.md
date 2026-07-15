---
id: wp_ultimo_skip_network_active_check
title: Сүзгі - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check

Әзірлеушілерге желілік белсендіру тексерісін айналып өтуге мүмкіндік береді.

Бұл composer негізіндегі және басқа да арнайы баптауларды, мысалы Bedrock, қолданғанда пайдалы, мұнда plugin-дерді mu-plugins ретінде пайдалану қалыпты жағдай.

## Параметрлер {#parameters}

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Тексерісті өткізіп жіберу керек пе, жоқ па; әдепкі мәні — false. |

### Бастап {#since}

- 2.0.0
### Дереккөз {#source}

[`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) ішінде 272-жолда анықталған


## Қайтарады {#returns}
Тексерісті өткізіп жібергіңіз келсе true, әйтпесе false.
