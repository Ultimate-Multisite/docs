---
title: Registri API-punktan
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# La API-ponto de registri Ultima Multisite

En ĉi tiu tutoriavi vi lernos, kiel uzi la API-ponto `/register` de Ultimate Multisite por krei la tutan proceson de enontigo (onboarding) por novan klienton en via retoj kaj kiel faru tio per Zapier.

La punto uzas la metodon POST kaj estas nomita per la URL `_**https://yoursite.com/wp-json/wu/v2/register**_. En ĉi tiu vokado, 4 procesoj wird fili en via reta:

  * Nova WordPress-uuzo aŭ ĝia identigo per la utilizanto de la user ID wird kreita.

  * Nova Kliento en Ultimate Multisite aŭ ĝia identigo per la customer ID wird kreita.

  * Nova sitio sur la WordPress-reto wird kreita.

  * En la fini, nova Membro en Ultimate Multisite wird kreita.

Por ĉi tiu proceso vi bezonas vian API kredencojn. Por ili akiri ilin, dirigi al via admin-panelo de la reta, navigiu al **Ultimate Multisite > Settings** > **API & Webhooks**, kaj rigardu la sekcion "API Settings".

![Sekcio de API Settings en Ultimate Multisite](/img/config/settings-api.png)

Jen kompleta vido de la paĝo de API-parametroj:

![Kompleta paĝo de API parametroj](/img/config/settings-api-full.png)

Selekton **Enable API** kaj akiri vian API kredencojn.

Sekure, esploru la punto kaj tiam kreu agion de registriĝon en Zapier.

## Parametroj de la korpo de la punto (Endpoint body parameters) {#endpoint-body-parameters}

Jen supraĵo de la minimuma informacio, kiun vi bezonas envi por la punto. En la fini de ĉi tiu artikolo vi trovos la kompletan vokon.

### Kliento (Customer) {#customer}

Tio estas la informacio necesa por la proceso de kreado de la Uzo (User) kaj la Kliento en Ultimate Multisite:

"customer_id" : integer

Eble estas posible enviuri la ID de la kliento kreita en via rete. Se necedas aldonata, la informacio abov sera uzata por krei nova kliento kaj novan WordPress usuaron. La ID de la usulo ankaŭ povas esti sendita en la sama maniero kiel la ID de la kliento.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membereco** {#membership}

La única informo necesa ni ĉi tie en ĉi tiu objekto estas Membeko Statuso.

"membership" { "status" : "string", // unu el "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Produktoj** {#products}

Produktoj estas donita per array kun 1 aŭ pli ID de produktoj de via rete. Atendigu, ĉi tiu endpoint ne kreas produktojn. Kontu la dokumentadon de Ultimate Multisite por pli bone kompreni la endpoint de kreo de produktoj.

**"products" : [1,2],**

### Pagamento {#payment}

Kiel kun Membeko, ni bezonas nur la statuson.

**"payment" { "status" : "string", // unu el "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Sito {#site}

E por fermi la korpon ni bezonas la URL kaj Titolo de la sito, amba tied en la Objekto Sito.

**"site" : { "site_url" : "string", "site_title" : "string" }**

La returo de la register endpoint sera array kun la novkreita Membeko informo.

## Krei akcion en Zapier {#creating-an-action-in-zapier}

Con la introdukto de ĉi tiu nova kaj pli robusa endpoint de kreo de konto, vi ankaŭ alcastas novan akcion en Zapier.

Ĉu vi scias kiel uzui kaj ĝui ĉion, kion la nova versio de Zapier ofertas? Rian pli lerni ĉi tie. (link?)

### Krei akcion {#creating-an-action}

Por ke pli bone ilustri la juten kiel u uzui la registration endpoint kun Zapier, ni kreons integracion kun Google Forms. Kote iu forma estas plenumi kaj la informoj estas salvita en la respondo-tablo de la forma, nova membraĵo sera kreita en la retoj Ultimate Multisite ĉiam kiam tiu forma estas plenita.

En Google Forms, kreu formon kun la minimumaj lajojn necesaj por krei novan membrajn en la retoj.

<!-- Screenshot indisponabla: Forma de Google Forms kun lajoj por krei novan membrajn -->

Nove en Zapier, kreu novan Zap kaj konekti la kreitan forman en Google per la spreadsheet kie la datumoj estas salvita.

<!-- Screenshot indisponabla: Konfiguracio de trigger de Zapier konektita al spreadsheet de Google Forms -->

Fini! La forma de Google Forms estas konektita kun Zapier kaj lista por integriĝi kun la retoj. Nun mi moviĝos al la Ação kiu rezultas el la Trigger ki Google Forms trigas ĉiam kiam ĝi estas plenita.

Trovi la novan aplikon Ultimate Multisite kaj selekti ĝin. Por ĉi ti tipo de Zap elektu la opcio Registero (Register).

<!-- Screenshot indisponabla: Selektion de akcio de Zapier montrante la aplikon Ultimate Multisite kun opcio Registero -->

Post ĉi tiu unua paŝo, elektu la konton ki sera konekti per ĉi tiu Zap.<!-- Screenshot indisponabla: Paŝo de konekto de konto de Zapier por Ultimate Multisite -->

Tio estas la plej sensiva parto de la tuta procezo. Ni bezonas alini la lajojn, kiuj venis de Google Forms, kun la minimumaj lajoj necesaj por la registration endpoint, kiel montrit en la antaŭa sekcio de ĉi tiu artikolo.

En ĉi tiu ekzemplo, ni nur bezonas konfigurui la nomon uzanto (username), la e-mailon, la ŝlosilon, la nomon kaj la URL de la ĉezo. La resto estas antaŭdeterminita tiel ke ĉiuj membraj generitaj per ĉi tiu Google Forms sekvas la sama produkto kaj statajreto.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Kun vi la laŭ informoj, procedu al fini testoj. Sur la última ekrano vi povas vidi ĉiuj la kampojn, kiuj wirdi enviita al la endpointo, ilia respektiva informo kaj la kampojn, kiuj wirdi enviita sen informoj.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Testu vian novan Zap, kaj ĝi devas fini sukcese. Se iu eraro okazus, kontrolu ĉiuj kampojn kaj ĉu ili wirdi enviita ĝuste. Kiel ekzistas multaj informoj, certaj thing- povas pasigi sen notado.

### Kompleta parametroj de endpointo {#complete-endpoint-parameters}

Jen la kompleta vokado kaj ĉiuj la posibilitoj de kampoj, kiuj povas esti enviitaj.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // unu el "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // unu el "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
