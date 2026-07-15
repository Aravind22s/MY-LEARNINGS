# 🤖 Gen AI — Prompt Engineering, Agentic AI & AI Automation

> Learning Generative AI from fundamentals to production-ready applications.

---

## 📁 Folder Structure

```
Gen AI-Prompt Engineering-Agentic AI-AI Aotumation/
├── CharGPT_Prompt_engineering/           # Prompt engineering notebooks
│   ├── guidelines.ipynb                  # Core prompting principles
│   ├── iterative-prompt-development.ipynb
│   ├── summarizing.ipynb
│   ├── inferring.ipynb
│   ├── transforming.ipynb
│   ├── expanding.ipynb
│   └── chatbot.ipynb                     # Chatbot building patterns
├── Gemini_Pormpt_engineering/            # Google Gemini prompting
│   └── (similar structure for Gemini)
├── Generative AI.pdf                     # Theory & architecture reference
├── MAGIC PROMPT.pdf                      # Prompt templates & patterns
└── Prompt_Engineering_Playbook.pdf       # Comprehensive guide
```

---

## 📚 Learning Path

### Phase 1: Foundations (Week 1-2)
| Resource | Focus |
|----------|-------|
| `Generative AI.pdf` | Transformer architecture, LLM training, scaling laws |
| `CharGPT_Prompt_engineering/guidelines.ipynb` | Core prompting principles |

**Key Concepts:**
- How LLMs work (next-token prediction, attention)
- Context window, tokens, temperature, top-p
- System vs User vs Assistant messages
- Zero-shot, Few-shot, Chain-of-Thought prompting

### Phase 2: Prompt Engineering Patterns (Week 2-4)
| Notebook | Pattern | Use Case |
|----------|---------|----------|
| `iterative-prompt-development.ipynb` | Iterative refinement | Building reliable prompts |
| `summarizing.ipynb` | Summarization | Document condensation |
| `inferring.ipynb` | Inference/Classification | Sentiment, topics, entities |
| `transforming.ipynb` | Transformation | Format conversion, translation |
| `expanding.ipynb` | Expansion | Brainstorming, content generation |
| `chatbot.ipynb` | Conversational | Multi-turn, context management |

**Advanced Patterns to Practice:**
- **Chain-of-Thought** — Step-by-step reasoning
- **Tree-of-Thoughts** — Multiple reasoning paths
- **Self-Consistency** — Multiple samples, majority vote
- **ReAct** — Reasoning + Acting (tool use)
- **Reflexion** — Self-critique & improvement
- **Persona/Role prompting** — Expert simulation

### Phase 3: Agentic AI & Automation (Week 4-6)
| Topic | Resources |
|-------|-----------|
| Function Calling / Tools | OpenAI Functions, Anthropic Tools |
| RAG (Retrieval-Augmented Generation) | LangChain, LlamaIndex |
| Multi-Agent Systems | AutoGen, CrewAI, LangGraph |
| AI Automation Workflows | n8n, Zapier AI, custom pipelines |
| Evaluation & Guardrails | LangSmith, TruLens, Guardrails AI |

### Phase 4: Production & Specialization (Week 6+)
- Fine-tuning vs RAG decision framework
- Cost optimization (caching, smaller models, routing)
- Latency optimization (streaming, quantization)
- Safety: PII detection, prompt injection defense
- Custom model deployment (vLLM, TGI, Ollama)

---

## 🛠️ Quick Start

### Environment
```bash
cd "Gen AI-Prompt Engineering-Agentic AI-AI Aotumation"
python -m venv venv
source venv/bin/activate
pip install jupyter openai anthropic langchain langchain-openai langchain-anthropic
```

### API Keys (`.env` - never commit!)
```bash
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
GOOGLE_API_KEY=...  # For Gemini
```

### Run Notebooks
```bash
cd CharGPT_Prompt_engineering
jupyter notebook guidelines.ipynb
```

---

## 📋 Core Prompt Engineering Checklist

### For Every Prompt
- [ ] **Clear instruction** — What exactly should the model do?
- [ ] **Context** — Relevant background, constraints, examples
- [ ] **Output format** — JSON, Markdown, bullet points, specific structure
- [ ] **Role/Persona** — "Act as a senior Python developer..."
- [ ] **Few-shot examples** — 2-5 diverse examples showing desired behavior
- [ ] **Chain-of-thought** — "Think step by step" for complex reasoning
- [ ] **Negative constraints** — What NOT to do
- [ ] **Temperature** — 0 for deterministic, 0.7+ for creative

### Evaluation Criteria
- [ ] **Accuracy** — Factually correct?
- [ ] **Completeness** — Addresses all requirements?
- [ ] **Format adherence** — Exact output structure?
- [ ] **Tone/Style** — Matches persona?
- [ ] **Safety** — No hallucinations, PII, harmful content?

---

## 🎯 Practice Projects

### Beginner
1. **Email Classifier** — Categorize emails (spam, urgent, newsletter, etc.)
2. **Meeting Summarizer** — Extract action items, decisions, key points
3. **Code Explainer** — Explain complex code in simple terms
4. **SQL Generator** — Natural language → SQL queries

### Intermediate
5. **RAG Chatbot** — PDF Q&A with citations
6. **Multi-Agent Researcher** — Research agent + Writer agent + Editor agent
7. **Code Review Bot** — Automated PR reviews with style guide
8. **Data Analyst Agent** — SQL + Python + Visualization from questions

### Advanced
9. **AI Software Engineer** — Feature spec → Implementation → Tests → PR
10. **Automated Content Pipeline** — Topic → Research → Draft → SEO → Publish
11. **Customer Support Triage** — Classify → Route → Draft response → Human review
12. **Personal Knowledge Assistant** — Obsidian/Notion integration with semantic search

---

## 📖 Essential References

### Papers & Articles
- [Attention Is All You Need](https://arxiv.org/abs/1706.03762) — Transformer paper
- [Chain-of-Thought Prompting](https://arxiv.org/abs/2201.11903) — CoT
- [ReAct: Reasoning + Acting](https://arxiv.org/abs/2210.03629) — Tool use
- [Constitutional AI](https://arxiv.org/abs/2212.08073) — Self-correction
- [RAG](https://arxiv.org/abs/2005.11401) — Retrieval-Augmented Generation

### Tools & Frameworks
| Category | Tools |
|----------|-------|
| **Orchestration** | LangChain, LangGraph, LlamaIndex, Haystack |
| **Agents** | AutoGen, CrewAI, AgentGPT, OpenAI Assistants API |
| **Evaluation** | LangSmith, TruLens, DeepEval, Ragas |
| **Deployment** | vLLM, TGI, Ollama, LM Studio, BentoML |
| **Vector DBs** | Pinecone, Weaviate, Chroma, Qdrant, Milvus |
| **Observability** | LangFuse, Helicone, Portkey, Arize |

### Model Providers
- **OpenAI** — GPT-4o, GPT-4o-mini, o1-series
- **Anthropic** — Claude 3.5 Sonnet, Haiku, Opus
- **Google** — Gemini 1.5 Pro/Flash
- **Open Source** — Llama 3.1, Qwen 2.5, Mistral Large, Nemotron 3 Ultra
- **Local** — Ollama, LM Studio, Jan, GPT4All

---

## ✅ Progress Tracker

| Module | Status | Notes |
|--------|--------|-------|
| LLM Fundamentals | ✅ Done | Transformers, scaling laws |
| Basic Prompting | ✅ Done | Zero-shot, few-shot, CoT |
| Advanced Patterns | 🟡 In Progress | ReAct, Reflexion, ToT |
| ChatGPT Notebooks | ✅ Done | 7/7 completed |
| Gemini Prompting | 🔴 Not Started | |
| RAG Implementation | 🔴 Not Started | LangChain + Chroma |
| Agent Frameworks | 🔴 Not Started | AutoGen / CrewAI |
| Evaluation & Guardrails | 🔴 Not Started | |
| Production Deployment | 🔴 Not Started | |
| Fine-tuning | 🔴 Not Started | LoRA/QLoRA |

---

## 💡 Pro Tips

1. **Prompt version control** — Save prompts with git, track performance
2. **Structured outputs** — Use JSON Schema / Pydantic for reliable parsing
3. **Cost tracking** — Log tokens per request, set budgets
4. **Fallback chains** — Try cheaper model first, escalate on failure
5. **Human-in-the-loop** — Critical decisions need human review
6. **Prompt templates** — Use Jinja2 or LangChain PromptTemplate for reusability
7. **Test systematically** — Create eval datasets, run regression tests on prompt changes

---

## 🔗 Cross-References

- **[Python Learning](../Python%20(learning%20&%20project)/README.md)** — Implementation language
- **[DA-DS-ML-DL](../DA-DS-ML-DL/README.md)** — ML foundations for understanding LLMs
- **[FullStack Learning](../FullStack%20learning/README.md)** — Building AI-powered web apps
- **[Linux](../Linux/README.md)** — GPU server setup for local models

---

*Part of [MY-LEARNINGS](../README.md) | Last updated: July 2025*