$(document).ready(function () {
	
	$("form#sides").submit(function (e) { 
		e.preventDefault();
		
		const length1 = parseFloat($("#side1Length").val());
		const length2 = parseFloat($("#side2Length").val());
		const length3 = parseFloat($("#side3Length").val());

		if (length1 <= 0 || length2 <= 0 || length3 <= 0) {
			alert("That is not a triangle! All lengths must be greater than 0!");
		}
		else if (length1 === length2 && length2 === length3) {
			alert("Your triangle is an equilateral! All sides are the same length.");
		}
		else if (length1 === length2 || length1 === length3 || length2 === length3) {
			alert("Your triangle is an isosceles! 2 sides are the same length.");
		}
		else {
			alert("Your triangle is a scalene! All sides are different lengths.");
		}
	});

});