---
title: Lénsleit í haus
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Header Domain Search

Notaðu þessa uppsetningu þegar þú vilt lítið eyðublað í haus sem byrjar lénaleit og leyfir síðan viðskiptavininum að velja úr tiltækum lénum inni í Ultimate Multisite checkout.

## Kröfur {#requirements}

- Ultimate Multisite virkt á neti.
- Multisite Ultimate Domain Seller virkt á neti.
- Að minnsta kosti ein virk lénaskráningarvara með:
  - `domain_provider` stillt á stilltan veitanda.
  - Studd TLDs stillt, til dæmis `com`, `net` og `org`.
- Gilt checkout-eyðublað sem inniheldur **Lénsvals** reitinn.

## Checkout-eyðublað {#checkout-form}

1. Búðu til eða breyttu checkout-eyðublaðinu sem skráningarsíðan notar.
2. Bættu við venjulegum nauðsynlegum checkout/account-reitum, þar á meðal **Notandanafn**. Checkout-eyðublaði sem inniheldur aðeins lénsreitinn er hafnað af Ultimate Multisite staðfestingu.
3. Bættu við **Lénsvals** reit.
4. Stilltu Domain Selection haminn á **Register Only** þegar flæðið á að einblína á skráð lén frekar en ókeypis undirlén eða fyrirliggjandi lén.
5. Úthlutaðu lénaskráningarvörunni á þann reit.

Skráningarsíðan ætti að birta checkout-eyðublaðið, til dæmis:

```text
[wu_checkout slug="domain-form"]
```

## Haus-eyðublað {#header-form}

Bættu við litlu `GET` eyðublaði í haus síðunnar sem sendir innslátt leitarorðsins á checkout-síðuna sem `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Forveldu ekki lén í sérsniðnu JavaScripti í haus. Hausinn ætti aðeins að senda leitarorðið. Domain Seller checkout-forritið les `?domain_name=example`, fyllir út leitarreitinn í checkout og keyrir tiltækileikaleitina svo viðskiptavinurinn geti valið úr lénunum sem skilað er.

## Vænt hegðun {#expected-behaviour}

Leit að `example` í hausnum ætti að opna:

```text
/register/?domain_name=example
```

Checkout ætti þá að birta niðurstöður sem hægt er að velja, svo sem:

- `example.com`
- `example.net`
- `example.org` ekki tiltækt
- önnur TLDs sem veitandinn styður

Eftir að tiltæk niðurstaða hefur verið valin ætti pöntunaryfirlitið að innihalda lénaskráningarvöruna og valið lén.

## Staðfesting {#verification}

1. Opnaðu heimasíðuna.
2. Leitaðu að beru nafni, til dæmis `example`.
3. Staðfestu að checkout-URL innihaldi `?domain_name=example`.
4. Staðfestu að lénsreiturinn í checkout innihaldi `example`.
5. Staðfestu að listi yfir lénavalkosti birtist.
6. Smelltu á **Velja** fyrir tiltækt lén.
7. Staðfestu að pöntunaryfirlitið innihaldi `Domain Registration - example.com` eða valið lén.

## Úrræðaleit {#troubleshooting}

- Ef enginn listi birtist skaltu athuga netflipa vafrans fyrir `admin-ajax.php?action=wu_domain_search` og staðfesta að það skili ekki-tómum `domains` eða `results`.
- Ef checkout-eyðublaðið stenst ekki staðfestingu við vistun skaltu bæta við nauðsynlegum account-reitum eins og **Notandanafn**.
- Ef val á léni uppfærir ekki körfuna skaltu staðfesta að `window.wu_checkout_form` sé til og að Domain Seller checkout-assets séu hlaðin á checkout-síðunni.
