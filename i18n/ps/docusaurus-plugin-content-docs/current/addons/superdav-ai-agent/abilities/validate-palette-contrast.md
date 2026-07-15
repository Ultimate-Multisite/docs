---
title: د رنګ‌لړ تضاد تایید کړئ
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# د پالیټ تضاد تاییدول

د **د پالیټ تضاد تاییدول** وړتیا ستاسو د ډیزاین پالیټ کې د رنګ جوړې د WCAG (د وېب منځپانګې لاسرسي لارښوونې) د مطابقت لپاره ګوري، مخکې له دې چې یې په خپل theme پلي کړئ.

## لنډیز {#overview}

دا وړتیا ډاډ ورکوي چې ستاسو د site رنګي طرحه د لاسرسي معیارونه پوره کوي، د متن او شالید رنګونو ترمنځ د تضاد نسبتونو د تایید له لارې. دا د هغو رنګي ترکیبونو د مخنیوي کې مرسته کوي چې د لید له ستونزو لرونکو کاروونکو لپاره لوستل یې ستونزمن وي.

## د ننوت بڼه {#input-format}

دا وړتیا د ننوت په توګه یو رنګي پالیټ مني:

```json
{
  "colors": [
    {
      "name": "primary",
      "hex": "#678233"
    },
    {
      "name": "text",
      "hex": "#ffffff"
    },
    {
      "name": "background",
      "hex": "#f5f5f5"
    }
  ],
  "wcag_level": "AA"
}
```

### پارامترونه {#parameters}

| پارامتر | ډول | اړین | تشریح |
|-----------|------|----------|-------------|
| `colors` | array | هو | د رنګ objectونو array چې `name` او `hex` ځانګړتیاوې لري |
| `wcag_level` | string | نه | د WCAG د مطابقت کچه: "A"، "AA" (اصلي)، یا "AAA" |
| `pairs_to_check` | array | نه | ځانګړې رنګ جوړې چې باید تایید شي (لکه `["primary-text", "background-text"]`) |

## کتل شوې د WCAG کچې {#wcag-levels-checked}

دا وړتیا د WCAG معیارونو له مخې د تضاد نسبتونه تاییدوي:

| کچه | عادي متن | لوی متن | لږ تر لږه نسبت |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **عادي متن** — له 18pt څخه کوچنی متن (یا 14pt بولډ)
- **لوی متن** — 18pt یا تر دې لوی متن (یا 14pt بولډ یا تر دې لوی)

## د وتنې Schema {#output-schema}

دا وړتیا یو تفصیلي تایید راپور بېرته ورکوي:

```json
{
  "compliant": true,
  "wcag_level": "AA",
  "pairs": [
    {
      "pair": "primary-text",
      "color1": "#678233",
      "color2": "#ffffff",
      "contrast_ratio": 5.2,
      "wcag_a": true,
      "wcag_aa": true,
      "wcag_aaa": false,
      "status": "pass"
    },
    {
      "pair": "background-text",
      "color1": "#f5f5f5",
      "color2": "#333333",
      "contrast_ratio": 12.1,
      "wcag_a": true,
      "wcag_aa": true,
      "wcag_aaa": true,
      "status": "pass"
    }
  ],
  "summary": {
    "total_pairs": 2,
    "passing": 2,
    "failing": 0,
    "recommendations": []
  }
}
```

### د وتنې برخې {#output-fields}

| برخه | ډول | تشریح |
|-------|------|-------------|
| `compliant` | boolean | آیا ټول پالیټ ټاکل شوې WCAG کچه پوره کوي که نه |
| `wcag_level` | string | هغه WCAG کچه چې وکتل شوه |
| `pairs` | array | د هرې رنګ جوړې لپاره تفصیلي پایلې |
| `contrast_ratio` | number | محاسبه شوی د تضاد نسبت (له 1:1 تر 21:1) |
| `status` | string | د هرې جوړې لپاره "pass" یا "fail" |
| `recommendations` | array | د ناکامو جوړو د ښه کولو وړاندیزونه |

## د کارولو بېلګه {#usage-example}

**Prompt:**
```
وګورئ چې زما رنګي پالیټ د WCAG AA معیارونه پوره کوي که نه. زه primary رنګ #678233، د متن رنګ #ffffff، او شالید #f5f5f5 لرم.
```

**پایله:**
دا وړتیا ټول رنګي ترکیبونه تاییدوي او بېرته ورکوي:
- ✅ Primary + متن: 5.2:1 نسبت (WCAG AA تېروي)
- ✅ شالید + متن: 12.1:1 نسبت (WCAG AAA تېروي)
- په ټوله کې: له WCAG AA سره مطابقت لري

## له Theme Builder سره یوځای کول {#integration-with-theme-builder}

کله چې د Theme Builder د ډیزاین-لوري ټاکنه کاروئ، د پالیټ تضاد تاییدولو وړتیا:

1. ستاسو ټاکل شوی رنګي پالیټ شننه کوي
2. ټول د متن-شالید ترکیبونه ګوري
3. ستاسو د ټاکل شوې WCAG کچې پر وړاندې یې تاییدوي
4. د غیرمطابقو جوړو لپاره وړاندیزونه وړاندې کوي
5. د لاسرسي نه لرونکو رنګي طرحو پلي کېدل مخنیوی کوي

## غوره کړنلارې {#best-practices}

- **له AA کچې پیل وکړئ** — WCAG AA د ډېرو وېبپاڼو لپاره معیار دی
- **له پلي کولو مخکې یې وازمویئ** — خپل پالیټ د ډیزاین تر منلو مخکې تایید کړئ
- **ټول ترکیبونه وګورئ** — ډاډ ترلاسه کړئ چې متن، تړنې، او د کارن-مخ عناصر ټول معیارونه پوره کوي
- **د کاروونکو غوره‌توبونه په پام کې ونیسئ** — ځینې کاروونکي کېدای شي د رنګ اضافي حساسیت ولري
- **د تضاد کتوونکي وکاروئ** — دا وړتیا د تایید لپاره د browser وسایلو سره یوځای وکاروئ

## ناکامې جوړې او وړاندیزونه {#failing-pairs-and-recommendations}

که یوه رنګ جوړه په تایید کې ناکامه شي، دا وړتیا وړاندیزونه وړاندې کوي:

```json
{
  "pair": "primary-text",
  "status": "fail",
  "contrast_ratio": 2.8,
  "wcag_aa": false,
  "recommendations": [
    "Lighten the text color to #ffffff (ratio would be 5.2:1)",
    "Darken the background color to #556b2f (ratio would be 4.8:1)",
    "Use a different primary color like #4a6b1f (ratio would be 6.1:1)"
  ]
}
```

## اړوندې وړتیاوې {#related-abilities}

- [Logo SVG جوړول](./generate-logo-svg.md) — د خپل تایید شوي رنګي پالیټ سره logo جوړ کړئ
- [Menu جوړول](./create-menu.md) — د لاسرسي وړ رنګونو سره navigation جوړ کړئ
