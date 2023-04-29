function convert() {
	var degrees = document.getElementById("degrees").value;
	if (document.getElementById("type").value == "fahrenheit") {
		document.getElementById("result").innerHTML = `${(degrees - 32) / 1.8}°C<br>${
			(degrees - 32) / 1.8 + 273.15
		}°K`;
	} else if (document.getElementById("type").value == "celsius") {
		document.getElementById("result").innerHTML = `${degrees * 1.8 + 32}°F<br>${
			parseFloat(degrees) + 273.15
		}°K`;
	} else if (document.getElementById("type").value == "kelvin") {
		document.getElementById("result").innerHTML = `${
			(degrees - 273.15) * 1.8 + 32
		}°F<br>${parseFloat(degrees) - 273.15}°C`;
	}
}