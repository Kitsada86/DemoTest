var nickName
var checkI = 1
var result1
var result2
var result3
var result4
var result5
var result1Show
var result2Show
var result3Show
var result4Show
var result5Show
var sumResult
var eresult1
var eresult2
var eresult3
var eresult4
var eresult5
var esumResult
var num

var resultScrollPlayer = 0
var resultScrollCom = 0
var checkWinner = 0
cc.Class({
    extends: cc.Component,

    properties: {
        btnChoose1: cc.Node,
        btnChoose2: cc.Node,
        btnChoose3: cc.Node,
        showImage: cc.Node,
        resultLabel: cc.Label,
        playerName: cc.Label,
        bgPopUp: cc.Node,
        popUp: cc.Node,
        layoutPoint: cc.Node,
        contentStat: cc.Node,
        statPrefab: cc.Prefab
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        nickName = localStorage.getItem("nickname");
        this.playerName.string = nickName
        this.layoutPoint.getChildByName('playername').getComponent('cc.Label').string = nickName

        resultScrollPlayer = 0
        resultScrollCom = 0
        checkI = 1
        checkWinner = 0
    },

    start() {

    },

    checkChooseData(e, num) {
        if (num == 1) {
            this.btnChoose1.active = true
            this.btnChoose2.active = false
            this.btnChoose3.active = false
        } else if (num == 2) {
            this.btnChoose1.active = false
            this.btnChoose2.active = true
            this.btnChoose3.active = false
        } else {
            this.btnChoose1.active = false
            this.btnChoose2.active = false
            this.btnChoose3.active = true
        }
    },

    calData() {
        var secondResult = Math.floor(Math.random() * 3) + 1
        if (secondResult == 1) {
            this.showImage.getChildByName('01').active = true
            this.showImage.getChildByName('02').active = false
            this.showImage.getChildByName('03').active = false
        } else if (secondResult == 2) {
            this.showImage.getChildByName('01').active = false
            this.showImage.getChildByName('02').active = true
            this.showImage.getChildByName('03').active = false
        } else {
            this.showImage.getChildByName('01').active = false
            this.showImage.getChildByName('02').active = false
            this.showImage.getChildByName('03').active = true
        }

        if (num == 1) {
            this.btnChoose1.active = false
            this.btnChoose2.active = false
            this.btnChoose3.active = false

            if (secondResult == 1) {
                this.resultLabel.string = 'เสมอ'
            } else if (secondResult == 2) {
                resultScrollPlayer++
                this.resultLabel.string = 'ชนะ'

                var statWin = cc.instantiate(this.statPrefab)

                this.contentStat.addChild(statWin, 0)

                this.contentStat.children[`${checkWinner}`].getChildByName('01').active = true

                checkWinner++

            } else {
                resultScrollCom++
                this.resultLabel.string = 'แพ้'
            }
        } else if (num == 2) {
            this.btnChoose1.active = false
            this.btnChoose2.active = false
            this.btnChoose3.active = false

            if (secondResult == 1) {
                resultScrollCom++
                this.resultLabel.string = 'แพ้'
            } else if (secondResult == 2) {
                this.resultLabel.string = 'เสมอ'
            } else {
                resultScrollPlayer++
                this.resultLabel.string = 'ชนะ'

                var statWin = cc.instantiate(this.statPrefab)

                this.contentStat.addChild(statWin, 0)

                this.contentStat.children[`${checkWinner}`].getChildByName('02').active = true

                checkWinner++
            }
        } else {
            this.btnChoose1.active = false
            this.btnChoose2.active = false
            this.btnChoose3.active = false

            if (secondResult == 1) {
                resultScrollPlayer++
                this.resultLabel.string = 'ชนะ'

                var statWin = cc.instantiate(this.statPrefab)

                this.contentStat.addChild(statWin, 0)

                this.contentStat.children[`${checkWinner}`].getChildByName('03').active = true

                checkWinner++

            } else if (secondResult == 2) {
                resultScrollCom++
                this.resultLabel.string = 'แพ้'
            } else {
                this.resultLabel.string = 'เสมอ'
            }
        }

        if (checkI == 1) {
            result1 = num
            eresult1 = secondResult
            result1Show = this.resultLabel.string

            localStorage.setItem('result1', result1)
            localStorage.setItem('eresult1', eresult1)
            localStorage.setItem('result1Show', result1Show)

        } else if (checkI == 2) {
            result2 = num
            eresult2 = secondResult
            result2Show = this.resultLabel.string

            localStorage.setItem('result2', result2)
            localStorage.setItem('eresult2', eresult2)
            localStorage.setItem('result2Show', result2Show)
        } else if (checkI == 3) {
            result3 = num
            eresult3 = secondResult
            result3Show = this.resultLabel.string

            localStorage.setItem('result3', result3)
            localStorage.setItem('eresult3', eresult3)
            localStorage.setItem('result3Show', result3Show)
        } else if (checkI == 4) {
            result4 = num
            eresult4 = secondResult
            result4Show = this.resultLabel.string

            localStorage.setItem('result4', result4)
            localStorage.setItem('eresult4', eresult4)
            localStorage.setItem('result4Show', result4Show)
        } else {
            result5 = num
            eresult5 = secondResult
            result5Show = this.resultLabel.string

            localStorage.setItem('result5', result5)
            localStorage.setItem('eresult5', eresult5)
            localStorage.setItem('result5Show', result5Show)
        }

        localStorage.setItem('playerScoll', resultScrollPlayer)
        localStorage.setItem('ComScoll', resultScrollCom)

        this.layoutPoint.getChildByName('pointPlayer').getComponent('cc.Label').string = resultScrollPlayer
        this.layoutPoint.getChildByName('pointComputer').getComponent('cc.Label').string = resultScrollCom

        checkI++;

        

        if (resultScrollPlayer == 3) {
            cc.director.loadScene('display');
        }

        if (resultScrollCom == 3) {
            cc.director.loadScene('display');
        }

        if (checkI == 6) {
            cc.director.loadScene('display');
        }

    },

    chooseData(e, choose) {
        this.bgPopUp.active = true
        this.popUp.active = true

        num = choose
        
    },

    confirmData(e, confirm) {
        if (confirm == 1) {
        
            this.calData()
        }

        this.bgPopUp.active = false
        this.popUp.active = false
    },

    // update (dt) {},
});