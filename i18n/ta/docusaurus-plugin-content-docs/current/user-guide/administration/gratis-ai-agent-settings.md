---
title: இலவச AI ஏஜென்ட் அமைப்புகள்
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Gratis AI Agent அமைப்புகள்

Gratis AI Agent-ல் உள்ள **Settings → Advanced** திரை, v1.5.0-ல் அறிமுகப்படுத்தப்பட்ட பின்-எண்ட் (backend) ஒருங்கிணைப்புகளுக்கான நிர்வாகி-நிலை உள்ளமைவை (administrator-level configuration) வழங்குகிறது. இந்த பக்கம் **Feedback Endpoint** புலங்கள் மற்றும் அவற்றின் எதிர்பார்க்கப்படும் வடிவமைப்பு பற்றி ஆவணப்படுத்துகிறது.

## அமைப்புகளை அணுகுதல்

1. WordPress நிர்வாகப் பகுதியில், **Gratis AI Agent → Settings** என்பதற்குச் செல்லவும்.
2. **Advanced** என்ற தாவலைக் (tab) கிளிக் செய்யவும்.

## Feedback Endpoint உள்ளமைவு

பயனர் 'லைக்' செய்யாத (thumbs-down) பொத்தானை அழுத்துவதன் மூலமாகவோ, ஆட்டோ-ப்ராம்ட் பேனர மூலமாகவோ, அல்லது `/report-issue` கட்டளையின் மூலமாகவோ கருத்துக்களைச் (feedback) சமர்ப்பிக்கும்போதெல்லாம், இந்த ஃபீட்பேக் எண்ட்பாயிண்ட் (feedback endpoint) ஒரு POST கோரிக்கையைப் (POST request) பெறுகிறது.

| புலம் (Field) | விளக்கம் (Description) |
|---|---|
| **Feedback Endpoint URL** | JSON body உடன் HTTP POST கோரிக்கைகளாக ஃபீட்பேக் சமர்ப்பிப்புகளைப் பெறும் URL. |
| **Feedback API Key** | ஒவ்வொரு ஃபீட்பேக் கோரிக்கைக்கும் `Authorization` header-ல் அனுப்பப்படும் ஒரு பியரியர் டோக்கன் (bearer token). உங்கள் எண்ட்பாயிண்டிற்கு அங்கீகாரம் (authentication) தேவையில்லை என்றால் இதை காலியாக விடவும். |

### எதிர்பார்க்கப்படும் JSON পেলோட் (Expected JSON Payload)

உங்கள் ஃபீட்பேக் எண்ட்பாயிண்ட் குறைந்தபட்சம் பின்வரும் புலங்களைக் கொண்ட JSON body-ஐ ஏற்க வேண்டும்:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

உரையாடல் சூழலைப் (conversation context) பொறுத்து, পেলோட்டில் கூடுதல் புலங்கள் இருக்கலாம்.

### `triage_category` மதிப்புகள்

பயன்படுத்தப்படும் পেলோடை முன்னோக்கி அனுப்பும் முன், AI ட்ரையேஜ் அடுக்கு (AI triage layer) `triage_category`-க்கு பின்வரும் மதிப்புகளில் ஒன்றைப் ஒதுக்குகிறது:

| மதிப்பு (Value) | பொருள் (Meaning) |
|---|---|
| `factual_error` | உதவியாளர் தவறான உண்மைத் தகவலை வழங்கியுள்ளார். |
| `unhelpful_answer` | பதில் தொழில்நுட்ப ரீதியாகச் சரியாக இருந்தாலும், பயனுள்ளதாக இல்லை. |
| `inappropriate_content` | பதிலில் பயனர்களுக்குக் காட்டப்படக்கூடாத உள்ளடக்கம் உள்ளது. |
| `other` | ஃபீட்பேக் அறியப்பட்ட வகையுடன் பொருந்தவில்லை. |

### அங்கீகாரம் (Authentication)

உங்கள் எண்ட்பாயிண்டிற்கு அங்கீகாரம் தேவைப்பட்டால், **Feedback API Key** புலத்தில் உங்கள் பியரியர் டோக்கனை அமைக்கவும். ஏஜென்ட் இதை அனுப்புகிறது:

```
Authorization: Bearer <your-api-key>
```

**Feedback API Key** புலம் காலியாக இருந்தால், எந்த `Authorization` header-உம் அனுப்பப்படாது.

### ஃபீட்பேக் சேகரிப்பை முடக்குதல் (Disabling Feedback Collection)

**Feedback Endpoint URL** மற்றும் **Feedback API Key** ஆகிய இரண்டு புலங்களையும் காலியாக விடவும். 'லைக்' செய்யாத பொத்தான் மற்றும் ஃபீட்பேக் UI ஆகியவை பயனர்களுக்குத் தெரியும், ஆனால் சமர்ப்பிப்புகள் எந்த வெளிப்புற சேவைக்கும் அனுப்பப்படாது.

## Brave Search API Key

**Advanced** தாவலிலும், **Brave Search API Key** புலம் [Internet Search](../configuration/internet-search) திறனை செயல்படுத்துகிறது.

| புலம் (Field) | விளக்கம் (Description) |
|---|---|
| **Brave Search API Key** | Brave Search developer dashboard-ல் இருந்து பெறப்பட்ட உங்கள் API key. AI உதவியாளரில் இணையத் தேடலை இயக்க இது தேவை. |

இந்த புலம், Brave Search API பதிவுப் பக்கத்திற்கான கிளிக் செய்யக்கூடிய இணைப்பைக் கொண்டுள்ளது. இணையத் தேடலை முடக்க, இதை காலியாக விடவும்.

இந்த அம்சத்திற்கான இறுதிப் பயனர் ஆவணங்காட்டிக்காக [Internet Search](../configuration/internet-search)-ஐப் பார்க்கவும்.

## அம்ச கொடிகள் (Feature Flags)

v1.9.0-ல் அறிமுகப்படுத்தப்பட்ட **Settings → Feature Flags** தாவல், விருப்பமான செயல்பாடுகளுக்கான टॉगल ஸ்விட்சுகளை (toggle switches) வழங்குகிறது. ஒவ்வொரு கொடியும் network-wide அளவில் இயக்கப்படலாம் அல்லது முடக்கப்படலாம்; தற்போது இது தனிப்பட்ட தளத்திற்கான (per-site) மாற்றத்தை அனுமதிக்கவில்லை.

### அம்ச கொடிகளை அணுகுதல்

1. WordPress நிர்வாகப் பகுதியில், **Gratis AI Agent → Settings** என்பதற்குச் செல்லவும்.
2. **Feature Flags** என்ற தாவலைக் கிளிக் செய்யவும்.

### அணுகல் கட்டுப்பாட்டு கொடிகள் (Access Control Flags)

| கொடி (Flag) | இயல்புநிலை (Default) | விளக்கம் (Description) |
|---|---|---|
| **Restrict to Administrators** | Off | இது இயக்கப்படும்போது, `administrator` என்ற ரோல் உள்ள பயனர்கள் மட்டுமே AI Agent chat panel-ஐ திறக்க முடியும். மற்ற அனைத்து ரோல்களும் அதற்குப் பதிலாக "உங்கள் நிர்வாகியைத் தொடர்பு கொள்ளவும்" என்ற செய்தியைக் காண்பார்கள். |
| **Restrict to Network Admins** | Off | ஒரு மல்ட்டிசைட் நெட்வொர்க்கில் இது இயக்கப்படும்போது, சூப்பர் நிர்வாகிகளால் (Super Admins) மட்டுமே ஏஜென்ட்டைப் பயன்படுத்த முடியும். தனிப்பட்ட தள நிர்வாகிகளுக்கு இது தடை விதிக்கப்படும். இரண்டும் இயக்கப்பட்டால், இது "Restrict to Administrators"-ஐ விட முன்னுரிமை பெறும். |
| **Allow Subscriber Access** | Off | இது இயக்கப்படும்போது, `subscriber` என்ற ரோல் உள்ள பயனர்கள் chat interface-ஐப் பயன்படுத்த முடியும், ஆனால் அவை படிக்க-மட்டும் திறன்களுடன் (read-only abilities) மட்டுமே வரையறுக்கப்படும் (போஸ்ட் உருவாக்குதல் அல்லது அமைப்புகளை மாற்றுதல் இல்லை). |
| **Disable for Non-Members** | Off | Ultimate Multisite உறுப்பினர் நிலையைப் (membership status) பயன்படுத்துகிறது. இது இயக்கப்படும்போது, செயலில் உள்ள உறுப்பினர் இல்லாத தளங்களுக்கு chat மறைக்கப்படும். |

### பிராண்டிங் கொடிகள் (Branding Flags)

| கொடி (Flag) | இயல்புநிலை (Default) | விளக்கம் (Description) |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Off | chat widget-இன் அடிப்பகுதியில் காட்டப்படும் பிராண்டிங் வரிக் குறிப்பைப் (branding attribution line) நீக்குகிறது. வெள்ளை லேபிள் (white-label) triểnபாய்களுக்கு இது பரிந்துரைக்கப்படுகிறது. |
| **Custom Agent Name** | *(blank)* | chat header மற்றும் admin menu-வில் உள்ள இயல்புநிலை "Gratis AI Agent" என்ற பெயருக்குப் பதிலாக உங்கள் சொந்த தயாரிப்புப் பெயரை மாற்றுகிறது. இயல்புநிலையைப் பயன்படுத்த இதை காலியாக விடவும். |
| **Hide Agent Picker** | Off | இது இயக்கப்படும்போது, பயனர்கள் உள்ளமைக்கப்பட்ட ஐந்து ஏஜென்ட்களுக்கு இடையில் மாற முடியாது. தற்போதைய ஏஜென்ட், Settings → General-ல் இயல்புநிலையாக உள்ளமைக்கப்பட்ட எதற்கே நிலையாக வைக்கப்படும். |
| **Use Site Icon as Chat Avatar** | Off | chat widget header-ல் உள்ள இயல்புநிலை AI ஐகானை, WordPress தள ஐகானால் (Appearance → Customize → Site Identity-ல் அமைக்கப்பட்டது) மாற்றுகிறது. |

### மாற்றங்களைச் செயல்படுத்துதல் (Applying Changes)

எந்த கொடியை மாற்றினாலும், **Save Settings** என்பதைக் கிளிக் செய்யவும். மாற்றங்கள் உடனடியாகச் செயல்படும் — கேச் ஃபிளஷ் (cache flush) அல்லது plugin reactivation எதுவும் தேவையில்லை.
