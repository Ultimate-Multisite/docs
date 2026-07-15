---
title: انتهاء العضوية وحظر الموقع
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# انتهاء صلاحية العضوية وحظر الموقع

يشرح هذا الدليل كيفية تعامل Ultimate Multisite مع انتهاء صلاحية العضوية، وانتهاء فترات التجربة، وحظر الموقع من الواجهة الأمامية (frontend). ويغطي دورة حياة العضوية بدءًا من الحالة النشطة وصولاً إلى المنتهية، والإعدادات التي تتحكم فيما إذا كانت المواقع سيتم حظرها، وما يجب التحقق منه عندما تظل المواقع متاحة بعد انتهاء صلاحية العضوية.

## دورة حياة حالة العضوية {#membership-status-lifecycle}

تحمل كل عضوية في Ultimate Multisite إحدى الحالات التالية:

:::note العضويات المجانية دائمة
لا تنتهي صلاحية العضويات المجانية تلقائيًا. يتعامل معها Ultimate Multisite على أنها وصول مدى الحياة، وبالتالي لا يتم تضمينها في فحوصات انتهاء الصلاحية ما لم يقم المسؤول بتغيير حالتها أو نقل العميل إلى منتج آخر.
:::

| الحالة | المعنى |
|---|---|
| **Pending** | في انتظار الدفعة الأولى أو التحقق عبر البريد الإلكتروني |
| **Trialing** | فترة تجربة نشطة، لم يتم تحصيل أي دفع بعد |
| **Active** | مدفوعة وحالية |
| **On Hold** | بانتظار دفع التجديد (تم إنشاء فاتورة، بانتظار الدفع) |
| **Expired** | تجاوز تاريخ الانتهاء وفترة السماح دون تجديد |
| **Cancelled** | تم إلغاؤها صراحةً من قبل العميل أو المسؤول |

### كيف تنتقل العضويات إلى حالة "منتهية" (Expired) {#how-memberships-transition-to-expired}

يقوم Ultimate Multisite بتشغيل فحص في الخلفية **كل ساعة** للبحث عن العضويات التي يجب وضع علامة "منتهية" عليها. يستخدم هذا الفحص [Action Scheduler](https://actionscheduler.org/) (وليس WP-Cron مباشرة) ويتم تشغيله كإجراء مجدول باسم `wu_membership_check`.

يحتوي فحص انتهاء الصلاحية على **فترة سماح مدمجة تبلغ 3 أيام** افتراضيًا. لن يتم وضع علامة `expired` على العضوية حتى مرور 3 أيام على `date_expiration` الخاصة بها. يمنح هذا الوقت للعملاء لإتمام دفعة متأخرة قبل تغيير حالتها.

:::info
فترة السماح بانتهاء الصلاحية البالغة 3 أيام منفصلة عن إعداد "Frontend Block Grace Period" الموصوف أدناه. تتحكم فترة السماح بانتهاء الصلاحية في متى **تتغير الحالة** من نشط/معلق إلى منتهي الصلاحية. أما فترة السماح بحظر الواجهة الأمامية، فتتحكم في متى **يتم حظر الموقع** بعد أن تكون الحالة قد تغيرت بالفعل.
:::

#### العضويات المتجددة تلقائيًا مقابل غير المتجددة تلقائيًا {#auto-renewing-vs-non-auto-renewing-memberships}

يعد هذا التمييز أمرًا بالغ الأهمية لفهم سلوك انتهاء الصلاحية:

- **العضويات غير المتجددة تلقائيًا** (`auto_renew = false`): يتعامل نظام Cron الساعي مع دورة الحياة الكاملة — حيث يقوم بإنشاء دفعات التجديد، وينقل العضوية إلى حالة "معلقة" (on-hold)، وفي النهاية يضع علامة "منتهية" عليها إذا لم يتم استلام الدفع.

- **العضويات المتجددة تلقائيًا** (`auto_renew = true`): يتخطى فحص انتهاء الصلاحية الخاص بـ Cron **هذه العضويات بالكامل**. من المتوقع أن يقوم بوابة الدفع (Stripe، PayPal، إلخ) بإخطار Ultimate Multisite عبر الـ webhooks عندما يفشل الاشتراك أو يتم إلغاؤه. إذا لم يتم استلام الـ webhook — بسبب نقطة نهاية غير مهيأة بشكل صحيح، أو انقطاع في البوابة، أو إلغاء الاشتراك خارج النظام — فقد تظل العضوية `active` إلى أجل غير مسمى حتى بعد مرور تاريخ الانتهاء.

### كيف تنتهي فترات التجربة {#how-trials-end}

عندما تنتهي فترة تجربة العضوية، يقوم النظام بما يلي:

1. إنشاء دفعة تجديد معلقة بالمبلغ الكامل للاشتراك.
2. نقل حالة العضوية من `trialing` إلى `on-hold`.
3. إرسال بريد إلكتروني لإشعار دفع التجديد إلى العميل.

تتم هذه العملية على نفس الجدول الزمني الساعي لفحص انتهاء الصلاحية العادي، ولكن **فقط بالنسبة للعضويات غير المتجددة تلقائيًا**. أما بالنسبة للتجارب المتجددة تلقائيًا، فتتولى بوابة الدفع عملية الانتقال من فترة التجربة إلى الاشتراك المدفوع.

## حظر الوصول إلى الواجهة الأمامية (Block Frontend Access) {#block-frontend-access}

افتراضيًا، عندما تنتهي صلاحية العضوية أو تتوقف عن العمل، **يتم تقييد لوحة تحكم wp-admin فقط**. وتبقى الواجهة الأمامية العامة للموقع متاحة للزوار. ولحظر الوصول العام أيضًا، يجب عليك تفعيل إعداد **Block Frontend Access**.

### تهيئة الإعداد {#configuring-the-setting}

انتقل إلى **Ultimate Multisite > Settings > Memberships** وقم بتفعيل **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

إليك عرض كامل لصفحة إعدادات العضوية:

![Membership settings full page](/img/config/settings-membership-full.png)

تتحكم ثلاثة إعدادات ذات صلة في هذا السلوك:

| الإعداد | الوصف | الافتراضي |
|---|---|---|
| **Block Frontend Access** | المفتاح الرئيسي. عند تفعيله، يقوم بحظر الواجهة الأمامية العامة لمواقع الشبكة عندما لا تكون عضويتها نشطة. | Off |
| **Frontend Block Grace Period** | عدد الأيام التي يجب الانتظارها بعد توقف العضوية عن العمل قبل الحظر. اضبطها على `0` للحظر الفوري. | 0 |
| **Frontend Block Page** | صفحة على الموقع الرئيسي لإعادة توجيه الزوار إليها عندما يتم حظر الموقع. إذا لم يتم تعيينها، يرى الزوار رسالة عامة تفيد بأن "الموقع غير متاح". | None |

### ما يراه الزوار عند حظر الموقع {#what-visitors-see-when-a-site-is-blocked}

عند حظر الوصول إلى الواجهة الأمامية، سيقوم الزوار الذين يزورون الموقع بأحد الإجراءين التاليين:

1. **إعادة التوجيه** إلى الصفحة التي حددتها في **Frontend Block Page** (إذا تم تهيئتها)، أو
2. **رؤية رسالة افتراضية**: "This site is not available at the moment." (هذا الموقع غير متاح في الوقت الحالي) مع رابط لصفحة تسجيل الدخول لمسؤول الموقع.

لا يزال بإمكان مسؤولي الموقع تسجيل الدخول — فصفحة تسجيل الدخول لا يتم حظرها أبدًا.

### ما الذي يتم حظره ومتى {#what-gets-blocked-and-when}

يعتمد سلوك الحظر على حالة العضوية:

| حالة العضوية | هل الواجهة الأمامية محظورة؟ | هل يتم تطبيق فترة السماح؟ |
|---|---|---|
| Active | لا | -- |
| Trialing | **لا** (انظر الملاحظة أدناه) | -- |
| On Hold | تعتبر نشطة -- لا يتم حظرها | -- |
| Expired | **نعم**، إذا كان Block Frontend Access مفعلًا | نعم |
| Cancelled | **نعم**، دائمًا (بغض النظر عن الإعداد) | **لا** -- يتم الحظر فورًا |
| Pending | لا يتم حظره عبر فحص العضوية | -- |

:::warning العضويات التجريبية (Trialing) لا يتم حظرها
حتى إذا انتهت فترة التجربة، فإن العضوية ذات الحالة `trialing` **لن** يتم حظرها على الواجهة الأمامية. يجب أن تنتقل التجربة أولاً إلى حالة أخرى (عادةً `on-hold` عبر نظام Cron، ثم `expired` إذا لم يتم الدفع). إذا كنت ترى عضويات تجريبية لم تنتقل حالتها، فتحقق من قسم استكشاف الأخطاء وإصلاحها أدناه.
:::

:::note العضويات الملغاة تتجاوز فترة السماح
يتم دائمًا حظر العضويات الملغاة بمجرد مرور تاريخ الانتهاء، بغض النظر عما إذا كان Block Frontend Access مفعلًا. لا تنطبق فترة السماح بحظر الواجهة الأمامية على العضويات الملغاة.
:::

## استكشاف الأخطاء وإصلاحها: بقاء المواقع متاحة بعد انتهاء الصلاحية {#troubleshooting-sites-remaining-accessible-after-expiration}

إذا ظلت المواقع متاحة للجمهور بعد انتهاء صلاحية العضوية، فقم بالمرور عبر هذه الفحوصات بالترتيب:

### 1. التحقق من تفعيل إعداد Block Frontend Access {#1-verify-the-block-frontend-access-setting-is-enabled}

اذهب إلى **Ultimate Multisite > Settings > Memberships** وتأكد من أن مفتاح **Block Frontend Access** مفعل. هذا الإعداد **غير مفعل افتراضيًا**، مما يعني أنه يتم تقييد wp-admin فقط عندما تصبح العضوية غير نشطة.

### 2. التحقق من فترة السماح بحظر الواجهة الأمامية (Frontend Block Grace Period) {#2-check-the-frontend-block-grace-period}

في صفحة الإعدادات نفسها، تحقق من قيمة **Frontend Block Grace Period**. إذا تم تعيينها على 7 أيام، على سبيل المثال، فلن يتم حظر الواجهة الأمامية حتى مرور 7 أيام على تاريخ انتهاء العضوية — حتى لو كانت حالة العضوية بالفعل `expired`.

قم بتعيينها على `0` إذا كنت تريد الحظر الفوري بعد توقف العضوية عن العمل.

### 3. التأكد من أن حالة العضوية قد تغيرت بالفعل {#3-confirm-the-membership-status-has-actually-changed}

اذهب إلى **Ultimate Multisite > Memberships** وتحقق من حالة العضوية المتأثرة. إذا كانت لا تزال تظهر `active` على الرغم من مرور تاريخ الانتهاء، فهذا يعني أن انتقال الحالة لم يحدث. الأسباب الشائعة:

- **العضوية متجددة تلقائيًا**: تحقق من حقل `auto_renew` في صفحة تحرير العضوية. إذا كان التجديد التلقائي مفعلاً، يتخطى نظام Cron الخاص بالانتهاء صلاحية هذه العضوية — فهو يعتمد على بوابة الدفع للإبلاغ عن الفشل. تحقق من لوحة تحكم البوابة (Stripe, PayPal) لتأكيد تطابق حالة الاشتراك مع ما يظهره Ultimate Multisite.

- **لم يتم تشغيل نظام Cron**: انظر الخطوة التالية.

### 4. التحقق من تشغيل Action Scheduler {#4-verify-action-scheduler-is-running}

يستخدم Ultimate Multisite نظام Action Scheduler لمهام Cron الخاصة به. اذهب إلى **Tools > Scheduled Actions** في لوحة تحكم الشبكة وابحث عن:

- **`wu_membership_check`** -- يجب أن يظهر هذا كإجراء متكرر يعمل كل ساعة. إذا كان مفقودًا، فهذا يعني أن فحوصات العضوية لا يتم جدولتها.
- **`wu_async_mark_membership_as_expired`** -- هذه مهام فردية لوضع علامة انتهاء الصلاحية على عضويات محددة. إذا رأيت إجراءات فاشلة هنا، فقد تحتوي على رسائل خطأ تشرح السبب.

إذا رأيت إجراءات عالقة أو فاشلة، فقد تكون لديك مشكلة في Action Scheduler. الأسباب الشائعة:

- **تعيين `DISABLE_WP_CRON` على `true`** في `wp-config.php` دون بديل Cron على مستوى النظام
- **انخفاض حركة مرور الموقع** -- لا يعمل WP-Cron إلا عندما يزور شخص ما الموقع

لضمان تنفيذ Cron الموثوق، قم بإعداد مهمة Cron على مستوى النظام:

```bash
# Run every 5 minutes via wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Or via WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. التحقق من مشاكل Webhook الخاصة بالبوابة (العضويات المتجددة تلقائيًا) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

إذا كانت العضوية متجددة تلقائيًا وتم إلغاء اشتراك البوابة أو فشله، ولكن Ultimate Multisite لا يزال يظهرها كـ `active`:

- **Stripe**: اذهب إلى لوحة تحكم Stripe > Customers وتحقق من حالة الاشتراك. ثم تحقق من أن نقطة نهاية الـ webhook نشطة ضمن Developers > Webhooks. يجب أن تشير نقطة النهاية إلى موقعك وتظهر عمليات تسليم ناجحة.
- **PayPal**: تحقق من حالة الاشتراك في حساب PayPal للأعمال الخاص بك وتحقق من تسليم IPN/webhook.

إذا أظهرت البوابة أن الاشتراك ملغى ولكن Ultimate Multisite لا يظهر ذلك، فمن المحتمل أن يكون إشعار الـ webhook قد فُقد. يمكنك تغيير حالة العضوية يدويًا في **Ultimate Multisite > Memberships > [Edit Membership]**.

### 6. التحقق من فترة السماح لانتهاء الصلاحية (مستوى Cron) {#6-check-the-expiration-grace-period-cron-level}

يحتوي فحص Cron الخاص به على فترة سماح خاصة به (افتراضيًا: 3 أيام) قبل وضع علامة "منتهية" على العضوية. هذا منفصل عن فترة السماح بحظر الواجهة الأمامية. يمكن أن يكون إجمالي الوقت قبل حظر الموقع:

**فترة السماح بانتهاء الصلاحية (3 أيام)** + **فترة السماح بحظر الواجهة الأمامية (إعدادك)** = التأخير الإجمالي

على سبيل المثال، مع الإعدادات الافتراضية وفترة سماح أمامية تبلغ 7 أيام، قد يستغرق الأمر ما يصل إلى 10 أيام بعد `date_expiration` قبل حظر الموقع فعليًا.

### 7. إنهاء صلاحية العضوية يدويًا {#7-manually-expire-a-membership}

إذا كنت بحاجة إلى حظر موقع على الفور دون انتظار دورة Cron، يمكنك تغيير حالة العضوية يدويًا:

1. اذهب إلى **Ultimate Multisite > Memberships**
2. انقر على العضوية المتأثرة
3. قم بتغيير الحالة إلى **Expired** أو **Cancelled**
4. انقر على **Save**

سيصبح الحظر على الواجهة الأمامية ساري المفعول عند تحميل الصفحة التالية (رهنًا بفترة السماح بحظر الواجهة الأمامية للعضويات المنتهية، أو فورًا للعضويات الملغاة).

## ملخص {#summary}

الجدول الزمني الكامل من تاريخ الانتهاء إلى حظر الموقع:

```text
date_expiration passes
       |
       v
  [3-day cron grace period]     <-- membership still shows as active/on-hold
       |
       v
  Cron marks membership as "expired"
       |
       v
  [Frontend Block Grace Period]  <-- configured in Settings > Memberships
       |
       v
  Site frontend is blocked
```

بالنسبة للعضويات الملغاة، المسار أقصر:

```text
  Membership cancelled
       |
       v
  date_expiration passes (no grace period)
       |
       v
  Site frontend is blocked immediately
```

## مرجع المطور (Developer Reference) {#developer-reference}

تسمح لك الخطافات (hooks) والفلاتر (filters) التالية بتخصيص سلوك انتهاء الصلاحية والحظر:

| Hook/Filter | Description |
|---|---|
| `wu_membership_grace_period_days` | Filter the number of grace period days before marking a membership as expired (default: 3) |
| `wu_schedule_membership_check_interval` | Filter the interval between membership checks (default: 1 hour) |
| `wu_membership_renewal_days_before_expiring` | Filter how many days before expiration to create a renewal payment (default: 3) |
| `wu_blocked_site_reactivation_url` | Filter to provide a custom reactivation URL when a site is blocked |
| `wu_membership_is_active` | Filter whether a membership is considered active |
| `wu_membership_expired_check_query_params` | Filter the query parameters used to find expired memberships |
| `wu_membership_trial_check_query_params` | Filter the query parameters used to find expired trials |
