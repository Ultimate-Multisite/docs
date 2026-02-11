---
title: Ricerca e Sostituzione Automatica nei Modelli del Sito
sidebar_position: 8
_i18n_hash: 81adce2fb2df1a5296590bffea6f2d14
---
# Ricerca e sostituzione automatica nei template del sito (v2)

_**Questo tutorial richiede WP UItimo versione 2.x.**_

Una delle funzionalità più potenti di Ultimate Multisite è la possibilità di aggiungere testo arbitrario, colore e campi di selezione al modulo di registrazione. Una volta che abbiamo acquisito quei dati, possiamo usarli per precompilare il contenuto in determinate parti del template del sito selezionato. Poi, quando il nuovo sito viene pubblicato, Ultimate Multisite sostituirà i segnaposto con le informazioni effettive inserite durante la registrazione.

Ad esempio, puoi creare i tuoi siti template con segnaposto. I segnaposto devono essere aggiunti circondati da doppi parentesi graffe - {{placeholder_name}}.

Poi, puoi semplicemente aggiungere un campo di registrazione corrispondente per acquisire quei dati

Il tuo cliente potrà quindi compilare quel campo durante la registrazione.

Ultimate Multisite sostituirà quindi i segnaposto con i dati forniti dal cliente automaticamente.

## **Risoluzione del problema del "template pieno di segnaposto"**

Tutto questo è fantastico, ma ci troviamo di fronte a un brutto problema: ora i nostri template di sito - che possono essere visitati dai nostri clienti - sono pieni di brutti segnaposto che non dicono molto.

Per risolvere questo, offriamo l'opzione di impostare valori finti per i segnaposto, e usiamo quei valori per cercare e sostituire i loro contenuti sui siti template mentre i tuoi clienti sono in visita.

Puoi accedere all'editor dei segnaposto del template andando su **Ultimate Multisite > Settings > Sites**, e poi, nella barra laterale, cliccando sul link Modifica segnaposto.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-aFtnOrska9.png)

Ciò ti porterà all'editor dei contenuti dei segnaposto, dove puoi aggiungere segnaposto e i rispettivi contenuti.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-OeMzuyauOW.png)
