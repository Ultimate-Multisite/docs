---
title: Зарэгістраваць API Endpoint
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# API endpoint Ultimate Multisite Register {#the-ultimate-multisite-register-api-endpoint}

У гэтым туторы пацніце, як выкарыстоўваць API endpoint Ultimate Multisite /register, каб стварыць увесь працэс рэгістрацыі для новага кліента ў вашай сетцы, і як гэта зрабіць праз Zapier.

Endpoint выкарыстоўвае метад POST і выклікаецца па адрасы: **https://yoursite.com/wp-json/wu/v2/register**. У гэтым выкліку ў вашай сетцы будуць выкананы 4 працэсы:

* Будзе створаны новы карыстальнік WordPress або вызначаны яго па ID карыстальніка.

* Будзе створаны новы Кліент (Customer) ў Ultimate Multisite або вызначаны яго па ID кліента.

* Будзе створаваны новы сайт у сетцы WordPress.

* У канцы будзе створана новае Членства (Membership) ў Ultimate Multisite.

Для гэтага працэсу вам патрабуюцца вашы API credentials. Каб іх атрымаць, зайдзіце ў адмінскую панэль вашай сеткі, перайдзіце ў **Ultimate Multisite > Settings** > **API & Webhooks**, і знайце секцыю API Settings.

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

Вось поўны прагляд старонкі API settings:

![API settings full page](/img/config/settings-api-full.png)

Выбірайце **Enable API** і атрымлівайце вашы API credentials.

Цяпер даведаемся пра endpoint, а потым стварэнне дзеяння (action) у Zapier.

## Параметры тэла endpoint {#endpoint-body-parameters}

Даведаемся агляднага мінімальнага аб'ёму інфармацыі, якую нам трэба адправіць на endpoint. У канцы гэтай артыкула вы знайце поўны выклік.

### Customer {#customer}

Гэта інфармацыя, неабходная для працэсу стварэння Карыстальніка (User) і Кліента (Customer) Ultimate Multisite:

"customer_id" : integer

Можна адправіць ID кліента, створаны ў вашай сетцы. Калі ён не адпраўляецца, будзе выкарыстана інфармацыя, прадстаўленае ўнізе, для стварэння новага кліента і новага карыстальніка WordPress. ID карыстальніка таксама можна адправіць падобным чынам, як і customer ID.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership** {#membership}

Еднай інфармацыі, якую нам трэба ў гэтым объекце, з'яўляецца Статус Членства (Membership Status).

"membership" { "status" : "string", // ад "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Products** {#products}

Падробкі (Products) павінны быць прадстаўлены ў масыві з адным або больш ID падробкаў з вашай сеткі. Пагаджанне: гэты endpoint не стварае падробкі. Каб лепш зразумець endpoint для стварэння падробкаў, праверце дакументацыю Ultimate Multisite.

**"products" : [1,2],**

### Payment {#payment}

Як і з Membership, нам патрэбны толькі статус.

**"payment" { "status" : "string", // ад "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site {#site}

І каб завяршыць тэла, нам патрэбны URL і Назва сайта (Title), абедз яго ў объекце Site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Паверненне ад endpoint register будзе масывам з інфармацыі пра новае створанае членства.

## Ствараэнне дзеяння ў Zapier {#creating-an-action-in-zapier}

З прадстаўленнем гэтага новага і больш надзейнага endpoint для стварэння кантаў вы атрымаеце доступ да новага дзеяння (action) у Zapier.

Ведаце, як выкарыстоўваць і чамуцца ўсё, што прапануе новая версія Zapier? Діканце больш тут. (link?)

### Ствараэнне дзеяння {#creating-an-action}

Каб лепш ілюстраваць, як выкарыстоўваць endpoint рэгістрацыі з Zapier, створыце інтэграцыю з Google Forms. Кожны раз, калі гэтая форма заўсёды заўрабіцца, а інфармацыя будзе захавана ў аркушы адказаў формы, будзе створана новае членства ў сетцы Ultimate Multisite.

У Google Forms створыце форму з мінімальнымі полямі, неабходнымі для стварэння новага членства ў сетцы.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Цяпер у Zapier створыце новы Zap і падключыце створаную форму ў Google праз аркуш, дзе захаваецца дадзеныя.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Гольна! Форма Google Forms падключылася да Zapier і гатова для інтэграцыі з сеткай. Цяпер перайдзім да дзеяння (Action), якое будзе выклікана Trigger-ым, які Google Forms выклікае кожны раз, калі яго заўрабіцца.

Знайдзіце новае додатак Ultimate Multisite і выберыце яго. Для гэтага роду Zap выберыце опцыю Register.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Пасля гэтага першага кроку выберыце кант, які будзе падключлены да гэтага Zap.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Гэта самая канкрэтная частка ўсяго працэсу. Нам трэба адпавідзець палях, якія прыйшлі з Google Forms, з мінімальнымі полямі, неабходнымі для endpoint рэгістрацыі, як паказана ў папярэднім раздзеле гэтай артыкулы.

У гэтым прыкладзе нам трэба канфігураваць толькі імя карыстальніка (username), электронную адракцію (email), пароль (password), імя і URL сайта. Рэшта пакідаецца прадвызначанай, каб усе членства, згенерававаныя на гэтай Google Forms, выкарыстоўвалі адзін і той жа пацёк падробкаў і статусу.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Пасля наладжавання інфармацыі прайдзіце да фінальнага тэста. На апошнім экране вы ўбачыце ўсе палі, якія будуць адпраўлены на endpoint, іх адпаведную інфармацыю і палі, якія будуць адпраўлены пустымі.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Пратэстуйце свой новы Zap, і ён павінен завяршыцца паспяхова. Калі ўзнікуе якая памылка, праверце ўсе палі і чи адпраўляюцца яны правільна. Калі інфармацыі шмат, некаторыя рэчы могуць заўважыць.

### Поўныя параметры endpoint {#complete-endpoint-parameters}

Вось поўны выклік і ўсе магчымасці паля, якія можна адправіць.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // ад "pending", "active", "trialing", "expired", "on-hold", "canceled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // ад "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
