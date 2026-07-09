---
id: wu_apply_plan_limits
title: فلټر - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Filter: wu_apply_plan_limits

plugin پرمختیاکوونکو ته اجازه ورکړئ چې محدودیتونه short-circuit کړي.

تاسو کولی شئ دا filter وکاروئ څو د هر محدودیت له پیل کېدو مخکې خپل‌سری code وچلوئ. که ستاسو filter هر truthy ارزښت بېرته راولي، پروسه به مخته ولاړه شي؛ که هر falsy ارزښت بېرته راولي، code به بېرته وګرځي او لاندې هېڅ hook به ونه چلېږي.

### له

- 1.7.0
### سرچینه

- په [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) کې، په 52 کرښه تعریف شوی
- په [`inc/limits/class-disk-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-disk-space-limits.php#L98) کې، په 98 کرښه تعریف شوی
## بېرته راګرځوي
