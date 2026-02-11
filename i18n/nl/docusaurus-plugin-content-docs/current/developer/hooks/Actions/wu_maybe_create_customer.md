---
id: wu_maybe_create_customer
title: Actie - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Actie: wu_maybe_create_customer

Laat pluginontwikkelaars extra dingen doen wanneer de klant wordt toegevoegd.

Hier voegen we de hooks toe voor het toevoegen van de klant->gebruiker aan de hoofdsite, bijvoorbeeld.

## Parameters

| Naam | Type | Beschrijving |
|------|------|-------------|
| $customer | `\Customer` | De klant die mogelijk is aangemaakt. |
| $checkout | `\Checkout` | De huidige checkout-klasse. |

### Sinds

- 2.0.0

### Bron

Gedefinieerd in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) op regel 1156
