---
title: ক্ষমতা দৃশ্যমানতা
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Ability Visibility (ক্ষমতাৰ দৃশ্যমানতা) {#ability-visibility}

Superdav AI Agent v1.12.0 ত **Ability Visibility** নিয়ন্ত্ৰণ যোগ কৰা হৈছে, যিয়ে নিৰ্ধাৰণ কৰে যে কোন কোন 'Ability' (ক্ষমতা) ক কোন কোন স্থানত প্ৰকাশ কৰা হ'ব। ই প্রশাসকসকলক নিখুঁতভাৱে সামঞ্জস্য কৰাত সহায় কৰে যে কোন এজেণ্ট ক্ষমতা REST APIs, MCP সার্ভাৰ, WooCommerce ইন্টিগ্ৰেচন, আৰু অন্যান্য আন্তঃপৃষ্ঠত উপলব্ধ হ'ব।

## Ability Visibility কি? {#what-is-ability-visibility}

Ability Visibility এটা অনুমতি প্ৰণালী (permission system) যিয়ে তলত দিয়া বিষয়সমূহ নিয়ন্ত্ৰণ কৰে:

- **কোন ক্ষমতা** এজেণ্টসকলৰ বাবে উপলব্ধ
- **কোঁৱল স্থানত প্ৰকাশ কৰা হয়** (REST API, MCP, WooCommerce, আদি)
- **কাৰ দ্বাৰা প্ৰৱেশ কৰিব পাৰি** (পাৰ্টনাৰ Allow-list যোগে)
- **কিদৰে সংৰক্ষিত কৰা হয়** (recognized বুলি জনা বা unclassified)

প্ৰত্যেক ক্ষমতাৰ এটা দৃশ্যমানতা স্তৰ (visibility level) থাকে, যিয়ে বিভিন্ন স্থানত ইয়াৰ উপলব্ধতা নিৰ্ধাৰণ কৰে।

## Visibility Levels (দৃশ্যমানতা স্তৰ) {#visibility-levels}

### Public (পাবলিক) {#public}

**Public abilities** সকলো ঠাইতে উপলব্ধ:

- REST API endpoints
- MCP servers
- WooCommerce integrations
- Chat interfaces
- সকলো ব্যৱহাৰকাৰী ভূমিকা (উপযুক্ত অনুমতিৰ সৈতে)

উদাহৰণ: `scaffold-block-theme`, `activate-theme`, `send-email`

### Internal (অভ্যন্তরীণ) {#internal}

**Internal abilities** কেৱল আপোনাৰ WordPress ইন্টিলেচনৰ ভিতৰতহে উপলব্ধ:

- Chat interfaces
- Admin panels
- কেৱল লগইন কৰা ব্যৱহাৰকাৰীসকলৰ বাবে
- REST API বা বাহ্যিক ইন্টিগ্ৰেচনৰ দ্বাৰা প্ৰকাশ নহয়

উদাহৰণ: `manage-settings`, `view-analytics`, `export-data`

### Partner (পাৰ্টনাৰ) {#partner}

**Partner abilities** কেৱল Whitelisted অংশীদাৰসকলৰ বাবে উপলব্ধ:

- ইয়াৰ বাবে স্পষ্টকৈ অংশীদাৰ Allow-list এন্ট্ৰীৰ প্ৰয়োজন
- অংশীদাৰ শ্ৰেষ্ঠনৰ সৈতে REST APIৰ দ্বাৰা উপলব্ধ
- অংশীদাৰ প্ৰমাণীকৰণৰ সৈতে MCPৰ দ্বাৰা উপলব্ধ
- সাধাৰণ ব্যৱহাৰকাৰীসকলৰ বাবে উপলব্ধ নহয়

উদাহৰণ: `bulk-import-users`, `modify-billing`, `access-analytics`

### Disabled (নিষ্ক্ৰিয়) {#disabled}

**Disabled abilities** কোনো স্থানতে উপলব্ধ নহয়:

- কোনো স্থানৰ দ্বাৰা প্ৰকাশ নহয়
- চ্যাটত উপলব্ধ নহয়
- Admin panels ত উপলব্ধ নহয়
- বাতিল কৰা বা পৰীক্ষামূলক ক্ষমতাৰ বাবে ব্যৱহাৰিক

## Managing Ability Visibility (ক্ষমতাৰ দৃশ্যমানতা ব্যৱস্থাপনা) {#managing-ability-visibility}

### Accessing Ability Visibility Settings (Ability Visibility Settings লৈ যোৱা) {#accessing-ability-visibility-settings}

1. **WordPress Admin** → **Superdav AI Agent** → **Settings** লৈ যাওক
2. **Abilities** ট্ৰিখন ক্লিক কৰক
3. আপুনি সকলো স্থাপন কৰা ক্ষমতাৰ তালিকা আৰু তেওঁলোকৰ দৃশ্যমানতা স্তৰ দেখিব।

### Viewing Ability Details (Abilityৰ বিৱৰণ দেখা) {#viewing-ability-details}

কোনো ক্ষমতাৰ ওপৰত ক্লিক কৰি আপুনি তলত দিয়া তথ্যসমূহ দেখিব:

- **Name**: ক্ষমতাৰ চিনাক্তকৰণ (identifier)
- **Description**: ক্ষমতাটো কি কৰে
- **Current visibility**: Public, Internal, Partner, বা Disabled
- **Partner allow-list**: কোন অংশীদাৰসকলে প্ৰৱেশ কৰিব পাৰে (যদি Partner visibility হয়)
- **Last updated**: দৃশ্যমানতা শেষবাৰৰ পৰিৱৰ্তন কৰা সময়
- **Status**: Recognized বা Unclassified

### Changing Visibility Levels (দৃশ্যমানতা স্তৰ সলনি কৰা) {#changing-visibility-levels}

এটা ক্ষমতাৰ দৃশ্যমানতা সলনি কৰিবলৈ:

1. তালিকাৰ পৰা ক্ষমতাটোত ক্লিক কৰক
2. ড্রপডাউনৰ পৰা এটা নতুন দৃশ্যমানতা স্তৰ বাছি লওক
3. যদি "Partner" বাছি লয়, তেন্তে Allow-list ত অংশীদাৰ চিনাক্তকৰণ যোগ কৰক
4. **Save** ক্লিক কৰক

উদাহৰণ:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Bulk Operations (বৃহৎ কাৰ্য্যকলাপ) {#bulk-operations}

বহু ক্ষমতাৰ বাবে দৃশ্যমানতা সলনি কৰিবলৈ:

1. ক্ষমতাৰ কাষত থকা বক্সবোৰ টিক কৰক
2. বৃহৎ কাৰ্য্যকলাপ ড্রপডাউনৰ পৰা এটা নতুন দৃশ্যমানতা স্তৰ বাছি লওক
3. **Apply** ক্লিক কৰক

## Partner Allow-List (অংশীদাৰ Allow-List) {#partner-allow-list}

**partner allow-list** নিৰ্ধাৰণ কৰে যে কোন বাহ্যিক অংশীদাৰসকলে Partner-level abilities ব্যৱহাৰ কৰিব পাৰিব।

### Adding Partners (অংশীদাৰ যোগ কৰা) {#adding-partners}

1. **Superdav AI Agent** → **Settings** → **Partners** লৈ যাওক
2. **Add Partner** ক্লিক কৰক
3. অংশীদাৰ চিনাক্তকৰণটো প্ৰৱেশ কৰক (সাধাৰণতে এটা API key বা organization ID)
4. ঐচ্ছিকভাৱে এটা অংশীদাৰৰ নাম আৰু বৰ্ণনা যোগ কৰক
5. **Save** ক্লিক কৰক

### Assigning Abilities to Partners (অংশীদাৰসকলক ক্ষমতা নিৰ্যাস কৰা) {#assigning-abilities-to-partners}

এটা অংশীদাৰ যোগ কৰাৰ পিছত:

1. **Abilities** ট্ৰিখন লৈ যাওক
2. Partner visibility থকা এটা ক্ষমতা বিচাৰি উলিয়াওক
3. সম্পাদনা কৰিবলৈ ক্লিক কৰক
4. "Partner allow-list" অংশত, যি অংশীদাৰসকলে প্ৰৱেশ কৰিব লাগে, তাৰ বাবে বক্সবোৰ টিক কৰক
5. **Save** ক্লিক কৰক

### Revoking Partner Access (অংশীদাৰৰ প্ৰৱেশ বাতিল কৰা) {#revoking-partner-access}

এটা অংশীদাৰৰ প্ৰৱেশ বাতিল কৰিবলৈ:

1. ক্ষমতাটো সম্পাদনা কৰক
2. Allow-list ত অংশীদাৰৰ বক্সটো আনটিক কৰক
3. **Save** ক্লিক কৰক

অংশীদাৰে তৎক্ষণাত সেই ক্ষমতাটোৰ প্ৰৱেশ হেৰুৱাই পেলাব।

## Unclassified Abilities (অসংৰক্ষিত ক্ষমতা) {#unclassified-abilities}

যেতিয়া আপুনি এটা তৃতীয় পক্ষৰ ক্ষমতা স্থাপন কৰে যাক Superdav AI Agent চিনাক্ত কৰিব নোৱारे, তেতিয়া ইয়াক **Unclassified** বুলি চিহ্নিত কৰা হয়।

### Admin Notice for Unclassified Abilities (Unclassified Abilitiesৰ বাবে Admin Notice) {#admin-notice-for-unclassified-abilities}

আপুনি এটা Admin notice দেখিব:

```
⚠️ Unclassified Abilities Detected

The following abilities were installed but are not recognized:
- custom-import-tool
- external-api-wrapper

These abilities may pose security or compatibility risks.
Please review and classify them.

[Review Abilities] [Dismiss]
```

### Reviewing Unclassified Abilities (Unclassified Abilities পৰীক্ষা কৰা) {#reviewing-unclassified-abilities}

1. Notice ত **Review Abilities** ক্লিক কৰক
2. প্ৰতিটো Unclassified abilityৰ বাবে, আপুনি দেখিব:
   - Ability name and description
   - Source (কোন plugin/addon এ স্থাপন কৰিলে)
   - Suggested visibility level
   - Security assessment

3. এটা দৃশ্যমানতা স্তৰ বাছি লওক:
   - **Public**: ক্ষমতাটো বিশ্বাস কৰক; সকলো ঠাইতে প্ৰকাশ কৰক
   - **Internal**: কেৱল অভ্যন্তরীণ ব্যৱহাৰৰ বাবে সীমাবদ্ধ কৰক
   - **Partner**: নিৰ্দিষ্ট অংশীদাৰসকলৰ বাবে সীমাবদ্ধ কৰক
   - **Disabled**: এই ক্ষমতাটো ব্যৱহাৰ নকৰিব

4. আপোনাৰ সিদ্ধান্ত সেভ কৰিবলৈ **Classify** ক্লিক কৰক

### Why Classify Unclassified Abilities? (Unclassified Abilities কিয় সংৰক্ষিত কৰিব লাগে?) {#why-classify-unclassified-abilities}

ক্ষমতা সংৰক্ষিত কৰাৰ সুবিধা:

- **নিৰাপত্তা উন্নত কৰে**: আপুনি স্পষ্টকৈ অনুমোদন কৰে যে কি প্ৰকাশ কৰা হ'ব
- **দুর্ঘটনা প্ৰতিৰোধ কৰে**: Unclassified abilities ডিফল্টভাৱে নিষ্ক্ৰিয় থাকে
- **সুবিধাসমূহ সক্ষম কৰে**: সংৰক্ষিত হোৱাৰ পিছত, ক্ষমতাটো উপলব্ধ হয়
- **সিদ্ধান্তসমূহ নথিভুক্ত কৰে**: আপোনাৰ পছন্দসমূহ অডিটৰ বাবে লগ কৰা হয়

## Visibility in Different Surfaces (বিভিন্ন স্থানত দৃশ্যমানতা) {#visibility-in-different-surfaces}

### REST API {#rest-api}

**Public abilities** REST endpointsৰ দ্বাৰা উপলব্ধ:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Internal and Partner abilities** REST APIৰ দ্বাৰা উপলব্ধ নহয়।

### MCP Servers {#mcp-servers}

**Public abilities** MCPৰ দ্বাৰা উপলব্ধ:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**Internal abilities** MCPৰ দ্বাৰা প্ৰকাশ নহয়।

**Partner abilities** কেৱল অংশীদাৰ শ্ৰেষ্ঠনৰ সৈতে উপলব্ধ।

### WooCommerce Integration {#woocommerce-integration}

WooCommerce লগত জড়িত **Public abilities** উপলব্ধ:

- Product management
- Order processing
- Customer communication

**Internal abilities** WooCommerce লৈ প্ৰকাশ নহয়।

### Chat Interface (চ্যাট আন্তঃপৃষ্ঠ) {#chat-interface}

**সকলো ক্ষমতা** (Public, Internal, Partner) ব্যৱহাৰকাৰীৰ অনুমতিৰ ওপৰত নিৰ্ভৰ কৰি চ্যাটত উপলব্ধ:

- প্রশাসকসকলে সকলো ক্ষমতা দেখিব
- সাধাৰণ ব্যৱহাৰকাৰীসকলে কেৱল Public abilities দেখিব
- অংশীদাৰসকলে Public + Partner abilities দেখিব (যদি whitelisted হয়)

## Security Best Practices (নিৰাপত্তাৰ উত্তম অভ্যাস) {#security-best-practices}

### Principle of Least Privilege (কমতম প্ৰয়োজনীয়তাৰ নীতি) {#principle-of-least-privilege}

- ক্ষমতাটোক আটাইতকৈ সীমাবদ্ধ দৃশ্যমানতা স্তৰত সেট কৰক যিয়েও ইয়াৰ ব্যৱহাৰ কৰাত বাধা নিদিয়ে
- সংবেদনশীল কাৰ্য্যকলাপৰ বাবে Partner visibility ব্যৱহাৰ কৰক
- যি ক্ষমতা ব্যৱহাৰ নকৰিব, সেয়া নিষ্ক্ৰিয় কৰক

### Regular Audits (নিয়মিত অডিট) {#regular-audits}

- মাহেকীয়া ক্ষমতাৰ দৃশ্যমানতা পৰীক্ষা কৰক
- Unclassified abilities বিচাৰক
- ব্যৱহাৰ নকৰা অংশীদাৰসকলৰ প্ৰৱেশ বাতিল কৰক

### Logging and Monitoring (লগিং আৰু নিৰীক্ষণ) {#logging-and-monitoring}

- কোন ক্ষমতাৰ সৰ্বাধিক ব্যৱহাৰ হয় তাৰ নিৰীক্ষণ কৰক
- অংশীদাৰৰ প্ৰৱেশৰ ধৰণসমূহ অনুসৰণ কৰক
- অস্বাভাবিক ক্ষমতা ব্যৱহাৰৰ বাবে সতর্ক কৰক

### Third-Party Abilities (তৃতীয় পক্ষৰ ক্ষমতা) {#third-party-abilities}

- সক্ষম কৰাৰ আগতে তৃতীয় পক্ষৰ ক্ষমতা পৰীক্ষা কৰক
- ইয়াক স্পষ্টকৈ সংৰক্ষিত কৰক
- Internal বা Partner visibilityৰে আৰম্ভ কৰক
- কেৱল পৰীক্ষা কৰাৰ পিছত Public লৈ উন্নীত কৰক

## Troubleshooting (সমস্যা সমাধান) {#troubleshooting}

**Ability টো তালিকাখনত দেখা নাই**
- পৰীক্ষা কৰক যে ক্ষমতাটো স্থাপন কৰা আৰু সক্ৰিয় হৈ আছে নেকি
- পৰীক্ষা কৰক যে plugin/addon টো সক্ষম কৰা হৈ আছে নেকি
- পৃষ্ঠাখন Refresh কৰক

**মই এটা ক্ষমতাৰ দৃশ্যমানতা সলনি কৰিব নোৱাৰো**
- পৰীক্ষা কৰক যে আপোনাৰ প্রশাসক অনুমতি আছে নেকি
- পৰীক্ষা কৰক যে কোনো plugin এ ক্ষমতাটোক লক কৰি থকা নাই নেকি
- সংঘাতপূৰ্ণ plugin নিষ্ক্ৰিয় কৰিবলৈ চেষ্টা কৰক

**এটা অংশীদাৰে এটা ক্ষমতা ব্যৱহাৰ কৰিব নোৱাৰে**
- পৰীক্ষা কৰক যে অংশীদাৰজন Allow-list ত আছে নেকি
- পৰীক্ষা কৰক যে ক্ষমতাটোৰ দৃশ্যমানতা Partner সেট কৰা হৈছে নেকি
- নিশ্চিত কৰক যে অংশীদাৰৰ শ্ৰেষ্ঠন সঠিক আছে নেকি
- প্ৰমাণীকৰণৰ ভুলৰ বাবে API logs পৰীক্ষা কৰক

**Unclassified abilities দেখুৱাই থাকো**
- Admin notice ত ইয়াক পৰীক্ষা কৰি সংৰক্ষিত কৰক
- পৰীক্ষা কৰক যে আপোনাৰ সংৰক্ষণটো সেভ হৈছে নেকি
- পৰীক্ষা কৰক যে ক্ষমতাটো প্ৰদান কৰা plugin টো আপডেট হৈ আছে নেকি

## Migration from Legacy Mode (Legacy Modeৰ পৰা স্থানান্তৰ) {#migration-from-legacy-mode}

যদি আপুনি Superdav AI Agent ৰ পুৰণি সংস্কৰণৰ পৰা উন্নীত হৈছে:

- সকলো বিদ্যমান ক্ষমতা স্বয়ংক্ৰিয়ভাৱে Public বুলি সংৰক্ষিত কৰা হয়
- প্ৰয়োজন অনুসৰি দৃশ্যমানতা পৰীক্ষা কৰক আৰু সামঞ্জস্য কৰক
- কোনো কাৰ্য্যৰ প্ৰয়োজন নহয় যদিহে আপুনি প্ৰৱেশ সীমাবদ্ধ কৰিব বিচাৰिन्न

Native Abilities API ইন্টিগ্ৰেচনলৈ স্থানান্তৰৰ বিষয়ে অধিক বিৱৰণৰ বাবে **Third-Party Mode Migration** চাওক।

## Next Steps (পৰৱৰ্তী পদক্ষেপ) {#next-steps}

Ability visibility কনফিগাৰ কৰাৰ পিছত:

1. **আপোনাৰ ক্ষমতা পৰীক্ষা কৰক**: স্থাপন কৰা সকলো ক্ষমতাৰ অডিট কৰক
2. **Unclassified abilities সংৰক্ষিত কৰক**: Admin notices লৈ উত্তৰ দিয়ক
3. **অংশীদাৰ স্থাপন কৰক**: যদি Partner visibility ব্যৱহাৰ কৰে তেন্তে অংশীদাৰ যোগ কৰক
4. **ব্যৱহাৰ নিৰীক্ষণ কৰক**: কোন ক্ষমতাৰ সৰ্বাধিক ব্যৱহাৰ হয় তাৰ অনুসৰণ কৰক
5. **সিদ্ধান্তসমূহ নথিভুক্ত কৰক**: আপুনি প্ৰতিটো দৃশ্যমানতা স্তৰ কিয় বাছি ল'লে তাৰ ওপৰত টোকা ৰাখক
