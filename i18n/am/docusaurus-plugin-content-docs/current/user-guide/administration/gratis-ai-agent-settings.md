---
title: የነጻ AI Agent ቅንብሮች
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# የGratis AI Agent ቅንብሮች

በGratis AI Agent ውስጥ ያለው **Settings → Advanced** ስክሪን፣ በv1.5.0 ላይ የተጨመሩ የኋላ-መጨረሻ (backend) ውህደቶችን የሚያስቀምጥ የአስተዳዳሪ ደረጃ ማዋቀርን ይሰጣል። ይህ ገጽ የ**Feedback Endpoint** መስኮችን እና የሚጠበቀውን ቅርጸት ይገልጻል።

## ቅንብሮችን መድረስ

1. በWordPress admin ውስጥ፣ ወደ **Gratis AI Agent → Settings** ይሂዱ።
2. **Advanced** ትርን ይጫኑ።

## የFeedback Endpoint ማዋቀር

የfeedback endpoint (የግብረመልስ መድረሻ) ተጠቃሚው በሰዋሰዋዊ ምልክት (thumbs-down button)፣ በራስ-የሚመጣው የprompt ባነር፣ ወይም በ`/report-issue` ትዕዛዝ አማካኝነት feedback ሲልከው የPOST ጥያቄዎችን ይቀበላል።

| መስክ (Field) | መግለጫ (Description) |
|---|---|
| **Feedback Endpoint URL** | እንደ JSON አካል የHTTP POST ጥያቄዎችን የሚቀበል የfeedback ማስረከቢያ URL። |
| **Feedback API Key** | በእያንዳንዱ የfeedback ጥያቄ በ`Authorization` header ውስጥ የሚላክ bearer token። የendpointዎ ማረጋገጫ (authentication) የማይፈልግ ከሆነ ባዶ ይተው። |

### የሚጠበቀው የJSON Payload

የfeedback endpointዎ ቢያንስ የሚከተሉትን መስኮች የያዘ JSON አካል መቀበል አለበት፦

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

በውይይቱ አውድ (conversation context) ላይ በመመስረት ተጨማሪ መስኮች በpayload ውስጥ ሊገኙ ይችላሉ።

### `triage_category` እሴቶች

የAI triage layer payloadን ወደፊት ከመላከቱ በፊት ለ`triage_category` የሚከተሉትን እሴቶች ይመድባል።

| እሴት (Value) | ትርጉም (Meaning) |
|---|---|
| `factual_error` | ረዳቱ የተሳሳተ የእውነታ መረጃ ሰጥቷል። |
| `unhelpful_answer` | ምላሹ በቴክኒካዊ መልኩ ትክክል ቢሆንም ጠቃሚ አልነበረም። |
| `inappropriate_content` | ምላሹ ተጠቃሚዎች ላያዩት የሚገባ ይዘት ይዟል። |
| `other` | የfeedbackው ምንም የታወቀ ምድብ ጋር አልተዛመደም። |

### ማረጋገጫ (Authentication)

endpointዎ ማረጋገጫ የሚያስፈልገው ከሆነ፣ **Feedback API Key** መስኩን በbearer tokenዎ ላይ ያዘጋጁ። ኤጀንቱ የሚልከው፦

```
Authorization: Bearer <your-api-key>
```

**Feedback API Key** መስኩ ባዶ ከሆነ፣ ምንም `Authorization` header አይላክም።

### የFeedback ስብስብን ማጥፋት (Disabling Feedback Collection)

**Feedback Endpoint URL** እና **Feedback API Key** ሁለቱንም መስኮች ባዶ ይተው። ሰዋሰዋዊ ምልክት (thumbs-down button) እና የfeedback UI ለተጠቃሚዎች ይታያሉ፣ ነገር ግን ማስረከቢያዎች ወደ ውጫዊ አገልግሎት አይላኩም።

## Brave Search API Key

በ**Advanced** ትር ላይ፣ **Brave Search API Key** መስኩ የ[Internet Search](../configuration/internet-search) ችሎታን ያን성화ዋል።

| መስክ (Field) | መግለጫ (Description) |
|---|---|
| **Brave Search API Key** | ከBrave Search developer dashboardዎ የተገኘው API key። በAI ረዳት ውስጥ የኢንተርኔት ፍለጋን ለማን성화 የሚያስፈልግ። |

የመስኩ ስም (field label) የBrave Search API መመዝገቢያ ገጽን የሚያገናኝ ሊጫን የሚችል ሊንክ ይዟል። የኢንተርኔት ፍለጋን ለማጥፋት ባዶ ይተው።

ስለዚህ ባህሪ የተጠቃሚዎችን መመሪያ ለማግኘት [Internet Search](../configuration/internet-search) ይመልከቱ።

## የባህሪ ባንዲራዎች (Feature Flags)

በv1.9.0 ላይ የተጨመረው **Settings → Feature Flags** ትር አማራጭ ተግባራትን ለማስቀመጥ የtoggle switches ይሰጣል። እያንዳንዱ ባንዲራ በሁሉም ቦታ (network-wide) በየራሱ ሁኔታ ነው፤ በአሁኑ ጊዜ በየጣቢያው (per-site) መሻር የለም።

### የFeature Flags መድረስ

1. በWordPress admin ውስጥ፣ ወደ **Gratis AI Agent → Settings** ይሂዱ።
2. **Feature Flags** ትርን ይጫኑ።

### የየእውቅና መቆጣጠሪያ ባንዲራዎች (Access Control Flags)

| ባንዲራ (Flag) | መነሻ (Default) | መግለጫ (Description) |
|---|---|---|
| **Restrict to Administrators** | Off | ሲንከባከብ፣ `administrator` ሚና ያላቸው ተጠቃሚዎች ብቻ የAI Agent chat panel መክፈት ይችላሉ። ሌሎች ሚናዎች ግን "የአስተዳዳሪዎን ያነጋግሩ" የሚል መልዕክት ያያሉ። |
| **Restrict to Network Admins** | Off | በmultisite network ላይ ሲንከባከብ፣ Super Admins ብቻ ኤጀንቱን መጠቀም ይችላሉ። የየጣቢያው አስተዳዳሪዎች ይከለከላሉ። ሁለቱም ሲንከባከቡ ከ"Restrict to Administrators" ይበልጣል። |
| **Allow Subscriber Access** | Off | ሲንከባከብ፣ `subscriber` ሚና ያላቸው ተጠቃሚዎች የchat interfaceን መጠቀም ይችላሉ ነገር ግን ለንባብ ብቻ (read-only) የተገደዱ ናቸው (ፖስት መፍጠር ወይም ቅንብሮችን መቀየር የለም)። |
| **Disable for Non-Members** | Off | ከUltimate Multisite የየአባልነት ሁኔታ ጋር ይዋሃዳል። ሲንከባከብ፣ ንቁ የየአባልነት ሁኔታ የሌላቸው ጣቢያዎች የchat መግባትን ያጋልጣል። |

### የብራንዲንግ ባንዲራዎች (Branding Flags)

| ባንዲራ (Flag) | መነሻ (Default) | መግለጫ (Description) |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Off | በchat widget ስር የሚታየውን የብራንዲንግ ምንጭ ማስቀመጫ መስመር ያስወግዳል። ለwhite-label deployments ይመከራል። |
| **Custom Agent Name** | *(blank)* | በchat header እና admin menu ውስጥ ያለውን መደበኛ "Gratis AI Agent" ስም በራስዎ የምርት ስም ይተካዋል። መደበኛውን ለመጠቀም ባዶ ይተው። |
| **Hide Agent Picker** | Off | ሲንከባከብ፣ ተጠቃሚዎች በአምስቱ የተገነቡ ኤጀንቶች መካከል መቀያየር አይችሉም። የአሁኑ ኤጀንት በSettings → General ውስጥ እንደ መደበኛ የተዘጋጀው ይሆናል። |
| **Use Site Icon as Chat Avatar** | Off | በchat widget header ውስጥ ያለውን መደበኛ AI አዶ በWordPress የጣቢያ አዶ (በAppearance → Customize → Site Identity ስር የተዘጋጀ) ይተካዋል። |

### ለውጥዎችን መተግበር (Applying Changes)

ማንኛውንም ባንዲራ ከማስቀየሩ በኋላ **Save Settings** የሚለውን ይጫኑ። ለውጦቹ ወዲያውኑ ይሰራሉ — የcache flush ወይም የplugin reactivation አያስፈልግም።
