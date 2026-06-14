---
title: Колдонууга колдонуучу төлөмдөрдү орнотуу
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Ручная опланаларды орнотуу (v2)

_**МААЛЫМДЫ БЕЛГЕ: Бул макала Ultimate Multisite 2.x версиясына тиешелүү.**_

Ручная опланалар — бул **Stripe** же **PayPal** колдонулуп жатпаса, сиз колдонуучуларыңыз үчүн башка төлөм ыкмаларын сунуштоо үчүн колдонулушу мүмкүн. Бул жергиликтүү колдонуучуларыңызга жеткиликтүү болгон сырткы которуу же банк которуу же башка кезектеги төлөм ыкмасы болушу мүмкүн.

## Ручная опланаларды кантип күйгүзүү керек

Ручная оплананы орнотуу өтө оңой. Сиз аны төлөм эрежелери (payment gateways) астында күйгүзүп, колдонуучуга төлөмдү кантип жөнөтүшү керектиги жөнүндө толук көрсөтмөлөрдү киргизе аласыз.

Биринчиден, **Ultimate Multisite > Settings > Payments**-ке барыңыз. **Payment Gateways** астында **Manual** дегенди күйгүзүңүз. Сиз үчүн **Payment Instructions** (Төлөм боюнча көрсөтмөлөр) блогу пайда болот.

Бул блогу мурунку кардарыңыз төлөм жүргүзүү үчүн керектүү маалыматтар менен толтуруңуз. Бул сиздин банк эсебиңиз жана электрондук почтаңыз болушу мүмкүн, ошондой эле кардардын сизге төлөмдүн тастыгычын жөнөтө алгандыгы үчүн.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Бул ручная оплананын орнотуу интерфейси:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Орнотуп алгандан кийин, жөн гана **Save Settings** (Төлөмдөрдү сактоо) баскыңыз жана аяктадыңыз. Колдонуучулар сиздин тармагыңызга катталганда, сатып алууну аяктоо үчүн сизге көрсөтмөлөр берилет деген билдирүү көрүшөт.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

Ошондой эле сиз **Thank You** (Рахмат!) баракчасында төлөм боюнча көрсөтмөлөрүңүз менен билдирүү аласыз.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Ручная опланаларды тастыктоо

Колдонуучулук төлөмдү тактоо үчүн сол жактагы менюдан **Payments** (Төлөмдөр) бөлүмүнө барыңыз. Анда сиз тармагындагы бардык төлөмдөрдү жана алардын деталдарын, алардын **status** (статусу) менен көрө аласыз. Мануалдык төлөм ар дайым аны мануалдык түрдө өзгөртүүгө чейин **Pending** (Күтүлбөй турган) статусунда болот.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Төлөм баракчасын **reference code** (маалыматтык код) менен басып кириңиз. Бул бетте сиз күтүлбөй турган төлөмдүн бардык деталдары, мисалы, reference ID, товарлар, убакыт белгилери жана башка нерселерди таба аласыз.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

Оң жактагы колонкадан төлөмдүн статусун өзгөртө аласыз. Аны **Completed** (Аткарылган) кылуу жана **Activate Membership** (Мемлекеттик укуктукту активдештирүү) опциясын күйгүзүңүз, анда сиздин кардарыңыздын сайты иштеп чыгат жана алардын мүчөлүгү активдүү болот.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
