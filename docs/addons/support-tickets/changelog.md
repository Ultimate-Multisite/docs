---
title: "Support Tickets Changelog"
sidebar_position: 99
---

# Support Tickets Changelog

### 1.0.4 - 2026-05-05
* Improved: Removed vendor/ directory from Git tracking (already covered by .gitignore), reducing repository size
* Improved: Tested up to WordPress 7.0

### 1.0.3 - 2026-05-01
* Fix: Accept null values in nullable ticket model setters
* Fix: Store all tickets in global network-wide tables for proper multisite support
* Fix: Hide staff fields and fix blank-page redirect on customer new-ticket form
* Fix: Replace undefined add_meta() calls with correct update_meta() for metadata storage
* Fix: Replace unregistered capability check with correct wu_view_all_support_tickets
* Fix: Add missing AJAX handlers for ticket status, assignment, and quick-edit actions
* Fix: Correct method name for staff response detection in ticket views
* Fix: Consolidate duplicate reply handlers and align nonce action names
* Fix: Add missing frontend view for [wu_submit_ticket] shortcode
* Fix: Add missing user_id column and fix Support_Ticket::get_user_id() method
* Fix: Remove extra double-quote in priority filter option tag
* Fix: Add network admin ticket management panel for super admins
* Improved: Consolidate admin CSS into a single external stylesheet
* Improved: Remove Settings submenu from subsite admin menu
* Improved: Conditionally load frontend assets only on support ticket pages
* Improved: Skip plugin autoloader when Bedrock root autoloader already loaded dependencies

### 1.0.2 - 2025-12-11
* Added: Full ticket viewing functionality for admin and frontend
* Added: AJAX handler for ticket reply submissions
* Added: Support for ticket reply functionality with proper form handling
* Added: Proper notice display for ticket submissions and replies in admin
* Added: Automatic ticket association with current user for customer self-submissions
* Added: Security enhancement to prevent customers from overriding ticket ownership
* Added: Missing helper functions (wu_format_date, wu_user_can_view_ticket, etc.)
* Added: Proper file attachment download and handling
* Added: Email notification system for ticket replies and status changes
* Fixed: Ticket reply form now includes necessary ticket ID
* Fixed: Notice visibility issues in admin ticket views
* Fixed: Syntax errors in support ticket functions
* Improved: Database structure with proper query and schema classes for responses and attachments
* Improved: Migration to real properties instead of attributes for ticket models

### 1.0.1 - 2025-09-28
* Updated: Renamed prefix to ultimate-multisite for consistency
* Updated: Text domain standardization
* Fixed: Minor bug fixes and improvements

### 1.0.0 - 2025-09-01
* Initial release
* Complete ticket management system
* Multi-level access control
* Threaded conversation system
* File attachment support
* Email notification system
* Admin and customer interfaces
* Statistics and reporting
