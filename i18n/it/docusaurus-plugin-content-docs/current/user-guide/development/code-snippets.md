---
title: Frammenti di codice
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Snippet di codice per v2

In pratica, gli snippet di codice per **WordPress** vengono usati per eseguire determinate azioni che altrimenti potrebbero richiedere un plugin più piccolo dedicato. Tali snippet di codice vengono inseriti in uno dei file core di WordPress o del tema (generalmente il file functions.php del tuo tema) oppure possono essere usati come MU plugin.

In questo articolo ti mostreremo tre snippet di codice che possono essere usati con **Ultimate Multisite v2** :

  * [**Modificare la posizione della voce di menu Account**](#changing-the-position-of-the-account-menu-item)

  * [**Come verificare se l'utente rientra in un determinato piano e/o ha un abbonamento attivo**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Risolvere i problemi CORS con le Font-Icons nei domini mappati**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Modificare la posizione della voce di menu Account

Per modificare la posizione della voce di menu Account nel Dashboard del tuo cliente, aggiungi semplicemente il seguente snippet di codice al functions.php del tema attivo del tuo sito principale. Puoi anche inserire lo snippet all'interno di uno dei tuoi mu-plugins o plugin personalizzati.

add_filter('wu_my_account_menu_position', function() { return 10; // Tweak this value to place the menu in the desired position.

## Come verificare se l'utente rientra in un determinato piano e/o ha un abbonamento attivo

Come amministratore di rete, potresti dover creare funzioni personalizzate che eseguiranno azioni di base o renderanno disponibile un servizio/funzionalità a un gruppo selezionato di abbonati o utenti finali, in base allo stato del loro abbonamento e al piano a cui sono abbonati.

Queste funzioni native di Ultimate Multisite ti aiuteranno in questo.

Per verificare se l'utente è membro di un determinato piano, puoi usare la funzione:

wu_has_plan($user_id, $plan_id)

Per verificare se l'abbonamento è attivo, puoi usare la funzione:

wu_is_active_subscriber($user_id)

Di seguito è riportato uno snippet di esempio che verifica se l'utente corrente rientra in un piano specifico (_Plan ID 50_) e se l'abbonamento dell'utente è attivo.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // USER IS MEMBER OF PLAN AND HIS SUBSCRIPTION IS ACTIVE, DO STUFF} else { // USER IS NOT A MEMBER OF PLAN -- OR -- HIS SUBSCRIPTION IS NOT ACTIVE, DO OTHER STUFF} // end if;

Nota che _**wu_has_plan**_ richiede un "Plan ID" per poter funzionare.

Per ottenere l'ID di un piano, puoi andare su **Ultimate Multisite > Products**. L'ID di ciascun prodotto verrà mostrato a destra della tabella.

Nota che gli utenti possono essere abbonati solo a un **Piano** , non a un Pacchetto o Servizio, poiché questi sono solo add-on per un **Piano**.

![Elenco dei prodotti che mostra gli ID dei piani](/img/admin/products-list.png)

## Risolvere i problemi CORS con le Font-Icons nei domini mappati
## Risolvere i problemi CORS con le Font-Icons nei domini mappati

Dopo aver mappato un dominio a un sottosito, potresti scoprire che il sito ha problemi a caricare font personalizzati. Ciò è causato da un blocco cross-origin nelle impostazioni del tuo server.

Poiché i file dei font vengono quasi sempre caricati direttamente dal CSS, il nostro plugin di mappatura dei domini non è in grado di riscrivere gli URL per usare il dominio mappato invece di quello originale, quindi per risolvere il problema dovrai modificare i file di configurazione del tuo server.

Di seguito sono riportati snippet di codice per risolvere il problema per Apache e NGINX. Queste modifiche richiedono conoscenze avanzate dei file di configurazione del server (file .htaccess e file di configurazione NGINX). Se non ti senti a tuo agio nell'apportare queste modifiche da solo, invia questa pagina agli agenti di supporto del tuo provider di hosting quando richiedi assistenza.

### Apache

Nel tuo file .htaccess, aggiungi:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX

Nel file di configurazione del tuo server (la posizione varia da server a server), aggiungi:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
