# MindEase OCD Tracker and AI Companion

MindEase is an open-source web application designed to help individuals manage OCD (Obsessive-Compulsive Disorder) through tracking, journaling, and AI-powered support. It combines cognitive behavioral therapy (CBT) and exposure and response prevention (ERP) techniques with modern technology to provide a supportive companion for mental wellness.

## 🚀 Features

*   **AI Companion**: Interact with an AI coach for:
    *   **Chat**: General support and conversation.
    *   **Deconstruction**: Analyze and break down intrusive thoughts.
    *   **Check-in**: Guided emotional check-ins.
*   **Tracking Tools**:
    *   **Mood Logging**: Track your mood, anxiety levels, and sleep.
    *   **Compulsion Tracking**: Log compulsion episodes to identify patterns.
    *   **ERP Tasks**: Manage and track Exposure and Response Prevention tasks.
*   **Analytics**: Visualize your progress with charts and insights on mood trends and compulsion frequency.
*   **Journaling**: A secure space to write down thoughts and experiences.
*   **Community**: Connect with others (feature in development).
*   **Secure Authentication**: User accounts protected with JWT authentication.

## 🛠️ Tech Stack

**Frontend:**
*   [React](https://react.dev/) (v19)
*   [Vite](https://vitejs.dev/) - Build tool
*   [Tailwind CSS](https://tailwindcss.com/) (v4) - Styling
*   [Framer Motion](https://www.framer.com/motion/) - Animations
*   [Recharts](https://recharts.org/) - Data Visualization
*   [Lucide React](https://lucide.dev/) - Icons

**Backend:**
*   [Node.js](https://nodejs.org/) & [Express](https://expressjs.com/)
*   [MongoDB](https://www.mongodb.com/) - Database (Mongoose ODM)
*   [OpenAI API](https://openai.com/) & [Google Gemini API](https://ai.google.dev/) - AI capabilities
*   [JSON Web Token (JWT)](https://jwt.io/) - Authentication

## 🏁 Getting Started

Follow these instructions to set up the project locally.

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
