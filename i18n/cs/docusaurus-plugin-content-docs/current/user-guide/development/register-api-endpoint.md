---
title: Registrovat koncový bod API
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Koncový bod Ultimate Multisite /register API

V tomto tutoriálu se naučíte, jak použít koncový bod Ultimate Multisite /register API k vytvoření celého procesu onboardingu pro nového zákazníka ve vaší síti a jak to udělat pomocí Zapier.

Koncový bod používá metodu POST a volá se pomocí URL _**https://yoursite.com/wp-json/wu/v2/register**_. Při tomto volání budou ve vaší síti provedeny 4 procesy:

  * Bude vytvořen nový WordPress uživatel nebo bude identifikován pomocí user ID.

  * Bude vytvořen nový zákazník v Ultimate Multisite nebo bude identifikován pomocí customer ID.

  * Bude vytvořen nový web v síti WordPress.

  * Nakonec bude vytvořeno nové Membership v Ultimate Multisite.

Pro tento proces budete potřebovat své API přihlašovací údaje. Chcete-li je získat, přejděte do administračního panelu své sítě, navigujte na **Ultimate Multisite > Nastavení** > **API a Webhooky,** a vyhledejte sekci nastavení API.

![Sekce nastavení API v Ultimate Multisite](/img/config/settings-api.png)

Zde je úplný pohled na stránku nastavení API:

![Úplná stránka nastavení API](/img/config/settings-api-full.png)

Vyberte **Povolit API** a získejte své API přihlašovací údaje.

Nyní prozkoumejme koncový bod a poté vytvořme registrační akci v Zapier.

## Parametry těla koncového bodu {#endpoint-body-parameters}

Podívejme se na přehled minimálních informací, které potřebujeme odeslat do koncového bodu. Na konci tohoto článku najdete celé volání.

### Zákazník {#customer}

Toto jsou informace nezbytné pro proces vytvoření uživatele a zákazníka Ultimate Multisite:

"customer_id" : integer

Je možné odeslat customer ID vytvořené ve vaší síti. Pokud není odesláno, níže uvedené informace budou použity k vytvoření nového zákazníka a nového WordPress uživatele. User ID lze také odeslat stejným způsobem jako customer ID.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership** {#membership}

Jediná informace, kterou v tomto objektu potřebujeme, je stav Membership.

"membership" { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Produkty** {#products}

Produkty se předávají jako pole s 1 nebo více product ID z vaší sítě. Pozor, tento koncový bod nevytváří produkty. Pro lepší pochopení koncového bodu pro vytváření produktů si projděte dokumentaci Ultimate Multisite.

**"products" : [1,2],**

### Platba {#payment}

Stejně jako u Membership potřebujeme pouze stav.

**"payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Web {#site}

A k dokončení těla potřebujeme URL a název webu, obojí uvnitř objektu Site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Návratem koncového bodu register bude pole s informacemi o nově vytvořeném membership.

## Vytvoření akce v Zapier {#creating-an-action-in-zapier}

Se zavedením tohoto nového a robustnějšího koncového bodu pro vytváření účtů získáte také přístup k nové akci v Zapier.

Víte, jak používat a využívat vše, co nová verze Zapier nabízí? Více se dozvíte zde. (odkaz?)

### Vytvoření akce {#creating-an-action}

Abychom lépe ukázali, jak používat registrační koncový bod se Zapier, vytvoříme integraci s Google Forms. Pokaždé, když bude tento formulář vyplněn a informace budou uloženy do tabulky odpovědí formuláře, bude v síti Ultimate Multisite vytvořeno nové membership.

V Google Forms vytvořte formulář s minimálními poli nezbytnými pro vytvoření nového membership v síti.

<!-- Snímek obrazovky není k dispozici: formulář Google Forms s poli pro vytvoření nového membership -->

Nyní v Zapier vytvořte nový Zap a propojte vytvořený formulář v Google prostřednictvím tabulky, do které se ukládají data.

<!-- Snímek obrazovky není k dispozici: konfigurace triggeru Zapier připojujícího se k tabulce Google Forms -->

Hotovo! Formulář Google Forms je propojen se Zapier a připraven k integraci se sítí. Nyní přejděme k akci, která bude výsledkem triggeru, který Google Forms spustí pokaždé, když je vyplněn.

Najděte novou aplikaci Ultimate Multisite a vyberte ji. Pro tento typ Zap zvolte možnost Register.

<!-- Snímek obrazovky není k dispozici: výběr akce Zapier zobrazující aplikaci Ultimate Multisite s možností Register -->

Po tomto prvním kroku vyberte účet, který bude s tímto Zap propojen.<!-- Snímek obrazovky není k dispozici: krok připojení účtu Zapier pro Ultimate Multisite -->

Toto je nejcitlivější část celého procesu. Potřebujeme spárovat pole, která přišla z Google Forms, s minimálními poli nezbytnými pro koncový bod register, jak je ukázáno v předchozí části tohoto článku.

V tomto příkladu potřebujeme nakonfigurovat pouze username, email, password, jméno a URL webu. Zbytek je ponechán předem určený, aby všechna memberships vygenerovaná v tomto Google Forms následovala stejný vzor produktu a stavu.

<!-- Snímek obrazovky není k dispozici: mapování polí Zapier mezi Google Forms a koncovým bodem Ultimate Multisite register -->

Po nastavení informací pokračujte k závěrečnému testu. Na poslední obrazovce můžete vidět všechna pole, která budou odeslána do koncového bodu, jejich příslušné informace a pole, která budou odeslána prázdná.<!-- Snímek obrazovky není k dispozici: testovací obrazovka Zapier zobrazující všechna pole, která mají být odeslána do koncového bodu register -->

Otestujte svůj nový Zap a měl by se úspěšně dokončit. Pokud dojde k jakékoli chybě, zkontrolujte všechna pole a zda jsou odesílána správně. Protože je zde mnoho informací, některé věci mohou uniknout pozornosti.

### Kompletní parametry koncového bodu {#complete-endpoint-parameters}

Zde je kompletní volání a všechny možnosti polí, která lze odeslat.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
