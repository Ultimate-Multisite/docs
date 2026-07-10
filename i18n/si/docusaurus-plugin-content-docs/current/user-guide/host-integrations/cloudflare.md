---
title: Cloudflare ඒකාබද්ධ කිරීම
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare සම්බන්ධကူးမှု (Cloudflare Integration) {#cloudflare-integration}

## အကျဉ်းချုပ် (Overview) {#overview}
Cloudflare ဆိုတာ ဝဘ်ဆိုဒ်တွေကို ကာကွယ်ပေးပြီး မြန်ဆန်စေတဲ့ ထိပ်တန်း Content Delivery Network (CDN) နဲ့ လုံခြုံရေး ပံ့ပိုးပေးသူတစ်ခု ဖြစ်ပါတယ်။ ဒီပေါင်းစပ်မှုက Ultimate Multisite နဲ့ Cloudflare တို့ကြားမှာ အလိုအလျောက် ဒိုမেইন စီမံခန့်ခွဲမှုကို လုပ်ဆောင်ပေးပြီး၊ အထူးသဖြင့် subdomain multisite တည်ဆောက်တဲ့အခါမျိုးတွေအတွက် အသုံးဝင်ပါတယ်။

## အင်္ဂါရပ်များ (Features) {#features}
- Cloudflare မှာ subdomain တွေကို အလိုအလျောက် ဖန်တီးပေးခြင်း
- Proxy လုပ်ထားတဲ့ subdomain များ ပံ့ပိုးမှု
- DNS record များကို စီမံခန့်ခွဲနိုင်ခြင်း
- Ultimate Multisite admin ထဲမှာ DNS record တွေကို ပိုမိုကောင်းမွန်စွာ ပြသနိုင်ခြင်း

## လိုအပ်ချက်များ (Requirements) {#requirements}
သင့်ရဲ့ `wp-config.php` ဖိုင်ထဲမှာ အောက်ပါ constant တွေကို သတ်မှတ်ရပါမယ်။

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## စနစ်တကျ တည်ဆောက်နည်းများ (Setup Instructions) {#setup-instructions}

### ၁။ သင့် Cloudflare API Key ကို ရယူပါ {#1-get-your-cloudflare-api-key}

၁။ သင့် Cloudflare dashboard ထဲကို ဝင်ပါ။
၂။ "My Profile" (ညာဘက်အပေါ်ထောင့်က သင့် email ကို နှိပ်ပါ) ကို သွားပါ။
၃။ မီနူးထဲကနေ "API Tokens" ကို ရွေးချယ်ပါ။
၎။ အောက်ပါ ခွင့်ပြုချက်တွေနဲ့ API token အသစ်တစ်ခုကို ဖန်တီးပေးပါ-
   - Zone.Zone: Read (ဖတ်ရန်)
   - Zone.DNS: Edit (ပြင်ရန်)
၅။ သင့်ရဲ့ API token ကို ကူးယူလိုက်ပါ။

### ၂။ သင့် Zone ID ကို ရယူပါ {#2-get-your-zone-id}

၁။ Cloudflare dashboard ထဲမှာ သင်အသုံးပြုလိုတဲ့ domain ကို ရွေးချယ်ပါ။
၂။ Zone ID ကို "Overview" tab မှာ "API" အောက်က ညာဘက် sidebar မှာ မြင်ရပါလိမ့်မယ်။
၃။ Zone ID ကို ကူးယူလိုက်ပါ။

### ၃။ wp-config.php ထဲသို့ Constant များ ထည့်သွင်းပါ {#3-add-constants-to-wp-configphp}

အောက်ပါ constant တွေကို သင့်ရဲ့ `wp-config.php` ဖိုင်ထဲမှာ ထည့်ပေးပါ-

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### ၄။ ပေါင်းစပ်မှုကို အသက်သွင်းပါ (Enable the Integration) {#4-enable-the-integration}

၁။ သင့် WordPress admin ထဲမှာ Ultimate Multisite > Settings ကို သွားပါ။
၂။ "Domain Mapping" tab ကို ရွေးချယ်ပါ။
၃။ "Host Integrations" ကို အောက်ကို စာကြောင်းဆွဲပြီး ဆင်းသွားပါ။
၎။ Cloudflare integration ကို ဖွင့်ပေးလိုက်ပါ။
၅။ "Save Changes" ကို နှိပ်ပါ။

## ဘယ်လို အလုပ်လုပ်သလဲ (How It Works) {#how-it-works}

### Subdomain စီမံခန့်ခွဲမှု (Subdomain Management) {#subdomain-management}

subdomain multisite installation တစ်ခုမှာ site အသစ်တစ်ခု ဖန်တီးတဲ့အခါ...

1. මෙම ඒකාබද්ධ කිරීම මගින් උප-โดเมන් සඳහා CNAME වාර්තාවක් Cloudflare API වෙත යැවීම සිදු කරයි.
2. උප-โดเมනය පෙරනිමඟින් Cloudflare හරහා ප්‍රොක්සි කිරීමට (proxy) සකසා ඇත (මෙය ෆිල්ටර භාවිතයෙන් වෙනස් කළ හැකිය).
3. වෙබ් අඩවියක් මකා දැමූ විට, ඒකාබද්ධ කිරීමෙන් එම උප-โดเมනය Cloudflare වෙතින් ඉවත් කරනු ලැබේ.

### DNS වාර්තා ප්‍රදර්ශනය (DNS Record Display) {#dns-record-display}

මෙම ඒකාබද්ධ කිරීම Ultimate Multisite පරිපාලක පැනලයේ DNS වාර්තා දර්ශනය වැඩිදියුණු කරයි:

1. Cloudflare වෙතින් DNS වාර්තා සෘජුව ලබා ගැනීම
2. වාර්තා ප්‍රොක්සි කර ඇත්ද නැද්ද යන්න පෙන්වීම
3. DNS වාර්තා පිළිබඳ අමතර තොරතුරු දැක්වීම

## Cloudflare කස්ටම් හෝස්ට් නම් (Cloudflare Custom Hostnames) {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (පෙර "Cloudflare for SaaS" ලෙස හැඳින්වූ) යනු ඔබේ පාරිභෝගිකයින්ට SSL සහිතව ඔවුන්ගේම ડોමේන් භාවිතා කිරීමට ඉඩ සලසන Cloudflare විශේෂාංගයකි. Cloudflare භාවිතයෙන් ඇති Multisite ජාල සඳහා ડોමේන් මගින් සම්බන්ධ කරන (domain-mapped) ස්ථාපනයන් සඳහා මෙය නිර්දේශිත ප්‍රවේශය වන්නේ, මන්ද සෑම කස්ටම් ડોමනයක් සඳහාම SSL සහතිකයේ නිකුත් කිරීම සහ අලුත් කිරීම ස්වයංක්‍රීයව Cloudflare විසින් කළමනාකරණය කරනු ලබන බැවිනි.

### සම්මත Cloudflare ඒකාබද්ධ කිරීමෙන් එය වෙනස් වන්නේ කෙසේද {#how-it-differs-from-the-standard-cloudflare-integration}

| | සම්මත ඒකාබද්ධ කිරීම (Standard integration) | Cloudflare Custom Hostnames |
|---|---|---|
| **අරමුණ** | උප-โดเมන් සඳහා DNS වාර්තා ස්වයංක්‍රීයව නිර්මාණය කිරීම | Cloudflare කළමනාකරණය කරන SSL සහිත කස්ටම් (සම්බන්ධිත) ડોමේන් වලට ඉඩ දීම |
| **ප්‍රශස්ත කරන්නේ** | උප-โดเมන් Multisite සඳහා | Domain-mapped Multisite සඳහා |
| **SSL** | වෙන වෙනම කළමනාකරණය කිරීම | Cloudflare මගින් ස්වයංක්‍රීයව කළමනාකරණය කරයි |

### Cloudflare Custom Hostnames සැකසීම {#setting-up-cloudflare-custom-hostnames}

ඔබේ ප්‍රධාන ડોමේන් සඳහා වන සෝන් එක (zone) Cloudflare දාශබෝඩ් එකේ විවෘත කරන්න.
**SSL/TLS > Custom Hostnames** වෙත යන්න.
ඔබේ සර්වරයේ IP හෝ නාමය (hostname) වෙත යොමු කරන fallback origin එකක් එක් කරන්න.
Ultimate Multisite හි මගින් සිතියම් කළ සෑම පාරිභෝගික ડોමെയ്කටම Cloudflare හි Custom Hostname ඇතුළත් කිරීමක් එක් කරන්න. Cloudflare API භාවිතා කරමින් මෙම පියවර ස්වයංක්‍රීය කිරීමට ඔබට හැකිය.
පාරිභෝගිකයාගේ DNS ඔබගේ ජාලයට යොමු වූ වහාම, Cloudflare විසින් සෑම custom hostname එකකටම TLS සහතිකපත් (certificates) ස්වයංක්‍රීයව නිකුත් කර අලුත් කරයි.

සම්පූර්ණ API විස්තර සඳහා [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/) බලන්න.

:::note යෙදුම යාවත්කාලීන කිරීම
Ultimate Multisite v2.6.1 සිට, මෙම විශේෂාංගය ප්ලග්ඉන් සැකසුම් සහ ලේබල සියල්ලේදී **Cloudflare Custom Hostnames** ලෙස හැඳින්වේ. පෙර සංස්කරණවල "Cloudflare for SaaS" යන නම භාවිතා වූ අතර එය මූලික Cloudflare නිෂ්පාදන නාමයයි.
:::

## වැදගත් සටහන් {#important-notes}

Cloudflare හි මෑත යාවත්කාලීන කිරීම් වලට අනුව, සියලු පාරිභෝගිකයින් සඳහා wildcard proxying දැන් ලබා ගත හැකිය. මෙයින් අදහස් කරන්නේ, Cloudflare DNS එක් කිරීම සාමාන්‍යයෙන් උප-โดเมන් බහු සite ස්ථාපනයක් සඳහා පෙර තිබූ තරමට වැදගත් නොවන බවයි, මන්ද ඔබට Cloudflare හි wildcard DNS වාර්තාවක් සරලව සැකසිය හැකිය.

## ගැටළු නිරාකරණය (Troubleshooting) {#troubleshooting}

### API සම්බන්ධතා ගැටලු {#api-connection-issues}
- ඔබේ API token නිවැරදිද සහ අවශ්‍ය අවසරයන් තිබේදැයි තහවුරු කරන්න.
- ඔබේ Zone ID නිවැරදි දැයි පරීක්ෂා කරන්න.
- ඔබේ Cloudflare ගිණුමට අවශ්‍ය අවසරයන් තිබේදැයි තහවුරු කරන්න.

### උප-โดเมන් එකක් එක් කර නොමැත {#subdomain-not-added}
- Ultimate Multisite ලොග් (logs) වල ඇති දෝෂ පණිවිඩ (error messages) පරීක්ෂා කරන්න.
- උප-โดเมන් එක දැනටමත් Cloudflare හි එක් කර නොමැති බව තහවුරු කරන්න.
- ඔබ නිර්මාණය කරන DNS වාර්තා ගණන ඔබේ Cloudflare සැලැස්ම විසින් සහාය දෙන බව තහවුරු කරන්න.

### ප්‍රොක්සි කිරීමේ ගැටළු {#proxying-issues}

- ඔබ サබඩොමේන්ස් (subdomains) ප්‍රොක්සි කිරීමට අවශ්‍ය නැතිනම්, ඔබට `wu_cloudflare_should_proxy` ෆිල්ටරය භාවිතා කළ හැකිය.
- සමහර විශේෂාංග ප්‍රොක්සි කරන විට නිවැරදිව ක්‍රියා නොකිරීමට ඉඩ ඇත (උදාහරණයක් ලෙස, WordPress හි සමහර පරිපාලන ක්‍රියාකාරකම්).
- පරිපාලන පිටු සඳහා Cache වක්‍ර කිරීමට Cloudflare හි Page Rules භාවිතා කිරීම ගැන සලකා බලන්න.
