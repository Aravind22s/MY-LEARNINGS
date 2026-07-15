# 🗄️ SQL Learning & Projects

> SQL for Data Analysis — from basic queries to advanced analytics & real-world projects.

---

## 📁 Folder Structure

```
SQL Learning & Project/
├── data/                                 # Sample datasets
│   └── Spotify.csv                       # Music streaming data
├── SQL_notes.ipynb                       # 📚 Comprehensive SQL reference
├── spotify_sql_data_analysis.ipynb       # 🎯 End-to-end analysis project
└── README.md                             # This file
```

---

## 🗺️ Learning Roadmap

### Phase 1: Foundations (Week 1-2)
```
SQL_notes.ipynb → Core Concepts
├── SELECT, FROM, WHERE
├── ORDER BY, LIMIT, OFFSET
├── DISTINCT, COUNT(*)
├── Comparison & Logical Operators
├── BETWEEN, IN, LIKE, ILIKE
├── NULL handling (IS NULL, COALESCE)
└── Basic String Functions (UPPER, LOWER, TRIM, CONCAT)
```

### Phase 2: Joins & Relationships (Week 2-3)
```
├── INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN
├── Self Joins
├── Multiple Joins (3+ tables)
├── JOIN vs Subquery performance
├── Set Operations (UNION, INTERSECT, EXCEPT)
└── ER Diagrams & Normalization (1NF, 2NF, 3NF)
```

### Phase 3: Aggregation & Grouping (Week 3-4)
```
├── GROUP BY, HAVING
├── Aggregate Functions: SUM, AVG, MIN, MAX, COUNT
├── Conditional Aggregation (CASE WHEN inside SUM/COUNT)
├── GROUPING SETS, ROLLUP, CUBE (advanced)
└── Pivot/Unpivot patterns
```

### Phase 4: Advanced Analytics (Week 4-6)
```
├── Window Functions
│   ├── ROW_NUMBER, RANK, DENSE_RANK
│   ├── LAG, LEAD, FIRST_VALUE, LAST_VALUE
│   ├── NTILE, PERCENT_RANK, CUME_DIST
│   └── FRAME clauses (ROWS/RANGE BETWEEN)
├── CTEs (WITH clause) & Recursive CTEs
├── Subqueries (Correlated, Scalar, Inline)
├── Date/Time Functions
│   ├── EXTRACT, DATE_TRUNC, INTERVAL
│   ├── Timezone handling (AT TIME ZONE)
│   └── Relative windows (LAST 7 DAYS)
└── Advanced Filtering
    ├── QUALIFY (BigQuery/Snowflake)
    ├── LATERAL JOIN / CROSS APPLY
```

### Phase 5: Performance & Production (Week 6+)
```
├── EXPLAIN ANALYZE / Execution Plans
├── Indexes (B-Tree, Hash, Partial, Covering)
├── Query Optimization Patterns
├── Partitioning (Range, List, Hash)
├── Materialized Views
├── Transactions & Isolation Levels
├── Stored Procedures & Functions
├── Triggers & Auditing
└── Database Design for Analytics (Star/Snowflake Schema)
```

---

## 🎯 Project: Spotify Data Analysis

**File:** `spotify_sql_data_analysis.ipynb`

**Dataset:** `data/Spotify.csv` — Track metadata & audio features

### Analysis Questions
| Category | Questions |
|----------|-----------|
| **Exploratory** | Top artists by track count, genre distribution, year trends |
| **Audio Features** | Danceability vs Energy correlation, Acousticness by genre |
| **Popularity** | What features predict popularity? Top tracks per year |
| **Advanced** | Artist collaboration network, Audio feature clustering, Year-over-year growth |

### SQL Techniques Demonstrated
- CTEs for data cleaning & staging
- Window functions for ranking (top N per group)
- Conditional aggregation for pivot tables
- Date functions for temporal analysis
- Correlation via statistical functions
- JSON/Array handling (if PostgreSQL/BigQuery)

---

## 🛠️ Environment Setup

### Option 1: Local PostgreSQL (Recommended)
```bash
# Install PostgreSQL
# Windows: Download from postgresql.org
# Mac: brew install postgresql
# Linux: sudo apt install postgresql postgresql-contrib

# Create database
createdb sql_learning

# Load CSV
psql -d sql_learning -c "\copy spotify FROM 'data/Spotify.csv' CSV HEADER"

# Or use Python
python -c "
import pandas as pd
from sqlalchemy import create_engine
df = pd.read_csv('data/Spotify.csv')
engine = create_engine('postgresql://localhost/sql_learning')
df.to_sql('spotify', engine, if_exists='replace', index=False)
"
```

### Option 2: DuckDB (Zero-config, Great for Analytics)
```bash
pip install duckdb jupyter
# In notebook:
import duckdb
conn = duckdb.connect()
conn.execute("CREATE TABLE spotify AS SELECT * FROM read_csv_auto('data/Spotify.csv')")
```

### Option 3: SQLite (Built-in)
```bash
# No install needed
python -c "
import sqlite3, pandas as pd
df = pd.read_csv('data/Spotify.csv')
conn = sqlite3.connect('spotify.db')
df.to_sql('spotify', conn, if_exists='replace', index=False)
"
```

### Option 4: Cloud (BigQuery, Snowflake, Redshift)
- Upload CSV via UI
- Use web console or Python client libraries

---

## 📖 SQL_notes.ipynb — Content Map

| Section | Notebook Cells | Key Topics |
|---------|---------------|------------|
| 1. Basics | 1-15 | SELECT, WHERE, ORDER BY, Functions |
| 2. Joins | 16-30 | All join types, multiple tables |
| 3. Aggregation | 31-45 | GROUP BY, HAVING, CASE WHEN |
| 4. Window Functions | 46-70 | ROW_NUMBER, LAG/LEAD, Frames |
| 5. CTEs & Subqueries | 71-90 | WITH, Recursive, Correlated |
| 6. Date/Time | 91-105 | Truncation, Intervals, Timezones |
| 7. Performance | 106-120 | EXPLAIN, Indexes, Partitioning |
| 8. Advanced | 121+ | Pivot, JSON, Arrays, MERGE |

---

## 🎯 Practice Exercises

### Beginner (Run on Spotify data)
1. **Top 10 most streamed tracks** — `ORDER BY streams DESC LIMIT 10`
2. **Tracks per artist** — `GROUP BY artist ORDER BY COUNT(*) DESC`
3. **Average danceability by genre** — `GROUP BY genre`
4. **Tracks released in 2023** — `WHERE release_year = 2023`
5. **Explicit vs Clean track ratio** — `CASE WHEN explicit THEN 'Explicit' ELSE 'Clean' END`

### Intermediate
6. **Top 3 tracks per artist** — `ROW_NUMBER() OVER (PARTITION BY artist ORDER BY streams DESC)`
7. **Year-over-year growth** — `LAG(streams) OVER (PARTITION BY artist ORDER BY year)`
8. **Genre popularity percentile** — `PERCENT_RANK() OVER (ORDER BY avg_popularity)`
9. **Artist with most genres** — `COUNT(DISTINCT genre) GROUP BY artist`
10. **Feature correlation matrix** — Multiple window functions

### Advanced
11. **Collaborative filtering prep** — User-track matrix (pivot)
12. **Anomaly detection** — Tracks with popularity > 3 std dev from genre mean
13. **Recursive CTE** — Genre hierarchy traversal (if hierarchical)
14. **Time-series gap filling** — Generate series for missing dates
15. **Materialized view** — Precompute daily artist metrics

---

## 📚 Recommended Resources

| Resource | Type | Focus |
|----------|------|-------|
| **SQL for Data Analysis** (Cathy Tanimura) | Book | Analytics patterns |
| **High Performance SQL** (Sasha Pachev) | Book | Optimization |
| **Use The Index, Luke** | Web | Indexing deep dive |
| **PostgreSQL Docs** | Docs | Feature reference |
| **Mode SQL Tutorial** | Interactive | Business analytics |
| **LeetCode Database** | Practice | 200+ problems |
| **Strata Scratch** | Practice | Real interview questions |

### Practice Platforms
- **LeetCode** (Easy/Medium/Hard SQL)
- **HackerRank** (SQL Certificate)
- **Mode Analytics** (Business cases)
- **Strata Scratch** (Real company questions)
- **SQLZoo** (Beginner interactive)

---

## ✅ Progress Tracker

| Topic | Status | Practice Done |
|-------|--------|---------------|
| Basic SELECT/WHERE | ✅ | |
| Joins (All types) | ✅ | |
| Aggregation & GROUP BY | ✅ | |
| Window Functions | 🟡 | ROW_NUMBER, RANK |
| CTEs & Subqueries | 🟡 | Basic CTEs |
| Date/Time Functions | 🔴 | |
| Performance Tuning | 🔴 | |
| Recursive CTEs | 🔴 | |
| JSON/Array Functions | 🔴 | |
| Spotify Project | 🟡 | EDA complete |
| Data Modeling (Star Schema) | 🔴 | |
| Stored Procedures | 🔴 | |

---

## 💡 Pro Tips

1. **Format your SQL** — Use `sqlfluff` or `pgFormatter`; readability = maintainability
2. **Comment complex queries** — `-- Why this join?` saves hours later
3. **Use CTEs liberally** — Break logic into named steps; optimizer handles it
4. **Test incrementally** — Run each CTE separately, verify row counts
5. **Learn EXPLAIN** — `EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT)` is your debugger
6. **Parameterize, don't concatenate** — Prevent SQL injection always
7. **Think in sets, not loops** — SQL is declarative; avoid cursors

---

## 🔗 Cross-References

- **[Python Learning](../Python%20(learning%20&%20project)/README.md)** — SQLAlchemy, pandas, DuckDB integration
- **[DA-DS-ML-DL](../DA-DS-ML-DL/README.md)** — Feature engineering with SQL
- **[EXCEL & Power BI](../EXCEL%20&%20POWER%20BI%20LREANING/README.md)** — SQL as data source for dashboards
- **[Linux](../Linux/README.md)** — PostgreSQL server admin

---

*Part of [MY-LEARNINGS](../README.md) | Last updated: July 2025*