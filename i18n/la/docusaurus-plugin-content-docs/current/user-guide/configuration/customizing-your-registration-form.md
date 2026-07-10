---
title: Accommodatio formularii tui adnotationis
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Formam adnotationis tuam aptare {#customizing-your-registration-form}

Ut rete tuum singulare appareat inter omnia alia SaaS in suggestu WordPress aedificata, Ultimate Multisite tibi permittit paginas adnotationis et ingressus aptare per proprietatem nostram **Checkout Forms**.

Quamquam facilis et flexibilis via sunt ad diversas rationes experiendas cum novos emptores convertere conaris, plerumque ad formas adnotationis personales creandas adhibentur. Hic articulus intendit ostendere quomodo id facere possis.

## Paginae ingressus et adnotationis: {#login-and-registration-pages}

Post institutionem Ultimate Multisite, automatice paginas ingressus et adnotationis proprias in situ principali tuo creat. Has paginas praedefinitas quovis tempore mutare potes eundo ad paginam tuam **Ultimate Multisite > Settings > Login & Registration**.

![Pagina optionum ingressus et adnotationis](/img/config/settings-general.png)

Ecce plena conspectus paginae optionum ingressus et adnotationis:

![Plena pagina optionum ingressus et adnotationis](/img/config/settings-login-registration-full.png)

Inspiciamus singulas optiones quas in pagina **Login & Registration** aptare potes:

  * **Adnotationem habilitare:** Haec optio adnotationem in rete tuo habilitabit aut debilitabit. Si exstincta est, emptores tui adnotari neque productis tuis subscribere poterunt.

  * **Verificationem electronicae habilitare:** Si haec optio accensa est, emptores qui consilio gratuito aut consilio soluto cum tempore probationis subscribunt nuntium verificationis per electronicam accipient et nexum verificationis premere debebunt ut situs eorum creentur.

  * **Pagina adnotationis praedefinita:** Haec est pagina praedefinita ad adnotationem. Haec pagina in situ tuo publicata esse debet et formam adnotationis habere (etiam nota ut checkout form) - ubi clientes tui productis tuis subscribent. Tot paginas adnotationis et checkout forms creare potes quot vis; tantum memento shortcode checkout form in pagina adnotationis ponere, alioquin non apparebit.

  * **Pagina ingressus propria uti:** Haec optio tibi permittit uti pagina ingressus aptata, alia quam pagina praedefinita wp-login.php. Si haec optio accensa est, eligere potes quae pagina ad ingressum adhibeatur in optione **Pagina ingressus praedefinita** (statim infra).

  * **URL ingressus originalem obfuscare (wp-login.php)** : Si URL ingressus originalem celare vis, hanc optionem accendere potes. Hoc utile est ad impetus vi brutali arcendos. Si haec optio habilitata est, Ultimate Multisite errorem 404 ostendet cum usor conatur accedere ad nexum originalem wp-login.php

  * **Publicationem situs synchronam cogere:** Postquam emptor producto in rete subscribit, novus situs pendens in verum situs retis convertendus est. Processus publicationis per Job Queue, asynchrone, fit. Hanc optionem habilita ut publicationem cogas in eadem petitione qua adscriptio fieri.

Nunc videamus alias optiones quae adhuc ad processum ingressus et adnotationis pertinentes sunt. Sunt statim infra **Aliae optiones** in eadem pagina Login & registration:

  * **Munus praedefinitum:** Hoc est munus quod emptores tui in situ suo post processum adscriptionis habebunt.

  * **Jumper habilitare:** Habilitat compendium Jumper in area administratoria. Jumper administratoribus permittit celeriter salire ad schermata Ultimate Multisite, obiecta retis, et alia loca sustenta sine percurrendo per omne menu. Id exstingue si mavis illud instrumentum navigationis celeris ab interfacie administratoria celare.

  * **Usoribus etiam ad situm principalem addere:** Haec optio habilitata usorem etiam ad situm principalem retis tui post processum adscriptionis addet. Si hanc optionem habilitas, optio ad statuendum **munus praedefinitum** horum usorum in situ tuo etiam statim infra apparebit.

  * **Plures rationes habilitare:** Permitte usoribus rationes in diversis sitibus retis tui habere eadem inscriptione electronica. Si haec optio exstincta est, emptores tui rationem in aliis sitibus in rete tuo currentibus eadem inscriptione electronica creare non poterunt.

Atque hae sunt omnes optiones ad ingressum et adnotationem pertinentes quas aptare potes! Noli oblivisci optiones tuas servare postquam eas recensere perfeceris.

## Pluribus formis adnotationis uti: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 editorem checkout form praebet qui tibi permittit tot formas creare quot vis, cum diversis campis, productis oblatis, etc.

Tam paginae ingressus quam adnotationis shortcodes insertis utuntur: **[wu_login_form]** in pagina ingressus et**[wu_checkout]** pro pagina adnotationis. Potes amplius paginam adnotationis aptare aedificando aut creando checkout forms.

Ut ad hanc proprietatem accedas, vade ad menu **Checkout Forms**, in latere sinistro.

![Menu Checkout Forms in barra laterali](/img/config/checkout-forms-list.png)

In hac pagina omnes checkout forms quas habes videre potes.

Si novam creare vis, tantum preme **Add Checkout Form** in summo paginae.

Potes unam ex his tribus optionibus eligere ut initium tuum: gradus singularis, multi-gradus, aut vacua. Deinde preme **Go to the Editor**.

![Add Checkout Form cum optionibus gradus singularis, multi-gradus, aut vacua](/img/config/checkout-forms-list.png)

Vel, formas quas iam habes recensere aut duplicare potes premendo optiones infra nomen eius. Ibi etiam invenies optiones ad shortcode formae exscribendum aut formam delendam.

![Actiones checkout form supervolitantis cum recensere, duplicare, et delere](/img/config/checkout-form-hover-actions.png)

Si gradum singularem aut multi-gradus eligis, checkout form iam praeimpleta erit gradibus fundamentalibus ut operetur. Deinde, si vis, gradus additos ei addere potes.

### Checkout Form recensere: {#editing-a-checkout-form}

Ut antea memoravimus, potes checkout forms ad diversos fines creare. In hoc exemplo in forma adnotationis laborabimus.

Postquam ad editorem checkout form navigaveris, da formae tuae nomen (quod tantum ad relationem internam adhibebitur) et slug (ad shortcakes creandos, exempli gratia).

![Editor formae solutionis cum campis nominis et slug](/img/config/checkout-form-name-slug.png)

Formae constant ex gradibus et campis. Novum gradum addere potes premendo **Adde Novum Gradum Solutionis**.

![Bulla Adde Novum Gradum Solutionis](/img/config/checkout-form-add-step.png)

In prima tabula fenestrae modalis, imple materiam gradus formae tuae. Da ei ID, nomen et descriptionem. Haec plerumque interne adhibentur.

![Tabula materiae gradus solutionis cum ID, nomine et descriptione](/img/config/checkout-form-step-content.png)

Deinde, constitue visibilitatem gradus. Eligere potes inter **Semper ostende** , **Tantum ostende usoribus initium sessionis facientibus** aut **Tantum ostende hospitibus**.

![Optiones visibilitatis gradus solutionis](/img/config/checkout-form-step-visibility.png)

Denique, configura stilum gradus. Hi campi optionales sunt.

![Configuratio stili gradus solutionis](/img/config/checkout-form-step-style.png)

Nunc tempus est campos primo gradui nostro addere. Tantum preme **Adde Novum Campum** et elige genus sectionis quod vis.

![Bulla Adde Novum Campum](/img/config/checkout-form-add-field-button.png)![Index delabens selectionis generis campi](/img/config/checkout-form-field-type-dropdown.png)

Unusquisque campus diversos parametros habet implendos. Pro hoc primo introitu, campum **Nomen usoris** eligemus.

![Configuratio campi Nominis usoris](/img/config/checkout-form-username-content.png)![Parametri campi Nominis usoris](/img/config/checkout-form-username-visibility.png)![Additae optiones campi Nominis usoris](/img/config/checkout-form-username-style.png)

Tot gradus et campos addere potes quot tibi opus sunt. Ut producta tua clientibus tuis ostendas ut unum eligant, utere campo Tabulae Pretiorum. Si vis clientes tuos sinere exemplar eligere, adde campum Selectionis Exemplaris. Et sic porro.

![Editor formae solutionis cum campo selectionis exemplaris](/img/config/checkout-form-with-template-field.png)

_**Nota:** Si productum creas postquam formam solutionis creavisti, necesse erit productum in sectione Tabulae Pretiorum addere. Si id non addideris, productum clientibus tuis in pagina registrationis non apparebit._

_**Nota 2:** nomen usoris, inscriptio electronica, tessera, titulus situs, URL situs, summarium ordinis, solutio, et bulla mittendi campi mandatorii sunt ad formam solutionis creandam._

Dum in forma solutionis tua laboras, semper bulla Praevisionis uti potes ut videas quomodo clientes tui formam videbunt. Etiam alternare potes inter visum ut usor exsistens aut visitator.

![Bulla Praevisionis in editore formae solutionis](/img/config/checkout-form-preview-button.png)![Praevisio formae solutionis ut visitator aut usor exsistens](/img/config/checkout-form-preview-modal.png)

Denique, in **Optionibus Provectis** nuntium paginae **Gratias Tibi** configurare potes, snippets addere ad conversiones vestigandas, CSS consuetum formae solutionis tuae addere aut eam certis nationibus restringere.

![Optiones Provectae cum pagina Gratias Tibi, vestigatione conversionum, et CSS consueto](/img/config/checkout-form-advanced.png)

Etiam manualiter formam solutionis tuam activare aut inactivare potes hanc optionem in columna dextra commutando, aut formam perpetuo delere.

![Commutator activus et optio delendi pro forma solutionis](/img/config/checkout-form-active.png)

Noli oblivisci formam solutionis tuam servare!

![Bulla Serva Formam Solutionis](/img/config/checkout-form-save.png)

Ut shortcode formae tuae accipias, preme **Genera Shortcode** et effigiem in fenestra modali monstratam copia.

![Fenestra modalis Genera Shortcode cum shortcode copiando](/img/config/checkout-form-editor.png)

_**Nota:** Necesse erit hunc shortcode paginae tuae registrationis addere ut haec forma solutionis ei addatur._

## Producta et exemplaria per parametros URL praeligere: {#pre-selecting-products-and-templates-via-url-parameters}

Si tabulas pretiorum ad producta tua accommodatas creare vis et in forma solutionis productum aut exemplar praeligere quod cliens tuus ex tabula pretiorum tua aut pagina exemplarium eligit, parametros URL ad hoc uti potes.

### **Pro consiliis:** {#for-plans}

Vade ad **Ultimate Multisite > Producta > Elige consilium**. Bullam **Preme ut Vinculum Communicabile copies** in summo paginae videre debes. Hoc est vinculum quo uti potes ut hoc consilium specificum in forma solutionis tua praeligas.

![Pagina producti cum bulla vinculi communicabilis](/img/config/products-list.png)

Nota hoc vinculum communicabile tantum validum esse pro **Consiliis**. Vinculis communicabilibus pro fasciculis aut servitiis uti non potes.

### Pro exemplaribus: {#for-templates}

Si vis exemplaria situs in forma solutionis tua praeligere, parametro uti potes: **?template_id=X** in URL paginae registrationis tuae. "X" substitui debet **numero ID exemplaris situs**. Ut hunc numerum accipias, vade ad **Ultimate Multisite > Sites**.

Preme **Gere** statim infra exemplar situs quo uti vis. Numerum SITE ID videbis. Tantum hunc numerum utere pro hoc exemplari situs specifico ut in forma solutionis tua praeligatur. In nostro casu hic, parameter URL esset **?template_id=2**.

![Index situs monstrans ID exemplaris situs](/img/config/site-templates-list.png)

Dicamus nostrum website retis esse [**www.mynetwork.com**](http://www.mynetwork.com) et paginam registrationis nostram cum forma solutionis nostra in pagina **/register** sitam esse. Totum URL cum hoc exemplari situs praeselecto sic videbitur: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Et si vis, potes et producta et exemplaria ad formam solutionis tuam praeligere. Omne quod facere debes est vinculum communicabile consilii copiare et parametrum exemplaris in fine inserere. Sic videbitur: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
