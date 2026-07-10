---
id: wu_checkout_form_base_domains
title: Pansala - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filter: wu_checkout_form_base_domains {#filter-wucheckoutformbasedomains}

Sinasala ang mga shared na base domain ng checkout-form na hindi dapat maging mga mapped-domain record.

Gamitin ang filter na ito kapag ang isang integration ay nagbibigay ng karagdagang mga base domain para sa mga field ng **Site URL** sa checkout form. Ang mga domain na ibinabalik ng filter na ito ay itinuturing na mga shared registration host sa halip na mga custom domain bawat site.

## Mga Parameter {#parameters}

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $domains | `array` | Mga shared base domain na nakolekta mula sa configuration ng checkout form. |

### Mula Noong {#since}

- 2.13.0

### Pinagmulan {#source}

Tinukoy sa `inc/functions/domain.php`.


## Mga Ibinabalik {#returns}

Array ng mga normalized na base domain ng checkout-form.
