---
title: Pole kasy i DNS klienta
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Pole realizacji zakupu i zarządzanie DNS klientów

## Pole realizacji zakupu Wybór domeny {#the-domain-selection-checkout-field}

Pole **Wybór domeny** to element realizacji zakupu, który daje klientom wybór sposobu uzyskania domeny dla ich witryny. Dodaj je do dowolnego formularza realizacji zakupu, aby umożliwić sprzedaż domen.

### Dodawanie pola do formularza realizacji zakupu {#adding-the-field-to-a-checkout-form}

1. Przejdź do **Network Admin › Ultimate Multisite › Formularze realizacji zakupu**
2. Otwórz lub utwórz formularz realizacji zakupu
3. W edytorze realizacji zakupu kliknij **Dodaj pole**
4. Wybierz **Wybór domeny** z listy pól
5. Skonfiguruj opcje pola (zobacz poniżej)
6. Zapisz formularz

### Opcje pola {#field-options}

**Tryby domeny** — Wybierz, które karty widzi klient. Każdy tryb można włączyć lub wyłączyć niezależnie:

| Tryb | Co robi |
|---|---|
| **Subdomena** | Klient używa darmowej subdomeny w Twojej sieci (np. `mysite.yournetwork.com`). Płatność nie jest wymagana. |
| **Zarejestruj nową domenę** | Klient wyszukuje nową domenę i rejestruje ją przez skonfigurowanego dostawcę. Do wyceny używany jest pasujący produkt domeny. |
| **Istniejąca domena** | Klient mapuje domenę, którą już posiada. Brak opłaty rejestracyjnej. Domena jest automatycznie mapowana do jego witryny. |

**Tryb domyślny** — Gdy wszystkie trzy tryby są włączone, określa, która karta otwiera się jako pierwsza. Ustaw na **Subdomena**, aby rejestracja domeny pozostała opcjonalna, albo **Zarejestruj nową domenę**, aby zachęcić do zakupów.

**Produkt domeny** — Opcjonalnie przypnij to pole do konkretnego produktu domeny. Jeśli nie jest ustawione, dodatek automatycznie wybiera pasujący produkt na podstawie TLD wyszukiwanego przez klienta.

### Pola kontaktowe rejestrującego {#registrant-contact-fields}

Gdy klient wybiera kartę **Zarejestruj nową domenę**, formularz realizacji zakupu dodaje w treści pola kontaktowe rejestrującego:

- Imię / Nazwisko
- Adres e-mail
- Adres (linia 1, miasto, województwo/prowincja, kod pocztowy, kraj)
- Numer telefonu

Są one wymagane przez wszystkich rejestratorów i walidowane przed wykonaniem wywołania API rejestracji. Numery telefonów są automatycznie formatowane do międzynarodowego formatu `+CC.NNN` oczekiwanego przez rejestratorów.

### Automatycznie generowany URL witryny {#auto-generated-site-url}

Gdy klient rejestruje lub mapuje domenę, pole URL witryny jest automatycznie wypełniane na podstawie wybranej domeny. Klienci nie muszą wypełniać osobnego pola URL.

### Zachowanie wyszukiwania {#search-behaviour}

- Dostępność domeny jest sprawdzana w czasie rzeczywistym za pomocą AJAX podczas wpisywania przez klienta
- Sugestie alternatywnych TLD są wyświetlane, gdy preferowana domena jest niedostępna
- Ceny są pobierane na żywo i wyświetlane w czytelny sposób (cena rejestracji, cena odnowienia, opcjonalna opłata za prywatność WHOIS)
- Kody kuponów stosują się do produktów domen tak samo jak do każdego innego produktu

**Dostrajanie responsywności wyszukiwania:**

```php
// Increase debounce delay (milliseconds) to reduce API calls on slow connections
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Dodawanie niestandardowych pól do formularza wyszukiwania domeny:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Additional notes',
    ];
    return $fields;
});
```

---

## Zarządzanie DNS klientów {#customer-dns-management}

Klienci mogą zarządzać rekordami DNS dla swoich zarejestrowanych domen na stronie **Moje Account**, w pozycji swojej domeny.

### Obsługiwane typy rekordów {#supported-record-types}

| Typ | Zastosowanie |
|---|---|
| **A** | Mapuje nazwę hosta na adres IPv4 |
| **AAAA** | Mapuje nazwę hosta na adres IPv6 |
| **CNAME** | Tworzy alias wskazujący na inną nazwę hosta |
| **MX** | Ustawia serwer wymiany poczty |
| **TXT** | Dodaje rekordy SPF, DMARC, weryfikacyjne lub inne rekordy tekstowe |

### Którzy dostawcy obsługują zarządzanie DNS? {#which-providers-support-dns-management}

Zarządzanie DNS (dodawanie, edycja, usuwanie rekordów) jest dostępne z **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** i **Openprovider**. Domeny **Hostinger** mogą aktualizować serwery nazw przez Sprzedawcę domen; rekordy DNS dla hostowanych domen są zarządzane przez podstawową integrację mapowania domen Hostinger. Domeny Namecheap, GoDaddy i NameSilo wyświetlają status oraz informacje o wygaśnięciu, ale DNS musi być zarządzany bezpośrednio w panelu sterowania rejestratora.

### Domyślne rekordy DNS {#default-dns-records}

Możesz skonfigurować domyślne rekordy DNS, które są stosowane automatycznie po zarejestrowaniu domeny. Przejdź do **Ustawienia › Sprzedawca domen › Domyślne rekordy DNS**.

Domyślne wartości rekordów obsługują dwa tokeny:

| Token | Zastępowany przez |
|---|---|
| `{DOMAIN}` | Zarejestrowana nazwa domeny (np. `example.com`) |
| `{SITE_URL}` | URL witryny WordPress dla witryny klienta |

**Przykład — skieruj domenę apex i www na IP swojego serwera:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Administrator: wyświetlanie i edycja DNS {#admin-viewing-and-editing-dns}

Administratorzy sieci mogą wyświetlać i edytować rekordy DNS dla dowolnej domeny klienta na stronie edycji domeny w **Network Admin › Ultimate Multisite › Domeny**.
