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
    name: 'organ system function',
    questions:[
      {
        value:100,
		show:'value',
        text:'mechanical breakdown of food',
        answer:'what is digestive system'
      },
      {
        value:200,
		show:'value',
        text:'survival of genes',
        answer:'what is reproductive system'
      },
      {
        value:300,
		show:'value',
        text:'protection',
        answer:'what is integumentary system'
      },
      {
        value:400,
		show:'value',
        text:'movement',
        answer:'what is muscular system'
      },
      {
        value:500,
		show:'value',
        text:'communication between body organs',
        answer:'what is nervous system'
      }
    ]
  },
  {
    name:'epithelial tissue types',
    questions:[
      {
        value:100,
		show:'value',
        text:'scalelike cells',
        answer:'what is squamous'
      },
      {
        value:200,
		show:'value',
        text:'taller than wide',
        answer:'what is columnar'
      },
      {
        value:300,
		show:'value',
        text:'single layer cube shaped',
        answer:'what is simple cuboidal'
      },
      {
        value:400,
		show:'value',
        text:'many layers flat cells',
        answer:'what is stratified squamous'
      },
      {
        value:500,
		show:'value',
        text:'many layers varying shaped cells',
        answer:'what is stratified transitional'
      }
    ]
  },
  {
    name:'connective tissue types',
    questions:[
      {
        value:100,
		show:'value',
        text:'contains RBC\'s',
        answer:'what is blood'
      },
      {
        value:200,
		show:'value',
        text:'white or brown',
        answer:'what is adipose'
      },
      {
        value:300,
		show:'value',
        text:'contains calcium mineral crystals',
        answer:'what is bone'
      },
      {
        value:400,
		show:'value',
        text:'contains chondrocytes',
        answer:'what is cartilage'
      },
      {
        value:500,
		show:'value',
        text:'blood-forming tissue',
        answer:'what is hematopiotic'
      }
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
