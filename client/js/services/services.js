angular.module("GarageApp")
	.service("GarageService", function(){
		var self = this;
		self.message = 'hello from service';


		self.valueCalculator = function(initialValue, factor){
			return initialValue*factor;
		};
		self.checkValue = function(initialValue, factor){
			if ( angular.isNumber(initialValue) && angular.isNumber(factor) ) {
				return self.valueCalculator(initialValue, factor);
			}else{
				console.log('Something is not a number',initialValue,factor);
			}
		};
	});