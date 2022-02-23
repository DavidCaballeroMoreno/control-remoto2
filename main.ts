radio.onReceivedString(function (receivedString) {
    if (receivedString == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
    } else if (receivedString == 1) {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
radio.setGroup(40)
basic.forever(function () {
	
})
