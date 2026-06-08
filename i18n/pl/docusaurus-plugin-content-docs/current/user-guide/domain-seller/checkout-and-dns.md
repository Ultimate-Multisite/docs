---
title: Pole koszyka i DNS klienta
sidebar_position: 3
_i18n_hash: 6723eb72a4f1a6663a643a8d310c2e63
---
# Zarządzanie polami koszyka i DNS dla klientów

## Pole wyboru domeny

Pole **Domain Selection** (Wybór domeny) to element koszyka, który daje klientom wybór, w jaki sposób chcą uzyskać domenę swojej witryny. Dodaj je do dowolnego formularza koszyka, aby umożliwić sprzedaż domen.

### Dodawanie pola do formularza koszyka

1. Przejdź do **Network Admin › Ultimate Multisite › Checkout Forms**
2. Otwórz lub utwórz formularz koszyka
3. W edytorze koszyka kliknij **Add Field** (Dodaj pole)
4. Wybierz **Domain Selection** z listy pól
5. Skonfiguruj opcje pola (patrz poniżej)
6. Zapisz formularz

### Opcje pola

**Domain modes** (Tryby domeny) — Wybierz, które zakładki będą widoczne dla klienta. Każdy tryb można włączać lub wyłączać niezależnie:

| Tryb | Co robi |
|---|---|
| **Subdomain** | Klient używa darmowej poddomeny w Twojej sieci (np. `mysite.twojanetwork.com`). Nie wymaga płatności. |
| **Register New Domain** | Klient wyszukuje i rejestruje nową domenę za pośrednictwem skonfigurowanego przez Ciebie dostawcy. Do wyceny używany jest produkt pasujący do domeny. |
| **Existing Domain** | Klient mapuje domenę, którą już posiada. Nie ma opłaty rejestracyjnej. Domena jest automatycznie mapowana do jego witryny. |

**Default mode** (Tryb domyślny) — Gdy wszystkie trzy tryby są włączone, który zakładka otwiera się jako pierwsza. Ustaw na **Subdomain**, aby rejestracja domeny była opcjonalna, lub na **Register New Domain**, aby zachęcić do zakupów.

**Domain product** (Produkt domeny) — Opcjonalnie przypnij to pole do konkretnego produktu domeny. Jeśli nie zostanie ustawione, addon automatycznie wybierze pasujący produkt na podstawie TLD, którego klient wyszukuje.

### Pola kontaktowe rejestrującego

Gdy klient wybierze zakładkę **Register New Domain**, formularz koszyka automatycznie dodaje pola kontaktowe rejestrującego:

- Imię / Nazwisko
- Adres email
- Adres (linia 1, miasto, stan/prowincja, kod pocztowy, kraj)
- Numer telefonu

Są one wymagane przez wszystkich rejestratorów i walidowane przed wykonaniem wywołania API rejestracji. Numery telefonów są automatycznie formatowane do międzynarodowego formatu `+CC.NNN`, oczekiwanego przez rejestratorów.

### Automatycznie generowany URL witryny

Gdy klient rejestruje lub mapuje domenę, pole URL witryny jest automatycznie wypełniane na podstawie wybranej domeny. Klienci nie muszą wypełniać osobnego pola URL.

### Zachowanie wyszukiwania

- Dostępność domeny jest sprawdzana w czasie rzeczywistym za pomocą AJAX, gdy klient pisze
- Sugerowane alternatywne TLD są wyświetlane, gdy preferowana domena jest niedostępna
- Wycena jest pobierana na żywo i wyświetlana jasno (cena rejestracji, cena odnowienia, opcjonalna opłata prywatności WHOIS)
- Kody kuponów stosuje się do produktów domen tak samo jak do każdego innego produktu

**Dostrajanie responsywności wyszukiwania:**

```php
// Zwiększenie opóźnienia debouncing (milisekundy) w celu zmniejszenia wywołań API na wolnych połączeniach
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // domyślnie: 500
});
```

**Dodawanie niestandardowych pól do formularza wyszukiwania domeny:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Dodatkowe uwagi',
    ];
    return $fields;
});
```

---

## Zarządzanie DNS dla klientów

Klienci mogą zarządzać rekordami DNS dla zarejestrowanych domen ze strony **My Account** (Moje konto), w sekcji dotyczącej ich domeny.

### Obsługiwane typy rekordów

| Typ | Zastosowanie |
|---|---|
| **A** | Mapowanie nazwy hosta na adres IPv4 |
| **AAAA** | Mapowanie nazwy hosta na adres IPv6 |
| **CNAME** | Tworzenie aliasu wskazującego na inną nazwę hosta |
| **MX** | Ustawienie serwera wymiany poczty |
| **TXT** | Dodawanie rekordów tekstowych SPF, DMARC, weryfikacji lub innych |

### Którzy dostawcy obsługują zarządzanie DNS?

Zarządzanie DNS (dodawanie, edytowanie, usuwanie rekordów) jest dostępne z **OpenSRS**, **ResellerClub** i **Enom**. Domeny Namecheap, GoDaddy i NameSilo wyświetlają status i informacje o wygaśnięciu, ale DNS musi być zarządzany bezpośrednio w panelu kontrolnym rejestratora.

### Domyślne rekordy DNS

Możesz skonfigurować domyślne rekordy DNS, które są automatycznie stosowane podczas rejestracji domeny. Przejdź do **Settings › Domain Seller › Default DNS Records**.

Wartości domyślnych rekordów obsługują dwa tokeny:

| Token | Zastąpione przez |
|---|---|
| `{DOMAIN}` | Zarejestrowana nazwa domeny (np. `example.com`) |
| `{SITE_URL}` | Adres witryny WordPress dla witryny klienta |

**Przykład — wskazanie domeny głównej i www na IP serwera:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: przeglądanie i edytowanie DNS

Administratorzy sieci mogą przeglądać i edytować rekordy DNS dla dowolnej domeny klienta ze strony edycji domeny w **Network Admin › Ultimate Multisite › Domains**.
