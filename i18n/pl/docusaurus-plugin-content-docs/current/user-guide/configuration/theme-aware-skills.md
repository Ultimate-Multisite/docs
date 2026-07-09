---
title: Umiejętności świadome tematu
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Umiejętności dostosowane do motywu {#theme-aware-skills}

Superdav AI Agent v1.10.0 zawiera cztery nowe, wbudowane umiejętności dostosowane do motywu (theme-aware), które automatycznie adaptują się do aktywnego motywu WordPress. Te umiejętności zapewniają specjalistyczne wskazówki i możliwości dostosowane do architektury i funkcji Twojego motywu.

## Co to są umiejętności dostosowane do motywu? {#what-are-theme-aware-skills}

Umiejętności dostosowane do motywu to wstępnie skonfigurowane bazy wiedzy i zestawy narzędzi, które asystent AI automatycznie wybiera na podstawie motywu WordPress aktywnego na Twojej stronie. Gdy zmieniasz motyw, dostępne umiejętności asystenta automatycznie się aktualizują — nie jest wymagana żadna ręczna konfiguracja.

Każda umiejętność zawiera:

- **Dokumentację specyficzną dla motywu** — wskazówki dotyczące używania i dostosowywania motywu
- **Odwołania do bloków i wzorców** — dostępne bloki, wzorce i opcje projektowania
- **Przykłady dostosowania** — fragmenty kodu i wzorce konfiguracji dla typowych zadań
- **Najlepsze praktyki** — rekomendacje dotyczące architektury i przepływu pracy motywu

## Dostępne umiejętności dostosowane do motywu {#available-theme-aware-skills}

### Block Themes (Motywy blokowe) {#block-themes}

**Dotyczy:** Motywów używających architektury opartej na blokach WordPress (Full Site Editing).

Umiejętność Block Themes zapewnia wskazówki dotyczące:

- Tworzenia i edytowania szablonów za pomocą edytora bloków
- Pracy z wzorcami bloków i blokami wielokrotnego użytku
- Dostosowywania globalnych stylów i ustawień theme.json
- Używania bloków i wariantów motywu
- Tworzenia niestandardowych wzorców bloków dla Twojej strony

**Aktywowana automatycznie, gdy:** Twój aktywny motyw jest motywem blokowym (obsługuje funkcję `block-templates`).

### Classic Themes (Motywy klasyczne) {#classic-themes}

**Dotyczy:** Tradycyjnych motywów WordPress, które używają szablonów PHP i klasycznego edytora.

Umiejętność Classic Themes zapewnia wskazówki dotyczące:

- Pracy z plikami szablonów PHP i hookami
- Dostosowywania wyglądu motywu za pomocą Customizera
- Używania obszarów widgetów i sidebarów
- Modyfikowania CSS i rozwoju w ramach motywu potomnego (child theme)
- Zrozumienia hierarchii motywu i tagów szablonów

**Aktywowana automatycznie, gdy:** Twój aktywny motyw jest motywem klasycznym (nieblokowym).

### Kadence Blocks {#kadence-blocks}

**Dotyczy:** Stron używających pluginu Kadence Blocks do zaawansowanego projektowania opartego na blokach.

Umiejętność Kadence Blocks zapewnia wskazówki dotyczące:

- Używania zaawansowanej biblioteki bloków Kadence (Hero, Testimonials, Pricing itp.)
- Konfigurowania ustawień bloków Kadence i opcji responsywności
- Tworzenia niestandardowych układów za pomocą siatki i bloków kontenerów Kadence
- Integracji bloków Kadence z Twoim motywem
- Wykorzystywania systemu projektowania i presetów Kadence

**Aktywowana automatycznie, gdy:** Plugin Kadence Blocks jest aktywny na Twojej stronie.

### Kadence Theme {#kadence-theme}

**Dotyczy:** Stron używających motywu Kadence do projektowania i dostosowywania opartego na blokach.

Umiejętność Kadence Theme zapewnia wskazówki dotyczące:

- Dostosowywania motywu Kadence za pomocą globalnych stylów i theme.json
- Używania wbudowanych wzorców i szablonów motywu Kadence
- Konfigurowania ustawień i opcji motywu Kadence
- Tworzenia niestandardowych projektów za pomocą systemu projektowania Kadence
- Integracji Kadence z popularnymi pluginami i narzędziami

**Aktywowana automatycznie, gdy:** Motyw Kadence jest Twoim aktywnym motywem.

## Jak wybierane są umiejętności {#how-skills-are-selected}

Asystent automatycznie wykrywa Twój aktywny motyw i zainstalowane plugin'y przy każdej wiadomości. Jeśli dostępna jest pasująca umiejętność dostosowana do motywu, jest ona automatycznie ładowana do kontekstu asystenta. Nie musisz ręcznie włączać ani przełączać umiejętności.

### Wiele umiejętności {#multiple-skills}

Jeśli wiele umiejętności ma zastosowanie do Twojej strony (np. masz aktywne zarówno Kadence Blocks, jak i Kadence Theme), asystent ma dostęp do wszystkich odpowiednich umiejętności i może odwoływać się do wskazówek z każdej z nich.

### Zmiana motywu {#switching-themes}

Gdy zmieniasz aktywny motyw, dostępne umiejętności asystenta automatycznie aktualizują się w następnej wiadomości. Na przykład:

1. Używasz motywu blokowego z aktywną umiejętnością **Block Themes**.
2. Przełączasz się na motyw klasyczny.
3. W następnej wiadomości automatycznie ładowana jest umiejętność **Classic Themes**, a umiejętność **Block Themes** przestaje być dostępna.

## Używanie umiejętności dostosowanych do motywu {#using-theme-aware-skills}

Aby wykorzystać umiejętność dostosowaną do motywu, wystarczy opisać w oknie czatu, co chcesz zrobić. Asystent automatycznie odwoła się do odpowiednich wskazówek umiejętności.

### Przykładowe zapytania {#example-prompts}

**Dla Block Themes:**
> "Utwórz sekcję hero z tłem obrazem i tekstem wyśrodkowanym za pomocą wzorców bloków."

**Dla Classic Themes:**
> "Dodaj niestandardowy obszar widgetów do sidebaru za pomocą motywu potomnego."

**Dla Kadence Blocks:**
> "Wybuduj sekcję z testimonialami za pomocą bloku Testimonials Kadence."

**Dla Kadence Theme:**
> "Dostosuj układ nagłówka i styl menu nawigacyjnego."

Asystent dostarczy wskazówki specyficzne dla motywu i przykłady kodu dostosowane do Twojego aktywnego motywu i pluginów.

:::note
Umiejętności dostosowane do motywu są automatycznie dostępne w Superdav AI Agent v1.10.0 i nowszych. Nie jest wymagana żadna dodatkowa konfiguracja ani ustawienia.
:::
