---
title: Wurin shigarwa
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# شێوازی تۆمارکردن (v2)

_**تێبینی گرنگ: ئەم بابەتە ئاماژەیە بۆ Ultimate Multisite وەرگرتنی 2.x.**_

کۆمەڵێک ڕێگەیان هەیە کە بەکارییاندا دەتوانن لە تۆڕەکەتدا تۆمار بکەن. دەتوانن فۆرم تۆمارکردنی ئێوە یان لینکێکی بەشداریکار بۆ پلانی پێشەدیار هەڵبژێردراو بکاربهێنن. لێرەدا دەبینین چۆن کڕیارەکانتان دەتوانن لەسەر تۆڕەکەت تۆمار بکەن بە بەکارهێنانی ڕێگاکانی موجود و چی دوای تۆمارکردنیان لەسەر تۆڕەکەت ڕوودەدات.

## بەکارهێنانی فۆرم تۆمارکردن: {#using-the-registration-form}

ئەمە کارکردنی ئاسایی تۆمارکردنە. دەتوانیت یەک پەیجی تۆمارکردن دروست بکەیت کە پێداویستی بە **checkout form** (فۆرمی پاراستن) هەیە و ئەمە ئەو شوێنە دەبێت کە کڕیارەکانتان بگەن بۆ تۆمارکردن لەسەر تۆڕەکەت و اشتراک لە یەکێک لە پلاناوە بکەن. ئەگەر دەتەوێت، دەتوانیت چەندین پەیجی تۆمارکردن هەبێت، هەر یەکێکیان فۆرمی جیاواز بۆ تۆمارکردن بێت.

پایەندی (Default) بۆ پەیجی تۆمارکردن ئەوەیە [_**yourdomain.com/register**_](http://yourdomain.com/register)، بەڵام دەتوانیت لە هەر کاتیێک لە **Ultimate Multisite > Settings > Login & Registration > Default Registration Page** بگۆڕیت.

کاتێک یەکێک لەو کارەکانتان دەگاتە پەیجی تۆمارکردنی ئێوە (بە സാധാരണ هەڵگرتنی دuguوی **Sign in** یان **Buy now**)، فۆرم تۆمارکردنی ئێوە لەوێ دەبینن.

![فۆرمی تۆمارکردن لەسەر پەیجی تۆمارکردن](/img/frontend/registration-form.png)

ئەمە نموونەیەکی فۆرمی پاراستن وەک ئەوەی لە پێشەوە (frontend) دەردەکەوێت:

![فۆرم تۆمارکردنی پاراستن لەسەر پێشەوە](/img/config/checkout-frontend-registration.png)

تک کارتان ئەوەیە هەموو ئەو فیلدە پێویستانەی پڕ بکەن - وەک ئیمێل، ناوی کاربری، وشەی پشتگیریکار، هتد... - و پلانی پاراستنەکە بپارێزن یان ئیمێلی خۆیان پشتڕاست بکەنەوە ئەگەر بۆ پلانی بێ پارە یان پلانی پارە بەو کاتی تاقیکاری (trial period) بدون پێویستیی زانیاریی پارە تۆمار دەکەن.

لە پەیجی "سپاس بۆ ئێوە" (Thank you page)، ئەو دەبینن پەیامێک کە پێیان دەڵێت ئایا پێویستە ئیمێلەکەت پشتڕاست بکەیتەوە یان ئایا وێب سایتەکەت لەهاتووە و دەتوانن بەکاربهێنن.

![Thank You page after registration](/img/frontend/registration-thank-you.png)

Idan ana sabon hoton da shaid idanana, dole sai su ne buɗe. Idan ake buƙatar tabbatar da email (email address confirmation), dole su je cikin inbox ɗin su kuma su danna link na tabbatarwa (verification link). Wurin website ɗin ba zai yi aiki ba idan email ɗin ba ya tabbata.

Idan suka yi rijista a tsarin wani tsari mai kuɗi (paid plan) ko tabbatar da email ba shi ne buƙata a kan shaqwarka, za su samu damar yin aiki da website ɗin nan gaba bayan an kammala biyan kuɗi kuma za su nuna mus ubon don shiga dashboard.

![Site activated with link to sign in to dashboard](/img/frontend/site-activated.png)

## Amfani da Link Mai Aiki (Shareable Link): {#using-a-shareable-link}

Yadda ake rijista ta amfani da link mai aiki yana da nauyi kamar wajen rubuta shigarwa (registration form), amma bambancin shi ne idan ana amfani da link mai aiki, abokan hulɗarka za su iya zaɓar wani kayan aiki ko template na website a cikin shigarwar biyan kuɗi (checkout form) (ka'idojin saite Pre-selecting products and templates via URL parameters a kansa ka duba). Ko kuma yana iya ƙara wani lambar kupon (coupon code) (ka'idojin saite Using URL Parameters a kansa ka duba).

Wannan tsarin rijista zai zama gaba ɗaya: dole su shigar da sunan, sunan amfani (username), email ɗin, sunan website da kuma labarin shi, da sauransu... amma wani tsari ko template na website za a sa shi a nan kafin su shiga.

### Rijista Ta Amfani Da Biya Na Gaba (Manual Payments): {#registering-using-manual-payments}

Idan ba ka son amfani da PayPal, Stripe ko wata hanya ta biyan kuɗi da Ultimate Multisite ko ƙarin ayyukansa suka bayar, za ka iya amfani da biyan na gaba ga abokan hulɗarka. Wannan yana ba ka damar samar da kwestion (invoice) don su biya a kan hanyar biyan kuɗi da kake so bayan sun rijista a shaqwarka.

Tsarin rijista zai zama gaba ɗaya kamar yadda aka bayyana above, amma a shafin rijista abokan hulɗarka za su ga wata saƙo wanda ke nuna cewa za su samu email da ƙarin umarni don kammala biyan kuɗin.

![Sako wajibi na kuɗaɗarin sarayi yayin shigarwa](/img/frontend/registration-manual-notice.png)

Kuma bayan an kammala shigarwar, za su gani umarni biyanar da kake sanya (sannan kuma za su samu shi a imel).

![Umarni biyanar wanda aka nuna bayan shigarwa](/img/frontend/registration-payment-instructions.png)

Za ka iya canza umarnin biyanar a **Ultimate Multisite > Settings > Payments** bayan ka sanya wajen aiki (toggle on) zaɓin biyanar **Manual**:

![Toggle na biyanar manual da makonni biyanar](/img/config/manual-gateway-settings.png)

Bayan abokan ciniki su kammala biyanar manual kuma su aiko tabbacin ku, dole ka **tabbacin biyanar** don ƙarfafa shigarwar abokin ciniki da gidan yanar gizo.

Don yin hakan, tafiya zuwa **Ultimate Multisite > Payments** kuma nemo biyanar abokin ciniki. Ya kamata ta nuna yanayin **Pending**.

![Jadawalin biyanar tare da biyanar manual da ke tsayawa](/img/admin/payments-list.png)

Ka danna lambar biyanar kuma za ka iya canza yanayin ta zuwa **Completed**.

![Wurin bayanan biyanar](/img/admin/payment-edit.png)

![Canza yanayin biyanar zuwa Completed](/img/admin/payment-status-completed.png)

Bayan canza yanayin ta zuwa **Completed**, za ka ga saƙon **Activate membership**. Ka sanya wannan zaɓin **on** don ƙarfafa shigarwar da aka haɗa da abokin ciniki da gidan yanar gizo. Sannan, danna don **Save Payment**.

![Toggle na ƙarfafa shigarwa da Save Payment button](/img/admin/payment-activate-membership.png)

Abokan cinikin ka za su iya samun dashboard da duk waɗanda suka yi rajawa (subscribe) su.
