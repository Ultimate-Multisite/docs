---
id: wu_domain_renewal_completed
title: কাৰ্য - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

এটা ডোমেইন সফলভাৱে পুনৰ নবীকৰণ হোৱাৰ পিছত এই Action টি কাৰ্য কৰে।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | যিটো ধন পৰিশোধে পুনৰ নবীকৰণৰ কাৰণ হ'ল। |
| $renewal_data | `array&lt;string,mixed&gt;` | পুনৰ নবীকৰণৰ মেটাডেটা (domain_name, years, customer_id, ইত্যাদি)। |
| $result | `array&lt;string,mixed&gt;` | ৰাজistraৰৰ দ্বাৰা ঘূৰাই দিয়া কাঁচা ফলাফলৰ তালিকা, যাৰ ভিতৰত নতুন expiry_date থাকে। |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) ফাইলৰ লাইন ৫৯৪ ত সংজ্ঞায়িত কৰা হৈছে।
