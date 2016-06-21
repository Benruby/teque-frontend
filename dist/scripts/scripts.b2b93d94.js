"use strict";angular.module("tequeFrontendApp",["config","ngAnimate","ngCookies","ngResource","ngSanitize","ngMaterial","ngMessages","ui.router","monospaced.elastic"]),angular.module("config",[]).constant("ENV",{apiEndpoint:"https://teque.herokuapp.com/"}),angular.module("tequeFrontendApp").config(["$stateProvider","$urlRouterProvider",function(a,b){a.state("main",{url:"/",templateUrl:"states/main/main.html",controller:"MainCtrl"}).state("login",{url:"/login",templateUrl:"states/user/login/login.html",controller:"LoginCtrl"}).state("logout",{url:"/logout",controller:"LogoutCtrl"}).state("settings",{url:"/settings",templateUrl:"states/user/settings/settings.html",controller:"SettingsCtrl"}).state("show_question",{url:"/question/:question_id",templateUrl:"states/showQuestion/show.html",controller:"ShowQuestionCtrl"}).state("404",{url:"*path",templateUrl:"states/404/404.html"}),b.otherwise("/login")}]).run(["$rootScope","$state","authToken",function(a,b,c){a.$on("$stateChangeStart",function(a,d){c.isAuthenticated().then(function(c){("login"!==d.name||c)&&("login"===d.name||c?"login"===d.name&&c&&(a.preventDefault(),b.go("main")):(a.preventDefault(),b.go("login")))})})}]),angular.module("tequeFrontendApp").factory("authInterceptor",["$q","$location",function(a,b){return{request:function(a){return a.headers=a.headers||{},localStorage.auth_token&&(a.headers.token=localStorage.auth_token),a},responseError:function(c){return 401===c.status&&b.path("login"),a.reject(c)}}}]).config(["$httpProvider",function(a){a.interceptors.push("authInterceptor")}]),angular.module("tequeFrontendApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("tequeFrontendApp").service("login",["$http","ENV",function(a,b){var c=localStorage;this.loginUser=function(c){return a.post(b.apiEndpoint+"/api/login",{email:c.email,password:c.password})},this.signupUser=function(c){return a.post(b.apiEndpoint+"api/users",{user:{full_name:c.full_name,email:c.email,password:c.password}})},this.setUserId=function(a){c.setItem("u_id",a.id),c.setItem("u_email",a.email),c.setItem("u_name",a.full_name)},this.removeUserId=function(){c.removeItem("u_id"),c.removeItem("u_email"),c.removeItem("u_name")}}]),angular.module("tequeFrontendApp").controller("LoginCtrl",["$scope","login","authToken","$state","toastMessage",function(a,b,c,d,e){a.loginUser=function(){if(a.loginForm.$valid){var c=b.loginUser(a.user);c.then(f,g)}};var f=function(a){var e=a.data,f=a.data.authentication_token;c.setToken(f),b.setUserId(e),d.go("main")},g=function(b){a.loginError=b.data.error,e.showToast(a.loginError)};a.signupChoice=!1,a.signup=function(){a.signupChoice=!a.signupChoice}}]),angular.module("tequeFrontendApp").directive("tqLoginForm",function(){return{restrict:"E",templateUrl:"states/user/login/loginForm.html"}}),angular.module("tequeFrontendApp").directive("tqSignupForm",function(){return{restrict:"E",templateUrl:"states/user/signup/signupForm.html"}}),angular.module("tequeFrontendApp").controller("SignupCtrl",["$scope","login","authToken","$state","toastMessage",function(a,b,c,d,e){a.signupUser=function(){if(a.signupForm.$valid){var c=b.signupUser(a.user);c.then(f,g)}};var f=function(a){var b=(a.data,a.data.authentication_token);c.setToken(b),e.showToast("!ההשרמה בוצעה בהצלחה"),d.go("main")},g=function(a){a.data.errors.email?e.showToast("כתובת האימייל כבר בשימוש, בחר/י אחרת"):a.data.errors.password&&e.showToast("אורך הסיסמה נדרש להיות 8 תווים לפחות")}}]),angular.module("tequeFrontendApp").controller("LogoutCtrl",["authToken","$state","logout",function(a,b,c){c.logoutUser()}]),angular.module("tequeFrontendApp").factory("logout",["$http","authToken","$state","login","ENV",function(a,b,c,d,e){return{logoutUser:function(){return a({method:"DELETE",url:e.apiEndpoint+"/api/logout"}).success(function(){b.removeToken(),d.removeUserId(),c.go("login")}).error(function(){c.go("login")})}}}]),angular.module("tequeFrontendApp").directive("tqPasswordReset",function(){return{restrict:"E",templateUrl:"states/user/password_reset/reset.html",scope:{email:"=email",validEmail:"@"},controller:["PasswordReset","$scope","toastMessage",function(a,b,c){b.sendEmail=function(){"true"===b.validEmail?(a.sendEmail({email:b.email}),c.showToast(".הנחיות לחידוש סיסמה נשלחו לכתובת האימייל")):c.showToast("אימייל לא חוקי, אנא הקלד שנית")}}]}}),angular.module("tequeFrontendApp").service("PasswordReset",["$http","ENV",function(a,b){this.loginUser=function(c){return a.post(b.apiEndpoint+"/api/login",{email:c.email,password:c.password})},this.sendEmail=function(c){return a.post(b.apiEndpoint+"/api/users/password",{user:c})},this.updatePassword=function(c){return a.put(b.apiEndpoint+"/api/users/update_password",{user:{password:c.new_password}})}}]),angular.module("tequeFrontendApp").controller("SettingsCtrl",["$scope","PasswordReset","Settings","$mdMedia","$mdDialog",function(a,b,c,d,e){a.state="profile",a.editName=!1,a.editDescription=!1,a.editPassword=!1,a.checkedPassword,a.passwordError=!1,a.password_confirmation=!0,c.get().$promise.then(function(b){a.user=b,a.user.description=a.user.description||"הוסף תיאור",a.userData=a.user,a.user.new_name=a.user.full_name,a.user.new_description=a.user.description}),a.changeState=function(b){a.state=b},a.editUserName=function(){a.editName=!a.editName},a.editUserDescription=function(){a.editDescription=!a.editDescription},a.sendUserName=function(){a.userData.full_name=a.user.new_name,c.update(a.userData),a.editUserName()},a.sendUserPassword=function(){f()&&(a.userData.new_password=a.user.newPassword,b.updatePassword(a.userData),a.editPassword=!1)};var f=function(){return(passwordForm.password=!passwordForm.password_conf)?(a.password_confirmation=!1,!1):(a.password_confirmation=!0,!0)};a.sendUserDescription=function(){a.userData.description=a.user.new_description,c.update(a.userData),a.editUserDescription()},a.showAdvanced=function(b){var c=(d("sm")||d("xs"))&&a.customFullscreen;e.show({controller:"PasswordDialogCtrl",templateUrl:"components/user/settings/account/passwordDialog/dialog-template.html",parent:angular.element(document.body),targetEvent:b,skipHide:!0,locals:{parent:a},bindToController:!0,clickOutsideToClose:!0,fullscreen:c}).then(function(b){a.editPassword=!0,console.log("this is from settings controller success")},function(a){console.log("reject of the setting controller"),console.log(a)})}}]),angular.module("tequeFrontendApp").directive("tqUserAccount",["logout",function(a){return{restrict:"E",templateUrl:"components/user/settings/account/account.html",controller:function(){}}}]),angular.module("tequeFrontendApp").controller("PasswordDialogCtrl",["$scope","$mdDialog","$mdMedia","authToken","$timeout",function(a,b,c,d,e){a.status="  ",a.customFullscreen=c("xs")||c("sm"),a.hide=function(){b.hide()},a.cancel=function(){b.cancel()},a.answer=function(c){a.checkPassword(c).then(function(){console.log("answer seccess"),b.hide()},function(b){return console.log("answer FAILED"),a.passwordError=!0,b})},a.checkPassword=function(a){return d.checkPassword(a)}}]),angular.module("tequeFrontendApp").directive("tqUserProfile",function(){return{restrict:"E",templateUrl:"components/user/settings/profile/profile.html",controller:["$scope",function(a){a.image=[{src:"images/profile.67c0eb4a.jpeg"}]}]}}),angular.module("tequeFrontendApp").directive("tqAsk",function(){return{restrict:"E",templateUrl:"components/askQuestion/ask.html",controller:"AskCtrl",replace:!0}}),angular.module("tequeFrontendApp").controller("AskCtrl",["$scope","$state","Questions","toastMessage",function(a,b,c,d){a.question_data={},a.askQuestion=function(){if(a.askForm.$valid){c.save({question:a.question_data}).$promise.then(function(c){a.question_data={},a.$focused=!1,b.reload()},function(a){console.log(a)})}}}]),angular.module("tequeFrontendApp").directive("tqInputFocus",function(){return{require:"ngModel",link:function(a,b,c){a.$focused=!1,b.bind("focus",function(b){a.$apply(function(){a.$focused=!0})})}}}),angular.module("tequeFrontendApp").directive("tqNavbar",function(){return{restrict:"E",templateUrl:"components/navbar/navbar.html",controller:["$scope","authToken",function(a,b){a.loggedin=b.isAuthenticated()}]}}),angular.module("tequeFrontendApp").factory("toastMessage",["$mdToast",function(a){return{showToast:function(b){a.show(a.simple().textContent(b).position("bottom").hideDelay(4e3))}}}]),angular.module("tequeFrontendApp").controller("MainCtrl",["$scope",function(a){}]),angular.module("tequeFrontendApp").controller("QuestionsCtrl",["$scope","Questions",function(a,b){a.questions=b.query()}]),angular.module("tequeFrontendApp").directive("tqQuestions",function(){return{restrict:"E",templateUrl:"components/questions/questions.html",controller:"QuestionsCtrl"}}),angular.module("tequeFrontendApp").factory("authToken",["$http","$q","ENV",function(a,b,c){var d=localStorage,e="auth_token",f={setToken:function(a){d.setItem(e,a)},getToken:function(){return d.getItem(e)},isAuthenticated:function(){var a=b.defer(),c=f.getToken(),d=this.checkServerToken().success(function(b){c&&d&&c===b.token?a.resolve(!0):a.resolve(!1)}).error(function(){console.log("cant get token from server")});return a.promise},checkServerToken:function(){return a.get(c.apiEndpoint+"/api/token")},removeToken:function(){d.removeItem(e)},checkPassword:function(b){return a.post(c.apiEndpoint+"/api/check_password",{user:{password:b}})}};return f}]),angular.module("tequeFrontendApp").factory("Questions",["$resource","$http","ENV",function(a,b,c){return a(c.apiEndpoint+"/api/questions/:id")}]),angular.module("tequeFrontendApp").factory("Answers",["$resource","ENV",function(a,b){return a(b.apiEndpoint+"/api/answers/:answer_id?question_id",{answer_id:"@answer_id",question_id:"@question_id"},{update:{method:"PUT"}})}]),angular.module("tequeFrontendApp").factory("QuestionUpvotes",["$resource","$http","ENV",function(a,b,c){return{votes:a(c.apiEndpoint+"/api/question_upvotes/:question_id",{question_id:"@question_id"})}}]),angular.module("tequeFrontendApp").factory("QuestionComments",["$resource","$http","ENV",function(a,b,c){return a(c.apiEndpoint+"/api/question_comments/:comment_id",{comment_id:"@comment_id"})}]),angular.module("tequeFrontendApp").factory("Settings",["$resource","$http","ENV",function(a,b,c){return a(c.apiEndpoint+"/api/users/:id",null,{update:{method:"PATCH"}})}]),angular.module("tequeFrontendApp").directive("readMore",function(){return{template:"<p></p>",transclude:!0,replace:!0,scope:{limit:"@",content:"@"},link:function(a,b,c,d,e){function f(a){var a=a,c=a,d=a.length,e="",f=a;d>g&&(a=c.slice(0,g),e=c.slice(g,d),f=a+h+'...<span class="more-text">'+e+"</span>"),b.append(f),b.find(".read-more").on("click",function(){$(this).hide(),b.find(".more-text").addClass("show").slideDown()})}var g=angular.isUndefined(a.limit)?100:a.limit,h='<a class="read-more">קרא עוד</a>';c.$observe("content",function(a){f(a)}),e(a.$parent,function(a,b){f(a.text().trim())})}}}),angular.module("tequeFrontendApp").directive("tqQuestionTemplate",["QuestionUpvotes","login",function(a,b){return{templateUrl:"components/questions/indexTemplate/questionTemplate.html",restrict:"E",replace:!0,scope:{data:"="},controller:["$scope",function(b){b.question_title=b.data.title,b.question_body=b.data.body,b.answerEnabled=!1,b.voted=!1,b.commentEnabled=!1;var c=localStorage.getItem("u_id");b.votes_ids=[],b.voteText;for(var d=0;d<b.data.question_upvotes.length;d++)b.votes_ids.push(b.data.question_upvotes[d].user_id);-1===b.votes_ids.indexOf(parseInt(c))?(b.voted=!1,b.voteText="אוהב?"):(b.voted=!0,b.voteText="אהבתי"),b.answer=function(){b.answerEnabled=!b.answerEnabled},b.upvote=function(c){b.voted?(a.votes["delete"]({question_id:c}),b.data.upvotes--,b.voted=!1,b.voteText="אוהב?"):(a.votes.save({question_id:c}),b.data.upvotes++,b.voted=!0,b.voteText="אהבתי")},b.comment=function(){b.commentEnabled=!b.commentEnabled}}]}}]),angular.module("tequeFrontendApp").controller("ShowQuestionCtrl",["$log","$scope","Questions","$stateParams",function(a,b,c,d){b.question=c.get({id:d.question_id}).$promise.then(function(a){b.question=a},function(){console.log("resource ERROR!!!")})}]),angular.module("tequeFrontendApp").directive("tqAddAnswer",function(){return{restrict:"E",templateUrl:"components/answers/add_answer/add_answer.html",controller:"AddAnswers",scope:{questionId:"=",closeAnswer:"&"}}}),angular.module("tequeFrontendApp").controller("AddAnswers",["$scope","$state","Answers","toastMessage",function(a,b,c,d){a.answer={},a.sendAnswer=function(){a.answer.question_id=a.questionId,c.save({answer:a.answer}),d.showToast("התשובה נשלחה בהצלחה"),a.closeAnswer(),b.reload()}}]),angular.module("tequeFrontendApp").directive("tqShowAnswers",["$timeout",function(a){return{templateUrl:"components/answers/show_answers/show.html",restrict:"E",replace:!0,scope:{answers:"="},controller:["$scope",function(a){}]}}]),angular.module("tequeFrontendApp").directive("tqQuestionComment",["QuestionComments",function(a){return{restrict:"E",templateUrl:"components/questionComments/question_comment.html",replace:!0,scope:{questionId:"=",closeComment:"&"},controller:["$scope","$state","toastMessage",function(b,c,d){b.comment={},b.comments=a.query({question_id:b.questionId}),b.sendComment=function(){b.comment.question_id=b.questionId,a.save(b.comment),b.comments=a.query({question_id:b.questionId}),b.comment={},d.showToast("תגובה נוספה בהצלחה")}}]}}]),angular.module("tequeFrontendApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<ul> <li ng-repeat="thing in awesomeThings">{{thing}} </li> </ul> <div class="jumbotron"> <h1>\'Allo, \'Allo!</h1> <p class="lead"> <img src="images/yeoman.8cb970fb.png" alt="I\'m Yeoman"><br> Always a pleasure scaffolding your apps. </p> <p><a class="btn btn-lg btn-success" ui-sref="/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>')}]);