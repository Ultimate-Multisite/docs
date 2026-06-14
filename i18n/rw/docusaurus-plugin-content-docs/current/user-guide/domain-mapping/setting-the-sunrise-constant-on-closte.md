---
title: Gukoresha Icyemezo cy'Umuvura ku Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Gukoresha constant ya Sunrise ku kuba true kuri Closte

Ururu rwa host (host provider) rugera uburyo bwo gukoresha wp-config.php mu gihe cy'ubwujude (security). Ururu rwa Ultimate Multisite nta gukora ibyo byo gukoresha wp-config.php kugira ngo yoroke ibyo byo gukoresha domain mapping n'ibindi byo kwizera. Closte ni ururu runa.

Ariko, Closte yifashisha uburyo bwo gucunga constants mu wp-config.php mu buryo bwiza kandi bukurikirana (secure). Ukeneye gukora ibi byo mu gihe cyacu:

## Ku dashboard ya Closte

Mbere, [gukoresha aka kanya kuri account yawe ya Closte](https://app.closte.com/), ugira umbwire ku menu ya Sites, nyuma ugukoresha link ya Dashboard kuri site ugiye gukora:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Ushobora kubona ibindi menu by'ingenzi mu kera ry'umunsi. Gukoresha iyo menu kugira ngo utangire ku ifurugura ya **Settings**:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Nyuma, kuri **Settings**, ugushobora gushaka tab ya WP-Config, nyuma uburyo bwo gushaka "Additional wp-config.php content" kuri iyo tab:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Mu gihe cyo gutangira Ultimate Multisite, ukeneye gukoresha sunrise constant ku gihe cyo cy'ubwujude. Gukora ibi byo mu buryo bwiza ni gucunga umuganda (new line) kandi gukopya igice kintu cyo mu gihe cyo kera:

define('SUNRISE', true);

Ibi ni ibyo, wari wumvawe. Rere ku wizard ya Ultimate Multisite kandi ugukoresha refresh kuri iyo page kugira ngo utangire uburyo bwo gukora.
