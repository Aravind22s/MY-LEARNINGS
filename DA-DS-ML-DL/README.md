# 📊 DA-DS-ML-DL — Data Analysis, Data Science, ML & Deep Learning

> End-to-end learning path: Data preprocessing → ML Algorithms → Practice Projects → MLOps Basics

---

## 📁 Folder Structure

```
DA-DS-ML-DL/
├── Basics/                                    # 📚 Foundational Libraries
│   └── Libraries_for_data_preprocessing.ipynb  # Pandas, NumPy, Sklearn preprocessing
│
├── Datasets/                                  # 📦 Practice Datasets
│   ├── titanic.csv                            # Classification (survival prediction)
│   ├── California Housing Dataset.csv         # Regression (house prices)
│   ├── IMDB_dataset.csv                       # NLP / Sentiment analysis
│   ├── adult.data                             # Classification (income >50K)
│   ├── heart_disease_dataset.csv              # Classification (medical)
│   ├── old_car_price_dataset.csv              # Regression (used cars)
│   └── Wholesale customers data.csv           # Clustering (customer segmentation)
│
├── Model learning/                            # 🧠 Core ML Algorithm Implementations
│   ├── Regression_models.ipynb                # Linear, Ridge, Lasso, Decision Tree, Random Forest, XGBoost
│   ├── Classification_models.ipynb            # Logistic, KNN, SVM, Decision Tree, RF, XGBoost, Naive Bayes
│   └── Clustering_models.ipynb                # K-Means, Hierarchical, DBSCAN, Gaussian Mixture
│
├── Practice/                                  # 🛠️ End-to-End Projects
│   ├── regression_practice.ipynb              # California Housing → EDA → Models → Evaluation → Deploy
│   ├── classification_practice.ipynb          # Titanic/Heart Disease → Full pipeline
│   ├── clustering_practice.ipynb              # Wholesale/Mall Customers → Segmentation
│   ├── sentiment_analysis/
│   │   └── sentiment_analysis.ipynb           # IMDB reviews → NLP → Classification → Flask API
│   ├── app.py                                 # Flask app for model serving
│   ├── financial_report.html                  # Sample report output
│   ├── cluster_model.pkl                      # Saved clustering model
│   ├── cluster_scaler.pkl                     # Saved scaler
│   └── .env                                   # Environment variables
│
├── Lifecycle.ipynb                            # 🔄 Complete ML Lifecycle (CRISP-DM / MLOps)
├── Mathematics_for_AI_ML.pdf                  # 📐 Math Reference (LinAlg, Calc, Prob, Stats)
├── UnderstandingDeepLearning_05_29_25_C.pdf   # 📖 Deep Learning Theory (Goodfellow et al.)
├── Task.pdf                                   # 📋 Practice assignments
└── README.md                                  # This file
```

---

## 🗺️ Recommended Learning Order

### Phase 1: Foundations (Week 1-2)
```
1. Basics/Libraries_for_data_preprocessing.ipynb
   → Pandas: DataFrames, cleaning, merging, groupby
   → NumPy: Arrays, broadcasting, vectorization
   → Sklearn: Scaling, encoding, imputation, train_test_split

2. Mathematics_for_AI_ML.pdf (reference while learning)
   → Linear Algebra: Vectors, matrices, eigenvalues, SVD
   → Calculus: Gradients, chain rule, optimization
   → Probability: Distributions, Bayes, expectation
   → Statistics: Hypothesis testing, confidence intervals
```

### Phase 2: Core ML Algorithms (Week 3-5)
```
3. Model learning/Regression_models.ipynb
   → Theory + Sklearn implementation + Hyperparameter tuning

4. Model learning/Classification_models.ipynb
   → Metrics: Accuracy, Precision, Recall, F1, ROC-AUC, Confusion Matrix

5. Model learning/Clustering_models.ipynb
   → Unsupervised learning, Elbow method, Silhouette score
```

### Phase 3: Practice Projects (Week 6-8)
```
6. Practice/regression_practice.ipynb
   → California Housing: EDA → Feature Engineering → Model Selection → GridSearchCV

7. Practice/classification_practice.ipynb
   → Titanic or Heart Disease: Imbalanced data handling, Threshold tuning

8. Practice/clustering_practice.ipynb
   → Customer Segmentation: PCA for viz, Business interpretation
```

### Phase 4: NLP & Deployment (Week 9-10)
```
9. Practice/sentiment_analysis/sentiment_analysis.ipynb
   → Text preprocessing, TF-IDF/Word2Vec, Classification, Model saving

10. Practice/app.py
    → Flask REST API, Dockerize, Deploy to Render/Heroku/Railway
```

### Phase 5: MLOps & Deep Learning (Week 11+)
```
11. Lifecycle.ipynb
    → MLflow tracking, Model registry, CI/CD, Monitoring, Retraining

12. UnderstandingDeepLearning.pdf + PyTorch/TensorFlow tutorials
    → Neural Nets, CNNs, RNNs, Transformers
```

---

## 📓 Notebook Guide

| Notebook | Difficulty | Time | Key Skills |
|----------|------------|------|------------|
| `Libraries_for_data_preprocessing.ipynb` | Beginner | 3-4 hrs | Pandas, NumPy, Sklearn preprocessing |
| `Regression_models.ipynb` | Beginner-Intermediate | 4-5 hrs | 7+ regression algorithms, tuning |
| `Classification_models.ipynb` | Beginner-Intermediate | 4-5 hrs | 8+ classifiers, metrics, imbalanced data |
| `Clustering_models.ipynb` | Intermediate | 3-4 hrs | K-Means, DBSCAN, Hierarchical, evaluation |
| `regression_practice.ipynb` | Intermediate | 5-6 hrs | End-to-end regression project |
| `classification_practice.ipynb` | Intermediate | 5-6 hrs | End-to-end classification project |
| `clustering_practice.ipynb` | Intermediate | 4-5 hrs | Customer segmentation project |
| `sentiment_analysis.ipynb` | Intermediate-Advanced | 6-8 hrs | NLP pipeline + Flask deployment |
| `Lifecycle.ipynb` | Advanced | 8-10 hrs | MLflow, model versioning, monitoring |

---

## 📊 Datasets Quick Reference

| Dataset | Task | Target | Rows | Features | Source |
|---------|------|--------|------|----------|--------|
| `titanic.csv` | Classification | Survived (0/1) | 891 | 12 | Kaggle |
| `California Housing Dataset.csv` | Regression | Median House Value | 20,640 | 8 | Sklearn |
| `IMDB_dataset.csv` | NLP/Classification | Sentiment (pos/neg) | 50,000 | 2 | Kaggle |
| `adult.data` | Classification | Income (>50K) | 48,842 | 14 | UCI |
| `heart_disease_dataset.csv` | Classification | Heart Disease (0/1) | ~300 | 13 | UCI |
| `old_car_price_dataset.csv` | Regression | Price | ~8,000 | 10 | Kaggle |
| `Wholesale customers data.csv` | Clustering | Customer segments | 440 | 7 | UCI |

---

## 🛠️ Practice Project Checklist

### Regression Project (`regression_practice.ipynb`)
- [ ] EDA: Distributions, correlations, outliers
- [ ] Feature engineering: Log transform, polynomial features
- [ ] Baseline: Linear Regression
- [ ] Regularization: Ridge, Lasso, ElasticNet
- [ ] Tree-based: Decision Tree, Random Forest, XGBoost
- [ ] Hyperparameter tuning: GridSearchCV / Optuna
- [ ] Model evaluation: RMSE, MAE, R², Residual plots
- [ ] Save model: `joblib.dump()`

### Classification Project (`classification_practice.ipynb`)
- [ ] EDA: Class balance, feature-target relationships
- [ ] Preprocessing: Encoding, scaling, imputation
- [ ] Handle imbalance: SMOTE, class_weight, threshold tuning
- [ ] Models: Logistic, KNN, SVM, Tree, RF, XGBoost
- [ ] Evaluation: Confusion matrix, ROC-AUC, PR curve
- [ ] Explainability: Feature importance, SHAP (optional)
- [ ] Save pipeline: `joblib.dump()`

### Clustering Project (`clustering_practice.ipynb`)
- [ ] EDA & Scaling (critical for distance-based algos)
- [ ] K-Means: Elbow, Silhouette, Gap statistic
- [ ] Hierarchical: Dendrogram, linkage methods
- [ ] DBSCAN: eps, min_samples tuning
- [ ] PCA/t-SNE for 2D visualization
- [ ] Cluster profiling: Mean features per cluster
- [ ] Business interpretation

### Sentiment Analysis (`sentiment_analysis/`)
- [ ] Text cleaning: Lowercase, remove HTML, punctuation, stopwords
- [ ] Tokenization, Lemmatization
- [ ] Vectorization: TF-IDF, Word2Vec, or BERT embeddings
- [ ] Classification: Logistic, SVM, Naive Bayes, Transformer fine-tune
- [ ] Flask API: `/predict` endpoint
- [ ] Dockerfile + Deploy

---

## 📚 Key References

| Resource | Type | Link |
|----------|------|------|
| *Hands-On ML with Scikit-Learn, Keras & TensorFlow* (Géron) | Book | O'Reilly |
| *Introduction to Statistical Learning* (James et al.) | Book | Free PDF |
| *Mathematics for Machine Learning* (Deisenroth et al.) | Book | [mml-book.github.io](https://mml-book.github.io) |
| Scikit-learn User Guide | Docs | [sklearn.org](https://scikit-learn.org/stable/user_guide.html) |
| Kaggle Learn | Courses | [kaggle.com/learn](https://www.kaggle.com/learn) |
| MLflow Tutorial | Docs | [mlflow.org/docs](https://mlflow.org/docs/latest/index.html) |

---

## ✅ Progress Tracker

| Module | Status | Notes |
|--------|--------|-------|
| Data Preprocessing (Pandas/NumPy/Sklearn) | ✅ Done | |
| Regression Algorithms | ✅ Done | |
| Classification Algorithms | ✅ Done | |
| Clustering Algorithms | ✅ Done | |
| Regression Practice Project | 🟡 In Progress | |
| Classification Practice Project | 🟡 In Progress | |
| Clustering Practice Project | 🔴 Not Started | |
| Sentiment Analysis + Deployment | 🔴 Not Started | |
| ML Lifecycle / MLOps | 🔴 Not Started | |
| Deep Learning Basics | 🔴 Not Started | |

---

## 💡 Tips for Effective Learning

1. **Type, don't copy-paste** — Muscle memory matters
2. **Break the code** — Change params, remove lines, see what breaks
3. **Explain aloud** — If you can't explain it, you don't understand it
4. **Build from scratch** — Re-implement 1 algorithm per week without sklearn
5. **Document** — Add markdown cells explaining *why*, not just *what*
6. **Version control** — Commit after each notebook section

---

## 🔗 Related Folders

- **[Python (learning & project)](../Python%20(learning%20&%20project)/README.md)** — Python fundamentals for DS
- **[SQL Learning & Project](../SQL%20Learning%20&%20Project/README.md)** — Data extraction skills
- **[FullStack learning](../FullStack%20learning/README.md)** — Flask/Django for ML deployment

---

*Part of [MY-LEARNINGS](../README.md) | Last updated: July 2025*