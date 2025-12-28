const mongoose = require('mongoose');
const dotenv = require('dotenv');
const MoodLog = require('./models/MoodLog');
const JournalEntry = require('./models/JournalEntry');
const ERPTask = require('./models/ERPTask');
const CompulsionEpisode = require('./models/CompulsionEpisode');
const User = require('./models/User');

dotenv.config();

const seedData = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');

        // Find the first user (likely the one currently logged in)
        const user = await User.findOne();
        if (!user) {
            console.log('No user found. Please register/login in the app first.');
            process.exit(1);
        }

        console.log(`Seeding data for user: ${user.name} (${user.email})`);

        const userId = user._id;

        // 1. Create Mood Logs (Last 7 days)
        const moodLogs = [
            { moodLabel: 'Anxious', anxietyScore: 8, note: 'Feeling overwhelmed by work', sleepHours: 5, createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000) },
            { moodLabel: 'Neutral', anxietyScore: 4, note: 'Better sleep, less intrusive thoughts', sleepHours: 7, createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000) },
            { moodLabel: 'Happy', anxietyScore: 2, note: 'Had a good exposure session', sleepHours: 8, createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000) },
        ];

        await MoodLog.insertMany(moodLogs.map(log => ({ ...log, user: userId })));
        console.log('Mood logs added');

        // 2. Create Journal Entries
        const journals = [
            { title: 'Morning Anxiety', content: 'Woke up worrying about contamination again. I know it is just a thought.', mood: 'Anxious', tags: ['Contamination', 'Morning'], createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000) },
            { title: 'Small Win', content: 'Resisted the urge to check the lock 5 times. Only checked once.', mood: 'Proud', tags: ['Checking', 'Win'], createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) },
        ];

        await JournalEntry.insertMany(journals.map(entry => ({ ...entry, user: userId })));
        console.log('Journal entries added');

        // 3. Create ERP Tasks (Completed)
        const erpTasks = [
            { title: 'Touch doorknob without washing', difficultyLevel: 4, isCompleted: true, completedAt: new Date(), createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000) },
            { title: 'Leave house without checking stove', difficultyLevel: 7, isCompleted: true, completedAt: new Date(), createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) },
            { title: 'Write "harm" on paper', difficultyLevel: 5, isCompleted: false, createdAt: new Date() } // Pending task
        ];

        await ERPTask.insertMany(erpTasks.map(task => ({ ...task, user: userId })));
        console.log('ERP tasks added');

        // 4. Create Compulsion Episodes
        const compulsions = [
            { compulsionName: 'Hand washing', durationMinutes: 5, didResist: false, trigger: 'Touched trash can', createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000) },
            { compulsionName: 'Checking locks', durationMinutes: 0, didResist: true, resistanceDuration: 15, trigger: 'Leaving house', createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000) }
        ];

        await CompulsionEpisode.insertMany(compulsions.map(comp => ({ ...comp, user: userId })));
        console.log('Compulsion episodes added');

        console.log('Data seeding complete!');
        process.exit();

    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
};

seedData();
