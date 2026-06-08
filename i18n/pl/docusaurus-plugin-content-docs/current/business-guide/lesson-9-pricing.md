---
title: 'Lekcja 9: Ceny dla zysku'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# Lekcja 9: Cennik dla Zysku

W Lekcji 5 ustaliliśmy początkowe ceny dla planów FitSite. Teraz dopracujemy strategię cenową, używając technik, które zwiększają przychody, zachęcają do ulepszeń i zmniejszają rezygnacje (churn).

## Skąd zaczęliśmy

FitSite ma już gotowe plany, szablony, proces płatności (checkout), branding i proces wdrożenia (onboarding). Początkowe ceny wynosiły 49/99/199 USD miesięcznie. Teraz sprawimy, że te ceny będą pracować ciężej.

## Zasady ustalania cen dla platform niszowych

### Cena na podstawie wartości, a nie kosztu

Twoje koszty hostingu mogą wynosić 5–15 USD za klienta. Nie oznacza to, że Twoja cena powinna wynosić 20 USD. Nie sprzedajesz hostingu. Sprzedajesz:

- Profesjonalną witrynę fitness, którą stworzenie na zamówienie kosztowałoby 2000–5000 USD
- Ciągłe utrzymanie, aktualizacje i bezpieczeństwo, o których klient nie musi myśleć
- Funkcje specyficzne dla niszy, których nie oferują ogólne konstruktory
- Wiarygodność platformy stworzonej specjalnie dla ich branży

Ustalaj cenę na podstawie wartości, jaką dostarczasz, a nie kosztu jej dostarczenia.

### Kotwiczenie względem alternatyw

Kiedy właściciel studia fitness ocenia FitSite, porównuje go do:

- **Zatrudnienia web developera**: 2000–5000 USD jednorazowo + 50–100 USD/miesiąc na utrzymanie
- **Wix/Squarespace**: 16–45 USD/miesiąc, ale bez funkcji specyficznych dla fitnessu, muszą je stworzyć sami
- **Nic nie robienia**: Utrata członków, którzy nie mogą ich znaleźć online

Przy cenie 49–199 USD/miesiąc, FitSite jest tańszy niż developer, bardziej funkcjonalny niż ogólne konstruktory i nieskończenie lepszy niż brak strony internetowej.

## Wdrażanie wariantów cenowych

Cennik roczny zachęca do zaangażowania i zmniejsza rezygnacje. Przejdź do zakładki **Price Variations** (Warianty cenowe) każdego planu i dodaj opcje roczne:

| Plan | Miesięcznie | Rocznie (miesięcznie) | Całkowity roczny koszt | Oszczędność |
|------|---------|-------------------|--------------|---------|
| Starter | 49 USD/msc | 39 USD/msc | 468 USD/rok | 20% zniżki |
| Growth | 99 USD/msc | 79 USD/msc | 948 USD/rok | 20% zniżki |
| Pro | 199 USD/msc | 159 USD/msc | 1908 USD/rok | 20% zniżki |

Dodaj pole **Period Selection** (Wybór okresu) do formularza płatności, aby klienci mogli przełączać się między rozliczeniem miesięcznym a rocznym. Zobacz [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

### Dlaczego cennik roczny działa

- **Dla Ciebie**: Gotówka z góry, niższe rezygnacje (klienci płacący rocznie są mniej skłonni do anulowania w trakcie trwania umowy)
- **Dla nich**: Realne oszczędności, przewidywalność budżetu

## Opłaty za konfigurację (Setup Fees)

Rozważ jednorazową opłatę za konfigurację dla planów, które obejmują ręczne ustawienia:

- **Starter**: Brak opłaty za konfigurację (usuwa bariery wejścia)
- **Growth**: Opłata za konfigurację 99 USD (pokrywa konfigurację niestandardowej domeny i wstępną konsultację)
- **Pro**: Opłata za konfigurację 299 USD (pokrywa ustawienie wielu lokalizacji i rozmowę wprowadzającą)

Skonfiguruj opłaty za konfigurację w sekcji cenowej każdego planu. Aby uzyskać szczegóły, zobacz [Creating Your First Subscription Product](/user-guide/configuration/creating-your-first-subscription-product).

## Okresy próbne (Trial Periods)

Oferowanie okresu próbnego zmniejsza opór przy rejestracji, ale wprowadza ryzyko braku konwersji. Dla FitSite:

- **7-dniowy darmowy okres próbny** tylko dla planu Starter
- Brak okresu próbnego dla Growth i Pro (ci klienci są bardziej zaangażowani i spodziewają się płacić)

Skonfiguruj okres próbny w sekcji cenowej planu Starter, włączając przełącznik **Offer Trial** (Oferuj okres próbny) i ustawiając czas trwania na 7 dni.

### Jak sprawić, by okresy próbne się zamieniły w płatność

Okres próbny działa tylko wtedy, gdy klient odczuje wartość w trakcie tego okresu. Twoja sekwencja wdrożenia (Lekcja 8) jest tu kluczowa – e-maile powitalne powinny być zaplanowane tak, aby napędzać zaangażowanie w ciągu 7 dni.

## Kody rabatowe (Discount Codes)

Utwórz strategiczne kody rabatowe do konkretnych celów:

- **FITLAUNCH** — 30% zniżki na pierwsze 3 miesiące (do promocji startowej)
- **ANNUAL20** — 20% zniżki na plany roczne (jeśli nie są już przecenione)
- **REFERRAL** — 1 miesiąc gratis (dla poleceń od klientów)

Przejdź do **Ultimate Multisite > Discount Codes**, aby je utworzyć. Aby zapoznać się z pełnym przewodnikiem, zobacz [Creating Discount Codes](/user-guide/configuration/creating-discount-codes).

:::tip Nie rabatuj domyślnie
Zniżki powinny być strategicznymi narzędziami, a nie stałym elementem. Jeśli każdy otrzymuje zniżkę, nie jest to zniżka – to Twoja prawdziwa cena. Używaj ich do konkretnych kampanii, poleceń i promocji ograniczonych czasowo.
:::

## Obsługa podatków (Tax Handling)

Jeśli działasz w jurysdykcji, która wymaga poboru podatków:

1. Skonfiguruj stawki podatkowe w **Ultimate Multisite > Settings > Taxes**
2. Przypisz kategorie podatkowe do swoich planów
3. Upewnij się, że faktury wyświetlają podatek poprawnie

Aby uzyskać szczegółową konfigurację, zobacz [Tax Handling](/user-guide/payment-gateways/tax-handling). Jeśli obsługujesz klientów międzynarodowych, rozważ dodatek [VAT addon](/addons/vat) w celu zgodności z przepisami UE.

## Przeglądanie cen

Po uruchomieniu, przeglądaj ceny kwartalnie. Zwróć uwagę na:

- **Współczynnik konwersji według planu**: Jeśli Starter konwertuje dobrze, ale Growth nie, luka między nimi może być zbyt duża
- **Wskaźnik ulepszeń (Upgrade rate)**: Jeśli mało klientów ulepsza się ze Starter do Growth, plan Growth może nie oferować wystarczającej dodatkowej wartości
- **Rezygnacje według planu (Churn by plan)**: Jeśli klienci roczni rezygnują rzadziej, mocniej promuj cennik roczny
- **Ceny konkurencji**: Ile żądają alternatywy? Czy jesteś odpowiednio pozycjonowany?

## Sieć FitSite do tej pory

```
FitSite Network
├── WordPress Multisite (tryb poddomeny)
├── Ultimate Multisite (skonfigurowany + z brandingiem)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter (49 USD/msc lub 468 USD/rok) + 7-dniowy okres próbny
│   ├── FitSite Growth (99 USD/msc lub 948 USD/rok) + opłata za konfigurację 99 USD
│   ├── FitSite Pro (199 USD/msc lub 1908 USD/rok) + opłata za konfigurację 299 USD
│   └── Order Bumps + Kody rabatowe
├── Checkout Flow (z przełącznikiem wyboru okresu)
├── Branding (logowanie, dashboard, e-maile, faktury, strona marketingowa)
├── Customer Onboarding (Quick Start, e-maile, zasoby pomocy)
├── Strategia cenowa
│   ├── Zniżki roczne (20% zniżki)
│   ├── Strategiczne opłaty za konfigurację
│   ├── 7-dniowy okres próbny dla Starter
│   ├── Kody rabatowe dla kampanii i poleceń
│   └── Konfiguracja podatków
└── Gotowe do uruchomienia (następna lekcja)
```

## Co zbudowaliśmy w tej lekcji

- **Cennik roczny** ze zniżką 20%, aby zachęcić do zaangażowania
- **Opłaty za konfigurację** na wyższych poziomach, aby pokryć wysiłek wdrożeniowy
- **Okres próbny** na planie początkowym, aby zmniejszyć opór przy rejestracji
- **Strategiczne kody rabatowe** na start, polecenia i kampanie
- **Konfiguracja podatków** dla zgodnego rozliczania
- **Ramki przeglądu cen** do ciągłej optymalizacji

---

**Następne:** [Lekcja 10: Dzień Uruchomienia](lesson-10-launch) — lista kontrolna przed uruchomieniem i przejście do działania.
