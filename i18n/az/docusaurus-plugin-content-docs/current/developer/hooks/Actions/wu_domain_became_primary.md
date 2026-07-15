---
id: wu_domain_became_primary
title: Hərəkət - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary

Bir domen sayt üçün əsas domen olduqda işə düşür.

Bu action, bir domenün `primary_domain` bayrağı `true` olaraq təyin edildikdə tetiklənilir. Bu, ya yeni bir əsas domen yaradılarkən, ya da mövcud bir domen əsas domen olmaq üçün yenilənərkən baş verə bilər.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Əsas domen olan domen. |
| $blog_id | `int` | Təsir edən saytın blog ID-si. |
| $was_new | `bool` | Bu, yeni yaradılmış bir domen olub-olmaması. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) faylının 560-ci sətirində təyin edilmişdir.
