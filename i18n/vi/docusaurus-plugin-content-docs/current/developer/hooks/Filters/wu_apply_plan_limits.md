---
id: wu_apply_plan_limits
title: Bộ lọc - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Filter: wu_apply_plan_limits {#filter-wuapplyplanlimits}

Cho phép các nhà phát triển plugin tùy chỉnh hoặc bỏ qua các giới hạn.

Bạn có thể sử dụng filter này để chạy các đoạn mã tùy ý trước khi bất kỳ giới hạn nào được áp dụng. Nếu giá trị trả về từ filter là giá trị đúng (truthy), quá trình sẽ tiếp tục. Ngược lại, nếu trả về giá trị sai (falsy), đoạn mã sẽ dừng lại và các hook bên dưới sẽ không được kích hoạt.

### Since {#since}

- 1.7.0
### Source {#source}

- Defined in [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) at line 52
- Defined in [`inc/limits/class-di&#115;k-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-di%73k-space-limits.php#L98) at line 98
## Returns {#returns}
