---
id: wu_membership_renewal_expiration_date
title: Filter - wu_membership_renewal_expiration_date
sidebar_label: wu_membership_renewal_expiration_date
_i18n_hash: 607ec1f0ab833a4fd312f7c6b9e0182f
---
# Filter: wu_membership_renewal_expiration_date {#filter-wumembershiprenewalexpirationdate}

Hesaplanan bitiş tarihinin, yenileme tarihinden sonra ayarlanmasını sağlar.

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | Hesaplanan bitiş tarihi. |
| $plan | `\Product` | Üyelik seviyesi nesnesi. |
| $membership_id | `int` | Üyelik kimliği. |
| $membership | `\Membership` | Üyelik nesnesi. |

### Versiyon {#since}

- 2.0.0
### Kaynak {#source}

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2192) dosyasında 2192. satırda tanımlanmıştır.
