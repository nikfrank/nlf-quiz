'use strict';

(function() {

class MainController {

  constructor($http) {
    this.$http = $http;
    this.awesomeThings = [];
	var b={};
	this.awesomeThings=["noa1",1,b.k=0,"nik"]

	this.categories = [
	  {
		title:'faggots',
		questions:[
			{text:'what is this shit?', answer:'some fucking fuck', show:'value',value:100},
			{text:'who is this goddamned faggot?', answer:'some fucking fuck', show:'value',value:200},
			{text:'who is this cunt?', answer:'some fucking fuck', show:'value',value:300},
			{text:'what is this fucking shit?', answer:'some fucking fuck', show:'value',value:400},
			{text:'what is this dick?', answer:'some fucking fuck', show:'value',value:500}
		]
	  },
	  {
		title:'monkeyfuckers',
		questions:[
			{text:'what is this shit?', answer:'some fucking fuck', show:'value',value:100},
			{text:'who is this goddamned faggot?', answer:'some fucking fuck', show:'value',value:200},
			{text:'who is this cunt?', answer:'some fucking fuck', show:'value',value:300},
			{text:'what is this fucking shit?', answer:'some fucking fuck', show:'value',value:400},
			{text:'what is this dick?', answer:'some fucking fuck', show:'value',value:500}
		]
	  },
	  {
		title:'princesses',
		questions:[
			{text:'what is this shit?', answer:'some fucking fuck', show:'value',value:100},
			{text:'who is this goddamned faggot?', answer:'some fucking fuck', show:'value',value:200},
			{text:'who is this cunt?', answer:'some fucking fuck', show:'value',value:300},
			{text:'what is this fucking shit?', answer:'some fucking fuck', show:'value',value:400},
			{text:'what is this dick?', answer:'some fucking fuck', show:'value',value:500}
		]
	  }
	];

	this.goTo = function(question, newShowValue){
		question.show = newShowValue
	}
	
	}

}

angular.module('quizApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController,
	controllerAs:'vm'
  });

})();
