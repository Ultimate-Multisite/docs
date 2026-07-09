---
title: Башкы бөлүктөгү домен издөө
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Header домен издөө {#header-domain-search}

Бул орнотууну домен издөөсүн баштаган чакан header формасы керек болгондо, андан кийин кардарга Ultimate Multisite checkout ичинде жеткиликтүү домендердин арасынан тандоого мүмкүнчүлүк берүү үчүн колдонуңуз.

## Талаптар {#requirements}

- Ultimate Multisite тармак боюнча активдүү.
- Multisite Ultimate Domain Seller тармак боюнча активдүү.
- Төмөнкүлөрү бар кеминде бир активдүү домен каттоо продукту:
  - `domain_provider` конфигурацияланган провайдерге коюлган.
  - Колдоого алынган TLDлер конфигурацияланган, мисалы `com`, `net` жана `org`.
- **Domain Selection** талаасын камтыган жарактуу checkout формасы.

## Checkout формасы {#checkout-form}

1. Каттоо барагы колдонгон checkout формасын түзүңүз же түзөтүңүз.
2. Кадимки талап кылынган checkout/account талааларын, анын ичинде **Username** кошуңуз. Домен талаасын гана камтыган checkout формасы Ultimate Multisite текшерүүсү тарабынан четке кагылат.
3. **Domain Selection** талаасын кошуңуз.
4. Агым акысыз субдомендерге же бар домендерге эмес, катталган домендерге басым жасашы керек болгондо Domain Selection режимин **Register Only** кылып коюңуз.
5. Домен каттоо продуктун ошол талаага дайындаңыз.

Каттоо барагы checkout формасын көрсөтүшү керек, мисалы:

```text
[wu_checkout slug="domain-form"]
```

## Header формасы {#header-form}

Сайттын header бөлүгүнө киргизилген издөө сөзүн checkout барагына `domain_name` катары жөнөтүүчү чакан `GET` формасын кошуңуз:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Ыңгайлаштырылган header JavaScript ичинде доменди алдын ала тандабаңыз. Header издөө сөзүн гана өткөрүшү керек. Domain Seller checkout скрипти `?domain_name=example` окуп, checkout издөө кутучасын толтурат жана жеткиликтүүлүк издөөсүн иштетет, ошондо кардар кайтарылган домендердин арасынан тандай алат.

## Күтүлгөн жүрүм-турум {#expected-behaviour}

Header ичинде `example` издөө төмөнкүнү ачышы керек:

```text
/register/?domain_name=example
```

Андан кийин checkout төмөнкүдөй тандалчу натыйжаларды көрсөтүшү керек:

- `example.com`
- `example.net`
- `example.org` жеткиликсиз
- провайдер колдогон башка TLDлер

Жеткиликтүү натыйжа тандалгандан кийин, буйрутма жыйынтыгында домен каттоо продукту жана тандалган домен аты камтылышы керек.

## Текшерүү {#verification}

1. Башкы баракты ачыңыз.
2. Жөнөкөй атты издеңиз, мисалы `example`.
3. Checkout URL `?domain_name=example` камтыганын ырастаңыз.
4. Checkout домен талаасы `example` камтыганын ырастаңыз.
5. Домен тандоолорунун тизмеси пайда болгонун ырастаңыз.
6. Жеткиликтүү домен үчүн **Select** басыңыз.
7. Буйрутма жыйынтыгында `Domain Registration - example.com` же тандалган домен бар экенин ырастаңыз.

## Көйгөйлөрдү чечүү {#troubleshooting}

- Эгер тизме чыкпаса, браузердин тармак өтмөгүнөн `admin-ajax.php?action=wu_domain_search` текшерип, ал бош эмес `domains` же `results` кайтарарын ырастаңыз.
- Эгер checkout формасы сактоо учурунда текшерүүдөн өтпөй калса, **Username** сыяктуу талап кылынган account талааларын кошуңуз.
- Эгер доменди тандоо арабаны жаңыртпаса, `window.wu_checkout_form` бар экенин жана Domain Seller checkout assets checkout барагында жүктөлгөнүн ырастаңыз.
