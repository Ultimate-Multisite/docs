---
title: බදු හැසිරවීම
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# බදු හැසිරවීම (Tax Handling)

Ultimate Multisite වල අපේ ප්‍රධාන ප්ලගින් එක ඇතුළේ බදු අය කිරීමේ මොඩියුලයක් තිබෙනවා. ඒ නිසා, ඔබේ සැලසුම්, පැකේජ සහ සේවාවන් සඳහා විකුණුම් බදු අය කිරීමට අවශ්‍ය නම්, කිසිදු add-on එකක් ස්ථාපනය නොකර පහසුවෙන් එය කළ හැකියි.

යුරෝපයේ පිහිටා ඇති සමාගම් සඳහා, VAT (Value Added Tax) අනුකූලතාව වඩා හොඳින් සහාය දීමට මෙවලම් සහ විශේෂාංග එක් කරන **add-on** එකක් අපි ලබා දෙන්නෙමු.

Ultimate Multisite විසින් ඔබේ වෙනුවෙන් රජයට බදු ගොනු නොකරයි හෝ භාර නොකරයි; giao dịch සිදු වන අවස්ථාවේදී නිසි බදු අය කිරීමට අපි ඔබට උදව් කරන්නේ පමණයි. **ඔබ තවමත් බදු ගෙවිය යුතුය.**

## බදු අය කිරීම සක්‍රීය කිරීම (Enabling Tax Collection)

බදු අය කිරීම පෙරනිමියෙන් ක්‍රියාත්මක නොවේ. එය සක්‍රීය කිරීමට, ඔබ **Ultimate Multisite > Settings > Taxes** වෙත ගොස් Enable Taxes සැකකය ක්‍රියාත්මක කළ යුතුය.

![Tax settings toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

බදු සැකසුම් පිටුවේ සම්පූර්ණ දර්ශනය මෙන්න:

![Tax settings full page](/img/config/settings-taxes-full.png)

ඔබට තනි නිෂ්පාදන සඳහා බදු සැකසුම් ද බැලිය හැකිය:

![Tax settings for products](/img/config/settings-taxes.png)

### බදු ඇතුළත් කිරීම සහ බදු බැහැර කිරීම (Tax excluded vs. Tax included)

පෙරනිමියෙන්, ඔබේ සියලු නිෂ්පාදන මිල ගණන් බදු බැහැර කර ඇත, එනම් එම නිෂ්පාදනයේ මිලට බදු **ඇතුළත් නොවේ**. යම් ගනුදෙනුවක් සඳහා පාරිභෝගිකයා බදු ගෙවිය යුතු බව අපි තීරණය කළහොත්, අපි උප-මුළු මුදලට (subtotal) බදු **ඉහළින්** එකතු කරන්නෙමු.

ඔබට ඔබේ නිෂ්පාදන මිලට බදු ඇතුළත් කිරීමට කැමති නම්, ඔබට **Inclusive Tax** සැකකය ක්‍රියාත්මක කිරීමෙන් එය කළ හැකියි.

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

ඔබ සිදු කළ වෙනස්කම් **සAVE** කිරීමට අමතක නොකරන්න.

###

## බදු අනුපාත නිර්මාණය කිරීම (Creating Tax Rates)

Tax Collection සක්‍රීය කිරීමෙන් පසු, අපගේ tax rates editor එක භාවිතා කර නිශ්චිත ස්ථාන සඳහා බදු අනුපාත නිර්මාණය කළ යුතුය.

ඔබට Tax settings පිටුවේ ඇති sidebar එකේ **Manage Tax Rates** බොත්තම ක්ලික් කිරීමෙන් editor එකට ප්‍රවේශ විය හැකියි.

![Tax Rates panel එකේ Manage Tax Rates link image](/img/config/settings-taxes-manage-rates.png)

tax rates editor පිටුවේ, **Add new Row** බොත්තම ක්ලික් කිරීමෙන් ඔබට අලුත් Tax Rates එකතු කළ හැකියි.

![Add new Row බොත්තම සහිත tax rates editor table එකේ රූපය](/img/config/tax-rates-editor.png)

සෑම tax rate එකකටම **title** (ඉන්වොයිසි වල භාවිතා කරන) ලබා දිය යුතුයි. ඉන්පසු, මෙම බදු අය කරනු ලබන **country** (අවශ්‍ය), **state**, සහ **city** (දෙකම විකල්ප) තෝරා ගත හැකියි. අවසාන වශයෙන්, **tax rate in percents** එක එක් කළ යුතුය.

### Tax Categories

විවිධ නිෂ්පාදන සඳහා විවිධ බදු අනුපාත එකතු කිරීමට ඔබට බදු කාණ්ඩ (Tax Categories) කිහිපයක් නිර්මාණය කළ හැකියි.

**Add new Tax Category** ක්ලික් කර, ඔබේ කාණ්ඩයේ නම ලියා **Create** ඔබන්න.

![tax rates editor හි Add new Tax Category බොත්තම](/img/config/tax-categories-add.png)

![create category modal එකේ Tax Category Name input field එකේ රූපය](/img/config/tax-categories-create-modal.png)

කාණ්ඩ හරහා බැලීමට, **Switch** ක්ලික් කර ඔබට අලුත් බදු එකතු කිරීමට අවශ්‍ය කාණ්ඩය තෝරන්න.

![Tax categories අතර වෙනස් වීමට Switch dropdown බොත්තමේ රූපය](/img/config/tax-categories-switch.png)

![Available categories පෙන්වන Tax category selector dropdown එකේ රූපය](/img/config/tax-categories-select.png)

නිශ්චිත නිෂ්පාදනයකට tax category එක සැකසීමට, **Product edit page** එකට ගොස් ඉන්පසු Taxes tab එකට යන්න.

![Tax category සහ taxable toggle සහිත Product taxes tab එකේ රූපය](/img/config/product-taxes.png)

එම තිරයේදී, Ultimate Multisite එකට එම නිෂ්පාදනය මත බදු අය නොකළ යුතු බව දැනුම් දීමට **Is Taxable?** toggle එක අක්‍රිය කළ හැකියි.

## European VAT Support

මීට පෙර සඳහන් කළ පරිදි, යුරෝපීය වටවන බදු නීති නිසා අමතර අවශ්‍යතා ඇති පාරිභෝගිකයින් සඳහා අප සතුව එක් add-on එකක් තිබෙනවා.

අපේ VAT මෙවලම් මේ වැදගත් දේවල් කිහිපයකට උදව් කරනවා:

* EU VAT අනුපාත පහසුවෙන් පැටවීම;
* VAT අංක රැස් කිරීම සහ වලංගු කිරීම - සහ VAT නිදහස් ආයතන සඳහා ප්‍රතිලෝම ආරෝපණය (උදාහරණයක් ලෙස, වලංගු VAT අංක සහිත සමාගම්).

ඒ add-on එක ස්ථාපනය කිරීමට, **Ultimate Multisite > Settings** වෙත ගොස් ඉන්පසු **Check our Add-ons** පැති මෙනුවේ ඇති සබැඳිය ක්ලික් කරන්න.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

ඔබ අපගේ add-on පිටුවට යොමු වනු ඇත. එහිදී, ඔබට **Ultimate Multisite VAT add-on** සොයා එය ස්ථාපනය කළ හැකියි.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

ඉන්පසු, **Network Admin > Plugins** වෙත ගොස් එම add-on එක සම්පූර්ණ ජාලය පුරා සක්‍රිය කරන්න.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

ඔබ **Tax Settings tab** වෙත ආපසු ගිය විට, නව විකල්ප පෙනෙනු ඇත. නව VAT මෙවලම් සක්‍රීය කිරීමට **Enable VAT Support** විකල්පය ක්‍රියාත්මක කරන්න (Toggle කරන්න). ඔබේ සැකසුම් **save** කිරීමට අමතක නොකරන්න!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### VAT බදු අනුපාත ඇදීම

අපේ integration එකෙන් එක් කරන මෙවලම් වලින් එකක් නම් EU සාමාජික රාජ්‍ය සඳහා බදු අනුපාත පැටවීමේ හැකියාවයි. මෙය EU VAT support සක්‍රිය කිරීමෙන් පසු tax rates editor පිටුව වෙත ගොස් කළ හැකියි.

පිටුවේ පහළින් ඔබට VAT ඇදීමේ (VAT pulling) විකල්පයන් දැකගත හැකියි. ඔබ අනුපාත වර්ගයක් තෝරාගෙන **Update EU VAT Rates** බොත්තම ක්ලික් කළ විට, එක් එක් EU සාමාජික රාජ්‍ය සඳහා වන බදු අනුපාත සහිත වගුව ස්වයංක්‍රීයව පිරී යනු ඇත. ඉන්පසු ඔබට එය සුරැකීමට (save) පමණක් අවශ්‍ය වේ.

![Update EU VAT Rates button at the bottom of the tax rates editor](/img/config/tax-rates-vat-pull.png)

ඔබට ඒවා ඇදීමෙන් පසු අගයන් සංස්කරණය කළ හැකියි. එය කිරීමට, ඔබට අවශ්‍ය වගුවේ පේළිය සරලව සංස්කරණය කර නව අගයන් සුරැකීමට ක්ලික් කරන්න.

### VAT වල වලංගු කිරීම (VAT Validation)

VAT සහාය ක්‍රියාත්මක වූ විට, Ultimate Multisite විසින් ගෙවීම් ලිපිනය පහළින් checkout form එකට අමතර ක්ෂේත්‍රයක් එක් කරනු ඇත. මෙම ක්ෂේත්‍රය EU හි පිහිටි පාරිභෝගිකයින් සඳහා පමණක් දිස්වනු ඇත.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

ඉන්පසු Ultimate Multisite VAT අංකය වලංගු කරනු ලබන අතර එය වලංගු එකක් ලෙස ආපසු ලැබුණහොත්, ප්‍රතිලෝම ආරෝපණ යාන්ත්‍රණය (reverse charge mechanism) යෙදෙන අතර එම ඇණවුමට බදු අනුපාතය 0% ලෙස සකසනු ලැබේ.
