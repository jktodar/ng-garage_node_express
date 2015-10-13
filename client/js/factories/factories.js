angular.module("GarageApp")


	.factory("CarFactory", function(){
		function Car(){
		
		this.message = "hello from factory";
		this.make = "";
		this.model = "";
		this.year = "";

		this.valuesArray = [
			{ name: "poorValue", condition: 'poor', multiplier: 0.5 },
			{ name: "averageValue", condition: 'average', multiplier: 0.7 },
			{ name: "goodValue", condition: 'good', multiplier: 0.85},
			{ name: "greatValue", condition: 'great', multiplier: 0.92},
			{ name: "perfectValue", condition: 'perfect',multiplier: 0.98},
			{ name: "totalledValue", condition: 'totalled', multiplier: 0.15}
	];

		

		}
		return Car;
	})

	.factory("GarageFactory", function(CarFactory){
		function Garage(){
			console.log(CarFactory);

			this.capacity = 8;
			this.inGarageArray = [];



		}
		return Garage;
		

	})




