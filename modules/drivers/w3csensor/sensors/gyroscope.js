/*
 * Copyright (c) 2018-2019  Moddable Tech, Inc.
 *
 *   This file is part of the Moddable SDK Runtime.
 *
 *   The Moddable SDK Runtime is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU Lesser General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   The Moddable SDK Runtime is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU Lesser General Public License for more details.
 *
 *   You should have received a copy of the GNU Lesser General Public License
 *   along with the Moddable SDK Runtime.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

import IMU from "imu";

class Gyroscope extends IMU {
	constructor(dictionary) {
		super(dictionary);
	}
	
	_poll() {
		this._sensor.configure({operation: "gyro"});
		let sample = this._sensor.sample();
		for (let value in sample) sample[value] *= 0.0174533; //convert degrees per second to radians per second
		
		// if (this._referenceFrame == "screen") If this device had a screen that rotates, one would flip some axes in the sample around here.
		
		this._sample = sample;
	}
}
Object.freeze(Gyroscope.prototype);

export default Gyroscope;
