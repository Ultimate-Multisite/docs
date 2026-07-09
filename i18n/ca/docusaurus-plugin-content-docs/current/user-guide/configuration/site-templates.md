---
title: Plantilles de lloc
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Plantilles de lloc (v2)

_**NOTA: Aquest article fa referència a Ultimate Multisite versió 2.x. Si feu servir la versió 1.x,**_ **vegeu aquest article** _**.**_

El nostre objectiu en crear una xarxa premium amb Ultimate Multisite és automatitzar tants processos com sigui possible, alhora que oferim als nostres clients flexibilitat i diferents opcions per triar quan creen els seus llocs web. Una manera senzilla d’aconseguir aquest equilibri és fer ús de la funcionalitat de plantilles de lloc d’Ultimate Multisite.

## Què és una plantilla de lloc?

Com el seu nom indica, una plantilla de lloc és un lloc base que es pot utilitzar com a punt de partida quan es creen llocs nous a la vostra xarxa.

Això vol dir que podeu crear un lloc base, activar diferents plugins, establir un theme actiu i personalitzar-lo de la manera que vulgueu. Després, quan el vostre client creï un Account nou, en lloc d’obtenir un lloc WordPress per defecte sense contingut significatiu a dins, obtindrà una còpia del vostre lloc base amb totes les personalitzacions i continguts ja preparats.

Això sona fantàstic, però com creo una plantilla de lloc nova? És tan senzill com pot arribar a ser.

## Creació i edició d’una plantilla de lloc nova

Les plantilles de lloc són simplement llocs normals de la vostra xarxa. Per crear una plantilla nova, simplement podeu anar a **Administració de la xarxa > Ultimate Multisite > Llocs > Afegeix lloc.**

**![Botó Afegeix lloc a la pàgina de llista de llocs](/img/config/site-templates-list.png)**

Això obrirà una finestra modal on se us demanarà el **títol del lloc, el domini/camí del lloc,** i el **tipus de lloc**. Al camp desplegable **Tipus de lloc**, assegureu-vos de seleccionar **Plantilla de lloc** *.*

_![Modal per afegir una plantilla de lloc amb desplegable de tipus de lloc](/img/config/site-templates-list.png)_

També podeu afegir una descripció visible per al client per explicar què inclou la plantilla:

![Camp de descripció de la plantilla de lloc a la pantalla d’edició de la plantilla de lloc](/img/config/site-template-edit-description.png)

A la part inferior del formulari, veureu un commutador **Copia el lloc**. Això us permetrà crear una plantilla de lloc nova basada en una plantilla de lloc existent com a punt de partida per ajudar-vos a estalviar temps en lloc de crear una plantilla de lloc des de zero.

![Modal per afegir una plantilla de lloc amb commutador de còpia de lloc](/img/config/site-templates-list.png)

### Personalització dels continguts d’una plantilla de lloc

Per personalitzar la vostra plantilla de lloc, simplement navegueu fins al seu panell de Dashboard i feu els canvis que necessiteu. Podeu crear publicacions noves, pàgines, activar plugins i canviar el theme actiu. Fins i tot podeu anar al personalitzador i canviar tota mena d’opcions de personalització.

![Interfície d’edició de la plantilla de lloc](/img/config/site-template-edit.png)

Totes aquestes dades es copiaran quan un client creï un lloc nou basat en aquesta plantilla de lloc.

### Opcions avançades

Si us moveu bé amb una mica de codi personalitzat, podeu fer ús de la nostra API de cerca i substitució per substituir automàticament informació al lloc nou després de crear-lo. Això és útil per a coses com substituir noms d’empresa en una pàgina Sobre nosaltres, substituir el correu electrònic de contacte a la pàgina de contacte, etc.

### Ús de plantilles de lloc

D’acord, heu creat un munt de plantilles de lloc diferents amb dissenys, themes i configuracions diferents. Com les feu útils ara a la vostra xarxa?

Bàsicament, hi ha dos enfocaments que podeu utilitzar ara (no simultàniament):

  * Adjuntar una plantilla de lloc a cadascun dels vostres plans

**O BÉ**

  * Permetre que els vostres clients triïn les plantilles de lloc ells mateixos durant el registre.

#### Mode 1: Assigna una plantilla de lloc

En aquest mode, els vostres clients no podran triar una plantilla quan creïn un Account, sinó que sereu vosaltres qui definireu quina plantilla s’ha d’utilitzar en cadascun dels vostres plans.

Per fer-ho, haureu d’anar a **Ultimate Multisite > Productes > Edita**.

![Edita el producte per assignar una plantilla de lloc](/img/config/product-site-templates.png)

Això us portarà a la pàgina **Edita el producte**. A la secció **Opcions del producte**, cerqueu la pestanya **Plantilla de lloc** i seleccioneu l’opció **Assigna una plantilla de lloc** al camp desplegable. Això mostrarà la llista de plantilles de lloc disponibles i us permetrà seleccionar només una plantilla de lloc dedicada al producte.

![Pestanya de plantilla de lloc del producte amb l’opció d’assignar plantilla de lloc](/img/config/product-site-templates.png)

#### Mode 2: Tria una plantilla de lloc disponible

En aquest mode, donareu als vostres clients una opció durant el procés de registre. Podran seleccionar entre diferents plantilles de lloc que definiu a la configuració del producte. Teniu l’opció de limitar les plantilles de lloc entre les quals poden triar dins del producte seleccionat. Això us permetrà tenir conjunts diferents de plantilles de lloc per a cada producte, cosa ideal per destacar funcions i característiques diferents en un producte de preu més alt.

A la pàgina **Edita el producte**. A la secció **Opcions del producte**, cerqueu la pestanya **Plantilla de lloc** i seleccioneu l’opció **Tria una plantilla de lloc disponible** al camp desplegable. Això mostrarà la llista de plantilles de lloc disponibles i us permetrà seleccionar la plantilla de lloc que voleu que estigui disponible. Ho podeu fer triant-ne el comportament: **Disponible** si voleu que la plantilla de lloc s’inclogui a la llista. _**No disponible**_ si voleu que la plantilla de lloc no es mostri com a opció. I **Preseleccionada** si voleu que una de les plantilles de lloc llistades sigui la seleccionada per defecte.

![Tria plantilles de lloc disponibles amb opcions de comportament](/img/config/product-site-templates.png)

### Mode per defecte: selecció de plantilla de lloc al formulari de pagament

Si voleu que totes les vostres plantilles de lloc estiguin disponibles durant el registre, o potser no preferiu fer la feina extra d’assignar o especificar plantilles de lloc sota cada producte que creeu, podeu configurar simplement la selecció de plantilla de lloc al vostre **formulari de pagament**. Per fer-ho, aneu a **Ultimate Multisite > Formularis de pagament** i feu clic a **Edita** sota el formulari que voleu configurar.

Això mostrarà la pàgina **Edita el formulari de pagament**. Cerqueu el camp **Selecció de plantilla** i feu clic a **Edita** a sota.

Apareixerà una finestra modal. Al camp **Template Sites** pots seleccionar i enumerar totes les plantilles de lloc que vols que estiguin disponibles durant el registre. Les plantilles de lloc que especifiquis des d’aquí estaran disponibles independentment del producte que hagi seleccionat l’usuari.

![Camp de selecció de plantilla a l’editor del formulari de checkout](/img/config/checkout-form-template-step.png)

Al frontend, els clients veuen el selector de plantilles durant el checkout i poden triar el disseny inicial per al seu nou lloc.

![Selector de plantilles al frontend durant el registre](/img/config/frontend-template-chooser.png)

### Opcions de plantilla de lloc

Hi ha altres funcions de plantilles de lloc disponibles que pots activar o desactivar a la configuració d’Ultimate Multisite.

![Opcions de plantilla de lloc a la configuració d’Ultimate Multisite](/img/config/settings-sites-templates-section.png)

#### Permet el canvi de plantilla

Activar aquesta opció permetrà als teus clients canviar la plantilla que trien durant el procés de registre després que s’hagin creat el Account i el lloc. Això és útil des del punt de vista del client, ja que els permet tornar a seleccionar una plantilla si més endavant descobreixen que la seva elecció original no era la millor per a les seves necessitats particulars.

#### Permet als usuaris utilitzar el seu lloc com a plantilles

Com que els usuaris de subllocs han dedicat temps a construir i dissenyar el seu propi lloc, potser voldran clonar-lo i utilitzar-lo com una de les plantilles de lloc disponibles en crear un altre sublloc a la teva xarxa. Aquesta opció els permetrà aconseguir-ho.

#### Copia els mitjans en duplicar la plantilla

Marcar aquesta opció copiarà els mitjans pujats al lloc de plantilla al lloc creat recentment. Això es pot sobreescriure en cadascun dels plans.

#### **Evita que els motors de cerca indexin les plantilles de lloc**

Les plantilles de lloc, tal com s’expliquen en aquest article, són plantilles base, però continuen formant part de la teva xarxa, cosa que vol dir que encara estan disponibles perquè els motors de cerca les trobin. Aquesta opció et permetrà amagar les plantilles de lloc perquè els motors de cerca les puguin indexar.

## Preomplir plantilles de lloc amb cerca i substitució automàtiques

Una de les funcions més potents d’Ultimate Multisite és la possibilitat d’afegir camps arbitraris de text, color i selecció al formulari de registre. Un cop hem capturat aquestes dades, les podem utilitzar per preomplir el contingut en certes parts de la plantilla de lloc seleccionada. Aleshores, quan es publiqui el nou lloc, Ultimate Multisite substituirà els marcadors de posició per la informació real introduïda durant el registre.

Per exemple, si vols obtenir el nom de l’empresa de l’usuari final durant el registre i posar automàticament el nom de l’empresa a la pàgina d’inici. A la pàgina d’inici del teu lloc de plantilla has d’afegir els marcadors de posició, com a la imatge següent (els marcadors de posició s’han d’afegir envoltats de dobles claus - {{placeholder_name}}).

![Pàgina d’inici amb text de marcador de posició entre claus](/img/config/site-templates-list.png)

Aleshores, simplement pots afegir un camp de registre coincident al teu formulari de checkout per capturar aquestes dades. El mateix editor del formulari de checkout utilitzat per a la selecció de plantilles et permet col·locar camps personalitzats al costat del selector de plantilles:

![Selecció de plantilla i camps de registre a l’editor del formulari de checkout](/img/config/checkout-form-template-step.png)

El teu client podrà llavors omplir aquest camp durant el registre.

![Formulari de checkout al frontend amb selector de plantilles](/img/config/frontend-template-chooser.png)

Ultimate Multisite substituirà llavors automàticament els marcadors de posició per les dades proporcionades pel client.

![Marcadors de posició substituïts per dades del client al lloc](/img/config/site-templates-list.png)

### Resoldre el problema de la "plantilla plena de marcadors de posició"

Tot això està molt bé, però ens trobem amb un problema poc estètic: ara les nostres plantilles de lloc —que poden ser visitades pels nostres clients— estan plenes de marcadors de posició poc atractius que no diuen gaire.

Per resoldre això, oferim l’opció d’establir valors ficticis per als marcadors de posició, i fem servir aquests valors per cercar i substituir-ne el contingut als llocs de plantilla mentre els teus clients els visiten.

Pots accedir a l’editor de marcadors de posició de plantilles anant a **Ultimate Multisite > Settings > Sites** i, després, a la barra lateral, fent clic a l’enllaç **Edit Placeholders**.

![Configuració de plantilles de lloc a la pàgina de configuració de Sites](/img/config/settings-sites-templates-section.png)

Això et portarà a l’editor de contingut dels marcadors de posició, on pots afegir marcadors de posició i el seu contingut respectiu.

![Punt d’entrada de l’editor de contingut dels marcadors de posició de plantilla](/img/config/settings-sites-templates-section.png)
