---
title: 'Lekcja 7: Personalizacja'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Lekcja 7: Nadanie mu własnego charakteru

Twoi klienci nigdy nie mogą mieć wrażenia, że używają „jakiegoś pluginu WordPressa”. Powinni czuć, że korzystają z FitSite – platformy stworzonej specjalnie dla ich branży. Ta lekcja porusza tematykę brandingu, white-labelingu i sprawienia, że platforma będzie wyglądać jak gotowy produkt.

## Skąd zaczęliśmy

FitSite ma działający proces realizacji zamówienia (checkout flow), który prowadzi właścicieli studiów fitness od wyboru planu do uruchomienia żywej witryny. Teraz sprawimy, że całe doświadczenie będzie wyglądało jak spójny, własny produkt z marką.

## Domeny platformy

Fundamentem Twojej marki jest Twoja domena. W przypadku FitSite:

- **Główna domena**: `fitsite.com` (Twoja strona marketingowa i główny węzeł sieci)
- **Strony klientów**: `studioname.fitsite.com` (poddomeny)
- **Domeny niestandardowe**: Klienci z planów Growth i Pro mogą przypisać własną domenę

### Konfiguracja domeny

1. Zarejestruj domenę platformy
2. Ustaw jej rekordy u dostawcy hostingu
3. Skonfiguruj DNS typu wildcard (`*.fitsite.com`) dla poddomen klientów
4. Upewnij się, że działa wildcard SSL

Szczegółowe instrukcje znajdziesz w [Jak skonfigurować mapowanie domen](/user-guide/domain-mapping/how-to-configure-domain-mapping).

## White-labeling doświadczenia w panelu administracyjnym

Gdy właściciel studia fitness loguje się do panelu swojego miejsca, powinien widzieć Twoją markę, a nie branding WordPressa czy Ultimate Multisite.

### Spersonalizowana strona logowania

Dostosuj stronę logowania WordPressa tak, aby wyświetlała:

- Logo FitSite
- Tło pasujące do branży fitness
- Kolory Twojej marki

### Branding panelu administracyjnego (Dashboard)

Użyj dodatku [Admin Page Creator](/addons/admin-page-creator) lub niestandardowego CSS, aby:

- Zastąpić logo WordPressa logo FitSite
- Dostosować schemat kolorów panelu administracyjnego, aby pasował do Twojej marki
- Dodać niestandardowy widget na dashboard z szybkim dostępem do linków i zasobów pomocniczych specyficznych dla fitnessu

### Niestandardowe strony administracyjne

Rozważ stworzenie niestandardowych stron administracyjnych, które wyświetlają najbardziej istotne działania dla właścicieli studiów fitness:

- „Edytuj harmonogram zajęć”
- „Aktualizuj profile trenerów”
- „Zobacz swoją witrynę”

To zmniejsza krzywą uczenia się, umieszczając działania istotne dla danej niszy na pierwszym planie, zamiast ukrywać je w standardowym menu WordPressa.

## Branding komunikacji

Każdy e-mail, faktura i powiadomienie powinno wzmacniać Twoją markę.

### Systemowe e-maile

Przejdź do **Ultimate Multisite > Settings > Emails** i dostosuj wszystkie systemowe e-maile:

- **Nadawca**: FitSite
- **E-mail nadawcy**: hello@fitsite.com
- **Szablony e-mail**: Użyj kolorów i logo Twojej marki
- **Język**: Specyficzny dla fitnessu w całym tekście

Kluczowe e-maile do dostosowania:

| E-mail | Wersja ogólna | Wersja FitSite |
|-------|----------------|-----------------|
| Powitanie | „Twoja nowa strona jest gotowa” | „Twoja witryna studia fitness jest aktywna” |
| Potwierdzenie płatności | „Otrzymano płatność” | „Potwierdzono płatność subskrypcji FitSite” |
| Koniec okresu próbnego | „Twój okres próbny kończy się wkrótce” | „Twój okres próbny FitSite kończy się za 3 dni – utrzymaj aktywną witrynę studia” |

### Faktury

Dostosuj szablony faktur, dodając:

- Logo FitSite i kolory marki
- Twoje dane firmowe
- Nazwy produktów specyficzne dla fitnessu (a nie ogólne ID planów)

## Strona widoczna dla klienta

Twoja główna domena (`fitsite.com`) musi mieć stronę marketingową, która sprzedaje platformę. Jest to oddzielne od panelu administracyjnego sieci Ultimate Multisite – to publiczna twarz Twojego biznesu.

Kluczowe strony:

- **Strona główna**: Jasna propozycja wartości dla biznesów fitness
- **Funkcje**: Co robi FitSite, ale w terminologii fitnessu
- **Cennik**: Twoje trzy plany z porównaniem funkcji specyficznych dla niszy
- **Przykłady**: Prezentacja stron zbudowanych na platformie
- **Rejestracja**: Linki do Twojego formularza płatności

:::tip Twoja strona marketingowa może być stroną sieciową
Utwórz swoją stronę marketingową jako stronę w ramach własnej sieci. Pozwoli Ci to zarządzać nią z tego samego dashboardu i zaprezentuje możliwości Twojej własnej platformy.
:::

## Domeny niestandardowe dla klientów

Dla klientów, którzy korzystają z planów obejmujących domeny niestandardowe, jasno udokumentuj ten proces:

1. Klient rejestruje lub przenosi swoją domenę do rejestratora
2. Klient aktualizuje DNS, aby wskazywać na Twoją platformę (podaj dokładne rekordy)
3. Ultimate Multisite zajmuje się mapowaniem domeny i SSL

Stwórz artykuł pomocy lub wpis do bazy wiedzy dedykowany temu procesowi, napisany dla niepasujących technicznie właścicieli studiów fitness.

## Sieć FitSite do tej pory

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding
│   ├── Custom login page
│   ├── Branded admin dashboard
│   ├── Niche-specific system emails
│   ├── Branded invoices
│   └── Marketing site on fitsite.com
└── Ready for onboarding flow (next lesson)
```

## Co zbudowaliśmy w tej lekcji

- **Domena platformy i DNS** skonfigurowane dla spójnego doświadczenia z marką
- **White-labelowany panel administracyjny** z brandingiem FitSite na każdym kroku
- **Dostosowane komunikaty** – e-maile, faktury i powiadomienia są w całości na brandzie
- **Strona marketingowa**, która sprzedaje FitSite właścicielom studiów fitness
- **Dokumentacja domen niestandardowych** dla klientów, którzy chcą własną domenę

---

**Następne:** [Lekcja 8: Onboarding klienta](lesson-8-onboarding) – projektujemy doświadczenie, które przekształca nowego zapisującego się klienta w aktywnego, zadowolonego użytkownika.
