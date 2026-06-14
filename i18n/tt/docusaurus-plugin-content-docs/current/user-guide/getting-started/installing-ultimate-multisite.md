---
title: Ultimate Multisite-ын тасвирлеу
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Ultimate Multisite-иң Орнатылышы

:::note
Бу тутуалда WordPress Multisite орнатылып, дайын экенин предполагаем. Буны ничек илере алай аласыз? WP Beginner-иң [бу тутуалды] карап көрүңүз: https://www.wpbeginner.com/glossary/multisite/
:::

## Плагинын тасвирлеу (Installing the Plugin)

Ultimate Multisite WordPress.org saytındа боса (free) kazanilipdir [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/) сайтында.

Сизнең **Network Admin Dashboard**-ыndan китерәгез: **Plugins → Add New Plugin**.

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

**"Ultimate Multisite"** ниңдерле арыңыз (нақты совләшү өчен кавырчалар белән), ул биринчи нәтиҗәгә чыгат. **Install Now**-ны сыйлагыз.

![Ultimate Multisite диптация результалары](/img/installation/search-ultimate-multisite.png)

Устанданнан соң, бүх сетеңиздә плагины активәл итү өчен **Network Activate**-ына сыйныч (клик) edin.

![Плагин "Network Activate" düğmeni qoyuldy](/img/installation/plugin-installed.png)

Активациядан соң сиз автомат Россияне (Setup Wizard) yöneltiləсез.

![Плагин активиýa edildi we wizard'a yöneltildi](/img/installation/plugin-activated.png)

## Нарәселәш Гидее (Setup Wizard)

Нарәселәш гидее белән Ultimate Multisite-ны 10 минут бикчарау турындагы маlumatлар белән бергә юлтыра.

### Саламу (Welcome)

Башкарырга **Get Started**-ына кликчегез.

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### Орнатудан Өзелгән Бәреләмеләр (Pre-install Checks)

Бул этап сизнинг система мәгълүматлары белән Ultimate Multisite-ның талапларына мөһәллек итә алмыйлыгын текäп чыгат. Әлбәттә, гомумән күрүе яхшы булса, **Сыгарыгыңардагы следующем этапа китерегез**.

![Установлагардан өндүрүш проверкаләр система мýтасы](https://example.com/img/installation/wizard-pre-install-checks.png)

:::note Network Activate düğmeni (v2.6.1+)
Ultimate Multisite quraşdırılmış, amma **hələ şəbəkə aktivasiyası edilməmişdir** — məsələn, şəbəkə pluginlər ekranından **Network Activate** əvəzinə **Activate**-ı (tək sayt üçün) klikləmisinizsə — Pre-install Checks addımı bunu aşkarlayacaq və sizə **Network Activate** düyməsini göstərəcək.

**Network Activate**-ны батырмача сыйласаңыз, плагины бүх мультисайт сеткең автомат Россия активируется. Активирлене берсе, wizards (уес) нормаль шартта инсталляция қадамına өтеді. Активация абалын түзету үшін wizard-дан шығуыңыз керек емес.

### Установка

Установочный файл базы данных өчен кирәкле мәгълүматларны (таблицалар) ясап, Ultimate Multisite-ының ислем атылырга кагылган `sunrise.php` файлын куллап җибәрәчәк. Процессы башлый өчен **Install** (Уста nus) батырып китегез.

![Установка шаги, показывающие таблицы базы данных и sunrise.php](/img/installation/wizard-installation.png)

### Ваш Компани

(Здесь будет текст о вашей компании или разделе "О нас", если он есть в оригинале.)

Шу компания мәгълүматларыгызны doldру һәм стандарт валютаны мөмкинлек итәгез. Бу мәгълүматлар WaaS платформасында барлык вакыт бик агыйлап исәпләнә. Барлык эшләргә тиесгәндә **Продолжу**-ны сыйныч.

![Вазыйлы компания конфигурациялегендәге кадам](/img/installation/wizard-your-company.png)

### Стандартный контент

Бу этапда сиз заранее hazırlanmış шаблонларды, продуктуларды һәм башка başlatма контентләрне кулланып аласыз. Бу Ultimate Multisite-ының функциялары белән таныштыру өчен гасырлык юл. Баштагы контентны арттыр өчен **Install** (Куллану) батырып китарьсыз, алганча бу этапене өткөрмәгә мөмкин, эчнээс башлауны кабул итәгез.

![Default контент табибәселемеге](/img/installation/wizard-default-content.png)

### Рекомендуемый плагины

Истемесезме, сугалтылмыйча рекомендуемый спутник плагинын табибәселемегез. Аларны арттыргы өчен **Install** (Таратып бул) басып чыкгыз, вакыт артык булырганда укыйсыз.

![Рекомендуемый шаг плагинов](/img/installation/wizard-recommended-plugins.png)

### Готово!

Бәх бәреләрдә! Сезнең Ultimate Multisite орнатылышы дип бүтән. Итеп, **Network Admin Dashboard** аркылуу Веб-сайтны Хезмәт Кабылышы платформасы (Website as a Service) режимда ясарырга итегез.

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Ultimate Multisite активный сеть администратор дашборды](/img/installation/network-dashboard.png)

Расында, rahat oyna!
