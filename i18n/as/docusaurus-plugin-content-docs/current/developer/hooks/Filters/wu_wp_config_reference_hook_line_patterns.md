---
id: wu_wp_config_reference_hook_line_patterns
title: ফিল্টার - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filter: wu_wp_config_reference_hook_line_patterns

আমি ক'ধৰণৰ pattern বিচাৰোঁ যাতে আমি ক'ত আমাৰ constants-বোৰ inject কৰিব পাৰোঁ:

১. আমি `$table_prefix` variable-ৰ definition বিচাৰোঁ; ২. আমি অধিক জটিল `$table_prefix` definition বিচাৰোঁ — যেনে, যিবোৰ env variables ব্যৱহাৰ কৰে; ৩. যদি সেয়া উপলব্ধ নহয়, তেন্তে আমি 'Happy Publishing' comment-টো বিচাৰোঁ; ৪. যদি সেয়াও উপলব্ধ নহয়, তেন্তে আমি ফাইলটোৰ আৰম্ভণি বিচাৰোঁ। এই key-টোৱে pattern-টো সূচিত কৰে আৰু value-টোৱে ক'টা লাইন যোগ কৰিব লাগে সেই সংখ্যাটো দিয়ে। যদি আমি এটা নেগেটিভ সংখ্যাৰ লাইন দিয়ে, তেন্তে ইয়াৰ অৰ্থ হ'ল যে বিচাৰি পোৱা লাইনটোৰ পিছত লিখি নহয়, বৰঞ্চ তাৰ আগত লিখিব।

### Source

[`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) ত লাইন ১৪৩ मा সংজ্ঞায়িত কৰা হৈছে
