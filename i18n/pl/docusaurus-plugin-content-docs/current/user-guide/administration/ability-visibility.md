---
title: Widoczność uprawnień
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Widoczność Zdolności

Superdav AI Agent v1.12.0 wprowadza kontrole **Widoczności Zdolności** (Ability Visibility), które określają, na jakich interfejsach dana zdolność jest dostępna. Pozwala to administratorom precyzyjnie określić, które możliwości agenta są dostępne przez REST API, serwery MCP, integracje WooCommerce i inne interfejsy.

## Co to jest Widoczność Zdolności?

Widoczność Zdolności to system uprawnień, który kontroluje:

- **Jakie zdolności** są dostępne dla agentów
- **Gdzie są eksponowane** (REST API, MCP, WooCommerce itp.)
- **Kto może do nich uzyskać dostęp** (poprzez listy dozwolonych partnerów)
- **Jak są klasyfikowane** (rozpoznane vs. nierozpoznane)

Każda zdolność ma poziom widoczności, który określa jej dostępność na różnych interfejsach.

## Poziomy Widoczności

### Publiczne (Public)

**Publiczne zdolności** są dostępne wszędzie:

- Endpointy REST API
- Serwery MCP
- Integracje WooCommerce
- Interfejsy czatu
- Wszystkie role użytkowników (przy odpowiednich uprawnieniach)

Przykład: `scaffold-block-theme`, `activate-theme`, `send-email`

### Wewnętrzne (Internal)

**Wewnętrzne zdolności** są dostępne tylko w ramach Twojej instalacji WordPress:

- Interfejsy czatu
- Panele administracyjne
- Tylko dla zalogowanych użytkowników
- Nie są eksponowane przez REST API ani zewnętrzne integracje

Przykład: `manage-settings`, `view-analytics`, `export-data`

### Partner (Partner)

**Zdolności Partnera** są dostępne tylko dla partnerów znajdujących się na białej liście:

- Wymaga wyraźnego wpisu na liście dozwolonych partnerów
- Dostępne przez REST API z poświadczeniami partnera
- Dostępne przez MCP z uwierczytelnieniem partnera
- Niedostępne dla zwykłych użytkowników

Przykład: `bulk-import-users`, `modify-billing`, `access-analytics`

### Wyłączone (Disabled)

**Wyłączone zdolności** nie są dostępne nigdzie:

- Nie są eksponowane przez żaden interfejs
- Niedostępne w czacie
- Niedostępne w panelach administracyjnych
- Przydatne dla przestarzałych lub eksperymentalnych zdolności

## Zarządzanie Widocznością Zdolności

### Dostęp do Ustawień Widoczności Zdolności

1. Przejdź do **Panelu Administracyjnego WordPress** → **Superdav AI Agent** → **Ustawienia**
2. Kliknij zakładkę **Abilities**
3. Zobaczysz listę wszystkich zainstalowanych zdolności wraz z ich poziomami widoczności

### Podgląd Szczegółów Zdolności

Kliknij dowolną zdolność, aby zobaczyć:

- **Nazwa**: Identyfikator zdolności
- **Opis**: Co dana zdolność robi
- **Aktualna widoczność**: Publiczna, Wewnętrzna, Partnera lub Wyłączona
- **Lista dozwolonych partnerów**: Którzy partnerzy mogą uzyskać dostęp (jeśli widoczność Partnera)
- **Ostatnia aktualizacja**: Kiedy widoczność była ostatnio zmieniana
- **Status**: Rozpoznana czy Nierozpoznana

### Zmiana Poziomów Widoczności

Aby zmienić widoczność zdolności:

1. Kliknij zdolność na liście
2. Wybierz nowy poziom widoczności z rozwijanego menu
3. Jeśli wybierasz "Partner", dodaj identyfikatory partnerów do listy dozwolonych
4. Kliknij **Zapisz**

Przykład:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Operacje Masowe

Aby zmienić widoczność wielu zdolności:

1. Zaznacz pola obok zdolności
2. Wybierz nowy poziom widoczności z rozwijanego menu akcji masowych
3. Kliknij **Zastosuj**

## Lista Dostępnych Partnerów (Partner Allow-List)

**Lista dostępnych partnerów** kontroluje, którzy zewnętrzni partnerzy mogą uzyskać dostęp do zdolności na poziomie Partnera.

### Dodawanie Partnerów

1. Przejdź do **Superdav AI Agent** → **Ustawienia** → **Partnerzy**
2. Kliknij **Dodaj Partnera**
3. Wprowadź identyfikator partnera (zazwyczaj klucz API lub ID organizacji)
4. Opcjonalnie dodaj nazwę i opis partnera
5. Kliknij **Zapisz**

### Przypisywanie Zdolności Partnerom

Po dodaniu partnera:

1. Przejdź do zakładki **Abilities**
2. Znajdź zdolność z widocznością Partnera
3. Kliknij, aby edytować
4. W sekcji "Partner allow-list" zaznacz pola dla partnerów, którzy mają mieć dostęp
5. Kliknij **Zapisz**

### Cofanie Dostępu Partnera

Aby usunąć dostęp partnera:

1. Edytuj zdolność
2. Odznacz pole partnera na liście dozwolonych
3. Kliknij **Zapisz**

Partner natychmiast straci dostęp do tej zdolności.

## Nierozpoznane Zdolności (Unclassified Abilities)

Gdy instalujesz zdolność zewnętrznego dostawcy, której Superdav AI Agent nie rozpoznaje, jest ona oznaczana jako **Nierozpoznana** (Unclassified).

### Powiadomienie Administracyjne o Nierozpoznanych Zdolnościach

Zobaczysz powiadomienie administracyjne:

```
⚠️ Wykryto Nierozpoznane Zdolności

Poniższe zdolności zostały zainstalowane, ale nie są rozpoznawane:
- custom-import-tool
- external-api-wrapper

Te zdolności mogą stwarzać ryzyko bezpieczeństwa lub kompatybilności.
Prosimy o ich sprawdzenie i sklasyfikowanie.

[Sprawdź Zdolności] [Zamknij]
```

### Sprawdzanie Nierozpoznanych Zdolności

1. Kliknij **Sprawdź Zdolności** w powiadomieniu
2. Dla każdej nierozpoznanej zdolności zobaczysz:
   - Nazwę i opis zdolności
   - Źródło (jaki plugin/addon ją zainstalował)
   - Sugerowany poziom widoczności
   - Ocena bezpieczeństwa

3. Wybierz poziom widoczności:
   - **Publiczne**: Ufasz zdolności; eksponujesz ją wszędzie
   - **Wewnętrzne**: Ograniczasz do użytku wewnętrznego
   - **Partner**: Ograniczasz do określonych partnerów
   - **Wyłączone**: Nie używaj tej zdolności

4. Kliknij **Sklasyfikuj** (Classify), aby zapisać swoją decyzję

### Dlaczego należy sklasyfikować nierozpoznane zdolności?

Klasyfikowanie zdolności:

- **Poprawia bezpieczeństwo**: Wyraźnie zatwierdzasz, co jest eksponowane
- **Zapobiega wypadkom**: Nierozpoznane zdolności są domyślnie wyłączone
- **Umożliwia funkcje**: Po sklasyfikowaniu zdolność staje się dostępna
- **Dokumentuje decyzje**: Twoje wybory są rejestrowane w celach audytowych

## Widoczność na Różnych Interfejsach

### REST API

**Publiczne zdolności** są dostępne przez endpointy REST:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Zdolności Wewnętrzne i Partnera** nie są dostępne przez REST API.

### Serwery MCP

**Publiczne zdolności** są dostępne przez MCP:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**Zdolności Wewnętrzne** nie są eksponowane przez MCP.

**Zdolności Partnera** są dostępne tylko z poświadczeniami partnera.

### Integracja WooCommerce

**Publiczne zdolności** związane z WooCommerce są dostępne:

- Zarządzanie produktami
- Przetwarzanie zamówień
- Komunikacja z klientami

**Zdolności Wewnętrzne** nie są eksponowane dla WooCommerce.

### Interfejs Czatowy

**Wszystkie zdolności** (Publiczne, Wewnętrzne, Partnera) są dostępne w czacie, w zależności od uprawnień użytkownika:

- Administratorzy widzą wszystkie zdolności
- Zwykli użytkownicy widzą tylko zdolności Publiczne
- Partnerzy widzą zdolności Publiczne + Partnera (jeśli są na białej liście)

## Najlepsze Praktyki Bezpieczeństwa

### Zasada Najmniejszych Przywilejów (Principle of Least Privilege)

- Ustaw zdolności na najbardziej restrykcyjną widoczność, która nadal umożliwia ich użycie
- Używaj widoczności Partnera dla wrażliwych operacji
- Wyłącz zdolności, których nie używasz

### Regularne Audyty

- Sprawdzaj widoczność zdolności co miesiąc
- Szukaj nierozpoznanych zdolności
- Usuwaj dostęp dla nieużywanych partnerów

### Logowanie i Monitorowanie

- Monitoruj, które zdolności są używane najczęściej
- Śledź wzorce dostępu partnerów
- Otrzymuj alerty o nietypowym użyciu zdolności

### Zdolności Zewnętrznych Dostawców (Third-Party Abilities)

- Sprawdź zdolności zewnętrznych dostawców przed włączeniem
- Sklasyfikuj je wyraźnie
- Zacznij od widoczności Wewnętrznej lub Partnera
- Promuj do Publicznej tylko po weryfikacji

## Rozwiązywanie Problemów (Troubleshooting)

**Zdolność nie pojawia się na liście**
- Sprawdź, czy zdolność jest zainstalowana i aktywna
- Upewnij się, że plugin/addon jest włączony
- Odśwież stronę

**Nie mogę zmienić widoczności zdolności**
- Upewnij się, że masz uprawnienia administratora
- Sprawdź, czy zdolność nie jest zablokowana przez inny plugin
- Spróbuj wyłączyć konfliktujące plugin

**Partner nie może uzyskać dostępu do zdolności**
- Upewnij się, że partner znajduje się na liście dozwolonych
- Sprawdź, czy widoczność zdolności jest ustawiona na Partnera
- Potwierdź, że poświadczenia partnera są poprawne
- Sprawdź logi API pod kątem błędów uwierzytelniania

**Nierozpoznane zdolności nadal się pojawiają**
- Sprawdź i sklasyfikuj je w powiadomieniu administracyjnym
- Upewnij się, że Twoja klasyfikacja została zapisana
- Sprawdź, czy plugin dostarczający zdolność jest aktualny

## Migracja ze Starego Trybu (Legacy Mode)

Jeśli aktualizujesz się ze starszej wersji Superdav AI Agent:

- Wszystkie istniejące zdolności są automatycznie sklasyfikowane jako Publiczne
- Sprawdź i dostosuj widoczność w razie potrzeby
- Nie jest wymagana żadna akcja, chyba że chcesz ograniczyć dostęp

Zobacz **Migracja z Trybu Zewnętrznego Dostawcy** (Third-Party Mode Migration) o więcej szczegółów dotyczących przejścia do natywnej integracji Abilities API.

## Następne Kroki

Po skonfigurowaniu widoczności zdolności:

1. **Przejrzyj swoje zdolności**: Przeprowadź audyt wszystkich zainstalowanych zdolności
2. **Sklasyfikuj nierozpoznane zdolności**: Odpowiedz na powiadomienia administracyjne
3. **Ustaw partnerów**: Dodaj partnerów, jeśli używasz widoczności Partnera
4. **Monitoruj użycie**: Śledź, które zdolności są używane najczęściej
5. **Dokumentuj decyzje**: Prowadź notatki, dlaczego wybrałeś dany poziom widoczności
