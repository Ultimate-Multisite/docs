---
title: සයිට් සැකිලි
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# වෙබ් අඩවි සැකිලි (v2)

_**සටහන: මෙම ලිපිය Ultimate Multisite version 2.x ගැන සඳහන් කරයි. ඔබ version 1.x භාවිතා කරන්නේ නම්,**_ **මෙම ලිපිය බලන්න.**_**.**_

Ultimate Multisite සමඟ ප්‍රමුඛ ජාලයක් නිර්මාණය කිරීමේදී අපගේ අරමුණ වන්නේ සැකසුම් බොහෝමයක් ස්වයංක්‍රීය කිරීම වන අතර, වෙබ් අඩවි නිර්මාණය කිරීමේදී අපගේ සේවාදායකයින්ට ඔවුන්ට අවශ්‍ය නම්‍යශීලීභාවය සහ තෝරා ගැනීමට විවිධ විකල්ප ලබා දීමයි. මෙම සමබරතාවය ඇති කර ගැනීමට පහසු ක්‍රමයක් නම් Ultimate Multisite Site Templates විශේෂාංගය භාවිතා කිරීමයි.

## වෙබ් අඩවි සැකිල්ලක් යනු කුමක්ද? {#what-is-a-site-template}

නමෙන් පෙනෙන පරිදි, Site Template එකක් යනු ඔබේ ජාලයේ නව වෙබ් අඩවි නිර්මාණය කිරීමේදී මූලිකයක් ලෙස භාවිතා කළ හැකි boilerplate (ප්‍රාථමික) වෙබ් අඩවියකි.

මෙයින් අදහස් කරන්නේ ඔබට මූලික වෙබ් අඩවියක් නිර්මාණය කර, විවිධ plugins සක්‍රිය කිරීමට, ක්‍රියාකාරී theme එකක් සැකසීමට සහ ඕනෑම ආකාරයකින් එය tùy chỉnh (customize) කිරීමට හැකි වීමයි. ඉන්පසු, ඔබේ පාරිභෝගිකයා නව ගිණුමක් නිර්මාණය කරන විට, අර්ථවත් අන්තර්ගතයන් නොමැති පෙරනිමි WordPress වෙබ් අඩවියක් වෙනුවට, සියලුම tùy chỉnh සහ අන්තර්ගතයන් දැනටමත් තිබූ ඔබේ මූලික වෙබ් අඩවියේ පිටපතක් ඔවුන්ට ලැබේ.

එය විශිෂ්ට දෙයක් ලෙස ඇසෙන්නට පුළුවන්, නමුත් නව වෙබ් අඩවි සැකිල්ලක් (site template) නිර්මාණය කරන්නේ කෙසේද? එය කළ හැකි සෑම ආකාරයකටම සරලයි.

## නව Site Template එකක් නිර්මාණය කිරීම සහ සංස්කරණය කිරීම {#creating-and-editing-a-new-site-template}

Site Templates යනු ඔබේ ජාලයේ සාමාන්‍ය වෙබ් අඩවි වේ. නව සැකිල්ලක් නිර්මාණය කිරීමට ඔබට **Network Admin > Ultimate Multisite > Sites > Add Site** වෙත යා හැකිය.

**![Sites list page හි add site බොත්තම](/img/config/site-templates-list.png)**

මෙය මගින් **Site title, Site Domain/path,** සහ **Site type** යන්න ඉල්ලා සිටින modal window එකක් විවෘත වේ. **Site Type** 드롭다운 ක්ෂේත්‍රය යටතේ ඔබ **Site Template** තෝරා ඇති බවට වග බලා ගන්න.

_![site type drop-down සහිත add site template modal](/img/config/site-templates-list.png)_

සැකිල්ලෙන් ඇතුළත් දේ පැහැදිලි කිරීමට පාරිභෝගිකයාට මුහුණ දෙන විස්තරයක් (customer-facing description) එක් කළ හැකිය:

![site template description field on the site template edit screen](/img/config/site-template-edit-description.png)

फॉर्मের নিচে, আপনি একটি **Copy Site** টগল সুইচ দেখতে পাবেন। এটি আপনাকে বিদ্যমান কোনো সাইট টেমপ্লেটের উপর ভিত্তি করে একটি নতুন সাইট টেমপ্লেট তৈরি করতে দেবে, যা স্ক্র্যাচ থেকে শুরু করার পরিবর্তে আপনার সময় বাঁচাতে সাহায্য করবে।

![Add site template modal with copy site toggle](/img/config/site-templates-list.png)

### সাইট টেমপ্লেটের বিষয়বস্তু কাস্টমাইজ করা {#customizing-the-contents-of-a-site-template}

আপনার সাইট টেমপ্লেট কাস্টমাইজ করতে, শুধু এর ড্যাশবোর্ড প্যানেলে যান এবং আপনার প্রয়োজনীয় পরিবর্তনগুলো করুন। আপনি নতুন পোস্ট বা পেজ তৈরি করতে পারেন, প্লাগইন সক্রিয় করতে পারেন এবং অ্যাক্টিভ থিম পরিবর্তন করতে পারেন। এমনকি আপনি Customizer-এ গিয়ে সব ধরনের কাস্টমাইজেশন অপশন পরিবর্তন করতে পারেন।

![site template edit interface](/img/config/site-template-edit.png)

এই সমস্ত ডেটা কপি হয়ে যাবে যখন কোনো গ্রাহক সেই সাইট টেমপ্লেটের উপর ভিত্তি করে একটি নতুন সাইট তৈরি করবেন।

### উন্নত বিকল্পসমূহ (Advanced Options) {#advanced-options}

আপনি যদি কিছু কাস্টম কোডিং সম্পর্কে জানেন, তবে আপনি আমাদের Search and Replace API ব্যবহার করতে পারেন যাতে নতুন সাইট তৈরির পরে স্বয়ংক্রিয়ভাবে তথ্য প্রতিস্থাপন করা যায়। এটি অ্যাবাউট পেজে কোম্পানির নাম পরিবর্তন করা বা কন্টাক্ট পেজে যোগাযোগের ইমেল ঠিকানা পরিবর্তন করার মতো কাজের জন্য খুব দরকারী।

### সাইট টেমপ্লেট ব্যবহার করা (Using Site Templates) {#using-site-templates}

ঠিক আছে, আপনি বিভিন্ন ডিজাইন, থিম এবং সেটিং সহ অনেকগুলো ভিন্ন সাইট টেমপ্লেট তৈরি করেছেন। এখন সেগুলোকে আপনার নেটওয়ার্কে কীভাবে কার্যকর করবেন?

মূলত, এখন আপনি দুটি পদ্ধতির মধ্যে যেকোনো একটি ব্যবহার করতে পারেন (একসাথে নয়):

  * প্রতিটি প্ল্যানের সাথে একটি করে সাইট টেমপ্লেট সংযুক্ত করা

**অথবা**

  * গ্রাহকদের সাইন-আপের সময় নিজেরাই সাইট টেমপ্লেট বেছে নিতে দেওয়া।

#### মোড ১: সাইট টেমপ্লেট বরাদ্দ করা (Assign Site Template) {#mode-1-assign-site-template}

මෙම මාදිලියේදී, ඔබේ ගනුදෙනුකරුවන්ට ගිණුමක් නිර්මාණය කරන විට සැකිල්ලක් (template) තෝරා ගැනීමට නොහැකි වනු ඇත. ඒ වෙනුවට, ඔබ සෑම සැලැස්මක් සඳහාම කුමන සැකිල්ල භාවිතා කළ යුතුද යන්න නිර්වචනය කරනු ඇත.

එය කිරීමට නම්, ඔබට **Ultimate Multisite > Products > Edit** වෙත යා යුතුය.

![Edit product to assign site template](/img/config/product-site-templates.png)

මෙය ඔබව **Edit Product** පිටුවට ගෙන යනු ඇත. **Product Options** කොටස යටතේ, **Site template** ටැබ් එක සොයාගෙන 드롭-ડાઉન ක්ෂේත්‍රයෙන් **Assign Site Template** විකල්පය තෝරන්න. මෙය ඔබට ලබා ගත හැකි site templates ලැයිස්තුව පෙන්වනු ඇති අතර නිෂ්පාදනය සඳහා කැප වූ site template එකක් පමණක් තෝරා ගැනීමට ඉඩ සලසයි.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### මාදිලිය 2: ලබා ගත හැකි Site Template තෝරන්න {#mode-2-choose-available-site-template}

මෙම මාදිලියේදී, ඔබ ගනුදෙනුකරුවන්ට ලියාපදිංචි කිරීමේ ක්‍රියාවලියේදී තේරීමක් ලබා දෙනු ඇත. නිෂ්පාදන සැකසුම් යටතේ ඔබ නිර්වචනය කරන විවිධ site templates වලින් ඔවුන්ට තෝරා ගැනීමට හැකි වනු ඇත. තෝරා ගත හැකි site template ප්‍රමාණය සීමා කිරීමට ඔබට විකල්පයක් තිබේ. මෙය එක් එක් නිෂ්පාදනය සඳහා විවිධ set එකක් site templates ලෙස තබා ගැනීමට ඉඩ සලසයි, එය වැඩි මිලකට අලෙවි කරන නිෂ්පාදනවල වෙනස් කාර්යයන් සහ විශේෂාංග ඉස්මතු කිරීමට ඉතා සුදුසු වේ.

**Product Edit** පිටුවට යන්න. **Product Options** කොටස යටතේ, **Site template** ටැබ් එක සොයාගෙන 드롭-다운 ක්ෂේත්‍රයෙන් **Choose Available Site Template** විකල්පය තෝරන්න. මෙය ඔබට තිබිය හැකි සයිට් 템플릿 ලැයිස්තුව පෙන්වනු ඇති අතර ඔබ ලබා ගැනීමට කැමති සයිට් 템플릿 තෝරා ගැනීමට එය ඉඩ සලසයි. ඔබට මෙය කළ හැක්කේ එහි හැසිරීම (Behavior) ලෙස **Available** තෝරා ගැනීමෙන් නම්, ඔබ එම සයිට් 템플릿 ලැයිස්තුවේ ඇතුළත් කිරීමට කැමති නම්. _ඔබට අවශ්‍ය නොවන_ නම් එය **Not Available** ලෙස තෝරන්න. සහ ඔබට ලැයිස්තුගත කර ඇති සයිට් 템플릿වලින් එකක් පෙරනිමියෙන් (default) තෝරා ගැනීමට අවශ්‍ය නම් **Pre-selected** තෝරන්න.

![Choose available site templates with behavior options](/img/config/product-site-templates.png)

### පෙරනිමිය: Checkout form හි සයිට් 템플릿 තේරීම {#default-mode-site-template-selection-on-the-checkout-form}

ඔබට ඔබේ සියලුම සයිට් 템플릿 ලියාපදිංචි කිරීමේදී ලබා ගත හැකි වන පරිදි තිබීමට අවශ්‍ය නම්, නැතිනම් ඔබ නිර්මාණය කරන සෑම නිෂ්පාදනයක් යටතේද සයිට් 템플릿 වෙන් කිරීමට හෝ සඳහන් කිරීමට අමතර වැඩ කිරීමට කැමති නොවේ නම්, ඔබට **Checkout Form** යටතේ සයිට් 템플릿 තේරීම සරලව සැකසිය හැකිය. මෙය කිරීමට, **Ultimate Multisite > Checkout Forms** වෙත ගොස් ඔබ වින්‍යාස කිරීමට අවශ්‍ය පෝරමය යටතේ **Edit** ක්ලික් කරන්න.

මෙය ඔබට **Edit Checkout Form** පිටුව පෙන්වනු ඇත. **Template Selection** ක්ෂේත්‍රය සොයාගෙන එහි යටතේ **Edit** ක්ලික් කරන්න.

මොඩල් කවුළුවක් දිස්වේ. **Template Sites** ක්ෂේත්‍රය යටතේ, ලියාපදිංචි කිරීමේදී ලබා ගැනීමට ඔබ කැමති සියලුම සයිට් 템플릿 තෝරාගෙන ලැයිස්තුගත කළ හැකිය. මෙයින් ඔබ සඳහන් කරන සයිට් 템플릿 මොන නිෂ්පාදනයක් තෝරා ගත්තද එය ලබා ගත හැක.

![Template selection field in the checkout form editor](/img/config/checkout-form-template-step.png)

ප්‍රධාන පිටුවේ (frontend), පාරිභෝගිකයින්ට Checkout අතරතුර 템플릿 තේරීම දැකගත හැකි අතර ඔවුන්ගේ නව වෙබ් අඩවිය සඳහා ආරම්භක නිර්මාණය තෝරා ගත හැකිය.

![ලියාපදිංචි කිරීමේදී ඉදිරිපෙළ සැකිලි තෝරන්නා](/img/config/frontend-template-chooser.png)

### වෙබ් අඩවි සැකිලි විකල්ප (Site Template Options) {#site-template-options}

Ultimate Multisite සැකසුම් යටතේ ඔබට ක්‍රියාත්මක කිරීමට හෝ ක්‍රියා විරහිත කිරීමට ඇති වෙනත් වෙබ් අඩවි සැකිලි ක්‍රියාකාරකම් තිබෙනවා.

![Ultimate Multisite සැකසුම් වල වෙබ් අඩවි සැකිලි විකල්ප](/img/config/settings-sites-templates-section.png)

#### සැකිලි මාරු කිරීම අවසර දීම (Allow Template Switching) {#allow-template-switching}

මෙම විකල්පය ක්‍රියාත්මක කිරීමෙන්, ගිණුම සහ වෙබ් අඩවිය නිර්මාණය කිරීමෙන් පසු, ලියාපදිංචි කිරීමේ ක්‍රියාවලියේදී ඔබේ පාරිභෝගිකයින්ට තෝරාගත් සැකිල්ල වෙනස් කිරීමට ඉඩ සැලසේ. මෙය පාරිභෝගිකයාගේ දෘෂ්ටිකෝණයෙන් ප්‍රයෝජනවත් වන දෙයක් වන්නේ, ඔවුන්ට පසුකාලීනව තම මුල් තේරීම ඔවුන්ගේ විශේෂිත අවශ්‍යතා සඳහා හොඳම එක නොවන බව දැනගතහොත් නැවත සැකිල්ලක් තෝරා ගැනීමට මෙය ඉඩ සලසන බැවිනි.

#### පරිශීලකයින්ට තම වෙබ් අඩවිය සැකිලි ලෙස භාවිතා කිරීමට අවසර දීම (Allow Users to use their Site as templates) {#allow-users-to-use-their-site-as-templates}

උප වෙබ් අඩවි පරිශීලකයන් ඔවුන්ගේම වෙබ් අඩවිය ගොඩනැගීමට සහ නිර්මාණය කිරීමට කාලය ගත කළ නිසා, ඔබේ ජාලයේ තවත් උප වෙබ් අඩවියක් නිර්මාණය කිරීමේදී ලබා ගත හැකි වෙබ් අඩවි සැකිලිවලින් එකක් ලෙස එය පිටපත් කර භාවිතා කිරීමට ඔවුන්ට අවශ්‍ය විය හැකියි. මෙම විකල්පය මගින් ඔවුන්ට එය සාක්ෂාත් කර ගැනීමට ඉඩ සලසයි.

#### සැකිලි ද්විත්ව කිරීමේදී මාධ්‍ය පිටපත් කිරීම (Copy Media on Template Duplication) {#copy-media-on-template-duplication}

මෙම විකල්පය තෝරා ගැනීමෙන්, සැකිලි වෙබ් අඩවියේ උඩුගත කරන ලද මාධ්‍ය නව වෙබ් අඩවියට පිටපත් කරනු ලැබේ. මෙය සෑම සැලැස්මක් සඳහාම අතිරේක ලෙස වෙනස් කළ හැකිය.

#### **සෙවුම් යන්ත්‍රවලින් වෙබ් අඩවි සැකිලි දර්ශක කිරීම වැළැක්වීම (Prevent Search Engines from indexing Site Templates)** {#prevent-search-engines-from-indexing-site-templates}

මෙම ලිපියේ සාකච්ඡා කරන ලද වෙබ් අඩවි සැකිලි boilerplate (ප්‍රධාන සැකිල්ල) වුවද, ඒවා තවමත් ඔබේ ජාලයේ කොටසක් වන අතර එය සෙවුම් යන්ත්‍රවලට සොයා ගැනීමට තිබිය හැකිය. මෙම විකල්පය මගින් සෙවුම් යන්ත්‍රවලට ඒවා දර්ශක කිරීමට ඉඩ නොදී වෙබ් අඩවි සැකිලි සැඟවීමට ඔබට අවස්ථාව ලැබේ.

## ස්වයංක්‍රීය සෙවීම සහ ආදේශ කිරීම සමඟ වෙබ් අඩවි සැකිලි පෙර-පිරවීම (Pre-populating Site Templates with auto search-and-replace) {#pre-populating-site-templates-with-auto-search-and-replace}

Ultimate Multisite වල ඉතාම බලවත් විශේෂාංගයක් තමයි ලියාපදිංචි කිරීමේ පෝරමය (registration form) මත ඕනෑම පෙළක්, වර්ණයක් සහ තෝරාගත හැකි ක්ෂේත්‍ර (fields) එකතු කිරීමට ඇති හැකියාව. අපට එම දත්ත ලබාගත් පසු, එය තෝරාගත් වෙබ් අඩවි සැකිල්ලේ (site template) ඇතැම් කොටස්වල අන්තර්ගතය පූර්ව පුරවා ගැනීමට (pre-populate) අපට එය භාවිතා කළ හැකියි. ඉන්පසු නව වෙබ් අඩවිය ප්‍රකාශයට පත් කරන විට, Ultimate Multisite විසින් ලියාපදිංචිය අතරතුර ඇතුළත් කරන ලද සැබෑ තොරතුරු භාවිතයෙන් එම placeholders වෙනුවට දත්ත ආදේශ කරනු ඇත.

උදාහරණයක් ලෙස, ඔබ ලියාපදිංචි කිරීමේදී ඔබේ අවසාන පරිශීලකයාගේ සමාගම් නාමය ලබාගෙන එය ස්වයංක්‍රීයව ප්‍රධාන පිටුවේ (home page) සමාගම් නාමය ලෙස තැබීමට කැමති නම්. ඔබේ සැකිලි වෙබ් අඩවි ප්‍රධාන පිටුවෙහි, පහත රූපයේ මෙන් placeholders එකතු කළ යුතුය (placeholders ද්විත්ව වරලින් වරහන් තුළ - {{placeholder_name}} වටේ තිබිය යුතුය).

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

ඉන්පසු, එම දත්ත ලබා ගැනීමට ඔබේ චෙක්අවුට් පෝරමයෙහි (checkout form) අනුරූප ලියාපදිංචි කිරීමේ ක්ෂේත්‍රයක් එකතු කරගත හැකියි. සැකිලි තෝරා ගැනීම සඳහා භාවිතා කරන එම චෙක්අවුට් පෝරම සංස්කාරකය (editor) මගින් ඔබට සැකිල්ල තෝරා ගැනීමේදී ඇති ආකාරයට අමතර ක්ෂේත්‍ර (custom fields) තැබිය හැකියි:

![Template selection and registration fields in the checkout form editor](/img/config/checkout-form-template-step.png)

ඔබේ පාරිභෝගිකයාට ලියාපදිංචි කිරීමේදී එම ක්ෂේත්‍රය පුරවා ගත හැකියි.

![Frontend checkout form with template chooser](/img/config/frontend-template-chooser.png)

ඉන්පසු Ultimate Multisite විසින් පාරිභෝගිකයා විසින් සපයන දත්ත භාවිතයෙන් placeholders වෙනුවට දත්ත ස්වයංක්‍රීයව ආදේශ කරනු ඇත.

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### "placeholder වලින් පිරුණු සැකිල්ල" ගැටලුව විසඳීම {#solving-the-template-full-of-placeholders-problem}

මේ සියල්ල විශිෂ්ටයි, නමුත් අපට පිළිකුල් සහගත ප්‍රශ්නයක් ඇතිවේ: දැන් අපගේ වෙබ් අඩවි සැකිලි - අපගේ පාරිභෝගිකයින්ට පිවිසිය හැකි ඒවා - තවමත් බොහෝ දේ නොකියන ලස්සන placeholders වලින් පිරී තිබෙනවා.

ඒක විසඳගන්න අපි ප්ලේස්හෝල්ඩර් වලට අතපසු වටිනා අගයන් (fake values) සැකසීමේ විකල්පයක් ලබා දෙනවා, ඒ වගේම ඔබේ පාරිභෝගිකයින් වෙබ් අඩවි බලන අතරතුර එම අන්තර්ගතයන් සොයා වෙනස් කිරීමට අපි ඒවා භාවිතා කරනවා.

ඔබට template placeholders editor එකට ප්‍රවේශ විය හැකි වන්නේ **Ultimate Multisite > Settings > Sites** වෙත ගොස්, sidebar එකේ ඇති **Edit Placeholders** link එක ක්ලික් කිරීමෙන් ය.

![Site template settings under the Sites settings page](/img/config/settings-sites-templates-section.png)

එය ඔබව placeholders වල අන්තර්ගත සංස්කරණ (content editor) වෙත ගෙන යනු ඇත, එහිදී ඔබට placeholders සහ ඒවාට අදාළ අන්තර්ගතයන් එකතු කළ හැකියි.

![Template placeholders content editor entry point](/img/config/settings-sites-templates-section.png)
