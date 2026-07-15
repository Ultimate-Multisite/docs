---
title: የፓሌት ንፅፅርን ያረጋግጡ
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# የፓሌት ንፅፅርን ማረጋገጥ

**የፓሌት ንፅፅርን ማረጋገጥ** ችሎታ በንድፍ ፓሌትዎ ውስጥ ያሉ የቀለም ጥንዶች ለWCAG (የዌብ ይዘት ተደራሽነት መመሪያዎች) መሟላትን የሚፈትሽ ሲሆን፣ ከዚያም በጉዳዩ ላይ ከመተግበሩ በፊት ያረጋግጣል።

## አጠቃላይ እይታ {#overview}

ይህ ችሎታ የጣቢያዎ የቀለም ስብስብ በጽሑፍ እና በጀርባ ቀለም መካከል ያለውን ንፅፅር ጥምርታ (contrast ratio) በማረጋገጥ፣ ተደራሽነት ደረጃዎችን የሚያሟላ መሆኑን ያረጋግጣል። ይህ ደግሞ የእይታ ችግር ያለባቸው ተጠቃሚዎች በቀላሉ ሊያነቡት የሚቸገሩባቸው የቀለም ጥምርቶችን መከላከል ይረዳል።

## የግብዓት ቅርጸት (Input Format) {#input-format}

ይህ ችሎታ የቀለም ፓሌትን እንደ ግብዓት ይቀበላል፦

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

### መለኪያዎች (Parameters) {#parameters}

| መለኪያ (Parameter) | አይነት (Type) | አስፈላጊ (Required) | መግለጫ (Description) |
|-----------|------|----------|-------------|
| `colors` | array | አዎ | የ`name` እና `hex` ባህሪያት ያላቸው የቀለም ዕቃዎች ስብስብ (Array of color objects) |
| `wcag_level` | string | አይ | የWCAG መሟላት ደረጃ፡ "A", "AA" (በቅድፋት)፣ ወይም "AAA" |
| `pairs_to_check` | array | አይ | ሊረጋገጡ የሚፈልጉ የተወሰኑ የቀለም ጥንዶች (ለምሳሌ፡ `["primary-text", "background-text"]`) |

## በየWCAG ደረጃ የተፈተኑት {#wcag-levels-checked}

ይህ ችሎታ ንፅፅር ጥምርታዎችን በWCAG ደረጃዎች መሠረት ያረጋግጣል፦

| ደረጃ (Level) | መደበኛ ጽሑፍ (Normal Text) | ትልቅ ጽሑፍ (Large Text) | ዝቅተኛ ጥምርታ (Minimum Ratio) |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **መደበኛ ጽሑፍ** — ከ18pt በታች የሆነ ጽሑፍ (ወይም 14pt በደል)
- **ትልቅ ጽሑፍ** — 18pt ወይም ከዚያ በላይ የሆነ ጽሑፍ (ወይም 14pt በደል ወይም ከዚያ በላይ)

## የውጤት ስхема (Output Schema) {#output-schema}

ይህ ችሎታ ዝርዝር የማረጋገጫ ሪፖርት ይመልሳል፦

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

### የውጤት መስኮች (Output Fields) {#output-fields}

| መስክ (Field) | አይነት (Type) | መግለጫ (Description) |
|-------|------|-------------|
| `compliant` | boolean | መላው ፓሌት የተጠቀሰውን የWCAG ደረጃ የሚያሟላ መሆኑን ያመለክታል |
| `wcag_level` | string | የተፈተነው የWCAG ደረጃ |
| `pairs` | array | ለእያንዳንዱ የቀለም ጥንድ ዝርዝር ውጤቶች |
| `contrast_ratio` | number | የተሰላው የንፅፅር ጥምርታ (1:1 እስከ 21:1) |
| `status` | string | ለእያንዳንዱ ጥንድ "pass" ወይም "fail" |
| `recommendations` | array | ያልተሳኩ ጥንዶችን ለማሻሻል የሚረዱ ሀሳቦች |

## የአጠቃቀም ምሳሌ (Usage Example) {#usage-example}

**ጥያቄ (Prompt):**
```
Check if my color palette meets WCAG AA standards. I have primary color #678233, text color #ffffff, and background #f5f5f5.
```

**ውጤት (Result):**
ይህ ችሎታ ሁሉንም የቀለም ጥምርታዎች ያረጋግጣል እና የሚከተለውን ይመልሳል፦
- ✅ Primary + Text: 5.2:1 ጥምርታ (WCAG AAን የሚያልፍ)
- ✅ Background + Text: 12.1:1 ጥምርታ (WCAG AAAን የሚያልፍ)
- በአጠቃላይ፡ በWCAG AA ደረጃ ተስማሚ

## ከTheme Builder ጋር ውህደት (Integration with Theme Builder) {#integration-with-theme-builder}

የTheme Builderን የንድፍ አቅጣጫ ምርጫ ሲጠቀሙ፣ የValidate Palette Contrast ችሎታው የሚከተሉትን ያደርጋል፦

1. የተመረጠውን የቀለም ፓሌትዎን ይተነትናል
2. ሁሉንም የጽሑፍ-ጀርባ ጥምርታዎችን ይፈትሻል
3. ከመረጡት የWCAG ደረጃ ጋር ያረጋግጣል
4. ያልተሟሉ ጥንዶችን ምክረ ሃሳብ ይሰጣል
5. ተደራሽ ያልሆኑ የቀለም ስብስቦችን ከመተግበሩ ይከላከላል

## ምርጥ አሠራሮች (Best Practices) {#best-practices}

- **በAA ደረጃ ይጀምሩ** — WCAG AA ለአብዛኛዎቹ ድረ-ገጾች መመዘኛ ነው።
- **ከመተግበሩ በፊት ይፈትሹ** — ለንድፍ ከመወሰንዎ በፊት ፓሌትዎን ያረጋግጡ።
- **ሁሉንም ጥምርታዎች ይፈትሹ** — ጽሑፍ፣ ሊንኮች እና የUI አካላት ሁሉ ደረጃዎችን ማሟላታቸውን ያረጋግጡ።
- **የተጠቃሚ ምርጫዎችን ግምት ውስጥ ያስገቡ** — አንዳንድ ተጠቃሚዎች ተጨማሪ የቀለም ስሜት ሊኖራቸው ይችላል።
- **የንፅፅር መፈተኛዎችን ይጠቀሙ** — ይህንን ችሎታ ከብራውዘር መሳሪያዎች ጋር በማጣመር ማረጋገጫ ያግኙ።

## ያልተሳኩ ጥንዶች እና ምክረ ሃሳቦች (Failing Pairs and Recommendations) {#failing-pairs-and-recommendations}

የቀለም ጥንድ ማረጋገጫውን ካልተሳካ፣ ችሎታው ምክረ ሃሳቦችን ይሰጣል፦

```json
{
  "pair": "primary-text",
  "status": "fail",
  "contrast_ratio": 2.8,
  "wcag_aa": false,
  "recommendations": [
    "የጽሑፍ ቀለም ወደ #ffffff ማለስል (ጥምርታው 5.2:1 ይሆናል)",
    "የጀርባ ቀለም ወደ #556b2f ማጨልማ (ጥምርታው 4.8:1 ይሆናል)",
    "እንደ #4a6b1f ባሉ የተለያየ ዋና ቀለም መጠቀም (ጥምርታው 6.1:1 ይሆናል)"
  ]
}
```

## ተዛማጅ ችሎታዎች (Related Abilities) {#related-abilities}

- [Generate Logo SVG](./generate-logo-svg.md) — በየተረጋገጠው የቀለም ፓሌትዎ ሎጎዎችን ይፍጠሩ
- [Create Menu](./create-menu.md) — ተደራሽ የቀለም አሰላለፍ በመጠቀም አሰሳ (navigation) ይገንቡ
