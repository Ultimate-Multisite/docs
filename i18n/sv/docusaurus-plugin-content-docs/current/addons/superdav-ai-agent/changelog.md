---
title: Ändringslogg
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Ändringslogg

## 1.18.0 — Släpptes den 2026-06-29 {#1180--released-on-2026-06-29}

### Nytt {#new}

- **Google Calendar-verktyg** — läs konfigurerade kalendrar och händelser för schemamedvetna automatiseringar
- **Kontaktskartering och deltagarhjälpare** — matcha kalenderdeltagare med webbplatsanvändare och kontakter
- **Grindar för mänskligt godkännande och påminnelseposter** — pausa automatiseringar för granskning och undvik dubbla aviseringar
- **TextBee SMS-leverantör** — skicka konfigurerade textmeddelandeaviseringar via TextBee
- **Avancerat följeslagarpaket** — lägg till verktyg för betrodd utvecklares filsystem, databas, WP-CLI, REST-dispatcher, pluginbyggare, git-ögonblicksbild, användarhantering och benchmark som distribueras separat från WordPress.org-bygget

### Förbättrat {#improved}

- **Konfiguration av hanterad Superdav-tjänst** — lägg till hostade tjänsteendpoints och automatisk anslutningsprovisionering för stödda webbplatser
- **Releasepaketering** — bygg separata core- och Advanced-ZIP-filer, publicera båda på GitHub och skicka endast core-paketet till WordPress.org

### Åtgärdat {#fixed}

- **Tillförlitlighet för AI-förfrågningar** — förbättra modellval, tidsgränser för förfrågningar, standardmodell för konfiguration, hantering av resonemangstext och vägledning för omförsök vid ogiltiga verktygsanrop
- **Härdning av kalender och påminnelser** — stärk Google Calendar-tokens och deduplicering av påminnelser
- **Introduktion och återupptagning av godkännanden** — åtgärda start av introduktionsflöden i frontend och återupptagning av bekräftade förmågor
- **Granskningsproblem med WordPress.org-paketering** — åtgärda feedback från paketeringsgranskning för core-releasen

## 1.16.0 — Släpptes den 2026-05-20 {#1160--released-on-2026-05-20}

### Nytt {#new-1}

- **Förmågan Generate Logo SVG** — Theme Builder kan nu generera och bädda in anpassade logotyp-SVG:er med namnrymdssäker sanering
- **Fotouppladdning i upptäcktsintervju** — Theme Builder-upptäcktsintervjun innehåller nu ett steg för fotouppladdning för rikare designkontext
- **Förmågan Validate Palette Contrast** — kontrollera färgpar för WCAG-efterlevnad innan de tillämpas på ett theme
- **Menyer för hotell- och restaurangbranschen** — Theme Builder kan nu generera strukturerade sidor för mat- och dryckesmenyer för företag inom hotell- och restaurangbranschen
- **Förhandsvisningsrendering för stationär dator och mobil** — förhandsvisa din design på stationära och mobila enheter under val av designriktning
- **Parameter för navigationsetikett** — förmågan Create Menu stöder nu en separat `navigation_label` skild från sidtiteln
- **Tillgänglighet för nivå 1-verktyg** — sd-ai-agent/site-scrape är nu ett nivå 1-verktyg som är tillgängligt som standard i Theme Builder

### Åtgärdat {#fixed-1}

- **AI-klientens cache** — backas nu av transienter för beständighet över flera förfrågningar, vilket förhindrar dataförlust vid långvariga agentuppgifter
- **Åtgärdslänkar för pluginrad** — korrigerade och omdöpta för tydlighet

## 1.10.0 — Släpptes den 2026-05-05 {#1100--released-on-2026-05-05}

### Nytt {#new-2}

- **Tavily-internetsökning** — lägg till Tavily som sökleverantör för rikare internetsökresultat tillsammans med Brave Search
- **Theme-medvetna inbyggda färdigheter** — färdighetsguider för Block Themes, Classic Themes, Kadence Blocks och Kadence Theme levereras nu med pluginet
- **Kontaktformsförmåga för webbplatsbyggare** — lägg till ett kontaktformulär på valfri sida direkt från chattgränssnittet

### Förbättrat {#improved-1}

- **WooCommerce-integration omarbetad** — använder nu inbyggda WooCommerce API:er för bättre tillförlitlighet och kompatibilitet
- **Leverantörslistan uppdateras automatiskt** — när något plugin aktiveras eller inaktiveras

### Åtgärdat {#fixed-2}

- **Förmågan navigate-to** — åtgärdade oändlig omladdningsloop på vissa adminsidor
- **Förmågan list-posts** — löser nu korrekt kategori- och taggnamn till slugs
- **WP-CLI-kommandon** — återställde saknade namespace-alias efter en tidigare omarbetning
- **Händelseautomatisering** — hanterar utan problem webbplatser där automatiseringstabeller ännu inte har skapats
- **Förmågan memory-save** — använder nu korrekt namespace-prefix i byggaren för systeminstruktioner
- **Skalära verktygsresultat** — lindas nu korrekt in innan de returneras till AI:n
- **Användningsstatistik** — hanterar nu korrekt det äldre nyckelformatet för förmågor vid uppgradering från äldre versioner
