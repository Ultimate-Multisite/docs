---
title: Quomodo configurare mappam domini
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# Quommodificare Mapparea Domeni (v2)

_**NOTĂ IMPORTANTĂ: Acest articol se referă la versiunea 2.x a Ultimate Multisite.**_

Una dintre cele mai puternice caracteristici ale unei rețele premium este capacitatea de a oferi clienților noștri ocazia să atașeze un domeniu de nivel superior (top-level domain) site-urilor lor. După toate acestea, care arată mai profesionist: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) sau [_**joesbikeshop.com**_](http://joesbikeshop.com)? De aceea Ultimate Multisite oferă această funcție încorporată, fără a fi nevoie de plugin-uri terțe.

## Ce este mapparea domeniilor (domain mapping)?

Așa cum sugerează numele, mapparea domeniilor este capacitatea oferită de Ultimate Multisite de a primi o cerere pentru un domeniu personal și de a asocia acea cerere cu site-ul corespunzător din rețea, atașând acel domeniu în mod specific.

### Cum să configurezi mapparea domeniilor pe rețeaua ta Ultimate Multisite

Mapparea domeniilor necesită unele setări de la tine pentru ca funcționeze. Fericit, Ultimate Multisite automatează munca grea pentru tine, astfel încât să poți îndeplebi ușor cerințele.

În timpul instalării Ultimate Multisite, wizard-ul va copia și instala automat **sunrise.php** în folderul desemnat. **Wizard-ul nu te va permite să pornești până când această etapă nu este finalizată**.

<!-- Screenshot unavailable: wizard de instalare Ultimate Multisite cu pasul sunrise.php -->

Asta înseamnă că, odată ce wizard-ul de instalare a Ultimate Multisite a finalizat configurarea rețelei tale, poți începe să mapezi domeniul personal imediat.

Notă: Mapparea domeniilor în Ultimate Multisite nu este obligatorie. Ai opțiunea de a folosi funcția nativă WordPress Multisite pentru mapparea domeniilor sau orice alt soluție de mappare a domeniilor.

Si necessitas desactiva la asignación de dominio de Ultimate Multisite para ceder el paso a otras soluciones de mapeo de dominio, puedes desactivar esta función en **Ultimate Multisite > Settings > Domain Mapping**.

![Página de configuración del mapeo de dominios mostrando redirección de administrador, mensaje de mapeo y opciones DNS](/img/config/domain-mapping-settings.png)

Justo debajo de esta opción también puedes ver la opción **Force Admin Redirect** (Forzar Redirección de Administrador). Esta opción te permite controlar si tus clientes podrán acceder a su panel de administración tanto en su dominio personalizado como en el subdominio o solo en uno de ellos.

Si seleccionas **Force redirect to mapped domain** (Forzar redirección al dominio mapeado), tus clientes solo podrán acceder a su panel de administración en sus dominios personalizados.

La opción **Force redirect to network domain** (Forzar redirección al dominio de la red) hará exactamente lo contrario: se les permitirá a tus clientes acceder a sus paneles solo en el subdominio, incluso si intentan iniciar sesión en sus dominios personalizados.

Y la opción **Allow access to the admin by both mapped domain domain and network domain** (Permitir acceso al administrador por dominio mapeado y dominio de red) les permite acceder a sus paneles de administración tanto en el subdominio como en el dominio personalizado.

![Menú desplegable de redirección de administrador expandido mostrando las tres opciones de redirección](/img/config/domain-mapping-redirect-options.png)

Hay dos maneras de mapear un dominio personalizado. La primera es mapeando el nombre del dominio desde el panel de administración de tu red como superadministrador y la segunda es a través del panel de administración del subsitio en la página de cuentas.

Pero antes de empezar a mapear el dominio personalizado a uno de los subsitios en tu red, deberás asegurarte de que la configuración de **DNS settings** (configuración DNS) del nombre del dominio esté correctamente configurada.

###

### Asegurarse de que la configuración DNS del dominio esté correctamente configurada

Utrem ad operam fungere, debes assicurati che il dominio che intendi mappare punti all'indirizzo IP della tua Rete. Nota bene: hai bisogno dell'indirizzo IP della Rete – l'indirizzo IP del dominio dove è installato Ultimate Multisite – non dell'indirizzo IP del tuo dominio personalizzato che vuoi mappare. Per cercare l'indirizzo IP di un dominio specifico, ti suggeriamo di andare su [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), ad esempio.

Per mappare correttamente il dominio, devi aggiungere un **A RECORD** alla tua configurazione **DNS** che punti a quell'**indirizzo IP**. La gestione del DNS varia molto tra i diversi registratori di dominio, ma ci sono molti tutorial online che coprono questo se cerchi " _Creare A Record su XXXX_ ", dove XXXX è il tuo registratore di dominio (es.: " _Creare A Record su_ _GoDaddy_ ").

Se ti trovi in difficoltà a far funzionare questa cosa, **contatta il supporto del tuo registratore di dominio** e loro potranno aiutarti con questa parte.

Se prevedi di permettere ai tuoi clienti di mappare i propri domini, dovranno fare questo lavoro da soli. Indica loro il sistema di supporto del loro registratore se non riescono a creare l'A Record.

### Mappare un nome di dominio personalizzato come Super Admin

Quando accedi come super admin sulla tua rete, puoi aggiungere e gestire facilmente i nomi di dominio personalizzati andando sotto **Ultimate Multisite > Domains**.

![Pagina dell'elenco dei domini in Ultimate Multisite](/img/admin/domains-list.png)

In questa pagina, puoi cliccare sul pulsante **Aggiungi Dominio** in alto e si aprirà una finestra modale dove potrai impostare e compilare il **nome del dominio personalizzato**, **il sottodominio** a cui desideri applicare il nome del dominio personalizzato e decidere se vuoi impostarlo come **dominio principale** o meno (nota che puoi mappare **più nomi di dominio a un singolo sottodominio**).

![Modal Aggiungi Dominio con nome dominio, selezione sito e interruttore dominio principale](/img/admin/domain-add-modal.png)

Dopo aver inserito tutte le informazioni, puoi cliccare sul pulsante **Aggiungi Dominio Esistente** in fondo.

Questo avvierà il processo di verifica e recupero delle informazioni DNS del tuo dominio personalizzato. Vedrai anche un log in fondo alla pagina per seguire il processo che sta svolgendo. Questo processo potrebbe richiedere qualche minuto per completarsi.

Ultimate Multisite v2.13.0 crea automaticamente anche la registrazione del dominio interno quando viene creato un nuovo sito su un host che dovrebbe essere trattato come un dominio per sito. Se l'host è il dominio principale della rete, o uno dei domini base del modulo di checkout condivisi configurati nel campo **URL del Sito**, la registrazione del dominio mappato automaticamente viene saltata in modo che il dominio base condiviso rimanga disponibile per ogni sito che lo utilizza.

Lo **Stato** o lo stato cambierà da **Verifica DNS** a **Pronto** se tutto è impostato correttamente.

<!-- Screenshot unavailable: Riga del dominio che mostra lo stadio Verifica DNS nell'elenco dei domini -->

<!-- Screenshot unavailable: Riga del dominio che mostra lo stadio Pronto con l'indicatore di stato verde -->

Se clicchi sul nome del dominio, potrai vedere alcune opzioni al suo interno. Diamo un'occhiata veloce a queste:

![Pagina dettagli dominio con interruttori per stadio, sito, attivo, principale e SSL](/img/admin/domain-edit.png)

**Stadius:** Hoc est stadium in quo dominio sit. Cum primum addebis dominum, probabile est esse in stadio **Checking DNS**. Processus hoc verificabit entries DNS et confirmitur quod sunt recti. Deinde, dominium erit posto in stadio **Checking SSL**. Ultimate Multisite verificabit si dominium habet SSL aut non et categoris domini tuum ut **Ready** vel **Ready (sine SSL)** ponetur.

**Site:** Subdominium quod cum hoc dominio associatur. Dominium mappatum ostendit contentum huius specifici siti.

**Active:** Hoc potest toggelare in onem vel in offem ut dominium activare aut deactivare possis.

**Is Primary Domain?:** Clientibus tuis potest esse plures domini mappati pro cito. Hoc optionem usque adhibe ut eligas si hoc est dominium primum pro sito specifico.

**Is Secure?:** Quamquam Ultimate Multisite verificat si dominium habet certificat SSL aut non antequam eam activare possis, tu manu selectare potes dominum cum vel sine certificato SSL carregi. Nota quod si situs sine certificato SSL est et probas eum forci carregi cum SSL, potest tibi erroribus dare.

### Mappatio nominis domini customici ut subsite user

Administradores subsite etiam nomina domini customica mappant ab dashboard admin subsite suum.

Primum, debet sic esse assura quod hanc optionem in statibus **Domain mapping** activas ponas. Specta screenshot infra.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Possuis etiam hanc optionem in level **Plan** vel in optionibus productis in **Ultimate Multisite > Products** ponere aut configurare.

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

Cum ut aliquid illis optiones erunt activae et usor subsitei permittatur nominibus domini customis mappandis, usor subsitei debet videri metabox subpagina **Account** vocata **Domains**.

<!-- Screenshot unavailable: Metabox Domains in pagina Account subsite con Tasti Add Domain -->

Usator potest cliquare in tasti **Add Domain**, et hoc aperiet window modalem cum quibusdam instructionibus.

<!-- Screenshot unavailable: Modalus Add Domain ostendens instructiones DNS A-record pro usueribus subsitei -->

Postea usor potest cliquare in **Next Step** et procedere ad additionem nominum domini customis. Etiam eligere potest si hoc sera primarius dominium sit an non sit.

<!-- Screenshot unavailable: Forma Add Domain cum campo nominum domini customis et interruttore dominii primari -->

<!-- Screenshot unavailable: Step confirmatione Add Domain qui verificationem DNS incipiat -->

Clic in **Add Domain** initium processus verificationis et captationis informationum DNS domini customis.

### De Synchronisatione Domini

Synchronizatio domini est processus ubi Ultimate Multisite nominem domini customis ad numerum hostings tuum addere ut dominium mappandi operaret.

Synchronizatio domini accipitur automatico si tua providura hostingis habet integrationem cum feature mappandi domini Ultimate Multisite. In hoc tempore, hae providorum hostingis sunt _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ et _Cpanel._

Cum integration host-provider activa est, Ultimate Multisite potest etiam enqueuare (enqueue) task creationem DNS vel subdomain pro provideri ad novos situs creatos. Si nullum integration hoc task audiat, job in background skipatur ut entries queue no-op evitari possint. Verificatio DNS et SSL pro nominibus domini mappatis continuant operari per ordinarium processum stage dominii.

Debes activar esta integración en la configuración de Ultimate Multisite bajo la pestaña **Integration**.

![Pestaña Integraciones en la configuración de Ultimate Multisite mostrando proveedores de alojamiento](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Enlaces de Configuración del proveedor de alojamiento en la pestaña Integraciones -->

_Nota: si tu proveedor de alojamiento no es uno de los mencionados anteriormente, **deberás sincronizar o añadir manualmente el nombre de dominio** a tu cuenta de alojamiento._
