---
title: Exportar e Importar
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Exportar e Importar

Ultimate Multisite 2.9.0 añade unha única herramienta de **Exportación e Importación** dentro de **Tools > Export & Import**. Úsala cuando precisas de empaquetar un sitio WordPress como ficheiro ZIP, restaurar ese ZIP, ou mover un sitio entre instalacións de Ultimate Multisite e WordPress de sitio único compatibles.

## Permisos necesarios

Debes iniciar sesión como administrador que possa acceder ao menú **Tools** do WordPress no sitio que se está exportando ou importando. N unha rede multisite, usa unha conta de administrador da rede ao exportar ou importar subsitios a partir das ferramentas de Ultimate Multisite de nivel de rede.

As descargas ZIP de exportación se sirven a través dun punto final de descarga autenticado, así que mantén activa a sesión do administrador hasta que termine a descarga e non compartas as URL de descarga generadas públicamente.

## Exportar un sitio a un ZIP

1. No admin de WordPress do sitio que queres copiar, ve a **Tools > Export & Import**.
2. Abre a área de exportación e escolhe o sitio que queres empaquetar.
3. Seleita o contido opcional que queres incluir, como archivos cargados (uploads), plugins e temas, en que esas opción están dispoñibles.
4. Inicia a exportación e espera a que o proceso termine. Os sitios grandes poden necesitar terminar en segundo plano antes de que o ZIP este listo.
5. Descarga o ZIP terminado da lista de exportacións.

Guarda o ZIP en un lugar seguro. Pode contendo contido do sitio, configuración, arquivos de medios e activos de código seleccionados.

## O que incluye a exportación

Un ZIP de exportación pode incluir:

- O contido da base de datos e a configuración do sitio seleccionado.
- Os archivos de medios cargados se se incluyen as cargas (uploads).
- Plugins e temas se se seleccionan esas opcións.
- Metadatos de importación utilizados pola herramienta Export & Import para reconstruir o sitio na instalación de destino.

O tamaño exacto do ZIP depende da quantidade de media, dos plugins e temas selecionados, e do tamanho das tabelas do banco de dados do site.

## Importar un site a partir de un ZIP

1. Vaya a **Tools > Export & Import** no sitio WordPress de destino.
2. Abra a área de importación e suba o ZIP que foi criado pela ferramenta Export & Import.
3. Introduza uma URL de substituição se o site deve usar um novo endereço, ou deixe o campo em branco para manter a URL original.
4. Escolha se deseja apagar o ZIP carregado depois de terminar a importação.
5. Clique em **Begin Import** (Começar Importação).
6. Monitore a importação pendente até que termine. Use **Cancel Import** (Cancelar Importação) apenas se precisar parar o processo antes da conclusão.
7. Revise o site importado antes de permitir tráfego normal ou acesso do cliente.

N uma instalação WordPress de site único, importar um ZIP substitui o site atual pelo site importado. Crie um backup completo do site alvo antes de começar e evite iniciar múltiplas importações para o mesmo site ao mesmo tempo.

## Limitações e notas de compatibilidade

Os directorios de subida (uploads) ou bibliotecas de medios moi grandes poden producir arquivos ZIP moi grandes. Confirme os límites de subida de PHP, os límites de ejecución, o o espazo do disco, a memoria e as configuración do tempo limite do servidor antes de exportar ou importar sitios moi grandes.
As bibliotecas de medios moi grandes poden necesitar ser movidas durante unha ventán de mantemento con pouco tráfico.
A instalación de WordPress de destino debe funcionar con as versiones compatibles de WordPress, PHP, Ultimate Multisite, plugin e tema.
A importación de un único sitio substitúe o sitio de destino. Non é unha herramienta de fusión (merge).
As mudanzas de Multisite a sitio único e de sitio único a Multisite só están soportadas se o ambiente de destino pode funcionar con os plugins, temas, URLs e os componentes necesarios de Ultimate Multisite do sitio exportado.
Manten que o ZIP sexa privado. Pode contendo o contenido da base de datos, arquivos subidos e detalles de configuración do sitio exportado.

Para fluxos de exportación a nivel de rede máis antigos, ve [Site Export](/user-guide/administration/site-export).
