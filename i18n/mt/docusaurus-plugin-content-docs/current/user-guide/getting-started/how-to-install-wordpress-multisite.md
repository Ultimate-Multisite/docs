---
title: Come installa WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Come tf installa WordPress Multisite? {#how-do-i-install-wordpress-multisite}

WordPress Multisite itta ti permetti li tieni una rete di siti su un'unica installazione. Questa è una funzione integrata, ma non è attiva di default.

:::tip
Ultimate Multisite include un **[built-in Multisite Setup Wizard](./multisite-setup-wizard)** che automatizza tutto questo processo. Se hai Ultimate Multisite installat, raccomandiamo di usare il wizard invece di seguire i passaggi manuali qui sotto.
:::

Po chè Ultimate Multisite è un plugin solo per rete, in questa guida impareremo come installare e configurare manualmente WordPress Multisite. Questo testo si basa su [Come Installare e Configurare la Rete WordPress Multisite](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), da WPBeginner.

**Cunnu attenzioni prima de creare la tua rete multisite:**

  * Ottieni un hosting di WordPress buono! I siti su una rete condividono le stesse risorse del server.

  * Se hai solo un paio di siti con traffiku basso, l'hosting condiviso probabilmente ti servirà.

  * La maggior parte dei **Managed WordPress hosting providers** offrono Multisite già pronto all'uso (installano WordPress con Multisite già attivatu e configuratu per te). Questo è il caso de WP Engine, Closte, Cloudways, ecc. Se non sei sicuro se è così per il tuo provider di hosting, contatta il loro supporto prima di continuare con questa guida.

  * È anche buono familiarizzi con l'installazione di WordPress e la modifica dei file tramite FTP.

_**IMPORTANTE**_ **:** Se stai configurando una rete multisite su un sito WordPress esistenti non dimenticare di:

  * Creare un backup completo del tuo sito WordPress

  * Disattivare tutti i plugin sul tuo sito andando alla pagina dei plugin e selezionando _Deactivate_ dai blocchi d'azione in massa e poi cliccando su _Apply_

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Per attivare Multisite, prima di tutto devi collegarti al tuo sito tramite un FTP client o il file manager cPanel e aprire il file `wp-config.php` per la modifica.

Prima della riga _*That’s all, stop editing! Happy blogging.*_ aggiungi questo snippet di codice:

```php
define('WP_ALLOW_MULTISITE', true);
```

Salva e carica nuovamente il tuo file `wp-config.php` sul server.

Con la funzione Multisite abilitata sul tuo sito, ora è il momento di configurare la tua rete.

Vai a **Tools » Network Setup** (Strumenti » Configurazione Rete)

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Ora devi dire a WordPress che tipo di struttura di dominio userai per i siti nella tua rete: sottodomini o sottodirectory.

Se scegli i sottodomini, devi cambiare le impostazioni DNS per la mappatura del dominio e assicurarti di configurare i _**wildcard subdomains**_ (sottodomini wildcard) per la tua rete Multisite.

Tornando alla Configurazione Rete, dai un titolo alla tua rete e assicurati che l'indirizzo email nell'email dell'amministratore della Rete sia corretto. Clicca su _Install_ (Installa) per continuare.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

Aggiungi questo codice, fornito da WordPress, al tuo _**wp-config.php**_:

```php
define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);
```

E questo codice, anch'esso fornito da WordPress, al file _**.htaccess**_:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]

# aggiungi una barra finale a /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]
```

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Uża client FTP jew o file manager (sepp il stai ustu qualcosa come cPanel, per esempio) per copiare e incollare il codice fi stilini.

Infine, ri-login sul tuo sito WordPress per accedere alla tua rete multisite.

**È importante testare e assicurarti di poterti creare un subsite sulla tua installazione WordPress Multisite prima di installare Ultimate Multisite.**

Per creare un subsite:

  1. Apri i tuoi siti wp-admin

  2. Naviga a My Sites > Sites (/wp-admin/network/sites.php)

  3. Clicca Add New in cima

  4. Compila tutti i campi:

  * Site Address — Non usare mai “www”

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — Titolo del sito, può essere cambiato in seguito

  * Admin Email — Imposta come utente admin iniziale per il subsite

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

Dopo aver compilato i campi, clicca sul pulsante "Add site". Una volta creato il nuovo subsite, vai ad accedervi per assicurarti che il subsite funzioni correttamente.

## Problemi Comuni: {#add-a-trailing-slash-to-wp-admin}

### 1. Posso creare nuovi siti ma non sono accessibili. {#common-problems}

Se hai scelto i subdomain, devi anche configurare i wildcard subdomain per la tua rete multisite.

Per farlo, vai al dashboard del pannello di controllo del hosting del tuo sito (ad esempio cPanel/Plesk/Direct Admin a seconda del tuo fornitore di hosting).

Trova un'opzione per "Domains" o "Subdomains". In alcuni pannelli di controllo è etichettata come "Domain administration".

Feld tal-domain (subdomain) tadgħarf b'asterisk (*). Misprim, għandu jgħinليك isgħa li tagħmel għal għal wara li għandek tiscelta flimkien ma jidħol qabel.

Il-root tal-dokument għall-domain tadgħarf awtomatikament. Iċ클ik fuq il-botton _Create_ jew _Save_ biex tiddaddilha il-subdomain wildcard tiegħek. Il-entry għandu jintistru come “*.[mydomain.com](http://mydomain.com)”.
