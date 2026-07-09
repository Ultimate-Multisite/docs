---
title: Quomodo mappationem dominiorum configurare
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Quomodo Consociationem Dominiorum Configurare (v2) {#how-to-configure-domain-mapping-v2}

_**NOTA GRAVIS: Hic articulus ad Ultimate Multisite versionem 2.x refertur.**_

Una ex potentissimis proprietatibus retis praemialis est facultas clientibus nostris praebendi occasionem dominium summi gradus sitibus suis adiungendi. Denique, quid professionalius videtur: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) an [_**joesbikeshop.com**_](http://joesbikeshop.com)? Ideo Ultimate Multisite hanc proprietatem iam inclusam praebet, sine necessitate pluginum tertiae partis adhibendi.

## Quid est consociatio dominiorum? {#whats-domain-mapping}

Ut nomen indicat, consociatio dominiorum est facultas a Ultimate Multisite oblata accipiendi petitionem pro dominio proprio et illam petitionem ad respondentem situm in rete consociandi cui illud peculiare dominium adiunctum est.

### Quomodo consociationem dominiorum in tuo Ultimate Multisite Rete constituere {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Consociatio dominiorum aliquam configurationem ex parte tua requirit ut operetur. Fortunate, Ultimate Multisite laborem difficilem pro te automatice peragit, ut requisita facile implere possis.

Dum Ultimate Multisite instituitur, magus automatice **sunrise.php** in destinatum folder describet et instituet. **Magus te progredi non sinet donec hic gradus perfectus sit**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Hoc significat, simul ac magus institutionis Ultimate Multisite rete tuum constituere perfecerit, te statim dominium proprium consociare posse.

Nota consociationem dominiorum in Ultimate Multisite non esse obligatoriam. Optionem habes utendi munere nativo consociationis dominiorum WordPress Multisite aut alia quavis solutione consociationis dominiorum.

Si necesse sit consociationem dominiorum Ultimate Multisite debilitare ut aliis solutionibus consociationis dominiorum locum des, hanc proprietatem sub **Ultimate Multisite > Configurationes > Consociatio Dominiorum** debilitare potes.

![Pagina configurationum Consociationis Dominiorum ostendens redirectionem admin, nuntium consociationis et optiones DNS](/img/config/domain-mapping-settings.png)

Statim infra hanc optionem, etiam optionem **Redirectionem Admin Cogere** videre potes. Haec optio tibi permittit regere utrum clientes tui ad Dashboard administratorium suum accedere possint tam in dominio proprio quam in subdominio, an tantum in uno ex eis.

Si **Redirectionem cogere ad dominium consociatum** eligis, clientes tui tantum in dominis propriis suis ad Dashboard administratorium suum accedere poterunt.

Optio **Redirectionem cogere ad** **dominium retis** prorsus contrarium faciet - clientes tui tantum in subdominio suo ad Dashboard sua accedere permittentur, etiam si in dominiis propriis suis intrare conentur.

Et optio **Accessum ad admin permittere tam per dominium consociatum quam per dominium retis** eis permittit ad Dashboard administratoria sua accedere tam in subdominio quam in dominio proprio.

![Index demissus Redirectionis Admin expansus tres optiones redirectionis ostendens](/img/config/domain-mapping-redirect-options.png)

Duae viae sunt dominium proprium consociandi. Prima est nomen dominii ex Dashboard administratorio retis tui tamquam super admin consociare, et secunda est per Dashboard administratorium subsitus sub pagina Account.

Sed antequam dominium proprium uni ex subsitibus in rete tuo consociare incipias, curare debes ut **configurationes DNS** nominis dominii rite configuratae sint.

###

### Curare ut configurationes DNS dominii rite configuratae sint {#making-sure-the-domain-dns-settings-are-properly-configured}

Ut consociatio operetur, curare debes ut dominium quod consociare paras ad IP inscriptionem Retis tui indicet. Nota te IP inscriptione Retis indigere - IP inscriptione dominii ubi Ultimate Multisite institutum est - non IP inscriptione dominii proprii quod consociare vis. Ad IP inscriptionem certi dominii quaerendam, suademus ut ad [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) eas, exempli gratia.

Ut dominium recte consocies, debes **A RECORD** in configuratione tua **DNS** addere quod ad illam **IP inscriptionem** indicet. Administratio DNS valde variat inter diversos registratores dominiorum, sed multae sunt disciplinae online hoc tegentes si quaeras " _Creating A Record on XXXX_ " ubi XXXX est registrator dominii tui (ex.: " _Creating A Record on_ _GoDaddy_ ").

Si difficultatem habes ut hoc operetur, **auxilium registratoris dominii tui contacta** et te in hac parte adiuvare poterunt.

Si paras permittere clientibus tuis ut sua propria dominia consocient, ipsi laborem in hac parte facere debebunt. Eos ad systema auxilii registratoris sui dirige si se A Record creare non posse inveniant.

### Consociare nomen dominii proprii ut Super Admin {#mapping-custom-domain-name-as-super-admin}

Cum in rete tuo ut super admin initus es, nomina dominiorum propriorum facile addere et administrare potes eundo sub **Ultimate Multisite > Dominia**.

![Pagina indicis Dominiorum in Ultimate Multisite](/img/admin/domains-list.png)

Sub hac pagina, potes bullam **Adde Dominium** in summo premere, et hoc fenestram modalem aperiet ubi constituere et complere potes **nomen dominii proprii**, **subsitum** cui nomen dominii proprii applicare vis, atque decernere utrum id ut nomen **dominii primarii** constituere velis necne (nota te posse **plura nomina dominiorum uni subsitui consociare**).

![Fenestram modalem Adde Dominium cum nomine dominii, electore situs et commutatore dominii primarii](/img/admin/domain-add-modal.png)

Postquam omnes informationes inserueris, tum bullam **Adde Dominium Exsistens** in imo premere potes.

Hoc processum verificandi et accipiendi informationes DNS dominii proprii incipiet. Etiam commentarium in imo paginae videbis, ut processum quem percurrit sequi possis. Hic processus pauca minuta ad perficiendum capere potest.

Ultimate Multisite v2.13.0 etiam relationem dominii interni automatice creat cum novus situs creatur in hospite qui ut dominium per situm tractandus est. Si hospes est dominium primarium retis, aut unum ex dominiis basalibus communis formae solutionis configuratis in campo **Site URL**, relatio automatica dominii mappati omittitur, ut illud dominium basale commune omnibus sitibus qui eo utuntur praesto maneat.

Cum emptor novum dominium per Domain Seller v1.3.0 aut recentiorem registrat, Ultimate Multisite dominium registratum ad situm retis emptoris automatice per defaltam mappat. Administratores iam non necesse habent relationem separatam dominii mappati addere post registrationem felicem, nisi optiones mutare velint, ut indicem dominii primarii, statum activationis, aut tractationem SSL.

**Gradus** aut status mutari debet ex **DNS exploratur** in **Paratum**, si omnia recte configurata sunt.

<!-- Captura tegumenti non praesto: Ordo dominii ostendens gradum DNS exploratur in indice dominiorum -->

<!-- Captura tegumenti non praesto: Ordo dominii ostendens gradum Paratum cum indice status viridi -->

Si nomen dominii premas, aliquas optiones intra illud videre poteris. Celeriter eas inspiciamus:

![Pagina singularium dominii cum gradibus, situ, commutationibus activi, primarii et SSL](/img/admin/domain-edit.png)

**Gradus:** Hic est gradus in quo dominium versatur. Cum primum dominium addis, probabiliter erit in gradu **DNS exploratur**. Processus inscriptiones DNS inspiciet et confirmabit eas rectas esse. Deinde dominium in gradu **SSL exploratur** ponetur. Ultimate Multisite explorabit utrum dominium SSL habeat necne, et dominium tuum ut **Paratum** aut **Paratum (sine SSL)** ordinabit.

**Situs:** Subdominium quod cum hoc dominio consociatur. Dominium mappatum contentum huius situs specifici ostendet.

**Activum:** Hanc optionem accendere aut exstinguere potes ut dominium actives aut deactives.

**Estne Dominium Primarium?:** Emptores tui plus quam unum dominium mappatum pro quoque situ habere possunt. Utere hac optione ut eligas utrum hoc sit dominium primarium pro situ specifico.

**Estne Securum?:** Quamquam Ultimate Multisite explorat utrum dominium certificatum SSL habeat necne antequam id habilitet, manualiter eligere potes dominium cum certificato SSL aut sine certificato SSL onerare. Nota quod, si situs interretialis certificatum SSL non habet et eum cum SSL vi onerare conaris, errores tibi dare potest.

### Nomen dominii proprii ut usor Subsitus mappare {#mapping-custom-domain-name-as-subsite-user}

Administratores subsitus quoque nomina dominiorum propria ex tabula administrativa subsitus sui mappare possunt.

Primum, curare debes ut hanc optionem sub configurationibus **mappationis dominiorum** habilites. Vide capturam tegumenti infra.

<!-- Captura tegumenti non praesto: Configurationes mappationis dominiorum quae usoribus subsitus permittunt dominia per commutationem Administrationis DNS Emptoris mappare -->

Hanc optionem etiam statuere aut configurare potes sub gradu **Consilii** aut optionibus producti in **Ultimate Multisite > Producta**.

![Sectio Dominiorum Propriorum in pagina editionis producti](/img/config/product-custom-domains.png)

Cum quaelibet ex illis optionibus habilitata est et usori subsitus licet nomina dominiorum propria mappare, usor subsitus videre debet metabox sub pagina **Account** nomine **Dominia**.

<!-- Captura tegumenti non praesto: Metabox Dominiorum in pagina Account subsitus cum globulo Adde Dominium -->

Usor globulum **Adde Dominium** premere potest, et fenestram modalem cum quibusdam instructionibus aperiet.

<!-- Captura tegumenti non praesto: Modalis Adde Dominium ostendens instructiones DNS A-record pro usoribus subsitus -->

Deinde usor **Gradus Sequens** premere potest et pergere ad nomen dominii proprii addendum. Etiam eligere potest utrum hoc dominium primarium futurum sit necne.

<!-- Captura tegumenti non praesto: Forma Adde Dominium cum campo nominis dominii proprii et commutatione dominii primarii -->

<!-- Captura tegumenti non praesto: Gradus confirmationis Adde Dominium qui verificationem DNS incitat -->

Premere **Adde Dominium** processum verificandi et arcessendi informationem DNS dominii proprii incipiet.

### De Synchronizatione Dominiorum {#about-domain-syncing}

Synchronizatio Dominiorum est processus quo Ultimate Multisite nomen dominii proprii ad rationem hospitationis tuae addit ut dominium addititium **ut mappatio dominiorum operetur**.

Synchronizatio dominiorum automatice fit si provisor hospitationis tuus integrationem cum proprietate mappationis dominiorum Ultimate Multisite habet. Nunc hi provisores hospitationis sunt _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ et _Cpanel._

Cum integratio provisoris hospitis activa est, Ultimate Multisite etiam munus creationis DNS aut subdominii apud provisorem in ordinem inicere potest pro sitibus nuper creatis. Si nulla integratio illud munus auscultat, opus in fundo omittitur ut inscriptiones ordinis sine effectu vitentur. Explorationes DNS et SSL pro dominiis mappatis pergunt per processum ordinarium graduum dominii currere.

Hanc integrationem in configurationibus Ultimate Multisite sub tabula **Integrationis** activare debes.

![Tabula Integrationum in configurationibus Ultimate Multisite provisores hospitationis ostendens](/img/config/integrations-tab.png)

<!-- Captura tegumenti non praesto: Nexus Configurationis provisoris hospitationis in tabula configurationum Integrationum -->

_Nota quod, si provisor hospitationis tuus non est unus ex illis provisoribus supra memoratis,**opus erit nomen dominii manualiter synchronizare aut addere** ad rationem hospitationis tuam._
