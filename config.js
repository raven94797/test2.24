/**
 * 配置模块 - 包含所有全局配置信息
 */

const CONFIG = {
    JSONBIN_API_URL: 'https://api.jsonbin.io/v3/b',
    JSONBIN_MASTER_KEY: '$2a$10$65.YoRtLPFv8FWRwnt1zm.WVgXtmdSmp42kAWTwhf6BbZiwP98D4m',
    
    BIN_IDS: {
        'project': '69d355cd856a68218902fd64',
        'team': '69d355fb856a68218902fde8',
        'model': '69d3560c36566621a88262e6',
        'lab': '69d355eaaaba882197cb3d1d',
        'human': '69d3561f856a68218902fe54',
        'parts': '69d3513936566621a8825323',
        'timeline': '69d3561f856a68218902fe54',
        'comments': '69d3561f856a68218902fe54'
    },
    
    currentPage: 'project',
    
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
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}