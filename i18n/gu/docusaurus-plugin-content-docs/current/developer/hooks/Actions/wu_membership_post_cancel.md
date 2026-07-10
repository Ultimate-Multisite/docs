---
id: wu_membership_post_cancel
title: Action - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Action: wu_membership_post_cancel {#action-wumembershippostcancel}

જ્યારે સભ્યપદ રદ (cancel) થાય છે, ત્યારે આ એક્શન ટ્રિગર થાય છે.

આનાથી રદ્દીકરણ (cancellation) ઈમેલ ટ્રિગર થાય છે.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $membership_id | `int` | સભ્યપદની ID. |
| $membership | `\WP_Ultimo\Models\Membership` | સભ્યપદ ઓબ્જેક્ટ. |

### Since {#since}

- 2.0
### Source {#source}

Defined in [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) at line 2290
