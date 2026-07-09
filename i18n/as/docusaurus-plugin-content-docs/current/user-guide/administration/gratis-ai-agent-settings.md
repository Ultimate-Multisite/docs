---
title: Gratis AI Agent ছেটিংছ
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Gratis AI Agent ছেটিংছ {#gratis-ai-agent-settings}

Gratis AI Agent-ৰ **ছেটিংছ → উন্নত** পৰ্দাই backend integrations-ৰ বাবে administrator-স্তৰৰ configuration প্ৰদান কৰে। এই পৃষ্ঠাত feedback forwarding, search provider keys, managed Superdav service setup, Google Calendar controls, TextBee SMS settings, আৰু network-wide feature flags নথিভুক্ত কৰা হৈছে।

## ছেটিংছত প্ৰৱেশ কৰা {#accessing-settings}

1. WordPress admin-ত, **Gratis AI Agent → ছেটিংছ**-লৈ যাওক।
2. **উন্নত** টেবত ক্লিক কৰক।

## Feedback Endpoint Configuration {#feedback-endpoint-configuration}

feedback endpoint-এ AI agent-ৰ পৰা POST requests গ্ৰহণ কৰে যেতিয়াই কোনো ব্যৱহাৰকাৰীয়ে thumbs-down button, auto-prompt banner, বা `/report-issue` command-ৰ জৰিয়তে feedback দাখিল কৰে।

| ক্ষেত্ৰ | বিৱৰণ |
|---|---|
| **Feedback Endpoint URL** | JSON body সহ HTTP POST requests হিচাপে feedback submissions গ্ৰহণ কৰা URL। |
| **Feedback API Key** | প্ৰতিটো feedback request-ৰ `Authorization` header-ত পঠিওৱা bearer token। আপোনাৰ endpoint-এ authentication নালাগিলে খালী ৰাখক। |

### প্ৰত্যাশিত JSON Payload {#expected-json-payload}

আপোনাৰ feedback endpoint-এ অন্ততঃ তলৰ ক্ষেত্ৰসমূহ থকা JSON body গ্ৰহণ কৰিব লাগিব:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

কথোপকথনৰ context-ৰ ওপৰত নিৰ্ভৰ কৰি payload-ত অতিৰিক্ত ক্ষেত্ৰ থাকিব পাৰে।

### `triage_category` মানসমূহ {#triagecategory-values}

AI triage layer-এ payload forward কৰাৰ আগতে `triage_category`-লৈ তলৰ মানসমূহৰ এটা নিৰ্ধাৰণ কৰে:

| মান | অৰ্থ |
|---|---|
| `factual_error` | assistant-এ ভুল factual তথ্য প্ৰদান কৰিছিল। |
| `unhelpful_answer` | সঁহাৰিটো technically শুদ্ধ আছিল কিন্তু উপযোগী নাছিল। |
| `inappropriate_content` | সঁহাৰিত ব্যৱহাৰকাৰীসকলক দেখুৱাব নালাগে এনে content আছিল। |
| `other` | feedback-টো কোনো জনা category-ৰ সৈতে মিল নাখালে। |

### Authentication {#authentication}

যদি আপোনাৰ endpoint-ত authentication লাগে, **Feedback API Key** ক্ষেত্ৰটো আপোনাৰ bearer token-লৈ set কৰক। agent-এ পঠিয়ায়:

```
Authorization: Bearer <your-api-key>
```

যদি **Feedback API Key** ক্ষেত্ৰটো খালী থাকে, কোনো `Authorization` header পঠিওৱা নহয়।

### Feedback Collection নিষ্ক্ৰিয় কৰা {#disabling-feedback-collection}

**Feedback Endpoint URL** আৰু **Feedback API Key** দুয়োটা ক্ষেত্ৰ খালী ৰাখক। thumbs-down button আৰু feedback UI ব্যৱহাৰকাৰীসকলৰ বাবে দৃশ্যমান থাকে, কিন্তু submissions কোনো external service-লৈ forward কৰা নহয়।

## Brave Search API Key {#brave-search-api-key}

**উন্নত** টেবতেই থকা **Brave Search API Key** ক্ষেত্ৰই [Internet Search](../configuration/internet-search) ক্ষমতা সক্ষম কৰে।

| ক্ষেত্ৰ | বিৱৰণ |
|---|---|
| **Brave Search API Key** | Brave Search developer dashboard-ৰ পৰা আপোনাৰ API key। AI assistant-ত internet search সক্ষম কৰিবলৈ প্ৰয়োজন। |

ক্ষেত্ৰ label-ত Brave Search API sign-up page-লৈ এটা clickable link অন্তৰ্ভুক্ত থাকে। internet search নিষ্ক্ৰিয় কৰিবলৈ খালী ৰাখক।

এই বৈশিষ্ট্যৰ end-user documentation-ৰ বাবে [Internet Search](../configuration/internet-search) চাওক।

## Managed Superdav Service {#managed-superdav-service}

Superdav AI Agent v1.18.0-এ supported sites-ৰ বাবে managed Superdav service endpoints আৰু automatic connection provisioning যোগ কৰে। আপোনাৰ site-এ manually configured service endpoint-ৰ সলনি hosted provider-ৰ সৈতে connect কৰিব লাগিলে এই controls ব্যৱহাৰ কৰক।

| ক্ষেত্ৰ | বিৱৰণ |
|---|---|
| **Managed Superdav Service** | supported sites-ৰ বাবে hosted Superdav service connection সক্ষম কৰে। |
| **Provision Connection** | automatic endpoint আৰু credential provisioning আৰম্ভ কৰে। site-টোৱে managed provider ব্যৱহাৰ কৰিব লাগে বুলি নিশ্চিত কৰাৰ পিছত ইয়াক ব্যৱহাৰ কৰক। |
| **Service Endpoint / Connection Status** | provisioning-ৰ পিছত বৰ্তমান endpoint বা connection state দেখুৱায়। |

provisioning-ৰ পিছত, settings save কৰক আৰু managed-service workflows-ৰ ওপৰত নিৰ্ভৰ কৰাৰ আগতে connection status verify কৰক। provisioning বিফল হলে, দেখুওৱা retry guidance পৰ্যালোচনা কৰক আৰু site-টোৰ hosted provider ব্যৱহাৰ কৰাৰ অনুমতি আছে নে নাই নিশ্চিত কৰক।

## Google Calendar Configuration {#google-calendar-configuration}

যেতিয়া Superdav AI Agent v1.18.0 calendar features সক্ষম থাকে, agent-এ configured calendars আৰু event details পঢ়িব পাৰে। Calendar tools read-oriented আৰু schedule-aware reminders, attendee follow-up, আৰু contact matching-ৰ বাবে উপযোগী।

| ক্ষেত্ৰ | বিৱৰণ |
|---|---|
| **Google Calendar Credentials** | calendar data পঢ়িবলৈ প্ৰয়োজনীয় credentials বা token connection সংৰক্ষণ কৰে। |
| **Calendar Selection** | agent-এ কোনবোৰ configured calendars inspect কৰিব পাৰে সেয়া সীমিত কৰে। |
| **Calendar Connection Status** | বৰ্তমান credentials-এ calendars আৰু events পঢ়িব পাৰে নে নাই নিশ্চিত কৰে। |

calendar credentials agent-ৰ প্ৰয়োজনীয় calendars-লৈ সীমিত ৰাখক। status-এ expired token দেখুৱালে credentials reconnect বা rotate কৰক।

## TextBee SMS Notifications {#textbee-sms-notifications}

Superdav AI Agent v1.18.0-এ configured notification workflows-ৰ বাবে SMS provider হিচাপে TextBee যোগ কৰে। Sensitive বা user-facing messages-ৰ বাবে SMS notifications human approval gates-ৰ সৈতে pairing কৰা উচিত।

| ক্ষেত্ৰ | বিৱৰণ |
|---|---|
| **TextBee API Key** | TextBee SMS provider-লৈ requests authenticate কৰে। |
| **TextBee Device / Sender** | provider-এ প্ৰয়োজন কৰিলে outgoing messages-ৰ বাবে ব্যৱহৃত TextBee sender বা device নিৰ্বাচন কৰে। |
| **SMS Notifications Enabled** | approved workflows-ক text-message notifications পঠিয়াবলৈ অনুমতি দিয়ে। SMS sends ৰোধ কৰিবলৈ disabled ৰাখক। |

কেৱল administrator-owned number-লৈ test message পঠিয়াওক, তাৰ পিছত scheduled বা attendee-facing reminders সক্ষম কৰাৰ আগতে approval-gate আচৰণ নিশ্চিত কৰক।

## Feature Flags {#feature-flags}

v1.9.0-তো প্ৰৱৰ্তিত, **ছেটিংছ → Feature Flags** টেবে optional functionality-ৰ বাবে toggle switches প্ৰদান কৰে। প্ৰতিটো flag network-wide enabled বা disabled হয়; এই সময়ত per-site override নাই।

### Feature Flags-ত প্ৰৱেশ কৰা {#accessing-feature-flags}

1. WordPress admin-ত, **Gratis AI Agent → ছেটিংছ**-লৈ যাওক।
2. **Feature Flags** টেবত ক্লিক কৰক।

### Access Control Flags {#access-control-flags}

| Flag | Default | Description |
|---|---|---|
| **প্ৰশাসকসকললৈ সীমাবদ্ধ কৰক** | বন্ধ | সক্ৰিয় কৰিলে, কেৱল `administrator` ভূমিকাৰ ব্যৱহাৰকাৰীয়েহে AI Agent চেট পেনেল খুলিব পাৰে। বাকী সকলো ভূমিকাই ইয়াৰ পৰিৱৰ্তে "আপোনাৰ administratorৰ সৈতে যোগাযোগ কৰক" বাৰ্তা দেখে। |
| **Network Adminsলৈ সীমাবদ্ধ কৰক** | বন্ধ | multisite নেটৱাৰ্কত সক্ৰিয় কৰিলে, কেৱল Super Adminsয়েহে agent ব্যৱহাৰ কৰিব পাৰে। পৃথক ছাইটৰ adminsসকল বাধাপ্ৰাপ্ত হয়। দুয়োটা সক্ৰিয় থাকিলে "প্ৰশাসকসকললৈ সীমাবদ্ধ কৰক"ৰ ওপৰত অগ্ৰাধিকাৰ পায়। |
| **Subscriber প্ৰৱেশ অনুমতি দিয়ক** | বন্ধ | সক্ৰিয় কৰিলে, `subscriber` ভূমিকাৰ ব্যৱহাৰকাৰীয়ে চেট ইণ্টাৰফেচ ব্যৱহাৰ কৰিব পাৰে, কিন্তু কেৱল-পঢ়িব পৰা ক্ষমতালৈ সীমাবদ্ধ থাকে (কোনো পোষ্ট সৃষ্টি বা ছেটিংছ সলনি নহয়)। |
| **অ-সদস্যসকলৰ বাবে নিষ্ক্ৰিয় কৰক** | বন্ধ | Ultimate Multisite সদস্যতাৰ স্থিতিৰ সৈতে সংহত হয়। সক্ৰিয় কৰিলে, সক্ৰিয় সদস্যতা নথকা ছাইটসমূহৰ বাবে চেট লুকুৱাই ৰখা হয়। |

### ব্ৰেণ্ডিং Flagসমূহ {#branding-flags}

| Flag | Default | Description |
|---|---|---|
| **"Powered by Gratis AI Agent" ফুটাৰ লুকুৱাওক** | বন্ধ | চেট widgetৰ তলত দেখুওৱা ব্ৰেণ্ডিং attribution শাৰী আঁতৰায়। white-label deploymentৰ বাবে পৰামৰ্শিত। |
| **কাষ্টম Agent নাম** | *(খালী)* | চেট header আৰু admin menuত থকা ডিফল্ট "Gratis AI Agent" label আপোনাৰ নিজৰ product নামৰে সলনি কৰে। ডিফল্ট ব্যৱহাৰ কৰিবলৈ খালী ৰাখক। |
| **Agent Picker লুকুৱাওক** | বন্ধ | সক্ৰিয় কৰিলে, ব্যৱহাৰকাৰীয়ে পাঁচটা built-in agentৰ মাজত সলনি কৰিব নোৱাৰে। বৰ্তমান agentটো Settings → Generalত ডিফল্ট হিচাপে কনফিগাৰ কৰা যিয়েই নহওক তাত স্থিৰ থাকে। |
| **চেট Avatar হিচাপে ছাইট Icon ব্যৱহাৰ কৰক** | বন্ধ | চেট widget headerত থকা ডিফল্ট AI iconক WordPress ছাইট iconৰে সলনি কৰে (Appearance → Customize → Site Identityৰ অধীনত স্থাপন কৰা)। |

### স্বয়ংক্ৰিয়কৰণ সুৰক্ষা Flagসমূহ {#automation-safety-flags}

Superdav AI Agent v1.18.0-এ অধিক সুৰক্ষিত স্বয়ংক্ৰিয়কৰণ চলনৰ বাবে মানৱ অনুমোদন gate আৰু স্মাৰক record প্ৰৱৰ্তন কৰে। এই controlsসমূহ ইনষ্টল কৰা পেকেজৰ ওপৰত নিৰ্ভৰ কৰি feature flags বা advanced automation settingsত দেখা যাব পাৰে।

| Flag | Default | Description |
|---|---|---|
| **মানৱ অনুমোদন প্ৰয়োজন** | অন কৰাৰ পৰামৰ্শ দিয়া হয় | এজন অনুমোদিত ব্যৱহাৰকাৰীয়ে প্ৰস্তাৱিত কাৰ্য পৰ্যালোচনা আৰু নিশ্চিত নকৰালৈকে সংবেদনশীল স্বয়ংক্ৰিয়কৰণসমূহ স্থগিত ৰাখে। |
| **স্মাৰক Deduplication** | অন | পঠিওৱা স্মাৰকসমূহ record কৰে যাতে পুনঃচেষ্টা বা নিৰ্ধাৰিত চলনে duplicate জাননী নপঠিয়ায়। |
| **Calendar Tools সক্ৰিয় কৰক** | কনফিগাৰ নকৰালৈকে বন্ধ | agentক কনফিগাৰ কৰা Google calendars আৰু events পঢ়িবলৈ অনুমতি দিয়ে। |
| **SMS জাননী সক্ৰিয় কৰক** | কনফিগাৰ নকৰালৈকে বন্ধ | credentials সংৰক্ষণ কৰাৰ পিছত অনুমোদিত workflowsক TextBee SMS জাননী পঠিয়াবলৈ অনুমতি দিয়ে। |

### পৰিৱৰ্তন প্ৰয়োগ কৰা {#applying-changes}

যিকোনো flag টগল কৰাৰ পিছত **Settings সংৰক্ষণ কৰক** ক্লিক কৰক। পৰিৱৰ্তনসমূহ লগে লগে কাৰ্যকৰী হয় — কোনো cache flush বা plugin পুনঃসক্ৰিয়কৰণৰ প্ৰয়োজন নাই।
