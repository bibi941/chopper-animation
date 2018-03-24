// @ts-ignore
!function() {
    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTga = document.querySelector('#styleTag')
        let n = 0
        let id = setInterval(() => {
            n += 1
            container.innerHTML = code.substring(0, n)
            styleTga.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n >= code.length) {
                window.clearInterval(id)
                fn && fn.call()
            }
        }, 10)
    }
    let code = `
/*首先,皮一下就很开心*/
    .preview {
    height: 100%;
    border: 1px solid green;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(254, 228, 51);
}
.wrapper {
    width: 100%;
    height: 165px;
    position: relative;
    z-index: 1;
}
/*画一个鼻子*/
.nose {
    border: 11px solid black;
    border-width: 10px 12px;
    border-color: black transparent transparent transparent;
    position: absolute;
    left: 50%;
    top: 30px;
    border-radius: 11px;
    transform: translateX(-50%);
}
.eye-left,
.eye-right {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #464646;
    position: absolute;
    border: 2px solid black;
}
/*画一只左眼*/
.eye-left {
    right: 50%;
    margin-right: 90px;
}
/*画一只右眼*/
.eye-right {
    left: 50%;
    margin-left: 90px;
}
.eyeball-left,
.eyeball-right {
    width: 22px;
    height: 22px;
    background: rgb(255, 255, 255);
    border-radius: 50%;
    position: absolute;
    top: -1px;
    left: 6px;
    border: 2px solid black;
}
/*然后我们画电气袋*/
.face-left,
.face-right {
    width: 68px;
    height: 68px;
    background: rgb(252, 13, 28);
    border-radius: 50%;
    border: 2px solid black;
    position: absolute;
    margin-top: 70px;
}
.face-left {
    right: 50%;
    margin-right: 118px;
}
.face-right {
    left: 50%;
    margin-left: 118px;
}
/*然后,画皮卡丘的上嘴唇*/
.up-lip {
    height: 20px;
    width: 80px;
    border: 2px solid black;
    position: absolute;
    border-top: none;
    border-right: none;
    border-bottom-left-radius: 40px 20px;
    background: rgb(254, 228, 51);
}
.up-lip.left {
    right: 50%;
    transform: rotate(-20deg);
    margin-top: 51px;
}
.up-lip.right {
    left: 50%;
    transform: rotateY(180deg) rotate(-20deg);
    margin-top: 51px;
}
/*最后画皮神的下嘴唇*/
.wrapper-downlip {
    position: absolute;
    bottom: 0;
    left: calc(50% - 113px);
    height: 109px;
    width: 300px;
    overflow: hidden;
    z-index: -1;
}
.down-lip {
    width: 226px;
    height: 7900px;
    background: rgb(153, 5, 19);
    border-radius: 160px/1278px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    overflow: hidden;
}
.down-lip::after {
    content: '';
    position: absolute;
    bottom: -22px;
    width: 100px;
    height: 100px;
    background: rgb(252, 74, 98);
    left: calc(50% - 50px);
    border-radius: 50%;
}
/*大功告成,皮神No.1*/
`
    writeCode('', code)
}.call()
