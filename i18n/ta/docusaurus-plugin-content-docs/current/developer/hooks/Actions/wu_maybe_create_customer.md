---
id: wu_maybe_create_customer
title: செயல்பாடு - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer {#action-wumaybecreatecustomer}

வாடிக்கையாளர் சேர்க்கப்படும்போது, கூடுதல் வேலைகளைச் செய்ய இது plugin உருவாக்குநர்களுக்கு அனுமதிக்கிறது.

உதாரணமாக, வாடிக்கையாளரை (customer) பிரதான தளத்திலும் (main site) சேர்க்க உதவும் hooks-களை இங்கே தான் சேர்க்கிறோம்.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $customer | `\Customer` | உருவாக்கப்பட்ட வாடிக்கையாளர். |
| $checkout | `\Checkout` | தற்போதைய checkout வகுப்பு. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) at line 1156
