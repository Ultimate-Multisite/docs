---
title: Formularium de cassa
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Formulari de Checkout

Formulari de Checkout sunt o modalitate ușoară și flexibilă pentru a experimenta diferite abordări atunci când încercați să convertiți noi clienți.

Ultimate Multisite 2.0 oferă un editor de Formulari de Checkout care vă permite să creați cât mai multe formulare doriți, cu domenii diferite, produse oferite, etc.

Pentru a accesa această funcție, mergeți în meniul Checkout Forms, pe bara lateral stângă.

![Checkout Forms list](/img/config/checkout-forms-list.png)

Pe această pagină puteți vedea toate formularele de checkout pe care le aveți.

Tabelul cu liste include o coloană **Status** pentru a confirma dacă fiecare formular este disponibil în prezent pentru clienți:

| Status | Înseamnă |
|---|---|
| **Active** | Formularea poate fi folosită oriunde se publică codul scurt sau pagina de înregistrare. |
| **Inactive** | Formularea este salvată, dar dezactivată. Clienții nu pot finaliza checkout cu ea până când o activați din nou. |

Folosiți coloana status înainte de a edita un flux de înregistrare public, mai ales atunci când păstrați formulare de checkout draft sau de sezon alături de cele live.

Dacă doriți să creați unul nou, mergeți doar pe Add Checkout Form în partea de sus a paginii.

Puteți selecta una dintre aceste trei opțiuni ca punct de plecare: pas singular (single step), multi-pas (multi-step) sau gol (blank). Apoi, faceți clic pentru a Mergeți la Editor.

Când alegeți **single step** sau **multi-step** ca punct de plecare, șablonul formulare include acum un câmp **Template Selection** (Selectare Șablon) prin default. Acest câmp permite clienților dumneavoastră să aleagă un șablon de site în timpul procesului de înregistrare. Puteți lăsa el acolo, îl puteți elimina sau îl puteți rearanja ca orice alt câmp în editor.

![Checkout Form editor](/img/config/checkout-form-editor.png)

Alternativ, potes formas quae iam habes editare vel duplicare per cliquem in optionibus sub nomine eius. Einde etiam options ad copiam shortcode formae vel ad deletionem formae invenies.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Visio Editoris Formae Checkout

Editor formae checkout daret tibi interface completum ad constructionem formarum registrationium tuarum. Hinc visio dispositionis editoris:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Editio Formae Checkout

Formas checkout pro diversis finibus facere possis. In hoc exemplo in forma registrationis laboramus.

Post navigationem ad editor formae checkout, dabo formae tuae nomen (quod solum ad referentiam internam usum erit) et slug (utilizatus ad creationem shortcodes, ad exemplum).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Formae ex stepbus et campi constituuntur. Novum stepum addere potes cliquando in Add New Checkout Step.

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

In primo tabulae fenestra modalem, contentum step tuae formae plenare. Dabo ei ID, nomen et descriptionem. Haec item in genere internis usantur.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

Postea, visibilitatem step definas. Inter "Semper ostendere", "Solum ad utentes logged in ostendere" vel "Solum ad hōstes ostendere" eligere potes.

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

Ultimo, stilum step configura. Haec sunt campi optionalia.

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

Nunc, tempus est ad additionem campiorum in primo step nostro. Suffice cliqua ad Add New Field et typum sectionis eligere quod desideras.

![Step del modulo de pago con campos](/img/config/checkout-form-step-with-fields.png)

Cada campo tiene parámetros diferentes que deben llenarse. Para esta primera entrada, seleccionaremos el campo "Username" (Nombre de usuario).

![Menú desplegable de selección de tipo de campo](/img/config/checkout-form-field-type-dropdown.png)

![Configuración de contenido del campo Username](/img/config/checkout-form-username-content.png)

![Configuración de visibilidad del campo Username](/img/config/checkout-form-username-visibility.png)

![Configuración de estilo del campo Username](/img/config/checkout-form-username-style.png)

Puedes añadir tantos pasos y campos como necesites. Para mostrar tus productos para que los clientes elijan uno, usa el campo Pricing Table (Tabla de precios). Si quieres permitir que tus clientes elijan una plantilla, añade el campo Template Selection (Selección de plantillas). Y así sucesivamente.

![Diálogo Añadir Nuevo Campo](/img/config/checkout-form-add-field-dialog.png)

_**Nota:** username, email, password, site title (título del sitio), site URL (URL del sitio), order summary (resumen del pedido), payment (pago) y submit button (botón de enviar) son campos obligatorios para crear un formulario de pago._

Mientras trabajas en tu formulario de pago, siempre puedes usar el botón Preview (Vista previa) para ver cómo lo verá tus clientes. También puedes alternar entre la vista como usuario existente o visitante.

![Botón de vista previa del formulario de pago](/img/config/checkout-form-preview-button.png)

![Modal de vista previa del formulario de pago](/img/config/checkout-form-preview-modal.png)

Finalmente, en Advanced Options (Opciones avanzadas) puedes configurar el mensaje para la página "Thank You" (Gracias), añadir snippets para rastrear conversiones, añadir CSS personalizado a tu formulario de pago o restringirlo a ciertos países.

![Opciones avanzadas](/img/config/checkout-form-advanced.png)

También puedes activar o desactivar manualmente tu formulario de pago cambiando esta opción en la columna derecha, o eliminarlo permanentemente.

![Interruptor activo](/img/config/checkout-form-active.png)

Ad rem formam deletum, clica in optionem deleti in actionibus formarum:

![Option de deletionis formae](/img/config/checkout-form-delete.png)

Noli oblivisci te salvare formam tuam!

![Pulsus salvandi](/img/config/checkout-form-save.png)

Ad obtinendum shortcode formae, clica in Genera Shortcode et copia rezultatum shown in finestra modal.

![Pulsus salvandi cum shortcode](/img/config/checkout-form-save.png)

### Campo Tabulae Precursorum (Pricing Table Field)

Campo **Tabulae Precursorum** (Pricing Table) tuos productos in formam checkout ostendit ut clienti planem eligant. Cum hoc campo edes, diversas optiones configurare possuris:

![Configuratio campi tabulae precursorum](/img/config/pricing-table-field-settings.png)

Hoc est quommodo tabula precursorum appareat in formam registrationis frontend:

![Tabula precursorum checkout frontend](/img/config/frontend-checkout-pricing-table.png)

  * **Products**: Eligere quae productos ostenduri sunt et ordinem quo apparunt.
  * **Force Different Durations** (Forci Durationes Diversas): Cum activum, omnia producta ostenduntur sine quaerendo si habent variationem precii ad periodum facturandi hodiernum selectum. Cum inofficiatum (default), producta sine variatione ad periodum selectum occunduntur.
    ![Option forci durationum tabulae precursorum](/img/config/pricing-table-force-durations.png)
  * **Hide when Pre-Selected** (Occultare cum Pra-Selectum): Tabulam precursorum occultat cum planum iam selectum sit per URL (e.g. `/register/premium`).
  * **Pricing Table Template**: Eligere templum visuum ad tabulam precursorum (Lista Simplex, Legacy, etc.).

Si productum in Tabulam Precursorum addis antequam forma includat campos necessarios ad completum fluxum checkout huius producti, editor nunc advertentiam ostendit. Hoc advertentiam ut usas ad additionem campi requisiti missingi ante publicationem vel salvandum mutationes formae registrationis vivendi.

### Aditio Interruttore Selectio Periodi

Si habes configurato [Price Variations](creating-your-first-subscription-product#price-variations) in productis tuis (e.g., pretium mensuale et annuum), potes adde **Period Selection** in formam tuae checkout. Hoc campo ostendit un interruttorem qui permittit clientes mutare inter perioda facturationis, et tabula pretius se actualizatur dynamice in tempore reali.

#### Gradus 1: Configura Price Variations in Productibus Tuendis

Ante additionem campi Period Selection, assura te quod producta tua habent price variations configuratas. Ipse ad **Ultimate Multisite > Products** adde, edit productum, et ad tabulam **Price Variations** naviga ut perioda facturationis alterni addas (e.g., Annuum cum pretiis concessis).

![Tabula Price Variations in productore](/img/config/product-price-variations-tab.png)

#### Gradus 2: Adde Field Period Selection ad Formam Tuam Checkout

1. Ad **Ultimate Multisite > Checkout Forms** adde et edit formam tuam checkout.

2. Descendi ad stapem qui tuum field **Pricing Table** habet et clica in **Add new Field**.

3. In dialogu selection typus campi, clica in **Period Select**.

![Dialogus Add New Field ostendens Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Configura perioda options. Omnis optio necesse:
   * **Duration**: Numerus (e.g., `1`)
   * **Duration unit**: Typus periodi (Dies, Semanas, Mensiae, vel Annii)
   * **Label**: Textum quod clienti viderunt (e.g., "Mensuale", "Annuum")

5. Clīca in **+ Add Option** ad options periodos pluri addere. Haec optiones debent concordare cum price variations quae in productis tuis configuratas sunt.

![Configuratio field Period Selection](/img/config/period-selection-field-settings.png)

6. Elig **Period Selector Template** (Clean est default, qui selector simplicem stylum renderet ad CSS customum paratum).

7. Clicare **Save Field**.

#### Paso 3: Coloca el Campo Arriba de la Tabla de Precios

Para que los usuarios tengan la mejor experiencia, asegúrate de que el campo Selección de Periodo aparezca **antes** del campo Tabla de Precios en tu paso de pago (checkout). Puedes arrastrar campos para cambiar su orden en el editor del formulario de pago. De esta manera, los clientes primero eligen un periodo de facturación y luego ven los precios para ese periodo.

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### Cómo Funciona en el Frontend

Una vez configurado, los clientes que visiten tu página de registro verán el selector de periodo encima de la tabla de precios. Cuando hagan clic en un periodo de facturación diferente:

  * La tabla de precios se actualiza al instante para mostrar los precios del periodo seleccionado (no es necesario recargar la página).
  * Si **Force Different Durations** está desactivado en el campo Tabla de Precios, los productos sin variación de precio para el periodo seleccionado se ocultarán.
  * Si **Force Different Durations** está activado, todos los productos seguirán visibles incluso si no tienen una variación para el periodo seleccionado (mostrarán su precio predeterminado).

#### Preseleccionar un Periodo de Facturación a través de la URL

También puedes preseleccionar un producto y un periodo de facturación mediante la URL. Ultimate Multisite soporta estos patrones de URL:

  * `/register/premium` — Preselecciona solo el producto "Premium"
  * `/register/premium/12` — Preselecciona el producto y la duración de 12 meses
  * `/register/premium/1/year` — Preselecciona el producto con una duración de 1 año

### El Campo de Selección de Plantilla (Template Selection Field)

El campo **Selección de Plantilla** permite a los clientes elegir una plantilla de sitio durante el pago. Ahora está incluido por defecto en las plantillas de formulario de pago de paso único y de múltiples pasos añadidas en Ultimate Multisite v2.6.1.

#### Añadir el campo manualmente

Si trabajas con un formulario creado antes de la versión v2.6.1, o que se inició desde una plantilla en blanco:

1. Ve a **Ultimate Multisite > Checkout Forms** y edita tu formulario de pago (checkout form).
2. En el paso donde se recopilan los detalles del sitio, haz clic en **Add new Field** (Añadir nuevo campo).
3. Selecciona **Template Selection** (Selección de plantilla) desde el diálogo de tipo de campo.
4. Configura el campo:
   - **Label** (Etiqueta) — El encabezado que ven los clientes encima de la cuadrícula de plantillas (ejemplo: "Elige una plantilla de sitio").
   - **Required** (Requerido) — Si los clientes deben seleccionar una plantilla antes de continuar.

#### Cómo funciona

Cuando un cliente elige una plantilla durante el pago, Ultimate Multisite la utiliza al configurar su nuevo sitio. Las plantillas mostradas provienen de tu lista de **Site Templates** (Plantillas de Sitio) (**Ultimate Multisite > Site Templates**). Solo aparecen aquí las plantillas marcadas como disponibles para los clientes.

### Dominios base del formulario de pago (Checkout-form base domains)

Ultimate Multisite v2.13.0 trata los dominios configurados en los campos **Site URL** del formulario de pago como dominios base de red. Utiliza la configuración de dominio disponible del campo cuando quieras que los clientes creen sitios bajo uno o más dominios de registro compartidos, como `example.com` y `sites.example.com`.

Los dominios base del formulario de pago compartidos no se tratan como mapeos de dominio personalizado por sitio individual. Cuando un cliente crea un sitio en una subcarpeta sobre cualquiera de esas bases, Ultimate Multisite no crea un registro de dominio mapeado que haga que el host compartido pertenezca solo a ese sitio. El host compartido permanece disponible para sitios hermanos que usen la misma base del formulario de pago.

Mantén los dominios personalizados para hosts mapeados por cliente individual, como `customer-example.com`. Mantén los dominios base del formulario de pago para hosts de registro compartidos que muchos sitios puedan usar.

#### Eliminar el campo

Si no ofreces plantillas de sitio, elimina el campo Selección de Plantilla de tu formulario. Los clientes recibirán la plantilla predeterminada que esté configurada en **Ultimate Multisite > Settings > Site Templates**.
