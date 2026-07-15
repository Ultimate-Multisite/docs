---
title: د متعدد سايټ تنظیمونکی
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Multisite Setup Wizard

Ultimate Multisite ته یو内置 गरिएको wizard (مساعد) لري چې یو معیاري WordPress installation کي خود بخود रूपमा WordPress Multisite network ته بدلوي. دا کار تاسو ته `wp-config.php` lai دستی रूपमा सच्याउन वा डेटाबेस commandहरू चलाउनुपर्ने आवश्यकता हटाउँछ।

:::tip
यदि तपाईंको WordPress installation पहिले नै Multisite network को रूपमा चलिरहेको छ भने, तपाईं यो चरण पूर्ण रूपमा छुटाउन सक्नुहुन्छ। Wizard ले केवल तब देखिन्छ जब Multisite अझै सक्रिय गरिएको छैन।
:::

## Wizard कहिले देखा पर्छ? {#when-does-the-wizard-appear}

जब तपाईं कुनै मानक (गैर-Multisite) WordPress installation मा Ultimate Multisite सक्रिय गर्नुहुन्छ, प्लगइनले पत्ता लगाउँछ कि Multisite सक्रिय छैन र सामान्य सेटअप wizard को सट्टा तपाईंलाई Multisite Setup Wizard मा स्वचालित रूपमा पुनर्निर्देशित गर्छ।

तपाईं यसमा सिधै **WP Admin > Ultimate Multisite > Multisite Setup** बाट पनि पहुँच गर्न सक्नुहुन्छ।

## पूर्व-आवश्यकताहरू (Prerequisites) {#prerequisites}

wizard चलाउनु अघि, सुनिश्चित गर्नुहोस्:

- तपाईंको WordPress installation मा **administrator access** छ
- तपाईंको सर्भरको `wp-config.php` फाइल वेब सर्भरद्वारा **लेख्न मिल्ने (writable)** छ
- तपाईंको फाइल र डेटाबेसको **हालको backup** छ

:::warning
wizard ले तपाईंको `wp-config.php` फाइल परिवर्तन गर्छ र नयाँ database tables बनाउँछ। अगाडि बढ्नुअघि सधैं एक backup बनाउनुहोस्।
:::

## चरण १: स्वागत (Welcome) {#step-1-welcome}

पहिलो स्क्रिनले WordPress Multisite के हो र wizard ले के गर्ने भन्ने कुरा बुझाउँछ:

- तपाईंको WordPress configuration मा Multisite feature सक्रिय गर्नुहोस्
- आवश्यक नेटवर्क database tables सिर्जना गर्नुहोस्
- `wp-config.php` मा आवश्यक multisite constants थप्नुहोस्
- सम्पूर्ण network मा Ultimate Multisite लाई activate गर्नुहोस्

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

अगाडि बढ्न **Continue** मा क्लिक गर्नुहोस्।

## चरण २: नेटवर्क कन्फिगरेसन (Network Configuration) {#step-2-network-configuration}

यो चरणले तपाईंलाई आफ्नो नेटवर्क सेटिङहरू कन्फिगर गर्न सोध्छ।

### साइट संरचना (Site Structure) {#site-structure}

د شبکه سایت‌های شما چگونه سازماندهی خواهند شد را انتخاب کنید:

- **زیر دامنه ها** (توصیه می‌شود) — سایت‌ها هر کدام یک زیردامنه خود را دریافت می‌کنند، مثلاً `site1.yourdomain.com`
- **زیر دایرکتوری‌ها** — سایت‌ها به صورت مسیر ساخته می‌شوند، مثلاً `yourdomain.com/site1`

:::note
اگر زیر دامنه انتخاب می‌کنید، باید برای دامنه خود تنظیمات **wildcard DNS** و یک **wildcard SSL certificate** پیکربندی کنید. اکثر هاست‌های مدیریت شده وردپرس این کار را به صورت خودکار انجام می‌دهند. برای مقایسه دقیق بیشتر به [Ultimate Multisite 101](./ultimate-multisite-101) مراجعه کنید.
:::

### عنوان شبکه (Network Title) {#network-title}

نامی برای شبکه خود وارد کنید. این نام به طور پیش‌فرض با "Network" به عنوان اضافه شدن، عنوان سایت فعلی شما تنظیم می‌شود. می‌توانید بعداً از تنظیمات شبکه آن را تغییر دهید.

### ایمیل مدیر شبکه (Network Admin Email) {#network-admin-email}

ایمیل مورد استفاده برای اعلان‌های مدیریت شبکه است. این مقدار به طور پیش‌فرض ایمیل کاربر فعلی تنظیم شده است.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

پس از پر کردن فیلدها، روی **Continue** کلیک کنید تا ادامه دهید.

## مرحله ۳: نصب (Step 3: Installation) {#step-3-installation}

برای شروع، روی دکمه **Install** کلیک کنید. این wizard پنج مرحله خودکار را به ترتیب انجام می‌دهد و هر کدام پیشرفت خود را در لحظه نشان می‌دهند:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| مرحله | توضیحات |
|------|-------------|
| **فعال کردن Multisite** | `wp-config.php` فایل تهیه‌سازی کې `WP_ALLOW_MULTISITE` ثابت (constant) اضافه کړئ |
| **ایجاد Network** | د multisite ډیټابیس جدولونه (`wp_site`, `wp_sitemeta`, `wp_blogs` او نور) جوړ کړئ او یې خپل network تنظیمات سره پُر کړئ |
| **تنظیمات تازه کړئ** | وروستۍ multisite ثابتونه (constants) په `wp-config.php` کې اضافه کړئ (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE` او نور) |
| **کوکیहरू درست کړئ** | د فعالولو وروسته احراز هویت کې مشکل نه پیښې شي د network metadata کې د سایت URL صحیح भएको ډاډ ترلاسه کړئ |
| **Network Activate Plugin** | Ultimate Multisite ته Network-activates ورکړئ ترڅو دا په ټول network کې کار کړي |

هر مرحله یو له هغوی وضعیت ښیي:

- **Pending (پاسخ لرو)** — انتظار دی چې پردازش شي
- **Installing... (په نصب کېدو...)** — اوس هم کار پیل شوی دی
- **Success! (موفقیت!)** — په بریالیت سره پوره شو
- **Error message (د خطا پیغام)** — خطا پیښ شوي (پیغام هغه مشکله بیانوي)

که ټولې مرحله په بریالیت سره پوره شي، تاسو هر یو شی لپاره سبز "Success!" وضعیت وګورئ:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

بیا wizard خود بخښنه ورکوي چې د پوره کولو سکرین ته ځي.

## مرحله ۴: پوره کول (Complete) {#step-4-complete}

که نصب پوره بشپړ شي، تاسو یو بریالیت پیغام وګورئ چې ډاډ ورکوي چې WordPress Multisite فعال شوی دی.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

ستاسو کولی شئ اوس د Ultimate Multisite setup wizard له کار څخه продълیاین ترڅو خپل WaaS platform تنظیم کړئ (کمپنیي جزئیات، پرانیستې محتوا، پیسې ورکولو دروازې او نور).

:::note
پاسخې اوور پسلاري نصب کیدای شي، د یوې نوی شبکه مدیر (network admin) له لارې Ihr مرورگر پریکړه ورکوي. ممکن اړتیا وي چې بیا لاگ شئ ځکه چې د multisite محیط لپاره احراز identidade کوونکو کوکیونه (authentication cookies) تازه شوي دي.
:::

## manuāli تنظیم کولو fallback (Fallback) {#manual-setup-fallback}

که کارنر (wizard) نشي کولی په `wp-config.php` فایل کې لیک وکړي (د فایل پرمیشن یا سرور محدودیتونو له وجه)، نو دا تاسو ته دقیق 코드가 ښیي چې باید manuāli اضافه کړئ:

۱. **wp-config.php constants** چې باید د `/* That's all, stop editing! */` خطي څخه اوپر اضافه شي
۲. **.htaccess rewrite rules** چې د Ihr غوره شوي سایت جوړښت (subdomain یا subdirectory) لپاره مناسب وي

د manuāli بدلونونو وروسته، صفحه تازه کړئ او کارنر تشخیصل得 چې multisite اوس فعال دی.

## مشکلو حل (Troubleshooting) {#troubleshooting}

### کارنر وايي چې wp-config.php لیک نه کیږي (is not writable) {#the-wizard-says-wp-configphp-is-not-writable}

د Ihr ویب سرور پروسې ته باید د `wp-config.php` فایل لپاره لیک کولو اجازه وي. تاسو کولی شئ:

- د فایل پرمیشنونه موقت रूपमा `644` یا `666` ته بدل کړئ
- کارنر لخوا وړاندې شوي manuāli تنظیم کولو fallback لارښوونو څخه کار واکوئ
- له خپل هاستینګ فراہم کنند څخه مرسته غواړئ

### وروسته له تنظیم کولو سایتونه پاتې کیږي (subdomains) {#sites-are-not-accessible-after-setup-subdomains}

که تاسو subdomain جوړښت غوره کړی، نو تاسو باید د خپل domain لپاره **wildcard DNS** تنظیم کړئ. یو DNS رکورډ اضافه کړئ:

```
Type: A (or CNAME)
Host: *
Value: [your server IP]
```

د خپل هاستینګ فراہم کنند څخه پوښتنه وکړئ که آیا تاسو نه پوهیږئ چې دا څنګه تنظیم کړئ.

### وروسته له تنظیم کولو احراز identidade کې مشکلونه {#authentication-issues-after-setup}

که تاسو لاگ نه یا cookie error تجربه کوئ multisite تنظیم کولو وروسته:

۱. د سایت لپاره خپل مرورگر کوکیونه پاک کړئ
۲. په `yourdomain.com/wp-login.php` کې بیا لاگ شئ
۳. که مشکل دوام ورسېږي، وګورئ چې ستاسو `wp-config.php` کې `COOKIE_DOMAIN` به `false` تنظیم نه وي — دا د subdomain multisite نصب کولو پریکړه شوي مشکله ده

### یوه مرحله نصبولو په جریان کې ناکامه شوې وه {#a-step-failed-during-installation}

که داسې خبره کیږي چې یو له همغندو لارښوونو کې غلطي پیلوي:

۱. هغه غلطي پیغام چې ښکاره کیږي، یاد کړئ.
۲. به خپل تنظیم کولو مرحله ته بیرته لاړ شئ او بیا هم آزماوئ.
۳. که غلطي دوام ورکړي، د سرور په PHP غلطي لاگ (PHP error log) وګورئ ترڅو زیات معلومات ترلاسه کړئ.
۴. هغه لارښوونې چې پیل شوي دي، به په وروستیو چلولو کې له پامه غورځول شي (د انستالر همغندو عمل لري).
