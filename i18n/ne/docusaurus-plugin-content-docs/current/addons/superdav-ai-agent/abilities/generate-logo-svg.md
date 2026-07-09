---
title: लोगो SVG उत्पन्न गर्नुहोस्
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Logo SVG उत्पन्न गर्नुहोस्

**Generate Logo SVG** क्षमताले Theme Builder लाई स्वचालित namespace-सुरक्षित sanitisation सहित तपाईंको WordPress साइटमा custom logo SVGहरू सिधै सिर्जना र embed गर्न दिन्छ।

## अवलोकन

यो क्षमताले तपाईंको साइटको branding दिशा र design प्राथमिकताहरूका आधारमा scalable vector graphics (SVG) logoहरू उत्पन्न गर्छ। उत्पन्न SVGहरू दृश्य अखण्डता कायम राख्दै WordPress मा प्रयोगका लागि सुरक्षित छन् भन्ने सुनिश्चित गर्न स्वचालित रूपमा sanitise गरिन्छ।

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `site_name` | string | Yes | logo उत्पन्न गर्नुपर्ने साइटको नाम |
| `style` | string | Yes | design शैली (जस्तै, "modern", "classic", "minimalist", "playful") |
| `colors` | array | No | logo मा प्रयोग गर्नुपर्ने hex color codeहरूको array (जस्तै, `["#678233", "#ffffff"]`) |
| `width` | number | No | pixel मा SVG चौडाइ (पूर्वनिर्धारित: 200) |
| `height` | number | No | pixel मा SVG उचाइ (पूर्वनिर्धारित: 200) |
| `include_text` | boolean | No | logo मा साइटको नामलाई text का रूपमा समावेश गर्ने कि नगर्ने (पूर्वनिर्धारित: true) |

## Output Format

यो क्षमताले निम्न संरचनासहित SVG string फर्काउँछ:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## SVG Sanitisation व्यवहार

उत्पन्न SVGहरू निम्नका लागि स्वचालित namespace-सुरक्षित sanitisation बाट गुज्रिन्छन्:

- **असुरक्षित attributes हटाउने** — event handlers, scripts, र सम्भावित रूपमा खतरनाक attributes हटाउँछ
- **namespaces जोगाउने** — सही rendering का लागि SVG namespaces (xmlns, xlink) कायम राख्छ
- **संरचना validate गर्ने** — SVG W3C standards अनुरूप छ भन्ने सुनिश्चित गर्छ
- **entities encode गर्ने** — text content मा special characters लाई उचित रूपमा escape गर्छ
- **बाह्य references हटाउने** — external stylesheets र image references हटाउँछ

यसले थप sanitisation आवश्यक नगरी SVG लाई WordPress मा सिधै embed गर्न सुरक्षित बनाउँछ।

## प्रयोग उदाहरण

**Prompt:**
```
"CloudSync" नाम भएको मेरो tech startup का लागि नीलो र सेतो रङहरू प्रयोग गरेर modern logo उत्पन्न गर्नुहोस्।
```

**Result:**
यो क्षमताले यस्तो SVG logo सिर्जना गर्छ जसले:
- साइटको नाम "CloudSync" समावेश गर्छ
- निर्दिष्ट नीलो र सेतो color scheme प्रयोग गर्छ
- modern design सिद्धान्तहरू अनुसरण गर्छ
- स्वचालित रूपमा sanitise गरिएको र प्रयोगका लागि तयार हुन्छ

## Theme Builder सँग एकीकरण

Theme Builder को design-direction selection प्रयोग गर्दा, Generate Logo SVG क्षमताले:

1. तपाईंको design दिशा र color palette विश्लेषण गर्छ
2. तपाईंका प्राथमिकतासँग मेल खाने custom SVG logo उत्पन्न गर्छ
3. logo लाई तपाईंको साइटको header/branding क्षेत्रमा स्वचालित रूपमा embed गर्छ
4. SVG लाई WordPress media मा custom logo का रूपमा भण्डारण गर्छ

## उत्तम अभ्यासहरू

- **स्पष्ट शैली प्राथमिकताहरू प्रदान गर्नुहोस्** — तपाईंले चाहेको design शैली वर्णन गर्नुहोस् (modern, classic, playful, आदि)
- **रङहरू निर्दिष्ट गर्नुहोस्** — एकरूपताका लागि तपाईंका brand colors समावेश गर्नुहोस्
- **rendering परीक्षण गर्नुहोस्** — logo विभिन्न screen आकारहरूमा सही रूपमा देखिन्छ भन्ने पुष्टि गर्नुहोस्
- **थप customize गर्नुहोस्** — आकार र placement समायोजन गर्न WordPress का logo customization tools प्रयोग गर्नुहोस्

## सीमाहरू

- SVG logoहरू static graphics का रूपमा उत्पन्न हुन्छन् (animated होइन)
- धेरै elements भएका complex logoहरूमा manual refinement आवश्यक पर्न सक्छ
- Custom fonts समर्थित छैनन्; text ले system fonts प्रयोग गर्छ
- धेरै ठूला वा धेरै साना dimensions ले गुणस्तरमा प्रभाव पार्न सक्छ

## सम्बन्धित क्षमताहरू

- [Palette Contrast Validate गर्नुहोस्](./validate-palette-contrast.md) — accessibility का लागि color contrast जाँच गर्नुहोस्
- [Menu सिर्जना गर्नुहोस्](./create-menu.md) — तपाईंको साइटका लागि navigation menus सिर्जना गर्नुहोस्
