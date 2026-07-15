---
title: Mercedem accipere
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Mercedem accipere (v2)

_**NOTA GRAVIS: Hic articulus ad Ultimate Multisite versionem 2.x refertur.**_

Ultimate Multisite systema sodalitatis et rationum exigendarum inclusum habet. Ut systema nostrum rationum exigendarum fungatur, communissimas portas solutionum in commercio electronico adhibitas integravimus. Portae solutionum praedefinitae in Ultimate Multisite sunt _Stripe_ , _PayPal_ , et Solutio Manualis. Etiam _WooCommerce_ , _GoCardless_ et _Payfast_ uti potes ad solutiones accipiendas, eorum additamentis propriis institutis.

## Optiones fundamentales {#basic-settings}

Quamlibet harum portarum solutionum sub optionibus solutionum Ultimate Multisite configurare potes. Id invenire potes eundo ad **Ultimate Multisite menu > Settings > Payments.**

![Pagina optionum solutionum in Ultimate Multisite tabulam Solutionum ostendens](/img/config/payments-settings-page.png)

Antequam portam solutionis tuam instituas, quaeso inspice optiones fundamentales solutionum quas configurare potes:

**Renovationem automaticam cog** **e:** Hoc efficiet ut solutio automatice recurrat in fine cuiusque cycli rationum exigendarum, secundum frequentiam rationum quam usor elegit.

<!-- Imago tegumenti non praesto: optio commutatoria Force Auto-Renew in pagina optionum Payments -->

Ultimate Multisite v2.13.0 inspicit utrum porta activa credentialem renovationis iterum adhibibilem habeat antequam sodalitatem recurrentem cum renovatione automatica activa servet. Credentiale renovationis potest esse subscriptio portae, pactum rationum exigendarum, tessera arcae servata, aut methodus solutionis aequivalens iterum adhibibilis. Si porta refert nullum credentiale utile exstare, Ultimate Multisite sodalitatem servat sed renovationem automaticam avertit et statum credentialis absentis notat, ut administrator vel cursus subsidii emptorem rogare possit ut solutionem ante diem renovationis rursus auctoritate confirmet.

Hoc prohibet ne sodalitas videatur automatice renovari cum porta tantum solutiones semel factas colligere possit. Additamenta portarum confirmare debent processus solutionis recurrentes credentiale iterum adhibibile servare, praesertim cum porta modos tam captionis semel factae quam solutionis in arca/subscriptione servatae sustineat.

**Experimenta sine methodo solutionis permitte:** Hac optione activa, cliens tuus nullam informationem nummariam in processu registrationis addere debebit. Hoc tantum requiretur cum tempus experimenti exspiraverit.

<!-- Imago tegumenti non praesto: optio commutatoria Allow Trials Without Payment Method in pagina optionum Payments -->

**Mitte cautionem post confirmationem solutionis:** Hoc tibi optionem dat utrum cautionem post solutionem mittere vel non mittere velis. Nota usores accessum habituros esse ad historiam solutionum suarum sub Dashboard situs subsidiarii sui. Haec optio ad portam Manualem non pertinet.

<!-- Imago tegumenti non praesto: optio commutatoria Send Invoice on Payment Confirmation in pagina optionum Payments -->

**Schema numerationis cautionum:** Hic eligere potes aut codicem relationis solutionis aut schema numerorum sequentium. Si eligis codicem relationis solutionis pro cautionibus tuis uti, nihil configurare debes. Si eligis schema numerorum sequentium uti, configurare debebis **numerum cautionis proximum** (Hic numerus adhibebitur ut numerus cautionis pro proxima cautione in systemate generata. Uno augetur quoties nova cautio creatur. Eum mutare et servare potes ut numerum sequentem cautionum ad valorem certum reponas) et **praefixum numeri cautionis.**

<!-- Imago tegumenti non praesto: index demissus schematis numerationis cautionum cum optionibus Payment Reference Code et Sequential Number -->

<!-- Imago tegumenti non praesto: campi numeri cautionis proximi et praefixi numeri cautionis ostensi cum Sequential Number eligitur -->

## Ubi portae inveniantur: {#where-to-find-the-gateways}

Portas solutionum in eadem pagina instituere potes ( **Ultimate Multisite > Settings > Payments**). Statim infra **portas solutionum activas** , videre poteris: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ et _Manual_.

![Sectio portarum solutionum activarum quae Stripe, Stripe Checkout, PayPal et Manual enumerat](/img/config/payments-active-gateways.png)

Articulum proprium pro unaquaque porta solutionis habemus, qui te per gradus institutionis ducet; eum in nexibus infra invenire potes.

Singula solutionis videre et recensere potes:

![Interfacies recensendi solutionem](/img/admin/payment-edit.png)

Ecce plena paginae recensendi solutionem conspectio:

![Plena interfacies recensendi solutionem](/img/admin/payment-edit-full.png)

Ecce etiam plena conspectio optionum portarum solutionum:

![Plena pagina optionum portarum solutionum](/img/config/settings-payments-gateways-full.png)

**Portam Stripe instituere**

**Portam PayPal instituere**** **

**Solutiones manuales instituere**

Nunc, si _WooCommerce_ , _GoCardless_ vel _Payfast_ uti vis ut porta solutionis tua, debebis **eorum additamenta instituere et configurare**.

### Quomodo additamentum WooCommerce instituatur: {#how-to-install-the-woocommerce-add-on}

Intellegimus _Stripe_ et _PayPal_ in nonnullis terris praesto non esse, quod usores Ultimate Multisite impedit vel cohibet ne additamentum nostrum efficaciter utantur. Itaque additamentum creavimus ad _WooCommerce,_ integrandum, quod est additamentum commercii electronici valde populare. Programmatores per orbem terrarum additamenta creaverunt ad diversas portas solutionum cum eo integrandas. Hoc commodum adhibuimus ut portas solutionum, quibus uti potes cum systemate rationum exigendarum Ultimate Multisite, amplificaremus.

_**GRAVE:** Ultimate Multisite: WooCommerce Integration requirit WooCommerce saltem in situ principali tuo activari._

Primum, quaeso vade ad paginam additamentorum. Eam invenire potes eundo ad **Ultimate Multisite > Settings**. Mensam **Add-ons** videre debes. Preme **Check our Add-ons**.

<!-- Imago tegumenti non praesto: mensa Add-ons in laterali Ultimate Multisite Settings cum nexu Check our Add-ons -->

Postquam **Check our Add-ons** presseris, ad paginam additamentorum redirigeris. Hic omnia additamenta Ultimate Multisite invenire potes. Preme additamentum **Ultimate Multisite: WooCommerce Integration**.

![Pagina additamentorum quae additamenta Ultimate Multisite enumerat, incluso WooCommerce Integration](/img/addons/addons-page.png)

Fenestra cum additamenti singulis apparebit. Tantum preme **Instrue Nunc**.

<!-- Captura tegumenti praesto non est: dialogus singulorum additamenti Ultimate Multisite WooCommerce Integration cum puga Install Now -->

Postquam institutio perfecta est, ad paginam modulorum additivorum redirigeris. Hic, tantum preme **In Rete Activa** et additamentum WooCommerce in rete tuo activabitur.

<!-- Captura tegumenti praesto non est: pagina modulorum additivorum cum vinculo Network Activate pro additamento WooCommerce Integration -->

Postquam id activaveris, si adhuc modulum additivum WooCommerce in situ interretiali tuo institutum et activatum non habes, monitum accipies.

<!-- Captura tegumenti praesto non est: monitum administratoris, quod admoneat ut modulum additivum WooCommerce instituat et activet -->

Ut plura de additamento WooCommerce Integration legas, **hic preme**.

### Quomodo additamentum GoCardless instituatur: {#how-to-install-the-gocardless-add-on}

Gradus ad additamentum _GoCardless_ instituendum fere iidem sunt ac additamenti _WooCommerce_. Quaeso vade ad paginam additamentorum et elige additamentum **Ultimate Multisite: GoCardless Gateway**.

<!-- Captura tegumenti praesto non est: pagina additamentorum cum additamento Ultimate Multisite GoCardless Gateway illustrato -->

Fenestra additamenti apparebit. Preme **Instrue Nunc**.

<!-- Captura tegumenti praesto non est: dialogus singulorum additamenti Ultimate Multisite GoCardless Gateway cum puga Install Now -->

Postquam institutio perfecta est, ad paginam modulorum additivorum redirigeris. Hic, tantum preme **In Rete Activa** et additamentum _GoCardless_ in rete tuo activabitur.

<!-- Captura tegumenti praesto non est: pagina modulorum additivorum cum vinculo Network Activate pro additamento GoCardless Gateway -->

Ut discas quomodo cum porta _GoCardless_ incipias, **hunc articulum lege**.

### Quomodo additamentum Payfast instituatur: {#how-to-install-the-payfast-add-on}

Vade ad paginam additamentorum et elige additamentum **Ultimate Multisite: Payfast Gateway**.

<!-- Captura tegumenti praesto non est: pagina additamentorum cum additamento Ultimate Multisite Payfast Gateway illustrato -->

Fenestra additamenti apparebit. Preme **Instrue Nunc.**

<!-- Captura tegumenti praesto non est: dialogus singulorum additamenti Ultimate Multisite Payfast Gateway cum puga Install Now -->

Postquam institutio perfecta est, ad paginam modulorum additivorum redirigeris. Hic, tantum preme **In Rete Activa** et additamentum _Payfast_ in rete tuo activabitur.

<!-- Captura tegumenti praesto non est: pagina modulorum additivorum cum vinculo Network Activate pro additamento Payfast Gateway -->
