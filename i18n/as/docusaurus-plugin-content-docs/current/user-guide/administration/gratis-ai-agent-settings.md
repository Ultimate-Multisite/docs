---
title: বিনামূলীয়া এআই এজেন্ট সেটিংস
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Gratis AI Agent Settings

Gratis AI Agent-ৰ **Settings → Advanced** স্ক্রিনত v1.5.0 ত যোগ কৰা backend integration-সমূহৰ বাবে administrator-level configuration দিয়া হৈছে। এই পৃষ্ঠাখনত **Feedback Endpoint** ফিল্ডসমূহ আৰু तिनीহঁতৰ কাৰ্যকৰী বিন্যাস (expected format) বৰ্ণনা কৰা হৈছে।

## Settings লয়

1. WordPress admin-ত, **Gratis AI Agent → Settings** লৈ যাওক।
2. **Advanced** ট্ৰি (tab) ক্লিক কৰক।

## Feedback Endpoint Configuration

feedback endpoint-এ AI agent-ৰ পৰা POST request লাভ কৰে, যেতিয়া কোনো ব্যৱমকে thumbs-down button, auto-prompt banner, বা `/report-issue` command-ৰ জৰিয়তে feedback জমা দিয়ে।

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | এই URL-এ JSON body লৈ HTTP POST request হিচাপে feedback submission লাভ কৰে। |
| **Feedback API Key** | এইটো এটা bearer token, যি প্ৰতিটো feedback request-ৰ `Authorization` header-ত পঠোৱা হয়। যদি আপোনাৰ endpoint-এ authenticationৰ প্ৰয়োজন নহয়, তেন্তে ইয়াক ফাঁকা (blank) ৰাখিব। |

### Expected JSON Payload

আপোনাৰ feedback endpoint-এ কমেও তলত দিয়া ফিল্ডসমূহ লৈ এটা JSON body গ্ৰহ কৰিব লাগিব:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Conversation context অনুসৰি payload-ত আন আন ফিল্ড থাকিব পাৰে।

### `triage_category` Values

AI triage layer-এ payload forwarding কৰাৰ আগতে `triage_category`-লৈ তলত দিয়া মানসমূহৰ ভিতৰত এটা নিৰ্ধাৰণ কৰে:

| Value | Meaning |
|---|---|
| `factual_error` | assistant-এ ভুল তথ্য দিছে। |
| `unhelpful_answer` | উত্তৰটো তাত্ত্বিকভাবে সঠিক হ'লেও ব্যৱহাৰিকভাৱে সহায়ক নহয়। |
| `inappropriate_content` | উত্তৰটোত এনে কিছুমান content আছে যি ব্যৱমক দেখুৱাব নোৱাৰি। |
| `other` | feedback-এ কোনো জনাজাত category-ৰ সৈতে মিললৈ নাই। |

### Authentication

যদি আপোনাৰ endpoint-এ authenticationৰ প্ৰয়োজন হয়, তেন্তে **Feedback API Key** ফিল্ডত আপোনাৰ bearer token সেট কৰক। agent-এ পঠিয়ায়:

```
Authorization: Bearer <your-api-key>
```

যদি **Feedback API Key** ফিল্ডটো ফাঁকা থাকে, তেন্তে কোনো `Authorization` header পঠোৱা নহয়।

### Feedback Collection বন্ধ কৰা

**Feedback Endpoint URL** আৰু **Feedback API Key** দুয়োটা ফিল্ড ফাঁকা ৰাখক। thumbs-down button আৰু feedback UI ব্যৱমক দেখা যাব, কিন্তু submission-সমূহ কোনো বাহ্যিক service লৈ forwarding নহ'ব।

## Brave Search API Key

**Advanced** ট্ৰিটোত, **Brave Search API Key** ফিল্ডে [Internet Search](../configuration/internet-search) ক্ষমতাটো সক্ষম কৰে।

| Field | Description |
|---|---|
| **Brave Search API Key** | Brave Search developer dashboard-ৰ পৰা আপোনাৰ API key। AI assistant-ত internet search সক্ষম কৰিবলৈ ইয়াৰ প্ৰয়োজন। |

এই ফিল্ডৰ label-ত Brave Search API sign-up page-লৈ এটা clickable link আছে। internet search বন্ধ কৰিবলৈ ইয়াক ফাঁকা ৰাখক।

এই feature-ৰ বাবে end-user documentation লৈ [Internet Search](../configuration/internet-search) চাওক।

## Feature Flags

v1.9.0 ত যোগ কৰা **Settings → Feature Flags** ট্ৰিটোত optional functionality-ৰ বাবে toggle switch দিয়া হৈছে। প্ৰতিটো flag network-wide সক্ষম বা অক্ষম কৰা হয়; বৰ্তমান এইটো site-level override কৰিব নোৱাৰি।

### Accessing Feature Flags

1. WordPress admin-ত, **Gratis AI Agent → Settings** লৈ যাওক।
2. **Feature Flags** ট্ৰি (tab) ক্লিক কৰক।

### Access Control Flags

| Flag | Default | Description |
|---|---|---|
| **Restrict to Administrators** | Off | সক্ষম কৰিলে, কেৱল `administrator` role থকা ব্যৱমক AI Agent chat panel খুলিব পাৰিব। আন সকলো role-এ "Contact your administrator" message দেখিব। |
| **Restrict to Network Admins** | Off | multisite network-ত সক্ষম কৰিলে, কেৱল Super Admin-কেই agent ব্যৱহাৰ কৰিব পাৰে। ব্যক্তিগত site admin-সকলক ব্লক কৰা হয়। যদি দুয়োটা সক্ষম হয়, তেন্তে ইয়াৰ প্ৰাধান্য (precedence) থাকিব। |
| **Allow Subscriber Access** | Off | সক্ষম কৰিলে, `subscriber` role থকা ব্যৱমক chat interface ব্যৱহাৰ কৰিব পাৰে, কিন্তু তেওঁলোকক কেৱল read-only ক্ষমতাৰে সীমিত কৰা হয় (post create বা settings change কৰিব নোৱাৰে)। |
| **Disable for Non-Members** | Off | Ultimate Multisite membership status লগত integrate কৰে। সক্ষম কৰিলে, যি site-সমূহত active membership নাই, তাৰ বাবে chat লুকাই থাকে। |

### Branding Flags

| Flag | Default | Description |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Off | chat widget-ৰ তলত দেখুওৱা branding attribution line টো আঁতৰাই দিয়ে। white-label deployment-ৰ বাবে পৰামৰ্শ দিয়া হয়। |
| **Custom Agent Name** | *(blank)* | chat header আৰু admin menu-ত default "Gratis AI Agent" label টো আপোনাৰ নিজৰ product name লৈ সলনি কৰে। default ব্যৱহাৰ কৰিবলৈ ইয়াক ফাঁকা ৰাখক। |
| **Hide Agent Picker** | Off | সক্ষম কৰিলে, ব্যৱমক পাঁচটা built-in agentৰ মাজত switch কৰিব নোৱাৰে। বৰ্তমান agent-টো Settings → General ত default হিচাপে যিটো configure কৰা হৈছে, তাৰ লগত সীমাবদ্ধ। |
| **Use Site Icon as Chat Avatar** | Off | chat widget header-ত default AI icon টো WordPress site icon (Appearance → Customize → Site Identity ত সেট কৰা) লৈ সলনি কৰে। |

### Applying Changes

যিকোনো flag toggle কৰাৰ পাছত **Save Settings** ক্লিক কৰক। পৰিৱৰ্তনবোৰ তৎক্ষণাত কাৰ্যকৰী হয় — কোনো cache flush বা plugin reactivationৰ প্ৰয়োজন নাই।
