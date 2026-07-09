---
title: অন্তর্নির্মিত এজেন্টসমূহ
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Built-in Agents

Gratis AI Agent v1.9.0-এ পাঁচটি Built-in agent থাকে। প্রতিটিতে নির্দিষ্ট কাজের জন্য প্রস্তুত করা tools, উপযোগী system prompt, এবং সেই এলাকার সাধারণ কাজের সঙ্গে মিল থাকা starter suggestions আগে থেকেই সেট করা আছে। Agent বদলালে assistant কী করতে পারে এবং কীভাবে উত্তর দেয় তা বদলায় — আপনার দিক থেকে কোনো configuration দরকার নেই। সংশ্লিষ্ট integrations configured থাকলে Superdav AI Agent v1.18.0 এই workflows-এ schedule-aware tools, reminder records, approval gates, এবং SMS notifications যোগ করতে পারে।

## Agent কী?

প্রতিটি agent হলো একটি নামযুক্ত configuration profile, যা একসঙ্গে রাখে:

- **Tools** — agent যে সক্ষমতাগুলো invoke করতে পারে (যেমন, Content Writer-এর post তৈরির সক্ষমতায় access আছে; Design Studio-এর CSS এবং theme.json সক্ষমতায় access আছে)
- **System prompt** — agent-এর tone, priorities, এবং constraints নির্ধারণকারী instructions
- **Suggestions** — দ্রুত শুরু করতে সাহায্য করার জন্য chat interface-এ দেখানো আগে থেকে লেখা prompts

## Agent Picker-এ access করা

1. WordPress admin sidebar-এ **Gratis AI Agent** panel খুলুন।
2. chat header-এর উপরের-বাম দিকে **agent icon**-এ click করুন (active agent অনুযায়ী icon বদলায়)।
3. **Agent Picker** একটি form-table overlay হিসেবে খুলবে। প্রতিটি agent তার icon, name, এবং এক লাইনের descriptionসহ তালিকাভুক্ত থাকে।
4. কোনো agent row-তে click করে সেটি activate করুন। chat header সঙ্গে সঙ্গে update হয়।

আপনি conversation-এর মাঝেও agent বদলাতে পারেন — নতুন agent-এর system prompt পরবর্তী message থেকে কার্যকর হবে।

## পাঁচটি Built-in Agents

### Content Writer

**Focus:** post, page, এবং contact form তৈরি ও edit করা।

**Available tools:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Superdav AI Agent v1.18.0 integrations enabled থাকলে, approved workflows-এর জন্য configured calendar context, approval gates, reminders, এবং SMS notification tools-ও available থাকতে পারে।

**যে কাজগুলো ভালো করে:**
- brief বা outline থেকে blog post draft ও publish করা
- নতুন site-এর জন্য landing pages-এর batch তৈরি করা
- contact এবং enquiry forms বানানো
- URL বা search থেকে posts-এ featured images সেট করা
- configured Google Calendar context থেকে event follow-up messages draft করা, তারপর notifications পাঠানোর আগে approval-এর জন্য থামা

**Starter suggestions:**
- *WordPress multisite-এর সুবিধা নিয়ে ৫০০-শব্দের একটি blog post লিখুন।*
- *About, Services, এবং Contact page তৈরি করে publish করুন।*
- *Contact page-এ একটি booking enquiry form যোগ করুন।*
- *আগামীকালের configured calendar event-এর attendees-এর জন্য একটি reminder draft করুন এবং পাঠানোর আগে approval-এর জন্য অপেক্ষা করুন।*

---

### Site Builder

**Focus:** একটি prompt থেকে শুরু করে শেষ পর্যন্ত website তৈরি।

**Available tools:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Superdav AI Agent v1.18.0 থাকলে, administrators enable করলে configured managed-service, approval, reminder, calendar, এবং SMS tools available হতে পারে।

**যে কাজগুলো ভালো করে:**
- বর্ণনা করা business type-এর জন্য multi-phase site build plan তৈরি করা
- প্রতিটি phase autonomously execute করা — structure, content, navigation, design
- manual intervention ছাড়াই plan-এর মাঝখানের errors থেকে recover করা
- build-এর অংশ হিসেবে recommended plugins install করা
- chat interface থেকেই contact forms তৈরি করা (Superdav AI Agent v1.10.0+)
- approval gates এবং reminder records enabled থাকলে duplicate notifications ছাড়াই launch reminders বা attendee follow-up coordinate করা

**Starter suggestions:**
- *gallery post type, booking page, এবং contact formসহ একটি photography portfolio site বানান।*
- *online menu, opening hours, এবং table-booking enquiry formসহ একটি restaurant website তৈরি করুন।*
- *service pages, portfolio section, এবং blogসহ একটি freelance consulting site সেট আপ করুন।*
- *site builder ব্যবহার করে Contact page-এ একটি contact form যোগ করুন।*
- *site launch checklist approved হওয়ার পর, configured stakeholder contact-এ একটি SMS reminder পাঠান।*

---

### Design Studio

**Focus:** Visual customisation — colours, typography, CSS, এবং block patterns।

**Available tools:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**যে কাজগুলো ভালো করে:**
- named theme presets প্রয়োগ করা (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- theme.json-এর মাধ্যমে global typography এবং colour palettes সূক্ষ্মভাবে ঠিক করা
- brand-specific overrides-এর জন্য custom CSS inject করা
- কোনো page-এর screenshot নিয়ে design issues review করা

**Starter suggestions:**
- *warm-editorial preset apply করুন এবং তারপর primary colour #2d6a4f সেট করুন।*
- *homepage-এর একটি screenshot নিন এবং কী উন্নত করা যায় বলুন।*
- *full-width background image এবং centred headingসহ একটি reusable hero block pattern তৈরি করুন।*

### Plugin Manager

**Focus:** WordPress plugins খোঁজা, install করা, এবং manage করা।

**Available tools:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**যে কাজগুলো ভালো করে:**
- বর্ণনা করা use case-এর জন্য best plugin recommend করা
- registry থেকে ability packs install করা
- category অনুযায়ী available ability catalogue browse করা

**Starter suggestions:**
- *membership directory-এর জন্য best plugin কী?*
- *WooCommerce abilities pack install করুন।*
- *সব available ecommerce ability packs দেখান।*

---

### Support Assistant

**Focus:** site content, settings, এবং WordPress configuration সম্পর্কে questions-এর উত্তর দেওয়া।

**Available tools:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**এটি যা ভালোভাবে করে:**
- বর্তমান সাইটের সেটিংস ও অপশন খুঁজে দেখা
- সাইটে কোন পোস্ট টাইপ, ট্যাক্সোনমি এবং মেনু কনফিগার করা আছে তা ব্যাখ্যা করা
- লাইভ মান পড়ে "এই সেটিংটি কী করে?" ধরনের প্রশ্নের উত্তর দেওয়া
- পরিবর্তন করার আগে শুধু-পঠনযোগ্য ডায়াগনস্টিক স্তর হিসেবে কাজ করা

**শুরুর পরামর্শ:**
- *এই সাইটে বর্তমানে কোন plugin এবং সেটিংস সক্রিয় আছে?*
- *এই সাইটে নিবন্ধিত সব custom post type তালিকাভুক্ত করুন।*
- *কোন নেভিগেশন মেনু আছে এবং সেগুলো কোথায় বরাদ্দ করা হয়েছে?*

---

## Superdav অটোমেশন ইন্টিগ্রেশন

Superdav AI Agent v1.18.0 ইন্টিগ্রেশন কনফিগার করা থাকলে, বিল্ট-ইন এজেন্টগুলো আরও নিরাপদ সময়সূচি-সচেতন অটোমেশন ওয়ার্কফ্লোতে অংশ নিতে পারে:

- **Google Calendar পড়ার টুল** এজেন্টগুলোকে ফলো-আপ কাজের খসড়া করার আগে কনফিগার করা ক্যালেন্ডার ও ইভেন্ট পরীক্ষা করতে দেয়।
- **কন্ট্যাক্ট ও অংশগ্রহণকারী ম্যাপিং** ইভেন্টের অংশগ্রহণকারীদের WordPress ব্যবহারকারী বা পরিচিত কন্ট্যাক্টের সঙ্গে মেলাতে সাহায্য করে।
- **মানব অনুমোদন গেট** সংবেদনশীল কাজ থামিয়ে রাখে, যতক্ষণ না কোনো অনুমোদিত ব্যবহারকারী তা পর্যালোচনা ও নিশ্চিত করেন।
- **রিমাইন্ডার রেকর্ড** নির্ধারিত কাজ পুনরায় চেষ্টা বা পুনরাবৃত্তি হলে ডুপ্লিকেট নোটিফিকেশন ঠেকায়।
- **TextBee SMS নোটিফিকেশন** শুধুমাত্র SMS ক্রেডেনশিয়াল এবং ওয়ার্কফ্লো অনুমতি চালু থাকলে কনফিগার করা টেক্সট মেসেজ পাঠায়।

প্রস্তাবিত ওয়ার্কফ্লো: এজেন্টকে বার্তা বা কাজ প্রস্তুত করতে বলুন, অনুমোদনের প্রম্পট পর্যালোচনা করুন, তারপর অনুমোদিত কাজটি আবার শুরু করার অনুমতি দিন। পুনরাবৃত্ত রিমাইন্ডারের জন্য, রিমাইন্ডার ডিডুপ্লিকেশন চালু রাখুন, যাতে একই ইভেন্ট বা কন্ট্যাক্টকে বারবার নোটিফাই করা না হয়।

---

## এজেন্ট কাস্টমাইজ করা

প্রতিটি বিল্ট-ইন এজেন্ট `gratis_ai_agent_agents` filter-এর মাধ্যমে সম্প্রসারিত বা প্রতিস্থাপিত করা যায়।

### বিদ্যমান এজেন্টে কাস্টম সিস্টেম প্রম্পট যোগ করা

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### নতুন এজেন্ট নিবন্ধন করা

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimises posts and pages for search engines.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'You are an SEO specialist. Focus on keyword optimisation, meta descriptions, and structured data.',
        'suggestions'   => [
            'Review the homepage title and meta description.',
            'Suggest title tag improvements for the five most recent posts.',
        ],
    ];
    return $agents;
} );
```

filter চালানোর সঙ্গে সঙ্গে নতুন এজেন্টটি এজেন্ট পিকারে দেখা যায়।

### বিল্ট-ইন এজেন্ট সরানো

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
