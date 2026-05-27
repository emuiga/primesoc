# Contentful Content Model — Primesoc

This document describes the Contentful content types needed to drive dynamic content on the Primesoc website.

---

## 1. Job Listing (`jobListing`)

Used on the **Careers** page (`/careers`) to display open roles.

| Field         | Field ID      | Type          | Required | Notes                                      |
|---------------|---------------|---------------|----------|--------------------------------------------|
| Job Title     | `title`       | Short Text    | ✅       | e.g. "SOC Analyst (Tier 2)"               |
| Department    | `department`  | Short Text    | ✅       | e.g. "Security Operations", "VAPT", "CTI" |
| Employment Type | `type`      | Short Text    | ✅       | "Full-Time", "Part-Time", "Contract"       |
| Location      | `location`    | Short Text    | ✅       | e.g. "Nairobi, Kenya / Remote"             |
| Description   | `description` | Rich Text     | ✅       | Full job description                       |
| Requirements  | `requirements`| Rich Text     | ✅       | List of qualifications / must-haves        |
| Application URL | `applyUrl`  | Short Text    | ❌       | External URL or leave blank for /contact   |
| Is Active     | `isActive`    | Boolean       | ✅       | Toggle to show/hide without deleting       |
| Published Date | `publishedDate` | Date & Time | ✅      | Used for sorting                           |

**Notes:**
- Filter by `isActive = true` when querying.
- Sort by `publishedDate` descending to show newest first.

---

## 2. Blog / Insights Post (`blogPost`)

For a future Insights / Threat Intelligence blog.

| Field         | Field ID      | Type          | Required | Notes                                      |
|---------------|---------------|---------------|----------|--------------------------------------------|
| Title         | `title`       | Short Text    | ✅       |                                            |
| Slug          | `slug`        | Short Text    | ✅       | URL-safe, e.g. "kenya-ransomware-2025"    |
| Summary       | `summary`     | Long Text     | ✅       | Used for cards and meta description        |
| Body          | `body`        | Rich Text     | ✅       | Full article                               |
| Cover Image   | `coverImage`  | Media (Image) | ✅       |                                            |
| Category      | `category`    | Short Text    | ✅       | e.g. "Threat Intelligence", "GRC", "SOC"  |
| Author        | `author`      | Short Text    | ✅       | e.g. "Primesoc Team"                      |
| Published Date | `publishedDate` | Date & Time | ✅      |                                            |
| Is Featured   | `isFeatured`  | Boolean       | ❌       | Pin to top of insights feed                |

---

## 3. Case Study / Client Story (`caseStudy`)

Showcase client wins and real-world impact.

| Field         | Field ID      | Type          | Required | Notes                                      |
|---------------|---------------|---------------|----------|--------------------------------------------|
| Title         | `title`       | Short Text    | ✅       | e.g. "How Primesoc Stopped a Ransomware Attack" |
| Slug          | `slug`        | Short Text    | ✅       |                                            |
| Industry      | `industry`    | Short Text    | ✅       | e.g. "Banking", "Healthcare", "Government" |
| Challenge     | `challenge`   | Rich Text     | ✅       | What the client faced                      |
| Solution      | `solution`    | Rich Text     | ✅       | What Primesoc did                          |
| Outcome       | `outcome`     | Rich Text     | ✅       | Measurable results                         |
| Services Used | `services`    | Short Text (list) | ✅   | e.g. ["SOC", "VAPT"]                      |
| Cover Image   | `coverImage`  | Media (Image) | ❌       |                                            |
| Published Date | `publishedDate` | Date & Time | ✅      |                                            |

---

## 4. Team Member (`teamMember`)

For an About page team section.

| Field         | Field ID      | Type          | Required | Notes                                      |
|---------------|---------------|---------------|----------|--------------------------------------------|
| Full Name     | `name`        | Short Text    | ✅       |                                            |
| Role / Title  | `role`        | Short Text    | ✅       | e.g. "Head of Threat Intelligence"        |
| Bio           | `bio`         | Long Text     | ✅       |                                            |
| Photo         | `photo`       | Media (Image) | ✅       | Square crop recommended                    |
| LinkedIn URL  | `linkedinUrl` | Short Text    | ❌       |                                            |
| Order         | `order`       | Integer       | ✅       | Controls display order                     |

---

## 5. Testimonial (`testimonial`)

Client quotes for the homepage or about page.

| Field         | Field ID      | Type          | Required | Notes                                      |
|---------------|---------------|---------------|----------|--------------------------------------------|
| Quote         | `quote`       | Long Text     | ✅       |                                            |
| Client Name   | `clientName`  | Short Text    | ✅       |                                            |
| Client Title  | `clientTitle` | Short Text    | ✅       | e.g. "CISO, Equity Bank"                  |
| Company Logo  | `logo`        | Media (Image) | ❌       |                                            |
| Is Active     | `isActive`    | Boolean       | ✅       |                                            |

---

## Integration Notes

1. Install the Contentful SDK: `npm install contentful`
2. Add to `.env.local`:
   ```
   CONTENTFUL_SPACE_ID=your_space_id
   CONTENTFUL_ACCESS_TOKEN=your_delivery_access_token
   ```
3. Create a `/lib/contentful.ts` client and fetch functions per content type.
4. The Careers page is already wired to show a placeholder — connect `jobListing` entries to replace it.
