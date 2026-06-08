---
title: Site Builder যোগাযোগ ফৰ্মসমূহ
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Site Builder Contact Forms

Superdav AI Agent v1.10.0 লে আহিছে যেতিয়া Site Builder agent ব্যৱহাৰ কৰি চ্যাট interfacerৰ পৰা একেবাৰে সহজে Contact Form সৃষ্টি কৰিব পাৰি। ইয়াৰ ফলত আপুনি চ্যাটৰ পৰা ওলাই নহওঁক, কোনো পৃষ্ঠাত (page) সম্পূৰ্ণৰূপে কাৰ্য্যক্ষম Contact Form যোগ কৰিব পাৰে।

## Overview

Site Builder contact form ক্ষমতা (`create_contact_form`) ले স্বয়ংক্রিয়ভাৱে আপোনাৰ install কৰা form plugin-ক চিনাক্ত কৰে আৰু সেই plugin-ৰ নিজা ক্ষমতা ব্যৱহাৰ কৰি এটা Contact Form সৃষ্টি কৰে। সমৰ্থন কৰা form plugin সমূহ হ'ল:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

এই assistant ले স্বয়ংক্রিয়ভাৱে আপোনাৰ site-ত উপলব্ধ আটাইতকৈ ভাল form plugin-ক বাছি লয় আৰু সেই plugin-ৰ বাবে উপযুক্ত এটা Contact Form সৃষ্টি কৰে।

## Creating a Contact Form

Site Builder ব্যৱহাৰ কৰি Contact Form সৃষ্টি কৰিবলৈ:

1. WordPress admin-ত **Gratis AI Agent** চ্যাট প্যানেলটো খুলক।
2. চ্যাট হেডেৰত থকা agent icon-ক ক্লিক কৰি **Site Builder** agent-লৈ সলনি কৰক।
3. আপুনি কিবা ধৰণৰ Contact Form বনাওঁতে লাগে, সেইটো বৰ্ণনা কৰক। উদাহৰণস্বৰূপে:

   > "Name, email, message, আৰু phone number ফিল্ডসহ Contact page-ত এটা Contact Form যোগ কৰক।"

   অথবা কেৱল:

   > "Contact page-ৰ বাবে এটা Contact Form সৃষ্টি কৰক।"

4. Site Builder ले Contact Form টি সৃষ্টি কৰি এটা shortcode দিয়ে যিটো embed কৰিবলৈ সাজু।

## Using the Generated Shortcode

Site Builder ले Contact Form সৃষ্টি কৰাৰ পিছত, ই এটা shortcode দিয়ে (উদাহৰণস্বৰূপে, `[contact-form-7 id="123"]`)। আপুনি এইবোৰ কৰিব পাৰে:

1. **এটা page বা post-ত embed কৰক** — shortcode টো কপি কৰি block editor বা classic editor ব্যৱহাৰ কৰি যিকোনো page বা post-ত পেষ্ট কৰক।
2. **Site Builder মাজেৰে যোগ কৰক** — Site Builder-ক এটা নির্দিষ্ট page-ত form টি স্বয়ংক্রিয়ভাৱে যোগ কৰিবলৈ কওক:

   > "Contact page-ত Contact Form টি যোগ কৰক।"

3. **এটা template-ত ব্যৱহাৰ কৰক** — যদি আপুনি PHP-ৰ সৈতে স্বচ্ছন্দ অনুভৱ কৰে, তেন্তে আপুনি shortcode টো এটা theme template file-ত যোগ কৰিব পাৰে।

## Customizing the Contact Form

Site Builder ले Contact Form সৃষ্টি কৰাৰ পিছত, আপুনি ইয়াক আৰু অধিক customize কৰিব পাৰে:

### Via the Chat Interface

Site Builder-ক form টি সলনি কৰিবলৈ কওক:

> "Subject ফিল্ড যোগ কৰিবলৈ আৰু message ফিল্ডটো required কৰিবলৈ Contact Form টি আপডেট কৰক।"

Site Builder ले form টি আপডেট কৰি নতুন shortcode টো দিয়ে।

### Via the Form Plugin's Admin Interface

আপুনি form টি আপোনাৰ form plugin-ৰ settings তো পোনপটীয়াকৈ customize কৰিব পাৰে:

1. WordPress admin-ত **Contact Form 7** (বা আপোনাৰ install কৰা form plugin) লৈ যাওক।
2. Site Builder-এ সৃষ্টি কৰা form টি বিচাৰি উলিয়ক।
3. প্ৰয়োজন অনুসৰি form ফিল্ড, validation rules, আৰু email notifications edit কৰক।

## Form Plugins and Compatibility

Site Builder স্বয়ংক্রিয়ভাৱে চিনাক্ত কৰে যে আপোনাৰ site-ত কোনটো form plugin install কৰা আছে আৰু Contact Form সৃষ্টি কৰিবলৈ সেয়া ব্যৱহাৰ কৰে। যদি একাধিক form plugin install কৰা আছে, তেন্তে Site Builder তলত দিয়া ক্ৰম অনুসৰি প্ৰাধান্য দিয়ে:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

যদি এই plugin সমূহৰ কোনো এটা install কৰা নাই, তেন্তে Site Builder ले Contact Form সৃষ্টি কৰাৰ আগতে এটা install কৰিবলৈ পৰামৰ্শ দিয়ে।

## Email Notifications

Site Builder-এ সৃষ্টি কৰা Contact Form সমূহ ডিফল্টভাৱে site administrator-লৈ email notification পঠাবলৈ configure কৰা থাকে। আপুনি recipient email address আৰু notification message customize কৰিব পাৰে:

1. আপোনাৰ form plugin-ৰ admin interface লৈ যাওক।
2. Site Builder-এ সৃষ্টি কৰা form টি বিচাৰি উলিয়ক।
3. email notification settings edit কৰক।

বিশদ নিৰ্দেশনাৰ বাবে, আপোনাৰ form plugin-ৰ documentation লওক:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Example Use Cases

### Simple Contact Form

> "Name, email, আৰু message ফিল্ডসহ এটা সৰল Contact Form সৃষ্টি কৰক।"

### Multi-Step Form

> "Contact information-ৰ বাবে এটা প্ৰথম ধাপ আৰু message আৰু preferred contact method-ৰ বাবে এটা দ্বিতীয় ধাপসহ এটা Contact Form সৃষ্টি কৰক।"

### Form with Conditional Logic

> "এটা Contact Form সৃষ্টি কৰক যিটো dropdown-ত user-ৰ বাছনিৰ ওপৰত ভিত্তি কৰি বেলেগ ফিল্ড দেখুৱাব পাৰে।"

### Form with File Upload

> "এটা Contact Form সৃষ্টি কৰক যিটো user-ক এটা file বা attachment upload কৰিবলৈ অনুমতি দিয়ে।"

:::note
Contact form creation Superdav AI Agent v1.10.0 আৰু তাৰ পিছৰ সংস্কৰণত উপলব্ধ। এই ক্ষমতা ব্যৱহাৰ কৰিবলৈ Site Builder agent active হ'ব লাগিব।
:::
