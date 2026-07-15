---
title: व्यवस्थापक पृष्ठ सिर्जनाकर्ता परिवर्तन विवरण
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Admin पृष्ठ Creator परिवर्तन विवरण

### संस्करण 1.9.0 - 2026-01-18 मा जारी {#version-190---released-on-2026-01-18}

* समाधान गरियो: सक्रिय गर्दा Fatal errors।
* पुनर्संरचना गरियो: Content source classes लाई उचित parent constructor initialization सहित Singleton trait प्रयोग गर्न
* समाधान गरियो: content type selector rendering हुनबाट रोक्ने Vue.js template compilation errors
* समाधान गरियो: छुटेका Vue data properties (template_id, external_link_url_embedable, external_link_url_checking)
* समाधान गरियो: पृष्ठ लोड हुँदा TinyMCE editor ठीकसँग initialize नहुने
* समाधान गरियो: Divi support file Composer मार्फत autoload नहुने
* समाधान गरियो: Divi support class मा बिग्रिएको PHP syntax
* सुधार गरियो: JavaScript asset organization र minification
* सुधार गरियो: नवीनतम WordPress र page builder संस्करणहरूसँग compatibility

= संस्करण: 1.8.8 - 2025-09-28 मा जारी

* prefix लाई ultimate-multisite मा rename गर्नुहोस्; text domain update गर्नुहोस्; version bump।

### संस्करण 1.8.7 - 04/10/2023 {#version-187---04102023}

* समाधान गरियो: नयाँ admin पृष्ठ थप्ने प्रयास गर्दा Fatal error;
* समाधान गरियो: Oxygen stylesheets prefix सँग conflict;

### संस्करण 1.8.6 - 09/08/2023 {#version-186---09082023}

* थपियो: मुख्य साइट वा हालको sub-site बाट data display गर्ने option थपियो।
* थपियो: WordPress Block Editor (Gutenberg) का लागि support थपियो।
* समाधान गरियो: Brizy page assets load नहुने issue समाधान गरियो।

### संस्करण 1.8.5 - 09/12/2020 {#version-185---09122020}

* समाधान गरियो: menu hide गर्न Screen Options सँगको issue नहट्ने;

### संस्करण 1.8.4 - 11/11/2020 {#version-184---11112020}

* समाधान गरियो: Multisite Ultimate v2 का लागि support;

### संस्करण 1.8.3 - 01/10/2020 {#version-183---01102020}

* समाधान गरियो: अघिल्लो build बाट Beaver Builder सँगका incompatibilities;
* समाधान गरियो: WP 5.5 सँग margin inconsistencies;

### संस्करण 1.8.2 - 21/09/2020 {#version-182---21092020}

* समाधान गरियो: WP 5.5 सँग साना incompatibilities;

### संस्करण 1.8.1 - 05/08/2020 {#version-181---05082020}

* समाधान गरियो: Brizy 2.0 सँग incompatibility;
* समाधान गरियो: menu list बनाउँदा साना performance issues;

### संस्करण 1.8.0 - 27/04/2020 {#version-180---27042020}

* समाधान गरियो: no margin mode चयन नभएको बेला top-bar मुनि notices लुक्ने;
* थपियो: Custom pages ले अब एकै समयमा धेरै WordPress admin top-level र sub-pages replace गर्न सक्छन्;
* थपियो: Admins ले अब WP Admin Pages PRO प्रयोग गरेर admin pages hide गर्न सक्छन्;

### संस्करण 1.7.9 - 01/04/2020 {#version-179---01042020}

* समाधान गरियो: Brizy 1.10.118 र माथिका संस्करणले admin pages मा SVG support बिगार्ने;

### संस्करण 1.7.8 - 26/03/2020 {#version-178---26032020}

* समाधान गरियो: French प्रयोग गर्दा Editor page बिगार्ने escaping error;

### संस्करण 1.7.7 - 04/03/2020 {#version-177---04032020}

* समाधान गरियो: Brizy Builder सँग सानो incompatibility;
* सुधार गरियो: Freemius SDK लाई 2.3.2 मा update गरियो;

### संस्करण 1.7.6 - 10/02/2020 {#version-176---10022020}

* समाधान गरियो: Dashboard Widgets मा bottom-right corner मा रहेको Admin Page edit button काम नगर्ने;
* समाधान गरियो: Astra सँग सानो incompatibility;
* समाधान गरियो: Brizy को नयाँ संस्करणले compatibility बिगार्ने;

### संस्करण 1.7.5 - 14/12/2019 {#version-175---14122019}

* समाधान गरियो: Replace Page option मा menu items populate गर्न नयाँ edge-case handler थपियो;
* समाधान गरियो: Elementor fonts काम नगर्ने;
* सुधार गरियो: Account page बाट संवेदनशील info hide गर्न support गर्ने गरी Freemius SDK update गरियो;

### संस्करण 1.7.4 - 29/11/2019 {#version-174---29112019}

* समाधान गरियो: WooCommerce Memberships सँग incompatibility;
* समाधान गरियो: Oxygen Builder tab component काम नगर्ने;
* समाधान गरियो: Beaver Themer काम नगर्ने;

### संस्करण 1.7.3 - 12/07/2019 {#version-173---12072019}

* समाधान गरियो: parent अर्को admin page type मा convert हुँदा pages हराउने;
* सुधार गरियो: Admin Page types बीच राम्रो list table dividers;
* सुधार गरियो: plugin को सम्पूर्ण codebase को Security Review;
* सुधार गरियो: दिइएको menu/content source type का लागि feature available नभएको बेला Separator tab warning मा note;

### संस्करण 1.7.2 - 01/07/2019 {#version-172---01072019}

* समाधान गरियो: Freemius SDK version लाई 2.3.0 मा update गरियो;
* समाधान गरियो: Flywheel सँग incompatibility issue;

### संस्करण 1.7.1 - 27/06/2019 {#version-171---27062019}

* समाधान गरियो: Welcome Widget अब सबै roles लाई displayed हुन्छ;
* समाधान गरियो: https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/ मा documented filter मार्फत menu hide भइरहेको छ भने Admin Pages menu hide/display गर्ने Screen Option थपिँदैन
* सुधार गरियो: Admin Pages menus hide गर्दा अब builder UI मा Beaver Builder saved templates list बाट created templates पनि hide हुन्छन्;
* थपियो: admin pages bulk activate र deactivate गर्ने options;
* थपियो: मुख्य साइटमा पनि pages display गर्ने option;
* थपियो: Replace mode मा top र sub level menu labels rename गर्ने option;

### संस्करण 1.7.0 - 04/06/2019 {#version-170---04062019}

* समाधान: Oxygen templates नदेखिने issues;
* थपियो: Widget Creation लाई support!

### संस्करण 1.6.1 - 22/05/2019 {#version-161---22052019}

* समाधान गरियो: Typos;
* समाधान गरियो: उही order value भएका sub-menu pages ले अघिल्ला sub-menu items override गर्ने;
* समाधान गरियो: Duplication ले अब duplicated page को slug reset गर्छ;
* सुधार गरियो: pt_BR र es_ES po files update गरियो;
* सुधार गरियो: List table ले अब custom pages को name लाई parent pages का रूपमा पनि list गर्छ;

### संस्करण 1.6.0 - 21/05/2019 {#version-160---21052019}

* थपियो: External Links ले अब iframe loading पनि support गर्छन्;

### संस्करण 1.5.5 - 17/05/2019 {#version-155---17052019}

* समाधान गरियो: page delete वा duplicate हुँदा warning message throw हुने;
* समाधान गरियो: Permission settings Admins मा लागू नहुने;

### संस्करण 1.5.4 - 08/05/2019 {#version-154---08052019}

* समाधान गरियो: Sliced Invoices सँग incompatibilities;
* समाधान गरियो: Oxygen सँग सानो issue;
* समाधान गरियो: नयाँ admin page title field मा placeholder key-up हुँदा नहट्ने;

### संस्करण 1.5.3 - 03/05/2019 {#version-153---03052019}

* समाधान गरियो: Advanced Custom Field option pages सँग incompatibility;
* थपियो: specific users लाई custom admin pages का targets को रूपमा add गर्ने option;

### संस्करण 1.5.2 - 30/04/2019 {#version-152---30042019}

* समाधान गरियो: Brizy का नयाँ versions सँग incompatibilities;
* थपियो: Spanish translation थपियो - John Rozzo को सौजन्यमा। धन्यवाद, John!
* थपियो: Oxygen Builder लाई Beta support;

### संस्करण 1.5.1 - 15/04/2019 {#version-151---15042019}

* समाधान गरियो: Normal र HTML editors मा placeholders सँग issue;
* समाधान गरियो: Admin Pages Tools -> Export मा नदेखिने;
* समाधान गरियो: scripts र styles केवल हाम्रा आफ्नै pages मा load गर्ने;
* थपियो: Super Admins ले अब Admin Pages duplicate गर्न सक्छन्;

### संस्करण 1.5.0 - 29/03/2019 {#version-150---29032019}

* सुधारिएको: Sentry ले पत्ता लगाएका साना बगहरू;
* सुधारिएको: Edit Admin पृष्ठ स्क्रिनमा Delete बटनले काम नगरेको;
* सुधारिएको: Standard BB license पनि समर्थित छ भन्ने स्पष्ट पार्न BeaverBuilder बटन परिवर्तन गरियो;
* थपिएको: प्रशासकहरूले submenu हरूको क्रम पनि सेट गर्न सक्छन्;
* थपिएको: Replace page mode ले अब उपलब्ध सबै मेनु वस्तुहरूलाई समर्थन गर्छ;

### संस्करण 1.4.0 - 14/02/2019 (stand-alone) & 27/02/2019 (add-on) {#version-140---14022019-stand-alone--27022019-add-on}

* थपिएको: https://wpadminpagespro.com मा Stand-alone plugin का रूपमा सुरु गरियो
* थपिएको: पृष्ठ सिर्जना प्रक्रिया सकिएपछि मेनुबाट Admin Pages मेनु वस्तु हटाउने विकल्प;
* थपिएको: व्यवस्थापक पृष्ठहरूबाट admin notices हटाउने विकल्प;
* Added: Content processing, so you can place placeholders like {{user:first_name}} and have it be automatically replaced with the user first_name meta field;
* थपिएको: Inline Editor;
* थपिएको: भविष्यमा नयाँ पृष्ठ बिल्डरहरू/सामग्री स्रोतहरू थप्न सजिलो बनाउन सामग्री स्रोत parent class एकीकृत गरियो;
* थपिएको: External URLs लाई समर्थन;

### संस्करण 1.3.0 - 15/01/2019 {#version-130---15012019}

* सुधारिएको: multisite वातावरणहरूमा Admin Pages मुख्य-site मा देखिँदैनन्;
* सुधारिएको: subsites को export स्क्रिनबाट Multisite Ultimate custom post types हटाइयो;
* थपिएको: पृष्ठहरू सिर्जना गर्दा network admins का लागि quick actions सहितको top-bar;
* थपिएको: ठूलो! Elementor समर्थन!
* थपिएको: ठूलो! Brizy समर्थन!

### संस्करण 1.2.1 - 17/11/2018 {#version-121---17112018}

* सुधारिएको: plugin लाई Multisite Ultimate 1.9.0 सँग compatible बनाउँदै;

### संस्करण 1.2.0 - 10/09/2018 {#version-120---10092018}

* थपिएको: यदि wp-config.php मा WU_APC_ALLOW_PHP_PROCESSING true मा सेट गरिएको छ भने PHP समर्थन थपियो। यसले PHP को eval प्रयोग गर्दैन, तर यसले अझै पनि सुरक्षा कमजोरीहरू निम्त्याउन सक्छ। यसलाई सावधानीपूर्वक प्रयोग गर्नुहोस्;
* सुधारिएको: Add-on plugin updater;
* सुधारिएको: updates server का लागि नयाँ URL;

### संस्करण 1.1.2 - 16/08/2018 {#version-112---16082018}

* सुधारिएको: WP Engine सँगको सानो समस्या;

### संस्करण 1.1.1 - 16/08/2018 {#version-111---16082018}

* सुधारिएको: replace pages मा अनुमतिहरू सही रूपमा लागू नभएको;

### संस्करण 1.1.0 - 15/08/2018 {#version-110---15082018}

* थपिएको: Beaver Builder templates अब समर्थित छन्! तपाईं आफ्नो मनपर्ने page builder प्रयोग गरेर custom admin pages सिर्जना गर्न सक्नुहुन्छ;
* थपिएको: अब WordPress का default admin pages को सामग्री पनि प्रतिस्थापन गर्न सम्भव छ;
* थपिएको: अब default WordPress admin pages को माथि वा तल सिर्जना गरिएको सामग्री जोड्न पनि सम्भव छ;

### 0.0.1 {#001}
- प्रारम्भिक विमोचन
