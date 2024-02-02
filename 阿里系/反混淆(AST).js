const parse = require('@babel/parser')
const fs = require('fs')
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
const generator = require("@babel/generator").default;

process.argv.length > 2 ? File1 = process.argv[2] : File1 = '/Users/flyeyas/items/tuling/src/spider/spiders/阿里系/_encode.js'
process.argv.length > 3 ? File2 = process.argv[2] : File2 = '/Users/flyeyas/items/tuling/src/spider/spiders/阿里系/_decode.js'

jscode = fs.readFileSync(File1, {encoding: 'utf-8'})
let ast = parse.parse(jscode);


var _0x4818=["csKHwqMI","ZsKJwr8VeAsy","UcKiN8O/wplwMA==","JR8CTg==","YsOnbSEQw7ozwqZKesKUw7kwX8ORIQ==","w7oVS8OSwoPCl3jChMKhw6HDlsKXw4s/YsOG","fwVmI1AtwplaY8Otw5cNfSgpw6M=","OcONwrjCqsKxTGTChsOjEWE8PcOcJ8K6","U8K5LcOtwpV0EMOkw47DrMOX","HMO2woHCiMK9SlXClcOoC1k=","asKIwqMDdgMuPsOKBMKcwrrCtkLDrMKBw64d","wqImMT0tw6RNw5k=","DMKcU0JmUwUv","VjHDlMOHVcONX3fDicKJHQ==","wqhBH8Knw4TDhSDDgMOdwrjCncOWwphhN8KCGcKqw6dHAU5+wrg2JcKaw4IEJcOcwrRJwoZ0wqF9YgAV","dzd2w5bDm3jDpsK3wpY=","w4PDgcKXwo3CkcKLwr5qwrY=","wrJOTcOQWMOg","wqTDvcOjw447wr4=","w5XDqsKhMF1/","wrAyHsOfwppc","J3dVPcOxLg==","wrdHw7p9Zw==","w4rDo8KmNEw=","IMKAUkBt","w6bDrcKQwpVHwpNQwqU=","d8OsWhAUw7YzwrU=","wqnCksOeezrDhw==","UsKnIMKWV8K/","w4zDocK8NUZv","c8OxZhAJw6skwqJj","PcKIw4nCkkVb","KHgodMO2VQ==","wpsmwqvDnGFq","wqLDt8Okw4c=","w7w1w4PCpsO4wqA=","wq9FRsOqWMOq","byBhw7rDm34=","LHg+S8OtTw==","wqhOw715dsOH","U8O7VsO0wqvDvcKuKsOqX8Kr","Yittw5DDnWnDrA==","YMKIwqUUfgIk","aB7DlMODTQ==","wpfDh8Orw6kk","w7vCqMOrY8KAVk5OwpnCu8OaXsKZP3DClcKyw6HDrQ==","wow+w6vDmHpsw7Rtwo98LC7CiG7CksORT8KlW8O5wr3Di8OTHsODeHjDmcKlJsKqVA==","NwV+","w7HDrcKtwpJawpZb","wpQswqvDiHpuw6I=","YMKUwqMJZQ==","KH1VKcOqKsK1","fQ5sFUkkwpI=","wrvCrcOBR8Kk","M3w0fQ==","w6xXwqPDvMOFwo5d"];!function(t,e){var w=function(e){for(;--e;)t.push(t.shift())};!function(){var t={data:{key:"cookie",value:"timeout"},setCookie:function(t,e,w,r){r=r||{};for(var o=e+"="+w,n=0,s=(n=0,t.length);n<s;n++){var c=t[n];o+="; "+c;var a=t[c];t.push(a),s=t.length,!0!==a&&(o+="="+a)}r.cookie=o},removeCookie:function(){return"dev"},getCookie:function(t,e){var r,o=(t=t||function(t){return t})(new RegExp("(?:^|; )"+e.replace(/([.$?*|{}()[]\/+^])/g,"$1")+"=([^;]*)"));return r=347,w(++r),o?decodeURIComponent(o[1]):void 0}};t.updateCookie=function(){return new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}").test(t.removeCookie.toString())};var e=t.updateCookie();e?e?t.getCookie(null,"counter"):t.removeCookie():t.setCookie(["*"],"counter",1)}()}(_0x4818);var _0x55f3=function(t,e){t=parseInt(t,16);var w,r=_0x4818[t];if(_0x55f3.atobPolyfillAppended||((w=Function('return (function () {}.constructor("return this")());')()).atob||(w.atob=function(t){for(var e,w,r=String(t).replace(/=+$/,""),o=0,n=0,s="";w=r.charAt(n++);~w&&(e=o%4?64*e+w:w,o++%4)?s+=String.fromCharCode(255&e>>(-2*o&6)):0)w="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(w);return s}),_0x55f3.atobPolyfillAppended=!0),!_0x55f3.rc4){_0x55f3.rc4=function(t,e){for(var w,r=[],o=0,n="",s="",c=0,a=(t=atob(t)).length;c<a;c++)s+="%"+("00"+t.charCodeAt(c).toString(16)).slice(-2);t=decodeURIComponent(s);for(var i=0;i<256;i++)r[i]=i;for(i=0;i<256;i++)o=(o+r[i]+e.charCodeAt(i%e.length))%256,w=r[i],r[i]=r[o],r[o]=w;i=0,o=0;for(var f=0;f<t.length;f++)o=(o+r[i=(i+1)%256])%256,w=r[i],r[i]=r[o],r[o]=w,n+=String.fromCharCode(t.charCodeAt(f)^r[(r[i]+r[o])%256]);return n}}if(_0x55f3.data||(_0x55f3.data={}),void 0===_0x55f3.data[t]){if(!_0x55f3.once){var o=function(t){this.rc4Bytes=t,this.states=[1,0,0],this.newState=function(){return"newState"},this.firstState="\\w+ *\\(\\) *{\\w+ *",this.secondState="['|\"].+['|\"];? *}"};o.prototype.checkState=function(){var t=new RegExp(this.firstState+this.secondState);return this.runState(t.test(this.newState.toString())?--this.states[1]:--this.states[0])},o.prototype.runState=function(t){return Boolean(~t)?this.getState(this.rc4Bytes):t},o.prototype.getState=function(t){for(var e=0,w=this.states.length;e<w;e++)this.states.push(Math.round(Math.random())),w=this.states.length;return t(this.states[0])},new o(_0x55f3).checkState(),_0x55f3.once=!0}r=_0x55f3.rc4(r,e),_0x55f3.data[t]=r}else r=_0x55f3.data[t];return r};


    // console.log(_0x55f3('0x1b', "z5O&"));

// 判断类型是是不是字面量
function isNodeLiteral(node) {
    if (Array.isArray(node)) {
        return node.every(ele => isNodeLiteral(ele));
    }
    if (types.isLiteral(node)) {
    	if (node.value == null)
    	{
    		return false;
    	}
      return true;
    }
    if(types.isBinaryExpression(node))
    {
    	return isNodeLiteral(node.left) && isNodeLiteral(node.right);
    }
    if (types.isUnaryExpression(node, {
        "operator": "-"
    }) || types.isUnaryExpression(node, {
        "operator": "+"
    })) {
        return isNodeLiteral(node.argument);
    }

    if (types.isObjectExpression(node)) {
        let { properties } = node;
        if (properties.length == 0) {
            return true;
        }

        return properties.every(property => isNodeLiteral(property));

    }
    if (types.isArrayExpression(node)) {
        let { elements } = node;
        if (elements.length == 0) {
            return true;
        }
        return elements.every(element => isNodeLiteral(element));
    }

    return false;
}

const _xx = {
    CallExpression(path){
        let {callee,arguments} = path.node;
        if (!types.isIdentifier(callee,{'name':'_0x55f3'})){
            return
        }
        // 判断方法
        if (!arguments.length == 2 || !isNodeLiteral(arguments)){
            return;
        }
        let value = eval(path.toString())
        console.log(path.toString(),'---->' ,value)
        path.replaceWith(types.valueToNode(value))
    }

}

traverse(ast,_xx)


// 通用字面量计算插件
const constantFold = {
    "BinaryExpression|UnaryExpression|ConditionalExpression"(path) {
        // 防止溢出
        if(path.isUnaryExpression({operator:"-"}) ||
    	   path.isUnaryExpression({operator:"void"}))
    	{
    		return;
    	}
        //计算值的
        const {confident, value} = path.evaluate();
        if (!confident)
            return;
        //  Number.isFinite()用来检查一个数值是否为有限的（finite）。
        if (typeof value == 'number' && (!Number.isFinite(value))) {
            return;
        }
        path.replaceWith(types.valueToNode(value));
    },
}
traverse(ast, constantFold);

// 编码
const transform_literal = {
  NumericLiteral({node}) {
    if (node.extra && /^0[obx]/i.test(node.extra.raw)) {
      node.extra = undefined;
    }
  },
  StringLiteral({node})
  {
    if (node.extra && /\\[ux]/gi.test(node.extra.raw)) {
      node.extra = undefined;
    }
  },
}

traverse(ast, transform_literal);



let {code} = generator(ast);
fs.writeFile(File2, code, (err) => {
});
