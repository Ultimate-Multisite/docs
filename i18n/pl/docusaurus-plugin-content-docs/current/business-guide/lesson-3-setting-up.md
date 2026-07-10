---
title: 'Lekcja 3: Konfiguracja Twojej Sieci'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Lekcja 3: Konfiguracja Sieci {#lesson-3-setting-up-your-network}

Czas budować. W tej lekcji zainstalujesz Ultimate Multisite i skonfigurujesz fundament sieci FitSite. Każda podjęta decyzja jest podyktowana specyfiką branży fitness.

## Skąd zaczęliśmy {#where-we-left-off}

Wybraliśmy studia fitness jako naszą niszę i zweryfikowaliśmy potencjał. Teraz przekształcamy ten pomysł w działającą platformę.

## Wybór hostingu {#choosing-your-hosting}

Wybór hostingu jest ważniejszy dla platformy niszowej niż dla pojedynczej witryny. Nie hostujesz jednego miejsca – hostujesz sieć, która może urosnąć do dziesiątek, a nawet setek stron.

### Na co zwrócić uwagę {#what-to-look-for}

- **Obsługa WordPress Multisite**: Nie wszystkie hosty dobrze radzą sobie z multisite.
- **Wildcard SSL**: Niezbędny dla sieci opartych na poddomenach.
- **Skalowalne zasoby**: Musisz mieć zapas mocy, aby rosnąć bez konieczności migracji.
- **Integracja Ultimate Multisite**: Automatyczne mapowanie domen i SSL znacznie oszczędza czas operacyjny.

### Zalecane podejście {#recommended-approach}

Wybierz hosta z listy [Compatible Providers](/user-guide/host-integrations/closte). Te zostały przetestowane z Ultimate Multisite i zapewniają integracje, których potrzebujesz do mapowania domen i automatyzacji SSL.

Dla FitSite użyjemy konfiguracji opartej na poddomenach. Oznacza to, że strony klientów początkowo będą widoczne jako `nazwastudio.fitsite.com`, zanim opcjonalnie przypiszą własną domenę.

## Instalacja WordPress Multisite {#installing-wordpress-multisite}

Jeśli nie masz jeszcze zainstalowanego WordPress Multisite:

1. Zainstaluj WordPress u swojego dostawcy hostingu.
2. Postępuj zgodnie z przewodnikiem [How to Install WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite).
3. Wybierz konfigurację **subdomain** (poddomena), gdy zostaniesz o to poproszony.

:::tip Dlaczego poddomeny?
Poddomeny nadają każdej stronie klienta własny, unikalny adres (`studio.fitsite.com`), zamiast ścieżki (`fitsite.com/studio`). Jest to bardziej profesjonalne dla Twoich klientów i zapobiega konfliktom permalinków. Szczegółowe porównanie znajdziesz w [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101).
:::

## Instalacja Ultimate Multisite {#installing-ultimate-multisite}

Postępuj zgodnie z przewodnikiem [Installing Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite), aby:

1. Przesłać i aktywować plugin na poziomie całej sieci.
2. Uruchomić [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard).

Podczas uruchamiania Setup Wizard pamiętaj o niszy FitSite:

- **Currency (Waluta)**: Ustaw walutę, której używają Twoi klienci ze studiów fitness.
- **Company name (Nazwa firmy)**: "FitSite" (lub nazwa marki, którą wybrałeś).
- **Company logo (Logo firmy)**: Prześlij logo swojej marki – pojawi się ono na fakturach i e-mailach.

## Konfiguracja dla niszy fitness {#configuring-for-the-fitness-niche}

Po zainstalowaniu Ultimate Multisite wykonaj następujące, specyficzne dla niszy, wybory konfiguracyjne:

### Ustawienia ogólne {#general-settings}

Przejdź do **Ultimate Multisite > Settings** i skonfiguruj:

- **Site name (Nazwa witryny)**: FitSite
- **Default role (Rola domyślna)**: Administrator – właściciele studiów fitness potrzebują pełnej kontroli nad treścią swojej witryny.
- **Registration (Rejestracja)**: Włącz rejestrację użytkowników, aby właściciele studiów mogli sami się rejestrować.

### Konfiguracja e-mail {#email-configuration}

Systemowe e-maile powinny mówić językiem Twojej niszy. Przejdź do **Ultimate Multisite > Settings > Emails** i dostosuj:

- Zastąp ogólne komunikaty typu "Twoja nowa witryna" wiadomościami specyficznymi dla fitness.
- Przykład tematu powitalnego: "Twoja witryna studia fitness jest gotowa"
- Przykład treści powitalnej: Odwołaj się do ich studia, zajęć i rozpoczęcia pracy na ich witrynie fitness.

Dopracujemy to później w Lekcji 8 (Onboarding klienta), ale ustawienie tonu już teraz sprawi, że nawet wczesne testowe rejestracje będą wydawały się specyficzne dla niszy.

### Konfiguracja domen {#domain-configuration}

Jeśli używasz kompatybilnego dostawcy hostingu, skonfiguruj mapowanie domen już teraz:

1. Przejdź do **Ultimate Multisite > Settings > Domain Mapping**.
2. Postępuj zgodnie z przewodnikiem integracji dla swojego konkretnego hosta.
3. Sprawdź, czy nowe podstrony automatycznie otrzymują SSL.

Zapewni to, że gdy zaczniemy tworzyć szablony i testowe strony w następnej lekcji, wszystko będzie działać od początku do końca.

## Sieć FitSite do tej pory {#the-fitsite-network-so-far}

Pod koniec tej lekcji masz:

```
FitSite Network
├── WordPress Multisite (tryb poddomen)
├── Ultimate Multisite (zainstalowany i skonfigurowany)
├── Hosting z wildcard SSL
├── Skonfigurowane mapowanie domen
├── Szablony e-mail specyficzne dla niszy (początkowe)
└── Gotowość do szablonów stron (następna lekcja)
```

## Co zbudowaliśmy w tej lekcji {#what-we-built-this-lesson}

- **Działającą instalację WordPress Multisite** w trybie poddomen.
- **Zainstalowany i skonfigurowany Ultimate Multisite** z brandingiem FitSite.
- **Hosting i SSL** ustawione dla rosnącej sieci.
- **Mapowanie domen** skonfigurowane dla Twojego dostawcy hostingu.
- **Ustalony ton e-mailów specyficzny dla niszy** od pierwszego dnia.

---

**Następne:** [Lekcja 4: Tworzenie szablonów niszowych](lesson-4-templates) – stworzymy szablony stron, z których właściciele studiów fitness faktycznie będą chcieli korzystać.
