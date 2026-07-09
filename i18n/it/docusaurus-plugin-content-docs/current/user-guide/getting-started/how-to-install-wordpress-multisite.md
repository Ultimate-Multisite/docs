---
title: Come installare WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Come installo WordPress Multisite? {#how-do-i-install-wordpress-multisite}

WordPress Multisite ti consente di avere una rete di siti su un'unica installazione. Questa è una funzionalità integrata, ma non è attiva per impostazione predefinita.

:::tip
Ultimate Multisite include una **[Procedura guidata di configurazione Multisite integrata](./multisite-setup-wizard)** che automatizza l'intero processo. Se hai Ultimate Multisite installato, consigliamo di usare la procedura guidata invece di seguire i passaggi manuali qui sotto.
:::

Poiché Ultimate Multisite è un plugin solo per rete, in questo tutorial imparerai come installare e configurare WordPress Multisite manualmente. Questo testo si basa su [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), di WPBeginner.

**Cose a cui prestare attenzione prima di creare la tua rete multisito:**

  * Scegli un buon hosting WordPress! I siti web su una rete condividono le stesse risorse del server.

  * Se hai solo un paio di siti con poco traffico, l'hosting condiviso probabilmente farà al caso tuo.

  * La maggior parte dei **provider di hosting WordPress gestito** offre Multisite pronto all'uso (installano WordPress con Multisite già attivato e configurato per te). È il caso di WP Engine, Closte, Cloudways, ecc. Se non sei sicuro che sia così per il tuo provider di hosting, contatta il loro supporto prima di proseguire con questo tutorial.

  * È anche utile avere familiarità con l'installazione di WordPress e la modifica dei file tramite FTP.

_**IMPORTANTE**_ **:** Se stai configurando una rete multisito su un sito web WordPress esistente, non dimenticare di:

  * Creare un backup completo del tuo sito WordPress

  * Disattivare tutti i plugin sul tuo sito andando alla pagina dei plugin e selezionando _Disattiva_ dalle azioni di massa, quindi facendo clic su _Applica_

<!-- Screenshot non disponibile: pagina dei plugin WordPress che mostra l'azione di disattivazione di massa -->

Per abilitare Multisite, prima connettiti al tuo sito usando un client FTP o il file manager di cPanel, e apri il file wp-config.php per modificarlo.

Prima della riga _*That’s all, stop editing! Happy blogging.*_, aggiungi il seguente frammento di codice:

define('WP_ALLOW_MULTISITE', true);

Salva e carica di nuovo il file wp-config.php sul server.

Con la funzionalità multisito abilitata sul tuo sito, ora è il momento di configurare la tua rete.

Vai su **Strumenti » Configurazione rete**

<!-- Screenshot non disponibile: menu Strumenti di WordPress che mostra l'opzione Configurazione rete -->

Ora devi indicare a WordPress quale tipo di struttura di dominio userai per i siti nella tua rete: sottodomini o sottodirectory.

Se scegli i sottodomini, devi modificare le impostazioni DNS per la mappatura del dominio e assicurarti di configurare i _**sottodomini wildcard**_ per la tua rete multisito.

Tornando alla Configurazione rete, assegna un titolo alla tua rete e assicurati che l'indirizzo email nell'email dell'amministratore della rete sia corretto. Fai clic su _Installa_ per continuare.

<!-- Screenshot non disponibile: pagina Configurazione rete di WordPress con i campi titolo della rete ed email amministratore -->

Aggiungi questo codice, fornito da WordPress, al tuo file _**wp-config.php**_ :

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

E questo codice, anch'esso fornito da WordPress, al tuo file _**.htaccess**_:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# aggiungi una barra finale a /wp-admin {#add-a-trailing-slash-to-wp-admin}

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Usa un client FTP o un file manager (se stai usando qualcosa come cPanel, per esempio) per copiare e incollare il codice in questi due file.

Infine, effettua di nuovo il login al tuo sito WordPress per accedere alla tua rete multisito.

**È importante testare e assicurarti di riuscire a creare un sottosito sulla tua installazione WordPress Multisite prima di installare Ultimate Multisite.**

Per creare un sottosito:

  1. Apri wp-admin dei tuoi siti web

  2. Vai a I miei siti > Siti (/wp-admin/network/sites.php)

  3. Fai clic su Aggiungi nuovo in alto

  4. Compila tutti i campi:

  * Indirizzo del sito — Non usare mai “www”

  * Sottodominio: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Sottodirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Titolo del sito — Titolo del sito, può essere modificato in seguito

  * Email amministratore — Impostata come utente amministratore iniziale per il sottosito

![Modulo per aggiungere un nuovo sito in WordPress Multisite](/img/admin/sites-list.png)

Dopo aver compilato i campi, fai clic sul pulsante "Aggiungi sito". Una volta creato il nuovo sottosito, procedi ad accedervi per assicurarti che il sottosito sia funzionante.

## Problemi comuni: {#common-problems}

### 1\. Posso creare nuovi siti ma non sono accessibili. {#1-i-can-create-new-sites-but-they-are-not-accessible}

Se hai scelto i sottodomini, devi anche configurare i sottodomini wildcard per la tua rete multisito.

Per farlo, vai alla Dashboard del pannello di controllo dell'account di hosting del tuo sito web (ad es. cPanel/Plesk/Direct Admin a seconda del tuo provider di hosting).

Trova un'opzione per “Domini” o “Sottodomini”. In alcuni pannelli di controllo è etichettata come “Amministrazione domini”.

Nel campo del sottodominio, inserisci un asterisco (*). Poi dovrebbe chiederti di selezionare un nome di dominio sotto il quale vuoi aggiungere il sottodominio.

La root del documento per il nome di dominio selezionato verrà rilevata automaticamente. Fai clic sul pulsante _Crea_ o _Salva_ per aggiungere il tuo sottodominio wildcard. La voce dovrebbe apparire come “*.[mydomain.com](http://mydomain.com)”
