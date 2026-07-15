---
title: የክፍያ እና የደረሰኝ አያያዝ
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# ክፍያዎችን እና የደረሰኝ (Invoices) አያያዝ

## የክፍያ ቅንብሮች (Payment Settings) {#payment-settings}

ክፍያ መቀበል ከመጀመርዎ በፊት፣ ከክፍያ ጋር የተያያዙ ቅንብሮችን ማዘጋጀት ያስፈልግዎታል። ወደ **Ultimate Multisite → Settings** ይሂዱ እና **Payment** ታብ ላይ ይጫኑ።

![Payment settings tab](/img/admin/settings-payments-top.png)

የክፍያ ቅንብሮች ገጽ ሙሉ እይታ እነሆ፦

![Payment settings full page](/img/admin/settings-payments-full.png)

### አጠቃላይ የክፍያ አማራጮች (General Payment Options) {#general-payment-options}

በአጠቃላይ ቅንብሮች ውስጥ የሚከተሉትን ማዋቀር ይችላሉ፦

- **Currency** — ለግብይቶች የሚውል መደበኛ ምንዛሪ
- **Currency Position** — የምንዛሪ ምልክቱ የት እንደሚታይ (ከገንዘቡ በፊት/በኋላ)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### የክፍያ መግቢያዎች (Payment Gateways) {#payment-gateways}

Ultimate Multisite በርካታ የክፍያ መግቢያዎችን ይደግፋል። እያንዳንዱን ከPayment settings ታብ ውስጥ በማንቃት እና በማዋቀር መቅዳት ይችላሉ።

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

የሚገኙ መግቢያዎች የሚከተሉትን ያካትታል፦

- **Stripe** — በStripe በኩል የክሬዲት ካርድ ክፍያዎች
- **PayPal** — የPayPal ክፍያዎች
- **Manual** — ለአፍቃሪ ወይም ለተራቀቀ የክፍያ ሂደት

እያንዳንዱ መግቢያ የራሱ የሆነ የቅንብር ክፍል አለው፤ እዚያም API keys እና ሌሎች ቅንብሮችን ያስገባሉ።

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### የSandbox ሁነታ (Sandbox Mode) {#sandbox-mode}

ወደ ኦንላይን አገልግሎት ከመውጣታችሁ በፊት የክፍያ ውህደታችሁን ለመፈተን **Sandbox Mode** ማብራት ይችላሉ። የsandbox ሁነታ ሲንቀሳቀስ፣ እውነተኛ ክፍያዎች አይደረጉም።

## ክፍያዎችን መመልከት (Viewing Payments) {#viewing-payments}

በኔትዎርክዎ ውስጥ ያሉ ሁሉንም ግብይቶች ለማየት ወደ Ultimate Multisite ስር ባለው **Payments** ገጽ ይሂዱ።

![Payments list](/img/admin/payments-list.png)

ክፍያዎችን በሁኔታቸው (የተጠናቀቀ፣ በመጠባበቅ ላይ፣ አልተሳካም፣ ተመላሽ) ማጣራት እና የተወሰኑ ግብይቶችን መፈለግ ይችላሉ።

ሙሉ ዝርዝሩን፣ የገበያ ዕቃዎችን (line items)፣ የተያያዘውን የአባልነት መረጃ፣ የደንበኛ መረጃ እና የክፍያ መግቢያ መረጃ ለማየት በአንድ ክፍያ ላይ ይጫኑ።

## የደረሰኝ (Invoices) {#invoices}

Ultimate Multisite ክፍያዎችን በራስ-ሰር የደረሰኝ (invoice) መፍጠር ይችላል። የደረሰኝን አብነት እና የቁጥር አሰጣጥ ቅርጸት ከPayment settings ማበጀት ይችላሉ።

የደረሰኝ ማበጀት አማራጮች የሚከተሉትን ያካትታሉ፦

- በደረሰኝ ላይ የሚታየው የኩባንያ ስም እና አድራሻ
- የደረሰኝ ቁጥር ቅርጸት እና ቅደም ተከተል
- በደረሰኝ ርዕስ ላይ የሚታየው አርማ (Logo)
- ለአጋጣሚዎች፣ ማስታወሻዎች ወይም ህጋዊ መረጃዎች የሚሆን የቅንብረኛ የግርጌ ጽሑፍ (Custom footer text)

የደረሰኝ አብነትን ለማበጀት፣ ወደ **Ultimate Multisite → Settings → Payment** ይሂዱ እና ከደረሰኝ ጋር የተያያዙ ቅንብሮችን ይፈልጉ።
