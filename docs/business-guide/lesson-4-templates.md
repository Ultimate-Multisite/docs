---
title: "Lesson 4: Building Niche Templates"
sidebar_position: 5
---

# Lesson 4: Building Niche Templates

Templates are the core of your niche value proposition. A fitness studio owner who signs up and sees a site that already looks like a fitness website -- with class schedules, trainer profiles, and the right imagery -- is far more likely to stay than one who sees a blank canvas.

## Where We Left Off

We have a working FitSite network with Ultimate Multisite installed and configured. Now we build the templates that make FitSite feel purpose-built for fitness businesses.

## Why Niche Templates Matter

Generic templates force your customers to do the hard work: figuring out what pages they need, what content structure works, and how to make it look right for their industry. Niche templates eliminate that friction.

A fitness studio owner who signs up to FitSite should see:

- A homepage that looks like a fitness studio website
- Pages for classes, schedules, trainers, and pricing already created
- Imagery and placeholder content that matches their industry
- A design that feels professional and on-brand for fitness

They fill in their details. They do not start from scratch.

## Planning Your Templates

Before building, decide what templates to offer. For FitSite, we will create three:

### Template 1: Studio Essential

For small studios and personal trainers.

- **Homepage** with hero image, class highlights, and call to action
- **About** page with studio story and mission
- **Classes** page with schedule layout
- **Trainers** page with profile cards
- **Contact** page with location map and form
- **Clean, modern design** with fitness-appropriate color scheme

### Template 2: Gym Pro

For established gyms with more services.

- Everything in Studio Essential, plus:
- **Membership** page with pricing table
- **Gallery** page for facility photos
- **Blog** section for fitness tips and news
- **Testimonials** section on homepage
- **More prominent branding** options

### Template 3: Fitness Chain

For multi-location operations.

- Everything in Gym Pro, plus:
- **Locations** page with multiple facility listings
- **Franchise/location** subpage template
- **Centralized branding** with location-specific details
- **Staff directory** across locations

## Building a Template Site

In Ultimate Multisite, a template is simply a WordPress site configured the way you want new customer sites to look. Here is how to create one:

### Step 1: Create the Template Site

1. Navigate to **Sites > Add New** in your network admin
2. Create a site named `template-studio-essential`
3. This site becomes your working canvas

### Step 2: Install and Configure the Theme

Switch to the template site dashboard and:

1. Activate a theme suitable for fitness businesses
2. Configure the theme settings, colors, and typography
3. Set up the header and footer with fitness-appropriate navigation

:::tip Theme Selection
Choose a theme that is flexible enough to look good for fitness but not so complex that your customers cannot manage it. Themes like Astra, GeneratePress, or Kadence work well because they are lightweight, customizable, and well-supported.
:::

### Step 3: Create the Pages

Build out each page with:

- **Placeholder content** that reads naturally for fitness ("Welcome to [Studio Name]" not "Lorem ipsum")
- **Placeholder images** from free stock photo sites showing fitness activities
- **Functional layouts** using the page builder or block editor

Make the placeholder content instructional where possible. Instead of generic filler text, write content like: "Replace this with a brief description of your studio and what makes it special. Mention your training philosophy, years of experience, or what clients can expect."

### Step 4: Configure Plugins

Install and activate plugins that fitness studios need:

- A booking or scheduling plugin (if applicable to your plan tier)
- A contact form plugin
- An SEO plugin (pre-configured with fitness-relevant defaults)

### Step 5: Mark as Template

1. Navigate to **Ultimate Multisite > Sites**
2. Edit the template site
3. Enable the **Site Template** toggle

Repeat this process for each template you want to offer.

## Template Quality Checklist

Before making a template available, verify:

- [ ] All pages load correctly and look professional
- [ ] Placeholder content is helpful and niche-specific
- [ ] Images are appropriate and properly licensed
- [ ] Mobile responsiveness works on all pages
- [ ] Navigation is logical and complete
- [ ] Contact forms work
- [ ] No broken links or missing assets
- [ ] Page load speed is acceptable

## The FitSite Network So Far

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL
├── Domain mapping configured
├── Site Templates
│   ├── Studio Essential (small studios, trainers)
│   ├── Gym Pro (established gyms)
│   └── Fitness Chain (multi-location)
└── Ready for plan configuration (next lesson)
```

## What We Built This Lesson

- **Three niche-specific templates** designed for different fitness business sizes
- **Fitness-appropriate content and imagery** that makes the platform feel purpose-built
- **Instructional placeholder content** that guides customers through customization
- **A quality checklist** to ensure templates are production-ready

---

**Next:** [Lesson 5: Designing Your Plans](lesson-5-plans) -- we create product tiers that match how fitness businesses actually operate.
