(function () {

    var module = angular.module('gender', []);

    module.constant('GENDER', [
        {code: 'MALE', name: '男性'},
        {code: 'FEMALE', name: '女性'}
    ]);
    /**
     * 性別コードから名称に変換するフィルター
     */
    module.filter('gender', ['GENDER', function (GENDER) {
        return function (input) {
            var result = GENDER.filter(function (gender) { return input === gender.code});
            if (result.length === 1) {
                return result[0].name;
            } else {
                return '';
            }
        };
    }]);

})();