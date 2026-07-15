---
title: Sarrafa Haraji
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Sarrafa Haraji

Ultimate Multisite yana da tsarin tattara haraji da aka gina a cikin core plugin ɗinmu, don haka idan kana buƙatar tattara harajin tallace-tallace a kan tsare-tsarenka, fakitinka da ayyukanka, zaka iya yin hakan cikin sauƙi ba tare da komawa ga girka wasu ƙarin abubuwa ba.

Ga kamfanoni da ke Turai, muna ba da **ƙarin abu** wanda ke ƙara kayan aiki da fasaloli don fi **goyon bayan bin ƙa’idojin VAT**.

Ultimate Multisite ba ya gabatar ko tura haraji a madadinka zuwa gwamnati; kawai muna taimaka maka tattara harajin da ya dace a lokacin mu’amala. **Har yanzu za ka buƙaci tura haraji da kanka.**

## Kunna Tattara Haraji {#enabling-tax-collection}

Ba a kunna tattara haraji ta tsohuwa ba. Don kunna shi, kana buƙatar zuwa **Ultimate Multisite > Settings > Taxes** sannan ka kunna saitin Enable Taxes.

![Maɓallin kunna Enable Taxes a saman shafin saitunan Haraji](/img/config/settings-taxes-enable.png)

Ga cikakken kallon shafin saitunan haraji:

![Cikakken shafin saitunan haraji](/img/config/settings-taxes-full.png)

Haka kuma zaka iya duba saitunan haraji na kayayyaki ɗai-ɗai:

![Saitunan haraji na kayayyaki](/img/config/settings-taxes.png)

### Ba a haɗa haraji ba vs. an haɗa haraji {#tax-excluded-vs-tax-included}

Ta tsohuwa, duk farashin kayayyakinka ba su haɗa da haraji ba, ma’ana haraji **ba ya cikin** farashin samfurin. Idan muka tantance cewa abokin ciniki ya kamata ya biya haraji a kan wani saye, za mu ƙara harajin **a kan** jimillar ƙananan kuɗi.

Idan ka fi son a haɗa haraji cikin farashin samfurinka, zaka iya yin hakan ta kunna saitin **Inclusive Tax**.

![Jerin maɓallin Inclusive Tax a ƙasa da saitin Enable Taxes](/img/config/settings-taxes-inclusive.png)

Kar ka manta ka **adana** canje-canjen da ka yi.

###

## Ƙirƙirar Adadin Haraji {#creating-tax-rates}

Bayan ka kunna Tattara Haraji, za ka buƙaci ƙirƙirar adadin haraji ga takamaiman wurare ta amfani da editan adadin harajinmu.

Zaka iya shiga editan ta danna maɓallin **Manage Tax Rates** a gefen shafin saitunan Haraji.

![Haɗin Manage Tax Rates a cikin sashen Tax Rates a shafin saituna](/img/config/settings-taxes-manage-rates.png)

A shafin editan adadin haraji, zaka iya ƙara sabbin Adadin Haraji ta danna maɓallin **Add new Row**.

![Teburin editan adadin haraji tare da maɓallin Add new Row a sama](/img/config/tax-rates-editor.png)

Za ka buƙaci ba kowane adadin haraji **take** (da ake amfani da shi a kan rasitoci). Sannan zaka iya zaɓar **ƙasa** (wajibi), **jiha,** da **birni** (duka na zaɓi) inda za a caji wannan haraji. A ƙarshe, ƙara **adadin haraji a cikin kaso**.

### Rukunonin Haraji {#tax-categories}

Haka kuma zaka iya ƙirƙirar Rukunonin Haraji da yawa, don ƙara adadin haraji daban-daban ga nau’o’in kayayyaki daban-daban.

Danna don **Add new Tax Category** , sannan ka rubuta sunan rukuninka kuma ka danna **Create**.

![Maɓallin Add new Tax Category a saman editan adadin haraji](/img/config/tax-categories-add.png)

![Filin shigar da Sunan Rukunin Haraji a cikin modal na ƙirƙirar rukuni](/img/config/tax-categories-create-modal.png)

Don bincika cikin rukuni-rukuni, danna **Switch** kuma zaɓi rukunin da kake son ƙara sabbin haraji gare shi.

![Maɓallin dropdown na Switch don sauyawa tsakanin rukunonin haraji](/img/config/tax-categories-switch.png)

![Dropdown na zaɓin rukunin haraji yana nuna rukunonin da ake da su](/img/config/tax-categories-select.png)

Zaka iya saita rukunin haraji ga wani takamaiman samfur ta zuwa **shafin gyara Samfur** sannan zuwa shafin Taxes.

![Shafin harajin samfur tare da rukunin haraji da maɓallin taxable](/img/config/product-taxes.png)

A wannan allon, zaka iya kashe maɓallin **Is Taxable?** don sanar da Ultimate Multisite cewa bai kamata ya tattara haraji a kan wannan samfurin ba.

## Goyon Bayan VAT na Turai {#european-vat-support}

Kamar yadda aka ambata a baya, muna da ƙarin abu da yake akwai ga abokin ciniki a EU wanda ke da ƙarin buƙatu saboda ƙa’idojin VAT na Turai.

Kayan aikinmu na VAT suna taimakawa da wasu muhimman abubuwa:

  * Sauƙin ɗora adadin VAT na EU;

  * Tattara da tabbatar da Lambar VAT - da kuma cajin juyawa ga ƙungiyoyin da aka keɓe daga VAT (kamar kamfanoni masu lambobin VAT masu inganci);

Don girka wannan ƙarin abu, je zuwa **Ultimate Multisite > Settings** sannan ka danna haɗin gefen shafi na **Duba ƙarin abubuwanmu**.

![Gefen shafin saituna tare da haɗin Duba ƙarin abubuwanmu](/img/config/settings-taxes-addons-link.png)

Za a tura ka zuwa shafin ƙarin abubuwanmu. A can, zaka iya bincika **ƙarin Ultimate Multisite VAT** kuma ka girka shi.

<!-- Ba a samu hoton allo ba: Tayil ɗin ƙarin VAT a shafin Ƙarin abubuwa -->

<!-- Ba a samu hoton allo ba: Tattaunawar Install Now ta ƙarin VAT -->

Sannan, ka je zuwa **Network Admin > Plugins** kuma ka kunna wannan ƙarin abu a duk hanyar sadarwa.

<!-- Ba a samu hoton allo ba: Aikin Network Activate na ƙarin VAT a shafin Plugins -->

Idan ka koma zuwa **shafin Saitunan Haraji** , za ka ga sabbin zaɓuɓɓuka da suke akwai. Kunna zaɓin **Enable VAT Support** don kunna sabbin kayan aikin VAT. Kar ka manta ka **adana** saitunanka!

<!-- Ba a samu hoton allo ba: Maɓallin Enable VAT Support a cikin saitunan Haraji bayan kunna ƙarin abu -->

### Jawo Adadin Harajin VAT {#pulling-on-vat-tax-rates}

Ɗaya daga cikin kayan aikin da haɗinmu ke ƙarawa shi ne ikon ɗora adadin haraji na ƙasashen membobin EU. Ana iya yin hakan ta ziyartar shafin editan adadin haraji bayan kunna goyon bayan EU VAT.

A ƙasan shafin, za ka ga zaɓuɓɓukan jawo VAT. Zaɓar nau’in adadi da danna maɓallin **Update EU VAT Rates** zai jawo kuma ya cika teburin ta atomatik da adadin haraji na kowace ƙasar memba ta EU. Sannan, kawai kana buƙatar adana shi.

![Maɓallin Update EU VAT Rates a ƙasan editan adadin haraji](/img/config/tax-rates-vat-pull.png)

Haka kuma zaka iya gyara ƙimomin bayan jawo su. Don yin hakan, kawai gyara layin teburin da kake buƙata kuma ka danna don adana sabbin ƙimomin.

### Tabbatar da VAT {#vat-validation}

Lokacin da aka kunna goyon bayan VAT, Ultimate Multisite zai ƙara ƙarin fili a fom ɗin checkout, a ƙasa da filin adireshin biyan kuɗi. Filin zai bayyana ne kawai ga abokan ciniki da ke cikin EU.

<!-- Ba a samu hoton allo ba: Filin Lambar VAT a fom ɗin checkout na frontend a ƙasa da adireshin biyan kuɗi -->

Ultimate Multisite zai tabbatar da VAT Number sannan idan ya dawo a matsayin ingantacce, za a yi amfani da tsarin reverse charge kuma za a sa adadin haraji ya zama 0% a kan wannan oda.
