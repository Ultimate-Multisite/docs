---
title: Электрондук каттар жана широковестулдарды жөнөтүү
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# Электрондук жана Жартылытуулар (v2)

_**МААЛЫМДАР: Бул макала Ultimate Multisite 2.x версиясына тиешелүү.**_

Ultimate Multisiteде сиз мурунку колдонуучуларга электрондук кат жөнөтүп, же алардын административдик панелдарына билдирүүлөрдү (анонстарды) жарыялоо аркылуу маалымат алмашуу мүмкүнчүлүгүн камтыган функция бар.

## Жартылытуулар менен колдонуучулардын административдик панелдарына административдик билдирүүлөрдү кошуу

Ultimate Multisite-тын жартылытуу функциясын колдонуп, сиз **административдик билдирүүлөрдү** колдонуучуңуздун поддиайт административдик панелина кошо аласыз.

Бул сизге системалык тейлөө жөнүндө маалымдоо же мурунку колдонуучуларга жаңы продукт же кызматтарды сунуштоо сыяктуу билдирүү киргизүү керек болгон учурда өтө пайдалуу болот. Административдик билдирүү колдонуучуңуздун панелинде кандай көрүнсө, ошол эле көрүнөт.

<!-- Screenshot unavailable: Колдонуучунун поддиайт административдик панелиндагы административдик билдирүү көрсөтүлгөнү -->

Административдик билдирүүнү баштоо үчүн, тармак административдик панелинде басып, **Ultimate Multisite** менюсунун астында **Broadcasts** (Жартылытуулар) опциясын табасыз.

![Ultimate Multisite административдик панелиндеги Жартылытуулар тизмеси бети](/img/admin/broadcasts-list.png)

Сиз да бардык жартылытууларды редакцияласаңыз болот:

![Жартылытууну редакциялоо интерфейси](/img/admin/broadcast-edit.png)

Бул беттен жогорудагы **Add Broadcast** (Жартылытуу кошуу) баскычын басыңыз.

Бул сизге жартылытуунун кайсы түрүн жөнөтүүнү тандоо үчүн Add broadcast модаль терезеси ачылат.

Ошол жерден **Message** (Кат) дегенди тандап, андан соң **Next Step** (Кийинки кадам) баскычын басыңыз.

![Message опциясы тандалган Add broadcast модаль терезеси](/img/admin/broadcast-add-message.png)

Кийинки терезе сизге же **Target customer** (Максаттуу кардарды) же **Target product** (Максаттуу продукту) сурап турат. Эскертүү кылынышы: сиз бирден андан көп колдонуучуларды же бирден андан көп продукттарды тандасаңыз болот.

Колдону же колдону же издөө үчүн, сиз сөз айкашасын тандап жатсаңыз болот.

**Message type** (Сооб同учу түрү) талаасынын астында билдирүүнүн түсүн тандасаңыз болот. Бул сиздин билдирүүңүздүн тездигин баса белгилейт.

Андан кийин **Next Step** (Кийинки кадам) баскычын басыңыз.

![Message broadcast target, product жана message type талаалары](/img/admin/broadcast-message-targets.png)

Кийинки терезеде сиз сүйлөшүүнү баштоо үчүн теманы жана колдонуучуларга жөнөткөн маалыматты (content/message) киргизип жаза аласыз.

![Broadcast message subject and content editor on the compose step](/img/admin/broadcast-edit.png)

Билдириңизди түзүп алгандан кийин, сиз **Send** (Жөнөтүү) баскычын басып жибере аласыз.

Ошондо да бүтү. Администратордук билдирүү дароо эле колдонуучуңуздун дашбордунда көрсөтүлөт.

## Карыттарыңызга электрондук каттар жөнөтүү

Ultimate Multisite broadcast функциясын колдонуп, сиз колдонуучуларга электрондук кат göndре аласыз. Электрондук катты гана белгилүү колдонуучуларга же алар жазылган продукт же пландын негизинде белгилүү бир колдонуучу топко багыттоо мүмкүнчүлүгүңүз бар.

Электрондук каттын жөнөтүлүшүн баштоо үчүн, тармак администратордук дашбордуңузга кириңиз жана Ultimate Multisite менюсунун астында Broadcast (Жөнөтүү) опциясын табасыз.

![Broadcasts list page used as the starting point for an email broadcast](/img/admin/broadcasts-list.png)

Бул беттен жогорудагы **Add broadcast** (Жөнөтүүнү кошуу) баскычын басыңыз.

Бул сиз жөнөткө турган билдирүү түрүн тандасаңыз болот деген Add broadcast модалы терезесин ачат. Сиз жөнөткө турган билдирүү түрүн тандап, андан кийин **Email** (Электрондук кат)ды тандап **Next Step** баскычын басыңыз.

![Add broadcast modal with the Email option selected](/img/admin/broadcast-add-email.png)

Кийинки терезе сизге же **Target customer** (Максаттуу колдонуучу) же **Target product** (Максаттуу продукт) сурап алат. Эскертүү кылынам: сиз бирден көп колдонуучуларды же бирден көп продуктту тандасаңыз болот.

Колдону же пайдалануучунун эсебине же продукту издөө үчүн сөз айкашасын тандап киргизүүңүз керек.

Максаттуу аудиторияңызды тандагандан кийин, **Next Step**-ке басып койсоңуз болот.

![Email рассылкаына максаттуу кардарлар жана продукт тандоо](/img/admin/broadcast-email-targets.png)

Кийинки терезеде сиз сүйлөшүүнү баштоо үчүн теманы жана колдонучка/мессеждарга кирип жаза аласыз. Бул маалыматты колдонуучуларга жөнөтүүңүз келет.

<!-- Screenshot unavailable: Композициялык кадамдагы Email рассылкасынын темасы жана контент редактору -->

Месседжиңизди түзүп алгандан кийин, сиз **Send** баскычын баса аласыз.

Ошондуктан, бөлөктөнүн (broadcast feature) колдонуучуларыңызга электрондук кат жөнөтүү абдан оңой.

## Системалык электрондук каттар (System emails)

Ultimate Multisite-та системалык электрондук каттар — бул каттоо, төлөм, домен картасылоо ж.б. сыяктуу белгилүү аракеттерден кийин система тарабынан жөнөтүлгөн **автоматтык билдирүүлөр**. Бул электрондук каттар Ultimate Multisite параметрлеринен редакцияланышы же өзгөртүлүшү мүмкүн. Ошондой эле, сиз башка Ultimate Multisite орносонун бардык параметрлерин жогорулатып (reset) импорттоого мүмкүндүк берген функция менен келет.

### Жогорулатуу жана импорттоо

Жаңы Ultimate Multisite версиялары жана адон-плагиндер убада жаңы электрондук каттарды каттоодогу болушу мүмкүн.

Конфликттерди жана башка көйгөйлөрдү алдын алуу үчүн, **жеке функциянын туура иштөөсү үчүн маанилүү болбогон учурда биз жаңы электрондук форматтарын сиздин орносоңузга автоматтык түрдө Системалык Электрондук Каттар катары кошо элекшибиз**, анткени бул өтө маанилүү.

Бирок, супер администраторлор жана агенттер бул жаңы каттарды импорттоочу курал аркылуу импорттоого мүмкүнчүлүкке ээ болушат. Бул процесс жаңы электрондук форматтын контенти жана конфигурациясы менен жаңы системалык электрондук катты түзөт, бул супер администраторго каалаган кандайдыр бир өзгөртүүлөрдү киргизүүгө же аларды ушундай калтырууга мүмкүндүк берет.

#### Системалык электрондук каттарды кантип импорттоо керек

Ultimate Multisite Ayarlar sayfanıza gidin ve **Emails** sekmesine tıklayın.

![Ultimate Multisite ayarlarındaki Emails sekmesi Sistem E-postaları bölümünü gösteriyor](/img/config/settings-emails-tab.png)

Ardından, yan menüden **Customize System Emails** düğmesine tıklayın.

<!-- Screenshot unavailable: Sistem E-postalarını Özelleştirme düğmesi Sistem E-postaları yan panelinde -->

Sistem E-postaları sayfasında en üstte **Reset & Import** eylemi düğmesini göreceksiniz. Bu düğmeye tıkladığınızda, içe aktarma ve sıfırlama penceresi açılacaktır.

![Sistem E-postaları yönetim sayfasındaki Reset veya İçe Aktar eylemi düğmesi](/img/admin/system-emails-reset-import.png)

Daha sonra, Sistem E-postaları seçeneklerini açarak hangi sistem e-postalarının içe aktarılabileceğini görebilirsiniz.

<!-- Screenshot unavailable: İçe Aktarma E-postaları seçenekleri genişletilmiş Reset ve İçe Aktar modalı -->

#### Sistem E-postalarını Sıfırlama

Bazen, belirli bir e-posta şablonuna yaptığınız değişikliklerin artık işe yaramadığını fark edebilir ve onu **varsayılan durumuna** sıfırlamak isteyebilirsiniz.

Bu durumlarda iki seçeneğiniz var: sistem e-postasını basitçe silebilir ve geri içe aktarabilirsiniz (yukarıdaki talimatları kullanarak) - bu, gönderim metriklerini ve diğer şeyleri sileceği için bu yöntem en az tercih edilen yöntemdir.

Veya o e-posta şablonunu sıfırlamak için **Reset & Import tool**'u kullanabilirsiniz.

Bir e-posta şablonunu sıfırlamak için yukarıdaki adımları izleyip Reset & Import aracına ulaşıp, **Reset** seçeneğini açıp varsayılan içeriğe geri döndürmek istediğiniz e-postaları seçebilirsiniz.

<!-- Screenshot unavailable: Sıfırlama ve İçe Aktarma seçenekleri genişletilmiş Reset ve İçe Aktar modalı -->
