---
title: Creare Tuum Primum Product Abonendi
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Creare tu Primo Prodotto de Suscripción (v2)

_**NOTA IMPORTANTE: Este artículo es solo para usuarios de Ultimate Multisite versión 2.x. Si estás usando la versión 1.x,**_ **_consulta este artículo**_**.

Para empezar a ejecutar tu red y comenzar a vender tus servicios a posibles usuarios, necesitas tener diferentes opciones de suscripción. ¿Cómo creas estos productos? ¿Qué tipos de productos puedes ofrecer? En este artículo, cubriremos todo lo que necesitas saber sobre los productos.

## Tipo de Producto {#product-type}

Con Ultimate Multisite puedes ofrecer dos categorías de productos a tus clientes: **planes** y **complementos** **(Order Bump)**. Los complementos se pueden dividir en dos tipos: **paquetes** y **servicios**. Veremos sus diferencias y particularidades a continuación.

  * **Planes**: El producto fundamental de Ultimate Multisite. Tu cliente solo puede tener una membresía si está adjunta a un plan. Un plan proporciona a tus clientes uno o más sitios (depende de las configuraciones de tu plan) con las limitaciones que estableces en la página de edición de tu producto.

  * **Paquetes**: Complementos que impactan directamente en las funcionalidades de los planes de Ultimate Multisite. Alteran las limitaciones o añaden nuevos recursos, plugins o temas al plan original que compró tu cliente. Por ejemplo, un plan básico podría permitir 1,000 visitas por mes y puedes poner a disposición un paquete que extiende este número a 10,000.

  * **Servicios**: Complementos que no alteran las funcionalidades de Ultimate Multisite. Son tareas que realizarás para tu cliente además del plan que compró. Por ejemplo, tu cliente podría comprar un plan que permite un solo sitio y también pagar por un servicio extra que hará el diseño de este sitio.

## Gestionar Productos {#managing-products}

Ad multis utilisateurs, la scheda **Products** in Ultimate Multisite **(Ultimate Multisite > Products)** può essere paragonata ai piani in un ambiente di hosting tradizionale.

All'interno di Ultimate Multisite, la scheda Products definisce la struttura e i limiti applicabili a un prodotto o servizio specifico. Tali strutture si estendono alla descrizione del prodotto o servizio, al prezzo, alle tasse e ai permessi.

Questa sezione ti guiderà nella comprensione di questo pilastro essenziale di Ultimate Multisite.

![Products list page](/img/config/products-list.png)

## Aggiunta Prodotti {#adding-products}

Che si tratti di un piano, pacchetto o servizio, l'ingresso per definire un nuovo elemento è tramite **Ultimate Multisite > Products > Add Product**.

![Add Product button](/img/config/product-add-button.png)

L'interfaccia contiene due sezioni predominanti. A sinistra ci sono diverse schede che aiutano nella definizione del prodotto e a destra ci sono alcune sezioni per definire il prezzo base del prodotto, il suo stato attivo e l'immagine del prodotto.

![Product edit page overview](/img/config/product-edit-full.png)

### Descrizione {#description}

Le informazioni di base del prodotto possono essere definite fornendo un nome e una descrizione del prodotto. Questi identificatori vengono visualizzati ovunque sia richiesta l'informazione del prodotto, come la selezione del piano e dei prezzi, le fatture, gli upgrade e simili.

![Product description section](/img/config/product-description.png)

### Tipo di Prezzo {#pricing-type}

Sul lato destro dell'interfaccia, il prezzo base può essere definito.

![Pricing and save section](/img/config/product-pricing-save.png)

Ultimate Multisite supporta tre tipi diversi di prezzo. L'opzione **paid** (a pagamento) richiede all'amministratore della rete informazioni riguardo al prezzo del prodotto e alla frequenza di fatturazione.

### Prezzo {#pricing}

Il componente prezzo definisce il prezzo base del prodotto e l'intervallo di fatturazione.

![Sección de precios y guardado](/img/config/product-pricing-save.png)

Así, un precio de ejemplo de $29.99 con una configuración de 1 mes se facturará $29.99 cada mes. De manera similar, un precio de $89.97 con una configuración de 3 meses se facturará esa cantidad cada trimestre.

### Ciclos de Facturación {#billing-cycles}

La sección de ciclos de facturación especifica la frecuencia del intervalo de facturación mencionado anteriormente y generalmente se entiende a la luz de contratos o términos fijos.

![Sección de precios y guardado](/img/config/product-pricing-save.png)

Por ejemplo, un precio de producto de $29.99 con un intervalo de 1 mes y 12 ciclos de facturación se facturará $29.99 por mes por el producto durante los siguientes 12 meses. En otras palabras, dicha configuración establecería un término de precio fijo de $29.99 por mes durante 12 meses y luego cesaría la facturación.

### Período de Prueba {#trial-period}

Activar el interruptor de prueba de oferta permite al administrador de la red definir un período de prueba para el producto.

![Sección de precios y guardado](/img/config/product-pricing-save.png)

Durante el período de prueba, los clientes son libres de usar el producto y no se les facturará hasta que finalice dicho período de prueba.

### Tarifa de Configuración {#setup-fee}

También puedes aplicar una tarifa de configuración a tu plan.

![Sección de precios y guardado](/img/config/product-pricing-save.png)

Esto significa que tu cliente pagará un monto extra en el primer cargo (además del plan de precios) que corresponda a la tarifa que definiste en esta sección.

### Activo {#active}

El interruptor activo define efectivamente si el producto está disponible para los clientes para nuevas suscripciones.

![Interruptor activo](/img/config/product-active.png)

Si exstantibus clienti sunt in hoc planum, commutatio interruttoris in statum desabilitatum de facto grandefaci planum, rem removens e ad adscriptiones futurae. **Clientia existenti in planu continuabit facturari** donec transire ad planum novum vel a planu removetur.

### Imago Producti {#product-image}

Botón **Upload Image** permittit administrator network ut media library utilizet ad selectionem aut uploadem imago producti.

![Product image section](/img/config/product-image.png)

### Delere {#delete}

Botón **Delete Product** productum a sistema delet. Apparet postquam productum publicatus est.

![Delete product section](/img/config/product-delete.png)

Sicut aliae deletiones, productum in statum cestae (trash state) non ponitur. Ibi ergo, postquam deletum est, actio irreversibilis est.

### Optiones Producti {#product-options}

Cum informatio producti ad nivelem fundamentale definita est, optiones producti ad administrator network adiuvant ad further definitionem attributuum specificorum producti.

#### Generalis {#general}

Tabula **General** definiit attributa generali producti quae nulli aliis tabulis specificis producti applicabuntur.

![General tab](/img/config/product-general-tab.png)

**Product slug**, qui est explicatus per ipsum, definet slug cum quo productum in URL et alianque locis Ultimate Multisite identificatur.

Ultimate Multisite suportat varias typus productorum, namely Planum, Packagem et Servicem. Tabulae **Product Options** dynamice ajustantur in secundum typum producti definitum.

**Customer Role** specificat rollem quam cliente adscriptum est cum situs creatur. Typice pro omnibus administratoribus network, hoc erit default Ultimate Multisite vel Administrator. Rolem default Ultimate Multisite potest facere in **Ultimate Multisite > Settings > Login & Registration**.

![Customer role settings](/img/config/product-customer-role-settings.png)

#### Ascensio et Descensio (Up & Downgrades) {#up--downgrades}

Hic tab definet viam ascendendi et descendendi quae ad custodiendum in suum gradum specificum est.

Ut hoc conceptum intelligas, cogita exemplum ubi installationis Ultimate Multisite specializzata praestet solutiones managementi apprendendi ad clientes suas. Ad hoc, tres plana (Basic, Plus, et Premium) sunt definitae et plugin specifici pro cada uno plano activati sunt (vide posterior in hac sectione instructiones de activationibus plugin).

Si installationis Ultimate Multisite etiam servit situs societatis vel situs eCommerce, hae plana plugin alios requirere possunt ut installantur et activantur.

Ad hoc extentum, desiderabile et problematicum est permittendum clientes eLearning transitioni ad planum eCommerce, quia haec plana, precios et limitatio non sunt aptae.

Itaque viam clienti restringere et incidentes prevenire, administrator network potest group plan definire et in eo gruppo specificare plana ad quae cliente transire potest.

![Up and Downgrades tab](/img/config/product-upgrades.png)

Ad group plan definire, specifica plana compatibilia in lista **plan group**. **Product order** determinat quommodo plana ordinantur et exibantur a minimo ad maximum.

Ultimate Multisite etiam includit attributum **order bump**, ubi ad hoc plana praebent producta et servitia addenda possunt. Haec ad clientem ut item additionale offeruntur quae in planibus ad checkout vel durante ascendendi addendos addere possunt.

#### Variationes Pretiorum {#price-variations}

Variatio premoniae praebunt administratoribus networki ut alternas gradus premoniae speciare dependens a durationi. Hoc parametrum permittit offerre productum eodem modo pro mensibus, trimestri, annis vel quibusque periodu facturarum aliis. Pro exemplum, possis productum in $29.99/mensibus stabilire cum optione annuali concessa ad $249.99/annus.

![Price Variations tab](/img/config/product-price-variations-tab.png)

Ad establishmentem variationum premoniarum, pon **Enable Price Variations** in activum et clica in boton **Add new Price Variation**.

![Product price variations](/img/config/product-price-variations.png)

Ad variationem inserendum, pon durationem, periodum et pretium variationis. Aliae variationes possunt inseri per idem boton.

Pro exemplum, si pretium producti fundamentali est $29.99 pro mensibus, potes addere:

  * **3 Mensibus** ad $79.99 (minus parvus comparatus cum mensibus)
  * **1 Annum** ad $249.99 (minus significantis pro commitment annuum)

:::tip Exhibire Toggle Periodi Facturarum in Frontend

Variatio premoniarum solus non addit toggle vel switch ad checkout frontend. Ut clientes inter perioda facturarum mutare possint (e.g. Mensis / Annui), necessitas est addere field **Period Selection** ad formam checkout tuam. Vidi [Checkout Forms: Adding a Period Selection Toggle](checkout-forms#adding-a-period-selection-toggle) ad instructiones step-by-step.
:::

#### Taxae {#taxes}

Tabula **Taxes** concordat cum parametris taxatione definitis in **Ultimate Multisite > Settings > Taxes** et, specifice, cum tarifis taxatione definitis. Ad activam taxas et definitionem tariforum taxationis applicabilium videri, vidi documentation ad **Ultimate Multisite: Settings**.

![Taxes tab](/img/config/product-taxes.png)

In un exempio precedentem, definimus un ratam taxationis localis de 7.25% applicabilis ad clientes in Californiam (Americae Unitas).

Cum ratam taxationis est definita in **Ultimate Multisite > Settings > Manage Tax Rates**, potest eligi ad nivel producti.

![Taxes tab](/img/config/product-taxes.png)

Ad indicandum quod productum est item imponibilis, ponas interruttorem **Is Taxable** in activum et selecta ratam taxationis appropriatam ex menue Tax Category.

#### Site Templates {#site-templates}

In essentia, site templates sunt completa webs WordPress quae ad initium subscriptionis clienti ad situs eius clonata est.

![Site Templates tab](/img/config/product-site-templates.png)

Administrator network creavit et configuravit template situm ut ordinarium situs WordPress cum themabus, pluginibus et contentu activis et configuratis. Situs template verbum per verbum ad clientem clonatur.

Hae tabula permittit administrator network specire modum operationis site templates in novae subscriptioni. Ad usum site templates pro hoc planum, ponas interruttorem **Allow Site Templates** in statum activum.

Cum **Allow Site Templates** est deactivus, clienti in planu non possunt eligere templates etiam si formular checkout, link partibilis vel parameter URL aliter templates adhibere possibilis faciat. Ultimate Multisite nunc hoc limitum per catenam fallacem per omnia puncta ingressus disponibili imponeat: prima sunt verificatae settings planum, deinde settings formae checkout template, deinde templates praecellecti vel proditissimi URL. Hoc conservat limites planum constantes et praecedit ut templates non apparuerunt ad products quae eos non debent offerre.

**site template selection mode** definet modum operationis site templates in processu subscriptionis.

La configuración **D** **Default** sigue los pasos del formulario de pago (checkout form). Si el administrador de red ha definido un paso de selección de plantilla en el proceso de pago y ese paso está definido con plantillas, esta configuración respetará las directivas establecidas en el paso de pago.

Especificar **A** **Assign Site Template** fuerza la selección de la plantilla especificada. En consecuencia, cualquier paso de selección de plantilla en el proceso de pago se elimina.

Por último, **C** **Choose Available Site Templates** anula las plantillas especificadas en el paso de pago con las plantillas seleccionadas en esta configuración. También se puede definir una plantilla preseleccionada para ayudar al cliente en la elección.

En última instancia, si el administrador de red desea que la selección de plantillas ocurra en los pasos de pago, la configuración de '_default_' será suficiente. Alternativamente, para eliminar y bloquear la selección de plantillas y delegar la selección a la configuración del plan, las opciones '_assign new template_' o '_choose available site templates_' pueden ser deseables.

#### Sitios (Sites) {#sites}

La pestaña **Sites** forma parte de la funcionalidad de limitaciones de Ultimate Multisite.

![Sites tab](/img/config/product-sites.png)

Esta configuración especifica el número máximo de sitios que un cliente puede crear bajo su membresía.

Para activar la limitación, configure el interruptor **limit sites** en su estado activo y especifique el número máximo de sitios en el campo **site allowance**.

#### Visitas (Visits) {#visits}

La pestaña **Visits** es otra parte del sistema de limitaciones de Ultimate Multisite. Esta configuración permite contabilizar y luego limitar el tráfico único a un sitio del cliente.

![Visits tab](/img/config/product-visits.png)

Exspectus marketing, administratores de red pueden usar esta configuración como medio para animar a los clientes a mejorar su plan una vez que se alcancen los límites. Esta configuración también puede ayudar al administrador de la red a frenar y prevenir el tráfico excesivo hacia los sitios para preservar los recursos del sistema.

Para usar esta función, configure el interruptor **limit unique visits** en estado activo y especifique el número máximo de visitantes únicos en el campo **unique visits quota**.

Una vez que se alcance este límite, Ultimate Multisite dejará de servir al sitio del cliente en lugar de mostrar un mensaje que indique que los límites han sido superados.

#### Usuarios {#users}

Las limitaciones de 'Users' de Ultimate Multisite permiten al administrador de la red imponer límites al número de usuarios que pueden crearse y asignarse a roles.

![Users tab](/img/config/product-users.png)

Para activar la función de limitaciones, configure el interruptor **limit user** en estado activo deslizándolo hacia la derecha.

Luego, para cada rol que se vaya a limitar, active el interruptor junto a él y defina el límite superior máximo en el campo apropiado.

#### Tipos de Publicación (Post Types) {#post-types}

La pestaña **Post Types** permite al administrador de la red imponer límites detallados sobre la extensa variedad de tipos de publicación dentro de WordPress.

![Post Types tab](/img/config/product-post-types.png)

Debido a la construcción de WordPress, las publicaciones y los tipos de publicación son un componente significativo de su funcionalidad principal, y por lo tanto el sistema de limitaciones de Ultimate Multisite está diseñado para ayudar al administrador de la red a establecer y mantener límites.

Para activar este subsistema de límites, configure el interruptor **limit post types** en estado activo deslizándolo hacia la derecha.

Post typebus per limitatum, toggletur in hoc ad dextram et maximum limitum supremum in campo appropriato defini.

#### Spatium Disci {#disk-space}

Tabula **Disk Space** permittit administratores network restringere spatium consumens a clientibus.

![Disk Space tab](/img/config/product-disk-space.png)

Usus in WordPress multisite core files inter omnia sita partibus est et individualia directores creati ad files mediae et uploades ad quos haec statua et limitatio applicantur.

Ad habilitationem limitationis usus disci, togglem **limit disk size per site** ponere in statum activum per dextram.

Postea, maximum limitum supremum in megabyte campo **disk space allowance** defini.

#### Dominium Custom {#custom-domain}

Per toggling optionem hanc, potest permittas domina custom in hoc planum specificamente.

![Custom Domains tab](/img/config/product-custom-domains.png)

#### Thematicae {#themes}

Tabula **Themes** intra optiones producti permittit administratore network themes ad clientibus disponere ad selectionem et facultate statum theme impellere.

![Themes tab](/img/config/product-themes.png)

_**Nota: Ad themes ad clientibus disponendi debent per administrator network habilitati esse.**_

![Network themes page](/img/config/product-themes-network-enabled.png)

Optionem **visibility** definiet si hoc theme visibile est vel non in tempore quod clientor tabulam suam **Appearance > Themes** intra situm videt. Ponere optionem hanc in **Hidden** removet themam a facie et ita potestatem selectionis activae restrict.

![Themes tab](/img/config/product-themes.png)

Selectione **behavior** permittit administratore network statum theme definire post creationem siti clientis.

Nel stato **Disponibile**, il tema è messo a disposizione del cliente per l'attivazione autonoma. Al contrario, nello stato **Non Disponibile**, si rimuove al cliente la possibilità di attivare il tema. Infine, l'opzione **Forza Attiva** forza la selezione e l'attivazione del tema, impostandolo come predefinito alla creazione del sito.

#### Plugin {#plugins}

Simile alla scheda Temi (Themes), Ultimate Multisite permette all'amministratore della rete di definire la visibilità dei plugin ai clienti, così come il loro stato al momento della creazione di un nuovo sito.

![Plugins tab](/img/config/product-plugins.png)

Il menu a tendina **visibilità** (visibility) permette al plugin di essere visibile o nascosto al cliente quando visualizzato sul suo sito tramite l'opzione del menu Plugin.

L'amministratore della rete può manipolare ulteriormente il comportamento dei plugin utilizzando le opzioni nel menu a tendina **comportamento** (behavior).

![Plugins tab](/img/config/product-plugins.png)

La selezione **Predefinito** (Default) rispetta lo stato del plugin definito nel template del sito selezionato dal cliente. Così i plugin che sono attivati all'interno del template rimarranno attivi quando il template viene clonato sul sito del cliente.

**Forza Attiva** (Force Activate) mette il plugin in uno stato attivo alla creazione del sito e, al contrario, **Forza Inattiva** (Force Inactivate) disattiva il plugin alla creazione del sito. In entrambe queste circostanze, lo stato del plugin può essere modificato manualmente dal cliente tramite il suo menu Plugin di WordPress.

La impostazione **Force Activate & Lock** opera de modo simile ma impedisce al cliente modificar el estado del plugin. Por lo tanto, una configuración de Force Activate y Lock forzará al plugin a su estado activo y evitará que el cliente lo desactive. De manera similar, la configuración **Force Inactivate & Lock** forzará al plugin a su estado inactivo y evitará que el usuario active el plugin.

El administrador de red puede considerar las configuraciones Force Activate & Lock y Force Inactivate & Lock junto con las plantillas del sitio como plugins; los estados de los plugins dentro de las plantillas pueden verse afectados por estas configuraciones si se seleccionan.

#### Limitaciones de Restablecimiento (Reset Limitations) {#reset-limitations}

La pestaña **Reset Limitations** restablece todos los límites personalizados definidos en el producto. Para restablecer las limitaciones, haz clic en el botón **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

Para confirmar la acción, desliza el interruptor **confirm reset** a su estado activo a la derecha y haz clic en el botón **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

## Editar, Duplicar o Eliminar Producto {#edit-duplicate-or-delete-product}

Los productos existentes se pueden editar, duplicar o eliminar navegando a **Ultimate Multisite > Products** y pasando el ratón sobre el nombre del producto existente.

![Product hover actions](/img/config/product-hover-actions.png)
