---
title: Personalització del vostre formulari de registre
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Personalització del vostre formulari de registre

Per fer que la vostra xarxa tingui un aspecte únic respecte de tots els altres SaaS creats sobre la plataforma WordPress, Ultimate Multisite us permet personalitzar les vostres pàgines de registre i d’inici de sessió amb la nostra funcionalitat **Formularis de checkout**.

Tot i que són una manera fàcil i flexible d’experimentar amb diferents enfocaments quan intenteu convertir nous clients, s’utilitzen principalment per crear formularis de registre personalitzats. Aquest article té com a objectiu mostrar-vos com ho podeu fer.

## Pàgines d’inici de sessió i de registre:

En instal·lar Ultimate Multisite, crea automàticament pàgines d’inici de sessió i de registre personalitzades al vostre lloc principal. Podeu canviar aquestes pàgines predeterminades en qualsevol moment anant a la pàgina **Ultimate Multisite > Settings > Login & Registration**.

![Pàgina de configuració d’inici de sessió i registre](/img/config/settings-general.png)

Aquí teniu una vista completa de la pàgina de configuració d’inici de sessió i registre:

![Pàgina completa de configuració d’inici de sessió i registre](/img/config/settings-login-registration-full.png)

Fem una ullada a cadascuna de les opcions que podeu personalitzar a la pàgina **Login & Registration**:

  * **Activa el registre:** Aquesta opció activarà o desactivarà el registre a la vostra xarxa. Si està desactivada, els vostres clients no podran registrar-se ni subscriure’s als vostres productes.

  * **Activa la verificació per correu electrònic:** Si aquesta opció està activada, els clients que se subscriguin a un pla gratuït o a un pla de pagament amb període de prova rebran un correu electrònic de verificació i hauran de fer clic a l’enllaç de verificació perquè es creïn els seus llocs web.

  * **Pàgina de registre predeterminada:** Aquesta és la pàgina predeterminada per al registre. Aquesta pàgina ha d’estar publicada al vostre lloc web i tenir un formulari de registre (també conegut com a formulari de checkout), on els vostres clients se subscriuran als vostres productes. Podeu crear tantes pàgines de registre i formularis de checkout com vulgueu; recordeu només posar el shortcode del formulari de checkout a la pàgina de registre, si no, no apareixerà.

  * **Utilitza una pàgina d’inici de sessió personalitzada:** Aquesta opció us permet utilitzar una pàgina d’inici de sessió personalitzada, diferent de la pàgina predeterminada wp-login.php. Si aquesta opció està activada, podeu seleccionar quina pàgina s’utilitzarà per a l’inici de sessió a l’opció **Pàgina d’inici de sessió predeterminada** (just a sota).

  * **Ofusca l’URL original d’inici de sessió (wp-login.php)** : Si voleu amagar l’URL original d’inici de sessió, podeu activar aquesta opció. Això és útil per evitar atacs de força bruta. Si aquesta opció està activada, Ultimate Multisite mostrarà un error 404 quan un usuari intenti accedir a l’enllaç original wp-login.php

  * **Força la publicació síncrona del lloc:** Després que un client se subscrigui a un producte en una xarxa, el nou lloc pendent s’ha de convertir en un lloc real de la xarxa. El procés de publicació es fa mitjançant Job Queue, de manera asíncrona. Activeu aquesta opció per forçar que la publicació es faci en la mateixa sol·licitud que el registre.

Ara, vegem altres opcions que encara són rellevants per al procés d’inici de sessió i registre. Són just a sota de **Altres opcions** a la mateixa pàgina de Login & registration:

  * **Rol predeterminat:** Aquest és el rol que tindran els vostres clients al seu lloc web després del procés de registre.

  * **Activa Jumper:** Activa la drecera Jumper a l’àrea d’administració. Jumper permet als administradors saltar ràpidament a pantalles d’Ultimate Multisite, objectes de xarxa i altres destinacions compatibles sense haver de navegar per tots els menús. Desactiveu-lo si preferiu amagar aquesta eina de navegació ràpida de la interfície d’administració.

  * **Afegeix també els usuaris al lloc principal:** Activar aquesta opció també afegirà l’usuari al lloc principal de la vostra xarxa després del procés de registre. Si activeu aquesta opció, també apareixerà just a sota una opció per establir el **rol predeterminat** d’aquests usuaris al vostre lloc web.

  * **Activa diversos comptes:** Permet als usuaris tenir comptes en diferents llocs de la vostra xarxa amb la mateixa adreça de correu electrònic. Si aquesta opció està desactivada, els vostres clients no podran crear un compte en altres llocs web que s’executin a la vostra xarxa amb la mateixa adreça de correu electrònic.

I aquestes són totes les opcions relacionades amb l’inici de sessió i el registre que podeu personalitzar! No oblideu desar la configuració després d’acabar d’editar-la.

## Ús de diversos formularis de registre:

Ultimate Multisite 2.0 ofereix un editor de formularis de checkout que us permet crear tants formularis com vulgueu, amb diferents camps, productes en oferta, etc.

Tant les pàgines d’inici de sessió com les de registre s’insereixen amb shortcodes: **[wu_login_form]** a la pàgina d’inici de sessió i**[wu_checkout]** per a la pàgina de registre. Podeu personalitzar encara més la pàgina de registre construint o creant formularis de checkout.

Per accedir a aquesta funcionalitat, aneu al menú **Checkout Forms**, a la barra lateral esquerra.

![Menú Checkout Forms a la barra lateral](/img/config/checkout-forms-list.png)

En aquesta pàgina, podeu veure tots els formularis de checkout que teniu.

Si en voleu crear un de nou, només cal que feu clic a **Afegeix formulari de checkout** a la part superior de la pàgina.

Podeu seleccionar una d’aquestes tres opcions com a punt de partida: un sol pas, diversos passos o en blanc. Després, feu clic a **Ves a l’editor**.

![Afegir formulari de checkout amb opcions d’un sol pas, diversos passos o en blanc](/img/config/checkout-forms-list.png)

Alternativament, podeu editar o duplicar els formularis que ja teniu fent clic a les opcions sota el seu nom. Allà també trobareu les opcions per copiar el shortcode del formulari o per suprimir el formulari.

![Accions en passar el cursor pel formulari de checkout amb editar, duplicar i suprimir](/img/config/checkout-form-hover-actions.png)

Si seleccioneu un sol pas o diversos passos, el formulari de checkout ja estarà preomplert amb els passos bàsics perquè funcioni. Després, si voleu, podeu afegir-hi passos addicionals.

### Edició d’un formulari de checkout:

Com hem esmentat abans, podeu crear formularis de checkout per a diferents finalitats. En aquest exemple treballarem en un formulari de registre.

Després de navegar fins a l’editor de formularis de checkout, doneu un nom al vostre formulari (que s’utilitzarà només com a referència interna) i un slug (utilitzat per crear shortcodes, per exemple).

![Editor del formulari de checkout amb camps de nom i slug](/img/config/checkout-form-name-slug.png)

Els formularis estan formats per passos i camps. Pots afegir un pas nou fent clic a **Afegeix un nou pas de checkout**.

![Botó Afegeix un nou pas de checkout](/img/config/checkout-form-add-step.png)

A la primera pestanya de la finestra modal, omple el contingut del pas del teu formulari. Dona-li un ID, un nom i una descripció. Aquests elements s’utilitzen principalment internament.

![Pestanya de contingut del pas de checkout amb ID, nom i descripció](/img/config/checkout-form-step-content.png)

A continuació, defineix la visibilitat del pas. Pots triar entre **Mostra sempre** , **Mostra només per als usuaris amb sessió iniciada** o **Mostra només per als convidats**.

![Opcions de visibilitat del pas de checkout](/img/config/checkout-form-step-visibility.png)

Finalment, configura l’estil del pas. Aquests camps són opcionals.

![Configuració de l’estil del pas de checkout](/img/config/checkout-form-step-style.png)

Ara és hora d’afegir camps al nostre primer pas. Només cal que facis clic a **Afegeix un camp nou** i seleccionis el tipus de secció que vols.

![Botó Afegeix un camp nou](/img/config/checkout-form-add-field-button.png)![Menú desplegable de selecció del tipus de camp](/img/config/checkout-form-field-type-dropdown.png)

Cada camp té diferents paràmetres que s’han d’omplir. Per a aquesta primera entrada, seleccionarem el camp **Nom d’usuari**.

![Configuració del camp Nom d’usuari](/img/config/checkout-form-username-content.png)![Paràmetres del camp Nom d’usuari](/img/config/checkout-form-username-visibility.png)![Configuració addicional del camp Nom d’usuari](/img/config/checkout-form-username-style.png)

Pots afegir tants passos i camps com necessitis. Per mostrar els teus productes perquè els teus clients en triïn un, utilitza el camp Taula de preus. Si vols permetre que els teus clients triïn una plantilla, afegeix el camp Selecció de plantilla. I així successivament.

![Editor del formulari de checkout amb el camp de selecció de plantilla](/img/config/checkout-form-with-template-field.png)

_**Nota:** Si crees un producte després de crear el teu formulari de checkout, hauràs d’afegir el producte a la secció Taula de preus. Si no l’hi afegeixes, el producte no apareixerà als teus clients a la pàgina de registre._

_**Nota 2:** el nom d’usuari, el correu electrònic, la contrasenya, el títol del lloc, l’URL del lloc, el resum de la comanda, el pagament i el botó d’enviament són camps obligatoris per crear un formulari de checkout._

Mentre treballes en el teu formulari de checkout, sempre pots utilitzar el botó Previsualització per veure com veuran el formulari els teus clients. També pots alternar entre veure’l com a usuari existent o com a visitant.

![Botó Previsualització a l’editor del formulari de checkout](/img/config/checkout-form-preview-button.png)![Previsualització del formulari de checkout com a visitant o usuari existent](/img/config/checkout-form-preview-modal.png)

Finalment, a **Opcions avançades** pots configurar el missatge per a la pàgina **Gràcies**, afegir snippets per fer el seguiment de conversions, afegir CSS personalitzat al teu formulari de checkout o restringir-lo a determinats països.

![Opcions avançades amb pàgina Gràcies, seguiment de conversions i CSS personalitzat](/img/config/checkout-form-advanced.png)

També pots activar o desactivar manualment el teu formulari de checkout commutant aquesta opció a la columna de la dreta, o eliminar el formulari permanentment.

![Commutador d’actiu i opció d’eliminar per al formulari de checkout](/img/config/checkout-form-active.png)

No oblidis desar el teu formulari de checkout!

![Botó Desa el formulari de checkout](/img/config/checkout-form-save.png)

Per obtenir el shortcode del teu formulari, fes clic a **Genera shortcode** i copia el resultat que es mostra a la finestra modal.

![Modal Genera shortcode amb el shortcode per copiar](/img/config/checkout-form-editor.png)

_**Nota:** Hauràs d’afegir aquest shortcode a la teva pàgina de registre per tal que aquest formulari de checkout s’hi afegeixi._

## Preselecció de productes i plantilles mitjançant paràmetres d’URL:

Si vols crear taules de preus personalitzades per als teus productes i preseleccionar al formulari de checkout el producte o la plantilla que el teu client triï des de la teva taula de preus o pàgina de plantilles, pots utilitzar paràmetres d’URL per fer-ho.

### **Per als plans:**

Ves a **Ultimate Multisite > Productes > Selecciona un pla**. Hauries de veure el botó **Fes clic per copiar l’enllaç compartible** a la part superior de la pàgina. Aquest és l’enllaç que pots utilitzar per preseleccionar aquest pla específic al teu formulari de checkout.

![Pàgina de producte amb el botó d’enllaç compartible](/img/config/products-list.png)

Tingues en compte que aquest enllaç compartible només és vàlid per als **Plans**. No pots utilitzar enllaços compartibles per a paquets o serveis.

### Per a les plantilles:

Si vols preseleccionar plantilles de lloc al teu formulari de checkout, pots utilitzar el paràmetre: **?template_id=X** a l’URL de la teva pàgina de registre. La "X" s’ha de substituir pel **número d’ID de la plantilla de lloc**. Per obtenir aquest número, ves a **Ultimate Multisite > Llocs**.

Fes clic a **Gestiona** just a sota de la plantilla de lloc que vols utilitzar. Veuràs el número SITE ID. Utilitza aquest número per a aquesta plantilla de lloc específica perquè quedi preseleccionada al teu formulari de checkout. En el nostre cas, el paràmetre d’URL seria **?template_id=2**.

![Llista de llocs que mostra l’ID de la plantilla de lloc](/img/config/site-templates-list.png)

Suposem que el lloc web de la nostra xarxa és [**www.mynetwork.com**](http://www.mynetwork.com) i que la nostra pàgina de registre amb el nostre formulari de checkout es troba a la pàgina **/register**. L’URL completa amb aquesta plantilla de lloc preseleccionada tindrà aquest aspecte: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

I si vols, pots preseleccionar tant productes com plantilles al teu formulari de checkout. Tot el que has de fer és copiar l’enllaç compartible del pla i enganxar el paràmetre de plantilla al final. Tindrà aquest aspecte: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
