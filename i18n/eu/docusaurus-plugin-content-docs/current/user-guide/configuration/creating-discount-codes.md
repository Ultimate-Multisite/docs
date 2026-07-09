---
title: Kunde kodak sortzea
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Discount Codes Erdatzea (v2) {#creating-discount-codes-v2}

_**IMPORTANTE NOTA: Hau artikulu Ultimate Multisite bertsio 2.x-era referentzia egiten du.**_

Ultimate Multisite-rekin, client-ek bere abonazioakaren eskaintzak egin dezisten discount codes ez daitezke sortu dezakezu. Aurreratzea erabeliandunak!

## Discount Codes Erdatzea eta Editzea {#creating-and-editing-discount-codes}

Discount code bat sortzeko edo editatzeko, **Ultimate Multisite > Discount Codes** funtziokoan jarraitu.

![Discount codes list — empty state before any codes exist](/img/config/discount-codes-empty.png)

Hau da discount codes ezartu duzu dituen lista.

Coupon berri bat sortzeko **Add Discount Code** (Discount Code zehatua) klik egin dezakezu edo horiek editatzeko, ondorioztatu eta **Edit** (Editatu) klik egin dezakezu.

![Discount codes list with hover actions showing Edit and Delete links](/img/config/discount-codes-list-hover.png)

![Add Discount Code button in the page header](/img/config/discount-codes-add-button.png)

Coupon code sortu edo editatzeko lapera rediritu dira. Horrek, testuaren bidez, berri bat sortuzteko da.

![Discount code edit page with all sections visible](/img/config/discount-code-edit.png)

Hau dagoen artean dagoen konfiguratura hauek ikustu dezakezu:

**Enter Discount Code (Discount Code zehatua):** Hau da discount code-aren irudi. Client-ek checkout forman erabil behar duen kodea hau ez da.

**Description (Deskribapena):** Hau da diseinatu duzun coupon-a zer egin duen laburki deskribatzen dituzu.

![Discount code name and description fields at the top of the edit page](/img/config/discount-code-description.png)

Coupon codea aktibo edo inaktibo gisa ere ikustu dezakezu:

![Discount code active status](/img/config/discount-code-active.png)

**Coupon code (Coupon kodea):** Hau da lekuan diseinatu duzun kodea ematen dituen client-ek checkout-ean erabil behar duen partea.

![Coupon code field where customers enter the code at checkout](/img/config/discount-code-coupon-field.png)

**Ezardunak:** Hiera, da ezartu **porcentage** edo **suma zehatza** (fixed amount) sortu dugu diseinazioan.

![Discount amount setting with percentage or fixed-amount dropdown](/img/config/discount-code-amount.png)

**Udalakariak (Renewals)-ean aplikatu:** Hau opsioa hori deshabilitatuta dagoenean, ha ezartu kodea **lehen mugikamentuaren** (first payment) beste guztietan aplikatzen da. Beste mugikamentuak ez izango dute ezartu. Hau opsio hori aktiboa dutenean, ezartu kodea allako mugikamentuetan erabilera du.

**Mundiaren (Setup fee) ezartu diseinazioa:** Hau opsio hori deshabilitatuta dagoenean, kokuak **ez emateko ezartu diseinazio bat mugikamentuaren mugikorretara**. Hau opsio hori aktiboa dutenean, ezartu kodea moduarekin edo suma zehatza (porcentage edo fixed amount) mugikamentuaren mugikorretara aplikatzen duen ezartu diseinazioa emateko konditionak sortuedu da.

![Apply to renewals and setup fee discount toggle options](/img/config/discount-code-renewals.png)

**Aktiboa (Active):** Hau ezartu kodea manuaz aktibo edo deshabilitatu duzu.

![Active toggle to manually enable or disable the discount code](/img/config/discount-code-active.png)

**Opsioak Advanced (Advanced Options)**-ean, da hauek dira:

![Discount code advanced options](/img/config/discount-code-advanced.png)

**Erabilera limitatzea (Limit uses):**

  * **Erabilera (Uses):** Hau da, ezartu kodea zerbait erabilra dutelako ikusteko lekuak.

  * **Maksimum erabilera (Max uses):** Hau da, erabiltzaileek ezartu kodea zerbait erabilera du eta limitatzea. Adibidez, hailean 10 pututze zitu, kokuak 10 gaurraren lekuan erabilera dutelako izango da. Horrekik gaurrak ezartu kodea erabilera egingo ez da.

![Limit uses setting with current uses count and max uses field](/img/config/discount-code-limit-uses.png)

**Le data aur egindua:** Hiera izango da opciónkileak, coupon-ek datu-eguna eta/edo egindua data bat ezartzeko.

![Start and expiration date fields for scheduling the discount code](/img/config/discount-code-dates.png)

**Produkto limitatu:** Hau **Select products** (Produkto zehazteak) on egin denean, produkio guztiek ematen dira. Coupon kode hau zer produkzioa gurean hartuko da, hori manuel olarak irudi (on egin edo ez egin ondorioz) zehazteko opszioa izango da. Hau ezarritutako produktuak ez egindakoak izan, kliente hauek coupon kode hau erabiliko jakin denean ez aurrerako erokin izango du.

![Limit products section with per-product toggle switches](/img/config/discount-code-limit-products.png)

Hau guztiz opsioak konpondu gtainaren ondoren, **Save Discount Code** (Coupon kodea saldatu) klik egin behar duzu coupon-ek saldatzeko eta gertu da!

![Save Discount Code button at the bottom of the edit page](/img/config/discount-code-save.png)

Coupon-ek orain lista-rek dago eta, hinu klik egin dezake **edit edo delete** (edit edo boratu).

![Discount code row in the list with Edit and Delete hover actions](/img/config/discount-codes-list-hover.png)

###

### URL parametrikak erabiliz: {#using-url-parameters}

Harga-lekuak zehazteko edo web-sailan coupon kodea daiteke aplikatzea eta checkout form-era otomatikamente apply egin nahi duzu, hori URL parametrikak bidez egin dezakezu.

Lehenik, plan-ek shareable link (linka irudible) aldatzeko behar duzu. Horrek egin dezakezu, **Ultimate Multisite > Products** (Ultimate Multisite > Produkzioak) funtziokoan jarraitu eta plan bat desebutatu.

**Click to Copy Shareable Link** (Shareable link kopioatzeko klik egin) botontik klik egin duzu. Hau daiteke ziurtatuko duen plan-eko shareable linka. Gure kasuan, ematen linka hau izan zen: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_.

![Product page with shareable link button](/img/config/products-list.png)

Horren eskaintzen (discount code) aplikatzeko, URL-eko parametroak **?discount_code=XXX** edo beste hainbat parameterak ezartu behar duzu. Honen kasuan, **XXX** da kupon kodea.

Honen aldeko testuaren bitartean, kupon kodea **50OFF** produktu hori berekin aplikatuko da.

Honen plan-eko URL-ea eta 50OFF eskaintza kodua aplikatutako URL-ea hiru da: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
