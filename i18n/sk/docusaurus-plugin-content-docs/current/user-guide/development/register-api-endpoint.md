---
title: Registrovať API bod
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# API koniec registračného bodov Ultimate Multisite

V tomto tutoriáli si naučíte, ako použiť API koniec `/register` z Ultimate Multisite na vytvorenie celého procesu onboarding pre nového zákazníka v vašej sieti a ako to urobiť s Zapierom.

Tento koniec používa metódu POST a volaný je URL adresou `_**https://yoursite.com/wp-json/wu/v2/register**_. Pri tomto volaní sa v vašej sieti vykoná 4 procesov:

  * Vytvorí sa nový používateľ WordPress alebo jeho identifikácia pomocou ID používateľa.

  * Vytvorí sa nový Zákazník v Ultimate Multisite alebo jeho identifikácia pomocou ID zákazníka.

  * Vytvoriť sa nová siatka na WordPressovej sieti.

  * Na konci sa vytvorí nové členstvo v Ultimate Multisite.

Pre tento proces budete potrebovať svoje API poverenia (credentials). Aby ste ich získali, prejdite do panelu administrátora vašej siete, navigať do **Ultimate Multisite > Settings** > **API & Webhooks** a pozrite na sekciu API Settings.

![Sekcia API Settings v Ultimate Multisite](/img/config/settings-api.png)

Tu je kompletný zobrazenie stránky s nastaveniami API:

![Kompletná stránka API nastavení](/img/config/settings-api-full.png)

Vyberte **Enable API** a získajte svoje API poverenia.

Teraz si pozrieme tento koniec a potom vytvoríme akciu registrácii v Zapierom.

## Parametre těla konca (Endpoint body parameters) {#endpoint-body-parameters}

Zohľadnite si minimálnu informáciu, ktorú musíte poslať do konca. Na konci tohto článku nájdete kompletný volanie.

### Zákazník (Customer) {#customer}

Toto je informácia, ktorá je potrebná pre proces vytvorenia Používateľa a Zákazníka v Ultimate Multisite:

"customer_id" : integer

Je je môžeme poslať ID zákazníka vytvorený v vašej sieti. Ak sa neposiela, informácie nižšie budú použité na vytvorenie nového zákazníka a nového používateľa WordPressu. Identifikátor používateľa sa môže poslať takto ako identifikátor zákazníka.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Členské práva (Membership)** {#membership}

Jediná informácia, ktorú potrebujeme v tomto objekte, je stav členských práv.

"membership" { "status" : "string", // jeden z možností: "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Produkty** {#products}

Produkty sa dostávajú v formáte súboru s jedným alebo viac ID produktov z vašej siete. Upozornenie, tento endpoint neVytvára produkty. Pre lepšie pochopenie endpointu na vytváranie produktov si pozrite do dokumentácie Ultimate Multisite.

**"products" : [1,2],**

### Platba {#payment}

Ako je to s členskými právami, potrebujeme len stav.

**"payment" { "status" : "string", // jeden z možností: "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Sítka (Site) {#site}

A aby sme dokončili telo, potrebujeme URL a názov siete v objekte Site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Vrátená späť akcia registráciu bude súbor s informáciami o novozrodených členských právach.

## Vytvorenie akcie v Zapier {#creating-an-action-in-zapier}

S zavedením tohto nového a robustnejšieho endpointu na vytváranie účtov, budete mať tiež nový akčný prvok (action) v Zapier.

Poznáte, ako používať a užívať všetko, čo nová verzia Zapier ponúka? Viac informácií tu. (link?)

### Vytvorenie akcie {#creating-an-action}

Aby lepšie ukázali, ako použiť registration endpoint s Zapierom, vytvoríme integráciu s Google Forms. Každýkrát sa tento formulár vyplní a informácie uložia do answer sheet (tabuľky odpovedí) formulára, bude vytvorená nová členstvo v sieti Ultimate Multisite.

V Google Forms vytvorte formulár s minimálnymi polmi potrebnými na vytvorenie nového členstva v sieti.

<!-- Zobrazenie obrázka nedostupné: Formulár Google Forms s polmi pre vytvorenie nového členstva -->

Teraz v Zapierom vytvorte nový Zap a pripojte vytvorený formulár v Google cez tabuľku, kde sa údaje ukladajú.

<!-- Zobrazenie obrázka nedostupné: Konfigurácia spúšťača (trigger) v Zapier konečného k Google Forms tabuľke -->

Hotovo! Formulár Google Forms je pripojený s Zapierom a je pripravený na integráciu s sieti. Teraz prejdeme k Akcii, ktorá bude výsledkom Spúšťača, ktorý Google Forms spúšťa pri každom vyplnení.

Nájdite aplikáciu Ultimate Multisite a vyberte ju. Pre tento typ Zap vyberte možnosť Register (Registrovať).

<!-- Zobrazenie obrázka nedostupné: Výber akcie v Zapierom zobrazujúce aplikáciu Ultimate Multisite s možnosťou Register -->

Po tomto prvom kroku si vyberte účet, ktorý bude pripojený k tomuto Zapu.<!-- Zobrazenie obrázka nedostupné: Krok pripojenia účtu v Zapierom pre Ultimate Multisite -->

Toto je najcitlivší čas celého procesu. Musíme zodpovedať polia z Google Forms minimálnym poliam potrebným pre registration endpoint, ako je ukázané v predchádzajúcej časti tohto článku.

V tomto príklade musíme len skonfigurovať používateľské meno (username), e-mail, heslo, meno a URL webovej stránky. Zostné polia sú už predod determineované tak, aby všetky členstvá generované v tomto Google Forms dodržali rovnaký vzor produktu a stavu.

<!-- Zobrazenie snímky obrazovky nedostupné: Mapovanie polí Zapier medzi Google Forms a register endpoint Ultimate Multisite -->

Keď je informácie nastavené, prejdite k finálnemu testu. Na poslednej obrazovke vidíte všetky pole, ktoré sa odošlú na endpoint, ich príslušnú informáciu a pole, ktoré budú odoslané prázdne.<!-- Zobrazenie snímky obrazovky testu Zapier ukazujúce všetky pole, ktoré sa odošlú na register endpoint -->

Testujte svoj nový Zap a mal by sa úspešne dokončiť. Ak dôjde k nejakému chybnému stavu, prejdite cez všetky pole a zistite, či sú odoslané správne. Keďže je veľa informácií, niektoré veci môžu zostať nepozhatiané.

### Kompletné parametre endpointu {#complete-endpoint-parameters}

Tu je kompletný výzva a všetky možnosti polí, ktoré sa môžu odo slávať.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // jedna z možností: "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // jedna z možností: "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
