---
title: API конетін тіркеу
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# The Ultimate Multisite Register API конечная точка (endpoint) {#the-ultimate-multisite-register-api-endpoint}

Бұл туториалда сіз Ultimate Multisite /register API конечную точку қолданып, желіңіздегі жаңа клиент үшін бүкіл іріктіру процесін қалай құру керектігін және бұл жұмысты Zapier арқылы қалай жүзеге асыру керектігін үйренесіз.

Бұл конечная точка POST әдісін қолданады және URL _**https://yoursite.com/wp-json/wu/v2/register**_ арқылы шақырылады. Бұл шақыру кезінде сіздің желіңізде 4 процесс орындалады:

  * Жаңа WordPress пайдаланушы немесе пайдаланушы ID арқылы оның анықтамасы жасалады.

  * Ultimate Multisite-та жаңа Клиент немесе клиенттік ID арқылы оның анықтамасы жасалады.

  * WordPress желінде жаңа сайт жасалады.

  * Соңында, Ultimate Multisite-та жаңа Мүшелік (Membership) жасалады.

Бұл процесс үшін сізге API құжаттары қажет болады. Оларды алу үшін желі администратор панеліне өтіңіз, **Ultimate Multisite > Settings** > **API & Webhooks** бөліміне барыңыз және API Параметрлері (API Settings) бөлімін іздеңіз.

![Ultimate Multisite-тағы API Параметрлері бөлімінің суреті](/img/config/settings-api.png)

API параметрлерінің толық көрінісі:

![API settings full page](https://yoursite.com/wp-json/wu/v2/register)

**Enable API** (API-ны қосу) seçімін таңдап, API құжаттарыңызды алыңыз.

Енді конечная точку қарастырып, содан кейін Zapier-де тіркелу әрекетін жасауға көшелік.

## Endpoint body параметрлері {#endpoint-body-parameters}

Конечная точкаға жіберуге қажетті минималды ақпарат туралы жалпылама біліңіз. Бұл мақаланың соңында толық шақыруды табасыз.

### Клиент (Customer) {#customer}

Бұл Пайдаланушыны және Ultimate Multisite-тағы Клиентті жасау процесі үшін қажетті ақпарат:

"customer_id" : integer

Сіздің желіде жасалған клиент ID-ны жіберу мүмкін. Егер жіберілмесе, төмендегі ақпарат жаңа клиент және жаңа WordPress пайдаланушы құру үшін қолданылады. Пайдаланушы ID-ны да клиент ID-сымен бірдей тәсілмен жіберуге болады.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Мемлекеттік мәртебе (Membership)** {#membership}

Бұл объектінің бізге қажет еюін тек Мемлекеттік мәртебе (Membership Status) болса.

"membership" { "status" : "string", // "pending", "active", "trialing", "expired", "on-hold", "canceled" сияқты бірі },

### **Өнімдер (Products)** {#products}

Өнімдер желіңізден 1 немесе одан да көп өнім ID-сы бар массивпен беріледі. Ескерту: бұл эндпоинт өнім құрмайды. Өнім құру эндпоинтін көбірек түсіну үшін Ultimate Multisite құжаттамасын тексеріңіз.

**"products" : [1,2],**

### **Төлем (Payment)** {#payment}

Мемлекеттік мәртебе сияқты, бізге тек мәртебе қажет.

**"payment" { "status" : "string", // "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" сияқты бірі },**

### **Сайт (Site)** {#site}

Соңына келгенде, сайттың URL-ы мен Тақырыбын Site объектісінің ішінде беру қажет.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Регистр эндпоинтінен қайтарылатын мәліметтер жаңадан жасалған мемлекеттік мәртебе туралы массив болады.

## Zapier-де әрекет (action) құру {#creating-an-action-in-zapier}

Бұл жаңа және күрделірек аккаунт құру эндпоинті енгізілгенмен, Zapier-де жаңа әрекетке де қол жеткізесіз.

Zapierдің жаңа нұсқасы ұсынатын барлық мүмкіндіктерін қалай пайдалану және ләззат алу керектігін білесіз бе? Мұнда көбірек оқыңыз. (сілтеме?)

### Әрекет құру {#creating-an-action}

Zapier арқылы registration endpoint-ті қалай қолдану керектігін көрсету үшін Google Forms-пен интеграция жасап көрейік. Бұл форма толтырылып, ақпарат форманың жауап парағына сақталған кезде Ultimate Multisite желінде жаңа мүшелік (membership) жасалады.

Google Forms-та желіде жаңа мүшелік жасау үшін қажетті ең аз талап етілетін өрістерді қамтитын форма жасаңыз.

<!-- Скриншот қолжетімсіз: жаңа мүшелік жасауға арналған өрістермен Google Forms формасы -->

Енді Zapier-де жаңа Zap жасап, деректер сақталатын электрондық кесте (spreadsheet) арқылы Google-да жасалған форманы қосыңыз.

<!-- Скриншот қолжетімсіз: Google Forms кестесіне қосуға арналған Zapier іс-әрекеті конфигурациясы -->

Бұдан кейін! Google Forms формасы Zapier-ге қосылды және желімен интеграциялауға дайын. Енді Google Forms әрқашан толтырылған кезде тудыратын Trigger-ден болатын Action-ға өтейік.

Ultimate Multisite-тің жаңа қосымшасын тауып, оны таңдаңыз. Бұл типтегі Zap үшін Register (Ресімдеу) опциясын таңдаңыз.

<!-- Скриншот қолжетімсіз: Ultimate Multisite қосымшасы мен Register опциясын көрсететін Zapier іс-әрекеті таңдау -->

Бұл алғашқы қадамнан кейін, бұл Zap-пен қандай аккаунтты байланыстыратыныңызды таңдаңыз.<!-- Скриншот қолжетімсіз: Ultimate Multisite үшін Zapier аккаунт қосу кезеңі -->

Бұл барлық процестің ең сезімді бөлігі. Google Forms-тан келген өрістерді бұрын осы мақаланың алдыңғы бөлімде көрсетілген register endpoint-ке қажетті минимум өрістермен сәйкестендіруіміз керек.

Бұл мысалда бізге тек пайдаланушы аты (username), электрондық пошта (email), пароль (password), атауы (name) және веб-сайттың URL-ына ғана конфигурация жасау қажет. Қалғандары алдын ала белгіленген, бұл Google Forms арқылы жасалатын барлық мүшеліктер бірдей өнім мен статус үлгісін қамтамасыз етеді.

<!-- Скриншот недоступен: Сопоставление полей Zapier между Google Forms и конечной точкой Ultimate Multisite register -->

Когда информация настроена, переходите к финальному тесту. На последнем экране вы увидите все поля, которые будут отправлены в конечную точку, их соответствующую информацию и те поля, которые будут отправлены пустыми.<!-- Скриншот недоступен: Экран теста Zapier с отображением всех полей для отправки в конечную точку регистрации -->

Протестируйте свой новый Zap, и он должен завершиться успешно. Если произойдет какая-либо ошибка, проверьте все поля и убедитесь, что они отправляются правильно. Поскольку информации много, некоторые моменты могут остаться незамеченными.

### Полные параметры конечной точки {#complete-endpoint-parameters}

Вот полный вызов и все возможности полей, которые могут быть отправлены:

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // одно из "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // одно из "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
