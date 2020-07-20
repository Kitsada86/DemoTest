cc.Class({
    extends: cc.Component,

    properties: {
        inputNickName: cc.Node
    },

    onLoad() {
        localStorage.removeItem('result1')
        localStorage.removeItem('eresult1')

        localStorage.removeItem('result2')
        localStorage.removeItem('eresult2')

        localStorage.removeItem('result3')
        localStorage.removeItem('eresult3')

        localStorage.removeItem('result4')
        localStorage.removeItem('eresult4')

        localStorage.removeItem('result5')
        localStorage.removeItem('eresult5')
    },

    start() {

    },
    clickSubmitNickName() {

        var nickName = this.inputNickName.getChildByName("TEXT_LABEL").getComponent(cc.Label).string

        var regex = /[A-Za-z0-9]{1,16}/;
        if (nickName == "" || nickName == null) {
            alert("กรุณากรอกชื่อ");
            return false;
        }
        if (nickName.length > 16) {
            alert("อักขระชื่อต้องมีความยาวไม่เกิน 16 ตัว");
            return false;
        }
        if (!nickName.match(regex)) {
            alert("ไม่สามารถใช้อักขระพิเศษได้ใช้ได้แค่ A-Z,a-z,0-9");
            return false;
        }
        localStorage.setItem("nickname", nickName);
        cc.director.loadScene("battle");


    },




    // update (dt) {},
});
