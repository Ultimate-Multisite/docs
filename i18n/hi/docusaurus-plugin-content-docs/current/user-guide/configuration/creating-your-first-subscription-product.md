---
title: अपना पहला सब्सक्रिप्शन प्रोडक्ट बनाना
sidebar_position: 6
_i18n_hash: ec2328e89406069449b4078a2724c029
---
# अपना पहला Subscription Product बनाना (v2)

_**महत्वपूर्ण नोट: यह लेख केवल Ultimate Multisite version 2.x यूज़र्स के लिए है। अगर आप version 1.x इस्तेमाल कर रहे हैं,**_ **_**यह लेख देखें**_**.

अपने network को चलाने और संभावित यूज़र्स को अपनी सेवाएं बेचना शुरू करने के लिए, आपके पास अलग-अलग subscription विकल्प होने चाहिए। ये products कैसे बनाएं? आप किस तरह के products offer कर सकते हैं? इस लेख में, हम products के बारे में वो सब कुछ कवर करेंगे जो आपको जानना ज़रूरी है।

## Product का प्रकार

Ultimate Multisite के साथ आप अपने clients को दो तरह के products offer कर सकते हैं: **plans** और **add-ons** **(Order Bump)**। Add-ons को दो प्रकारों में बांटा जा सकता है: **packages** और **services**। आगे हम इनके अंतर और विशेषताएं देखेंगे।

  * **Plans** : Ultimate Multisite का मूल product। आपके client के पास membership तभी हो सकती है जब वो किसी plan से जुड़ी हो। एक plan आपके clients को एक या उससे ज़्यादा sites देता है (यह आपके plan की settings पर निर्भर करता है) उन limitations के साथ जो आप अपने product editing page पर सेट करते हैं।

  * **Packages** : ऐसे add-ons जो सीधे Ultimate Multisite plans की functionalities को प्रभावित करते हैं। ये limitations को बदलते हैं या आपके client ने जो original plan खरीदा है उसमें नए resources, plugins या themes जोड़ते हैं। उदाहरण के लिए, एक basic plan में 1,000 visits प्रति माह हो सकती हैं और आप एक package उपलब्ध करा सकते हैं जो इस संख्या को 10,000 तक बढ़ा दे।

  * **Services:** ऐसे add-ons जो Ultimate Multisite की functionalities को नहीं बदलते। ये वो tasks हैं जो आप अपने client के लिए उनके खरीदे गए plan के अतिरिक्त करेंगे। उदाहरण के लिए, आपका customer एक single site वाला plan खरीद सकता है और इस site की design के लिए एक extra service का भुगतान भी कर सकता है।

## Products को मैनेज करना

कई लोगों के लिए Ultimate Multisite में **Products** tab **(Ultimate Multisite > Products)** को traditional hosting environment में plans के समान माना जा सकता है।

Ultimate Multisite में Products tab किसी specific product या service पर लागू होने वाली संरचना और limitations को define करता है। ऐसी संरचनाएं product या service description, price, taxes, और permissions तक फैली हुई हैं।

यह section Ultimate Multisite की इस महत्वपूर्ण आधारशिला को समझने में आपकी मदद करेगा।

![Products list page](/img/config/products-list.png)

## Products जोड़ना

चाहे plan हो, package हो, या service - किसी भी नए item को define करने का entry point **Ultimate Multisite > Products > Add Product** के माध्यम से है।

![Add Product button](/img/config/product-add-button.png)

इंटरफ़ेस में दो प्रमुख sections हैं। बाईं तरफ कई tabs हैं जो product को define करने में मदद करते हैं और दाईं तरफ कुछ sections हैं जो product की base price, उसकी active state, और product image को define करते हैं।

![Product edit page overview](/img/config/product-edit-full.png)

### Description

Base product की जानकारी product name और description देकर define की जा सकती है। ये identifiers वहां display होते हैं जहां भी product की जानकारी ज़रूरी होती है जैसे plan और pricing selection, invoices, upgrades, आदि।

![Product description section](/img/config/product-description.png)

### Pricing Type

इंटरफ़ेस की दाईं तरफ, base pricing को define किया जा सकता है।

![Pricing and save section](/img/config/product-pricing-save.png)

Ultimate Multisite तीन अलग-अलग pricing types को support करता है। **paid** option network administrator को product की price और billing frequency के बारे में जानकारी देने के लिए prompt करता है।

### Pricing

Price component base product price और billing interval को define करता है।

![Pricing and save section](/img/config/product-pricing-save.png)

इस प्रकार $29.99 की example price के साथ 1 month की setting हर महीने $29.99 bill करेगी। इसी तरह, $89.97 की price के साथ 3 months की setting हर quarter में वो amount bill करेगी।

### Billing Cycles

Billing cycles section ऊपर बताए गए billing interval की frequency को specify करता है और आमतौर पर contracts या fixed terms के संदर्भ में समझा जाता है।

![Pricing and save section](/img/config/product-pricing-save.png)

उदाहरण के लिए, $29.99 की product price के साथ 1 month का interval और 12 billing cycles अगले 12 महीनों में product के लिए हर महीने $29.99 bill करेगी। दूसरे शब्दों में, ऐसी setting 12 महीनों के लिए $29.99 प्रति माह का fixed-price term establish करेगी और फिर billing बंद हो जाएगी।

### Trial Period

Offer trial toggle को enable करने से network administrator को product के लिए trial period define करने की सुविधा मिलती है।

![Pricing and save section](/img/config/product-pricing-save.png)

Trial period के दौरान, customers product को freely इस्तेमाल कर सकते हैं और trial period खत्म होने तक उन्हें bill नहीं किया जाएगा।

### Setup Fee

आप अपने plan में setup fee भी लागू कर सकते हैं।

![Pricing and save section](/img/config/product-pricing-save.png)

इसका मतलब है कि आपका client पहले charge पर एक extra amount pay करेगा (price plan के अलावा) जो इस section में आपके द्वारा define की गई fee के अनुरूप होगी।

### Active

Active toggle effectively define करता है कि product नए sign-ups के लिए customers को उपलब्ध है या नहीं।

![Active toggle](/img/config/product-active.png)

अगर इस plan पर existing customers हैं तो toggle को disabled state में सेट करने से plan को grandfather कर दिया जाता है और इसे future sign-ups से हटा दिया जाता है। **Plan पर existing customers को bill किया जाता रहेगा** जब तक उन्हें नए plan में transition नहीं किया जाता या plan से remove नहीं किया जाता।

### Product Image

**Upload Image** button network administrator को media library का उपयोग करके product image select या upload करने की सुविधा देता है।

![Product image section](/img/config/product-image.png)

### Delete

**Delete Product** button product को system से delete कर देता है। यह product publish होने के बाद दिखाई देता है।

![Delete product section](/img/config/product-delete.png)

अन्य deletions के विपरीत, product को किसी trash state में नहीं रखा जाता। इसलिए एक बार delete होने के बाद यह action irreversible है।

### Product Options

एक बार base-level product information define हो जाने के बाद, product options network administrator को product की specific attributes को और define करने में मदद करते हैं।

#### General

**General** tab product की general attributes को define करता है जो किसी भी अन्य product-specific tabs पर applicable नहीं हैं।

![General tab](/img/config/product-general-tab.png)

Self-explanatory **product slug** उस slug को define करता है जिससे product को URLs और Ultimate Multisite के अन्य areas में identify किया जाता है।

Ultimate Multisite कई product types को support करता है जैसे Plan, Package, और Service। **Product Options** tabs specified product type के अनुसार dynamically adjust होते हैं।

**Customer Role** उस role को specify करता है जो site बनने पर customer को assign की जाती है। आमतौर पर अधिकांश network administrators के लिए, यह Ultimate Multisite default या Administrator होगी। Ultimate Multisite default role को **Ultimate Multisite > Settings > Login & Registration** में सेट किया जा सकता है।

![Customer role settings](/img/config/product-customer-role-settings.png)

#### Up & Downgrades

यह tab customer को उनके specific tier में उपलब्ध upgrade और downgrade paths को specify करता है।

इस concept को समझने के लिए एक उदाहरण पर विचार करें जहां एक niche Ultimate Multisite installation अपने customers को learning management solutions provide करता है। इसे achieve करने के लिए तीन plans (Basic, Plus, और Premium) define किए गए हैं और प्रत्येक plan के लिए specific plugins activate किए गए हैं (plugins activate करने के instructions के लिए इस section में आगे देखें)।

अगर Ultimate Multisite installation business websites या eCommerce websites को भी service करता है तो उन plans में अलग-अलग plugins install और activate करने की ज़रूरत हो सकती है।

इस हद तक, eLearning customers को eCommerce plans में transition करने देना undesirable और problematic होगा क्योंकि ये plans, pricing, और limitations उचित fit नहीं हो सकते।

इसलिए customer के path को restrict करने और incidents को रोकने के लिए network administrator एक plan group define कर सकता है और उस group में वो plans specify कर सकता है जिनमें customer transition कर सकता है।

![Up and Downgrades tab](/img/config/product-upgrades.png)

Plan group define करने के लिए **plan group** list में compatible plans specify करें। **product order** determine करता है कि plans को lowest से highest तक कैसे order और display किया जाए।

Ultimate Multisite में **order bump** feature भी शामिल है जहां उचित add-on products और services को plans में जोड़ा जा सकता है। ये customer को additional items के रूप में offer किए जाते हैं जिन्हें checkout या upgrade के दौरान plans में जोड़ा जा सकता है।

#### Price Variations

Price variations network administrator को duration के आधार पर alternate pricing tiers specify करने की सुविधा देते हैं। यह setting 3 months, 6 months, या annual pricing tiers establish करना या use case द्वारा determine की गई कोई अन्य duration और frequency को संभव बनाती है।

![Price Variations tab](/img/config/product-price-variations.png)

Price variations establish करने के लिए, **enable price variations** toggle को active पर सेट करें और **Add new Price Variation** button पर click करें।

Variation enter करने के लिए, variation की duration, period, और price सेट करें। Button पर फिर से click करके additional variations enter की जा सकती हैं।

![Price Variations tab](/img/config/product-price-variations.png)

#### Taxes

**Taxes** tab **Ultimate Multisite > Settings > Taxes** में specified tax settings के साथ align होता है और विशेष रूप से define की गई tax rates के साथ। Taxes enable करने और applicable tax rates define करने के लिए कृपया **Ultimate Multisite: Settings** पर documentation देखें

![Taxes tab](/img/config/product-taxes.png)

पिछले उदाहरण में, हमने California (United States of America) में customers पर applicable 7.25% की local tax rate define की थी।

एक बार tax rate **Ultimate Multisite > Settings > Manage Tax Rates** में define हो जाने के बाद यह product level पर selectable हो जाती है।

![Taxes tab](/img/config/product-taxes.png)

यह indicate करने के लिए कि product एक taxable item है, **Is Taxable** toggle को active पर सेट करें और Tax Category dropdown से applicable tax rate select करें।

#### Site Templates

मूल रूप से, site templates complete WordPress websites हैं जो customer की subscription शुरू होने पर उनकी site पर clone की जाती हैं।

![Site Templates tab](/img/config/product-site-templates.png)

Network administrator template site को activated और configured themes, plugins, और content के साथ एक regular WordPress site के रूप में बनाता और configure करता है। Template site customer को verbatim clone की जाती है।

यह tab network administrator को नई subscription पर site templates के behavior को specify करने की सुविधा देता है। Site templates का उपयोग करने के लिए, **allow site templates** toggle को active state में सेट करें।

**site template selection mode** subscription process के दौरान site templates के behavior को define करता है।

**Default** setting checkout form में steps को follow करती है। अगर network administrator ने checkout process में template selection step define किया है और step को templates के साथ define किया गया है तो यह setting checkout step में establish किए गए directives का सम्मान करेगी।

**Assign Site Template** specify करने से specified template का selection force हो जाता है। नतीजतन, checkout process में कोई भी template selection steps remove हो जाते हैं।

अंत में, **Choose Available Site Templates** checkout step में specified templates को इस setting में selected templates से override कर देता है। Selection में customer की मदद के लिए pre-selected template भी define किया जा सकता है।

अंततः अगर network administrator चाहता है कि template selection checkout steps में हो तो '_default_' की setting पर्याप्त होगी। वैकल्पिक रूप से template selection को remove और lock करने और selection को plan settings को delegate करने के लिए '_assign new template_' या '_choose available site templates_' options desirable हो सकते हैं।

#### Sites

**Sites** tab Ultimate Multisite की limitations functionality का हिस्सा है।

![Sites tab](/img/config/product-sites.png)

यह setting specify करती है कि customer अपनी membership के तहत maximum कितनी sites बना सकता है।

Limitation enable करने के लिए, **limit sites** toggle को active state में सेट करें और **site allowance** field में maximum sites की संख्या specify करें।

#### Visits

**Visits** tab Ultimate Multisite के limitations system का एक और हिस्सा है। यह setting customer की site पर unique visitors की accounting और subsequent throttling की अनुमति देती है।

![Visits tab](/img/config/product-visits.png)

Marketing perspective से, network administrators इस setting का उपयोग customers को limits reach होने पर अपना plan upgrade करने के लिए encourage करने के साधन के रूप में कर सकते हैं। यह setting network administrator को system resources को preserve करने के लिए sites पर excessive traffic को curb और prevent करने में भी मदद कर सकती है।

इस feature का उपयोग करने के लिए, **limit unique visits** toggle को active state में सेट करें और **unique visits quota** field में maximum unique visitors की संख्या specify करें।

एक बार यह limit reach हो जाने पर Ultimate Multisite customer की site को serve करना बंद कर देगा और इसके बजाय एक message display करेगा जो indicate करेगा कि limits exceed हो गई हैं।

#### Users

Ultimate Multisite की 'Users' limitations network administrator को users की संख्या पर limits impose करने की अनुमति देती है जो create और roles को assign किए जा सकते हैं।

![Users tab](/img/config/product-users.png)

Limitations feature enable करने के लिए, **limit user** toggle को दाईं ओर slide करके active state में सेट करें।

इसके बाद प्रत्येक role जिसे limit करना है, उसके बगल में toggle को active state में सेट करें और appropriate field में maximum upper limit define करें।

#### Post Types

**Post Types** tab network administrator को WordPress में post types की extensive array पर granular limits impose करने की अनुमति देता है।

![Post Types tab](/img/config/product-post-types.png)

WordPress की construction के कारण, posts और post types इसकी core functionality का significant component हैं, और इसलिए Ultimate Multisite का limitations system network administrator को limits establish और maintain करने में assist करने के लिए designed है।

इस limits subsystem को enable करने के लिए, **limit post types** toggle को दाईं ओर slide करके active state में सेट करें।

इसके बाद, प्रत्येक post type जिसे limit करना है, उसे दाईं ओर slide करके toggle on करें और appropriate field में maximum upper limit specify करें।

#### Disk Space

**Disk Space** tab network administrators को customers द्वारा consume की जाने वाली space को restrict करने की अनुमति देता है।

![Disk Space tab](/img/config/product-disk-space.png)

आमतौर पर WordPress multisite में core files सभी sites के बीच shared होती हैं और media files और uploads के लिए individual directories बनाई जाती हैं जिन पर ये settings और limitations apply होती हैं।

Disk usage limitation enable करने के लिए, **limit disk size per site** toggle को दाईं ओर slide करके active state में सेट करें।

इसके बाद, **disk space allowance** field में megabytes में maximum upper limit specify करें।

#### Custom Domain

इस option को toggle करके आप specifically इस plan पर custom domains allow कर सकते हैं।

![Custom Domains tab](/img/config/product-custom-domains.png)

#### Themes

Product options में **Themes** tab network administrator को customers को selection के लिए themes available कराने और optionally theme की state को force करने की अनुमति देता है।

![Themes tab](/img/config/product-themes.png)

_**नोट: Themes को customers को available कराने के लिए उन्हें network administrator द्वारा network enabled होना चाहिए।**_

![Network themes page](/img/config/product-themes-network-enabled.png)

**visibility** option define करती है कि यह theme customer को उनकी site में **Appearance > Themes** tab देखते समय visible है या नहीं। इस option को **Hidden** पर सेट करने से theme view से remove हो जाता है और इस प्रकार उसे select और activate करने की ability restrict हो जाती है।

![Themes tab](/img/config/product-themes.png)

**behavior** selection network administrator को customer site के creation पर theme की state define करने की अनुमति देता है।

**Available** state में theme customer को self-activation के लिए available कराया जाता है। इसके विपरीत, **Not Available** state customer से theme activate करने की ability remove कर देती है। अंत में, **Force Activate** option theme के selection और activation को force करता है और इस प्रकार site creation पर इसे default के रूप में सेट करता है।

#### Plugins

Themes tab के समान, Ultimate Multisite network administrator को customers को plugins की visibility define करने की अनुमति देता है साथ ही नई site के creation पर उनकी state भी।

![Plugins tab](/img/config/product-plugins.png)

**visibility** drop-down plugin को customer की site पर Plugins menu option के माध्यम से देखने पर visible या hidden करने की अनुमति देता है।

Network administrator behavior drop-down में options का उपयोग करके plugins के behavior को और manipulate कर सकता है।

![Plugins tab](/img/config/product-plugins.png)

**Default** selection customer द्वारा selected site template में defined plugin state का सम्मान करता है। इस प्रकार template में जो plugins activated हैं वे template को customer की site पर clone करने पर activated रहेंगे।

**Force Activate** site creation पर plugin को active state में रखता है और इसके विपरीत **Force Inactivate** site creation पर plugin को deactivate कर देता है। इन दोनों परिस्थितियों में, plugin की state को customer द्वारा अपने WordPress Plugins menu के माध्यम से manually बदला जा सकता है।

**Force Activate & Lock** setting इसी तरह operate करती है लेकिन customer द्वारा plugin state को बदलने से रोकती है। इस प्रकार Force Activate and Lock की setting plugin को active state में force करेगी और customer को इसे deactivate करने से रोकेगी। इसी तरह, **Force Inactivate & Lock** setting plugin को inactive state में force करेगी और user को plugin activate करने से रोकेगी।

Network administrator Force Activate & Lock और Force Inactivate & Lock settings को site templates के साथ मिलाकर विचार करना चाह सकता है क्योंकि अगर ये settings selected हों तो templates में plugins और plugin states इन settings से प्रभावित हो सकती हैं।

#### Reset Limitations

**Reset Limitations** tab product पर defined सभी custom limits को reset करता है। Limitations reset करने के लिए **reset limitations** button पर click करें।

![Reset Limitations tab](/img/config/product-reset-limitations.png)

Action confirm करने के लिए **confirm reset** toggle को दाईं ओर slide करके active state में सेट करें और **reset limitations** button पर click करें।

![Reset Limitations tab](/img/config/product-reset-limitations.png)

## Product को Edit, Duplicate, या Delete करें

Existing products को **Ultimate Multisite > Products** पर navigate करके और existing product name पर hover करके edit, duplicate या delete किया जा सकता है।

![Product hover actions](/img/config/product-hover-actions.png)
