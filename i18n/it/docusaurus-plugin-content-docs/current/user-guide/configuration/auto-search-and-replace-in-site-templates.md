---
title: Ricerca e sostituzione automatiche nei modelli del sito
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Ricerca e sostituzione automatica nei template del sito (v2)

_**Questo tutorial richiede WP UItimo versione 2.x.**_

Una delle funzionalità più potenti di Ultimate Multisite è la possibilità di aggiungere campi arbitrari di testo, colore e selezione al modulo di registrazione. Una volta acquisiti questi dati, possiamo usarli per precompilare il contenuto in determinate parti del template del sito selezionato. Poi, quando il nuovo sito viene pubblicato, Ultimate Multisite sostituirà i segnaposto con le informazioni effettive inserite durante la registrazione.

Ad esempio, puoi creare i tuoi siti template con dei segnaposto. I segnaposto devono essere aggiunti racchiusi tra doppie parentesi graffe - {{placeholder_name}}.

Poi, puoi semplicemente aggiungere un campo di registrazione corrispondente per acquisire quei dati

Il tuo cliente potrà quindi compilare quel campo durante la registrazione.

Ultimate Multisite sostituirà quindi automaticamente i segnaposto con i dati forniti dal cliente.

## **Risolvere il problema del "template pieno di segnaposto"** {#solving-the-template-full-of-placeholders-problem}

Tutto questo è ottimo, ma ci imbattiamo in un problema sgradevole: ora i nostri template del sito - che possono essere visitati dai nostri clienti - sono pieni di brutti segnaposto che non dicono molto.

Per risolvere questo problema, offriamo l'opzione di impostare valori fittizi per i segnaposto e usiamo quei valori per cercare e sostituire i loro contenuti sui siti template mentre i tuoi clienti li visitano.

Puoi accedere all'editor dei segnaposto del template andando su **Ultimate Multisite > Settings > Sites**, scorrendo fino all'area Opzioni template del sito e poi facendo clic sul link **Modifica segnaposto**.

![Area Opzioni template del sito nella pagina delle impostazioni Sites](/img/config/settings-sites-templates-section.png)

Questo ti porterà all'editor del contenuto dei segnaposto, dove puoi aggiungere segnaposto e i rispettivi contenuti.

![Punto di accesso all'editor dei segnaposto del template](/img/config/settings-sites-templates-section.png)
