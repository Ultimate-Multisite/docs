---
title: የስርዓት ኢሜይሎችን ማስተዳደር
sidebar_position: 13
_i18n_hash: 6dc6899342f363987fd7307df698a5bb
---
# የስርዓት ኢሜይሎችን ማስተዳደር

Ultimate Multisite እንደ አዲስ መመዝገቢያ ማረጋገጫዎች፣ የክፍያ ደረሰኞች እና የአባልነት ለውጦች ባሉ ክስተቶች ላይ የተለያዩ የስርዓት ኢሜይሎችን ይልካል። እነዚህን የኢሜይል አብነጣዎች (templates) የብራንድዎ ስሜት እንዲያንጸባርቁ ማበጀት ይችላሉ።

## የስርዓት ኢሜይሎችን መመልከት {#viewing-system-emails}

የኢሜይል ተዛማጅ ቅንብሮችን ለማየት ወደ **Ultimate Multisite → Settings** ይሂዱ እና በ**Emails** ታብ ላይ ይጫኑ።

![Settings - Emails tab](/img/admin/settings-emails.png)

ከዚያም፣ ሁሉንም የኢሜይል አብነጣዎች (templates) ለማየት ወደ **System Emails** ገጽ መድረስ ይችላሉ።

![System Emails list](/img/admin/system-emails-list.png)

በተጨማሪም፣ በስርዓት የኢሜይል አርታኢ (system email editor) በመጠቀም 개የ የኢሜይል አብነጣዎችን ማርትዕ ይችላሉ፦

![System email editor](/img/admin/system-email-editor.png)

## አዳዲስ የኢሜይል አብነጣዎችን ማስገባት {#importing-new-email-templates}

አዳዲስ የUltimate Multisite ስሪቶች እና ተጨማሪዎች (add-ons) አዳዲስ የኢሜይል አብነጣዎችን መመዝገብ ይችላሉ። ግጭቶችን (conflicts) ለመከላከል፣ አዳዲስ አብነጣዎች በራስ-ሰር አይጨመሩም — በእጅ ማስገባት አለብዎት።

አዳዲስ የኢሜይል አብነጣዎችን ለማስገባት፦

1. ወደ **System Emails** ገጽ ይሂዱ
2. በገጹ ላይ ካለው በላይ ባለው **Reset & Import** ቁልፍ ላይ ይጫኑ
3. የሚገኙ አብነጣዎችን ለማየት የ**Import Emails** አማራጭን ያብሩ (toggle)
4. ማስገባት የሚፈልጓቸውን አብነጣዎች ይምረጡ እና ያረጋግጡ (confirm)

## የኢሜይል አብነጣዎችን ዳግም ማስጀመር (Resetting) {#resetting-email-templates}

የኢሜይል አብነጣን በራስዎ ከበጁ (customized) እና ወደ መጀመሪያው (default) ይዘት መመለስ ከፈለጉ፣ ሁለት አማራጮች አሉ።

1. **ማጥፋት እና እንደገና ማስገባት (Delete and re-import)** — የስርዓት ኢሜይሉን በማጥፋት እና እንደገና በማስገባት (ይህም የላከበትን መረጃ (send metrics) ያጠፋል)።
2. **በመሳሪያው አማካይነት ዳግም ማስጀመር (Reset via the tool)** — የ**Reset & Import** መሳሪያውን ይጠቀሙ፣ የ**Reset** አማራጩን ያብሩ (toggle) እና ዳግም ማስጀመር የሚፈልጓቸውን ኢሜይሎች ይምረጡ።

የReset አማራጩ ይመረጣል ምክንያቱም መጀመሪያውን ይዘት ሲመልስ የላከበትን መረጃ (send metrics) እና ሌሎች ሜታዳታዎችን (metadata) ስለሚጠብቅ ነው።
