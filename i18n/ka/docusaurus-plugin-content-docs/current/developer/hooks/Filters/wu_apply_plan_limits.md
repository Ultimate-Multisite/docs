---
id: wu_apply_plan_limits
title: ფილტრი - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# ფილტრი: wu_apply_plan_limits

plugin დეველოპერებს შეზღუდვების მოკლედ შეწყვეტის საშუალებას აძლევს.

შეგიძლიათ გამოიყენოთ ეს ფილტრი ნებისმიერი კოდის გასაშვებად მანამდე, სანამ რომელიმე შეზღუდვა ინიციირდება. თუ თქვენი ფილტრი დააბრუნებს truthy მნიშვნელობას, პროცესი გაგრძელდება; თუ დააბრუნებს falsy მნიშვნელობას, კოდი დაბრუნდება და ქვემოთ მოცემული არცერთი hook არ გაეშვება.

### ვერსიიდან {#since}

- 1.7.0
### წყარო {#source}

- განსაზღვრულია [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52)-ში, ხაზზე 52
- განსაზღვრულია [`inc/limits/class-disk-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-disk-space-limits.php#L98)-ში, ხაზზე 98
## აბრუნებს {#returns}
