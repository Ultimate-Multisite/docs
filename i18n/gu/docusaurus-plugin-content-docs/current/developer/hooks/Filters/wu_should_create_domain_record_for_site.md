---
id: wu_should_create_domain_record_for_site
title: ફિલ્ટર - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# ફિલ્ટર: wu_should_create_domain_record_for_site

નવા બનાવેલા સાઇટ માટે Ultimate Multisite ડોમેન રેકોર્ડ બનાવવો જોઈએ કે નહીં તે ફિલ્ટર કરે છે.

શેર કરેલા checkout-form આધાર ડોમેન, આંતરિક હોસ્ટ, અથવા અન્ય integration દ્વારા અલગથી સંચાલિત થનારા ડોમેન વાપરતા સાઇટ માટે આપમેળે ડોમેન-રેકોર્ડ બનાવવાનું દબાવવા અથવા મુલતવી રાખવા આ ફિલ્ટરનો ઉપયોગ કરો.

## પરિમાણો {#parameters}

| નામ | પ્રકાર | વર્ણન |
|------|------|-------------|
| $create | `bool` | ડોમેન રેકોર્ડ બનાવવો જોઈએ કે નહીં. |
| $site | `WP_Site` | નવું બનાવેલું સાઇટ ઑબ્જેક્ટ. |

### થી {#since}

- 2.13.0

### સ્ત્રોત {#source}

`inc/functions/domain.php` માં વ્યાખ્યાયિત.


## પરત આપે છે {#returns}

ડોમેન રેકોર્ડ બનાવવો કે નહીં તે દર્શાવતું Boolean.
