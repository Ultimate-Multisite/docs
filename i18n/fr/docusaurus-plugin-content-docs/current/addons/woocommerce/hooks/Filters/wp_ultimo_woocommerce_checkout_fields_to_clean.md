---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filtre - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filtre : wp_ultimo_woocommerce_checkout_fields_to_clean

Permet aux développeurs de filtrer les champs d'adresse de facturation par défaut de WooCommerce.

Comme Ultimate Multisite possède des champs d'adresse de facturation, il peut être judicieux de supprimer les champs par défaut affichés par WooCommerce sur le formulaire de paiement. Par défaut, aucune valeur n'est transmise à cette liste, donc tous les champs configurés sur WooCommerce pour être affichés sont conservés.

### Depuis

- 2.0.0

### Source

Défini dans [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) à la ligne 277

## Retour

La liste des champs à supprimer. Les valeurs disponibles incluent billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email, et billing_phone.
