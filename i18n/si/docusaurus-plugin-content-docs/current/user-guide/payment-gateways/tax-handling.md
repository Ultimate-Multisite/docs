---
title: බදු කළමනාකරණය
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# බදු හැසිරවීම

Ultimate Multisite තුළ අපගේ මූලික plugin එකටම ඇතුළත් බදු එකතු කිරීමේ මොඩියුලයක් ඇත. එබැවින් ඔබගේ සැලසුම්, පැකේජ සහ සේවා සඳහා විකුණුම් බදු එකතු කළ යුතු නම්, කිසිදු add-on ස්ථාපනය කිරීමකින් තොරව එය පහසුවෙන් කළ හැක.

යුරෝපයේ පිහිටි සමාගම් සඳහා, **VAT සඳහා සහාය** අනුකූලතාව වඩා හොඳින් සහාය දීමට මෙවලම් සහ විශේෂාංග එක් කරන **add-on** එකක් අපි ලබා දෙමු.

Ultimate Multisite ඔබ වෙනුවෙන් රජයට බදු ගොනු කිරීම හෝ ගෙවීම සිදු නොකරයි; අපි හුදෙක් ගනුදෙනුව සිදුවන අවස්ථාවේ සුදුසු බදු එකතු කිරීමට ඔබට උදවු කරමු. **ඔබට තවමත් බදු ඔබම ගෙවිය යුතුය.**

## බදු එකතු කිරීම සක්‍රීය කිරීම {#enabling-tax-collection}

බදු එකතු කිරීම පෙරනිමියෙන් සක්‍රීය කර නැත. එය සක්‍රීය කිරීමට, ඔබ **Ultimate Multisite > Settings > Taxes** වෙත ගොස් Enable Taxes සැකසුම සක්‍රීය කිරීමට toggle කළ යුතුය.

![බදු සැකසුම් පිටුවේ ඉහළින් ඇති Enable Taxes toggle එක](/img/config/settings-taxes-enable.png)

බදු සැකසුම් පිටුවේ සම්පූර්ණ දසුන මෙන්න:

![බදු සැකසුම් සම්පූර්ණ පිටුව](/img/config/settings-taxes-full.png)

තනි නිෂ්පාදන සඳහා බදු සැකසුම්ද ඔබට බැලිය හැක:

![නිෂ්පාදන සඳහා බදු සැකසුම්](/img/config/settings-taxes.png)

### බදු බැහැර vs. බදු ඇතුළත් {#tax-excluded-vs-tax-included}

පෙරනිමියෙන්, ඔබගේ සියලු නිෂ්පාදන මිලවල බදු බැහැර කර ඇත. එනම් නිෂ්පාදනයේ මිලට බදු **ඇතුළත් නොවේ**. කිසියම් මිලදී ගැනීමක් සඳහා පාරිභෝගිකයෙකු බදු ගෙවිය යුතු බව අපි තීරණය කළහොත්, උප එකතුවට **ඉහළින්** බදු එකතු කරමු.

ඔබේ නිෂ්පාදන මිලට බදු ඇතුළත් කරගැනීමට ඔබ කැමති නම්, **Inclusive Tax** සැකසුම සක්‍රීය කිරීමෙන් එය කළ හැක.

![Enable Taxes සැකසුමට පහළින් ඇති Inclusive Tax toggle පේළිය](/img/config/settings-taxes-inclusive.png)

ඔබ කළ වෙනස්කම් **සුරැකීමට** අමතක නොකරන්න.

###

## බදු අනුපාත සෑදීම {#creating-tax-rates}

Tax Collection සක්‍රීය කළ පසු, අපගේ බදු අනුපාත සංස්කාරකය භාවිතයෙන් නිශ්චිත ස්ථාන සඳහා බදු අනුපාත සෑදිය යුතුය.

බදු සැකසුම් පිටුවේ පැති තීරුවේ ඇති **Manage Tax Rates** බොත්තම ක්ලික් කිරීමෙන් ඔබට සංස්කාරකයට පිවිසිය හැක.

![සැකසුම් පිටුවේ Tax Rates පැනලයේ ඇති Manage Tax Rates සබැඳිය](/img/config/settings-taxes-manage-rates.png)

බදු අනුපාත සංස්කාරක පිටුවේ, **Add new Row** බොත්තම ක්ලික් කිරීමෙන් නව බදු අනුපාත එක් කළ හැක.

![ඉහළින් Add new Row බොත්තම ඇති බදු අනුපාත සංස්කාරක වගුව](/img/config/tax-rates-editor.png)

ඔබට සෑම බදු අනුපාතයකටම **මාතෘකාවක්** (ඉන්වොයිසිවල භාවිතා වේ) ලබා දිය යුතුය. ඉන්පසු මෙම බද්ද අය කරනු ලබන **රට** (අවශ්‍ය), **ප්‍රාන්තය,** සහ **නගරය** (දෙකම විකල්ප) තෝරා ගත හැක. අවසානයේ, **ප්‍රතිශතවලින් බදු අනුපාතය** එක් කරන්න.

### බදු කාණ්ඩ {#tax-categories}

විවිධ වර්ගයේ නිෂ්පාදන සඳහා විවිධ බදු අනුපාත එක් කිරීමට, ඔබට බදු කාණ්ඩ කිහිපයක්ද සෑදිය හැක.

**Add new Tax Category** කිරීමට ක්ලික් කර, ඔබගේ කාණ්ඩයේ නම ලියා **Create** ඔබන්න.

![බදු අනුපාත සංස්කාරකයේ ඉහළින් ඇති Add new Tax Category බොත්තම](/img/config/tax-categories-add.png)

![කාණ්ඩය සෑදීමේ modal එකේ Tax Category Name ආදාන ක්ෂේත්‍රය](/img/config/tax-categories-create-modal.png)

කාණ්ඩ අතර සැරිසැරීමට, **Switch** ක්ලික් කර නව බදු එක් කිරීමට අවශ්‍ය කාණ්ඩය තෝරන්න.

![බදු කාණ්ඩ අතර මාරු වීමට Switch dropdown බොත්තම](/img/config/tax-categories-switch.png)

![ලබා ගත හැකි කාණ්ඩ පෙන්වන බදු කාණ්ඩ තේරීම් dropdown එක](/img/config/tax-categories-select.png)

විශේෂිත නිෂ්පාදනයක් සඳහා බදු කාණ්ඩය සැකසීමට **Product edit page** වෙත ගොස්, ඉන්පසු Taxes tab වෙත යන්න.

![බදු කාණ්ඩය සහ taxable toggle එක සහිත නිෂ්පාදන බදු tab එක](/img/config/product-taxes.png)

එම තිරයේම, එම නිෂ්පාදනය සඳහා බදු එකතු නොකළ යුතු බව Ultimate Multisite වෙත දැනුම් දීමට **Is Taxable?** toggle එක අක්‍රීය කළ හැක.

## යුරෝපීය VAT සහාය {#european-vat-support}

මීට පෙර සඳහන් කළ පරිදි, යුරෝපීය VAT නියාමන හේතුවෙන් අතිරේක අවශ්‍යතා ඇති EU තුළ සිටින පාරිභෝගිකයන් සඳහා add-on එකක් අප සතුව ඇත.

අපගේ VAT මෙවලම් වැදගත් කරුණු කිහිපයකට උදවු කරයි:

  * EU VAT අනුපාත පහසුවෙන් පූරණය කිරීම;

  * VAT අංක එකතු කිරීම සහ වලංගු කිරීම - සහ VAT නිදහස් ආයතන සඳහා ප්‍රතිලෝම අය කිරීම (වලංගු VAT අංක ඇති සමාගම් වැනි);

එම add-on එක ස්ථාපනය කිරීමට, **Ultimate Multisite > Settings** වෙත ගොස්, ඉන්පසු පැති තීරුවේ ඇති **Check our Add-ons** සබැඳිය ක්ලික් කරන්න.

![Check our Add-ons සබැඳිය සහිත Settings පිටුවේ පැති තීරුව](/img/config/settings-taxes-addons-link.png)

ඔබ අපගේ add-ons පිටුවට යොමු කරනු ලැබේ. එහිදී, **Ultimate Multisite VAT add-on** සෙවිය හැකි අතර එය ස්ථාපනය කළ හැක.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

ඉන්පසු, **Network Admin > Plugins** වෙත ගොස් එම add-on එක ජාලය පුරා සක්‍රීය කරන්න.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

ඔබ නැවත **Tax Settings tab** වෙත ගියහොත්, නව විකල්ප ලබා ගත හැකි බව පෙනේ. නව VAT මෙවලම් සක්‍රීය කිරීමට **Enable VAT Support** විකල්පය toggle කරන්න. ඔබගේ සැකසුම් **සුරැකීමට** අමතක නොකරන්න!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### VAT බදු අනුපාත ලබා ගැනීම {#pulling-on-vat-tax-rates}

අපගේ ඒකාබද්ධ කිරීම එක් කරන මෙවලම්වලින් එකක් වන්නේ EU සාමාජික රාජ්‍ය සඳහා බදු අනුපාත පූරණය කිරීමේ හැකියාවයි. EU VAT සහාය සක්‍රීය කළ පසු බදු අනුපාත සංස්කාරක පිටුවට පිවිසීමෙන් එය කළ හැක.

පිටුවේ පතුලේ VAT ලබා ගැනීමේ විකල්ප ඔබට පෙනේ. අනුපාත වර්ගයක් තෝරා **Update EU VAT Rates** බොත්තම ක්ලික් කළ විට, සෑම EU සාමාජික රාජ්‍යයකටම අදාළ බදු අනුපාත සමඟ වගුව ලබාගෙන ස්වයංක්‍රීයව පුරවනු ඇත. ඉන්පසු, ඔබට එය සුරැකීම පමණක් අවශ්‍ය වේ.

![බදු අනුපාත සංස්කාරකයේ පතුලේ ඇති Update EU VAT Rates බොත්තම](/img/config/tax-rates-vat-pull.png)

ලබාගත් පසු අගයන් සංස්කරණය කිරීමටද ඔබට හැක. එසේ කිරීමට, ඔබට අවශ්‍ය වගු පේළිය සරලව සංස්කරණය කර නව අගයන් සුරැකීමට ක්ලික් කරන්න.

### VAT වලංගු කිරීම {#vat-validation}

VAT සහාය සක්‍රීය කළ විට, Ultimate Multisite checkout පෝරමයට, බිල් කිරීමේ ලිපින ක්ෂේත්‍රයට පහළින් අතිරේක ක්ෂේත්‍රයක් එක් කරනු ඇත. එම ක්ෂේත්‍රය EU තුළ සිටින පාරිභෝගිකයන් සඳහා පමණක් පෙන්වනු ඇත.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

ඉන්පසු Ultimate Multisite VAT අංකය වලංගු කරයි. එය වලංගු බවට තහවුරු වුවහොත්, ප්‍රතිවර්ත ආරෝපණ ක්‍රමය යෙදෙන අතර එම ඇණවුමේ බදු අනුපාතය 0% ලෙස සකසයි.
