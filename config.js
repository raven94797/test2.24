/**
 * 配置模块 - 包含所有全局配置信息
 */

const CONFIG = {
    // API配置
    JSONBIN_API_URL: 'https://api.jsonbin.io/v3/b',
    JSONBIN_MASTER_KEY: '$2a$10$65.YoRtLPFv8FWRwnt1zm.WVgXtmdSmp42kAWTwhf6BbZiwP98D4m',
    
    // 页面配置
    BIN_IDS: {
         'project': '69d355cd856a68218902fd64',
        'team': '69d355fb856a68218902fde8',
        'model': '69d3560c36566621a88262e6',
        'lab': '69d355eaaaba882197cb3d1d',
        'human': '69d3561f856a68218902fe54',
        'parts': '69d3513936566621a8825323',
        'timeline': '69d3561f856a68218902fe54',
        'comments': '69d3561f856a68218902fe54'
        // Project
        'description': '69f9b8dbaaba88219772a4da',
        'design': '69f9b8e4856a682189aab732',
        'contribution': '69f9b908aaba88219772a5cf',
        'implementation': '69f9b96736566621a828afde',
        'safety': '69f9b979856a682189aab9b4',
        
        // Wet Lab
        'engineering': '69f9b9cdaaba88219772a951',
        'notebook': '69f9ba1caaba88219772abe8',
        'result': '69f9ba28856a682189aabe2f',
        'protocol': '69f9ba43856a682189aabea4',
        'parts': '69f9ba7f856a682189aabfb7',
        'proof-of-concept': '69f9ba9b856a682189aac031',
        'future': '69f9baaf36566621a828b6e9',
        
        // Human Practice
        'ihp': '69f9bae7aaba88219772af86',
        'education': '69f9bafa856a682189aac1f8',
        'inclusivity': '69f9bb1236566621a828b962',
        'collaboration': '69f9bb1faaba88219772b175'
    },
    
    // 调试模式 - 设置为true以显示调试信息
    DEBUG_MODE: true,
    
    // 备用数据模式 - 当API不可用时使用本地数据
    USE_FALLBACK_DATA: true,
    
    // 当前页面
    currentPage: 'description',
    
    isEditing: false,
    originalContent: '',
    currentContent: '',
    
    isLoading: false,
    
    currentRequest: null,
    requestedPage: null,
    lastLoadedPage: null,
    
    paperMode: true,
    
    IMAGES: {
        BASE_PATH: 'images/',
        DEFAULT_EXTENSION: 'jpg',
        SYNTAX: {
            PATTERN: /（([a-z]+)（(\d+)），([^）]+)）/g,
            SINGLE: /（([a-z]+)（(\d+)），([^）]+)）/
        }
    },
    
    // 备用数据（当API不可用时使用）
    FALLBACK_DATA: {
        'description': {
            title: 'Description',
            content: '<h2>项目描述</h2><p>这是项目的基本描述页面。</p>',
            features: { timeline: false, comments: false }
        },
        'design': {
            title: 'Design',
            content: '<h2>设计方案</h2><p>这是项目的设计方案页面。</p>',
            features: { timeline: false, comments: false }
        },
        'contribution': {
            title: 'Contribution',
            content: '<h2>贡献</h2><p>这是项目的贡献页面。</p>',
            features: { timeline: false, comments: false }
        },
        'implementation': {
            title: 'Implementation',
            content: '<h2>实施</h2><p>这是项目的实施页面。</p>',
            features: { timeline: false, comments: false }
        },
        'safety': {
            title: 'Safety',
            content: '<h2>安全</h2><p>这是项目的安全页面。</p>',
            features: { timeline: false, comments: false }
        },
        'engineering': {
            title: 'Engineering',
            content: '<h2>工程</h2><p>这是湿实验室的工程页面。</p>',
            features: { timeline: false, comments: false }
        },
        'notebook': {
            title: 'Notebook',
            content: '<h2>实验记录</h2><p>这是湿实验室的实验记录页面。</p>',
            features: { timeline: false, comments: false }
        },
        'result': {
            title: 'Result',
            content: '<h2>结果</h2><p>这是湿实验室的结果页面。</p>',
            features: { timeline: false, comments: false }
        },
        'protocol': {
            title: 'Protocol',
            content: '<h2>实验方案</h2><p>这是湿实验室的实验方案页面。</p>',
            features: { timeline: false, comments: false }
        },
        'parts': {
            title: 'Parts',
            content: '<h2>标准部件</h2><p>这是标准生物部件页面。</p>',
            features: { timeline: false, comments: false }
        },
        'proof-of-concept': {
            title: 'Proof of Concept',
            content: '<h2>概念验证</h2><p>这是概念验证页面。</p>',
            features: { timeline: false, comments: false }
        },
        'future': {
            title: 'Future',
            content: '<h2>未来计划</h2><p>这是未来计划页面。</p>',
            features: { timeline: false, comments: false }
        },
        'ihp': {
            title: 'IHP',
            content: '<h2>整合人文实践</h2><p>这是整合人文实践页面。</p>',
            features: { timeline: false, comments: false }
        },
        'education': {
            title: 'Education',
            content: '<h2>教育</h2><p>这是教育页面。</p>',
            features: { timeline: false, comments: false }
        },
        'inclusivity': {
            title: 'Inclusivity',
            content: '<h2>包容性</h2><p>这是包容性页面。</p>',
            features: { timeline: false, comments: false }
        },
        'collaboration': {
            title: 'Collaboration',
            content: '<h2>合作</h2><p>这是合作页面。</p>',
            features: { timeline: false, comments: false }
        }
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}