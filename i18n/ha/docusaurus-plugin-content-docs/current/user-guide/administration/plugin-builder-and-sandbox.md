---
title: Gudanar da Plugin & Sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# سازنده و آزمایشگاه افزونه‌ها (Plugin Builder & Sandbox) {#plugin-builder--sandbox}

Gratis AI Agent v1.5.0-yi **سازنده و آزمایشگاه سیستم (Plugin Builder & Sandbox System)** darjara, wanda ke AI assistant zai iya ƙirƙira, ya kuma sarrafa WordPress plugins a kan gida ɗinka — kullum ta hanyar wani muhalli na tsaro da aka sanya (sandbox environment).

## Nazarin Jigon (Overview) {#overview}

Plugin Builder yana ba AI assistant damar rubuta custom WordPress plugins a matsayin amsa ga tambayoyin yau da kullum. Plugins da aka ƙirƙira za a tabbatar da su, a kan wurin ajiya, sannan a kuma sarrafa su a cikin wani layer na sandbox kafin su shiga aiki a wurin gida (live site functionality).

Amfani da shi ga:

- Kafa plugins masu sauƙi don amfani ba tare da shawarwar kai na developer ba.
- Bincike (prototyping) ƙarin ayyuka waɗanda ke buƙatar WordPress hooks ko custom post types.
- Gano ƙaramin tsarin sarrafa ayyuka (automation scripts) don aiki da yawa (batch operations).

## Kafa Plugin ta hanyar AI {#generating-a-plugin-via-ai}

Don ƙirƙirar plugin, buɗe wajen tattaunawar Gratis AI Agent kuma ka bayyana abin da kake so. Misali:

> "Ka ƙirƙira plugin wanda ke ƙara wani bayanin admin (admin notice) a dashboard."

AI zai yi wa kai:

1. Samar da code na PHP na plugin ta amfani da tsarin samarwa na code (structured code generation).
2. Tabbatar da bayanan don rashin kuskuren syntax da kuma ƙa’idoji masu haɗari.
3. Ajiye plugin da aka ƙirƙira a cikin wuri na sandbox (sandbox store).
4. Aiko bayani tare da slug na plugin da kuma babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban babban b

/activate-plugin <plugin-slug>
```

یک پیام وضعیت تأیید می‌کند که آیا فعال‌سازی موفقیت‌آمیز بوده یا خیر. در صورت شکست، گزارش خطا در رشته چت نمایش داده می‌شود.

## مدیریت افزونه‌های تولید شده

افزونه‌های تولید شده در **Gratis AI Agent → Plugin Builder → Manage Plugins** لیست می‌شوند. از این صفحه شما می‌توانید کارهای زیر را انجام دهید:

| Action | Description |
|---|---|
| **View source** | کد کامل PHP افزونه را بررسی کنید. |
| **Re-activate in sandbox** | بررسی فعال‌سازی ساندباکس را دوباره اجرا کنید. |
| **Install on network** | افزونه را روی شبکه زنده (live network) مستقر کنید (نیاز به تأیید دستی دارد). |
| **Update** | نسخه جدید را از طریق هوش مصنوعی ارائه دهید و کد موجود را جایگزین کنید. |
| **Delete** | افزونه را از فروشگاه ساندباکس حذف کنید. ابتدا آن را از تمام سایت‌ها غیرفعال می‌کند. |

:::warning
**Install on network** افزونه تولید شده را روی وردپرس چندسایتی زنده شما مستقر می‌کند. قبل از ادامه، کد افزونه را بررسی کنید. Gratis AI Agent قبل از تکمیل نصب زنده، درخواست تأیید خواهد کرد.
:::

## نصب یک افزونه تولید شده روی شبکه

وقتی از یک افزونه ساندباکس راضی بودید، می‌توانید آن را روی شبکه زنده نصب کنید:

۱. به **Gratis AI Agent → Plugin Builder → Manage Plugins** بروید.
۲. روی **Install on Network** کنار افزونه‌ای که می‌خواهید مستقر کنید کلیک کنید.
۳. پنجره گفتگو را تأیید کنید. افزونه در مسیر `wp-content/plugins/` نصب شده و برای شبکه فعال می‌شود.

به روش دیگر، از دستور اسلش (slash command) در رابط چت استفاده کنید:

```
/install-plugin <plugin-slug>
```

## به‌روزرسانی افزونه‌ها

برای به‌روزرسانی یک افزونه تولید شده، تغییر مورد نظر را در یک مکالمه جدید به دستیار هوش مصنوعی شرح دهید:

> "افزونه dashboard-notice را طوری به‌روز کن که فقط اعلان‌ها را برای مدیران نشان دهد."

هوش مصنوعی یک نسخه جدید تولید می‌کند که در کنار نسخه فعلی در ساندباکس ظاهر می‌شود. شما تفاوت (diff) را بررسی کرده و قبل از اعمال به‌روزرسانی، تأیید می‌کنید.

## Shigar HookScanner

Plugin Builder yana amfani da **HookScanner** mai haɗi don bincike hooks da filters da kowane plugin da aka samar. Bayan aiki na HookScanner zai nuna a cikin amsa cikin magana kuma yana nuna:

- Action hooks da aka yi lissafi (`add_action` calls).
- Filter hooks da aka yi lissafi (`add_filter` calls).
- Duk wani hook da aka samu a cikin shigarwa (yana bincika direktori `vendor/` da `node_modules/`).

Wannan yana taimaka maka ka fahimci yadda plugin ke aiki kafin ka sake shi.

## Ka'idojin Tsaro

- Plugins da aka samar suna ajiye shi a wuri daban daga plugins da kake shigarwa kai, kuma ba za su iya samun su ta hanyar bayanan sarrafa plugins na WordPress (WordPress plugin management screen) har sai ka yi shigarwa kai a kan yanar gizo.
- Sandbox yana amfani da tabbatar da hanyar da aka rubuta don hana tafiya tsakanin direktori (directory traversal) lokacin rubutawar fayilolin plugin.
- Plugins masu amfani da ayyukan da ke haɗi masu haɗari (misali, `eval`, `exec`, `system`) suna bayyana a lokacin tabbatar da hanyar da aka yi kuma ba za su sake shi.
