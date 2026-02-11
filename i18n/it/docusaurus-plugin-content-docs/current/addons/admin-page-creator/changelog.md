---
title: Registro delle modifiche di Admin Page Creator
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Admin Page Creator Registro modifiche

### Version 1.9.0 - Rilasciato il 2026-01-18

* Corretto: errori fatali durante l'attivazione.
* Rifattorizzato: le classi delle fonti di contenuto per usare il trait Singleton con corretta inizializzazione del costruttore del genitore.
* Corretto: errori di compilazione del template Vue.js che impedivano il rendering del selettore di tipo di contenuto.
* Corretto: proprietà Vue mancanti (template_id, external_link_url_embedable, external_link_url_checking).
* Corretto: l'editor TinyMCE non si inizializzava correttamente al caricamento della pagina.
* Corretto: file di supporto Divi non autoloadato tramite Composer.
* Corretto: sintassi PHP corrotta nella classe di supporto Divi.
* Migliorato: organizzazione e minificazione delle risorse JavaScript.
* Migliorato: compatibilità con le ultime versioni di WordPress e dei page builder.

= Version: 1.8.8 - Rilasciato il 2025-09-28

* Rinomina prefisso in ultimate-multisite; aggiorna dominio di testo; incremento versione.

### Version 1.8.7 - 04/10/2023

* Corretto: errore fatale quando si tenta di aggiungere una nuova pagina amministrativa;
* Corretto: conflitto con prefisso degli stili Oxygen;

### Version 1.8.6 - 09/08/2023

* Aggiunto: opzione per visualizzare i dati dal sito principale o dal sottosito corrente.
* Aggiunto: supporto per l'Editor a blocchi di WordPress (Gutenberg).
* Corretto: risolto il problema con le risorse delle pagine Brizy non caricate.

### Version 1.8.5 - 09/12/2020

* Corretto: problema con le Opzioni Schermo per nascondere il menu che non scompariva;

### Version 1.8.4 - 11/11/2020

* Corretto: supporto a Multisite Ultimate v2;

### Version 1.8.3 - 01/10/2020

* Corretto: incompatibilità con Beaver Builder dalla build precedente;
* Corretto: incoerenze di margine con WP 5.5;

### Version 1.8.2 - 21/09/2020

* Corretto: piccole incompatibilità con WP 5.5;

### Version 1.8.1 - 05/08/2020

* Corretto: incompatibilità con Brizy 2.0;
* Corretto: piccoli problemi di prestazioni nella costruzione dell'elenco dei menu;

### Version 1.8.0 - 27/04/2020

* Corretto: avvisi nascosti sotto la barra superiore quando non è selezionata la modalità margine;
* Aggiunto: le pagine personalizzate possono ora sostituire più pagine amministrative di primo livello e sottopagine di WordPress contemporaneamente;
* Aggiunto: gli amministratori possono ora nascondere le pagine amministrative usando WP Admin Pages PRO;

### Version 1.7.9 - 01/04/2020

* Corretto: Brizy 1.10.118 e versioni successive interrompono il supporto SVG sulle pagine amministrative;

### Version 1.7.8 - 26/03/2020

* Corretto: errore di escape che interrompe la pagina Editor quando si usa il francese;

### Version 1.7.7 - 04/03/2020

* Corretto: piccola incompatibilità con Brizy Builder;
* Migliorato: SDK Freemius aggiornato alla versione 2.3.2;

### Version 1.7.6 - 10/02/2020

* Corretto: pulsante di modifica della pagina amministrativa nell'angolo in basso a destra non funziona sui Widget del Dashboard;
* Corretto: piccola incompatibilità con Astra;
* Corretto: nuova versione di Brizy interrompe la compatibilità;

### Version 1.7.5 - 14/12/2019

* Corretto: aggiunto un nuovo gestore di casi limite per popolare gli elementi del menu sull'opzione Sostituisci Pagina;
* Corretto: font di Elementor non funzionanti;
* Migliorato: SDK Freemius aggiornato per supportare la nascondere informazioni sensibili dalla pagina Account;

### Version 1.7.4 - 29/11/2019

* Corretto: incompatibilità con WooCommerce Memberships;
* Corretto: componente tab di Oxygen Builder non funzionante;
* Corretto: Beaver Themer non funzionante;

### Version 1.7.3 - 12/07/2019

* Corretto: pagine scompaiono quando il loro genitore viene convertito in un altro tipo di pagina amministrativa;
* Migliorato: divider della tabella elenco migliori tra i tipi di pagina amministrativa;
* Migliorato: revisione della sicurezza dell'intero codice del plugin;
* Migliorato: nota sull'avviso del tab Separator quando la funzione non è disponibile per un dato tipo di menu/fonte di contenuto;

### Version 1.7.2 - 01/07/2019

* Corretto: versione SDK Freemius aggiornata alla 2.3.0;
* Corretto: problema di incompatibilità con Flywheel;

### Version 1.7.1 - 27/06/2019

* Corretto: il Welcome Widget ora viene visualizzato per tutti i ruoli;
* Corretto: Opzione Schermo per nascondere/visualizzare il menu Pagine Amministrative non viene aggiunta se il menu è nascosto tramite il filtro documentato su https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/
* Migliorato: nascondere i menu Pagine Amministrative ora nasconde anche i template creati dalla lista dei template salvati di Beaver Builder sull'interfaccia del builder;
* Aggiunto: opzioni per attivare e disattivare in blocco le pagine amministrative;
* Aggiunto: opzione per visualizzare le pagine anche sul sito principale;
* Aggiunto: opzione per rinominare le etichette dei menu di primo e secondo livello in modalità Sostituisci;

### Version 1.7.0 - 04/06/2019

* Corretto: problemi con i template Oxygen non visualizzati;
* Aggiunto: supporto alla creazione di Widget!

### Version 1.6.1 - 22/05/2019

* Corretto: errori di battitura;
* Corretto: pagine di sottomenù che sovrascrivono gli elementi di sottomenù precedenti con lo stesso valore di ordine;
* Corretto: la duplicazione ora reimposta lo slug della pagina duplicata;
* Migliorato: file po pt_BR e es_ES aggiornati;
* Migliorato: la tabella elenco ora elenca anche il nome delle pagine personalizzate come pagine genitore;

### Version 1.6.0 - 21/05/2019

* Aggiunto: i link esterni ora supportano anche il caricamento iframe;

### Version 1.5.5 - 17/05/2019

* Corretto: messaggio di avviso generato quando una pagina veniva eliminata o duplicata;
* Corretto: impostazioni di permesso non applicate agli Amministratori;

### Version 1.5.4 - 08/05/2019

* Corretto: incompatibilità con Sliced Invoices;
* Corretto: piccolo problema con Oxygen;
* Corretto: segnaposto sul campo titolo della nuova pagina amministrativa non scompare al key-up;

### Version 1.5.3 - 03/05/2019

* Corretto: incompatibilità con le pagine opzione Advanced Custom Field;
* Aggiunto: opzione per aggiungere utenti specifici come obiettivi delle pagine amministrative personalizzate;

### Version 1.5.2 - 30/04/2019

* Corretto: incompatibilità con versioni più recenti di Brizy;
* Aggiunto: traduzione spagnola aggiunta - cortesemente di John Rozzo. Grazie, John!
* Aggiunto: supporto beta a Oxygen Builder;

### Version 1.5.1 - 15/04/2019

* Corretto: problema con i segnaposto sugli editor Normale e HTML;
* Corretto: Pagine Amministrative non visualizzate su Strumenti -> Esporta;
* Corretto: caricamento degli script e degli stili solo sulle nostre pagine;
* Aggiunto: i Super Amministratori possono ora duplicare le Pagine Amministrative;

### Version 1.5.0 - 29/03/2019

* Corretto: piccoli bug rilevati da Sentry;
* Corretto: pulsante Elimina non funzionante nella schermata Modifica Pagina Amministrativa;
* Migliorato: cambiato il pulsante BeaverBuilder per chiarire che la licenza Standard BB è anche supportata;
* Aggiunto: gli Amministratori possono impostare anche l'ordine dei sottomenù;
* Aggiunto: la modalità Sostituisci Pagina ora supporta tutti gli elementi di menu disponibili;

### Version 1.4.0 - 14/02/2019 (stand-alone) & 27/02/2019 (add-on)

* Aggiunto: lanciato come plugin stand-alone in https://wpadminpagespro.com
* Aggiunto: opzione per rimuovere l'elemento del menu Pagine Amministrative dal menu dopo che il processo di creazione della pagina è completato;
* Aggiunto: opzione per rimuovere le notifiche amministrative dalle pagine amministrative;
* Aggiunto: elaborazione del contenuto, così puoi inserire segnaposto come {{user:first_name}} e farli sostituire automaticamente con il campo meta first_name dell'utente;
* Aggiunto: Editor in linea;
* Aggiunto: classe genitore delle fonti di contenuto consolidata per rendere più facile l'aggiunta di nuovi Page Builder/Fonte di contenuto in futuro;
* Aggiunto: supporto a URL esterni;

### Version 1.3.0 - 15/01/2019

* Corretto: le Pagine Amministrative non appaiono sul sito principale negli ambienti multisito;
* Migliorato: rimossi i tipi di post personalizzati Multisite Ultimate dallo schermo di esportazione dei sottositi;
* Aggiunto: barra superiore con azioni rapide per gli amministratori di rete sulle pagine di creazione;
* Aggiunto: ENORMO! Supporto Elementor!
* Aggiunto: ENORMO! Supporto Brizy!

### Version 1.2.1 - 17/11/2018

* Corretto: rendere il plugin compatibile con Multisite Ultimate 1.9.0;

### Version 1.2.0 - 10/09/2018

* Aggiunto: supporto PHP aggiunto se WU_APC_ALLOW_PHP_PROCESSING è impostato su true in wp-config.php. Questo non utilizza eval di PHP, ma può comunque causare vulnerabilità di sicurezza. Usalo con cautela;
* Migliorato: aggiornamento plugin add-on;
* Migliorato: nuovo URL per il server di aggiornamenti;

### Version 1.1.2 - 16/08/2018

* Corretto: piccolo problema con WP Engine;

### Version 1.1.1 - 16/08/2018

* Corretto: permessi non applicati correttamente alle pagine di sostituzione;

### Version 1.1.0 - 15/08/2018

* Aggiunto: i template di Beaver Builder sono ora supportati! Puoi usare il tuo page builder preferito per creare pagine amministrative personalizzate;
* Aggiunto: ora è possibile sostituire anche il contenuto delle pagine amministrative predefinite di WordPress;
* Aggiunto: ora è possibile aggiungere il contenuto creato in cima o in fondo alle pagine amministrative predefinite di WordPress;

### 0.0.1

- Rilascio iniziale
