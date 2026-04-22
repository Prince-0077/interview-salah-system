# 🏛️ How I am thinking about this System

This is not a final architecture. These are just my notes while I study System Design.

## 1. The Big Idea
I w ant to make it fast. I read that "Latency" is a big issue in AI. 
- **Idea:** Maybe do some small analysis in the browser? 
- **Problem:** Will it make the browser slow? Still researching this.

## 2. Parts of the System (Plan)
| Part | What it does | My Current Confusion |
| :--- 
| **Frontend** | Next.js UI  b | How to handle high-quality audio streams? 
| **Backend** | Node.js | Should I use Microservices? (Maybe too hard for now). |
| **Database** | MongoDB | How to store long AI transcripts efficiently? |

## 3. Database Thoughts
I am choosing MongoDB for now because I don't know the final structure of AI feedback. SQL feels too rigid for a beginner project like this.

---
*Last Updated: Just now | Prince (Learning)*