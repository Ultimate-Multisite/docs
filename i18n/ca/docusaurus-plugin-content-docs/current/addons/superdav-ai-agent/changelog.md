---
title: Registre de canvis
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Registre de canvis

## 1.18.0 — Publicat el 2026-06-29

### Nou

- **Eines de Google Calendar** — llegeixen calendaris i esdeveniments configurats per a automatitzacions conscients de l'horari
- **Assignació de contactes i ajudants d'assistents** — relacionen els participants del calendari amb usuaris i contactes del lloc
- **Portes d'aprovació humana i registres de recordatoris** — pausen automatitzacions per a revisió i eviten notificacions duplicades
- **Proveïdor d'SMS TextBee** — envia notificacions de missatges de text configurades mitjançant TextBee
- **Paquet complementari avançat** — afegeix eines de sistema de fitxers per a desenvolupadors de confiança, base de dades, WP-CLI, despatxador REST, creador de plugins, instantània git, gestió d'usuaris i benchmark distribuïdes per separat de la compilació de WordPress.org

### Millorat

- **Configuració del servei Superdav gestionat** — afegeix endpoints de servei allotjats i aprovisionament automàtic de connexions per als llocs compatibles
- **Empaquetament de la versió** — crea ZIPs separats del nucli i avançats, publica tots dos a GitHub i envia només el paquet del nucli a WordPress.org

### Corregit

- **Fiabilitat de les sol·licituds d'IA** — millora la selecció del model, els temps d'espera de les sol·licituds, el model de configuració predeterminat, el tractament del text de raonament i l'orientació de reintent per a crides d'eines no vàlides
- **Reforç de calendaris i recordatoris** — reforça els tokens de Google Calendar i la deduplicació de recordatoris
- **Incorporació i represes d'aprovació** — corregeix els llançaments d'incorporació al frontend i les represes d'habilitats confirmades
- **Problemes de revisió de l'empaquetament de WordPress.org** — aborda els comentaris de revisió de l'empaquetament per a la versió del nucli

## 1.16.0 — Publicat el 2026-05-20

### Nou

- **Habilitat Generate Logo SVG** — Theme Builder ara pot generar i incrustar SVGs de logotip personalitzats amb sanejament segur per a espais de noms
- **Pujada de fotos a l'entrevista de descobriment** — l'entrevista de descobriment de Theme Builder ara inclou un pas de pujada de fotos per a un context de disseny més ric
- **Habilitat Validate Palette Contrast** — comprova parells de colors per al compliment de WCAG abans d'aplicar-los a un theme
- **Menús d'hospitalitat** — Theme Builder ara pot generar pàgines de menú estructurades de menjar i begudes per a negocis d'hospitalitat
- **Renderització de previsualització d'escriptori i mòbil** — previsualitza el teu disseny en dispositius d'escriptori i mòbils durant la selecció de la direcció de disseny
- **Paràmetre d'etiqueta de navegació** — l'habilitat Create Menu ara admet un `navigation_label` diferent, separat del títol de la pàgina
- **Disponibilitat d'eina de nivell 1** — sd-ai-agent/site-scrape ara és una eina de nivell 1 disponible per defecte a Theme Builder

### Corregit

- **Caché d'AI Client** — ara està respaldada per transients per a persistència entre sol·licituds, evitant la pèrdua de dades en tasques d'agent de llarga durada
- **Enllaços d'accions de fila del plugin** — corregits i reanomenats per a més claredat

## 1.10.0 — Publicat el 2026-05-05

### Nou

- **Cerca a internet Tavily** — afegeix Tavily com a proveïdor de cerca per a resultats de cerca a internet més rics juntament amb Brave Search
- **Habilitats integrades conscients del theme** — les guies d'habilitats de Block Themes, Classic Themes, Kadence Blocks i Kadence Theme ara s'inclouen amb el plugin
- **Habilitat de formulari de contacte del creador de llocs** — afegeix un formulari de contacte a qualsevol pàgina directament des de la interfície de xat

### Millorat

- **Integració de WooCommerce refactoritzada** — ara utilitza les APIs natives de WooCommerce per a una millor fiabilitat i compatibilitat
- **La llista de proveïdors s'actualitza automàticament** — quan s'activa o es desactiva qualsevol plugin

### Corregit

- **Habilitat navigate-to** — corregit un bucle de recàrrega infinit en algunes pàgines d'administració
- **Habilitat list-posts** — ara resol correctament els noms de categories i etiquetes a slugs
- **Ordres WP-CLI** — restaurats els àlies d'espai de noms que faltaven després d'una refactorització anterior
- **Automatització d'esdeveniments** — gestiona correctament els llocs on les taules d'automatització encara no s'han creat
- **Habilitat memory-save** — ara utilitza el prefix d'espai de noms correcte al constructor d'instruccions del sistema
- **Resultats d'eines escalars** — ara s'emboliquen correctament abans de retornar-los a la IA
- **Estadístiques d'ús** — ara gestionen correctament el format de clau d'habilitat llegat en actualitzar des de versions més antigues
