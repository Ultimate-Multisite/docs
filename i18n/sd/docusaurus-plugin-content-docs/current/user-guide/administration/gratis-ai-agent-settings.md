---
title: Gratis AI Agent سيٽنگون
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Gratis AI Agent سيٽنگون

Gratis AI Agent ۾ **Settings → Advanced** اسڪرين backend انضمامن لاءِ منتظم-سطح جي ترتيب مهيا ڪري ٿي. هي صفحو feedback forwarding، search provider keys، managed Superdav service setup، Google Calendar controls، TextBee SMS settings، ۽ network-wide feature flags کي دستاويز ڪري ٿو.

## سيٽنگن تائين رسائي

1. WordPress admin ۾، **Gratis AI Agent → Settings** ڏانهن وڃو.
2. **Advanced** ٽيب تي ڪلڪ ڪريو.

## Feedback Endpoint ترتيب

feedback endpoint AI agent کان POST درخواستون وصول ڪري ٿو جڏهن به ڪو استعمال ڪندڙ thumbs-down بٽڻ، auto-prompt banner، يا `/report-issue` command ذريعي feedback جمع ڪرائي ٿو.

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | اهو URL جيڪو JSON body سان HTTP POST درخواستن طور feedback جمع ڪرايون وصول ڪري ٿو. |
| **Feedback API Key** | هر feedback درخواست جي `Authorization` header ۾ موڪليل bearer token. جيڪڏهن توهان جي endpoint کي authentication جي ضرورت ناهي ته خالي ڇڏي ڏيو. |

### متوقع JSON Payload

توهان جي feedback endpoint کي گهٽ ۾ گهٽ هيٺين fields سان JSON body قبول ڪرڻ گهرجي:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Payload ۾ ڳالهه ٻولهه جي context تي دارومدار رکندي اضافي fields موجود ٿي سگهن ٿا.

### `triage_category` قدر

AI triage layer payload کي اڳتي موڪلڻ کان اڳ `triage_category` کي هيٺين قدرن مان هڪ ڏئي ٿو:

| Value | Meaning |
|---|---|
| `factual_error` | assistant غلط حقيقتي معلومات فراهم ڪئي. |
| `unhelpful_answer` | جواب فني طور صحيح هو پر ڪارائتو نه هو. |
| `inappropriate_content` | جواب ۾ اهڙو مواد شامل هو جيڪو استعمال ڪندڙن کي نه ڏيکارڻ گهرجي. |
| `other` | feedback ڪنهن ڄاتل category سان نه مليو. |

### Authentication

جيڪڏهن توهان جي endpoint کي authentication جي ضرورت آهي، ته **Feedback API Key** field کي پنهنجي bearer token تي سيٽ ڪريو. agent موڪلي ٿو:

```
Authorization: Bearer <your-api-key>
```

جيڪڏهن **Feedback API Key** field خالي آهي، ته ڪو به `Authorization` header نه موڪليو ويندو.

### Feedback گڏ ڪرڻ بند ڪرڻ

**Feedback Endpoint URL** ۽ **Feedback API Key** ٻنهي fields کي خالي ڇڏي ڏيو. thumbs-down بٽڻ ۽ feedback UI استعمال ڪندڙن لاءِ نظر ايندا رهندا، پر جمع ڪرايون ڪنهن به ٻاهرين service ڏانهن اڳتي نه موڪليون وينديون.

## Brave Search API Key

**Advanced** ٽيب تي پڻ، **Brave Search API Key** field [Internet Search](../configuration/internet-search) صلاحيت کي فعال ڪري ٿو.

| Field | Description |
|---|---|
| **Brave Search API Key** | Brave Search developer dashboard مان توهان جي API key. AI assistant ۾ internet search فعال ڪرڻ لاءِ گهربل. |

field label ۾ Brave Search API sign-up صفحي ڏانهن clickable link شامل آهي. internet search بند ڪرڻ لاءِ خالي ڇڏي ڏيو.

هن feature بابت end-user documentation لاءِ [Internet Search](../configuration/internet-search) ڏسو.

## Managed Superdav Service

Superdav AI Agent v1.18.0 supported sites لاءِ managed Superdav service endpoints ۽ automatic connection provisioning شامل ڪري ٿو. اهي controls تڏهن استعمال ڪريو جڏهن توهان جي site کي manually configured service endpoint بدران hosted provider سان ڳنڍجڻ گهرجي.

| Field | Description |
|---|---|
| **Managed Superdav Service** | supported sites لاءِ hosted Superdav service connection فعال ڪري ٿو. |
| **Provision Connection** | automatic endpoint ۽ credential provisioning شروع ڪري ٿو. site کي managed provider استعمال ڪرڻ گهرجي، اها تصديق ڪرڻ کان پوءِ هي استعمال ڪريو. |
| **Service Endpoint / Connection Status** | provisioning کان پوءِ موجوده endpoint يا connection state ڏيکاري ٿو. |

provisioning کان پوءِ، settings محفوظ ڪريو ۽ managed-service workflows تي ڀاڙڻ کان اڳ connection status جي تصديق ڪريو. جيڪڏهن provisioning ناڪام ٿئي، ته ڏيکاريل retry guidance جو جائزو وٺو ۽ تصديق ڪريو ته site کي hosted provider استعمال ڪرڻ جي اجازت آهي.

## Google Calendar ترتيب

جڏهن Superdav AI Agent v1.18.0 calendar features فعال هجن، agent configured calendars ۽ event details پڙهي سگهي ٿو. Calendar tools read-oriented آهن ۽ schedule-aware reminders، attendee follow-up، ۽ contact matching لاءِ ڪارائتا آهن.

| Field | Description |
|---|---|
| **Google Calendar Credentials** | calendar data پڙهڻ لاءِ گهربل credentials يا token connection محفوظ ڪري ٿو. |
| **Calendar Selection** | محدود ڪري ٿو ته agent ڪهڙا configured calendars inspect ڪري سگهي ٿو. |
| **Calendar Connection Status** | تصديق ڪري ٿو ته موجوده credentials calendars ۽ events پڙهي سگهن ٿا يا نه. |

calendar credentials کي انهن calendars تائين محدود رکو جن جي agent کي ضرورت آهي. جيڪڏهن status expired token ڏيکاري، ته credentials کي ٻيهر connect يا rotate ڪريو.

## TextBee SMS Notifications

Superdav AI Agent v1.18.0 configured notification workflows لاءِ TextBee کي SMS provider طور شامل ڪري ٿو. SMS notifications کي حساس يا user-facing messages لاءِ human approval gates سان گڏ رکڻ گهرجي.

| Field | Description |
|---|---|
| **TextBee API Key** | TextBee SMS provider ڏانهن درخواستن کي authenticate ڪري ٿو. |
| **TextBee Device / Sender** | جڏهن provider کي ضرورت هجي، outgoing messages لاءِ استعمال ٿيندڙ TextBee sender يا device چونڊي ٿو. |
| **SMS Notifications Enabled** | approved workflows کي text-message notifications موڪلڻ جي اجازت ڏئي ٿو. SMS sends روڪڻ لاءِ disabled ڇڏي ڏيو. |

test message صرف administrator-owned number ڏانهن موڪليو، پوءِ scheduled يا attendee-facing reminders فعال ڪرڻ کان اڳ approval-gate behaviour جي تصديق ڪريو.

## Feature Flags

v1.9.0 ۾ پڻ متعارف ڪرايل، **Settings → Feature Flags** ٽيب optional functionality لاءِ toggle switches مهيا ڪري ٿو. هر flag يا ته network-wide enabled آهي يا disabled؛ هن وقت per-site override موجود ناهي.

### Feature Flags تائين رسائي

1. WordPress admin ۾، **Gratis AI Agent → Settings** ڏانهن وڃو.
2. **Feature Flags** ٽيب تي ڪلڪ ڪريو.

### Access Control Flags

| Flag | Default | Description |
|---|---|---|
| **انتظام ڪندڙن تائين محدود ڪريو** | بند | جڏهن فعال ڪيو وڃي، صرف `administrator` ڪردار وارا واپرائيندڙ AI Agent چيٽ پينل کولي سگهن ٿا. ٻيا سڀ ڪردار ان جي بدران "پنهنجي انتظام ڪندڙ سان رابطو ڪريو" پيغام ڏسن ٿا. |
| **Network Admins تائين محدود ڪريو** | بند | جڏهن multisite network تي فعال ڪيو وڃي، صرف Super Admins agent استعمال ڪري سگهن ٿا. انفرادي site admins کي روڪيو ويندو آهي. جيڪڏهن ٻئي فعال هجن ته "انتظام ڪندڙن تائين محدود ڪريو" تي ترجيح رکي ٿو. |
| **Subscriber رسائي جي اجازت ڏيو** | بند | جڏهن فعال ڪيو وڃي، `subscriber` ڪردار وارا واپرائيندڙ چيٽ interface استعمال ڪري سگهن ٿا پر صرف پڙهڻ جي صلاحيتن تائين محدود هوندا آهن (ڪا post creation يا settings تبديل نه). |
| **غير ميمبرن لاءِ غيرفعال ڪريو** | بند | Ultimate Multisite membership status سان ضم ٿئي ٿو. جڏهن فعال ڪيو وڃي، چيٽ انهن سائيٽن لاءِ لڪايل هوندي آهي جن وٽ فعال membership ناهي. |

### Branding Flags

| Flag | Default | Description |
|---|---|---|
| **"Powered by Gratis AI Agent" Footer لڪايو** | بند | چيٽ widget جي تري ۾ ڏيکاريل branding attribution line هٽائي ٿو. white-label deployments لاءِ سفارش ٿيل آهي. |
| **Custom Agent Name** | *(خالي)* | چيٽ header ۽ admin menu ۾ default "Gratis AI Agent" label کي توهان جي پنهنجي product name سان بدلائي ٿو. default استعمال ڪرڻ لاءِ خالي ڇڏيو. |
| **Agent Picker لڪايو** | بند | جڏهن فعال ڪيو وڃي، واپرائيندڙ پنج built-in agents جي وچ ۾ مٽائي نٿا سگهن. موجوده agent اهو ئي مقرر رهندو جيڪو Settings → General ۾ default طور configured آهي. |
| **Site Icon کي Chat Avatar طور استعمال ڪريو** | بند | چيٽ widget header ۾ default AI icon کي WordPress site icon سان بدلائي ٿو (Appearance → Customize → Site Identity هيٺ مقرر ٿيل). |

### Automation Safety Flags

Superdav AI Agent v1.18.0 وڌيڪ محفوظ automation runs لاءِ انساني منظوري جا gates ۽ reminder records متعارف ڪرائي ٿو. اهي controls feature flags يا advanced automation settings ۾ ظاهر ٿي سگهن ٿا، installed package تي دارومدار رکندي.

| Flag | Default | Description |
|---|---|---|
| **انساني منظوري گهربل** | سفارش ٿيل فعال | حساس automations کي روڪي ٿو جيستائين هڪ مجاز واپرائيندڙ تجويز ڪيل عمل جو جائزو وٺي ۽ تصديق ڪري. |
| **Reminder Deduplication** | فعال | موڪليل reminders کي record ڪري ٿو ته جيئن retries يا scheduled runs duplicate notifications نه موڪلين. |
| **Calendar Tools فعال ڪريو** | configured ٿيڻ تائين بند | agent کي configured Google calendars ۽ events پڙهڻ جي اجازت ڏئي ٿو. |
| **SMS Notifications فعال ڪريو** | configured ٿيڻ تائين بند | credentials محفوظ ٿيڻ کان پوءِ approved workflows کي TextBee SMS notifications موڪلڻ جي اجازت ڏئي ٿو. |

### تبديليون لاڳو ڪرڻ

ڪنهن به flag کي toggle ڪرڻ کان پوءِ **Save Settings** تي ڪلڪ ڪريو. تبديليون فوراً اثر وٺن ٿيون — ڪا cache flush يا plugin reactivation گهربل ناهي.
