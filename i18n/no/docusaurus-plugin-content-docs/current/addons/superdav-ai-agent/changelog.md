---
title: Endringslogg
sidebar_position: 5
_i18n_hash: d18a5d0a6c766913ed5d348b54dd6acc
---
# Endringslogg

## 1.16.0 — Utgitt 2026-05-20

### Nytt

- **Funksjon for å generere logo SVG** — Theme Builder kan nå generere og innebygge tilpassede logo SVG-er med sanitering som er trygg på namespace.
- **Opplasting av foto i oppdagelsesintervjuet** — Theme Builder discovery interview inkluderer nå et trinn for opplasting av foto for en rikere designkontekst.
- **Mulighet til å validere fargepalettkontrast** — Sjekk fargepar for WCAG-overholdelse før de brukes i et tema.
- **Gjestfrihetsmenyer** — Theme Builder kan nå generere strukturerte mat- og drikkevaremenyer for bedrifter innen gjestfrihet.
- **Forhåndsvisning for desktop og mobil** — Forhåndsvis dine design på både desktop- og mobilenheter under valg av designretning.
- **Parameter for navigasjonsetikett** — Create Menu-funksjonen støtter nå en distinkt `navigation_label` som er separat fra sidens tittel.
- **Tilgjengelighet av Tier 1-verktøy** — sd-ai-agent/site-scrape er nå et Tier 1-verktøy som er tilgjengelig som standard i Theme Builder.

### Rettet

- **AI-klientcache** — Nå støttet av transients for persistens på tvers av forespørsler, noe som forhindrer tap av data under langvarige agentoppgaver.
- **Lenker for handling i plugin-raden** — Korrigert og omdøpt for bedre klarhet.

## 1.10.0 — Utgitt 2026-05-05

### Nytt

- **Tavily internet-søk** — Legger til Tavily som en søkkelokator for rikere internettsøkere resultater, i tillegg til Brave Search.
- **Tema-bevisste innebygde ferdigheter** — Block Themes, Classic Themes, Kadence Blocks og Kadence Theme skill guides leveres nå sammen med pluginet.
- **Funksjon for kontaktskjema i nettstedbyggeren** — Legg til et kontaktskjema på hvilken som helst side direkte fra chat-grensesnittet.

### Forbedret

- **WooCommerce-integrasjon refaktorert** — Bruker nå native WooCommerce API-er for bedre pålitelighet og kompatibilitet.
- **Leverandørlisten oppdateres automatisk** — Når et hvilket som helst plugin aktiveres eller deaktiveres.

### Rettet

- **navigate-to-funksjonen** — Rettet en uendelig omlastingsløkke på enkelte administrasjonssider.
- **list-posts-funksjonen** — Løser nå korrekt kategorinavn og tag-navn til slugs.
- **WP-CLI-kommandoer** — Gjenopprettet manglende namespace-alias etter en tidligere refaktorering.
- **Hendelsesautomatisering** — Håndterer nå elegant nettsteder der automatiseringsbordene ennå ikke er opprettet.
- **memory-save-funksjonen** — Bruker nå riktig namespace-prefiks i systeminstruksjonsbyggeren.
- **Scalar-verktøyresultater** — Er nå korrekt pakket før de returneres til AI-en.
- **Bruksstatistikk** — Håndterer nå korrekt det eldre formatet for ability-nøkler ved oppgradering fra eldre versjoner.
