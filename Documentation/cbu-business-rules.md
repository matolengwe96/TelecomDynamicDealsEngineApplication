# CBU Business Rules Documentation

## Document Purpose

This document outlines the comprehensive business rules that govern deal creation, pricing, and approval workflows for the Consumer Business Unit (CBU) in the Deals Data Engine (DDE) system.

**Target Audience:** Business stakeholders, product managers, deal managers, and technical teams

**Scope:** Consumer Business Unit (CBU) only - VBU (Vodacom Business Unit) has different rules

---

## Table of Contents

1. [Key Terms and Definitions](#key-terms-and-definitions)
2. [Proto Headline Generation Rules](#proto-headline-generation-rules)
   - [Device Eligibility Rules](#1-device-eligibility-rules)
   - [Tariff Matching Rules](#2-tariff-matching-rules)
   - [Contract Term Rules](#3-contract-term-rules)
   - [Pricing and Calculation Rules](#4-pricing-and-calculation-rules)
   - [Deal Quality and Policy Rules](#5-deal-quality-and-policy-rules)
   - [Pricing Consistency Rules](#6-pricing-consistency-rules)
   - [Technical Specification Rules](#7-technical-specification-rules)
   - [Tariff Eligibility Rules](#8-tariff-eligibility-rules)
   - [Insurance and Replacement Rules](#9-insurance-and-replacement-rules)
   - [Workflow and Approval Governance Rules](#10-workflow-and-approval-governance-rules)
   - [SIM-Only Deal Specific Rules](#11-sim-only-deal-specific-rules)
   - [Data Quality and Integrity Rules](#12-data-quality-and-integrity-rules)
3. [Headline Generation Rules](#headline-generation-rules)
4. [Deal Approval Rules](#deal-approval-rules)
5. [Quick Reference Guide](#quick-reference-guide)

---

## Key Terms and Definitions

### Financial Terms

**CTD (Conditional Trade Discount):**
- Discount provided by OEMs (Original Equipment Manufacturers)
- **Conditional** on meeting sales targets for specific devices
- Used when OEMs want to push more sales of particular models
- Reduces device cost, making deals more affordable
- Example: OEM offers R500 CTD to move more stock of a specific phone model

**CIB (Connection Incentive Bonus):**
- Incentive bonus for connecting customers to specific tariffs
- Reduces the financeable cost of the device
- Tariff-specific component that helps offset device costs

**CTC (Cost to Connect):**
- Net cost to the company to connect a new customer
- Key profitability metric: **Lower CTC = More profitable**
- Formula: `Device Cost - CTD - (Recovery from customer financing)`
- Used to determine approval requirements

**Efficiency:**
- Cost-to-revenue ratio expressed as percentage
- Formula: `(CTC / Total Subscription Revenue) × 100`
- **Higher efficiency = BAD** (higher cost relative to revenue = less profitable)
- **Lower efficiency = GOOD** (lower cost relative to revenue = more profitable)
- Think of it as: "What % of subscription revenue is eaten up by connection cost?"
- Used to determine approval levels

### Product Terms

**VSP (Vodacom Supplied Product):**
- Supply agreement type for devices
- Only VSP devices are eligible for deals
- Ensures supply chain control and direct supplier relationships

**MBB (Mobile Broadband):**
- Data-focused tariff type
- Used for data deals and router deals

**FWA (Fixed Wireless Access):**
- Home/business internet service using mobile network
- Different rules than standard mobile deals

**CID (Commercial ID):**
- Unique identifier assigned to each device for commercial purposes
- Used to identify devices regardless of color or variant
- CID 404 = Special identifier for SIM-only deals (no physical device)

### Deal Types

**Proto-Headlines:**
- Draft deals that can be freely edited
- Used during OEM negotiations phase
- No approval workflow required for edits
- Can be deleted, modified, or recreated

**Headlines:**
- Official deals promoted from proto-headlines
- Require approval workflow to change
- Ready for channel deal generation
- Eventually loaded to external systems

**Deal Sub-Types:**

1. **Financed Deals:**
   - Customer pays MORE than the tariff subscription
   - Customer finances the device cost over contract term
   - Monthly payment = Subscription + Finance installment
   - Example: R599/month tariff + R200/month device = R799/month total

2. **Reduced Subscription Deals:**
   - Customer pays LESS than the tariff subscription
   - Device subsidized; subscription reduced
   - Monthly payment = Subscription - Discount
   - Example: R599/month tariff - R100/month discount = R499/month total

3. **Free Deals:**
   - Customer pays EXACTLY the tariff subscription
   - Device cost fully subsidized
   - Monthly payment = Subscription only
   - Example: R599/month tariff, device free, pay R599/month

---

## Proto Headline Generation Rules

Proto headline generation is a relatively complex process in the DDE system, implementing 12 categories of business rules to ensure only profitable, viable deals are created.

### Rule Categories Overview

| Category | Purpose | Complexity |
|----------|---------|------------|
| Device Eligibility | Determine which devices can have deals | 6 rules |
| Tariff Matching | Match devices to appropriate tariffs | 4 rules |
| Contract Terms | Define which contract lengths are offered | 4 rules |
| Pricing & Calculation | Calculate deal prices and profitability | Complex |
| Deal Quality | Ensure deals are viable and compliant | 3 rules |
| Pricing Consistency | Maintain price stability across cycles | 2 rules |
| Technical Specs | Ensure technical compatibility | 2 rules |
| Tariff Eligibility | Define which tariffs can be used | 5 rules |
| Insurance | Calculate replacement values | 1 rule |
| Approval Governance | Determine approval requirements | 3 rules |
| SIM-Only Specific | Special rules for SIM-only deals | 4 rules |
| Data Quality | Ensure data completeness | 2 rules |

---

### 1. Device Eligibility Rules

**Business Purpose:** Determine which devices are eligible for deals based on supply agreements, channel availability, and business policies.

#### Rule 1.1: VSP Supply Agreement Requirement

**What:** Only devices supplied through VSP (Vodacom Supplied Product) agreements are eligible

**Why:** The company only creates deals for devices it has direct supply agreements with

**Business Logic:**
- Device must have at least one supplier marked as 'TRADE' (VSP supplier)
- Device must have NO suppliers marked as anything other than 'TRADE'

**Examples:**
- ✅ Device with only TRADE suppliers → Eligible
- ❌ Device with TRADE and other suppliers → Not eligible (mixed supply)
- ❌ Device with no TRADE suppliers → Not eligible (non-VSP)

---

#### Rule 1.2: Prevent Duplicate Generation

**What:** Don't generate deals that already exist for the same device, term, and tariff type

**Why:** Prevents duplicate deals that would confuse users and waste system resources

**Business Logic:** Exclude devices that already have proto-headlines for:
- Same cycle
- Same term (e.g., 24 months)
- Same tariff type (Data or Voice)
- Same channel (Generics)

**Examples:**
- ✅ Device with 24-month Data deal → Can still create 24-month Voice deal
- ❌ Device with 24-month Data deal → Cannot create another 24-month Data deal

---

#### Rule 1.3: Channel Availability Requirement

**What:** Only include devices that are available in at least one sales channel

**Why:** No point creating deals for devices that cannot be sold through any channel

**Business Logic:** A device must be marked as available (`is_active = 'Y'`) in at least one of:
- Direct channel (1)
- Dealers & Franchise (2)
- National Chains (3)
- Online (4)
- Onyx (5)

**Examples:**
- ✅ Device available in Direct and Online → Eligible
- ❌ Device disabled in all channels → Not eligible

---

#### Rule 1.4: Permanently Rejected Deals Exclusion

**What:** Never regenerate device-tariff combinations that were "entirely rejected" (status 99)

**Why:** Status 99 indicates a fundamental business problem:
- May violate regulatory requirements
- May conflict with supplier agreements
- May have market positioning issues
- May be unprofitable under any scenario

**Business Logic:** Check all historical data for status 99, exclude those combinations forever

**Examples:**
- ❌ Previous cycle: "Budget Phone X + Unlimited Premium Tariff" → Status 99 (mismatched positioning)
  - Current cycle: This combination will NEVER be generated again
- ✅ "Budget Phone X + Basic Tariff" → Can be generated (different tariff)

**Impact:** Prevents wasting time reviewing deals that are known to be unsuitable

---

#### Rule 1.5: Device Type Segregation

**What:** Separate SIM-only deals from physical device deals

**Why:** SIM-only deals have different business rules, pricing, and approval requirements

**Business Logic:**
- CID 404 = Special identifier for SIM-only deals (no physical device)
- For Data/Voice device deals: Exclude CID 404
- For SIM-only deals: Include ONLY CID 404

**Examples:**
- Data deal generation: Excludes CID 404 → Only physical devices
- SIM-only deal generation: Includes CID 404 → Only SIM-only offerings

---

#### Rule 1.6: Generic Channel Only for Proto-Headlines

**What:** All proto-headlines are created for the Generic channel (channel_id = 0)

**Why:** Proto-headlines are templates that will later be adapted for specific channels

**Business Logic:** Channel-specific variations are generated later from these generic proto-headlines

**Example:**
- Proto-headline: iPhone 15 + 5GB → Generic (channel 0)
- Later generates: Direct version, Dealer version, Online version, etc.

---

### 2. Tariff Matching Rules

**Business Purpose:** Match each device to the appropriate tariff(s) based on device type, price point, and business policies to ensure profitable and marketable combinations.

#### Rule 2.1: Router-Specific Tariff Matching

**What:** Routers (mobile WiFi hotspots) must be paired with data tariffs specifically configured for routers

**Why:** 
- Routers have different usage patterns than phones
- Require specific data allowances
- Pairings are strategically set by product team

**Business Logic:**
1. Identify device as a router (object type contains 'R')
2. Only use active routers (`is_trading = 'Y'` and `is_active = 'Y'`)
3. Look up pre-configured router-tariff pairings
4. Select most appropriate tariff:
   - MBB tariffs: by ranking (business priority)
   - Other tariffs: by subscription price
5. Use only the top-ranked tariff

**Examples:**
- Huawei 5G Router → "Unlimited 5G Home" (ranking 1)
- Samsung Mobile Hotspot → "100GB Data" (ranking 1)

**Why Pre-configured:** Product team strategically sets pairings based on router capabilities

---

#### Rule 2.2: Device Price-Based Tariff Matching

**What:** Phones, tablets, and accessories matched to tariffs based on price point

**Why:** Higher-priced devices get premium tariffs; lower-priced devices get basic tariffs

**Business Logic:**
1. Get device cost price (ex VAT) from tradelist
2. Find tariff range containing this price:
   - Example: R0-R2000, R2001-R5000, R5001-R10000, R10000+
3. Each range pre-mapped to specific tariffs
4. Filter for Data tariffs, Mobile broadband, correct term

**Examples:**
- iPhone 15 Pro (R18,000) → R10000+ range → "50GB Premium"
- Samsung A14 (R3,500) → R2001-R5000 → "10GB Value"

**Why:** Ensures customers get tariffs appropriate to device value

---

#### Rule 2.3: Voice Tariff Matching

**What:** For voice-only deals, match devices to voice tariffs by price

**Why:** Some customers want voice+SMS without large data allowances

**Business Logic:**
1. Similar to data matching, but uses voice tariffs
2. Match device cost to voice tariff ranges
3. Exclude free tariffs and customer-specific tariffs

**Examples:**
- Mid-range phone (R4,000) → "Unlimited Voice + 1GB"
- Budget phone (R1,500) → "500 Minutes"

---

#### Rule 2.4: SIM-Only Tariff Matching

**What:** SIM-only deals (CID 404) use broader tariff eligibility

**Why:** Customers bring their own devices; choice not constrained by device price

**Business Logic:**
- **Add-on SIMs:** Use price-range matching
- **Standard SIMs:** Allow ALL active tariffs with subscription > 0, ranking > 0

**Examples:**
- SIM-only Data → Maps to ALL data tariffs (1GB, 5GB, 10GB, 50GB, Unlimited)

**Why Broader:** Device doesn't constrain tariff choice

---

### 3. Contract Term Rules

**Business Purpose:** Determine which contract lengths (terms) are offered for each deal type based on market demand and business strategy.

#### Rule 3.1: Data Device Deals - Longer Terms Only

**What:** Data device deals (phone/tablet + data tariff) offered for 24 and 36-month contracts only

**Why:** 
- Data devices typically expensive (smartphones, tablets)
- Longer terms required to amortize device cost
- Customers expect data on these devices

**Terms:** 24 months, 36 months

**Not offered:** 12 months (too short for expensive devices), 48 months (too long for data plans)

**Examples:**
- ✅ iPhone 15 + 50GB Data tariff → 24-month or 36-month contract
- ❌ iPhone 15 + 50GB Data tariff → 12-month contract (not offered)

---

#### Rule 3.2: Voice Device Deals - All Terms

**What:** Voice device deals (phone + voice tariff) offered across all standard contract lengths

**Why:**
- Voice deals more flexible (various price points)
- Customers want voice options for all budgets and preferences
- 12-month appeals to budget-conscious
- 48-month appeals to lowest monthly payment seekers

**Terms:** 12, 24, 36, 48 months

**Examples:**
- ✅ Samsung A14 + Unlimited Voice → Available in 12, 24, 36, or 48-month contracts
- ✅ iPhone 15 + Unlimited Voice + 1GB → All terms available

---

#### Rule 3.3: SIM-Only Voice - Standard Term Only

**What:** SIM-only voice deals offered for 24-month contracts only

**Why:**
- 24 months is the market standard for SIM-only contracts
- Simplifies offering (one term = less confusion)
- Most popular term length for SIM-only customers

**Terms:** 24 months only

**Examples:**
- ✅ SIM-only + Unlimited Voice → 24-month contract
- ❌ SIM-only + Unlimited Voice → 12 or 36-month (not offered)

---

#### Rule 3.4: SIM-Only Data - Medium to Long Terms

**What:** SIM-only data deals offered for 24 and 36-month contracts

**Why:**
- Data SIMs typically used in tablets or secondary devices
- Longer commitments ensure customer retention
- 36 months appeals to customers seeking lower monthly rates

**Terms:** 24 months, 36 months

**Examples:**
- ✅ SIM-only + 50GB Data → 24-month or 36-month contract
- ❌ SIM-only + 50GB Data → 12-month or 48-month (not offered)

---

### 4. Pricing and Calculation Rules

**Business Purpose:** Calculate deal prices that are profitable for the company while being attractive to customers, and ensure appropriate approval oversight based on profitability metrics.

#### Configuration Parameters

These parameters control pricing across all deals:

| Parameter | Description | Example Value |
|-----------|-------------|---------------|
| VAT | Value Added Tax rate | 15% (1.15) |
| TMM | Term Multiplier - adjusts pricing by contract length | 1.05 for 24 months |
| MKP | Markup - profit margin on device cost | 1.15 = 15% markup |
| SSV | SIM Support Value - cost for SIM provision | R50 |
| CSV | Connection Support Value - cost for activation | R100 |
| AL1, AL2, AL3 | Approval Level thresholds based on efficiency | 10%, 20%, 30% |

---

#### The Pricing Calculation Process

**Step 1: Calculate Base Costs**

**a) Financeable Cost (FLC0):**
- **What:** The actual cost that needs to be financed or subsidized
- **Formula:** `Device Cost - CTD - CIB`
- **Why:** This is what remains after subtracting OEM discounts and connection incentives
- **Example:** R10,000 device - R500 CTD - R200 CIB = R9,300 financeable cost

**b) Subscription Price (SP):**
- **Formula:** `Tariff Subscription + Tariff Discount`
- **Example:** R599 subscription + R50 discount = R649 effective subscription

---

**Step 2: Calculate Deal Price**

**a) Monthly Interest (MI):**
- **What:** Interest/profit component added to monthly payment
- **Formula:** `Round(FLC0 × (Markup - 1) × VAT / Term)`
- **Why:** Company must profit from financing the device
- **Example:** R9,300 × 0.15 × 1.15 / 24 = R67/month

**b) Calculated Deal Price (DPC):**
- **What:** The algorithmically calculated ideal deal price
- **Formula:** `Round10((FLC0 × VAT / Term + MI + Subscription + Discount) × Term Multiplier)`
- **Example:** R447 (device/month) + R67 (interest) + R649 (subscription) × 1.05 = R1,220

**c) Final Deal Price (DP):**
- **What:** The actual deal price used
- **Formula:** `Previous Deal Price (if exists) OR Calculated Deal Price`
- **Why:** Maintains pricing consistency with previous cycle unless deliberately changed
- **Examples:**
  - Previous cycle: R1,199 → Use R1,199 (price consistency)
  - New device: No previous → Use calculated R1,220

---

**Step 3: Determine Deal Type**

**Formula:** `Deal Price - Subscription Price`

**Results:**
- **DP > SP → 'financed'** - Customer pays extra for device
- **DP < SP → 'reduced_sub'** - Device subsidized, subscription reduced
- **DP = SP → 'free'** - Fully subsidized

**Examples:**
- R1,220 deal - R649 subscription = R571 → **Financed** (customer finances device)
- R499 deal - R649 subscription = -R150 → **Reduced Sub** (device subsidized)

---

**Step 4: Calculate Profitability Metrics**

**a) Cost to Connect (CTC):**
- **What:** Net cost to company to connect this customer
- **Formula:** `Device Cost - CTD - (Recovery from financing if applicable)`
- **Detailed:**
  - Financed deals: `DVC - CTD - (FA × Term / VAT / Markup)`
  - Reduced subscription deals: `DVC - CTD` (no recovery)
- **Example:** Device R10,000 - CTD R500 - Recovered R6,840 = **R2,660 CTC**
- **Business Meaning:** Lower CTC = More profitable deal

---

**b) Efficiency (EFF):**
- **What:** Cost-to-revenue ratio expressed as percentage
- **Formula:** `(CTC / Total Subscription Revenue) × 100`
- **Interpretation:**
  - **Low efficiency (8%):** GOOD - Low cost relative to revenue = Profitable
  - **High efficiency (35%):** BAD - High cost relative to revenue = Unprofitable
- **Example:** CTC R2,660 / (R649 × 24 / 1.15) × 100 = 19.6% efficiency
- **Critical:** Used to determine approval requirements

---

**Step 5: Determine Approval Requirements**

**Efficiency-Based Thresholds:**

| Level | Efficiency Range | Meaning | Approval Needed |
|-------|-----------------|---------|-----------------|
| **0** | < 10% | Very profitable | Auto-approved |
| **1** | 10-20% | Standard profitability | Manager |
| **2** | 20-30% | Below-target profitability | Senior Manager |
| **3** | ≥ 30% | High-risk, low-profit | Executive |

**The Logic:**
- Low efficiency (8%) = Low cost relative to revenue = Profitable = Safe → No approval
- High efficiency (35%) = High cost relative to revenue = Unprofitable = Risky → Executive approval

**Examples:**
- Deal with 8% efficiency → Auto-approved (very profitable)
- Deal with 15% efficiency → Manager approval
- Deal with 35% efficiency → Executive approval (high risk)

---

### 5. Deal Quality and Policy Rules

**Business Purpose:** Ensure only viable, policy-compliant deals are generated, and handle special product categories appropriately.

#### Rule 5.1: Permanent Rejection Enforcement

**What:** Never regenerate device-tariff combinations with status 99

**Why:** Status 99 = "never create this deal again"
- May violate regulatory requirements
- May conflict with supplier agreements
- May have market positioning issues
- May be unprofitable under any scenario

**Impact:** Prevents wasting time reviewing fundamentally unsuitable deals

---

#### Rule 5.2: Fixed Wireless Access (FWA) Special Handling

**What:** FWA tariffs (home/business internet) can have reduced subscription deals for 36-month terms

**Why:** FWA products marketed differently:
- Longer commitment (36 months) standard for home internet
- Subsidized devices (routers) common in this market
- Different customer expectations

**Business Logic:** Allow reduced subscription deals for FWA tariffs on 36-month terms (exception to normal rules)

---

#### Rule 5.3: Router Data Tariff Requirement

**What:** Routers must be paired with Data SIM tariffs

**Why:** Routers are data-only devices (no voice capability)

**Business Logic:** Validate that router has tariff type 'DS' (Data SIM)

**Examples:**
- ✅ Huawei Router + 100GB Data tariff → Valid
- ❌ Huawei Router + Voice tariff → Invalid

---

### 6. Pricing Consistency Rules

**Business Purpose:** Maintain price stability for customers while allowing strategic price adjustments; provide visibility into pricing changes.

#### Rule 6.1: Price Carryover from Previous Cycle

**What:** If the exact same deal existed in the previous cycle, start with that price

**Why Business Critical:**
- **Customer Expectation:** Customers expect similar deals to have similar prices month-to-month
- **Market Stability:** Prevents erratic pricing that confuses market
- **Competitive Positioning:** Maintains competitive pricing positions
- **Price Change Control:** Any price changes require deliberate user action

**Business Logic:** Look up previous cycle for deals with:
- Same device basket
- Same tariff basket
- Same term
- Same tariff type
- Approved status (25) - only use prices from actually-sold deals

**Examples:**
- **December 2024:** iPhone 15 + 5GB, 24 months = R1,199 (approved and sold)
- **January 2025:** Same combo → Starts at R1,199 (not recalculated)
- **User Action:** User can change to R1,249 if strategic pricing shift needed

---

#### Rule 6.2: Historical Performance Reference

**What:** Include previous cycle's efficiency and CTC for comparison

**Why:** Enables users to see if deal profitability has changed

**Business Logic:**
- Carry forward: EFF_prev, CTC_prev
- Display alongside current metrics
- NOT used in new calculations (reference only)

**Example:**
- Previous: 18% efficiency, R2,500 CTC
- Current: 22% efficiency, R2,800 CTC
- **User sees:** Deal became less profitable

---

### 7. Technical Specification Rules

**Business Purpose:** Ensure deals are technically compatible and properly categorized.

#### Rule 7.1: Network Technology Assignment

**What:** Identify whether device supports 3G, 4G, or 5G networks

**Why:**
- Marketing needs to advertise network capability
- 5G devices command premium positioning
- Tariff compatibility

**Examples:**
- iPhone 15 Pro → 5G
- Samsung A14 → 4G
- Huawei 5G Router → 5G

---

#### Rule 7.2: Product Category-Based Logic

**What:** Apply different logic based on product type

**Why:** Different product types have different requirements:
- **Routers:** Fixed tariff pairings
- **Phones/Tablets:** Price-range matching
- **Accessories:** Range-based matching

---

### 8. Tariff Eligibility Rules

**Business Purpose:** Ensure only appropriate, market-ready tariffs are used in deals.

#### Rule 8.1: Active Tariffs Only

**What:** Only use tariffs marked as active for the current cycle

**Why:**
- Inactive tariffs may be discontinued
- May have regulatory issues
- May not be supported by billing systems

**Filter:** `is_active = 'Y'`

---

#### Rule 8.2: Public Tariffs Only

**What:** Only use tariffs available to all customers, not custom tariffs

**Why:**
- Proto-headlines are generic templates
- Customer-specific deals handled separately

**Filter:** `ccs_id = 0` (ccs = customer-specific)

---

#### Rule 8.3: Ranked Tariffs for Routers

**What:** For router mapping, only use tariffs with a ranking

**Why:**
- Ranking indicates strategic importance
- Unranked tariffs not intended for router bundles

**Filter:** `ranking > 0`

---

#### Rule 8.4: Paid Subscriptions Only (Voice/SIM-Only)

**What:** For voice and SIM-only deals, only use tariffs with subscription fees

**Why:**
- Free tariffs don't generate revenue
- Device subsidy must be recovered through subscription

**Filter:** `tariff_subscription > 0`

---

#### Rule 8.5: Tariff Type Matching

**What:** Ensure tariff type matches deal type

**Why:** Data devices need data tariffs; voice deals need voice tariffs

**Filters:**
- Data deals: `tariff_type = 'D'` AND `tariff_sub_type = 'MBB'`
- Voice deals: `tariff_type = 'V'`
- SIM-only: Type specified ('V' or 'D')

---

### 9. Insurance and Replacement Rules

**Business Purpose:** Calculate appropriate insurance and replacement values for risk management.

#### Rule 9.1: Device Replacement Value

**What:** Calculate replacement value for insurance purposes

**Why:**
- Insurance premiums based on replacement value
- Customer must be covered for device loss/damage
- Company manages insurance risk

**Formula:** `Device Cost × 1.25` (or configured RV multiplier)

**Why 1.25:** Covers device cost + inflation + handling

**Example:**
- iPhone 15 Pro costs R18,000 → Replacement value = R22,500
- Used for: Insurance quotes, damage claims, loss recovery

---

### 10. Workflow and Approval Governance Rules

**Business Purpose:** Ensure appropriate oversight for deals based on profitability and risk while enabling auto-approval of highly profitable deals.

#### Rule 10.1: Initial Deal State

**What:** All proto-headlines start as drafts requiring review

**Why:** Allows users to review before committing to prices

**Status Assignment:**
- `deal_status = 10` (Draft - editable, not committed)
- `latest_approved_level = 0` (no approvals yet)
- `approval_level_required` = Based on efficiency

---

#### Rule 10.2: Risk-Based Approval Requirements

**What:** Determine approval levels based on deal profitability

**Why:**
- High-profit deals (low efficiency) = Low risk → Less oversight
- Low-profit deals (high efficiency) = High risk → More oversight
- Protects company from unprofitable deals

**Approval Thresholds:**

| Level | Efficiency | Description | Example |
|-------|-----------|-------------|---------|
| **0** | < 10% | Very profitable | iPhone deal 8% efficiency → No approval |
| **1** | 10-20% | Standard | Samsung deal 15% → Manager approval |
| **2** | 20-30% | Below-target | Budget phone 25% → Senior manager |
| **3** | ≥ 30% | High-risk | Promotional 35% → Executive approval |

**Configuration:** Thresholds configurable per tariff type and term

---

#### Rule 10.3: Approval Level Flexibility

**What:** Approval thresholds are configurable, not hardcoded

**Why:**
- Business strategy changes over time
- Different terms/tariff types have different risk profiles
- Market conditions may require adjustments

**Examples:**
- Competitive period: Raise thresholds (enable aggressive deals)
- Profit-focus period: Lower thresholds (tighten controls)

---

### 11. SIM-Only Deal Specific Rules

**Business Purpose:** Enable customers who already own devices to get affordable tariff-only contracts.

#### Rule 11.1: SIM-Only Identification

**What:** SIM-only deals identified by CID 404

**Why:**
- Need to distinguish from device deals
- No physical device involved
- Different pricing and business logic

**Example:**
- CID 404 → SIM-only deal (no device, tariff only)
- CID 123 → iPhone 15 (actual device)

---

#### Rule 11.2: Prevent Duplicate SIM-Only Deals

**What:** Don't generate duplicates for same term and tariff type

**Why:**
- SIM-only deals don't vary by "device"
- Same term + tariff = identical offering

**Example:**
- Existing: SIM-only + 50GB Data + 24 months
- Don't generate: Another identical deal

---

#### Rule 11.3: Broader Tariff Eligibility

**What:** SIM-only deals can use different tariff matching

**Why:** Customer already owns device; choice not constrained by device price

**Business Logic:**
- **Add-on SIMs:** Use price-range matching
- **Standard SIMs:** Allow ALL active tariffs

**Example:** SIM-only → Can choose from ALL data tariffs

---

#### Rule 11.4: SIM-Only Subscription Pricing

**What:** SIM-only tariffs must have appropriate subscription pricing

**Why:** Ensures tariffs are priced correctly for SIM-only market

**Filter:** `simo_deal_subscription > 0`

---

### 12. Data Quality and Integrity Rules

**Business Purpose:** Ensure all generated deals have complete, valid data.

#### Rule 12.1: Required Field Validation

**What:** Every deal must have complete information in all critical fields

**Why:** Missing data causes system errors, prevents processing

**Required Fields:**
- Cycle information: cycle_id, business_unit, term, channel_id, tariff_type
- Device information: device_basket_id, cid, main_cid
- Tariff information: tariff_basket_id, tariff_code
- Pricing information: deal_price, CTC, efficiency
- Workflow information: deal_status, approval_level_required

---

#### Rule 12.2: Business Logic Validation

**What:** Field values must be within valid business ranges

**Why:** Invalid values indicate data corruption or logic errors

**Validations:**
- Deal price ≥ 0 (no negative prices)
- Term in (12, 24, 36, 48) months
- Tariff type in ('D', 'V')
- Channel ID = 0 for proto-headlines
- Business unit = 'CBU'

---

## Headline Generation Rules

**Business Purpose:** Convert reviewed proto-headlines (draft deals) into official headlines ready for approval and market publication.

### Overview

Headline generation is **much simpler** than proto-headline generation:
- **Proto-Headlines:** Complex generation with 12 rule categories
- **Headlines:** Simple filtered copy with 2 rules

**Why:** All the hard work already done in proto-headline generation

---

### Rule H1: Only Draft Proto-Headlines

**What:** Only proto-headlines with `deal_status = 10` (Draft) are converted

**Why:**
- Ensures only reviewed deals are promoted
- Prevents duplicate generation
- Status 10 = "Ready for promotion"

**Other Status Values NOT Included:**
- Status 25 (Approved) - Already processed
- Status 99 (Entirely rejected) - Should never become headlines

---

### Rule H2: Channel Availability Validation

**What:** Exclude devices that have NO active channels

**Why:** No point creating headlines for devices that can't be sold anywhere

**Business Logic:**
1. Check `cfg_channel_devices` for each device's CID
2. For each CID, sum active channels
3. If sum = 0 (no active channels), exclude the device

**Examples:**
- ✅ Device A: Active in Direct + Online → Included
- ❌ Device B: Disabled in ALL channels → Excluded
- ✅ Device C: Active in only Dealers → Included

---

### What Gets Copied

✅ **All 47 fields** from proto-headlines copied exactly:
- All pricing and cost data
- All profitability metrics
- All approval workflow data
- All user annotations
- All audit data

---

### Key Points

- **Proto-headlines are NOT deleted** after generation
- **Headlines are new records** (separate table)
- **Both coexist** - can reference proto-headlines for comparison
- **One-way operation** - Cannot "ungenerate" headlines

---

## Deal Approval Rules

**Business Purpose:** Ensure appropriate oversight and authorization before deals go to market.

### Approval Levels

| Level | Title | Authority | Typical Efficiency Range |
|-------|-------|-----------|-------------------------|
| **0** | Auto-Approved | System | < 10% |
| **1** | Manager | Deal Manager | 10-20% |
| **2** | Senior Manager | Senior Deal Manager | 20-30% |
| **3** | Executive | Executive Team | ≥ 30% |

### Approval Workflow

1. **Submit for Approval:** Deal manager reviews and submits
2. **Approval Queue:** Deals appear in approver's queue
3. **Review:** Approver reviews efficiency, CTC, pricing
4. **Decision:**
   - **Approve:** Deal moves to next level or market
   - **Reject:** Deal returned with reason
5. **Multi-Level:** Higher efficiency deals require multiple approvals

### Approval Rules

**AR1: Level-Based Approval**
- Deals require approval at or above their `approval_level_required`
- Cannot skip levels (Level 3 must get Level 1, 2, then 3)

**AR2: Efficiency Thresholds**
- Approval levels determined by efficiency calculation
- Thresholds configurable per tariff type and term

**AR3: Approval History**
- All approvals tracked with approver, timestamp
- Audit trail maintained
- Rejection reasons recorded

**AR4: Re-approval on Changes**
- Editing approved deal resets approval status
- Must go through approval workflow again

---

## Quick Reference Guide

### Decision Trees

#### "Can this device have a deal?"

```
Is device VSP-supplied? (TRADE supplier only)
├─ NO → ❌ Not eligible
└─ YES → Is device available in at least one channel?
    ├─ NO → ❌ Not eligible
    └─ YES → Was this device-tariff combo status 99?
        ├─ YES → ❌ Not eligible (permanently rejected)
        └─ NO → ✅ Eligible for deal generation
```

#### "What tariff should this device get?"

```
Is it a router? (object type contains 'R')
├─ YES → Use pre-configured router-tariff pairing
└─ NO → What's the device cost price?
    ├─ R0-R2,000 → Basic tariff range
    ├─ R2,001-R5,000 → Value tariff range
    ├─ R5,001-R10,000 → Mid-tier tariff range
    └─ R10,000+ → Premium tariff range
```

#### "What contract terms are offered?"

```
What deal type?
├─ Data Device Deal → 24, 36 months only
├─ Voice Device Deal → 12, 24, 36, 48 months
├─ SIM-Only Voice → 24 months only
└─ SIM-Only Data → 24, 36 months
```

#### "Who needs to approve this deal?"

```
What's the efficiency?
├─ < 10% → Level 0 (Auto-approved)
├─ 10-20% → Level 1 (Manager)
├─ 20-30% → Level 2 (Senior Manager)
└─ ≥ 30% → Level 3 (Executive)
```

---

### Common Scenarios

#### Scenario 1: New Device Launch

**Situation:** Apple just released iPhone 16

**Rules Applied:**
1. ✅ Device Eligibility: Check VSP supply agreement
2. ✅ Channel Availability: Ensure active in at least one channel
3. ✅ Tariff Matching: Price-based matching (premium device → premium tariffs)
4. ✅ Terms: Data deals (24, 36 months), Voice deals (12, 24, 36, 48 months)
5. ✅ Pricing: Calculate from scratch (no previous cycle data)
6. ✅ Approval: Based on calculated efficiency

**Outcome:** Full range of deals created for new device

---

#### Scenario 2: OEM Offers CTD

**Situation:** Samsung offers R1,000 CTD on Galaxy S24 to boost sales

**Impact:**
- Lower Financeable Cost: Device cost - R1,000 CTD
- Lower CTC: Less cost to connect customer
- Lower Efficiency: More profitable deal
- Lower Approval Level: May become auto-approved
- More Attractive Deal Price: Pass savings to customer

**Outcome:** Deal becomes more profitable and competitive

---

#### Scenario 3: Price Consistency

**Situation:** iPhone 15 had R1,199 deal last cycle

**Rules Applied:**
1. ✅ Price Carryover: Start with R1,199 (not recalculated)
2. ✅ User Review: Deal manager can adjust if needed
3. ✅ Market Stability: Customers see consistent pricing

**Outcome:** Price maintained unless deliberately changed

---

#### Scenario 4: Device Discontinued in All Channels

**Situation:** Old model disabled in all channels

**Rules Applied:**
1. ✅ Proto-Headline Generation: Device excluded (Rule 1.3)
2. ✅ Headline Generation: Device excluded (Rule H2)
3. ✅ No Deals Created: Cannot be sold, so no deals

**Outcome:** No system resources wasted on unsellable device

---

#### Scenario 5: SIM-Only Deal

**Situation:** Customer wants tariff-only (owns iPhone already)

**Rules Applied:**
1. ✅ CID 404: Special SIM-only identifier
2. ✅ Broader Tariff Eligibility: All active tariffs available
3. ✅ Terms: 24 months (voice), 24-36 months (data)
4. ✅ Different Pricing: No device cost to amortize

**Outcome:** SIM-only deals with full tariff choice

---

### Key Metrics Reference

| Metric | Formula | Good Value | Bad Value | Used For |
|--------|---------|------------|-----------|----------|
| **CTC** | Device - CTD - Recovery | Low / Negative | High | Profitability |
| **Efficiency** | (CTC / Revenue) × 100 | < 10% | > 30% | Approval level |
| **CTD** | OEM discount | Higher | Lower | Deal affordability |
| **VSP Support** | Total cost - supports | Lower | Higher | Subsidy cost |

---

### Critical Business Points

1. **Lower Efficiency = Better** (counterintuitive name)
2. **CTD is conditional** on sales targets (not guaranteed)
3. **Status 99 = Never again** (permanent blacklist)
4. **CID 404 = SIM-only** (special identifier)
5. **Proto-headlines ≠ Headlines** (draft vs. official)
6. **Price consistency matters** (customer expectation)
7. **All rules are enforced** (no manual overrides in generation)

---

## Document Version

- **Version:** 1.0
- **Last Updated:** December 2025
- **Maintained By:** DDE Product Team
- **Review Cycle:** Quarterly

---

## Related Documentation

- [CBU User Journey](./cbu-user-journey.md) - End-to-end user workflow
- [Database Operations](./database-operations.md) - Technical implementation
- [Database Design](./database-design.md) - Database architecture

