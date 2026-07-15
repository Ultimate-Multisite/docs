---
id: wu_checkout_form_base_domains
title: Фильтр - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filter: wu_checkout_form_base_domains

Уртак checkout формасының база доменнарын фильтрлый, алар mapped-domain язмаларына әйләнмәскә тиеш.

Бу фильтрны интеграция checkout формасының **сайт URL-ы** кырлары өчен өстәмә база доменнары биргәндә кулланыгыз. Бу фильтр кайтарган доменнар һәр сайт өчен аерым махсус доменнар урынына уртак теркәлү хостлары итеп карала.

## Параметрлар {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domains | `array` | Checkout формасы конфигурациясеннән җыелган уртак база доменнары. |

### Кайчаннан бирле {#since}

- 2.13.0

### Чыганак {#source}

`inc/functions/domain.php` эчендә билгеләнгән.


## Кайтара {#returns}

Нормальләштерелгән checkout формасы база доменнары массивы.
