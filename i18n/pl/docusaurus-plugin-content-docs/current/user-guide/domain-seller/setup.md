---
title: Konfiguracja i ustawienia dostawcy
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: konfiguracja i konfiguracja dostawcy

Dodatek Domain Seller zawiera prowadzony kreator konfiguracji, który przeprowadza Cię przez każdy wymagany krok. Ta strona omawia przebieg kreatora oraz sposób późniejszej konfiguracji lub ponownej konfiguracji dostawców.

## Wymagania {#requirements}

- **Multisite Ultimate** v2.4.12 lub nowszy, aktywowany w sieci
- **PHP** 7.4+
- Dane dostępowe API dla co najmniej jednego obsługiwanego rejestratora

## Kreator pierwszej konfiguracji {#first-run-setup-wizard}

Kreator konfiguracji uruchamia się automatycznie przy pierwszej aktywacji pluginu w sieci. Jest również dostępny w dowolnym momencie z poziomu **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Krok 1 — Wybierz dostawcę {#step-1--choose-a-provider}

Wybierz rejestratora, którego chcesz połączyć. Obsługiwane opcje:

| Dostawca | Zarządzanie DNS | Prywatność WHOIS |
|---|---|---|
| OpenSRS | Tak | Tak |
| Namecheap | Nie | Tak (WhoisGuard, bezpłatnie) |
| HostAfrica | Tak | Tak (ochrona ID) |
| Openprovider | Tak | Tak |
| Hostinger | Przez podstawowe mapowanie domen Hostinger dla hostowanych domen | Tak |
| GoDaddy | Nie | Nie |
| ResellerClub | Tak | Nie |
| NameSilo | Nie | Nie |
| Enom | Tak | Nie |

### Krok 2 — Wprowadź dane dostępowe {#step-2--enter-credentials}

Każdy dostawca ma inne pola danych dostępowych:

**OpenSRS** — nazwa użytkownika i klucz prywatny (z OpenSRS Reseller Control Panel)

**Namecheap** — nazwa użytkownika i klucz API (z Account › Tools › API Access)

**HostAfrica** — endpoint Domains Reseller API i dane dostępowe z modułu resellerskiego HostAfrica. Obecnie nie jest udokumentowany osobny endpoint sandbox; przed uruchomieniem rejestracji na żywo testuj za pomocą bezpiecznych kontroli tylko do odczytu.

**Openprovider** — nazwa użytkownika i hasło z włączonym dostępem API. Opcjonalny tryb sandbox używa Openprovider sandbox API, a opcjonalny domyślny identyfikator klienta może być ponownie używany do rejestracji.

**Hostinger** — współdzielony token Hostinger hPanel API z podstawowej integracji Hostinger. Ten sam token zasila podstawowe mapowanie domen i operacje rejestracji Domain Seller.

**GoDaddy** — klucz API i sekret (z developer.godaddy.com)

**ResellerClub** — ID resellera i klucz API (z panelu sterowania ResellerClub)

**NameSilo** — klucz API (z namesilo.com › Account › API Manager)

**Enom** — ID Account i token API

Zaznacz **Tryb sandbox**, jeśli jest dostępny, aby przetestować środowisko testowe dostawcy przed uruchomieniem na żywo.

### Krok 3 — Przetestuj połączenie {#step-3--test-the-connection}

Kliknij **Test Connection**. Kreator wysyła lekkie wywołanie API, aby zweryfikować dane dostępowe i łączność. Napraw wszelkie problemy z danymi dostępowymi przed kontynuowaniem.

### Krok 4 — Importuj TLD {#step-4--import-tlds}

Kliknij **Import TLDs**, aby pobrać wszystkie dostępne TLD i ceny hurtowe od połączonego dostawcy. Wypełnia to listę TLD używaną przez produkty domenowe. Import może potrwać 30–60 sekund w przypadku dostawców z dużymi katalogami TLD.

TLD są również automatycznie ponownie synchronizowane raz dziennie za pomocą zaplanowanego zadania cron.

### Krok 5 — Utwórz produkt domenowy {#step-5--create-a-domain-product}

Kreator tworzy domyślny uniwersalny produkt domenowy z narzutem 10%. Możesz od razu edytować ten produkt albo pominąć ten krok i utworzyć produkty ręcznie w **Ultimate Multisite › Products**.

Zobacz [Produkty domenowe i ceny](./domain-products), aby uzyskać pełny przewodnik konfiguracji produktu.

---

## Ponowna konfiguracja dostawcy {#reconfiguring-a-provider}

Przejdź do **Network Admin › Ultimate Multisite › Settings › Domain Seller** (lub kliknij **Settings** na liście pluginów).

Strona ustawień zawiera:

- **Włącz sprzedaż domen** — włącza/wyłącza całą funkcję
- **Domyślny dostawca** — dostawca używany do wyszukiwań domen i nowych produktów
- **Maks. TLD na wyszukiwanie** — ile TLD sprawdzać, gdy klient wyszukuje; wyższe wartości pokazują więcej opcji, ale są wolniejsze
- **Czas trwania pamięci podręcznej dostępności** — jak długo przechowywać w pamięci podręcznej wyniki dostępności i cen; niższe wartości są dokładniejsze, ale zwiększają liczbę wywołań API
- **Zarządzaj produktami domenowymi** — szybki link do listy Products
- **Konfiguruj dostawców** — otwiera Integration Wizard, aby dodać lub ponownie skonfigurować dostawców

### Dodawanie drugiego dostawcy {#adding-a-second-provider}

Kliknij **Configure providers** i uruchom kreator ponownie dla nowego rejestratora. Możesz mieć wielu dostawców skonfigurowanych jednocześnie. Przypisz każdy produkt domenowy do konkretnego dostawcy albo pozostaw go przy domyślnym.

### Ręczna synchronizacja TLD {#syncing-tlds-manually}

Na stronie ustawień kliknij **Sync TLDs** obok dowolnego skonfigurowanego dostawcy, aby pobrać najnowsze ceny. Jest to przydatne po tym, jak dostawca zaktualizuje ceny hurtowe lub doda nowe TLD.

---

## Logi {#logs}

Każdy dostawca zapisuje do własnego kanału logów. Logi można przeglądać w **Network Admin › Ultimate Multisite › Logs**:

| Kanał logów | Zawartość |
|---|---|
| `domain-seller-registration` | Wszystkie próby rejestracji (udane i nieudane) |
| `domain-seller-renewal` | Wyniki zadania odnowienia |
| `domain-seller-opensrs` | Surowa aktywność API OpenSRS |
| `domain-seller-namecheap` | Surowa aktywność API Namecheap |
| `domain-seller-hostafrica` | Surowa aktywność API HostAfrica |
| `domain-seller-openprovider` | Surowa aktywność API Openprovider |
| `domain-seller-hostinger` | Surowa aktywność API Hostinger |
| `domain-seller-godaddy` | Surowa aktywność API GoDaddy |
| `domain-seller-resellerclub` | Surowa aktywność API ResellerClub |
| `domain-seller-namesilo` | Surowa aktywność API NameSilo |
| `domain-seller-enom` | Surowa aktywność API Enom |

---

## Uwagi dotyczące możliwości dostawców {#provider-capability-notes}

Nie każde API rejestratora udostępnia te same operacje. Dodatek pokazuje nieobsługiwane operacje za pomocą jasnych błędów widocznych dla administratora, zamiast kończyć się niepowodzeniem bez komunikatu.

- **HostAfrica** obsługuje najszerszy działający workflow resellerski, w tym wyszukiwanie, synchronizację TLD/cen, rejestrację, odnowienie, transfer, aktualizacje nameserverów, rekordy DNS, kody EPP, blokadę rejestratora i ochronę ID.
- **Openprovider** obsługuje synchronizację TLD w cenach resellerskich, rejestrację, odnowienie, transfery, aktualizacje nameserverów, strefy DNS, kody EPP, blokadę rejestratora i prywatność WHOIS. Uwierzytelnia się za pomocą krótkotrwałego bearer token, który dodatek odświeża automatycznie.
- **Hostinger** obsługuje wyszukiwanie dostępności, rejestrację, przeglądanie portfolio, aktualizacje nameserverów, blokadę rejestratora i prywatność WHOIS przez współdzielony token API hPanel. Publiczne Domains API Hostinger nie udostępnia cen resellerskich/hurtowych, transferu przychodzącego, jawnego odnowienia ani pobierania kodu EPP; odnowienia odbywają się wyłącznie automatycznie.
