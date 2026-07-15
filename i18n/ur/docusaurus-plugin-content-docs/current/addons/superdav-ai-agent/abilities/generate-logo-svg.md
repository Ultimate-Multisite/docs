---
title: لوگو SVG جنریٹ کریں
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# SVG لوگو بنائیں

**Generate Logo SVG** کی سہولت Theme Builder کو آپ کے WordPress سائٹ میں کسٹم لوگو SVG بنانے اور اسے براہ راست شامل کرنے کی اجازت دیتی ہے، جس میں خودکار namespace-safe sanitisation بھی شامل ہے۔

## جائزہ (Overview) {#overview}

یہ سہولت آپ کی سائٹ کی برانڈنگ کی سمت اور ڈیزائن کی ترجیحات کی بنیاد پر scalable vector graphics (SVG) لوگو تیار کرتی ہے۔ تیار کردہ SVGs کو خودکار طور پر sanitize کیا جاتا ہے تاکہ یہ یقینی بنایا جا سکے کہ وہ WordPress میں استعمال کے لیے محفوظ ہیں، جبکہ بصری سالمیت (visual integrity) برقرار رہے۔

## پیرامیٹرز (Parameters) {#parameters}

| پیرامیٹر (Parameter) | قسم (Type) | ضروری (Required) | تفصیل (Description) |
|-----------|------|----------|-------------|
| `site_name` | string | Yes | وہ نام جس کے لیے لوگو بنانا ہے |
| `style` | string | Yes | ڈیزائن کا انداز (مثلاً، "modern"، "classic"، "minimalist"، "playful") |
| `colors` | array | No | لوگو میں استعمال ہونے والے ہیکس رنگ کوڈز کی فہرست (مثلاً، `["#678233", "#ffffff"]`) |
| `width` | number | No | پکسلز میں SVG کی چوڑائی (ڈیفالٹ: 200) |
| `height` | number | No | پکسلز میں SVG کی اونچائی (ڈیفالٹ: 200) |
| `include_text` | boolean | No | کیا لوگو میں سائٹ کا نام ٹیکسٹ کے طور پر شامل کرنا ہے (ڈیفالٹ: true) |

## آؤٹ پٹ فارمیٹ (Output Format) {#output-format}

یہ سہولت درج ذیل ساخت کے ساتھ ایک SVG سٹرنگ واپس کرتی ہے:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## SVG Sanitisation کا طریقہ کار (SVG Sanitisation Behaviour) {#svg-sanitisation-behaviour}

تخلیق کردہ SVGs کو خودکار namespace-safe sanitisation سے گزارا جاتا ہے تاکہ:

- **غیر محفوظ attributes کو ہٹایا جائے** — یہ event handlers، scripts، اور ممکنہ طور پر خطرناک attributes کو ختم کر دیتا ہے۔
- **namespaces کو برقرار رکھا جائے** — مناسب رینڈرنگ کے لیے SVG namespaces (xmlns, xlink) کو برقرار رکھتا ہے۔
- **ساخت کی تصدیق کی جائے** — یہ یقینی بناتا ہے کہ SVG W3C معیارات پر پورا اترتا ہے۔
- **entities کو encode کیا جائے** — ٹیکسٹ مواد میں خصوصی حروف کو مناسب طریقے سے escape کرتا ہے۔
- **بیرونی حوالہ جات کو ہٹایا جائے** — بیرونی stylesheets اور image references کو ختم کر دیتا ہے۔

یہ یقینی بناتا ہے کہ SVG کو WordPress میں براہ راست شامل کیا جا سکتا ہے، بغیر کسی اضافی sanitisation کی ضرورت کے۔

## استعمال کا نمونہ (Usage Example) {#usage-example}

**پرامپٹ (Prompt):**
```
Generate a modern logo for my tech startup called "CloudSync" using blue and white colors.
```

**نتیجہ (Result):**
یہ سہولت ایک SVG لوگو بناتی ہے جو:
- سائٹ کا نام "CloudSync" شامل کرتا ہے
- مخصوص نیلی اور سفید رنگ سکیم کا استعمال کرتا ہے
- جدید ڈیزائن کے اصولوں پر عمل کرتا ہے
- خودکار طور پر sanitize ہو جاتا ہے اور استعمال کے لیے تیار ہوتا ہے

## Theme Builder کے ساتھ انضمام (Integration with Theme Builder) {#integration-with-theme-builder}

جب Theme Builder کی ڈیزائن-direction selection کا استعمال کیا جاتا ہے، تو Generate Logo SVG سہولت:

1. آپ کی ڈیزائن کی سمت اور رنگوں کے پیلیٹ کا تجزیہ کرتی ہے۔
2. آپ کی ترجیحات سے ملتا جلتا ایک کسٹم SVG لوگو تیار کرتی ہے۔
3. خودکار طور پر لوگو کو آپ کی سائٹ کے ہیڈر/برانڈنگ ایریا میں شامل کرتی ہے۔
4. SVG کو WordPress media میں ایک کسٹم لوگو کے طور پر محفوظ کرتی ہے۔

## بہترین طریقے (Best Practices) {#best-practices}

- **واضح اسٹائل ترجیحات فراہم کریں** — بیان کریں کہ آپ کس طرح کا ڈیزائن چاہتے ہیں (جدید، کلاسک، تفریحی، وغیرہ)۔
- **رنگوں کی وضاحت کریں** — مستقل مزاجی کے لیے اپنے برانڈ کے رنگ شامل کریں۔
- **رینڈرنگ کا تجربہ کریں** — تصدیق کریں کہ لوگو مختلف سکرین سائز پر صحیح طریقے سے ظاہر ہوتا ہے۔
- **مزید کسٹمائز کریں** — سائز اور جگہ کو ایڈجسٹ کرنے کے لیے WordPress کے لوگو کسٹمائزیشن ٹولز استعمال کریں۔

## حدودات (Limitations) {#limitations}

- SVG لوگو سٹیٹک گرافکس کے طور پر تیار کیے جاتے ہیں (اینیمیٹڈ نہیں)۔
- بہت زیادہ عناصر والے پیچیدہ لوگو کے لیے دستی بہتری کی ضرورت پڑ سکتی ہے۔
- کسٹم فونٹس کو سپورٹ نہیں کیا گیا؛ ٹیکسٹ سسٹم فونٹس استعمال کرتا ہے۔
- بہت زیادہ بڑے یا بہت چھوٹے سائز کو معیار پر اثر انداز ہو سکتا ہے۔

## متعلقہ سہولتیں (Related Abilities) {#related-abilities}

- [Validate Palette Contrast](./validate-palette-contrast.md) — رسائی کے لیے رنگوں کے کنٹراسٹ کی جانچ کریں۔
- [Create Menu](./create-menu.md) — اپنی سائٹ کے لیے نیویگیشن مینیو بنائیں۔
