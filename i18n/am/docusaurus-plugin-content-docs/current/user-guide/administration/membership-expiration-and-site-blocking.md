---
title: የአባልነት ጊዜ ማብቂያ እና ድረ-ገጽ መዘጋት
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# የአባልነት ጊዜ ማብቂያ እና የጣቢያ መዘጋት

ይህ መመሪያ Ultimate Multisite የአባልነት ጊዜ ማብቂያን፣ የሙከራ ጊዜ መቋረጥን እና የፊት-መጨት (frontend) የጣቢያ መዘጋት እንዴት እንደሚሰራ ያብራራል። የአባልነትን ከንቁ (active) እስከ ጊዜ ያለፈበት (expired) የህይወት ዑደት፣ የጣቢያ መዘጋት የሚቆጣጠሩ ቅንብሮች እና የአባልነት ጊዜ ካለፈ በኋላ የጣቢያው ገጽ ለምን ተደራሽ ሆኖ እንደሚቀጥል ምን መፈተሽ እንዳለብዎ ይዳስሳል።

## የአባልነት ሁኔታ የህይወት ዑደት

በUltimate Multisite ውስጥ እያንዳንዱ የአባልነት ሁኔታ ከሚከተሉት ሁኔታዎች አንዱ አለው።

:::note ነፃ የአባልነቶች ለዘላለም ናቸው
ነፃ የአባልነቶች በራስ-ሰር አይያዙም። Ultimate Multisite እንደ ዘላቂ መዳረሻ ይይዛቸዋል፣ ስለዚህ የአስተዳዳሪው ሁኔታን ባይቀይርም ወይም ደንበኛውን ወደ ሌላ ምርት ባያዛውም፣ በጊዜ ማብቂያ ፍተሻዎች ውስጥ አይካተቱም።
:::

| ሁኔታ (Status) | ትርጉም (Meaning) |
|---|---|
| **Pending** | የመጀመሪያ ክፍያ ወይም የኢሜይል ማረጋገጫ እየጠበቀ ነው |
| **Trialing** | ንቁ የሙከራ ጊዜ፣ ገና ክፍያ አልተሰበሰበም |
| **Active** | ክፍያ ተፈጽሞ ወቅታዊ ነው |
| **On Hold** | የቅድሚያ ክፍያ ክፍያ እየጠበቀ ነው (የክፍያ መጠየቂያ ተፈጥሯል፣ ክፍያ እየተጠበቀ ነው) |
| **Expired** | ያለ እድሳት ጊዜ ያለፈበት እና የቅድሚያ ጊዜ ያለፈበት |
| **Cancelled** | በደንበኛው ወይም በአስተዳዳሪው በግልጽ የተሰረዘ |

### የአባልነቶች ወደ ጊዜ ያለፈበት ሁኔታ እንዴት ይሸጋገራሉ

Ultimate Multisite በየሰዓቱ የሚሰራ የጀርባ ፍተሻ (background check) አባልነቶች ጊዜ ያለፈበት ተደርጎ መመደብ አለባቸው ብሎ የሚፈልገውን ይፈልጋል። ይህ ፍተሻ [Action Scheduler](https://actionscheduler.org/)ን (በቀጥታ WP-Cron ሳይሆን) ይጠቀማል እና እንደ `wu_membership_check` የተያዘ ስራ (scheduled action) ሆኖ ይሰራል።

የጊዜ ማብቂያ ፍተሻ በነባሪነት **የ3 ቀናት የመታገስ ጊዜ (grace period)** አለው። የአባልነት ሁኔታው ከ`date_expiration` ከተላለፈ በኋላ እስከ 3 ቀናት ድረስ እንደ `expired` አይመደብም። ይህ ደንበኞች ሁኔታቸው ከመቀየሩ በፊት ዘግይቶ ክፍያ እንዲፈጽሙ ጊዜ ይሰጣቸዋል።

:::info
የ3-ቀን የጊዜ ማብቂያ የመታገስ ጊዜ ከዚህ በታች ከሚገለጽው የፊት-መጨት መዘጋት የመታገስ ጊዜ (Frontend Block Grace Period) የተለየ ነው። የጊዜ ማብቂያ የመታገስ ጊዜ **ሁኔታው** ከንቁ/በመታገስ ወደ ጊዜ ያለፈበት ሲቀየር የሚቆጣጠረው ነው። የፊት-መጨት መዘጋት የመታገስ ጊዜ ደግሞ ሁኔታው ቀድሞውኑ ከቀየረ በኋላ **ጣቢያው** መቼ እንደሚዘጋ ይቆጣጠራል።
:::

#### በራስ-የሚደሰቱ (Auto-Renewing) እና በራስ-የማይደሰቱ (Non-Auto-Renewing) የአባልነቶች ልዩነት

ይህ ልዩነት የጊዜ ማብቂያ ባህሪን ለመረዳት ወሳኝ ነው፡

- **በራስ-የማይደሰቱ የአባልነቶች** (`auto_renew = false`): ሰዓታዊው የcron job ሙሉ የህይወት ዑደቱን ይቆጣጠራል -- የቅድሚያ ክፍያዎችን ይፈጥራል፣ የአባልነት ሁኔታን ወደ on-hold ይለውጣል፣ እና ክፍያ ካልተቀበለም በመጨረሻ እንደ ጊዜ ያለፈበት ምልክት ያደርገዋል።

- **በራስ-የሚደሰቱ የአባልነቶች** (`auto_renew = true`): የcron ጊዜ ማብቂያ ፍተሻ **እነዚህን ሙሉ በሙሉ ይዘልቃል።** የክፍያ መግቢያው (Stripe, PayPal, ወዘተ) የደንበበ መሠረተ-ገጽ (webhook) በመላክ Ultimate Multisiteን ስለደንበበ መቋረጥ ወይም መሰረዝ ይጠበቃል። የwebhook መልዕክት ካልተቀበልኩ -- በስህተት በተቀናበረ የመድረሻ አድራሻ (endpoint)፣ በየክፍያ መግቢያ መቋረጥ፣ ወይም ከስርዓቱ ውጭ ከተሰረዘበት የደንበበ መሠረተ-ገጽ -- የአባልነት ሁኔታው ጊዜ ያለፈበት ቀን አልፎም ለዘላለም `active` ሊቀጥል ይችላል።

### የሙከራ ጊዜዎች እንዴት ይቋረጣሉ

የሙከራ የአባልነት ጊዜ ሲያልቅ፣ ስርዓቱ የሚከተሉትን ያደርጋል፡

1. ሙሉ የደንበበ ክፍያ መጠን ያለው ክፍያ መጠየቂያ ይፈጥራል።
2. የአባልነት ሁኔታን ከ`trialing` ወደ `on-hold` ይለውጣል።
3. የቅድሚያ ክፍያ ማሳወቂያ ኢሜይል ለደንበኛው ይልካል።

ይህ ሂደት እንደ መደበኛው የጊዜ ማብቂያ ፍተሻ በተመሳሳይ ሰዓታዊ መርሃግብር ይሰራል፣ ነገር ግን **ለበራስ-የማይደሰቱ የአባልነቶች ብቻ**። ለበራስ-የሚደሰቱ ሙከራዎች፣ የክፍያ መግቢያው ከሙከራ ወደ ክፍያ የደንበበ መሠረተ-ገጽ ሽግግርን ይቆጣጠራል።

## የፊት-መጨት መዳረሻን መዝጋት

በነባሪነት፣ የአባልነት ሁኔታው ሲያልቅ ወይም ሲቆም፣ **የwp-admin ዳሽቦርድ ብቻ ነው የሚገደደው**። የጣቢያው የህዝብ ፊት-መጨት ጎብኚዎች ተደራሽ ሆኖ ይቀራል። የህዝብ መዳረሻን ለመዝጋትም፣ **የፊት-መጨት መዳረሻን መዝጋት (Block Frontend Access)** ቅንብሩን ማብራት አለብዎት።

### ቅንብሩን ማዋቀር

ወደ **Ultimate Multisite > Settings > Memberships** ይሂዱ እና **Block Frontend Access** ን ያብሩ።

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

የአባልነት ቅንብሮች ሙሉ እይታ እነሆ፡

![Membership settings full page](/img/config/settings-membership-full.png)

ሶስት ተዛማጅ ቅንብሮች ይህንን ባህሪ ይቆጣጠራሉ፡

| ቅንብር (Setting) | መግለጫ (Description) | ነባሪ (Default) |
|---|---|---|
| **Block Frontend Access** | ዋና መቀያየር (Master toggle)። ሲበራ፣ የአባልነት ሁኔታው ከንቁ ካልሆነ የኔትወርክ ጣቢያዎችን የህዝብ ፊት-መጨት ይዘጋዋል። | Off |
| **Frontend Block Grace Period** | የአባልነት ሁኔታው ከንቁነት በኋላ ከመዘጋቱ በፊት የሚጠበቅባቸው ቀናት ብዛት። ወዲያውኑ ለመዝጋት `0` ያዘጋጁ። | 0 |
| **Frontend Block Page** | የጣቢያው ዋና ገጽ ላይ ጎብኚዎች ወደሚመራበት ገጽ። ካልተቀመጠ፣ ጎብኚዎች "Site not available" የሚል አጠቃላይ መልዕክት ያያሉ። | None |

### ጣቢያው ሲዘጋ ጎብኚዎች ምን ያያሉ

የፊት-መጨት መዳረሻ ሲዘጋ፣ የጣቢያው ጎብኚዎች የሚከተሉትን ያያሉ፡

1. **ወደሚመራበት ገጽ ይላካሉ**፡ በ**Frontend Block Page** ውስጥ ካረጋገጡት ገጽ (ከተዋቀረ)፣ ወይም
2. **የነባሪ መልዕክት ያያሉ**፡ "This site is not available at the moment." የሚል መልዕክት እና ለየጣቢያው አስተዳዳሪ የግባ (login) ገጽ ሊንክ።

የጣቢያ አስተዳዳሪዎች አሁንም መግባት ይችላሉ -- የግባ ገጽ በፍፁም አይዘጋም።

### ምን ይዘጋል እና መቼ

የመዘጋት ባህሪው የሚወሰነው በአባልነት ሁኔታው ላይ ነው፡

| የአባልነት ሁኔታ (Membership Status) | የፊት-መጨት መዘጋት? | የመታገስ ጊዜ ይሠራጣል? |
|---|---|---|
| Active | አይ | -- |
| Trialing | **አይ** (ከዚህ በታች ያለውን ማሳሰቢያ ይመልከቱ) | -- |
| On Hold | እንደ ንቁ ተደርጎ ይቆጠራል -- አይዘጋም | -- |
| Expired | **አዎ**፣ የBlock Frontend Access በርቷል ከሆነ | አዎ |
| Cancelled | **አዎ**፣ ሁልጊዜ (ቅንብሩ ምንም ይሁን ምን) | **አይ** -- ወዲያውኑ ይዘጋል |
| Pending | በአባልነት ፍተሻ አይዘጋም | -- |

:::warning የሙከራ የአባልነቶች አይዘጋም
የሙከራ ጊዜ ቢያልቅም፣ `trialing` ሁኔታ ያለው የአባልነት ሁኔታ በፊት-መጨት ላይ **አይዘጋም**። ሙከራው መጀመሪያ ወደ ሌላ ሁኔታ (በተለምዶ በcron job በኩል `on-hold`፣ ከዚያም ክፍያ ባልተከፈለም `expired`) መሸጋገር አለበት። ሙከራ የአባልነቶች ካዩ እና አልተሸጋገሩም ብለው የሚያስቡ ከሆነ፣ ከዚህ በታች ያለውን የችግር መፈተሽ ክፍል ይመልከቱ።
:::

:::note የተሰረዙ የአባልነቶች የመታገስ ጊዜን አልፎበታል
የተሰረዙ የአባልነቶች፣ የBlock Frontend Access በርቷል ወይስ ባይሆን፣ ጊዜ ያለፈበት ቀን ካለፈ በኋላ ሁልጊዜ ይዘጋሉ። የFrontend Block Grace Period ለተሰረዙ የአባልነቶች አይሠራም።
:::

## ችግር መፈተሽ፡ ጊዜ ካለፈ በኋላ ጣቢያዎች ተደራሽ መሆን

የአባልነት ሁኔታው ካለፈ በኋላ ጣቢያዎች በህዝብ ተደራሽ ከሆኑ፣ እነዚህን ፍተሻዎች በቅደም ተከተል ይፈጽሙ፡

### 1. የBlock Frontend Access ቅንብር በርቷል መሆኑን ያረጋግጡ

ወደ **Ultimate Multisite > Settings > Memberships** ይሂዱ እና **Block Frontend Access** መቀያየር በርቷል መሆኑን ያረጋግጡ። ይህ ቅንብር **በነባሪነት ተပልቋል**፣ ይህም የአባልነት ሁኔታው ሲያልቅ የwp-admin ብቻ የሚገደድ መሆኑን ያመለክታል።

### 2. የFrontend Block Grace Periodን ይፈትሹ

በተመሳሳይ ቅንብሮች ገጽ ላይ፣ **Frontend Block Grace Period**ን እሴት ይፈትሹ። ለምሳሌ፣ ይህ 7 ቀናት ከሆነ፣ የአባልነት ሁኔታው ቀድሞውኑ `expired` ቢሆንም፣ የፊት-መጨት መዘጋት እስከ 7 ቀናት ድረስ አይሆንም።

ከአባልነት ሁኔታው ከንቁነት በኋላ ወዲያውኑ መዘጋት ከፈለጉ ይህንን ወደ `0` ያዘጋጁ።

### 3. የአባልነት ሁኔታው በእርግጥ እንደተቀየረ ያረጋግጡ

ወደ **Ultimate Multisite > Memberships** ይሂዱ እና የተጎዳውን የአባልነት ሁኔታ ሁኔታ ይፈትሹ። ጊዜ ያለፈበት ቀን አልፎም አሁንም `active` ከሆነ፣ ሁኔታው ሽግግር አልተፈጸመም። የተለመዱ ምክንያቶች፡

- **የአባልነቱ በራስ-የሚደሰት ነው**: በአባልነት ማረሚያ ገጽ ላይ ያለውን `auto_renew` መስክ ይፈትሹ። በራስ-የመደሰት ከሆነ፣ የጊዜ ማብቂያ cron ይህንን የአባልነት ሁኔታ ዘልቃል -- የክፍያ መግቢያው ውድቀቱን ሪፖርት ሊያደርግበት ይተማመናል። የደንበበ መሠረተ-ገጽዎን (Stripe, PayPal) ዳሽቦርድ ገጽ በመፈተሽ የደንበበ መሠረተ-ገጽ ሁኔታ ከUltimate Multisite የሚያሳየው ጋር መጣጣሙን ያረጋግጡ።

- **የcron job አልሰራም**: ቀጣዩን እርምጃ ይመልከቱ።

### 4. Action Scheduler እየሰራ መሆኑን ያረጋግጡ

Ultimate Multisite ለcron jobs-ዎቹ Action Schedulerን ይጠቀማል። ወደ ኔትወርክ አድሚን ውስጥ **Tools > Scheduled Actions** ይሂዱ እና የሚከተሉትን ይፈልጉ፡

- **`wu_membership_check`** -- ይህ በየሰዓቱ የሚሰራ ተደጋጋሚ ተግባር (recurring action) መሆን አለበት። ካልታየ፣ የአባልነት ፍተሻዎች መርሃግብር አልተቀመሩም።
- **`wu_async_mark_membership_as_expired`** -- እነዚህ የተወሰኑ የአባልነቶችን እንደ ጊዜ ያለፈበት ምልክት የሚያደርጉ ግለሰብ ተግባራት ናቸው። እዚህ የከበደ ተግባራት (failed actions) ካዩ፣ ለምን እንደሆነ የሚያብራሩ ስህተት መልዕክቶችን ሊይዙ ይችላሉ።

የተጣበቁ ወይም የከበደ ተግባራት ካዩ፣ የAction Scheduler ችግር ሊኖርዎት ይችላል። የተለመዱ ምክንያቶች፡

- `wp-config.php` ውስጥ **`DISABLE_WP_CRON` ወደ `true`** መቅረጽ ያለ የስርዓት ደረጃ cron ምትክ (system-level cron replacement)
- **ዝቅተኛ የጣቢያ ትራፊክ** -- WP-Cron የሚሰራው አንድ ሰው ጣቢያውን ሲጎበኝ ብቻ ነው።

የታማኝነት cron አፈፃፀም ለማረጋገጥ፣ የስርዓት cron job ያዘጋጁ፡

```bash
# በየ5 ደቂቃው በwget እንዲሰራ
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# ወይም በWP-CLI በኩል
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. የክፍያ መግቢያ Webhook ችግሮችን ይፈትሹ (በራስ-የሚደሰቱ የአባልነቶች)

የአባልነት ሁኔታው በራስ-የሚደሰት ከሆነ እና የክፍያ መግቢያው ተሰርዟል ወይም ተቋርጧል፣ ነገር ግን Ultimate Multisite አሁንም እንደ `active` የሚያሳየው ከሆነ፡

- **Stripe**: ወደ Stripe Dashboard > Customers ይሂዱ እና የደንበበ መሠረተ-ገጽ ሁኔታን ይፈትሹ። ከዚያም በDevelopers > Webhooks ስር የwebhook endpoint ን መብራት ያረጋግጡ። የመድረሻ አድራሻው ወደ ጣቢያዎ መ 指ራ እና ስኬታማ አቅርቦቶችን ማሳየት አለበት።
- **PayPal**: በPayPal የንግድ መለያዎ ውስጥ የደንበበ መሠረተ-ገጽ ሁኔታን ይፈትሹ እና IPN/webhook አቅርቦትን ያረጋግጡ።

የክፍያ መግቢያው የደንበበ መሠረተ-ገጽ እንደተሰረዘ የሚያሳይ ነገር ግን Ultimate Multisite ባይሳየው ከሆነ፣ የwebhook ማሳወቂያ ጠፍቷል ሊሆን ይችላል። በአባልነት ሁኔታው ላይ በ**Ultimate Multisite > Memberships > [Edit Membership]** ላይ በእጅ ሊቀይሩት ይችላሉ።

### 6. የጊዜ ማብቂያ የመታገስ ጊዜን ይፈትሹ (Cron ደረጃ)

የcron ፍተሻ የራሱ የመታገስ ጊዜ አለው (ነባሪ፡ 3 ቀናት) የአባልነት ሁኔታን እንደ ጊዜ ያለፈበት ከመመደቡ በፊት። ይህ ከየፊት-መጨት መዘጋት የመታገስ ጊዜ የተለየ ነው። ጣቢያው ከመዘጋቱ በፊት ያለው አጠቃላይ ጊዜ ሊሆን ይችላል፡

**የጊዜ ማብቂያ የመታገስ ጊዜ (3 ቀናት)** + **የፊት-መጨት መዘጋት የመታገስ ጊዜ (ቅንብራችን)** = አጠቃላይ መዘግየት

ለምሳሌ፣ በነባሪ ቅንብሮች እና በ7-ቀን የፊት-መጨት የመታገስ ጊዜ፣ ጣቢያው በእውነቱ ከመዘጋቱ በፊት እስከ 10 ቀናት ሊወስድ ይችላል።

### 7. የአባልነት ሁኔታን በእጅ ማብቃት

cron ዑደቱን ሳይጠብቁ ጣቢያውን ወዲያውኑ መዝጋት ከፈለጉ፣ የአባልነት ሁኔታን በእጅ መቀየር ይችላሉ፡

1. ወደ **Ultimate Multisite > Memberships** ይሂዱ
2. የተጎዳውን የአባልነት ሁኔታ ይጫኑ
3. ሁኔታውን ወደ **Expired** ወይም **Cancelled** ይቀይሩ
4. **Save** የሚለውን ይጫኑ

የፊት-መጨት መዘጋት በሚቀጥለው የገጽ ጭነት ላይ ይከሰታል (ለጊዜ ያለፈ የአባልነቶች የFrontend Block Grace Periodን፣ ወይም ለተሰረዙ የአባልነቶች ወዲያውኑ ባለው ሁኔታ ተገዢ)።

## ማጠቃለያ

ከጊዜ ማብቂያ ቀን እስከ ጣቢያ መዘጋት ያለው ሙሉ የጊዜ መስመር፡

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

ለተሰረዙ የአባልነቶች፣ ጉዞው አጭር ነው፡

```text
  Membership cancelled
       |
       v
  date_expiration passes (no grace period)
       |
       v
  Site frontend is blocked immediately
```

## ለገንቢዎች ማጣቀሻ (Developer Reference)

የጊዜ ማብቂያ እና የመዘጋት ባህሪን በብጁ ለማድረግ የሚፈቀዱት የሚከተሉት hooks እና filters ናቸው፡

| Hook/Filter | መግለጫ (Description) |
|---|---|
| `wu_membership_grace_period_days` | የአባልነት ሁኔታን እንደ ጊዜ ያለፈበት ከመመደቡ በፊት የመታገስ ቀናት ብዛት ለማጣራት (ነባሪ፡ 3) |
| `wu_schedule_membership_check_interval` | የአባልነት ፍተሻዎች መካከል ያለውን ክፍተት ለማጣራት (ነባሪ፡ 1 ሰዓት) |
| `wu_membership_renewal_days_before_expiring` | የቅድሚያ ክፍያ ለመስጠት የሚያስፈልገው ጊዜ (በቀድሞው) |
| `wp_query` | |
