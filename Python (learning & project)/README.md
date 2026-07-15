# 🐍 Python Learning & Projects

> Structured progression: Syntax → OOP → Projects → Airflow ETL

---

## 📁 Folder Structure

```
Python (learning & project)/
├── python Basic to Advance/              # 📚 Core Python Curriculum
│   ├── learning Python Basics to Advance.ipynb  # Comprehensive notebook
│   ├── class_example_atm.py              # OOP: ATM simulation
│   ├── classes_object_calling.py         # Classes, inheritance, magic methods
│   ├── def_function_call.py              # Functions, decorators, args
│   ├── sys_argv.py                       # CLI arguments
│   ├── test.py                           # Testing basics
│   ├── data.csv / data.json              # Sample data files
│   └── student.xlsx                      # Pandas practice
│
├── mini_projects/                        # 🛠️ Applied Projects
│   └── Online ATM/
│       ├── atmproject.py                 # Main application
│       ├── DB_CONNECTIVITY.PY            # Database layer (SQLite)
│       └── user_interface.py             # CLI menu system
│
├── Airflow schedular/                    # ⚙️ Workflow Orchestration
│   ├── airflow_dag.py                    # DAG definition
│   ├── etl_script.py                     # ETL pipeline logic
│   └── wrapper.sh                        # Shell wrapper
│
└── README.md                             # This file
```

---

## 🗺️ Learning Roadmap

### Phase 1: Python Fundamentals (Weeks 1-3)
```
learning Python Basics to Advance.ipynb
├── Setup: VS Code, Virtual Environments, pip/uv
├── Variables, Types, Operators
├── Control Flow: if/elif/else, match/case (3.10+)
├── Loops: for, while, else clauses, break/continue
├── Data Structures:
│   ├── List, Tuple, Set, Dict
│   ├── Comprehensions (list, dict, set, generator)
│   └── collections: Counter, defaultdict, OrderedDict, namedtuple
├── Functions:
│   ├── Def, Lambda, Type Hints
│   ├── *args, **kwargs, Keyword-only args
│   ├── Closures, Decorators (@property, @staticmethod, custom)
│   └── functools: lru_cache, partial, wraps, reduce
├── Modules & Packages:
│   ├── Import system, __name__ == "__main__"
│   ├── Relative vs Absolute imports
│   ├── pip, requirements.txt, pyproject.toml
│   └── Virtual environments (venv, conda, uv)
├── File I/O:
│   ├── open(), pathlib.Path
│   ├── Context managers (with)
│   ├── CSV, JSON, Excel (pandas), Pickle
│   └── Binary vs Text, Encoding
├── Error Handling:
│   ├── try/except/else/finally
│   ├── Custom exceptions
│   ├── Exception hierarchy
│   └── logging module
├── OOP:
│   ├── Class, Instance, self
│   ├── __init__, __str__, __repr__, __eq__
│   ├── Inheritance, super(), MRO
│   ├── @property, @classmethod, @staticmethod
│   ├── Dataclasses (@dataclass)
│   ├── Abstract Base Classes (abc)
│   └── Protocols (typing.Protocol) — Structural typing
├── Testing:
│   ├── pytest (fixtures, parametrize, mock)
│   ├── unittest (legacy)
│   ├── Coverage (pytest-cov)
│   └── TDD workflow
└── Type Hints & Static Analysis:
    ├── mypy, pyright
    ├── Generics, TypeVar, Protocol
    ├── Overload, Final, Literal
    └── Strict mode
```

### Phase 2: Intermediate Python (Weeks 3-4)
| Topic | File | Key Concepts |
|-------|------|--------------|
| Functions Deep Dive | `def_function_call.py` | Decorators, closures, partial |
| OOP Patterns | `classes_object_calling.py` | Inheritance, magic methods, ABC |
| CLI Apps | `sys_argv.py` | argparse, click, typer |
| ATM Simulation | `class_example_atm.py` | State machine, OOP design |
| Data Handling | `data.csv/json/xlsx` | pandas basics |

### Phase 3: Project — Online ATM (Weeks 4-5)
```
mini_projects/Online ATM/
├── atmproject.py          # Main loop, state management
├── DB_CONNECTIVITY.PY     # SQLite: CRUD, transactions, context mgr
└── user_interface.py      # Menu system, input validation

Skills Applied:
├── OOP: Account, User, Transaction classes
├── Database: sqlite3, connection pooling, migrations
├── Error Handling: Custom exceptions, logging
├── Security: PIN hashing (bcrypt), SQL injection prevention
├── Testing: pytest, mock DB, fixtures
└── Packaging: pyproject.toml, entry_points
```

### Phase 4: Data Engineering — Airflow (Weeks 5-6)
```
Airflow schedular/
├── airflow_dag.py         # DAG: schedule, tasks, dependencies
├── etl_script.py          # Extract → Transform → Load
└── wrapper.sh             # Entry point, env setup

Concepts:
├── DAGs, Operators (PythonOperator, BashOperator, etc.)
├── TaskFlow API (@task decorator)
├── XComs (cross-task communication)
├── Connections & Variables (secrets management)
├── Sensors (waiting for external events)
├── Trigger Rules (all_success, one_failed, etc.)
├── Dynamic Task Mapping
├── DAG Versioning & Testing
└── Production: CeleryExecutor, KubernetesExecutor
```

---

## 🛠️ Development Setup

```bash
# Modern Python tooling (recommended)
curl -LsSf https://astral.sh/uv/install.sh | sh  # Fast installer
uv venv
source .venv/bin/activate
uv pip install --upgrade pip
uv pip install pytest pytest-cov ruff mypy ipykernel jupyter pandas

# Project-specific
uv pip install sqlalchemy bcrypt click rich textual
uv pip install apache-airflow  # For Airflow section
```

### VS Code Extensions
- Python (Microsoft)
- Pylance (Type checking)
- Ruff (Linting — faster than flake8/black/isort)
- Jupyter
- SQLite Viewer

---

## 📋 Practice Checklist

### Fundamentals
- [ ] Write 5 custom decorators (timer, retry, cache, validate, log)
- [ ] Implement a context manager (class & @contextmanager)
- [ ] Build CLI with `click` or `typer` (subcommands, options)
- [ ] Create dataclass with validation (`__post_init__`)
- [ ] Write pytest suite with fixtures, parametrize, mock

### OOP & Design
- [ ] ATM: Implement withdrawal limits, transaction history
- [ ] ATM: Add admin mode (view all accounts, freeze/unfreeze)
- [ ] Refactor ATM to use Repository pattern (DB abstraction)
- [ ] Add database migrations (alembic or simple version table)

### Data & Testing
- [ ] Load `student.xlsx` with pandas → clean → analyze
- [ ] Write property-based tests with `hypothesis`
- [ ] Achieve >90% coverage on ATM project
- [ ] Set up pre-commit hooks (ruff, mypy, pytest)

### Airflow
- [ ] Run Airflow locally (Docker Compose)
- [ ] Create DAG: Daily ETL from CSV → SQLite → Summary
- [ ] Add Slack/Email alert on failure
- [ ] Implement backfill / catchup logic
- [ ] Write unit tests for DAG tasks

---

## 📚 Resources

### Core Python
- **Python Docs** — [docs.python.org/3](https://docs.python.org/3/)
- **Real Python** — [realpython.com](https://realpython.com/) — Best tutorials
- **Effective Python** (Brett Slatkin) — 90 specific ways to write better Python
- **Fluent Python** (Luciano Ramalho) — Deep dive for intermediate+
- **Python Cookbook** (Beazley & Jones) — Recipes for common tasks

### Testing
- **pytest Docs** — [docs.pytest.org](https://docs.pytest.org/)
- **Test-Driven Development with Python** (Harry Percival) — Free online

### Airflow
- **Airflow Docs** — [airflow.apache.org](https://airflow.apache.org/docs/)
- **Astronomer Guides** — [astronomer.io/guides](https://www.astronomer.io/guides/)
- **Marc Lamberti (YouTube)** — Excellent Airflow tutorials

### Modern Tooling
- **uv** — [github.com/astral-sh/uv](https://github.com/astral-sh/uv) — Fast package manager
- **Ruff** — [github.com/astral-sh/ruff](https://github.com/astral-sh/ruff) — Fast linter/formatter
- **Typer** — [typer.tiangolo.com](https://typer.tiangolo.com/) — Modern CLI
- **Rich / Textual** — [textual.textualize.io](https://textual.textualize.io/) — Beautiful TUIs

---

## ✅ Progress Tracker

| Module | Status | Files |
|--------|--------|-------|
| Python Basics (Syntax, Types, Flow) | ✅ | learning Python Basics to Advance.ipynb |
| Functions & Decorators | ✅ | def_function_call.py |
| OOP & Classes | ✅ | classes_object_calling.py, class_example_atm.py |
| CLI Arguments | ✅ | sys_argv.py |
| Testing Basics | 🟡 | test.py |
| Data Files (CSV/JSON/Excel) | ✅ | data.csv, data.json, student.xlsx |
| **Project: Online ATM** | 🟡 | atmproject.py, DB_CONNECTIVITY.PY, user_interface.py |
| **Airflow ETL** | 🔴 | airflow_dag.py, etl_script.py |

---

## 💡 Pro Tips

1. **Type hints everywhere** — They're documentation that never lies
2. **`pathlib` over `os.path`** — Object-oriented, cross-platform
3. **`pytest` > `unittest`** — Less boilerplate, better fixtures
4. **`ruff` for linting** — 100x faster than flake8+black+isort
5. **`uv` for packages** — 10-100x faster than pip
6. **Virtual env per project** — Never pollute system Python
7. **Read source code** — `import requests; print(requests.__file__)` → explore
8. **Write scripts for repetition** — If you do it twice, automate

---

## 🔗 Cross-References

- **[DA-DS-ML-DL](../DA-DS-ML-DL/README.md)** — Python for Data Science (pandas, sklearn)
- **[FullStack Learning](../FullStack%20learning/README.md)** — Flask/Django for web
- **[Gen AI](../Gen%20AI-Prompt%20Engineering-Agentic%20AI-AI%20Aotumation/README.md)** — Python for LLM apps
- **[SQL Learning](../SQL%20Learning%20&%20Project/README.md)** — SQLAlchemy, asyncpg
- **[Linux](../Linux/README.md)** — Deploy Python apps on Linux

---

*Part of [MY-LEARNINGS](../README.md) | Last updated: July 2025*