---
id: wu_stripe_generate_idempotency_key
title: Filtrs - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filtrs: wu_stripe_generate_idempotency_key

Filtrē idempotency_key vērtību, kas tiek nosūtīta ar Stripe maksājuma opcijām.

## Parametri {#parameters}

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $idempotency_key | `string` | Idempotences atslēgas vērtība. |
| $args | `array` | Argumenti, kas tiek izmantoti, lai palīdzētu ģenerēt atslēgu. |
| $context | `string` | Konteksts, kurā tiek ģenerēta idempotences atslēga. |

### Kopš {#since}

- 3.5.0
### Avots {#source}

Definēts [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) 54. rindā
