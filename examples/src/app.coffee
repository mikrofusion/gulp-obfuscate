CalcCtrl = ($scope) ->

  $scope.operators = [
    {name: '+', func: (a, b) -> a + b}
    {name: '-', func: (a, b) -> a - b}
    {name: '*', func: (a, b) -> a * b}
    {name: '/', func: (a, b) -> a / b }
  ]
  $scope.operator = $scope.operators[0]

  $scope.calc = (one, two, op)->
    one = parseFloat one || 0
    two = parseFloat two || 0
    $scope.result = op.func one, two

  $scope.$watch '[left, right, operator]', () ->
    $scope.calc($scope.left, $scope.right, $scope.operator)
