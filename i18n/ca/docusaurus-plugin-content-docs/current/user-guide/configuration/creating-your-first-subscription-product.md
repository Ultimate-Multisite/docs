---
title: Creant el teu primer product de subscripció
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Creació del teu primer producte de subscripció (v2)

_**NOTA IMPORTANT:** Aquest article és només per a usuaris de Ultimate Multisite versió 2.x. Si utilitzeu la versió 1.x,**_ **_**mireu aquest article**_**.

Per començar a gestionar la teva xarxa i començar a vendre els teus serveis a potencials usuaris, necessites tenir diverses opcions de subscripció. Com es creen aquests productes? Quins són els tipus de productes que pots oferir? En aquest article, cobreixerem tot el que has de saber sobre els productes.

## Tipus de producte {#product-type}

Amb Ultimate Multisite pots oferir dues categories de productes als teus clients: **plans** i **add-ons** **(Order Bump)**. Els add-ons es poden dividir en dos tipus: **packages** i **services**. Veurem les seves diferències i particularitats a continuació.

*   **Plans**: el producte fonamental d'Ultimate Multisite. El teu client només pot tenir una membresia si està adjunta a un plan. Un plan proporciona als teus clients un o més sites (depèn de la configuració del teu plan) amb les limitacions que estableix a la pàgina d'edició del producte.

*   **Packages**: add-ons que impacten directament les funcionalitats dels plans d'Ultimate Multisite. Modifiquen les limitacions o afegeixen nous recursos, plugins o themes al plan original que va comprar el teu client. Per exemple, un plan bàsic pot permetre 1.000 visites al mes i tu pots fer disponible un package que estendi això a 10.000.

*   **Services:** add-ons que no modifiquen les funcionalitats d'Ultimate Multisite. Són tasques que realitzaràs per al teu client a més del plan que va comprar. Per exemple, el teu client pot comprar un plan que permet un únic site i també pagar un servei addicional que farà el disseny d'aquest site.

## Gestió de productes {#managing-products}

Per a molts, la pestanya **Products** d'Ultimate Multisite **(Ultimate Multisite > Products)** es pot equiparar als plans en un entorn d'hosting tradicional.

Afitllament, la pestanya Products d'Ultimate Multisite defineix el constructe i les limitacions aplicables a un producte o servei específic. Tals constructes s'estenden a la descripció, el preu, els impostos i els permisos del producte o servei.

Aquesta secció et guiarà en la comprensió d'aquest pilar essencial d'Ultimate Multisite.

![Products list page](/img/config/products-list.png)

## Afegir productes {#adding-products}

Tindem sigui un plan, un package o un servei, el punt d'entrada per definir un nou element és a través de **Ultimate Multisite > Products > Add Product**.

![Add Product button](/img/config/product-add-button.png)

L'interfeceixa conté dues seccions predominants. A la esquerra hi ha diverses pestanyes que ajuden a la definició del producte i a la dreta hi ha unes quantes seccions per definir el preu base del producte, el seu estat actiu i l'imatge del producte.

![Product edit page overview](/img/config/product-edit-full.png)

### Descripció {#description}

Les informacions base del producte es poden definir proporcionant un nom i una descripció del producte. Aquests identificadors es mostren on sigui que es requereix la informació del producte, com ara la selecció de plans i preus, factures, actualitzacions, i el cos que.

![Product description section](/img/config/product-description.png)

### Tipus de preu {#pricing-type}

A la dreta de l'interfeceixa, es pot definir el preu base.

![Pricing and save section](/img/config/product-pricing-save.png)

Ultimate Multisite suporta tres tipus de preu diferents. L'opció **paid** demana al administrador de la xarxa informació sobre el preu i la freqüència de facturació del producte.

### Preu {#pricing}

El component de preu defineix el preu base del producte i l'interval de facturació.

![Pricing and save section](/img/config/product-pricing-save.png)

amb això un preu d'exemple de $29.99 amb una configuració d'1 mes facturarà $29.99 cada mes. De manera similar, un preu de $89.97 amb una configuració de 3 mesos facturarà aquesta quantitat cada trimestre.

### Cicles de facturació {#billing-cycles}

La secció de cicles de facturació especifica la freqüència de l'anterior interval de facturació i es compren generalment en el context de contractes o termes fixos.

![Pricing and save section](/img/config/product-pricing-save.png)

Per exemple, un preu de producte de $29.99 amb un interval d'1 mes i 12 cicles de facturació facturaria $29.99 per mes durant els 12 mesos successius. En altres mots, aquesta configuració establiria un termini de preu fix de $29.99 per mes durant 12 mesos i després cessaria la facturació.

### Període d'essai {#trial-period}

Activar el interruptor d'essai de l'oferta permet a l'administrador de la xarxa definir un període d'essai per al producte.

![Pricing and save section](/img/config/product-pricing-save.png)

Durant el període d'essai, els clients són lliures d'utilitzar el producte i no es facturarà fins que hagi esgotat el període d'essai.

### Taula de configuració {#setup-fee}

També pots aplicar una taula de configuració al teu plan.

![Pricing and save section](/img/config/product-pricing-save.png)

Esto significa que el teu client pagarà una quantitat addicional al primer càrrec (a més del preu del plan) que correspon a la taula que va definir en aquesta secció.

### Actiu {#active}

L'interruptor actiu defineix efectivament si el producte està disponible per als clients per a noves inscripcions.

![Active toggle](/img/config/product-active.png)

Si hi ha clients existents en aquest plan, posar l'interruptor en estat desactivat fa efectivament un "grandfathering" del plan, eliminant-lo de les inscripcions futures. **Els clients existents del plan continuarà de ser facturats** fins que es transitin a un nou plan o es retiri del plan.

### Imatge del producte {#product-image}

El botó **Upload Image** permet a l'administrador de la xarxa utilitzar la biblioteca de mitjà per seleccionar o carregar una imatge del producte.

![Product image section](/img/config/product-image.png)

### Eliminar {#delete}

El botó **Delete Product** elimina el producte del sistema. Apareix quan el producte està publicat.

![Delete product section](/img/config/product-delete.png)

A diferència d'altres eliminacions, el producte no es posa en cap estat de paparella. Així que, una vegada eliminat, l'acció és irreversible.

### Opcions del producte {#product-options}

Una vegada definida la informació del producte a nivell base, les opcions del producte ajuden l'administrador de la xarxa a definir més els atributs específics del producte.

#### General {#general}

La pestanya **General** defineix els atributs generals del producte no aplicables a cap de les altres pestanyes específiques del producte.

![General tab](/img/config/product-general-tab.png)

El **product slug** autoexplicatiu defineix lo slug amb el qual el producte és identificat en les URLs i altres àrees d'Ultimate Multisite.

Ultimate Multisite suporta diversos tipus de producte, a saber: Plan, Package i Service. Les pestanyes **Product Options** es canvien dinàmicament en funció del tipus de producte especificat.

El **Customer Role** especifica el rol que es assigna al client quan es crea el site. Normalment, per la majoria dels administradors de xarxa, serà el valor predeterminat d'Ultimate Multisite o Administrator. El rol prededetermin d'Ultimate Multisite es pot configurar a **Ultimate Multisite > Settings > Login & Registration**.

![Customer role settings](/img/config/product-customer-role-settings.png)

#### Actualitzacions i degradacions {#up--downgrades}

Aquesta pestanya especifica els camins d'actualització i degradació disponibles per a un client dins del seu nivell específic.

Per entendre aquest concepte, considera un exemple on una instal·lació de nich d'Ultimate Multisite proporciona solucions de gestió d'aprenentatge als seus clients. Per aconseguir-ho, es defineixen tres plans (Bàsic, Plus i Premium) i es activen plugins específics per a cada plan (veure més endavant en aquesta secció per a instruccions sobre com activar plugins).

Si l'instal·lació d'Ultimate Multisite també serveix pàgines web empresarials o sites d'eCommerce, aquests plans poden requerir plugins diferents per ser instal·lats i activats.

Aquesta mateixa, seria indeseable i problemàtic deixar que els clients d'eLearning transitin a plans d'eCommerce, ja que aquests plans, preus i limitacions poden no ser adequats.

Així, per restringir el camí del client i prevenir incidents, l'administrador de la xarxa pot definir un grup de plans i dins d'aquest grup especificar els plans a què el client pot transitar.

![Up and Downgrades tab](/img/config/product-upgrades.png)

Per definir un grup de plans, especifica els plans compatibles a la llista **plan group**. L'**product order** determina com es ordenen i es mostren els plans, des del més baix al més alt.

Ultimate Multisite també inclou una funcionalitat d'**order bump** on es poden afegir add-ons de productes i serveis apropiats als plans. Aquests es ofereixen al client com a articles addicionals que es poden afegir als plans al moment del checkout o durant una actualització.

#### Variacions de preu {#price-variations}

Les variacions de preu permeten a l'administrador de la xarxa especificar nivells de preu alternatius depenent de la durada. Aquesta configuració fa possible oferir un període de facturació mensual, trimestral, anual o de qualsevol altre tipus per al mateix producte. Per exemple, pots configurar un producte a $29.99/mes amb una opció anual de descompte a $249.99/any.

![Price Variations tab](/img/config/product-price-variations-tab.png)

Per establir variacions de preu, activa l'interruptor **Enable Price Variations** i fes clic al botó **Add new Price Variation**.

![Product price variations](/img/config/product-price-variations.png)

Per introduir una variació, configura la durada, el període i el preu de la variació. Es poden introduir variacions addicionals fent clic al botó de nou.

Per exemple, si el teu preu base del producte és de $29.99 per mes, podríeu afegir:

*   **3 Months** a $79.99 (un petit descompte sobre el mensual)
*   **1 Year** a $249.99 (un descompte significatiu per compromís anual)

:::tip Mostrar un interruptor de període de facturació a la frontend

Les variacions de preu soles no afegeixen un interruptor o un *switch* al checkout de la frontend. Per deixar que els clients canvi entre períodes de facturació (per exemple, Mensual / Anual), has de fer servir un camp de **Period Selection** al teu formulari de checkout. Veure [Checkout Forms: Adding a Period Selection Toggle](checkout-forms#adding-a-period-selection-toggle) per a instruccions pas a pas.
:::

#### Impostos {#taxes}

La pestanya **Taxes** s'alinea amb la configuració d'impostos especificada a **Ultimate Multisite > Settings > Taxes** i més específicament amb les taxes definides. Per activar els impostos i definir les taxes aplicables, consulta la documentació a **Ultimate Multisite: Settings**

![Taxes tab](/img/config/product-taxes.png)

En un exemple anterior, definim una taxa impositiva local del 7,25% aplicable als clients de California (Estats Units d'Amèrica).

Una vegada que la taxa impositiva es defineix a **Ultimate Multisite > Settings > Manage Tax Rates**, és seleccionable a nivell de producte.

![Taxes tab](/img/config/product-taxes.png)

Per indicar que un producte és un article imposable, activa l'interruptor **Is Taxable** i selecciona la taxa impositiva aplicable del desplegable Tax Category.

#### Templates de site {#site-templates}

En essència, els templates de site són websites complets de WordPress que es clonen al site d'un client al començament de la seva subscripció.

![Site Templates tab](/img/config/product-site-templates.png)

L'administrador de la xarxa crea i configura el site plantilla com a un site de WordPress regular amb themes, plugins i contingut activats i configurats. El site plantilla es clona verbatim al client.

Aquesta pestanya permet a l'administrador de la xarxa especificar el comportament dels templates de site quan hi ha una nova subscripció. Per fer servir els templates de site per a aquest plan, activa l'interruptor **Allow Site Templates**.

Quan **Allow Site Templates** està desactivat, els clients del plan no poden triar templates encara que un formulari de checkout, un enllaç compartible o un paràmetre d'URL farien que els templates estiguessin disponibles. Ultimate Multisite ara fa tenir aquest límit mitjançant una cadena de reserva a través dels punts d'entrada disponibles: es compruegen les configuracions del plan, després les configuracions del formulari de checkout, i després els templates preseleccionats o proporcionats per URL. Això manté les limitacions del plan consistents i els clients.

### Resum de la traducció: {#sites}

* **"clients"** (en el context de la traducció) es refereix a "clients" o "usuàri".
* **"clients"** (en el context de la traducció) es refereix a "clients" o "usuàri".

---
*(Nota: He mantenut el format de la traducció i he corregit la terminologia per fer-ho més natural en català.)*
