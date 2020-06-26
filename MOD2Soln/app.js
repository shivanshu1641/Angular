(function (){
	'use strict';
	angular.module('ShoppingListCheckOff',[])

	.controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
	.provider("ShoppingListService", ShoppingListServiceProvider)
    .service("ShoppingListCheckOffService",ShoppingListCheckOffService)
	
	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService)
	{
		var buy = this;
        buy.items = ShoppingListCheckOffService.getBuyArray();
        buy.buyItem = function(index){
            ShoppingListCheckOffService.buy(index);
        };
    }

   AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
   function AlreadyBoughtController(ShoppingListCheckOffService)
    {
        var bought = this;
        bought.items = ShoppingListCheckOffService.getBoughtArray();
    } 



    function ShoppingListCheckOffService()
    {
    	var service = this;

    	var toBuy = [
    {name:"Milk", quantity: 100 },
    {name:"Donuts", quantity: 1200 },
    {name:"Soda", quantity: 300 },
    {name:"Lays", quantity: 10 },
    {name:"Pringles", quantity: 50 },
    {name:"Soap", quantity: 500 }
    ];
    var bought = [];

    	service.buy = function(index)
    	{
           var item = {
            name: toBuy[index].name,
            quantity: toBuy[index].quantity
           }
           toBuy.splice(index,1);
           bought.push(item);
    	}
        service.getBuyArray = function()
        {
            return toBuy;
        }
        service.getBoughtArray = function()
        {
            return bought;
        }
    }
    function ShoppingListServiceProvider(){
        var provider = this;
        provider.defaults = {
            maxItems : 10
        };
        provider.$get = function(){
            var shoppingList = new ShoppingListService(provider.defaults.maxItems);
            return shoppingList;
        }
    }
	})(); //an IIFE (Immediately Invoked Function Expression)