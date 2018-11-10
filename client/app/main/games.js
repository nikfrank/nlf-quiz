'use strict';

(function(angular) {

  class makeGames {

    `
1. INCREASE or DECREASE blood pressure
a. diuretics (decrease)
b. peripheral resistance (increase)
c. increased blood volume (increase)
d. hemorrhage (decrease)
e. polycythemia (increase)
2. Name the artery where pulse is felt
a. in the armpit (axillary)
b. at the wrist (radial)
c. in the neck (carotid)
d. at the bend of the elbow (brachial)
e. in the groin (femoral)
3. Name the B
a. B12 (cyanocoalamine)
b. B6 (pyridoxine)
c. B1 (thiamine)
d. B2 (riboflavin)
e. B3 (niacin)
4. Upper or Lower respiratory tract
a. trachea (lower)
b. nose (upper)
c. lungs (lower)
d. larynx (upper)
e. pharynx (upper)
5. Released from which gland
a. calcitonin (thyroid))
b. oxytocin (posterior pituitary)
c. thyroid stimulating hormone (anterior pituitary)
d. testosterone (testis)
e. chorionic gonadotropin (placenta)

6. How many in the male body

a. epididymis (2)
b. prostate (1)
c. Cowper gland (2)
d. vas deferens (2)
e. ejaculatory duct (2)
    `

    
    constructor() {
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
              ]
            }
          ]
        }
      ];
    }
  }

  angular.module('quizApp')
    .service('games', makeGames);
})(angular);
