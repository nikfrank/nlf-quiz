'use strict';

(function() {

  class MainController {

    constructor() {
      this.advance = function(question){
	question.show = (question.show === 'value')?
          'text':
          (question.show === 'text')?
          'answer':
          '';
      };

      this.gameIndex = 0;
      this.prev = ()=> (this.gameIndex = Math.max(0, this.gameIndex-1));
      this.next = ()=> (this.gameIndex = Math.min(this.games.length-1, this.gameIndex+1));
      
      this.games = [
        {
          name:'game 1 single',
          categories:[
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
          ]
        },
        
        {
          name:'game 1 double',
          categories:[
            {
              name:'sympathetic or parasympathetic',
              questions:[
                {
                  value:200,
	          show:'value',
                  text:'slows heart beat',
                  answer:'what is parasympathetic'
                },
                {
                  value:400,
	          show:'value',
                  text:'stimulates "goose pimples"',
                  answer:'what is sympathetic'
                },
                {
                  value:600,
	          show:'value',
                  text:'opens sphincter for urination',
                  answer:'what is parasympathetic'
                },
                {
                  value:800,
	          show:'value',
                  text:'increases secretion of digestive juices',
                  answer:'what is parasympathetic'
                },
                {
                  value:1000,
	          show:'value',
                  text:'relaxes bladder',
                  answer:'what is sympathetic'
                }
              ]
            },
            {
              name:'"N"ice words',
              questions:[
                {
                  value:200,
	          show:'value',
                  text:'nerve cell',
                  answer:'what is neuron'
                },
                {
                  value:400,
	          show:'value',
                  text:'physician specializing in nervous system disorders',
                  answer:'what is neurologist'
                },
                {
                  value:600,
	          show:'value',
                  text:'chemical by which neurons communicate',
                  answer:'what is neurotransmitter'
                },
                {
                  value:800,
	          show:'value',
                  text:'signal that carries information along nerves',
                  answer:'what is nerve impulse'
                },
                {
                  value:1000,
	          show:'value',
                  text:'a neurotransmitter',
                  answer:'what is norepinephrine'
                }
              ]
            },
            {
              name:'located in skull, neck or abdomen',
              questions:[
                {
                  value:200,
	          show:'value',
                  text:'hypothalamus',
                  answer:'what is skull'
                },
                {
                  value:400,
	          show:'value',
                  text:'parathyroid',
                  answer:'whats if neck'
                },
                {
                  value:600,
	          show:'value',
                  text:'pancreas',
                  answer:'what is abdomen'
                },
                {
                  value:800,
	          show:'value',
                  text:'adrenal glands',
                  answer:'what is abdomen'
                },
                {
                  value:1000,
	          show:'value',
                  text:'pineal gland',
                  answer:'what is skull'
                }
              ]
            },
            {
              name:'numbers',
              questions:[
                {
                  value:200,
	          show:'value',
                  text:'bones in the body',
                  answer:'what is 206'
                },
                {
                  value:400,
	          show:'value',
                  text:'ideal body-fat percentage range for women',
                  answer:'what is 18-24%'
                },
                {
                  value:600,
	          show:'value',
                  text:'pairs of cranial nerves',
                  answer:'what is 12'
                },
                {
                  value:800,
	          show:'value',
                  text:'pairs of nerves attached to spinal cord',
                  answer:'what is 31'
                },
                {
                  value:1000,
	          show:'value',
                  text:'types of cartilage',
                  answer:'what is 3'
                }
              ]
            },
            {
              name:'types of movement',
              questions:[
                {
                  value:200,
	          show:'value',
                  text:'makes angle between bones smaller',
                  answer:'what is flexion'
                },
                {
                  value:400,
	          show:'value',
                  text:'makes angle between bones larger',
                  answer:'what is extension'
                },
                {
                  value:600,
	          show:'value',
                  text:'moving a part toward midline',
                  answer:'what is adduction'
                },
                {
                  value:800,
	          show:'value',
                  text:'elevation of top of foot with toes pointing up',
                  answer:'what is dorsiflexion'
                },
                {
                  value:1000,
	          show:'value',
                  text:'turning of the ankle so that the bottom of foot faces toward midline',
                  answer:'what is inversion'
                }
              ]
            },
            {
              name:'In other words....(synonyms)',
              questions:[
                {
                  value:200,
	          show:'value',
                  text:'cardiovascular system',
                  answer:'what is circulatory system'
                },
                {
                  value:400,
	          show:'value',
                  text:'voice box',
                  answer:'what is larynx'
                },
                {
                  value:600,
	          show:'value',
                  text:'sensory neurons',
                  answer:'what are afferent neurons'
                },
                {
                  value:800,
	          show:'value',
                  text:'motor neurons',
                  answer:'what are efferent neurons'
                },
                {
                  value:1000,
	          show:'value',
                  text:'windpipe',
                  answer:'what is trachea'
                }
              ]
            }
          ]
        }
      ];
      
    }

  }

  angular.module('quizApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs:'vm'
    });
})();
