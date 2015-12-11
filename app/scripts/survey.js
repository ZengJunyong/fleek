// Generated by CoffeeScript 1.9.1
(function() {
  'use strict';
  angular.module('surveyApp', []).controller('SurveyController', function($scope, $http) {
    var i, index, j, len, ref, temp, value, x;
    this.q2 = ['Funny', 'Misunderstood', 'Interesting', 'Ugly', 'Boring', 'Awkward', 'Beautiful', 'Quiet'];
    this.q3 = ['Do some sexy dancing :)', 'Fix my clothes or hair', 'Nothing', 'Turn away in disgust', 'Aren’t happy with what you see', 'Fix your posture'];
    this.q4 = ['My hair', 'My body', 'My personality', 'My skin', 'Everything', 'I don’t know/other'];
    this.q5 = ['traditional and proper', 'sharp and direct', 'playful and spirited', 'relaxed and liberal', 'innovative and forward-thinking', 'I don’t know/other'];
    this.q6 = ['blend in', 'be in control, exude power', 'be animated', 'seem natural and easygoing', 'make a statement'];
    this.q7 = ['I am a man. I wear men’s fashion.', 'I am a women. I wear women’s fashion.', 'I am a man, but I wear women’s fashion sometimes', 'I am a women, but my style is unisex'];
    this.q8 = ['basics, such as navy, white, khaki, charcoal, or brown', 'black and neutrals', 'a rainbow of colors', 'earth tones', 'black with touches of bold color'];
    this.q9 = ['buy a couple outfits at H&M or Topshop', 'spend it on a pair of good leather shoes/bag', 'splurge on anything that catches your eye', 'add to your accessories collection', 'buy a dress that makes you feel smart and unique'];
    for (x = i = 2; i <= 9; x = ++i) {
      temp = [];
      index = 1;
      ref = this['q' + x];
      for (j = 0, len = ref.length; j < len; j++) {
        value = ref[j];
        temp.push({
          index: index,
          value: value
        });
        index++;
      }
      this['q' + x] = temp;
    }
    this.submit = function() {
      var answers, email, k, name, ref1, that;
      this.clicked = 1;
      if ($scope.form.$valid) {
        ref1 = this.survey, name = ref1.name, email = ref1.email;
        answers = [];
        for (x = k = 2; k <= 8; x = ++k) {
          index = this.survey['q' + x + 'Selected'].index;
          answers.push(index);
        }
        if (this.survey.q9Selected) {
          answers.push(this.survey.q9Selected.index);
        }
        that = this;
        return $http({
          method: 'POST',
          url: 'http://letsgaigai.com:9000/answers',
          params: {
            name: name,
            email: email,
            answers: answers
          }
        }).success(function() {
          return that.saved = 1;
        });
      }
    };
  }).controller('AnswersController', function($http, $scope) {
    return $http.get('http://letsgaigai.com:9000/answers').success(function(v) {
      return $scope.answers = v;
    });
  });

}).call(this);

//# sourceMappingURL=survey.js.map
