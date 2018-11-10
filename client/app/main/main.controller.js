'use strict';

(function(angular) {

  class MainController {

    constructor($timeout, games) {
      this.advance = (question={})=> {
        console.log(
          !this.games[this.gameIndex].categories.reduce((gp, gc)=> (
            gp + gc.questions
                   .filter(q=>['done', 'answer'].indexOf(q.show) === -1).length), 0)
        );

        
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
          this.modalText = 'FINAL SCORES: TEAM 1: '+this.t1s+
                           '  TEAM 2: '+this.t2s+'   TEAM 3: '+this.t3s;
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
                        ((question.show === 'text') && (question.answer))?
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
          gp + gc.questions
                 .filter(q=>['done', 'answer'].indexOf(q.show) === -1).length), 0)
        ){
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

          $timeout(()=> (this.games[this.gameIndex].categories[c].questions[q].show = 'value'), 120*i);
        }
      };

      this.games = games.games;
    }
  }
  MainController.$inject = ['$timeout', 'games'];

  angular.module('quizApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs:'vm'
    });
})(angular);
