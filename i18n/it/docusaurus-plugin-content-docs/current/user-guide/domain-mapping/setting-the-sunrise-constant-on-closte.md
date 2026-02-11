---
title: Impostare la Costante Sunrise su Closte
sidebar_position: 16
_i18n_hash: e579b8554057b98fef08a0f2bd2a0e82
---
# Impostare la costante Sunrise su true su Closte

Alcuni provider di hosting bloccano il wp-config.php per motivi di sicurezza. Ciò significa che Ultimate Multisite non può modificare automaticamente il file per includere le costanti necessarie a far funzionare la mappatura dei domini e altre funzionalità. Closte è uno di questi provider.

Tuttavia, Closte offre un modo per aggiungere costanti al wp-config.php in modo sicuro. Devi solo seguire i passaggi riportati di seguito:

## Sul cruscotto di Closte

Per prima cosa, [accedi al tuo account Closte](https://app.closte.com/), fai clic sull'elemento di menu Sites, quindi fai clic sul link Dashboard sul sito su cui stai lavorando:

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-dPRIeofCDK.png)

Ti verrà presentato un numero di nuovi elementi di menu sul lato sinistro dello schermo. Naviga alla pagina **Settings** usando quel menu:

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JmSwHIOaGz.png)

Quindi, nella pagina **Settings**, trova la scheda WP-Config, e poi il campo "Additional wp-config.php content" su quella scheda:

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FqVEnSTIu9.png)

Nel contesto dell'installazione di Ultimate Multisite, dovrai aggiungere la costante sunrise a quel campo. Aggiungi semplicemente una nuova riga e incolla la riga riportata di seguito. Successivamente, fai clic sul pulsante **Save All**.

define('SUNRISE', true);

Ecco fatto, sei pronto. Torna alla procedura guidata di installazione di Ultimate Multisite e ricarica la pagina per continuare il processo.
