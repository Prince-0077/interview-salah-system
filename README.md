# 🎙️ Interview Salah - My Learning Project

I am a B.Tech student and I am using this project to learn how big systems work. It is not perfect yet, but I am building it step-by-step. 

> **Current Status:** Learning how to design the architecture. 🏗️

---

## 🏗️ What I am trying to do
I want to build an AI that can help people with interviews. But instead of just coding, I want to understand **System Design**. 

### 🗺️ My First Draft (Thinking Phase)
I made this basic diagram to understand how data might flow. I am still confused about where to put the AI processing part, but here is my first idea:

```mermaid
graph LR
    User --> Frontend
    Frontend --> Backend
    Backend --> Database
    Backend -.-> AI_Logic[AI Engine - Not sure about this yet]