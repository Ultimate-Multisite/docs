---
title: የሉዓላዊነት ማዛወሪያ ማረጋገጫ
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# የሉዓላዊነት ማዛወር ማረጋገጫ (Sovereign Migration Verification)

Ultimate Multisite: Multi-Tenancy 1.2.0 ለሉዓላዊ ተከራዮች (sovereign tenants) ማዛወሪያ የሚሆኑ WP-CLI ማረጋገጫ ትዕዛዞችን ያካትታል። አንድ ተከራይ መዛወር፣ SSO ጉብኝት ወይም የተገለለ ጭነት (isolated install) እንደተጠበቀ ካልሰራ እነዚህን ትዕዛዞች ይጠቀሙ።

## ሊመጡ የሚችሉ ትዕዛዞች

ከኔትወርክ WordPress ጭነት ላይ ማረጋገጫ ያድርጉ፦

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

የሚዛወረው ተከራይ Site ID (site-id) ይጠቀሙ። የመጀመሪያው ትዕዛዝ ተከራዩ ከአሁን በኋላ በኔትወርክ በኩል ባለው መረጃ ላይ ጥገኛ እንዳልሆነ ያረጋግጣል። ሁለተኛው ትዕዛዝ የሉዓላዊ ፑሽ (sovereign push) ሥራዎች መከናወን እና መፈጸም እንደሚችሉ ያረጋግጣል።

## የተለመዱ ውድቀቶች (Common failures)

### የዳታቤዝ ስጦታዎች (Database grants) ከ호ስት ጋር አይዛመዱም

ማረጋገጫው ስጦታዎችን (grant) ወይም የwriter-user ስጦታዎችን (writer-user failures) ካሳየ፣ የተዋቀረው የዳታቤዝ 호ስት (host) ይፈትሹ። `localhost`፣ `127.0.0.1` እና የኮንቴነር አገልግሎት ስም የተለያዩ MySQL ስጦታዎች ናቸው። ተከራዩን 호ስት ትስስር (host binding) ወይም የዳታቤዝ ስጦታዎችን ካሻሻሉ በኋላ ማረጋገጫውን እንደገና ያሂዱ።

### Bedrock ወይም የአካባቢ ጭነቶች መገናኘት አይችሉም

Bedrock እና የአካባቢ ሶኬት ጭነቶች ዳታቤዙን `localhost` ብሎ ሊያሳዩ ይችላሉ፣ ነገር ግን የሩንታ (runtime) አድራሻውን በሌላ መንገድ ይይዛል። ስሪት 1.2.0 ተመሳሳይ ማሽን ላይ ያሉትን 호ስት ሰንጠረዦች ያመቻቻቸዋል፣ ነገር ግን የተለየ 호ስት ቅድመ ሁኔታዎች (custom host overrides) ከዳታቤዝ ስጦታዎች ጋር ሊጋጩ ይችላሉ።

### የአሲንክ ፑሽ መደብ (Async push queue) አይፈስም

`verify-sovereign-push` ካልተጠናቀቀ፣ Action Scheduler ወይም የተዋቀረው አሲንክ ሩነርን ይፈትሹ። ሥራዎች ደህንነታቸው ለእንደገና ለመሞከር ወይም ለማስወገድ (discard) አስተማማኝ መሆናቸውን ከ확ረን በኋላ ብቻ ውድቀቶችን ያጥፉ።

### የተከራይ ተጠቃሚ ብዛት የተሳሳተ ነው

ማዛወሪያው ለሉዓላዊ ተከራዩ ተጠቃሚዎችን ማዘጋጀት አለበት። የሚጠበቀው ጭነት (install) ተጠቃሚ ከሌለ፣ SSOን እንደገና ከመሞከርዎ በፊት የተጠቃሚ የማዘጋጃውን እርምጃ ይድኑ።

### SSO ጉብኝት ተቀባይነት የለውም

ለመደብ (tenant) መደበኛ አውታረ መረብ መግቢያ (autologin) የሚያስፈልገው የሱቅ ስም (domain), ኦሪጅን ፒን (origin pin), የቶከን ዓላማ (token purpose), ኖንስ (nonce) እና ጊዜ ማብቂያ (expiry) በትክክል እንዲመሳሰሉ ነው። የመደቡ URL ትክክለኛ መሆኑን ያረጋግጡ እና SSO ጉብኝትን ከፈጠሩ በኋላ በቅርቡ መግቢያ የሚሞከር መሆኑን ያረጋግጡ።

## ሲያደርጉ እንደገና መሞከር (When to retry)

ከማንኛውም የኢንፍራስትራክቸር ለውጥ በኋላ ማረጋገጫውን ይሞክሩ። ሁሉም የማረጋገጫ ፍተሻዎች ካለፉ ድረስ የምርት (production) ትራፊክን መቀየር፣ የመረጃ ምንጭን መሰረዝ ወይም የማስመጫ መረጃዎችን ማስወገድ አይቻልም።
