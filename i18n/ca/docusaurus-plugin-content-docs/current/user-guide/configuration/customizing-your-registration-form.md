---
title: Personalització del teu formulari de registre
sidebar_position: 17
_i18n_hash: b0e3b7cddd099b4260e5cf01fead8685
---
# Personalització del teu formulari de registre

Per fer que la teva xarxa sigui única de totes les altres SaaS construïdes sobre la plataforma WordPress, Ultimate Multisite et permet personalitzar les teves pàgines de registre i de connexió amb la nostra funcionalitat de **Checkout Forms**.

Tot i que són una manera fàcil i flexible d'experimentar amb diferents aproximacions quan es tenta convertir nous clients, es fa servir principalment per crear formularis de registre personalitzats. Aquest article et mostra com pots fer-ho.

## Pàgines de connexió i registre:

Després de l'instal·lació d'Ultimate Multisite, aquest últim crea automàticament pàgines de connexió i registre personalitzades a la teva pàgina principal. Pots canviar aquestes pàgines predeterminades quan vulguis, accedint a la pàgina **Ultimate Multisite > Settings > Login & Registration**.

![Login and Registration settings page](/img/config/settings-general.png)

Aquí tens una visió completa de la pàgina de configuració de connexió i registre:

![Login and Registration settings full page](/img/config/settings-login-registration-full.png)

Observarem cada una de les opcions que pots personalitzar a la pàgina **Login & Registration**:

*   **Enable registration:** Aquesta opció habilitarà o deshabilitarà el registre a la teva xarxa. Si es desactiva, els teus clients no podran registrar-se ni subscriure's als teus productes.

*   **Enable email verification:** Si aquesta opció està activada, els clients que es subscriuen a un pla gratuït o a un pla pagat amb període d'essai rebran un correu electrònic de verificació i haurà de fer clic a l'enllaç de verificació perquè es crei el seu lloc web.

*   **Default registration page:** Aquesta és la pàgina predeterminada per al registre. Aquesta pàgina ha de ser publicada a la teva web i contenir un formulari de registre (també conegut com a formulari de checkout), on els teus clients es subscriuraran als teus productes. Pots crear tant pàgines de registre i formularis de checkout com desitges, només recorda posar el shortcode del formulari de checkout a la pàgina de registre, sinó que no apareixerà.

*   **Use custom login page:** Aquesta opció et permet utilitzar una pàgina de connexió personalitzada, diferent de la pàgina predeterminada `wp-login.php`. Si aquesta opció està activada, pots seleccionar quina pàgina s'utilitzarà per la connexió a l'opció **Default login page** (just en dessous).

*   **Obfuscate the original login url (wp-login.php)** : Si vols ocultar l'URL original de connexió, pots activar aquesta opció. És útil per prevenir atacs de força bruta. Si aquesta opció està habilitada, Ultimate Multisite mostrarà un error 404 quan un usuari intenta accedir a l'enllaç original `wp-login.php`.

*   **Force synchronous site publication:** Després que un client es subscriui a un producte en una xarxa, el nou lloc web pendents ha de convertir-se en un lloc web de xarxa real. El procés de publicació es realitza mitjançant la Job Queue, de manera asíncrona. Activa aquesta opció per forçar que la publicació es faci en la mateixa sol·licitud que el registre.

Ara, veigem altres opcions que encara són rellevants per al procés de connexió i registre. Estan just enrere de **Other options** a la mateixa pàgina de Login & registration:

*   **Default role:** És el rol que tindrà el teu client al seu lloc web després del procés de registre.

*   **Enable Jumper:** Habilita el atllat Jumper a l'àrea d'administració. Jumper permet als administradors saltar ràpidament a les pantalles d'Ultimate Multisite, objectes de xarxa i altres destins suportats sense navegar per menys. Desactiva-ho si prefereixes ocultar aquesta eina de navegació ràpida de l'interfície d'administració.

*   **Add users to the main site as well:** Habilitar aquesta opció també afegeurà l'usuari a la pàgina principal de la teva xarxa després del procés de registre. Si actives aquesta opció, també apareixerà una opció per configurar el **default role** d'aquests usuaris a la teva web, just enrere.

*   **Enable multiple accounts:** Permet als usuaris tenir comptes en diferents llocs de la teva xarxa amb el mateix adreça electrònica. Si aquesta opció està desactivada, els teus clients no podran crear un compte en altres llocs web que funcionin a la teva xarxa amb el mateix adreça electrònica.

I això són totes les opcions relacionades amb la connexió i el registre que pots personalitzar! No oblidis d'arribar les teves configuracions quan acabis de modificar-les.

## Utilitzar múltiples formularis de registre:

Ultimate Multisite 2.0 ofereix un editor de formularis de checkout que et permet crear tant formularis com desitges, amb diferents camps, productes disponibles, etc.

Tant la pàgina de connexió com la de registre estan incrustades amb shortcodes: **[wu_login_form]** a la pàgina de connexió i **[wu_checkout]** per a la pàgina de registre. Pots personalitzar encara més la pàgina de registre creant o construint formularis de checkout.

Per accedir a aquesta funcionalitat, veu al menú **Checkout Forms**, a la barra lateral esquerra.

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

En aquesta pàgina, pots veure tots els formularis de checkout que tens.

Si vols crear-ne un nou, només has de fer clic a **Add Checkout Form** en la part superior de la pàgina.

Pots seleccionar una d'aquestes tres opcions com a punt de partida: single step, multi-step o blank. Després, fes clic a **Go to the Editor**.

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

Alternativament, pots editar o duplicar els formularis que ja tens fent clic a les opcions que es troben per sota del seu nom. Allà, també trobaràs les opcions per copiar el shortcode del formulari o per eliminar-lo.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

Si seleccioneu single step o multi-step, el formulari de checkout ja vindrà pre-rellenat amb els passos bàsics perquè funcione. Després, si vols, pots-hi afegir passos addicionals.

### Edició d'un formulari de checkout:

Com vam mencionar abans, pots crear formularis de checkout per a diferents propòsits. En aquest exemple, treballarem amb un formulari de registre.

Després de navegar a l'editor del formulari de checkout, només has de donar-li un nom (que només es servirà de referència interna) i un slug (utilitzat per crear shortcodes, per exemple).

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Els formularis es componen de passos i camps. Pots afegir un nou pas fent clic a **Add New Checkout Step**.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

A la primera pestanya de la finestra modal, ompliu el contingut del pas del vostre formulari. Donèl-li un ID, un nom i una descripció. Aquests elements es fan servir principalment a nivell intern.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step.png)

A més, configura la visibilitat del pas. Pots triar entre **Always show** , **Only show for logged in users** o **Only show for guests**.

![Checkout step visibility options](/img/config/checkout-form-step.png)

Finalment, configura l'estil del pas. Aquests són camps opcionals.

![Checkout step style configuration](/img/config/checkout-form-step.png)

Ara, és hora d'afegir camps al nostre primer pas. Només has de fer clic a **Add New Field** i seleccionar el tipus de secció que vols.

![Add New Field button](/img/config/checkout-form-editor.png)![Field type selection dropdown](/img/config/checkout-form-step.png)

Cada camp té diferents paràmetres que omplir. Per a aquesta primera entrada, seleccionarem el camp **Username**.

![Username field configuration](/img/config/checkout-form-step.png)![Username field parameters](/img/config/checkout-form-step.png)![Username field additional settings](/img/config/checkout-form-step.png)

Pots afegir tant passos com camps com necessitis. Per mostrar els teus productes perquè els teus clients es trien, utilitza el camp Pricing Table. Si vols deixar que els teus clients es moguin un vostre template, afegeix el camp Template Selection. I així va continuant.

_**Nota:** Si crees un producte després de crear el teu formulari de checkout, hauràs de{\s}afegir el producte a la secció Pricing table. Si no el afegeu, el producte no apareixerà als teus clients a la pàgina de registre._

_**Nota 2:** username, email, password, site title, site URL, order summary, payment i el botó submit són camps obligatoris per crear un formulari de checkout._

Mentre treballes en el teu formulari de checkout, pots utilitzar sempre el botó Preview per veure com veurà el formulari els teus clients. També pots alternar entre veure-ho com un usuari existent o com un visitant.

![Preview button on the checkout form editor](/img/config/checkout-form-editor.png)![Checkout form preview as visitor or existing user](/img/config/checkout-form-editor.png)

Finalment, a **Advanced Options** pots configurar el missatge per a la pàgina de **Thank You**, afegir snippets per rastrejar conversió, afegir CSS personalitzat al teu formulari de checkout o restringir-lo a determinats països.

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

També pots habilitar o deshabilitar manualment el teu formulari de checkout fent clic a aquesta opció a la columna de la dreta, o eliminar el formulari de manera permanent.

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

No oblidis d'arribar el teu formulari de checkout!

![Save Checkout Form button](/img/config/checkout-form-save.png)

Per obtenir el shortcode del teu formulari, fes clic a **Generate Shortcode** i copia el resultat que es mostra a la finestra modal.

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**Nota:** Hauràs de{\s}afegir aquest shortcode a la teva pàgina de registre per que aquest formulari de checkout s'afegeixi a ella._

## Preselecció de productes i templates mitjançant paràmetres d'URL:

Si vols crear taules de preus personalitzades per als teus productes i preseleccionar al formulari de checkout el producte o el template que el teu client tria de la teva pàgina de taules de preus o templates, pots utilitzar paràmetres d'URL per això.

### Per plans:

Veu a **Ultimate Multisite > Products > Select a plan**. Hauries de veure el botó **Click to copy Shareable Link** en la part superior de la pàgina. Aquest és l'enllaç que pots utilitzar per preseleccionar aquest pla específic al teu formulari de checkout.

![Product page with shareable link button](/img/config/products-list.png)

Nota que aquest enllaç compartible només és vàlid per **Plans**. No pots utilitzar enllaços compartibles per paquets o serveis.

### Per templates:

Si vols preseleccionar templates de lloc web al teu formulari de checkout, pots utilitzar el paràmetre: **?template_id=X** a l'URL de la teva pàgina de registre. L'"X" ha de ser substituït pel **número d'ID del template del lloc web**. Per obtenir aquest número, veu a **Ultimate Multisite > Sites**.

Fes clic a **Manage** just enrere del template del lloc web que vols utilitzar. Veuràs el número d'ID del SITE. Només utilitza aquest número per a aquest template del lloc web específic per que es preseleccioneixi al teu formulari de checkout. En el nostre cas, el paràmetre d'URL seria **?template_id=2**.

![Sites list showing site template ID](/img/config/site-templates-list.png)

Diguem que el lloc web de la nostra xarxa és [**www.mynetwork.com**](http://www.mynetwork.com) i la nostra pàgina de registre amb el formulari de checkout es troba a la pàgina **/register**. L'URL completa amb aquest template del lloc web preseleccióarà tindrà aspecte de [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

I si vols, pots preseleccionar tant productes com templates al teu formulari de checkout. Tot el que has de fer és copiar l'enllaç compartible del pla i enganxar el paràmetre del template al final. Aspectarà com [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
