---
title: Registrar punt d'acció API
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# L'endpoint API de registre d'Ultimate Multisite

En aquest tutorial, aprendreu com utilitzar l'endpoint API `/register` d'Ultimate Multisite per crear tot el procés d'onboarding (incorporació) d'un nou client a la vostra xarxa i com fer-ho amb Zapier.

L'endpoint utilitza el mètode POST i s'hi accedeix a través de l'URL _**https://yoursite.com/wp-json/wu/v2/register**_. Amb aquesta crida, es realitzaran 4 processos dins de la vostra xarxa:

*   Es crearà un nou usuar de WordPress o es identificarà per l'ID de l'usuari.
*   Es crearà un nou Client (Customer) a Ultimate Multisite o es identificarà per l'ID del client.
*   Es crearà un nou lloc web (site) a la xarxa de WordPress.
*   Finalment, es crearà una nova Membresia (Membership) a Ultimate Multisite.

Per a aquest procés, necessitareu les vostres credencials API. Per obtenir-les, aneu al panell d'administració de la vostra xarxa, navegau a **Ultimate Multisite > Settings** > **API & Webhooks,** i busqueu la secció de Configuració API (API Settings).

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

Aquí teniu una vista completa de la pàgina de configuració API:

![API settings full page](/img/config/settings-api-full.png)

Seleccioneu **Enable API** i obteneu les vostres credencials API.

Ara, explorarem l'endpoint i després crearem una acció de registre a Zapier.

## Paràmetres del cos de l'endpoint

Farem una revisió de la informació mínima que hem de enviar a l'endpoint. A la fi d'aquest article, trobareu la crida completa.

### Customer

Aquesta és la informació necessària per al procés de creació de l'Usuari i del Client (Customer) d'Ultimate Multisite:

"customer_id" : integer

És possible enviar l'ID del client creat a la vostra xarxa. Si no es proporciona, es utilitzarà la informació de més avall per crear un nou client i un nou usuar de WordPress. L'ID de l'usuari també es pot enviar de la mateixa manera que l'ID del client.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership**

L'única informació que necessitem dins d'aquest objecte és l'Estat de la Membresia (Membership Status).

"membership" { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Products**

Els productes es proporcionen en un array amb 1 o més IDs de producte de la vostra xarxa. Ateneu, aquest endpoint no crea productes. Consulteu la documentació d'Ultimate Multisite per entendre millor l'endpoint de creació de productes.

**"products" : [1,2],**

### Payment

Com amb Membership, només necessitem l'estat.

**"payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site

I per tancar el cos necessitem l'URL i el Títol del lloc web, ambdós dins de l'objecte Site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

La resposta de l'endpoint de registre serà un array amb la informació de la membresia acabada de crear.

## Creació d'una acció a Zapier

Amb la introducció d'aquest nou i més robust endpoint de creació de comptes, també accedeu a una nova acció a Zapier.

Sabeu com utilitzar i gaudir de tot el que ofereix la nova versió de Zapier? Apreneu més aquí. (link?)

### Creació d'una acció

Per il·lustrar millor com utilitzar l'endpoint de registre amb Zapier, creem una integració amb Google Forms. Cada vegada que es pengui aquest formulari i la informació es guarda a la hoja de respostes del formulari, es crearà una nova membresia a la xarxa d'Ultimate Multisite.

A Google Forms, creeu un formulari amb els camps mínims necessaris per crear una nova membresia a la xarxa.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Ara, a Zapier, creeu un Zap nou i connecteu el formulari de Google creat a la hoja de càlcul on es guarden les dades.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

!Tot fet! El formulari de Google Forms està connectat amb Zapier i preparat per ser integrat amb la xarxa. Ara, continuem amb l'Acció que resultarà del Trigger que Google Forms activa cada vegada que s'omplega.

Localitzeu l'aplicació Ultimate Multisite i seleccioneu-la. Per aquest tipus de Zap, seleccioneu l'opció Register.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Després d'aquest primer pas, seleccioneu el compte que es connectarà amb aquest Zap.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Aquesta és la part més sensible de tot el procés. Hem de fer que els camps que han venut de Google Forms es facin corresponents amb els camps mínims necessaris per l'endpoint de registre, com es mostra a la secció anterior d'aquest article.

En aquest exemple, només necessitem configurar l'usuari (username), l'email, la contrasenya (password), el nom i l'URL del lloc web. El reste es deixa predeterminat perquè totes les membresdies creades amb aquest Google Forms siguin segons el mateix patró de producte i estat.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Amb la informació configurada, continueu amb la prova final. A la última pantalla podeu veure tots els camps que s'enviaran a l'endpoint, la seva informació respectiva i els camps que s'enviaran buits.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Proeu el vostre nou Zap i hauria de completar-se amb èxit. Si apareix qualsevol error, reviseu tots els camps i si es estan enviant correctament. Com que hi ha molta informació, algunes coses poden passar desaperceptades.

### Paràmetres complets de l'endpoint

Aquí teniu la crida completa i totes les possibilitats de camps que es poden enviar.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "canceled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
