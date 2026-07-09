---
title: साइट निर्यातक परिवर्तन विवरण
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# साइट निर्यातकर्ता परिवर्तन अभिलेख {#site-exporter-changelog}

संस्करण: 1.0.6 - 2026-05-11 मा जारी
* नयाँ: साइट निर्यातहरूले अब self-booting index.php समेट्छन्, त्यसैले ZIP छुट्टै plugin स्थापना बिना नयाँ host मा स्थापना गर्न सकिन्छ
* नयाँ: Network निर्यातले प्रशासकहरूलाई Site Export प्रशासन पृष्ठबाट सबै subsites लाई एउटै archive मा निर्यात गर्न दिन्छ

संस्करण: 1.0.5 - 2026-05-05 मा जारी
* सुधार: get_config जस्ता unmocked विधिहरू सम्हाल्न WP_CLI polyfill stub मा __callStatic थपियो, जसले परीक्षण bootstrap विफलताहरू रोक्छ

संस्करण: 1.0.4 - 2025-11-25 मा जारी

* Ultimate Multisite 2.4 सँग अनुकूलता सुधार।

संस्करण: 1.0.2 - 2025-09-28 मा जारी

* prefix लाई ultimate-multisite मा नाम परिवर्तन; text domain अद्यावधिक; संस्करण वृद्धि।

### संस्करण 1.0.1 - 2023-08-09 मा जारी {#version-101---released-on-2023-08-09}

* सुधारिएको: अब importer फाइलको सही file path प्राप्त भएको सुनिश्चित गर्छ।
* सुधारिएको: import गर्दा त्रुटिहरू रोक्न object cache असक्षम गरियो।
* सुधारिएको: importer plugin डाउनलोड link काम नगर्ने समस्या समाधान गरियो।

### संस्करण 1.0.0 - 2022-12-23 मा जारी {#version-100---released-on-2022-12-23}

* सुधारिएको: निर्यात form popup लोड नभएको;
* सुधारिएको: निर्यात पृष्ठमा Javascript फाइलहरू लोड नभएको;
* आन्तरिक: नयाँ build प्रक्रिया;

### संस्करण 1.0.0-beta.4 - 2022-01-13 मा जारी {#version-100-beta4---released-on-2022-01-13}

* आन्तरिक: hooks र filters generator थपियो;
* आन्तरिक: developer quality of life का लागि WP Ultimo stubs थपियो;
