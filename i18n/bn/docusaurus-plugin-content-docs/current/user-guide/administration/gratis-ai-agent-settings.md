---
title: Gratis AI Agent সেটিংস
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Gratis AI Agent সেটিংস

Gratis AI Agent-এর **সেটিংস → উন্নত** স্ক্রিনে backend ইন্টিগ্রেশনের জন্য প্রশাসক-স্তরের কনফিগারেশন থাকে। এই পাতায় feedback forwarding, search provider keys, managed Superdav service setup, Google Calendar controls, TextBee SMS settings এবং network-wide feature flags নথিভুক্ত করা হয়েছে।

## সেটিংস অ্যাক্সেস করা

1. WordPress admin-এ **Gratis AI Agent → সেটিংস**-এ যান।
2. **উন্নত** ট্যাবে ক্লিক করুন।

## Feedback Endpoint কনফিগারেশন

feedback endpoint AI agent থেকে POST অনুরোধ গ্রহণ করে, যখনই কোনো ব্যবহারকারী thumbs-down বোতাম, auto-prompt banner, বা `/report-issue` কমান্ডের মাধ্যমে feedback জমা দেন।

| ক্ষেত্র | বিবরণ |
|---|---|
| **Feedback Endpoint URL** | যে URL JSON body সহ HTTP POST অনুরোধ হিসেবে feedback জমা গ্রহণ করে। |
| **Feedback API Key** | প্রতিটি feedback অনুরোধের `Authorization` header-এ পাঠানো bearer token। আপনার endpoint-এ authentication প্রয়োজন না হলে খালি রাখুন। |

### প্রত্যাশিত JSON Payload

আপনার feedback endpoint-কে অন্তত নিচের ক্ষেত্রগুলোসহ একটি JSON body গ্রহণ করতে হবে:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

কথোপকথনের context অনুযায়ী payload-এ অতিরিক্ত ক্ষেত্র থাকতে পারে।

### `triage_category` মান

payload forward করার আগে AI triage layer `triage_category`-তে নিচের মানগুলোর একটি নির্ধারণ করে:

| মান | অর্থ |
|---|---|
| `factual_error` | assistant ভুল factual তথ্য দিয়েছে। |
| `unhelpful_answer` | প্রতিক্রিয়াটি technical দিক থেকে সঠিক ছিল, কিন্তু উপযোগী ছিল না। |
| `inappropriate_content` | প্রতিক্রিয়ায় এমন content ছিল যা ব্যবহারকারীদের দেখানো উচিত নয়। |
| `other` | feedback কোনো পরিচিত category-এর সঙ্গে মেলেনি। |

### Authentication

আপনার endpoint-এ authentication প্রয়োজন হলে **Feedback API Key** ক্ষেত্রটি আপনার bearer token দিয়ে সেট করুন। agent পাঠায়:

```
Authorization: Bearer <your-api-key>
```

**Feedback API Key** ক্ষেত্র খালি থাকলে কোনো `Authorization` header পাঠানো হয় না।

### Feedback সংগ্রহ নিষ্ক্রিয় করা

**Feedback Endpoint URL** এবং **Feedback API Key**—দুটি ক্ষেত্রই খালি রাখুন। thumbs-down বোতাম এবং feedback UI ব্যবহারকারীদের কাছে দৃশ্যমান থাকবে, কিন্তু জমাগুলো কোনো external service-এ forward করা হবে না।

## Brave Search API Key

**উন্নত** ট্যাবেই **Brave Search API Key** ক্ষেত্রটি [Internet Search](../configuration/internet-search) ক্ষমতা সক্রিয় করে।

| ক্ষেত্র | বিবরণ |
|---|---|
| **Brave Search API Key** | Brave Search developer dashboard থেকে পাওয়া আপনার API key। AI assistant-এ internet search সক্রিয় করতে প্রয়োজন। |

ক্ষেত্রের label-এ Brave Search API sign-up page-এ যাওয়ার জন্য clickable link থাকে। internet search নিষ্ক্রিয় রাখতে খালি রাখুন।

এই feature সম্পর্কে end-user documentation-এর জন্য [Internet Search](../configuration/internet-search) দেখুন।

## Managed Superdav Service

Superdav AI Agent v1.18.0 supported সাইটগুলোর জন্য managed Superdav service endpoint এবং automatic connection provisioning যোগ করে। আপনার সাইট manually configured service endpoint-এর বদলে hosted provider-এ connect করা উচিত হলে এই controls ব্যবহার করুন।

| ক্ষেত্র | বিবরণ |
|---|---|
| **Managed Superdav Service** | supported সাইটগুলোর জন্য hosted Superdav service connection সক্রিয় করে। |
| **Provision Connection** | automatic endpoint এবং credential provisioning শুরু করে। সাইটটি managed provider ব্যবহার করবে তা নিশ্চিত করার পর এটি ব্যবহার করুন। |
| **Service Endpoint / Connection Status** | provisioning-এর পর current endpoint বা connection state দেখায়। |

provisioning-এর পর settings save করুন এবং managed-service workflows-এর ওপর নির্ভর করার আগে connection status যাচাই করুন। provisioning ব্যর্থ হলে প্রদর্শিত retry guidance দেখুন এবং সাইটটির hosted provider ব্যবহারের permission আছে কি না নিশ্চিত করুন।

## Google Calendar কনফিগারেশন

Superdav AI Agent v1.18.0 calendar features সক্রিয় থাকলে agent configured calendars এবং event details পড়তে পারে। Calendar tools read-oriented এবং schedule-aware reminders, attendee follow-up, ও contact matching-এর জন্য উপযোগী।

| ক্ষেত্র | বিবরণ |
|---|---|
| **Google Calendar Credentials** | calendar data পড়তে প্রয়োজনীয় credentials বা token connection সংরক্ষণ করে। |
| **Calendar Selection** | agent কোন configured calendars inspect করতে পারবে তা সীমিত করে। |
| **Calendar Connection Status** | current credentials calendars এবং events পড়তে পারে কি না নিশ্চিত করে। |

calendar credentials শুধু agent-এর প্রয়োজনীয় calendars-এ সীমিত রাখুন। status expired token দেখালে credentials reconnect বা rotate করুন।

## TextBee SMS Notifications

Superdav AI Agent v1.18.0 configured notification workflows-এর জন্য SMS provider হিসেবে TextBee যোগ করে। sensitive বা user-facing messages-এর ক্ষেত্রে SMS notifications মানব অনুমোদন gates-এর সঙ্গে ব্যবহার করা উচিত।

| ক্ষেত্র | বিবরণ |
|---|---|
| **TextBee API Key** | TextBee SMS provider-এ অনুরোধ authenticate করে। |
| **TextBee Device / Sender** | provider-এর প্রয়োজন হলে outgoing messages-এর জন্য ব্যবহৃত TextBee sender বা device নির্বাচন করে। |
| **SMS Notifications Enabled** | approved workflows-কে text-message notifications পাঠানোর অনুমতি দেয়। SMS পাঠানো ঠেকাতে disabled রাখুন। |

শুধু administrator-owned number-এ test message পাঠান, তারপর scheduled বা attendee-facing reminders সক্রিয় করার আগে approval-gate behaviour নিশ্চিত করুন।

## Feature Flags

v1.9.0-এ আরও যুক্ত হয়েছে **সেটিংস → Feature Flags** ট্যাব, যা optional functionality-এর জন্য toggle switches দেয়। প্রতিটি flag network-wide enabled বা disabled থাকে; এই মুহূর্তে per-site override নেই।

### Feature Flags অ্যাক্সেস করা

1. WordPress admin-এ **Gratis AI Agent → সেটিংস**-এ যান।
2. **Feature Flags** ট্যাবে ক্লিক করুন।

### Access Control Flags

| ফ্ল্যাগ | ডিফল্ট | বিবরণ |
|---|---|---|
| **অ্যাডমিনিস্ট্রেটরদের মধ্যে সীমাবদ্ধ করুন** | বন্ধ | চালু করলে, কেবল `administrator` ভূমিকার ব্যবহারকারীরা AI Agent চ্যাট প্যানেল খুলতে পারবেন। অন্য সব ভূমিকা এর বদলে "আপনার অ্যাডমিনিস্ট্রেটরের সঙ্গে যোগাযোগ করুন" বার্তা দেখবে। |
| **নেটওয়ার্ক অ্যাডমিনদের মধ্যে সীমাবদ্ধ করুন** | বন্ধ | multisite নেটওয়ার্কে চালু করলে, কেবল Super Admins এজেন্ট ব্যবহার করতে পারবেন। পৃথক সাইটের অ্যাডমিনরা ব্লক থাকবেন। দুটিই চালু থাকলে এটি "অ্যাডমিনিস্ট্রেটরদের মধ্যে সীমাবদ্ধ করুন"-এর চেয়ে অগ্রাধিকার পায়। |
| **সাবস্ক্রাইবার অ্যাক্সেসের অনুমতি দিন** | বন্ধ | চালু করলে, `subscriber` ভূমিকার ব্যবহারকারীরা চ্যাট ইন্টারফেস ব্যবহার করতে পারবেন, তবে শুধু পড়ার ক্ষমতায় সীমিত থাকবেন (কোনো পোস্ট তৈরি বা সেটিংস পরিবর্তন নয়)। |
| **নন-মেম্বারদের জন্য নিষ্ক্রিয় করুন** | বন্ধ | Ultimate Multisite membership স্ট্যাটাসের সঙ্গে সংযুক্ত হয়। চালু করলে, সক্রিয় membership নেই এমন সাইটগুলোর জন্য চ্যাট লুকানো থাকে। |

### ব্র্যান্ডিং ফ্ল্যাগ

| ফ্ল্যাগ | ডিফল্ট | বিবরণ |
|---|---|---|
| **"Powered by Gratis AI Agent" ফুটার লুকান** | বন্ধ | চ্যাট উইজেটের নিচে দেখানো ব্র্যান্ডিং অ্যাট্রিবিউশন লাইন সরিয়ে দেয়। হোয়াইট-লেবেল ডিপ্লয়মেন্টের জন্য সুপারিশ করা হয়। |
| **কাস্টম এজেন্ট নাম** | *(ফাঁকা)* | চ্যাট হেডার এবং অ্যাডমিন মেনুতে থাকা ডিফল্ট "Gratis AI Agent" লেবেল আপনার নিজস্ব পণ্যের নামে বদলে দেয়। ডিফল্ট ব্যবহার করতে ফাঁকা রাখুন। |
| **এজেন্ট পিকার লুকান** | বন্ধ | চালু করলে, ব্যবহারকারীরা পাঁচটি বিল্ট-ইন এজেন্টের মধ্যে বদলাতে পারবেন না। Settings → General-এ ডিফল্ট হিসেবে যা কনফিগার করা আছে, বর্তমান এজেন্ট সেটিতেই স্থির থাকবে। |
| **চ্যাট অ্যাভাটার হিসেবে সাইট আইকন ব্যবহার করুন** | বন্ধ | চ্যাট উইজেট হেডারের ডিফল্ট AI আইকনকে WordPress সাইট আইকন দিয়ে বদলে দেয় (Appearance → Customize → Site Identity-এর অধীনে সেট করা)। |

### অটোমেশন নিরাপত্তা ফ্ল্যাগ

Superdav AI Agent v1.18.0 আরও নিরাপদ অটোমেশন রানগুলোর জন্য মানব অনুমোদন গেট এবং রিমাইন্ডার রেকর্ড যুক্ত করে। ইনস্টল করা প্যাকেজের ওপর নির্ভর করে, এই নিয়ন্ত্রণগুলো ফিচার ফ্ল্যাগ বা উন্নত অটোমেশন সেটিংসে দেখা যেতে পারে।

| ফ্ল্যাগ | ডিফল্ট | বিবরণ |
|---|---|---|
| **মানব অনুমোদন প্রয়োজন** | চালু রাখা সুপারিশকৃত | কোনো অনুমোদিত ব্যবহারকারী প্রস্তাবিত কাজ পর্যালোচনা ও নিশ্চিত না করা পর্যন্ত সংবেদনশীল অটোমেশন থামিয়ে রাখে। |
| **রিমাইন্ডার ডিডুপ্লিকেশন** | চালু | পাঠানো রিমাইন্ডার রেকর্ড করে, যাতে পুনরায় চেষ্টা বা নির্ধারিত রান ডুপ্লিকেট নোটিফিকেশন না পাঠায়। |
| **ক্যালেন্ডার টুলস চালু করুন** | কনফিগার না করা পর্যন্ত বন্ধ | এজেন্টকে কনফিগার করা Google ক্যালেন্ডার ও ইভেন্ট পড়ার অনুমতি দেয়। |
| **SMS নোটিফিকেশন চালু করুন** | কনফিগার না করা পর্যন্ত বন্ধ | ক্রেডেনশিয়াল সংরক্ষণ করার পর অনুমোদিত ওয়ার্কফ্লোকে TextBee SMS নোটিফিকেশন পাঠানোর অনুমতি দেয়। |

### পরিবর্তন প্রয়োগ করা

যেকোনো ফ্ল্যাগ টগল করার পরে **সেটিংস সংরক্ষণ করুন**-এ ক্লিক করুন। পরিবর্তন সঙ্গে সঙ্গে কার্যকর হয় — কোনো ক্যাশ ফ্লাশ বা plugin পুনরায় সক্রিয় করার দরকার নেই।
