# MindEase – OCD Tracker & AI Companion
**This is an open-source project. Please contribute to help improve the lives of people who are living with OCD.**

MindEase is a supportive and privacy-focused web application designed to help people understand their OCD patterns in a calm, structured, and non-judgmental space. It combines traditional mental-health tracking tools with AI-assisted Cognitive Behavioral Therapy (CBT) and Exposure and Response Prevention (ERP) techniques.

The goal is not to diagnose or treat—MindEase simply gives users a safe place to reflect, track, and navigate their daily challenges with a little more clarity.

---

## Features

###  AI & Smart Insights (New!)
- **AI Check-in Coach**: Have a natural conversation to log your mood. The AI automatically extracts anxiety scores and sleep data from your chat.
- **OCD Themes Analyzer**: Visual radar charts detect patterns in your logs (e.g., Contamination, Checking, Harm OCD).
- **Symptom Drift Detection**: AI identifies hidden correlations (e.g., "Anxiety spikes on Sundays" or "Poor sleep triggers compulsions").
- **Tiny Wins**: Micro-celebrations for resisting compulsions, maintaining streaks, and completing exposures.

###  Community Support (New!)
- **Social Stories**: Share your recovery journey and read stories from others.
- **Anonymous Posting**: Option to post stories and comments anonymously for complete privacy.
- **Supportive Environment**: A safe space to feel less alone.

###  Tracking & Awareness
- Daily check-ins for mood, anxiety, and intrusive thoughts
- Compulsion and trigger tracking
- Clear weekly, monthly, and long-term insights
- Visual charts to highlight patterns and progress

###  Private Journal
- Secure, personal space to document thoughts
- Encrypted entries to protect privacy
- Ability to search and revisit reflections over time

###  AI Companion
- Supportive, conversational guidance inspired by CBT principles
- Structured “thought deconstruction” to help analyze intrusive thoughts
- Grounding tools and gentle reframing suggestions
- ERP ladder generator tailored to personal fear themes

###  ERP & Habit Tools
- Create and track ERP exposure tasks
- “Compulsion Timer” to delay and resist urges
- Resistance Score to gamify recovery
- Routine and habit-building tools to encourage consistency

###  UI/UX
- Clean, simple, and calming interface
- Smooth transitions without visual overload
- Fully responsive layout for mobile and desktop
- Quick Hide mode for privacy when needed

---

## Tech Stack

**Frontend:** React (Vite), Tailwind CSS, Framer Motion, Recharts
**Backend:** Node.js, Express.js
**Database:** MongoDB (local or in-memory fallback)
**AI Integration:** OpenAI API (configurable)
**Authentication:** JSON Web Tokens (JWT) with HTTP-only cookies

---

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18 or higher)
*   [npm](https://www.npmjs.com/) (usually comes with Node.js)
*   [MongoDB](https://www.mongodb.com/try/download/community) (Optional for dev: the app falls back to an in-memory database if no Mongo URI is provided)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/MindEase_OCD_Tracker_and_AI_Companion.git
    cd MindEase_OCD_Tracker_and_AI_Companion
    ```

2.  **Install dependencies**
    
    Install dependencies for both the root (if any scripts exist), backend, and frontend:
    ```bash
    # Install backend dependencies
    cd backend
    npm install

    # Install frontend dependencies
    cd ../frontend
    npm install
    ```

3.  **Environment Configuration**

    Create a `.env` file in the `backend` directory with the following variables:
    ```env
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/mindease  # Or your MongoDB Atlas URI
    JWT_SECRET=your_super_secret_jwt_key
    NODE_ENV=development
    FRONTEND_URL=http://localhost:5173
    
    # AI API Keys (Required for AI features)
    OPENAI_API_KEY=your_openai_api_key
    GEMINI_API_KEY=your_google_gemini_api_key
    ```

### Running the Application

You can run both the backend and frontend concurrently from the root directory (if a root script is set up) or separately.

**Option 1: Run everything from the backend folder (Recommended)**
The backend `package.json` has a script to run both:
```bash
cd backend
npm run dev:all
```

**Option 2: Run separately**
*   **Backend:**
    ```bash
    cd backend
    npm run dev
    ```
*   **Frontend:**
    ```bash
    cd frontend
    npm run dev
    ```

The frontend will be available at `http://localhost:5173` and the backend at `http://localhost:5000`.

## 🤝 Contributing

We welcome contributions from the community! This is an open-source project, and we appreciate your help in making it better.

### How to Contribute

1.  **Fork the Project**: Click the "Fork" button at the top right of this page.
2.  **Create your Feature Branch**: `git checkout -b feature/AmazingFeature`
3.  **Commit your Changes**: `git commit -m 'Add some AmazingFeature'`
4.  **Push to the Branch**: `git push origin feature/AmazingFeature`
5.  **Open a Pull Request**: Go to the original repository and click "New Pull Request".

### Guidelines
*   Please ensure your code follows the existing style and conventions.
*   Update documentation if you change any logic or add new features.
*   Be respectful and kind in all interactions.

## 📄 License

This project is licensed under the **ISC License**. See the `package.json` file for details.

## 📞 Support

If you have any questions or run into issues, please open an issue in the repository or contact the maintainers.

---

*Note: This project is for educational and supportive purposes and is not a substitute for professional medical advice, diagnosis, or treatment.*
