---
title: Personalizatio Formuli Registratus Tuo
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---
# Customizare formularului tău de înregistrare

Pentru ca rețeaua ta să arate diferit de toate celelalte SaaS construite pe platforma WordPress, Ultimate Multisite îți permite să personalizezi paginile tale de înregistrare și login folosind funcția noastră **Checkout Forms**.

Deși sunt o modalitate ușoară și flexibilă pentru a experimenta cu abordări diferite atunci când încerci să convertești noi clienți, ele sunt folosite în principal pentru a crea formele de înregistrare personalizate. Acest articol are ca scop să-ți arăt cum poți face asta.

## Pagini de login și înregistrare:

După instalarea Ultimate Multisite, aceasta creează automat pagini de login și înregistrare personalizate pe site-ul tău principal. Poți modifica aceste pagini implicite oricând merg la pagina ta **Ultimate Multisite > Settings > Login & Registration**.

![Pagina de setări pentru login și înregistrare](/img/config/settings-general.png)

Iată o vedere completă a paginii de setări pentru login și înregistrare:

![Pagina completă de setări pentru login și înregistrare](/img/config/settings-login-registration-full.png)

Să privim fiecare dintre opțiunile pe care le poți personaliza pe pagina **Login & Registration**:

  * **Enable registration (Activați înregistrarea):** Această opțiune va activa sau dezactiva înregistrarea pe rețeaua ta. Dacă este dezactivată, clienții nu vor putea înregistra și abona la produsele tale.

  * **Enable email verification (Activați verificarea prin e-mail):** Dacă această opțiune este activată, clienții care se abonează la un plan gratuit sau la un plan plătit cu o perioadă de probă vor primi un e-mail de verificare și vor trebui să facă clic pe linkul de verificare pentru ca site-urile lor să fie create.

* **Pagina de registro predeterminada:** Esta es la página por defecto para el registro. Necesitas publicar esta página en tu sitio web y debe tener un formulario de registro (también conocido como formulario de pago o checkout) - donde tus clientes se suscribirán a tus productos. Puedes crear tantas páginas de registro y formularios de pago como desees, solo recuerda poner el shortcode del formulario de pago en la página de registro; de lo contrario, no aparecerá.

  * **Usar página de inicio de sesión personalizada:** Esta opción te permite usar una página de inicio de sesión personalizada, distinta a la página predeterminada wp-login.php. Si activas esta opción, puedes seleccionar qué página se usará para iniciar sesión en la opción **Página de inicio de sesión predeterminada** (justo debajo).

  * **Ofuscar la URL de inicio de sesión original (wp-login.php)**: Si quieres ocultar la URL de inicio de sesión original, puedes activar esta opción. Esto es útil para prevenir ataques de fuerza bruta. Si esta opción está activada, Ultimate Multisite mostrará un error 404 cuando un usuario intente acceder al enlace original wp-login.php.

  * **Forzar la publicación síncrona del sitio:** Después de que un cliente se suscriba a un producto en una red, el nuevo sitio pendiente debe convertirse en un sitio de red real. El proceso de publicación ocurre a través de Job Queue, de forma asíncrona. Activa esta opción para forzar que la publicación ocurra en la misma solicitud que el registro.

Ahora, veamos otras opciones que siguen siendo relevantes para el proceso de inicio de sesión y registro. Están justo debajo de **Otras opciones** en la misma página de Inicio de sesión y registro:

  * **Rol predeterminado:** Este es el rol que tus clientes tendrán en su sitio web después del proceso de registro.

* **Habilitare Jumper:** Hac et nunc brevetium Jumper in area admin creavit. Jumper permittit administratoribus saltare celeriter ad pantallas Ultimate Multisite, obiecta network et alios destinationes suportas sine perlustrando omnia menua. Turnum si hoc instrumentum navigationis celeris a interfacie admin custodire vis.

* **Adde utentem ad situs primum etiam:** Hanc optionem habilitandam, utentem post processum signup in sito principalis network tuum addere potest. Si hoc optionem habilides, sub ea apparerit optio ad determinandum **default role** huius utentium in tuo website.

* **Habilitare plurimas computa:** Utentibus permittit habere computa in diversis situs network tuo cum eodem adressa email. Si haec optio est off, clienti tuae non possunt creari computum in aliis websites operantibus in network tuo cum eodem adressa email.

Et hoc sunt omnia optiones relata ad login et registrationem quae personaliter customize possuris! Non oblivisciti conservare configurationes tuas postquam editum finis habes.

## Utilizare plurimum formarum registrationis:

Ultimate Multisite 2.0 offerre editor formarum checkout qui te permittit creare tantas formas quam vis, cum diversis campi, productis in offerta et alio.

Ambae paginae login et registrationis sunt incorporatae cum shortcodes: **[wu_login_form]** in pagina login et **[wu_checkout]** pro pagina registrationis. Possuit further personalizare paginam registrationis a formis checkout construendo vel creando.

Ad accessum ad hoc instrumentum, ad menu **Checkout Forms** ire, in barra laterali sinistra.

![Menu Checkout Forms in sidebar](/img/config/checkout-forms-list.png)

In hac pagina possuris omnes formas checkout quae habes.

Si novam creare vis, solum clicque in **Add Checkout Form** in parte superiore pagina.

Pudebis una ex una ex hoc tres optiones ut initium tuum: un pas, multi-pas sau nullo. Deinde, clicca ad **Mergi la Editor**.

![Ad Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

Alternativ, puoi edita sau duplica formos quae iam habes clicando in optionibus sub nomine eius. Ibi, invenies etiam optiones ad copiam shortcode formae vel ad deletionem formae.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

Si eligis unum ex passo unico aut multi-pas, forma checkout iam pre-populata est cum passi basis ut operari possit. Tunc, si vis, ad illam addere pasos extra possis.

### Editio Formae Checkout:

Ut dicimus ante, formas checkout pro omnibus finibus creare potes. In hoc exemplo laborabimus in formam registrationis.

Post navigandum ad editor formae checkout, da formam nomen (quod ad referentiam internam solum usum erit) et slug (utilizatus ad creationem shortcakes, dummodo).

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Formae sunt composita ex passi et campi. Novum passo addere potes clicando in **Add New Checkout Step**.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

In primo tabulae fenestra modalem, plenare contentum passi formae tuae. Da ei ID, nomen et descriptionem. Hoc item sunt in genere usati internamente.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step-content.png)

Postea, visibilitatem passi impone. Inter **Always show** (Semper ostende), **Only show for logged in users** (Solum ostende ad usitores logindos) vel **Only show for guests** (Solum ostende ad hōstes).

![Checkout step visibility options](/img/config/checkout-form-step-visibility.png)

In finibus, configura infine lo stile del passo. Questi sono campi facoltativi.

![Checkout step style configuration](/img/config/checkout-form-step-style.png)

Ora è il momento di aggiungere campi al nostro primo passo. Basta cliccare su **Aggiungi Nuovo Campo** e selezionare il tipo di sezione che desideri.

![Add New Field button](/img/config/checkout-form-step-with-fields.png)![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

Ogni campo ha parametri diversi da compilare. Per questa prima entrata, selezioneremo il campo **Username** (Nome Utente).

![Username field configuration](/img/config/checkout-form-username-content.png)![Username field parameters](/img/config/checkout-form-username-visibility.png)![Username field additional settings](/img/config/checkout-form-username-style.png)

Puoi aggiungere quanti passi e campi ti servano. Per mostrare i tuoi prodotti affinché i clienti possano sceglierne uno, usa il campo **Pricing Table** (Tabella Prezzi). Se vuoi permettere ai tuoi clienti di scegliere un modello, aggiungi il campo **Template Selection** (Selezione Modello). E così via.

_**Nota:** Se crei un prodotto dopo aver creato il tuo modulo di checkout, dovrai aggiungere il prodotto nella sezione Tabella Prezzi. Se non lo aggiungi, il prodotto non apparirà ai tuoi clienti sulla pagina di registrazione._

_**Nota 2:** username (nome utente), email, password, site title (titolo del sito), site URL (URL del sito), order summary (riepilogo ordine), payment (pagamento) e submit button (pulsante invia) sono campi obbligatori per creare un modulo di checkout._

Mentre lavori sul tuo modulo di checkout, puoi sempre usare il pulsante **Preview** (Anteprima) per vedere come i tuoi clienti vedranno il modulo. Puoi anche alternare tra la visualizzazione come utente esistente o come visitatore.

Finalmente, nelle **Opzioni Avanzate** puoi configurare il messaggio per la pagina di **Ringraziamento**, aggiungere snippet per tracciare le conversioni, aggiungere CSS personalizzato al tuo modulo di checkout o limitarlo a determinati paesi.

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

Puoi anche attivare o disattivare manualmente il tuo modulo di checkout azionando questa opzione nella colonna di destra, oppure eliminarlo permanentemente.

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

Non dimenticare di salvare il tuo modulo di checkout!

![Save Checkout Form button](/img/config/checkout-form-save.png)

Per ottenere lo shortcode del tuo modulo, clicca su **Genera Shortcode** e copia il risultato mostrato nella finestra modale.

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**Nota:** Dovrai aggiungere questo shortcode alla tua pagina di registrazione per averlo aggiunto a quel modulo di checkout._

## Preselezione prodotti e template tramite parametri URL:

Se vuoi creare tabelle prezzi personalizzate per i tuoi prodotti e preselezione sul modulo di checkout il prodotto o il template che il tuo cliente sceglie dalla tua pagina dei prezzi o dei template, puoi usare i parametri URL per questo.

### **Per i piani:**

Vai su **Ultimate Multisite > Prodotti > Seleziona un piano**. Dovresti vedere il pulsante **Clicca per copiare Link Condivisibile** in cima alla pagina. Questo è il link che puoi usare per preselezione questo specifico piano sul tuo modulo di checkout.

![Product page with shareable link button](/img/config/products-list.png)

Nota hoc link partibilis est solum **Planibus** validus. Linkes shareabili non possunt utpackages vel servitia utuntur.

### Pro templatis:

Si desideras pre-seleere templates sitorum in formulario checkout tuum, potes parameterem **?template_id=X** in URL paginae inscriptionis tuae uti. "X" debet esse substitutum per **numerum ID template**. Hoc numerum accipias ad **Ultimate Multisite > Sites**.

Clicca in **Manage** subito sub templato sitorum quod desideras usum. Numerum SITE ID videris. Solum hoc numerum ut hoc specifico templatum situm pre-selectum sit in formulario checkout tuo. In nostro casu, parameter URL esse debet **?template_id=2**.

![Lista situs ostendens ID template](/img/config/site-templates-list.png)

Digamus quod opus nostrum network website est [**www.mynetwork.com**](http://www.mynetwork.com) et pagina inscriptionis nostra cum formulario checkout sit in pagina **/register**. Thesaurus URL cum hoc templato pre-selectum esse utuerit utor lookset [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Et si vis, potest pre-seleere utros productos et templates in formulario checkout tuo. Omnia quod debet facere est copiare link shareabilis planitis et parameterem template in fine inestare. Ut res oritur [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
