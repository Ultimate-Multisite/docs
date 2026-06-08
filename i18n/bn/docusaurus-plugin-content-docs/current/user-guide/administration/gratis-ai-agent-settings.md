---
title: ফ্রি এআই এজেন্ট সেটিংস
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Gratis AI Agent Settings

Gratis AI Agent-এর **Settings → Advanced** স্ক্রিনটি v1.5.0-এ যুক্ত হওয়া ব্যাকএন্ড ইন্টিগ্রেশনগুলির জন্য অ্যাডমিনিস্ট্রেটর-স্তরের কনফিগারেশন প্রদান করে। এই পেজটি **Feedback Endpoint** ফিল্ড এবং তাদের প্রত্যাশিত ফরম্যাট সম্পর্কে নথিভুক্ত করে।

## Settings অ্যাক্সেস করা

১. WordPress অ্যাডমিন প্যানেলে যান এবং **Gratis AI Agent → Settings** এ যান।
২. **Advanced** ট্যাবে ক্লিক করুন।

## Feedback Endpoint কনফিগারেশন

ব্যবহারকারী যখন থumbs-down বাটন, auto-prompt banner, অথবা `/report-issue` কমান্ডের মাধ্যমে কোনো ফিডব্যাক জমা দেন, তখন AI agent থেকে ফিডব্যাক এন্ডপয়েন্টটি POST রিকোয়েস্ট গ্রহণ করে।

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | যে URL টি JSON বডি সহ HTTP POST রিকোয়েস্ট হিসেবে ফিডব্যাক সাবমিশন গ্রহণ করে। |
| **Feedback API Key** | প্রতিটি ফিডব্যাক রিকোয়েস্টের `Authorization` হেডার-এ পাঠানো একটি bearer token। যদি আপনার এন্ডপয়েন্টের অথেন্টিকেশনের প্রয়োজন না হয়, তবে এটি ফাঁকা রাখুন। |

### প্রত্যাশিত JSON Payload

আপনার ফিডব্যাক এন্ডপয়েন্টটিকে অবশ্যই নিম্নলিখিত ফিল্ডগুলি সহ একটি JSON বডি গ্রহণ করতে হবে:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

কথোপকথনের প্রেক্ষাপট অনুযায়ী পেলোডে অতিরিক্ত ফিল্ড থাকতে পারে।

### `triage_category` মানসমূহ

পেলোডটি ফরোয়ার্ড করার আগে AI triage লেয়ার নিম্নলিখিত মানগুলির মধ্যে একটি `triage_category`-এ বরাদ্দ করে:

| Value | Meaning |
|---|---|
| `factual_error` | সহকারী ভুল তথ্য প্রদান করেছে। |
| `unhelpful_answer` | উত্তরটি প্রযুক্তিগতভাবে সঠিক হলেও সহায়ক নয়। |
| `inappropriate_content` | উত্তরে এমন কনটেন্ট ছিল যা ব্যবহারকারীদের দেখানো উচিত নয়। |
| `other` | ফিডব্যাকটি কোনো পরিচিত ক্যাটাগরির সাথে মিলল না। |

### Authentication

যদি আপনার এন্ডপয়েন্টের অথেন্টিকেশনের প্রয়োজন হয়, তবে **Feedback API Key** ফিল্ডে আপনার bearer token সেট করুন। agent টি পাঠায়:

```
Authorization: Bearer <your-api-key>
```

যদি **Feedback API Key** ফিল্ডটি ফাঁকা থাকে, তবে কোনো `Authorization` হেডার পাঠানো হয় না।

### ফিডব্যাক সংগ্রহ নিষ্ক্রিয় করা

**Feedback Endpoint URL** এবং **Feedback API Key** উভয় ফিল্ডই ফাঁকা রাখুন। থumbs-down বাটন এবং ফিডব্যাক UI ব্যবহারকারীদের জন্য দৃশ্যমান থাকবে, তবে সাবমিশনগুলি কোনো বাহ্যিক সার্ভিসে ফরোয়ার্ড হবে না।

## Brave Search API Key

**Advanced** ট্যাবে আরও, **Brave Search API Key** ফিল্ডটি [Internet Search](../configuration/internet-search) ক্ষমতাটি সক্ষম করে।

| Field | Description |
|---|---|
| **Brave Search API Key** | Brave Search developer dashboard থেকে আপনার API key। AI সহকারীতে ইন্টারনেট সার্চ সক্ষম করতে এটি প্রয়োজন। |

ফিল্ড লেবেলে Brave Search API সাইন-আপ পেজের একটি ক্লিকযোগ্য লিঙ্ক রয়েছে। ইন্টারনেট সার্চ নিষ্ক্রিয় করতে এটি ফাঁকা রাখুন।

এই ফিচারের জন্য end-user ডকুমেন্টেশনের জন্য [Internet Search](../configuration/internet-search) দেখুন।

## Feature Flags

v1.9.0-এও যুক্ত হওয়া **Settings → Feature Flags** ট্যাবটি ঐচ্ছিক কার্যকারিতার জন্য টগল সুইচ প্রদান করে। প্রতিটি ফ্ল্যাগ হয় নেটওয়ার্ক-ব্যাপী সক্ষম বা নিষ্ক্রিয়; এই মুহূর্তে কোনো সাইট-ভিত্তিক ওভাররাইড নেই।

### Accessing Feature Flags

১. WordPress অ্যাডমিন প্যানেলে যান এবং **Gratis AI Agent → Settings** এ যান।
২. **Feature Flags** ট্যাবে ক্লিক করুন।

### Access Control Flags

| Flag | Default | Description |
|---|---|---|
| **Restrict to Administrators** | Off | এটি সক্ষম করলে, শুধুমাত্র `administrator` রোলের ব্যবহারকারীরাই AI Agent chat panel খুলতে পারবে। অন্যান্য সমস্ত রোল "Contact your administrator" বার্তা দেখতে পাবে। |
| **Restrict to Network Admins** | Off | একটি multisite নেটওয়ার্কে এটি সক্ষম করলে, শুধুমাত্র Super Admin ব্যবহার করতে পারবে। স্বতন্ত্র সাইট অ্যাডমিনরা ব্লক হয়ে যাবে। যদি উভয়ই সক্ষম থাকে তবে এটি "Restrict to Administrators"-এর উপর প্রাধান্য পাবে। |
| **Allow Subscriber Access** | Off | এটি সক্ষম করলে, `subscriber` রোলের ব্যবহারকারীরা চ্যাট ইন্টারফেস ব্যবহার করতে পারবে তবে তারা শুধুমাত্র read-only ক্ষমতা (পোস্ট তৈরি বা সেটিংস পরিবর্তন নয়) দ্বারা সীমাবদ্ধ থাকবে। |
| **Disable for Non-Members** | Off | Ultimate Multisite membership স্ট্যাটাসের সাথে ইন্টিগ্রেটেড। এটি সক্ষম করলে, যে সাইটগুলিতে সক্রিয় মেম্বারশিপ নেই, সেখানে চ্যাট লুকানো থাকবে। |

### Branding Flags

| Flag | Default | Description |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Off | চ্যাট উইজেটের নিচে দেখানো ব্র্যান্ডিং অ্যাট্রিবিউশন লাইনটি সরিয়ে দেয়। হোয়াইট-লেবেল ডিপ্লয়মেন্টের জন্য এটি প্রস্তাবিত। |
| **Custom Agent Name** | *(blank)* | চ্যাট হেডার এবং অ্যাডমিন মেনুতে ডিফল্ট "Gratis AI Agent" লেবেলটিকে আপনার নিজস্ব প্রোডাক্ট নাম দিয়ে প্রতিস্থাপন করে। ডিফল্ট ব্যবহার করতে ফাঁকা রাখুন। |
| **Hide Agent Picker** | Off | এটি সক্ষম করলে, ব্যবহারকারীরা পাঁচটি বিল্ট-ইন এজেন্টের মধ্যে পরিবর্তন করতে পারবে না। বর্তমান এজেন্টটি Settings → General-এ ডিফল্ট হিসাবে যা কনফিগার করা আছে, তাতে স্থির থাকে। |
| **Use Site Icon as Chat Avatar** | Off | চ্যাট উইজেটের হেডারে ডিফল্ট AI আইকনটিকে ওয়ার্ডপ্রেস সাইট আইকন (Appearance → Customize → Site Identity-এর অধীনে সেট করা) দিয়ে প্রতিস্থাপন করে। |

### Applying Changes

যেকোনো ফ্ল্যাগ টগল করার পরে **Save Settings** এ ক্লিক করুন। পরিবর্তনগুলি তাৎক্ষণিকভাবে কার্যকর হয় — কোনো ক্যাশে ফ্ল্যাশ বা প্লাগইন রিঅ্যাক্টিভেশন করার প্রয়োজন নেই।
