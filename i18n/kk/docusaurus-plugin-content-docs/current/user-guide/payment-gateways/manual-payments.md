---
title: Қолмен төлемдерді орнату
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Румандық төлемдерді орнату (v2)

_**МАҢЫЗДЫ ЕТІНДІ: Бұл мақала Ultimate Multisite 2.x нұсқасына қатысты.**_

Румандық төлемдер – бұл пайдаланушыларыңыз үшін **Stripe** немесе **PayPal** қолжетімді болмаған жағдайда басқа төлем әдістерін ұсынудың жолы. Бұл жерде сіздің пайдаланушыларыңызға жергілікті қолжетімді болатын тегін аударым немесе банк беру немесе кез келген басқа төлем әдісі болуы мүмкін.

## Румандық төлемдерді қалай іске қосу керек

Румандық төлемдерді орнату өте оңай. Сізге тек төлем бұрышында (payment gateways) оны іске қосу жеткілікті және пайдаланушыға төлемді қалай жіберу керектігі туралы егжей-тегжейлі нұсқаулықтарды енгізуіңіз керек.

Ең алдымен, **Ultimate Multisite > Settings > Payments**-ке өтіңіз. **Payment Gateways** астында **Manual** опциясын қосыңыз (toggle on). Сізге **Payment Instructions** (Төлем нұсқаулықтары) тізілігі пайда болады.

Бұл тізімге клиент төлемді қалай жіберу керектігі туралы ақпаратты енгізіңіз. Бұл сіздің банк картаңыздың деректері мен электрондық поштаңыз болуы мүмкін, сонда клиент сізге төлемді растайтын хабарламаны жібере алады, мысалы.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Міне, румандық бұрышының параметрлері интерфейсі:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Орнатып алғаннан кейін, тек **Save Settings** (Параметрлерді сақтау) батырмасын басыңыз және біткен. Пайдаланушылар сіздің желіге тіркелген кезде, сатып алуды аяқтау үшін төлем нұсқаулықтарын қабылдайтыныңыз туралы хабарлайтын хабарламаны көре алады.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

Сонымен қатар, олар **Thank You** (Рахмет) бетінде төлем нұсқаулықтарымен бірге хабарлама алады.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Румандық төлемдерді растау

Қолымен төлемді растау үшін сол жақ барлау панеліндегі **Payments** (Төлемдер) мәзіріне өтіңіз. Онда сіз желіңіздегі барлық төлемдер мен олардың **status** (жағдайын), соның ішінде нақты ақпаратты көре аласыз. Қолымен жасалған төлем әрқашан оны қолмен өзгертуге дейін **Pending** (Күтіп отыр) статусында болады.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Төлем парағын **reference code** (сілтеме коды) арқылы ашыңыз. Бұл бетте сізде күтудегі төлем туралы барлық мәліметтер, соның ішінде reference ID (сілтеме ID), өнімдер, уақыт белгілері және басқа да нәрселер болады.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

Оң жақ бағанда төлемнің статусын өзгертуге болады. Оны **Completed** (Аяқталды) деп өзгерту және **Activate Membership** (Мемлекеттік құқықты белсендіру) опциясын қосу арқылы клиенттің сайты іске қосылады және оның мүшелігі белсенді болады.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
