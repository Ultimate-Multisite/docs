---
title: Сол талыкты иштетүү
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Сомдук Маселерин Иштетүү (Tax Handling)

Ultimate Multisite-та биздин негизги плагинда сомдук маселерин жинактоо модулу бар, ошондуктан пландарыңызга, пакеттериңизге жана кызматтарыңызга сатуу салыгын жинактоого каалаган болсо, эч кандай кошумча (add-on) орнотууга барасыз.

Европада жайгашкан компаниялар үчүн биз **кошумча** сунуштайбыз, ал VAT (Сатуу салыгы) ыңгайлуулугун жакшыртуу үчүн куралдарды жана функцияларды кошот.

Ultimate Multisite сиздин акыркы төлөмдө тиешелүү салыктарды управительге арызбайбыз же өзүңүздүн ордуна төлөйб беребиз; биз жөн гана транзакция учурунда туура салыктарды жинактоого жардам беребиз. **Салыктарды сиз өзүңүз төлөшүңүз керек болот.**

## Салыкты Ишке Ашыруу (Enabling Tax Collection)

Салыкты жинактоо дефолттук күчтө эмес. аны иштетүү үчүн, **Ultimate Multisite > Settings > Taxes** баракчасына өтүп, "Enable Taxes" (Салыктарды Ишке Ашыруу) орнотуусун активдештирүүңүз керек.

![Tax settings toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

Бул салыкты коюунун толук көзөмөлүн көрсөткөн баракча:

![Tax settings full page](/img/config/settings-taxes-full.png)

Сиз да ар бир продукт үчүн салыкты коюуну көрө аласыз:

![Tax settings for products](/img/config/settings-taxes.png)

### Салыктын кошулбагандыгы жана кошулгандыгы (Tax excluded vs. Tax included)

Дефолттук режимде, бардык продукт баалары салыктан чыгарылган болуп саналат, бул анын баасына салыктар **кошулбайт** дегенди билдирет. Эгер биз бир сатып алуу үчүн кардардан салык төлөшү керектигин аныктасак, биз салыктарды жалпы сумманын үстүнөн кошобуз.

Эгер сиз салыктарды продукт баасына кошулган болуп калууну кааласаңыз, "Inclusive Tax" (Кошулган Салык) орнотуусун активдештирүү аркылуу аны ишке ашыра аласыз.

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

Этке келген өзгөртүүлөрдү **сактап** унутубаңыз.

###

## Салык Стааны (Creating Tax Rates)

Салыкты жинактоону ишке киргизгенден кийин, биздин салык ставкалары редакторунун аркасынан атайын жерлер үчүн салык ставкаларын түзүшүңүз керек.

Сиз жаныбарлар (editor) интерфейсин сол жактагы "Tax settings" баракчасынын менюсундагы **Manage Tax Rates** баскычын басып кире аласыз.

![Manage Tax Rates link in the Tax Rates panel on the settings page](/img/config/settings-taxes-manage-rates.png)

Салык көрсөткүчтөр (tax rates editor) баракчасында жаңы салык көрсөткүчтөрдү **Add new Row** баскычын басып кирип кошушуңуз болот.

![Tax rates editor table with Add new Row button at the top](/img/config/tax-rates-editor.png)

Ар бир салык көрсөткүчкө **title** (фактураларда колдонулат) берүүңүз керек. Андан кийин сиз бул салыктын кайсы **country** (милдеттүү), **state** жана **city** (биринчиси милдеттүү) жерде алынарын тандасаңыз болот. Оңсоо үчүн аягында **tax rate in percents**-у кошуңуз.

### Tax Categories (Салык Категориялары)

Ар кандай товарлар үчүн ар кандай салык көрсөткүчтөрүн кошуу үчүн сиз бир нече Салык Категорияларын да түзө аласыз.

**Add new Tax Category**-ге басыңыз, андан кийин категорияңыздын атын жазып **Create**-ге басыңыз.

![Add new Tax Category button at the top of the tax rates editor](/img/config/tax-categories-add.png)

![Tax Category Name input field in the create category modal](/img/config/tax-categories-create-modal.png)

Категорияларды карап чыгуу үчүн **Switch**-ке басып, жаңы салыктарды кошууну каалаганыңызды тандаңыз.

![Switch dropdown button to change between tax categories](/img/config/tax-categories-switch.png)

![Tax category selector dropdown showing available categories](/img/config/tax-categories-select.png)

Ар бир товар үчүн салык категориясын белгилөө үчүн **Product edit page**-ге барып, андан кийин Taxes (Салыктар) таамына өтүп кетиңиз.

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

Ошол экранда сиз **Is Taxable?** (Салык төлөөнүн мүмкүнчүлүгү барбы?) туташтыруучу баскычын өчүрүп, Ultimate Multisite'га аталган товарлар үчүн салык толобооруп калуу керектигин билдире аласыз.

## European VAT Support (Европтук КҮК)

Мурунку айтылгандай, бизде Еуропадағы тұрғындар үшін Еуропа ПДВ ережелеріне байланысты қосымша талаптар бар клиенттерге арналған плагин бар.

Біздің ПДВ құралдары бірнеше маңызды істі оңдайды:

* Еуропа ПДВ сатылырын оңай жүктеу;
* ПДВ нөмірлерін жинау және тексеру – сондай-ақ ПДВ бөлшектеусін (ПДВ-ден мүлікті босаған субъектілер үшін, мысалы, жарамды ПДВ нөмірі бар компаниялар сияқты).

Осы плагинди орнату үшін **Ultimate Multisite > Settings**-ке кіріңіз және содан кейін **Check our Add-ons** (Біздің қосымшаларымызды тексеріңіз) жанындагы сілтемеге басыңыз.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Сіз біздің плагиндер парақшасына ауысасыз. Онда **Ultimate Multisite VAT add-on** (Ultimate Multisite ПДВ қосымшасы) үшін іздеп, оны орнатуға болады.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Содан кейін **Network Admin > Plugins** (Желіди басқару > Плагиндер) бөлүмүнө барып, ошол плагинди толук жетишкендикке (network-wide) активдештириңиз.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

**Tax Settings tab** (Салыкты 설정лау табабына) кайтып келсеңиз, жаңы опциялар көрөсүз. Жаңы ПДВ куралдарын активдештирүү үчүн **Enable VAT Support** (ПДВ колдоосун активдештируу) опциясын күчтөңүз. Соодалаңыз!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### ПДВ салык сатылырын тарту (Pulling on VAT Tax Rates)

Биздин интеграцияга кошулган куралдардын бири – Еуропа мүчөлөр маданиягы үчүн салык сатылырды жүктеген мүмкүнчүлүгү. Бул Еуропа ПДВ колдоосун активдештиргенден кийин салык сатылырын редактордук баракчага барып көрүү аркылуу жасалат.

Страницанын төмөнкү бөлүгүндө КҮМ (VAT) маалыматтарын тартуу опциялары көрсөтүлгөн. Маани тибине тандап, **Update EU VAT Rates** баскычына басылганда, ар бир АЕК (EU) мүчөлөр катары салык көрсөткүчтөр менен таблица ачылып, автоматтык түрдө толтуられます. Андан кийин сиз аны жөн гана сактап койсоңуз болот.

![Tax rates VAT pull button at the bottom of the tax rates editor](/img/config/tax-rates-vat-pull.png)

Аларды тартуудан кийин бааларды да өзгөртө аласыз. Бул үчүн, сиз керек болгон таблица сабын жөн гана редакциялап, жаңы бааларды сактоо үчүн басыңыз.

### КҮМдин текшерүүсү (VAT Validation)

КҮМ колдоо активдүү болгондо, Ultimate Multisite төлөм формасына эсеп-контакт дарегинен кийин кошумча талааны кошот. Бул талаа гана АЕК аймагында жашаган кардарлар үчүн көрсөтүлөт.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite андан кийин КҮМ номерин текшерет жана ал туура болсо, керiw (reverse charge) механизмди колдонуп, ошол буйрук үчүн салык көрсөткүчүн 0% катары коюп берет.
