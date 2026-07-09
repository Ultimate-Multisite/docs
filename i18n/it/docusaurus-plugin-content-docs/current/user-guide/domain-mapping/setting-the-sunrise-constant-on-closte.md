---
title: Impostazione della costante Sunrise su Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Impostare la costante Sunrise su true su Closte

Alcuni provider di hosting bloccano il wp-config.php per motivi di sicurezza. Questo significa che Ultimate Multisite non può modificare automaticamente il file per includere le costanti necessarie affinché la mappatura dei domini e altre funzionalità funzionino. Closte è uno di questi host.

Tuttavia, Closte offre un modo per aggiungere costanti al wp-config.php in modo sicuro. Devi solo seguire i passaggi qui sotto:

## Nella dashboard di Closte

Per prima cosa, [accedi al tuo account Closte](https://app.closte.com/), fai clic sulla voce di menu Sites, quindi fai clic sul link Dashboard sul sito su cui stai attualmente lavorando:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Ti verranno presentate diverse nuove voci di menu sul lato sinistro dello schermo. Vai alla pagina **Settings** usando quel menu:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Quindi, in **Settings**, trova la scheda WP-Config e poi il campo "Additional wp-config.php content" in quella scheda:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Nel contesto dell'installazione di Ultimate Multisite, dovrai aggiungere la costante sunrise in quel campo. Aggiungi semplicemente una nuova riga e incolla la riga qui sotto. Dopodiché, fai clic sul pulsante **Save All**.

define('SUNRISE', true);

Ecco fatto, è tutto pronto. Torna alla procedura guidata di installazione di Ultimate Multisite e aggiorna la pagina per continuare il processo.
