---
title: Diari de canvis
sidebar_position: 5
_i18n_hash: d18a5d0a6c766913ed5d348b54dd6acc
---
# Historial de versions

## 1.16.0 — Publicat el 2026-05-20

### Novetats

- **Capacitat de generar SVG de logo** — Theme Builder ara pot generar i incorporar SVGs de logo personalitzats amb sanitització segura de namespace
- **Càrrega de fotos en la entrevista de descobriment** — L'entrevista de descobriment de Theme Builder ara inclou un pas de càrrega de fotos per a un context de disseny més ric
- **Capacitat de validar el contrast de la paletta** — Comprova les parelles de colors per a la conformitat WCAG abans d'aplicar-les a un tema
- **Menús d'hostaleria** — Theme Builder ara pot generar pàgines de menús estructurades de menjar i beguda per a empreses d'hostaleria
- **Renderitzatge de previsualització per a esquest i mòbil** — Previsualitza el teu disseny en dispositius de esquest i mòbil durant la selecció de la direcció de disseny
- **Paràmetre d'etiqueta de navegació** — La capacitat de Crear Menú ara suporta un `navigation_label` distinct, separat del títol de la pàgina
- **Disponibilitat de l'eina Tier 1** — sd-ai-agent/site-scrape és ara una eina Tier 1 disponible per defecte a Theme Builder

### Corregides

- **Cache del client AI** — Ara suportat per transients per a la persistència entre sol·licitacions, prevenint la pèrdua de dades en tasques d'agent de llarga durada
- **Enllaços d'acció de la fila del plugin** — Corregits i renombrats per a més claredat

## 1.10.0 — Publicat el 2026-05-05

### Novetats

- **Cerca a internet amb Tavily** — Afegeix Tavily com a proveïdor de cerca per a resultats de cerca a internet més rics, juntament amb Brave Search
- **Habilitats integrades conscients del tema** — Les guies d'habilitats per a Block Themes, Classic Themes, Kadence Blocks i Kadence Theme ara venides amb el plugin
- **Capacitat de formulari de contacte del constructor de sites** — Afegeix un formulari de contacte a qualsevol pàgina directament des de la interfície de xat

### Millorat

- **Integració de WooCommerce refactored** — Ara utilitza les API natives de WooCommerce per a una millor fiabilitat i compatibilitat
- **La llista de proveïdors es refresca automàticament** — Quan es activa o desactiva qualsevol plugin

### Corregides

- **Capacitat navigate-to** — Corregit el bucle de recàrrega infinit en algunes pàgines d'administració
- **Capacitat list-posts** — Ara resol correctament els noms de categoria i etiqueta a slugs
- **Comandos WP-CLI** — Restaurats els alias de namespace faltants després d'una refactorització prèvia
- **Automatització d'esdeveniments** — Gestiona amb gràcia els sites on les taules d'automatització encara no han demanat
- **Capacitat memory-save** — Ara utilitza el prefix de namespace correcte a l'constructor d'instruccions del sistema
- **Resultats de l'eina Scalar** — Ara encapsulats correctament abans de ser retornats a l'AI
- **Estadístiques d'ús** — Ara gestionen correctament el format de clau d'habilitat legat quan s'actualitza des de versions més antigues
