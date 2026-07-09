---
title: ድረገጽ ገንቢ የእውቂያ ቅጾች
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Site Builder Contact Forms {#site-builder-contact-forms}

Superdav AI Agent v1.10.0 በSite Builder agent አማካኝነት በቀጥታ ከቻት በይነገጽ (chat interface) የኮንታክት ፎርም የመፍጠር ችሎታን ይጨምራል። ይህ ደግሞ ቻቱን ሳይለቁ በማንኛውም ገጽ ላይ ሙሉ በሙሉ የሚሰራ የኮንታክት ፎርም እንዲጨምሩ ያስችላል።

## Overview {#overview}

የSite Builder contact form ችሎታ (`create_contact_form`) በራስ-ሰር የተጫኑትን የፎርም plugin ይለያል እና በዚያ plugin ተፈጥሯዊ አቅም በመጠቀም የኮንታክት ፎርም ይፈጥራል። የሚደገፉ የፎርም pluginዎች የሚከተሉትን ያካትታሉ፦

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

ረዳቱ (assistant) በጣቢያዎ ላይ ያለውን ምርጥ የፎርም plugin በራስ-ሰር ይመርጣል እና ለዚያ plugin ተስማሚ የሆነ የኮንታክት ፎርም ይፈጥራል።

## Creating a Contact Form {#creating-a-contact-form}

Site Builderን በመጠቀም የኮንታክት ፎርም ለመፍጠር የሚከተሉትን ያድርጉ፦

1. በWordPress admin ውስጥ ያለውን **Gratis AI Agent** የቻት ፓነል ይክፈቱ።
2. በቻት ርዕስ ላይ ያለውን agent አዶ በመጫን ወደ **Site Builder** agent ይቀይሩ።
3. መፍጠር የሚፈልጉትን የኮንታክት ፎርም ይግለጹ። ለምሳሌ፦

   > "በContact page ላይ ስም፣ ኢሜይል፣ መልዕክት እና ስልክ ቁጥር ያላቸው ክፍሎች ያለው የኮንታክት ፎርም ይጨምሩ።"

   ወይም በቀላሉ፦

   > "ለContact page የኮንታክት ፎርም ይፍጠሩ።"

4. Site Builder የኮንታክት ፎርሙን ይፈጥራል እና ለመሰረጽ (embed) ዝግጁ የሆነ shortcode ይመልሳል።

## Using the Generated Shortcode {#using-the-generated-shortcode}

Site Builder የኮንታክት ፎርሙን ከፈጠረ በኋላ፣ shortcode ይመልሳል (ለምሳሌ፣ `[contact-form-7 id="123"]`)። የሚከተሉትን ማድረግ ይችላሉ፦

1. **በገጽ ወይም ፖስት ውስጥ ማስገባት** — shortcodeውን በመቅዳት እና በblock editor ወይም classic editor በመጠቀም በማንኛውም ገጽ ወይም ፖስት ውስጥ መለጠፍ ይችላሉ።
2. **በSite Builder በኩል መጨመር** — ፎርሙን ወደ አንድ የተወሰነ ገጽ በራስ-ሰር እንዲጨምር Site Builderን ይጠይቁ፦

   > "የኮንታክት ፎርሙን ወደ Contact page ይጨምሩ።"

3. **በtemplate ውስጥ መጠቀም** — PHP በሚጠቀሙበት ጊዜ፣ shortcodeውን ወደ theme template file ውስጥ መጨመር ይችላሉ።

## Customizing the Contact Form {#customizing-the-contact-form}

Site Builder የኮንታክት ፎርሙን ከፈጠረ በኋላ፣ እርስዎ በራሳቸው ሊያበጁት ይችላሉ፦

### Via the Chat Interface {#via-the-chat-interface}

Site Builder ፎርሙን እንዲያሻሽል ይጠይቁ፦

> "የኮንታክት ፎርሙን በአርዕስ (subject) ክፍል እንዲያይዝ እና የመልዕክት (message) ክፍል የግድ እንዲሆን ያድርጉ።"

Site Builder ፎርሙን አሻሽሎ የተሻሻለውን shortcode ይመልሳል።

### Via the Form Plugin's Admin Interface {#via-the-form-plugins-admin-interface}

በየፎርም pluginዎ ቅንብሮች ውስጥ በቀጥታ ፎርሙን ማበጀት ይችላሉ፦

1. በWordPress admin ውስጥ **Contact Form 7** (ወይም የተጫኑት የፎርም plugin) ላይ ይሂዱ።
2. በSite Builder የተፈጠረውን ፎርም ያግኙ።
3. እንደ አስፈላጊነቱ የፎርም ክፍሎችን፣ የማረጋገጫ ህጎችን (validation rules) እና የኢሜይል ማሳወቂያዎችን ያርትዑ።

## Form Plugins and Compatibility {#form-plugins-and-compatibility}

Site Builder በጣቢያዎ ላይ የትኛው የፎርም plugin ተጭኗል በራስ-ሰር ይለያል እና የኮንታክት ፎርሙን ለመፍጠር ይጠቀማል። ብዙ የፎርም pluginዎች ከተጫኑ፣ Site Builder ቅድሚያ የሚሰጣቸው በዚህ ቅደም ተከተል ነው፦

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

እነዚህ pluginዎች ከሌላ ከተጫኑ፣ Site Builder የኮንታክት ፎርሙን ከመፍጠሩ በፊት አንዱን እንዲጫኑ ይመክራል።

## Email Notifications {#email-notifications}

በSite Builder የተፈጠሩ የኮንታክት ፎርሞች በነባሪነት የኢሜይል ማሳወቂያዎችን ለጣቢያው አስተዳዳሪ (site administrator) እንዲልኩ ተዘጋጅተዋል። የደረሱበትን ኢሜይል አድራሻ እና የማሳወቂያ መልዕክት ማበጀት ይችላሉ፦

1. ወደ የየፎርም pluginዎ አስተዳደር በይነገጽ ይሂዱ።
2. በSite Builder የተፈጠረውን ፎርም ያግኙ።
3. የኢሜይል ማሳወቂያ ቅንብሮችን ያርትዑ።

ለዝርዝር መመሪያዎች፣ የየፎርም pluginዎ ሰነድ (documentation) ይመልከቱ፦

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Example Use Cases {#example-use-cases}

### Simple Contact Form {#simple-contact-form}

> "ስም፣ ኢሜይል እና መልዕክት ክፍሎች ያለው ቀላል የኮንታክት ፎርም ይፍጠሩ።"

### Multi-Step Form {#multi-step-form}

> "የኮንታክት መረጃን ለመስጠት የመጀመሪያ ደረጃ እና መልዕክትና የሚመርጡበትን የኮንታክት ዘዴ ለሁለተኛ ደረጃ ያለው የኮንታክት ፎርም ይፍጠሩ።"

### Form with Conditional Logic {#form-with-conditional-logic}

> "በተጠቃሚው በድራፕዳውን (dropdown) ምርጫ ላይ በመመስረት የተለያዩ ክፍሎችን የሚያሳየ የኮንታክት ፎርም ይፍጠሩ።"

### Form with File Upload {#form-with-file-upload}

> "ተጠቃሚዎች ፋይል ወይም መያዣ (attachment) እንዲሰቅሉ የሚያስችል የኮንታክት ፎርም ይፍጠሩ።"

:::note
የኮንታክት ፎርም መፍጠር በSuperdav AI Agent v1.10.0 እና ከዚያ በኋላ ይገኛል። ይህንን ችሎታ ለመጠቀም Site Builder agent መብራት ላይ መሆን አለበት።
:::
