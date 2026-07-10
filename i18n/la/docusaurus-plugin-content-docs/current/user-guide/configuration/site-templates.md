---
title: Template sitorum
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Modelli di Sito (v2) {#site-templates-v2}

_**NOTA: Questo articolo si riferisce alla versione 2.x di Ultimate Multisite. Se stai usando la versione 1.x,**_ **consulta questo articolo.**_

Il nostro obiettivo quando creiamo una rete premium con Ultimate Multisite è automatizzare il maggior numero possibile di processi, offrendo ai nostri clienti flessibilità e diverse opzioni da cui scegliere quando creano i loro siti web. Un modo semplice per raggiungere questo equilibrio è utilizzare la funzione Modelli di Sito (Site Templates) di Ultimate Multisite.

## Cos'è un Modello di Sito? {#what-is-a-site-template}

Come suggerisce il nome, un Modello di Sito è un sito base che può essere utilizzato come struttura quando si creano nuovi siti nella tua rete.

Questo significa che puoi creare un sito base, attivare diversi plugin, impostare un tema attivo e personalizzarlo in qualsiasi modo tu voglia. Poi, quando il tuo cliente crea un nuovo account, invece di ottenere un sito WordPress predefinito senza contenuti significativi al suo interno, otterrà una copia del tuo sito base con tutte le personalizzazioni e i contenuti già pronti.

Sembra fantastico, ma come creo un nuovo modello di sito? È semplice quanto possibile.

## Creare e Modificare un nuovo Modello di Sito {#creating-and-editing-a-new-site-template}

I Modelli di Sito sono semplicemente siti normali nella tua rete. Per creare un nuovo modello puoi andare semplicemente a **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![Pulsante Aggiungi sito nella pagina dell'elenco dei siti](/img/config/site-templates-list.png)**

Questo aprirà una finestra modale dove ti verrà chiesto il **Titolo del Sito, Dominio/percorso del Sito** e il **Tipo di Sito**. Nel menu a tendina **Tipo di Sito**, assicurati di selezionare **Site Template** *.

_![Modale Aggiungi modello di sito con menu a tendina tipo sito](/img/config/site-templates-list.png)_

Puoi anche aggiungere una descrizione rivolta al cliente per spiegare cosa include il modello:

![Campo de descripción del diseño del sitio en la pantalla de edición de plantillas del sitio](/img/config/site-template-edit-description.png)

En la parte inferior del formulario, notarás un interruptor llamado **Copy Site** (Copiar Sitio). Esto te permitirá crear una nueva plantilla de sitio basada en una plantilla existente como punto de partida para ayudarte a ahorrar tiempo en lugar de crear una plantilla desde cero.

![Modal de adición de plantilla de sitio con el interruptor copiar sitio](/img/config/site-templates-list.png)

### Personalizando el contenido de una Plantilla de Sitio {#customizing-the-contents-of-a-site-template}

Para personalizar tu plantilla de sitio, simplemente navega al panel de control de la misma y realiza los cambios que necesites. Puedes crear nuevas publicaciones, páginas, activar plugins y cambiar el tema activo. Incluso puedes ir al Customizer (Personalizador) y cambiar todo tipo de opciones de personalización.

![Interfaz de edición de plantilla de sitio](/img/config/site-template-edit.png)

Todos esos datos se copiarán cuando un cliente cree un nuevo sitio basado en esa Plantilla de Sitio.

### Opciones Avanzadas {#advanced-options}

Si sabes algo de programación personalizada, puedes usar nuestra API de Búsqueda y Reemplazo para reemplazar automáticamente información en el nuevo sitio después de su creación. Esto es útil para cosas como cambiar los nombres de las empresas en una página "Acerca de" (About) o cambiar el correo electrónico de contacto en la página de Contacto, etc.

### Usando Plantillas de Sitio {#using-site-templates}

De acuerdo, has creado un montón de Plantillas de Sitio diferentes con distintos diseños, temas y configuraciones. ¿Cómo las haces útiles en tu red ahora?

Básicamente, ahora tienes dos enfoques que puedes usar (no al mismo tiempo):

  * Adjuntar una Plantilla de Sitio a cada uno de tus Planes

**O**

  * Permitir que tus clientes elijan las plantillas de sitio por sí mismos durante el registro.

#### Modo 1: Asignar Plantilla de Sitio {#mode-1-assign-site-template}

In hoc modo, clientibus non potest eligere templum cum creant computandum, sed tu definies quommodo templum debet ut in omnibus Planibus tuis utiatur.

Ad hoc facere, ad **Ultimate Multisite > Products > Edit** ire debesis.

![Edit product to assign site template](/img/config/product-site-templates.png)

Hic te ad paginam **Edit Product** ducet. Sub sectione **Product Options**, invenies tabulam **Site template** et selecta optionem **Assign Site Template** ex campo meniae (drop-down). Hoc aperiet listam templorum in hoc modo disponetur et permittit te selectum templum unum dedicatum ad productum.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### Modo 2: Eligere Templum Disponibile {#mode-2-choose-available-site-template}

In hoc modo, clientibus eligendum est in processu inscriptionis. Possunt ex templis in omnibus quae definies sub parametris producti selecti esse. Optionem habes limitare templos quibus possunt eligere sub productum selecto. Hoc permittit te habere distinctas series templorum sub producta, quod est optimum ad ostendendum distinctas funciones et operationes pro prodotto cum pretio maiore.

In pagina **Edit Product** (Edita Product). Sub **Product Options** (Opções do Produto), trova la scheda **Site template** (Modelo di Sito) e seleziona l'opzione **Choose Available Site Template** (Scegli Modello di Sito Disponibile) dal campo a tendina. Questo aprirà l'elenco dei modelli di sito disponibili e ti permetterà di selezionare il modello che desideri sia disponibile. Puoi farlo scegliendo il suo Comportamento: **Available** (Disponibile) se vuoi che il modello di sito venga incluso nell'elenco, _**Not Available**_ (Non Disponibile) se non vuoi che il modello di sito appaia come opzione e **Pre-selected** (Preselezionato) se desideri che uno dei modelli di sito elencati sia selezionato come predefinito.

![Choose available site templates with behavior options](/img/config/product-site-templates.png)

### Modalitate Predefinita: Selezione del modello di sito sul modulo di Checkout {#default-mode-site-template-selection-on-the-checkout-form}

Se vuoi che tutti i tuoi modelli di sito siano disponibili durante la registrazione, o magari non preferisci fare il lavoro extra di assegnare o specificare i modelli di sito sotto ogni prodotto che crei. Allora puoi semplicemente impostare la selezione del modello di sito sotto il tuo **Checkout Form** (Modulo di Checkout). Per farlo, vai a **Ultimate Multisite > Checkout Forms** e clicca su **Edit** (Modifica) sotto il modulo che desideri configurare.

Questo aprirà la pagina **Edit Checkout Form** (Modifica Modulo di Checkout). Trova il campo **Template Selection** (Selezione Modello) e clicca su **Edit** (Modifica) sotto di esso.

Apparirà una finestra modale. Sotto il campo **Template Sites** (Siti Modello), puoi selezionare e elencare tutti i modelli di sito che desideri siano disponibili durante la registrazione. I modelli di sito che specifichi qui saranno disponibili indipendentemente dal prodotto che l'utente seleziona.

![Template selection field in the checkout form editor](/img/config/checkout-form-template-step.png)

Sul frontend, i clienti vedono il selettore del modello durante il checkout e possono scegliere il design iniziale per il loro nuovo sito.

![Frontend template chooser during registration](/img/config/frontend-template-chooser.png)

### Opções de Modelo de Site {#site-template-options}

Existen otras funciones de modelos de sitio que puedes activar o desactivar en la configuración de Ultimate Multisite.

![Opções de modelo de site nas configurações do Ultimate Multisite](/img/config/settings-sites-templates-section.png)

#### Permitir a Trocar de Modelo (Template Switching) {#allow-template-switching}

Activar esta opción permitirá a tus clientes cambiar el modelo que elijan durante el proceso de registro después de que la cuenta y el sitio hayan sido creados. Esto es útil desde el punto de vista del cliente, ya que les permite volver a seleccionar un modelo si más tarde descubren que su elección original no era la mejor para sus necesidades particulares.

#### Permitir a los Usuarios usar su Sitio como modelos (Templates) {#allow-users-to-use-their-site-as-templates}

Dado que los usuarios de subsitios dedican tiempo a construir y diseñar su propio sitio, es posible que quieran clonarlo y usarlo como uno de los modelos disponibles al crear otro subsitio en tu red. Esta opción les permitirá lograr eso.

#### Copiar Medios en la Duplicación del Modelo (Template Duplication) {#copy-media-on-template-duplication}

Marcar esta opción copiará los medios cargados en el sitio modelo al sitio recién creado. Esto puede anularse en cada uno de los planes.

#### **Evitar que los Motores de Búsqueda indexen los Modelos de Sitio** {#prevent-search-engines-from-indexing-site-templates}

Los modelos de sitio, como se discutió en este artículo, son plantillas básicas pero siguen siendo parte de tu red, lo que significa que todavía están disponibles para que los motores de búsqueda los encuentren. Esta opción te permitirá ocultar los modelos de sitio para que los motores de búsqueda puedan indexarlos.

## Prellenar Modelos de Sitio con búsqueda y reemplazo automático {#pre-populating-site-templates-with-auto-search-and-replace}

Una de las características más potentes de Ultimate Multisite es la capacidad de añadir texto, color y campos seleccionables arbitrarios en el formulario de registro. Una vez que tenemos esos datos capturados, podemos usarlos para precargar el contenido en ciertas partes de la plantilla del sitio seleccionada. Luego, cuando se publica el nuevo sitio, Ultimate Multisite reemplazará los marcadores de posición con la información real introducida durante el registro.

Por ejemplo, si deseas obtener el nombre de la empresa de tu usuario final durante el registro y poner automáticamente el nombre de la empresa en la página de inicio. En la página de inicio de tu sitio plantilla necesitas añadir los marcadores de posición, como en la imagen de abajo (los marcadores de posición deben ir rodeados por llaves dobles: {{nombre_del_marcador_de_posición}}).

![Página de inicio con texto de marcador de posición entre llaves](/img/config/site-templates-list.png)

Luego, puedes simplemente añadir un campo de registro que coincida en tu formulario de pago para capturar esos datos. El mismo editor de formularios de pago que usas para seleccionar la plantilla te permite colocar campos personalizados junto al selector de plantillas:

![Selección de plantilla y campos de registro en el editor del formulario de pago](/img/config/checkout-form-template-step.png)

Tu cliente podrá rellenar ese campo durante el registro.

![Formulario de pago frontal con selector de plantillas](/img/config/frontend-template-chooser.png)

Ultimate Multisite luego reemplazará los marcadores de posición con los datos proporcionados por el cliente automáticamente.

![Marcadores de posición reemplazados con datos del cliente en el sitio](/img/config/site-templates-list.png)

### Resolviendo el problema de "plantilla llena de marcadores de posición" {#solving-the-template-full-of-placeholders-problem}

Todo eso es genial, pero nos encontramos con un problema feo: ahora nuestras plantillas de sitio —que nuestros clientes pueden visitar— están llenas de marcadores de posición feos que no dicen mucho.

Ademurandum hoc, optionem offerimus ut valores falsos (fake values) ad locum (placeholders) ponamus, et eos usum persequi et substituere in locis template situerum cum clienti videntur.

Ad editor contentus placeholderium potes accedere per ire ad **Ultimate Multisite > Settings > Sites**, et deinde, in sidebar, linkem **Edit Placeholders** cliquere.

![Site template settings under the Sites settings page](/img/config/settings-sites-templates-section.png)

Hoc te ad editor contentus placeholderium ducet, ubi potes addere placeholders et eos respective contentum.

![Template placeholders content editor entry point](/img/config/settings-sites-templates-section.png)
