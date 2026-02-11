---
title: Concetti di base
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Concetti di base

Per un nuovo utente di WordPress Multisite e per chi ha appena iniziato a usare Ultimate Multisite, può esserci un sacco di nuove parole e frasi da assimilare all'inizio. Impararle è un compito importante perché dovrai comprendere la piattaforma e il suo funzionamento nel suo complesso.

In questo articolo, cercheremo di definire e spiegare alcuni dei concetti chiave di WordPress. Alcuni di questi sono più rilevanti per gli utenti, altri per gli sviluppatori e alcuni per entrambi.

## WordPress Multisite

WordPress **Multisite** è un tipo di installazione di WordPress che ti consente di creare e gestire una rete di più siti web da un unico cruscotto WordPress. Puoi gestire tutto, compreso il numero di siti, le funzionalità, i temi e i ruoli utente. È possibile gestire centinaia e migliaia di siti.

## Network

In termini di WordPress, una rete multisite è dove un numero di **subsites** può essere gestito da un unico cruscotto. Sebbene la creazione di una rete multisite differisca tra i provider di hosting, il risultato finale è solitamente qualche direttiva aggiuntiva nel file **wp-config.php** per far sapere a WordPress che sta operando in questo specifico modo.

Ci sono diverse differenze distinte tra una rete multisite e un'installazione WordPress standalone che discuteremo brevemente.

## Database

Un database è un insieme strutturato e organizzato di dati. In termini informatici, un database si riferisce al software usato per memorizzare e organizzare i dati. Pensalo come una cassaforte dove memorizzi i dati in diverse sezioni chiamate tabelle.

WordPress Multisite utilizza un unico database e ogni subsite ottiene le proprie tabelle con l'id del blog nel prefisso, quindi una volta installata una rete e creato un subsite, dovresti avere queste tabelle:

_wp_1_options_ – options table for first subsite

_wp_2_options_ – options table for second subsite

## Hosting provider

Un provider di hosting è un'azienda che consente a imprese e individui di rendere i loro siti web disponibili tramite il World Wide Web. I servizi offerti dai provider di hosting variano, ma di solito includono progettazione di siti web, spazio di archiviazione su un host e connettività a Internet.

## Domain

Un nome di dominio è un indirizzo che le persone usano per visitare il tuo sito. Indica al browser web dove cercare il tuo sito. Proprio come un indirizzo stradale, un dominio è il modo in cui le persone visitano il tuo sito web online. E, come avere un cartello davanti al tuo negozio. Se desideri visitare il nostro sito web, dovrai digitare il nostro indirizzo web nella barra degli indirizzi del tuo browser, che è [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _,_ dove [**ultimatemultisite.com**](http://ultimatemultisite.com) è il nome di dominio.

## Subdomain

Un sottodominio è un tipo di gerarchia di siti web sotto il dominio principale, ma invece di usare cartelle per organizzare il contenuto di un sito web, in pratica ottiene un sito web proprio. È presentato come [**https://site1.domain.com/**](https://site1.domain.com/) dove _site1_ è il nome del sottodominio e [_domain.com_](http://domain.com) è il dominio principale.

## Subdirectory

Una sottodirectory è un tipo di gerarchia di siti web sotto un dominio radice che utilizza cartelle per organizzare il contenuto di un sito web. Una sottodirectory è la stessa cosa di una sottocartella e i nomi possono essere usati in modo intercambiabile. È presentata come [**https://domain.com/site1**](https://domain.com/site1) dove _site1_ è il nome della sottodirectory e [_domain.com_](http://domain.com) è il dominio principale.

## Subsite

Un subsite è un sito figlio che crei su una rete Multisite. Può essere un **subdomain** o una **subdirectory** a seconda di come è configurata la tua installazione WordPress Multisite.

## Super Admin

Un WordPress Super Admin è un ruolo utente con piena capacità di gestire tutti i subsites su una rete Multisite. Per gli utenti Multisite, è il **livello più alto di accesso** che puoi fornire alla tua installazione WordPress.

## Plugin

In generale, un plugin è un insieme di codice che aggiunge funzionalità extra al tuo sito WordPress. Può essere semplice come cambiare il logo di login o complesso come aggiungere funzionalità di e-commerce. _Woocommerce e Contact Form_ sono esempi di plugin.

Su un WordPress Multisite, i plugin possono essere installati solo dal cruscotto di amministrazione della rete da Super Admin. Gli amministratori di subsite possono solo attivare e disattivare i plugin all'interno del loro subsite.

## Themes

Un tema WordPress è un gruppo di file (_grafica, fogli di stile e codice_) che determina l'aspetto complessivo del sito. Fornisce tutti gli stili front-end come la formattazione dei caratteri, il layout delle pagine, i colori, ecc.

Proprio come i plugin, i temi in WordPress Multisite possono essere installati solo da Super Admin e possono essere attivati a livello di subsite dagli amministratori di subsite.

## Site Template

**Site Template** è un sito boilerplate che può essere usato come base quando si creano nuovi siti nella tua rete.

Ciò significa che puoi creare un sito di base, attivare diversi plugin, impostare un tema attivo e personalizzarlo in qualsiasi modo tu voglia. Poi, quando il tuo cliente crea un nuovo account, invece di ottenere un sito WordPress predefinito senza contenuti significativi al suo interno, otterrà una copia del tuo sito di base con tutte le personalizzazioni e i contenuti già presenti.

## Domain Mapping

**Domain mapping** con WordPress è un modo per reindirizzare gli utenti all'host corretto, tramite l'indirizzo di un sito web. In un WordPress Multisite, i subsites sono creati usando una sottodirectory o un sottodominio. Il domain mapping consente agli utenti di subsite di usare un dominio di primo livello come [**joesbikeshop.com**](http://joesbikeshop.com) per rendere l'indirizzo del loro sito più professionale.

## SSL

SSL sta per **Secure Sockets Layer**. È un certificato digitale che autentica l'identità di un sito web e consente una connessione cifrata. Oggi viene usato come tecnologia standard per mantenere sicura una connessione internet e proteggere qualsiasi dato sensibile che viene inviato tra due sistemi, impedendo ai criminali di leggere e modificare qualsiasi informazione trasferita, inclusi potenziali dettagli personali. I browser moderni richiedono SSL, il che lo rende essenziale quando si crea e si gestisce un sito web.

## Media

I media sono immagini, audio, video e altri file che compongono un sito web.

I siti della rete condividono un unico database in un WordPress Multisite, mantenendo percorsi separati sul filesystem per i file media.

La posizione standard di WordPress (wp-content/uploads) rimane; tuttavia, il suo percorso è modificato per riflettere l'ID unico del sito della rete. Di conseguenza, i file media per un sito della rete appaiono come wp-contents/uploads/site/[id].

## Permalinks

I permalinks sono gli URL permanenti dei tuoi singoli post o pagine del blog all'interno del tuo sito. I permalinks sono anche chiamati **pretty links**. Per impostazione predefinita, gli URL di WordPress usano il formato della stringa di query che sembra qualcosa del genere:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite

Ultimate Multisite è un plugin WordPress, creato per installazioni WordPress Multisite, che trasforma la tua installazione WordPress in una rete premium di siti – come [WordPress.com](https://WordPress.com) – consentendo ai clienti di creare siti tramite tariffe mensili, trimestrali o annuali (puoi anche creare piani gratuiti).

## Checkout Form

Checkout Form è un modulo di ordine singolo o a più fasi che coinvolge la creazione di subsite, membership e account utente tramite la registrazione Ultimate Multisite. Consiste in diversi campi e moduli di pagamento che l'utente deve inviare durante il processo di registrazione.

## Webhook

Un webhook (chiamato anche web callback o HTTP push API) è un modo per un'app di fornire ad altre applicazioni informazioni in tempo reale. Un webhook consegna i dati ad altre applicazioni al momento in cui accadono, il che significa che ottieni i dati immediatamente.

**Ultimate Multisite webhooks** aprono infinite possibilità, consentendo agli amministratori di rete di fare tutte le tipologie di integrazioni folli ma utili, soprattutto se usati in combinazione con servizi come _Zapier e IFTTT_.

## Events

Un Evento è un'azione che si verifica come risultato di un'azione dell'utente o di un'altra fonte, come un clic del mouse. Ultimate Multisite tiene traccia di tutti gli eventi e i log che si verificano all'interno dell'intera rete. Traccia diverse attività che avvengono nel tuo multisite, come i cambiamenti di piano.
