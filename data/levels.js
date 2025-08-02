// レベル定義とタイ語検定準拠データ
const thaiProficiencyLevels = {
    // タイ語検定5級レベル
    level5: {
        id: 5,
        name: 'タイ語検定5級',
        nameEng: 'Thai Proficiency Test Level 5',
        nameThai: 'การทดสอบความสามารถภาษาไทย ระดับ 5',
        description: '基本的な挨拶と日常語彙',
        targetVocabulary: 300,
        estimatedStudyHours: 50,
        difficulty: 'beginner',
        color: '#2ECC71',
        icon: '🌱',
        
        // 学習目標
        objectives: {
            vocabulary: '基本語彙300語の習得',
            grammar: '基本的な文型の理解',
            conversation: '簡単な挨拶と自己紹介',
            reading: 'タイ文字の基本的な読み',
            writing: '基本的なタイ文字の書き'
        },
        
        // 習得すべきカテゴリ
        categories: [
            'greetings',
            'numbers',
            'colors',
            'family',
            'food'
        ],
        
        // 文法項目
        grammarPoints: [
            '基本語順（SVO）',
            '人称代名詞',
            '指示代名詞',
            '基本的な疑問詞',
            '肯定文・否定文',
            '丁寧語（ครับ/ค่ะ）'
        ],
        
        // 会話例
        conversationExamples: [
            {
                thai: 'สวัสดีครับ',
                romanization: 'サワディー・クラップ',
                meaning: 'こんにちは（男性）',
                situation: '挨拶'
            },
            {
                thai: 'ผมชื่อ ทานากะ',
                romanization: 'ポム・チュー・タナカ',
                meaning: '私の名前は田中です',
                situation: '自己紹介'
            },
            {
                thai: 'คุณชื่ออะไร',
                romanization: 'クン・チュー・アライ',
                meaning: 'お名前は何ですか',
                situation: '名前を尋ねる'
            }
        ],
        
        // 評価基準
        assessmentCriteria: {
            vocabulary: {
                excellent: '280-300語',
                good: '240-279語',
                fair: '200-239語',
                poor: '200語未満'
            },
            pronunciation: {
                excellent: '声調を正確に発音できる',
                good: '大部分の音を正確に発音できる',
                fair: '基本的な音を発音できる',
                poor: '発音に多くの問題がある'
            }
        }
    },
    
    // タイ語検定4級レベル
    level4: {
        id: 4,
        name: 'タイ語検定4級',
        nameEng: 'Thai Proficiency Test Level 4',
        nameThai: 'การทดสอบความสามารถภาษาไทย ระดับ 4',
        description: '基本的な日常会話',
        targetVocabulary: 600,
        estimatedStudyHours: 100,
        difficulty: 'elementary',
        color: '#3498DB',
        icon: '🌿',
        
        objectives: {
            vocabulary: '基本語彙600語の習得',
            grammar: '基本文法の理解と応用',
            conversation: '日常的な場面での会話',
            reading: '簡単な文章の読解',
            writing: '基本的な文章の作成'
        },
        
        categories: [
            'greetings', 'numbers', 'colors', 'family', 'food',
            'time', 'body', 'animals', 'weather', 'emotions'
        ],
        
        grammarPoints: [
            '時制表現',
            '形容詞の使い方',
            '比較表現',
            '存在表現（มี/ไม่มี）',
            '位置表現',
            '量詞の使い方',
            '基本的な接続詞'
        ],
        
        conversationExamples: [
            {
                thai: 'วันนี้อากาศดีนะ',
                romanization: 'ワンニー・アーガート・ディー・ナ',
                meaning: '今日は天気がいいですね',
                situation: '天気の話'
            },
            {
                thai: 'ผมหิวข้าวแล้ว',
                romanization: 'ポム・ヒウ・カーオ・レーオ',
                meaning: 'お腹が空きました',
                situation: '食事'
            }
        ],
        
        assessmentCriteria: {
            vocabulary: {
                excellent: '560-600語',
                good: '480-559語',
                fair: '400-479語',
                poor: '400語未満'
            },
            grammar: {
                excellent: '基本文法を正確に使用できる',
                good: '大部分の基本文法を理解している',
                fair: '基本的な文法を部分的に理解',
                poor: '文法理解に大きな問題がある'
            }
        }
    },
    
    // タイ語検定3級レベル
    level3: {
        id: 3,
        name: 'タイ語検定3級',
        nameEng: 'Thai Proficiency Test Level 3',
        nameThai: 'การทดสอบความสามารถภาษาไทย ระดับ 3',
        description: '中級レベルの会話と読み書き',
        targetVocabulary: 1200,
        estimatedStudyHours: 200,
        difficulty: 'intermediate',
        color: '#E67E22',
        icon: '🌳',
        
        objectives: {
            vocabulary: '中級語彙1200語の習得',
            grammar: '複雑な文法構造の理解',
            conversation: '様々な話題での会話',
            reading: '新聞記事レベルの読解',
            writing: '意見や感想の表現'
        },
        
        categories: [
            'greetings', 'numbers', 'colors', 'family', 'food',
            'time', 'body', 'animals', 'weather', 'emotions',
            'transport', 'daily_life', 'shopping', 'directions'
        ],
        
        grammarPoints: [
            '複合文の構造',
            '条件表現',
            '原因・理由の表現',
            '目的・結果の表現',
            '推量・可能性の表現',
            '敬語表現',
            '受身表現',
            '使役表現'
        ],
        
        conversationExamples: [
            {
                thai: 'ถ้าฝนไม่ตก เราจะไปเที่ยวกัน',
                romanization: 'ター・フォン・マイ・トック・ラオ・ジャ・パイ・ティアオ・ガン',
                meaning: '雨が降らなければ、一緒に出かけましょう',
                situation: '提案・条件'
            }
        ],
        
        assessmentCriteria: {
            vocabulary: {
                excellent: '1120-1200語',
                good: '960-1119語',
                fair: '800-959語',
                poor: '800語未満'
            },
            fluency: {
                excellent: '流暢で自然な会話ができる',
                good: '多少の間はあるが会話を維持できる',
                fair: '基本的な意思疎通ができる',
                poor: '会話の維持が困難'
            }
        }
    },
    
    // タイ語検定2級レベル
    level2: {
        id: 2,
        name: 'タイ語検定2級',
        nameEng: 'Thai Proficiency Test Level 2',
        nameThai: 'การทดสอบความสามารถภาษาไทย ระดับ 2',
        description: '上級レベルの総合的な言語能力',
        targetVocabulary: 2000,
        estimatedStudyHours: 400,
        difficulty: 'advanced',
        color: '#8E44AD',
        icon: '🏆',
        
        objectives: {
            vocabulary: '上級語彙2000語の習得',
            grammar: '高度な文法構造の習得',
            conversation: '専門的な話題での議論',
            reading: '文学作品や専門書の読解',
            writing: '論理的な文章の作成'
        },
        
        categories: [
            'all_basic_categories',
            'health', 'education', 'technology',
            'business', 'politics', 'culture'
        ],
        
        grammarPoints: [
            '複雑な修飾構造',
            '慣用表現',
            '文語的表現',
            '地域方言の理解',
            '古典的表現',
            '専門用語の使用'
        ],
        
        assessmentCriteria: {
            vocabulary: {
                excellent: '1800-2000語',
                good: '1600-1799語',
                fair: '1400-1599語',
                poor: '1400語未満'
            },
            comprehension: {
                excellent: 'ネイティブレベルの理解力',
                good: '高度な内容も理解できる',
                fair: '一般的な内容は理解できる',
                poor: '理解に困難がある'
            }
        }
    },
    
    // タイ語検定1級レベル
    level1: {
        id: 1,
        name: 'タイ語検定1級',
        nameEng: 'Thai Proficiency Test Level 1',
        nameThai: 'การทดสอบความสามารถภาษาไทย ระดับ 1',
        description: 'ネイティブレベルの高度な言語能力',
        targetVocabulary: 3000,
        estimatedStudyHours: 800,
        difficulty: 'expert',
        color: '#C0392B',
        icon: '👑',
        
        objectives: {
            vocabulary: 'ネイティブレベル3000語以上の習得',
            grammar: '全ての文法構造の完全な理解',
            conversation: 'あらゆる場面での自然な会話',
            reading: '古典文学や専門書の完全な理解',
            writing: '創作活動レベルの文章作成'
        },
        
        categories: [
            'all_categories',
            'literature', 'philosophy', 'religion',
            'science', 'arts', 'history'
        ],
        
        grammarPoints: [
            '古典語法',
            '詩的表現',
            '宗教的表現',
            '学術的表現',
            '地方方言',
            '歴史的言語変化'
        ],
        
        conversationExamples: [
            {
                thai: 'การศึกษาภาษาไทยในฐานะภาษาต่างประเทศนั้น ต้องอาศัยความเพียรพยายามอย่างต่อเนื่อง',
                romanization: '学術的・専門的表現',
                meaning: '外国語としてのタイ語学習には継続的な努力が必要である',
                situation: '学術的議論'
            }
        ],
        
        assessmentCriteria: {
            vocabulary: {
                excellent: '2800-3000語以上',
                good: '2400-2799語',
                fair: '2000-2399語',
                poor: '2000語未満'
            },
            proficiency: {
                excellent: 'ネイティブと区別がつかないレベル',
                good: '高度な専門的議論が可能',
                fair: '一般的な話題で流暢に会話',
                poor: '上級レベルに達していない'
            }
        }
    }
};

// 学習段階定義
const learningStages = {
    absolute_beginner: {
        name: '全くの初心者',
        description: 'タイ語に初めて触れる段階',
        duration: '1-2週間',
        goals: [
            'タイ文字の基本形を覚える',
            '基本的な挨拶を覚える',
            '数字1-10を覚える'
        ],
        vocabulary: 50,
        recommendedStudyTime: '30分/日'
    },
    
    beginner: {
        name: '初心者',
        description: '基本的な語彙と文法を学習',
        duration: '2-6ヶ月',
        goals: [
            '基本語彙300語の習得',
            '簡単な自己紹介',
            'タイ文字の読み書き基礎'
        ],
        vocabulary: 300,
        recommendedStudyTime: '45分/日'
    },
    
    elementary: {
        name: '初級',
        description: '日常会話の基礎を固める',
        duration: '6-12ヶ月',
        goals: [
            '日常語彙600語の習得',
            '基本的な日常会話',
            '簡単な文章の読み書き'
        ],
        vocabulary: 600,
        recommendedStudyTime: '1時間/日'
    },
    
    intermediate: {
        name: '中級',
        description: '実用的な会話能力を身につける',
        duration: '1-2年',
        goals: [
            '実用語彙1200語の習得',
            '様々な話題での会話',
            '新聞記事レベルの読解'
        ],
        vocabulary: 1200,
        recommendedStudyTime: '1.5時間/日'
    },
    
    advanced: {
        name: '上級',
        description: '専門的・学術的内容の理解',
        duration: '2-3年',
        goals: [
            '専門語彙2000語の習得',
            '専門的な議論への参加',
            '文学作品の理解'
        ],
        vocabulary: 2000,
        recommendedStudyTime: '2時間/日'
    },
    
    expert: {
        name: '上級者',
        description: 'ネイティブレベルの言語能力',
        duration: '3年以上',
        goals: [
            'ネイティブレベルの語彙力',
            'あらゆる場面での自然な会話',
            '創作活動レベルの表現力'
        ],
        vocabulary: 3000,
        recommendedStudyTime: '継続的な学習'
    }
};

// 学習計画テンプレート
const studyPlanTemplates = {
    intensive: {
        name: '集中コース',
        description: '短期間で効率的に学習',
        dailyStudyTime: 120, // 分
        weeklyGoal: {
            vocabulary: 50,
            grammar: 3,
            conversation: 2
        },
        schedule: {
            monday: ['新語彙学習', '文法練習', '発音練習'],
            tuesday: ['語彙復習', '会話練習', 'リスニング'],
            wednesday: ['新語彙学習', '文法練習', '読解練習'],
            thursday: ['語彙復習', '会話練習', 'ライティング'],
            friday: ['総合復習', 'クイズ', '弱点補強'],
            saturday: ['実践会話', '文化学習', '楽しい学習'],
            sunday: '休息または軽い復習'
        }
    },
    
    regular: {
        name: '標準コース',
        description: '無理のないペースで継続学習',
        dailyStudyTime: 60, // 分
        weeklyGoal: {
            vocabulary: 30,
            grammar: 2,
            conversation: 1
        },
        schedule: {
            monday: ['新語彙学習', '文法練習'],
            tuesday: ['語彙復習', '発音練習'],
            wednesday: ['新語彙学習', '会話練習'],
            thursday: ['語彙復習', 'リスニング'],
            friday: ['文法復習', '読解練習'],
            saturday: ['総合復習', 'クイズ'],
            sunday: '休息'
        }
    },
    
    casual: {
        name: 'カジュアルコース',
        description: '趣味として楽しく学習',
        dailyStudyTime: 30, // 分
        weeklyGoal: {
            vocabulary: 20,
            grammar: 1,
            conversation: 1
        },
        schedule: {
            monday: ['新語彙学習'],
            tuesday: ['語彙復習'],
            wednesday: ['文法練習'],
            thursday: ['発音練習'],
            friday: ['会話練習'],
            saturday: ['総合復習'],
            sunday: '休息'
        }
    }
};

// 評価・テスト定義
const assessmentTypes = {
    vocabulary_test: {
        name: '語彙テスト',
        description: '語彙力を測定するテスト',
        duration: 20, // 分
        questionCount: 50,
        types: ['選択肢', '記述', '音声認識'],
        scoring: {
            excellent: '90-100%',
            good: '80-89%',
            fair: '70-79%',
            poor: '70%未満'
        }
    },
    
    grammar_test: {
        name: '文法テスト',
        description: '文法理解度を測定するテスト',
        duration: 30,
        questionCount: 30,
        types: ['文法選択', '文章完成', '誤文訂正'],
        scoring: {
            excellent: '85-100%',
            good: '75-84%',
            fair: '65-74%',
            poor: '65%未満'
        }
    },
    
    conversation_test: {
        name: '会話テスト',
        description: '会話能力を評価するテスト',
        duration: 15,
        scenarios: ['自己紹介', '日常会話', '状況対応'],
        criteria: ['流暢さ', '正確性', '語彙使用', '文法使用', '発音'],
        scoring: {
            excellent: 'ネイティブレベル',
            good: '流暢で自然',
            fair: '基本的な意思疎通可能',
            poor: '意思疎通困難'
        }
    },
    
    comprehensive_test: {
        name: '総合テスト',
        description: '全技能を総合的に評価',
        duration: 90,
        sections: {
            vocabulary: 30,
            grammar: 30,
            reading: 20,
            listening: 10
        },
        scoring: {
            excellent: '85-100%',
            good: '75-84%',
            fair: '65-74%',
            poor: '65%未満'
        }
    }
};

// 学習進捗追跡
const progressTracking = {
    daily: {
        studyTime: 0,
        vocabularyLearned: 0,
        grammarPointsStudied: 0,
        conversationPractice: 0,
        quizzesTaken: 0,
        accuracy: 0
    },
    
    weekly: {
        totalStudyTime: 0,
        vocabularyMastered: 0,
        grammarPointsMastered: 0,
        conversationHours: 0,
        testsCompleted: 0,
        averageAccuracy: 0,
        weakAreas: [],
        strongAreas: []
    },
    
    monthly: {
        levelProgress: 0, // パーセンテージ
        vocabularyGrowth: 0,
        skillImprovement: {
            listening: 0,
            speaking: 0,
            reading: 0,
            writing: 0
        },
        goalsAchieved: [],
        nextMonthTargets: []
    }
};

// レベル判定ロジック
const levelAssessment = {
    // 現在のレベルを判定
    assessCurrentLevel: (userStats) => {
        const { vocabulary, grammarAccuracy, conversationFluency, readingLevel } = userStats;
        
        let level = 5; // 最低レベルから開始
        
        if (vocabulary >= 300 && grammarAccuracy >= 70) level = 4;
        if (vocabulary >= 600 && grammarAccuracy >= 75 && conversationFluency >= 60) level = 3;
        if (vocabulary >= 1200 && grammarAccuracy >= 80 && conversationFluency >= 75) level = 2;
        if (vocabulary >= 2000 && grammarAccuracy >= 85 && conversationFluency >= 85) level = 1;
        
        return level;
    },
    
    // 次のレベルまでの進捗
    getProgressToNextLevel: (currentLevel, userStats) => {
        const nextLevel = currentLevel - 1;
        if (nextLevel < 1) return 100; // 最高レベル達成
        
        const targetLevel = thaiProficiencyLevels[`level${nextLevel}`];
        const progress = {
            vocabulary: Math.min(100, (userStats.vocabulary / targetLevel.targetVocabulary) * 100),
            overall: 0
        };
        
        // 総合進捗の計算
        progress.overall = (progress.vocabulary + userStats.grammarAccuracy + userStats.conversationFluency) / 3;
        
        return Math.round(progress.overall);
    },
    
    // 学習推奨事項
    getRecommendations: (currentLevel, userStats) => {
        const recommendations = [];
        
        if (userStats.vocabulary < thaiProficiencyLevels[`level${currentLevel}`].targetVocabulary * 0.8) {
            recommendations.push('語彙学習を重点的に行いましょう');
        }
        
        if (userStats.grammarAccuracy < 75) {
            recommendations.push('文法練習を増やしましょう');
        }
        
        if (userStats.conversationFluency < 70) {
            recommendations.push('会話練習の時間を増やしましょう');
        }
        
        return recommendations;
    }
};

// ユーティリティ関数
const levelUtils = {
    // レベル情報取得
    getLevelInfo: (levelNumber) => {
        return thaiProficiencyLevels[`level${levelNumber}`] || null;
    },
    
    // 全レベル取得
    getAllLevels: () => {
        return Object.values(thaiProficiencyLevels).sort((a, b) => b.id - a.id);
    },
    
    // 学習段階取得
    getLearningStage: (stageName) => {
        return learningStages[stageName] || null;
    },
    
    // 学習計画取得
    getStudyPlan: (planType) => {
        return studyPlanTemplates[planType] || null;
    },
    
    // レベル統計
    getStats: () => {
        const levels = Object.values(thaiProficiencyLevels);
        return {
            totalLevels: levels.length,
            totalVocabulary: levels.reduce((sum, level) => sum + level.targetVocabulary, 0),
            totalStudyHours: levels.reduce((sum, level) => sum + level.estimatedStudyHours, 0),
            averageVocabularyPerLevel: Math.round(levels.reduce((sum, level) => sum + level.targetVocabulary, 0) / levels.length),
            learningStages: Object.keys(learningStages).length,
            studyPlans: Object.keys(studyPlanTemplates).length
        };
    },
    
    // カスタム学習計画生成
    generateCustomPlan: (userLevel, availableTime, goals) => {
        const baseTemplate = availableTime >= 90 ? studyPlanTemplates.intensive :
                            availableTime >= 45 ? studyPlanTemplates.regular :
                            studyPlanTemplates.casual;
        
        const customPlan = { ...baseTemplate };
        customPlan.name = 'カスタムプラン';
        customPlan.dailyStudyTime = availableTime;
        
        // 目標に応じて調整
        if (goals.includes('vocabulary')) {
            customPlan.weeklyGoal.vocabulary *= 1.5;
        }
        if (goals.includes('conversation')) {
            customPlan.weeklyGoal.conversation *= 2;
        }
        if (goals.includes('grammar')) {
            customPlan.weeklyGoal.grammar *= 1.5;
        }
        
        return customPlan;
    }
};

// エクスポート（ブラウザ環境用）
if (typeof window !== 'undefined') {
    window.thaiProficiencyLevels = thaiProficiencyLevels;
    window.learningStages = learningStages;
    window.studyPlanTemplates = studyPlanTemplates;
    window.assessmentTypes = assessmentTypes;
    window.progressTracking = progressTracking;
    window.levelAssessment = levelAssessment;
    window.levelUtils = levelUtils;
}

// Node.js環境用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        thaiProficiencyLevels,
        learningStages,
        studyPlanTemplates,
        assessmentTypes,
        progressTracking,
        levelAssessment,
        levelUtils
    };
}