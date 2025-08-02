// サンプルデータ・デモ用データ
const sampleUserData = {
    // サンプルユーザー1: 初心者
    beginner_user: {
        id: 'user_001',
        name: '田中太郎',
        email: 'tanaka@example.com',
        registrationDate: '2024-01-15',
        currentLevel: 5,
        studyStreak: 7,
        totalStudyTime: 1200, // 分
        
        progress: {
            vocabularyLearned: 150,
            vocabularyMastered: 120,
            grammarPointsStudied: 8,
            grammarPointsMastered: 6,
            conversationHours: 2.5,
            quizzesTaken: 15,
            averageQuizScore: 78
        },
        
        preferences: {
            studyTime: 30, // 分/日
            reminderTime: '19:00',
            preferredCategories: ['greetings', 'food', 'numbers'],
            difficultyPreference: 'gradual',
            audioEnabled: true,
            vibrationEnabled: true
        },
        
        achievements: [
            {
                id: 'first_week',
                name: '1週間継続',
                description: '7日間連続で学習しました',
                earnedDate: '2024-01-22',
                icon: '🏆'
            },
            {
                id: 'vocabulary_100',
                name: '語彙100語達成',
                description: '100語の語彙を習得しました',
                earnedDate: '2024-01-25',
                icon: '📚'
            }
        ],
        
        weakAreas: ['pronunciation', 'tones'],
        strongAreas: ['vocabulary', 'basic_grammar'],
        
        studyHistory: [
            {
                date: '2024-01-29',
                studyTime: 35,
                activitiesCompleted: ['vocabulary', 'quiz', 'pronunciation'],
                score: 85,
                newWordsLearned: 8
            },
            {
                date: '2024-01-28',
                studyTime: 25,
                activitiesCompleted: ['vocabulary', 'grammar'],
                score: 72,
                newWordsLearned: 5
            }
        ]
    },
    
    // サンプルユーザー2: 中級者
    intermediate_user: {
        id: 'user_002',
        name: '佐藤花子',
        email: 'sato@example.com',
        registrationDate: '2023-08-10',
        currentLevel: 3,
        studyStreak: 45,
        totalStudyTime: 8500,
        
        progress: {
            vocabularyLearned: 800,
            vocabularyMastered: 650,
            grammarPointsStudied: 25,
            grammarPointsMastered: 20,
            conversationHours: 15.5,
            quizzesTaken: 120,
            averageQuizScore: 86
        },
        
        preferences: {
            studyTime: 60,
            reminderTime: '07:00',
            preferredCategories: ['daily_life', 'business', 'culture'],
            difficultyPreference: 'challenging',
            audioEnabled: true,
            vibrationEnabled: false
        },
        
        achievements: [
            {
                id: 'month_streak',
                name: '1ヶ月継続',
                description: '30日間連続で学習しました',
                earnedDate: '2023-09-10',
                icon: '🔥'
            },
            {
                id: 'intermediate_level',
                name: '中級レベル達成',
                description: '中級レベルに到達しました',
                earnedDate: '2023-12-15',
                icon: '🎓'
            },
            {
                id: 'conversation_master',
                name: '会話マスター',
                description: '10時間の会話練習を完了しました',
                earnedDate: '2024-01-20',
                icon: '💬'
            }
        ],
        
        weakAreas: ['formal_language', 'idioms'],
        strongAreas: ['daily_conversation', 'reading'],
        
        studyHistory: [
            {
                date: '2024-01-29',
                studyTime: 65,
                activitiesCompleted: ['conversation', 'reading', 'writing', 'quiz'],
                score: 88,
                newWordsLearned: 12
            }
        ]
    }
};

// サンプル学習セッション
const sampleStudySessions = [
    {
        id: 'session_001',
        userId: 'user_001',
        date: '2024-01-29',
        startTime: '19:00',
        endTime: '19:35',
        duration: 35,
        activities: [
            {
                type: 'vocabulary',
                category: 'food',
                wordsStudied: ['ข้าว', 'น้ำ', 'อาหาร'],
                timeSpent: 15,
                accuracy: 80
            },
            {
                type: 'quiz',
                category: 'numbers',
                questionsAnswered: 10,
                correctAnswers: 8,
                timeSpent: 10,
                accuracy: 80
            },
            {
                type: 'pronunciation',
                wordsStudied: ['สวัสดี', 'ขอบคุณ'],
                timeSpent: 10,
                accuracy: 75
            }
        ],
        overallScore: 78,
        newWordsLearned: 8,
        reviewWordsStudied: 5,
        notes: '声調の練習が必要'
    },
    
    {
        id: 'session_002',
        userId: 'user_002',
        date: '2024-01-29',
        startTime: '07:00',
        endTime: '08:05',
        duration: 65,
        activities: [
            {
                type: 'conversation',
                scenario: 'restaurant',
                timeSpent: 20,
                accuracy: 85,
                fluency: 80
            },
            {
                type: 'reading',
                textType: 'news_article',
                wordsEncountered: 25,
                comprehension: 90,
                timeSpent: 25
            },
            {
                type: 'writing',
                task: 'opinion_essay',
                wordsWritten: 150,
                grammarAccuracy: 88,
                timeSpent: 20
            }
        ],
        overallScore: 88,
        newWordsLearned: 12,
        reviewWordsStudied: 8,
        notes: '文章構成が改善された'
    }
];

// サンプル統計データ
const sampleStatistics = {
    appUsage: {
        totalUsers: 15420,
        activeUsers: 8930,
        dailyActiveUsers: 2340,
        averageSessionTime: 42, // 分
        retentionRate: {
            day1: 85,
            day7: 62,
            day30: 34
        }
    },
    
    learningData: {
        totalWordsLearned: 1250000,
        totalStudyHours: 45600,
        averageWordsPerUser: 180,
        mostPopularCategories: [
            { category: 'greetings', users: 14200 },
            { category: 'food', users: 13800 },
            { category: 'numbers', users: 13500 },
            { category: 'family', users: 12900 },
            { category: 'colors', users: 12100 }
        ],
        levelDistribution: {
            level5: 45, // パーセンテージ
            level4: 30,
            level3: 15,
            level2: 8,
            level1: 2
        }
    },
    
    performance: {
        averageQuizScore: 76,
        vocabularyRetentionRate: 68,
        grammarAccuracy: 72,
        pronunciationAccuracy: 65,
        conversationFluency: 58
    }
};

// サンプル学習コンテンツ
const sampleLearningContent = {
    dailyLesson: {
        id: 'daily_001',
        date: '2024-01-29',
        theme: 'レストランでの注文',
        level: 2,
        estimatedTime: 30,
        
        sections: [
            {
                type: 'vocabulary',
                title: '新しい語彙',
                words: [
                    {
                        thai: 'ร้านอาหาร',
                        romanization: 'ラーン・アーハーン',
                        meaning: 'レストラン',
                        example: 'ร้านอาหารนี้อร่อยมาก'
                    },
                    {
                        thai: 'เมนู',
                        romanization: 'メニュー',
                        meaning: 'メニュー',
                        example: 'ขอดูเมนูหน่อย'
                    }
                ]
            },
            {
                type: 'grammar',
                title: '文法ポイント',
                point: '丁寧な依頼表現',
                explanation: '「ขอ + 動詞 + หน่อย」で丁寧な依頼を表現できます',
                examples: [
                    'ขอน้ำหน่อย (お水をください)',
                    'ขอดูหน่อย (ちょっと見せてください)'
                ]
            },
            {
                type: 'conversation',
                title: '会話練習',
                dialogue: [
                    {
                        speaker: 'customer',
                        thai: 'ขอดูเมนูหน่อยครับ',
                        meaning: 'メニューを見せてください'
                    },
                    {
                        speaker: 'waiter',
                        thai: 'ครับ นี่ครับ',
                        meaning: 'はい、こちらです'
                    }
                ]
            }
        ]
    },
    
    culturalNote: {
        id: 'culture_001',
        title: 'タイの食事マナー',
        content: 'タイでは食事の際にフォークとスプーンを使用します。フォークは左手、スプーンは右手に持ち、フォークで食べ物をスプーンに押し付けて食べます。',
        tips: [
            '箸は麺類の時のみ使用',
            '手で食べるのは果物やお菓子のみ',
            '年上の人が食べ始めてから食事を開始'
        ],
        image: 'thai_dining_etiquette.jpg'
    }
};

// サンプルクイズデータ
const sampleQuizzes = {
    vocabulary_quiz: {
        id: 'quiz_vocab_001',
        title: '基本語彙クイズ',
        category: 'greetings',
        level: 5,
        timeLimit: 300, // 秒
        questions: [
            {
                id: 'q001',
                type: 'multiple_choice',
                question: '「こんにちは」をタイ語で何と言いますか？',
                options: ['สวัสดี', 'ลาก่อน', 'ขอบคุณ', 'ขอโทษ'],
                correctAnswer: 0,
                explanation: 'สวัสดี（サワディー）は時間に関係なく使える挨拶です。'
            },
            {
                id: 'q002',
                type: 'audio_recognition',
                question: '音声を聞いて正しいタイ語を選んでください',
                audioFile: 'ขอบคุณ.mp3',
                options: ['สวัสดี', 'ขอบคุณ', 'ลาก่อน', 'ไม่เป็นไร'],
                correctAnswer: 1,
                explanation: 'ขอบคุณ（コープクン）は「ありがとう」という意味です。'
            }
        ]
    },
    
    grammar_quiz: {
        id: 'quiz_grammar_001',
        title: '基本文法クイズ',
        category: 'grammar',
        level: 4,
        timeLimit: 600,
        questions: [
            {
                id: 'g001',
                type: 'sentence_completion',
                question: '空欄に適切な語を入れてください：「私は日本人___」',
                sentence: 'ผม___คนญี่ปุ่น',
                options: ['เป็น', 'มี', 'อยู่', 'ไป'],
                correctAnswer: 0,
                explanation: '「เป็น」は「〜である」という意味の動詞です。'
            }
        ]
    }
};

// ユーティリティ関数
const sampleDataUtils = {
    // ランダムユーザーデータ生成
    generateRandomUser: () => {
        const names = ['田中', '佐藤', '鈴木', '高橋', '渡辺'];
        const firstNames = ['太郎', '花子', '次郎', '美咲', '健太'];
        
        return {
            id: `user_${Date.now()}`,
            name: `${names[Math.floor(Math.random() * names.length)]}${firstNames[Math.floor(Math.random() * firstNames.length)]}`,
            registrationDate: new Date().toISOString().split('T')[0],
            currentLevel: Math.floor(Math.random() * 5) + 1,
            studyStreak: Math.floor(Math.random() * 100),
            totalStudyTime: Math.floor(Math.random() * 10000),
            progress: {
                vocabularyLearned: Math.floor(Math.random() * 1000),
                vocabularyMastered: Math.floor(Math.random() * 800),
                grammarPointsStudied: Math.floor(Math.random() * 30),
                grammarPointsMastered: Math.floor(Math.random() * 25),
                conversationHours: Math.floor(Math.random() * 50),
                quizzesTaken: Math.floor(Math.random() * 200),
                averageQuizScore: Math.floor(Math.random() * 40) + 60
            }
        };
    },
    
    // サンプル学習セッション生成
    generateSampleSession: (userId) => {
        const activities = ['vocabulary', 'grammar', 'conversation', 'quiz', 'reading'];
        const categories = ['greetings', 'food', 'family', 'numbers', 'colors'];
        
        return {
            id: `session_${Date.now()}`,
            userId: userId,
            date: new Date().toISOString().split('T')[0],
            duration: Math.floor(Math.random() * 60) + 15,
            activities: activities.slice(0, Math.floor(Math.random() * 3) + 1).map(activity => ({
                type: activity,
                category: categories[Math.floor(Math.random() * categories.length)],
                timeSpent: Math.floor(Math.random() * 20) + 5,
                accuracy: Math.floor(Math.random() * 40) + 60
            })),
            overallScore: Math.floor(Math.random() * 40) + 60,
            newWordsLearned: Math.floor(Math.random() * 15) + 1
        };
    },
    
    // デモデータリセット
    resetDemoData: () => {
        return {
            users: [sampleUserData.beginner_user, sampleUserData.intermediate_user],
            sessions: sampleStudySessions,
            statistics: sampleStatistics
        };
    }
};

// エクスポート（ブラウザ環境用）
if (typeof window !== 'undefined') {
    window.sampleUserData = sampleUserData;
    window.sampleStudySessions = sampleStudySessions;
    window.sampleStatistics = sampleStatistics;
    window.sampleLearningContent = sampleLearningContent;
    window.sampleQuizzes = sampleQuizzes;
    window.sampleDataUtils = sampleDataUtils;
}

// Node.js環境用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        sampleUserData,
        sampleStudySessions,
        sampleStatistics,
        sampleLearningContent,
        sampleQuizzes,
        sampleDataUtils
    };
}