var CalcCtrl;

CalcCtrl = function($scope) {
  $scope.operators = [
    {
      name: '+',
      func: function(a, b) {
        return a + b;
      }
    }, {
      name: '-',
      func: function(a, b) {
        return a - b;
      }
    }, {
      name: '*',
      func: function(a, b) {
        return a * b;
      }
    }, {
      name: '/',
      func: function(a, b) {
        return a / b;
      }
    }
  ];
  $scope.operator = $scope.operators[0];
  $scope.calc = function(one, two, op) {
    one = parseFloat(one || 0);
    two = parseFloat(two || 0);
    return $scope.result = op.func(one, two);
  };
  return $scope.$watch('[left, right, operator]', function() {
    return $scope.calc($scope.left, $scope.right, $scope.operator);
  });
};
