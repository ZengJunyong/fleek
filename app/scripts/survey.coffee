'use strict'

angular.module('surveyApp', [])
.controller('SurveyController', ($scope, $http)->
  @q2 = [
    'Funny'
    'Misunderstood'
    'Interesting'
    'Ugly'
    'Boring'
    'Awkward'
    'Beautiful'
    'Quiet'
  ]
  @q3 = [
    'Do some sexy dancing :)'
    'Fix my clothes or hair'
    'Nothing'
    'Turn away in disgust'
    'Aren’t happy with what you see'
    'Fix your posture'
  ]
  @q4 = [
    'My hair'
    'My body'
    'My personality'
    'My skin'
    'Everything'
    'I don’t know/other'
  ]
  @q5 = [
    'traditional and proper'
    'sharp and direct'
    'playful and spirited'
    'relaxed and liberal'
    'innovative and forward-thinking'
    'I don’t know/other'
  ]
  @q6 = [
    'blend in'
    'be in control, exude power'
    'be animated'
    'Be natural and easy going'
    'make a statement'
  ]
  @q7 = [
    'I am a man. I wear men’s fashion.'
    'I am a women. I wear women’s fashion.'
    'I am a man, but I wear women’s fashion sometimes'
    'I am a women, but my style is unisex'
  ]
  @q8 = [
    'basics, such as navy, white, khaki, charcoal, or brown'
    'black and neutrals'
    'a rainbow of colors'
    'earth tones'
    'black with touches of bold color'
  ]
  @q9 = [
    'buy a couple outfits at H&M or Topshop'
    'spend it on a pair of good leather shoes/bag'
    'splurge on anything that catches your eye'
    'add to your accessories collection'
    'buy a dress that makes you feel smart and unique'
  ]
  for x in[2..9]
    temp = []
    index = 1
    for value in @['q' + x]
      temp.push {index, value}
      index++
    @['q' + x] = temp
  @submit = ->
    @clicked = 1
    if $scope.form.$valid
      {name,mobile,email} = @survey
      answers = []
      for x in [2..9]
        selected = @survey['q' + x + 'Selected']
        if selected
          {index} = selected
        else
          index = ''
        answers.push index
      that = @
      $http({
        method: 'POST'
        url: 'http://letsgaigai.com:9000/answers'
        params: {name, mobile, email, answers}
      }).success ->
        that.saved = 1
  return
)
.controller('AnswersController', ($http, $scope)->
  $http.get('http://letsgaigai.com:9000/answers').success (v)->
    $scope.answers = v
)
