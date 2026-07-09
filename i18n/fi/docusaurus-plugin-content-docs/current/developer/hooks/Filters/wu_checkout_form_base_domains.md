---
id: wu_checkout_form_base_domains
title: Suodatin - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filter: wu_checkout_form_base_domains

Suodattaa jaetut checkout-lomakkeen perusdomainit, joista ei tule mapped-domain-tietueita.

Käytä tätä suodatinta, kun integraatio tarjoaa lisäperusdomaineja checkout-lomakkeen **Site URL** -kentille. Tämän suodattimen palauttamia domaineja käsitellään jaettuina rekisteröintihosteina sivustokohtaisten mukautettujen domainien sijaan.

## Parametrit

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $domains | `array` | Checkout-lomakkeen määrityksistä kerätyt jaetut perusdomainit. |

### Alkaen

- 2.13.0

### Lähde

Määritelty tiedostossa `inc/functions/domain.php`.


## Palauttaa

Normalisoitujen checkout-lomakkeen perusdomainien taulukko.
