---
title: Kukwera Kodesa za Kufunsa
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Kukhala Codes (v2) {#creating-discount-codes-v2}

_**CHONGO CHONGO: Izi zikufi ya Ultimate Multisite version 2.x.**_

Na Ultimate Multisite, muli ndi ulemu woshipatsa clients wanu discounts pa subscriptions zanu. Kodi kukhala kwake kukhala chifupi!

## Kukhala na Kulemba/Kupanga Codes (Discount Codes) {#creating-and-editing-discount-codes}

Kuti upange kapena kukonza code ya discount, ndi lankanso **Ultimate Multisite > Discount Codes**.

![List of discount codes — empty state before any codes exist](/img/config/discount-codes-empty.png)

Poni muli ndi list ya codes zoshipatsa discounts zomwe mumapanga.

Muli ndi ulemu woshipatsa **Add Discount Code** kuti upange coupon wosiyanasiyana kapena muli ndi malo omwe muli ndi malingaliro (hover) ndipo muli ndi chondecha cha **Edit**.

![List of discount codes with hover actions showing Edit and Delete links](/img/config/discount-codes-list-hover.png)

![Add Discount Code button in the page header](/img/config/discount-codes-add-button.png)

Muli wamulira pa ndau yemwe mudzakhala upange kapena kukonza coupon code yanu. M'maka, mutha upange monga wosiyanasiyana.

![Discount code edit page with all sections visible](/img/config/discount-code-edit.png)

Tiyerekeze kuona malo omwe muli ndi chondecha:

**Enter Discount Code:** Izi ndi limodzi lina m'malo (name) la coupon yanu. Iyi si code zomwe clients wanu adzakhala kukonza pa checkout form.

**Description:** Pamakale, muli ndi ulemu woshipatsa kuti coupon ili ndi chiyani.

![Discount code name and description fields at the top of the edit page](/img/config/discount-code-description.png)

Muli ndi ulemu woshipatsa kuti coupon ili ndi yenera kapena si yenera (active or inactive):

![Discount code active status](/img/config/discount-code-active.png)

**Coupon code:** Pamakale, ndi pano muli ndi malo omwe mudzakhala kukonza zomwe clients wanu adzakhala kukonza pansi pa checkout.

![Coupon code field where customers enter the code at checkout](/img/config/discount-code-coupon-field.png)

**Discount:** Muli, muli, muli, wena kodi ya discount (percentage) kapena muli wa kodi yomwe (fixed amount) utiwa kwa coupon yako.

![Discount amount setting with percentage or fixed-amount dropdown](/img/config/discount-code-amount.png)

**Apply to renewals:** Ngati uliweke off, kodi hii ya discount itatumiwa kwa malipo ya kwanza tu. Malipo yote mengine hatitakuwa na discount. Ngati uliweke on, kodi ya discount itakuwa halali kwa malipo yote yaliyofuata.

**Setup fee discount:** Ngati uliweke off, coupon code haitatoa discount yoyote kwa ada ya setup ya order. Ngati uliweke on, muli utaweza kuweka (percentage kapena muli wa kodi) ambayo coupon code hii itatumika kwa ada ya setup ya mipango yako.

![Apply to renewals and setup fee discount toggle options](/img/config/discount-code-renewals.png)

**Active:** Uliweke manually on kapena off coupon code hii.

![Active toggle to manually enable or disable the discount code](/img/config/discount-code-active.png)

Chikwira **Advanced Options**, tili na mambo haya:

![Discount code advanced options](/img/config/discount-code-advanced.png)

**Limit uses:**

  * **Uses:** Hapa, utaona uko mpaka kodi ya discount ilitumika mara ngapi.

  * **Max uses:** Hii itapunguza idadi ya mara ambayo watumiaji wanaweza kutumia kodi hii ya discount. Kwa mfano, ukipanga 10 hapa, coupon hiyo inaweza kutumika mara 10 tu. Baada ya mipaka hii, coupon code haitakuwa na uwezo wa kutumika tena.

![Limit uses setting with current uses count and max uses field](/img/config/discount-code-limit-uses.png)

**Mabwera ndi kusaka ndi kukhala:** Pansi pa iwo, muli ndi chochita kuti muperekeza tsiku la kuchokera ndi/ngakhale kwa kuchepa coupon yanu.

![Start and expiration date fields for scheduling the discount code](/img/config/discount-code-dates.png)

**Kufunsa zinthu:** Ngati mukuwone **Select products** on, zomwe zimene zonse zikuti zikusonyeze zinthu zonse za inu. Muli ndi chochita kuti muperekeze kwa inu (pocheza onse kapena off) kuti ndalama yotere yomwe yenera imene imene kuwoneza coupon code. Zinthu zomwe zimene zikuperezeka off pano zimene zikupereka chotsatira ngati anthu anayamba kutsegula coupon code iwo kwawo.

![Limit products section with per-product toggle switches](/img/config/discount-code-limit-products.png)

Pambuyo pa kuchita zonse zina, chonde chita **Save Discount Code** kuti muperekeze coupon yanu ndipo kuliye!

![Save Discount Code button at the bottom of the edit page](/img/config/discount-code-save.png)

Coupon iwo ikuti ndi lisonkhani lanu ndipo, kuchokera ku m'malo imeneyi, muli ndi chochita kuti muperekeze **edit or delete** (kufunsa kapena kupanga) iye.

![Discount code row in the list with Edit and Delete hover actions](/img/config/discount-codes-list-hover.png)

###

### Kukhala ndi URL Parameters: {#using-url-parameters}

Ngati mukuwoneza kuti muli ndi kusintha zinthu za kupewa (pricing tables) kapena mukuwoneza ndalama yomwe yenera kwa kupanga udindo wogulitsa (coupon code page) kwa website yanu ndipo mukuwoneza kuti muperekeze coupon code kwa checkout form yanu m'malo, muli ndi ulemu wosonyeza m'URL parameters.

Mmodzi, mukucheza kuti muli ndi link yomwe mungutse (shareable link) kwa plan yanu. Kuti muperekeze izi, chita **Ultimate Multisite > Products** ndipo chita plan imene.

Chita button ya **Click to Copy Shareable Link**. Izi zimene kuti muperekeze link yomwe mungutse kwa plan iye. M'malo wathu, link yomwe mungutse wenechere kwali ndi [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_.

![Product page with shareable link button](/img/config/products-list.png)

Kuti wopambwamba kuti mupuseka kodi ya kuwanda kuplanisi iliyonse, ndi chotsatira parameter **?discount_code=XXX** ku URL. Kodi **XXX** ndi kodi ya coupon yanu.

M'malo mwa mfundo yathu pano, tikuyendetsa kodi ya coupon **50OFF** ku wopambana wopambana wopambana.

URL yopambana ya planisi iyi ndipo imapambana ndi kodi ya 50OFF iyenera kutanthauza: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
