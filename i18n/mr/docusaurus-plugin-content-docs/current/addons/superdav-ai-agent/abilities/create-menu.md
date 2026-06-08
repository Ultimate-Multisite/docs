---
title: मेनू तयार करा
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Menu तयार करणे

**Menu तयार करणे** ही क्षमता WordPress मध्ये नेव्हिगेशन मेनू तयार करण्याची सुविधा देते, ज्यामध्ये पेजच्या शीर्षकापेक्षा वेगळे नेव्हिगेशन लेबल (navigation labels) वापरता येते.

## विहंगावलोकन (Overview)

ही क्षमता मानक मेनू निर्मिती कार्यक्षमतेमध्ये सुधारणा करते आणि यामध्ये `navigation_label` नावाचा पॅरामीटर निर्दिष्ट करण्याची सोय देते. यामुळे तुम्हाला असे मेनू तयार करता येतात, जिथे नेव्हिगेशनमध्ये दिसणारे लेबल पेजच्या शीर्षकापेक्षा वेगळे असू शकते. यामुळे साइटची रचना आणि वापरकर्त्याच्या अनुभवामध्ये अधिक लवचिकता मिळते.

## पॅरामीटर्स (Parameters)

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | मेनूचे नाव, उदा. `Primary Navigation` |
| `location` | string | No | या मेनूला नियुक्त करण्यासाठी थीमचे स्थान (Theme location), उदा. `primary` |
| `navigation_label` | string | No | नेव्हिगेशनमध्ये प्रदर्शित करण्यासाठी लेबल (पेजच्या शीर्षकापेक्षा वेगळे) |

## रिटर्न व्हॅल्यू (Return Value)

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## नेव्हिगेशन लेबल विरुद्ध पेज शीर्षक (Navigation Label vs Page Title)

`navigation_label` पॅरामीटर तुम्हाला अंतर्गत मेनूचे नाव (internal menu name) आणि वापरकर्त्यांना दिसणारे लेबल (label displayed to users) या दोन गोष्टी वेगळ्या करण्याची परवानगी देतो:

- **`name`** — WordPress द्वारे वापरले जाणारे अंतर्गत मेनू ओळखकर्ता (Internal menu identifier) (उदा. "Primary Navigation")
- **`navigation_label`** — नेव्हिगेशनमध्ये साइट व्हिजिटर्सना दिसणारे लेबल (उदा. "Main Menu")

हे उपयुक्त ठरते जेव्हा:
- तुमचे अंतर्गत नाव (internal naming convention) वापरकर्त्यांना दिसणाऱ्या लेबलपेक्षा वेगळे असते.
- तुम्हाला ॲडमिन पॅनेलमध्ये असलेल्या लेबलपेक्षा नेव्हिगेशनमध्ये लहान लेबल हवे असते.
- तुम्हाला वेगवेगळ्या लेबल लांबीसह अनेक भाषांना समर्थन द्यायचे असते.
- तुम्ही विशिष्ट प्रदेशांसाठी किंवा वापरकर्ता गटांसाठी मेनू तयार करत असता.

## वापराचे उदाहरणे (Usage Examples)

### उदाहरण १: नेव्हिगेशन लेबलसह साधे मेनू

**Prompt:**
```
Create a primary navigation menu called "Main Navigation" with the navigation label "Menu".
```

**Result:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### उदाहरण २: विशिष्ट थीम स्थानासाठी मेनू

**Prompt:**
```
Create a footer menu called "Footer Links" with navigation label "Quick Links" and assign it to the footer location.
```

**Result:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## थीम बिल्डरसह एकत्रीकरण (Integration with Theme Builder)

Theme Builder वापरताना, Create Menu क्षमता:

1. उपलब्ध थीम मेनू स्थानांचा (theme menu locations) आपोआप शोध घेते.
2. तुमच्या डिझाइनसाठी योग्य नेव्हिगेशन लेबलसह मेनू तयार करते.
3. मेनू योग्य थीम स्थानांवर नियुक्त करते.
4. निर्मितीनंतर मेनू आयटम जोडण्यास समर्थन देते.

## संबंधित क्षमता (Related Abilities)

- **`add_menu_item`** — विद्यमान मेनूमध्ये आयटम जोडा
- **`update_menu`** — मेनूचे नाव बदला किंवा ते थीम स्थानावर पुन्हा नियुक्त करा
- **`delete_menu`** — तुमच्या साइटवरून मेनू काढा

## सर्वोत्तम पद्धती (Best Practices)

- **स्पष्ट नेव्हिगेशन लेबल वापरा** — लेबल संक्षिप्त आणि वापरकर्त्यांसाठी वर्णनात्मक ठेवा.
- **थीम स्थानांशी जुळवा** — योग्य डिस्प्लेसाठी मेनू योग्य थीम स्थानावर नियुक्त करा.
- **मेनूची रचना आखून घ्या** — आयटम तयार करण्यापूर्वी तुमच्या मेनूची रचना ठरवा.
- **रिस्पॉन्सिव्हनेस तपासा** — मोबाईल डिव्हाइसेसवर मेनू योग्यरित्या दिसतात की नाही हे तपासा.
- **लेबल स्थानिक करा (Localize)** — वेगवेगळ्या भाषा आवृत्त्यांसाठी वेगवेगळी नेव्हिगेशन लेबल वापरा.

## मर्यादा (Limitations)

- नेव्हिगेशन लेबल केवळ डिस्प्लेसाठी असते; अंतर्गत `name` हे WordPress ओळखण्यासाठी वापरले जाते.
- थीम समर्थन बदलते; सर्व थीम सर्व मेनू स्थानांना समर्थन देत नाहीत.
- मेनू आयटम मेनू तयार केल्यानंतर स्वतंत्रपणे जोडणे आवश्यक आहे.
- नेव्हिगेशन लेबल बदलण्यासाठी मेनू अपडेट करणे आवश्यक आहे.

## संबंधित क्षमता (Related Abilities)

- [Generate Logo SVG](./generate-logo-svg.md) — तुमच्या साइटच्या हेडरसाठी लोगो तयार करा
- [Validate Palette Contrast](./validate-palette-contrast.md) — सुलभ रंग योजना (accessible color schemes) असल्याची खात्री करा
