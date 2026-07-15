---
title: ፕልጊን ገንቢ እና የሙከራ አካባቢ
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder እና Sandbox

Gratis AI Agent v1.5.0 በ**Plugin Builder & Sandbox System** አዲስ ስሪት ቀርቧል። ይህ ሲስተም AI ረዳት በኔትዎርክዎ ላይ የWordPress plugins እንዲፈጥር፣ እንዲያነቃቃ እና እንዲያስተዳድር ያስችላል። ይህ ሁሉ በደህንነት የተጠበቀ እና የተገለለ (sandbox) አካባቢ ውስጥ ይከናወናል።

## አጠቃላይ እይታ (Overview) {#overview}

Plugin Builder የAI ረዳት በተፈጥሮ ቋንቋ ጥያቄዎች ምላሽ በመስጠት የራሱ የWordPress plugins እንዲጽፍ ያስችለዋል። የተፈጠሩት plugins በलाइቭ (live) የጣቢያ አሠራር ላይ ተጽዕኖ ከመሳደርዎ በፊት በsandbox layer ውስጥ ተረጋግጠው፣ ተቀምጠው እና ተንቀሳቅሰው ይሆናሉ።

የሚጠቀሙባቸው አጋጣሚዎች የሚከተሉትን ያካትታሉ፦

- ያለ የdeveloper ጣልቃገብነት ቀላል የጥቅም plugins መፍጠር።
- የWordPress hooks ወይም custom post types የሚያስፈልጋቸው ባህሪያት ፕሮቶታይፕ ማድረግ።
- ለበች ስራዎች (batch operations) አጭር ጊዜ የሚቆዩ አውቶሜሽን ስክሪፕቶች መፍጠር።

## በAI አማካኝነት Plugin መፍጠር (Generating a Plugin via AI) {#generating-a-plugin-via-ai}

plugin ለመፍጠር፣ የGratis AI Agent የቻት በይነገጽ ይክፈቱ እና ምን እንደሚያስፈልግዎ ይግለጹ። ለምሳሌ፦

> "በdashboard ላይ የcustom admin notice የሚያክል plugin ፍጠር።"

AI የሚከተሉትን ያደርጋል፦

1. መዋቅራዊ የኮድ ትውልድ (structured code generation) በመጠቀም የplugin PHP ኮድ ያመጣል።
2. ውጤቱን ለሲንታክስ ስህተቶች እና ለአደገኛ አብይ ዘይቤዎች (unsafe patterns) ያረጋግጣል።
3. የተፈጠረውን plugin ወደ sandbox store ውስጥ ያስቀምጣል።
4. የplugin slug እና **Activate in Sandbox** የሚል አዝራር ያለው ማረጋገጫ ይመልሳል።

ከማንቃትዎ በፊት በተመሳሳይ የውይይት ጽሑፍ (conversation thread) በመከታተል ውጤቱን ማሻሻል ይችላሉ።

## በSandbox ማነቃቃት (Sandbox Activation) {#sandbox-activation}

በsandbox ውስጥ የተፈጠረ plugin ማነቃቃት፣ በलाइቭ ኔትዎርክ ላይ ማነቃቃት ከመሆኑ የተለየ ነው። sandbox፦

- pluginን በተገለለ የWordPress አካባቢ (wp-env) ያሰራዋል።
- ማንኛውንም PHP ስህተቶች፣ ማስጠንቀቂያዎች (warnings) ወይም hook ግጭቶችን ይይዛል።
- የማንቃት ውጤቱን በቻት በይነገጽ ውስጥ እንደገና ሪፖርት ያደርጋል።

plugin በsandbox ውስጥ ለማንቃት፣ በAI የቻት ምላሽ ላይ ያለውን **Activate in Sandbox** አዝራር ይጫኑ፣ ወይም የሚከተለውን slash command ይጠቀሙ፦

```
/activate-plugin <plugin-slug>
```

የሁኔታ መልዕክት (status message) ማነቃቃቱ ስኬታማ እንደሆነ ወይም እንደተሳካ አለመሆኑን ያረጋግጣል። ስህተት ከተፈጠረ፣ የስህተት መዝገብ (error log) በቻት ጽሑፍ ውስጥ ይታያል።

## የተፈጠሩ Pluginsን ማስተዳደር (Managing Generated Plugins) {#managing-generated-plugins}

የተፈጠሩ plugins በ**Gratis AI Agent → Plugin Builder → Manage Plugins** ውስጥ ተዘርዝረዋል። ከዚህ ስክሪን ላይ የሚከተሉትን ማድረግ ይችላሉ፦

| ተግባር (Action) | መግለጫ (Description) |
|---|---|
| **View source** | ሙሉውን የplugin PHP ኮድ ይገምግሙ። |
| **Re-activate in sandbox** | የsandbox ማነቃቃት ፍተሻን እንደገና ያከናውናል። |
| **Install on network** | pluginን ወደ live ኔትዎርክ ይልቀቅ (በእጅ ማረጋገጫ ያስፈልጋል)። |
| **Update** | አዲሱን ስሪት በAI አማካኝነት በመስጠት፣ ያለውን ኮድ ይተካዋል። |
| **Delete** | pluginን ከsandbox store ያስወግዳል። በመጀመሪያ ከሁሉም ጣቢያዎች ያነቅቃዋል። |

:::warning
**Install on network** የተፈጠረውን plugin ወደ live WordPress multisiteዎ ይልቀቅ። ከመቀጠልዎ በፊት የplugin ኮድ ይገምግሙ። Gratis AI Agent የlive installationን ከመፈጸሙ በፊት ማረጋገጫ ይጠይቃል።
:::

## የተፈጠረ Plugin በኔትዎርክ ላይ መጫን (Installing a Generated Plugin on the Network) {#installing-a-generated-plugin-on-the-network}

በsandbox ውስጥ የሰፈረ plugin ሲረካ፣ በlive ኔትዎርክ ላይ መጫን ይችላሉ፦

1. ወደ **Gratis AI Agent → Plugin Builder → Manage Plugins** ይሂዱ።
2. ሊልቀቁት የሚፈልጉትን plugin አጠገብ **Install on Network** የሚለውን ይጫኑ።
3. የውይይት ሳጥኑን (dialog) ያረጋግጡ። plugin ወደ `wp-content/plugins/` ይጫናል እና በኔትዎርክ ደረጃ ይንቀሳቀሳል።

በተለዋዋጭነት፣ በቻት በይነገጽ ውስጥ ያለውን slash command መጠቀም ይችላሉ፦

```
/install-plugin <plugin-slug>
```

## የPlugin ዝመናዎች (Plugin Updates) {#plugin-updates}

የተፈጠረ plugin ለማዘመን፣ ለAI ረዳት በአዲስ ውይይት ውስጥ ለውጡን ይግለጹ፦

> "dashboard-notice pluginን አድሚን ብቻ የሚያዩት notice እንዲሆን አዘምነው።"

AI አዲስ ስሪት ይፈጥራል፣ ይህም በአሁኑ ስሪት አጠገብ በsandbox ውስጥ ይታያል። ዝመናው ከመተግበሩ በፊት የለውጡ ልዩነትን (diff) ይገምግሙና ያረጋግጡ።

## HookScanner ውህደት (HookScanner Integration) {#hookscanner-integration}

Plugin Builder እያንዳንዱ የተፈጠረ plugin የሰበሰባቸውን hooks እና filters ለመተንተን የተዋሃደ **HookScanner** ይጠቀማል። የHookScanner ውጤት በቻት ምላሽ ውስጥ ይታያል እና የሚከተሉትን ያካትታል፦

- የተመዘገቡ action hooks (`add_action` ጥሪዎች)።
- የተመዘገቡ filter hooks (`add_filter` ጥሪዎች)።
- በplugin ጥገኝነቶች ውስጥ የተገኙ ማንኛቸውም hooks (የ`vendor/` እና `node_modules/` ዳይሬክቶሪዎችን ይዘልቃሉ)።

ይህ pluginን ከመንቀሳቀስዎ በፊት ባህሪውን እንዲረዱ ይረዳዎታል።

## የደህንነት ግምት ውስጥ ማስገባት (Security Considerations) {#security-considerations}

- የተፈጠሩ plugins ከበሰባሪ (manually installed) plugins በተናጥል ይቀመጣሉ፣ እና በኔትዎርክ ላይ በግልጽ ካልጫኑ በስተቀር በstandard WordPress plugin management screen አይገኙም።
- sandbox ሲጠቀሙ plugin ፋይሎችን ሲጽፉ የዳይሬክቶሪ ጉዞን (directory traversal) ለመከላከል የpath validation ይጠቀማል።
- አደገኛ የሆኑ ተግባር ጥሪዎች (ለምሳሌ፣ `eval`, `exec`, `system`) ያላቸው plugins በvalidation ወቅት ምልክት ይደረግባቸዋል እና አይንቀሳቀሱም።
