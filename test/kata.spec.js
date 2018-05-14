describe("Converter", function () {
	describe("Kilometers to Miles", function(){
		it("When 1 kilometer should return 0.621371 miles", function() {
			// arrange
			var converter = new Converter();
			var input = 1;
			// act
			var actual = converter.kilometersToMiles(input);
			// assert
			var expected = new Number(0.621371);
			expect(actual.valueOf()).toBe(expected.valueOf());
		});

		it("When 1.5 kilometer should return 0.932057 miles", function() {
			// arrange
			var converter = new Converter();
			var input = 1.5;
			// act
			var actual = converter.kilometersToMiles(input);
			// assert
			var expected = new Number(0.932057);
			expect(actual.valueOf()).toBe(expected.valueOf());
		});
	});

	describe("Celsius to Fahrenheit", function(){
		describe("Given whole numbers to convert", function(){
			[{c:0,f:32},
				{c:100,f:212}
			].forEach(function(element){
				it("When " +element.c + " C should return " + element.f + " F", function() {
					// arrange
					var converter = new Converter();
					var input = element.c;
					// act
					var actual = converter.celsiusToFahrenheit(input);
					// assert
					var expected = new Number(element.f);
					expect(actual.valueOf()).toBe(expected.valueOf());
				});
			});
		});

		describe("Given fractional numbers to convert", function(){
			[{c:0.5,f:32.9},
			 {c:22.3,f:72.14}
			].forEach(function(element){
				it("When " +element.c + " C should return " + element.f + " F", function() {
					// arrange
					var converter = new Converter();
					var input = element.c;
					// act
					var actual = converter.celsiusToFahrenheit(input);
					// assert
					var expected = new Number(element.f);
					expect(actual.valueOf()).toBe(expected.valueOf());
				});
			});
		});
	});

	describe("Kilogram to Pound", function(){
		describe("Given whole numbers to convert", function(){
			[{k:0, p:0},
			 {k:10,p:22.04622622},
			 {k:2, p:4.40924524}
			].forEach(function(element){
				it("When " +element.k + " kilogram should return " + element.p + " pounds", function() {
					// arrange
					var converter = new Converter();
					var input = element.k;
					// act
					var actual = converter.kilogramsToPounds(input);
					// assert
					var expected = new Number(element.p);
					expect(actual.valueOf()).toBe(expected.valueOf());
				});
			});
		});

		describe("Given fractional numbers to convert", function(){
			[{k:0.5, p:1.10231131},
			 {k:2.205,p:4.86119288},
			 {k:9.91, p:21.84781018}
			].forEach(function(element){
				it("When " +element.k + " kilogram should return " + element.p + " pounds", function() {
					// arrange
					var converter = new Converter();
					var input = element.k;
					// act
					var actual = converter.kilogramsToPounds(input);
					// assert
					var expected = new Number(element.p);
					expect(actual.valueOf()).toBe(expected.valueOf());
				});
			});
		});
	});

	describe("Liters to Gallons", function(){
		describe("Given whole numbers", function(){
			describe("while converting to US gallons", function(){
				[{l:0, g:0},
				 {l:10,g:2.641720524},
				 {l:2, g:0.528344105}
				].forEach(function(element){
					it("When " +element.l + " liters should return " + element.g + " gallons", function() {
						// arrange
						var converter = new Converter();
						var input = element.l;
						var units = "US";
						// act
						var actual = converter.litersToGallons(input, units);
						// assert
						var expected = new Number(element.g);
						expect(actual.valueOf()).toBe(expected.valueOf());
					});
				});
			});

			describe("while converting to UK gallons", function(){
				[{l:0, g:0},
				 {l:10,g:2.199692483},
				 {l:2, g:0.439938497}
				].forEach(function(element){
					it("When " +element.l + " liters should return " + element.g + " gallons", function() {
						// arrange
						var converter = new Converter();
						var input = element.l;
						var units = "UK";
						// act
						var actual = converter.litersToGallons(input, units);
						// assert
						var expected = new Number(element.g);
						expect(actual.valueOf()).toBe(expected.valueOf());
					});
				});
			});
		});
	});

	describe("Given fractional numbers", function(){
		describe("while converting to US gallons", function(){
			[{l:0.5, g:0.132086026},
			 {l:2.34,g:0.618162603},
			 {l:7.29, g:1.925814262}
			].forEach(function(element){
				it("When " +element.l + " liters should return " + element.g + " gallons", function() {
					// arrange
					var converter = new Converter();
					var input = element.l;
					var units = "US";
					// act
					var actual = converter.litersToGallons(input, units);
					// assert
					var expected = new Number(element.g);
					expect(actual.valueOf()).toBe(expected.valueOf());
				});
			});
		});

		describe("while converting to UK gallons", function(){
			[{l:0.5, g:0.109984624},
			 {l:2.34,g:0.514728041},
			 {l:7.29, g:1.60357582}
			].forEach(function(element){
				it("When " +element.l + " liters should return " + element.g + " gallons", function() {
					// arrange
					var converter = new Converter();
					var input = element.l;
					var units = "UK";
					// act
					var actual = converter.litersToGallons(input, units);
					// assert
					var expected = new Number(element.g);
					expect(actual.valueOf()).toBe(expected.valueOf());
				});
			});
		});
	});
});
