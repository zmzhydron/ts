var asdf = 'zhangmingzhi';
function hehe(name) {
    console.log("my name is " + name);
}
var bitch = /** @class */ (function () {
    function bitch(age, sex) {
        this.age = age;
        this.sex = sex;
        this.wangchange = "my profile is age:" + age + " sex:" + sex;
    }
    return bitch;
}());
var wangchange = new bitch(24, 'female');
function obj(my) {
    console.log("my age is " + my.age);
}
obj(wangchange);
var list = [1, 2, 3, '34534', [1, 2, 3, 4]];
var list2 = [1, 2, 3, '34534', [1, 2, 3, 4]];
var shit;
(function (shit) {
    shit["a"] = "shit";
    shit["b"] = "olala";
    shit[shit["c"] = 419] = "c";
})(shit || (shit = {}));
;
var lol = shit.c;
console.log(lol);
