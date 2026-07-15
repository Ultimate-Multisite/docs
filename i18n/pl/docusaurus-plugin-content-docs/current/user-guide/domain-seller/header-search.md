---
title: Wyszukiwanie domen w nagłówku
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Wyszukiwanie domeny w nagłówku

Użyj tej konfiguracji, gdy chcesz mieć mały formularz w nagłówku, który rozpoczyna wyszukiwanie domeny, a następnie pozwala klientowi wybrać spośród dostępnych domen w checkout Ultimate Multisite.

## Wymagania {#requirements}

- Ultimate Multisite aktywny w sieci.
- Multisite Ultimate Domain Seller aktywny w sieci.
- Co najmniej jeden aktywny produkt rejestracji domeny z:
  - `domain_provider` ustawionym na skonfigurowanego dostawcę.
  - Skonfigurowanymi obsługiwanymi TLD, na przykład `com`, `net` i `org`.
- Prawidłowy formularz checkout zawierający pole **Wybór domeny**.

## Formularz checkout {#checkout-form}

1. Utwórz lub edytuj formularz checkout używany przez stronę rejestracji.
2. Dodaj normalne wymagane pola checkout/Account, w tym **Nazwa użytkownika**. Formularz checkout zawierający tylko pole domeny jest odrzucany przez walidację Ultimate Multisite.
3. Dodaj pole **Wybór domeny**.
4. Ustaw tryb Wybór domeny na **Tylko rejestracja**, gdy przepływ ma koncentrować się na zarejestrowanych domenach zamiast na darmowych subdomenach lub istniejących domenach.
5. Przypisz produkt rejestracji domeny do tego pola.

Strona rejestracji powinna renderować formularz checkout, na przykład:

```text
[wu_checkout slug="domain-form"]
```

## Formularz w nagłówku {#header-form}

Dodaj mały formularz `GET` w nagłówku witryny, który wysyła wprowadzony termin wyszukiwania na stronę checkout jako `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Nie wybieraj wstępnie domeny w niestandardowym JavaScript nagłówka. Nagłówek powinien tylko przekazać termin wyszukiwania. Skrypt checkout Domain Seller odczytuje `?domain_name=example`, wypełnia pole wyszukiwania checkout i uruchamia wyszukiwanie dostępności, aby klient mógł wybrać spośród zwróconych domen.

## Oczekiwane zachowanie {#expected-behaviour}

Wyszukanie `example` w nagłówku powinno otworzyć:

```text
/register/?domain_name=example
```

Checkout powinien następnie wyświetlić wyniki możliwe do wyboru, takie jak:

- `example.com`
- `example.net`
- `example.org` niedostępna
- inne TLD obsługiwane przez dostawcę

Po wybraniu dostępnego wyniku podsumowanie zamówienia powinno zawierać produkt rejestracji domeny oraz wybraną nazwę domeny.

## Weryfikacja {#verification}

1. Otwórz stronę główną.
2. Wyszukaj samą nazwę, na przykład `example`.
3. Potwierdź, że URL checkout zawiera `?domain_name=example`.
4. Potwierdź, że pole domeny w checkout zawiera `example`.
5. Potwierdź, że pojawia się lista opcji domen.
6. Kliknij **Wybierz** dla dostępnej domeny.
7. Potwierdź, że podsumowanie zamówienia zawiera `Domain Registration - example.com` lub wybraną domenę.

## Rozwiązywanie problemów {#troubleshooting}

- Jeśli lista się nie pojawia, sprawdź kartę sieci w przeglądarce pod kątem `admin-ajax.php?action=wu_domain_search` i potwierdź, że zwraca niepuste `domains` lub `results`.
- Jeśli formularz checkout nie przechodzi walidacji podczas zapisywania, dodaj wymagane pola Account, takie jak **Nazwa użytkownika**.
- Jeśli wybranie domeny nie aktualizuje koszyka, potwierdź, że `window.wu_checkout_form` istnieje i że zasoby checkout Domain Seller są załadowane na stronie checkout.
