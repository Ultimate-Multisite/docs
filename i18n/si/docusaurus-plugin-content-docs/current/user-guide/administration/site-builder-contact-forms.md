---
title: සයිට් බිලඩර් සම්බන්ධතා පෝරම
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# වෙබ් අඩවි ගොඩනැගීමේ සම්බන්ධතා පෝරම (Site Builder Contact Forms)

Superdav AI Agent v1.10.0 හරහා, Site Builder agent එක භාවිතා කරමින් චැට් අතුරුමුහුණතෙන්ම කෙලින්ම සම්බන්ධතා පෝරම (contact forms) නිර්මාණය කිරීමට හැකියාව ලැබී ඇත. මෙයින් ඔබට චැට් එකෙන් පිටව යාමට අවශ්‍ය නොවී ඕනෑම පිටුවකට සම්පූර්ණයෙන්ම ක්‍රියාත්මක වන සම්බන්ධතා පෝරම එක් කළ හැකියි.

## දළ විශ්ලේෂණය (Overview)

Site Builder හි සම්බන්ධතා පෝරම නිර්මාණය කිරීමේ හැකියාව (`create_contact_form`) ඔබ ස්ථාපනය කර ඇති form plugin එක ස්වයංක්‍රීයව හඳුනාගෙන, එම plugin එකේ මූලික හැකියාවන් භාවිතා කරමින් සම්බන්ධතා පෝරමක් සාදයි. සහාය දක්වන form plugins අතර:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

සහකාරියා (assistant) ඔබේ වෙබ් අඩවියේ හොඳම තිබෙන form plugin එක ස්වයංක්‍රීයව තෝරාගෙන, එම plugin එකට ගැලපෙන සම්බන්ධතා පෝරමක් සාදයි.

## සම්බන්ධතා පෝරමක් නිර්මාණය කිරීම (Creating a Contact Form)

Site Builder භාවිතා කර සම්බන්ධතා පෝරමක් නිර්මාණය කිරීමට:

1. WordPress admin තුළ **Gratis AI Agent** චැට් පැනලය විවෘත කරන්න.
2. චැට් හෙඩර් එකේ ඇති agent icon එක ක්ලික් කිරීමෙන් **Site Builder** වෙත මාරු වන්න.
3. ඔබ නිර්මාණය කිරීමට බලාපොරොත්තු වන සම්බන්ධතා පෝරමය විස්තර කරන්න. උදාහරණයක් ලෙස:

   > "Contact පිටුවට නම, විද්‍යුත් තැපෑල, පණිවිඩ සහ දුරකථන අංක සඳහා ක්ෂේත්‍ර (fields) සහිත සම්බන්ධතා පෝරමක් එක් කරන්න."

   හෝ සරලව:

   > "Contact පිටුව සඳහා සම්බන්ධතා පෝරමයක් සාදන්න."

4. Site Builder විසින් සම්බන්ධතා පෝරමය ජනනය කර, ඇතුළත් කිරීමට සූදානම් කෙටි කේතයක් (shortcode) ලබා දෙනු ඇත.

## ජනනය කරන ලද කෙටි කේතය භාවිතා කිරීම (Using the Generated Shortcode)

Site Builder මගින් සම්බන්ධතා පෝරම නිර්මාණය කළ පසු, එය කෙටි කේතයක් (උදාහරණයක් ලෙස, `[contact-form-7 id="123"]`) ලබා දෙයි. ඔබට:

1. **පිටුවක හෝ post එකක ඇතුළත් කළ හැකිය** — කෙටි කේතය පිටපත් කර block editor හෝ classic editor භාවිතා කර ඕනෑම පිටුවක් හෝ post එකකට අලවා (paste) දිය හැකියි.
2. **Site Builder හරහා එය එක් කළ හැකිය** — නිශ්චිත පිටුවකට පෝරමය ස්වයංක්‍රීයව එක් කිරීමට Site Builder ට ඉල්ලා සිටින්න:

   > "Contact පිටුවට සම්බන්ධතා පෝරමය එක් කරන්න."

३. **Template එකක භාවිතා කරන්න** — ඔබට PHP ගැන විශ්වාස නම්, එම shortcode එක තේමා template ගොනුවකට (theme template file) එකතු කළ හැකියි.

## Contact Form එක වෙනස් කිරීම (Customizing the Contact Form)

Site Builder මගින් contact form එක නිර්මාණය කිරීමෙන් පසුවත්, ඔබට එය තවදුරටත් වෙනස් කළ හැකියි:

### Chat Interface හරහා

Site Builder ට පහත විදිහට අසන්න:

> "Contact form එකේ subject field එකක් එකතු කරලා message field එක required කරන්න."

Site Builder එම form එක යාවත්කාලීන කර updated shortcode එක ආපසු ලබා දෙනු ඇත.

### Form Plugin එකේ Admin Interface හරහා

ඔබට ඔබේ form plugin එකේ settings වලදී කෙලින්ම form එක වෙනස් කළ හැකියි:

1. WordPress admin එකේ **Contact Form 7** (හෝ ඔබ ස්ථාපනය කර ඇති form plugin) වෙත යන්න.
2. Site Builder විසින් නිර්මාණය කරන ලද form එක සොයා ගන්න.
3. අවශ්‍ය පරිදි form fields, validation rules සහ email notifications සංස්කරණය කරන්න.

## Form Plugins සහ අනුකූලතාවය (Form Plugins and Compatibility)

ඔබේ වෙබ් අඩවියේ ස්ථාපනය කර ඇති form plugin එක ස්වයංක්‍රීයව හඳුනාගෙන contact form එක නිර්මාණය කිරීමට එය භාවිතා කරයි. බහු form plugins ස්ථාපනය කර ඇත්නම්, Site Builder ඒවා පහත ප්‍රමුඛතාවයෙන් (priority) තෝරා ගනී:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

මෙම plugin කිසිවක් ස්ථාපනය කර නොමැති නම්, contact form එක නිර්මාණය කිරීමට පෙර එකක් ස්ථාපනය කරන ලෙස Site Builder නිර්දේශ කරනු ඇත.

## Email Notifications (විද්‍යුත් තැපැල් දැනුම්දීම්)

Site Builder මගින් නිර්මාණය කරන ලද contact forms මඟින් දෝෂ නිවැරදි කිරීමේ පරිපාලකයාට (site administrator) email notifications යැවීමට පෙරනිමියෙන් සකසා ඇත. ඔබට ලබන්නාගේ email ලිපිනය සහ දැනුම්දීමේ පණිවිඩය වෙනස් කළ හැකිය:

1. ඔබේ form plugin එකේ admin interface වෙත යන්න.
2. Site Builder විසින් නිර්මාණය කරන ලද form එක සොයා ගන්න.
3. email notification settings සංස්කරණය කරන්න.

විස්තරාත්මක උපදෙස් සඳහා, ඔබේ form plugin එකේ documentation බලන්න:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## උදාහරණ භාවිත අවස්ථා (Example Use Cases)

### සරල සම්බන්ධතා පෝරමය (Simple Contact Form)

> "නම, විද්‍යුත් තැපැල් ලිපිනය සහ පණිවිඩ ක්ෂේත්‍ර සහිත සරල සම්බන්ධතා පෝරමයක් සාදන්න."

### බහු-පියවර පෝරමය (Multi-Step Form)

> "සම්බන්ධතා තොරතුරු සඳහා පළමු පියවරක් සහ පණිවිඩය සහ මනාප සම්බන්ධතා ක්‍රමය සඳහා දෙවන පියවරක් සහිත සම්බන්ධතා පෝරමයක් සාදන්න."

### කොන්දේසි සහිත පෝරමය (Form with Conditional Logic)

> "වෙබ් අඩවියේ ඇති 드롭다운 එකේ පරිශීලකයාගේ තේරීම මත වෙනස් වන ක්ෂේත්‍ර පෙන්වන සම්බන්ධතා පෝරමයක් සාදන්න."

### ගොනු උඩුගත කිරීම සහිත පෝරමය (Form with File Upload)

> "පරිශීලකයින්ට ගොනුවක් හෝ අමුණන දෙයක් උඩුගත කිරීමට ඉඩ දෙන සම්බන්ධතා පෝරමයක් සාදන්න."

:::note
Contact form නිර්මාණය Superdav AI Agent v1.10.0 සහ පසු සංස්කරණවලදී ලබා ගත හැකිය. මෙම හැකියාව භාවිතා කිරීමට Site Builder agent ක්‍රියාත්මක විය යුතුය.
:::
