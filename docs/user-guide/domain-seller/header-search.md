---
title: "Header Domain Search"
sidebar_position: 4
---

# Header Domain Search

Use this setup when you want a small header form that starts a domain search, then lets the customer choose from available domains inside the Ultimate Multisite checkout.

## Requirements

- Ultimate Multisite network-active.
- Multisite Ultimate Domain Seller network-active.
- At least one active domain registration product with:
  - `domain_provider` set to a configured provider.
  - Supported TLDs configured, for example `com`, `net`, and `org`.
- A valid checkout form containing the **Domain Selection** field.

## Checkout form

1. Create or edit the checkout form used by the registration page.
2. Add the normal required checkout/account fields, including **Username**. A checkout form containing only the domain field is rejected by Ultimate Multisite validation.
3. Add a **Domain Selection** field.
4. Set the Domain Selection mode to **Register Only** when the flow should focus on registered domains rather than free subdomains or existing domains.
5. Assign the domain registration product to that field.

The registration page should render the checkout form, for example:

```text
[wu_checkout slug="domain-form"]
```

## Header form

Add a small `GET` form in the site header that sends the entered search term to the checkout page as `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Do not preselect a domain in custom header JavaScript. The header should only pass the search term. The Domain Seller checkout script reads `?domain_name=example`, fills the checkout search box, and runs the availability search so the customer can choose from the returned domains.

## Expected behaviour

Searching `example` in the header should open:

```text
/register/?domain_name=example
```

The checkout should then display selectable results such as:

- `example.com`
- `example.net`
- `example.org` unavailable
- other provider-supported TLDs

After selecting an available result, the order summary should include the domain registration product and the selected domain name.

## Verification

1. Open the home page.
2. Search for a bare name, for example `example`.
3. Confirm the checkout URL includes `?domain_name=example`.
4. Confirm the checkout domain field contains `example`.
5. Confirm a list of domain choices appears.
6. Click **Select** for an available domain.
7. Confirm the order summary contains `Domain Registration - example.com` or the selected domain.

## Troubleshooting

- If no list appears, check the browser network tab for `admin-ajax.php?action=wu_domain_search` and confirm it returns non-empty `domains` or `results`.
- If the checkout form fails validation while saving, add the required account fields such as **Username**.
- If selecting a domain does not update the cart, confirm `window.wu_checkout_form` exists and that the Domain Seller checkout assets are loaded on the checkout page.
