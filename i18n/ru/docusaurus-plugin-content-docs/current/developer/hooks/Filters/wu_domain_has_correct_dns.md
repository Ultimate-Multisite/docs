---
id: wu_domain_has_correct_dns
title: Фильтр - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Фильтр: wu_domain_has_correct_dns

Позволяет разработчикам плагинов добавлять новые проверки для определения результатов.

## Parameters

| Имя | Тип | Описание |
|------|------|-------------|
| $result | `bool` | текущий результат. |
| $domain | `self` | текущий экземпляр домена. |
| $domains_and_ips | `array` | список доменов и IP, найденных при поиске DNS. |

### Since

- 2.0.4

### Source

Определено в [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) на строке 455

## Returns

Если DNS настроен правильно или нет.
