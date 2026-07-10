---
title: 'بۆژمێر ٨: گەیشتنەوەی کڕیارەکان'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# سبق ٨: سەرپەرۆشکردنی کڕیارەکان {#lesson-8-customer-onboarding}

هاتوانین کڕیاریەک بۆ تۆمارکردن دابین کردوونی تەنها یارمەتییەکی پاره. ئەگەر ئەو دەتوانێت خۆی بانگ بکات، هەست بە زۆر و خەمۆشی دەکات و هەرگیز بیرت نێتەوە، ئەوا لەدەست دەدەیت. ئەم وانەیە ئەزموونەکە دیزاین دەکات کە نوێبوونەت بۆ کڕیارێکی چالاک و سەرنجڕاکێش دەگۆڕێت.

## لە کوێدا لەوێ بوومە {#where-we-left-off}

FitSite بە تەواوی براندکردنراوە و ڕێڕەشی پۆلسی (checkout flow) کاردەکات. ئێستا بیرمان دەکەین چی ڕوودەدات دوای ئەوەی خاوەن ستۆدیۆیەکی فیتنس تۆمار دەکات و بۆ یەکەم جار لەسەر سایتەکەی دەچێت.

## بۆچی سەرپەرۆشکردن گرنگە {#why-onboarding-matters}

٣٠ خولەک لە دوای تۆمارکردن دیار دەکات کە کڕیارەکە دەمێنێتەوە یان لەدەست دەدات. خاوەن ستۆدیۆیەکی فیتنس کە:

- بانگ دەکات و سایتێک دەبینێت کە پێشتر وەک وێبگەی فیتنس دەربکەوێت → دەمێنێتەوە
- بە وردی دەزانێت چی دوای ئەوە بکات → دەمێنێتەوە
- لە ناو داش보ارێکی گشتی ی WordPress هەست بە گم کردن دەکات → دەچێت

دەرمەچەکانی تایبەت بە تۆ (وانەی وانەی ٤) کار دەکەن لەسەر یەکەم خاڵەکە. ئەم وانەیە لەسەر دووەم کار دەکات.

## ئەزموونی یەکەم بانگکردنەوە {#the-first-login-experience}

### وێجتەری داش보ار بۆ بەخێربانکردن (Welcome Dashboard Widget) {#welcome-dashboard-widget}

یەکەیەک وێجتەری تایبەت بە داش보ار دروست بکە کە کڕیارانی نوێ بەخێربکە و ڕێنمایی پێدات لەسەر سیستەمەکە. ئەمە دەبێت بە ڕوونی دەردەکەوێت کاتێک یەکەم جار بانگ دەکاتەوە.

**FitSite Quick Start:**

١. **ناوی ستۆدیۆت و لوگوتەکەت زیاد بکە** -- لینک بۆ دیزاینەر (Customizer) یان تنظیمەکانی ناسنامەی سایت
٢. **سێدۆری پۆلسیی خۆت به‌روزرسیک بکە** -- لینک ڕاستەوخۆ بۆ دەستکاری編輯ی لاپەڕەی Classes
٣. **م trainers (م کارمەندەکانت) زیاد بکە** -- لینک بۆ دەستکاری編輯ی لاپەڕەی Trainers
٤. **داتای پەیوەندییەکانت دیاری بکە** -- لینک بۆ دەستکاری編輯ی لاپەڕەی Contact
٥. **سایتەکەت پێشنیار بکە (Preview)** -- لینک بۆ فرۆنت end

شیاساندن داشبورد

کاربران نوخۆش پێویستیان نییە هەموو ئەو دەقە لە مینیوی وۆرسپرید ببینن. ئەم خاڵانە بیر بکەرەوە:

- پۆلێنکردنی ئەو دەقە کە پەیوەندی بە بەڕێوەبردنی سایت فیتنس (fitness) نییە (بۆ نموونە، کامێنتەکان ئەگەر بەکاری نەهێنرێت).
- گۆڕینی ڕیزبەندی مینیو بۆ ئەوەی گرنگترین دەقەکان لە سەرەوە بێت.
- زیادکردنی ناوی تایبەت بە مینیو کە بۆ ئەو ناوچەیە باش بن (بۆ نموونە، "استۆدیۆت" لەبری "دەرکەوتن").

ئامادەکردنی [Plugin & Theme Manager](/addons/plugin-and-theme-manager) یارمەتیت دەدات کێشەی ئەوەی کارمەندەکان چی ببینن بە کۆنتڕۆڵ بکەیت.

سێکوتی ئیمەیڵی بەخێربێی

یەک ئیمەیڵ بۆ بەخێربێی تەنها پێویست نییە. سێکوتی ئیمەیلی ڕێک بخەرەوە کە کارمەندەکان لە هەفتەی یەکەمدا ڕێنمایی بکات:

سێپەڕە ١: بەخێربێی (هەموو دوای تۆمارکردن)

- بابەت: "بەخێربێن بۆ FitSite -- سایتۆدیۆت دەستکردە"
- ناوەڕۆک: لینک بۆ لاگۆین، هەنگاوە سەرەتاییەکان، لینک بۆ سەرچاوەکانی یارمەتی
- توندی: خۆشحاڵی، هاندان، تایبەت بە فیتنس

سێپەڕە ٢: سەرکەوتنە خێراکان (ڕۆژی ١)

- بابەت: "٣ شتێک کە دەتوانیت لە FitSiteدا بکەیت"
- ناوەڕۆک: لوگۆی خۆت زیاد بکە، وێنەی سەرەکی پەڕەکە به‌روزرسیک بکە، پلانی داواکاری کلاسەکانت زیاد بکە
- وێنەکانی شاشە (screenshots) بگونجێن کە ڕوون دەکەنەوە بە وردی لە کوێ دەبێت clique بکەیت

سێپەڕە ٣: بۆ خۆت بکەرەوە (ڕۆژی ٣)

- بابەت: "سایتی فیتنسەکەت جیاواز بکە"
- ناوەڕۆک: ڕەنگەکان بگۆڕ، وێنەی کارلێکن زیاد بکە، چیرۆستگۆی استۆدیۆت بنووسە
- لینک بۆ نموونەکانی سایت فیتنسێکی باش لەسەر ئەم پلاتفۆرمدا

سێپەڕە ٤: دەستکردن (ڕۆژی ٧)

- Subject: "Prêt à partager votre FitSite avec le monde ?"
- Content: Liste de contrôle de ce qu'il faut vérifier avant de partager, comment connecter un domaine personnalisé (si vous êtes sur Growth/Pro), conseils pour le partage sur les réseaux sociaux

:::tip Automatisation par e-mail
Utilisez des [Webhooks](/user-guide/integrations/webhooks) ou [Zapier](/user-guide/integrations/zapier) pour déclencher ces e-mails via votre plateforme de marketing par e-mail. Cela vous donne plus de contrôle sur le moment et vous permet de suivre l'engagement.
:::

## Ressources d'aide {#simplify-the-dashboard}

Créez du contenu d'aide spécifique à une niche qui répond aux questions réelles des propriétaires de studios de fitness :

### Articles de la base de connaissances (Knowledge Base) {#welcome-email-sequence}

- "Comment mettre à jour votre horaire de cours"
- "Ajouter et modifier les profils des entraîneurs"
- "Changer le logo et les couleurs de votre studio"
- "Connecter votre propre nom de domaine" (pour les clients Growth/Pro)
- "Ajouter un widget de réservation à votre site"

Rédigez ces articles pour les utilisateurs non techniques. Utilisez des captures d'écran. Évitez le jargon WordPress.

### Tutoriels vidéo {#email-1-welcome-immediately-after-signup}

Enregistrements d'écran courts (2-3 minutes) montrant :

- La première connexion et l'orientation
- Modifier la page d'accueil
- Mettre à jour l'horaire de cours
- Ajouter un nouvel entraîneur

Ces vidéos n'ont pas besoin d'être des productions léchées. Ce qui compte, c'est que ce soit clair, utile et spécifique à votre niche.

## La page Compte (Account Page) {#email-2-quick-wins-day-1}

Ultimate Multisite inclut une [Page Compte](/user-guide/client-management/account-page) destinée aux clients où ils gèrent leur abonnement. Personnalisez celle-ci pour :

- نیشان پلانەکە ببینە
- پڕۆژەی آپگرتن لەگەڵ سوودەکانی تایبەت بە فیتنس نمایش بکە
- مێژووی بڕین و دابەزاندنی فاکچورەکان و دۆڵێنانی فاکچورەکان پێشکەش بکە
- لینک بۆ سەرچاوەکانی یارمەتی بدات

## پێواندن سەرکەوتنی دەستپێکردن (Onboarding Success) {#email-3-make-it-yours-day-3}

ئەم ئاماژانە بەدوای چاودێرییان بگرە بۆ ئەوەی بزانین کە دەستپێکردنتان کار دەکات یان نا.

- **نرخی چالاکبوون (Activation rate)**: کێ لە ڕێکخستنەکانی سەرەوە بە شێوەیەکی تایبەت لە ماوەی هەفتەی یەکەمدا دەگۆڕێت؟
- **دخولکردنی هەفتەی یەکەم**: چەند جارە کڕیارێکی نوێ لە ماوەی یەکەم دەکەوێتە ژوورەوە (login)؟
- **تیکەتەکانی پشتیوانی لە کڕیارە نوێکان**: کۆی زۆر ئاماژەیە بۆ ئەوەی دەستپێکردنتان بە شێوەیەکی باش نییە و پاشکۆشەیەک پێویستە.
- **گواستنەوە لە تریال بۆ پارەدان (Trial-to-paid conversion)**: ئەگەر تریال دەدات، چۆن ڕێژەیەکی دیاریکراو دەکات بە پارەدان؟

## تۆڕی FitSite تا ئێستا چی دروست کردووە {#email-4-go-live-day-7}

```
تۆڕی FitSite
├── WordPress Multisite (شێوازی subdomain)
├── Ultimate Multisite (دابەشبوو و پڕ لە براندینگ)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (تایبەتمەندیی تایبەت بە ناوچەکە، تاقیکراوە)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding
│   ├── Quick Start dashboard widget
│   ├── Simplified dashboard for fitness site management
│   ├── 4-email welcome sequence
│   ├── Niche-specific knowledge base
│   ├── Video walkthroughs
│   └── Customized account page
└── Ready for pricing strategy (داواکاریی پڕۆژە دوای ئەم وانەیە)
```

## چی دروست کردین لەم وانەیەدا {#help-resources}

- **تجربە سەرەتایی بانگەواکراو بۆ یەکەم بانکی** لەگەڵ وێجێتی Quick Start
- **داشبۆردێکی سادەتر** کە تەنها کارەکانی بەڕێوەبردنی سایت فیتنسەکە دیاری دەکات
- **سێکوتی ئیمەیلی بەخێربان** کە کڕیارەکان دەهێنێتە سەر هەفتەی یەکەمشان
- **سەرچاوە یارمەتیدەرەکانی تایبەت بە ناوچەکە** کە بۆ خاوەن کارگە فیتنسە ناتەکنەلۆجیك نراوەتەوە
- **مەرجە پێشکەشکردنی (Onboarding metrics)** بۆ چاودێریکردن و باشترکردنی ئەزموونی

---

**دۆخی پاشەکەوت:** [بۆچوونی ٩: نرخدان بۆ بەدەستهێنانی پڕۆفایت](lesson-9-pricing) -- ئێمە استراتیژی نرخدانەکە دەپێچینەوە بۆ ئەوەی بڕی پارەی زیاتر بکەین و کەمترین لە لەدەستکردنی کڕیار (churn) گرتین.
