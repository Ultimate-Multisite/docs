---
title: Zarządzanie płatnościami i fakturami
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Zarządzanie płatnościami i fakturami {#managing-payments-and-invoices}

## Ustawienia płatności {#payment-settings}

Zanim zaczniesz otrzymywać płatności, musisz skonfigurować ustawienia związane z płatnościami. Przejdź do **Ultimate Multisite → Settings** i kliknij kartę **Payment**.

![Karta ustawień płatności](/img/admin/settings-payments-top.png)

Oto pełny widok strony ustawień płatności:

![Pełna strona ustawień płatności](/img/admin/settings-payments-full.png)

### Ogólne opcje płatności {#general-payment-options}

W ustawieniach ogólnych możesz skonfigurować:

- **Waluta** — Domyślna waluta używana do transakcji
- **Pozycja waluty** — Miejsce wyświetlania symbolu waluty (przed/po kwocie)

![Ustawienia bramki płatności](/img/admin/settings-payments-options.png)

### Bramki płatności {#payment-gateways}

Ultimate Multisite obsługuje wiele bramek płatności. Możesz włączyć i skonfigurować każdą z nich na karcie ustawień Payment.

![Konfiguracja bramki płatności](/img/admin/settings-payments-gateways.png)

Dostępne bramki obejmują:

- **Stripe** — Płatności kartą kredytową przez Stripe
- **PayPal** — Płatności PayPal
- **Ręczne** — Do przetwarzania płatności offline lub niestandardowych

Każda bramka ma własną sekcję konfiguracji, w której wprowadzasz klucze API i inne ustawienia.

![Dodatkowe ustawienia bramki](/img/admin/settings-payments-gateways-2.png)

### Tryb Sandbox {#sandbox-mode}

Możesz włączyć **Tryb Sandbox**, aby przetestować integrację płatności przed uruchomieniem produkcyjnym. Gdy tryb sandbox jest aktywny, nie zostaną naliczone żadne rzeczywiste opłaty.

## Przeglądanie płatności {#viewing-payments}

Przejdź do strony **Płatności** w Ultimate Multisite, aby zobaczyć wszystkie transakcje w swojej sieci.

![Lista płatności](/img/admin/payments-list.png)

Możesz filtrować płatności według statusu (zakończone, oczekujące, nieudane, zwrócone) i wyszukiwać konkretne transakcje.

Kliknij płatność, aby zobaczyć jej pełne szczegóły, w tym pozycje, powiązane członkostwo, informacje o kliencie oraz dane bramki płatności.

## Faktury {#invoices}

Ultimate Multisite może automatycznie generować faktury dla płatności. Możesz dostosować szablon faktury i format numeracji w ustawieniach Payment.

Opcje dostosowania faktur obejmują:

- **Nazwa i adres firmy** wyświetlane na fakturach
- **Numeracja faktur** — format i sekwencja
- **Logo** wyświetlane w nagłówku faktury
- **Niestandardowy tekst stopki** dotyczący warunków, notatek lub informacji prawnych

Aby dostosować szablon faktury, przejdź do **Ultimate Multisite → Settings → Payment** i poszukaj ustawień związanych z fakturami.
