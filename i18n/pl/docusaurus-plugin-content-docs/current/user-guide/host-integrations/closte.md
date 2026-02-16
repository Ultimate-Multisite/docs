---
title: Integracja z Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Integracja z Closte

## Wprowadzenie
Closte to zarządzana platforma hostingowa dla WordPress, zbudowana na infrastrukturze Google Cloud. Ta integracja umożliwia automatyczną synchronizację domen i zarządzanie certyfikatami SSL między Ultimate Multisite a Closte.

## Funkcje
- Automatyczna synchronizacja domen
- Zarządzanie certyfikatami SSL
- Obsługa domen z wildcard
- Brak potrzeby konfiguracji, jeśli korzystasz z Closte

## Wymagania
Jeśli korzystasz z Closte, w pliku `wp-config.php` musi być zdefiniowana następująca stała:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Ta stała jest zazwyczaj już zdefiniowana, jeśli hostujesz stronę na Closte.

## Instrukcja konfiguracji

### 1. Sprawdź swój klucz API Closte

Jeśli hostujesz stronę na Closte, stała `CLOSTE_CLIENT_API_KEY` powinna być już zdefiniowana w pliku `wp-config.php`. Możesz to sprawdzić, otwierając plik `wp-config.php`.

### 2. Włącz integrację

1. W panelu administracyjnym WordPress przejdź do Ultimate Multisite > Settings
2. Przejdź do zakładki „Domain Mapping"
3. Przewiń w dół do sekcji „Host Integrations"
4. Włącz integrację z Closte
5. Kliknij „Save Changes"

## Jak to działa

Gdy domena zostaje przypisana w Ultimate Multisite:

1. Integracja wysyła żądanie do API Closte, aby dodać domenę do Twojej aplikacji
2. Closte automatycznie zajmuje się wystawieniem certyfikatu SSL
3. Gdy przypisanie domeny zostanie usunięte, integracja usunie domenę z Closte

Integracja współpracuje również z ustawieniem interwału sprawdzania DNS w Ultimate Multisite, co pozwala określić, jak często system ma sprawdzać propagację DNS i wystawienie certyfikatu SSL.

## Tworzenie rekordu domeny

Ta integracja zapewnia, że podczas tworzenia lub duplikowania strony automatycznie tworzony jest rekord domeny. Jest to szczególnie ważne dla integracji z Closte, ponieważ utworzenie rekordu domeny uruchamia API Closte w celu utworzenia domeny i certyfikatu SSL.

## Rozwiązywanie problemów

### Problemy z połączeniem API
- Sprawdź, czy klucz API Closte jest poprawny
- Upewnij się, że Twoje konto Closte ma odpowiednie uprawnienia

### Problemy z certyfikatem SSL
- Wystawienie certyfikatu SSL przez Closte może zająć trochę czasu (zwykle 5-10 minut)
- Sprawdź, czy Twoje domeny prawidłowo wskazują na adres IP serwera Closte
- Zweryfikuj rekordy DNS swojej domeny, aby upewnić się, że są poprawnie skonfigurowane

### Domena nie została dodana
- Sprawdź logi Ultimate Multisite w poszukiwaniu komunikatów o błędach
- Upewnij się, że domena nie została już wcześniej dodana do Closte
- Sprawdź, czy rekordy DNS Twojej domeny są poprawnie skonfigurowane

### Interwał sprawdzania DNS
- Jeśli wystawianie certyfikatów SSL trwa zbyt długo, możesz dostosować interwał sprawdzania DNS w ustawieniach Domain Mapping
- Domyślny interwał to 300 sekund (5 minut), ale podczas testów możesz ustawić go nawet na 10 sekund, aby przyspieszyć sprawdzanie
