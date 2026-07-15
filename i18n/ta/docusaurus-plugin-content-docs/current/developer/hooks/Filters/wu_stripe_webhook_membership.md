---
id: wu_stripe_webhook_membership
title: Filter - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

இந்த webhook உடன் இணைக்கப்பட்ட உறுப்பினர் பதிவை (membership record) இது வடிகட்டுகிறது.

ஒரே Stripe வாடிக்கையாளரை (customer) வெவ்வேறு தளங்களில் (sites) பயன்படுத்தும்போது ஏற்படக்கூடிய முரண்பாடுகள் (conflicts) காரணமாகவே இந்த filter சேர்க்கப்பட்டுள்ளது.

## அளவுருக்கள் (Parameters) {#parameters}

| Name | Type | விளக்கம் |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | உறுப்பினர் பொருள் (membership object). |
| $event | `\Stripe\Event` | பெறப்பட்ட நிகழ்வு (event). |

### ஆதாரம் (Source) {#source}

[inc/gateways/class-base-stripe-gateway.php](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) இல், 2035 வரியில் வரையறுக்கப்பட்டுள்ளது.
