---
title: Ọchụchọ Ngalaba Isi
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Ọchụchọ Ngalaba n'Isi Peeji {#header-domain-search}

Jiri nhazi a mgbe ịchọrọ obere fọm n'isi peeji nke na-amalite ọchụchọ ngalaba, wee hapụ onye ahịa ka ọ họrọ n'ime ngalaba ndị dị n'ime ịkwụ ụgwọ Ultimate Multisite.

## Ihe achọrọ {#requirements}

- Ultimate Multisite na-arụ ọrụ na netwọkụ.
- Multisite Ultimate Domain Seller na-arụ ọrụ na netwọkụ.
- Opekata mpe otu ngwaahịa ndebanye ngalaba na-arụ ọrụ nwere:
  - `domain_provider` etinyere ka ọ bụrụ onye na-enye ọrụ ahazirila.
  - TLD ndị akwadoro ahazirila, dịka ọmụmaatụ `com`, `net`, na `org`.
- Fọm ịkwụ ụgwọ ziri ezi nwere oghere **Nhọrọ Ngalaba**.

## Fọm ịkwụ ụgwọ {#checkout-form}

1. Mepụta ma ọ bụ dezie fọm ịkwụ ụgwọ nke peeji ndebanye na-eji.
2. Tinye oghere ịkwụ ụgwọ/account ndị a na-achọkarị, gụnyere **Aha onye ọrụ**. Ultimate Multisite validation na-ajụ fọm ịkwụ ụgwọ nwere naanị oghere ngalaba.
3. Tinye oghere **Nhọrọ Ngalaba**.
4. Tọọ ọnọdụ Nhọrọ Ngalaba ka ọ bụrụ **Naanị Ndebanye** mgbe usoro ahụ kwesịrị ilekwasị anya na ngalaba edebanyere aha kama subdomain efu ma ọ bụ ngalaba dị adị.
5. Kenye ngwaahịa ndebanye ngalaba ahụ na oghere ahụ.

Peeji ndebanye kwesịrị igosi fọm ịkwụ ụgwọ ahụ, dịka ọmụmaatụ:

```text
[wu_checkout slug="domain-form"]
```

## Fọm isi peeji {#header-form}

Tinye obere fọm `GET` n'isi peeji saịtị nke na-eziga okwu ọchụchọ etinyere na peeji ịkwụ ụgwọ dịka `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Ahọrọla ngalaba tupu oge eruo na JavaScript isi peeji omenala. Isi peeji kwesịrị naanị iziga okwu ọchụchọ ahụ. Skript ịkwụ ụgwọ Domain Seller na-agụ `?domain_name=example`, na-eju igbe ọchụchọ ịkwụ ụgwọ, ma na-agba ọchụchọ ịdị adị ka onye ahịa nwee ike ịhọrọ n'ime ngalaba ndị eweghachiri.

## Omume a tụrụ anya ya {#expected-behaviour}

Ịchọ `example` n'isi peeji kwesịrị imeghe:

```text
/register/?domain_name=example
```

Ịkwụ ụgwọ ahụ kwesịrị igosi nsonaazụ ndị a pụrụ ịhọrọ dịka:

- `example.com`
- `example.net`
- `example.org` adịghị
- TLD ndị ọzọ onye na-enye ọrụ na-akwado

Mgbe ahọpụtara nsonaazụ dị, nchịkọta iwu kwesịrị ịgụnye ngwaahịa ndebanye ngalaba na aha ngalaba ahọpụtara.

## Nnyocha {#verification}

1. Mepee peeji mbu.
2. Chọọ aha efu, dịka ọmụmaatụ `example`.
3. Kwenye na URL ịkwụ ụgwọ gụnyere `?domain_name=example`.
4. Kwenye na oghere ngalaba ịkwụ ụgwọ nwere `example`.
5. Kwenye na ndepụta nhọrọ ngalaba pụtara.
6. Pịa **Họrọ** maka ngalaba dị.
7. Kwenye na nchịkọta iwu nwere `Domain Registration - example.com` ma ọ bụ ngalaba ahọpụtara.

## Idozi nsogbu {#troubleshooting}

- Ọ bụrụ na ndepụta apụtaghị, lelee taabụ netwọkụ ihe nchọgharị maka `admin-ajax.php?action=wu_domain_search` ma kwenye na ọ na-eweghachi `domains` ma ọ bụ `results` na-abụghị ihe efu.
- Ọ bụrụ na fọm ịkwụ ụgwọ dara validation mgbe a na-echekwa ya, tinye oghere account achọrọ dịka **Aha onye ọrụ**.
- Ọ bụrụ na ịhọrọ ngalaba anaghị emelite cart, kwenye na `window.wu_checkout_form` dị nakwa na ihe onwunwe ịkwụ ụgwọ Domain Seller ebudatala na peeji ịkwụ ụgwọ.
