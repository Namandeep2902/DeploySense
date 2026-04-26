# 🚀 Pre-Deployment Intelligence Platform (DeploySense)

**DeploySense** is an intelligent analysis system that analyzes code before deployment, detects risky patterns, predicts system impact, and provides explainable optimization suggestions.

## 🌟 Features

- **Code Analysis**: Scans code for common anti-patterns like blocking loops, DB overuse, and missing error handling.
- **Risk Assessment**: Calculates a risk score and assigns a risk level (Low, Medium, High).
- **System Simulation**: Predicts latency and database load based on concurrent user numbers.
- **Actionable Suggestions**: Provides clear recommendations on how to fix detected issues.
- **Modern UI**: A premium, dark-mode glassmorphic interface built with **React**.

## 🏗️ Architecture

- **Frontend**: React.js
- **Backend**: Node.js + Express
- **Database**: MongoDB

## 🚀 Getting Started

### Prerequisites

You need the following installed on your system:
- Node.js (v18+)
- MongoDB (running on `mongodb://localhost:27017`)

### 1. Backend Setup

```bash
cd PreDeploy
npm install

# Start the backend server
npm start
```

### 2. Frontend Setup

```bash
cd PreDeploy/frontend
npm install

# Start the React dev server
npm start
```

## 🔌 API Endpoints

- `POST /api/analyze` - Submit code for analysis.
- `GET /api/analyze/history` - Fetch recent analyses.

## 🛠️ Testing with Sample Snippets

You can use the built-in sample snippets in the UI to see how PDIP detects issues:
1. **Blocking Loop**: Simulates a CPU freeze using `Date.now()`.
2. **DB Overuse**: Connects to the database on every request.
3. **No Error Handling**: Fails to wrap risky operations in `try/catch`.
4. **Clean Code**: Passes analysis perfectly!
