---
title: Поиск домена в шапке
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Поиск домена в Header

Используйте эту настройку, когда нужна небольшая форма в Header, которая запускает поиск домена, а затем позволяет клиенту выбрать один из доступных доменов внутри checkout Ultimate Multisite.

## Требования {#requirements}

- Ultimate Multisite активен в сети.
- Multisite Ultimate Domain Seller активен в сети.
- Минимум один активный продукт регистрации домена с:
  - `domain_provider`, установленным на настроенного провайдера.
  - Настроенными поддерживаемыми TLD, например `com`, `net` и `org`.
- Действительная форма checkout, содержащая поле **Выбор домена**.

## Форма checkout {#checkout-form}

1. Создайте или отредактируйте форму checkout, используемую страницей регистрации.
2. Добавьте обычные обязательные поля checkout/Account, включая **Имя пользователя**. Форма checkout, содержащая только поле домена, отклоняется проверкой Ultimate Multisite.
3. Добавьте поле **Выбор домена**.
4. Установите режим Domain Selection на **Только регистрация**, когда поток должен быть сосредоточен на зарегистрированных доменах, а не на бесплатных поддоменах или существующих доменах.
5. Назначьте продукт регистрации домена этому полю.

Страница регистрации должна отображать форму checkout, например:

```text
[wu_checkout slug="domain-form"]
```

## Форма Header {#header-form}

Добавьте небольшую форму `GET` в Header сайта, которая отправляет введённый поисковый запрос на страницу checkout как `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Не предвыбирайте домен в пользовательском JavaScript Header. Header должен только передавать поисковый запрос. Скрипт checkout Domain Seller читает `?domain_name=example`, заполняет поле поиска checkout и запускает поиск доступности, чтобы клиент мог выбрать из возвращённых доменов.

## Ожидаемое поведение {#expected-behaviour}

Поиск `example` в Header должен открыть:

```text
/register/?domain_name=example
```

Затем checkout должен отображать выбираемые результаты, такие как:

- `example.com`
- `example.net`
- `example.org` недоступен
- другие TLD, поддерживаемые провайдером

После выбора доступного результата сводка заказа должна включать продукт регистрации домена и выбранное доменное имя.

## Проверка {#verification}

1. Откройте главную страницу.
2. Выполните поиск по имени без зоны, например `example`.
3. Убедитесь, что URL checkout включает `?domain_name=example`.
4. Убедитесь, что поле домена checkout содержит `example`.
5. Убедитесь, что отображается список вариантов домена.
6. Нажмите **Выбрать** для доступного домена.
7. Убедитесь, что сводка заказа содержит `Domain Registration - example.com` или выбранный домен.

## Устранение неполадок {#troubleshooting}

- Если список не появляется, проверьте вкладку сети в браузере для `admin-ajax.php?action=wu_domain_search` и убедитесь, что он возвращает непустые `domains` или `results`.
- Если форма checkout не проходит проверку при сохранении, добавьте обязательные поля Account, такие как **Имя пользователя**.
- Если выбор домена не обновляет корзину, убедитесь, что `window.wu_checkout_form` существует и что ресурсы checkout Domain Seller загружены на странице checkout.
