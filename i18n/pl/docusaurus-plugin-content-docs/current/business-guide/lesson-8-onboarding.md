---
title: 'Lekcja 8: Onboarding klienta'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# Lekcja 8: Wdrażanie dla Klienta (Customer Onboarding)

Skłonienie klienta do rejestracji to tylko połowa sukcesu. Jeśli zaloguje się, poczuje się przytłoczony i nigdy nie wróci, straciłeś go. Ta lekcja projektuje doświadczenie, które przekształca nową rejestrację w aktywnego, zaangażowanego klienta.

## Skąd byliśmy {#where-we-left-off}

FitSite jest w pełni brandowany i posiada działający proces płatności. Teraz skupiamy się na tym, co dzieje się po tym, jak właściciel studia fitness kończy rejestrację i po raz pierwszy trafia na swoją nową stronę.

## Dlaczego Onboarding jest ważny {#why-onboarding-matters}

Pierwsze 30 minut po rejestracji decyduje o tym, czy klient zostanie, czy odejdzie. Właściciel studia fitness, który:

- Loguje się i widzi stronę, która już wygląda jak strona fitnessowego studia → zostaje
- Wie dokładnie, co robić dalej → zostaje
- Czuje się zagubiony w ogólnym dashboardzie WordPressa → odchodzi

Twoje niestandardowe szablony (Lekcja 4) zajmują się pierwszym punktem. Ta lekcja zajmuje się drugim.

## Doświadczenie pierwszego logowania {#the-first-login-experience}

### Widget powitalny na dashboardzie {#welcome-dashboard-widget}

Utwórz niestandardowy widget na dashboardzie, który powita nowych klientów i poprowadzi ich przez proces konfiguracji. Powinien być widoczny, gdy po raz pierwszy się zalogują.

**Szybki start FitSite:**

1. **Dodaj nazwę i logo studia** — Link do Customizer lub ustawień Site Identity
2. **Zaktualizuj harmonogram zajęć** — Bezpośredni link do edytora strony Klasy (Classes)
3. **Dodaj trenerów** — Link do edytora strony Trenerzy (Trainers)
4. **Ustaw dane kontaktowe** — Link do edytora strony Kontakt
5. **Podgląd strony** — Link do frontendu

Każdy krok linkuje bezpośrednio do odpowiedniej strony lub ustawienia. Nie muszą szukać tego w menu.

### Uproszczenie dashboardu {#simplify-the-dashboard}

Nowi klienci nie muszą widzieć każdego elementu menu WordPressa. Rozważ:

- Ukrycie elementów menu, które nie są istotne dla zarządzania stroną fitness (np. Komentarze, jeśli nie są używane)
- Ponowne uporządkowanie menu, aby najważniejsze elementy były na początku
- Dodanie niestandardowych etykiet menu, które mają sens w kontekście branży ("Twoje Studio" zamiast "Wygląd")

Dodatek [Plugin & Theme Manager](/addons/plugin-and-theme-manager) może pomóc kontrolować, co widzą klienci.

## Sekwencja e-mail powitalnych {#welcome-email-sequence}

Jeden e-mail powitalny nie wystarczy. Ustaw sekwencję, która poprowadzi klientów przez pierwszy tydzień:

### E-mail 1: Powitanie (Natychmiast po rejestracji) {#email-1-welcome-immediately-after-signup}

- Temat: "Witamy w FitSite — Twoja strona studia jest aktywna"
- Treść: Link do logowania, kroki szybkiego startu, link do zasobów pomocy
- Ton: Entuzjastyczny, zachęcający, specyficzny dla fitnessu

### E-mail 2: Szybkie sukcesy (Dzień 1) {#email-2-quick-wins-day-1}

- Temat: "3 rzeczy, które musisz zrobić na swoim FitSite"
- Treść: Dodaj logo, zaktualizuj główne zdjęcie na stronie głównej, dodaj harmonogram zajęć
- Dołącz zrzuty ekranu pokazujące dokładnie, gdzie kliknąć

### E-mail 3: Spraw, by było Twoje (Dzień 3) {#email-3-make-it-yours-day-3}

- Temat: "Wyślij swoją stronę fitness na wyższy poziom"
- Treść: Dostosuj kolory, dodaj zdjęcia trenerów, napisz historię swojego studia
- Link do przykładów świetnych stron fitness na platformie

### E-mail 4: Uruchomienie (Dzień 7) {#email-4-go-live-day-7}

- Temat: "Gotowy, by pokazać swój FitSite światu?"
- Treść: Lista kontrolna rzeczy do sprawdzenia przed udostępnieniem, jak podłączyć niestandardową domenę (jeśli plan Growth/Pro), porady dotyczące udostępniania w mediach społecznościowych

:::tip Automatyzacja e-mail
Użyj [Webhooks](/user-guide/integrations/webhooks) lub [Zapier](/user-guide/integrations/zapier), aby wyzwolić te e-maile za pośrednictwem Twojej platformy marketingu e-mail. Daje Ci to większą kontrolę nad czasem i pozwala śledzić zaangażowanie.
:::

## Zasoby pomocy {#help-resources}

Stwórz treści pomocnicze specyficzne dla branży, które odpowiadają na pytania, które faktycznie zadają właściciele studiów fitness:

### Artykuły w bazie wiedzy {#knowledge-base-articles}

- "Jak zaktualizować harmonogram zajęć"
- "Dodawanie i edytowanie profili trenerów"
- "Zmiana logo i kolorów studia"
- "Podłączanie własnej nazwy domeny" (dla klientów Growth/Pro)
- "Dodawanie widgetu rezerwacyjnego na stronę"

Napisz je dla użytkowników nietechnicznych. Używaj zrzutów ekranu. Unikaj żargonu WordPressa.

### Poradniki wideo {#video-walkthroughs}

Krótkie (2-3 minuty) nagrania ekranu pokazujące:

- Pierwsze logowanie i orientację
- Edycję strony głównej
- Aktualizację harmonogramu zajęć
- Dodawanie nowego trenera

Nie muszą to być dopracowane produkcje. Ważne jest, aby były jasne, pomocne i specyficzne dla branży.

## Strona konta {#the-account-page}

Ultimate Multisite zawiera widok dla klienta [Stronę konta](/user-guide/client-management/account-page), gdzie klienci zarządzają swoim abonamentem. Dostosuj ją tak, aby:

- Pokazywała ich aktualny plan FitSite
- Wyświetlała opcje ulepszenia z benefitami specyficznymi dla fitnessu
- Dostarczała historię rozliczeń i pobieranie faktur
- Linkowała do zasobów pomocy

## Mierzenie sukcesu Onboardingu {#measuring-onboarding-success}

Śledź te wskaźniki, aby wiedzieć, czy Twój onboarding działa:

- **Współczynnik aktywacji (Activation rate)**: Jaki procent rejestracji faktycznie dostosowuje swoją stronę w ciągu pierwszego tygodnia?
- **Logowania w pierwszym tygodniu (First-week logins)**: Jak często nowy klient loguje się w ciągu pierwszego tygodnia?
- **Zgłoszenia pomocy od nowych klientów (Support tickets from new customers)**: Wysoka liczba oznacza, że Twój onboarding ma luki
- **Konwersja z wersji próbnej na płatną (Trial-to-paid conversion)**: Jeśli oferujesz wersje próbne, jaki procent konwertuje?

## FitSite Network do tej pory {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding
│   ├── Quick Start dashboard widget
│   ├── Simplified dashboard for fitness site management
│   ├── 4-email welcome sequence
│   ├── Niche-specific knowledge base
│   ├── Video walkthroughs
│   └── Customized account page
└── Ready for pricing strategy (next lesson)
```

## Co zbudowaliśmy w tej lekcji {#what-we-built-this-lesson}

- **Prowadzone doświadczenie pierwszego logowania** z widgetem Quick Start
- **Uproszczony dashboard** skupiony na zadaniach związanych z zarządzaniem stroną fitness
- **Sekwencja e-mail powitalnych**, która poprowadzi klientów przez pierwszy tydzień
- **Zasoby pomocy specyficzne dla branży**, napisane dla właścicieli studiów fitness, którzy nie są techniczni
- **Metryki onboardingu** do śledzenia i ulepszania doświadczenia

---

**Dalej:** [Lekcja 9: Cennik dla zysku](lesson-9-pricing) — dopracujemy strategię cenową, aby zmaksymalizować przychody i zminimalizować odejścia klientów.
