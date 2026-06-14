---
title: Pagina account clientis
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Pagina de Cuenta del Cliente (v2)

_**NOTA IMPORTANTE: Este artículo se refiere a Ultimate Multisite versión 2.x.**_

Cuando los clientes se suscriben a un plan en tu red, obtienen acceso a un sitio web y su panel de control con información importante sobre sus pagos, membresías, dominios, limitaciones del plan, etc...

En este tutorial, te guiaremos a través de la página de cuenta del cliente y verás lo que tus clientes pueden ver y hacer dentro de ella.

## La Página de Cuenta

La página de cuenta se accede haciendo clic en **Account** (Cuenta) dentro del panel de control de tu cliente.

![Menú de cuenta en el panel de control del cliente](/img/account-page/account-menu.png)

En redes de inquilinos soberanos (*sovereign tenant networks*), Ultimate Multisite v2.13.0 mantiene esta experiencia de gestión de clientes en el sitio principal. Si un cliente abre las opciones de cuenta, pago, facturación, factura, gestión del sitio, cambio de plantilla o mapeo de dominio desde un inquilino soberano, la acción vuelve al panel de cliente del sitio principal para que los registros de facturación y membresía de la red sigan siendo autoritativos.

Cuando el cliente llega desde un inquilino soberano, el panel de cliente del sitio principal puede incluir un enlace de retorno al sitio del inquilino. El enlace de retorno solo se muestra cuando Ultimate Multisite puede validar el destino de retorno como uno de los sitios del cliente, lo que evita redirecciones arbitrarias mientras se conserva el flujo de trabajo del inquilino.

![Resumen de la página de cuenta del cliente](/img/account-page/overview.png)

Después de que un cliente haga clic en ella, verá una visión general de su membresía, dirección de facturación, facturas, dominios, limitaciones del sitio y también podrá cambiar la ****Plantilla del Sitio** (si está permitido en tu red).

También pueden cambiar la membresía a otro plan, o comprar otro paquete o servicio que ofreces. Veamos cada sección por separado.

### Vistua Membrum Tuum:

Il primum blocco subito sub nomine situerii vestrorum clientium ostendit un brevis resumé planit et servitiorum/paquetum quae cum illo acquiritur. Blocco hoc etiam numerum membrorum, quantitatem initialem pagata pro eo, quomam plan et aliquae servitia/paquetum costant et quomam plerumque pro memoria illi facta sunt. Possunt etiam videre si membrum est **Activum**, **Expiratum** vel **Cancellatum**.

![Resumé membrorum ostendens plan, quantitatem et dettagli facturationis](/img/account-page/membership-card.png)

Sub hoc blocco, vestri clientes possunt videre blocos **De Hoc Situerio** et **Limites Situerii**. Haec blocca omnia limitationes quae ad planum suum veniunt: spatia disci, posts, paginae, visitatio, etc... Haec limitatio configurari possunt in choleque page planit in **Ultimate Multisite > Products**.

![Blocca De Hoc Situerio et Limites Situerii ostendens limitationes planit](/img/account-page/site-limits.png)

In dextra parte **Vistua Membrum** , clientes possunt cliccare in **Change** (Cambiare). Hoc annuntiat omnia plana et paquetta/servitia adhibita. Si alteram planum eligant, limitatio illi planit in loco limitationibus membrorum actuari - non est importans si planum degradant vel upgradant.

Nunc, si vestri clientes eligant acquirere paqueta vel servitia pro memoria actuaria - sicut plus spatii disci vel visitationum - membrum actuel non mutabitur sed solum nova paqueta ad illud adduntur.

Notandum est quod codices couponis in hoc pagina mutationis membrorum non addiri possunt. Si client codicem couponis usus est pro primo acquisto membrorum, codex etiam ad hoc novo membrum applicetur.

### Actualizare Adressi Facturationis:

In pagina account, clienti possunt etiam actualizari adreem facturandi. Sufficium est quod debent cliquare in **Update** pro _Billing Address_.

![Section Billing Address cu buton Update](/img/account-page/billing-address.png)

Nova finestra apparerit ad tuem clientem. Omnia quod debet facere est plenam adressam novam et cliquare in _Save Changes_.

![Form update billing address](/img/account-page/billing-address-form.png)

### Mutare Template Situi:

Ad permittendum vobis clientes mutare template situi, debet ad **Ultimate Multisite > Settings > Sites** ire et optionem **Allow Template Switching** activare.

In plure, in **Ultimate Multisite > Products**, eligite planva vester et ad tabulam **Site Templates** ire. Assurae sint optionem **Allow Site Templates** activata et in **Site Template Selection Mode**, optionem **Choose Available Site Templates** selectam.

![Tab product site templates cum modo selection template](/img/config/product-site-templates.png)

Omnia available sita templates in vester website videri possibiis. Eligite quae desideratis adhibere et quae non debent esse ad clientes subscribentes sub hoc plan. Notate quod haec optiones etiam formam checkout affectant, ita quaeque template est eligitur ut **Not Available** non apparerit in pagina registrationis pro hoc plan.

Nunc clienti vester poterunt cliquare in **Change Site Template** in pagina account their.

![Buton Change Site Template in pagina account](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 ostendit panel redesignatum pro mutando template. Panel inititur cum **current-template card**, ita ut clienti videri possint quam template est activus antequam replacement eligant.

Una cuadrícula persistente de plantillas de sitio disponibles permanece visible mientras los clientes revisan sus opciones. Esto les ayuda a comparar las plantillas permitidas para su plan sin perder de vista la selección actual.

![Lista de plantillas de sitio disponibles para el plan](/img/config/site-templates-list.png)

Después de seleccionar la que desean cambiar, se les pedirá que confirmen el cambio.

![Diálogo de confirmación del cambio de plantilla del sitio](/img/account-page/template-switch-confirm.png)

Después de activar la confirmación y hacer clic en **Process Switch** (Procesar Cambio), la nueva plantilla de sitio se utilizará en el sitio web de su cliente.

Los clientes también pueden usar **Reset current template** (Restablecer plantilla actual) desde este panel cuando necesiten restablecer el sitio a la plantilla asignada actualmente. Al igual que al cambiar a otra plantilla, restablecer una plantilla puede sobrescribir el contenido del sitio, por lo que los clientes solo deben confirmarlo cuando entiendan la acción de restablecimiento.

### Añadir dominios personalizados:

Sus clientes también tendrán la opción de añadir un dominio personalizado para este plan en su página de cuenta. Para permitir que sus clientes usen dominios personalizados, vaya a **Ultimate Multisite > Settings >** **Domain Mapping** (Mapeo de Dominios).

Active la opción **Enable Domain Mapping** (Habilitar Mapeo de Dominios). Esto permitirá que sus clientes utilicen dominios personalizados a nivel de red.

No olvide también comprobar si el mapeo de dominios está habilitado por producto, ya que puede limitar un producto para no permitir que sus clientes usen dominios personalizados.

Vaya a **Ultimate Multisite > Products** (Productos). Seleccione el plan de su elección y vaya a la pestaña **Custom Domains** (Dominios Personalizados). Active la opción **Allow Custom Domains** (Permitir Dominios Personalizados).

![Pestaña de Dominios Personalizados con el interruptor Permitir Dominios Personalizados](/img/config/product-custom-domains.png)

Hoc permittit omnes clienti subscribentes ad plan specificum ut domina customes utilis sint. Nunc, in page Account, vostri clienti possunt dominum customem addere per cliquem in **Add Domain**.

![Buton Add Domain in page account](/img/account-page/add-domain-button.png)

Prima finestra quae aperitur vobis omnibus clienti nuntium ostendit quomodo record DNS nostros actualizare debent ut hoc dominum customem in rete vestro operari possit.

![Instruktiones DNS ostant cum additione domini customici](/img/account-page/add-domain-dns.png)

Hoc nuntium potest redigere (per vos) in **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Setting Add New Domain Instructions in Domain Mapping](/img/config/settings-domain-mapping.png)

Hic est plena vista paginae configurationis mapping domini:

![Plena pagina setting domain mapping](/img/config/settings-domain-mapping-full.png)

Post cliquem in **Next Step**, vostri clienti possunt appellare nomen domini customici et eligere si hoc dominio customum primum erit. Notate quod vos vostri clienti potest uti plure dominis customibus pro suis tabulis, ita quoque eligere possunt quam primum sit.

![Entra nomen domini customici cum optionem domini primari](/img/account-page/add-domain-primary.png)

Post cliquem in **Add Domain**, dominium ad account vos clienti additur. Omnia quod nunc debent facere est mutare record DNS huius domini customici in registri dominii proprii.

### Mutatio Password:

In dashboard account, vostri clienti etiam potest mutare password per cliquem in **Change Password**.

![Buton Change Password in page account](/img/account-page/change-password-button.png)

Hic window nunc aperiet ubi clienti vobiscum debent confere password suum actuel et deinde novum password quod desiderant ut usque adhibere.

![Forma mutandi password cum campi currentem et novam password](/img/account-page/change-password-form.png)

### Zona Periculosa:

Habemus etiam duas optiones quae in parte **Zona Periculosa** ostendae sunt: **Delare Situs** et **Delare Account**. Ambae in parte Periculosa sunt quia haec duae actiones non reverti possunt. Si vobiscum clienti suum situs vel suum account delant, eos rediucere nec possunt.

![Zona Periculosa cum optionibus Delare Situs et Delare Account](/img/account-page/danger-zone.png)

Si vobiscum clienti in aliquid ex duabus optionibus hoc cliquant, aperiet window ubi debent optionem activare quae est rem situs vel account rimuovere, et eos adwarnantur quod haec actio non reverti potest.

![Dialogus confirmationis Delandi Situs](/img/account-page/delete-site-confirm.png)

![Dialogus confirmationis Delandi Account](/img/account-page/delete-account-confirm.png)

Si situs suum delant, account et membresia eius non tanguntur. Solum omnem contentum in suo sito perdent. Si account suum delant, omnes sita, membrania et informationes de hoc account perdentur.
