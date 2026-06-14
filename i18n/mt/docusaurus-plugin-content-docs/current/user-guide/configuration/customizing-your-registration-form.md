---
title: |-
  Ażurazzjoni tal-Form ta Registrazzjoni Tieħu

  Customize the form your registration form
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---
# Austomizzazzjoni tal-Form ta Registrazzjoni tiegħek

Biex tgħmel il-network tiegħek uniku min kull SaaS li مبني fuq piattaforma WordPress, Ultimate Multisite jippermettix lik austomizzja l-pagine ta registrazzjoni u login tiegħek b'attravert il-feature **Checkout Forms** (Forma tal-Checkout) tagħna.

Kif ma jkunx seħħija u flessibbli bħala mod biex ti esperimentat approċċi differenti meta tgħross b'new klijenti, huma biex tisteqsu biex tgħmli formi ta registrazzjoni personalizzati. Dan l-artikolu jurfek kif tista' tfarmi dan.

## Pagine tal-Login u Registrazzjoni:

Imkien ma terinstallat Ultimate Multisite, huwa jikkonċerta' pagine ta login u registrazzjoni personali fuq sit tiegħek primari. Tista' tgħmli mudified lill-pagine default mill-istess waqt li tmur għand **Ultimate Multisite > Settings > Login & Registration**.

![Login and Registration settings page](/img/config/settings-general.png)

Hawn huwa ispettattiv tal-pajna ta impostazzjoni tal-login u registrazzjoni:

![Login and Registration settings full page](/img/config/settings-login-registration-full.png)

Għalna nifhmu kull opzjoni li tista' austomizza fuq pajnt **Login & Registration**:

  * **Enable registration (Attiva registrazzjoni):** Dan l-opzjoni tagħmel attivi jew taħalli l-registrazzjoni fuq il-network tiegħek. Jekk hija mġibba b'offola, il-klijenti tiegħek ma jistgħux jiddegraġaw u jsogħtu għall-prodotti tiegħek.

  * **Enable email verification (Attiva verifikazzjoni tal-email):** Jekk dan l-opzjoni hija mġibba, il-klijenti li jsogħtu għal plan free jew plan b trial tagħmel it-trial jidperjettaw email ta verifikazzjoni u għandhom jiklik fuq is-link ta verifikazzjoni biex siti tiegħhom jitcreaw.

* **Pajdina registrazzjoni default:** Dan hija pajdina default għall-registrazzjoni. Il-pajdina dan tfittex pubblika fuq il-website tiegħek u għandha form ta registrazzjoni (japputizzat b'form tal-checkout) – li jekk il-klientijiet tiegħek jissubskribbu l-prodotti tiegħek. Tista' tgħmli qasir pajdiniet registrazzjoni u formijiet tal-checkout kif għandek biex, iżda għażel tista' tqedda l-shortcode tal-checkout fuq pajdina registrazzjoni, it-tieni ma jurix.

* **Uża pajdina login kustom:** Dan l-optsjoni t'idixxi li tista' uża pajdina login kustoma, oħra minn il-pajdina default wp-login.php. Jekk dan optsjoni tiddir aktiva, tista' tagħżel qed pajdina se tista' uża għall-login fuq l-optsjoni **Default login page** (tajjeb ta' qabel).

* **Obfuskazzjoni tal-URL tal-login oriġinali (wp-login.php)**: Jekk tista' tgħmli l-URL tal-login oriġinali (wp-login.php) ma juriš, tista' tiddir aktiva dan optsjoni. Dan huwa utlu biex tneħħi attruvi bruttali (brute-force attacks). Jekk dan optsjoni tiegħek aktiva, Ultimate Multisite hija tfisser l-404 error meta l-utenti jipprovvdi għall-link oriġinali tal-wp-login.php

* **Forza pubblikazzjoni sinkrona:** Wara li l-klient jissubskribba għal prodott fuq reġistrazzjoni, il-site ġdid li qed jipprovvdi għandu jkun konvertit b'site reġistrazzjoni reġistrat. Il-proċess ta pubblikazzjoni juri minn Job Queue, asinkron. Aktiva dan optsjoni biex tforza l-pubblikazzjoni li tipprovvdi fl-istess request tal-signup.

Morn, nista' nisħidu oħra opzjonijiet li għad hija rilevanti għall-proċess ta login u registrazzjoni. Hum qabel **Other options** fuq l-pajdina Login & registration:

* **Rolle default:** Dan hija il-ròlla li l-klientijiet tiegħek jgħandu fuq is-sitemap tagħhom wara proċess l-signup.

* **Abella Jumper:** Ifigga l-Jumper (Jumper) f'aktiva l-shortcut f'admin area. Il-Jumper jippa l-administratori malajrabbil għall screens ta Ultimate Multisite, objetti tal-network u destinazzjonijiet oħra supportati b'mod veloq, biex ma jgħandu menu kaskid. Ifigħu fl-off se tista' tgħmlu li l-navigazzjoni veloqa tiegħu tinġibixxija mill-interface tal-admin.

* **Aggiungi utenti għas-siti principali:** Ttajba dan l-opzione tiddir l-utenti fl-site principal tal-network tiegħek ukoll wara proċess il-signup. Jekk tajba dan l-opzione, tista' turlar opzione biex tgħmlu is-**default role** (ruolo default) għall utenti hawn fuq is-siti tiegħek.

* **Attiva konti multipli:** Permetti li l-utenti jkun għandhom konti f'siti differenti tal-network tiegħek ma għandhomx is-email isiem. Jekk dan l-opzione hija off, il-klijenti tiegħek ma jistgħux jagħmlu kont fuq siti oħra li qed jintiegħdu fuq network tiegħek b'is-email isiem.

U dan huma l-opzioni relatati mal-login u registrazzjoni li tista' tgħmlu personalizzazzjoni! Ma t-għalba l-settings tiegħek qabel ma tgħmlu il-editing tiegħek.

## Użu ta formi registrazzjoni multipli:

Ultimate Multisite 2.0 joffresse editur tal-formi checkout li jippermettik la tista' tgħmli qasir formi kif għandek b'mod, ma għandhom field differenti, prodotti offerti u baċċini, ecc.

Il-pajni tal-login u registrazzjoni huma embedded b shortcodes: **[wu_login_form]** fuq pajn il-login u **[wu_checkout]** għall pajn il-registrazzjoni. Tista' tista' personalizza l-pajn tal-registrazzjoni aktar biex tgħmli oħra formi checkout jew tista' tgħmlih.

Biex tivvola dan il-feature, għandi tmur għal menu **Checkout Forms**, fuq il-sidebar sejn.

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

Fuq dan pajn, tista' tara kull formi checkout li għandek.

Jekk tixtieq tgħmli waħda nuova, ssegui l-opzione **Add Checkout Form** fuq l-top tal-pajn.

Possapli tagħmel xi opzioni biex tibda: single step (istep unit), multi-step (istep multiplu) jew blank (mali). Poi, għoss biex tmur għall Editor.

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

Alternativament, tista' tgħmli o duplika il-formijiet li għandek skont bil klick fuq l-opzioni taqrabha. Għalfejn, tista' tikkolopi wkoll l-shortcode tal-form jew tixleb il-form.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

Jekk tagħżel single step jew multi-step, il-checkout form jkun dejjem pre-populat mal-istep biex jgħandu. Poi, jekk tixtieq, tista' tanzik istep ekstra għalih.

### Edita Checkout Form:

Bħabbien qed nferma, tista' tgħmli checkout forms għal fini differenti. F'dan l-eżempju, nġogħdu fuq form ta registrazzjoni.

Wara li tmur għall editor tal-checkout form, ġib isimbiel lil form (li jutilizzat biss biex tiffra interna) u slug (li jutilizzat biex tgħmli shortcakes, biex ma tiffra).

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Il-forms jinquadru fil-istep u fil-fieldijiet. Tista' tanzik istep جديد biex tklick fuq **Add New Checkout Step**.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

Fil-tab ewliem tal-modal window, iġib il-kontenut tal-istep tal-form tiegħek. Ġibli ID, isimbiel u deskrizzjoni. Dan l-elementi jutilizzaw flès biex tiffra interna.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step-content.png)

Mentre, set il-visibilità tal-istep. Tista' tagħżel bejn **Always show** (tara dejjem), **Only show for logged in users** (tara biss għall utenti li jkun loggati) jew **Only show for guests** (tara biss għal biskit).

![Checkout step visibility options](/img/config/checkout-form-step-visibility.png)

Nidfreti, configura il stile dei passaggi (step style). Questi campi sono opzionali.

![Checkout step style configuration](/img/config/checkout-form-step-style.png)

Ora è il momento di aggiungeri campi al nostro primo passaggio. Basta cliccare su **Add New Field** e selezionare il tipo di sezione che vuoi.

![Add New Field button](/img/config/checkout-form-step-with-fields.png)![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

Ogni campo ha parametri diversi da compilare. Per questa prima introduzione, selezioneremo il campo **Username** (Nomi Utente).

![Username field configuration](/img/config/checkout-form-username-content.png)![Username field parameters](/img/config/checkout-form-username-visibility.png)![Username field additional settings](/img/config/checkout-form-username-style.png)

Possibilità di aggiungi quanti passaggi e campi ti servu. Per mostrare i tuoi prodotti in modo che i clienti possano sceglieri uno, usa il campo Pricing Table (Tabella Prezzi). Se vuoi permettere ai tuoi clienti di scegliere un template, aggiungi il campo Template Selection (Selezione Template). E così via.

_**Nota:** Se crei un prodotto dopo aver creato il tuo modulo di checkout, dovrai aggiungerlo nella sezione Pricing table. Se non lo aggiungi, il prodotto non apparirà ai tuoi clienti sulla pagina di registrazione._

_**Nota 2:** username, email, password, site title (titolo del sito), site URL (URL del sito), order summary (riepilogo dell'ordine), payment (pagamento) e submit button (pulsante invia) sono campi obbligatori per creare un modulo di checkout._

Mentre lavori sul tuo modulo di checkout, puoi sempre usare il pulsante Preview per vedere come vedranno i tuoi clienti il modulo. Puoi anche alternare tra la visualizzazione come utente esistente o come visitatore.

![Preview button on the checkout form editor](/img/config/checkout-form-preview-button.png)![Checkout form preview as visitor or existing user](/img/config/checkout-form-preview-modal.png)

Nidħa, fil-**Advanced Options** (Opzijonijiet Avanzati) puoi tsetConfiga l-messaġġ għall-pajsa tal-**Thank You** (Grazzi), tiddispoċċi snippet biex ttraccja l-konvertimenti, tiddispoċċi CSS kustom biex tiġi applikat form il-checkout tiegħek jew tixhemhu għal nazzjonijiet speċifiċi.

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

Tista' tfattiva jew tixhemha b'mod manuali l-form il-checkout tiegħek billi tagħmel clic fuq dan l-opzione fil-kolonna destra, jew tal-nuqqas permanent l-form.

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

Ma t-forse t-għid tfajti l-form il-checkout tiegħek!

![Save Checkout Form button](/img/config/checkout-form-save.png)

Biex tiġi l-shortcode tal-form tiegħek, clicca fuq **Generate Shortcode** (Genera Shortcode) u kopja l-risult li jappari fil-modal window.

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**Nota:** Tista' tfattiva dan l-shortcode fuq pajsa l-registrazzjoni tiegħek biex tiġi aji l-form il-checkout tiegħek.*

## Pre-selezzjoni tal-prodotti u template b'parametru URL:

Jekk tixtieq twella tabelle tal-prezzi kustomizzata għall-prodotti tiegħek u tista' tixhemha fuq l-form il-checkout il-prodott jew template li l-klijent tiegħek jieħż tal-tabela tal-prezzi tiegħek jew pajsa templates, puoi tista' tistella parametri URL għal dan.

### **Biex għall-plans (Plans):**

Irrid għand **Ultimate Multisite > Products > Select a plan**. Dovrhom t-tara l-botton **Click to copy Shareable Link** (Clicca biex tkopja Link Iżgurabbli) fuq l-top tal-pajsa. Dan huwa l-link li puoi użah biex tixhemha pre-selezzjoni għall-plan speċifiku dan fuq il-form il-checkout tiegħek.

![Product page with shareable link button](/img/config/products-list.png)

L-link shareable huwa valido għal **Plans** biss. Ma tista'x uża linkijiet shareabili għall-package jew servizzi.

### Għal templates:

Jekk tixtieq ispejċjalment siti templates fuq form tal-checkout tiegħek, tista' uża il-parameter: **?template_id=X** fuq URL taqrejtrazzjoni tiegħek. Il- "X" għandu jintiegħed b'il- **num id template**. Biex tiġi għal dan num, għandi tmur għand **Ultimate Multisite > Sites**.

Iċċekkja fuq **Manage** qabel tal-site template li tista' uża. Taraw il-NUM ID ta'siti. Uża biss dan num għal dan site template speċifiku biex jkun ispejċjalment selekṭat fuq form tal-checkout tiegħek. F'dan każ waqt, il-parameter URL huwa **?template_id=2**.

![Sites list showing site template ID](/img/config/site-templates-list.png)

Immerja li is-siti ta nnetz tiegħene huwa [**www.mynetwork.com**](http://www.mynetwork.com) u l-pagina tal-qrejtrazzjoni tiegħene b'form tal-checkout hija located fuq il- **/register**. Il-URL kollu mal-template speċifiku selekṭat jkun kif jiddeħħol: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

U jekk tixtieq, tista' uża ispejċjalment selekṭat prodotti u templates fuq form tal-checkout tiegħek. Il-għadd li għandek uġrifa huwa li tkopja il-link shareable tal-plan u tistempli l-parameter template fl-aħħar. Jkun kif jiddeħħol: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
