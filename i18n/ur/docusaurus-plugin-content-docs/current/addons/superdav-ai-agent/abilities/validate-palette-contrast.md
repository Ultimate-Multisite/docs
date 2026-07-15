---
title: پالت رنگ کا تضاد جانچیں
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# رنگوں کے تضاد کا جائزہ لینا (Validate Palette Contrast)

**Validate Palette Contrast** کی صلاحیت آپ کے ڈیزائن پیلیٹ میں موجود رنگوں کے جوڑوں کا جائزہ لیتی ہے تاکہ یہ تصدیق ہو سکے کہ وہ WCAG (Web Content Accessibility Guidelines) کے مطابق ہیں، اس سے پہلے کہ آپ انہیں اپنے تھیم پر لاگو کریں۔

## جائزہ (Overview) {#overview}

یہ صلاحیت اس بات کو یقینی بناتی ہے کہ آپ کی سائٹ کا رنگوں کا مجموعہ (color scheme) ٹیکسٹ اور پس منظر (background) کے رنگوں کے درمیان تضاد کے تناسب (contrast ratios) کو جانچ کر قابلِ رسائی (accessibility) کے معیار پر پورا اترے۔ یہ ایسے رنگوں کے امتزاج کو روکنے میں مدد کرتا ہے جنہیں بصری کمزوری والے صارفین کے لیے پڑھنا مشکل ہو سکتا ہے۔

## ان پٹ فارمیٹ (Input Format) {#input-format}

یہ صلاحیت ایک رنگوں کا پیلیٹ ان پٹ کے طور پر قبول کرتی ہے:

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

### پیرامیٹرز (Parameters) {#parameters}

| پیرامیٹر (Parameter) | قسم (Type) | ضروری (Required) | تفصیل (Description) |
|-----------|------|----------|-------------|
| `colors` | array | Yes | `name` اور `hex` پراپرٹیز والے رنگوں کے آبجیکٹس کا پیرا (Array of color objects) |
| `wcag_level` | string | No | WCAG کی تعمیل کا لیول: "A", "AA" (ڈیفالٹ), یا "AAA" |
| `pairs_to_check` | array | No | جانچ کرنے کے لیے مخصوص رنگوں کے جوڑے (مثلاً، `["primary-text", "background-text"]`) |

## چیک کیے جانے والے WCAG لیولز (WCAG Levels Checked) {#wcag-levels-checked}

یہ صلاحیت WCAG کے معیارات کے مطابق تضاد کے تناسب (contrast ratios) کی تصدیق کرتی ہے:

| لیول | نارمل ٹیکسٹ (Normal Text) | بڑا ٹیکسٹ (Large Text) | کم از کم تناسب (Minimum Ratio) |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **نارمل ٹیکسٹ** — 18pt سے چھوٹا ٹیکسٹ (یا 14pt بولڈ)
- **بڑا ٹیکسٹ** — 18pt یا اس سے بڑا ٹیکسٹ (یا 14pt بولڈ یا اس سے بڑا)

## آؤٹ پٹ اسکیما (Output Schema) {#output-schema}

یہ صلاحیت ایک تفصیلی تصدیقی رپورٹ واپس کرتی ہے:

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

### آؤٹ پٹ فیلڈز (Output Fields) {#output-fields}

| فیلڈ (Field) | قسم (Type) | تفصیل (Description) |
|-------|------|-------------|
| `compliant` | boolean | کیا پورا پیلیٹ مقررہ WCAG لیول پر پورا اترتا ہے |
| `wcag_level` | string | وہ WCAG لیول جو چیک کیا گیا تھا |
| `pairs` | array | ہر رنگ کے جوڑے کے لیے تفصیلی نتائج |
| `contrast_ratio` | number | حساب شدہ تضاد کا تناسب (1:1 سے 21:1) |
| `status` | string | ہر جوڑے کے لیے "pass" یا "fail" |
| `recommendations` | array | ناکام جوڑوں کو بہتر بنانے کے لیے تجاویز |

## استعمال کا نمونہ (Usage Example) {#usage-example}

**پرامپٹ (Prompt):**
```
Check if my color palette meets WCAG AA standards. I have primary color #678233, text color #ffffff, and background #f5f5f5.
```

**نتیجہ (Result):**
یہ صلاحیت تمام رنگوں کے امتزاج کی تصدیق کرتی ہے اور یہ واپس کرتی ہے:
- ✅ پرائمری + ٹیکسٹ: 5.2:1 تناسب (WCAG AA کے مطابق ہے)
- ✅ پس منظر + ٹیکسٹ: 12.1:1 تناسب (WCAG AAA کے مطابق ہے)
- مجموعی طور پر: WCAG AA کے مطابق ہے

## تھیم بلڈر کے ساتھ انضمام (Integration with Theme Builder) {#integration-with-theme-builder}

جب تھیم بلڈر کے ڈیزائن-ڈائریکشن سلیکشن کا استعمال کیا جاتا ہے، تو Validate Palette Contrast کی صلاحیت:

1. آپ کے منتخب کردہ رنگوں کے پیلیٹ کا تجزیہ کرتی ہے
2. تمام ٹیکسٹ-پس منظر کے امتزاج کی جانچ کرتی ہے
3. آپ کے منتخب کردہ WCAG لیول کے خلاف تصدیق کرتی ہے
4. غیر مطابقت پذیر جوڑوں کے لیے سفارشات فراہم کرتی ہے
5. ناقابلِ رسائی رنگوں کے امتزاج کو لاگو ہونے سے روکتی ہے

## بہترین طریقے (Best Practices) {#best-practices}

- **AA لیول سے آغاز کریں** — زیادہ تر ویب سائٹس کے لیے WCAG AA معیار ہے۔
- **لاگو کرنے سے پہلے جانچ کریں** — ڈیزائن پر عمل کرنے سے پہلے اپنے پیلیٹ کی تصدیق کریں۔
- **تمام امتزاج کی جانچ کریں** — اس بات کو یقینی بنائیں کہ ٹیکسٹ، لنکس، اور UI عناصر سب معیار پر پورا اترتے ہیں۔
- **صارف کی ترجیحات پر غور کریں** — کچھ صارفین میں رنگوں کی اضافی حساسیت ہو سکتی ہے۔
- **تضاد جانچنے والے ٹولز استعمال کریں** — تصدیق کے لیے اس صلاحیت کو براؤزر ٹولز کے ساتھ استعمال کریں۔

## ناکام جوڑے اور سفارشات (Failing Pairs and Recommendations) {#failing-pairs-and-recommendations}

اگر کوئی رنگ کا جوڑا تصدیق میں ناکام ہو جاتا ہے، تو یہ صلاحیت سفارشات فراہم کرتی ہے:

```json
{
  "pair": "primary-text",
  "status": "fail",
  "contrast_ratio": 2.8,
  "wcag_aa": false,
  "recommendations": [
    "ٹیکسٹ کے رنگ کو #ffffff تک ہلکا کریں (تناسب 5.2:1 ہو جائے گا)",
    "پس منظر کے رنگ کو #556b2f تک گہرا کریں (تناسب 4.8:1 ہو جائے گا)",
    "ایک مختلف پرائمری رنگ استعمال کریں جیسے #4a6b1f (تناسب 6.1:1 ہو جائے گا)"
  ]
}
```

## متعلقہ صلاحیتیں (Related Abilities) {#related-abilities}

- [Generate Logo SVG](./generate-logo-svg.md) — اپنے تصدیق شدہ رنگوں کے پیلیٹ سے لوگو بنائیں
- [Create Menu](./create-menu.md) — قابلِ رسائی رنگوں کے ساتھ نیویگیشن بنائیں
