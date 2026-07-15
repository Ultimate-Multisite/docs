---
id: wu_domain_seller_complete_registration
title: Action - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration

यह तब ट्रिगर होता है जब कोई भुगतान (payment) किसी ऐसी स्थिति (status) में बदलता है जो डोमेन रजिस्ट्रेशन शुरू करने के लिए ट्रिगर होनी चाहिए।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | भुगतान ऑब्जेक्ट। |
| $old_status | `string` | बदलाव से पहले की पिछली भुगतान स्थिति। |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) at line 266
