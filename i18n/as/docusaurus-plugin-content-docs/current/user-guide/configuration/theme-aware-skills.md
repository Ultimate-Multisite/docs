---
title: থীম-সচেতন দক্ষতা
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Theme-Aware Skills (থিম-সচেতন দক্ষতা) {#theme-aware-skills}

Superdav AI Agent v1.10.0 ত চাৰিটা নতুন theme-aware built-in skills যোগ কৰা হৈছে, যিবোৰ স্বয়ংক্রিয়ভাৱে আপোনাৰ active WordPress theme লৈ adapt কৰে। এই দক্ষতাসমূহে আপোনাৰ theme-ৰ architecture আৰু features অনুসৰি বিশেষ নির্দেশিকা আৰু ক্ষমতা প্ৰদান কৰে।

## Theme-Aware Skills কি? {#what-are-theme-aware-skills}

Theme-aware skills হৈছে এনে কিছুমান pre-configured knowledge base আৰু tool set, যাক AI assistant স্বয়ংক্রিয়ভাৱে আপোনাৰ সাইটত বৰ্তমান active থকা WordPress theme ৰ ওপৰত ভিত্তি কৰি select কৰে। যেতিয়া আপুনি theme সলনি কৰে, তেতিয়া assistant-ৰ উপলব্ধ skills স্বয়ংক্রিয়ভাৱে আপডেট হৈ যায় — কোনো হাতেৰে configuration কৰাৰ প্ৰয়োজন নাই।

প্ৰত্যেকটো skill-ত তলত দিয়া বিষয়সমূহ অন্তৰ্ভুক্ত থাকে:

- **Theme-specific documentation** — theme ব্যৱহাৰ কৰা আৰু customize কৰাৰ ওপৰত নির্দেশিকা
- **Block and pattern references** — উপলব্ধ blocks, patterns, আৰু design options
- **Customization examples** — সাধাৰণ কামসমূহৰ বাবে code snippets আৰু configuration patterns
- **Best practices** — theme-ৰ architecture আৰু workflowৰ বাবে ശുপাকৰণ

## উপলব্ধ Theme-Aware Skills {#available-theme-aware-skills}

### Block Themes (ব্লক থিম) {#block-themes}

**কৈ প্ৰযোজ্য:** যিবোৰ WordPress block-based (Full Site Editing) architecture ব্যৱহাৰ কৰে।

Block Themes skill-এ তলত দিয়া বিষয়সমূহৰ ওপৰত নির্দেশিকা দিয়ে:

- block editor ব্যৱহাৰ কৰি template create কৰা আৰু edit কৰা
- block patterns আৰু reusable blocks লগত কাম কৰা
- global styles আৰু theme.json settings customize কৰা
- theme blocks আৰু variations ব্যৱহাৰ কৰা
- আপোনাৰ সাইটৰ বাবে custom block patterns build কৰা

**স্বয়ংক্রিয়ভাৱে activate হয় যেতিয়া:** আপোনাৰ active theme এটা block theme হয় (যিটো `block-templates` feature সমৰ্থন কৰে)।

### Classic Themes (ক্লাছিক থিম) {#classic-themes}

**কৈ প্ৰযোজ্য:** পৰম্পৰাগত WordPress theme যিবোৰ PHP template আৰু classic editor ব্যৱহাৰ কৰে।

Classic Themes skill-এ তলত দিয়া বিষয়সমূহৰ ওপৰত নির্দেশিকা দিয়ে:

- PHP template files আৰু hooks লগত কাম কৰা
- Customizer মাজেৰে theme appearance customize কৰা
- widget areas আৰু sidebars ব্যৱহাৰ কৰা
- CSS modify কৰা আৰু child theme development কৰা
- theme hierarchy আৰু template tags বুজি পোৱা

**স্বয়ংক্রিয়ভাৱে activate হয় যেতিয়া:** আপোনাৰ active theme এটা classic (non-block) theme হয়।

### Kadence Blocks (কাডেন্স ব্লক) {#kadence-blocks}

**কৈ প্ৰযোজ্য:** যিবোৰ advanced block-based designৰ বাবে Kadence Blocks plugin ব্যৱহাৰ কৰে।

Kadence Blocks skill-এ তলত দিয়া বিষয়সমূহৰ ওপৰত নির্দেশিকা দিয়ে:

- Kadence-ৰ advanced block library ব্যৱহাৰ কৰা (Hero, Testimonials, Pricing, ইত্যাদি)
- Kadence block settings আৰু responsive options configure কৰা
- Kadence-ৰ grid আৰু container blocks ব্যৱহাৰ কৰি custom layout build কৰা
- আপোনাৰ theme লগত Kadence blocks integrate কৰা
- Kadence-ৰ design system আৰু presets ব্যৱহাৰ কৰা

**স্বয়ংক্রিয়ভাৱে activate হয় যেতিয়া:** আপোনাৰ সাইটত Kadence Blocks plugin active থাকে।

### Kadence Theme (কাডেন্স থিম) {#kadence-theme}

**কৈ প্ৰযোজ্য:** যিবোৰ block-based design আৰু customizationৰ বাবে Kadence theme ব্যৱহাৰ কৰে।

Kadence Theme skill-এ তলত দিয়া বিষয়সমূহৰ ওপৰত নির্দেশিকা দিয়ে:

- global styles আৰু theme.json মাজেৰে Kadence theme customize কৰা
- Kadence-ৰ built-in block patterns আৰু templates ব্যৱহাৰ কৰা
- Kadence theme settings আৰু options configure কৰা
- Kadence-ৰ design system ব্যৱহাৰ কৰি custom design build কৰা
- জনপ্রিয় plugins আৰু tool লগত Kadence integrate কৰা

**স্বয়ংক্রিয়ভাৱে activate হয় যেতিয়া:** Kadence theme আপোনাৰ active theme হয়।

## Skills কেনেকৈ select কৰা হয় {#how-skills-are-selected}

assistant-এ প্ৰতিটো message ত আপোনাৰ active theme আৰু install কৰা plugins স্বয়ংক্রিয়ভাৱে detect কৰে। যদি কোনো matching theme-aware skill উপলব্ধ থাকে, তেন্তে ইয়াক স্বয়ংক্রিয়ভাৱে assistant-ৰ context ত load কৰা হয়। আপুনি কোনো skill হাতেৰে enable বা switch কৰিবলগীয়া নহয়।

### Multiple Skills (বহু দক্ষতা) {#multiple-skills}

যদি আপোনাৰ সাইটত একাধিক skills প্ৰযোজ্য হয় (উদাহৰণস্বৰূপে, যদি আপোনাৰ তৰফৰ পৰা Kadence Blocks আৰু Kadence Theme দুয়োটাই active থাকে), তেন্তে assistant-এ সকলো প্ৰযোজ্য skills লৈ access লাভ কৰে আৰু প্ৰত্যেকটোৰ পৰা নির্দেশিকা লৈ ব্যৱহাৰ কৰিব পাৰে।

### Switching Themes (theme সলনি কৰা) {#switching-themes}

যেতিয়া আপুনি আপনার active theme সলনি কৰে, তেতিয়া assistant-ৰ উপলব্ধ skills পৰৱৰ্তী message ত স্বয়ংক্রিয়ভাৱে আপডেট হয়। উদাহৰণস্বৰূপে:

১. আপুনি **Block Themes** skill active কৰি এটা block theme ব্যৱহাৰ কৰি আছে।
২. আপুনি এটা classic theme লৈ সলনি কৰে।
৩. আপোনাৰ পৰৱৰ্তী message ত, **Classic Themes** skill স্বয়ংক্রিয়ভাৱে load হয়, আৰু **Block Themes** skill আৰু উপলব্ধ নহয়।

## Theme-Aware Skills ব্যৱহাৰ কৰা {#using-theme-aware-skills}

কোনো theme-aware skill ব্যৱহাৰ কৰিবলৈ, কেৱল chat interface ত আপুনি কি কৰিব বিচাৰে তাৰ বিষয়ে বৰ্ণনা কৰক। assistant-এ স্বয়ংক্রিয়ভাৱে উপযুক্ত skill-ৰ নির্দেশিকা লৈ আহৰণ কৰিব।

### Example Prompts (উদাহৰণমূলক প্ৰম্পট) {#example-prompts}

**Block Themes-ৰ বাবে:**
> "block patterns ব্যৱহাৰ কৰি এটা background image আৰু centered text লগত এটা hero section create কৰক।"

**Classic Themes-ৰ বাবে:**
> "child theme ব্যৱহাৰ কৰি sidebar ত এটা custom widget area যোগ কৰক।"

**Kadence Blocks-ৰ বাবে:**
> "Kadence Testimonials block ব্যৱহাৰ কৰি এটা testimonials section build কৰক।"

**Kadence Theme-ৰ বাবে:**
> "header layout আৰু navigation menu styling customize কৰক।"

assistant-এ আপোনাৰ active theme আৰু plugins অনুসৰি theme-specific guidance আৰু code examples প্ৰদান কৰিব।

:::note
Theme-aware skills Superdav AI Agent v1.10.0 আৰু তাৰ পিছৰ সংস্কৰণত স্বয়ংক্রিয়ভাৱে উপলব্ধ। কোনো এটা অতিৰিক্ত setup বা configurationৰ প্ৰয়োজন নাই।
:::
