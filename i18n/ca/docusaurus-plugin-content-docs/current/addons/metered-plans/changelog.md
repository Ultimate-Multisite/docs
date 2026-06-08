---
title: Diari de canvis dels Plans Mètrics
sidebar_position: 99
_i18n_hash: ee036a85eb635b4b503c94798251e839
---
# Diari de canvis de plans mesurats

Versió 1.1.0 - Publicada el 2026-05-05
- Nou: Cobratge de tokens d'IA per a subsites de multisite — rastreja i cobra l'ús de tokens d'IA en diversos sites clients amb tarifes per token configurables
- Nou: L'aplicació del Connector s'ha reconstruït amb descobriment dinàmic de límits i *write-through*, assegurant una precisió en temps real en tots els connectors
- Correcció: Les actualitzacions de taules de base de dades estan ara correctament alineades amb les definicions de schema de BerlinDB, prevenint fallades d'actualització en noves instal·lacions
- Correcció: Els *callbacks* d'actualització de la base de dades es han convertit al format correcte, resolent fallades silencioses d'actualització
- Correcció: S'accepten ara valors fraccionaris al camp d'entrada de Margina d'excedent d'ús d'IA
- Correcció: Resoluts errors fatals i problemes de doble inicialització al carregar el plugin
- Millorat: S'ha afegit el script npm check-env perquè els entorns de desenvolupador s'autoconfiguren al primer execució

### 1.0.3
* Actualitzat a Plugin Update Checker v5
* S'han afegit en-capçalats moderns de plugin de WordPress
* Millorada la compatibilitat amb les últimes versions de WordPress
* Rendiment millorat del rastreament d'ús

### 1.0.2
* Correccions de bugs i millores de rendiment
* Informes d'ús millorats

### 1.0.0
* Lançament inicial
* Funcionalitat bàsica de cobratge mesurat
* Rastreament d'ús i càlcul d'excedent
* Generació automàtica de factures
