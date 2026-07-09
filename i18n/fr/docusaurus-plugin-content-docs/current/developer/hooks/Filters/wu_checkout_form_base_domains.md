---
id: wu_checkout_form_base_domains
title: Filtre - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filtre : wu_checkout_form_base_domains

Filtre les domaines de base partagés du formulaire de paiement qui ne doivent pas devenir des enregistrements de domaines mappés.

Utilisez ce filtre lorsqu’une intégration fournit des domaines de base supplémentaires pour les champs **Site URL** du formulaire de paiement. Les domaines renvoyés par ce filtre sont traités comme des hôtes d’inscription partagés au lieu de domaines personnalisés par site.

## Paramètres

| Nom | Type | Description |
|------|------|-------------|
| $domains | `array` | Domaines de base partagés collectés depuis la configuration du formulaire de paiement. |

### Depuis

- 2.13.0

### Source

Défini dans `inc/functions/domain.php`.


## Retours

Tableau de domaines de base normalisés du formulaire de paiement.
