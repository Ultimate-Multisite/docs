---
title: डिझाइन दिशा
sidebar_position: 2
_i18n_hash: 0a55afffd66ffad6930c7794d4074971
---
# डिझाईन दिशा (Design Direction)

**डिझाईन दिशा** या टप्प्यात तुम्हाला Theme Builder द्वारे संपूर्ण थीम तयार करण्यापूर्वी, तुमच्या थीमच्या व्हिज्युअल डिझाईनचे पुनरावलोकन (review), सुधारणा (refine) आणि अंतिम रूप (finalize) देता येते.

## विहंगावलोकन (Overview) {#overview}

Discovery Interview पूर्ण केल्यानंतर, Theme Builder तुम्हाला **डेस्कटॉप आणि मोबाईल प्रीव्ह्यू रेंडरिंग** सह तुमची डिझाईन दिशा सादर करतो. यामुळे तुम्हाला थीमवर अंतिम निर्णय घेण्यापूर्वी, तुमच्या डिझाईनची वेगवेगळ्या उपकरणांवर (devices) नेमकी कशी दिसेल हे पाहता येते.

## डिझाईन दिशा घटक (Design Direction Components) {#design-direction-components}

### १. कलर पॅलेट (Color Palette) {#1-color-palette}

तुमच्या थीमची रंगसंगती (color scheme), ज्यामध्ये खालील गोष्टींचा समावेश आहे:

- **Primary color** — बटणे (buttons), लिंक्स (links) आणि ॲक्सेंटसाठी वापरला जाणारा मुख्य ब्रँड रंग.
- **Secondary color** — विविधतेसाठी पूरक रंग (complementary color).
- **Accent color** — महत्त्वाच्या घटकांसाठी हायलाइट रंग.
- **Neutral colors** — पार्श्वभूमी (backgrounds) आणि मजकुरासाठी (text) ग्रे आणि पांढरे रंग.
- **Text color** — वाचनीयतेसाठी (readability) प्राथमिक मजकूर रंग.

### २. टायपोग्राफी (Typography) {#2-typography}

खालील गोष्टींसाठी फॉन्ट निवड:

- **Heading font** — पेजचे शीर्षक (page titles) आणि विभागाचे शीर्षलेख (section headers) यासाठी वापरला जातो.
- **Body font** — परिच्छेद मजकूर (paragraph text) आणि सामग्रीसाठी (content) वापरला जातो.
- **Font sizes** — वेगवेगळ्या स्क्रीन आकारांसाठी प्रतिसाद देणारे आकार (responsive sizing).
- **Line height** — वाचनीयतेसाठी ओळींमधील अंतर (spacing between lines).
- **Font weights** — बोल्ड, रेग्युलर आणि लाईट प्रकारांचे पर्याय.

### ३. लेआउट आणि स्पेसिंग (Layout and Spacing) {#3-layout-and-spacing}

- **Container width** — सामग्रीसाठी कमाल रुंदी (maximum width for content).
- **Padding and margins** — घटकांभोवतीचे अंतर (spacing around elements).
- **Grid system** — प्रतिसाद देणाऱ्या डिझाईनसाठी कॉलम लेआउट (column layout for responsive design).
- **Component spacing** — UI घटकांमध्ये अंतर (distance between UI elements).

### ४. व्हिज्युअल घटक (Visual Elements) {#4-visual-elements}

- **Button styles** — प्राथमिक, दुय्यम आणि तृतीय बटणांची डिझाईन.
- **Card designs** — सामग्री ब्लॉक्ससाठी (content blocks) लेआउट.
- **Icons** — आयकॉनची शैली आणि आकार (sizing).
- **Borders and shadows** — सूक्ष्म व्हिज्युअल खोली (subtle visual depth).
- **Hover effects** — परस्परसंवादी स्थिती स्टायलिंग (interactive state styling).

## प्रीव्ह्यू रेंडरिंग (Preview Rendering) {#preview-rendering}

### डेस्कटॉप प्रीव्ह्यू (Desktop Preview) {#desktop-preview}

डेस्कटॉप प्रीव्ह्यू तुमच्या डिझाईनची पूर्ण रुंदीवर (सामान्यतः 1200px किंवा त्याहून अधिक) दाखवतो:

- संपूर्ण नेव्हिगेशन मेनू (Full navigation menu).
- सर्व कॉलमसह संपूर्ण लेआउट (Complete layout with all columns).
- मोठे टायपोग्राफी आणि स्पेसिंग (Large typography and spacing).
- सर्व व्हिज्युअल घटक पूर्ण आकारात (All visual elements at full size).

### मोबाईल प्रीव्ह्यू (Mobile Preview) {#mobile-preview}

मोबाईल प्रीव्ह्यू तुमच्या डिझाईनची मोबाईल रुंदीवर (सामान्यतः 375px) दाखवतो:

- प्रतिसाद देणारे नेव्हिगेशन (hamburger menu).
- सिंगल-कॉलम लेआउट (Single-column layout).
- समायोजित टायपोग्राफी आणि स्पेसिंग (Adjusted typography and spacing).
- टच-फ्रेंडली बटण आकार (Touch-friendly button sizes).

### प्रतिसाद देणारे ब्रेकपॉइंट्स (Responsive Breakpoints) {#responsive-breakpoints}

Theme Builder या ब्रेकपॉइंट्सवर प्रीव्ह्यू रेंडर करतो:

| Device | Width | Preview |
|--------|-------|---------|
| **Mobile** | 375px | Portrait phone |
| **Tablet** | 768px | Landscape tablet |
| **Desktop** | 1200px | Full-width desktop |
| **Large Desktop** | 1920px | Ultra-wide display |

## तुमच्या डिझाईनमध्ये सुधारणा करणे (Refining Your Design) {#refining-your-design}

### बदल करणे (Making Adjustments) {#making-adjustments}

तुम्ही खालील मार्गांनी तुमच्या डिझाईन दिशेमध्ये सुधारणा करू शकता:

1. **रंग समायोजित करणे** — पॅलेटमधील कोणताही रंग बदला.
2. **फॉन्ट बदलणे** — वेगळे टाइपफेस (typefaces) निवडा.
3. **स्पेसिंगमध्ये बदल** — पॅडिंग आणि मार्जिन समायोजित करा.
4. **लेआउट अपडेट करणे** — कंटेनर रुंदी आणि ग्रिड कॉलम बदला.
5. **घटक सानुकूलित करणे** — बटण स्टाईल्स, कार्ड डिझाईन्स इत्यादींमध्ये बदल करा.

### प्रीव्ह्यू अपडेट्स (Preview Updates) {#preview-updates}

बदल त्वरित दिसतात:

- डेस्कटॉप प्रीव्ह्यू त्वरित अपडेट होतो.
- मोबाईल प्रीव्ह्यू त्वरित अपडेट होतो.
- सर्व प्रतिसाद देणारे ब्रेकपॉइंट्स अपडेट होतात.
- तुम्ही बदल तपासण्यासाठी प्रीव्ह्यूमध्ये स्विच करू शकता.

### तुलना दृश्य (Comparison View) {#comparison-view}

तुम्ही तुमच्या डिझाईनची तुलना खालील गोष्टींशी करू शकता:

- **मूळ डिझाईन** — काय बदलले हे पाहण्यासाठी.
- **स्पर्धकांच्या डिझाईन्स** — प्रेरणा देणाऱ्या साइट्सशी तुलना करण्यासाठी.
- **मागील आवृत्त्या** — पूर्वीच्या डिझाईन दिशेकडे परत जाण्यासाठी.

## डिझाईन दिशा मंजूर करणे (Design Direction Approval) {#design-direction-approval}

जेव्हा तुम्हाला तुमच्या डिझाईनवर समाधान वाटेल:

1. **दोन्ही प्रीव्ह्यू तपासा** — डेस्कटॉप आणि मोबाईल दोन्ही व्यवस्थित दिसतात याची खात्री करा.
2. **सर्व रंग तपासा** — कॉन्ट्रास्ट (contrast) आणि ॲक्सेसिबिलिटी (accessibility) तपासा.
3. **टायपोग्राफी चाचणी घ्या** — सर्व आकारांवर वाचनीयता तपासा.
4. **लेआउट निश्चित करा** — स्पेसिंग आणि अलाइनमेंट तपासा.
5. **डिझाईन मंजूर करा** — थीम जनरेशनसाठी पुढे जा.

## पुढील पायऱ्या (Next Steps) {#next-steps}

तुमची डिझाईन दिशा मंजूर केल्यानंतर:

1. Theme Builder तुमची संपूर्ण थीम तयार करतो.
2. ही थीम तुमच्या WordPress साइटवर इन्स्टॉल होते.
3. तुम्ही WordPress customizer वापरून आणखी कस्टमायझेशन करू शकता.
4. [Hospitality Menus](./hospitality-menus.md) किंवा इतर वैशिष्ट्यांकडे जा.

## सर्वोत्तम पद्धती (Best Practices) {#best-practices}

- **वास्तविक उपकरणांवर चाचणी घ्या** — शक्य असल्यास प्रत्यक्ष फोन आणि टॅब्लेट वापरा.
- **वाचनीयता तपासा** — सर्व आकारांवर मजकूर वाचण्यास सोपा आहे याची खात्री करा.
- **कॉन्ट्रास्ट तपासा** — ॲक्सेसिबिलिटीसाठी [Validate Palette Contrast](../abilities/validate-palette-contrast.md) वापरा.
- **कार्यक्षमता विचारात घ्या** — वेगासाठी प्रतिमा (images) आणि फॉन्ट ऑप्टिमाइझ करा.
- **सामग्रीची योजना करा** — तुमचा लेआउट तुमच्या वास्तविक सामग्रीसह (actual content) काम करतो याची खात्री करा.

## समस्या निवारण (Troubleshooting) {#troubleshooting}

### प्रीव्ह्यू अपडेट होत नाही (Preview Not Updating) {#preview-not-updating}

- पेज रिफ्रेश करा.
- ब्राउझर कॅशे (browser cache) साफ करा.
- वेगळा ब्राउझर वापरून पहा.
- इंटरनेट कनेक्शन तपासा.

### रंग वेगळे दिसतात (Colors Look Different) {#colors-look-different}

- मॉनिटर कलर सेटिंग्ज तपासा.
- वेगवेगळ्या उपकरणांवर प्रयत्न करा.
- ॲक्सेसिबिलिटी टूल्स वापरून कलर कॉन्ट्रास्ट तपासा.
- कलर ब्लाइंडनेस सिम्युलेटरचा विचार करा.

### टायपोग्राफी समस्या (Typography Issues) {#typography-issues}

- फॉन्ट फाइल्स लोड होत आहेत की नाही हे तपासा.
- वेगवेगळ्या ब्रेकपॉइंट्सवर फॉन्ट आकार तपासा.
- वास्तविक सामग्रीसह चाचणी घ्या.
- वाचनीयतेसाठी ओळीची लांबी (line length) विचारात घ्या.

## संबंधित दस्तऐवजीकरण (Related Documentation) {#related-documentation}

- [Discovery Interview](./discovery-interview.md) — डिझाईन माहिती गोळा करा.
- [Hospitality Menus](./hospitality-menus.md) — संरचित मेनू पेज तयार करा.
- [Validate Palette Contrast](../abilities/validate-palette-contrast.md) — कलर ॲक्सेसिबिलिटी तपासा.
- [Generate Logo SVG](../abilities/generate-logo-svg.md) — कस्टम लोगो तयार करा.
