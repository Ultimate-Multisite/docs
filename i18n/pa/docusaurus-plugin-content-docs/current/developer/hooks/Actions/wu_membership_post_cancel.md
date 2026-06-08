---
id: wu_membership_post_cancel
title: Action - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Action: wu_membership_post_cancel

ਜਦੋਂ ਮੈਂਬਰਸ਼ਿਪ ਰੱਦ (cancel) ਹੋ ਜਾਂਦੀ ਹੈ, ਤਾਂ ਇਹ ਕ੍ਰਿਆ (Action) ਚਾਲੂ ਹੁੰਦੀ ਹੈ।

ਇਹ ਕ੍ਰਿਆ ਰੱਦ ਕਰਨ ਦਾ ਈਮੇਲ (cancellation email) ਭੇਜਦੀ ਹੈ।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $membership_id | `int` | ਮੈਂਬਰਸ਼ਿਪ ਦੀ ID। |
| $membership | `\WP_Ultimo\Models\Membership` | ਮੈਂਬਰਸ਼ਿਪ ઑબ્ਜੈਕਟ। |

### Since

- 2.0
### Source

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) ਵਿੱਚ ਲਾਈਨ 2290 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ ਕੀਤਾ ਗਿਆ ਹੈ।
