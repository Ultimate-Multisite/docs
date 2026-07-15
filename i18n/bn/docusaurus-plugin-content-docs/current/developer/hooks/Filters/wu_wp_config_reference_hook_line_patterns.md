---
id: wu_wp_config_reference_hook_line_patterns
title: ফিল্টার - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filter: wu_wp_config_reference_hook_line_patterns

আমরা যখন বোঝার চেষ্টা করি যে আমরা কোথায় আমাদের কনস্ট্যান্ট যোগ করতে পারি, তখন আমরা তিনটি প্যাটার্ন খুঁজি:

১. আমরা `$table_prefix` ভেরিয়েবলের সংজ্ঞা খুঁজি; ২. আমরা আরও জটিল `$table_prefix` সংজ্ঞা খুঁজি—যেমন যেগুলি env ভেরিয়েবল ব্যবহার করে; ৩. যদি তা না পাওয়া যায়, তবে আমরা 'Happy Publishing' কমেন্টটি খুঁজি; ৪. যদি সেটাও না পাওয়া যায়, তবে আমরা ফাইলটির শুরুটা খুঁজি। এখানে key টি প্যাটার্নকে এবং value টি নির্দেশ করে যে কত লাইন যোগ করতে হবে। যদি আপনি নেগেটিভ সংখ্যা দেন, তবে তা খুঁজে পাওয়া লাইনের পরে লেখার পরিবর্তে তার আগে লেখার জন্য ব্যবহার করা যেতে পারে।

### Source {#source}

[`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143)-এ লাইন ১৪৩-এ সংজ্ঞায়িত।
