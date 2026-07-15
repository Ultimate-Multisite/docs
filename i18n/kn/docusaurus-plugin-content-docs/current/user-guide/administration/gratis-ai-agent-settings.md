---
title: Gratis AI Agent ಸೆಟ್ಟಿಂಗ್‌ಗಳು
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Gratis AI Agent ಸೆಟ್ಟಿಂಗ್‌ಗಳು

Gratis AI Agent‌ನ **Settings → Advanced** ಪರದೆಯು backend ಸಂಯೋಜನೆಗಳಿಗಾಗಿ ನಿರ್ವಾಹಕ-ಮಟ್ಟದ ಸಂರಚನೆಯನ್ನು ಒದಗಿಸುತ್ತದೆ. ಈ ಪುಟವು ಪ್ರತಿಕ್ರಿಯೆ ಫಾರ್ವರ್ಡಿಂಗ್, ಹುಡುಕಾಟ ಪೂರೈಕೆದಾರ ಕೀಗಳು, ನಿರ್ವಹಿತ Superdav ಸೇವೆ ಸೆಟಪ್, Google Calendar ನಿಯಂತ್ರಣಗಳು, TextBee SMS ಸೆಟ್ಟಿಂಗ್‌ಗಳು ಮತ್ತು ಜಾಲವ್ಯಾಪಿ ವೈಶಿಷ್ಟ್ಯ flags ಅನ್ನು ದಾಖಲಿಸುತ್ತದೆ.

## ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ಪ್ರವೇಶಿಸುವುದು {#accessing-settings}

1. WordPress admin ನಲ್ಲಿ, **Gratis AI Agent → Settings** ಗೆ ಹೋಗಿ.
2. **Advanced** ಟ್ಯಾಬ್ ಕ್ಲಿಕ್ ಮಾಡಿ.

## ಪ್ರತಿಕ್ರಿಯೆ Endpoint ಸಂರಚನೆ {#feedback-endpoint-configuration}

ಬಳಕೆದಾರರು thumbs-down ಬಟನ್, auto-prompt banner, ಅಥವಾ `/report-issue` command ಮೂಲಕ ಪ್ರತಿಕ್ರಿಯೆ ಸಲ್ಲಿಸಿದಾಗಲೆಲ್ಲಾ ಪ್ರತಿಕ್ರಿಯೆ endpoint AI agent ನಿಂದ POST requests ಸ್ವೀಕರಿಸುತ್ತದೆ.

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | JSON body ಜೊತೆಗೆ HTTP POST requests ಆಗಿ ಪ್ರತಿಕ್ರಿಯೆ ಸಲ್ಲಿಕೆಗಳನ್ನು ಸ್ವೀಕರಿಸುವ URL. |
| **Feedback API Key** | ಪ್ರತಿಯೊಂದು ಪ್ರತಿಕ್ರಿಯೆ request ನ `Authorization` header ನಲ್ಲಿ ಕಳುಹಿಸಲಾದ bearer token. ನಿಮ್ಮ endpoint ಗೆ ದೃಢೀಕರಣ ಅಗತ್ಯವಿಲ್ಲದಿದ್ದರೆ ಖಾಲಿ ಬಿಡಿ. |

### ನಿರೀಕ್ಷಿತ JSON Payload {#expected-json-payload}

ನಿಮ್ಮ ಪ್ರತಿಕ್ರಿಯೆ endpoint ಕನಿಷ್ಠ ಕೆಳಗಿನ field ಗಳನ್ನು ಹೊಂದಿರುವ JSON body ಅನ್ನು ಸ್ವೀಕರಿಸಬೇಕು:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

ಸಂಭಾಷಣೆ ಸಂದರ್ಭದ ಆಧಾರದ ಮೇಲೆ payload ನಲ್ಲಿ ಹೆಚ್ಚುವರಿ field ಗಳು ಇರಬಹುದು.

### `triage_category` ಮೌಲ್ಯಗಳು {#triagecategory-values}

payload ಅನ್ನು ಫಾರ್ವರ್ಡ್ ಮಾಡುವ ಮೊದಲು AI triage layer `triage_category` ಗೆ ಕೆಳಗಿನ ಮೌಲ್ಯಗಳಲ್ಲಿ ಒಂದನ್ನು ನಿಯೋಜಿಸುತ್ತದೆ:

| Value | Meaning |
|---|---|
| `factual_error` | ಸಹಾಯಕನು ತಪ್ಪಾದ ವಾಸ್ತವ ಮಾಹಿತಿಯನ್ನು ನೀಡಿದ್ದಾನೆ. |
| `unhelpful_answer` | ಪ್ರತಿಕ್ರಿಯೆ ತಾಂತ್ರಿಕವಾಗಿ ಸರಿಯಾಗಿತ್ತು, ಆದರೆ ಉಪಯುಕ್ತವಾಗಿರಲಿಲ್ಲ. |
| `inappropriate_content` | ಪ್ರತಿಕ್ರಿಯೆಯಲ್ಲಿ ಬಳಕೆದಾರರಿಗೆ ತೋರಿಸಬಾರದ ವಿಷಯವಿತ್ತು. |
| `other` | ಪ್ರತಿಕ್ರಿಯೆ ತಿಳಿದಿರುವ ವರ್ಗಕ್ಕೆ ಹೊಂದಿಕೆಯಾಗಲಿಲ್ಲ. |

### ದೃಢೀಕರಣ {#authentication}

ನಿಮ್ಮ endpoint ಗೆ ದೃಢೀಕರಣ ಅಗತ್ಯವಿದ್ದರೆ, **Feedback API Key** field ಅನ್ನು ನಿಮ್ಮ bearer token ಗೆ ಹೊಂದಿಸಿ. agent ಕಳುಹಿಸುವುದು:

```
Authorization: Bearer <your-api-key>
```

**Feedback API Key** field ಖಾಲಿಯಾಗಿದ್ದರೆ, ಯಾವುದೇ `Authorization` header ಕಳುಹಿಸಲಾಗುವುದಿಲ್ಲ.

### ಪ್ರತಿಕ್ರಿಯೆ ಸಂಗ್ರಹಣೆಯನ್ನು ನಿಷ್ಕ್ರಿಯಗೊಳಿಸುವುದು {#disabling-feedback-collection}

**Feedback Endpoint URL** ಮತ್ತು **Feedback API Key** ಎರಡೂ field ಗಳನ್ನು ಖಾಲಿ ಬಿಡಿ. thumbs-down ಬಟನ್ ಮತ್ತು ಪ್ರತಿಕ್ರಿಯೆ UI ಬಳಕೆದಾರರಿಗೆ ಕಾಣಿಸುತ್ತಲೇ ಇರುತ್ತವೆ, ಆದರೆ ಸಲ್ಲಿಕೆಗಳನ್ನು ಯಾವುದೇ ಬಾಹ್ಯ ಸೇವೆಗೆ ಫಾರ್ವರ್ಡ್ ಮಾಡಲಾಗುವುದಿಲ್ಲ.

## Brave Search API Key {#brave-search-api-key}

**Advanced** ಟ್ಯಾಬ್‌ನಲ್ಲಿಯೇ, **Brave Search API Key** field [ಇಂಟರ್ನೆಟ್ ಹುಡುಕಾಟ](../configuration/internet-search) ಸಾಮರ್ಥ್ಯವನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುತ್ತದೆ.

| Field | Description |
|---|---|
| **Brave Search API Key** | Brave Search developer dashboard ನಿಂದ ನಿಮ್ಮ API key. AI assistant ನಲ್ಲಿ ಇಂಟರ್ನೆಟ್ ಹುಡುಕಾಟವನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಲು ಅಗತ್ಯ. |

field label ನಲ್ಲಿ Brave Search API sign-up ಪುಟಕ್ಕೆ ಕ್ಲಿಕ್ ಮಾಡಬಹುದಾದ ಲಿಂಕ್ ಸೇರಿದೆ. ಇಂಟರ್ನೆಟ್ ಹುಡುಕಾಟವನ್ನು ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಲು ಖಾಲಿ ಬಿಡಿ.

ಈ ವೈಶಿಷ್ಟ್ಯದ ಅಂತಿಮ ಬಳಕೆದಾರರ ದಾಖಲೆಗಾಗಿ [ಇಂಟರ್ನೆಟ್ ಹುಡುಕಾಟ](../configuration/internet-search) ನೋಡಿ.

## ನಿರ್ವಹಿತ Superdav ಸೇವೆ {#managed-superdav-service}

Superdav AI Agent v1.18.0 ಬೆಂಬಲಿತ site ಗಳಿಗಾಗಿ ನಿರ್ವಹಿತ Superdav ಸೇವೆ endpoints ಮತ್ತು ಸ್ವಯಂಚಾಲಿತ connection provisioning ಅನ್ನು ಸೇರಿಸುತ್ತದೆ. ನಿಮ್ಮ site ಕೈಯಾರೆ ಸಂರಚಿಸಿದ ಸೇವೆ endpoint ಬದಲು hosted provider ಗೆ ಸಂಪರ್ಕಿಸಬೇಕಾದಾಗ ಈ ನಿಯಂತ್ರಣಗಳನ್ನು ಬಳಸಿ.

| Field | Description |
|---|---|
| **Managed Superdav Service** | ಬೆಂಬಲಿತ site ಗಳಿಗಾಗಿ hosted Superdav ಸೇವೆ connection ಅನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುತ್ತದೆ. |
| **Provision Connection** | ಸ್ವಯಂಚಾಲಿತ endpoint ಮತ್ತು credential provisioning ಅನ್ನು ಪ್ರಾರಂಭಿಸುತ್ತದೆ. site ನಿರ್ವಹಿತ provider ಬಳಸಬೇಕೆಂದು ಖಚಿತಪಡಿಸಿದ ನಂತರ ಇದನ್ನು ಬಳಸಿ. |
| **Service Endpoint / Connection Status** | provisioning ನಂತರ ಪ್ರಸ್ತುತ endpoint ಅಥವಾ connection ಸ್ಥಿತಿಯನ್ನು ತೋರಿಸುತ್ತದೆ. |

provisioning ನಂತರ, ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ಉಳಿಸಿ ಮತ್ತು managed-service workflows ಮೇಲೆ ಅವಲಂಬಿಸುವ ಮೊದಲು connection ಸ್ಥಿತಿಯನ್ನು ಪರಿಶೀಲಿಸಿ. provisioning ವಿಫಲವಾದರೆ, ತೋರಿಸಲಾದ retry ಮಾರ್ಗದರ್ಶನವನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು site ಗೆ hosted provider ಬಳಸಲು ಅನುಮತಿ ಇದೆ ಎಂದು ಖಚಿತಪಡಿಸಿ.

## Google Calendar ಸಂರಚನೆ {#google-calendar-configuration}

Superdav AI Agent v1.18.0 calendar ವೈಶಿಷ್ಟ್ಯಗಳು ಸಕ್ರಿಯವಾಗಿರುವಾಗ, agent ಸಂರಚಿಸಿದ calendars ಮತ್ತು event ವಿವರಗಳನ್ನು ಓದಬಹುದು. Calendar tools ಓದುವಿಕೆಗೆ ಕೇಂದ್ರೀಕೃತವಾಗಿವೆ ಮತ್ತು ವೇಳಾಪಟ್ಟಿ-ಅರಿವಿನ reminders, attendee follow-up, ಮತ್ತು contact matching ಗಾಗಿ ಉಪಯುಕ್ತವಾಗಿವೆ.

| Field | Description |
|---|---|
| **Google Calendar Credentials** | calendar data ಓದಲು ಅಗತ್ಯವಿರುವ credentials ಅಥವಾ token connection ಅನ್ನು ಸಂಗ್ರಹಿಸುತ್ತದೆ. |
| **Calendar Selection** | agent ಪರಿಶೀಲಿಸಬಹುದಾದ ಸಂರಚಿಸಿದ calendars ಅನ್ನು ಮಿತಿಗೊಳಿಸುತ್ತದೆ. |
| **Calendar Connection Status** | ಪ್ರಸ್ತುತ credentials calendars ಮತ್ತು events ಓದಬಹುದೇ ಎಂದು ದೃಢೀಕರಿಸುತ್ತದೆ. |

calendar credentials ಅನ್ನು agent ಗೆ ಅಗತ್ಯವಿರುವ calendars ಗೆ ಮಾತ್ರ ಮಿತಿಗೊಳಿಸಿ. ಸ್ಥಿತಿಯು ಅವಧಿ ಮುಗಿದ token ಅನ್ನು ಸೂಚಿಸಿದರೆ credentials ಅನ್ನು ಮರುಸಂಪರ್ಕಿಸಿ ಅಥವಾ rotate ಮಾಡಿ.

## TextBee SMS ಸೂಚನೆಗಳು {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 ಸಂರಚಿಸಿದ notification workflows ಗಾಗಿ TextBee ಅನ್ನು SMS provider ಆಗಿ ಸೇರಿಸುತ್ತದೆ. ಸಂವೇದನಾಶೀಲ ಅಥವಾ ಬಳಕೆದಾರ-ಮುಖ್ಯ ಸಂದೇಶಗಳಿಗಾಗಿ SMS notifications ಅನ್ನು ಮಾನವ ಅನುಮೋದನೆ gates ಜೊತೆಗೆ ಜೋಡಿಸಬೇಕು.

| Field | Description |
|---|---|
| **TextBee API Key** | TextBee SMS provider ಗೆ requests ಅನ್ನು ದೃಢೀಕರಿಸುತ್ತದೆ. |
| **TextBee Device / Sender** | provider ಅಗತ್ಯವಿದ್ದಾಗ ಹೊರಹೋಗುವ messages ಗಾಗಿ ಬಳಸುವ TextBee sender ಅಥವಾ device ಅನ್ನು ಆಯ್ಕೆಮಾಡುತ್ತದೆ. |
| **SMS Notifications Enabled** | ಅನುಮೋದಿತ workflows ಗೆ text-message notifications ಕಳುಹಿಸಲು ಅನುಮತಿಸುತ್ತದೆ. SMS ಕಳುಹಿಸುವುದನ್ನು ತಡೆಯಲು ನಿಷ್ಕ್ರಿಯವಾಗಿಯೇ ಬಿಡಿ. |

ಪರೀಕ್ಷಾ ಸಂದೇಶವನ್ನು ನಿರ್ವಾಹಕರ ಸ್ವಂತ ಸಂಖ್ಯೆಗೆ ಮಾತ್ರ ಕಳುಹಿಸಿ, ನಂತರ scheduled ಅಥವಾ attendee-facing reminders ಸಕ್ರಿಯಗೊಳಿಸುವ ಮೊದಲು approval-gate ವರ್ತನೆಯನ್ನು ದೃಢೀಕರಿಸಿ.

## ವೈಶಿಷ್ಟ್ಯ Flags {#feature-flags}

v1.9.0 ನಲ್ಲಿ ಪರಿಚಯಿಸಲಾದ **Settings → Feature Flags** ಟ್ಯಾಬ್ ಐಚ್ಛಿಕ ಕಾರ್ಯಕ್ಷಮತೆಗಾಗಿ toggle switches ಒದಗಿಸುತ್ತದೆ. ಪ್ರತಿಯೊಂದು flag ಜಾಲವ್ಯಾಪಿಯಾಗಿ ಸಕ್ರಿಯ ಅಥವಾ ನಿಷ್ಕ್ರಿಯವಾಗಿರುತ್ತದೆ; ಈ ಸಮಯದಲ್ಲಿ ಪ್ರತಿ-site override ಇಲ್ಲ.

### ವೈಶಿಷ್ಟ್ಯ Flags ಅನ್ನು ಪ್ರವೇಶಿಸುವುದು {#accessing-feature-flags}

1. WordPress admin ನಲ್ಲಿ, **Gratis AI Agent → Settings** ಗೆ ಹೋಗಿ.
2. **Feature Flags** ಟ್ಯಾಬ್ ಕ್ಲಿಕ್ ಮಾಡಿ.

### ಪ್ರವೇಶ ನಿಯಂತ್ರಣ Flags {#access-control-flags}

| ಫ್ಲ್ಯಾಗ್ | ಡೀಫಾಲ್ಟ್ | ವಿವರಣೆ |
|---|---|---|
| **ನಿರ್ವಾಹಕರಿಗೆ ಮಾತ್ರ ನಿರ್ಬಂಧಿಸಿ** | ಆಫ್ | ಸಕ್ರಿಯಗೊಳಿಸಿದಾಗ, `administrator` ಪಾತ್ರದ ಬಳಕೆದಾರರು ಮಾತ್ರ AI Agent ಚಾಟ್ ಪ್ಯಾನೆಲ್ ತೆರೆಯಬಹುದು. ಇತರ ಎಲ್ಲ ಪಾತ್ರಗಳಿಗೆ ಬದಲಾಗಿ "ನಿಮ್ಮ ನಿರ್ವಾಹಕರನ್ನು ಸಂಪರ್ಕಿಸಿ" ಸಂದೇಶ ಕಾಣುತ್ತದೆ. |
| **Network Admins ಗೆ ಮಾತ್ರ ನಿರ್ಬಂಧಿಸಿ** | ಆಫ್ | multisite ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ ಸಕ್ರಿಯಗೊಳಿಸಿದಾಗ, Super Admins ಮಾತ್ರ ಏಜೆಂಟ್ ಬಳಸಬಹುದು. ಪ್ರತ್ಯೇಕ ಸೈಟ್ ನಿರ್ವಾಹಕರನ್ನು ನಿರ್ಬಂಧಿಸಲಾಗುತ್ತದೆ. ಎರಡನ್ನೂ ಸಕ್ರಿಯಗೊಳಿಸಿದರೆ "ನಿರ್ವಾಹಕರಿಗೆ ಮಾತ್ರ ನಿರ್ಬಂಧಿಸಿ" ಗಿಂತ ಇದಕ್ಕೆ ಆದ್ಯತೆ ಇರುತ್ತದೆ. |
| **Subscriber ಪ್ರವೇಶವನ್ನು ಅನುಮತಿಸಿ** | ಆಫ್ | ಸಕ್ರಿಯಗೊಳಿಸಿದಾಗ, `subscriber` ಪಾತ್ರದ ಬಳಕೆದಾರರು ಚಾಟ್ ಇಂಟರ್‌ಫೇಸ್ ಬಳಸಬಹುದು, ಆದರೆ ಓದಲು-ಮಾತ್ರ ಸಾಮರ್ಥ್ಯಗಳಿಗೆ ಸೀಮಿತರಾಗಿರುತ್ತಾರೆ (ಪೋಸ್ಟ್ ರಚನೆ ಅಥವಾ ಸೆಟ್ಟಿಂಗ್‌ಗಳ ಬದಲಾವಣೆ ಇಲ್ಲ). |
| **ಸದಸ್ಯರಲ್ಲದವರಿಗೆ ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಿ** | ಆಫ್ | Ultimate Multisite ಸದಸ್ಯತ್ವ ಸ್ಥಿತಿಯೊಂದಿಗೆ ಸಂಯೋಜಿಸುತ್ತದೆ. ಸಕ್ರಿಯಗೊಳಿಸಿದಾಗ, ಸಕ್ರಿಯ ಸದಸ್ಯತ್ವ ಇಲ್ಲದ ಸೈಟ್‌ಗಳಿಗೆ ಚಾಟ್ ಮರೆಮಾಡಲಾಗುತ್ತದೆ. |

### ಬ್ರ್ಯಾಂಡಿಂಗ್ ಫ್ಲ್ಯಾಗ್‌ಗಳು {#branding-flags}

| ಫ್ಲ್ಯಾಗ್ | ಡೀಫಾಲ್ಟ್ | ವಿವರಣೆ |
|---|---|---|
| **"Powered by Gratis AI Agent" ಫೂಟರ್ ಮರೆಮಾಡಿ** | ಆಫ್ | ಚಾಟ್ ವಿಜೆಟ್‌ನ ಕೆಳಭಾಗದಲ್ಲಿ ತೋರಿಸುವ ಬ್ರ್ಯಾಂಡಿಂಗ್ ಉಲ್ಲೇಖ ಸಾಲನ್ನು ತೆಗೆದುಹಾಕುತ್ತದೆ. ವೈಟ್-ಲೇಬಲ್ ನಿಯೋಜನೆಗಳಿಗೆ ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ. |
| **ಕಸ್ಟಮ್ ಏಜೆಂಟ್ ಹೆಸರು** | *(ಖಾಲಿ)* | ಚಾಟ್ ಹೆಡರ್ ಮತ್ತು ನಿರ್ವಾಹಕ ಮೆನುವಿನಲ್ಲಿರುವ ಡೀಫಾಲ್ಟ್ "Gratis AI Agent" ಲೇಬಲ್ ಅನ್ನು ನಿಮ್ಮದೇ ಉತ್ಪನ್ನ ಹೆಸರಿನಿಂದ ಬದಲಿಸುತ್ತದೆ. ಡೀಫಾಲ್ಟ್ ಬಳಸಲು ಖಾಲಿ ಬಿಡಿ. |
| **ಏಜೆಂಟ್ ಆಯ್ಕೆಗಾರವನ್ನು ಮರೆಮಾಡಿ** | ಆಫ್ | ಸಕ್ರಿಯಗೊಳಿಸಿದಾಗ, ಬಳಕೆದಾರರು ಒಳಗೊಂಡಿರುವ ಐದು ಏಜೆಂಟ್‌ಗಳ ನಡುವೆ ಬದಲಾಯಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ. ಪ್ರಸ್ತುತ ಏಜೆಂಟ್ ಅನ್ನು Settings → General ನಲ್ಲಿ ಡೀಫಾಲ್ಟ್ ಆಗಿ ಸಂರಚಿಸಿರುವುದಕ್ಕೆ ಸ್ಥಿರಗೊಳಿಸಲಾಗುತ್ತದೆ. |
| **ಚಾಟ್ ಅವತಾರವಾಗಿ ಸೈಟ್ ಐಕಾನ್ ಬಳಸಿ** | ಆಫ್ | ಚಾಟ್ ವಿಜೆಟ್ ಹೆಡರ್‌ನಲ್ಲಿರುವ ಡೀಫಾಲ್ಟ್ AI ಐಕಾನ್ ಅನ್ನು WordPress ಸೈಟ್ ಐಕಾನ್‌ನಿಂದ ಬದಲಿಸುತ್ತದೆ (Appearance → Customize → Site Identity ಅಡಿಯಲ್ಲಿ ಹೊಂದಿಸಲಾಗಿದೆ). |

### ಸ್ವಯಂಚಾಲನೆಯ ಸುರಕ್ಷತಾ ಫ್ಲ್ಯಾಗ್‌ಗಳು {#automation-safety-flags}

Superdav AI Agent v1.18.0 ಸುರಕ್ಷಿತ ಸ್ವಯಂಚಾಲನಾ ರನ್‌ಗಳಿಗಾಗಿ ಮಾನವ ಅನುಮೋದನಾ ಗೇಟ್‌ಗಳು ಮತ್ತು ಜ್ಞಾಪನೆ ದಾಖಲೆಗಳನ್ನು ಪರಿಚಯಿಸುತ್ತದೆ. ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಿದ ಪ್ಯಾಕೇಜ್‌ಗೆ ಅನುಗುಣವಾಗಿ, ಈ ನಿಯಂತ್ರಣಗಳು ವೈಶಿಷ್ಟ್ಯ ಫ್ಲ್ಯಾಗ್‌ಗಳಲ್ಲಿ ಅಥವಾ ಸುಧಾರಿತ ಸ್ವಯಂಚಾಲನಾ ಸೆಟ್ಟಿಂಗ್‌ಗಳಲ್ಲಿ ಕಾಣಿಸಬಹುದು.

| ಫ್ಲ್ಯಾಗ್ | ಡೀಫಾಲ್ಟ್ | ವಿವರಣೆ |
|---|---|---|
| **ಮಾನವ ಅನುಮೋದನೆ ಅಗತ್ಯ** | ಆನ್ ಶಿಫಾರಸು | ಅಧಿಕೃತ ಬಳಕೆದಾರರು ಪ್ರಸ್ತಾಪಿತ ಕ್ರಿಯೆಯನ್ನು ಪರಿಶೀಲಿಸಿ ದೃಢೀಕರಿಸುವವರೆಗೆ ಸೂಕ್ಷ್ಮ ಸ್ವಯಂಚಾಲನೆಗಳನ್ನು ವಿರಾಮಗೊಳಿಸುತ್ತದೆ. |
| **ಜ್ಞಾಪನೆ ನಕಲು ತಡೆಯುವಿಕೆ** | ಆನ್ | ಕಳುಹಿಸಿದ ಜ್ಞಾಪನೆಗಳನ್ನು ದಾಖಲಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಮರುಪ್ರಯತ್ನಗಳು ಅಥವಾ ನಿಗದಿತ ರನ್‌ಗಳು ನಕಲಿ ಅಧಿಸೂಚನೆಗಳನ್ನು ಕಳುಹಿಸುವುದಿಲ್ಲ. |
| **ಕ್ಯಾಲೆಂಡರ್ ಸಾಧನಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ** | ಸಂರಚಿಸುವವರೆಗೆ ಆಫ್ | ಸಂರಚಿಸಿದ Google ಕ್ಯಾಲೆಂಡರ್‌ಗಳು ಮತ್ತು ಈವೆಂಟ್‌ಗಳನ್ನು ಓದಲು ಏಜೆಂಟ್‌ಗೆ ಅನುಮತಿಸುತ್ತದೆ. |
| **SMS ಅಧಿಸೂಚನೆಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ** | ಸಂರಚಿಸುವವರೆಗೆ ಆಫ್ | ರುಜುವಾತುಗಳನ್ನು ಉಳಿಸಿದ ನಂತರ ಅನುಮೋದಿತ ವರ್ಕ್‌ಫ್ಲೋಗಳಿಗೆ TextBee SMS ಅಧಿಸೂಚನೆಗಳನ್ನು ಕಳುಹಿಸಲು ಅನುಮತಿಸುತ್ತದೆ. |

### ಬದಲಾವಣೆಗಳನ್ನು ಅನ್ವಯಿಸುವುದು {#applying-changes}

ಯಾವುದೇ ಫ್ಲ್ಯಾಗ್ ಬದಲಿಸಿದ ನಂತರ **ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ಉಳಿಸಿ** ಕ್ಲಿಕ್ ಮಾಡಿ. ಬದಲಾವಣೆಗಳು ತಕ್ಷಣ ಪರಿಣಾಮ ಬೀರುತ್ತವೆ — cache flush ಅಥವಾ plugin ಮರುಸಕ್ರಿಯಗೊಳಿಸುವಿಕೆ ಅಗತ್ಯವಿಲ್ಲ.
