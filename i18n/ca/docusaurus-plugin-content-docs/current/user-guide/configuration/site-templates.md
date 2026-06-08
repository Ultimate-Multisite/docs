---
title: Plantilles de lloc
sidebar_position: 4
_i18n_hash: da303a4b11e2b54bb7892c08b88a4d24
---
# Templates de Site (v2)

_**NOTA: Aquest article es refereix a la versió 2.x d'Ultimate Multisite. Si utilitzeu la versió 1.x,**_ **consulti aquest article** _**.**_

El nostre objectiu quan creem una xarxa premium amb Ultimate Multisite és automatitzar el màxim nombre de processos possible, alhora que proporcionem als nostres clients flexibilitat i diferents opcions de selecció quan creen els seus llocs web. Una manera fàcil de aconseguir aquest equilibri és utilitzar la funcionalitat de Site Templates (Templates de Site) d'Ultimate Multisite.

## Què és un Site Template?

Com que el nom ho indica, un Site Template és un site base (boilerplate) que es pot utilitzar com a punt de partida quan es creen nous sites a la vostra xarxa.

Això significa que podeu crear un site base, activar diferents plugins, configurar un tema actiu i personalitzar-lo com desitgeu. Després, quan el vostre client crei un compte nou, en lloc de rebre un site estàndard de WordPress sense contingut significatiu, rebran una còpia del vostre site base amb totes les personalitzacions i el contingut ja posat.

Són un aspecte fantàstic, però com puc crear un nou Site Template? És tan senzill com es pot imaginar.

## Creació i edició d'un nou Site Template

Els Site Templates són simplement sites normals de la vostra xarxa. Per crear un nou template, només ha de fer-se que vagi a **Network Admin > Ultimate Multisite > Sites > Add Site**.

**![Add site button in the Sites list page](/img/config/site-templates-list.png)**

Aquest accionar obrirà una finestra modal on li demanarà el **Site title, Site Domain/path** i **Site type**. A la caixa desplegable **Site Type**, assegureu-vos de seleccionar **Site Template** *.*

_![Add site template modal with site type dropdown](/img/config/site-templates-list.png)_

També podeu veure la descripció del site template:

![Site template description](/img/config/site-template-description.png)

A la part inferior del formulari, notareu un interruptor **Copy Site**. Això us permet crear un nou site template basat en un site template existent com a punt de partida, cosa que us ajudarà a guanyar temps en lloc de crear un site template des de zero.

![Add site template modal with copy site toggle](/img/config/site-templates-list.png)

### Personalització del contingut d'un Site Template

Per personalitzar el vostre site template, només ha de navegar al seu panel de control i fer els canvis que necessiteu. Podeu crear nous articles, pàgines, activar plugins i canviar el tema actiu. També podeu accedir al Customizer i canviar tot tipus d'opcions de personalització.

![Site template edit interface](/img/config/site-template-edit.png)

Totes aquestes dades es copiaran quan un client crei un nou site basat en aquest Site Template.

### Opcions avançades

Si sabeu de cosa parleu quan es tracta de codi personalitzat, podeu utilitzar la nostra Search and Replace API per substituir automàticament informació al nou site després de la seva creació. Això és útil per coses com substituir noms de companyies a una pàgina "Sobre nosaltres", substituir l'email de contacte a la pàgina de Contacte, etc.

### Utilització dels Site Templates

De l'ordre, heu creat un grup de Site Templates diferents amb dissenys, temes i configuracions variades. Com us garanteu que són útils a la vostra xarxa ara?

Basicament, hi ha dos aproximacions que podeu utilitzar ara (no simultàniament):

  * Associar un Site Template a cada un dels vostres Plans

**O**

  * Deixar que els vostres clients es seleccionin els site templates durant l'alta.

#### Mode 1: Assign Site Template

En aquest mode, els vostres clients no podran triar un template quan creen un compte, sinó que vós definireu quin template s'ha de fer servir en cada un dels vostres Plans.

Per fer-ho, haureu de navegar a **Ultimate Multisite > Products > Edit**.

![Edit product to assign site template](/img/config/product-site-templates.png)

Això us portarà a la pàgina **Edit Product**. A la secció **Product Options**, trobareu la pestanya **Site template** i seleccionareu l'opció **Assign Site** **Template** del desplegable. Això mostrarà la llista de site templates disponibles i us permetrà seleccionar un únic site template dedicat al producte.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### Mode 2: Choose Available Site Template

En aquest mode, donareu als vostres clients una elecció durant el procés d'alta. Podran seleccionar entre diferents site templates que vostès defineu a la configuració del producte. Tenen l'opció de limitar el site template que poden triar sota el producte seleccionat. Això us permet tenir diferents conjunts de site templates per producte, cosa ideal per destacar diferents funcions i característiques per a un producte de major preu.

A la pàgina **Edit Product**. A la secció **Product Options**, trobareu la pestanya **Site template** i seleccionareu l'opció **Choose Available Site Template** del desplegable. Això mostrarà la llista de site templates disponibles i us permetrà seleccionar el site template que desitgeu que estigui disponible. Podeu fer-ho seleccionant el seu Comportament (Behavior): **Available** si voleu que el site template estigui inclòs a la llista. **Not Available** si voleu que el site template no aparegui com a opció. I **Pre-selected** si desitgeu que un dels site templates de la llista sigui el seleccionat per defecte.

![Choose available site templates with behavior options](/img/config/product-site-templates.png)

### Mode per defecte: Selecció de site template al formulari de Checkout

Si desitgeu que tots els vostres site templates estiguin disponibles durant l'alta, o si prefereu no fer el treball addicional d'assignar o especificar site templates sota cada producte que creeu. Potser només ha de configurar la selecció de site template al vostre **Checkout Form**. Per fer-ho, només ha de fer-se que vagi a **Ultimate Multisite > Checkout Forms**. Després, cliqueu **Edit** sota el formulari que voleu configurar.

![Checkout forms list page](/img/config/checkout-forms-list.png)

Això mostrarà la pàgina **Edit Checkout Form**. Trobareu el camp **Template Selection** i cliqueu **Edit** sota ell.

![Checkout form editor with template selection field](/img/config/checkout-form-editor.png)

Aparirà una finestra modal. A la caixa **Template Sites** podeu seleccionar i listar tots els site templates que desitgeu que estiguin disponibles durant l'alta. Els site templates que especifiqueu d'aquí seran disponibles independentment del producte que seleccioni l'usuari.

![Template sites field in checkout form editor](/img/config/checkout-form-step.png)

### Opcions de Site Template

Hi ha altres funcions de site templates disponibles que podeu activar o desactivar a la configuració d'Ultimate Multisite.

![Site template options in Ultimate Multisite settings](/img/config/settings-sites.png)

#### Allow Template Switching

Activar aquesta opció permetrà als vostres clients canviar el template que trien durant el procés d'alta després de crear el compte i el site. Això és útil des del punt de vista del client, ja que els permet re-seleccionar un template si més tard descobreixen que la seva elecció original no era la millor per a les seves necessitats específiques.

#### Allow Users to use their Site as templates

Com que els usuaris de subsites han dedicat temps a construir i dissenyar el seu propi site, poden voler clonar-lo i utilitzar-lo com a un dels site templates disponibles quan creen un altre subsite a la vostra xarxa. Aquesta opció els permet aconseguir-ho.

#### Copy Media on Template Duplication

Marcar aquesta opció copiarà el medi que s'ha subat al site template al site nou creat. Això es pot anular en cada un els plans.

#### **Prevent Search Engines from indexing Site Templates**

Els site templates, com s'ha discutit en aquest article, són templates, però encara formen part de la vostra xarxa, cosa que significa que encara són disponibles perquè els motors de cerca els trobin. Aquesta opció us permet amagar els site templates perquè els motors de cerca no els indexin.

## Pre-rellenat de Site Templates amb auto search-and-replace

Una de les funcions més potents d'Ultimate Multisite és la capacitat de mónar text, color i camps de selecció arbitraris al formulari d'alta. Quan hem capturat aquests dades, podem utilitzar-les per pre-rellenar el contingut en certes parts del site template seleccionat. Després, quan es publiqui el nou site, Ultimate Multisite substituirà els placeholders per la informació real introduïda durant l'alta.

Per exemple, si desitgeu obtenir el nom de la companyia de l'usuari final durant l'alta i posar automàticament el nom de la companyia a la pàgina inicial. A la pàgina inicial del vostre site template ha de fer-se servir afegir els placeholders, com a l'imatge de més avall (els placeholders han de portar-se entre doble llaves - {{placeholder_name}}).

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

Després, només ha de fer-se servir afegir un camp d'alta que faci match al vostre formulari de checkout per capturar aquestes dades:

![Checkout form with matching registration field](/img/config/checkout-form-editor.png)

El vostre client podrà omplir aquest camp durant l'alta.

![Registration field filled by customer](/img/config/checkout-form-step.png)

![Preview of the registration form](/img/config/checkout-form-editor.png)

Ultimate Multisite substituirà aleshores els placeholders amb les dades proporcionades pel client automàticament.

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### Resoldre el problema de "template ple de placeholders"

Tot això és genial, però ens trobem amb un problema fequet: els nostres site templates —que poden ser visitats pels nostres clients— estan plens de placeholders fequets que no diuen molt.

Per resoldre-ho, ofereixem l'opció de configurar valors falsos per als placeholders, i utilitzem aquests valors per buscar i substituir el seu contingut als site templates mentre els vostres clients estan visitant.

Podeu accedir a l'editor de placeholders de templates navegant a **Ultimate Multisite > Settings > Sites**, i després, a la barra lateral, fent clic al enllaç **Edit Placeholders**.

![Placeholder settings under Sites settings page](/img/config/settings-sites.png)

Això us portarà a l'editor de contingut dels placeholders, on podeu afegir placeholders i el seu respectiu contingut.

![Template placeholders content editor](/img/config/settings-sites.png)
