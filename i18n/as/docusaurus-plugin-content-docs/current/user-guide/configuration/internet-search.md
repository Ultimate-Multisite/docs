---
title: ইণ্টাৰনেট অনুসন্ধান
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Internet Search

Gratis AI Agent v1.5.0 eku **Internet Search** kshamata jog korise, jeta AI assistant-k ek conversation-r samay web-ৰ পৰা samayik jankari prapt কৰাত সহায় কৰে। ইয়াৰ বাবে [Brave Search API](https://brave.com/search/api/) বা [Tavily API](https://tavily.com/) ব্যৱহাৰ কৰা হয়।

## How It Works

Jokhon internet search enable কৰা হয়, তেতিয়া assistant-e স্বয়ংক্রিয়ভাৱে আপোনাৰ configure কৰা search provider-ক query কৰিব পাৰে, যদিহে তেওঁক লাগে যে কোনো প্ৰশ্নৰ বাবে বৰ্তমান বা বাহিৰৰ তথ্যৰ প্ৰয়োজন — যেনে: শেহতীয়া খবৰ, লাইভ মূল্য, বা ডকুমেন্টেশ্যন যি মডেলৰ training cutoffৰ সময়ৰ পৰা সলনি হৈছে।

ফলাফলবোৰ real time-ত সংগ্ৰহ কৰা হয় আৰু assistant-e উত্তৰ দিয়াৰ আগতে তাৰ context-ত যোগ কৰা হয়। assistant-e ক'ব যে তেওঁ কোন সময়ত search result ব্যৱহাৰ কৰি প্ৰশ্নটোৰ উত্তৰ দিছে।

## Enabling Internet Search

Internet search-ৰ বাবে আপুনি বাছনি কৰা search provider-ৰ পৰা এটা API key লাগে। ইয়াৰ বাবে configure কৰিবলৈ:

1. **Gratis AI Agent → Settings → Advanced** লৈ যাওক।
2. **Internet Search Provider** dropdown টি বিচাৰি উলিয়াবলৈ আৰু **Brave Search** বা **Tavily** বাছি লওক।
3. উপযুক্ত field ত আপোনাৰ API key টি প্ৰৱেশ কৰক। প্ৰতিটো fieldৰ কাষতে sign-up link দেখা যায়।
4. **Save Settings** ক্লিক কৰক।

key টি save কৰাৰ পিছত, Internet Search ability টি স্বয়ংক্রিয়ভাৱে assistant-ৰ বাবে উপলব্ধ হৈ পৰে।

## Brave Search

### Obtaining a Brave Search API Key

1. [Brave Search API page](https://brave.com/search/api/) লৈ যাওক।
2. এটা plan-ৰ বাবে sign up কৰক। এটা free tier monthly request limit লগত উপলব্ধ।
3. Brave Search developer dashboard ৰ পৰা আপোনাৰ API key টি copy কৰক।
4. Gratis AI Agent settings ত **Brave Search API Key** field ত paste কৰক।

### Usage Limits

Usage টি Brave Search-ৰ দ্বাৰা query কৰা সংখ্যাৰ ওপৰত ভিত্তি কৰি bill কৰা হয়। যি প্ৰতিটো AI response search trigger কৰে, তাক এটা query হিচাপে গণনা কৰা হয়। অপ্রত্যাশিত বিল এৰাই চলিবলৈ [Brave Search developer dashboard](https://brave.com/search/api/) ত আপোনাৰ usage monitor কৰক।

## Tavily

Superdav AI Agent v1.10.0 eku alternative internet search provider হিচাপে **Tavily** যোগ কৰিছে, jeta rich search results আৰু advanced research capabilities আগবঢ়ায়।

### Obtaining a Tavily API Key

1. [Tavily API page](https://tavily.com/) লৈ যাওক।
2. এটা account-ৰ বাবে sign up কৰক। এটা free tier monthly request limit লগত উপলব্ধ।
3. Tavily dashboard ৰ পৰা আপোনাৰ API key টি copy কৰক।
4. Gratis AI Agent settings ত **Tavily API Key** field ত paste কৰক।

### Usage Limits

Usage টি Tavily-ৰ দ্বাৰা API call কৰা সংখ্যাৰ ওপৰত ভিত্তি কৰি bill কৰা হয়। যি প্ৰতিটো AI response search trigger কৰে, তাক এটা call হিচাপে গণনা কৰা হয়। অপ্রত্যাশিত বিল এৰাই চলিবলৈ [Tavily dashboard](https://tavily.com/) ত আপোনাৰ usage monitor কৰক।

## Disabling Internet Search

API key টি active search provider field बाट remove কৰি save কৰক। Internet Search ability টি আকৌ assistant-ক দিয়া নহ'ব।

:::note
Internet search-এ response-ত latency যোগ কৰে, কাৰণ assistant-e উত্তৰ দিয়াৰ আগতে search result-ৰ বাবে অপেক্ষা কৰিব লগা হয়। সময়-সংবেদনশীল (time-sensitive) use case-ৰ বাবে, বিবেচনা কৰক যে real-time search কি আৱশ্যক নেকি, নে assistant-ৰ built-in knowledge যথেষ্ট।
:::
