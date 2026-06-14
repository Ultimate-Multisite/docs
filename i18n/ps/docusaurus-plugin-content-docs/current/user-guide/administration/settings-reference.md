---
title: د تنظیمات مرجع
sidebar_position: 11
_i18n_hash: 0259b88b319090b358483322ad97fc2d
---
# مرجع تنظیمات

این صفحه تنظیماتی را دنبال می‌کند که بر مدیریت روزمره و تغییرات اخیر رفتار در Ultimate Multisite تأثیر می‌گذارند.

## سایر گزینه‌ها

بخش **Other Options** زیر **Ultimate Multisite > Settings > Login & Registration** ظاهر می‌شود.

| Setting | Description |
|---|---|
| **Enable Jumper** | ابزار ناوبری سریع Jumper را در بخش مدیریت نشان می‌دهد. از آن برای پرش مستقیم به صفحات Ultimate Multisite، اشیاء شبکه و مقاصد مدیریتی پشتیبانی شده استفاده کنید. اگر نمی‌خواهید این میانبر قابل مشاهده باشد، آن را غیرفعال کنید. |

## گزارش خطا و تله‌متری (Error reporting and telemetry)

تنظیم قبلی مربوط به انتخاب برای گزارش خطا از صفحه تنظیمات حذف شده است. تله‌متری ناشناس غیرفعال است و هیچ دکمه‌ای در رابط کاربری برای فعال کردن آن وجود ندارد.

اگر شما کتابخانه‌های عملیاتی داخلی یا اسکرین‌شات‌هایی برای صفحه تنظیمات نگهداری می‌کنید، ارجاعات به فیلد قدیمی انتخاب گزارش خطا را حذف کنید تا مدیران به دنبال تنظیماتی نباشند که دیگر وجود ندارد.

## تنظیمات وارد کردن/صادر کردن (Import/Export settings)

تب **Import/Export** توضیح می‌دهد که کدام تنظیمات آن را کنترل می‌کند و مستقیماً به **Ultimate Multisite > Site Export** برای آرشیوهای سایت و شبکه لینک می‌شود. از تب تنظیمات برای پیکربندی وارد کردن/صادر کردن استفاده کنید، از **Tools > Export & Import** برای گردش کار صادر/وارد کردن تک‌سایتی استفاده کنید، و زمانی که نیاز به آرشیو صادر کامل شبکه دارید از ابزار Site Export استفاده کنید.

## تنظیمات اتصال ارائه‌دهنده هوش مصنوعی (AI provider connector settings)

تنظیمات اتصال ارائه‌دهنده هوش مصنوعی اکنون فقط استخر حساب‌های OAuth پشتیبانی شده را نمایش می‌دهند:

| غوډونکی (Provider) | تنظیم کولو جریان (Setup flow) |
|---|---|
| **Anthropic Max** | د OAuth د ګڼو Anthropic Max حسابونو سره تړلی کړئ او له OAuth د ګڼو داسې صورت کې manuall OAuth fallback کارول چې که sandboxed browser په خودکار ډول redirect نه کولای شي. |
| **OpenAI ChatGPT/Codex** | د ChatGPT حسابونه له همینو OAuth pool workflow سره تړلي کړئ. کله چې اکاونټ تړلی وي، Connector-supported operations کولی شي ChatGPT Codex tool calls کارول. |
| **Google AI Pro** | د Google AI Pro حسابونه له OAuth سره تړلی کړئ، بیا که لیست به तुरुन्तै نه بدله شي، connector refresh وکړئ. |

Cursor Pro تر اوسه لاړ شوی غوډونکی (provider) دی او یې پېچولو داخلي screenshot، runbooks یا onboarding steps چې Cursor Pro setup fields یا connector paths ته اشاره کوي، منوړئ.

کله چې د provider حسابونه اضافه یا حذف کوئ، هغه اکاونټ چې refresh کیږي یا حذف کیږي لپاره یو لاغور ایمیل همایئ او Connector-backed operations تسته test کولو څخه مخکې settings save کړئ.
