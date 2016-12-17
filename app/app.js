var app = angular.module('DashboardForm', ['angularUtils.directives.dirPagination']);

app.controller('listdata',function($scope, $http){
	$scope.users = []; //declare an empty array
	$scope.users = [{"id":1,"first_name":"Heather","last_name":"Bell","phone":"1234567890","email":"heather.bell@gmail.com","gender":"female","githuburl":"https://github.com/heather_bell","linkedIn":"https://in.linkedin.com/in/heather_bell","updated":"2016-09-07 09:46:43","collegeName":"GVP,Vizag","skills":"Angular,CSS,HTML"},
{"id":2,"first_name":"Andrea","last_name":"Dean","phone":"7290923457","email":"andrew.dean@gmail.com","gender":"female","githuburl":"https://github.com/andrew_dean","linkedIn":"https://in.linkedin.com/in/andrew_dean","updated":"2016-10-07 09:46:43","collegeName":"BVRIT,Hyd","skills":"C,C++,Python"},
{"id":3,"first_name":"Peter","last_name":"Barnes","phone":"7681667222","email":"peter.barnes@gmail.com","gender":"male","githuburl":"https://github.com/peter_barnes","linkedIn":"https://in.linkedin.com/in/peter_barnes","updated":"2016-09-08 09:46:43","collegeName":"BVRIT,Hyd","skills":"Java"},
{"id":4,"first_name":"Harry","last_name":"Bell","phone":"7287282812","email":"harry.bell@gmail.com","gender":"male","githuburl":"https://github.com/harry_bell","linkedIn":"https://in.linkedin.com/in/harry_bell","updated":"2015-09-07 09:46:43","collegeName":"GVP,Vizag","skills":"Angular,CSS,HTML"},
{"id":5,"first_name":"Deborah","last_name":"Burns","phone":"9726267322","email":"deborah.burns@gmail.com","gender":"male","githuburl":"https://github.com/deborah_burns","linkedIn":"https://in.linkedin.com/in/deborah_burns","updated":"2014-09-07 09:46:43","collegeName":"CVR,Hyd","skills":"PHP,CSS,HTML"},
{"id":6,"first_name":"Larry","last_name":"Kim","phone":"7843435788","email":"larry.kim@gmail.com","gender":"female","githuburl":"https://github.com/larry.kim","linkedIn":"https://in.linkedin.com/in/larry.kim","updated":"2016-08-11 09:46:43","collegeName":"GITAM,Hyd","skills":"Ruby"},
{"id":7,"first_name":"Jason","last_name":"Wallace","phone":"5097675446","email":"jason.wallace@gmail.com","gender":"male","githuburl":"https://github.com/jason_wallace","linkedIn":"https://in.linkedin.com/in/jason_wallace","updated":"2016-01-12 09:46:43","collegeName":"GITAM,Vizag","skills":"Angular"},
{"id":8,"first_name":"Carol","last_name":"Williams","phone":"8766575576","email":"carol.williams@gmail.com","gender":"male","githuburl":"https://github.com/carol.williams","linkedIn":"https://in.linkedin.com/in/heather_bell","updated":"2017-01-01 09:46:43","collegeName":"Vishnu,BVRM","skills":"JavaScript"},
{"id":9,"first_name":"Samuel","last_name":"Olson","phone":"9776565557","email":"samuel.olson@gmail.com","gender":"female","githuburl":"https://github.com/heather_bell","linkedIn":"https://in.linkedin.com/in/heather_bell","updated":"2016-02-07 09:46:43","collegeName":"Vishnu,BVRM","skills":"Java"},
{"id":10,"first_name":"Donna","last_name":"Evans","phone":"7966686686","email":"donna.evans@gmail.com","gender":"male","githuburl":"https://github.com/samuel.olson","linkedIn":"https://in.linkedin.com/in/samuel.olson","updated":"2016-09-07 09:46:43","collegeName":"Vishnu,BVRM","skills":"Ruby"},
{"id":11,"first_name":"Lois","last_name":"Butler","phone":"9676675555","email":"lois.butler@gmail.com","gender":"male","githuburl":"https://github.com/lois.butler","linkedIn":"https://in.linkedin.com/in/lois.butler","updated":"2016-09-22 09:46:43","collegeName":"GVP,Vizag","skills":"PHP,CSS,HTML"},
{"id":12,"first_name":"Daniel","last_name":"Hill","phone":"5768685791","email":"daniel.hill@gmail.com","gender":"female","githuburl":"https://github.com/daniel.hill","linkedIn":"https://in.linkedin.com/in/daniel.hill","updated":"2016-06-27 09:46:43","collegeName":"GVP,Vizag","skills":"PHP,CSS,HTML"},
{"id":13,"first_name":"Matthew","last_name":"Torres","phone":"9799866756","email":"matthew.torres@gmail.com","gender":"male","githuburl":"https://github.com/matthew.torres","linkedIn":"https://in.linkedin.com/in/matthew.torres","updated":"2016-09-18 09:46:43","collegeName":"BVRIT,BVRM","skills":"Java"},
{"id":14,"first_name":"Jerry","last_name":"Hernandez","phone":"9746777686","email":"jerry.hernandez@gmail.com","gender":"male","githuburl":"https://github.com/jerry.hernandez","linkedIn":"https://in.linkedin.com/in/jerry.hernandez","updated":"2016-09-11 09:46:43","collegeName":"BVRIT,BVRM"},
{"id":15,"first_name":"Christopher","last_name":"Carpenter","phone":"9797685857","email":"christopher@gmail.com","gender":"female","githuburl":"https://github.com/heather_bell","linkedIn":"https://in.linkedin.com/in/heather_bell","updated":"2017-01-04 09:46:43","collegeName":"BVRIT,Hyd"},
{"id":16,"first_name":"Harold","last_name":"West","phone":"9796776885","email":"harold.west@gmail.com","gender":"female","githuburl":"https://github.com/harold.west","linkedIn":"https://in.linkedin.com/in/harold.west","updated":"2017-01-05 09:46:43","collegeName":"GITAM,Vizag","skills":"Ruby"},
{"id":17,"first_name":"Carol","last_name":"Hicks","phone":"7885776443","email":"carol.hicks@gmail.com","gender":"male","githuburl":"https://github.com/carol.hicks","linkedIn":"https://in.linkedin.com/in/carol.hicks","updated":"2016-09-17 09:46:43","collegeName":"GITAM,Vizag","skills":"Java"},
{"id":18,"first_name":"Bonnie","last_name":"Davis","phone":"9109202011","email":"bonnie.davis@gmail.com","gender":"male","githuburl":"https://github.com/bonnie.davis","linkedIn":"https://in.linkedin.com/in/bonnie.davis","updated":"2016-09-17 09:46:43","collegeName":"Vishnu,BVRM","skills":"C,C++,Python"},
{"id":19,"first_name":"Nancy","last_name":"Banks","phone":"7767589869","email":"nancy.banks@gmail.com","gender":"male","githuburl":"https://github.com/heather_bell","linkedIn":"https://in.linkedin.com/in/heather_bell","updated":"2016-09-08 09:46:43","collegeName":"Vishnu,BVRM","skills":"Ruby"},
{"id":20,"first_name":"Walter","last_name":"Freeman","phone":"5558578466","email":"walter.freeman@gmail.com","gender":"female","githuburl":"https://github.com/nancy.banks","linkedIn":"https://in.linkedin.com/in/nancy.banks","updated":"2016-09-06 09:46:43","collegeName":"CVR,Hyd","skills":"C,C++,Python"},
{"id":21,"first_name":"Louis","last_name":"Gonzales","phone":"9789699689","email":"louis.gonzals@gmail.com","gender":"female","githuburl":"https://github.com/louis.gonzals","linkedIn":"https://in.linkedin.com/in/louis.gonzals","updated":"2016-11-07 09:46:43","collegeName":"CVR,Hyd","skills":"Java"},
{"id":22,"first_name":"Jean","last_name":"Watkins","phone":"9076966779","email":"jean.watkins@gmail.com","gender":"female","githuburl":"https://github.com/jean.watkins","linkedIn":"https://in.linkedin.com/in/jean.watkins","updated":"2016-12-07 09:46:43","collegeName":"CVR,Hyd","skills":"C,C++,Python"},
{"id":23,"first_name":"Albert","last_name":"Harris","phone":"7868575885","email":"albert.harris@gmail.com","gender":"female","githuburl":"https://github.com/albert.harris","linkedIn":"https://in.linkedin.com/in/albert.harris","updated":"2016-12-07 09:46:43","collegeName":"GVP,Vizag","skills":"C,C++,Python"},
{"id":24,"first_name":"Billy","last_name":"Owens","phone":"7875785887","email":"billy.owens@gmail.com","gender":"female","githuburl":"https://github.com/billy.owens","linkedIn":"https://in.linkedin.com/in/billy.owens","updated":"2016-11-07 09:46:43","collegeName":"GVP,Vizag","skills":"C,C++,Python"},
{"id":25,"first_name":"Russell","last_name":"Patterson","phone":"4666699988","email":"russell.patterson@gmail.com","gender":"female","githuburl":"https://github.com/russell.patterson","linkedIn":"https://in.linkedin.com/in/russell.patterson","updated":"2016-10-07 09:46:43","collegeName":"GVP,Vizag","skills":"Java"}];;
	/*$http.get("mockJson/mock.json").success(function(response){ 
		$scope.users = response;  //ajax request to fetch data into $scope.data
	}); */
	
	$scope.sort = function(keyname){
		$scope.sortKey = keyname;   //set the sortKey to the param passed
		$scope.reverse = !$scope.reverse; //if true make it false and vice versa
	}
});


[{"id":1,"first_name":"Heather","last_name":"Bell","phone":"1234567890","email":"heather.bell@gmail.com","gender":"female","githuburl":"https://github.com/heather_bell","linkedIn":"https://in.linkedin.com/in/heather_bell","updated":"2016-09-07 09:46:43","collegeName":"GVP,Vizag","skills":"Angular,CSS,HTML"},
{"id":2,"first_name":"Andrea","last_name":"Dean","phone":"7290923457","email":"andrew.dean@gmail.com","gender":"female","githuburl":"https://github.com/andrew_dean","linkedIn":"https://in.linkedin.com/in/andrew_dean","updated":"2016-10-07 09:46:43","collegeName":"BVRIT,Hyd","skills":"C,C++,Python"},
{"id":3,"first_name":"Peter","last_name":"Barnes","phone":"7681667222","email":"peter.barnes@gmail.com","gender":"male","githuburl":"https://github.com/peter_barnes","linkedIn":"https://in.linkedin.com/in/peter_barnes","updated":"2016-09-08 09:46:43","collegeName":"BVRIT,Hyd","skills":"Java"},
{"id":4,"first_name":"Harry","last_name":"Bell","phone":"7287282812","email":"harry.bell@gmail.com","gender":"male","githuburl":"https://github.com/harry_bell","linkedIn":"https://in.linkedin.com/in/harry_bell","updated":"2015-09-07 09:46:43","collegeName":"GVP,Vizag","skills":"Angular,CSS,HTML"},
{"id":5,"first_name":"Deborah","last_name":"Burns","phone":"9726267322","email":"deborah.burns@gmail.com","gender":"male","githuburl":"https://github.com/deborah_burns","linkedIn":"https://in.linkedin.com/in/deborah_burns","updated":"2014-09-07 09:46:43","collegeName":"CVR,Hyd","skills":"PHP,CSS,HTML"},
{"id":6,"first_name":"Larry","last_name":"Kim","phone":"7843435788","email":"larry.kim@gmail.com","gender":"female","githuburl":"https://github.com/larry.kim","linkedIn":"https://in.linkedin.com/in/larry.kim","updated":"2016-08-11 09:46:43","collegeName":"GITAM,Hyd","skills":"Ruby"},
{"id":7,"first_name":"Jason","last_name":"Wallace","phone":"5097675446","email":"jason.wallace@gmail.com","gender":"male","githuburl":"https://github.com/jason_wallace","linkedIn":"https://in.linkedin.com/in/jason_wallace","updated":"2016-01-12 09:46:43","collegeName":"GITAM,Vizag","skills":"Angular"},
{"id":8,"first_name":"Carol","last_name":"Williams","phone":"8766575576","email":"carol.williams@gmail.com","gender":"male","githuburl":"https://github.com/carol.williams","linkedIn":"https://in.linkedin.com/in/heather_bell","updated":"2017-01-01 09:46:43","collegeName":"Vishnu,BVRM","skills":"JavaScript"},
{"id":9,"first_name":"Samuel","last_name":"Olson","phone":"9776565557","email":"samuel.olson@gmail.com","gender":"female","githuburl":"https://github.com/heather_bell","linkedIn":"https://in.linkedin.com/in/heather_bell","updated":"2016-02-07 09:46:43","collegeName":"Vishnu,BVRM","skills":"Java"},
{"id":10,"first_name":"Donna","last_name":"Evans","phone":"7966686686","email":"donna.evans@gmail.com","gender":"male","githuburl":"https://github.com/samuel.olson","linkedIn":"https://in.linkedin.com/in/samuel.olson","updated":"2016-09-07 09:46:43","collegeName":"Vishnu,BVRM","skills":"Ruby"},
{"id":11,"first_name":"Lois","last_name":"Butler","phone":"9676675555","email":"lois.butler@gmail.com","gender":"male","githuburl":"https://github.com/lois.butler","linkedIn":"https://in.linkedin.com/in/lois.butler","updated":"2016-09-22 09:46:43","collegeName":"GVP,Vizag","skills":"PHP,CSS,HTML"},
{"id":12,"first_name":"Daniel","last_name":"Hill","phone":"5768685791","email":"daniel.hill@gmail.com","gender":"female","githuburl":"https://github.com/daniel.hill","linkedIn":"https://in.linkedin.com/in/daniel.hill","updated":"2016-06-27 09:46:43","collegeName":"GVP,Vizag","skills":"PHP,CSS,HTML"},
{"id":13,"first_name":"Matthew","last_name":"Torres","phone":"9799866756","email":"matthew.torres@gmail.com","gender":"male","githuburl":"https://github.com/matthew.torres","linkedIn":"https://in.linkedin.com/in/matthew.torres","updated":"2016-09-18 09:46:43","collegeName":"BVRIT,BVRM","skills":"Java"},
{"id":14,"first_name":"Jerry","last_name":"Hernandez","phone":"9746777686","email":"jerry.hernandez@gmail.com","gender":"male","githuburl":"https://github.com/jerry.hernandez","linkedIn":"https://in.linkedin.com/in/jerry.hernandez","updated":"2016-09-11 09:46:43","collegeName":"BVRIT,BVRM"},
{"id":15,"first_name":"Christopher","last_name":"Carpenter","phone":"9797685857","email":"christopher@gmail.com","gender":"female","githuburl":"https://github.com/heather_bell","linkedIn":"https://in.linkedin.com/in/heather_bell","updated":"2017-01-04 09:46:43","collegeName":"BVRIT,Hyd"},
{"id":16,"first_name":"Harold","last_name":"West","phone":"9796776885","email":"harold.west@gmail.com","gender":"female","githuburl":"https://github.com/harold.west","linkedIn":"https://in.linkedin.com/in/harold.west","updated":"2017-01-05 09:46:43","collegeName":"GITAM,Vizag","skills":"Ruby"},
{"id":17,"first_name":"Carol","last_name":"Hicks","phone":"7885776443","email":"carol.hicks@gmail.com","gender":"male","githuburl":"https://github.com/carol.hicks","linkedIn":"https://in.linkedin.com/in/carol.hicks","updated":"2016-09-17 09:46:43","collegeName":"GITAM,Vizag","skills":"Java"},
{"id":18,"first_name":"Bonnie","last_name":"Davis","phone":"9109202011","email":"bonnie.davis@gmail.com","gender":"male","githuburl":"https://github.com/bonnie.davis","linkedIn":"https://in.linkedin.com/in/bonnie.davis","updated":"2016-09-17 09:46:43","collegeName":"Vishnu,BVRM","skills":"C,C++,Python"},
{"id":19,"first_name":"Nancy","last_name":"Banks","phone":"7767589869","email":"nancy.banks@gmail.com","gender":"male","githuburl":"https://github.com/heather_bell","linkedIn":"https://in.linkedin.com/in/heather_bell","updated":"2016-09-08 09:46:43","collegeName":"Vishnu,BVRM","skills":"Ruby"},
{"id":20,"first_name":"Walter","last_name":"Freeman","phone":"5558578466","email":"walter.freeman@gmail.com","gender":"female","githuburl":"https://github.com/nancy.banks","linkedIn":"https://in.linkedin.com/in/nancy.banks","updated":"2016-09-06 09:46:43","collegeName":"CVR,Hyd","skills":"C,C++,Python"},
{"id":21,"first_name":"Louis","last_name":"Gonzales","phone":"9789699689","email":"louis.gonzals@gmail.com","gender":"female","githuburl":"https://github.com/louis.gonzals","linkedIn":"https://in.linkedin.com/in/louis.gonzals","updated":"2016-11-07 09:46:43","collegeName":"CVR,Hyd","skills":"Java"},
{"id":22,"first_name":"Jean","last_name":"Watkins","phone":"9076966779","email":"jean.watkins@gmail.com","gender":"female","githuburl":"https://github.com/jean.watkins","linkedIn":"https://in.linkedin.com/in/jean.watkins","updated":"2016-12-07 09:46:43","collegeName":"CVR,Hyd","skills":"C,C++,Python"},
{"id":23,"first_name":"Albert","last_name":"Harris","phone":"7868575885","email":"albert.harris@gmail.com","gender":"female","githuburl":"https://github.com/albert.harris","linkedIn":"https://in.linkedin.com/in/albert.harris","updated":"2016-12-07 09:46:43","collegeName":"GVP,Vizag","skills":"C,C++,Python"},
{"id":24,"first_name":"Billy","last_name":"Owens","phone":"7875785887","email":"billy.owens@gmail.com","gender":"female","githuburl":"https://github.com/billy.owens","linkedIn":"https://in.linkedin.com/in/billy.owens","updated":"2016-11-07 09:46:43","collegeName":"GVP,Vizag","skills":"C,C++,Python"},
{"id":25,"first_name":"Russell","last_name":"Patterson","phone":"4666699988","email":"russell.patterson@gmail.com","gender":"female","githuburl":"https://github.com/russell.patterson","linkedIn":"https://in.linkedin.com/in/russell.patterson","updated":"2016-10-07 09:46:43","collegeName":"GVP,Vizag","skills":"Java"}];