---
title: Forms de pagament
sidebar_position: 19
_i18n_hash: b7b1bf89a2997f8916c9f3a3a2cb255b
---
# Formularis de Caixa

Els formularis de caixa són una manera fàcil i flexible de provar diferents aproximacions quan es tracta de convertir clients nous.

Ultimate Multisite 2.0 ofereix un editor de Formulari de Caixa que et permet crear tant formularis com desitgeu, amb diferents camps, productes disponibles, etc.

Per accedir a aquesta funció, dirigeix-te al menú Formularis de Caixa, a la barra lateral esquerra.

![Checkout Forms list](/img/config/checkout-forms-list.png)

En aquesta pàgina, pots veure tots els formularis de caixa que tens.

La taula de llista inclou una columna de **Estat** perquè puguis confirmar si cada formulari està actualment disponible per als clients:

| Estat | Significat |
|---|---|
| **Actiu** | El formulari es pot utilitzar on sigui que es publiqui el seu shortcode o pàgina d'inscripció. |
| **Inactiu** | El formulari està guardat però deshabilitat. Els clients no poden completar la caixa amb ell fins que no el actives de nou. |

Utilitza la columna d'estat abans d'editar un flux d'inscripció públic, especialment quan mantingues formularis de caixa de brou o de temporada juntament amb els teus formularis actius.

Si vols crear-ne un nou, només fes clic a Afegir Formulari de Caixa en la part superior de la pàgina.

Pots seleccionar una de aquestes tres opcions com a punt de partida: passa única, passa múltiple o buit. Després, fes clic a Anar a l'Editor.

Quan escels **passa única** o **passa múltiple** com a punt de partida, la plantilla del formulari inclou ara un camp de **Selecció de Plantilla** per defecte. Aquest camp permet als teus clients triar una plantilla de site durant el procés d'inscripció. Pots deixar-lo, eliminar-lo o repositionar-lo com qualsevol altre camp de l'editor.

![Checkout Form editor](/img/config/checkout-form-editor.png)

Alternativament, pots editar o duplicar els formularis que ja tens fent clic a les opcions que es troben per sota del seu nom. Allà, també trobaràs les opcions per copiar el shortcode del formulari o per eliminar-lo.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Resum de l'Editor de Formulari de Caixa

L'editor de formulari de caixa proporciona una interfície completa per construir els teus formularis d'inscripció. Aquí tens un resum de la disposició de l'editor:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Edició d'un Formulari de Caixa

Pots crear formularis de caixa per a diferents propòsits. En aquest exemple, treballarem amb un formulari d'inscripció.

Després de navegar a l'editor de formulari de caixa, només-li un nom (que es trigarà per referència interna només) i un slug (utilitzat per crear shortcodes, per exemple).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Els formularis es construeixen amb passes i camps. Pots afegir una passa nova fent clic a Afegir Nova Passa de Caixa.

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

A la primera pestanya del mòdal, omple el contingut de la passa del teu formulari. Donyl-li un ID, un nom i una descripció. Aquests elements es utilitzen majoritàriament a nivell intern.

![Checkout form step](/img/config/checkout-form-step.png)

A més, configura la visibilitat de la passa. Pots triar entre "Mostrar sempre", "Mostrar només per a usuaris connectats" o "Mostrar només per a convidats".

![Checkout form step](/img/config/checkout-form-step.png)

Finalment, configura l'estil de la passa. Aquests són camps opcionals.

![Checkout form step](/img/config/checkout-form-step.png)

Ara, és hora d'afegir camps a la nostra primera passa. Només fes clic a Afegir Camp Nou i selecciona el tipus de secció que vols.

![Checkout form step with fields](/img/config/checkout-form-step.png)

Cada camp té diferents paràmetres que omplir. Per a aquesta primera entrada, seleccionarem el camp "Username".

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

Pots afegir tant passes com camps com necessitis. Per mostrar els teus productes perquè els teus clients triarin-ne un, utilitza el camp Taula de Preus. Si vols deixar que els teus clients triarin una plantilla, afegeix el camp Selecció de Plantilla. I així va continuant.

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**Nota:** username, email, password, site title, site URL, order summary, payment i botó de submit són camps obligatoris per crear un formulari de caixa._

Mentre treballes en el teu formulari de caixa, pots utilitzar sempre el botó Previsualitzar per veure com veurà el formulari els teus clients. També pots alternar entre veure-ho com un usuaris existent o com un visitant.

![Checkout Form save](/img/config/checkout-form-save.png)

![Checkout Form editor](/img/config/checkout-form-editor.png)

Finalment, en Opcions Avançades pots configurar el missatge per a la pàgina de "Gràcies", afegir snippets per rastrejar conversió, afegir CSS personalitzat al teu formulari de caixa o restringir-lo a determinats països.

![Advanced Options](/img/config/checkout-form-advanced.png)

També pots activar o desactivar manualment el teu formulari de caixa amb el botó de toggle de la columna dretangana, o eliminar el formulari de manera permanent.

![Active toggle](/img/config/checkout-form-active.png)

Per eliminar un formulari, fes clic a l'opció de eliminar en les accions del formulari:

![Checkout form delete option](/img/config/checkout-form-delete.png)

No oblidis de guardar el teu formulari de caixa!

![Save button](/img/config/checkout-form-save.png)

Per obtenir el shortcode del teu formulari, fes clic a Generar Shortcode i copia el resultat que es mostra al mòdal.

![Save button with shortcode](/img/config/checkout-form-save.png)

### El Camp Taula de Preus

El camp **Taula de Preus** mostra els teus productes al formulari de caixa perquè els clients puguin triar un pla. Quan edites aquest camp, pots configurar diverses opcions:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

Així és com apareix la taula de preus a la pàgina d'inscripció del frontend:

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

* **Productes**: Selecciona quins productes mostrar i l'ordre en què apareixen.
* **Forçar Durades Diferents**: Quan està activat, es mostren tots els productes independentment de si tenen una variació de preu que coincideixi amb el període de facturació seleccionat. Quan està desactivat (defecto), els productes sense variació per el període seleccionat es nescaturen.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
* **Nescatur quan està Pre-Seleccionat**: Nesc el taula de preus quan un pla ja ha estat seleccionat a través de l'URL (ex. `/register/premium`).
* **Plantilla de Taula de Preus**: Escolle la plantilla visual per a la taula de preus (Llista Simple, Legacy, etc.).

Si afegeu un producte a la Taula de Preus abans que el formulari inclogui els camps necessaris per completar el flux de caixa d'aquest producte, l'editor mostra avís. Utilitza l'avís per afegir el camp obligatori que falta abans de publicar o guardar canvis per un formulari d'inscripció actiu.

### Afegir un Toggle de Selecció de Període

Si has configurat [Variacions de Preu](creating-your-first-subscription-product#price-variations) als teus productes (per exemple, preus mensuals i anuals), pots afegir un camp de **Selecció de Període** al teu formulari de caixa. Aquest camp mostra un toggle que permet als clients canviar entre períodes de facturació, i la taula de preus s'actualitza dinàmicament en temps real.

#### Pas 1: Configurar Variacions de Preu als teus Productes

Abans d'afegir el camp de Selecció de Període, assegura't que els teus productes tenen variacions de preu configurades. Dirigeu-vos a **Ultimate Multisite > Productes**, editeu un producte i navegau a la pestanya **Variacions de Preu** per afegir períodes de facturació alternatius (ex. Anual a un preu reduït).

![Price Variations tab on a product](/img/config/product-price-variations-tab.png)

#### Pas 2: Afegir el Camp de Selecció de Període al teu Formulari de Caixa

1. Dirigeu-vos a **Ultimate Multisite > Formularis de Caixa** i editeu el vostre formulari de caixa.

2. Descolla fins a la passa que conté el vostre camp **Taula de Preus** i fes clic a Afegir Camp Nou.

3. Al diàleg de selecció de tipus de camp, fes clic a Selecció de Període.

![Add New Field dialog showing Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Configura les opcions de període. Cada opció necessita:
   * **Durada**: El nombre (ex. `1`)
   * **Unitat de durada**: El tipus de període (Dies, Setmanes, Mesos o Anys)
   * **Etiqueta**: El text que veurà el client (ex. "Mensual", "Anual")

5. Fes clic a + Afegir Opció per afegir més eleccions de període. Aquestes opcions han de fer match amb les variacions de preu que has configurat als teus productes.

![Period Selection field settings](/img/config/period-selection-field-settings.png)

També pots configurar les opcions del camp directament:

![Period selection field options](/img/config/period-selection-field-options.png)

6. Escolle una **Plantilla de Selecció de Període** (Clean és el defecte, que renderitza un selector estilitzat senzill preparat per CSS personalitzat).

7. Fes clic a Guardar Camp.

#### Pas 3: Posicionar el Camp per sobre la Taula de Preus

Per la millor experiència de l'usuari, assegura't que el camp de Selecció de Període aparegui **abans** del camp Taula de Preus a la teva passa de caixa. Pots arrastrar camps per reordenar-los a l'editor del formulari de caixa. Així, els clients trien primer un període de facturació i després veuen els preus per aquest període.

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### Com funciona a la pàgina frontal

Una vegada configurat, els clients que visitin la teva pàgina d'inscripció veuràn el selector de període per sobre de la taula de preus. Quan fes clic a un període de facturació diferent:

* La taula de preus s'actualitza instantàni per mostrar els preus del període seleccionat (no és necessari recarregar la pàgina).
* Si **Forçar Durades Diferents** està desactivat al camp Taula de Preus, els productes sense variació de preu per el període seleccionat es nescaturen.
* Si **Forçar Durades Diferents** està activat, tots els productes es mantenen visibles encara que no tinguin una variació per el període seleccionat (mostraran el seu preu per defecte).

#### Pre-seleccionar un Període de Facturació a través de l'URL

També pots pre-seleccionar un producte i un període de facturació a través de l'URL. Ultimate Multisite suporta aquests patrons d'URL:

* `/register/premium` — Pre-selecciona només el producte "Premium"
* `/register/premium/12` — Pre-selecciona el producte i la durada de 12 mesos
* `/register/premium/1/year` — Pre-selecciona el producte amb una durada d'1 any

### El Camp Selecció de Plantilla

El camp **Selecció de Plantilla** permet als clients triar una plantilla de site durant la caixa. Ara està inclòs per defecte en les plantilles de formulari de caixa de **passa única** i **passa múltiple** afegides en Ultimate Multisite v2.6.1.

#### Afegir el camp manualment

Si estàs treballant amb un formulari que es va crear abans de v2.6.1, o que va iniciar-se des d'una plantilla buida:

1. Dirigeu-vos a **Ultimate Multisite > Formularis de Caixa** i editeu el vostre formulari de caixa.
2. A la passa on es recullen els detalls del site, fes clic a Afegir Camp Nou.
3. Selecciona **Selecció de Plantilla** del diàleg de tipus de camp.
4. Configura el camp:
   - **Etiqueta** — L'encabezament que veurà el client sobre la quadrícula de plantilles (ex. "Tria una plantilla de site").
   - **Obligatori** — Si els clients han de seleccionar una plantilla abans de continuar.

#### Com funciona

Quan un client tria una plantilla durant la caixa, Ultimate Multisite l'utilitza quan proporciona el seu nou site. Les plantilles mostrades provenen de la teva llista de **Plantilles de Site** (**Ultimate Multisite > Plantilles de Site**). Només apareixen aquí les plantilles marcades com disponibles per als clients.

#### Eliminar el camp

Si no ofereixes plantilles de site, elimina el camp de Selecció de Plantilla del teu formulari. Els clients rebreu qualsevol plantilla de defecte que estigui configurada sota **Ultimate Multisite > Configuració > Plantilles de Site**.
