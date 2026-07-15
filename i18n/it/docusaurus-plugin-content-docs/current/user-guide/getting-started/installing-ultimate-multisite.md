---
title: Installazione di Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Installazione di Ultimate Multisite

:::note
Questo tutorial presuppone che tu abbia già installato e configurato WordPress Multisite. Per scoprire come fare, consulta [questo tutorial](https://www.wpbeginner.com/glossary/multisite/) di WP Beginner.
:::

## Installazione del plugin {#installing-the-plugin}

Ultimate Multisite è disponibile gratuitamente su [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Dal tuo **Pannello di amministrazione della rete**, vai a **Plugin → Aggiungi nuovo plugin**.

![Pagina "Aggiungi nuovo plugin" nel pannello di amministrazione della rete](/img/installation/add-new-plugin.png)

Cerca **"Ultimate Multisite"** (con le virgolette per una corrispondenza esatta) e apparirà come primo risultato. Clicca su **Installa ora**.

![Risultati della ricerca che mostrano Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Una volta installato, clicca su **Attiva nella rete** per attivare il plugin in tutta la tua rete.

![Plugin installato con il pulsante "Attiva nella rete"](/img/installation/plugin-installed.png)

Dopo l'attivazione, sarai automaticamente reindirizzato alla procedura guidata di configurazione.

![Plugin attivato e reindirizzato alla procedura guidata](/img/installation/plugin-activated.png)

## Procedura guidata di configurazione {#setup-wizard}

La procedura guidata ti guiderà nella configurazione di Ultimate Multisite in circa 10 minuti.

### Benvenuto {#welcome}

Clicca su **Inizia** per iniziare.

![Schermata di benvenuto della procedura guidata](/img/installation/wizard-welcome.png)

### Controlli pre-installazione {#pre-install-checks}

Questo passaggio controlla le informazioni del tuo sistema e l'installazione di WordPress per assicurarsi che soddisfi i requisiti di Ultimate Multisite. Se tutto sembra a posto, clicca su **Vai al passaggio successivo**.

![Controlli pre-installazione che mostrano i requisiti di sistema](/img/installation/wizard-pre-install-checks.png)

:::note Pulsante "Attiva nella rete" (v2.6.1+)
Se Ultimate Multisite è stato installato ma **non ancora attivato a livello di rete** — ad esempio, se hai cliccato su **Attiva** (sito singolo) invece di **Attiva nella rete** dalla schermata dei plugin della rete — il passaggio dei controlli pre-installazione lo rileverà e visualizzerà un pulsante **Attiva nella rete**.

Cliccando su **Attiva nella rete**, il plugin verrà attivato automaticamente in tutta la tua rete multisito. Una volta attivato, la procedura guidata continuerà normalmente al passaggio di installazione. Non è necessario uscire dalla procedura guidata per correggere lo stato di attivazione.
:::

### Installazione {#installation}

L'installer creerà le tabelle del database necessarie e installerà il file `sunrise.php` di cui Ultimate Multisite ha bisogno per funzionare. Clicca su **Installa** per procedere.

![Passaggio di installazione che mostra le tabelle del database e sunrise.php](/img/installation/wizard-installation.png)

### La tua azienda {#your-company}

Inserisci le informazioni sulla tua azienda e imposta la valuta predefinita. Queste informazioni verranno utilizzate in tutta la tua piattaforma WaaS. Clicca su **Continua** quando hai finito.

![Passaggio di configurazione "La tua azienda"](/img/installation/wizard-your-company.png)

### Contenuti predefiniti {#default-content}

Questo passaggio ti consente di installare modelli predefiniti, prodotti e altri contenuti iniziali. Questo è un ottimo modo per familiarizzare con le funzionalità di Ultimate Multisite. Clicca su **Installa** per aggiungere i contenuti predefiniti o salta questo passaggio se preferisci iniziare da zero.

![Passaggio di installazione dei contenuti predefiniti](/img/installation/wizard-default-content.png)

### Plugin consigliati {#recommended-plugins}

Installa facoltativamente i plugin complementari consigliati. Clicca su **Installa** per aggiungerli o salta per continuare.

![Passaggio dei plugin consigliati](/img/installation/wizard-recommended-plugins.png)

### Pronto! {#ready}

Fatto! L'installazione di Ultimate Multisite è completa. Ora puoi iniziare a creare la tua piattaforma Website as a Service dal **Pannello di amministrazione della rete**.

![Configurazione completata - Schermata "Pronto"](/img/installation/wizard-ready.png)

![Pannello di amministrazione della rete con Ultimate Multisite attivo](/img/installation/network-dashboard.png)

Divertiti!
