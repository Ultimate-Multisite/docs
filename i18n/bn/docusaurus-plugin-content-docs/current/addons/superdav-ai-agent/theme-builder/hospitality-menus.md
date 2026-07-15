---
title: আতিথেয়তা মেনু
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# হসপিটালিটি মেনু

**Hospitality Menus** ফিচারটি Theme Builder-কে আপনার WordPress সাইটে সরাসরি কাঠামোগত খাবার ও পানীয় মেনু পেজ তৈরি এবং এমবেড করতে সাহায্য করে।

## ওভারভিউ {#overview}

Theme Builder এখন রেস্টুরেন্ট, ক্যাফে, বার এবং ক্যাটারিং সার্ভিস সহ হসপিটালিটি ব্যবসার জন্য পেশাদার, কাঠামোগত মেনু পেজ তৈরি করতে পারে। এই মেনুগুলো আপনার সাইটের ডিজাইনের সাথে পুরোপুরি যুক্ত থাকে এবং এগুলি সহজে আপডেট ও পরিচালনা করা যায়।

## সমর্থিত হসপিটালিটি প্রকারভেদ {#supported-hospitality-types}

- **রেস্টুরেন্ট (Restaurants)** — পূর্ণ-পরিষেবা ডাইনিং মেনু
- **ক্যাফে (Cafes)** — কফি এবং হালকা খাবারের মেনু
- **বার এবং লাউঞ্জ (Bars and Lounges)** — পানীয় এবং অ্যাপেটাইজার মেনু
- **বেকারি (Bakeries)** — পেস্ট্রি এবং ব্রেডের মেনু
- **ক্যাটারিং সার্ভিসেস (Catering Services)** — ইভেন্ট মেনু অপশন
- **ফুড ট্রাক (Food Trucks)** — মোবাইল ফুড সার্ভিস মেনু
- **ব্রুয়ারি এবং ওয়াইনারি (Breweries and Wineries)** — বিবরণ সহ পানীয় মেনু

## মেনু কাঠামো {#menu-structure}

### মেনু ক্যাটাগরি (Menu Categories) {#menu-categories}

মেনুগুলো ক্যাটাগরি অনুযায়ী সাজানো থাকে:

- **অ্যাপেটাইজার (Appetizers)** — স্টার্টার এবং ছোট প্লেট
- **এন্ট্রি (Entrees)** — প্রধান খাবার
- **সাইড (Sides)** — সহায়ক খাবার এবং সবজি
- **ডেজার্ট (Desserts)** — মিষ্টি খাবার
- **পানীয় (Beverages)** — পানীয় (অ্যালকোহলিক এবং নন-অ্যালকোহলিক)
- **স্পেশালস (Specials)** — দৈনিক বা মৌসুমী বিশেষ খাবার

### মেনু আইটেম ফরম্যাট (Menu Item Format) {#menu-item-format}

প্রতিটি মেনু আইটেমে নিম্নলিখিত তথ্যগুলো থাকে:

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

#### আইটেম ফিল্ডস (Item Fields) {#item-fields}

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | খাবারের বা পানীয়ের নাম |
| `description` | string | আইটেমটির বিস্তারিত বিবরণ |
| `price` | string | দাম (কারেন্সি দিয়ে ফরম্যাট করা) |
| `dietary_info` | array | খাদ্যাভ্যাস সংক্রান্ত তথ্য (Vegan, Gluten-Free, ইত্যাদি) |
| `allergens` | array | সাধারণ অ্যালার্জেন (Nuts, Shellfish, ইত্যাদি) |
| `availability` | string | কখন পাওয়া যায় (Daily, Seasonal, ইত্যাদি) |

## হসপিটালিটি মেনু তৈরি করা {#creating-hospitality-menus}

### ধাপ ১: মেনু তথ্য প্রদান করুন {#step-1-provide-menu-information}

Theme Builder-কে আপনার মেনু সম্পর্কে জানান:

```
Create a restaurant menu for my Italian restaurant with appetizers,
pasta dishes, main courses, and desserts. Include prices and descriptions.
```

### ধাপ ২: Theme Builder মেনু তৈরি করে {#step-2-theme-builder-generates-menu}

Theme Builder:

১. একটি কাঠামোগত মেনু পেজ তৈরি করে
২. এটি আপনার সাইটের থিমের সাথে মানানসই করে ডিজাইন করে
৩. আইটেমগুলোকে ক্যাটাগরি অনুযায়ী সাজায়
৪. দাম এবং বিবরণ ফরম্যাট করে
৫. খাদ্যাভ্যাস এবং অ্যালার্জেন তথ্য যোগ করে

### ধাপ ৩: পর্যালোচনা এবং কাস্টমাইজ করুন {#step-3-review-and-customize}

আপনি যা করতে পারেন:

১. মেনু আইটেম এবং দাম এডিট করা
২. ক্যাটাগরি যোগ বা অপসারণ করা
৩. ক্যাটাগরির মধ্যে আইটেমগুলোর ক্রম পরিবর্তন করা
৪. বিবরণ এবং খাদ্যাভ্যাস তথ্য আপডেট করা
৫. স্টাইলিং এবং লেআউট অ্যাডজাস্ট করা

## মেনু প্রদর্শনের অপশন (Menu Display Options) {#menu-display-options}

### ফুল মেনু পেজ (Full Menu Page) {#full-menu-page}

একটি ডেডিকেটেড পেজ যা আপনার সম্পূর্ণ মেনুটি প্রদর্শন করে:

- ক্যাটাগরি অনুযায়ী সাজানো
- সার্চ করা এবং ফিল্টার করা যায়
- প্রিন্ট-বান্ধব লেআউট
- মোবাইল-রেসপনসিভ ডিজাইন

### মেনু উইজেট (Menu Widget) {#menu-widget}

অন্যান্য পেজগুলোতে মেনু সেকশন এমবেড করুন:

- হোমপেজে বিশেষ আইটেম
- সাইডবারে দৈনিক স্পেশালস
- বার পেজে পানীয় মেনু
- ফুটার-এ ডেজার্ট শোকেস

### মেনু PDF (Menu PDF) {#menu-pdf}

একটি ডাউনলোডযোগ্য PDF মেনু তৈরি করুন:

- পেশাদার ফরম্যাটিং
- প্রিন্ট-রেডি গুণমান
- ছবি এবং বিবরণ অন্তর্ভুক্ত
- শেয়ার এবং ইমেল করা সহজ

## খাদ্যাভ্যাস এবং অ্যালার্জেন তথ্য {#dietary-and-allergen-information}

### খাদ্যাভ্যাস সংক্রান্ত তথ্য (Dietary Attributes) {#dietary-attributes}

খাদ্যাভ্যাস তথ্য দিয়ে আইটেম চিহ্নিত করুন:

- **Vegan** — কোনো প্রাণীজ পণ্য নেই
- **Vegetarian** — কোনো মাংস নেই
- **Gluten-Free** — সلياক রোগের জন্য নিরাপদ
- **Dairy-Free** — কোনো দুগ্ধজাত পণ্য নেই
- **Nut-Free** — কোনো কাঠবাদাম বা চিনাবাদাম নেই
- **Low-Carb** — কার্বোহাইড্রেট কম
- **High-Protein** — প্রোটিন সমৃদ্ধ

### অ্যালার্জেন সতর্কতা (Allergen Warnings) {#allergen-warnings}

সাধারণ অ্যালার্জেনগুলো অন্তর্ভুক্ত করুন:

- **Nuts** — কাঠবাদাম এবং চিনাবাদাম
- **Shellfish** — ক্রাস্টেশিয়ান এবং মলিوسک
- **Fish** — সব মাছের প্রজাতি
- **Dairy** — দুধ এবং দুগ্ধজাত পণ্য
- **Eggs** — মুরগির ডিম
- **Soy** — সয়াবিন পণ্য
- **Gluten** — গম এবং গ্লুটেনযুক্ত শস্য
- **Sesame** — তিল বীজ এবং তেল

## মেনু ব্যবস্থাপনা (Menu Management) {#menu-management}

### দাম আপডেট করা (Updating Prices) {#updating-prices}

সহজে মেনু দাম আপডেট করুন:

১. মেনু পেজে যান
২. "Edit Menu" এ ক্লিক করুন
৩. আইটেমগুলোর দাম আপডেট করুন
৪. পরিবর্তনগুলো সেভ করুন
৫. পরিবর্তনগুলো সাথে সাথে আপনার সাইটে দেখা যাবে

### মৌসুমী আইটেম যোগ করা (Adding Seasonal Items) {#adding-seasonal-items}

মৌসুমী মেনু বৈচিত্র্য তৈরি করুন:

১. একটি নতুন মেনু ভার্সন তৈরি করুন
২. মৌসুমী আইটেম যোগ করুন
৩. আইটেমগুলোকে "Seasonal" হিসেবে চিহ্নিত করুন
৪. উপলব্ধতার তারিখ সেট করুন
৫. সিজনের সময় স্বয়ংক্রিয়ভাবে প্রদর্শন হবে

### স্পেশালস পরিচালনা করা (Managing Specials) {#managing-specials}

দৈনিক বা সাপ্তাহিক বিশেষ খাবার প্রদর্শন করুন:

১. একটি "Specials" ক্যাটাগরি তৈরি করুন
২. উপলব্ধতার তারিখ সহ আইটেম যোগ করুন
৩. হোমপেজে স্পেশালস হাইলাইট করুন
৪. দৈনিক বা সাপ্তাহিক আপডেট করুন
৫. পুরোনো স্পেশালস আর্কাইভ করুন

## Theme Builder এর সাথে ইন্টিগ্রেশন {#integration-with-theme-builder}

যখন হসপিটালিটি সাইটের জন্য Theme Builder ব্যবহার করা হয়:

১. **স্বয়ংক্রিয় মেনু সনাক্তকরণ (Automatic menu detection)** — এটি শনাক্ত করে যে আপনি খাদ্য/পানীয় ব্যবসা কিনা
২. **মেনু পেজ তৈরি (Menu page creation)** — পেশাদার মেনু পেজ তৈরি করে
৩. **ডিজাইন ম্যাচিং (Design matching)** — মেনুগুলো আপনার সাইটের থিমের সাথে মানানসই হয়
৪. **মোবাইল অপটিমাইজেশন (Mobile optimization)** — ফোনগুলোতে মেনু সুন্দরভাবে প্রদর্শিত হয়
৫. **SEO অপটিমাইজেশন (SEO optimization)** — মেনুগুলো সার্চ ইঞ্জিনের জন্য উপযোগী

## সেরা অনুশীলন (Best Practices) {#best-practices}

### মেনু ডিজাইন (Menu Design) {#menu-design}

- **স্পষ্ট সংগঠন (Clear organization)** — যৌক্তিক ক্যাটাগরি কাঠামো
- **পঠনযোগ্য বিবরণ (Readable descriptions)** — লোভনীয় এবং তথ্যপূর্ণ
- **সামঞ্জস্যপূর্ণ মূল্য নির্ধারণ (Consistent pricing)** — স্পষ্ট কারেন্সি এবং ফরম্যাটিং
- **পেশাদার ছবি (Professional photos)** — উচ্চ-মানের খাবারের ছবি
- **হোয়াইটস্পেস (Whitespace)** — পেজটি অতিরিক্ত ভিড় করবেন না

### কনটেন্ট (Content) {#content}

- **সঠিক বিবরণ (Accurate descriptions)** — আইটেমগুলো সঠিকভাবে বর্ণনা করুন
- **স্পেশালস হাইলাইট করা (Highlight specials)** — বিশেষ খাবারগুলো আলাদা করে দেখান
- **অ্যালার্জেন অন্তর্ভুক্ত করা (Include allergens)** — সব সময় অ্যালার্জেন তালিকাভুক্ত করুন
- **নিয়মিত আপডেট করা (Update regularly)** — দাম এবং আইটেমগুলো বর্তমান রাখুন
- **লোভনীয় ভাষা ব্যবহার করা (Use appetizing language)** — আইটেমগুলোকে সুস্বাদু করে তুলুন

### অ্যাক্সেসিবিলিটি (Accessibility) {#accessibility}

- **পঠনযোগ্য ফন্ট (Readable fonts)** — স্পষ্ট, পাঠযোগ্য টাইপফেস ব্যবহার করুন
- **পর্যাপ্ত কনট্রাস্ট (Sufficient contrast)** — নিশ্চিত করুন যে লেখাটি পড়া যায়
- **খাদ্যাভ্যাস লেবেল (Dietary labels)** — খাদ্যাভ্যাস বিকল্পগুলো স্পষ্টভাবে চিহ্নিত করুন
- **অ্যালার্জেন সতর্কতা (Allergen warnings)** — অ্যালার্জেনগুলো স্পষ্টভাবে প্রদর্শন করুন
- **মোবাইল-ফ্রেন্ডলি (Mobile-friendly)** — সব ডিভাইসে পরীক্ষা করুন

## উদাহরণ (Examples) {#examples}

### রেস্টুরেন্ট মেনু কাঠামো (Restaurant Menu Structure) {#restaurant-menu-structure}

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

### ক্যাফে মেনু কাঠামো (Cafe Menu Structure) {#cafe-menu-structure}

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

## সম্পর্কিত ফিচার (Related Features) {#related-features}

- [Create Menu](../abilities/create-menu.md) — নেভিগেশন মেনু তৈরি করুন
- [Design Direction](./design-direction.md) — আপনার সাইটের ডিজাইন কাস্টমাইজ করুন
- [Discovery Interview](./discovery-interview.md) — আপনার সাইটের কাঠামো পরিকল্পনা করুন
