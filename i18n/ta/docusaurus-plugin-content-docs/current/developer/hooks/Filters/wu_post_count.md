---
id: wu_post_count
title: Filter - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filter: wu_post_count {#filter-wupostcount}

Plugin உருவாக்குநர்கள் எண்ணிக்கை மொத்தத்தை மாற்ற அனுமதிக்கிறது

## அளவுருக்கள் (Parameters) {#parameters}

| Name | Type | விளக்கம் (Description) |
|------|------|-------------|
| $count | `int` | மொத்த போஸ்ட் எண்ணிக்கை |
| $post_counts | `object` | `wp_count_posts` செயல்பாட்டினால் திரும்ப வரும் WordPress ஆப்ஜெக்ட் |
| $post_type | `string` | போஸ்ட் வகை ஸ்லக் (post type slug) |

### Since {#since}

- 1.9.1
### Source {#source}

[`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) என்ற இடத்தில், 136 வரியில் வரையறுக்கப்பட்டுள்ளது.

## திரும்ப அளிப்பது (Returns) {#returns}
புதிய மொத்த எண்ணிக்கை
