---
title: Moduli di Contatto per Site Builder
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Moduli di contatto con Site Builder {#site-builder-contact-forms}

Superdav AI Agent v1.10.0 aggiunge la possibilità di creare moduli di contatto direttamente dall'interfaccia chat utilizzando l'agente Site Builder. Questo ti permette di aggiungere moduli di contatto completamente funzionanti a qualsiasi pagina senza dover lasciare la chat.

## Panoramica {#overview}

La funzione di moduli di contatto di Site Builder (`create_contact_form`) rileva automaticamente il plugin per moduli che hai installato e crea un modulo di contatto utilizzando le funzionalità native di quel plugin. I plugin per moduli supportati includono:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

L'assistente seleziona automaticamente il miglior plugin per moduli disponibile sul tuo sito e genera un modulo di contatto personalizzato per quel plugin.

## Creare un modulo di contatto {#creating-a-contact-form}

Per creare un modulo di contatto utilizzando Site Builder:

1. Apri il pannello chat di **Gratis AI Agent** nell'admin di WordPress.
2. Passa all'agente **Site Builder** cliccando sull'icona dell'agente nell'intestazione della chat.
3. Descrivi il modulo di contatto che desideri creare. Ad esempio:

   > "Aggiungi un modulo di contatto alla pagina Contatti con campi per nome, email, messaggio e numero di telefono."

   Oppure semplicemente:

   > "Crea un modulo di contatto per la pagina Contatti."

4. Site Builder genererà il modulo di contatto e restituirà uno shortcode pronto per essere incorporato.

## Utilizzare lo shortcode generato {#using-the-generated-shortcode}

Dopo che Site Builder ha creato il modulo di contatto, restituisce uno shortcode (ad esempio, `[contact-form-7 id="123"]`). Puoi:

1. **Incorporarlo in una pagina o un post** — Copia lo shortcode e incollalo in qualsiasi pagina o post utilizzando l'editor a blocchi o l'editor classico.
2. **Aggiungerlo tramite Site Builder** — Chiedi a Site Builder di aggiungere il modulo a una pagina specifica automaticamente:

   > "Aggiungi il modulo di contatto alla pagina Contatti."

3. **Usarlo in un template** — Se ti senti a tuo agio con PHP, puoi aggiungere lo shortcode a un file template del tema.

## Personalizzare il modulo di contatto {#customizing-the-contact-form}

Dopo che Site Builder ha creato il modulo di contatto, puoi personalizzarlo ulteriormente:

### Tramite l'interfaccia chat {#via-the-chat-interface}

Chiedi a Site Builder di modificare il modulo:

> "Aggiorna il modulo di contatto per aggiungere un campo oggetto e rendere obbligatorio il campo messaggio."

Site Builder aggiornerà il modulo e restituirà lo shortcode aggiornato.

### Tramite l'interfaccia admin del plugin per moduli {#via-the-form-plugins-admin-interface}

Puoi anche personalizzare il modulo direttamente nelle impostazioni del tuo plugin per moduli:

1. Vai su **Contact Form 7** (o il tuo plugin per moduli installato) nell'admin di WordPress.
2. Trova il modulo creato da Site Builder.
3. Modifica i campi del modulo, le regole di convalida e le notifiche via email secondo necessità.

## Plugin per moduli e compatibilità {#form-plugins-and-compatibility}

Site Builder rileva automaticamente quale plugin per moduli è installato sul tuo sito e lo utilizza per creare il modulo di contatto. Se sono installati più plugin per moduli, Site Builder li priorizza in questo ordine:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Se nessuno di questi plugin è installato, Site Builder ti consiglierà di installarne uno prima di creare il modulo di contatto.

## Notifiche via email {#email-notifications}

I moduli di contatto creati da Site Builder sono configurati per inviare notifiche via email all'amministratore del sito di default. Puoi personalizzare l'indirizzo email del destinatario e il messaggio di notifica:

1. Vai all'interfaccia admin del tuo plugin per moduli.
2. Trova il modulo creato da Site Builder.
3. Modifica le impostazioni di notifica via email.

Per istruzioni dettagliate, fai riferimento alla documentazione del tuo plugin per moduli:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Casi d'uso di esempio {#example-use-cases}

### Modulo di contatto semplice {#simple-contact-form}

> "Crea un modulo di contatto semplice con campi per nome, email e messaggio."

### Modulo a più passaggi {#multi-step-form}

> "Crea un modulo di contatto con un primo passaggio per le informazioni di contatto e un secondo passaggio per il messaggio e il metodo di contatto preferito."

### Modulo con logica condizionale {#form-with-conditional-logic}

> "Crea un modulo di contatto che mostri campi diversi in base alla selezione dell'utente in un menu a tendina."

### Modulo con caricamento file {#form-with-file-upload}

> "Crea un modulo di contatto che consenta agli utenti di caricare un file o un allegato."

:::note
La creazione di moduli di contatto è disponibile in Superdav AI Agent v1.10.0 e versioni successive. L'agente Site Builder deve essere attivo per utilizzare questa funzionalità.
:::
