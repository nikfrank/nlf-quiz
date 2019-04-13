'use strict';

(function(angular) {

  class makeGames {
    
    constructor() {
      
      this.games = [
        {
          name:'game 1 single',
          categories:[
            {
              name: 'Sulfonylurea, DPP-4 inhibitor, or SGLT-2 inhhibitor',
              questions: [
                {
                  value: 100,
	          show:'',
                  text:'dapagliflozin',
                  answer:'SGLT-2 inhibitor'
                },
                {
                  value: 200,
	          show:'',
                  text:'sitagliptin',
                  answer:'DPP-4 inhibitor'
                },
                {
                  value: 300,
	          show:'',
                  text:'gliclazide',
                  isDailyDouble:true,
                  answer:'Sulfonylurea'
                },
                {
                  value: 400,
	          show:'',
                  text:'glyburide',
                  answer:'Sulfonylurea'
                },
                {
                  value: 500,
	          show:'',
                  text:'linagliptin',
                  answer:'DPP-4 inhibitor'
                },
              ]
            },
            
            {
              name: 'can it cause weight gain',
              questions: [
                {
                  value: 100,
	          show:'',
                  text:'metformin',
                  answer:'no'
                },
                {
                  value: 200,
	          show:'',
                  text:'glyburide',
                  answer:'yes'
                },
                {
                  value: 300,
	          show:'',
                  text:'pioglitazone',
                  answer:'yes'
                },
                {
                  value: 400,
	          show:'',
                  text:'liraglutide',
                  answer:'no'
                },
                {
                  value: 500,
	          show:'',
                  text:'canagliflozin',
                  answer:'no'
                },
              ]
            },

            {
              name: 'can it cause hypoglycemia',
              questions: [
                {
                  value: 100,
	          show:'',
                  text:'repaglinide',
                  answer:'yes'
                },
                {
                  value: 200,
	          show:'',
                  text:'metformin',
                  answer:'no'
                },
                {
                  value: 300,
	          show:'',
                  text:'saxagliptin',
                  answer:'no'
                },
                {
                  value: 400,
	          show:'',
                  text:'empagliflozin',
                  answer:'no'
                },
                {
                  value: 500,
	          show:'',
                  text:'exenatide',
                  answer:'no'
                },
              ]
            },

            {
              name: 'rapid or long-acting insulin',
              questions: [
                {
                  value: 100,
	          show:'',
                  text:'detemir',
                  answer:'long'
                },
                {
                  value: 200,
	          show:'',
                  text:'glulisine',
                  answer:'rapid'
                },
                {
                  value: 300,
	          show:'',
                  text:'glargine',
                  answer:'long'
                },
                {
                  value: 400,
	          show:'',
                  text:'aspart',
                  answer:'rapid'
                },
                {
                  value: 500,
	          show:'',
                  text:'degludec',
                  answer:'long'
                },
              ]
            },

            
            {
              name: 'signs of hypoglycemia or hyperglycemia',
              questions: [
                {
                  value: 100,
	          show:'',
                  text:'dry mouth',
                  answer:'hyper'
                },
                {
                  value: 200,
	          show:'',
                  text:'palpitations',
                  answer:'hypo'
                },
                {
                  value: 300,
	          show:'',
                  text:'frequent urination',
                  answer:'hyper'
                },
                {
                  value: 400,
	          show:'',
                  text:'loss of consciousness',
                  answer:'hypo'
                },
                {
                  value: 500,
	          show:'',
                  text:'fruity smelling breath',
                  answer:'hyper'
                },
              ]
            },

            {
              name: 'type I or type II diabetes',
              questions: [
                {
                  value: 100,
	          show:'',
                  text:'autoimmune disease',
                  answer:'I'
                },
                {
                  value: 200,
	          show:'',
                  text:'usually overweight',
                  answer:'II'
                },
                {
                  value: 300,
	          show:'',
                  text:'requires insulin',
                  answer:'I'
                },
                {
                  value: 400,
	          show:'',
                  text:'most common type',
                  answer:'II'
                },
                {
                  value: 500,
	          show:'',
                  text:'risk increases with age',
                  answer:'II'
                },
              ]
            },
          ]
        },
        //...
        
        {
          name:'game 1 single',
          categories:[
            {
              name: 'insulin or GLP-1 agonist',
              questions: [
                {
                  value: 200,
	          show:'',
                  text:'lispro',
                  answer:'insulin'
                },
                {
                  value: 400,
	          show:'',
                  text:'semaglutide',
                  answer:'GLP-1 agonist'
                },
                {
                  value: 600,
	          show:'',
                  text:'liraglutide',
                  answer:'GLP-1 agonist'
                },
                {
                  value: 800,
	          show:'',
                  text:'NPH',
                  answer:'insulin'
                },
                {
                  value: 1000,
	          show:'',
                  text:'lixisenatide',
                  answer:'GLP-1 agonist'
                },
              ]
            },

            
            {
              name: 'risk factor for type II diabetes or not',
              questions: [
                {
                  value: 200,
	          show:'',
                  text:'woman age 35',
                  answer:'no'
                },
                {
                  value: 400,
	          show:'',
                  text:'man with high blood pressure',
                  answer:'yes'
                },
                {
                  value: 600,
	          show:'',
                  text:'having given birth to a 4 kg baby',
                  answer:'yes'
                },
                {
                  value: 800,
	          show:'',
                  text:'woman with high cholesterol',
                  answer:'yes'
                },
                {
                  value: 1000,
	          show:'',
                  text:'member of First Nations',
                  answer:'yes'
                },
              ]
            },

            
            {
              name: 'myth or truth',
              questions: [
                {
                  value: 200,
	          show:'',
                  text:'people with diabetes can\'t eat sugar',
                  answer:'myth'
                },
                {
                  value: 400,
	          show:'',
                  text:'diabetes is contagious',
                  answer:'myth'
                },
                {
                  value: 600,
	          show:'',
                  text:'diabetes is leading cause of blindness',
                  answer:'truth'
                },
                {
                  value: 800,
	          show:'',
                  text:'cardiovascular disease is strongly linked to diabetes',
                  answer:'truth'
                },
                {
                  value: 1000,
	          show:'',
                  text:'diabetes is a chronic disease',
                  answer:'truth'
                },
              ]
            },

            {
              name: 'numbers',
              questions: [
                {
                  value: 200,
	          show:'',
                  text:'year insulin was discovered',
                  isDailyDouble:true,
                  answer:'1921'
                },
                {
                  value: 400,
	          show:'',
                  text:'desired A1c for most adults with diabetes',
                  answer:'7.0%'
                },
                {
                  value: 600,
	          show:'',
                  text:'desired blood pressure for most adults with diabetes',
                  answer:'<130/80mm Hg'
                },
                {
                  value: 800,
	          show:'',
                  text:'desired LDL for most adults with diabetes',
                  answer:'<2.0mmol/L'
                },
                {
                  value: 1000,
	          show:'',
                  text:'age to start testing for diabetes if you have no risk factors',
                  answer:'40'
                },
              ]
            },

            
            {
              name: 'which medication causes this side effect',
              questions: [
                {
                  value: 200,
	          show:'',
                  text:'metallic taste',
                  answer:'metformin'
                },
                {
                  value: 400,
	          show:'',
                  text:'congestive heart failure, fractures',
                  answer:'rosiglitazone'
                },
                {
                  value: 600,
	          show:'',
                  text:'gas',
                  answer:'acarbose'
                },
                {
                  value: 800,
	          show:'',
                  text:'yeast infection',
                  answer:'canagliflozin, dapagliflozin, empgliflozin'
                },
                {
                  value: 1000,
	          show:'',
                  text:'risk of renal failure if taken during IV contrast dye test',
                  answer:'metformin'
                },
              ]
            },

            
            {
              name: 'define the term',
              questions: [
                {
                  value: 200,
	          show:'',
                  text:'polyuria',
                  answer:'excessive amount of urine'
                },
                {
                  value: 400,
	          show:'',
                  text:'polydipsia',
                  answer:'increased thirst'
                },
                {
                  value: 600,
	          show:'',
                  text:'polyphagia',
                  answer:'increased appetite'
                },
                {
                  value: 800,
	          show:'',
                  text:'glucosuria',
                  isDailyDouble:true,
                  answer:'glucose in urine'
                },
                {
                  value: 1000,
	          show:'',
                  text:'A1c',
                  answer:'average blood sugar over past three months'
                },
              ]
            },

          ],
        
          finalJeopardy:{
            category:'Animal Kingdom',
            text:'This drug is a synthetic form of a substance found in the saliva of the Gila monster lizard',
            answer:'exenatide'
          }
        }
        //...

      ];


    }
  }

  angular.module('quizApp')
         .service('games', makeGames);
})(angular);


/*
this.games = [
  {
          name:'game 1 single',
          categories:[
            {
              name: 'INCREASE or DECREASE blood pressure',
              questions: [
                {
                  value: 100,
	          show:'',
                  text:'diuretics',
                  answer:'decrease'
                },
                {
                  value: 200,
	          show:'',
                  text:'peripheral resistance',
                  answer:'increase'
                },
                {
                  value: 300,
	          show:'',
                  text:'increased blood volume',
                  answer:'increase'
                },
                {
                  value: 400,
	          show:'',
                  text:'hemorrhage',
                  answer:'decrease'
                },
                {
                  value: 500,
	          show:'',
                  text:'polycythemia',
                  answer:'increase'
                },
              ]
            },

            {
              name: 'finger on the pulse',
              questions: [
                {
                  value: 100,
	          show:'',
                  text:'in the armpit',
                  answer:'axillary'
                },
                {
                  value: 200,
	          show:'',
                  text:'at the wrist',
                  answer:'radial'
                },
                {
                  value: 300,
	          show:'',
                  text:'in the neck',
                  answer:'carotid'
                },
                {
                  value: 400,
	          show:'',
                  text:'at the bend of the elbow',
                  answer:'brachial'
                },
                {
                  value: 500,
	          show:'',
                  text:'in the groin',
                  answer:'femoral'
                },
              ]
            },

            {
              name: 'Plan B nomenclature',
              questions: [
                {
                  value: 100,
	          show:'',
                  text:'B12',
                  answer:'cyanocoalamine'
                },
                {
                  value: 200,
	          show:'',
                  text:'B6',
                  answer:'pyridoxine'
                },
                {
                  value: 300,
	          show:'',
                  text:'B1',
                  isDailyDouble:true,
                  answer:'thiamine'
                },
                {
                  value: 400,
	          show:'',
                  text:'B2',
                  answer:'riboflavin'
                },
                {
                  value: 500,
	          show:'',
                  text:'B3',
                  answer:'niacin'
                },
              ]
            },

            {
              name: 'Upper or Lower Respiratory',
              questions: [
                {
                  value: 100,
	          show:'',
                  text:'trachea',
                  answer:'lower'
                },
                {
                  value: 200,
	          show:'',
                  text:'nose',
                  answer:'upper'
                },
                {
                  value: 300,
	          show:'',
                  text:'lungs',
                  answer:'lower'
                },
                {
                  value: 400,
	          show:'',
                  text:'larynx',
                  answer:'upper'
                },
                {
                  value: 500,
	          show:'',
                  text:'pharynx',
                  answer:'upper'
                },
              ]
            },

            
            {
              name: 'Released from which gland',
              questions: [
                {
                  value: 100,
	          show:'',
                  text:'calcitonin',
                  answer:'thyroid'
                },
                {
                  value: 200,
	          show:'',
                  text:'oxytocin',
                  answer:'posterior pituitary'
                },
                {
                  value: 300,
	          show:'',
                  text:'thyroid stimulating hormone',
                  answer:'anterior pituitary'
                },
                {
                  value: 400,
	          show:'',
                  text:'testosterone',
                  answer:'testis'
                },
                {
                  value: 500,
	          show:'',
                  text:'chorionic gonadotropin',
                  answer:'placenta'
                },
              ]
            },

            {
              name: 'How many in the male body',
              questions: [
                {
                  value: 100,
	          show:'',
                  text:'epididymis',
                  answer:'2'
                },
                {
                  value: 200,
	          show:'',
                  text:'prostate',
                  answer:'1'
                },
                {
                  value: 300,
	          show:'',
                  text:'Cowper gland',
                  answer:'2'
                },
                {
                  value: 400,
	          show:'',
                  text:'vas deferens',
                  answer:'2'
                },
                {
                  value: 500,
	          show:'',
                  text:'ejaculatory duct',
                  answer:'2'
                },
              ]
            },
          ]
        },

        {
          name:'DOUBLE jeopardy',
          categories: [
            {
              name: 'caused by FSH or LH',
              questions: [
                {
                  value: 200,
	          show:'',
                  text:'stimulates formation of corpus luteum',
                  answer:'LH'
                },
                {
                  value: 400,
	          show:'',
                  isDailyDouble:true,
                  text:'ovulation',
                  answer:'LH'
                },
                {
                  value: 600,
	          show:'',
                  text:'stimulates testosterone secretion',
                  answer:'LH'
                },
                {
                  value: 800,
	          show:'',
                  text:'spermatogonium to divide',
                  answer:'FSH'
                },
                {
                  value: 1000,
	          show:'',
                  text:'stimulates follicle cells to secrete estrogen',
                  answer:'FSH'
                },
              ]
            },

            {
              name: 'To pee or not to pee',
              questions: [
                {
                  value: 200,
                  show:'',
                  text:'ADH',
                  answer:'decreases urine'
                },
                {
                  value: 400,
                  show:'',
                  text:'aldosterone',
                  answer:'decreases urine'
                },
                {
                  value: 600,
                  show:'',
                  text:'ANH',
                  answer:'increases urine'
                },
                {
                  value: 800,
                  show:'',
                  text:'renin',
                  answer:'decreases urine'
                },
                {
                  value: 1000,
                  show:'',
                  text:'loop diuretic',
                  answer:'increases urine'
                },
              ]
            },

            {
              name: 'It\'s just water weight (higher %)',
              questions: [
                {
                  value: 200,
                  show:'',
                  text:'adult male or adult female',
                  answer:'male'
                },
                {
                  value: 400,
                  show:'',
                  text:'non obese male or obese male',
                  answer:'non obese'
                },
                {
                  value: 600,
                  show:'',
                  text:'newborn or adult female',
                  answer:'newborn'
                },
                {
                  value: 800,
                  show:'',
                  isDailyDouble:true,
                  text:'premature infant or term infant',
                  answer:'premature'
                },
                {
                  value: 1000,
                  show:'',
                  text:'adult male or senior male',
                  answer:'adult male'
                },
              ]
            },

            {
              name: 'Ca, Na, or K',
              questions: [
                {
                  value: 200,
                  show:'',
                  text:'imbalance can cause cardiac arrest',
                  answer:'potassium'
                },
                {
                  value: 400,
                  show:'',
                  text:'building block of bone and teeth',
                  answer:'calcium'
                },
                {
                  value: 600,
                  show:'',
                  text:'imbalance caused by overdose of vitamin D',
                  answer:'calcium'
                },
                {
                  value: 800,
                  show:'',
                  text:'imbalance caused by overuse of salt substitutes',
                  answer:'potassium'
                },
                {
                  value: 1000,
                  show:'',
                  text:'imbalance caused by overuse of salt',
                  answer:'sodium'
                },
              ]
            },

            {
              name: 'Anion or cation',
              questions: [
                {
                  value: 200,
                  show:'',
                  text:'sodium',
                  answer:'cation'
                },
                {
                  value: 400,
                  show:'',
                  text:'potassium',
                  answer:'cation'
                },
                {
                  value: 600,
                  show:'',
                  text:'chloride',
                  answer:'anion'
                },
                {
                  value: 800,
                  show:'',
                  text:'calcium',
                  answer:'cation'
                },
                {
                  value: 1000,
                  show:'',
                  text:'bicarbonate',
                  answer:'anion'
                },
              ]
            },

            {
              name: 'Over or under 7',
              questions: [
                {
                  value: 200,
                  show:'',
                  text:'gastric fluid',
                  answer:'under'
                },
                {
                  value: 400,
                  show:'',
                  text:'orange juice',
                  answer:'under'
                },
                {
                  value: 600,
                  show:'',
                  text:'urine',
                  answer:'under'
                },
                {
                  value: 800,
                  show:'',
                  text:'oven cleaner',
                  answer:'over'
                },
                {
                  value: 1000,
                  show:'',
                  text:'vaginal secretions',
                  answer:'under'
                },
              ]
            },
          ],

          finalJeopardy:{
            category:'Do you need a gland?',
            text:'To visit the islets of Langerhans take a trip to this gland that sits behind the stomach',
            answer:''
          }
        },

        // game 2
        {
          name: 'game 2 single',
          categories: [
            {
              name: 'Acidosis or Alkalosis',
              questions: [
                {
                  value: 100,
                  show:'',
                  text:'uncontrolled diabetes',
                  answer:'acidosis'
                },
                {
                  value: 200,
                  show:'',
                  text:'prolonged diarrhea',
                  answer:'acidosis'
                },
                {
                  value: 300,
                  show:'',
                  text:'excess suctioning',
                  answer:'alkalosis'
                },
                {
                  value: 400,
                  show:'',
                  text:'hyperventilation',
                  answer:'alkalosis'
                },
                {
                  value: 500,
                  show:'',
                  text:'slow breathing',
                  answer:'acidosis'
                },
              ]
            },

            {
              name: 'Renal tubule or Renal corpuscle',
              questions: [
                {
                  value: 100,
                  show:'',
                  text:'collecting duct',
                  answer:'renal tubule'
                },
                {
                  value: 200,
                  show:'',
                  text:'glomerulus',
                  answer:'renal corpuscle'
                },
                {
                  value: 300,
                  show:'',
                  text:'proximal convoluted tubule',
                  answer:'renal tubule'
                },
                {
                  value: 400,
                  show:'',
                  text:'loop of Henle',
                  answer:'renal tubule'
                },
                {
                  value: 500,
                  show:'',
                  text:'Bowman capsule',
                  answer:'renal corpuscle'
                },
              ]
            },

            
            {
              name: 'Inspiration or Expiration',
              questions: [
                {
                  value: 100,
                  show:'',
                  text:'reduction of thoracic cavity size',
                  answer:'expiration'
                },
                {
                  value: 200,
                  show:'',
                  text:'increase in pressure in thoracic cavity',
                  answer:'expiration'
                },
                {
                  value: 300,
                  show:'',
                  text:'diaphragm is elevated',
                  answer:'expiration'
                },
                {
                  value: 400,
                  show:'',
                  text:'diaphragm and external intercostals used',
                  answer:'inspiration'
                },
                {
                  value: 500,
                  show:'',
                  text:'increase top to bottom length of thorax',
                  answer:'inspiration'
                },
              ]
            },

            
            {
              name: 'Where does blood flow next',
              questions: [
                {
                  value: 100,
                  show:'',
                  text:'inferior vena cava',
                  answer:'right atrium'
                },
                {
                  value: 200,
                  show:'',
                  text:'right ventricle',
                  answer:'pulmonary SL valve'
                },
                {
                  value: 300,
                  show:'',
                  text:'left ventricle',
                  isDailyDouble:true,
                  answer:'aortic SL valve'
                },
                {
                  value: 400,
                  show:'',
                  text:'left atrium',
                  answer:'bicuspid or mitral valve'
                },
                {
                  value: 500,
                  show:'',
                  text:'right atrium',
                  answer:'tricuspid'
                },
              ]
            },

            {
              name: 'Veins of Head & Neck, Upper Extremity or Thorax',
              questions: [
                {
                  value: 100,
                  show:'',
                  text:'jugular',
                  answer:'head & neck'
                },
                {
                  value: 200,
                  show:'',
                  text:'ulnar',
                  answer:'upper extremity'
                },
                {
                  value: 300,
                  show:'',
                  text:'pulmonary',
                  answer:'thorax'
                },
                {
                  value: 400,
                  show:'',
                  text:'inferior vena cava',
                  answer:'thorax'
                },
                {
                  value: 500,
                  show:'',
                  text:'axillary',
                  answer:'upper extremity'
                },
              ]
            },

            
            {
              name: 'Increase or Decrease Cardiac Output',
              questions: [
                {
                  value: 100,
                  show:'',
                  text:'norepinephrine release',
                  answer:'increase'
                },
                {
                  value: 200,
                  show:'',
                  text:'acetylcholine release',
                  answer:'decrease'
                },
                {
                  value: 300,
                  show:'',
                  text:'high venous return',
                  answer:'increase'
                },
                {
                  value: 400,
                  show:'',
                  text:'artery blockage',
                  answer:'decrease'
                },
                {
                  value: 500,
                  show:'',
                  text:'stress',
                  answer:'increase'
                },
              ]
            },

          ],
        },

        {
          name: 'DOUBLE jeopardy 2',
          categories: [
            {
              name: 'Secreted by what gland',
              questions: [
                {
                  value: 200,
                  show:'',
                  text:'melatonin',
                  answer:'pineal'
                },
                {
                  value: 400,
                  show:'',
                  isDailyDouble:true,
                  text:'calcitonin',
                  answer:'thyroid'
                },
                {
                  value: 600,
                  show:'',
                  text:'thymosins',
                  answer:'thymus'
                },
                {
                  value: 800,
                  show:'',
                  text:'insulin',
                  answer:'pancreatic islets'
                },
                {
                  value: 1000,
                  show:'',
                  text:'growth hormone',
                  answer:'anterior pituitary'
                },
              ]
            },

            {
              name: 'Carb, Protein or Fat',
              questions: [
                {
                  value: 200,
                  show:'',
                  text:'potatoes',
                  answer:'carb'
                },
                {
                  value: 400,
                  show:'',
                  text:'eggs',
                  answer:'protein'
                },
                {
                  value: 600,
                  show:'',
                  text:'bean',
                  answer:'protein'
                },
                {
                  value: 800,
                  show:'',
                  text:'butter',
                  answer:'fat'
                },
                {
                  value: 1000,
                  show:'',
                  text:'white bread',
                  answer:'carb'
                },
              ]
            },

            {
              name: 'Childhood, Adolescence or Senescence',
              questions: [
                {
                  value: 200,
                  show:'',
                  text:'loss of deciduous teeth',
                  answer:'childhood'
                },
                {
                  value: 400,
                  show:'',
                  text:'intense physical growth',
                  answer:'adolescence'
                },
                {
                  value: 600,
                  show:'',
                  text:'muscle atrophy in the bladder',
                  answer:'senescence'
                },
                {
                  value: 800,
                  show:'',
                  text:'enlargement of testicles',
                  answer:'adolescence'
                },
                {
                  value: 1000,
                  show:'',
                  text:'presbyopia',
                  answer:'senescence'
                },
              ]
            },

            
            {
              name: 'Intracellular or Extracellular Fluid',
              questions: [
                {
                  value: 200,
                  show:'',
                  text:'plasma',
                  answer:'extracellular'
                },
                {
                  value: 400,
                  show:'',
                  text:'interstitial fluid',
                  answer:'extracellular'
                },
                {
                  value: 600,
                  show:'',
                  text:'cerebrospinal fluid',
                  answer:'extracellular'
                },
                {
                  value: 800,
                  show:'',
                  text:'largest volume of body fluid',
                  answer:'intracellular'
                },
                {
                  value: 1000,
                  show:'',
                  text:'aqueous humor',
                  answer:'extracellular'
                },
              ]
            },

            {
              name: 'External, Internal or Cellular Respiration',
              questions: [
                {
                  value: 200,
                  show:'',
                  text:'movement of air into and out of lungs',
                  answer:'external'
                },
                {
                  value: 400,
                  show:'',
                  text:'use of oxygen by cells for metabolism',
                  answer:'cellular'
                },
                {
                  value: 600,
                  show:'',
                  text:'exchange of gases between blood and cells',
                  answer:'internal'
                },
                {
                  value: 800,
                  show:'',
                  text:'pulmonary ventilation',
                  answer:'external'
                },
                {
                  value: 1000,
                  show:'',
                  text:'energy transferring process by mitochondrion',
                  answer:'cellular'
                },
              ]
            },

            
            {
              name: 'Arteries of Abdomen, Upper Extremity or Lower Extremity',
              questions: [
                {
                  value: 200,
                  show:'',
                  text:'renal',
                  answer:'abdomen'
                },
                {
                  value: 400,
                  show:'',
                  isDailyDouble:true,
                  text:'inferior mesenteric',
                  answer:'abdomen'
                },
                {
                  value: 600,
                  show:'',
                  text:'anterior tibial',
                  answer:'lower extremity'
                },
                {
                  value: 800,
                  show:'',
                  text:'ulnar',
                  answer:'upper extremity'
                },
                {
                  value: 1000,
                  show:'',
                  text:'radial',
                  answer:'upper extremity'
                },
              ]
            },
          ],
          
          finalJeopardy: {
            category: 'I <3 U',
            text: 'The name of these heart valves mean half moon',
            answer: ''
          },
        }
      ];
*/


/*

this.secondDepGames = [
  {
    name:'regular jeopardy',
    categories:[

      {
        name: 'Controversy: Dihydropyridine or Non',
        questions:[
          {
            value:100,
	    show:'',
            text:'amlodipine',
            answer:''
          },
          {
            value:200,
	    show:'',
            text:'diltiazem',
            answer:''
          },
          {
            value:300,
	    show:'',
            text:'nifedipine',
            answer:''
          },
          {
            value:400,
	    show:'',
            text:'felodipine',
            answer:''
          },
          {
            value:500,
	    show:'',
            text:'diltiazem',
            answer:''
          }
        ]
      },
      
      {
        name: 'Problems with Angina',
        questions:[
          {
            value:100,
	    show:'',
            text:'smoking',
            answer:''
          },
          {
            value:200,
	    show:'',
            text:'high salt diet',
            answer:''
          },
          {
            value:300,
	    show:'',
            text:'excessive alcohol intake',
            answer:''
          },
          {
            value:400,
	    show:'',
            text:'mild exercise',
            answer:''
          },
          {
            value:500,
	    show:'',
            text:'obesity',
            answer:''
          }
        ]
      },

      {
        name: 'No way to treat your angina',
        questions:[
          {
            value:100,
	    show:'',
            text:'nitrates',
            answer:''
          },
          {
            value:200,
	    show:'',
            text:'beta-blockers',
            answer:''
          },
          {
            value:300,
	    show:'',
            text:'calcium channel blockers',
            answer:''
          },
          {
            value:400,
	    show:'',
            isDailyDouble:true,
            text:'phosphodiesterase inhibitors',
            answer:''
          },
          {
            value:500,
	    show:'',
            text:'diuretics',
            answer:''
          }
        ]
      },

      {
        name: 'that\'s not chill dude',
        questions:[
          {
            value:100,
	    show:'',
            text:'cocaine',
            answer:''
          },
          {
            value:200,
	    show:'',
            text:'oral contraceptives',
            answer:''
          },
          {
            value:300,
	    show:'',
            text:'acetaminophen',
            answer:''
          },
          {
            value:400,
	    show:'',
            text:'prednisone',
            answer:''
          },
          {
            value:500,
	    show:'',
            text:'licorice root',
            answer:''
          }
        ]
      },
      
      {
        name: 'selective beta blockers',
        questions:[
          {
            value:100,
	    show:'',
            text:'acebutolol',
            answer:''
          },
          {
            value:200,
	    show:'',
            text:'pindolol',
            answer:''
          },
          {
            value:300,
	    show:'',
            text:'bisoprolol',
            answer:''
          },
          {
            value:400,
	    show:'',
            text:'metoprolol',
            answer:''
          },
          {
            value:500,
	    show:'',
            text:'propranolol',
            answer:''
          }
        ]
      },

      {
        name:'ACE inhibitor or ARB',
        questions:[
          {
            value:100,
	    show:'',
            text:'enalapril',
            answer:''
          },
          {
            value:200,
	    show:'',
            text:'ramipril',
            answer:''
          },
          {
            value:300,
	    show:'',
            text:'losartan',
            answer:''
          },
          {
            value:400,
	    show:'',
            text:'fosinopril',
            answer:''
          },
          {
            value:500,
	    show:'',
            text:'irbesartan',
            answer:''
          }
        ]
      }
    ]
  },

  {
    name:'DOUBLE jeopardy',
    finalJeopardy:{
      category:'HEART HEALTH',
      text:'This commonly used household product contains potassium chloride.',
      answer:''
    },
    categories:[

      {
        name: 'hyper or hypo kalemia',
        questions:[
          {
            value:200,
	    show:'',
            text:'hydrochlorothiazide',
            answer:''
          },
          {
            value:400,
	    show:'',
            text:'triamterene',
            answer:''
          },
          {
            value:600,
	    show:'',
            text:'perindopril',
            answer:''
          },
          {
            value:800,
	    show:'',
            text:'indapamide',
            answer:''
          },
          {
            value:1000,
	    show:'',
            text:'spironolactone',
            answer:''
          }
        ]
      },

      {
        name:'calcium channel or beta or alpha',
        questions:[
          {
            value:200,
	    show:'',
            text:'verapamil',
            answer:''
          },
          {
            value:400,
	    show:'',
            text:'pindolol',
            answer:''
          },
          {
            value:600,
	    show:'',
            text:'doxazosin',
            answer:''
          },
          {
            value:800,
	    show:'',
            text:'amlodipine',
            answer:''
          },
          {
            value:1000,
	    show:'',
            text:'acebutolol',
            answer:''
          }
        ]
      },

      {
        name:'site for blood pressure control or not',
        questions:[
          {
            value:200,
	    show:'',
            text:'heart',
            answer:''
          },
          {
            value:400,
	    show:'',
            text:'pancreas',
            answer:''
          },
          {
            value:600,
	    show:'',
            text:'appendix',
            answer:''
          },
          {
            value:800,
	    show:'',
            text:'blood vessels',
            answer:''
          },
          {
            value:1000,
	    show:'',
            text:'kidneys',
            answer:''
          }
        ]
      },

      {
        name:'safe in pregnancy or not',
        questions: [
          {
            value:200,
	    show:'',
            text:'irbesartan',
            answer:''
          },
          {
            value:400,
	    show:'',
            text:'hydralazine',
            answer:''
          },
          {
            value:600,
	    show:'',
            isDailyDouble:true,
            text:'quinapril',
            answer:''
          },
          {
            value:800,
	    show:'',
            text:'aliskirin',
            answer:''
          },
          {
            value:1000,
	    show:'',
            text:'candesartan',
            answer:''
          }
        ]
      },

      {
        name:'increase or decrease blood pressure',
        questions: [
          {
            value:200,
	    show:'',
            text:'smoking',
            answer:''
          },
          {
            value:400,
	    show:'',
            text:'increased cardiac output',
            answer:''
          },
          {
            value:600,
	    show:'',
            text:'decreased peripheral resistance',
            answer:''
          },
          {
            value:800,
	    show:'',
            isDailyDouble:true,
            text:'decreased heart rate',
            answer:''
          },
          {
            value:1000,
	    show:'',
            text:'increased stroke volume',
            answer:''
          }
        ]
      },
      
      {
        name:'hypertension risk factor or not',
        questions: [
          {
            value:200,
	    show:'',
            text:'obesity',
            answer:''
          },
          {
            value:400,
	    show:'',
            text:'physical activity',
            answer:''
          },
          {
            value:600,
	    show:'',
            text:'family history',
            answer:''
          },
          {
            value:800,
	    show:'',
            text:'young age',
            answer:''
          },
          {
            value:1000,
	    show:'',
            text:'diabetes',
            answer:''
          }
        ]
      }
    ]
  }        
];

this.oldGames = [
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
*/

