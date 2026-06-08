---
title: 'Lekcja 6: Doświadczenie rejestracji'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Lekcja 6: Doświadczenie rejestracji

Proces płatności (checkout flow) to moment, w którym zainteresowanie zamienia się w przychód. Nieporęczny lub ogólny proces rejestracji powoduje utratę klientów. Proces dedykowany konkretnej niszy, który mówi ich językiem i wydaje się naturalny, skutecznie zamienia ich w płacących klientów.

## Skąd zaczęliśmy

FitSite ma skonfigurowane szablony i plany. Teraz zbudujemy proces rejestracji i płatności, który zamieni właścicieli studiów fitness w płacących klientów.

## Zrozumienie procesu rejestracji

Formularze płatności Ultimate Multisite to w pełni konfigurowalne, wieloetapowe formularze. Dla FitSite chcemy proces, który:

1.  Wygląda tak, jakby był stworzony specjalnie dla biznesów fitness.
2.  Zbiera tylko niezbędne informacje.
3.  Pozwala klientowi jak najszybciej dostać się do działającej witryny.

Pełną referencję techniczną można znaleźć w [Procesie rejestracji](/user-guide/configuration/the-registration-flow).

## Projektowanie płatności FitSite

Przejdź do **Ultimate Multisite > Checkout Forms** i utwórz nowy formularz.

### Krok 1: Wybór planu

Pierwszą rzeczą, jaką powinien zobaczyć właściciel studia fitness, są plany, przedstawione w terminologii, którą rozumie.

- Dodaj pole **Pricing Table** (Tabela cen)
- Skonfiguruj je tak, aby wyświetlało wszystkie trzy plany FitSite
- Opisy planów, które napisałeś w Lekcji 5, pojawią się tutaj — upewnij się, że odnoszą się do potrzeb biznesu fitness, a nie do cech technicznych

:::tip Język niszy ma znaczenie
„1 GB pamięci” nic nie znaczy dla właściciela siłowni. „Wszystko, czego potrzebujesz do profesjonalnej witryny studia” oznacza wszystko. Pisząc opisy planów, używaj języka swojego klienta.
:::

### Krok 2: Wybór szablonu

Po wybraniu planu klient wybiera swój szablon startowy.

- Dodaj pole **Template Selection** (Wybór szablonu)
- Dostępne szablony są filtrowane na podstawie wybranego planu (skonfigurowano w Lekcji 5)
- Każdy szablon powinien mieć podgląd graficzny pokazujący design dedykowany fitnessowi

### Krok 3: Tworzenie konta

Utrzymaj to minimalne. Zbierz tylko:

- Adres e-mail
- Hasło
- Nazwa studia/firmy (to stanie się nazwą ich witryny)

Nie proś o informacje, których nie potrzebujesz przy rejestracji. Każde dodatkowe pole zmniejsza konwersję.

### Krok 4: Konfiguracja witryny

- **Tytuł witryny**: Wypełnij automatycznie nazwą studia wprowadzoną w Kroku 3
- **URL witryny**: Wygeneruj automatycznie na podstawie nazwy studia (np. `ironworks.fitsite.com`)

### Krok 5: Płatność

- Dodaj pole **Payment** (Płatność)
- Skonfiguruj swoją bramkę płatniczą (zalecany [Stripe](/user-guide/payment-gateways/stripe) do rozliczeń subskrypcyjnych)
- Jeśli w Lekcji 5 utworzyłeś dodatkowe opcje zamówienia (order bumps), dodaj pole **Order Bump** przed krokiem płatności

### Krok 6: Potwierdzenie

- Dostosuj komunikat potwierdzający, używając języka specyficznego dla fitnessu
- Przykład: „Twoja witryna studia fitness jest tworzona. Przekierujemy Cię na nową witrynę za kilka sekund.”

## Dodawanie przełącznika wyboru okresu

Jeśli skonfigurowałeś w planach różne okresy rozliczeniowe (miesięczne vs. roczne), dodaj pole **Period Selection** do formularza płatności, aby klienci mogli przełączać okresy rozliczeniowe. Instrukcje znajdziesz w [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

## Konfigurowanie płatności

Jeśli nie skonfigurowałeś jeszcze bramki płatniczej:

1. Przejdź do **Ultimate Multisite > Settings > Payment Gateways**
2. Postępuj zgodnie z [przewodnikiem konfiguracji Stripe](/user-guide/payment-gateways/stripe) lub preferowaną bramką
3. Przeprowadź pełny test procesu płatności, używając trybu testowego

Szczegółowe informacje o tym, jak płatności trafiają na Twoje konto, znajdziesz w [Getting Paid](/user-guide/payment-gateways/getting-paid).

## Testowanie procesu

Zanim przejdziesz dalej, wykonaj pełny test rejestracji:

1. Otwórz formularz płatności w trybie incognito/prywatnej przeglądarce
2. Wybierz plan
3. Wybierz szablon
4. Utwórz konto
5. Ukończ płatność (użyj trybu testowego)
6. Zweryfikuj, czy witryna została utworzona z poprawnym szablonem

Sprawdź, czy:

- [ ] Opisy planów są jasne i dedykowane niszy
- [ ] Podglądy szablonów pokazują odpowiednie dla fitnessu projekty
- [ ] URL witryny generuje się poprawnie na podstawie nazwy studia
- [ ] Płatność przetwarza się pomyślnie
- [ ] Klient trafia na działającą witrynę z wybranym szablonem
- [ ] E-maile potwierdzające używają języka specyficznego dla fitnessu

## Sieć FitSite do tej pory

```
FitSite Network
├── WordPress Multisite (tryb poddomeny)
├── Ultimate Multisite (skonfigurowany)
├── Hosting z wildcard SSL + mapowaniem domen
├── Szablony witryn (Studio Essential, Gym Pro, Fitness Chain)
├── Produkty (Starter, Growth, Pro + Order Bumps)
├── Proces płatności (Checkout Flow)
│   ├── Wybór planu z opisami dedykowanymi niszy
│   ├── Wybór szablonu z podglądami fitness
│   ├── Minimalne tworzenie konta
│   ├── Płatność przez Stripe
│   └── Potwierdzenie dedykowane fitnessowi
└── Gotowe do brandingu (następna lekcja)
```

## Co zbudowaliśmy w tej lekcji

- **Wieloetapowy formularz płatności** dostosowany do właścicieli studiów fitness
- **Język dedykowany niszy** przez cały proces rejestracji
- **Minimalny opór** — tylko niezbędne pola, szybka droga do działającej witryny
- **Integracja płatności** z weryfikacją testową
- **Przetestowany proces end-to-end** od wyboru planu do działającej witryny

---

**Następne:** [Lekcja 7: Uczynienie tego swoim](lesson-7-branding) — przeprowadzimy white-labeling platformy i ustanowimy FitSite jako markę.
