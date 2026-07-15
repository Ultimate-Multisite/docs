---
id: wu_stripe_existing_plan_id
title: Filtre - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filtre: wu_stripe_existing_plan_id

Filtra l'ID del pla que s'ha de comprovar. Si existeix, la nova subscripció utilitzarà aquest pla.

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $plan_id | `string` | L'ID del pla de Stripe que s'ha de comprovar. |
| $membership_level | `object` | Objecte de nivell de membresia. |

### Font {#source}

Definit a [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) a la línia 2653
