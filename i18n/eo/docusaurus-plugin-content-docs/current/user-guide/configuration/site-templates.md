---
title: Statoj de sita
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Site Templates (v2)

_**NOTO: Ĉi tiu artikolo referas al Ultimate Multisite versio 2.x. Se vi uzas version 1.x,**_ **vidu ĉi tiun artikolon.**_**.**_

Nossa celo ĉe la kreado de premium retoj kun Ultimate Multisite estas automatigi ilojn kiel eble plej multe kaj doni al nia klientoj fleksibiliton kaj diversajn opciojn elekti pri krei siajn sitiojn. Facila maniero atingi ĉi ti balancon estas uzui la funkcion "Site Templates" de Ultimate Multisite.

## Kion estas Site Template? {#what-is-a-site-template}

Kiel la nomo indikas, Site Template estas bazaj sito (boilerplate site), kiun oni povas uzi kiel bazon pri kreado novaj sitioj en via retoj.

Tio signifas, ke vi povas krei bazan sito, aktivi diversajn pluginojn, stabi pli aktivan temon kaj personaligi ĝin kiel vi ŝatis. Tiam, kiam via klient kreas novan konton, en sto de default WordPress sito kun neniu signifa enonta enfluo, ili ricevas kopion de via baza sito kun ĉiuj personaligoj kaj enhavo 이미 pli daŭre.

Tio sonas tre bone, sed kiel mi kreas novan site template? Ĝi estas la plej simple, kiun ĝi povus esti.

## Kreado kaj Edito de nova Site Template {#creating-and-editing-a-new-site-template}

Site Templates estas simplaj normaj sitoj en via retoj. Por krei novan template vi povas simple iri al **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![Add site button in the Sites list page](/img/config/site-templates-list.png)**

Tio ŝanĝos la finestra modalon, kie ĝi demandos la **Site titolo, Site Domeno/via**, kaj **Site tipo**. Sub la menujon "Site Type" (Tipo de Sito) certigu, ke vi selektas **Site Template** *.

_![Add site template modal with site type dropdown](/img/config/site-templates-list.png)_

Vi ankaŭ povas aĉeti klientan deskripcon por klarigi, kion la template inkluzas:

![Site template description field on the site template edit screen](/img/config/site-template-edit-description.png)

Al la bazon de la forma, vi un interruptor **Copy Site** (Kopi Site). Esto le permitirá crear una nova plantilla de sitio basantida en una plantilla de sitio existente comon su puntita de partida para ayudarle a ahorrar temps en lugar de crear una plantilla desde cero.

![Add site template modal with copy site toggle](/img/config/site-templates-list.png)

### Personalizant la dentado d'una Plantilla de Sitio {#customizing-the-contents-of-a-site-template}

Para personalizant su plantilla de sitio, simplemente navegue hasta el panel de control (dashboard) y haga los canvis que necesite. Puede crear novis posts, páginas, activar plugins y cambiar el tema activo. A fins i puede ir al Customizer i cambiar tots els tipus d'opcions de personalització.

![Site template edit interface](/img/config/site-template-edit.png)

Tots aquests datos es copiarà quan un client cree una nova web basant aquesta Plantilla de Sitio.

### Opcions Avançades {#advanced-options}

Si sabe fer algun codi personal, puede utilitzar la nostra Search and Replace API per substituir automàticament informació en la nova web després de la seva creació. Això és útil per coses com substituir noms d'empresa en una pàgina "About", substituir el correu electrònic de contacte en la pàgina de Contacte, etc.

### Usant Plantilles de Sitio {#using-site-templates}

Ok, així que va crear moltes Plantilles de Sitio diferents amb dissenys, temes i configuracions diferents. Com les pode fer útiles a la seva xarxa ara?

Basalment, actualment pot utilitzar dos abordajes (no simultàniament):

  * Atornar una sola Plantilla de Sitio a cada un dels seus Plans

**O**

  * Deixar que els seus clients elenen les plantilles de sitio mateixos durant la registratió.

#### Mode 1: Assign Site Template {#mode-1-assign-site-template}

En ĉi tiu modo viaj klientoj ne uzos tempon pri elekti, kiam ili kreas konton, sed vi definas, kiu tempo devas esti uzata sur ĉiu de via Planoj.

Por ti, vi bezonas iri al **Ultimate Multisite > Products > Edit**.

![Edit product to assign site template](/img/config/product-site-templates.png)

Tio donos al vi la paginon **Edit Product**. Sub la sekcio **Product Options**, trovu la tabelon **Site template** kaj selektu la opcion **Assign Site Template** el la mena ĉelo. Tio donos liston tempon de site, kiuj estas disponibili, kaj ĝi permesos selekti nur unun tempon de site dedikitan al tiu produkto.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### Modo 2: Elektu Disponabla Site Tempon {#mode-2-choose-available-site-template}

En ĉi tiu modo vi donas viaj eleti dum la registriproceso. Ili tute povas selekti el diversaj sito tempon, kiujn vi definas sub la produktaj ŝanĝoj. Vi havas opcion limigi la sito tempon, kiun ili povas elekti sub la selektita produkto. Tio permesos al vi havi diversajn setojn de sito tempon sub ĉiu produkto, kio estas ideala por elesti diversajn funkciojn kaj karakterojn por pli altaj preco produktoj.

Sur la paĝo **Edit Product** (Editi Produkton). Sub la seksio **Product Options** (Opcioj de Produkto), trovu la tablon **Site template** (Model de Site) kaj selektu la opcion **Choose Available Site Template** (Elekti Disponabla Model de Site) el la drop-down campo. Tio aldonos la liston de modeloj de site kiuj estas disponiblaj, kaj vi alpermesas selekti la modelon de site kiun vi volas esti disponibile. Vi povas fari tion per elekti ĝian Komporton: **Available** (Disponabla) se vi volas inkludi la modelon de site en la listo. _**Not Available**_ (Ne Disponabla) se vi volas, ke la modelon de site ne aparu kiel opcio. Kaj **Pre-selected** (Preselektita) se vi volas unu el la listaj modeloj de site esti la default selektita.

![Choose available site templates with behavior options](/img/config/product-site-templates.png)

### Default Modo: Selektion de model de site sur la Checkout formo {#default-mode-site-template-selection-on-the-checkout-form}

Se vi volas, ke ĉiuj viaj modeloj de site estu disponibile dum registriĝo, aŭ ĉu vi ne preferas fari ekstra labor per asigoni aŭ spesifi modelojn de site sub ĉiu produkto, kiun vi kreas. Tiam vi povas simple seti la selekton de model de site sub via **Checkout Form** (Formo de Checkout). Por ti, dirigi al **Ultimate Multisite > Checkout Forms** kaj kliku sur **Edit** sub la formo, kiun vi volas konfiguroni.

Tio aldonos la paĝon **Edit Checkout Form** (Editi Checkout Formon). Trovu la kampan **Template Selection** (Selektion de Modeloj) kaj kliku sur **Edit** sub ĝi.

Ekzistas modala finestra. Sub la kampan **Template Sites** (Modelaj Sitoj) vi povas selekti kaj listi ĉiuj modelojn de site kiuj estas disponiblaj dum registriĝo. La modeloj de site, kiujn vi spesifas el ĉi tiu loko, estu disponibile neŭindike de kio iu uzanto elektis produkton.

![Template selection field in the checkout form editor](/img/config/checkout-form-template-step.png)

Sur la frontendo (frontend), klientoj vidas la selektadon de modeloj dum la checkout kaj povas elekti la komencajn dezajnan desaineron por sia novan sitio.

![Frontend template chooser during registration](/img/config/frontend-template-chooser.png)

### Opción de Plantillas de Sitio {#site-template-options}

Estas estas funkciojono de plantiloj de sitio estas daavailablas ke vi povas aktivi aŭ desakti sub la ŝanĝoj de Ultimate Multisite.

![Opción de plantiloj de sitio en ŝanĝoj de Ultimate Multisite](/img/config/settings-sites-templates-section.png)

#### Permiti Plantiloŝanĝon {#allow-template-switching}

Aktiveti ĉi ti opcio permesas al via klientoj ŝanĝi la plantilon, kiun ili elektis dum la registriĝo post kiam la konto kaj la sitio estas kreita. Tio estas utile de klientaj perspektivo ĉar ĝi permesas al ili re-elekti plantilon, se ili pli mal tuteinfon scii, ke ilia originala elektita ne estis la plej bona por iliaj partikaj bezonoj.

#### Permiti Uzantojn uzui sian Siton kiel Plantilojn {#allow-users-to-use-their-site-as-templates}

Ĉar subsitaj uzantoj pasas tempon konstrui kaj dezaini sian propran sitiojn, ili povus volopi kaj uzi lin kiel unu el la plantiloj de sitio kiuj estasavailablaj pri kreado de alia sub sito sur via reron. Ĉi tiu opcio permesas al ili atingi tion.

#### Kopii Medion pri PlantiloDuplikado {#copy-media-on-template-duplication}

Kontakti ĉi ti opcio kopias la median, kiun ili pliris sur la plantila sitio al la novaj sitoj kreitaj. Tio povas esti supergravita sur ĉiu el la planoj.

#### **Mankovi Motorigojn de Sitiloj** {#prevent-search-engines-from-indexing-site-templates}

Sitiloj kiel diskutita en ĉi tiu artikolo estas boilerplate (tempa strukturo), sed ili estas tamen parto de via rero, tio signifas ke ili estas tutablaj por motorigoj trovi. Ĉi tiu opcio permesas al vi malfermi la sitilojn tiel ke motorigoj povas indexi ilin.

## Pre-pripolado de Sitiloj kun auto-search-and-replace {#pre-populating-site-templates-with-auto-search-and-replace}

Unaj de la plej potenca funkcioj Ultima Multisite estas la kapablo a pliigi arbitran tekston, koloran kaj selektajn laŭlandojn sur la registriĝoformo. Kiel ni havis ti datum akirita, ni povas uzi ĝin por pripripopuli la kontanton en certaj partoj de la selektita ŝablon de la sitio. Tiam, kiam la nova sitio estas publikigita, Ultima Multisite substitui la plaseholdojn per la faktan informon, kiun oni enteris dum registriĝo.

Ekzemple, se vi volas akiri la nomon de la kompanio de via uzanto-ĉi dum registriĝo kaj aŭtomatiŝi la nomon de la kompanio sur la ĉefa paĝo. Sur via ŝablon de la ĉefa paĝo de la sitio vi bezonas pliigi la plaseholdojn, kiel en la imago belowe (plaseholdoj devas esti entouritaj de duvelaj curly bracoj - {{plaseholdo_nœmo}}).

![Homepage con teksto plaseholdoj en curly bracoj](/img/config/site-templates-list.png)

Tiam vi povas simple pliigi korespondantan registriĝfildon sur via checkout formo por akiri ti datum. La sama editora forma kaj checkout formo uziita por selekto de ŝablon permesas vi ploti la customajn laŭlandojn apud la ŝablono-elektoron:

![Selektado de ŝablo kaj registriĝfildoj en la editora forma de la checkout formo](/img/config/checkout-form-template-step.png)

Via klastro tiel povas ploti ti fildon dum registriĝo.

![Frontend checkout form kun ŝablon-elektoro](/img/config/frontend-template-chooser.png)

Ultima Multisite tiel substitui la plaseholdojn per la datum, kiun oni donas la klastro aŭtomate.

![Plaseholdoj substituita per datan de la klastro sur la sitio](/img/config/site-templates-list.png)

### Solvi la problemin "ŝablo plena de plaseholdoj" {#solving-the-template-full-of-placeholders-problem}

T ĉio estas granda, sed ni atingas malbon problemin: nun niaj ŝablon de la sitio - kiuj povas esti vizitaj de nia klastroj - estas plenaj malbonaj plaseholdoj kiuj ne diras multan.

Por ti problemin حلu, ni ofersamos la opcio de establecer valores falsos para los placeholders, y usamos esos valores para buscar y reemplazar su contenido en los sitios plantilla mientras tus clientes están visitando.

Puedes acceder al editor de placeholders de plantillas yendo a **Ultimate Multisite > Settings > Sites**, y luego, en la barra lateral, haciendo clic en el enlace **Edit Placeholders**.

![Site template settings under the Sites settings page](/img/config/settings-sites-templates-section.png)

Eso te llevará al editor de contenido de los placeholders, donde puedes añadir placeholders y su contenido respectivo.

![Template placeholders content editor entry point](/img/config/settings-sites-templates-section.png)
