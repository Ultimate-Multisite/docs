---
id: wu_magic_link_enforce_ip
title: >-
  ```mdx

  ---

  title: "Filter - wu_magic_link_enforce_ip"

  description: "Enforce IP restrictions for magic links."

  ---


  ## Overview


  The `wu_magic_link_enforce_ip` filter allows you to enforce IP restrictions
  for magic links. By default, magic links are accessible from any IP address.
  This filter gives you the ability to restrict access to specific IP ranges or
  individual IP addresses.


  ### Usage


  ```php

  add_filter( 'wu_magic_link_enforce_ip', 'my_custom_ip_restriction' );


  function my_custom_ip_restriction( $allowed_ips ) {
      // Return an array of IP addresses or CIDR ranges that are allowed.
      return array( '192.168.1.0/24', '203.0.113.42' );
  }

  ```


  ### Parameters


  - **$allowed_ips**: An array of IP addresses or CIDR ranges that are allowed
  to access the magic link.


  ### Return Value


  - An array of IP addresses or CIDR ranges that are allowed to access the magic
  link.


  ### Example


  ```php

  add_filter( 'wu_magic_link_enforce_ip', function( $allowed_ips ) {
      // Allow only the local network and a specific external IP.
      return array( '10.0.0.0/8', '198.51.100.23' );
  } );

  ```


  ### Notes


  - If the filter returns an empty array, no IP restrictions will be applied.

  - The filter is applied before the magic link is validated, so it can prevent
  the link from being used entirely if the IP does not match.


  ```
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filtro: wu_magic_link_enforce_ip

Filtra si se debe forzar la verificación de la dirección IP.

Establecerlo en falso permite que los tokens funcionen desde diferentes redes. Esto reduce la seguridad pero aumenta la usabilidad (por ejemplo, para usuarios móviles que cambian de red).

## Parámetros

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $enforce | `bool` | Si se debe forzar la coincidencia de la dirección IP. |

### Desde

- 2.0.0

### Fuente

Definido en [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) en la línea 422
