---
title: Espirienza tal Membership u Blokkazzjoni tal Sito
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Espirament tal Membership u Bloccjiet tal Sito {#membership-expiration-and-site-blocking}

Dan li guida tispjega kif jidiex l-Ultimate Multisite idirix il-espirament tal membership, il-finiti tal trial u il-bloccjiet tal frontend tal sito. Tispjega l-ciclu tal membership min aktiva għal espirata, il-setting li kontrollaw jew siti jiddukkju, u x'la tfittex meta siti jiddukkju biex jipprovvdu l-membership.

## Ciclu tal-Status tal-Membership {#membership-status-lifecycle}

Kull membership f Ultimate Multisite għandu waħda minn il-status dejjem:

:::note Il-membershipijiet free huma lifetime
Il-membershipijiet free ma jiddukkju awtomatik. Ultimate Multisite jidirhom bħala access lifetime, għoli ma jkunu inklużi fil-check tal-espirament mala l-istat tal-administrator jgħatti jew jmur il-customer għal prodott ieħor.
:::

| Status | Ma'na |
|---|---|
| **Pending** | Għandu aspett mill-prim pagament jew verifikazzjoni tal-email |
| **Trialing** | Perjodu trial attivi, ma jiddukkjux pagamenti għajr jkun koleggju |
| **Active** | Pagat u aktivi |
| **On Hold** | Il-pagament ta rinewwizjja huwa aspett (invoice kienet, jiddeħħol l-pagament) |
| **Expired** | Jiddukkju d-dettal tal-espirament u perjodu għall-għajnuna biex ma jkunx rinewwizzat |
| **Cancelled** | Jiddukkju esplicitament minn l-customer jew madministratore |

### Come t-Transitiona il-Membershipijiet għal Expired {#how-memberships-transition-to-expired}

Ultimate Multisite jikkontrolla is-check tal-background **kull ora** li jipprovvdi biex jfiltri l-membershipijiet li għandhom jiġu marrati bħala espirati. Dan is-check jiddefinisji bi [Action Scheduler](https://actionscheduler.org/) (ma qed jiddefinisji WP-Cron direttament) u jtorrqa bħala l-action skedulata `wu_membership_check`.

Il-check tal-espirament għandu **perjodu għall-għajnuna (grace period) mhux mpreżvi tal-3 juri** biex jkun aktivi. Il-membership ma jiddukkjux bħala `expired` fin li jmur 3 juri wara li il-data tal-espirament tieħleb. Dan jgħatti l-customer ħin jkun għandu ħin biex jfila pagament tard qabel ma tistatja l-status tiegħu.

:::info
Il-period ta grazzja tal-espirazzjoni ta 3 jurnat huwa separatu mill-setting tal-grace period tal-Frontend Block li descritti aħna. Il-period ta grazzja tal-espirazzjoni jipprogramu meta **tġiegħed il status** min attiv/on-hold għal espirazzjonijiet. Il-grace period tal-frontend block jipprogramu meta **il-site jitbloka** wara li il-status jgħadd.
:::

#### Membershipi Li Jiddehnju Minħabba l-Auto-Renewal vs. Li Ma Jiddehnju {#auto-renewing-vs-non-auto-renewing-memberships}

Dan l-distinzi għandu jkun kritiku biex tfitteh kif tistabbilixxi l-behavior tal-espirazzjoni:

- **Membershipi li ma jiddehnju minħabba l-auto-renewal** (`auto_renew = false`): Il-cron job hourly jgħin fl-lifecycle kollu -- huwa li jieħu il-pagamenti ta rinewwizjuni, jgħatti l-membership għal on-hold, u fil-aħħar jgħatti l-espirazzjoni se ma jiddegħlix pagament.

- **Membershipi li jiddehnju minħabba l-auto-renewal** (`auto_renew = true`): Il-check tal-espirazzjoni tal-cron **jikkawża għalihom kollha**. Il-payment gateway (Stripe, PayPal, ecc.) huwa kunsiddirr jgħin li jgħatti Ultimate Multisite per id-webhook meta tħalli sħubskrizzjoni jew tit-tella. Jekk il-webhook ma jirċievi -- min dovument miskonfigurat b'mod xlepp, uġigħda tal-gateway, jew sħubskrizzjoni tit-tella ewpaċċati sistema -- l-membership tista' tkun `active` għal ħin ininterrobbili meta d-data tal-espirazzjoni jittla.

### Come Ttira il-Trials (Periodi Tal-Test) {#how-trials-end}

Meta jmur il-period tal-trial ta membership trialing, is-sistema:

1. Tqiegħed pagament ta rinewwizjoni pendenti b'morsola sħubskrizzjoni kollha
2. Jgħatti l-status tal-membership min `trialing` għal `on-hold`
3. Ttira email ta notifika tal-pagament ta rinewwizjoni għall-customer

Dan il-proċess jmur fuq is-skedjolu hourly isiemaw b'mod isiemaw l-check tal-espirazzjoni regolari, iżda **ghola għal membershipi li ma jiddehnju minħabba l-auto-renewal**. Għal trials li jiddehnju minħabba l-auto-renewal, il-payment gateway huwa li jgħatti it-trasizzjoni min trial għasubskrizzjoni pagata.

## Blokk Access Frontend {#block-frontend-access}

בי default, כאשר членות (memberships) משתלמות או נכנסות בהשהיה, **רק לוח הבקרה של wp-admin** מוגבל. ה-frontend הציבורי של האתר נשאר נגיש לכל המבקרים. כדי לחסום גם את הגישה הציבורית, עליך להפעיל את ההגדרה **Block Frontend Access**.

### הגדרת ההגדרה {#configuring-the-setting}

נווט אל **Ultimate Multisite > Settings > Memberships** והפעל את **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

הנה תצוגה מלאה של דף הגדרות החברות:

![Membership settings full page](/img/config/settings-membership-full.png)

שלוש הגדרות קשורות שולטות בהתנהגות זו:

| Setting | Description | Default |
|---|---|---|
| **Block Frontend Access** | מתג ראשי. כאשר מופעל, חוסם את ה-frontend הציבורי של אתרים ברשת כשהחברות שלהם אינה פעילה עוד. | Off |
| **Frontend Block Grace Period** | מספר הימים שצריך לחכות לאחר שהחברות לא פעילה לפני החסימה. הגדר ל-`0` כדי לחסום מיד. | 0 |
| **Frontend Block Page** | דף באתר הראשי שאליו מפנים את המבקרים כאשר אתר נחסם. אם לא מוגדר, המבקרים רואים הודעה כללית "האתר אינו זמין כרגע" עם קישור לדף הכניסה למנהל האתר. | None |

### מה המבקרים רואים כאשר אתר נחסם {#what-visitors-see-when-a-site-is-blocked}

כאשר הגישה ל-frontend נחסמת, מבקרים באתר יצטרכו:

1. **להיפנות** לדף שבחרת ב-**Frontend Block Page** (אם מוגדר), או
2. **לראות הודעה ברירת מחדל**: "האתר אינו זמין כרגע" עם קישור לדף הכניסה למנהל האתר של האתר.

מנהלי אתרים עדיין יכולים להתחבר -- דף הכניסה לעולם לא נחסם.

### מה נחסם ומתי {#what-gets-blocked-and-when}

התנהגות החסימה תלויה במצב החברות:

| Status tal-Membership | Frontend Bloccato? | Periodu di Grazia Applikat? |
|---|---|---|
| Active | La No | -- |
| Trialing | **La No** (vedi nota sottostante) | -- |
| On Hold | Consideratu attivo -- ma non bloccato | -- |
| Expired | **Sì**, se Block Frontend Access è attivo | Sì |
| Cancelled | **Sì**, sempre (indipendentemente dalle impostazioni) | **No** -- bloccato immediatamente |
| Pending | Non bloccato tramite controllo membership | -- |

:::warning I membership Trialing mankja bloccati
Anche se il periodo di prova è terminat, un membership con lo status `trialing` **non** sarà bloccato sul frontend. Il periodo di prova deve prima passare a un altro status (tipicamente `on-hold` tramite la cron job, poi `expired` se non pagato). Se stai vedendo membership trialing che non sono passati allo stato successivo, controlla la sezione di troubleshooting qui sotto.
:::

:::note I membership Cancelled bypassano il periodo di grazia
I membership Cancelled vengono sempre bloccati una volta scaduto il data di scadenza, indipendentemente dal fatto che Block Frontend Access sia abilitato. Il Periodo di Grazia del Blocco Frontend **non** si applica ai membership cancellati.
:::

## Troubleshooting: Siti Rimangono Accessibili Dopo la Scadenza {#troubleshooting-sites-remaining-accessible-after-expiration}

Se i siti rimangono accessibili pubblicamente dopo la scadenza di un membership, segui questi controlli nell'ordine:

### 1. Verifica che l'impostazione Block Frontend Access sia attiva {#1-verify-the-block-frontend-access-setting-is-enabled}

Vai a **Ultimate Multisite > Settings > Memberships** e conferma che l'interruttore **Block Frontend Access** sia attivo. Questa impostazione è **disattivata di default**, il che significa che solo wp-admin viene ristretto quando un membership diventa inattivo.

### 2. Controlla il Periodo di Grazia del Blocco Frontend {#2-check-the-frontend-block-grace-period}

عليكم نفس صفحة الإعدادات، تحقق من قيمة **Frontend Block Grace Period**. إذا كانت مضبوطة على 7 أيام مثلاً، فلن يتم حظر الواجهة الأمامية حتى مرور 7 أيام بعد تاريخ انتهاء صلاحية العضوية -- حتى لو كان حالة العضوية `expired` بالفعل.

اضبطها على `0` إذا كنت تريد الحظر الفوري بعد أن تصبح العضوية غير نشطة.

### 3. تأكد من أن حالة العضوية قد تغيرت فعلاً {#3-confirm-the-membership-status-has-actually-changed}

اذهب إلى **Ultimate Multisite > Memberships** وتحقق من حالة العضوية المتأثرة. إذا كانت لا تزال تُظهر `active` على الرغم من مرور تاريخ الانتهاء، فهذا يعني أن انتقال الحالة لم يحدث. الأسباب الشائعة لذلك:

- **العضوية تتجدد تلقائي**: تحقق من حقل `auto_renew` في صفحة تعديل العضوية. إذا كان التجديد التلقائي مفعلاً، فإن مهمة cron الخاصة بالانتهاء ستتخطى هذه العضوية -- وتعتمد على بوابة الدفع للإبلاغ عن الفشل. تحقق من لوحة تحكم البوابة الخاصة بك (Stripe, PayPal) لتتأكد من أن حالة الاشتراك تتطابق مع ما يظهره Ultimate Multisite.

- **لم تعمل مهمة cron**: انظر للخطوة التالية.

### 4. تحقق من تشغيل Action Scheduler {#4-verify-action-scheduler-is-running}

يستخدم Ultimate Multisite Action Scheduler لمهمات cron الخاصة به. اذهب إلى **Tools > Scheduled Actions** في إدارة الشبكة وابحث عن:

- **`wu_membership_check`** -- يجب أن تظهر هذه كإجراء متكرر يعمل كل ساعة. إذا كانت مفقودة، فهذا يعني أن عمليات التحقق من العضوية لا يتم جدولتها.
- **`wu_async_mark_membership_as_expired`** -- هذه مهام فردية لتحديد عضوية معينة على أنها منتهية الصلاحية. إذا رأيت إجراءات فاشلة هنا، فقد تحتوي على رسائل خطأ تشرح السبب.

إذا رأيت إجراءات عالقة أو فاشلة، فقد تكون لديك مشكلة في Action Scheduler. الأسباب الشائعة لذلك:

- **`DISABLE_WP_CRON` set to `true`** f'wp-config.php' بلا sostitutu cron di sistema
- **Bassa traffiku sul sito** -- WP-Cron funziona solo quando qualcuno visita il sito

Per assicurarti che il cron funzioni in modo affidabile, configura un job cron di sistema:

```bash
# Esegui ogni 5 minuti tramite wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# O tramite WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Controlla problemi con Gateway Webhook (Abbonamenti che si rinnovano automaticamente) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Se l'abbonamento si rinnova automaticamente e il sottoscrizione del gateway è stata annullata o ha fallito, ma Ultimate Multisite lo mostra ancora come `active`:

- **Stripe**: Vai al Stripe Dashboard > Customers e controlla lo stato dell'abbonamento. Poi verifica che l'endpoint webhook sia attivo sotto Developers > Webhooks. L'endpoint dovrebbe puntare al tuo sito e mostrare consegne di successo.
- **PayPal**: Controlla lo stato dell'abbonamento nel tuo account business PayPal e verifica la consegna di IPN/webhook.

Se il gateway mostra l'abbonamento come annullato ma Ultimate Multisite no, è probabile che la notifica webhook sia andata persa. Puoi cambiare manualmente lo stato dell'abbonamento in **Ultimate Multisite > Memberships > [Edit Membership]**.

### 6. Controlla il Periodo di Grazia per la Scadenza (Livello Cron) {#6-check-the-expiration-grace-period-cron-level}

Il controllo cron ha il suo periodo di grazia (default: 3 giorni) prima di segnare un abbonamento come scaduto. Questo è separato dal periodo di grazia del blocco frontend. Il tempo totale prima che un sito venga bloccato può essere:

**Periodo di grazia per la scadenza (3 giorni)** + **Periodo di grazia del blocco frontend (la tua impostazione)** = Ritardo Totale

għال المثال, mal-istabbilizzamenti default u per periódi għall-frontend ta 7 jiem, ittrattja tista' teħdem għal massimu 10 jiem wara minn `date_expiration` qabel ma l-sajt jiġi blokat.

### 7. Expira Membership Manualment {#7-manually-expire-a-membership}

Jekk għandek bżonn li tixgħel isit mill-immediat بلا ma tixwaita lil ciclu tal-cron, tista' tġib il-status tal-membership manualment:

1. Irrivi għal **Ultimate Multisite > Memberships**
2. Klikka fuq l-membership affettata
3. Baghja l-status għall-**Expired** jew **Cancelled**
4. Klikka fuq **Save**

Il-bloking tal-frontend jidħol b'mod aktar qabel fil-load ta dwejja (għal periódi grace period tal-frontend għall-memberships expired, jew immediat għall-memberships cancelled).

## Sintesi {#summary}

Il-timeline kollu mill-data tal-espirazzjoni għall-bloking tal-sajt:

```text
date_expiration jidur
       |
       v
  [periódi grace period ta 3 jiem tal-cron]     <-- l-membership tista' tistabbilji come active/on-hold
       |
       v
  Cron jixgħel l-membership b'mod "expired"
       |
       v
  [periódi grace period ta l-frontend]  <-- konfigurat f Settings > Memberships
       |
       v
  L-frontend tal-sajt jiġi blokat
```

Għal memberships cancellati, il-trajektu huwa qurt:

```text
  Membership cancellat
       |
       v
  date_expiration jidur (m'għandhomx periódi grace period)
       |
       v
  L-frontend tal-sajt jiġi blokat immediat
```

## Riferiment għall-Developer {#developer-reference}

Il-hooks u filters li segwix huma li jagħti l-possibilità ليك tista' tistabbilji b'mod personalizzat l-espirazzjoni u l-comportament tal-bloking:

| Hook/Filter | Descripċjoni |
|---|---|
| `wu_membership_grace_period_days` | Filtra l-numru tal i ghadien ta periyodu għall-għażla qabel ma jgħarraf membership biex huwa espożżjoni (default: 3) |
| `wu_schedule_membership_check_interval` | Filtra l-intervall bejn is-sħiħa tal-kontroll ta membership (default: 1 ora) |
| `wu_membership_renewal_days_before_expiring` | Filtra qabel ma jgħarraf espożżjoni, qabel ma jkun għadjar biex tgħmli pagament ta rinnovament (default: 3) |
| `wu_blocked_site_reactivation_url` | Filtra biex toffri URL ta riattivazzjoni kustom bl-każet li sit huwa bloccat |
| `wu_membership_is_active` | Filtra jew membership jitqassal bħala attivo |
| `wu_membership_expired_check_query_params` | Filtra għall-paramentri ta query li jintużaw biex tikkung l-membership espożżjoni |
| `wu_membership_trial_check_query_params` | Filtra għall-paramentri ta query li jintużaw biex tikkung trial espożżjoni |
