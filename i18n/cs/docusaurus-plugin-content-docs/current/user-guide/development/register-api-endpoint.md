---
title: Registrovat API endpoint
sidebar_position: 6
_i18n_hash: 33318472a834d15f5533362cddfeca20
---
# API endpoint /register v Ultimate Multisite

V tomto návodu se naučíte, jak používat API endpoint /register v Ultimate Multisite k vytvoření celého procesu registrace nového zákazníka ve vaší síti a jak to udělat pomocí Zapier.

Endpoint používá metodu POST a volá se přes URL _**https://vasstranka.cz/wp-json/wu/v2/register**_. Při tomto volání se ve vaší síti provedou 4 procesy:

  * Vytvoří se nový WordPress uživatel nebo se identifikuje existující uživatel pomocí jeho ID.

  * Vytvoří se nový Zákazník v Ultimate Multisite nebo se identifikuje existující zákazník pomocí jeho ID.

  * Vytvoří se nový web v síti WordPress.

  * Na závěr se vytvoří nové Členství v Ultimate Multisite.

Pro tento proces budete potřebovat své API přihlašovací údaje. Získáte je tak, že přejdete do administrace sítě, navigujete na **Ultimate Multisite > Nastavení** > **API & Webhooks** a najdete sekci API Settings.

![Sekce API Settings v Ultimate Multisite](/img/config/settings-api.png)  
Vyberte možnost **Enable API** a získejte své API přihlašovací údaje.

Nyní se podíváme na endpoint a pak vytvoříme registrační akci v Zapier.

## Parametry těla endpointu

Pojďme si udělat přehled o minimálních informacích, které potřebujeme endpointu poslat. Na konci tohoto článku najdete kompletní volání.

### Zákazník

Toto jsou informace potřebné pro proces vytvoření Uživatele a Zákazníka v Ultimate Multisite:

"customer_id" : integer

Je možné poslat ID zákazníka vytvořeného ve vaší síti. Pokud není odesláno, použijí se níže uvedené informace k vytvoření nového zákazníka a nového WordPress uživatele. ID uživatele lze také poslat stejným způsobem jako ID zákazníka.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Členství**

Jediná informace, kterou potřebujeme v tomto objektu, je stav členství.

"membership" { "status" : "string", // jedna z hodnot: "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Produkty**

Produkty se zadávají jako pole s 1 nebo více ID produktů z vaší sítě. Pozor, tento endpoint nevytváří produkty. Podívejte se do dokumentace Ultimate Multisite, kde lépe pochopíte endpoint pro vytváření produktů.

**"products" : [1,2],**

### Platba

Stejně jako u Členství potřebujeme pouze stav.

**"payment" { "status" : "string", // jedna z hodnot: "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Web

A pro uzavření těla požadavku potřebujeme URL a Název webu, obojí uvnitř objektu Site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Návratová hodnota endpointu register bude pole s informacemi o nově vytvořeném členství.

## Vytvoření akce v Zapier

S představením tohoto nového a robustnějšího endpointu pro vytváření účtů získáte také přístup k nové akci v Zapier.

Víte, jak používat a využít vše, co nová verze Zapier nabízí? Zjistěte více zde. (link?)

### Vytvoření akce

Pro lepší ilustraci použití registračního endpointu se Zapier vytvořme integraci s Google Forms. Pokaždé, když bude tento formulář vyplněn a informace budou uloženy do tabulky s odpověďmi, vytvoří se nové členství v síti Ultimate Multisite.

V Google Forms vytvořte formulář s minimálními poli potřebnými pro vytvoření nového členství v síti.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Nyní v Zapier vytvořte nový Zap a připojte vytvořený formulář z Google přes tabulku, kde jsou data uložena.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Hotovo! Formulář Google Forms je propojen se Zapier a připraven k integraci se sítí. Nyní přejděme k Akci, která bude výsledkem Triggeru, který Google Forms spustí pokaždé, když je vyplněn.

Najděte novou aplikaci Ultimate Multisite a vyberte ji. Pro tento typ Zapu zvolte možnost Register.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Po tomto prvním kroku vyberte účet, který bude s tímto Zapem propojen.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Toto je nejcitlivější část celého procesu. Potřebujeme spárovat pole, která přišla z Google Forms, s minimálními poli potřebnými pro endpoint register, jak je ukázáno v předchozí části tohoto článku.

V tomto příkladu potřebujeme nakonfigurovat pouze uživatelské jméno, e-mail, heslo, název a URL webu. Zbytek necháme přednastavený, aby všechna členství vytvořená přes tento Google Forms formulář měla stejný produkt a stav.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

S nastavenými informacemi přejděte k finálnímu testu. Na poslední obrazovce můžete vidět všechna pole, která budou odeslána na endpoint, jejich příslušné informace a pole, která budou odeslána prázdná.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Otestujte svůj nový Zap a měl by se úspěšně dokončit. Pokud dojde k nějaké chybě, zkontrolujte všechna pole a zda jsou správně odesílána. Jelikož je zde hodně informací, některé věci mohou být přehlédnuty.

### Kompletní parametry endpointu

Zde je kompletní volání a všechny možnosti polí, která lze odeslat.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // jedna z hodnot: "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // jedna z hodnot: "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
