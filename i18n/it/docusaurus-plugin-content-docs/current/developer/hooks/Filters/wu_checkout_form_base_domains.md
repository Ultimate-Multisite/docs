---
id: wu_checkout_form_base_domains
title: Filtro - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filtro: wu_checkout_form_base_domains

Filtra i domini base condivisi del modulo di checkout che non devono diventare record di dominio mappato.

Usa questo filtro quando un'integrazione fornisce domini base aggiuntivi per i campi **URL del sito** del modulo di checkout. I domini restituiti da questo filtro vengono trattati come host di registrazione condivisi invece che come domini personalizzati per sito.

## Parametri

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $domains | `array` | Domini base condivisi raccolti dalla configurazione del modulo di checkout. |

### Da

- 2.13.0

### Fonte

Definito in `inc/functions/domain.php`.


## Restituisce

Array di domini base normalizzati del modulo di checkout.
