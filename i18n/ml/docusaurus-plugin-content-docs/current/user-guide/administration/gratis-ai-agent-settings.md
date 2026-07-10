---
title: Gratis AI Agent ക്രമീകരണങ്ങൾ
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Gratis AI Agent ക്രമീകരണങ്ങൾ {#gratis-ai-agent-settings}

Gratis AI Agent-ിലെ **Settings → Advanced** സ്ക്രീൻ backend സംയോജനങ്ങൾക്കായുള്ള administrator തലത്തിലുള്ള ക്രമീകരണം നൽകുന്നു. feedback forwarding, search provider keys, നിയന്ത്രിത Superdav സേവന സജ്ജീകരണം, Google Calendar നിയന്ത്രണങ്ങൾ, TextBee SMS ക്രമീകരണങ്ങൾ, network-wide feature flags എന്നിവ ഈ പേജ് രേഖപ്പെടുത്തുന്നു.

## ക്രമീകരണങ്ങൾ ആക്സസ് ചെയ്യൽ {#accessing-settings}

1. WordPress admin-ൽ, **Gratis AI Agent → Settings** എന്നതിലേക്ക് പോകുക.
2. **Advanced** tab ക്ലിക്ക് ചെയ്യുക.

## Feedback endpoint ക്രമീകരണം {#feedback-endpoint-configuration}

thumbs-down ബട്ടൺ, auto-prompt banner, അല്ലെങ്കിൽ `/report-issue` command വഴി ഉപയോക്താവ് feedback സമർപ്പിക്കുമ്പോഴെല്ലാം AI agent-ിൽ നിന്ന് feedback endpoint POST requests സ്വീകരിക്കുന്നു.

| ഫീൽഡ് | വിവരണം |
|---|---|
| **Feedback Endpoint URL** | JSON body സഹിതമുള്ള HTTP POST requests ആയി feedback സമർപ്പണങ്ങൾ സ്വീകരിക്കുന്ന URL. |
| **Feedback API Key** | ഓരോ feedback request-ിന്റെയും `Authorization` header-ൽ അയക്കുന്ന bearer token. നിങ്ങളുടെ endpoint-ിന് authentication ആവശ്യമില്ലെങ്കിൽ ശൂന്യമായി വിടുക. |

### പ്രതീക്ഷിക്കുന്ന JSON Payload {#expected-json-payload}

നിങ്ങളുടെ feedback endpoint കുറഞ്ഞത് താഴെപ്പറയുന്ന fields ഉള്ള JSON body സ്വീകരിക്കണം:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

സംഭാഷണ സാഹചര്യത്തെ ആശ്രയിച്ച് payload-ൽ അധിക fields ഉണ്ടായേക്കാം.

### `triage_category` മൂല്യങ്ങൾ {#triagecategory-values}

payload forward ചെയ്യുന്നതിന് മുമ്പ് AI triage layer `triage_category`-ക്ക് താഴെപ്പറയുന്ന മൂല്യങ്ങളിൽ ഒന്നാണ് നൽകുന്നത്:

| മൂല്യം | അർത്ഥം |
|---|---|
| `factual_error` | assistant തെറ്റായ വസ്തുതാപരമായ വിവരം നൽകി. |
| `unhelpful_answer` | response സാങ്കേതികമായി ശരിയായിരുന്നെങ്കിലും പ്രയോജനകരമായിരുന്നില്ല. |
| `inappropriate_content` | ഉപയോക്താക്കൾക്ക് കാണിക്കരുതാത്ത ഉള്ളടക്കം response-ൽ ഉണ്ടായിരുന്നു. |
| `other` | feedback അറിയപ്പെടുന്ന വിഭാഗവുമായി പൊരുത്തപ്പെട്ടില്ല. |

### Authentication {#authentication}

നിങ്ങളുടെ endpoint-ിന് authentication ആവശ്യമാണെങ്കിൽ, **Feedback API Key** field നിങ്ങളുടെ bearer token ആയി സജ്ജീകരിക്കുക. agent അയക്കുന്നത്:

```
Authorization: Bearer <your-api-key>
```

**Feedback API Key** field ശൂന്യമാണെങ്കിൽ, `Authorization` header അയക്കില്ല.

### Feedback ശേഖരണം പ്രവർത്തനരഹിതമാക്കൽ {#disabling-feedback-collection}

**Feedback Endpoint URL** എന്നും **Feedback API Key** എന്നും fields രണ്ടും ശൂന്യമായി വിടുക. thumbs-down ബട്ടണും feedback UI-യും ഉപയോക്താക്കൾക്ക് ദൃശ്യമാകും, പക്ഷേ സമർപ്പണങ്ങൾ ഏതെങ്കിലും external service-ലേക്ക് forward ചെയ്യില്ല.

## Brave Search API Key {#brave-search-api-key}

**Advanced** tab-ലും, **Brave Search API Key** field [ഇന്റർനെറ്റ് തിരയൽ](../configuration/internet-search) കഴിവ് പ്രവർത്തനക്ഷമമാക്കുന്നു.

| ഫീൽഡ് | വിവരണം |
|---|---|
| **Brave Search API Key** | Brave Search developer dashboard-ൽ നിന്നുള്ള നിങ്ങളുടെ API key. AI assistant-ൽ internet search പ്രവർത്തനക്ഷമമാക്കാൻ ആവശ്യമാണ്. |

field label-ൽ Brave Search API sign-up പേജിലേക്കുള്ള clickable link ഉൾപ്പെടുന്നു. internet search പ്രവർത്തനരഹിതമാക്കാൻ ശൂന്യമായി വിടുക.

ഈ സവിശേഷതയെക്കുറിച്ചുള്ള end-user documentation-നായി [ഇന്റർനെറ്റ് തിരയൽ](../configuration/internet-search) കാണുക.

## നിയന്ത്രിത Superdav സേവനം {#managed-superdav-service}

Superdav AI Agent v1.18.0 പിന്തുണയുള്ള sites-ക്കായി നിയന്ത്രിത Superdav service endpoints-ഉം automatic connection provisioning-ഉം ചേർക്കുന്നു. നിങ്ങളുടെ site manually configured service endpoint-ന് പകരം hosted provider-ിലേക്ക് connect ചെയ്യേണ്ടപ്പോൾ ഈ controls ഉപയോഗിക്കുക.

| ഫീൽഡ് | വിവരണം |
|---|---|
| **Managed Superdav Service** | പിന്തുണയുള്ള sites-ക്കായി hosted Superdav service connection പ്രവർത്തനക്ഷമമാക്കുന്നു. |
| **Provision Connection** | automatic endpoint, credential provisioning ആരംഭിക്കുന്നു. site managed provider ഉപയോഗിക്കണം എന്ന് സ്ഥിരീകരിച്ച ശേഷം ഇത് ഉപയോഗിക്കുക. |
| **Service Endpoint / Connection Status** | provisioning-ന് ശേഷം നിലവിലെ endpoint അല്ലെങ്കിൽ connection state കാണിക്കുന്നു. |

provisioning കഴിഞ്ഞാൽ, settings save ചെയ്ത് managed-service workflows ആശ്രയിക്കുന്നതിന് മുമ്പ് connection status പരിശോധിക്കുക. provisioning പരാജയപ്പെട്ടാൽ, കാണിച്ചിരിക്കുന്ന retry guidance പരിശോധിച്ച് hosted provider ഉപയോഗിക്കാൻ site-ന് അനുമതിയുണ്ടെന്ന് സ്ഥിരീകരിക്കുക.

## Google Calendar ക്രമീകരണം {#google-calendar-configuration}

Superdav AI Agent v1.18.0 calendar സവിശേഷതകൾ പ്രവർത്തനക്ഷമമാക്കിയാൽ, agent-ന് configured calendars-ഉം event details-ഉം വായിക്കാനാകും. Calendar tools വായനയ്ക്ക് ഉദ്ദേശിച്ചവയാണ്. schedule-aware reminders, attendee follow-up, contact matching എന്നിവയ്ക്ക് ഇവ പ്രയോജനകരമാണ്.

| ഫീൽഡ് | വിവരണം |
|---|---|
| **Google Calendar Credentials** | calendar data വായിക്കാൻ ആവശ്യമായ credentials അല്ലെങ്കിൽ token connection സൂക്ഷിക്കുന്നു. |
| **Calendar Selection** | agent പരിശോധിക്കാവുന്ന configured calendars ഏവയെന്ന് പരിമിതപ്പെടുത്തുന്നു. |
| **Calendar Connection Status** | നിലവിലെ credentials-ക്ക് calendars-ഉം events-ഉം വായിക്കാനാകുമോ എന്ന് സ്ഥിരീകരിക്കുന്നു. |

agent-ന് ആവശ്യമായ calendars-ലേക്ക് മാത്രം calendar credentials പരിമിതപ്പെടുത്തുക. status expired token സൂചിപ്പിക്കുന്നുവെങ്കിൽ credentials വീണ്ടും connect ചെയ്യുക അല്ലെങ്കിൽ rotate ചെയ്യുക.

## TextBee SMS അറിയിപ്പുകൾ {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 configured notification workflows-ക്കായി TextBee-യെ SMS provider ആയി ചേർക്കുന്നു. sensitive അല്ലെങ്കിൽ user-facing messages-ക്കായി SMS notifications human approval gates-നൊപ്പം ഉപയോഗിക്കണം.

| ഫീൽഡ് | വിവരണം |
|---|---|
| **TextBee API Key** | TextBee SMS provider-ലേക്കുള്ള requests authenticate ചെയ്യുന്നു. |
| **TextBee Device / Sender** | provider ആവശ്യപ്പെടുമ്പോൾ outgoing messages-ക്കായി ഉപയോഗിക്കുന്ന TextBee sender അല്ലെങ്കിൽ device തിരഞ്ഞെടുക്കുന്നു. |
| **SMS Notifications Enabled** | approved workflows-ക്ക് text-message notifications അയക്കാൻ അനുവദിക്കുന്നു. SMS അയക്കുന്നത് തടയാൻ disabled ആയി വിടുക. |

administrator ഉടമസ്ഥതയിലുള്ള നമ്പറിലേക്ക് മാത്രം test message അയയ്ക്കുക. പിന്നെ scheduled അല്ലെങ്കിൽ attendee-facing reminders പ്രവർത്തനക്ഷമമാക്കുന്നതിന് മുമ്പ് approval-gate പെരുമാറ്റം സ്ഥിരീകരിക്കുക.

## Feature Flags {#feature-flags}

v1.9.0-ൽ കൂടി അവതരിപ്പിച്ച **Settings → Feature Flags** tab ഐച്ഛിക പ്രവർത്തനങ്ങൾക്കായി toggle switches നൽകുന്നു. ഓരോ flag-വും network-wide ആയി enabled അല്ലെങ്കിൽ disabled ആയിരിക്കും; ഇപ്പോൾ per-site override ഇല്ല.

### Feature Flags ആക്സസ് ചെയ്യൽ {#accessing-feature-flags}

1. WordPress admin-ൽ, **Gratis AI Agent → Settings** എന്നതിലേക്ക് പോകുക.
2. **Feature Flags** tab ക്ലിക്ക് ചെയ്യുക.

### Access Control Flags {#access-control-flags}

| ഫ്ലാഗ് | ഡിഫോൾട്ട് | വിവരണം |
|---|---|---|
| **അഡ്മിനിസ്ട്രേറ്റർമാർക്ക് മാത്രം പരിമിതപ്പെടുത്തുക** | Off | പ്രവർത്തനക്ഷമമാക്കിയാൽ, `administrator` റോളുള്ള ഉപയോക്താക്കൾക്ക് മാത്രമേ AI Agent ചാറ്റ് പാനൽ തുറക്കാൻ കഴിയൂ. മറ്റ് എല്ലാ റോളുകൾക്കും പകരം "നിങ്ങളുടെ അഡ്മിനിസ്ട്രേറ്ററെ ബന്ധപ്പെടുക" എന്ന സന്ദേശം കാണും. |
| **നെറ്റ്‌വർക്ക് അഡ്മിന്മാർക്ക് മാത്രം പരിമിതപ്പെടുത്തുക** | Off | ഒരു multisite നെറ്റ്‌വർക്കിൽ പ്രവർത്തനക്ഷമമാക്കിയാൽ, Super Admins-ക്ക് മാത്രമേ agent ഉപയോഗിക്കാൻ കഴിയൂ. ഓരോ സൈറ്റിന്റെയും അഡ്മിന്മാരെ തടയും. രണ്ടും പ്രവർത്തനക്ഷമമാക്കിയിട്ടുണ്ടെങ്കിൽ "അഡ്മിനിസ്ട്രേറ്റർമാർക്ക് മാത്രം പരിമിതപ്പെടുത്തുക" എന്നതിനേക്കാൾ മുൻഗണന ലഭിക്കും. |
| **സബ്സ്ക്രൈബർ ആക്സസ് അനുവദിക്കുക** | Off | പ്രവർത്തനക്ഷമമാക്കിയാൽ, `subscriber` റോളുള്ള ഉപയോക്താക്കൾക്ക് ചാറ്റ് ഇന്റർഫേസ് ഉപയോഗിക്കാൻ കഴിയും, പക്ഷേ വായന-മാത്രം കഴിവുകളിലേക്ക് പരിമിതപ്പെടും (പോസ്റ്റ് സൃഷ്ടിക്കലോ ക്രമീകരണ മാറ്റങ്ങളോ ഇല്ല). |
| **അംഗങ്ങളല്ലാത്തവർക്ക് പ്രവർത്തനരഹിതമാക്കുക** | Off | Ultimate Multisite അംഗത്വ നിലയുമായി സംയോജിപ്പിക്കുന്നു. പ്രവർത്തനക്ഷമമാക്കിയാൽ, സജീവ അംഗത്വമില്ലാത്ത സൈറ്റുകൾക്ക് ചാറ്റ് മറച്ചിരിക്കും. |

### ബ്രാൻഡിംഗ് ഫ്ലാഗുകൾ {#branding-flags}

| ഫ്ലാഗ് | ഡിഫോൾട്ട് | വിവരണം |
|---|---|---|
| **"Powered by Gratis AI Agent" ഫൂട്ടർ മറയ്ക്കുക** | Off | ചാറ്റ് വിജറ്റിന്റെ അടിയിൽ കാണിക്കുന്ന ബ്രാൻഡിംഗ് ആട്രിബ്യൂഷൻ വരി നീക്കം ചെയ്യുന്നു. വൈറ്റ്-ലേബൽ വിന്യാസങ്ങൾക്ക് ശുപാർശ ചെയ്യുന്നു. |
| **ഇഷ്ടാനുസൃത Agent പേര്** | *(ശൂന്യം)* | ചാറ്റ് ഹെഡറിലും അഡ്മിൻ മെനുവിലും ഉള്ള ഡിഫോൾട്ട് "Gratis AI Agent" ലേബലിന് പകരം നിങ്ങളുടെ സ്വന്തം ഉൽപ്പന്ന നാമം കാണിക്കും. ഡിഫോൾട്ട് ഉപയോഗിക്കാൻ ശൂന്യമായി വിടുക. |
| **Agent പിക്കർ മറയ്ക്കുക** | Off | പ്രവർത്തനക്ഷമമാക്കിയാൽ, ഉപയോക്താക്കൾക്ക് അഞ്ച് ഉൾനിർമ്മിത agents-ുകൾക്കിടയിൽ മാറാൻ കഴിയില്ല. നിലവിലെ agent Settings → General-ൽ ഡിഫോൾട്ടായി ക്രമീകരിച്ചിരിക്കുന്നതിലേക്ക് നിശ്ചയിച്ചിരിക്കും. |
| **ചാറ്റ് അവതാറായി സൈറ്റ് ഐക്കൺ ഉപയോഗിക്കുക** | Off | ചാറ്റ് വിജറ്റ് ഹെഡറിലെ ഡിഫോൾട്ട് AI ഐക്കണിന് പകരം WordPress സൈറ്റ് ഐക്കൺ (Appearance → Customize → Site Identity എന്നതിൽ സജ്ജമാക്കിയിരിക്കുന്നത്) ഉപയോഗിക്കുന്നു. |

### ഓട്ടോമേഷൻ സുരക്ഷാ ഫ്ലാഗുകൾ {#automation-safety-flags}

Superdav AI Agent v1.18.0 കൂടുതൽ സുരക്ഷിതമായ ഓട്ടോമേഷൻ പ്രവർത്തനങ്ങൾക്കായി മനുഷ്യ അംഗീകാര ഗേറ്റുകളും ഓർമ്മപ്പെടുത്തൽ രേഖകളും അവതരിപ്പിക്കുന്നു. ഇൻസ്റ്റാൾ ചെയ്ത പാക്കേജിനെ ആശ്രയിച്ച്, ഈ നിയന്ത്രണങ്ങൾ ഫീച്ചർ ഫ്ലാഗുകളിലോ മെച്ചപ്പെട്ട ഓട്ടോമേഷൻ ക്രമീകരണങ്ങളിലോ കാണാം.

| ഫ്ലാഗ് | ഡിഫോൾട്ട് | വിവരണം |
|---|---|---|
| **മനുഷ്യ അംഗീകാരം ആവശ്യമാണ്** | ശുപാർശ ചെയ്യുന്നത് on | ഒരു അംഗീകൃത ഉപയോക്താവ് നിർദേശിച്ച നടപടി അവലോകനം ചെയ്ത് സ്ഥിരീകരിക്കുന്നതുവരെ സൂക്ഷ്മമായ ഓട്ടോമേഷനുകൾ താൽക്കാലികമായി നിർത്തുന്നു. |
| **ഓർമ്മപ്പെടുത്തൽ ഡിഡ്യൂപ്ലിക്കേഷൻ** | On | വീണ്ടും ശ്രമങ്ങളോ ഷെഡ്യൂൾ ചെയ്ത പ്രവർത്തനങ്ങളോ ആവർത്തിച്ചുള്ള അറിയിപ്പുകൾ അയക്കാതിരിക്കാൻ അയച്ച ഓർമ്മപ്പെടുത്തലുകൾ രേഖപ്പെടുത്തുന്നു. |
| **കലണ്ടർ ടൂളുകൾ പ്രവർത്തനക്ഷമമാക്കുക** | ക്രമീകരിക്കുന്നതുവരെ Off | ക്രമീകരിച്ച Google കലണ്ടറുകളും ഇവന്റുകളും വായിക്കാൻ agent-നെ അനുവദിക്കുന്നു. |
| **SMS അറിയിപ്പുകൾ പ്രവർത്തനക്ഷമമാക്കുക** | ക്രമീകരിക്കുന്നതുവരെ Off | ക്രെഡൻഷ്യലുകൾ സംരക്ഷിച്ചതിന് ശേഷം അംഗീകൃത വർക്ക്‌ഫ്ലോകൾക്ക് TextBee SMS അറിയിപ്പുകൾ അയക്കാൻ അനുവദിക്കുന്നു. |

### മാറ്റങ്ങൾ പ്രയോഗിക്കൽ {#applying-changes}

ഏതെങ്കിലും ഫ്ലാഗ് മാറ്റിയതിന് ശേഷം **ക്രമീകരണങ്ങൾ സംരക്ഷിക്കുക** ക്ലിക്ക് ചെയ്യുക. മാറ്റങ്ങൾ ഉടൻ പ്രാബല്യത്തിൽ വരും — cache flush അല്ലെങ്കിൽ plugin വീണ്ടും സജീവമാക്കൽ ആവശ്യമില്ല.
