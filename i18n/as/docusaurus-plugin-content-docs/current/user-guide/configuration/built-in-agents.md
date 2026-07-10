---
title: অন্তৰ্নিৰ্মিত এজেণ্টসমূহ
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# অন্তৰ্নিৰ্মিত Agents {#built-in-agents}

Gratis AI Agent v1.9.0-এ পাঁচটা অন্তৰ্নিৰ্মিত agents সৈতে আহে, প্ৰত্যেকটো নিৰ্দিষ্ট সঁজুলিৰ এটা কেন্দ্ৰিত ছেট, অনুকূলিত system prompt, আৰু সেই ক্ষেত্ৰৰ সাধাৰণ কামৰ সৈতে মিলা আৰম্ভণি suggestions সহ পূৰ্ব-কনফিগাৰ কৰা। Agents-ৰ মাজত সলনি কৰিলে assistant-এ কি কৰিব পাৰে আৰু কেনেকৈ সঁহাৰি দিয়ে সেয়া সলনি হয় — আপোনাৰ ফালৰ পৰা কোনো configuration নকৰাকৈ। Superdav AI Agent v1.18.0-এ সংশ্লিষ্ট integrations কনফিগাৰ কৰা থাকিলে এই workflows-ত schedule-aware tools, reminder records, approval gates, আৰু SMS notifications যোগ কৰিব পাৰে।

## Agent কি? {#what-is-an-agent}

প্ৰতিটো agent হৈছে এটা নামযুক্ত configuration profile যি একেলগে মিলায়:

- **সঁজুলি** — agent-এ আহ্বান কৰিবলৈ অনুমতি পোৱা সক্ষমতাবোৰ (যেনে Content Writer-এ post সৃষ্টি সক্ষমতাত প্ৰৱেশাধিকাৰ পায়; Design Studio-এ CSS আৰু theme.json সক্ষমতাত প্ৰৱেশাধিকাৰ পায়)
- **System prompt** — agent-ৰ সুৰ, অগ্ৰাধিকাৰ, আৰু সীমাবদ্ধতা নিৰ্ধাৰণ কৰা নিৰ্দেশনা
- **Suggestions** — আপোনাক দ্ৰুতভাৱে আৰম্ভ কৰাত সহায় কৰিবলৈ chat interface-ত দেখুওৱা পূৰ্বে-লিখা prompts

## Agent Picker-ত প্ৰৱেশ কৰা {#accessing-the-agent-picker}

1. WordPress admin sidebar-ত **Gratis AI Agent** panel খোলক।
2. chat header-ৰ ওপৰৰ-বাওঁফালে থকা **agent icon**-ত ক্লিক কৰক (active agent প্ৰতিফলিত কৰিবলৈ icon সলনি হয়)।
3. **Agent Picker** এটা form-table overlay হিচাপে খোলে। প্ৰতিটো agent-ৰ icon, নাম, আৰু এক-শাৰীৰ বিৱৰণৰ সৈতে তালিকাভুক্ত কৰা হয়।
4. সক্ৰিয় কৰিবলৈ এটা agent row-ত ক্লিক কৰক। chat header তৎক্ষণাৎ update হয়।

আপুনি conversation-ৰ মাজতো agents সলনি কৰিব পাৰে — নতুন agent-ৰ system prompt পৰৱৰ্তী message-ৰ পৰা কাৰ্যকৰী হয়।

## পাঁচটা অন্তৰ্নিৰ্মিত Agents {#the-five-built-in-agents}

### Content Writer {#content-writer}

**Focus:** posts, pages, আৰু contact forms সৃষ্টি আৰু সম্পাদনা।

**Available tools:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`। Superdav AI Agent v1.18.0 integrations enabled থাকিলে, কনফিগাৰ কৰা calendar context, approval gates, reminders, আৰু SMS notification tools-ও approved workflows-ৰ বাবে উপলব্ধ হ’ব পাৰে।

**ই যি কাম ভালকৈ কৰে:**
- brief বা outline-ৰ পৰা blog posts খচৰা কৰা আৰু প্ৰকাশ কৰা
- নতুন site-ৰ বাবে landing pages-ৰ batch সৃষ্টি কৰা
- contact আৰু enquiry forms নিৰ্মাণ কৰা
- URL বা search-ৰ পৰা posts-ত featured images স্থাপন কৰা
- configured Google Calendar context-ৰ পৰা event follow-up messages খচৰা কৰা, তাৰ পিছত notifications পঠিওৱাৰ আগতে approval-ৰ বাবে ৰখা

**Starter suggestions:**
- *WordPress multisite-ৰ সুবিধাসমূহৰ বিষয়ে ৫০০-শব্দৰ blog post লিখক।*
- *About, Services, আৰু Contact page সৃষ্টি কৰি প্ৰকাশ কৰক।*
- *Contact page-ত এটা booking enquiry form যোগ কৰক।*
- *কাইলৈৰ configured calendar event-ৰ attendees-ৰ বাবে এটা reminder খচৰা কৰক আৰু পঠিওৱাৰ আগতে approval-ৰ বাবে অপেক্ষা কৰক।*

---

### Site Builder {#site-builder}

**Focus:** এটা একক prompt-ৰ পৰা আৰম্ভ কৰি সম্পূৰ্ণ website সৃষ্টি।

**Available tools:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`। Superdav AI Agent v1.18.0-ৰ সৈতে, administrators-এ enable কৰা ঠাইত configured managed-service, approval, reminder, calendar, আৰু SMS tools উপলব্ধ হ’ব পাৰে।

**ই যি কাম ভালকৈ কৰে:**
- বৰ্ণনা কৰা business type-ৰ বাবে multi-phase site build plan সৃষ্টি কৰা
- প্ৰতিটো phase স্বয়ংক্ৰিয়ভাৱে execute কৰা — structure, content, navigation, design
- manual intervention নালাগাকৈ plan-ৰ মাজতে errors-ৰ পৰা recover কৰা
- build-ৰ অংশ হিচাপে recommended plugins install কৰা
- chat interface-ৰ পৰা পোনপটীয়াকৈ contact forms সৃষ্টি কৰা (Superdav AI Agent v1.10.0+)
- approval gates আৰু reminder records enabled থাকিলে duplicate notifications নোহোৱাকৈ launch reminders বা attendee follow-up সমন্বয় কৰা

**Starter suggestions:**
- *gallery post type, booking page, আৰু contact form-সহ এটা photography portfolio site নিৰ্মাণ কৰক।*
- *online menu, opening hours, আৰু table-booking enquiry form-সহ এটা restaurant website সৃষ্টি কৰক।*
- *service pages, portfolio section, আৰু blog-সহ এটা freelance consulting site set up কৰক।*
- *site builder ব্যৱহাৰ কৰি Contact page-ত এটা contact form যোগ কৰক।*
- *site launch checklist approved হোৱাৰ পিছত, configured stakeholder contact-লৈ এটা SMS reminder পঠিয়াওক।*

---

### Design Studio {#design-studio}

**Focus:** Visual customisation — colours, typography, CSS, আৰু block patterns।

**Available tools:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**ই যি কাম ভালকৈ কৰে:**
- named theme presets (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog) প্ৰয়োগ কৰা
- theme.json-ৰ মাধ্যমে global typography আৰু colour palettes সূক্ষ্মভাৱে সমন্বয় কৰা
- brand-specific overrides-ৰ বাবে custom CSS inject কৰা
- এটা page-ৰ screenshot লৈ design issues-ৰ বাবে review কৰা

**Starter suggestions:**
- *warm-editorial preset প্ৰয়োগ কৰক আৰু তাৰ পিছত primary colour #2d6a4f-লৈ set কৰক।*
- *homepage-ৰ এটা screenshot লৈ মোক কওক আপুনি কি উন্নত কৰিব।*
- *full-width background image আৰু centred heading-সহ এটা reusable hero block pattern সৃষ্টি কৰক।*

### Plugin Manager {#plugin-manager}

**Focus:** WordPress plugins আৱিষ্কাৰ, install, আৰু পৰিচালনা কৰা।

**Available tools:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**ই যি কাম ভালকৈ কৰে:**
- বৰ্ণনা কৰা use case-ৰ বাবে সৰ্বোত্তম plugin recommend কৰা
- registry-ৰ পৰা ability packs install কৰা
- category অনুসৰি উপলব্ধ ability catalogue browse কৰা

**Starter suggestions:**
- *membership directory-ৰ বাবে সৰ্বোত্তম plugin কি?*
- *WooCommerce abilities pack install কৰক।*
- *মোক সকলো উপলব্ধ ecommerce ability packs দেখুৱাওক।*

---

### Support Assistant {#support-assistant}

**Focus:** site content, settings, আৰু WordPress configuration সম্পৰ্কীয় প্ৰশ্নৰ উত্তৰ দিয়া।

**Available tools:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**ই কি ভালদৰে কৰে:**
- বৰ্তমান ছাইটৰ ছেটিংছ আৰু বিকল্পসমূহ বিচাৰি উলিওৱা
- ছাইটত কোনবোৰ পোষ্ট প্ৰকাৰ, টেক্সোনমি, আৰু মেনু কনফিগাৰ কৰা হৈছে সেয়া বুজাই দিয়া
- লাইভ মান পঢ়ি "এই ছেটিঙে কি কৰে?" ধৰণৰ প্ৰশ্নৰ উত্তৰ দিয়া
- সলনি কৰাৰ আগতে কেৱল-পঢ়িব পৰা নিৰ্ণায়ক স্তৰ হিচাপে কাম কৰা

**আৰম্ভণিৰ পৰামৰ্শ:**
- *এই ছাইটত বৰ্তমান কোনবোৰ plugin আৰু ছেটিংছ সক্ৰিয় আছে?*
- *এই ছাইটত পঞ্জীয়ন কৰা সকলো কাষ্টম পোষ্ট প্ৰকাৰ তালিকাভুক্ত কৰক।*
- *কি কি নেভিগেশ্যন মেনু আছে আৰু সেইবোৰ ক’ত নিযুক্ত কৰা হৈছে?*

---

## Superdav অটোমেশ্যন ইণ্টিগ্ৰেশ্যনসমূহ {#superdav-automation-integrations}

যেতিয়া Superdav AI Agent v1.18.0 ইণ্টিগ্ৰেশ্যনসমূহ কনফিগাৰ কৰা হয়, অন্তৰ্নিৰ্মিত agent-সমূহে অধিক সুৰক্ষিত সূচী-সচেতন অটোমেশ্যন ৱৰ্কফ্ল’ত অংশ ল’ব পাৰে:

- **Google Calendar পঢ়া সঁজুলিসমূহে** follow-up কামৰ খচৰা প্ৰস্তুত কৰাৰ আগতে agent-সমূহক কনফিগাৰ কৰা কেলেণ্ডাৰ আৰু ইভেণ্ট পৰীক্ষা কৰিবলৈ দিয়ে।
- **যোগাযোগ আৰু অংশগ্ৰহণকাৰী মেপিং**-এ ইভেণ্ট অংশগ্ৰহণকাৰীসকলক WordPress ব্যৱহাৰকাৰী বা জনা যোগাযোগৰ সৈতে মিলাবলৈ সহায় কৰে।
- **মানৱ অনুমোদন গেটসমূহে** সংবেদনশীল কাৰ্যসমূহ এজন অধিকৃত ব্যৱহাৰকাৰীয়ে পৰ্যালোচনা আৰু নিশ্চিত নকৰালৈকে স্থগিত ৰাখে।
- **সোঁৱৰনি ৰেকৰ্ডসমূহে** সূচীবদ্ধ কামসমূহ পুনৰ চেষ্টা বা পুনৰাবৃত্তি কৰিলে পুনৰাবৃত্ত জাননী ৰোধ কৰে।
- **TextBee SMS জাননীসমূহে** SMS credentials আৰু workflow permissions সক্ৰিয় থাকিলেহে কনফিগাৰ কৰা টেক্সট বাৰ্তা পঠিয়ায়।

পৰামৰ্শ দিয়া workflow: agent-ক বাৰ্তা বা কাৰ্য প্ৰস্তুত কৰিবলৈ কওক, অনুমোদন prompt পৰ্যালোচনা কৰক, তাৰ পিছত অনুমোদিত কাৰ্য পুনৰ আৰম্ভ কৰিবলৈ দিয়ক। পুনৰাবৃত্ত সোঁৱৰনিৰ বাবে, reminder deduplication সক্ৰিয় ৰাখক যাতে একেটা ইভেণ্ট বা যোগাযোগক বাৰে বাৰে জাননী দিয়া নহয়।

---

## Agentসমূহ কাষ্টমাইজ কৰা {#customising-agents}

প্ৰতিটো অন্তৰ্নিৰ্মিত agent `gratis_ai_agent_agents` filter-ৰ জৰিয়তে সম্প্ৰসাৰিত বা সলনি কৰিব পাৰি।

### বৰ্তমান থকা agent এটাত কাষ্টম system prompt যোগ কৰা {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### নতুন agent পঞ্জীয়ন কৰা {#registering-a-new-agent}

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

filter চলাৰ লগে লগে নতুন agentটো Agent Picker-ত দেখা যায়।

### অন্তৰ্নিৰ্মিত agent আঁতৰোৱা {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
