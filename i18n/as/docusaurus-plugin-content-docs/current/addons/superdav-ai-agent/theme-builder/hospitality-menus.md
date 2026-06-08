---
title: আতিথ্য মেনুকা
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# আতিথেয়তা মেনু

**Hospitality Menus** বৈশিষ্ট্যটোৱে Theme Builder लाई আপোনাৰ WordPress সাইটত structured food and beverage menu pages জেনারেট আৰু embed কৰিবলৈ অনুমতি দিয়ে।

## Overview

Theme Builder এতিয়া ৰেষ্টুৰেন্ট, কেফে, বাৰ আৰু কেটৰিং সেৱাৰ দৰে আতিথেয়তা ব্যৱসায়ৰ বাবে professional, structured menu pages সৃষ্টি কৰিব পাৰে। এই মেনুসমূহ আপোনাৰ সাইটৰ ডিজাইনৰ সৈতে সম্পূৰ্ণৰূপে সংহতিকৰণ কৰা হয় আৰু ইয়াক সহজে আপডেট কৰিব আৰু ব্যৱস্থাপনা কৰিব পাৰি।

## Supported Hospitality Types

- **Restaurants** — সম্পূৰ্ণ সেৱাৰ ভোজনৰ মেনু
- **Cafes** — কফি আৰু হালকা খাদ্যৰ মেনু
- **Bars and Lounges** — পানীয় আৰু অ্যাপেটাইজার মেনু
- **Bakeries** — পেষ্ট্ৰি আৰু ব্ৰেড মেনু
- **Catering Services** — অনুষ্ঠানৰ মেনু বিকল্প
- **Food Trucks** — mobile food service মেনু
- **Breweries and Wineries** — বৰ্ণনা সহ পানীয় মেনু

## Menu Structure

### Menu Categories

মেনুসমূহ categoria ত ভাগ কৰা হয়:

- **Appetizers** — আৰম্ভণিৰ খাদ্য আৰু সৰু প্লেট
- **Entrees** — মূল খাদ্য
- **Sides** — সহায়ক খাদ্য আৰু শাক-পাচলি
- **Desserts** — মিঠা পদ
- **Beverages** — পানীয় (অல்கোহলিক আৰু অ-অல்கোহলিক)
- **Specials** — দৈনিক বা ঋতুভিত্তিক বিশেষ পদ

### Menu Item Format

প্ৰতিটো মেনু আইটেমৰ সৈতে তলৰ তথ্যসমূহ থাকে:

```json
{
  "name": "Grilled Salmon",
  "description": "Fresh Atlantic salmon with lemon butter sauce",
  "price": "$24.95",
  "dietary_info": ["Gluten-Free", "High-Protein"],
  "allergens": ["Fish"],
  "availability": "Daily"
}
```

#### Item Fields

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | খাদ্য বা পানীয়ৰ নাম |
| `description` | string | আইটেমটোৰ বিশদ বৰ্ণনা |
| `price` | string | মূল্য (মুদ্ৰাৰে গঠিত) |
| `dietary_info` | array | খাদ্যৰ বৈশিষ্ট্য (Vegan, Gluten-Free, ইত্যাদি) |
| `allergens` | array | সাধাৰণ সংবেদনশীল উপাদান (Nuts, Shellfish, ইত্যাদি) |
| `availability` | string | ক'ত উপলব্ধ (Daily, Seasonal, ইত্যাদি) |

## Creating Hospitality Menus

### Step 1: Provide Menu Information

Theme Builder लाई আপোনাৰ মেনুৰ বিষয়ে কওক:

```
Create a restaurant menu for my Italian restaurant with appetizers,
pasta dishes, main courses, and desserts. Include prices and descriptions.
```

### Step 2: Theme Builder Generates Menu

Theme Builder:

1. এটা structured menu page সৃষ্টি কৰে
2. ইয়াক আপোনাৰ সাইটৰ থিমৰ সৈতে মিলিবলৈ ডিজাইন কৰে
3. আইটেমসমূহ categoria ত সংগঠিত কৰে
4. মূল্য আৰু বৰ্ণনাৰ বিন্যাস কৰে
5. খাদ্যৰ বৈশিষ্ট্য আৰু সংবেদনশীল উপাদানৰ তথ্য যোগ কৰে

### Step 3: Review and Customize

আপুনি কৰিব পাৰে:

1. মেনু আইটেম আৰু মূল্য সম্পাদনা কৰিব পাৰে
2. categoria যোগ বা நீক কৰিব পাৰে
3. categoria भितৰত আইটেমসমূহৰ স্থান সলনি কৰিব পাৰে
4. বৰ্ণনা আৰু খাদ্যৰ তথ্য আপডেট কৰিব পাৰে
5. styling আৰু layout adjust কৰিব পাৰে

## Menu Display Options

### Full Menu Page

আপোনাৰ সম্পূৰ্ণ মেনু প্ৰদৰ্শন কৰা এটা নিবেদিত পৃষ্ঠা:

- categoria অনুসৰি সংগঠিত
- অনুসন্ধান আৰু ফিল্টাৰ কৰিব পৰা
- প্ৰিন্ট-প্ৰীতি উপযোগী layout
- mobile-responsive design

### Menu Widget

অন্যান্য পৃষ্ঠাৰ ওপৰত মেনু অংশসমূহ embed কৰক:

- homepage ত featured items
- sidebar ত daily specials
- bar page ত beverage menu
- footer ত dessert showcase

### Menu PDF

ডাউনলোড কৰিব পৰা এটা PDF মেনু জেনারেট কৰক:

- professional formatting
- print-ready quality
- ছবি আৰু বৰ্ণনা অন্তৰ্ভুক্ত
- সহজে share আৰু email কৰিব পৰা

## Dietary and Allergen Information

### Dietary Attributes

খাদ্যৰ তথ্যৰে আইটেমসমূহ চিহ্নিত কৰক:

- **Vegan** — কোনো প্ৰাণীৰ উৎপাদন নহয়
- **Vegetarian** — মাংস নহয়
- **Gluten-Free** — ছেলিয়াক ৰোগৰ বাবে নিৰাপদ
- **Dairy-Free** — দুগ্ধজাত উৎপাদন নহয়
- **Nut-Free** — গছৰ বাদাম বা পিনাট নহয়
- **Low-Carb** — কম Carbohydrates
- **High-Protein** — প্ৰোটিন-সমৃদ্ধ

### Allergen Warnings

সাধাৰণ সংবেদনশীল উপাদানসমূহ অন্তৰ্ভুক্ত কৰক:

- **Nuts** — গছৰ বাদাম আৰু পিনাট
- **Shellfish** — ক্রাস্টেশিয়ান আৰু মলিস্ক
- **Fish** — সকলো মাছৰ প্ৰজাতি
- **Dairy** — দুগ্ধ আৰু দুগ্ধজাত উৎপাদন
- **Eggs** — মোগৰীৰ ডিম
- **Soy** — সয় উৎপাদন
- **Gluten** — গাহৰি আৰু গ্লুটেন-সහথী শস্য
- **Sesame** — তিলৰ বীজ আৰু তেল

## Menu Management

### Updating Prices

সহজভাৱে মেনুৰ মূল্য আপডেট কৰক:

1. মেনু পৃষ্ঠালৈ যাওক
2. "Edit Menu" ক্লিক কৰক
3. আইটেমসমূহৰ মূল্য আপডেট কৰক
4. পৰিৱৰ্তন সেভ কৰক
5. পৰিৱৰ্তন তৎক্ষণাত আপোনাৰ সাইটত দেখিবলৈ পোৱা যাব

### Adding Seasonal Items

ঋতুভিত্তিক মেনুৰ ভিন্নতা সৃষ্টি কৰক:

1. এটা নতুন মেনু সংস্কৰণ সৃষ্টি কৰক
2. ঋতুভিত্তিক আইটেম যোগ কৰক
3. আইটেমসমূহক "Seasonal" বুলি চিহ্নিত কৰক
4. উপলব্ধতাৰ তাৰিখ নিৰ্ধাৰণ কৰক
5. ঋতুৰ সময়ত স্বয়ংক্রিয়ভাৱে প্ৰদৰ্শন কৰা হ'ব

### Managing Specials

দৈনিক বা সাপ্তাহিক বিশেষ পদ প্ৰদৰ্শন কৰক:

1. এটা "Specials" categoria সৃষ্টি কৰক
2. উপলব্ধতাৰ তাৰিখ সহ আইটেম যোগ কৰক
3. homepage ত specials হাইলাইট কৰক
4. দৈনিক বা সাপ্তাহিক আপডেট কৰক
5. পুৰণি specials archive কৰক

## Integration with Theme Builder

Hospitality সাইটৰ বাবে Theme Builder ব্যৱহাৰ কৰোঁতে:

1. **Automatic menu detection** — আপুনি খাদ্য/পানীয় ব্যৱসায়নে নেকি তাৰ চিনাক্তকৰণ কৰে
2. **Menu page creation** — professional menu pages জেনারেট কৰে
3. **Design matching** — মেনুসমূহ আপোনাৰ সাইটৰ থিমৰ সৈতে মিলিব
4. **Mobile optimization** — ফোনত মেনুসমূহ ধুনীয়াকৈ প্ৰদৰ্শন কৰে
5. **SEO optimization** — মেনুসমূহ search-engine friendly হয়

## Best Practices

### Menu Design

- **Clear organization** — যুক্তিযুক্ত categoria গঠন
- **Readable descriptions** — ভোজনৰ বাবে লোভনীয় আৰু তথ্যসমৃদ্ধ
- **Consistent pricing** — স্পষ্ট মুদ্ৰা আৰু formatting
- **Professional photos** — উচ্চ-মানৰ খাদ্য ছবি
- **Whitespace** — পৃষ্ঠাখন বেছি ভিৰ নকৰিব

### Content

- **Accurate descriptions** — আইটেমসমূহ সঠিকভাৱে বৰ্ণনা কৰক
- **Highlight specials** — বিশেষ পদসমূহক গুৰুত্বপূৰ্ণ বনাওক
- **Include allergens** — সদায় সংবেদনশীল উপাদান তালিকাভুক্ত কৰক
- **Update regularly** — মূল্য আৰু আইটেমসমূহ সতেজ ৰাখক
- **Use appetizing language** — আইটেমসমূহক সুস্বাদু বুলি বৰ্ণনা কৰক

### Accessibility

- **Readable fonts** — স্পষ্ট, পঠনযোগ্য typefaces ব্যৱহাৰ কৰক
- **Sufficient contrast** — নিশ্চিত কৰক যে পাঠ্য পঢ়িবলৈ সুবিধা হয়
- **Dietary labels** — খাদ্যৰ বিকল্পসমূহ স্পষ্টকৈ চিহ্নিত কৰক
- **Allergen warnings** — সংবেদনশীল উপাদানসমূহ প্ৰকটভাৱে প্ৰদৰ্শন কৰক
- **Mobile-friendly** — সকলো ডিভাইচত পৰীক্ষা কৰক

## Examples

### Restaurant Menu Structure

```
Appetizers
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Caprese Salad

Pasta Dishes
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Main Courses
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Desserts
├── Tiramisu
├── Panna Cotta
└── Gelato Selection
```

### Cafe Menu Structure

```
Coffee
├── Espresso
├── Cappuccino
└── Latte

Pastries
├── Croissants
├── Muffins
└── Scones

Sandwiches
├── Caprese Panini
├── Smoked Turkey Club
└── Vegetarian Wrap
```

## Related Features

- [Create Menu](../abilities/create-menu.md) — navigation menus সৃষ্টি কৰক
- [Design Direction](./design-direction.md) — আপোনাৰ সাইটৰ ডিজাইন কাস্টমাইজ কৰক
- [Discovery Interview](./discovery-interview.md) — আপোনাৰ সাইটৰ গঠন পৰিকল্পনা কৰক
