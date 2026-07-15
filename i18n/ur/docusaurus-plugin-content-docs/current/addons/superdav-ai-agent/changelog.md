---
title: تبدیلیوں کی فہرست
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# تبدیلیوں کی فہرست

## 1.18.0 — 2026-06-29 کو جاری کیا گیا {#1180--released-on-2026-06-29}

### نیا {#new}

- **Google Calendar ٹولز** — شیڈول سے آگاہ خودکاریوں کے لیے ترتیب دیے گئے کیلنڈرز اور واقعات پڑھیں
- **رابطہ میپنگ اور شریک معاونین** — کیلنڈر شرکا کو سائٹ صارفین اور رابطوں سے ملائیں
- **انسانی منظوری کے گیٹس اور یاددہانی ریکارڈز** — جائزے کے لیے خودکاریوں کو روکیں اور دہرائی ہوئی اطلاعات سے بچیں
- **TextBee SMS فراہم کنندہ** — TextBee کے ذریعے ترتیب دی گئی ٹیکسٹ پیغام اطلاعات بھیجیں
- **Advanced companion package** — WordPress.org بلڈ سے الگ تقسیم کیے گئے قابلِ اعتماد ڈویلپر فائل سسٹم، ڈیٹابیس، WP-CLI، REST ڈسپیچر، plugin بلڈر، git اسنیپ شاٹ، صارف مینجمنٹ، اور بینچ مارک ٹولز شامل کریں

### بہتر کیا گیا {#improved}

- **Managed Superdav سروس سیٹ اپ** — معاونت یافتہ سائٹس کے لیے hosted سروس endpoints اور خودکار کنکشن فراہمی شامل کریں
- **ریلیز پیکجنگ** — الگ core اور Advanced ZIPs بنائیں، دونوں کو GitHub پر شائع کریں، اور صرف core package کو WordPress.org پر بھیجیں

### درست کیا گیا {#fixed}

- **AI درخواست کی قابلِ اعتمادیت** — ماڈل انتخاب، درخواست timeouts، default setup ماڈل، reasoning-text handling، اور غلط tool calls کے لیے retry guidance بہتر بنائیں
- **کیلنڈر اور یاددہانی مضبوطی** — Google Calendar tokens اور یاددہانی deduplication کو مضبوط کریں
- **آن بورڈنگ اور منظوری دوبارہ شروع کرنا** — frontend onboarding launches اور تصدیق شدہ ability resumes درست کریں
- **WordPress.org پیکجنگ جائزہ مسائل** — core release کے لیے پیکجنگ جائزہ feedback کو حل کریں

## 1.16.0 — 2026-05-20 کو جاری کیا گیا {#1160--released-on-2026-05-20}

### نیا {#new-1}

- **Logo SVG بنانے کی ability** — Theme Builder اب namespace-safe sanitisation کے ساتھ custom logo SVGs بنا اور embed کر سکتا ہے
- **دریافتی انٹرویو میں تصویر upload** — Theme Builder discovery interview میں اب زیادہ بھرپور ڈیزائن context کے لیے photo upload step شامل ہے
- **Palette Contrast کی توثیق کی ability** — theme پر لاگو کرنے سے پہلے colour pairs کو WCAG compliance کے لیے چیک کریں
- **مہمان نوازی menus** — Theme Builder اب hospitality businesses کے لیے structured food and beverage menu pages بنا سکتا ہے
- **Desktop اور mobile preview rendering** — design-direction selection کے دوران اپنے design کو desktop اور mobile devices پر preview کریں
- **Navigation label parameter** — Create Menu ability اب page title سے الگ ایک distinct `navigation_label` کو support کرتی ہے
- **Tier 1 tool availability** — sd-ai-agent/site-scrape اب Theme Builder میں default طور پر دستیاب Tier 1 tool ہے

### درست کیا گیا {#fixed-1}

- **AI Client cache** — اب cross-request persistence کے لیے transients سے backed ہے، جس سے long-running agent tasks میں data loss رکتا ہے
- **Plugin row action links** — وضاحت کے لیے درست اور rename کیے گئے

## 1.10.0 — 2026-05-05 کو جاری کیا گیا {#1100--released-on-2026-05-05}

### نیا {#new-2}

- **Tavily internet search** — Brave Search کے ساتھ زیادہ بھرپور internet search results کے لیے Tavily کو search provider کے طور پر شامل کریں
- **Theme-aware built-in skills** — Block Themes، Classic Themes، Kadence Blocks، اور Kadence Theme skill guides اب plugin کے ساتھ آتی ہیں
- **Site builder contact form ability** — chat interface سے براہِ راست کسی بھی page میں contact form شامل کریں

### بہتر کیا گیا {#improved-1}

- **WooCommerce integration refactored** — اب بہتر قابلِ اعتمادیت اور compatibility کے لیے native WooCommerce APIs استعمال کرتا ہے
- **Provider list خودکار طور پر refresh ہوتی ہے** — جب بھی کوئی plugin فعال یا غیر فعال کیا جاتا ہے

### درست کیا گیا {#fixed-2}

- **navigate-to ability** — کچھ admin pages پر infinite reload loop درست کیا گیا
- **list-posts ability** — اب category اور tag names کو slugs میں درست طور پر resolve کرتی ہے
- **WP-CLI commands** — پچھلے refactor کے بعد missing namespace aliases بحال کیے گئے
- **Event automation** — ان سائٹس کو gracefully handle کرتی ہے جہاں automation tables ابھی نہیں بنے
- **memory-save ability** — اب system instruction builder میں درست namespace prefix استعمال کرتی ہے
- **Scalar tool results** — اب AI کو واپس کیے جانے سے پہلے درست طور پر wrapped ہیں
- **Usage statistics** — اب پرانے versions سے upgrade پر legacy ability key format کو درست طور پر handle کرتی ہیں
