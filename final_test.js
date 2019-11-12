var va1 = document.getElementById("v1");
var va2 = document.getElementById("v2");
var rel = document.getElementById("re");
//清空
function cle() {
  va1.value = "";
  va2.value = "";
  rel.value = "";
}
//判断输入框是否全为空
function allnull() {
  if (Object.is(va2.value, "") && Object.is(va1.value, "")) {
    alert("输入值不能全为空");
  }
}
//对输入的能容进行检测，要求输入-1000000~1000000之间有效的数字
function check() {
  var string = "请输入-1000000~1000000之间有效的数字";
  if (
    100000000 < parseFloat(va1.value) ||
    parseFloat(va1.value) < -100000000 ||
    100000000 < parseFloat(va2.value) ||
    parseFloat(va2.value) < -100000000 ||
    isNaN(va1.value) ||
    isNaN(va2.value)
  ) {
    if (va1.value.indexOf("-") === 0 || va2.value.indexOf("-") === 0) {
    } else {
      alert(string);
      cle();
    }
  }
}
//加法
function add() {
  allnull();
  rel.value = (parseFloat(va1.value) + parseFloat(va2.value)).toFixed(10);
}
//减法
function minus() {
  allnull();
  rel.value = (parseFloat(va1.value) - parseFloat(va2.value)).toFixed(10);
}
//乘法
function times() {
  allnull();
  rel.value = (parseFloat(va1.value) * parseFloat(va2.value)).toFixed(10);
}
//除法
function into() {
  allnull();
  //判断除数是否为0
  if (parseFloat(va2.value) == 0) {
    alert("除数不能为0");
  } else {
    rel.value = (parseFloat(va1.value) / parseFloat(va2.value)).toFixed(10);
  }
}
//开方
function sqrt() {
  allnull();
  var n;
  //默认情况下没有输入第二个值为2
  if (Object.is(va2.value, "")) {
    n = 2;
  } else {
    n = parseFloat(va2.value);
  }
  rel.value = Math.pow(parseFloat(va1.value), 1 / n).toFixed(10);
  alert("输出1st value的2nd value次开方。未输入2nd时，默认为2");
}
//阶乘
function jiecheng() {
  allnull();
  if (parseFloat(va1.value) < 0) {
    alert("负数无阶乘。");
  } else {
    rel.value = parseFloat(va1.value);
    for (var i = parseFloat(va1.value) - 1; i >= 1; i--) {
      rel.value = document.getElementById("re").value * i;
    }
    alert("输出结果为1st value的阶乘。");
  }
}
//取余
function mode() {
  allnull();
  if (parseFloat(va2.value) == 0) {
    alert("不能对0取余");
  } else {
    rel.value = (parseFloat(va1.value) % parseFloat(va2.value)).toFixed(10);
  }
}
//e的n次方
function fexp() {
  allnull();
  rel.value = Math.exp(parseFloat(va1.value)).toFixed(10);
}
//乘方
function cifang() {
  allnull();
  rel.value = 1;
  var n;
  //默认不输入值的情况下，第二个值为2
  if (Object.is(va2.value, "")) {
    n = 2;
  } else {
    n = parseFloat(va2.value);
  }
  rel.value = Math.pow(parseFloat(va1.value), n).toFixed(10);
  alert("输出1st value的2nd value次方。未输入2nd时，默认为2");
}
//以x为底的对数
function duishu() {
  allnull();
  if (parseFloat(va1.value) > 0 && parseFloat(va2.value) > 0) {
    rel.value = (
      Math.log(parseFloat(va2.value)) / Math.log(parseFloat(va1.value))
    ).toFixed(10);
    alert("输出结果为1st value为底2nd value的对数。");
  } else {
    alert("请输入一组大于0的数。");
  }
}
//以10为底的对数
function duishu10() {
  allnull();
  rel.value = Math.log10(parseFloat(va1.value)).toFixed(10);
  alert("输出结果为10为底1st value的对数。");
}
//以e为底的对数
function duishue() {
  allnull();
  rel.value = Math.log(parseFloat(va1.value)).toFixed(10);
  alert("输出结果为e为底1st value的对数。");
}
//正弦
function fsin() {
  allnull();
  rel.value = Math.sin((parseFloat(va1.value) * Math.PI) / 180).toFixed(10); //将角度转化为弧度
  alert("输出结果为1st value的正弦值。");
}
//余弦
function fcos() {
  allnull();
  rel.value = Math.cos((parseFloat(va1.value) * Math.PI) / 180).toFixed(10); //将角度转化为弧度
  alert("输出结果为1st value的余弦值。");
}
//正切
function ftan() {
  allnull();
  if (parseFloat(va1.value) % 90 == 0) {
    alert("无正切值。");
  } else {
    rel.value = Math.tan((parseFloat(va1.value) * Math.PI) / 180).toFixed(10); //将角度转化为弧度
    alert("输出结果为1st value的正切值。");
  }
}
//反正弦
function fasin() {
  allnull();
  if (parseFloat(va1.value) > 1 || parseFloat(va1.value) < -1) {
    alert("请输入-1~1之间的值。");
  } else {
    rel.value = ((Math.asin(parseFloat(va1.value)) * 180) / Math.PI).toFixed(
      10
    ); //将弧度转化为角度
    alert("输出结果为1st value的反正弦值。");
  }
}
//反余弦
function facos() {
  allnull();
  if (parseFloat(va1.value) > 1 || parseFloat(va1.value) < -1) {
    alert("请输入-1~1之间的值。");
  } else {
    rel.value = ((Math.acos(parseFloat(va1.value)) * 180) / Math.PI).toFixed(
      10
    ); //将弧度转化为角度
    alert("输出结果为1st value的反余弦值。");
  }
}
//反正切
function fatan() {
  allnull();
  rel.value = ((Math.atan(parseFloat(va1.value)) * 180) / Math.PI).toFixed(10); //将弧度转化为角度
  alert("输出结果为1st value的反正切值。");
}
