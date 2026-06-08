---
title: Wyszukiwarka internetowa
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Wyszukiwanie w Internecie

Gratis AI Agent v1.5.0 dodaje możliwość **Wyszukiwania w Internecie** (Internet Search), która pozwala asystentowi AI pobierać aktualne informacje z sieci podczas rozmowy. Funkcja ta działa dzięki [Brave Search API](https://brave.com/search/api/) lub [Tavily API](https://tavily.com/).

## Jak to działa

Gdy wyszukiwanie w Internecie jest włączone, asystent może automatycznie wysyłać zapytanie do skonfigurowanego dostawcy wyszukiwania, gdy uzna, że pytanie wymaga aktualnych lub zewnętrznych informacji — na przykład najnowszych wiadomości, aktualnych cen czy dokumentacji, która mogła ulec zmianie od momentu zakończenia treningu modelu.

Wyniki są pobierane w czasie rzeczywistym i są wstrzykiwane do kontekstu asystenta, zanim ten wygeneruje odpowiedź. Asystent informuje, kiedy użył wyników wyszukiwania, aby odpowiedzieć na pytanie.

## Włączanie Wyszukiwania w Internecie

Wyszukiwanie w Internecie wymaga klucza API od wybranego dostawcy wyszukiwania. Aby to skonfigurować:

1. Przejdź do **Gratis AI Agent → Settings → Advanced**.
2. Znajdź rozwijaną listę **Internet Search Provider** i wybierz **Brave Search** lub **Tavily**.
3. Wprowadź swój klucz API w odpowiednie pole. Linki do rejestracji są wyświetlane obok każdego pola.
4. Kliknij **Save Settings**.

Po zapisaniu klucza możliwość Wyszukiwania w Internecie jest automatycznie dostępna dla asystenta.

## Brave Search

### Uzyskanie klucza API Brave Search

1. Odwiedź [Brave Search API page](https://brave.com/search/api/).
2. Zarejestruj się na plan. Dostępny jest darmowy poziom z miesięcznym limitem zapytań.
3. Skopiuj swój klucz API z panelu dewelopera Brave Search.
4. Wklej go do pola **Brave Search API Key** w ustawieniach Gratis AI Agent.

### Limity użycia

Brave Search nalicza opłaty za liczbę wykonanych zapytań. Każda odpowiedź AI, która wyzwala wyszukiwanie, jest liczona jako jedno zapytanie. Monitoruj swoje zużycie w [Brave Search developer dashboard](https://brave.com/search/api/), aby uniknąć nieoczekiwanych opłat.

## Tavily

Superdav AI Agent v1.10.0 dodaje **Tavily** jako alternatywnego dostawcę wyszukiwania w Internecie, oferując bogatsze wyniki wyszukiwania i zaawansowane możliwości badawcze.

### Uzyskanie klucza API Tavily

1. Odwiedź [Tavily API page](https://tavily.com/).
2. Zarejestruj się na konto. Dostępny jest darmowy poziom z miesięcznym limitem zapytań.
3. Skopiuj swój klucz API z panelu Tavily.
4. Wklej go do pola **Tavily API Key** w ustawieniach Gratis AI Agent.

### Limity użycia

Tavily nalicza opłaty za liczbę wywołań API. Każda odpowiedź AI, która wyzwala wyszukiwanie, jest liczona jako jedno wywołanie. Monitoruj swoje zużycie w [Tavily dashboard](https://tavily.com/), aby uniknąć nieoczekiwanych opłat.

## Wyłączanie Wyszukiwania w Internecie

Usuń klucz API z aktywnego pola dostawcy wyszukiwania i zapisz zmiany. Możliwość Wyszukiwania w Internecie nie będzie już dostępna dla asystenta.

:::note
Wyszukiwanie w Internecie zwiększa opóźnienie odpowiedzi, ponieważ asystent musi czekać na wyniki wyszukiwania, zanim wygeneruje odpowiedź. W przypadku zastosowań wymagających czasu rzeczywistego, rozważ, czy wyszukiwanie w czasie rzeczywistym jest konieczne, czy wystarczająca będzie wbudowana wiedza asystenta.
:::
