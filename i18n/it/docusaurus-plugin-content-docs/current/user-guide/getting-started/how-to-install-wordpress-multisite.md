---
title: Come installare WordPress Multisite
sidebar_position: 2
_i18n_hash: ce5929a52ea69f8a4b769f6eab46445c
---
# Come installare WordPress Multisite?

WordPress Multisite ti consente di avere una rete di siti su un'unica installazione. Questa è una funzionalità integrata, ma non è attiva per impostazione predefinita.

Poiché Ultimate Multisite è un plugin esclusivamente per reti, in questo tutorial imparerai come installare e configurare WordPress Multisite. Questo testo si basa su [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), di WPBeginner.

**Cose da considerare prima di creare la tua rete multisito:**

* Ottieni un buon hosting WordPress! I siti in una rete condividono le stesse risorse del server.
* Se hai solo un paio di siti con traffico basso, l'hosting condiviso probabilmente funzionerà per te.
* La maggior parte dei **Managed WordPress hosting providers** offre Multisite out-of-the-box (installano WordPress con Multisite già attivato e configurato per te). Questo è il caso di WP Engine, Closte, Cloudways, ecc. Se non sei sicuro che sia così per il tuo provider di hosting, contatta il loro supporto prima di procedere con questo tutorial.
* È anche utile essere familiari con l'installazione di WordPress e la modifica dei file tramite FTP.

_**IMPORTANTE**_ **:** Se stai configurando una rete multisito su un sito WordPress esistente, non dimenticare di:

* Creare un backup completo del tuo sito WordPress
* Disattivare tutti i plugin sul tuo sito andando alla pagina dei plugin e selezionando _Deactivate_ dalle azioni di massa e poi cliccando _Apply_

[![](https://downloads.intercomcdn.com/i/o/141065015/09f448a371b8cab63280777c/Multisite+1.png)](https://downloads.intercomcdn.com/i/o/141065015/09f448a371b8cab63280777c/Multisite+1.png)

Per abilitare Multisite, prima connettiti al tuo sito utilizzando un client FTP o il file manager di cPanel, e apri il file wp-config.php per la modifica.

Prima della riga _*That’s all, stop editing! Happy blogging.*_, aggiungi il seguente frammento di codice:

define('WP_ALLOW_MULTISITE', true);

Salva e carica nuovamente il file wp-config.php sul server.

Con la funzionalità multisito abilitata sul tuo sito, ora è il momento di configurare la tua rete.

Vai su **Tools » Network Setup**

[![](https://downloads.intercomcdn.com/i/o/141065542/5bb9b19a52ece96c52b659d8/Multisite+3.png)](https://downloads.intercomcdn.com/i/o/141065542/5bb9b19a52ece96c52b659d8/Multisite+3.png)

Ora devi indicare a WordPress quale struttura di dominio utilizzerai per i siti nella tua rete: sottodomini o sottodirectory.

Se scegli i sottodomini, devi modificare le impostazioni DNS per la mappatura dei domini e assicurarti di configurare _**wildcard subdomains**_ per la tua rete multisito.

Torna alla configurazione della rete, assegna un titolo alla tua rete e assicurati che l'indirizzo email nell'email dell'amministratore di rete sia corretto. Fai clic su _Install_ per continuare.

[![](https://downloads.intercomcdn.com/i/o/141066037/fd8a063b69988be1c372dac6/Multisite+4.png)](https://downloads.intercomcdn.com/i/o/141066037/fd8a063b69988be1c372dac6/Multisite+4.png)

Aggiungi questo codice, fornito da WordPress, al tuo _**wp-config.php**_ :

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

E questo codice, anch'esso fornito da WordPress, al tuo file _**.htaccess**_ :

```
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin
RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]
RewriteRule ^(wp-(content|admin|includes)._) $1 [L]
RewriteRule ^(._.php)$ $1 [L]
RewriteRule . index.php [L]
```

Utilizza un client FTP o un file manager (se stai usando qualcosa come cPanel, ad esempio) per copiare e incollare il codice in questi due file.

Infine, accedi nuovamente al tuo sito WordPress per accedere alla tua rete multisito.

**È importante testare e assicurarsi di poter creare un sottosito sulla tua installazione WordPress Multisite prima di installare Ultimate Multisite.**

Per creare un sottosito:

1. Apri il wp-admin del tuo sito
2. Vai su My Sites > Sites (/wp-admin/network/sites.php)
3. Fai clic su Add New in alto
4. Compila tutti i campi:

* Indirizzo del sito — Non usare mai “www”
* Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)
* Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)
* Titolo del sito — Titolo del sito, può essere modificato in seguito
* Email dell'amministratore — Imposta come utente amministratore iniziale per il sottosito

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-hrA3XtntYQ.png)

Dopo aver compilato i campi, fai clic sul pulsante "Add site". Una volta creato il nuovo sottosito, accedilo per assicurarti che sia funzionante.

## Problemi comuni:

### 1\. Posso creare nuovi siti ma non sono accessibili.

Se hai scelto i sottodomini, devi anche configurare wildcard subdomains per la tua rete multisito.

Per fare ciò, vai alla dashboard del pannello di controllo dell'account di hosting del tuo sito (ad es. cPanel/Plesk/Direct Admin a seconda del tuo provider di hosting).

Trova un'opzione per “Domains” o “Subdomains”. In alcuni pannelli di controllo è etichettata come “Domain administration”.

Nel campo del sottodominio, inserisci un asterisco (*). Quindi ti verrà chiesto di selezionare un nome di dominio sotto cui vuoi aggiungere il sottodominio.

La root del documento per il nome di dominio selezionato verrà rilevata automaticamente. Fai clic sul pulsante _Create_ o _Save_ per aggiungere il tuo wildcard subdomain. L'entry dovrebbe essere “*.[mydomain.com](http://mydomain.com)”
