---
id: wu_pending_network_published
title: عمل - wu_pending_network_published
sidebar_label: wu_pending_network_published
_i18n_hash: 2cd5b02aa4fa11d92610bf2952f4b1f6
---
# Action: wu_pending_network_published {#action-wupendingnetworkpublished}

این اکشن پس از اینکه یک شبکه در حالت معلق (pending) منتشر شد، فعال می‌شود.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $network | `\WP_Ultimo\Models\Network` | شبکه ایجاد شده. |
| $membership | `\WP_Ultimo\Models\Membership` | عضویت. |
| $pending_network | `array` | داده‌های اصلی شبکه معلق. |

### منبع {#source}

در [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1815) در خط ۱۸۱۵ تعریف شده است.
