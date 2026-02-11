---
title: Registro delle modifiche IVA
sidebar_position: 99
_i18n_hash: 203587cca82c7a062fdbaf29c1b0024b
---
# Registro delle modifiche IVA

Versione 1.0.6 - Rilasciata il 2026-01-25

* Correzione: le transazioni B2B domestiche ora addebitano correttamente l'IVA. Secondo le regole IVA UE, l'inversione di addebito si applica solo alle transazioni B2B transfrontaliere, non quando il paese del cliente corrisponde a quello dell'azienda.

Versione 1.0.5 - Rilasciata il 2026-01-22

* Correzione: l'Addon non si carica o non funziona correttamente.
* Modifica: cambiata la fonte dei dati delle aliquote IVA da euvatrates.com al repository ibericode/vat-rates per dati più affidabili e attivamente mantenuti.
* Correzione: corretto l'errore di battitura nel valore dell'opzione super_reduced_rates.
* Miglioramento: aggiunti controlli null per la gestione del codice paese per prevenire errori.
* Modifica: rimosse le file di traduzione incluse a favore di aggiornamenti automatici tramite Traduttore.

Versione 1.0.3 - Rilasciata il 2025-09-28

* Rinomina prefisso in ultimate-multisite; aggiorna dominio di testo; incremento versione.

Versione 1.0.0-beta.4 - 2021-09-24

* Aggiunto: filtro wp_ultimo_skip_network_active_check per configurazioni basate su mu-plugins;

Versione 1.0.0 - 05/08/2021 - Rilascio iniziale
