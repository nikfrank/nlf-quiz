'use strict';

(function(angular) {

  class MainController {

    constructor($timeout) {
      this.advance = question=> {
        if(this.currentState === 'fj-cat'){
          document.getElementById('final-j-audio').play();
          this.currentState = 'fj-text';
          this.modalText = this.games[this.gameIndex].finalJeopardy.text;
          this.modalClick = ()=> this.advance();
          return;
        } else if(this.currentState === 'fj-text'){
          this.currentState = 'fj-answer';
          this.modalText = this.games[this.gameIndex].finalJeopardy.answer;
          this.modalClick = ()=> this.advance();
          return;
        } else if(this.currentState === 'fj-answer'){
          // this should display a winner?
          this.currentState = '';
          this.modalText = 'FINAL SCORES: TEAM 1: '+$scope.t1s+
            '  TEAM 2: '+$scope.t2s+'   TEAM 3: '+$scope.t3s;
          this.modalClick = ()=> this.next();
          return;
        }

        if(question.isDailyDouble && question.show === 'value'){
          document.getElementById('dd-j-audio').play();
          question.show = 'dd';
          this.modalClick = ()=> this.advance(question);
          this.modalText = 'כפול יומיומי';
          this.currentState = question.show;
          return;
        }

	question.show = (question.show === 'value')?
          'text':
          (question.show === 'dd')?
          'text':
          (question.show === 'text')?
          'answer':
          'done';

        this.currentState = question.show;
        
        if(question.show === 'text'){
          this.modalText = question.text;
          this.modalClick = ()=> this.advance(question);
        } else {
          this.modalClick = ()=> 0;
        }

        if(!this.games[this.gameIndex].categories.reduce((gp, gc)=> (
          gp + gc.questions.filter(q=>q.show!=='done').length), 0)){
          console.log('final jeopardy?');
          // if there's a final jeopardy question, show category
          // then when it's clicked, show the clue
          // then the answer?
          let fj = this.games[this.gameIndex].finalJeopardy;
          if(fj){
            this.currentState = 'fj-cat';
            this.modalText = fj.category;
            this.modalClick = ()=> this.advance();
          }
        }
      };

      let delay = 4000;

      this.gameIndex = -1;
      this.prev = ()=> (this.gameIndex = Math.max(0, this.gameIndex-1));
      this.next = ()=> {
        this.modalClick = ()=>0;
        this.gameIndex = Math.min(this.games.length-1, this.gameIndex+1);
        this.currentState = 'category';
        
        this.games[this.gameIndex].categories.forEach((cat, i)=> {
          $timeout(()=> (this.modalText = cat.name), i*delay);
          if(i) $timeout(()=> (this.modalText = ''), i*delay-delay/4);
        });
        $timeout(()=>{
          this.currentState = 'loadboard';
          this.loadBoard();

        }, delay*(this.games[this.gameIndex].categories.length));
      };

      this.loadBoard = ()=>{
        document.getElementById('start-j-audio').play();
        let i = 0;
        while(i<30){
          let c = Math.floor(Math.random()*6);
          let q = Math.floor(Math.random()*5);
          if(this.games[this.gameIndex].categories[c].questions[q].show) continue;
          i++;
          this.games[this.gameIndex].categories[c].questions[q].show = 'scheduled';

          $timeout(()=> (this.games[this.gameIndex].categories[c].questions[q].show = 'value'),
                 120*i);
        }
      };
      
      this.games = [
        {
          name:'game 1 single',
          categories:[
            {
              name: 'organ system function',
              questions:[
                {
                  value:100,
	          show:'',
                  text:'mechanical breakdown of food',
                  answer:'what is digestive system'
                },
                {
                  value:200,
	          show:'',
                  text:'survival of genes',
                  answer:'what is reproductive system'
                },
                {
                  value:300,
	          show:'',
                  text:'protection',
                  answer:'what is integumentary system'
                },
                {
                  value:400,
	          show:'',
                  text:'movement',
                  answer:'what is muscular system'
                },
                {
                  value:500,
	          show:'',
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
	          show:'',
                  text:'scalelike cells',
                  answer:'what is squamous'
                },
                {
                  value:200,
	          show:'',
                  text:'taller than wide',
                  answer:'what is columnar'
                },
                {
                  value:300,
	          show:'',
                  text:'single layer cube shaped',
                  answer:'what is simple cuboidal'
                },
                {
                  value:400,
	          show:'',
                  text:'many layers flat cells',
                  answer:'what is stratified squamous'
                },
                {
                  value:500,
	          show:'',
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
	          show:'',
                  text:'contains RBC\'s',
                  answer:'what is blood'
                },
                {
                  value:200,
	          show:'',
                  text:'white or brown',
                  answer:'what is adipose'
                },
                {
                  value:300,
	          show:'',
                  text:'contains calcium mineral crystals',
                  answer:'what is bone'
                },
                {
                  value:400,
	          show:'',
                  isDailyDouble:true,
                  text:'contains chondrocytes',
                  answer:'what is cartilage'
                },
                {
                  value:500,
	          show:'',
                  text:'blood-forming tissue',
                  answer:'what is hematopoitic'
                }
              ]
            },
            {
              name:'skeletal muscle contraction types',
              questions:[
                {
                  value:100,
	          show:'',
                  text:'quick, jerky response to stimulus',
                  answer:'what is a twitch'
                },
                {
                  value:200,
	          show:'',
                  text:'sustained, steady response to stimulus',
                  answer:'what is a tetanic contraction'
                },
                {
                  value:300,
	          show:'',
                  text:'muscle shortens',
                  answer:'what is a concentric contraction'
                },
                {
                  value:400,
	          show:'',
                  text:'muscle lengthens',
                  answer:'what is an eccentric contraction'
                },
                {
                  value:500,
	          show:'',
                  text:'results in no movement',
                  answer:'what is an isometric contraction'
                }
              ]
            },
            {
              name:'muscle of head/neck, upper extm\'s, or trunk',
              questions:[
                {
                  value:100,
	          show:'',
                  text:'deltoid',
                  answer:'what is upper extremities'
                },
                {
                  value:200,
	          show:'',
                  text:'diaphragm',
                  answer:'what is trunk'
                },
                {
                  value:300,
	          show:'',
                  text:'trapezius',
                  answer:'what is head/neck'
                },
                {
                  value:400,
	          show:'',
                  text:'internal oblique',
                  answer:'what is trunk'
                },
                {
                  value:500,
	          show:'',
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
	          show:'',
                  text:'mouth',
                  answer:'what is primary'
                },
                {
                  value:200,
	          show:'',
                  text:'teeth',
                  answer:'what is secondary'
                },
                {
                  value:300,
	          show:'',
                  text:'appendix',
                  answer:'what is secondary'
                },
                {
                  value:400,
	          show:'',
                  text:'esophagus',
                  answer:'what is primary'
                },
                {
                  value:500,
	          show:'',
                  text:'salivary glands',
                  answer:'what is secondary'
                }
              ]
            }
          ]
        },
        
        {
          name:'game 1 double',
          finalJeopardy:{
            category:'in your muscles',
            text:'this acid is produced by hard exercise and oxygen debt, causing soreness',
            answer:'what is lactic acid'
          },
          categories:[
            {
              name:'sympathetic or parasympathetic',
              questions:[
                {
                  value:200,
	          show:'',
                  text:'slows heart beat',
                  answer:'what is parasympathetic'
                },
                {
                  value:400,
	          show:'',
                  text:'stimulates "goose pimples"',
                  answer:'what is sympathetic'
                },
                {
                  value:600,
	          show:'',
                  text:'opens sphincter for urination',
                  answer:'what is parasympathetic'
                },
                {
                  value:800,
	          show:'',
                  text:'increases secretion of digestive juices',
                  answer:'what is parasympathetic'
                },
                {
                  value:1000,
	          show:'',
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
	          show:'',
                  text:'nerve cell',
                  answer:'what is neuron'
                },
                {
                  value:400,
	          show:'',
                  text:'physician specializing in nervous system disorders',
                  answer:'what is neurologist'
                },
                {
                  value:600,
	          show:'',
                  text:'chemical by which neurons communicate',
                  answer:'what is neurotransmitter'
                },
                {
                  value:800,
	          show:'',
                  text:'signal that carries information along nerves',
                  answer:'what is nerve impulse'
                },
                {
                  value:1000,
	          show:'',
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
	          show:'',
                  text:'hypothalamus',
                  answer:'what is skull'
                },
                {
                  value:400,
	          show:'',
                  text:'parathyroid',
                  answer:'whats is neck'
                },
                {
                  value:600,
	          show:'',
                  text:'pancreas',
                  answer:'what is abdomen'
                },
                {
                  value:800,
	          show:'',
                  text:'adrenal glands',
                  answer:'what is abdomen'
                },
                {
                  value:1000,
	          show:'',
                  text:'pineal gland',
                  answer:'what is skull'
                }
              ]
            },
            {
              name:'how many of those',
              questions:[
                {
                  value:200,
	          show:'',
                  text:'bones in the body',
                  answer:'what is 206'
                },
                {
                  value:400,
	          show:'',
                  isDailyDouble:true,
                  text:'ideal body-fat percentage range for women',
                  answer:'what is 18-24%'
                },
                {
                  value:600,
	          show:'',
                  text:'pairs of cranial nerves',
                  answer:'what is 12'
                },
                {
                  value:800,
	          show:'',
                  text:'pairs of nerves attached to spinal cord',
                  answer:'what is 31'
                },
                {
                  value:1000,
	          show:'',
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
	          show:'',
                  text:'makes angle between bones smaller',
                  answer:'what is flexion'
                },
                {
                  value:400,
	          show:'',
                  text:'makes angle between bones larger',
                  answer:'what is extension'
                },
                {
                  value:600,
	          show:'',
                  text:'moving a part toward midline',
                  answer:'what is adduction'
                },
                {
                  value:800,
	          show:'',
                  isDailyDouble:true,
                  text:'elevation of top of foot with toes pointing up',
                  answer:'what is dorsiflexion'
                },
                {
                  value:1000,
	          show:'',
                  text:'turning of the ankle so that the bottom of foot faces toward midline',
                  answer:'what is inversion'
                }
              ]
            },
            {
              name:'In other words...',
              questions:[
                {
                  value:200,
	          show:'',
                  text:'cardiovascular system',
                  answer:'what is circulatory system'
                },
                {
                  value:400,
	          show:'',
                  text:'voice box',
                  answer:'what is larynx'
                },
                {
                  value:600,
	          show:'',
                  text:'sensory neurons',
                  answer:'what are afferent neurons'
                },
                {
                  value:800,
	          show:'',
                  text:'motor neurons',
                  answer:'what are efferent neurons'
                },
                {
                  value:1000,
	          show:'',
                  text:'windpipe',
                  answer:'what is trachea'
                }
              ]
            }
          ]
        },

        {
          name:'game 2 single',
          categories:[
            {
              name:'connective tissue types',
              questions:[
                {
                  value:100,
	          show:'',
                  text:'liquid, contains blood-cell producing cells',
                  answer:'what is hematopoietic'
                },
                {
                  value: 200,
	          show:'',
                  text:'contains triglycerides',
                  answer:'what is adipose'
                },
                {
                  value:300,
	          show:'',
                  text:'liquid, with red and white cells',
                  answer:'what is blood'
                },
                {
                  value:400,
	          show:'',
                  isDailyDouble:true,
                  text:'made of osteons',
                  answer:'what is bone'
                },
                {
                  value:500,
	          show:'',
                  text:'network of fine collagen fibers',
                  answer:'what is reticular'
                }
              ]
            },
            {
              name:'types of muscle tissue',
              questions:[
                {
                  value:100,
	          show:'',
                  text:'voluntary',
                  answer:'what is skeletal'
                },
                {
                  value:200,
	          show:'',
                  text:'eyeball muscles',
                  answer:'what is skeletal'
                },
                {
                  value:300,
	          show:'',
                  text:'no striations',
                  answer:'what is smooth'
                },
                {
                  value:400,
	          show:'',
                  text:'contains intercalated disks',
                  answer:'what is cardiac'
                },
                {
                  value:500,
	          show:'',
                  text:'branching structure',
                  answer:'what is cardiac'
                }
              ]
            },
            {
              name:'which body system',
              questions:[
                {
                  value:100,
	          show:'',
                  text:'spinal cord',
                  answer:'what is nervous'
                },
                {
                  value:200,
	          show:'',
                  text:'kidneys',
                  answer:'what is urinary'
                },
                {
                  value:300,
	          show:'',
                  text:'trachea',
                  answer:'what is respiratory'
                },
                {
                  value:400,
	          show:'',
                  text:'gallbladder',
                  answer:'what is digestive'
                },
                {
                  value:500,
	          show:'',
                  text:'tonsils',
                  answer:'what is lymphatic/immune'
                }
              ]
            },
            {
              name:'types of movements',
              questions:[
                {
                  value:100,
	          show:'',
                  text:'moving a part away from midline',
                  answer:'what is abduction'
                },
                {
                  value:200,
	          show:'',
                  text:'moving foot so bottom faces side of body',
                  answer:'what is eversion'
                },
                {
                  value:300,
	          show:'',
                  text:'movement around a longitudinal axis',
                  answer:'what is rotation'
                },
                {
                  value:400,
	          show:'',
                  text:'palm of hand faces posteriorly',
                  answer:'what is pronation'
                },
                {
                  value:500,
	          show:'',
                  text:'bottom of foot directed downward',
                  answer:'what is plantar flexion'
                }
              ]
            },
            {
              name:'muscle of trunk, lower extremities, or head/neck',
              questions:[
                {
                  value:100,
	          show:'',
                  text:'external oblique',
                  answer:'what is trunk'
                },
                {
                  value:200,
	          show:'',
                  text:'temporal',
                  answer:'what is head/neck'
                },
                {
                  value:300,
	          show:'',
                  text:'gluteus maximus',
                  answer:'what is lower extremities'
                },
                {
                  value:400,
	          show:'',
                  text:'zygomaticus',
                  answer:'what is head/neck'
                },
                {
                  value:500,
	          show:'',
                  text:'tibalis anterior',
                  answer:'what is lower extremities'
                }
              ]
            },
            {
              name:'located in brainstem, or diencephalon',
              questions:[
                {
                  value:100,
	          show:'',
                  text:'medulla oblongata',
                  answer:'what is brainstem'
                },
                {
                  value:200,
	          show:'',
                  text:'hypothalamus',
                  answer:'what is diencephalon'
                },
                {
                  value:300,
	          show:'',
                  text:'midbrain',
                  answer:'what is brainstem'
                },
                {
                  value:400,
	          show:'',
                  text:'pons',
                  answer:'what is brainstem'
                },
                {
                  value:500,
	          show:'',
                  text:'pineal gland',
                  answer:'what is diencephalon'
                }
              ]
            }
          ]
        },

        {
          name:'game 2 double',
          finalJeopardy:{
            category:'the brain and spine',
            text:'this fluid is normally yellowish and clear, some can be removed for analysis or to reduce pressure',
            answer:'what is cerebrospinal fluid'
          },
          categories:[
            {
              name:'sympathetic or parasympathetic',
              questions:[
                {
                  value:200,
                  text:'increases sweat secretion',
                  answer:'what is sympathetic'
                },
                {
                  value:400,
                  text:'dilates blood vessel of skeletal muscles',
                  answer:'what is sympathetic'
                },
                {
                  value:600,
                  text:'increases peristalsis of digestive tract',
                  answer:'what is parasympathetic'
                },
                {
                  value:800,
                  text:'dilates pupils',
                  answer:'what is sympathetic'
                },
                {
                  value:1000,
                  text:'opens sphincter for urination',
                  answer:'what is parasympathetic'
                }
              ]
            },
            {
              name:'hormone or neurotransmitter',
              questions:[
                {
                  value:200,
                  text:'testosterone',
                  answer:'what is hormone'
                },
                {
                  value:400,
                  text:'dopamine',
                  answer:'what is neurotransmitter'
                },
                {
                  value:600,
                  text:'insulin',
                  answer:'what is hormone'
                },
                {
                  value:800,
                  text:'endorphins',
                  answer:'what is neurotransmitter'
                },
                {
                  value:1000,
                  text:'nitric oxide',
                  answer:'what is neurotransmitter'
                }
              ]
            },
            {
              name:'AKA',
              questions:[
                {
                  value:200,
                  text:'fat tissue',
                  answer:'what is adipose'
                },
                {
                  value:400,
                  text:'throat',
                  answer:'what is pharynx'
                },
                {
                  value:600,
                  text:'endurance training',
                  answer:'what is aerobic training'
                },
                {
                  value:800,
                  isDailyDouble:true,
                  text:'digestive tract',
                  answer:'what is alimentary canal'
                },
                {
                  value:1000,
                  text:'cancellous bone',
                  answer:'what is spongy bone'
                }
              ]
            },
            {
              name:'"M" "in" M',
              questions:[
                {
                  value:200,
                  text:'protein in thick filaments of skeletal muscle',
                  answer:'what is myosin'
                },
                {
                  value:400,
                  text:'lipoid substance around some nerve fibers',
                  answer:'what is myelin'
                },
                {
                  value:600,
                  text:'lies above the pons',
                  answer:'what is midbrain'
                },
                {
                  value:800,
                  isDailyDouble:true,
                  text:'red, oxygen-storing pigment',
                  answer:'what is myoglobin'
                },
                {
                  value:1000,
                  text:'membranes surrounding brain and spinal cord',
                  answer:'what is meninges'
                }
              ]
            },
            {
              name:'which organ system',
              questions:[
                {
                  value:200,
                  text:'transportation is main function',
                  answer:'what is cardiovascular'
                },
                {
                  value:400,
                  text:'warms incoming air',
                  answer:'what is respiratory'
                },
                {
                  value:600,
                  text:'electrolyte, water, acid-base balance',
                  answer:'what is urinary'
                },
                {
                  value:800,
                  text:'absorption of nutrients',
                  answer:'what is digestive'
                },
                {
                  value:1000,
                  text:'provides storage for calcium and phosphorus',
                  answer:'what is skeletal'
                }
              ]
            },
            {
              name:'how many of those',
              questions:[
                {
                  value:200,
                  text:'organ systems',
                  answer:'what is 11'
                },
                {
                  value:400,
                  text:'types of muscle tissue',
                  answer:'what is 3'
                },
                {
                  value:600,
                  text:'divisions of the brainstem',
                  answer:'what is 3'
                },
                {
                  value:800,
                  text:'types of neurons',
                  answer:'what is 3'
                },
                {
                  value:1000,
                  text:'layers of spinal meninges',
                  answer:'what is 3'
                }
              ]
            }
          ]
        }
      ];
    }
  }
  MainController.$inject = ['$timeout'];

  angular.module('quizApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs:'vm'
    });
})(angular);
