---
title: ক্ষমতা দৃশ্যমানতা
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# ক্ষমতা দৃশ্যমানতা (Ability Visibility) {#ability-visibility}

Superdav AI Agent v1.12.0-এ **Ability Visibility** কন্ট্রোল যোগ করা হয়েছে, যা নিয়ন্ত্রণ করে কোন কোন ইন্টারফেসে বা প্ল্যাটফর্মে কোন ক্ষমতা (ability) প্রদর্শিত হবে। এর ফলে অ্যাডমিনিস্ট্রেটররা সূক্ষ্মভাবে নিয়ন্ত্রণ করতে পারেন যে কোন এজেন্ট ক্ষমতাগুলো REST API, MCP সার্ভার, WooCommerce ইন্টিগ্রেশন এবং অন্যান্য ইন্টারফেসের মাধ্যমে উপলব্ধ থাকবে।

## Ability Visibility কী? {#what-is-ability-visibility}

Ability Visibility হলো একটি পারমিশন সিস্টেম যা নিয়ন্ত্রণ করে:

- কোন কোন ক্ষমতা এজেন্টদের জন্য উপলব্ধ
- সেগুলো কোথায় প্রদর্শিত হবে (REST API, MCP, WooCommerce, ইত্যাদি)
- কারা এগুলো অ্যাক্সেস করতে পারবে (পার্টনার Allow-list এর মাধ্যমে)
- এগুলো কীভাবে শ্রেণীবদ্ধ করা হয়েছে (recognized নাকি unclassified)

প্রতিটি ক্ষমতার একটি দৃশ্যমানতা স্তর (visibility level) থাকে, যা বিভিন্ন প্ল্যাটফর্মে এর উপলব্ধতা নির্ধারণ করে।

## দৃশ্যমানতা স্তরসমূহ (Visibility Levels) {#visibility-levels}

### Public (পাবলিক) {#public}

**Public abilities** সব জায়গায় উপলব্ধ:

- REST API endpoints
- MCP সার্ভার
- WooCommerce ইন্টিগ্রেশন
- চ্যাট ইন্টারফেস
- সমস্ত ইউজার রোল (উপযুক্ত পারমিশন সহ)

উদাহরণ: `scaffold-block-theme`, `activate-theme`, `send-email`

### Internal (অভ্যন্তরীণ) {#internal}

**Internal abilities** শুধুমাত্র আপনার WordPress ইনস্টলেশনের মধ্যেই উপলব্ধ:

- চ্যাট ইন্টারফেস
- অ্যাডমিন প্যানেল
- শুধুমাত্র লগইন করা ব্যবহারকারীরা
- REST API বা বাহ্যিক ইন্টিগ্রেশনের মাধ্যমে প্রদর্শিত হয় না

উদাহরণ: `manage-settings`, `view-analytics`, `export-data`

### Partner (পার্টনার) {#partner}

**Partner abilities** শুধুমাত্র Whitelisted পার্টনারদের জন্য উপলব্ধ:

- এর জন্য স্পষ্ট পার্টনার Allow-list এ এন্ট্রি প্রয়োজন
- পার্টনার ক্রেডেনশিয়াল সহ REST API এর মাধ্যমে উপলব্ধ
- পার্টনার অথেন্টিকেশন সহ MCP এর মাধ্যমে উপলব্ধ
- সাধারণ ব্যবহারকারীদের জন্য উপলব্ধ নয়

উদাহরণ: `bulk-import-users`, `modify-billing`, `access-analytics`

### Disabled (নিষ্ক্রিয়) {#disabled}

**Disabled abilities** কোথাও উপলব্ধ নয়:

- কোনো প্ল্যাটফর্মের মাধ্যমে প্রদর্শিত হয় না
- চ্যাটে উপলব্ধ নয়
- অ্যাডমিন প্যানেলে উপলব্ধ নয়
- যা বাতিল বা পরীক্ষামূলক ক্ষমতার জন্য উপযোগী

## Ability Visibility পরিচালনা করা {#managing-ability-visibility}

### Ability Visibility সেটিংসে অ্যাক্সেস করা {#accessing-ability-visibility-settings}

১. **WordPress Admin** → **Superdav AI Agent** → **Settings** এ যান।
২. **Abilities** ট্যাবে ক্লিক করুন।
৩. আপনি সমস্ত ইনস্টল করা ক্ষমতা এবং তাদের দৃশ্যমানতা স্তরগুলির একটি তালিকা দেখতে পাবেন।

### Ability বিবরণ দেখা {#viewing-ability-details}

কোনো ক্ষমতার উপর ক্লিক করলে আপনি দেখতে পাবেন:

- **Name**: ক্ষমতার শনাক্তকারী (identifier)
- **Description**: ক্ষমতাটি কী কাজ করে
- **Current visibility**: Public, Internal, Partner, নাকি Disabled
- **Partner allow-list**: কোন পার্টনাররা অ্যাক্সেস করতে পারে (যদি Partner visibility হয়)
- **Last updated**: কখন দৃশ্যমানতা শেষবার পরিবর্তন করা হয়েছিল
- **Status**: Recognized নাকি Unclassified

### দৃশ্যমানতা স্তর পরিবর্তন করা {#changing-visibility-levels}

একটি ক্ষমতার দৃশ্যমানতা পরিবর্তন করতে:

১. তালিকা থেকে ক্ষমতাটিতে ক্লিক করুন।
২. ড্রপডাউন থেকে একটি নতুন দৃশ্যমানতা স্তর নির্বাচন করুন।
৩. যদি "Partner" নির্বাচন করেন, তবে Allow-list এ পার্টনার আইডিগুলো যোগ করুন।
৪. **Save** এ ক্লিক করুন।

উদাহরণ:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### বাল্ক অপারেশন (Bulk Operations) {#bulk-operations}

একাধিক ক্ষমতার দৃশ্যমানতা পরিবর্তন করতে:

১. ক্ষমতাগুলোর পাশে থাকা বক্সগুলো চেক করুন।
২. বাল্ক অ্যাকশন ড্রপডাউন থেকে একটি নতুন দৃশ্যমানতা স্তর নির্বাচন করুন।
৩. **Apply** এ ক্লিক করুন।

## Partner Allow-List {#partner-allow-list}

**partner allow-list** নিয়ন্ত্রণ করে কোন বাহ্যিক পার্টনাররা Partner-level ক্ষমতাগুলো অ্যাক্সেস করতে পারবে।

### পার্টনার যোগ করা {#adding-partners}

১. **Superdav AI Agent** → **Settings** → **Partners** এ যান।
২. **Add Partner** এ ক্লিক করুন।
৩. পার্টনার শনাক্তকারী (সাধারণত একটি API key বা organization ID) লিখুন।
৪. ঐচ্ছিকভাবে একটি পার্টনার নাম এবং বিবরণ যোগ করুন।
৫. **Save** এ ক্লিক করুন।

### পার্টনারদের ক্ষমতা বরাদ্দ করা {#assigning-abilities-to-partners}

একটি পার্টনার যোগ করার পরে:

১. **Abilities** ট্যাবে যান।
২. Partner visibility সহ একটি ক্ষমতা খুঁজুন।
৩. এডিট করতে ক্লিক করুন।
৪. "Partner allow-list" সেকশনে, যে পার্টনাররা অ্যাক্সেস করবে তাদের বক্সগুলো চেক করুন।
৫. **Save** এ ক্লিক করুন।

### পার্টনার অ্যাক্সেস প্রত্যাহার করা {#revoking-partner-access}

একটি পার্টনারের অ্যাক্সেস সরিয়ে দিতে:

১. ক্ষমতাটি এডিট করুন।
২. Allow-list থেকে পার্টনারের বক্সটি আনচেক করুন।
৩. **Save** এ ক্লিক করুন।

পার্টনারটি সঙ্গে সঙ্গে সেই ক্ষমতাটি অ্যাক্সেস করতে পারবে না।

## Unclassified Abilities (শ্রেণীবদ্ধ নয় এমন ক্ষমতা) {#unclassified-abilities}

যখন আপনি একটি থার্ড-পার্টি ক্ষমতা ইনস্টল করেন যা Superdav AI Agent চিনতে পারে না, তখন এটিকে **Unclassified** হিসেবে চিহ্নিত করা হয়।

### Unclassified Abilities এর জন্য অ্যাডমিন নোটিশ {#admin-notice-for-unclassified-abilities}

আপনি একটি অ্যাডমিন নোটিশ দেখতে পাবেন:

```
⚠️ Unclassified Abilities Detected

The following abilities were installed but are not recognized:
- custom-import-tool
- external-api-wrapper

These abilities may pose security or compatibility risks.
Please review and classify them.

[Review Abilities] [Dismiss]
```

### Unclassified Abilities পর্যালোচনা করা {#reviewing-unclassified-abilities}

১. নোটিশের মধ্যে **Review Abilities** এ ক্লিক করুন।
২. প্রতিটি unclassified ক্ষমতার জন্য আপনি দেখতে পাবেন:
   - ক্ষমতার নাম এবং বিবরণ
   - উৎস (কোন প্লাগইন/অ্যাডন এটি ইনস্টল করেছে)
   - প্রস্তাবিত দৃশ্যমানতা স্তর
   - নিরাপত্তা মূল্যায়ন

৩. একটি দৃশ্যমানতা স্তর বেছে নিন:
   - **Public**: ক্ষমতাটিতে বিশ্বাস করুন; সব জায়গায় এটি প্রদর্শন করুন।
   - **Internal**: শুধুমাত্র অভ্যন্তরীণ ব্যবহারের জন্য সীমাবদ্ধ করুন।
   - **Partner**: নির্দিষ্ট পার্টনারদের জন্য সীমাবদ্ধ করুন।
   - **Disabled**: এই ক্ষমতাটি ব্যবহার করবেন না।

৪. আপনার সিদ্ধান্ত সংরক্ষণ করতে **Classify** এ ক্লিক করুন।

### Unclassified Abilities কেন শ্রেণীবদ্ধ করা উচিত? {#why-classify-unclassified-abilities}

ক্ষমতাগুলো শ্রেণীবদ্ধ করার সুবিধা:

- **নিরাপত্তা উন্নত করে**: আপনি স্পষ্টভাবে অনুমোদন করেন যে কী কী প্রদর্শিত হবে।
- **দুর্ঘটনা রোধ করে**: Unclassified ক্ষমতাগুলো ডিফল্টভাবে নিষ্ক্রিয় থাকে।
- **বৈশিষ্ট্য সক্ষম করে**: একবার শ্রেণীবদ্ধ হলে, ক্ষমতাটি ব্যবহার করার জন্য উপলব্ধ হয়।
- **সিদ্ধান্ত নথিভুক্ত করে**: অডিটের উদ্দেশ্যে আপনার পছন্দগুলো লগ করা হয়।

## বিভিন্ন প্ল্যাটফর্মে দৃশ্যমানতা (Visibility in Different Surfaces) {#visibility-in-different-surfaces}

### REST API {#rest-api}

**Public abilities** REST endpoints এর মাধ্যমে উপলব্ধ:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Internal এবং Partner abilities** REST API এর মাধ্যমে উপলব্ধ নয়।

### MCP সার্ভার {#mcp-servers}

**Public abilities** MCP এর মাধ্যমে উপলব্ধ:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**Internal abilities** MCP এর মাধ্যমে প্রদর্শিত হয় না।

**Partner abilities** শুধুমাত্র পার্টনার ক্রেডেনশিয়াল সহ উপলব্ধ।

### WooCommerce ইন্টিগ্রেশন {#woocommerce-integration}

WooCommerce সম্পর্কিত **Public abilities** উপলব্ধ:

- প্রোডাক্ট ম্যানেজমেন্ট
- অর্ডার প্রসেসিং
- কাস্টমার কমিউনিকেশন

**Internal abilities** WooCommerce এর কাছে প্রদর্শিত হয় না।

### চ্যাট ইন্টারফেস {#chat-interface}

**সমস্ত ক্ষমতা** (Public, Internal, Partner) চ্যাটে উপলব্ধ, যা ব্যবহারকারীর পারমিশনের উপর নির্ভর করে:

- অ্যাডমিনিস্ট্রেটররা সমস্ত ক্ষমতা দেখতে পান।
- সাধারণ ব্যবহারকারীরা শুধুমাত্র Public ক্ষমতা দেখতে পান।
- পার্টনাররা Public + Partner ক্ষমতা দেখতে পান (যদি Whitelisted হয়)।

## নিরাপত্তা সেরা অনুশীলন (Security Best Practices) {#security-best-practices}

### Principle of Least Privilege (সর্বনিম্ন সুযোগের নীতি) {#principle-of-least-privilege}

- ক্ষমতাগুলো সবচেয়ে সীমাবদ্ধ দৃশ্যমানতায় সেট করুন যা তাদের ব্যবহার করার অনুমতি দেয়।
- সংবেদনশীল অপারেশনের জন্য Partner visibility ব্যবহার করুন।
- যে ক্ষমতাগুলো আপনি ব্যবহার করেন না, সেগুলো নিষ্ক্রিয় করুন।

### নিয়মিত অডিট (Regular Audits) {#regular-audits}

- মাসিক ভিত্তিতে ক্ষমতাগুলোর দৃশ্যমানতা পর্যালোচনা করুন।
- unclassified ক্ষমতাগুলোর জন্য পরীক্ষা করুন।
- অব্যবহৃত পার্টনারদের অ্যাক্সেস সরিয়ে দিন।

### লগিং এবং মনিটরিং (Logging and Monitoring) {#logging-and-monitoring}

- কোন ক্ষমতাগুলো সবচেয়ে বেশি ব্যবহৃত হচ্ছে তা পর্যবেক্ষণ করুন।
- পার্টনারদের অ্যাক্সেস প্যাটার্ন ট্র্যাক করুন।
- অস্বাভাবিক ক্ষমতা ব্যবহারের ক্ষেত্রে সতর্ক হোন।

### থার্ড-পার্টি ক্ষমতা (Third-Party Abilities) {#third-party-abilities}

- সক্ষম করার আগে থার্ড-পার্টি ক্ষমতাগুলো পর্যালোচনা করুন।
- স্পষ্টভাবে শ্রেণীবদ্ধ করুন।
- Internal বা Partner visibility দিয়ে শুরু করুন।
- শুধুমাত্র যাচাই করার পরে Public এ উন্নীত করুন।

## সমস্যা সমাধান (Troubleshooting) {#troubleshooting}

**যদি তালিকায় কোনো ক্ষমতা না দেখায়**
- যাচাই করুন যে ক্ষমতাটি ইনস্টল এবং সক্রিয় আছে।
- নিশ্চিত করুন যে প্লাগইন/অ্যাডনটি সক্ষম করা আছে।
- পেজটি রিফ্রেশ করুন।

**যদি কোনো ক্ষমতার দৃশ্যমানতা পরিবর্তন করতে না পারেন**
- যাচাই করুন যে আপনার অ্যাডমিনিস্ট্রেটর পারমিশন আছে।
- পরীক্ষা করুন যে কোনো প্লাগইন দ্বারা ক্ষমতাটি লক করা আছে কিনা।
- সংঘাতপূর্ণ প্লাগইনগুলো নিষ্ক্রিয় করার চেষ্টা করুন।

**যদি কোনো পার্টনার কোনো ক্ষমতা অ্যাক্সেস করতে না পারে**
- যাচাই করুন যে পার্টনারটি allow-list এ আছে।
- পরীক্ষা করুন যে ক্ষমতার দৃশ্যমানতা Partner এ সেট করা আছে।
- নিশ্চিত করুন যে পার্টনারের ক্রেডেনশিয়ালগুলো সঠিক।
- প্রমাণীকরণ ত্রুটির জন্য API লগ চেক করুন।

**যদি unclassified ক্ষমতাগুলো বারবার দেখা যায়**
- অ্যাডমিন নোটিশে সেগুলো পর্যালোচনা ও শ্রেণীবদ্ধ করুন।
- নিশ্চিত করুন যে আপনার শ্রেণীবদ্ধকরণটি সেভ হয়েছে।
- যাচাই করুন যে ক্ষমতাটি প্রদানকারী প্লাগইনটি আপ টু ডেট।

## Legacy Mode থেকে মাইগ্রেশন (Migration from Legacy Mode) {#migration-from-legacy-mode}

আপনি যদি Superdav AI Agent এর পুরোনো সংস্করণ থেকে আপগ্রেড করেন:

- সমস্ত বিদ্যমান ক্ষমতা স্বয়ংক্রিয়ভাবে Public হিসেবে শ্রেণীবদ্ধ হয়।
- প্রয়োজন অনুযায়ী দৃশ্যমানতা পর্যালোচনা ও সামঞ্জস্য করুন।
- অ্যাক্সেস সীমাবদ্ধ করতে চাইলে ছাড়া কোনো পদক্ষেপের প্রয়োজন নেই।

Native Abilities API ইন্টিগ্রেশনে স্থানান্তরের আরও বিস্তারিত তথ্যের জন্য **Third-Party Mode Migration** দেখুন।

## পরবর্তী পদক্ষেপ (Next Steps) {#next-steps}

ability visibility কনফিগার করার পরে:

১. **আপনার ক্ষমতাগুলো পর্যালোচনা করুন**: সমস্ত ইনস্টল করা ক্ষমতা অডিট করুন।
২. **unclassified ক্ষমতাগুলো শ্রেণীবদ্ধ করুন**: অ্যাডমিন নোটিশে সাড়া দিন।
৩. **পার্টনার সেটআপ করুন**: যদি Partner visibility ব্যবহার করেন তবে পার্টনার যোগ করুন।
৪. **ব্যবহার পর্যবেক্ষণ করুন**: কোন ক্ষমতাগুলো সবচেয়ে বেশি ব্যবহৃত হচ্ছে তা ট্র্যাক করুন।
৫. **সিদ্ধান্তগুলো নথিভুক্ত করুন**: আপনি প্রতিটি দৃশ্যমানতা স্তর বেছে নেওয়ার কারণগুলো লিখে রাখুন।
