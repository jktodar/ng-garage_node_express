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

		

		self.setCondition = function(value,factor){
			self.currentValue = GarageService.checkValue(value,factor);
			console.log(self.currentValue);
		};
		// self.serviceA.
		console.log(GarageService.message);

		self.addCar = function(make, model, year, condition, value){
			console.log(make, model, year, condition, value);
			self.garageA.inGarageArray.push({make, model, year, condition, value});
			console.log(self.garageA.inGarageArray);
			self.carA.make = '';
			self.carA.model = '';
			self.carA.year = '';
			self.carA.selectedOption = '';
			self.carA.initialValue = '';
			

		};
		self.getInfo = function(make, model, year, condition, value, factor){
			self.setCondition(value, factor);
			// self.addCar(make, model, year, condition, value);
			
		}


	});
