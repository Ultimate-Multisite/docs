---
title: Ultimate Multisite ଇନଷ୍ଟଲ୍ କରିବା
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Ultimate Multisite ইনস্টল করা

:::note
এই টিউটোরিয়ালটি ধরে নিচ্ছে যে আপনার ইতিমধ্যেই WordPress Multisite ইনস্টল এবং কনফিগার করা আছে। এটি কিভাবে করতে শিখতে, WP Beginner এর [এই টিউটোরিয়ালটি](https://www.wpbeginner.com/glossary/multisite/) দেখুন।
:::

## প্লাগইন ইনস্টল করা

Ultimate Multisite বিনামূল্যে [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/) এ পাওয়া যায়।

আপনার **Network Admin Dashboard** থেকে, যান **Plugins → Add New Plugin** এ।

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

**"Ultimate Multisite"** লিখে সার্চ করুন (সঠিক মিলের জন্য উদ্ধৃতি চিহ্ন ব্যবহার করুন), এবং এটি প্রথম ফলাফল হিসাবে দেখা যাবে। **Install Now** এ ক্লিক করুন।

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

ইনস্টল করার পরে, আপনার পুরো নেটওয়ার্কে প্লাগইনটি সক্রিয় করতে **Network Activate** এ ক্লিক করুন।

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

সক্রিয় করার পরে, আপনি স্বয়ংক্রিয়ভাবে সেটআপ উইজার্ডে রিডাইরেক্ট হবেন।

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## সেটআপ উইজার্ড

সেটআপ উইজার্ড আপনাকে প্রায় ১০ মিনিটের মধ্যে Ultimate Multisite কনফিগার করতে সাহায্য করবে।

### স্বাগতম (Welcome)

শুরু করার জন্য **Get Started** এ ক্লিক করুন।

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### প্রি-ইনস্টল চেক (Pre-install Checks)

এই ধাপে আপনার সিস্টেমের তথ্য এবং WordPress ইনস্টলেশন পরীক্ষা করা হবে যাতে এটি Ultimate Multisite এর প্রয়োজনীয়তা পূরণ করে কিনা তা নিশ্চিত করা যায়। সবকিছু ঠিক থাকলে, **Go to the Next Step** এ ক্লিক করুন।

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note નેટવર્ક એક્ટિવેટ બટન (v2.6.1+)
જો Ultimate Multisite ઇન્સ્ટોલ હોય પણ **નેટવર્ક-એક્ટિવેટ ન થયું હોય** — ઉદાહરણ તરીકે, જો તમે નેટવર્ક પ્લગઇન્સ સ્ક્રીનમાંથી **Activate** (સિંગલ-સાઇટ) પર ક્લિક કર્યું હોય તેના બદલે **Network Activate** પર ક્લિક કર્યું હોય — તો Pre-install Checks સ્ટેપ આને શોધી કાઢશે અને તમને **Network Activate** બટન દેખાડશે.

**Network Activate** પર ક્લિક કરવાથી પ્લગઇન તમારા સમગ્ર મલ્ટીસાઇટ નેટવર્ક પર આપમેળે સક્રિય થઈ જશે. એકવાર સક્રિય થયા પછી, વિઝાર્ડ સામાન્ય રીતે ઇન્સ્ટોલેશન સ્ટેપ તરફ આગળ વધે છે. એક્ટિવેશન સ્થિતિ સુધારવા માટે તમારે વિઝાર્ડ છોડવાની જરૂર નથી.
:::

### ઇન્સ્ટોલેશન

ઇન્સ્ટોલર જરૂરી ડેટાબેઝ ટેબલ્સ બનાવશે અને Ultimate Multisite ને કાર્ય કરવા માટે `sunrise.php` ફાઇલ ઇન્સ્ટોલ કરશે. આગળ વધવા માટે **Install** પર ક્લિક કરો.

![Installation step showing database tables and sunrise.php](/img/installation/wizard-installation.png)

### તમારો કંપની

તમારી કંપનીની માહિતી ભરો અને તમારી ડિફોલ્ટ કરન્સી સેટ કરો. આ માહિતી તમારા WaaS પ્લેટફોર્મ દરમિયાન ઉપયોગમાં લેવાશે. કામ પૂરું થયા પછી **Continue** પર ક્લિક કરો.

![Your Company configuration step](/img/installation/wizard-your-company.png)

### ડિફોલ્ટ કન્ટેન્ટ

આ સ્ટેપ તમને પ્રીડિફાઇન્ડ ટેમ્પલેટ્સ, પ્રોડક્ટ્સ અને અન્ય સ્ટાર્ટર કન્ટેન્ટ ઇન્સ્ટોલ કરવાની મંજૂરી આપે છે. Ultimate Multisite ની સુવિધાઓથી પરિચિત થવાનો આ એક સરસ રસ્તો છે. ડિફોલ્ટ કન્ટેન્ટ ઉમેરવા માટે **Install** પર ક્લિક કરો, અથવા જો તમે શરૂઆતથી કરવું પસંદ કરશો તો આ સ્ટેપ છોડી દો.

![Default content installation step](/img/installation/wizard-default-content.png)

### ભલામણ કરેલ પ્લગઇન્સ

વૈકલ્પિક રીતે ભલામણ કરેલ સહાયક પ્લગઇન્સ ઇન્સ્ટોલ કરો. તેમને ઉમેરવા માટે **Install** પર ક્લિક કરો અથવા ચાલુ રાખવા માટે છોડી દો.

![Recommended plugins step](/img/installation/wizard-recommended-plugins.png)

### તૈયાર!

ସେଇଟା ହିଁ ସବୁ! ଆପଣଙ୍କର Ultimate Multisite ଇନଷ୍ଟଲେସନ୍ ସମାପ୍ତ ହୋଇଗଲା। ଆପଣ ବର୍ତ୍ତମାନ **Network Admin Dashboard** ରୁ ଆପଣଙ୍କ ୱେବସାଇଟ୍ କୁ 'As a Service' ପ୍ଲାଟଫର୍ମ୍ ଭାବରେ ନିର୍ମିତି କରିବା ଆରମ୍ଭ କରିପାରିବେ।

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

ଆପଣ ମଜା କରିବାକୁ ଚାହିଁଲେ ଆରମ୍ଭ କରନ୍ତୁ!
