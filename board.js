'use strict';

var __pins = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
var __pinModes = new Map();
var __pinValues = new Map();

module.exports = {
	OUT: 0,
	IN: 1,

	P0: __pins[0],
	P1: __pins[1],
	P2: __pins[2],
	P3: __pins[3],
	P4: __pins[4],
	P5: __pins[5],
	P6: __pins[6],
	P7: __pins[7],
	P8: __pins[8],
	P9: __pins[9],
	P10: __pins[10],
	P11: __pins[11],
	P12: __pins[12],
	P13: __pins[13],
	P14: __pins[14],
	P15: __pins[15],
	P16: __pins[16],
	P17: __pins[17],
	P18: __pins[18],
	P19: __pins[19],

	pause : function(ms, callback){
		setTimeout(callback, ms);
	},
	pauseSync : function(ms){
		var waitTill = new Date(new Date().getTime() + ms);
		while(waitTill > new Date()){}
	},
	setPinMode : function(pin, mode){
		if(__pins.indexOf(pin) > -1 && (mode == this.OUT || mode == this.IN)){
			__pinModes.set(pin, mode);
		} 
		else{
			//TODO: what do I do?
		}
	},
	read : function(pin){
		if(__pinValues.has(pin)){
			return __pinValues.get(pin);
		} 
		else{ //it is possible __pinValues won't hv the pin @ this point
			if(__pins.indexOf(pin) > -1){
				return 0;
			} 
			else{
				//TODO: what do I do?
			}
		}
	},
	upTime : function(){
		return process.uptime();
	},
	write : function(pin, value){
		if(__pins.indexOf(pin) > -1){
			__pinValues.set(pin, value);
		} 
		else{
			//TODO: what do I do?
		}
	}
};