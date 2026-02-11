---
title: Snippet di codice
sidebar_position: 1
_i18n_hash: 5a7a9a95be84476f87a2c1ca0a4a2be5
---
# Snippet di codice per v2

In pratica, gli snippet di codice per **WordPress** vengono utilizzati per eseguire determinate azioni che altrimenti richiederebbero un plugin più piccolo dedicato. Tali snippet di codice vengono inseriti in uno dei file core di WordPress o del tema (generalmente il file functions.php del tuo tema) o possono essere usati come plugin MU.

In questo articolo ti mostreremo tre snippet di codice che possono essere usati con **Ultimate Multisite v2** :

  * [**Cambiare la posizione dell'elemento di menu Account**](#changing-the-position-of-the-account-menu-item)

  * [**Come verificare se l'utente è sotto un determinato piano e/o ha un abbonamento attivo**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Correggere i problemi CORS con Font-Icons nei domini mappati**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Cambiare la posizione dell'elemento di menu Account

Per cambiare la posizione dell'elemento di menu Account sulla Dashboard del tuo cliente, aggiungi semplicemente il seguente snippet di codice al file functions.php del tema attivo del tuo sito principale. Puoi anche inserire lo snippet all'interno di uno dei tuoi mu-plugins o plugin personalizzati.

add_filter('wu_my_account_menu_position', function() { return 10; // Tweak this value to place the menu in the desired position.

## Come verificare se l'utente è sotto un determinato piano e/o ha un abbonamento attivo

Come amministratore di rete, potresti aver bisogno di creare funzioni personalizzate che eseguano azioni di base o rendano disponibile un servizio/caratteristica a un gruppo selezionato di abbonati o utenti finali, in base allo stato del loro abbonamento e al piano a cui sono iscritti.

Queste funzioni native di Ultimate Multisite ti aiuteranno in questo.

Per verificare se l'utente è membro di un determinato piano, puoi usare la funzione:

wu_has_plan($user_id, $plan_id)

Per verificare se l'abbonamento è attivo, puoi usare la funzione:

wu_is_active_subscriber($user_id)

Di seguito è riportato un esempio di snippet che verifica se l'utente corrente è sotto un piano specifico (_Plan ID 50_) e se l'abbonamento dell'utente è attivo.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // USER IS MEMBER OF PLAN AND HIS SUBSCRIPTION IS ACTIVE, DO STUFF} else { // USER IS NOT A MEMBER OF PLAN -- OR -- HIS SUBSCRIPTION IS NOT ACTIVE, DO OTHER STUFF} // end if;

Nota che _**wu_has_plan**_ richiede un "Plan ID" per funzionare.

Per ottenere l'ID di un piano, puoi andare su **Ultimate Multisite > Products**. L'ID di ogni prodotto sarà mostrato a destra della tabella.

Nota che gli utenti possono essere iscritti solo a un **Plan**, non a un Package o Service, poiché sono solo componenti aggiuntivi per un **Plan**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-LAYTqHqw5w.png)

## Correggere i problemi CORS con Font-Icons nei domini mappati

## Correggere i problemi CORS con Font-Icons nei domini mappati

Dopo aver mappato un dominio a un sub-sito potresti scoprire che il sito ha difficoltà a caricare font personalizzati. Ciò è causato da un blocco cross-origin nelle impostazioni del tuo server.

Poiché i file di font vengono quasi sempre caricati direttamente dal CSS, il nostro plugin di mappatura domini non è in grado di riscrivere gli URL per utilizzare il dominio mappato invece di quello originale, quindi per risolvere il problema dovrai modificare i file di configurazione del tuo server.

Di seguito sono riportati snippet di codice per risolvere il problema su Apache e NGINX. Queste modifiche richiedono conoscenze avanzate dei file di configurazione del server (.htaccess e file di configurazione NGINX). Se non ti senti a tuo agio nel fare queste modifiche da solo, invia questa pagina ai tuoi agenti di supporto del provider di hosting quando richiedi assistenza.

### Apache

Nel tuo file .htaccess, aggiungi:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX

Nel file di configurazione del tuo server (la posizione varia da server a server), aggiungi:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
