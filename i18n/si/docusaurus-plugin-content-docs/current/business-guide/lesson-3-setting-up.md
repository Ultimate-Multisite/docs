---
title: 'පාඩම 3: ඔබේ ජාලය පිහිටුවීම'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# පාඩම 3: ඔබේ ජාලය සකසීම {#lesson-3-setting-up-your-network}

දැන් ගොඩනඟන වේලාවයි. මෙම පාඩමේදී ඔබ Ultimate Multisite ස්ථාපනය කර FitSite ජාලයේ පදනම වින්‍යාස කරනු ඇත. මෙහි සෑම තීරණයක්ම fitness niche එක සිහි තබාගෙන ගනු ලැබේ.

## අපි නතර වූ තැන {#where-we-left-off}

අපේ niche ලෙස fitness studios තෝරාගෙන අවස්ථාව තහවුරු කළෙමු. දැන් එම අදහස ක්‍රියාත්මක වේදිකාවක් බවට පත් කරමු.

## ඔබේ Hosting තෝරාගැනීම {#choosing-your-hosting}

තනි වෙබ් අඩවියකට වඩා niche වේදිකාවකට ඔබේ hosting තේරීම වැඩි වැදගත්කමක් දරයි. ඔබ host කරන්නේ එක් site එකක් නොවේ -- sites දස ගණනක් හෝ සිය ගණනක් දක්වා වර්ධනය වන ජාලයකි.

### සොයා බැලිය යුතු දේ {#what-to-look-for}

- **WordPress Multisite සහාය**: සියලුම hosts multisite හොඳින් හසුරුවන්නේ නැත
- **Wildcard SSL**: subdomain මත පදනම් වූ ජාල සඳහා අත්‍යවශ්‍යයි
- **වර්ධනය කළ හැකි සම්පත්**: migration නොකර වර්ධනය වීමට ඉඩ අවශ්‍යයි
- **Ultimate Multisite ඒකාබද්ධ කිරීම**: ස්වයංක්‍රීය domain mapping සහ SSL මඟින් සැලකිය යුතු මෙහෙයුම් උත්සාහයක් ඉතිරි වේ

### නිර්දේශිත ක්‍රමය {#recommended-approach}

[අනුකූල සැපයුම්කරුවන්](/user-guide/host-integrations/closte) ලැයිස්තුවෙන් host එකක් තෝරන්න. මේවා Ultimate Multisite සමඟ පරීක්ෂා කර ඇති අතර domain mapping සහ SSL automation සඳහා ඔබට අවශ්‍ය ඒකාබද්ධ කිරීම් සපයයි.

FitSite සඳහා, අපි subdomain වින්‍යාසයක් භාවිතා කරමු. එයින් අදහස් වන්නේ පාරිභෝගික sites තමන්ගේම domain එකක් map කිරීම විකල්ප ලෙස සිදු කිරීමට පෙර ආරම්භයේදී `studioname.fitsite.com` ලෙස පෙනෙන බවයි.

## WordPress Multisite ස්ථාපනය කිරීම {#installing-wordpress-multisite}

ඔබට දැනටමත් WordPress Multisite ස්ථාපනයක් නොමැති නම්:

1. ඔබේ hosting provider මත WordPress ස්ථාපනය කරන්න
2. [WordPress Multisite ස්ථාපනය කරන්නේ කෙසේද](/user-guide/getting-started/how-to-install-wordpress-multisite) මාර්ගෝපදේශය අනුගමනය කරන්න
3. ඉල්ලූ විට **subdomain** වින්‍යාසය තෝරන්න

:::tip Subdomains ඇයි?
Subdomains මඟින් එක් එක් පාරිභෝගික site එකට path එකක් (`fitsite.com/studio`) වෙනුවට තමන්ගේම වෙනම ලිපිනයක් (`studio.fitsite.com`) ලැබේ. මෙය ඔබේ පාරිභෝගිකයන් සඳහා වඩා වෘත්තීයමය වන අතර permalink ගැටුම් වළක්වයි. විස්තරාත්මක සංසන්දනයක් සඳහා [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) බලන්න.
:::

## Ultimate Multisite ස්ථාපනය කිරීම {#installing-ultimate-multisite}

මෙයට [Ultimate Multisite ස්ථාපනය කිරීම](/user-guide/getting-started/installing-ultimate-multisite) මාර්ගෝපදේශය අනුගමනය කරන්න:

1. plugin එක network-wide upload කර activate කරන්න
2. [සැකසුම් විශාරදය](/user-guide/getting-started/multisite-setup-wizard) ක්‍රියාත්මක කරන්න

සැකසුම් විශාරදය අතරතුර, FitSite niche එක සිහි තබාගන්න:

- **මුදල් ඒකකය**: ඔබේ fitness studio පාරිභෝගිකයන් භාවිතා කරන මුදල් ඒකකයට සකසන්න
- **සමාගම් නාමය**: "FitSite" (හෝ ඔබ තෝරාගත් brand නාමය)
- **සමාගම් ලාංඡනය**: ඔබේ brand logo එක upload කරන්න -- මෙය invoices සහ emails මත පෙනේ

## Fitness Niche සඳහා වින්‍යාස කිරීම {#configuring-for-the-fitness-niche}

Ultimate Multisite ස්ථාපනය කළ පසු, මෙම niche-විශේෂිත වින්‍යාස තේරීම් කරන්න:

### සාමාන්‍ය සැකසුම් {#general-settings}

**Ultimate Multisite > සැකසුම්** වෙත ගොස් වින්‍යාස කරන්න:

- **Site නාමය**: FitSite
- **පෙරනිමි භූමිකාව**: Administrator -- fitness studio හිමිකරුවන්ට තම site content සම්පූර්ණයෙන් පාලනය කිරීමට අවශ්‍යයි
- **ලියාපදිංචිය**: studio හිමිකරුවන්ට තමන්ම sign up විය හැකි ලෙස user registration සක්‍රීය කරන්න

### Email වින්‍යාසය {#email-configuration}

ඔබේ system emails ඔබේ niche එකේ භාෂාවෙන් කතා කළ යුතුය. **Ultimate Multisite > සැකසුම් > Emails** වෙත ගොස් අභිරුචිකරණය කරන්න:

- සාමාන්‍ය "your new site" වාක්‍ය fitness-විශේෂිත පණිවිඩවලින් ප්‍රතිස්ථාපනය කරන්න
- උදාහරණ welcome subject: "ඔබේ fitness studio වෙබ් අඩවිය සූදානම්"
- උදාහරණ welcome body: ඔවුන්ගේ studio, classes, සහ ඔවුන්ගේ fitness site සමඟ ආරම්භ කිරීම සඳහන් කරන්න

පාඩම 8 (පාරිභෝගික ආරම්භක මඟපෙන්වීම) තුළ අපි මේවා තවදුරටත් සකස් කරමු. නමුත් දැන්ම tone එක සකසීමෙන් ආරම්භක test signups පවා niche-විශේෂිත ලෙස දැනේ.

### Domain වින්‍යාසය {#domain-configuration}

අනුකූල hosting provider එකක් භාවිතා කරන්නේ නම්, domain mapping දැන් වින්‍යාස කරන්න:

1. **Ultimate Multisite > සැකසුම් > Domain Mapping** වෙත යන්න
2. ඔබේ නිශ්චිත host සඳහා integration guide එක අනුගමනය කරන්න
3. නව subsites සඳහා SSL ස්වයංක්‍රීයව ලැබෙන බව test කරන්න

මෙය අපි ඊළඟ පාඩමේදී templates සහ test sites නිර්මාණය කිරීම ආරම්භ කරන විට, සියල්ල මුල සිට අවසානය දක්වා ක්‍රියා කරන බව සහතික කරයි.

## මෙතෙක් FitSite ජාලය {#the-fitsite-network-so-far}

මෙම පාඩම අවසානයේ, ඔබට ඇති දේ මෙන්න:

```
FitSite ජාලය
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (ස්ථාපනය කර වින්‍යාස කර ඇත)
├── wildcard SSL සහිත Hosting
├── Domain mapping වින්‍යාස කර ඇත
├── Niche-විශේෂිත email templates (ආරම්භක)
└── site templates සඳහා සූදානම් (ඊළඟ පාඩම)
```

## මෙම පාඩමේදී අපි ගොඩනඟിയത് {#what-we-built-this-lesson}

- subdomain mode තුළ **ක්‍රියාත්මක WordPress Multisite** ස්ථාපනයක්
- FitSite branding සමඟ **Ultimate Multisite ස්ථාපනය කර** වින්‍යාස කර ඇත
- වර්ධනය වන ජාලයක් සඳහා **Hosting සහ SSL** සකසා ඇත
- ඔබේ hosting provider සඳහා **Domain mapping** වින්‍යාස කර ඇත
- පළමු දිනයේ සිටම **Niche-විශේෂිත email tone** එකක් ස්ථාපිත කර ඇත

---

**ඊළඟ:** [පාඩම 4: Niche Templates ගොඩනැඟීම](lesson-4-templates) -- අපි fitness studio හිමිකරුවන් සැබවින්ම භාවිතා කිරීමට කැමති site templates නිර්මාණය කරමු.
