---
title: 'Lekcja 5: Projektowanie Twoich Planów'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Lekcja 5: Projektowanie Planów

Poziomy planów nie są tylko poziomami cenowymi — to odzwierciedlenie tego, jak faktycznie działają Twoi klienci z konkretnej niszy. W tej lekcji zaprojektujesz poziomy produktów, które odpowiadają rzeczywistym potrzebom firm fitness na różnych etapach rozwoju.

## Skąd zaczęliśmy

FitSite ma gotowe trzy szablony (Studio Essential, Gym Pro, Fitness Chain). Teraz stworzymy plany, które określają, do czego klienci mają dostęp i ile za to płacą.

## Myślenie w segmentach klientów

Błąd, który popełnia większość ludzi, polega na projektowaniu planów wokół cech technicznych (przestrzeń dyskowa, przepustowość, liczba stron). Twoi klienci z konkretnej niszy nie myślą w tych kategoriach. Właściciel siłowni myśli o tym, czego potrzebuje, aby prowadzić swój biznes.

Dla studiów fitness istnieją trzy naturalne segmenty:

| Segment | Kim są | Czego potrzebują |
|---------|-------------|----------------|
| **Trenerzy indywidualni / małe studia** | 1-3 pracownicy, jedna lokalizacja, dopiero zaczynają | Profesjonalna strona, informacje o zajęciach, formularz kontaktowy |
| **Ugruntowane siłownie** | 5-20 pracowników, jedna lokalizacja, rosną | Wszystko powyżej plus rezerwacje, blog, galeria, niestandardowa domena |
| **Sieci fitness** | Wiele lokalizacji, ugruntowana marka | Wszystko powyżej plus multi-site, strony z lokalizacjami, katalog pracowników |

Twoje plany powinny odpowiadać tym segmentom, a nie dowolnym pakietom funkcji.

## Tworzenie planów FitSite

Przejdź do **Ultimate Multisite > Products > Add Product** dla każdego planu.

### Plan 1: FitSite Starter — 49 USD/miesiąc

**Cel**: Trenerzy indywidualni i małe studia

**Zakładka Description**:
- Nazwa: FitSite Starter
- Opis: „Wszystko, czego potrzebuje trener personalny lub małe studio, aby wyglądać profesjonalnie online.”

**Zakładka General**:
- Typ produktu: Plan
- Rola klienta: Administrator

**Zakładka Site Templates**:
- Umożliwienie szablonów stron: Włączone
- Dostępne szablony: Tylko Studio Essential

**Ograniczenia (Limitations)**:
- Strony: 1
- Przestrzeń dyskowa: 1 GB
- Niestandardowa domena: Wyłączona (używa `studioname.fitsite.com`)

**Zakładka Plugins**:
- Plugin formularza kontaktowego: Wymuszone aktywowanie
- Plugin SEO: Wymuszone aktywowanie
- Plugin rezerwacyjny: Niedostępny (zachęta do ulepszenia)

**Zakładka Themes**:
- Wybrany przez Ciebie motyw: Wymuszone aktywowanie
- Wszystkie inne motywy: Ukryte

### Plan 2: FitSite Growth — 99 USD/miesiąc

**Cel**: Ugruntowane siłownie w jednej lokalizacji

**Zakładka Description**:
- Nazwa: FitSite Growth
- Opis: „Dla ugruntowanych siłowni, które są gotowe rozbudować swoją obecność online i przyciągnąć nowych członków.”

**Zakładka Site Templates**:
- Dostępne szablony: Studio Essential i Gym Pro

**Ograniczenia (Limitations)**:
- Strony: 1
- Przestrzeń dyskowa: 5 GB
- Niestandardowa domena: Włączona

**Zakładka Plugins**:
- Wszystko z Starter, plus:
- Plugin rezerwacyjny: Wymuszone aktywowanie
- Plugin galeria: Wymuszone aktywowanie
- Funkcjonalność bloga: Dostępna

**Zakładka Up & Downgrades**:
- Grupa planów: FitSite Plans
- Kolejność produktu: 2

### Plan 3: FitSite Pro — 199 USD/miesiąc

**Cel**: Sieci fitness w wielu lokalizacjach

**Zakładka Description**:
- Nazwa: FitSite Pro
- Opis: „Kompletna platforma dla marek fitness z wieloma lokalizacjami.”

**Zakładka Site Templates**:
- Dostępne szablony: Wszystkie trzy szablony

**Ograniczenia (Limitations)**:
- Strony: 5 (po jednej na lokalizację)
- Przestrzeń dyskowa: 20 GB
- Niestandardowa domena: Włączona

**Zakładka Plugins**:
- Wszystko z Growth, plus:
- Wszystkie premium plugin: Wymuszone aktywowanie

**Zakładka Up & Downgrades**:
- Grupa planów: FitSite Plans
- Kolejność produktu: 3

## Ustawianie grupy planów

Grupa planów zapewnia, że klienci mogą ulepszać lub obniżać poziom subskrypcji tylko w ramach rodziny planów FitSite. Na zakładce **Up & Downgrades** każdego planu:

1. Ustaw **Plan Group** na „FitSite Plans” dla wszystkich trzech planów.
2. Ustaw **Product Order** na 1 (Starter), 2 (Growth), 3 (Pro).

Tworzy to jasną ścieżkę ulepszeń: Starter → Growth → Pro.

## Dodawanie Order Bumps

Order bumps to dodatkowe produkty, które można zaoferować podczas finalizacji zakupu. Dla FitSite rozważ:

- **Extra Storage Pack** (19 USD/miesiąc) — dodatkowe 5 GB przestrzeni dyskowej
- **Priority Support** (29 USD/miesiąc) — szybszy czas odpowiedzi
- **Additional Site** (39 USD/miesiąc) — dla klientów, którzy potrzebują więcej stron niż pozwala ich plan

Utwórz je jako produkty typu **Package** w Ultimate Multisite i powiąż je z odpowiednimi planami.

## Dlaczego ta struktura działa

- **Starter** usuwa bariery wejścia — niska cena, prosty pakiet, pozwala trenerom szybko wystartować online.
- **Growth** dodaje funkcje, o które faktycznie proszą siłownie — rezerwacje, galerie, niestandardowe domeny.
- **Pro** obsługuje segment o wysokiej wartości, który potrzebuje wsparcia dla wielu lokalizacji.
- **Order bumps** pozwalają klientom dostosować ofertę, nie komplikując jednocześnie głównych planów.
- **Jasna ścieżka ulepszeń** oznacza, że klienci rosną razem z Tobą, zamiast odejść.

## Sieć FitSite do tej pory

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo) → Studio Essential template
│   ├── FitSite Growth ($99/mo) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/mo) → All templates
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Ready for checkout configuration (next lesson)
```

## Co zbudowaliśmy w tej lekcji

- **Trzy poziomy planów** powiązane z rzeczywistymi segmentami biznesów fitness.
- **Kontrola dostępu do funkcji (Feature gating)** za pomocą kontroli pluginów i szablonów Ultimate Multisite.
- **Grupa planów** z jasną ścieżką ulepszeń.
- **Produkty Order bump** generujące dodatkowy przychód.
- **Struktura cenowa** oparta na wartości dla klienta, a nie na specyfikacji technicznej.

---

**Następne:** [Lekcja 6: Doświadczenie rejestracji](lesson-6-checkout) — zbudujemy proces kasowy, który przekształci właścicieli studiów fitness w płacących klientów.
