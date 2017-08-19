const songs = {
    songArr: [{
                id: 1,
                date: '2000-11-13',
                name: '星晴',
                belong:'Jay',
                singer:'周杰伦'
            },{
                id: 2,
                date: '2000-11-13',
                name: '龙卷风',
                belong:'Jay',
                singer:'周杰伦'
            },{
                id: 3,
                date: '2001-09-14',
                name: '安静',
                belong:'范特西',
                singer:'周杰伦'
            },{
                id: 3,
                date: '2001-09-14',
                name: '简单爱',
                belong:'范特西',
                singer:'周杰伦'
            },{
                id: 4,
                date: '2001-09-14',
                name: '双截棍',
                belong:'范特西',
                singer:'周杰伦'
            },{
                id: 5,
                date: '2002-07-19',
                name: '龙拳',
                belong:'八度空间',
                singer:'周杰伦'
            },{
                id: 6,
                date: '2002-07-19',
                name: '最后的战役',
                belong:'八度空间',
                singer:'周杰伦'
            },{
                id: 7,
                date: '2003-07-31',
                name: '晴天',
                belong:'叶惠美',
                singer:'周杰伦'
            },{
                id: 8,
                date: '2003-07-31',
                name: '你听得到',
                belong:'叶惠美',
                singer:'周杰伦'
            },{
                id: 9,
                date: '2003-07-31',
                name: '同一种调调',
                belong:'叶惠美',
                singer:'周杰伦'
            },{
                id: 10,
                date: '2003-07-31',
                name: '她的睫毛',
                belong:'叶惠美',
                singer:'周杰伦'
            },{
                id: 11,
                date: '2004-08-03',
                name: '七里香',
                belong:'七里香',
                singer:'周杰伦'
            },{
                id: 12,
                date: '2004-08-03',
                name: '借口',
                belong:'七里香',
                singer:'周杰伦'
            },{
                id: 13,
                date: '2004-08-03',
                name: '园游会',
                belong:'七里香',
                singer:'周杰伦'
            },{
                id: 14,
                date: '2004-08-03',
                name: '止战之殇',
                belong:'七里香',
                singer:'周杰伦'
            },{
                id: 15,
                date: '2005-11-01',
                name: '夜曲',
                belong:'十一月的肖邦',
                singer:'周杰伦'
            },{
                id: 16,
                date: '2005-11-01',
                name: '蓝色风暴',
                belong:'十一月的肖邦',
                singer:'周杰伦'
            },{
                id: 17,
                date: '2005-11-01',
                name: '发如雪',
                belong:'十一月的肖邦',
                singer:'周杰伦'
            },{
                id: 18,
                date: '2005-11-01',
                name: '枫',
                belong:'十一月的肖邦',
                singer:'周杰伦'
            },{
                id: 19,
                date: '2006-09-05',
                name: '本草纲目',
                belong:'依然范特西',
                singer:'周杰伦'
            },{
                id: 20,
                date: '2006-09-05',
                name: '心雨',
                belong:'依然范特西',
                singer:'周杰伦'
            },{
                id: 21,
                date: '2007-11-01',
                name: '青花瓷',
                belong:'我很忙',
                singer:'周杰伦'
            },{
                id: 22,
                date: '2007-11-01',
                name: '蒲公英的约定',
                belong:'我很忙',
                singer:'周杰伦'
            },{
                id: 23,
                date: '2007-11-01',
                name: '甜甜的',
                belong:'我很忙',
                singer:'周杰伦'
            },{
                id: 24,
                date: '2008-10-09',
                name: '龙战骑士',
                belong:'魔杰座',
                singer:'周杰伦'
            },{
                id: 25,
                date: '2008-10-09',
                name: '说好的幸福呢',
                belong:'魔杰座',
                singer:'周杰伦'
            },{
                id: 26,
                date: '2008-10-09',
                name: '兰亭序',
                belong:'魔杰座',
                singer:'周杰伦'
            },{
                id: 27,
                date: '2008-10-09',
                name: '时光机',
                belong:'魔杰座',
                singer:'周杰伦'
            },{
                id: 28,
                date: '2010-05-18',
                name: '烟花易冷',
                belong:'跨时代',
                singer:'周杰伦'
            },{
                id: 29,
                date: '2010-05-18',
                name: '雨下一整夜',
                belong:'跨时代',
                singer:'周杰伦'
            },{
                id: 30,
                date: '2010-05-18',
                name: '我落泪,情绪零碎',
                belong:'跨时代',
                singer:'周杰伦'
            },{
                id: 31,
                date: '2010-05-18',
                name: '爱的飞行日记',
                belong:'跨时代',
                singer:'周杰伦'
            },{
                id: 32,
                date: '2011-11-11',
                name: '皮影戏',
                belong:'惊叹号',
                singer:'周杰伦'
            },{
                id: 33,
                date: '2012-12-28',
                name: '明明就',
                belong:'十二新作',
                singer:'周杰伦'
            },{
                id: 34,
                date: '2012-12-28',
                name: '哪里都是你',
                belong:'十二新作',
                singer:'周杰伦'
            },{
                id: 35,
                date: '2014-12-26',
                name: '手写的从前',
                belong:'哎呦,不错哦',
                singer:'周杰伦'
            },{
                id: 36,
                date: '2014-12-26',
                name: '鞋子特大号',
                belong:'哎呦,不错哦',
                singer:'周杰伦'
            },{
                id: 37,
                date: '2014-12-26',
                name: '听见下雨的声音',
                belong:'哎呦,不错哦',
                singer:'周杰伦'
            },{
                id: 38,
                date: '2016-06-24',
                name: '告白气球',
                belong:'周杰伦床边故事',
                singer:'周杰伦'
            }
    ],
    pagination: {
        total: 4,
        per_page: 4,
        current_page: 1,
        last_page: 1,
        from: 1,
        to: 4
    }
}

export default songs