---
title: پيليٽ جي ڪنٽراسٽ جي تصديق ڪريو
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# پيليٽ ڪنٽراسٽ جي تصديق ڪريو {#validate-palette-contrast}

**پيليٽ ڪنٽراسٽ جي تصديق ڪريو** قابليت توهان جي ڊيزائن پيليٽ ۾ رنگن جي جوڙن کي توهان جي theme تي لاڳو ڪرڻ کان اڳ WCAG (Web Content Accessibility Guidelines) جي مطابقت لاءِ جانچي ٿي.

## جائزو {#overview}

هي قابليت متن ۽ پسمنظر جي رنگن جي وچ ۾ ڪنٽراسٽ نسبتن جي تصديق ڪري يقيني بڻائي ٿي ته توهان جي سائيٽ جي رنگن جي ترتيب رسائي پذيري جي معيارن تي پوري لهي ٿي. اها اهڙين رنگن جي ميلاپن کي روڪڻ ۾ مدد ڪري ٿي، جيڪي بصري تڪليف رکندڙ استعمال ڪندڙن لاءِ پڙهڻ ۾ ڏکيا ٿي سگهن ٿا.

## داخلي فارميٽ {#input-format}

هي قابليت هڪ رنگ پيليٽ کي داخلي طور قبول ڪري ٿي:

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

### پيرا ميٽر {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `colors` | array | Yes | `name` ۽ `hex` خاصيتن سان رنگ آبجيڪٽس جي array |
| `wcag_level` | string | No | WCAG مطابقت جي سطح: "A"، "AA" (ڊفالٽ)، يا "AAA" |
| `pairs_to_check` | array | No | تصديق لاءِ مخصوص رنگن جا جوڙا (مثال طور، `["primary-text", "background-text"]`) |

## جانچيل WCAG سطحون {#wcag-levels-checked}

هي قابليت WCAG معيارن مطابق ڪنٽراسٽ نسبتن جي تصديق ڪري ٿي:

| سطح | عام متن | وڏو متن | گهٽ ۾ گهٽ نسبت |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **عام متن** — 18pt کان ننڍو متن (يا 14pt بولڊ)
- **وڏو متن** — 18pt يا ان کان وڏو متن (يا 14pt بولڊ يا ان کان وڏو)

## آئوٽ پٽ اسڪيما {#output-schema}

هي قابليت تفصيلي تصديق رپورٽ واپس ڪري ٿي:

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

### آئوٽ پٽ فيلڊ {#output-fields}

| Field | Type | Description |
|-------|------|-------------|
| `compliant` | boolean | ڇا پوري پيليٽ مخصوص WCAG سطح تي پوري لهي ٿي |
| `wcag_level` | string | اها WCAG سطح جيڪا جانچي وئي |
| `pairs` | array | هر رنگ جوڙي لاءِ تفصيلي نتيجا |
| `contrast_ratio` | number | ڳڻيل ڪنٽراسٽ نسبت (1:1 کان 21:1 تائين) |
| `status` | string | هر جوڙي لاءِ "pass" يا "fail" |
| `recommendations` | array | ناڪام ٿيندڙ جوڙن کي بهتر ڪرڻ لاءِ صلاحون |

## استعمال جو مثال {#usage-example}

**اشارو:**
```
جانچيو ته ڇا منهنجي رنگ پيليٽ WCAG AA معيارن تي پوري لهي ٿي. مون وٽ بنيادي رنگ #678233، متن جو رنگ #ffffff، ۽ پسمنظر #f5f5f5 آهي.
```

**نتيجو:**
هي قابليت سڀني رنگن جي ميلاپن جي تصديق ڪري ٿي ۽ واپس ڪري ٿي:
- ✅ بنيادي + متن: 5.2:1 نسبت (WCAG AA پاس ڪري ٿي)
- ✅ پسمنظر + متن: 12.1:1 نسبت (WCAG AAA پاس ڪري ٿي)
- مجموعي طور: WCAG AA سان مطابق

## Theme Builder سان انٽيگريشن {#integration-with-theme-builder}

Theme Builder جي ڊيزائن-رخ چونڊ استعمال ڪندي، پيليٽ ڪنٽراسٽ جي تصديق ڪرڻ واري قابليت:

1. توهان جي چونڊيل رنگ پيليٽ جو تجزيو ڪري ٿي
2. سڀ متن-پسمنظر ميلاپ جانچي ٿي
3. توهان جي چونڊيل WCAG سطح جي مقابلي ۾ تصديق ڪري ٿي
4. غير مطابق جوڙن لاءِ سفارشون مهيا ڪري ٿي
5. ناقابل رسائي رنگن جون ترتيبون لاڳو ٿيڻ کان روڪي ٿي

## بهترين طريقا {#best-practices}

- **AA سطح سان شروع ڪريو** — WCAG AA اڪثر ويب سائيٽن لاءِ معيار آهي
- **لاڳو ڪرڻ کان اڳ ٽيسٽ ڪريو** — ڊيزائن تي پابند ٿيڻ کان اڳ پنهنجي پيليٽ جي تصديق ڪريو
- **سڀ ميلاپ جانچيو** — يقيني بڻايو ته متن، لنڪس، ۽ UI عنصر سڀ معيارن تي پورا لهن ٿا
- **استعمال ڪندڙن جي ترجيحن تي غور ڪريو** — ڪجهه استعمال ڪندڙن کي اضافي رنگ حساسيت ٿي سگهي ٿي
- **ڪنٽراسٽ چيڪر استعمال ڪريو** — تصديق لاءِ هن قابليت کي برائوزر اوزارن سان گڏ استعمال ڪريو

## ناڪام جوڙا ۽ سفارشون {#failing-pairs-and-recommendations}

جيڪڏهن ڪو رنگ جوڙو تصديق ۾ ناڪام ٿئي، ته هي قابليت سفارشون مهيا ڪري ٿي:

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

## لاڳاپيل قابليتون {#related-abilities}

- [SVG لوگو ٺاهيو](./generate-logo-svg.md) — پنهنجي تصديق ٿيل رنگ پيليٽ سان لوگو ٺاهيو
- [مينيو ٺاهيو](./create-menu.md) — رسائي پذير رنگن سان نيويگيشن ٺاهيو
