// カテゴリ定義データ
const categoryDefinitions = {
    // 基本カテゴリ
    greetings: {
        id: 'greetings',
        name: '挨拶',
        nameEng: 'Greetings',
        nameThai: 'การทักทาย',
        description: '日常的な挨拶表現',
        icon: '👋',
        color: '#FF6B6B',
        level: 1,
        priority: 1,
        estimatedTime: 30, // 分
        keywords: ['hello', 'goodbye', 'thank you', 'sorry'],
        culturalNotes: 'タイでは時間帯に関係なく「สวัสดี」を使用します。',
        learningTips: '丁寧語の「ครับ/ค่ะ」を付けることを忘れずに。'
    },
    
    family: {
        id: 'family',
        name: '家族',
        nameEng: 'Family',
        nameThai: 'ครอบครัว',
        description: '家族関係を表す語彙',
        icon: '👨‍👩‍👧‍👦',
        color: '#4ECDC4',
        level: 1,
        priority: 2,
        estimatedTime: 45,
        keywords: ['father', 'mother', 'child', 'sibling'],
        culturalNotes: 'タイでは年上の人を敬う文化があり、家族の呼び方も重要です。',
        learningTips: '「พี่」「น้อง」は家族以外でも年齢関係で使用されます。'
    },
    
    food: {
        id: 'food',
        name: '食べ物',
        nameEng: 'Food',
        nameThai: 'อาหาร',
        description: '食べ物・飲み物に関する語彙',
        icon: '🍽️',
        color: '#45B7D1',
        level: 1,
        priority: 3,
        estimatedTime: 60,
        keywords: ['rice', 'water', 'meat', 'fruit', 'vegetable'],
        culturalNotes: 'タイ料理は世界的に有名で、「ข้าว」（米）が主食です。',
        learningTips: '食材の名前を覚えると、レストランでの注文に役立ちます。'
    },
    
    colors: {
        id: 'colors',
        name: '色',
        nameEng: 'Colors',
        nameThai: 'สี',
        description: '基本的な色の名前',
        icon: '🎨',
        color: '#96CEB4',
        level: 1,
        priority: 4,
        estimatedTime: 30,
        keywords: ['red', 'blue', 'green', 'yellow', 'white', 'black'],
        culturalNotes: '黄色は王室の色として特別な意味を持ちます。',
        learningTips: '色の名前は形容詞として使用されることが多いです。'
    },
    
    numbers: {
        id: 'numbers',
        name: '数字',
        nameEng: 'Numbers',
        nameThai: 'ตัวเลข',
        description: '基本的な数字（1-10）',
        icon: '🔢',
        color: '#FFEAA7',
        level: 1,
        priority: 5,
        estimatedTime: 40,
        keywords: ['one', 'two', 'three', 'counting'],
        culturalNotes: 'タイ語の数字は日常生活で頻繁に使用されます。',
        learningTips: '数字は買い物や時間を表現する際に必須です。'
    },
    
    time: {
        id: 'time',
        name: '時間',
        nameEng: 'Time',
        nameThai: 'เวลา',
        description: '時間に関する表現',
        icon: '⏰',
        color: '#DDA0DD',
        level: 1,
        priority: 6,
        estimatedTime: 50,
        keywords: ['day', 'month', 'year', 'today', 'yesterday', 'tomorrow'],
        culturalNotes: 'タイでは仏暦を使用することもあります。',
        learningTips: '時間表現は日常会話で非常に重要です。'
    },
    
    body: {
        id: 'body',
        name: '体',
        nameEng: 'Body Parts',
        nameThai: 'ส่วนของร่างกาย',
        description: '体の部位の名前',
        icon: '🧍',
        color: '#FAB1A0',
        level: 1,
        priority: 7,
        estimatedTime: 45,
        keywords: ['head', 'eye', 'ear', 'nose', 'mouth', 'hand', 'foot'],
        culturalNotes: '体の部位は医療や健康に関する会話で重要です。',
        learningTips: '体の部位は感情表現でもよく使用されます。'
    },
    
    animals: {
        id: 'animals',
        name: '動物',
        nameEng: 'Animals',
        nameThai: 'สัตว์',
        description: '基本的な動物の名前',
        icon: '🐘',
        color: '#74B9FF',
        level: 1,
        priority: 8,
        estimatedTime: 40,
        keywords: ['elephant', 'dog', 'cat', 'bird', 'fish'],
        culturalNotes: '象はタイの国の象徴として特別な地位を持ちます。',
        learningTips: '動物の名前は子供向けの歌や物語でよく使われます。'
    },
    
    transport: {
        id: 'transport',
        name: '交通',
        nameEng: 'Transportation',
        nameThai: 'การขนส่ง',
        description: '交通手段に関する語彙',
        icon: '🚗',
        color: '#A29BFE',
        level: 2,
        priority: 9,
        estimatedTime: 35,
        keywords: ['car', 'bus', 'train', 'plane', 'boat', 'bicycle'],
        culturalNotes: 'バンコクでは渋滞が深刻で、様々な交通手段があります。',
        learningTips: '旅行や移動の際に必要な基本語彙です。'
    },
    
    weather: {
        id: 'weather',
        name: '天気',
        nameEng: 'Weather',
        nameThai: 'สภาพอากาศ',
        description: '天気・気候に関する語彙',
        icon: '🌤️',
        color: '#6C5CE7',
        level: 1,
        priority: 10,
        estimatedTime: 30,
        keywords: ['sun', 'rain', 'wind', 'cloud', 'hot', 'cold'],
        culturalNotes: 'タイは熱帯気候で、雨季と乾季があります。',
        learningTips: '天気の話題は日常会話の定番です。'
    },
    
    emotions: {
        id: 'emotions',
        name: '感情',
        nameEng: 'Emotions',
        nameThai: 'อารมณ์',
        description: '感情・気持ちを表す語彙',
        icon: '😊',
        color: '#FD79A8',
        level: 1,
        priority: 11,
        estimatedTime: 40,
        keywords: ['happy', 'sad', 'angry', 'love', 'good', 'bad'],
        culturalNotes: '感情表現は人間関係において重要な役割を果たします。',
        learningTips: '感情を表す語彙は日常会話で頻繁に使用されます。'
    },
    
    daily_life: {
        id: 'daily_life',
        name: '日常生活',
        nameEng: 'Daily Life',
        nameThai: 'ชีวิตประจำวัน',
        description: '日常生活に関する基本語彙',
        icon: '🏠',
        color: '#00B894',
        level: 2,
        priority: 12,
        estimatedTime: 55,
        keywords: ['home', 'school', 'work', 'money', 'shopping'],
        culturalNotes: 'タイの日常生活は家族中心で、仏教の影響が強いです。',
        learningTips: '日常生活の語彙は実用性が高く、すぐに使えます。'
    },

    // 中級カテゴリ
    shopping: {
        id: 'shopping',
        name: '買い物',
        nameEng: 'Shopping',
        nameThai: 'การซื้อของ',
        description: '買い物に関する語彙',
        icon: '🛒',
        color: '#E17055',
        level: 2,
        priority: 13,
        estimatedTime: 45,
        keywords: ['buy', 'sell', 'price', 'market', 'shop'],
        culturalNotes: 'タイでは市場での値段交渉が一般的です。',
        learningTips: '数字と一緒に覚えると効果的です。'
    },
    
    directions: {
        id: 'directions',
        name: '方向・場所',
        nameEng: 'Directions & Places',
        nameThai: 'ทิศทางและสถานที่',
        description: '方向や場所を表す語彙',
        icon: '🧭',
        color: '#00CEC9',
        level: 2,
        priority: 14,
        estimatedTime: 50,
        keywords: ['left', 'right', 'straight', 'here', 'there'],
        culturalNotes: '道案内は旅行者にとって重要なスキルです。',
        learningTips: '地図を見ながら練習すると覚えやすいです。'
    },
    
    health: {
        id: 'health',
        name: '健康・医療',
        nameEng: 'Health & Medical',
        nameThai: 'สุขภาพและการแพทย์',
        description: '健康・医療に関する語彙',
        icon: '🏥',
        color: '#FF7675',
        level: 3,
        priority: 15,
        estimatedTime: 60,
        keywords: ['hospital', 'doctor', 'medicine', 'sick', 'healthy'],
        culturalNotes: 'タイでは伝統医学と現代医学が共存しています。',
        learningTips: '緊急時に備えて基本的な表現を覚えましょう。'
    },
    
    education: {
        id: 'education',
        name: '教育・学習',
        nameEng: 'Education & Learning',
        nameThai: 'การศึกษาและการเรียนรู้',
        description: '教育・学習に関する語彙',
        icon: '📚',
        color: '#FDCB6E',
        level: 2,
        priority: 16,
        estimatedTime: 55,
        keywords: ['school', 'teacher', 'student', 'book', 'study'],
        culturalNotes: 'タイでは教師への敬意が非常に重要です。',
        learningTips: '学習関連の語彙は語学学習そのものに役立ちます。'
    },
    
    technology: {
        id: 'technology',
        name: 'テクノロジー',
        nameEng: 'Technology',
        nameThai: 'เทคโนโลยี',
        description: '現代技術に関する語彙',
        icon: '💻',
        color: '#6C5CE7',
        level: 3,
        priority: 17,
        estimatedTime: 40,
        keywords: ['computer', 'phone', 'internet', 'app', 'digital'],
        culturalNotes: 'タイでもデジタル化が急速に進んでいます。',
        learningTips: '現代生活に必要な新しい語彙です。'
    }
};

// 学習レベル定義
const levelDefinitions = {
    1: {
        name: '初級',
        nameEng: 'Beginner',
        nameThai: 'ระดับเริ่มต้น',
        description: '基本的な日常語彙',
        targetWords: 200,
        estimatedHours: 20,
        color: '#2ECC71',
        icon: '🌱',
        skills: ['基本挨拶', '数字', '色', '家族', '食べ物'],
        canDo: [
            '簡単な挨拶ができる',
            '基本的な数字が言える',
            '家族について話せる',
            '好きな食べ物を言える'
        ]
    },
    2: {
        name: '中級',
        nameEng: 'Intermediate',
        nameThai: 'ระดับกลาง',
        description: '日常会話レベルの語彙',
        targetWords: 500,
        estimatedHours: 50,
        color: '#3498DB',
        icon: '🌿',
        skills: ['日常会話', '買い物', '道案内', '時間表現'],
        canDo: [
            '日常的な会話ができる',
            '買い物で値段交渉ができる',
            '道を尋ねることができる',
            '時間について話せる'
        ]
    },
    3: {
        name: '上級',
        nameEng: 'Advanced',
        nameThai: 'ระดับสูง',
        description: '複雑な表現と専門語彙',
        targetWords: 1000,
        estimatedHours: 100,
        color: '#E74C3C',
        icon: '🌳',
        skills: ['複雑な文法', '専門用語', '文化的表現', '敬語'],
        canDo: [
            '複雑な話題について議論できる',
            '専門的な内容を理解できる',
            '文化的なニュアンスを理解できる',
            '適切な敬語を使える'
        ]
    },
    4: {
        name: '最上級',
        nameEng: 'Expert',
        nameThai: 'ระดับผู้เชี่ยวชาญ',
        description: 'ネイティブレベルの表現',
        targetWords: 2000,
        estimatedHours: 200,
        color: '#9B59B6',
        icon: '🏆',
        skills: ['慣用句', '文学表現', '方言', '古典語'],
        canDo: [
            'ネイティブと同等の会話ができる',
            '文学作品を理解できる',
            '地域の方言を理解できる',
            '古典的な表現を使える'
        ]
    }
};

// 学習目標設定
const learningGoals = {
    tourist: {
        name: '観光客',
        nameEng: 'Tourist',
        description: 'タイ旅行で必要な基本表現',
        targetLevel: 1,
        estimatedTime: '2-4週間',
        categories: ['greetings', 'numbers', 'food', 'directions', 'shopping'],
        priority: ['挨拶', '数字', '食べ物注文', '道案内', '買い物'],
        icon: '🏖️'
    },
    business: {
        name: 'ビジネス',
        nameEng: 'Business',
        description: 'ビジネスシーンで使用する表現',
        targetLevel: 3,
        estimatedTime: '6-12ヶ月',
        categories: ['greetings', 'daily_life', 'education', 'technology', 'health'],
        priority: ['ビジネス挨拶', '会議', 'プレゼンテーション', 'メール', '電話応対'],
        icon: '💼'
    },
    academic: {
        name: '学術',
        nameEng: 'Academic',
        description: '学術研究や留学で必要な表現',
        targetLevel: 4,
        estimatedTime: '1-2年',
        categories: ['education', 'technology', 'health', 'directions', 'daily_life'],
        priority: ['学術用語', '研究発表', '論文執筆', '討論', '専門分野'],
        icon: '🎓'
    },
    daily: {
        name: '日常生活',
        nameEng: 'Daily Life',
        description: 'タイでの日常生活全般',
        targetLevel: 2,
        estimatedTime: '3-6ヶ月',
        categories: ['daily_life', 'family', 'food', 'shopping', 'health', 'transport'],
        priority: ['家族との会話', '近所付き合い', '買い物', '病院', '交通機関'],
        icon: '🏠'
    }
};

// カテゴリ関連のユーティリティ関数
const categoryUtils = {
    // レベル別カテゴリ取得
    getCategoriesByLevel: (level) => {
        return Object.values(categoryDefinitions).filter(category => category.level <= level);
    },

    // 優先度順でカテゴリ取得
    getCategoriesByPriority: (limit = null) => {
        const sorted = Object.values(categoryDefinitions).sort((a, b) => a.priority - b.priority);
        return limit ? sorted.slice(0, limit) : sorted;
    },

    // 学習目標に基づくカテゴリ取得
    getCategoriesByGoal: (goalType) => {
        const goal = learningGoals[goalType];
        if (!goal) return [];
        
        return goal.categories.map(catId => categoryDefinitions[catId]).filter(Boolean);
    },

    // カテゴリの推定学習時間計算
    getTotalEstimatedTime: (categoryIds) => {
        return categoryIds.reduce((total, catId) => {
            const category = categoryDefinitions[catId];
            return total + (category ? category.estimatedTime : 0);
        }, 0);
    },

    // 学習進捗に基づく次のカテゴリ提案
    getNextRecommendedCategory: (completedCategories, currentLevel = 1) => {
        const availableCategories = Object.values(categoryDefinitions)
            .filter(cat => cat.level <= currentLevel)
            .filter(cat => !completedCategories.includes(cat.id))
            .sort((a, b) => a.priority - b.priority);
        
        return availableCategories[0] || null;
    },

    // カテゴリ検索
    searchCategories: (query) => {
        const lowerQuery = query.toLowerCase();
        return Object.values(categoryDefinitions).filter(category =>
            category.name.toLowerCase().includes(lowerQuery) ||
            category.nameEng.toLowerCase().includes(lowerQuery) ||
            category.description.toLowerCase().includes(lowerQuery) ||
            category.keywords.some(keyword => keyword.toLowerCase().includes(lowerQuery))
        );
    },

    // 学習統計
    getStats: () => {
        const categories = Object.values(categoryDefinitions);
        const levels = Object.values(levelDefinitions);
        
        return {
            totalCategories: categories.length,
            categoriesByLevel: {
                1: categories.filter(cat => cat.level === 1).length,
                2: categories.filter(cat => cat.level === 2).length,
                3: categories.filter(cat => cat.level === 3).length,
                4: categories.filter(cat => cat.level === 4).length
            },
            totalEstimatedTime: categories.reduce((sum, cat) => sum + cat.estimatedTime, 0),
            averageTimePerCategory: Math.round(categories.reduce((sum, cat) => sum + cat.estimatedTime, 0) / categories.length),
            levels: levels.length,
            goals: Object.keys(learningGoals).length
        };
    }
};

// エクスポート（ブラウザ環境用）
if (typeof window !== 'undefined') {
    window.categoryDefinitions = categoryDefinitions;
    window.levelDefinitions = levelDefinitions;
    window.learningGoals = learningGoals;
    window.categoryUtils = categoryUtils;
}

// Node.js環境用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        categoryDefinitions,
        levelDefinitions,
        learningGoals,
        categoryUtils
    };
}