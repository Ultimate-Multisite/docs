---
title: Formularis de finalització de compra
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Formularis de pagament {#checkout-forms}

Els formularis de pagament són una manera fàcil i flexible d’experimentar amb diferents enfocaments quan intentes convertir clients nous.

Ultimate Multisite 2.0 ofereix un editor de formularis de pagament que et permet crear tants formularis com vulguis, amb diferents camps, productes en oferta, etc.

Per accedir a aquesta funció, ves al menú Formularis de pagament, a la barra lateral esquerra.

![Llista de formularis de pagament](/img/config/checkout-forms-list.png)

En aquesta pàgina, pots veure tots els formularis de pagament que tens.

La taula de la llista inclou una columna **Estat** perquè puguis confirmar si cada formulari està disponible actualment per als clients:

| Estat | Significat |
|---|---|
| **Actiu** | El formulari es pot utilitzar en qualsevol lloc on s’hagi publicat el seu shortcode o la seva pàgina de registre. |
| **Inactiu** | El formulari està desat però desactivat. Els clients no poden completar el pagament amb aquest formulari fins que el tornis a activar. |

Utilitza la columna d’estat abans d’editar un flux de registre públic, especialment quan mantens formularis de pagament d’esborrany o de temporada al costat dels teus formularis actius.

Si en vols crear un de nou, només has de fer clic a Afegeix un formulari de pagament a la part superior de la pàgina.

Pots seleccionar una d’aquestes tres opcions com a punt de partida: un sol pas, diversos passos o en blanc. Després, fes clic per anar a l’editor.

Quan tries **un sol pas** o **diversos passos** com a punt de partida, la plantilla del formulari ara inclou per defecte un camp **Selecció de plantilla**. Aquest camp permet als teus clients triar una plantilla de lloc durant el procés de registre. Pots deixar-lo al seu lloc, eliminar-lo o reposicionar-lo com qualsevol altre camp de l’editor.

![Editor de formularis de pagament](/img/config/checkout-form-editor.png)

Alternativament, pots editar o duplicar els formularis que ja tens fent clic a les opcions que hi ha sota el seu nom. Allà també trobaràs les opcions per copiar el shortcode del formulari o eliminar el formulari.

![Accions en passar el cursor sobre el formulari de pagament](/img/config/checkout-form-hover-actions.png)

#### Visió general de l’editor de formularis de pagament {#checkout-form-editor-overview}

L’editor de formularis de pagament proporciona una interfície completa per crear els teus formularis de registre. Aquí tens una visió general de la disposició de l’editor:

![Visió general de l’editor de formularis de pagament](/img/config/checkout-form-editor-overview.png)

### Edició d’un formulari de pagament {#editing-a-checkout-form}

Pots crear formularis de pagament per a diferents finalitats. En aquest exemple treballarem en un formulari de registre.

Després d’anar a l’editor de formularis de pagament, posa un nom al teu formulari (que s’utilitzarà només com a referència interna) i un slug (utilitzat per crear shortcakes, per exemple).

![Editor de formularis de pagament](/img/config/checkout-form-editor.png)

Els formularis estan formats per passos i camps. Pots afegir un pas nou fent clic a Afegeix un pas de pagament nou.

![Afegeix un pas de pagament nou](/img/config/checkout-form-add-step.png)

A la primera pestanya de la finestra modal, emplena el contingut del pas del teu formulari. Dona-li un ID, un nom i una descripció. Aquests elements s’utilitzen principalment internament.

![Pestanya de contingut del pas del formulari de pagament](/img/config/checkout-form-step-content.png)

A continuació, configura la visibilitat del pas. Pots triar entre "Mostra sempre", "Mostra només per a usuaris amb sessió iniciada" o "Mostra només per a convidats".

![Pestanya de visibilitat del pas del formulari de pagament](/img/config/checkout-form-step-visibility.png)

Finalment, configura l’estil del pas. Aquests camps són opcionals.

![Pestanya d’estil del pas del formulari de pagament](/img/config/checkout-form-step-style.png)

Ara és el moment d’afegir camps al nostre primer pas. Només has de fer clic a Afegeix un camp nou i seleccionar el tipus de secció que vols.

![Pas del formulari de pagament amb camps](/img/config/checkout-form-step-with-fields.png)

Cada camp té diferents paràmetres per emplenar. Per a aquesta primera entrada, seleccionarem el camp "Nom d’usuari".

![Desplegable de selecció del tipus de camp](/img/config/checkout-form-field-type-dropdown.png)

![Configuració de contingut del camp Nom d’usuari](/img/config/checkout-form-username-content.png)

![Configuració de visibilitat del camp Nom d’usuari](/img/config/checkout-form-username-visibility.png)

![Configuració d’estil del camp Nom d’usuari](/img/config/checkout-form-username-style.png)

Pots afegir tants passos i camps com necessitis. Per mostrar els teus productes perquè els teus clients en triïn un, utilitza el camp Taula de preus. Si vols permetre que els teus clients triïn una plantilla, afegeix el camp Selecció de plantilla. I així successivament.

![Diàleg Afegeix un camp nou](/img/config/checkout-form-add-field-dialog.png)

_**Nota:** el nom d’usuari, el correu electrònic, la contrasenya, el títol del lloc, l’URL del lloc, el resum de la comanda, el pagament i el botó d’enviament són camps obligatoris per crear un formulari de pagament._

Mentre treballes en el teu formulari de pagament, sempre pots utilitzar el botó Previsualitza per veure com veuran el formulari els teus clients. També pots alternar entre veure’l com un usuari existent o com un visitant

![Botó de previsualització del formulari de pagament](/img/config/checkout-form-preview-button.png)

![Modal de previsualització del formulari de pagament](/img/config/checkout-form-preview-modal.png)

Finalment, a Opcions avançades pots configurar el missatge de la pàgina "Gràcies", afegir fragments per fer el seguiment de conversions, afegir CSS personalitzat al teu formulari de pagament o restringir-lo a determinats països.

![Opcions avançades](/img/config/checkout-form-advanced.png)

També pots activar o desactivar manualment el teu formulari de pagament alternant aquesta opció a la columna dreta, o eliminar el formulari permanentment.

![Commutador actiu](/img/config/checkout-form-active.png)

Per eliminar un formulari, fes clic a l’opció d’eliminar a les accions del formulari:

![Opció d’eliminar formulari de pagament](/img/config/checkout-form-delete.png)

No t’oblidis de desar el teu formulari de pagament!

![Botó Desa](/img/config/checkout-form-save.png)

Per obtenir el shortcode del teu formulari, fes clic a Genera shortcode i copia el resultat que es mostra a la finestra modal.

![Botó Desa amb shortcode](/img/config/checkout-form-save.png)

### El camp Taula de preus {#the-pricing-table-field}

El camp **Taula de preus** mostra els teus productes al formulari de pagament perquè els clients puguin triar un pla. Quan edites aquest camp, pots configurar diverses opcions:

![Configuració del camp Taula de preus](/img/config/pricing-table-field-settings.png)

Així és com apareix la taula de preus al formulari de registre del frontend:

![Taula de preus del checkout del frontend](/img/config/frontend-checkout-pricing-table.png)

  * **Productes**: Seleccioneu quins productes es mostren i l’ordre en què apareixen.
  * **Força durades diferents**: Quan està activat, es mostren tots els productes independentment de si tenen una variació de preu coincident per al període de facturació seleccionat actualment. Quan està desactivat (per defecte), els productes sense una variació per al període seleccionat s’oculten.
    ![Opció de forçar durades a la taula de preus](/img/config/pricing-table-force-durations.png)
  * **Amaga quan estigui preseleccionat**: Amaga la taula de preus quan ja s’ha seleccionat un pla mitjançant l’URL (p. ex. `/register/premium`).
  * **Plantilla de la taula de preus**: Trieu la plantilla visual per a la taula de preus (Llista simple, Llegat, etc.).

Si afegiu un producte a la taula de preus abans que el formulari inclogui els camps necessaris per completar el flux de checkout d’aquest producte, l’editor ara mostra un avís. Feu servir l’avís per afegir el camp obligatori que falta abans de publicar o desar canvis per a un formulari de registre actiu.

### Afegir un commutador de selecció de període {#adding-a-period-selection-toggle}

Si heu configurat [Variacions de preu](creating-your-first-subscription-product#price-variations) als vostres productes (p. ex. preus mensuals i anuals), podeu afegir un camp de **Selecció de període** al vostre formulari de checkout. Aquest camp mostra un commutador que permet als clients canviar entre períodes de facturació, i la taula de preus s’actualitza dinàmicament en temps real.

#### Pas 1: Configureu les variacions de preu als vostres productes {#step-1-set-up-price-variations-on-your-products}

Abans d’afegir el camp de selecció de període, assegureu-vos que els vostres productes tinguin variacions de preu configurades. Aneu a **Ultimate Multisite > Products**, editeu un producte i navegueu a la pestanya **Variacions de preu** per afegir períodes de facturació alternatius (p. ex. Anual amb un preu amb descompte).

![Pestanya de variacions de preu en un producte](/img/config/product-price-variations-tab.png)

#### Pas 2: Afegiu el camp de selecció de període al vostre formulari de checkout {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. Aneu a **Ultimate Multisite > Checkout Forms** i editeu el vostre formulari de checkout.

2. Desplaceu-vos fins al pas que conté el vostre camp de **Taula de preus** i feu clic a **Afegeix un camp nou**.

3. Al diàleg de selecció del tipus de camp, feu clic a **Selecció de període**.

![Diàleg Afegeix un camp nou que mostra Selecció de període](/img/config/checkout-form-add-field-dialog.png)

4. Configureu les opcions de període. Cada opció necessita:
   * **Durada**: El número (p. ex. `1`)
   * **Unitat de durada**: El tipus de període (dies, setmanes, mesos o anys)
   * **Etiqueta**: El text que veuran els clients (p. ex. "Mensual", "Anual")

5. Feu clic a **+ Afegeix una opció** per afegir més opcions de període. Aquestes opcions han de coincidir amb les variacions de preu que heu configurat als vostres productes.

![Configuració del camp de selecció de període](/img/config/period-selection-field-settings.png)

6. Trieu una **Plantilla del selector de període** (Clean és la predeterminada, que renderitza un selector senzill amb estil, preparat per a CSS personalitzat).

7. Feu clic a **Desa el camp**.

#### Pas 3: Col·loqueu el camp damunt de la taula de preus {#step-3-position-the-field-above-the-pricing-table}

Per a la millor experiència d’usuari, assegureu-vos que el camp de selecció de període aparegui **abans** del camp de taula de preus al vostre pas de checkout. Podeu arrossegar els camps per reordenar-los a l’editor del formulari de checkout. D’aquesta manera, els clients primer trien un període de facturació i després veuen els preus per a aquell període.

![Editor del formulari de checkout que mostra l’ordre dels camps](/img/config/checkout-form-editor-with-fields.png)

#### Com funciona al frontend {#how-it-works-on-the-frontend}

Un cop configurat, els clients que visitin la vostra pàgina de registre veuran el selector de període damunt de la taula de preus. Quan facin clic en un període de facturació diferent:

  * La taula de preus s’actualitza instantàniament per mostrar els preus del període seleccionat (no cal recarregar la pàgina).
  * Si **Força durades diferents** està desactivat al camp de taula de preus, els productes sense una variació de preu per al període seleccionat s’ocultaran.
  * Si **Força durades diferents** està activat, tots els productes romanen visibles encara que no tinguin cap variació per al període seleccionat (mostraran el seu preu predeterminat).

#### Preseleccionar un període de facturació mitjançant l’URL {#pre-selecting-a-billing-period-via-url}

També podeu preseleccionar un producte i un període de facturació a través de l’URL. Ultimate Multisite admet aquests patrons d’URL:

  * `/register/premium` — Preselecciona només el producte "Premium"
  * `/register/premium/12` — Preselecciona el producte i una durada de 12 mesos
  * `/register/premium/1/year` — Preselecciona el producte amb una durada d’1 any

### El camp de selecció de plantilla {#the-template-selection-field}

El camp de **Selecció de plantilla** permet als clients triar una plantilla de lloc durant el checkout. Ara s’inclou per defecte a les plantilles de formulari de checkout **d’un sol pas** i **de diversos passos** afegides a Ultimate Multisite v2.6.1.

#### Afegir el camp manualment {#adding-the-field-manually}

Si treballeu amb un formulari que es va crear abans de la v2.6.1, o que es va iniciar des d’una plantilla en blanc:

1. Aneu a **Ultimate Multisite > Checkout Forms** i editeu el vostre formulari de checkout.
2. Al pas on es recopilen els detalls del lloc, feu clic a **Afegeix un camp nou**.
3. Seleccioneu **Selecció de plantilla** al diàleg de tipus de camp.
4. Configureu el camp:
   - **Etiqueta** — L’encapçalament que els clients veuen damunt de la quadrícula de plantilles (p. ex. "Trieu una plantilla de lloc").
   - **Obligatori** — Si els clients han de seleccionar una plantilla abans de continuar.

#### Com funciona {#how-it-works}

Quan un client tria una plantilla durant el checkout, Ultimate Multisite la fa servir en aprovisionar el seu lloc nou. Les plantilles mostrades provenen de la vostra llista de **Plantilles de lloc** (**Ultimate Multisite > Site Templates**). Aquí només apareixen les plantilles marcades com a disponibles per als clients.

### Dominis base del formulari de checkout {#checkout-form-base-domains}

Ultimate Multisite v2.13.0 tracta els dominis configurats als camps **Site URL** del formulari de checkout com a dominis base de la xarxa. Feu servir la configuració de dominis disponibles del camp quan vulgueu que els clients creïn llocs sota un o més dominis de registre compartits, com ara `example.com` i `sites.example.com`.

Els dominis base de formulari de checkout compartits no es tracten com a assignacions de domini personalitzat per lloc. Quan un client crea un lloc en un subdirectori en una d’aquestes bases, Ultimate Multisite no crea cap registre de domini assignat que faci que l’amfitrió compartit pertanyi només a aquell lloc. L’amfitrió compartit continua disponible per a llocs germans que utilitzen la mateixa base de formulari de checkout.

Mantén els dominis personalitzats per a amfitrions assignats per client, com ara `customer-example.com`. Mantén els dominis base de formulari de checkout per a amfitrions de registre compartits que molts llocs poden utilitzar.

#### Eliminació del camp {#removing-the-field}

Si no ofereixes plantilles de lloc, elimina el camp Selecció de plantilla del teu formulari. Aleshores els clients rebran la plantilla per defecte que estigui configurada a **Ultimate Multisite > Settings > Site Templates**.
