---
title: Regjistro API Endpoint
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Endpoint-i API i Regjistrimitja e Ultimate Multisite

N këtë tutorial, do të mësoni se si të përdorni endpoint-in e API-së Ultimate Multisite /register për të krijuar gjithë procesin e hyrjes së një klientit të ri në rrjetin tuaj dhe si ta bëni këtë me Zapier.

Endpoint-i përdor metodën POST dhe quhet nga URL-i _**https://yoursite.com/wp-json/wu/v2/register**_. Në këtë thirrje, do të ekzekutohen 4 procese brenda rrjetit tuaj:

  * Do të krijohet një përdorues i ri WordPress ose identifikimi i tij përmes ID-së së përdoruesit.

  * Do të krijohet një Klient i ri në Ultimate Multisite ose identifikimi i tij përmes ID-së së klientit.

  * Do të krijohet një faqe e re në rrjetin WordPress.

  * Në fund, do të krijohet një Anëtarësi (Membership) e re në Ultimate Multisite.

Për këtë proces, do të keni nevojë për kredencialet tuaja API. Për t'i marrë, shkoni te paneli i administratorëve të rrjetit tuaj, navigoni te **Ultimate Multisite > Settings** > **API & Webhooks**, dhe kërkoni seksionin e API Settings.

![Seksioni i API Settings në Ultimate Multisite](/img/config/settings-api.png)

Këtu është një pamje e plotë e faqes së cilës:

![Faqja e plotë e API settings](http://img/config/settings-api-full.png)

Zgjidhni **Enable API** dhe merrni kredencialet tuaja API.

Tani, le të eksplorojmë endpoint-in dhe më pas krijojmë një veprim regjistrimi në Zapier.

## Parametrat e trupit të endpoint-it (Endpoint body parameters)

Le të shohim një përmbledhje të informacionit minimal që duhet të dërgojmë te endpoint. Në fund të këtij artikulli, do të gjeni thirrjen e plotë.

### Klienti (Customer)

Kjo është informacioni i nevojshëm për procesin e krijimit të Përdoruesit dhe Klientit Ultimate Multisite:

"customer_id" : integer

A është e mundur të dërgoni ID-në e klientit që keni krijuar në rrjetin tuaj. Nëse nuk paraqitet, informacionit më poshtë do të përdoret për të krijuar një klient dhe një përdorues WordPress të ri. ID-ja e përdoruesit mund të dërgohet gjithashtu në të njëjtën mënyrë si ID-ja e klientit.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membreshtia (Membership)**

Vetëm informacioni që na duhet brenda këtij objekti është Statusi i Membreshties.

"membership" { "status" : "string", // një nga "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Produkte (Products)**

Produkte mund t'u japin një array me 1 ose më shumë ID-ve të produktit nga rrjeti juaj. Kujdes, ky endpoint nuk krijon produkte. Kontrolloni dokumentacionin e Ultimate Multisite për të kuptuar më mirë endpoint-in e krijimit të produktit.

**"products" : [1,2],**

### **Pagesa (Payment)**

As me Membreshtin, ne kemi nevojë vetëm për statusin.

**"payment" { "status" : "string", // një nga "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### **Siti (Site)**

Dhe për të mbyllur trupin, ne kemi nevojë edhe për URL dhe Titullin e faqes së internetit brenda objektit Site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Kthimi i endpoint-it register do të jetë një array me informacionin e ri të membreshties krijuar.

## Krijimi i një aksioni në Zapier

Me hyrjen e këtij endpointi të ri dhe më të fortë për krijimin e llogrive, ju do të aksesoni edhe një aksion të ri në Zapier.

A dini se si të përdorni dhe të merrni kënaqësinë nga çdo gjë që ofron versioni i ri i Zapier? Mëso më shumë këtu. (link?)

### Krijimi i një aksioni

Për të ilustruar më mirë se si të përdorni endpoint-in e regjistrimit me Zapier, le të krijojmë një integrim me Google Forms. Çdo herë që ky form mbulohet dhe informacioni ruhet në fletën e përgjigjeve të formës, do të krijohet një anëtarje (membership) e re në rrjetin Ultimate Multisite.

Në Google Forms, krijoni një formë me minimum fushat që janë të nevojshme për të krijuar një anëtarje të re në rrjet.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Tani, në Zapier, krijoni një Zap të ri dhe lidhni formën e krijuar në Google përmes spreadsheet-it ku datoja ruhet.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Kthehu! Forma e Google Forms është lidhur me Zapier dhe gati për integrim me rrjetin. Tani le të kalojmë te Aksioni që do të rezultojë nga Trigger-i që Google Forms shkakton çdo herë që mbulohet.

Gjeni aplikacionin e ri Ultimate Multisite dhe zgjidhini atë. Për këtë lloj Zapi, zgjidhni opsionin Register (Regjistrohu).

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Pas kësaj hapi të parë, zgjidhni llogarin që do të lidhet me këtë Zap.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Ky është pjesa më e ndjeshme e gjithë procesit. Duhet të përshtatni fushat që vijnë nga Google Forms me minimum fushat e nevojshme për endpoint-in e regjistrimit, siç tregohet në seksionin e mëparshëm të kësaj artikulli.

Në këtë shembull, ne duhet vetëm të konfigurojmë emrin e përdoruesit (username), emailin, fjalëkalimin, emrin dhe URL-n e faqes së internetit. Pjesa tjetër është e përcaktuar paraprakisht që të të gjitha anëtarjet që gjenerohen në këtë Google Forms ndjekin të njëjtin model produkti dhe statusi.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Kur informacione të vendosura, vazhdo me testin final. Në ekranin e fundit mund të shihni të gjitha fushat që do dërgohen në endpoint, informacionin e tyre dhe fushat që do dërgohen të zbrazëta.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Testoni Zap-in tuaj të ri dhe ai duhet të përfundojë me sukses. Nëse ndodh ndonjë gabim, kontrolloni të gjitha fushat dhe nëse po dërgohen si duhet. Sepse ka shumë informacion, disa gjëra mund të mos vërehen.

### Parametrat e plotë të endpoint-it

Këtu është thirrja e plotë dhe të gjitha mundësitë për fushat që mund të dërgohen.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // një nga "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // një nga "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
