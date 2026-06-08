---
title: Konfiguracja i ustawienia dostawcy
sidebar_position: 1
_i18n_hash: 2a9c0d63fc6ee6bad011c099707fb3f3
---
# Sprzedaż Domen: Konfiguracja i Ustawienia Dostawców

Dodatek Domain Seller zawiera kreatywny wizard konfiguracji, który krok po kroku przeprowadzi Cię przez wszystkie wymagane etapy. Ta strona opisuje działanie tego wirtualnego przewodnika oraz sposób konfiguracji lub ponownej konfiguracji dostawców po jego zakończeniu.

## Wymagania

- **Ultimate Multisite** w wersji v2.4.12 lub nowszej, aktywowany na poziomie sieci (network-activated)
- **PHP** 7.4+
- Poświadczenia API dla co najmniej jednego obsługiwanego rejestratora

## Wizard pierwszego uruchomienia

Wizard konfiguracji uruchamia się automatycznie za pierwszym razem, gdy aktywujesz plugin na poziomie sieci. Jest również dostępny w dowolnym momencie w sekcji **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Krok 1 — Wybór dostawcy

Wybierz rejestrator, z którym chcesz się połączyć. Obsługiwane opcje:

| Provider | DNS management | WHOIS privacy |
|---|---|---|
| OpenSRS | Tak | Tak |
| Namecheap | Nie | Tak (WhoisGuard, darmowy) |
| GoDaddy | Nie | Nie |
| ResellerClub | Tak | Nie |
| NameSilo | Nie | Nie |
| Enom | Tak | Nie |

### Krok 2 — Podanie poświadczeń

Każdy dostawca wymaga różnych pól do podania poświadczeń:

**OpenSRS** — Nazwa użytkownika i klucz prywatny (z OpenSRS Reseller Control Panel)

**Namecheap** — Nazwa użytkownika i klucz API (z Account › Tools › API Access)

**GoDaddy** — Klucz API i sekret (z developer.godaddy.com)

**ResellerClub** — ID Resellera i klucz API (z panelu kontrolnego ResellerClub)

**NameSilo** — Klucz API (z namesilo.com › Account › API Manager)

**Enom** — ID konta i token API

Sprawdź **Sandbox mode**, jeśli jest dostępny, aby przetestować połączenie w środowisku testowym dostawcy, zanim przejdziesz do trybu produkcyjnego.

### Krok 3 — Test połączenia

Kliknij **Test Connection**. Wizard wysyła lekkie wywołanie API, aby zweryfikować poświadczenia i łączność. Napraw wszelkie problemy z poświadczeniami, zanim przejdziesz dalej.

### Krok 4 — Import TLDs

Kliknij **Import TLDs**, aby pobrać wszystkie dostępne TLD i ceny hurtowe od połączonego dostawcy. Wypełnia to listę TLD używaną przez produkty domenowe. Import może trwać od 30 do 60 sekund dla dostawców z dużymi katalogami TLD.

TLD są również automatycznie synchronizowane raz dziennie za pomocą zaplanowanego zadania cron.

### Krok 5 — Utworzenie produktu domenowego

Wizard tworzy domyślny produkt domenowy typu "catch-all" z 10% marżą. Możesz edytować ten produkt od razu lub pominąć ten krok i utworzyć produkty ręcznie w sekcji **Ultimate Multisite › Products**.

Zobacz [Domain Products and Pricing](./domain-products), aby zapoznać się z pełnym przewodnikiem konfiguracji produktów.

---

## Ponowna konfiguracja dostawcy

Przejdź do **Network Admin › Ultimate Multisite › Settings › Domain Seller** (lub kliknij **Settings** na liście pluginów).

Strona ustawień zawiera:

- **Enable domain selling** — przełączanie całej funkcji włączony/wyłączony
- **Default provider** — dostawca używany do wyszukiwania domen i nowych produktów
- **Max TLDs per search** — ile TLD ma być sprawdzanych, gdy klient wyszukuje domenę; wyższe wartości pokazują więcej opcji, ale są wolniejsze
- **Availability cache duration** — jak długo cache'ować wyniki dostępności i cen; niższe wartości są dokładniejsze, ale zwiększają wywołania API
- **Manage domain products** — szybki link do listy produktów
- **Configure providers** — otwiera Wizard Integracji, aby dodać lub ponownie skonfigurować dostawców

### Dodawanie drugiego dostawcy

Kliknij **Configure providers** i uruchom wizard ponownie dla nowego rejestratora. Możesz skonfigurować jednocześnie wielu dostawców. Przypisz każdy produkt domenowy do konkretnego dostawcy lub zostaw go na domyślnym.

### Ręczna synchronizacja TLDs

Na stronie ustawień kliknij **Sync TLDs** obok dowolnie skonfigurowanego dostawcy, aby pobrać najnowsze ceny. Jest to przydatne, gdy dostawca aktualizuje ceny hurtowe lub dodaje nowe TLD.

---

## Logi

Każdy dostawca zapisuje swoje własne kanały logów. Logi są widoczne w sekcji **Network Admin › Ultimate Multisite › Logs**:

| Log channel | Contents |
|---|---|
| `domain-seller-registration` | Wszystkie próby rejestracji (sukces i niepowodzenie) |
| `domain-seller-renewal` | Wyniki zadań odnowienia |
| `domain-seller-opensrs` | Surowa aktywność API OpenSRS |
| `domain-seller-namecheap` | Surowa aktywność API Namecheap |
| `domain-seller-godaddy` | Surowa aktywność API GoDaddy |
| `domain-seller-resellerclub` | Surowa aktywność API ResellerClub |
| `domain-seller-namesilo` | Surowa aktywność API NameSilo |
| `domain-seller-enom` | Surowa aktywność API Enom |
