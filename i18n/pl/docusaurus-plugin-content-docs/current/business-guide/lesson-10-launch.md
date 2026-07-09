---
title: 'Lekcja 10: Dzień startu'
sidebar_position: 11
_i18n_hash: 49ba467b8efba57e92cf072bcec53969
---
# Lekcja 10: Dzień Startu {#lesson-10-launch-day}

Wszystko zostało zbudowane. Zanim otworzysz drzwi, ta lekcja przeprowadzi Cię przez listę kontrolną przed startem, aby upewnić się, że nic nie jest zepsute, brakujące ani żenujące.

## Skąd byliśmy {#where-we-left-off}

FitSite ma skonfigurowane szablony, plany, proces płatności (checkout), branding, onboarding i ceny. Teraz sprawdzamy, czy wszystko działa, i uruchamiamy platformę.

## Lista kontrolna przed startem {#pre-launch-checklist}

Przejrzyj każdy punkt. Nie pomijaj żadnego.

### Infrastruktura platformy {#platform-infrastructure}

- [ ] Hosting jest stabilny i dobrze działa pod obciążeniem
- [ ] Wildcard SSL jest aktywny i wszystkie poddomeny działają przez HTTPS
- [ ] Mapowanie domen działa – przetestuj tworzenie strony i mapowanie niestandardowej domeny
- [ ] Kopie zapasowe są skonfigurowane i przetestowane (przywróć przynajmniej jedną, aby zweryfikować)
- [ ] Monitorowanie jest wdrożone – będziesz wiedział, jeśli platforma ulegnie awarii

### Szablony {#templates}

- [ ] Wszystkie trzy szablony ładują się poprawnie na nowych stronach
- [ ] Treść zastępcza jest pomocna i wolna od literówek
- [ ] Wszystkie obrazy mają odpowiednie licencje (bez znaków wodnych ze stockowych zdjęć)
- [ ] Responsywność na urządzeniach mobilnych działa na każdej stronie szablonu
- [ ] Prędkość ładowania strony jest akceptowalna (przetestuj za pomocą narzędzia takiego jak GTmetrix lub PageSpeed Insights)
- [ ] Brak uszkodzonych linków ani brakujących zasobów na żadnym szablonie

### Plany i produkty {#plans-and-products}

- [ ] Wszystkie trzy plany są aktywne i widoczne
- [ ] Opisy planów są dokładne i specyficzne dla niszy
- [ ] Ceny są poprawne (miesięczne i roczne)
- [ ] Opłaty za konfigurację są skonfigurowane w odpowiednich planach
- [ ] Okres próbny działa w planie Starter
- [ ] Dodatkowe opcje (order bumps) pojawiają się poprawnie podczas checkoutu
- [ ] Ograniczenia dotyczące pluginów i motywów są poprawnie egzekwowane dla każdego planu

### Proces płatności (Checkout Flow) {#checkout-flow}

- [ ] Wykonaj pełny test rejestracji dla każdego planu (użyj trybu testowej płatności)
- [ ] Wybór szablonu pokazuje poprawne szablony dla każdego planu
- [ ] Płatność przebiega pomyślnie
- [ ] Klient otrzymuje e-mail powitalny po rejestracji
- [ ] Nowa strona jest tworzona z poprawnym szablonem
- [ ] Klient może natychmiast zalogować się na swoją nową stronę
- [ ] Kody rabatowe działają poprawnie

### Branding {#branding}

- [ ] Strona logowania wyświetla branding FitSite
- [ ] Panel administracyjny wyświetla branding FitSite
- [ ] Wszystkie e-maile systemowe używają brandingu FitSite i języka specyficznego dla fitnessu
- [ ] Faktury wyświetlają się poprawnie z Twoimi danymi firmowymi
- [ ] Strona marketingowa jest aktywna i linkuje do formularza checkout

### Onboarding {#onboarding}

- [ ] Widget Quick Start pojawia się na panelach nowych klientów
- [ ] Wszystkie linki Quick Start prowadzą do właściwych stron
- [ ] Sekwencja e-maili powitalnych jest skonfigurowana i przetestowana
- [ ] Artykuły bazy wiedzy są opublikowane i dostępne
- [ ] Strona konta wyświetla poprawne informacje o planie i opcje ulepszenia

### Aspekty prawne i biznesowe {#legal-and-business}

- [ ] Warunki usług są opublikowane i linkowane ze strony checkout
- [ ] Polityka prywatności jest opublikowana i dostępna
- [ ] Polityka zwrotów jest zdefiniowana i udokumentowana
- [ ] Podmiot biznesowy jest ustawiony do przyjmowania płatności
- [ ] Bramka płatnicza jest w trybie produkcyjnym (nie testowym)
- [ ] Konfiguracja podatkowa jest poprawna dla Twojej jurysdykcji

## Soft Launch vs. Hard Launch {#soft-launch-vs-hard-launch}

Rozważ dwufazowy start:

### Faza 1: Soft Launch {#phase-1-soft-launch}

Zaproszenie 5-10 właścicieli studiów fitness do rejestracji przed publicznym startem. To są Twoi klienci beta. Zaproponuj im znaczną zniżkę (50% dożywotnio lub 3 miesiące gratis) w zamian za:

- Szczery feedback na temat doświadczenia rejestracji i onboardingu
- Zgodę na użycie ich strony jako przykładu pokazowego
- Zgłaszanie wszelkich błędów lub problemów, z którymi się napotkają

Daje Ci to realny feedback od klientów i żywe strony do pokazania, zanim otworzysz się publicznie.

### Faza 2: Public Launch {#phase-2-public-launch}

Po włączeniu feedbacku z soft launch:

- Przełącz bramkę płatniczą na tryb produkcyjny
- Opublikuj swoją stronę marketingową
- Rozpocznij pozyskiwanie klientów (Lekcja 11)
- Ogłoś to na odpowiednich kanałach branży fitness

## Działania w dniu startu {#launch-day-actions}

W dniu, w którym stajesz się publiczny:

1. **Przełącz na płatności produkcyjne** – wyłącz tryb testowy na bramce płatniczej
2. **Zweryfikuj jeszcze raz** – wykonaj pełny test rejestracji z prawdziwą płatnością (zwróć sobie pieniądze później)
3. **Monitoruj uważnie** – obserwuj błędy, nieudane rejestracje lub problemy z płatnościami
4. **Bądź dostępny** – Twoi pierwsi prawdziwi klienci mogą potrzebować pomocy, a szybka reakcja buduje zaufanie
5. **Uczcij krótko** – a potem wróć do pracy

## Co może pójść nie tak {#what-can-go-wrong}

Bądź przygotowany na:

- **Problemy z bramką płatniczą**: Miej pod ręką kontakt wsparcia Twojego dostawcy bramki
- **Problemy z certyfikatem SSL**: Wiedz, jak sprawdzać i odnawiać certyfikaty
- **Awaria dostarczania e-maili**: Przetestuj, czy e-maile faktycznie docierają (sprawdź foldery ze spamem)
- **Wydajność pod obciążeniem**: Jeśli otrzymasz skok ruchu, wiedz, jak skalować hosting
- **Dezorientacja klienta**: Miej gotową bazę wiedzy i kanały wsparcia

## Sieć FitSite do tej pory {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode) ✓
├── Ultimate Multisite (configured + branded) ✓
├── Platform Domain (fitsite.com + wildcard SSL) ✓
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain) ✓
├── Products (Starter, Growth, Pro + Order Bumps + Discounts) ✓
├── Checkout Flow (tested end-to-end) ✓
├── Branding (complete) ✓
├── Customer Onboarding (Quick Start, emails, help resources) ✓
├── Pricing Strategy (annual, trials, setup fees, discounts) ✓
├── Pre-Launch Checklist (verified) ✓
├── Soft Launch (beta customers onboarded) ✓
└── LIVE ✓
```

## Co zbudowaliśmy w tej lekcji {#what-we-built-this-lesson}

- **Kompleksowa lista kontrolna przed startem**, obejmująca infrastrukturę, treści, płatności i aspekty prawne
- **Strategia soft launch**, aby zebrać realny feedback przed publicznym startem
- **Procedury na dzień startu**, aby uruchomić platformę z pewnością siebie
- **Plan awaryjny** na wypadek typowych problemów dnia startu

---

**Następne:** [Lekcja 11: Znajdowanie klientów](lesson-11-customers) — teraz, gdy FitSite jest aktywne, jak sprawić, by właściciele studiów fitness zaczęli się rejestrować?
