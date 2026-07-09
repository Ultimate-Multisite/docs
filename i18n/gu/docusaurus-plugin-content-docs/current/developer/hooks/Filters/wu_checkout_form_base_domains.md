---
id: wu_checkout_form_base_domains
title: ફિલ્ટર - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filter: wu_checkout_form_base_domains

શેર કરેલા checkout-form આધાર ડોમેઇનને ફિલ્ટર કરે છે, જે mapped-domain records બનવા ન જોઈએ.

જ્યારે કોઈ integration checkout form **Site URL** fields માટે વધારાના આધાર ડોમેઇન પ્રદાન કરે ત્યારે આ filter વાપરો. આ filter દ્વારા પરત કરાયેલા ડોમેઇનને per-site custom domains બદલે શેર કરેલા registration hosts તરીકે ગણવામાં આવે છે.

## પેરામીટર્સ

| નામ | પ્રકાર | વર્ણન |
|------|------|-------------|
| $domains | `array` | checkout form configurationમાંથી એકત્ર કરાયેલા શેર કરેલા આધાર ડોમેઇન. |

### Since

- 2.13.0

### Source

`inc/functions/domain.php` માં વ્યાખ્યાયિત.


## પરત આપે છે

normalized checkout-form આધાર ડોમેઇનનો array.
