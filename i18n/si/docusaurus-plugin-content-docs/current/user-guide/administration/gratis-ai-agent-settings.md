---
title: Gratis AI Agent සැකසුම්
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# නොමිලේ AI ඒජන්ට් සැකසුම්

Gratis AI Agent හි **Settings → Advanced** තිරය මගින් v1.5.0 සමඟ හඳුන්වා දුන් පසුබිම් සම්බන්ධතා සඳහා පරිපාලක මට්ටමේ සැකසුම් ලබා දෙයි. මෙම පිටුවෙන් **Feedback Endpoint** ක්ෂේත්‍ර සහ ඒවායේ අපේක්ෂිත ආකෘතිය ගැන විස්තර කෙරේ.

## සැකසුම් වෙත ප්‍රවේශ වීම

1. WordPress admin එකට ගොස්, **Gratis AI Agent → Settings** වෙත යන්න.
2. **Advanced** ටැබ් එක ක්ලික් කරන්න.

## Feedback Endpoint වින්‍යාසය

AI agent එකෙන් පරිශීලකයෙකු අත්පොළ පහර (thumbs-down button), ස්වයංක්‍රීය ප්‍රේරණ බැනරය (auto-prompt banner) හෝ `/report-issue` විධානය හරහා ප්‍රතිපෝෂණ ඉදිරිපත් කරන සෑම අවස්ථාවකම feedback endpoint එකට POST requests ලැබෙනවා.

| ක්ෂේත්‍රය | විස්තරය |
|---|---|
| **Feedback Endpoint URL** | HTTP POST request සමඟ JSON body එකක් ලෙස ප්‍රතිපෝෂණ ඉදිරිපත් කිරීම් ලබා ගන්නා URL එක. |
| **Feedback API Key** | සෑම feedback request එකකම `Authorization` header තුළ යවන bearer token එක. ඔබේ endpoint එකට 인증 අවශ්‍ය නොවේ නම් එය හිස්ව තබන්න. |

### අපේක්ෂිත JSON Payload

ඔබේ feedback endpoint එක අවම වශයෙන් පහත ක්ෂේත්‍ර සහිත JSON body එකක් පිළිගත යුතුය:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

සංවාද සන්දර්භය අනුව payload එකේ අමතර ක්ෂේත්‍ර තිබිය හැකියි.

### `triage_category` අගයන්

Payload ඉදිරියට යැවීමට පෙර AI triage layer එක විසින් `triage_category` සඳහා පහත අගයන්ගෙන් එකක් පවරනු ලැබේ:

| අගය | අර්ථය |
|---|---|
| `factual_error` | සහායකයා වැරදි තොරතුරු ලබා දී ඇත. |
| `unhelpful_answer` | ප්‍රතිචාරය තාක්ෂණිකව නිවැරදි නමුත් ප්‍රයෝජනවත් නොවේ. |
| `inappropriate_content` | ප්‍රතිචාරයේ පරිශීලකයින්ට පෙන්විය යුතු නොවන අන්තර්ගතයක් ඇතුළත් වේ. |
| `other` | ප්‍රතිපෝෂණය හඳුනාගත් කාණ්ඩයකට ගැලපේ නැත. |

### Authentication

ඔබේ endpoint එකට අනුමැතිය (authentication) අවශ්‍ය නම්, **Feedback API Key** ක්ෂේත්‍රය ඔබේ bearer token එක ලෙස සකසන්න. ඒ අනුව agent එක යවන්නේ මෙලෙසයි:

```
Authorization: Bearer <your-api-key>
```

**Feedback API Key** ක්ෂේත්‍රය හිස් නම්, කිසිදු `Authorization` header එකක් යවනු නොලැබේ.

### Feedback එක නතර කිරීම (Disabling Feedback Collection)

**Feedback Endpoint URL** සහ **Feedback API Key** යන දෙකම හිස් තබා තබන්න. එවිට users ලාට දර්ශනය වන thumbs-down බොත්තම සහ feedback UI එක පෙනෙයි, නමුත් යවන සියලුම submissions පිටත සේවාවකට යවනු නොලැබේ.

## Brave Search API Key

**Advanced** ටැබ් එකේදීත්, **Brave Search API Key** ක්ෂේත්‍රය මගින් [Internet Search](../configuration/internet-search) හැකියාව ක්‍රියාත්මක කරයි.

| Field | Description |
|---|---|
| **Brave Search API Key** | Brave Search developer dashboard එකෙන් ලැබෙන ඔබේ API key එක. AI assistant එකේ internet search සක්‍රීය කිරීමට මෙය අවශ්‍ය වේ. |

මෙම ක්ෂේත්‍රයේ ලේබලයෙහි Brave Search API ගිණුම් පිටුවට යන ක්ලික් කළ හැකි link එකක් ඇතුළත් වේ. internet search අක්‍රිය කිරීමට එය හිස් තබා තබන්න.

මෙම විශේෂාංගය පිළිබඳ end-user documentation සඳහා [Internet Search](../configuration/internet-search) බලන්න.

## Feature Flags (විශේෂාංග ද්වාර)

v1.9.0 දී හඳුන්වා දුන් පරිදි, **Settings → Feature Flags** ටැබය මගින් අභිප්‍රාය සහිත ක්‍රියාකාරීත්වයන් සඳහා toggle switches ලබා දෙයි. සෑම flag එකක්ම network පුරා සක්‍රීය හෝ අක්‍රිය වේ; මේ වන විට site එකකට අනුව වෙනස් කිරීමේ (per-site override) අවස්ථාවක් නොමැත.

### Feature Flags වෙත පිවිසීම

1. WordPress admin එකට ගොස් **Gratis AI Agent → Settings** වෙත යන්න.
2. **Feature Flags** ටැබය ක්ලික් කරන්න.

### Access Control Flags

| Flag | Default | විස්තරය |
|---|---|---|
| **පරිශීලකයන් පරිපාලකව පමණක් සීමා කරන්න** | Off | මෙය ක්‍රියාත්මක කළ විට, `administrator` භූමිකාව ඇති පරිශීලකයින්ට පමණක් AI Agent චැට් පැනලය විවෘත කළ හැකිය. අනෙක් සියලුම භූමිකාවන් සඳහා "ඔබේ පරිපාලකයා සමඟ සම්බන්ධ වන්න" යන පණිවිඩය දිස්වේ. |
| **ජාල පරිපාලකයින්ට පමණක් සීමා කරන්න** | Off | බහු-සයිට් ජාලයක ක්‍රියාත්මක වූ විට, Super Admins ට පමණක් ඇගෙන් භාවිතා කළ හැකිය. තනි වෙබ් අඩවි පරිපාලකයන් අවහිර කර ඇත. දෙකම ක්‍රියාත්මක නම්, මෙය "පරිපාලකව සීමා කරන්න" වලට වඩා ප්‍රමුඛ වේ. |
| **ස subscrber ප්‍රවේශය ඉඩ දෙන්න** | Off | මෙය ක්‍රියාත්මක කළ විට, `subscriber` භූමිකාව ඇති පරිශීලකයින්ට චැට් අතුරුමුහුණත භාවිතා කළ හැකි නමුත් ඔවුන් කියවීමට පමණක් සීමා වේ (පෝස්ට් නිර්මාණය කිරීම හෝ සැකසුම් වෙනස් කිරීම නොමැත). |
| **සාමාජිකයින් සඳහා අක්‍රිය කරන්න** | Off | Ultimate Multisite සාමාජිකත්ව තත්ත්වය සමඟ ඒකාබද්ධ වේ. මෙය ක්‍රියාත්මක කළ විට, ක්‍රියාකාරී සාමාජිකත්වයක් නොමැති වෙබ් අඩවි සඳහා චැට් සැඟවනු ලැබේ. |

### සන්නාමකරණ ද්වාර (Branding Flags)

| Flag | Default | විස්තරය |
|---|---|---|
| **"Gratis AI Agent" පාදක පතුල සැඟවීම** | Off | චැට් වොජිට් එකේ පහළින් පෙන්වන සන්නාමකරණ සඳහන ඉවත් කරයි. සුදු ලේබල් (white-label) ස්ථාපනය සඳහා මෙය නිර්දේශ කෙරේ. |
| **අභිරුචි Agent නාමය** | *(හිස්)* | චැට් හි ශීර්ෂයේ සහ පරිපාලක මෙනුවේ පෙරනිම AI Agent ලේබලය ඔබේ නිෂ්පාදන නාමයෙන් ප්‍රතිස්ථාපනය කරයි. පෙරනිම සැකසුම් භාවිතා කිරීමට හිස්ව තබන්න. |
| **Agent Picker සැඟවීම** | Off | මෙය ක්‍රියාත්මක කළ විට, පරිශීලකයින්ට ගොඩනැගූ AI ආකෘති පහ අතර මාරු විය නොහැක. Settings → General හි පෙරනිම ලෙස වෙන් කර ඇති දේ සමඟ වත්මන් Agent එක ස්ථිර වේ. |
| **සයිට් අයිකනය චැට් ඇවටරය ලෙස භාවිතා කිරීම** | Off | චැට් වොජිට් හි ශීර්ෂයේ පෙරනිම AI අයිකනය WordPress සයිට් අයිකනයෙන් ප්‍රතිස්ථාපනය කරයි (Appearance → Customize → Site Identity යට සැකසූ). |

### වෙනස්කම් යෙදීම

ඕනෑම ද්වාරයක් ක්‍රියාත්මක කිරීමෙන් පසු **Save Settings** ක්ලික් කරන්න. වෙනස්කම් වහාම බලපැවැත්වේ — කැෂ් මකා දැමීමට හෝ ප්ලග්ඉන් නැවත ක්‍රියාත්මක කිරීමට අවශ්‍ය නොවේ.
