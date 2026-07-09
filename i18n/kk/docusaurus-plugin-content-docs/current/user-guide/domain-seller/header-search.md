---
title: Тақырыптағы доменді іздеу
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Header Domain Search

Бұл баптауды домен іздеуді бастайтын шағын header формасы қажет болғанда пайдаланыңыз; содан кейін клиент Ultimate Multisite checkout ішінде қолжетімді домендерден таңдай алады.

## Талаптар

- Ultimate Multisite желіде белсенді.
- Multisite Ultimate Domain Seller желіде белсенді.
- Кемінде бір белсенді домен тіркеу өнімі бар, онда:
  - `domain_provider` бапталған провайдерге орнатылған.
  - Қолдау көрсетілетін TLD-лер бапталған, мысалы `com`, `net` және `org`.
- **Domain Selection** өрісі бар жарамды checkout формасы.

## Checkout формасы

1. Тіркеу беті пайдаланатын checkout формасын жасаңыз немесе өңдеңіз.
2. Қалыпты міндетті checkout/account өрістерін, соның ішінде **Username** өрісін қосыңыз. Тек домен өрісінен тұратын checkout формасын Ultimate Multisite тексеруі қабылдамайды.
3. **Domain Selection** өрісін қосыңыз.
4. Ағын тегін субдомендерге немесе бар домендерге емес, тіркелетін домендерге бағытталуы керек болса, Domain Selection режимін **Register Only** етіп орнатыңыз.
5. Домен тіркеу өнімін сол өріске тағайындаңыз.

Тіркеу беті checkout формасын көрсетуі керек, мысалы:

```text
[wu_checkout slug="domain-form"]
```

## Header формасы

Сайт header-іне енгізілген іздеу сөзін checkout бетіне `domain_name` ретінде жіберетін шағын `GET` формасын қосыңыз:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Пайдаланушы header JavaScript ішінде доменді алдын ала таңдамаңыз. Header тек іздеу сөзін ғана жіберуі керек. Domain Seller checkout скрипті `?domain_name=example` мәнін оқиды, checkout іздеу жолағын толтырады және қолжетімділікті іздеуді іске қосады, сонда клиент қайтарылған домендерден таңдай алады.

## Күтілетін әрекет

Header ішінде `example` іздеу мынаны ашуы керек:

```text
/register/?domain_name=example
```

Содан кейін checkout таңдалатын нәтижелерді көрсетуі керек, мысалы:

- `example.com`
- `example.net`
- `example.org` қолжетімсіз
- провайдер қолдайтын басқа TLD-лер

Қолжетімді нәтижені таңдағаннан кейін, тапсырыс қорытындысында домен тіркеу өнімі және таңдалған домен аты болуы керек.

## Тексеру

1. Басты бетті ашыңыз.
2. Жалаң атты іздеңіз, мысалы `example`.
3. Checkout URL-інде `?domain_name=example` бар екенін растаңыз.
4. Checkout домен өрісінде `example` бар екенін растаңыз.
5. Домен таңдауларының тізімі пайда болғанын растаңыз.
6. Қолжетімді домен үшін **Select** түймесін басыңыз.
7. Тапсырыс қорытындысында `Domain Registration - example.com` немесе таңдалған домен бар екенін растаңыз.

## Ақауларды жою

- Егер тізім пайда болмаса, браузердің network қойындысында `admin-ajax.php?action=wu_domain_search` бар-жоғын тексеріп, оның бос емес `domains` немесе `results` қайтаратынын растаңыз.
- Егер checkout формасы сақтау кезінде тексеруден өтпесе, **Username** сияқты міндетті account өрістерін қосыңыз.
- Егер доменді таңдау себетті жаңартпаса, `window.wu_checkout_form` бар екенін және Domain Seller checkout активтері checkout бетінде жүктелгенін растаңыз.
