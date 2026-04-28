<img width="1919" height="908" alt="DeploySense1" src="https://github.com/user-attachments/assets/faf0783d-e6e6-4697-b455-4e4c60d63242" />
<img width="1901" height="913" alt="DeploySense2" src="https://github.com/user-attachments/assets/670144cd-9a0e-45d0-a1c4-d37a031f9da9" />

# 🚀 DeploySense – Pre-Deployment Intelligence Platform

DeploySense is an intelligent code analysis system that evaluates applications before deployment to detect potential performance risks, predict system behavior under load, and provide actionable optimization suggestions.

It helps developers understand how small inefficiencies in code can lead to large-scale production issues.

---

## 💡 Motivation

Modern applications often fail in production due to hidden inefficiencies such as blocking operations, poor database usage, and unoptimized loops.

DeploySense was built to identify these risks early in the development cycle and help developers reason about system behavior before deployment.

---

## 🌟 Features

### 🔍 Code Analysis
- Scans code for performance-related anti-patterns
- Detects issues like:
  - API calls inside loops
  - Blocking synchronous operations
  - Inefficient database usage
  - Missing error handling

### ⚠️ Risk Assessment
- Assigns weighted scores to detected issues

### 📊 System Simulation (Heuristic-based)
- Estimates system behavior under concurrent user load
- Provides approximate insights on:
  - Latency impact
  - Database stress

### 💡 Actionable Suggestions
- Suggests optimizations to fix detected issues
- Helps improve code quality before deployment

### 🎨 Modern UI
- Dark-mode, glassmorphic interface
- Built with React.js for smooth interaction

---

## 🏗️ Architecture

- **Frontend:** React.js  
- **Backend:** Node.js + Express  
- **Database:** MongoDB  
- **Containerization:** Docker  

---

## ⚙️ How It Works

- Code is submitted through the UI
- Backend parses and scans code for predefined patterns
- Risk engine evaluates severity of each issue
- Scores are aggregated into a final risk level
- System returns analysis + recommendations to UI

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (running locally or cloud instance)

---

### 1. Backend Setup

```bash
cd PreDeploy
npm install
npm start
