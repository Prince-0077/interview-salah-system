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

    ### 🗄️ Database Schema Design (Initial Thoughts)
I am currently learning how to structure data for an AI app. Since AI results can be unpredictable, I'm choosing **MongoDB**. 

Here is my "First Draft" of how a User's Interview session will look:

- **User Collection:** `name`, `email`, `experience_level`.
- **Interview Collection:** - `userId`: (To know who gave the interview)
  - `video_url`: (Where the recording is stored)
  - `ai_report`: { `behavioral_score`, `technical_gaps`, `sentiment_analysis` }

*Question I am researching:* Should I store the full transcript in the same document or a different collection? (Thinking about performance!)