---
id: wu_maybe_create_customer
title: Aðgerð - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Aðgerð: wu_maybe_create_customer

Leyfir plugin-hönnuðum að framkvæma viðbótaraðgerðir þegar viðskiptavininum er bætt við.

Hér bætum við til dæmis við krókunum til að bæta customer-&gt;user einnig við aðalsíðuna.

## Færibreytur {#parameters}

| Heiti | Tegund | Lýsing |
|------|------|-------------|
| $customer | `\Customer` | Viðskiptavinurinn sem var hugsanlega búinn til. |
| $checkout | `\Checkout` | Núverandi afgreiðsluklasi. |

### Frá útgáfu {#since}

- 2.0.0
### Uppruni {#source}

Skilgreint í [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) í línu 1156
