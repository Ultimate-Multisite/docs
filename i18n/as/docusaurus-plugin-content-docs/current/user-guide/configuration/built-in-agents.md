---
title: অন্তৰ্মীয় এজেণ্টসমূহ
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# বিল্ট-ইন এজেণ্টসমূহ (Built-in Agents)

Gratis AI Agent v1.9.0 ত পাঁচটা বিল্ট-ইন এজেণ্ট অন্তৰ্ভুক্ত কৰা হৈছে। প্ৰতিটো এজেণ্টেই এটা নিৰ্দিষ্ট ধৰণৰ টুলছ, এটা উপযুক্ত 'System prompt' আৰু সেই ক্ষেত্ৰৰ সাধাৰণ কামসমূহৰ সৈতে মিল থকা কিছুমান আৰম্ভণিৰ প্ৰস্তাৱ (starter suggestions) লৈ আগতে সেট কৰা হৈ থাকে। এজেণ্টৰ মাজত স্থানান্তৰ কৰিলে সহায়কটোৱে কি কৰিব পাৰিব আৰু কেনেকৈ উত্তৰ দিব, সেয়া সলনি হয় — আৰু ইয়াৰ বাবে আপুনি কোনো কনফিগাৰেচন কৰিবলগীয়া নহয়।

## এজেণ্ট মানে কি? (What Is an Agent?)

প্ৰতিজন এজেণ্ট হৈছে এটা নামযুক্ত কনফিগাৰেচন প্ৰোফাইল যিয়ে তলত দিয়া উপাদানসমূহক একত্ৰিত কৰে:

- **Tools** — এইবোৰ হৈছে সেই ক্ষমতা যিবোৰ এজেণ্টক ব্যৱহাৰ কৰিবলৈ অনুমতি দিয়া হয় (উদাহৰণস্বৰূপে, এজন Content Writer-ৰ ওচৰত পোষ্ট সৃষ্টি কৰাৰ ক্ষমতা থাকে; Design Studio-ৰ ওচৰত CSS আৰু theme.json ব্যৱহাৰ কৰাৰ ক্ষমতা থাকে)
- **System prompt** — এইবোৰ হৈছে সেই নিৰ্দেশাবলী যিয়ে এজেণ্টৰ ধৰণ, প্ৰয়োজনীয়তা আৰু সীমা নিৰ定 কৰে।
- **Suggestions** — এইবোৰ হৈছে চ্যাট interfacer-ত আগতে লিখি থোৱা প্ৰম্পট, যিয়ে আপোনাক সোনকালে আৰম্ভ কৰাত সহায় কৰে।

## এজেণ্ট পিকাৰলৈ প্ৰৱেশ কৰা (Accessing the Agent Picker)

১. WordPress admin sidebar-ত **Gratis AI Agent** প্যানেলটো খুলক।
২. চ্যাট হেডিংৰ ওপৰ-বামে থকা **agent icon** টোত ক্লিক কৰক (সক্ৰিয় এজেণ্টক প্ৰতিফলিত কৰিবলৈ এই আইকনটো সলনি হয়)।
৩. **Agent Picker** এটা form-table overlay হিচাপে খুলি যায়। প্ৰতিজন এজেণ্টক তেওঁলোকৰ আইকন, নাম আৰু এটা শাৰীৰ বিৱৰণৰ সৈতে তালিকাভুক্ত কৰা হয়।
৪. কোনো এজেণ্টৰ শাৰীত ক্লিক কৰি তাক সক্ৰিয় কৰক। চ্যাট হেডিংটো তৎক্ষণাত আপডেট হয়।

আপুনি কথোপকথনৰ মাজতো এজেণ্ট সলনি কৰিব পাৰে — নতুন এজেণ্টৰ system prompt টো পৰৱৰ্তী বাৰৰ মেছেজৰ পৰা কাৰ্যকৰী হয়।

## পাঁচটা বিল্ট-ইন এজেণ্ট (The Five Built-in Agents)

### Content Writer

**মনোযোগ:** পোষ্ট, পেজ আৰু যোগাযোগ ফৰ্ম সৃষ্টি কৰা আৰু সম্পাদনা কৰা।

**উপলব্ধ টুলছ:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**কি ভালদৰে কৰে:**
- এটা সংক্ষিপ্ত বা আউটলাইনৰ পৰা ব্লগ পোষ্ট লিখি প্ৰকাশ কৰা
- এটা নতুন স্থানৰ বাবে ল্যান্ডিং পেজৰ এটা দল (batches) সৃষ্টি কৰা
- যোগাযোগ আৰু প্ৰশ্নোত্তৰ ফৰ্ম নিৰ্মাণ কৰা
- URL বা অনুসন্ধানৰ পৰা পোষ্টত featured image সেট কৰা

**আৰম্ভণিৰ প্ৰস্তাৱ:**
- *WordPress multisite-ৰ সুবিধাৰ ওপৰত ৫০০ শব্দৰ এটা ব্লগ পোষ্ট লিখক।*
- *এটা About, Services, আৰু Contact পেজ সৃষ্টি কৰি প্ৰকাশ কৰক।*
- *Contact পেজত এটা বুকিং প্ৰশ্নোত্তৰ ফৰ্ম যোগ কৰক।*

---

### Site Builder

**মনোযোগ:** এটা মাত্ৰ প্ৰম্পটৰ পৰা সম্পূৰ্ণ ওয়েবসাইট সৃষ্টি কৰা।

**উপলব্ধ টুলছ:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**কি ভালদৰে কৰে:**
- বৰ্ণনা কৰা ব্যৱসায়ৰ ধৰণৰ বাবে এটা বহু-ধাপৰ সাইট বিল্ড پلان জেনারেট কৰা
- প্ৰতিটো ধাপ স্বয়ংগত কাৰ্যকৰী কৰা — গঠন, বিষয়বস্তু, নেভিগেশ্যন, ডিজাইন
- মানৱ হস্তক্ষেপৰ প্ৰয়োজন নোহোৱাকৈ প্লেনৰ মাজত হোৱা ভুলৰ পৰা পুনৰুদ্ধাৰ কৰা
- বিল্ডৰ অংশ হিচাপে প্ৰয়োজনীয় plugin install কৰা
- চ্যাট interfacerৰ পৰা পোনপটীয়াকৈ যোগাযোগ ফৰ্ম সৃষ্টি কৰা (Superdav AI Agent v1.10.0+)

**আৰম্ভণিৰ প্ৰস্তাৱ:**
- *এটা গැලৰি পোষ্ট টাইপ, এটা বুকিং পেজ আৰু এটা যোগাযোগ ফৰ্ম লৈ এটা ফটোফগ্ৰাফী প’ৰ্টফলিও সাইট বিল্ড কৰক।*
- *অনলাইন মেনু, খোলার সময় আৰু টেবুল-বুকিং প্ৰশ্নোত্তৰ ফৰ্ম লৈ এটা ресторанৰ ওয়েবসাইট সৃষ্টি কৰক।*
- *সেৱাৰ পেজ, এটা প’ৰ্টফলিও অংশ আৰু এটা ব্লগ লৈ এটা ফ্ৰিলেন্স কনসাল্টিং সাইট সেট কৰক।*
- *সাইট বিল্ডাৰ ব্যৱহাৰ কৰি Contact পেজত এটা যোগাযোগ ফৰ্ম যোগ কৰক।*

---

### Design Studio

**মনোযোগ:** দৃশ্যমান কাস্টমাইজেশ্যন — ৰং, টাইপগ্ৰাফী, CSS, আৰু ব্লক পটেৰ্ণ।

**উপলব্ধ টুলছ:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**কি ভালদৰে কৰে:**
- নামযুক্ত থীম প্ৰিসেট (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog) প্ৰয়োগ কৰা
- theme.jsonৰ জৰিয়তে গ্লোবাল টাইপগ্ৰাফী আৰু ৰংৰ প্যালেট সূক্ষ্মভাৱে পৰিৱৰ্তন কৰা
- ব্ৰেণ্ড-নিৰ্দিষ্ট ওপৰাই থকা ৰংৰ বাবে কাস্টম CSS inject কৰা
- এটা পেজৰ স্ক্ৰীনশ্বট লৈ ডিজাইনৰ সমস্যাৰ বাবে ইয়াক পৰীক্ষা কৰা

**আৰম্ভণিৰ প্ৰস্তাৱ:**
- *warm-editorial প্ৰিসেটটো প্ৰয়োগ কৰক আৰু তাৰ পিছত primary color টো #2d6a4f সেট কৰক।*
- *হোমপেজৰ এটা স্ক্ৰীনশ্বট লওক আৰু মই কি উন্নত কৰিব পাৰোঁ বুলি কওক।*
- *এটা পূৰ্ণ-width background image আৰু কেন্দ্ৰীয় হেডিং লৈ এটা পুনৰ ব্যৱহাৰ কৰিব পৰা hero block pattern সৃষ্টি কৰক।*

---

### Plugin Manager

**মনোযোগ:** WordPress plugin আৱিষ্কাৰ কৰা, install কৰা আৰু ব্যৱস্থাপনা কৰা।

**উপলব্ধ টুলছ:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**কি ভালদৰে কৰে:**
- বৰ্ণনা কৰা ব্যৱহাৰৰ ক্ষেত্ৰৰ বাবে আটাইতকৈ ভাল plugin পৰামৰ্শ দিয়া
- ৰেজিষ্ট্ৰীৰ পৰা ability pack install কৰা
- categoria অনুসৰি উপলব্ধ ability catalogue ब्राउজি কৰা

**আৰম্ভণিৰ প্ৰস্তাৱ:**
- *membership directory-ৰ বাবে আটাইতকৈ ভাল plugin কি?*
- *WooCommerce ability pack install কৰক।*
- *উপলব্ধ ecommerce ability pack সমূহ মোৰ ওচৰত দেখুৱাওক।*

---

### Support Assistant

**মনোযোগ:** সাইটৰ বিষয়বস্তু, সেটিংস আৰু WordPress কনফিগাৰেচনৰ বিষয়ে প্ৰশ্নৰ উত্তৰ দিয়া।

**উপলব্ধ টুলছ:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**কি ভালদৰে কৰে:**
- বৰ্তমানৰ সাইট সেটিংস আৰু অপচনসমূহ তলবুত কৰা
- সাইটত কি কি post types, taxonomies, আৰু menus কনফিগাৰেট কৰা আছে সেয়া ব্যাখ্যা কৰা
- লাইভ মানদণ্ড পঢ়ি "এই সেটিংসটোৱে কি কৰে?" প্ৰশ্নৰ উত্তৰ দিয়া
- কোনো পৰিৱৰ্তন কৰাৰ আগতে এটা read-only diagnostic layer হিচাপে কাম কৰা

**আৰম্ভণিৰ প্ৰস্তাৱ:**
- *এই সাইটত বৰ্তমান কোন কোন plugin আৰু সেটিংস সক্ৰিয় আছে?*
- *এই সাইটত রেজিস্টাৰ কৰা সকলো কাস্টম post types তালিকাভুক্ত কৰক।*
- *কোন কোন নেভিগেশ্যন মেনু আছে আৰু ইহঁত ক'ত নিৰ্ধাৰিত কৰা হৈছে?*

---

## এজেণ্ট কাস্টমাইজ কৰা (Customising Agents)

প্ৰতিজন বিল্ট-ইন এজেণ্টক `gratis_ai_agent_agents` filter ব্যৱহাৰ কৰি বৃদ্ধি কৰিব বা সলনি কৰিব পাৰি।

### এটা বিদ্যমান এজেণ্টলৈ কাস্টম system prompt যোগ কৰা

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### এটা নতুন এজেণ্ট রেজিস্টাৰ কৰা

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

নতুন এজেণ্টটো filter টো চলি থকাৰ পিছত তাৎক্ষণিকভাৱে Agent Picker-ত দেখা যায়।

### এটা বিল্ট-ইন এজেণ্ট நீকৰণ কৰা

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
