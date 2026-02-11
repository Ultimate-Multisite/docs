---
title: Che cos'è WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Che cos'è WordPress Multisite?

All'interno del suo core, WordPress offre una funzionalità chiamata ‘Multisite’ che risale al 2010 con il lancio di WordPress 3.0. Da allora ha ricevuto numerose revisioni volte a introdurre nuove funzionalità e a rafforzare la sicurezza.

In sostanza, un WordPress multisite può essere concepito così: una università mantiene un'unica installazione di WordPress, ma ogni facoltà gestisce il proprio sito WordPress.

## 

## Che cos'è esattamente WordPress Multisite?

Multisite è una funzionalità di WordPress che consente a più siti di condividere un'unica installazione di WordPress. Quando il multisite è attivato, il sito WordPress originale viene convertito per supportare ciò che di solito viene definito come una **rete di siti**.

Questa rete condivide il file system (ovvero **plugin e temi sono anch'essi condivisi**), il database, i file core di WordPress, il wp-config.php, ecc.

Ciò significa che gli aggiornamenti di WordPress, tema e plugin devono essere eseguiti solo una volta per tutti i siti della tua rete, poiché condividono gli stessi file sul file system.

Questo fatto è uno dei principali vantaggi del multisite, poiché ti consente di aumentare il numero di siti che gestisci mantenendo invariato il numero di attività necessarie per mantenere i siti dei tuoi clienti.

## 

## Sottodominio o sottodirectory?

Esistono due modalità per eseguire WordPress multisite – e devi scegliere una quando converti la tua installazione WordPress regolare in una installazione multisite:

**Sottodominio:** ex.: [site.domain.com](http://site.domain.com)

…o

**Sottodirectory:** ex.: [yourdomain.com/site](http://yourdomain.com/site)

Ogni modalità presenta vantaggi e svantaggi che devi considerare quando prendi questa decisione.

Una cosa importante da notare, tuttavia: una volta presa la decisione, cambiare la tua rete da sottodirectory a sottodominio o viceversa è davvero difficile – soprattutto se hai già un certo numero di siti creati.

Prima di prendere quella decisione, ecco alcuni punti da tenere a mente:

**Modalità Sottodirectory** è la modalità più semplice in termini di configurazione e manutenzione. Ciò accade perché tutti i siti sono semplici percorsi collegati al dominio principale (ad es. [yourdomain.com/subsite](http://yourdomain.com/subsite)). Di conseguenza, hai bisogno di **un solo certificato SSL** per il dominio principale e questo coprirà l'intera rete.

Allo stesso tempo, a causa della sua struttura URL, Google e la maggior parte degli altri motori di ricerca considereranno tutti i sottositi della tua rete basata su sottodirectory come un unico sito gigante. Di conseguenza, il contenuto aggiunto ai sottositi dai tuoi clienti finali potrebbe influenzare le prestazioni SEO del tuo sito di destinazione, per esempio. Il livello di impatto è discutibile e si può sostenere che avere tale disposizione possa addirittura essere vantaggioso per le prestazioni SEO.

**Modalità Sottodominio** è un po' più complessa da configurare, ma la sua struttura URL (ad es. [subsite.yournetwork.com](http://subsite.yournetwork.com)) è generalmente percepita come più “professionale”.

Una delle principali sfide nell'implementare la modalità sottodominio è la copertura SSL (HTTPS) per l'intera rete. Si riduce al fatto che i browser considerano i sottodomini come entità isolate. Di conseguenza, avrai bisogno di un certificato SSL diverso per ogni sottodominio della tua rete, o di un tipo speciale di certificato chiamato **Wildcard SSL certificate**. Negli ultimi anni, i provider di hosting e i pannelli hanno migliorato il loro servizio di provisioning SSL e alcuni offrono certificati wildcard con un clic, riducendo il divario tra le due modalità in termini di complessità di configurazione.

Al contrario della modalità sottodirectory, i sottositi su una rete basata su sottodominio sono considerati dai motori di ricerca come siti web separati, il che significa che il contenuto presente su un sottosito non interferisce affatto con le prestazioni SEO di altri sottositi.

## Il Super Admin

Le installazioni WordPress a singolo sito ti consentono di aggiungere un numero illimitato di utenti e di assegnare a questi utenti diversi ruoli utente con diverse autorizzazioni.

In WordPress Multisite, viene sbloccato un nuovo tipo di utente: **il super admin** – e viene sbloccato un nuovo pannello di amministrazione: **il pannello di amministrazione della rete**.

Come suggerisce il nome, il super admin ha superpoteri sulla rete, essendo in grado di gestire tutti i suoi sottositi, plugin, temi, tutto!

Una volta convertita la tua installazione WordPress a singolo sito in multisite, l'amministratore originale del singolo sito verrà automaticamente promosso a super admin.

I plugin e i temi possono essere installati o disinstallati solo dal pannello di amministrazione della rete da super admin. Gli amministratori dei sottositi possono quindi scegliere di attivare o disattivare quei plugin o temi, a meno che il super admin della rete non attivi un plugin, costringendolo ad essere attivo per tutti i sottositi in ogni momento.

_Nota: come puoi vedere, invitare qualcuno alla tua rete e concedergli lo status di super admin dà a questo utente il controllo totale sulla tua rete. Per esempio, altri super admin possono persino rimuovere il tuo status di super admin, bloccandoti effettivamente dal tuo pannello di amministrazione della rete. Per consentire ai clienti Ultimate Multisite di avere un controllo granulare su ciò che gli altri super admin possono fare, abbiamo un add-on chiamato Support Agents. Questo add-on ti consente di creare un altro tipo di utente – un agente – con solo le autorizzazioni di cui potrebbero aver bisogno per svolgere i loro compiti sulla rete._

## Cosa è condiviso tra i sottositi e cosa non lo è

Come abbiamo già menzionato, uno dei principali vantaggi di WordPress multisite è che tutti i sottositi condividono le stesse configurazioni, file core, temi, plugin, file core di WordPress, ecc.

Tuttavia, ci sono elementi che sono ben limitati su base per sottosito.

- Per esempio, ogni sottosito ha la propria cartella di caricamenti. Di conseguenza, i caricamenti effettuati dagli utenti di un determinato sottosito non possono essere accessibili su un altro sottosito.
- Ogni sottosito ha il proprio pannello di amministrazione dedicato e può attivare o disattivare plugin o temi a meno che non siano stati attivati a livello di rete da un super admin.
- La maggior parte delle tabelle del database è creata per ogni sottosito, il che significa che post, commenti, pagine, impostazioni e altro sono limitati a ciascun sottosito.

## Gestione degli utenti su WordPress Multisite

Un argomento delicato su WordPress multisite è la gestione degli utenti. La tabella degli utenti di WordPress è una delle poche che è condivisa tra tutti i sottositi.

Questa disposizione può generare alcuni problemi a seconda di ciò che intendi realizzare con la tua rete. L'esempio qui sotto aiuta a illustrare il più urgente.

Immagina il seguente scenario:

Crei una rete WordPress multisite e inizi a offrire sottositi per una tariffa mensile a persone che vogliono avere un negozio e-commerce.

Ricevi il tuo primo cliente pagante – John. Crei un sito per John sulla tua rete, installi tutti i plugin necessari, poi crei un utente per John in modo che possa gestire il suo negozio.

Poi arriva un secondo cliente – Alice. Fai la stessa cosa per lei e ora ha anche un negozio sulla tua rete.

John e Alice sono entrambi tuoi clienti, ma non si conoscono. Ancora più importante, se uno di loro visita il sito web del negozio dell'altro, non c'è modo di sapere che questo negozio è ospitato sulla stessa rete di siti.

Un giorno, John ha bisogno di comprare un nuovo paio di scarpe e trova le perfette nel negozio di Alice. Quando prova a completare l'acquisto, riceve un messaggio di errore “email già in uso”, il che è strano poiché John è al 100% sicuro che sia la prima volta che visita il sito di Alice.

_Nota: comprendiamo quanto possa essere negativo a seconda del tuo caso d'uso, quindi Ultimate Multisite ha un'opzione che bypassa i controlli regolari per un utente esistente, consentendo la creazione di più account utilizzando lo stesso indirizzo email. Ogni account è legato a un sottosito, quindi il rischio di collisione è mantenuto al minimo. Nell'esempio sopra, John non riceverebbe un messaggio di errore e sarebbe in grado di acquistare quelle scarpe senza problemi. Questa opzione si chiama Enable Multiple Accounts, e può essere attivata su Ultimate Multisite → Settings → Login & Registration._

Anche se la tabella degli utenti è condivisa, gli utenti possono essere aggiunti e rimossi dai sottositi dagli amministratori dei sottositi o dal super admin, e possono persino avere ruoli utente diversi su sottositi differenti.

## Considerazioni sulle prestazioni

WordPress multisite è davvero potente per quanto riguarda il numero di siti che può supportare. Questo può essere dimostrato dal fatto che [WordPress.com](https://WordPress.com), Edublogs e Campuspress sono tutti servizi basati su multisite e ospitano ciascuno migliaia di siti.

Sebbene in teoria non esista un numero massimo di siti che puoi ospitare su un'unica installazione WordPress multisite, nella pratica il numero di siti che puoi gestire soddisfacente può variare ampiamente a seconda di diversi fattori: quanto sono dinamici i siti, quali plugin sono disponibili per i sottositi, ecc.

Come regola empirica, più semplice è la tua rete, meglio è. Favorire siti in cui il contenuto non è davvero dinamico (che li rende ottimi candidati per strategie di caching aggressive) e mantenere lo stack di plugin il più leggero possibile (più basso è il numero di plugin attivi, meglio è) può aumentare drasticamente il numero di sottositi che puoi ospitare.

La cosa migliore è che, poiché tutto è WordPress qui, gli stessi strumenti che già conosci e ami per i miglioramenti delle prestazioni funzioneranno anche per una rete multisite.

Il principale collo di bottiglia per il multisite è il database, ma se tutto il resto è configurato correttamente, può gestire un paio di migliaia di siti prima che tu debba preoccupartene. Anche allora, esistono soluzioni che possono essere aggiunte progressivamente in quel momento (come soluzioni di sharding del database, per esempio).
