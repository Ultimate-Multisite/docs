---
id: wu_checkout_form_base_domains
title: Salain - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filter: wu_checkout_form_base_domains

Sinasala ang mga shared checkout-form base domain na hindi dapat maging mga mapped-domain record.

Gamitin ang filter na ito kapag ang isang integrasyon ay nagbibigay ng karagdagang mga base domain para sa mga field ng **Site URL** sa checkout form. Ang mga domain na ibinabalik ng filter na ito ay itinuturing bilang mga shared registration host sa halip na mga custom domain na pang-bawat site.

## Mga Parameter

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $domains | `array` | Mga shared base domain na nakolekta mula sa configuration ng checkout form. |

### Mula Noong

- 2.13.0

### Pinagmulan

Tinukoy sa `inc/functions/domain.php`.


## Mga Ibinabalik

Array ng mga normalized checkout-form base domain.
