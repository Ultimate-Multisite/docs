---
title: لوگو SVG ٺاهيو
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Logo SVG ٺاھيو

**Generate Logo SVG** صلاحيت Theme Builder کي اجازت ڏئي ٿي ته توهان جي WordPress سائيٽ ۾ سڌو سنئون حسب ضرورت logo SVGs ٺاهي ۽ شامل ڪري، خودڪار نيم اسپيس-محفوظ صفائي سان.

## جائزو

هي صلاحيت توهان جي سائيٽ جي برانڊنگ رخ ۽ ڊيزائن ترجيحن جي بنياد تي scalable vector graphics (SVG) لوگو ٺاهي ٿي. ٺاهيل SVGs پاڻمرادو صاف ڪيا وڃن ٿا ته جيئن WordPress ۾ استعمال لاءِ محفوظ هجن، جڏهن ته بصري سالميت برقرار رهي.

## پيرا ميٽر

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `site_name` | string | Yes | اها سائيٽ جو نالو جنهن لاءِ لوگو ٺاهڻو آهي |
| `style` | string | Yes | ڊيزائن انداز (مثال طور، "modern"، "classic"، "minimalist"، "playful") |
| `colors` | array | No | لوگو ۾ استعمال ڪرڻ لاءِ hex رنگ ڪوڊن جي array (مثال طور، `["#678233", "#ffffff"]`) |
| `width` | number | No | SVG ويڪر pixels ۾ (default: 200) |
| `height` | number | No | SVG اوچائي pixels ۾ (default: 200) |
| `include_text` | boolean | No | ڇا لوگو ۾ سائيٽ جو نالو متن طور شامل ڪجي (default: true) |

## آئوٽ پٽ فارميٽ

هي صلاحيت هيٺين جوڙجڪ سان هڪ SVG string واپس ڪري ٿي:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## SVG صفائي جو رويو

ٺاهيل SVGs پاڻمرادو نيم اسپيس-محفوظ صفائي مان گذرن ٿا ته جيئن:

- **غير محفوظ خاصيتون هٽايون** — event handlers، scripts، ۽ ممڪن طور خطرناڪ attributes ختم ڪري ٿو
- **namespaces محفوظ رکيون** — درست rendering لاءِ SVG namespaces (xmlns, xlink) برقرار رکي ٿو
- **جوڙجڪ جي تصديق ڪري** — يقيني بڻائي ٿو ته SVG W3C معيارن سان مطابقت رکي ٿو
- **entities encode ڪري** — متن جي مواد ۾ خاص اکرن کي صحيح طرح escape ڪري ٿو
- **ٻاهريون حوالا هٽائي** — ٻاهريون stylesheets ۽ image references ختم ڪري ٿو

هي يقيني بڻائي ٿو ته SVG اضافي صفائي جي ضرورت کان سواءِ سڌو WordPress ۾ embed ڪرڻ لاءِ محفوظ آهي.

## استعمال جو مثال

**Prompt:**
```
منهنجي tech startup "CloudSync" لاءِ نيري ۽ اڇي رنگن سان هڪ جديد لوگو ٺاهيو.
```

**نتيجو:**
هي صلاحيت هڪ SVG لوگو ٺاهي ٿي جيڪو:
- سائيٽ جو نالو "CloudSync" شامل ڪري ٿو
- مخصوص نيري ۽ اڇي رنگن واري scheme استعمال ڪري ٿو
- جديد ڊيزائن اصولن جي پيروي ڪري ٿو
- پاڻمرادو صاف ٿيل ۽ استعمال لاءِ تيار آهي

## Theme Builder سان انٽيگريشن

جڏهن Theme Builder جي design-direction چونڊ استعمال ڪئي وڃي، Generate Logo SVG صلاحيت:

1. توهان جي ڊيزائن رخ ۽ رنگ palette جو تجزيو ڪري ٿي
2. توهان جي ترجيحن سان ملندڙ حسب ضرورت SVG لوگو ٺاهي ٿي
3. لوگو کي پاڻمرادو توهان جي سائيٽ جي header/branding علائقي ۾ embed ڪري ٿي
4. SVG کي WordPress media ۾ custom logo طور محفوظ ڪري ٿي

## بهترين طريقا

- **واضح انداز جون ترجيحون ڏيو** — جيڪو ڊيزائن انداز توهان چاهيو ٿا اهو بيان ڪريو (modern، classic، playful، وغيره)
- **رنگ مخصوص ڪريو** — مستقل مزاجي لاءِ پنهنجي brand رنگ شامل ڪريو
- **rendering آزمائو** — تصديق ڪريو ته لوگو مختلف screen sizes تي صحيح ڏيکاري ٿو
- **وڌيڪ حسب ضرورت بڻايو** — سائيز ۽ جڳهه ترتيب ڏيڻ لاءِ WordPress جا logo customization اوزار استعمال ڪريو

## حدون

- SVG لوگو static graphics طور ٺاهيا وڃن ٿا (animated نه)
- ڪيترن عنصرن وارن پيچيده لوگوز کي هٿ سان refinement جي ضرورت ٿي سگهي ٿي
- custom fonts سپورٽ ٿيل نه آهن؛ متن system fonts استعمال ڪري ٿو
- تمام وڏيون يا تمام ننڍيون dimensions معيار تي اثر وجهي سگهن ٿيون

## لاڳاپيل صلاحيتون

- [Palette Contrast جي تصديق ڪريو](./validate-palette-contrast.md) — accessibility لاءِ رنگ contrast چيڪ ڪريو
- [Menu ٺاهيو](./create-menu.md) — پنهنجي سائيٽ لاءِ navigation menus ٺاهيو
