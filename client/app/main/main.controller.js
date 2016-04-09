'use strict';

(function() {

  class MainController {

    constructor() {
      
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
        },
        {
          name:'skeletal muscle contraction types',
          questions:[
            {
              value:100,
	      show:'value',
              text:'quick, jerky response to stimulus',
              answer:'what is a twitch'
            },
            {
              value:200,
	      show:'value',
              text:'sustained, steady response to stimulus',
              answer:'what is a tetanic contraction'
            },
            {
              value:300,
	      show:'value',
              text:'muscle shortens',
              answer:'what is a concentric contraction'
            },
            {
              value:400,
	      show:'value',
              text:'muscle lengthens',
              answer:'what is an eccentric contraction'
            },
            {
              value:500,
	      show:'value',
              text:'results in no movement',
              answer:'what is an isometric contraction'
            }
          ]
        },
        {
          name:'muscle of head/neck, upper extremities, or trunk',
          questions:[
            {
              value:100,
	      show:'value',
              text:'deltoid',
              answer:'what is upper extremities'
            },
            {
              value:200,
	      show:'value',
              text:'diaphragm',
              answer:'what is trunk'
            },
            {
              value:300,
	      show:'value',
              text:'trapezius',
              answer:'what is head/neck'
            },
            {
              value:400,
	      show:'value',
              text:'internal oblique',
              answer:'what is trunk'
            },
            {
              value:500,
	      show:'value',
              text:'frontal',
              answer:'what is head/neck'
            }
          ]
        },
        {
          name:'primary or secondary organ of digestion',
          questions:[
            {
              value:100,
	      show:'value',
              text:'mouth',
              answer:'what is primary'
            },
            {
              value:200,
	      show:'value',
              text:'teeth',
              answer:'what is secondary'
            },
            {
              value:300,
	      show:'value',
              text:'appendix',
              answer:'what is secondary'
            },
            {
              value:400,
	      show:'value',
              text:'esophagus',
              answer:'what is primary'
            },
            {
              value:500,
	      show:'value',
              text:'salivary glands',
              answer:'what is secondary'
            }
          ]
        }
      ];
      
      
      
      this.goTo = function(question, newShowValue){
	question.show = newShowValue;
      };
      
    }

  }

  angular.module('quizApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs:'vm'
    });
})();
