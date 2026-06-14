---
title: Khai hov nrho
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Internet Search

Gratis AI Agent v1.5.0-tsh muaj ib ensaw **Internet Search** uuj ua hais txhua neeg yuav tshawb hauv web rau AI assistant yuav saujau kev pab tshiab ntawm cov ntaub ntawv uas muaj qhov chaw loj tshaj plaws. Qhov no yog vim li cas hais los ntawm [Brave Search API](https://brave.com/search/api/) lossis [Tavily API](https://tavily.com/).

## Kuv Tshawb Vaj Hauv Zab Hauv

Thaum tsim kom internet search, assistant yuav saujau txog cov ntaub ntawv uas koj tsim kom hauv qhov chaw koj tsim (configured) tha nws paub tias sawv ceau tso cai tsis muaj qhov kev xav hỏi uas yuav tso cai rau qhov ntaub ntawv uas hloov loj lossis uas muaj hauv lwm lub sijhawm los ntawm cov neeg tsim model. Oua zoo li raws li ib yam uas tshiab, rhe hu, lossis cov ntaub ntawv uas yuav hloov los ntawm qhov uas model tsim.

Cov kale uas tshawb tau hauv real time thiab muaj hauj txius rau hauv context ntawm assistant thaum nws saujau ib yam sawv hỏi. Assistant yuav raws li tias nws tau siv cov ntaub ntawv tshawb los tso cai.

## Tsim Kom Internet Search

Internet search yuav tsum cov key API los ntawm qhov chaw koj tsim (search provider) uas koj xav kom hais. Hauv peemau los tsim:

1. Tsus rau **Gratis AI Agent → Settings → Advanced**.
2. Qhia lub tag nrho **Internet Search Provider** thiab saib ib yam yog **Brave Search** lossis **Tavily**.
3. Siv cov key API koj hauv qhov chaw uas hloov tsim. Cov link tsim key (sign-up links) yuav muaj hauv tswv tshiab ntawm txhua qhov chaw.
4. Thawb **Save Settings**.

Thaum tsim key tau, Internet Search ability yuav mus tso cai rau assistant txoj kev pab tshiab.

## Brave Search

### Tsim Key API Brave Search

1. Tsus rau [Brave Search API page](https://brave.com/search/api/).
2. Tsim lub plan ib yam. Muaj qhov uas tsis muaj thov (free tier) muaj qhov chaw xav hỏi hauv lub sijhawm hais nrho.
3. Kop koj key API los ntawm Brave Search developer dashboard.
4. Thawb nws hauv qhov chaw **Brave Search API Key** hauv settings ntawm Gratis AI Agent.

### Cov Qhov Uas Yuav Tsim (Usage Limits)

ການໃຊ້ງານແມ່ນຖືກគិតថ្លៃដោយ Brave Search ផ្អែកលើចំនួនសំណួរដែលបានធ្វើ។ ការឆ្លើយតប AI នីមួយៗដែលបង្កឱ្យមានការស្វែងរក នឹងត្រូវបានរាប់ជាសំណួរមួយ។ សូមតាមដានការប្រើប្រាស់របស់អ្នកនៅក្នុង [Brave Search developer dashboard](https://brave.com/search/api/) ដើម្បីជៀសវាងការគិតថ្លៃមិនបានរំពឹងទុក។

## Tavily

Superdav AI Agent v1.10.0 បានបន្ថែម **Tavily** ជាអ្នកផ្តល់សេវាស្វែងរកអ៊ីនធឺណិតជំនួសមួយ ដែលផ្តល់នូវលទ្ធផលស្វែងរកកាន់តែសម្បូរបែប និងសមត្ថភាពស្រាវជ្រាវขั้นสูง។

### ការទទួលបាន Tavily API Key

1. ចូលទៅកាន់ [Tavily API page](https://tavily.com/)។
2. ចុះឈ្មោះសម្រាប់គណនីមួយ។ មានកម្រិតឥតគិតថ្លៃដែលមានដែនកំណត់សំណួរក្នុងមួយខែ។
3. កូពី API key របស់អ្នកពី Tavily dashboard។
4. បិទភ្ជាប់វាទៅក្នុងវាល **Tavily API Key** នៅក្នុងការកំណត់នៃ Gratis AI Agent។

### កម្រិតនៃការប្រើប្រាស់

ការប្រើប្រាស់ត្រូវបានគិតថ្លៃដោយ Tavily ផ្អែកលើចំនួន API calls ដែលបានធ្វើ។ ការឆ្លើយតប AI នីមួយៗដែលបង្កឱ្យមានការស្វែងរក នឹងត្រូវបានរាប់ជា one call។ សូមតាមដានការប្រើប្រាស់របស់អ្នកនៅក្នុង [Tavily dashboard](https://tavily.com/) ដើម្បីជៀសវាងការគិតថ្លៃមិនបានរំពឹងទុក។

## ការបិទដំណើរការការស្វែងរកអ៊ីនធឺណិត

យក API key ចេញពីវាលអ្នកផ្តល់សេវាស្វែងរកដែលកំពុងដំណើរការ ហើយរក្សាទុក (save)។ សមត្ថភាពស្វែងរកអ៊ីនធឺណិតនឹងមិនត្រូវបានផ្តល់ជូនទៅកាន់ assistant ទៀតទេ។

:::note
ការស្វែងរកអ៊ីនធឺណិតបន្ថែមការពន្យារពេលដល់ការឆ្លើយតប ព្រោះ assistant ត្រូវរង់ចាំលទ្ធផលស្វែងរកមុននឹងបង្កើតចម្លើយ។ សម្រាប់ករណីដែលត្រូវការពេលវេលាជាក់ស្តែង (time-sensitive use cases) សូមពិចារណាថា តើការស្វែងរកពេលវេលាជាក់ស្តែងចាំបាច់ឬទេ ឬតើចំណេះដឹងដែលមានស្រាប់របស់ assistant គឺគ្រប់គ្រាន់ហើយឬនៅ។
:::
