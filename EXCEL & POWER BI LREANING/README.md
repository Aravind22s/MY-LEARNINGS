# 📈 Excel & Power BI Learning

> Business Intelligence, Data Analysis & Visualization — from spreadsheets to enterprise dashboards.

---

## 📁 Folder Structure

```
EXCEL & POWER BI LREANING/
├── 01.introduction-to-excel.xlsx           # Excel basics
├── 02.Power-Query-DONE.xlsx                # Power Query (M language)
├── 02.sample-staff-data.xlsx               # Sample: Staff data
├── 03.sample-data-fx.blank.xlsx            # Practice: Formulas (blank)
├── 04.sample-data-fx-DONE.xlsx             # Practice: Formulas (solved)
├── 05.sample-data-pivots-blank.xlsx        # Practice: PivotTables (blank)
├── 06.sample-data-pivots-DONE.xlsx         # Practice: PivotTables (solved)
├── 07.sample-data-excel-portfolio-project.xlsx  # Portfolio project
├── CarSalesByModelStart.xlsx / End.xlsx    # Car sales analysis
├── Car_sales.csv                           # Raw data
├── car sales dashboard.xlsx                # Dashboard example
├── Contoso Sales Database - Maven.xlsx     # Large dataset (Maven Analytics)
├── CustomerLoyaltyProgram.csv              # Loyalty analysis
├── Global Superstore.xlsx                  # Classic Superstore dataset
├── Hunger Box Dataset.xlsx                 # Food delivery data
├── Sales Cognos dashboard.pdf              # Cognos reference
├── Sales Looker studio dashboard.pdf       # Looker Studio reference
├── Sales.pdf                               # Sales theory
├── Service.pdf                             # Service theory
└── startup_funding.csv                     # Startup funding data
```

---

## 🗺️ Learning Roadmap

### Phase 1: Excel Mastery (Weeks 1-3)

| File | Topic | Skills |
|------|-------|--------|
| `01.introduction-to-excel.xlsx` | Interface, Navigation, Basics | Ribbon, Shortcuts, Data Types, Formatting |
| `02.sample-staff-data.xlsx` + `02.Power-Query-DONE.xlsx` | **Power Query (Get & Transform)** | M Language, Data Cleaning, Merge/Append, Parameters |
| `03.sample-data-fx.blank.xlsx` → `04.sample-data-fx-DONE.xlsx` | **Advanced Formulas** | XLOOKUP, INDEX/MATCH, FILTER, SORT, UNIQUE, LET, LAMBDA |
| `05.sample-data-pivots-blank.xlsx` → `06.sample-data-pivots-DONE.xlsx` | **PivotTables & PivotCharts** | Calculated Fields, Grouping, Slicers, Timelines |
| `07.sample-data-excel-portfolio-project.xlsx` | **Portfolio Project** | End-to-end: Clean → Model → Analyze → Visualize |

#### Core Excel Skills to Master
```
Formulas & Functions
├── Lookup: XLOOKUP, VLOOKUP, INDEX/MATCH, XMATCH
├── Dynamic Arrays: FILTER, SORT, UNIQUE, SEQUENCE, RANDARRAY
├── Logical: IF, IFS, SWITCH, AND, OR, LET, LAMBDA
├── Text: TEXTSPLIT, TEXTJOIN, REGEX (Excel 365), SUBSTITUTE
├── Date/Time: EOMONTH, NETWORKDAYS, DATEDIF, EDATE
├── Statistical: MEDIAN, MODE, STDEV, PERCENTILE, CORREL
├── Financial: NPV, IRR, XNPV, XIRR, PMT, PPMT
└── Array: MMULT, TRANSPOSE, FREQUENCY (legacy CSE)

Data Modeling
├── Power Pivot (Data Model)
├── DAX Basics: CALCULATE, FILTER, ALL, RELATED
├── Time Intelligence: SAMEPERIODLASTYEAR, TOTALYTD, DATESYTD
├── Relationships: One-to-Many, Many-to-Many, Bidirectional
└── Hierarchies & KPIs

Visualization
├── Charts: Combo, Waterfall, Funnel, Sunburst, Treemap
├── Conditional Formatting: Data Bars, Color Scales, Icon Sets
├── Sparklines: Line, Column, Win/Loss
├── Form Controls: Combo Box, Scroll Bar, Check Box, Option Button
├── Slicers & Timelines (Pivot-connected)
└── Dashboard Design: Layout, Color Theory, Information Hierarchy
```

### Phase 2: Power BI (Weeks 4-6)

```
Power BI Desktop
├── Data Sources: Excel, CSV, SQL, Web, API, Folder, PDF
├── Power Query Editor (Same M language as Excel)
├── Data Modeling: Star Schema, Relationships, Cardinality
├── DAX (Data Analysis Expressions)
│   ├── Calculated Columns vs Measures
│   ├── Context: Row Context, Filter Context
│   ├── CALCULATE, FILTER, ALL, ALLEXCEPT, VALUES
│   ├── Time Intelligence: TOTALYTD, SAMEPERIODLASTYEAR, PARALLELPERIOD
│   ├── Iterator Functions: SUMX, AVERAGEX, RANKX, TOPN
│   └── Variables: VAR / RETURN pattern
├── Visualizations
│   ├── Core: Bar, Line, Area, Scatter, Map, Table, Matrix
│   ├── Advanced: Decomposition Tree, Key Influencers, Q&A
│   ├── Custom Visuals (AppSource)
│   ├── Themes & Templates (JSON)
│   └── Bookmarks, Buttons, Drillthrough, Tooltips
├── Power BI Service (Cloud)
│   ├── Workspaces, Apps, Deployment Pipelines
│   ├── Scheduled Refresh, Incremental Refresh
│   ├── Row-Level Security (RLS)
│   ├── Dataflows (Power Query in cloud)
│   ├── Paginated Reports (SSRS-style)
│   └── REST API / PowerShell Automation
└── Administration
    ├── Admin Portal, Tenant Settings
    ├── Monitoring: Usage Metrics, Audit Logs
    ├── Gateway (On-prem data)
    └── Sensitivity Labels, DLP Policies
```

### Phase 3: Projects & Portfolio (Weeks 6-8)

| Project | Dataset | Focus |
|---------|---------|-------|
| **Car Sales Dashboard** | `CarSalesByModelStart.xlsx` | Time series, segmentation, forecasting |
| **Global Superstore** | `Global Superstore.xlsx` | Multi-dim analysis, geo maps, drill-down |
| **Customer Loyalty** | `CustomerLoyaltyProgram.csv` | Cohort analysis, RFM, retention |
| **Startup Funding** | `startup_funding.csv` | Trend analysis, investor networks |
| **Contoso Sales** | `Contoso Sales Database - Maven.xlsx` | Enterprise-scale modeling |

---

## 🛠️ Power Query (M Language) Patterns

```m
// Common transformations
let
    Source = Excel.Workbook(File.Contents("data.xlsx"), null, true),
    Sheet = Source{[Item="Sheet1",Kind="Sheet"]}[Data],
    PromotedHeaders = Table.PromoteHeaders(Sheet, [PromoteAllScalars=true]),
    ChangedType = Table.TransformColumnTypes(PromotedHeaders, {
        {"Date", type date}, {"Amount", Currency.Type}, {"Category", type text}
    }),
    // Remove blank rows
    RemovedBlanks = Table.SelectRows(ChangedType, each not List.IsEmpty(List.RemoveMatchingItems(Record.FieldValues(_), {null, ""}))),
    // Add conditional column
    AddedCustom = Table.AddColumn(RemovedBlanks, "Size", each if [Amount] > 1000 then "Large" else "Small"),
    // Group by
    Grouped = Table.Group(AddedCustom, {"Category"}, {{"Total", each List.Sum([Amount]), type number}})
in
    Grouped
```

---

## 📊 DAX Patterns

```dax
-- Basic Measure
Total Sales = SUM(Sales[Amount])

-- Calculate with Filter Context
Sales 2023 = CALCULATE([Total Sales], Sales[Year] = 2023)

-- Time Intelligence
Sales YTD = TOTALYTD([Total Sales], 'Date'[Date])
Sales LY = CALCULATE([Total Sales], SAMEPERIODLASTYEAR('Date'[Date]))
YoY Growth = DIVIDE([Total Sales] - [Sales LY], [Sales LY])

-- Dynamic Ranking
Top 5 Products = 
    VAR Ranked = ADDCOLUMNS(ALL(Product[Name]), "Rank", RANKX(ALL(Product[Name]), [Total Sales],, DESC))
RETURN
    FILTER(Ranked, [Rank] <= 5)

-- ABC Analysis (Pareto)
ABC Class = 
    VAR CumulativePct = 
        DIVIDE(
            CALCULATE([Total Sales], FILTER(ALL(Product), [Total Sales] >= EARLIER([Total Sales]))),
            CALCULATE([Total Sales], ALL(Product))
        )
    RETURN
    SWITCH(TRUE(),
        CumulativePct <= 0.8, "A",
        CumulativePct <= 0.95, "B",
        "C"
    )
```

---

## 🎨 Dashboard Design Principles

| Principle | Application |
|-----------|-------------|
| **Audience First** | Executive = KPIs + Trends; Analyst = Detail + Filters |
| **Hierarchy** | Top-level KPIs → Trends → Detail tables |
| **Color Purpose** | Semantic (Green=Good, Red=Bad), not decoration |
| **Whitespace** | Group related, separate distinct; 8px grid |
| **Alignment** | Left-align text, right-align numbers, center headers |
| **Data-Ink Ratio** | Remove chart junk: gridlines, borders, 3D, legends if direct-labeled |
| **Accessibility** | Colorblind-safe palettes (ColorBrewer), text contrast 4.5:1 |

---

## 📋 Practice Exercises

### Excel
- [ ] Complete `03` → `04` (Formulas) without looking at solution
- [ ] Complete `05` → `06` (Pivots) without looking at solution
- [ ] Build dashboard in `07` from scratch using raw data
- [ ] Recreate `car sales dashboard.xlsx` with your own design

### Power BI
- [ ] Import `Global Superstore.xlsx` → Build star schema
- [ ] Write 10 DAX measures (YTD, YoY, Rank, Pareto, Moving Avg)
- [ ] Create 5-page report: Overview, Sales, Customer, Product, Map
- [ ] Publish to Power BI Service → Set up scheduled refresh
- [ ] Implement RLS by Region/Manager

### Advanced
- [ ] Build Parameter-driven What-If analysis (Price Elasticity)
- [ ] Create Custom Visual (TypeScript + Power BI Visuals API)
- [ ] Automate deployment with PowerShell / REST API
- [ ] Set up Deployment Pipeline (Dev → Test → Prod)

---

## 📚 Resources

### Microsoft Official
- [Excel Documentation](https://support.microsoft.com/excel)
- [Power BI Documentation](https://learn.microsoft.com/power-bi/)
- [DAX Reference](https://learn.microsoft.com/dax/)
- [Power Query M Reference](https://learn.microsoft.com/powerquery-m/)

### Learning Platforms
- **SQLBI** (Marco Russo & Alberto Ferrari) — Best DAX/Power BI content
- **ExcelIsFun** (YouTube) — 3000+ Excel videos
- **Leila Gharani** (YouTube) — Modern Excel, Dashboards
- **Curbal** (YouTube) — Power BI, DAX deep dives
- **Enterprise DNA** — Power BI patterns
- **Maven Analytics** — Courses + Datasets (Contoso!)

### Books
- **The Definitive Guide to DAX** (Russo & Ferrari) — DAX bible
- **Analyzing Data with Power BI and Power Pivot** (Ferrari & Russo)
- **Dashboarding & Reporting with Power BI** (Brett Powell)
- **Storytelling with Data** (Cole Nussbaumer Knaflic) — Design

### Communities
- **Power BI Community** (community.powerbi.com)
- **MrExcel Forum** (mrexcel.com)
- **r/excel, r/PowerBI** (Reddit)
- **LinkedIn Groups** — Power BI User Groups

---

## ✅ Progress Tracker

| Module | Status | Files Completed |
|--------|--------|-----------------|
| Excel Basics | ✅ | 01 |
| Power Query | ✅ | 02 |
| Advanced Formulas | 🟡 | 03→04 |
| PivotTables | 🟡 | 05→06 |
| Portfolio Project | 🔴 | 07 |
| Power BI Desktop | 🔴 | |
| DAX Measures | 🔴 | |
| Visualizations | 🔴 | |
| Power BI Service | 🔴 | |
| Deployment Pipelines | 🔴 | |

---

## 💡 Pro Tips

1. **Power Query > Formulas** — Transform in PQ, calculate in DAX/Excel
2. **Star Schema Always** — Fact tables + Dimension tables; no wide tables
3. **Measures > Calculated Columns** — Measures respond to filter context
4. **Variables in DAX** — `VAR`/`RETURN` = readable, debuggable, performant
5. **Disable Auto-Date/Time** — Build proper Date table (Mark as Date Table)
6. **Incremental Refresh** — Essential for large datasets (>1M rows)
7. **Version Control** — Export `.pbix` → `.pbit` (template) → Git; or use Tabular Editor
8. **Performance Analyzer** — In Power BI Desktop (View → Performance Analyzer)
9. **Tabular Editor 3** — External tool for advanced modeling, DAX, C# scripts
10. **Documentation** — Use `DESCRIPTION` in DAX, Data Dictionary in Excel

---

## 🔗 Cross-References

- **[SQL Learning](../SQL%20Learning%20&%20Project/README.md)** — Power BI data sources
- **[Python Learning](../Python%20(learning%20&%20project)/README.md)** — Python in Power BI (Py scripts, custom visuals)
- **[DA-DS-ML-DL](../DA-DS-ML-DL/README.md)** — Export ML results to Power BI
- **[Linux](../Linux/README.md)** — Power BI Report Server on Linux (limited), Gateway

---

*Part of [MY-LEARNINGS](../README.md) | Last updated: July 2025*