var name
var playerScoll = 0
var ComScoll = 0
var checkI = 1

cc.Class({
    extends: cc.Component,

    properties: {
        playerName: cc.Label,
        player1: cc.Node,
        player2: cc.Node,
        player3: cc.Node,
        player4: cc.Node,
        player5: cc.Node,
        player6: cc.Label,

        com1: cc.Node,
        com2: cc.Node,
        com3: cc.Node,
        com4: cc.Node,
        com5: cc.Node,
        com6: cc.Label,
        btnnewgame: cc.Node,
        btnexit: cc.Node,


        result: cc.Label
    },

    // LIFE-CYCLE CALLBACKS:
    
    onLoad() {
        name = localStorage.getItem('nickname')
        this.playerName.string = name

        this.setPoint();

        this.setData();
    },

    setPoint() {
        var playerPoint = localStorage.getItem('playerScoll')
        var comPoint = localStorage.getItem('ComScoll')

        this.player6.string = playerPoint
        this.com6.string = comPoint

        if (playerPoint > comPoint) {
            this.result.string = 'ผู้ชนะคือ ' + name
        } else if (playerPoint < comPoint) {
            this.result.string = 'ผู้ชนะคือ Computer'
        } else {
            this.result.string = 'เสมอ'
        }
    },

    setData() {
        var p1 = localStorage.getItem('result1')
        var c1 = localStorage.getItem('eresult1')

        var p2 = localStorage.getItem('result2')
        var c2 = localStorage.getItem('eresult2')

        var p3 = localStorage.getItem('result3')
        var c3 = localStorage.getItem('eresult3')

        var p4 = localStorage.getItem('result4')
        var c4 = localStorage.getItem('eresult4')

        var p5 = localStorage.getItem('result5')
        var c5 = localStorage.getItem('eresult5')

        if (p1 == 1) {
            this.player1.getChildByName('01').active = true
        }else if (p1 == 2) {
            this.player1.getChildByName('02').active = true
        }else if (p1 == 3) {
            this.player1.getChildByName('03').active = true
        }

        if (c1 == 1) {
            this.com1.getChildByName('01').active = true
        }else if (c1 == 2) {
            this.com1.getChildByName('02').active = true
        }else if (c1 == 3) {
            this.com1.getChildByName('03').active = true
        }

        if (p2 == 1) {
            this.player2.getChildByName('01').active = true
        } else if (p2 == 2) {
            this.player2.getChildByName('02').active = true
        } else if (p2 == 3) {
            this.player2.getChildByName('03').active = true
        }

        if (c2 == 1) {
            this.com2.getChildByName('01').active = true
        } else if (c2 == 2) {
            this.com2.getChildByName('02').active = true
        } else if (c2 == 3) {
            this.com2.getChildByName('03').active = true
        }

        if (p3 == 1) {
            this.player3.getChildByName('01').active = true
        } else if (p3 == 2) {
            this.player3.getChildByName('02').active = true
        } else if (p3 == 3) {
            this.player3.getChildByName('03').active = true
        }

        if (c3 == 1) {
            this.com3.getChildByName('01').active = true
        } else if (c3 == 2) {
            this.com3.getChildByName('02').active = true
        } else if (c3 == 3) {
            this.com3.getChildByName('03').active = true
        }

        if (p4 == 1) {
            this.player4.getChildByName('01').active = true
        } else if (p4 == 2) {
            this.player4.getChildByName('02').active = true
        } else if (p4 == 3) {
            this.player4.getChildByName('03').active = true
        }

        if (c4 == 1) {
            this.com4.getChildByName('01').active = true
        } else if (c4 == 2) {
            this.com4.getChildByName('02').active = true
        } else if (c4 == 3) {
            this.com4.getChildByName('03').active = true
        }

        if (p5 == 1) {
            this.player5.getChildByName('01').active = true
        } else if (p5 == 2) {
            this.player5.getChildByName('02').active = true
        } else if (p5 == 3) {
            this.player5.getChildByName('03').active = true
        }

        if (c5 == 1) {
            this.com5.getChildByName('01').active = true
        } else if (c5 == 2) {
            this.com5.getChildByName('02').active = true
        } else if (c5 == 3) {
            this.com5.getChildByName('03').active = true
        }

    },

    restartGame() {
        cc.director.loadScene("Playername")
        checkI = 1
      

        
    },

    exit() {
        cc.game.end()
    }

    // update (dt) {},
});
