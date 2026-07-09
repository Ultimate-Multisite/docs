---
id: wu_enforce_password_rules
title: Àlẹmọ - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Àlẹmọ: wu_enforce_password_rules

Ṣe àlẹmọ bóyá kí a fi ipa mú àwọn òfin àfikún fún ọ̀rọ̀ aṣínà.

Nígbà tí ó bá jẹ́ true, ó fi ipa mú gígùn tó kéré jù àti àwọn ìbéèrè ohun kikọ. A máa ń muu ṣiṣẹ́ laifọwọyi fún ètò "Super Strong" tàbí nígbà tí ẹ̀ya Strong Password ti Defender Pro bá ń ṣiṣẹ́.

## Àwọn àgbékalẹ̀

| Orúkọ | Iru | Àpèjúwe |
|------|------|-------------|
| $enforce_rules | `bool` | Bóyá kí a fi ipa mú àwọn òfin àfikún. |
| $strength_setting | `string` | Iye ètò admin. |
| $defender_active | `bool` | Bóyá Defender Pro Strong Password ń ṣiṣẹ́. |

### Láti

- 2.4.0
### Orísun

A ṣàlàyé rẹ̀ nínú [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) ní laini 531
