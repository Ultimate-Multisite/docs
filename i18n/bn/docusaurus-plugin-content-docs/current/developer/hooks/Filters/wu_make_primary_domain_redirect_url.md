---
id: wu_make_primary_domain_redirect_url
title: ফিল্টার - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url {#filter-wumakeprimarydomainredirecturl}

যখন কোনো ডোমেইনকে প্রাইমারি করা হয়, তখন রিডাইরেক্ট URL-কে ফিল্টার করে।

এটি ডেভেলপারদের সুযোগ দেয় যে তারা একটি ডোমেইন সফলভাবে প্রাইমারি করার পরে ব্যবহারকারীদের কোথায় রিডাইরেক্ট করা হবে তা কাস্টমাইজ করতে পারে। ডিফল্টভাবে, এটি মূল সাইটের বর্তমান URL-এ, অথবা যে সাইটটি পরিবর্তন করা হচ্ছে তার অ্যাডমিন URL-এ রিডাইরেক্ট করে।

## প্যারামিটারসমূহ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $redirect_url | `string` | ডিফল্ট রিডাইরেক্ট URL। এটি হয় বর্তমান URL (যদি মূল সাইট হয়) অথবা বর্তমান সাইটের অ্যাডমিন URL। |
| $current_site | `int` | যে সাইটটির ডোমেইন প্রাইমারি করা হচ্ছে, তার আইডি। |
| $domain | `\Domain` | যে ডোমেইন অবজেক্টটি প্রাইমারি করা হয়েছে। |
| $old_primary_domains | `array` | পূর্বে যে ডোমেইনগুলো প্রাইমারি ছিল, তাদের আইডিগুলোর একটি অ্যারে। |

### কবে থেকে {#since}

- 2.0.0
### উৎস {#source}

[`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639)-এ লাইন ৬৩৯-এ সংজ্ঞায়িত।

## ফেরত দেয় {#returns}
ফিল্টার করা রিডাইরেক্ট URL।
