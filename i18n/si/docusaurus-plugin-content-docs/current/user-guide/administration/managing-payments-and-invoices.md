---
title: ගෙවීම් සහ බිල්පත් කළමනාකරණය කිරීම
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# ගෙවීම් සහ ඉන්වොයිසි කළමනාකරණය කිරීම {#managing-payments-and-invoices}

## ගෙවීම් සැකසුම් {#payment-settings}

ගෙවීම් ලැබීමට පටන් ගැනීමට පෙර, ඔබට ගෙවීම් සම්බන්ධ සැකසුම් සකස් කිරීමට අවශ්‍ය වනු ඇත. **Ultimate Multisite → Settings** වෙත ගොස් **Payment** ටැබයට ක්ලික් කරන්න.

![Payment settings tab](/img/admin/settings-payments-top.png)

ගෙවීම් සැකසුම් පිටුවේ සම්පූර්ණ දර්ශනය මෙන්න:

![Payment settings full page](/img/admin/settings-payments-full.png)

### සාමාන්‍ය ගෙවීම් විකල්ප (General Payment Options) {#general-payment-options}

සාමාන්‍ය සැකසුම් වලදී ඔබට පහත දේ සකස් කළ හැකිය:

- **Currency** — ගනුදෙනු සඳහා භාවිතා කරන පෙරනිමි මුදල් ඒකකය.
- **Currency Position** — මුදල් සංකේතය (currency symbol) කොහේද පෙන්වන්නේ (මුදලට පෙර/පසු).

![Payment gateway settings](/img/admin/settings-payments-options.png)

### ගෙවීම් ගේට්වේ (Payment Gateways) {#payment-gateways}

Ultimate Multisite එකට බහු ගෙවීම් ගේට්වේ (payment gateways) සඳහා සහාය වේ. ඔබට Payment settings ටැබයෙන් ඒවා සක්‍රීය කර වින්‍යාස කළ හැකිය.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

ලබා ගත හැකි ගේට්වේ අතර:

- **Stripe** — Stripe හරහා ක්‍රෙඩිට් කාඩ් ගෙවීම්.
- **PayPal** — PayPal ගෙවීම්.
- **Manual** — නොබැඳි (offline) හෝ අභිරුචි ගෙවීම් සැකසුම් සඳහා.

සෑම ගේට්වේකටම API keys සහ වෙනත් සැකසුම් ඇතුළත් කරන riêng configuration කොටසක් ඇත.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Sandbox Mode (සැන්ඩ්බොක් මාදිලිය) {#sandbox-mode}

ඔබට සජීවී භාවිතයට යාමට පෙර ඔබේ ගෙවීම් ඒකාබද්ධ කිරීම පරීක්ෂා කිරීමට **Sandbox Mode** සක්‍රීය කළ හැකිය. සැන්ඩ්බොක් මාදිලිය ක්‍රියාත්මක වන විට, කිසිදු සැබෑ ගාස්තුවක් අය නොකරනු ලැබේ.

## ගෙවීම් බැලීම (Viewing Payments) {#viewing-payments}

ඔබේ ජාලය පුරා ඇති සියලුම ගනුදෙනු බැලීමට Ultimate Multisite යටතේ **Payments** පිටුව වෙත යන්න.

![Payments list](/img/admin/payments-list.png)

ඔබට තත්ත්වය අනුව (සම්පූර්ණ වූ, බලා සිටින, අසාර්ථක වූ, ආපසු ගෙවන ලද) ගෙවීම් පෙරහන් කිරීමට සහ නිශ්චිත ගනුදෙනු සෙවීමට හැකිය.

भुगतानတစ်ခုపై క్లిక్ చేయడం ద్వారా దాని పూర్తి వివరాలు చూడవచ్చు, ఇందులో లైన్ ఐటెమ్‌లు (line items), అనుబంధ సభ్యత్వం (associated membership), కస్టమర్ సమాచారం మరియు పేమెంట్ గేట్‌వే డేటా ఉంటాయి.

## ఇన్వాయిసెస్ (Invoices) {#invoices}

Ultimate Multisite లో మీరు చేసిన చెల్లింపుల కోసం ఆటోమేటిక్‌గా ఇన్వాయిసెస్ జనరేట్ చేయవచ్చు. మీరు పేమెంట్ సెట్టింగ్‌ల నుండి ఇన్వాయిస్ టెంప్లేట్‌ను మరియు నంబరింగ్ ఫార్మాట్‌ను కస్టమైజ్ చేసుకోవచ్చు.

ఇన్వాయిస్ కస్టమైజేషన్ ఎంపికలలో ఇవి ఉన్నాయి:

- ఇన్వాయిస్‌లపై ప్రదర్శించాల్సిన **కంపెనీ పేరు మరియు చిరునామా**
- **ఇన్వాయిస్ నంబరింగ్** ఫార్మాట్ మరియు క్రమం
- ఇన్వాయిస్ హెడర్‌లో ప్రదర్శించాల్సిన **లోగో**
- నిబంధనలు, గమనికలు లేదా చట్టపరమైన సమాచారం కోసం **కస్టమ్ ఫుటర్ టెక్స్ట్**

ఇన్వాయిస్ టెంప్లేట్‌ను కస్టమైజ్ చేయడానికి, **Ultimate Multisite → Settings → Payment** కి వెళ్లి ఇన్వాయిస్‌కు సంబంధించిన సెట్టింగ్‌లను చూడండి.
