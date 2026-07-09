---
title: رنگن جي پيليٽ جو ڪنٽراسٽ تصديق ڪريو
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Palette Contrast جي تصديق ڪريو {#validate-palette-contrast}

**Validate Palette Contrast** صلاحيت توهان جي ڊيزائن palette ۾ رنگن جي جوڙن کي توهان جي theme تي لاڳو ڪرڻ کان اڳ WCAG (Web Content Accessibility Guidelines) جي پابندي لاءِ چيڪ ڪري ٿي.

## جائزو {#overview}

هي صلاحيت يقيني بڻائي ٿي ته توهان جي سائيٽ جو رنگي خاڪو پهچ جي معيارن تي پورو لهي، متن ۽ پس منظر جي رنگن جي وچ ۾ contrast ratios جي تصديق ڪري. اها اهڙين رنگي ميلاپن کي روڪڻ ۾ مدد ڪري ٿي جيڪي بصري معذوري رکندڙ استعمال ڪندڙن لاءِ پڙهڻ ۾ ڏکيا ٿي سگهن ٿا.

## انپٽ فارميٽ {#input-format}

هي صلاحيت رنگن جي palette کي انپٽ طور قبول ڪري ٿي:

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

### پيراميٽر {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `colors` | array | Yes | `name` ۽ `hex` خاصيتن سان رنگ آبجيڪٽس جي array |
| `wcag_level` | string | No | WCAG پابندي سطح: "A"، "AA" (ڊفالٽ)، يا "AAA" |
| `pairs_to_check` | array | No | تصديق ڪرڻ لاءِ مخصوص رنگي جوڙا (مثال طور، `["primary-text", "background-text"]`) |

## چيڪ ڪيل WCAG سطحون {#wcag-levels-checked}

هي صلاحيت WCAG معيارن موجب contrast ratios جي تصديق ڪري ٿي:

| Level | Normal Text | Large Text | Minimum Ratio |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **عام متن** — 18pt کان ننڍو متن (يا 14pt bold)
- **وڏو متن** — 18pt يا وڏو متن (يا 14pt bold يا وڏو)

## آئوٽ پٽ اسڪيمه {#output-schema}

هي صلاحيت تفصيلي تصديقي رپورٽ واپس ڪري ٿي:

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

### آئوٽ پٽ فيلڊز {#output-fields}

| Field | Type | Description |
|-------|------|-------------|
| `compliant` | boolean | ڇا سڄي palette مخصوص WCAG سطح تي پوري لهي ٿي |
| `wcag_level` | string | اها WCAG سطح جيڪا چيڪ ڪئي وئي |
| `pairs` | array | هر رنگي جوڙي لاءِ تفصيلي نتيجا |
| `contrast_ratio` | number | حساب ڪيل contrast ratio (1:1 کان 21:1) |
| `status` | string | هر جوڙي لاءِ "pass" يا "fail" |
| `recommendations` | array | ناڪام ٿيندڙ جوڙن کي بهتر ڪرڻ لاءِ صلاحون |

## استعمال جو مثال {#usage-example}

**Prompt:**
```
چيڪ ڪريو ته ڇا منهنجي رنگن جي palette WCAG AA معيارن تي پوري لهي ٿي. مون وٽ primary رنگ #678233، متن جو رنگ #ffffff، ۽ پس منظر #f5f5f5 آهي.
```

**نتيجو:**
هي صلاحيت سڀني رنگي ميلاپن جي تصديق ڪري ٿي ۽ واپس ڪري ٿي:
- ✅ Primary + Text: 5.2:1 ratio (WCAG AA پاس ڪري ٿو)
- ✅ Background + Text: 12.1:1 ratio (WCAG AAA پاس ڪري ٿو)
- مجموعي طور: WCAG AA سان پابند

## Theme Builder سان انٽيگريشن {#integration-with-theme-builder}

Theme Builder جي ڊيزائن-رخ چونڊ استعمال ڪندي، Validate Palette Contrast صلاحيت:

1. توهان جي چونڊيل رنگن جي palette جو تجزيو ڪري ٿي
2. سڀ متن-پس منظر ميلاپ چيڪ ڪري ٿي
3. توهان جي چونڊيل WCAG سطح جي مقابلي ۾ تصديق ڪري ٿي
4. غير پابند جوڙن لاءِ صلاحون فراهم ڪري ٿي
5. پهچ کان محروم رنگي خاڪن کي لاڳو ٿيڻ کان روڪي ٿي

## بهترين طريقا {#best-practices}

- **AA سطح سان شروع ڪريو** — WCAG AA اڪثر ويب سائيٽن لاءِ معيار آهي
- **لاڳو ڪرڻ کان اڳ ٽيسٽ ڪريو** — ڊيزائن تي پابند ٿيڻ کان اڳ پنهنجي palette جي تصديق ڪريو
- **سڀ ميلاپ چيڪ ڪريو** — يقيني بڻايو ته متن، لنڪس، ۽ UI عنصر سڀ معيارن تي پورا لهن
- **استعمال ڪندڙن جي ترجيحن کي ذهن ۾ رکو** — ڪجهه استعمال ڪندڙن کي اضافي رنگي حساسيت ٿي سگهي ٿي
- **contrast checkers استعمال ڪريو** — تصديق لاءِ هن صلاحيت کي برائوزر اوزارن سان گڏ استعمال ڪريو

## ناڪام جوڙا ۽ صلاحون {#failing-pairs-and-recommendations}

جيڪڏهن ڪو رنگي جوڙو تصديق ۾ ناڪام ٿئي، ته هي صلاحيت صلاحون فراهم ڪري ٿي:

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

## لاڳاپيل صلاحيتون {#related-abilities}

- [Logo SVG ٺاهيو](./generate-logo-svg.md) — پنهنجي تصديق ٿيل رنگن جي palette سان logos ٺاهيو
- [Menu ٺاهيو](./create-menu.md) — پهچ لائق رنگن سان navigation ٺاهيو
