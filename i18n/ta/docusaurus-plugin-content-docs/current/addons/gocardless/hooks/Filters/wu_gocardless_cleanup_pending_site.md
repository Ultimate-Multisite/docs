---
id: wu_gocardless_cleanup_pending_site
title: வடிப்பான் - wu_gococardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site

ரத்து செய்யப்பட்ட GoCardless உறுப்பினர் நிலையை (membership) நீக்குவதற்கு முன், தனித்துப்போன நிலுவையில் உள்ள Site-ஐ (orphaned pending site) நீக்குவதற்கு இது செயல்படும்.

நீக்குவதைத் தடுக்க, இந்த ஃபில்டரில் `false` ஐத் திருப்பியனுப்பவும்.

## அளவுருக்கள் (Parameters)

| Name | Type | விளக்கம் (Description) |
|------|------|-------------|
| $blog_id | `int` | நிலுவையில் உள்ள Site-இன் WordPress blog ID. |
| $membership | `\WP_Ultimo\Models\Membership` | ரத்து செய்யப்பட்ட உறுப்பினர் நிலை. |
| $old_status | `string` | ரத்து செய்வதற்கு முந்தைய நிலை. |

### எப்போது (Since)

- 2.0.0
### ஆதாரம் (Source)

[`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) என்ற கோப்பில், 1086 வரியில் வரையறுக்கப்பட்டுள்ளது.
