---
title: ચેકઆઉટ ફોર્મ્સ
sidebar_position: 19
_i18n_hash: dfdf572ddbe8772e1d720be52eda83d3
---
# Checkout Forms

Checkout Forms એ નવા ગ્રાહકોને રૂપાંતરિત કરવાના પ્રયાસમાં વિવિધ અભિગમો સાથે પ્રયોગ કરવાની એક સરળ અને લવચીક રીત છે.

Ultimate Multisite 2.0 એક Checkout Form editor આપે છે જે તમને જોઈએ તેટલા forms બનાવવાની મંજૂરી આપે છે, જેમાં અલગ-અલગ fields, ઓફર પરના products વગેરે હોય છે.

આ feature ઍક્સેસ કરવા માટે, ડાબી side-bar પર Checkout Forms menu પર જાઓ.

![Checkout Forms યાદી](/img/config/checkout-forms-list.png)

આ પેજ પર, તમે તમારા બધા checkout forms જોઈ શકો છો.

જો તમે નવું બનાવવા માંગો છો, તો પેજની ટોચ પર Add Checkout Form પર ક્લિક કરો.

તમે તમારા પ્રારંભિક બિંદુ તરીકે આ ત્રણ વિકલ્પોમાંથી એક પસંદ કરી શકો છો: single step, multi-step અથવા blank. પછી, Go to the Editor પર ક્લિક કરો.

![Checkout Form editor](/img/config/checkout-form-editor.png)

વૈકલ્પિક રીતે, તમે તેના નામ નીચેના વિકલ્પો પર ક્લિક કરીને તમારી પાસે પહેલેથી છે તે forms ને edit અથવા duplicate કરી શકો છો. ત્યાં, તમને form નો shortcode copy કરવા અથવા form delete કરવાના વિકલ્પો પણ મળશે.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

### Checkout Form ને Edit કરવું

તમે વિવિધ હેતુઓ માટે checkout forms બનાવી શકો છો. આ ઉદાહરણમાં આપણે registration form પર કામ કરીશું.

Checkout form editor પર નેવિગેટ કર્યા પછી, તમારા form ને એક નામ આપો (જે ફક્ત આંતરિક સંદર્ભ માટે વપરાશે) અને એક slug (ઉદાહરણ તરીકે, shortcodes બનાવવા માટે વપરાય છે).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Forms steps અને fields થી બનેલા હોય છે. તમે Add New Checkout Step પર ક્લિક કરીને નવું step ઉમેરી શકો છો.

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Modal window ના પહેલા tab પર, તમારા form ના step ની content ભરો. તેને એક ID, એક નામ અને એક description આપો. આ items મોટે ભાગે આંતરિક રીતે વપરાય છે.

![Checkout form step](/img/config/checkout-form-step.png)

આગળ, step ની visibility સેટ કરો. તમે "Always show", "Only show for logged in users" અથવા "Only show for guests" વચ્ચે પસંદગી કરી શકો છો.

![Checkout form step](/img/config/checkout-form-step.png)

છેલ્લે, step style configure કરો. આ optional fields છે.

![Checkout form step](/img/config/checkout-form-step.png)

હવે, આપણા પહેલા step માં fields ઉમેરવાનો સમય છે. ફક્ત Add New Field પર ક્લિક કરો અને તમને જોઈતો section નો પ્રકાર પસંદ કરો.

![Checkout form step with fields](/img/config/checkout-form-step.png)

દરેક field માં અલગ-અલગ parameters ભરવાના હોય છે. આ પહેલી entry માટે, આપણે "Username" field પસંદ કરીશું.

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

તમે જરૂર મુજબ ગમે તેટલા steps અને fields ઉમેરી શકો છો. તમારા ગ્રાહકોને પસંદ કરવા માટે તમારા products દર્શાવવા માટે, Pricing Table field નો ઉપયોગ કરો. જો તમે તમારા clients ને template પસંદ કરવા દેવા માંગો છો, તો Template Selection field ઉમેરો. અને આવું જ.

_**નોંધ:** checkout form બનાવવા માટે username, email, password, site title, site URL, order summary, payment, અને submit button ફરજિયાત fields છે._

જ્યારે તમે તમારા checkout form પર કામ કરી રહ્યા હોવ, ત્યારે તમે હંમેશા Preview button નો ઉપયોગ કરીને જોઈ શકો છો કે તમારા clients form કેવી રીતે જોશે. તમે existing user અથવા visitor તરીકે view વચ્ચે પણ બદલાવ કરી શકો છો.

![Checkout Form save](/img/config/checkout-form-save.png)

![Checkout Form editor](/img/config/checkout-form-editor.png)

છેલ્લે, Advanced Options પર તમે "Thank You" પેજ માટે message configure કરી શકો છો, conversions track કરવા માટે snippets ઉમેરી શકો છો, તમારા checkout form માં custom CSS ઉમેરી શકો છો અથવા તેને ચોક્કસ દેશો સુધી મર્યાદિત કરી શકો છો.

![Advanced Options](/img/config/checkout-form-advanced.png)

તમે જમણી column પર આ option ને toggle કરીને તમારા checkout form ને manually enable અથવા disable પણ કરી શકો છો, અથવા form ને કાયમ માટે delete કરી શકો છો.

![Active toggle](/img/config/checkout-form-active.png)

તમારા checkout form ને save કરવાનું ભૂલશો નહીં!

![Save button](/img/config/checkout-form-save.png)

તમારા form નો shortcode મેળવવા માટે Generate Shortcode પર ક્લિક કરો અને modal window પર દર્શાવેલ result copy કરો.

![Save button with shortcode](/img/config/checkout-form-save.png)
