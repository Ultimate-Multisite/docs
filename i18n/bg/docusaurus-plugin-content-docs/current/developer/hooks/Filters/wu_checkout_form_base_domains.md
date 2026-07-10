---
id: wu_checkout_form_base_domains
title: Филтър - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Филтър: wu_checkout_form_base_domains {#filter-wucheckoutformbasedomains}

Филтрира споделени базови домейни на формуляра за checkout, които не трябва да стават записи за mapped-domain.

Използвайте този филтър, когато интеграция предоставя допълнителни базови домейни за полета **Site URL** във формуляра за checkout. Домейните, върнати от този филтър, се третират като споделени хостове за регистрация вместо като персонализирани домейни за отделни сайтове.

## Параметри {#parameters}

| Име | Тип | Описание |
|------|------|-------------|
| $domains | `array` | Споделени базови домейни, събрани от конфигурацията на формуляра за checkout. |

### От версия {#since}

- 2.13.0

### Източник {#source}

Дефинирано в `inc/functions/domain.php`.


## Връща {#returns}

Масив от нормализирани базови домейни на формуляра за checkout.
