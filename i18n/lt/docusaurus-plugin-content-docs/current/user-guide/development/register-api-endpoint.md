---
title: Registruoti API endpointą
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# API skaitinklis Ultimate Multisite

Šiame tutoriale išmoksite, kaip naudoti Ultimate Multisite /register API endpointą, kad sukurotumėte visą įtraukimo procesą naujam klientui jūsų tinkluose ir kaip tai padaryti su Zapier.

Endpointas naudoja POST metodą ir vadinamas URL adresu _**https://yoursite.com/wp-json/wu/v2/register**_. Šiuo skolyje jūsų tinkluose bus atlikta 4 procesai:

  * Bus sukuriamas naujas WordPress vartotojas arba jo identifikavimas per vartotojo ID.

  * Bus sukuriamas naujas Klientas Ultimate Multisite arba jo identifikavimas per klientų ID.

  * Bus sukuramas naujas svetainė tinkluose WordPress.

  * Galiausiai bus sukurta nauja Abonentinė (Membership) Ultimate Multisite.

Šio procesui jums reikės jūsų API kredencijos. Ją gauti galite, einkant į savo tinklo administratorio panelį, nuskaitant **Ultimate Multisite > Settings** > **API & Webhooks**, ir ieškant API Settings sekcijos.

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

Štai visas skaitinklis API nustatymų puslapio:

![API settings full page](/img/config/settings-api-full.png)

Pasirinkite **Enable API** ir gaukite savo API kredencijas.

Dabar, ieškokime endpointo ir sukurime registracijos veiksmą Zapier'yje.

## Endpointo kūno parametrai {#endpoint-body-parameters}

Patikslinime minimalią informaciją, kurią turime siųsti endpointui. Šios straipsnio pabaigoje rasite visą skaitinklį.

### Klientas (Customer) {#customer}

Šis yra informacija, būtina vartotojo ir Ultimate Multisite Kliento kūrimui:

"customer_id" : integer

Jūsų tinkluose kur galima išsiųsti klientų ID, kuriuo jis buvo sukurtas. Jei jį netaisysite pateikti, žemiau pateikiama informacija bus naudota naujam klientui ir naujam WordPress vartotojui. Vartotojo ID taip pat galima siųsti tą pačia kaip klientų ID.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membriavimas** {#membership}

Visą informaciją, kuri mums reikia šio objekto viduje, yra Membriavimo Statusas.

"membership" { "status" : "string", // vienas iš: "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Produktai** {#products}

Produkatams pateikiama sąrašas su vienu ar daugiau tinklo produktų ID. Priezą, šis endpoint ne sukuria produktus. Visiškai suprantys produkto kūrimo endpointą, patikrinkite Ultimate Multisite dokumentaciją.

**"products" : [1,2],**

### Mokėjimai {#payment}

Tinkamai kaip ir su Membriavimu, mums reikia tik statuso.

**"payment" { "status" : "string", // vienas iš: "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Svetas {#site}

Ir kad užbaigtau, mums reikia svetainės URL adresą ir pavadinimą, bus viskas viduje Site objekto.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Registracijos endpointo atsakymas bus sąrašas su naujais sukurtomis membriavimo informacijomis.

## Veiksmo kūrimas Zapier'yje {#creating-an-action-in-zapier}

Šio naujo ir geresnio paskyros kūrimo endpointo įvedimo sukurti jums naują veiklą (action) Zapier'yje.

Ar žinote, kaip naudotis ir mėgautis visais, ką nauja versija Zapier siūlo? Mažiau informacijos ieškomos čia. (link?)

### Veiksmo kūrimas {#creating-an-action}

Norint geriau pateikti, kaip naudoti registracijos endpointą su Zapieriu, sukursime integraciją su Google Forms. Kai šis formai užpildomas ir informacija saugoma formos atsakymų lapelyje, siekiama nauja narys Ultimate Multisite tinklu.

Google Forms puslapyje sukurkite formą su minimaliais laukais, reikalingais naujos narys sukūrimui tinklu.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Dabar Zapieriu sukurkite naują Zap ir susiekitės su kuriamu formumu per Google, naudojant tą spreadsheetą, kur įdamos duomenys.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Skaitytas! Google Forms forma yra susijusi su Zapieriu ir pasiruošusi integracijai tinklu. Dabar pereikime prie Akcijos, kuri bus rezultatas nuo Triggerio, kurį Google Forms pasieka kiekvieną kartą, kai jis užpildomas.

Raskirkite naują Ultimate Multisite programėlę ir pasirinkite ją. Šios veiklos (Zap) tipui pasirinkite "Register" (Registruoti).

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Po šio pirmo žingsnio pasirinkite paskyrą, su kuriuo bus susijusi šis Zap.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Tai yra labiausiai jautriumas visos procesui. Musime nustatyti laukus, kurie atsirado iš Google Forms ir minimalius laukus, reikalingus registracijos endpointui, kaip pateikta šio straipsnio ankstesnėje sekcijoje.

Šiame pavyzd'yje mums reikia nustatyti username (dešinimo vardą), emailį, slaptažodį, vardą ir svetainės URL adresą. Restiko dalis yra užpreitu, kad visi sukurti nariai šio Google Forms atsakymų laikosi tą pačia produktų ir statusų schemą.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Kai informaciją nustatytą, tęskykite iki galutinio testui. Naujameje ekrane pakaite visus laukus, kurie bus siuntami į endpointą, jų atitinkamą informaciją ir laukus, kuriuos siuntami tuščius.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Testuokite savo naują Zapą – jis turi sėkmingai užbaigtis. Jei sužypia koki nors klaida, patikrinkite visus laukus ir pažiūrėkite, ar jie siunami teisingai. Kadangi informacijos daug, kai kuriuos dalykus gali būti neįstebinti.

### Visos endpoint parametrai {#complete-endpoint-parameters}

Štai visas skaitas ir visi galimybės siuntamų laukų.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // vienas iš "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // vienas iš "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
