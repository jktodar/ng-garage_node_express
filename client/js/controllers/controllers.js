angular.module("GarageApp")
	.controller("GarageController", function (GarageFactory,CarFactory, GarageService){
		var self = this;

		// self.garageA = new GarageFactory;

		// Tests below
		// self.garageB = new GarageFactory;
		// self.garageB.capacity = 10;
		self.garageA = new GarageFactory;
		self.carA = new CarFactory();
		console.log(self.garageA.capacity);

		self.setCondition = function(value,condition){
			GarageService.checkValue(value,condition);
		};
		// self.serviceA.
		console.log(GarageService.message);

		self.addCar = function(make, model, year, value, condition){
			console.log(make, model, year, value, condition);
			self.garageA.inGarageArray.push({make, model, year, value, condition});
			console.log(self.garageA.inGarageArray);
		};


	});
