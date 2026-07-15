---
id: wu_limits_is_fluent_form_above_limit
title: ফিল্টার - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# Filter: wu_limits_is_fluent_form_above_limit

এটি পরীক্ষা করে দেখে যে প্রদত্ত ফর্মের ধরনটি এই প্ল্যানে অনুমোদিত কিনা। এটি প্লাগইন ডেভেলপারদের রিটার্ন ভ্যালু ফিল্টার করার সুযোগ দেয়।

## প্যারামিটারসমূহ {#parameters}

| Name | Type | বিবরণ |
|------|------|-------------|
| $value | `bool` | ফর্মের ধরনটি কি লিমিটের বেশি নাকি না। |
| $form_type | `string` | যে ফর্মের ধরনটি পরীক্ষা করা হচ্ছে। |
| $form_count | `int` | বর্তমান ফর্মের সংখ্যা। |
| $quota | `int` | অনুমোদিত কোটা। |

### যেহেতু {#since}

- 1.0.0
### উৎস {#source}

- [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) এ লাইন ৫৬-এ সংজ্ঞায়িত
- [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) এ লাইন ৮৯-এ সংজ্ঞায়িত
