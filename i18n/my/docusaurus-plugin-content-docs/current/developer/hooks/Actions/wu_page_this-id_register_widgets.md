---
id: wu_page_this-id_register_widgets
title: 'Action - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_\{$this->id\}_register_widgets

ဤစာမျက်နှာအတွက် ဝစ်ဂျက်များကို မှတ်ပုံတင်ပြီးနောက် အလုပ်လုပ်ပါသည်။

hook အမည်ရှိ အပြောင်းအလဲဖြစ်နိုင်သော အပိုင်းဖြစ်သည့် `$this->id` သည် စာမျက်နှာ ID ကို ရည်ညွှန်းပါသည်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | စာမျက်နှာ ID ကို ဖော်ပြသည်။ |
| $page_hook | `string` | စာမျက်နှာ hook ကို ဖော်ပြသည်။ |
| $page | `object` | စာမျက်နှာ အရာဝတ္ထု (object) ကို ဖော်ပြသည်။ |

### Since {#since}

- 2.4.10
### Source {#source}

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) at line 755
