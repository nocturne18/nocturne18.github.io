/ *！
 * jQuery JavaScript庫v3.5.1
 * https://jquery.com/
 *
 *包括Sizzle.js
 * https://sizzlejs.com/
 *
 * JS基金會和其他貢獻者的版權
 *根據MIT許可發布
 * https://jquery.org/license
 *
 *日期：2020-05-04T22：49Z
 * /
（功能（全局，工廠）{

	“使用嚴格”；

	if（typeof module ===“ object” && typeof module.exports ===“ object”）{

		//對於具有適當的“窗口”的CommonJS和類似CommonJS的環境
		//存在，執行工廠並獲取jQuery。
		//對於沒有帶有“文檔”的“窗口”的環境
		//（例如Node.js），將工廠公開為module.exports。
		//這就強調了創建真實的“窗口”的需求。
		//例如var jQuery = require（“ jquery”）（window）;
		//有關更多信息，請參見票證＃14549。
		module.exports = global.document嗎？
			工廠（全球，真實）：
			函數（w）{
				如果（！w.document）{
					拋出新的錯誤（“ jQuery需要帶有文檔的窗口”）；
				}
				返廠（w）;
			};
	}其他{
		工廠（全球）；
	}

//如果尚未定義窗口，則傳遞此參數
}}（typeof window！==“ undefined”？window：this，function（window，noGlobal）{

// Edge <= 12-13 +，Firefox <= 18-45 +，IE 10-11，Safari 5.1-9 +，iOS 6-9.1
//當非嚴格代碼（例如，ASP.NET 4.5）訪問嚴格模式時引發異常
// arguments.callee.caller（trac-13335）。但是從jQuery 3.0（2016）開始，嚴格模式應該很常見
//足以將所有此類嘗試保存在try塊中。
“使用嚴格”；

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat嗎？函數（數組）{
	返回arr.flat.call（array）;
}：函數（數組）{
	返回arr.concat.apply（[]，array）;
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call（Object）;

var support = {};

var isFunction =函數isFunction（obj）{

      //支持：Chrome <= 57，Firefox <= 52
      //在某些瀏覽器中，typeof為HTML <object>元素返回“功能”
      //（即`typeof document.createElement（“ object”）===“ function”`）。
      //我們不想將* any * DOM節點歸類為一個函數。
      返回typeof obj ===“函數” && typeof obj.nodeType！==“數字”;
  };


var isWindow = function isWindow（obj）{
		return obj！= null && obj === obj.window;
	};


var document = window.document;



	var reserveddScriptAttributes = {
		類型：true，
		src：是的，
		隨機數：是的，
		noModule：正確
	};

	函數DOMEval（代碼，節點，文檔）{
		doc = doc || 文件;

		var i，val，
			腳本= doc.createElement（“腳本”）;

		script.text =代碼；
		如果（節點）{
			對於（我在preservedScriptAttributes中）{

				//支持：Firefox 64 +，Edge 18+
				//有些瀏覽器不支持腳本的“ nonce”屬性。
				//另一方面，僅使用`getAttribute`是不夠的
				//只要將`nonce`屬性重置為空字符串
				//成為瀏覽上下文連接。
				//參見https://github.com/whatwg/html/issues/2369
				//參見https://html.spec.whatwg.org/#nonce-attributes
				//添加了`node.getAttribute`檢查是為了
				//`jQuery.globalEval`，以便它可以偽造一個包含隨機數的節點
				//通過一個對象。
				val =節點[i] || node.getAttribute && node.getAttribute（i）;
				如果（val）{
					script.setAttribute（i，val）;
				}
			}
		}
		doc.head.appendChild（腳本）.parentNode.removeChild（腳本）;
	}


函數toType（obj）{
	如果（obj == null）{
		返回obj +“”;
	}

	//支持：僅Android <= 2.3（可正常運行RegExp）
	返回typeof obj ===“對象” || typeof obj ===“功能”？
		class2type [toString.call（obj）] || “對象”：
		typeof obj;
}
/ *全局符號* /
//在.eslintrc.json中定義此全局變量會產生使用全局變量的危險
//在另一個地方不受保護，只為該模塊定義全局變量似乎更安全



變種
	版本=“ 3.5.1”，

	//定義jQuery的本地副本
	jQuery = function（選擇器，上下文）{

		// jQuery對象實際上只是“增強”的初始化構造函數
		//如果調用jQuery，則需要初始化（如果不包含，則允許拋出錯誤）
		返回新的jQuery.fn.init（選擇器，上下文）;
	};

jQuery.fn = jQuery.prototype = {

	//正在使用的jQuery當前版本
	jQuery：版本，

	構造函數：jQuery，

	// jQuery對象的默認長度為0
	長度：0，

	toArray：function（）{
		返回slice.call（this）;
	}，

	//獲取匹配的元素集中的第N個元素，或
	//將整個匹配的元素集作為一個乾淨的數組
	get：function（num）{

		//返回乾淨數組中的所有元素
		如果（num == null）{
			返回slice.call（this）;
		}

		//僅返回集合中的一個元素
		返回num <0嗎？this [num + this.length]：this [num];
	}，

	//取一個元素數組並將其壓入堆棧
	//（返回新的匹配元素集）
	pushStack：function（elems）{

		//建立一個新的jQuery匹配元素集
		var ret = jQuery.merge（this.constructor（），elems）;

		//將舊對象添加到堆棧中（作為參考）
		ret.prevObject =這個;

		//返回新形成的元素集
		返回ret
	}，

	//對匹配集中的每個元素執行一個回調。
	每個：function（callback）{
		返回jQuery.each（this，callback）;
	}，

	地圖：function（callback）{
		返回this.pushStack（jQuery.map（this，function（elem，i）{
			返回callback.call（elem，i，elem）;
		}））;
	}，

	切片：function（）{
		返回this.pushStack（slice.apply（this，arguments））;
	}，

	首先：function（）{
		返回this.eq（0）;
	}，

	最後：function（）{
		返回this.eq（-1）;
	}，

	偶數：function（）{
		返回this.pushStack（jQuery.grep（this，function（_elem，i）{
			返回（i + 1）％2;
		}））;
	}，

	奇數：function（）{
		返回this.pushStack（jQuery.grep（this，function（_elem，i）{
			返回我％2;
		}））;
	}，

	eq：function（i）{
		var len = this.length，
			j = + i +（i <0？len：0）;
		返回this.pushStack（j> = 0 && j <len？[this [j]]：[]）;
	}，

	結束：function（）{
		返回this.prevObject || this.constructor（）;
	}，

	// 僅限內部使用。
	//表現得像Array的方法，而不像jQuery方法。
	推推，
	排序：arr.sort，
	接頭：arr.splice
};

jQuery.extend = jQuery.fn.extend = function（）{
	var選項，名稱，src，複製，copyIsArray，克隆，
		目標=參數[0] || {}，
		i = 1
		長度= arguments.length，
		深=假;

	//處理深度複製情況
	if（typeof target ===“ boolean”）{
		深=目標；

		//跳過布爾值和目標
		目標=參數[i] || {};
		i ++;
	}

	//處理目標為字符串或其他內容時的情況（可能在深層複製中）
	if（typeof target！==“ object” &&！isFunction（target））{
		target = {};
	}

	//如果僅傳遞一個參數，則擴展jQuery本身
	如果（i ===長度）{
		目標=這個；
		一世 - ;
	}

	對於（; i <length; i ++）{

		//只處理非null / undefined值
		if（（options = arguments [i]）！= null）{

			//擴展基礎對象
			對於（選項中的名稱）{
				複製=選項[名稱];

				//防止對象原型污染
				//防止永無止境的循環
				如果（名稱===“ __proto__” ||目標===複製）{
					繼續;
				}

				//如果要合併純對像或數組，則進行遞歸
				if（deep && copy &&（jQuery.isPlainObject（copy）||
					（copyIsArray = Array.isArray（copy））））{
					src = target [name];

					//確保源值的類型正確
					if（copyIsArray &&！Array.isArray（src））{
						clone = [];
					} else if（！copyIsArray &&！jQuery.isPlainObject（src））{
						clone = {};
					}其他{
						clone = src;
					}
					copyIsArray = false;

					//切勿移動原始對象，將其克隆
					target [name] = jQuery.extend（deep，clone，copy）;

				//不要輸入未定義的值
				} else if（複製！==未定義）{
					target [名稱] =複製；
				}
			}
		}
	}

	//返回修改後的對象
	返回目標；
};

jQuery.extend（{

	//頁面上每個jQuery副本唯一
	expando：“ jQuery” +（版本+ Math.random（））.replace（/ \ D / g，“”），

	//假設jQuery已準備就緒，沒有ready模塊
	isReady：是的，

	錯誤：function（msg）{
		拋出新的Error（msg）;
	}，

	noop：function（）{}，

	isPlainObject：function（obj）{
		var proto，Ctor；

		//檢測明顯的負面影響
		//使用toString而不是jQuery.type來捕獲宿主對象
		如果（！obj || toString.call（obj）！==“ [object Object]”）{
			返回false；
		}

		proto = getProto（obj）;

		//沒有原型的對象（例如，Object.create（null））是普通的
		如果（！proto）{
			返回true；
		}

		//帶有原型的對像是簡單的，前提是它們是由全局Object函數構造的
		Ctor = hasOwn.call（proto，“ constructor”）&& proto.constructor;
		返回typeof Ctor ===“ function” && fnToString.call（Ctor）=== ObjectFunctionString;
	}，

	isEmptyObject：function（obj）{
		var name;

		對於（obj中的名稱）{
			返回false；
		}
		返回true；
	}，

	//在提供的上下文中評估腳本；跌回全球
	//如果未指定。
	globalEval：函數（代碼，選項，文檔）{
		DOMEval（代碼，{隨機數：options && options.nonce}，doc）;
	}，

	每個：function（obj，callback）{
		var length，i = 0；

		如果（isArrayLike（obj））{
			長度= obj.length;
			對於（; i <length; i ++）{
				如果（callback.call（obj [i]，i，obj [i]）=== false）{
					打破;
				}
			}
		}其他{
			為（i在obj中）{
				如果（callback.call（obj [i]，i，obj [i]）=== false）{
					打破;
				}
			}
		}

		返回obj;
	}，

	//結果僅供內部使用
	makeArray：function（arr，results）{
		var ret =結果|| [];

		如果（arr！= null）{
			如果（isArrayLike（Object（arr）））{
				jQuery.merge（ret，
					typeof arr ===“字符串”？
					[arr]：arr
				）;
			}其他{
				push.call（ret，arr）;
			}
		}

		返回ret
	}，

	inArray：function（elem，arr，i）{
		返回arr == null嗎？-1：indexOf.call（arr，elem，i）;
	}，

	//支持：僅Android <= 4.0，僅PhantomJS 1
	// push.apply（_，arraylike）拋出古老的WebKit
	合併：功能（第一，第二）{
		var len = + second.length，
			j = 0，
			i = first.length;

		對於（; j <len; j ++）{
			first [i ++] = second [j];
		}

		first.length = i;

		先返回
	}，

	grep：function（elems，callback，invert）{
		var callbackInverse，
			匹配= []，
			我= 0，
			長度= elems.length，
			callbackExpect =！invert;

		//遍歷數組，僅保存項目
		//通過驗證函數
		對於（; i <length; i ++）{
			callbackInverse =！callback（elems [i]，i）;
			如果（callbackInverse！== callbackExpect）{
				matchs.push（elems [i]）;
			}
		}

		返回比賽；
	}，

	// arg僅供內部使用
	map：function（elems，callback，arg）{
		var長度，值，
			我= 0，
			ret = [];

		//遍歷數組，將每個項目轉換為它們的新值
		如果（isArrayLike（elems））{
			長度= elems.length;
			對於（; i <length; i ++）{
				值=回調（elems [i]，i，arg）;

				if（value！= null）{
					ret.push（value）;
				}
			}

		//瀏覽對像上的每個鍵，
		}其他{
			為（我以elems）{
				值=回調（elems [i]，i，arg）;

				if（value！= null）{
					ret.push（value）;
				}
			}
		}

		//展平任何嵌套數組
		返回flat（ret）;
	}，

	//對象的全局GUID計數器
	GUID：1

	// jQuery.support未在Core中使用，但其他項目附加了它們
	//它的屬性，因此它必須存在。
	支持：支持
}）；

if（typeof Symbol ===“ function”）{
	jQuery.fn [Symbol.iterator] = arr [Symbol.iterator];
}

//填充class2type映射
jQuery.each（“布爾型數字字符串函數數組日期RegExp對象錯誤符號” .split（“”），
函數（_i，名稱）{
	class2type [“ [object” + name +“]”] = name.toLowerCase（）;
}）；

函數isArrayLike（obj）{

	//支持：僅適用於真實的iOS 8.2（在模擬器中不可複制）
	//`in`檢查用於防止JIT錯誤（gh-2145）
	//由於誤報，此處未使用hasOwn
	//關於IE中的節點列表長度
	var length = !! obj && obj && obj.length中的“ length”，
		類型= toType（obj）;

	如果（isFunction（obj）|| isWindow（obj））{
		返回false；
	}

	返回類型===“數組” || 長度=== 0 ||
		typeof length ===“數字” &&長度> 0 &&（長度-1）in obj;
}
var Sizzle =
/ *！
 * Sizzle CSS選擇器引擎v2.3.5
 * https://sizzlejs.com/
 *
 * JS基金會和其他貢獻者的版權
 *根據MIT許可發布
 * https://js.foundation/
 *
 *日期：2020-03-14
 * /
（function（window）{
var i，
	支持，
	Expr，
	getText，
	isXML，
	標記化，
	編譯，
	選擇，
	externalmostContext，
	sortInput，
	hasDuplicate，

	//本地文檔vars
	setDocument，
	文件，
	docElem，
	documentIsHTML，
	rbuggyQSA，
	rbuggyMatches，
	火柴，
	包含

	//特定於實例的數據
	expando =“嘶嘶聲” + 1 *新的Date（），
	preferredDoc = window.document，
	dirruns = 0，
	完成= 0，
	classCache = createCache（），
	tokenCache = createCache（），
	editorCache = createCache（），
	nonnativeSelectorCache = createCache（），
	sortOrder = function（a，b）{
		如果（a === b）{
			hasDuplicate = true;
		}
		返回0;
	}，

	//實例方法
	hasOwn =（{}）.hasOwnProperty，
	arr = []，
	pop = arr.pop，
	pushNative = arr.push，
	push = arr.push，
	slice = arr.slice，

	//使用精簡的indexOf，因為它比本機快
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function（list，elem）{
		var i = 0，
			len = list.length;
		為（; i <len; i ++）{
			如果（list [i] === elem）{
				返回我
			}
		}
		返回-1;
	}，

	booleans =“已選中|已選中|異步|自動對焦|自動播放|控件|延遲|已禁用|隱藏|” +
		“ ismap | loop | multiple | open | readonly | required | scoped”，

	// 常用表達

	// http://www.w3.org/TR/css3-selectors/#whitespace
	空格=“ [\\ x20 \\ t \\ r \\ n \\ f]”，

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	標識符=“（？：\\\\ [\\ da-fA-F] {1,6}” +空格+
		“？| \\\\ [^ \\ r \\ n \\ f] | [\\ w-] | [^ \ 0-\\ x7f]）+”，

	//屬性選擇器：http://www.w3.org/TR/selectors/#attribute-selectors
	屬性=“ \\ [” +空格+“ *（” +標識符+“）（?:” +空格+

		//運算子（擷取2）
		“ *（[* ^ $ |！〜]？=）” +空格+

		//“屬性值必須是CSS標識符[捕獲5]
		//或字符串[捕獲3或捕獲4]“
		“ *（？：'（（？：\\\\。| [^ \\\\']）*）'| \”（（？：\\\\。| [^ \\\\\“] ）*）\“ |（” +標識符+“））|）”）+
		空格+“ * \\]”，

	pseudos =“ :(” +標識符+“）（？：\\（（” +

		//為了減少需要在preFilter中進行標記化的選擇器的數量，請使用以下參數：
		// 1.帶引號（捕獲3；捕獲4或捕獲5）
		“（'（（?? \\\\。| [^ \\\\']）*）'| \”（（？：\\\\。| [^ \\\\“]）*） \“）|” +

		// 2.簡單（捕獲6）
		“（（（？：\\\\。| [^ \\\\（）[\\]] |” +屬性+“）*）|” +

		// 3.其他（捕獲2）
		“。*” +
		“）\\）|）”，

	//前導和非轉義的尾隨空白，捕穫後者之前的一些非空白字符
	rwhitespace = new RegExp（空格+“ +”，“ g”），
	rtrim = new RegExp（“ ^” +空格+“ + |（（？：^ | [^ \\\\]]（？：\\\\。）*）” +
		空格+“ + $”，“ g”），

	rcomma = new RegExp（“ ^” +空格+“ *，” +空格+“ *”），
	rcombinators =新的RegExp（“ ^” +空格+“ *（[> +〜] |” +空格+“）” +空格+
		“ *”），
	rdescend =新的RegExp（空格+“ |>”），

	rpseudo =新的RegExp（pseudos），
	ridentifier =新的RegExp（“ ^” +標識符+“ $”），

	matchExpr = {
		“ ID”：新的RegExp（“ ^＃（” +標識符+“）”），
		“ CLASS”：新的RegExp（“ ^ \\。（” +標識符+“）”），
		“ TAG”：新的RegExp（“ ^（” +標識符+“ | [*]）”），
		“ ATTR”：新的RegExp（“ ^” + attribute），
		“ PSEUDO”：新的RegExp（“ ^” + pseudos），
		“ CHILD”：新的RegExp（“ ^ :( only | first | last | nth | nth-last）-（child | of-type）（？：\\（” +
			空格+“ *（even | odd |（（[[+-] |）（\\ d *）n |）” +空格+“ *（？：（[+-] |）” +
			空格+“ *（\\ d +）|））” +空格+“ * \\）|）”，“ i”），
		“ bool”：新的RegExp（“ ^（?:” +布爾值+“）$”，“ i”），

		//用於實現.is（）的庫
		//我們將其用於`select`中的POS匹配
		“ needsContext”：新的RegExp（“ ^” +空格+
			“ * [> +〜] |：:( even | odd | eq | gt | lt | nth | first | last）（？：\\（” +空格+
			“ *（（??-\\ d）？\\ d *）” +空格+“ * \\）|）（？= [^-] | $）”，“ i”）
	}，

	rhtml = / HTML $ / i，
	rinputs = / ^（?: input | select | textarea | button）$ / i，
	rheader = / ^ h \ d $ / i，

	rnative = / ^ [^ {] + \ {\ s * \ [native \ w /，

	//易於解析/可檢索的ID或TAG或CLASS選擇器
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/，

	rsibling = / [+〜] /，

	// CSS轉義
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape =新的RegExp（“ \\\\ [\\ da-fA-F] {1,6}” +空格+“？| \\\\（[^ \\ r \\ n \\ f]）” ， “G” ），
	funescape = function（escape，nonHex）{
		var high =“ 0x” + escape.slice（1）-0x10000;

		返回nonHex嗎？

			//從非十六進制轉義序列中去除反斜杠前綴
			非十六進制：

			//將十六進制轉義序列替換為編碼的Unicode代碼點
			//支持：IE <= 11 +
			//對於基本多語言平面（BMP）以外的值，請手動構造一個
			//代理對
			高<0？
				String.fromCharCode（high + 0x10000）：
				String.fromCharCode（high >> 10 | 0xD800，high＆0x3FF | 0xDC00）;
	}，

	// CSS字符串/標識符序列化
	// https://drafts.c​​sswg.org/cssom/#common-serializing-idioms
	rcssescape = /（[\ 0- \ x1f \ x7f] | ^-？\ d）| ^-$ | [^ \ 0- \ x1f \ x7f- \ uFFFF \ w-] / g，
	fcssescape = function（ch，asCodePoint）{
		如果（asCodePoint）{

			// U + 0000 NULL變為U + FFFD替換字符
			如果（ch ===“ \ 0”）{
				返回“ \ uFFFD”；
			}

			//控製字符和（取決於位置）數字作為代碼點轉義
			返回ch.slice（0，-1）+“ \\” +
				ch.charCodeAt（ch.length-1）.toString（16）+“”;
		}

		//其他可能特殊的ASCII字符被反斜杠轉義
		返回“ \\” + ch;
	}，

	//用於iframe
	//參見setDocument（）
	//刪除函數包裝會導致“權限被拒絕”
	// IE中的錯誤
	unloadHandler = function（）{
		setDocument（）;
	}，

	inDisabledFieldset = addCombinator（
		函數（elem）{
			返回elem.disabled === true && elem.nodeName.toLowerCase（）===“ fieldset”;
		}，
		{dir：“ parentNode”，下一個：“ legend”}
	）;

//優化push.apply（_，NodeList）
嘗試{
	push.apply（
		（arr = slice.call（preferredDoc.childNodes）），
		preferredDoc.childNodes
	）;

	//支持：Android <4.0
	//檢測靜默失敗的push.apply
	// eslint-disable-next-line no-unused-expressions
	arr [preferredDoc.childNodes.length] .nodeType;
}抓住（e）{
	推= {適用：arr.length？

		//盡可能利用切片
		函數（目標，els）{
			pushNative.apply（target，slice.call（els））;
		}：

		//支持：IE <9
		//否則直接附加
		函數（目標，els）{
			var j = target.length，
				i = 0;

			//不信任NodeList.length
			while（（target [j ++] = els [i ++]））{}
			target.length = j-1;
		}
	};
}

函數Sizzle（選擇器，上下文，結果，種子）{
	var m，i，elem，nid，match，groups，newSelector，
		newContext =上下文&& context.ownerDocument，

		// nodeType默認為9，因為上下文默認為document
		nodeType =上下文？context.nodeType：9;

	結果=結果|| [];

	//使用無效的選擇器或上下文從調用中提早返回
	if（typeof選擇器！==“ string” ||！selector ||
		nodeType！== 1 && nodeType！== 9 && nodeType！== 11）{

		返回結果；
	}

	//嘗試在HTML文檔中使用快捷方式查找操作（而不是過濾器）
	如果（！seed）{
		setDocument（context）;
		上下文=上下文|| 文件;

		如果（documentIsHTML）{

			//如果選擇器足夠簡單，請嘗試使用“ get * By *” DOM方法
			//（除了DocumentFragment上下文，該方法不存在）
			if（nodeType！== 11 &&（match = rquickExpr.exec（選擇器）））{

				// ID選擇器
				如果（（m = match [1]））{

					//文檔上下文
					如果（nodeType === 9）{
						如果（（elem = context.getElementById（m）））{

							//支持：IE，Opera，Webkit
							// TODO：確定版本
							// getElementById可以按名稱而不是ID匹配元素
							如果（elem.id === m）{
								results.push（elem）;
								返回結果；
							}
						}其他{
							返回結果；
						}

					//元素上下文
					}其他{

						//支持：IE，Opera，Webkit
						// TODO：確定版本
						// getElementById可以按名稱而不是ID匹配元素
						如果（newContext &&（elem = newContext.getElementById（m））&&
							contains（context，elem）&&
							elem.id === m）{

							results.push（elem）;
							返回結果；
						}
					}

				//類型選擇器
				} else if（match [2]）{
					push.apply（results，context.getElementsByTagName（selector））;
					返回結果；

				//類選擇器
				} if（（（m = match [3]）&& support.getElementsByClassName &&
					context.getElementsByClassName）{

					push.apply（results，context.getElementsByClassName（m））;
					返回結果；
				}
			}

			//利用querySelectorAll
			如果（support.qsa &&
				！nonnativeSelectorCache [選擇器+“”] &&
				（！rbuggyQSA ||！rbuggyQSA.test（選擇器））&&

				//支持：僅IE 8
				//排除對像元素
				（nodeType！== 1 || context.nodeName.toLowerCase（）！==“ object”））{

				newSelector =選擇器;
				newContext =上下文；

				// qSA在評估子級或子級時會考慮作用域外的元素
				//後代組合器，這不是我們想要的。
				//在這種情況下，我們會通過在
				//帶有ID選擇器的列表，該選擇器引用了範圍上下文。
				//使用前導組合器時也必須使用該技術
				//，因為這樣的選擇器無法被querySelectorAll識別。
				//感謝安德魯·杜邦（Andrew Dupont）的這項技術。
				如果（nodeType === 1 &&
					（rdescend.test（選擇器）|| rcombinators.test（選擇器）））{

					//展開同級選擇器的上下文
					newContext = rsibling.test（選擇器）&& testContext（context.parentNode）||
						上下文

					//如果瀏覽器可以使用：scope代替ID hack
					//支持＆如果我們不更改上下文。
					如果（newContext！==上下文||！support.scope）{

						//捕獲上下文ID，必要時先設置
						如果（（nid = context.getAttribute（“ id”）））{
							nid = nid.replace（rcssescape，fcssescape）;
						}其他{
							context.setAttribute（“ id”，（nid = expando））;
						}
					}

					//為列表中的每個選擇器添加前綴
					組= tokenize（選擇器）;
					i = groups.length;
					當我 -  ） {
						groups [i] =（nid？“＃” + nid：“：scope”）+“” +
							toSelector（groups [i]）;
					}
					newSelector = groups.join（“，”）;
				}

				嘗試{
					push.apply（結果，
						newContext.querySelectorAll（newSelector）
					）;
					返回結果；
				} catch（qsaError）{
					nonnativeSelectorCache（選擇器，true）;
				}最後{
					如果（nid === expando）{
						context.removeAttribute（“ id”）;
					}
				}
			}
		}
	}

	// 所有其他人
	返回select（selector.replace（rtrim，“ $ 1”），上下文，結果，種子）;
}

/ **
 *創建有限大小的鍵值緩存
 * @returns {function（string，object）}在將Object數據存儲在自身上之後，返回Object數據
 *屬性名稱（帶後綴的字符串）和（如果緩存大於Expr.cacheLength）
 *刪除最早的條目
 * /
函數createCache（）{
	var keys = [];

	函數緩存（鍵，值）{

		//使用（key +“”）避免與本機原型屬性發生衝突（請參見問題＃157）
		if（keys.push（key +“”）> Expr.cacheLength）{

			//僅保留最新的條目
			刪除緩存[keys.shift（）];
		}
		return（cache [key +“”] = value）;
	}
	返回緩存；
}

/ **
 *標記Sizzle特殊使用的功能
 * @param {Function} fn標記的功能
 * /
函數markFunction（fn）{
	fn [expando] = true;
	返回fn;
}

/ **
 *支持使用元素進行測試
 * @param {Function} fn傳遞創建的元素並返回布爾結果
 * /
函數assert（fn）{
	var el = document.createElement（“ fieldset”）;

	嘗試{
		返回!! fn（el）;
	}抓住（e）{
		返回false；
	}最後{

		//默認情況下從其父級刪除
		如果（el.parentNode）{
			el.parentNode.removeChild（el）;
		}

		//在IE中釋放內存
		el = null;
	}
}

/ **
 *為所有指定的屬性添加相同的處理程序
 * @param {String} attrs管道分隔的屬性列表
 * @param {Function}處理程序將應用的方法
 * /
函數addHandle（attrs，handler）{
	var arr = attrs.split（“ |”），
		i =長度

	當我 -  ） {
		Expr.attrHandle [arr [i]] =處理程序；
	}
}

/ **
 *檢查兩個兄弟姐妹的文件順序
 * @param {Element}一個
 * @param {Element} b
 * @returns {Number}如果a在b之前，返回小於0，如果a在b之後，則返回0
 * /
函數siblingCheck（a，b）{
	var cur = b && a，
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex-b.sourceIndex;

	//如果兩個節點都可用，請使用IE sourceIndex
	如果（diff）{
		返回差異
	}

	//檢查b是否跟隨a
	如果（cur）{
		while（（cur = cur.nextSibling））{
			如果（cur === b）{
				返回-1;
			}
		}
	}

	返回一個？1：-1；
}

/ **
 *返回用於輸入類型的偽函數
 * @param {String}類型
 * /
函數createInputPseudo（type）{
	返回函數（elem）{
		var name = elem.nodeName.toLowerCase（）;
		返回名稱===“輸入” && elem.type ===類型；
	};
}

/ **
 *返回用於按鈕偽函數的函數
 * @param {String}類型
 * /
函數createButtonPseudo（type）{
	返回函數（elem）{
		var name = elem.nodeName.toLowerCase（）;
		return（name ===“ input” || name ===“ button”）&& elem.type ===類型；
	};
}

/ **
 *返回用於：enabled /：disabled的偽函數
 * @param {Boolean} disable對：disabled為true；對於：enabled為false
 * /
函數createDisabledPseudo（disable）{

	//已知：disabled誤報：fieldset [disabled]>圖例：nth-​​of-type（n + 2）：can-disable
	返回函數（elem）{

		//只有某些元素可以匹配：enabled或：disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if（elem中的“ form”）{

			//檢查相關的非禁用元素上的繼承的禁用性：
			// *在禁用的字段集中列出了與表單相關的元素
			// https://html.spec.whatwg.org/multipage/forms.html#category-listed
			// https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// *禁用的optgroup中的選項元素
			// https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			//所有此類元素都具有“ form”屬性。
			如果（elem.parentNode && elem.disabled === false）{

				//如果存在，則選項元素將遵循父選項組
				if（elem中的“ label”）{
					if（elem.parentNode中的“ label”）{
						返回elem.parentNode.disabled ===禁用;
					}其他{
						返回elem.disabled ===禁用;
					}
				}

				//支持：IE 6-11
				//使用isDisabled快捷方式屬性檢查禁用的字段集祖先
				返回elem.isDisabled ===禁用||

					//如果沒有isDisabled，請手動檢查
					/ * jshint -W018 * /
					elem.isDisabled！==！disabled &&
					inDisabledFieldset（elem）===禁用;
			}

			返回elem.disabled ===禁用;

		//在信任disabled屬性之前，嘗試清除無法禁用的元素。
		//一些受害者陷入了我們的網絡（標籤，圖例，菜單，曲目），但不應
		//甚至存在於它們上，更不用說具有布爾值了。
		} else if（elem中的“ label”）{
			返回elem.disabled ===禁用;
		}

		//其餘元素既不是：enabled也不是：disabled
		返回false；
	};
}

/ **
 *返回要在偽代碼中用於位置的函數
 * @param {功能} fn
 * /
函數createPositionalPseudo（fn）{
	返回markFunction（function（arguments）{
		參數= +參數;
		return markFunction（function（seed，matches）{
			var j，
				matchIndexes = fn（[]，seed.length，參數），
				i = matchIndexes.length;

			//匹配在指定索引處找到的元素
			當我 -  ） {
				if（seed [（j = matchIndexes [i]）]）{
					seed [j] =！（matches [j] = seed [j]）;
				}
			}
		}）；
	}）；
}

/ **
 *作為Sizzle上下文檢查節點的有效性
 * @param {Element | Object =}上下文
 * @returns {Element | Object | Boolean}輸入節點（如果可接受），否則為假值
 * /
函數testContext（context）{
	返回上下文&& typeof context.getElementsByTagName！==“未定義” &&上下文；
}

//為了方便起見公開支持變量
support = Sizzle.support = {};

/ **
 *檢測XML節點
 * @param {Element | Object} elem元素或文檔
 * @returns {Boolean}真，如果elem是非HTML XML節點
 * /
isXML = Sizzle.isXML = function（elem）{
	var名稱空間= elem.namespaceURI，
		docElem =（elem.ownerDocument || elem）.documentElement;

	//支持：IE <= 8
	//在documentElement尚不存在時（例如在加載iframe的內部）假定HTML
	// https://bugs.jquery.com/ticket/4833
	返回！rhtml.test（名稱空間|| docElem && docElem.nodeName ||“ HTML”）;
};

/ **
 *根據當前文檔設置一次與文檔相關的變量
 * @param {Element | Object} [doc]用於設置文檔的元素或文檔對象
 * @returns {Object}返回當前文檔
 * /
setDocument = Sizzle.setDocument = function（node）{
	var hasCompare，subWindow，
		doc =節點？node.ownerDocument || 節點：preferredDoc;

	//如果文檔無效或已被選擇，則提早返回
	//支持：IE 11 +，Edge 17-18 +
	//嚴格比較時，IE / Edge有時會引發“權限被拒絕”錯誤
	//兩個文件；淺層比較工作。
	// eslint-disable-next-line eqeqeq
	if（doc == document || doc.nodeType！== 9 ||！doc.documentElement）{
		退還文件；
	}

	//更新全局變量
	document = doc;
	docElem = document.documentElement;
	documentIsHTML =！isXML（document）;

	//支持：IE 9-11 +，Edge 12-18 +
	//卸載後訪問iframe文檔會引發“權限被拒絕”錯誤（jQuery＃13936）
	//支持：IE 11 +，Edge 17-18 +
	//嚴格比較時，IE / Edge有時會引發“權限被拒絕”錯誤
	//兩個文件；淺層比較工作。
	// eslint-disable-next-line eqeqeq
	如果（preferredDoc！=文檔&&
		（subWindow = document.defaultView）&& subWindow.top！== subWindow）{

		//支持：IE 11，Edge
		如果（subWindow.addEventListener）{
			subWindow.addEventListener（“ unload”，unloadHandler，false）;

		//支持：僅IE 9-10
		} else if（subWindow.attachEvent）{
			subWindow.attachEvent（“ onunload”，unloadHandler）;
		}
	}

	//支持：IE 8-11+，Edge 12-18+，僅Chrome <= 16-25，僅Firefox <= 3.6-31，
	//僅Safari 4-5，Opera <= 11.6-僅12.x
	// IE / Edge和較舊的瀏覽器不支持：scope偽類。
	//支持：僅Safari 6.0
	// Safari 6.0支持：scope，但這是：root的別名。
	support.scope = assert（function（el）{
		docElem.appendChild（el）.appendChild（document.createElement（“ div”））;
		返回typeof el.querySelectorAll！==“未定義” &&
			！el.querySelectorAll（“：scope fieldset div”）.length;
	}）；

	/ *屬性
	-------------------------------------------------- -------------------- * /

	//支持：IE <8
	//驗證getAttribute確實返回屬性而不是屬性
	//（IE8布爾值除外）
	support.attributes = assert（function（el）{
		el.className =“ i”;
		return！el.getAttribute（“ className”）;
	}）；

	/ * getElement（s）依*
	-------------------------------------------------- -------------------- * /

	//檢查getElementsByTagName（“ *”）是否僅返回元素
	support.getElementsByTagName = assert（function（el）{
		el.appendChild（document.createComment（“”））;
		返回！el.getElementsByTagName（“ *”）.length;
	}）；

	//支持：IE <9
	support.getElementsByClassName = rnative.test（document.getElementsByClassName）;

	//支持：IE <10
	//檢查getElementById是否按名稱返回元素
	//損壞的getElementById方法無法獲取以編程方式設置的名稱，
	//因此請使用環形交叉路口getElementsByName測試
	support.getById = assert（function（el）{
		docElem.appendChild（el）.id = expando;
		返回！document.getElementsByName || ！document.getElementsByName（expando）.length;
	}）；

	// ID過濾並查找
	如果（support.getById）{
		Expr.filter [“ ID”] = function（id）{
			var attrId = id.replace（runescape，funescape）;
			返回函數（elem）{
				return elem.getAttribute（“ id”）=== attrId;
			};
		};
		Expr.find [“ ID”] = function（id，context）{
			如果（typeof context.getElementById！==“未定義” && documentIsHTML）{
				var elem = context.getElementById（id）;
				返回元素？[elem]：[];
			}
		};
	}其他{
		Expr.filter [“ ID”] = function（id）{
			var attrId = id.replace（runescape，funescape）;
			返回函數（elem）{
				var node = typeof elem.getAttributeNode！==“未定義” &&
					elem.getAttributeNode（“ id”）;
				返回節點&& node.value === attrId;
			};
		};

		//支持：僅IE 6-7
		// getElementById作為查找快捷方式不可靠
		Expr.find [“ ID”] = function（id，context）{
			如果（typeof context.getElementById！==“未定義” && documentIsHTML）{
				var node，i，elems，
					elem = context.getElementById（id）;

				如果（elem）{

					//驗證id屬性
					node = elem.getAttributeNode（“ id”）;
					如果（node && node.value === id）{
						return [elem];
					}

					//退回到getElementsByName
					elems = context.getElementsByName（id）;
					i = 0;
					while（（（elem = elems [i ++]）））{
						node = elem.getAttributeNode（“ id”）;
						如果（node && node.value === id）{
							return [elem];
						}
					}
				}

				返回[];
			}
		};
	}

	// 標籤
	Expr.find [“ TAG”] = support.getElementsByTagName嗎？
		函數（標籤，上下文）{
			如果（typeof context.getElementsByTagName！==“未定義”）{
				返回context.getElementsByTagName（tag）;

			// DocumentFragment節點沒有gEBTN
			} else if（support.qsa）{
				返回context.querySelectorAll（tag）;
			}
		}：

		函數（標籤，上下文）{
			var elem，
				tmp = []，
				我= 0，

				//巧合的是，一個（破碎的）gEBTN也出現在DocumentFragment節點上
				結果= context.getElementsByTagName（tag）;

			//過濾掉可能的評論
			如果（標籤===“ *”）{
				while（（elem = results [i ++]））{
					如果（elem.nodeType === 1）{
						tmp.push（elem）;
					}
				}

				返回tmp;
			}
			返回結果；
		};

	//類
	Expr.find [“ CLASS”] = support.getElementsByClassName && function（className，context）{
		如果（typeof context.getElementsByClassName！==“ undefined” && documentIsHTML）{
			返回context.getElementsByClassName（className）;
		}
	};

	/ * QSA / matchesSelector
	-------------------------------------------------- -------------------- * /

	// QSA和matchesSelector支持

	//當為true時，matchesSelector（：active）報告為false（IE9 / Opera 11.5）
	rbuggyMatches = [];

	// qSa（：focus）為true時報告false（Chrome 21）
	//由於IE8 / 9中的錯誤引發了錯誤，因此我們允許
	//只要在iframe上訪問`document.activeElement`
	//因此，我們允許：focus始終通過QSA以避免IE錯誤
	//參見https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	如果（（support.qsa = rnative.test（document.querySelectorAll）））{

		//構建QSA正則表達式
		//迭戈·佩里尼采用的正則表達式策略
		斷言（函數（el）{

			var輸入;

			//故意將選擇設置為空字符串
			//這是為了測試IE的處理方式
			//設置布爾內容屬性，
			//因為它的存在應該足夠
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild（el）.innerHTML =“ <a id='" + expando + "'> </a>” +
				“ <選擇ID ='” + expando +“-\ r \\'msallowcapture =”>“ +
				“ <option selected =”“> </ option> </ select>”;

			//支持：IE8，Opera 11-12.16
			//當空字符串後接^ =或$ =或* =時，不應選擇任何內容
			//測試屬性在Opera中必須是未知的，但對於WinRT是“安全”的
			// https://msdn.microsoft.com/zh-CN/library/ie/hh465388.aspx#attribute_section
			if（el.querySelectorAll（“ [msallowcapture ^ ='']”）.length）{
				rbuggyQSA.push（“ [* ^ $] =” +空格+“ *（?:''| \” \“）”）;
			}

			//支持：IE8
			//布爾屬性和“值”未正確處理
			if（！el.querySelectorAll（“ [selected]”）.length）{
				rbuggyQSA.push（“ \\ [” +空格+“ *（?: value |” +布爾值+“）”）；
			}

			//支持：Chrome <29，Android <4.4，Safari <7.0 +，iOS <7.0 +，PhantomJS <1.9.8+
			if（！el.querySelectorAll（“ [id〜=” + expando +“-]”）.length）{
				rbuggyQSA.push（“〜=”）;
			}

			//支持：IE 11 +，Edge 15-18 +
			//在某些情況下，IE 11 / Edge無法在“ [name ='']”查詢中找到元素。
			//在選擇生效之前向文檔添加一個臨時屬性
			//解決問題。
			//有趣的是，IE 10及更低版本似乎沒有問題。
			輸入= document.createElement（“輸入”）;
			input.setAttribute（“ name”，“”）;
			el.appendChild（input）;
			如果（！el.querySelectorAll（“ [name =”]“”）。length）{
				rbuggyQSA.push（“ \\ [” +空格+“ * name” +空格+“ * =” +
					空格+“ *（?:” | \“ \”）“）;
			}

			// Webkit / Opera-：checked應該返回選擇的選項元素
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8在這裡拋出錯誤，以後將不會看到測試
			如果（！el.querySelectorAll（“：checked”）.length）{
				rbuggyQSA.push（“：checked”）;
			}

			//支持：Safari 8 +，iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			//頁內“ selector＃id兄弟組合選擇器”失敗
			if（！el.querySelectorAll（“ a＃” + expando +“ + *”）.length）{
				rbuggyQSA.push（“。＃。+ [+〜]”）;
			}

			//支持：Firefox <= 3.6-僅5
			//舊版Firefox不會拋出錯誤轉義的標識符。
			el.querySelectorAll（“ \\\ f”）;
			rbuggyQSA.push（“ [\\ r \\ n \\ f]”）;
		}）；

		斷言（函數（el）{
			el.innerHTML =“ <a href='' disabled='disabled'> </a>” +
				“ <選擇已禁用='已禁用'> <選項/> </選擇>”;

			//支持：Windows 8本機應用程序
			//在.innerHTML分配期間，類型和名稱屬性受到限制
			var input = document.createElement（“ input”）;
			input.setAttribute（“ type”，“ hidden”）;
			el.appendChild（input）.setAttribute（“ name”，“ D”）;

			//支持：IE8
			//強制對名稱屬性區分大小寫
			如果（el.querySelectorAll（“ [name = d]”）.length）{
				rbuggyQSA.push（“ name” +空格+“ * [* ^ $ |！〜]？=”）;
			}

			// FF 3.5-：enabled /：disabled和hidden元素（隱藏的元素仍處於啟用狀態）
			// IE8在這裡拋出錯誤，以後將不會看到測試
			if（el.querySelectorAll（“：enabled”）.length！== 2）{
				rbuggyQSA.push（“：enabled”，“：disabled”）;
			}

			//支持：IE9-11 +
			// IE的：disabled選擇器不會選擇禁用字段集的子級
			docElem.appendChild（el）.disabled = true;
			if（el.querySelectorAll（“：disabled”）.length！== 2）{
				rbuggyQSA.push（“：enabled”，“：disabled”）;
			}

			//支持：僅Opera 10-11
			// Opera 10-11不會拋出逗號後的無效偽
			el.querySelectorAll（“ * ,: x”）;
			rbuggyQSA.push（“，。*：”）;
		}）；
	}

	如果（（support.matchesSelector = rnative.test（（匹配= docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector））））{

		斷言（函數（el）{

			//檢查是否可以進行matchSelector
			//在斷開連接的節點上（IE 9）
			support.disconnectedMatch = matchs.call（el，“ *”）;

			//這應該失敗，並帶有異常
			// Gecko沒有錯誤，而是返回false
			matchs.call（el，“ [s！='']：x”）;
			rbuggyMatches.push（“！=”，偽類）;
		}）；
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp（rbuggyQSA.join（“ |”））;
	rbuggyMatches = rbuggyMatches.length && new RegExp（rbuggyMatches.join（“ |”））;

	/ *包含
	-------------------------------------------------- -------------------- * /
	hasCompare = rnative.test（docElem.compareDocumentPosition）;

	//元素包含另一個
	//有目的地自我排斥
	//像這樣，元素不包含自身
	包含= hasCompare || rnative.test（docElem.contains）嗎？
		函數（a，b）{
			var adown = a.nodeType === 9嗎？a.documentElement：a，
				bup = b && b.parentNode;
			返回一個=== bup || !!（bup && bup.nodeType === 1 &&（
				adown。包含？
					adown.contains（bup）：
					a.compareDocumentPosition && a.compareDocumentPosition（bup）＆16
			））;
		}：
		函數（a，b）{
			如果（b）{
				而（（b = b.parentNode））{
					如果（b === a）{
						返回true；
					}
				}
			}
			返回false；
		};

	/ *排序
	-------------------------------------------------- -------------------- * /

	//文檔順序排序
	sortOrder = hasCompare嗎？
	函數（a，b）{

		//標記為刪除重複項
		如果（a === b）{
			hasDuplicate = true;
			返回0;
		}

		//如果只有一個輸入具有compareDocumentPosition，則對方法是否存在進行排序
		var compare =！a.compareDocumentPosition-！b.compareDocumentPosition;
		如果（比較）{
			返回比較
		}

		//如果兩個輸入都屬於同一文檔，則計算位置
		//支持：IE 11 +，Edge 17-18 +
		//嚴格比較時，IE / Edge有時會引發“權限被拒絕”錯誤
		//兩個文件；淺層比較工作。
		// eslint-disable-next-line eqeqeq
		比較=（a.ownerDocument || a）==（b.ownerDocument || b）嗎？
			a.compareDocumentPosition（b）：

			//否則我們知道它們已斷開連接
			1;

		//斷開節點
		如果（比較＆1 ||
			（！support.sortDetached && b.compareDocumentPosition（a）===比較））{

			//選擇與我們的首選文檔相關的第一個元素
			//支持：IE 11 +，Edge 17-18 +
			//嚴格比較時，IE / Edge有時會引發“權限被拒絕”錯誤
			//兩個文件；淺層比較工作。
			// eslint-disable-next-line eqeqeq
			if（a == document || a.ownerDocument == preferredDoc &&
				contains（preferredDoc，a））{
				返回-1;
			}

			//支持：IE 11 +，Edge 17-18 +
			//嚴格比較時，IE / Edge有時會引發“權限被拒絕”錯誤
			//兩個文件；淺層比較工作。
			// eslint-disable-next-line eqeqeq
			如果（b ==文檔|| b.ownerDocument == preferredDoc &&
				contains（preferredDoc，b））{
				返回1;
			}

			//保持原始順序
			返回sortInput？
				（indexOf（sortInput，a）-indexOf（sortInput，b））：
				0;
		}

		返回比較＆4？-1：1;
	}：
	函數（a，b）{

		//如果節點相同則提早退出
		如果（a === b）{
			hasDuplicate = true;
			返回0;
		}

		var cur，
			我= 0，
			aup = a.parentNode，
			bup = b.parentNode，
			ap = [a]，
			bp = [b];

		//無父節點是文檔或已斷開連接
		如果（！aup ||！bup）{

			//支持：IE 11 +，Edge 17-18 +
			//嚴格比較時，IE / Edge有時會引發“權限被拒絕”錯誤
			//兩個文件；淺層比較工作。
			/ *禁用eseqt eqeqeq * /
			返回==文檔？-1：
				b ==文件？1：
				/ *啟用eslint啟用eqeqeq * /
				奧普？-1：
				bup？1：
				sortInput？
				（indexOf（sortInput，a）-indexOf（sortInput，b））：
				0;

		//如果節點是同級節點，我們可以進行快速檢查
		} else if（aup === bup）{
			返回siblingCheck（a，b）;
		}

		//否則，我們需要完整的祖先列表進行比較
		cur = a;
		while（（cur = cur.parentNode））{
			ap.unshift（cur）;
		}
		cur = b;
		while（（cur = cur.parentNode））{
			bp.unshift（cur）;
		}

		//從樹上走下來尋找差異
		而（ap [i] === bp [i]）{
			i ++;
		}

		還我嗎？

			//做同級檢查節點是否有共同祖先
			siblingCheck（ap [i]，bp [i]）：

			//否則我們文檔中的節點將首先排序
			//支持：IE 11 +，Edge 17-18 +
			//嚴格比較時，IE / Edge有時會引發“權限被拒絕”錯誤
			//兩個文件；淺層比較工作。
			/ *禁用eseqt eqeqeq * /
			ap [i] == preferredDoc嗎？-1：
			bp [i] == preferredDoc嗎？1：
			/ *啟用eslint啟用eqeqeq * /
			0;
	};

	退還文件；
};

Sizzle.matches = function（expr，elements）{
	返回Sizzle（expr，null，null，elements）;
};

Sizzle.matchesSelector = function（elem，expr）{
	setDocument（elem）;

	如果（support.matchesSelector && documentIsHTML &&
		！nonnativeSelectorCache [expr +“”] &&
		（！rbuggyMatches ||！rbuggyMatches.test（expr））&&
		（！rbuggyQSA ||！rbuggyQSA.test（expr）））{

		嘗試{
			var ret = matchs.call（elem，expr）;

			// IE 9的matchsSelector在斷開連接的節點上返回false
			if（ret || support.disconnectedMatch ||

				//同樣，斷開連接的節點也被稱為在文檔中
				// IE 9中的片段
				elem.document && elem.document.nodeType！== 11）{
				返回ret
			}
		}抓住（e）{
			nonnativeSelectorCache（expr，true）;
		}
	}

	返回Sizzle（expr，document，null，[elem]）.length> 0;
};

Sizzle.contains = function（context，elem）{

	//根據需要設置文檔變量
	//支持：IE 11 +，Edge 17-18 +
	//嚴格比較時，IE / Edge有時會引發“權限被拒絕”錯誤
	//兩個文件；淺層比較工作。
	// eslint-disable-next-line eqeqeq
	如果（（context.ownerDocument || context）！= document）{
		setDocument（context）;
	}
	返回contains（context，elem）;
};

Sizzle.attr = function（elem，name）{

	//根據需要設置文檔變量
	//支持：IE 11 +，Edge 17-18 +
	//嚴格比較時，IE / Edge有時會引發“權限被拒絕”錯誤
	//兩個文件；淺層比較工作。
	// eslint-disable-next-line eqeqeq
	if（（（elem.ownerDocument || elem）！= document）{
		setDocument（elem）;
	}

	var fn = Expr.attrHandle [name.toLowerCase（）]，

		//不要被Object.prototype屬性所迷惑（jQuery＃13807）
		val = fn && hasOwn.call（Expr.attrHandle，name.toLowerCase（））嗎？
			fn（elem，name，！documentIsHTML）：
			未定義

	返回val！==未定義？
		值：
		support.attributes || ！documentIsHTML嗎？
			elem.getAttribute（name）：
			（val = elem.getAttributeNode（name））&& val.specified？
				值：
				空值;
};

Sizzle.escape = function（sel）{
	return（sel +“”）.replace（rcssescape，fcssescape）;
};

Sizzle.error = function（msg）{
	拋出新的Error（“語法錯誤，無法識別的表達式：” + msg）;
};

/ **
 *文檔分類和刪除重複項
 * @param {ArrayLike}結果
 * /
Sizzle.uniqueSort = function（results）{
	var elem，
		重複項= []，
		j = 0，
		i = 0;

	//除非我們*知道*我們可以檢測到重複項，否則假設它們存在
	hasDuplicate =！support.detectDuplicates;
	sortInput =！support.sortStable && results.slice（0）;
	results.sort（sortOrder）;

	如果（hasDuplicate）{
		while（（elem = results [i ++]））{
			如果（elem === results [i]）{
				j = repeats.push（i）;
			}
		}
		而（j--）{
			result.splice（重複項[j]，1）;
		}
	}

	//排序後清除輸入以釋放對象
	//參見https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	返回結果；
};

/ **
 *實用程序功能，用於檢索DOM節點數組的文本值
 * @param {Array | Element}元素
 * /
getText = Sizzle.getText = function（elem）{
	var節點，
		ret =“”，
		我= 0，
		nodeType = elem.nodeType;

	如果（！nodeType）{

		//如果沒有nodeType，則應該是一個數組
		while（（（node = elem [i ++]]））{

			//不要遍歷註釋節點
			ret + = getText（node）;
		}
	} else if（nodeType === 1 || nodeType === 9 || nodeType === 11）{

		//對元素使用textContent
		//刪除了innerText用法以保持新行的一致性（jQuery＃11153）
		如果（typeof elem.textContent ===“ string”）{
			返回elem.textContent;
		}其他{

			//遍歷其子級
			為（elem = elem.firstChild; elem; elem = elem.nextSibling）{
				ret + = getText（elem）;
			}
		}
	} else if（nodeType === 3 || nodeType === 4）{
		返回elem.nodeValue;
	}

	//不包含註釋或處理指令節點

	返回ret
};

Expr = Sizzle.selectors = {

	//可由用戶調整
	cacheLength：50，

	createPseudo：markFunction，

	匹配：matchExpr，

	attrHandle：{}，

	找： {}，

	親戚：{
		“>”：{dir：“ parentNode”，第一個：true}，
		“”：{dir：“ parentNode”}，
		“ +”：{dir：“ previousSibling”，第一個：true}，
		“〜”：{dir：“ previousSibling”}
	}，

	preFilter：{
		“ ATTR”：function（match）{
			match [1] = match [1] .replace（runescape，funescape）;

			//將給定值移動到match [3]不論是帶引號還是不帶引號
			match [3] =（match [3] || match [4] ||
				匹配[5] || “” .replace（runescape，funescape）;

			if（match [2] ===“〜=”）{
				match [3] =“” + match [3] +“”;
			}

			返回match.slice（0，4）;
		}，

		“ CHILD”：function（match）{

			/ *來自matchExpr [“ CHILD”]的匹配項
				1種（僅| nth | ...）
				2什麼（類型的孩子）
				3個參數（even | odd | \ d * | \ d * n（[+-] \ d +）？| ...）
				4 xn + y參數的[xn-component]（[+-]？\ d * n |）
				Xn分量的5個符號
				6 x xn分量
				y分量的7號
				y分量的8 y
			* /
			match [1] = match [1] .toLowerCase（）;

			if（match [1] .slice（0，3）===“ nth”）{

				// nth- *需要參數
				如果（！match [3]）{
					Sizzle.error（match [0]）;
				}

				// Expr.filter.CHILD的數字x和y參數
				//記住將false / true分別強制轉換為0/1
				match [4] = +（match [4]嗎？
					匹配[5] +（匹配[6] || 1）：
					2 *（match [3] ===“ even” || match [3] ===“ odd”））;
				match [5] = +（（match [7] + match [8]）|| match [3] ===“奇”）;

				//其他類型禁止參數
			} else if（match [3]）{
				Sizzle.error（match [0]）;
			}

			返回比賽；
		}，

		“ PSEUDO”：function（match）{
			多餘的
				未引用=！match [6] && match [2];

			if（matchExpr [“ CHILD”] .test（match [0]））{
				返回null;
			}

			//照原樣接受帶引號的參數
			如果（match [3]）{
				match [2] = match [4] || 匹配[5] || “”;

			//去除未加引號的參數中多餘的字符
			} else if（不帶引號&& rpseudo.test（不帶引號）&&

				//從令牌化中獲取剩餘（遞歸）
				（多餘= tokenize（未引用，true））&&

				//前進到下一個右括號
				（超額= unquoted.indexOf（“）”，unquoted.length-超額）-unquoted.length））{

				//多餘是一個負指標
				match [0] = match [0] .slice（0，超額）;
				match [2] = unquoted.slice（0，超額）;
			}

			//僅返回偽過濾器方法（類型和參數）所需的捕獲
			返回match.slice（0，3）;
		}
	}，

	過濾器：{

		“ TAG”：function（nodeNameSelector）{
			var nodeName = nodeNameSelector.replace（runescape，funescape）.toLowerCase（）;
			返回nodeNameSelector ===“ *”嗎？
				function（）{
					返回true；
				}：
				函數（elem）{
					返回elem.nodeName && elem.nodeName.toLowerCase（）=== nodeName;
				};
		}，

		“ CLASS”：function（className）{
			var pattern = classCache [className +“”];

			返回模式||
				（pattern = new RegExp（“（^ |” +空格+
					“）” + className +“（” +空格+“ | $）”））&& classCache（
						className，function（elem）{
							返回pattern.test（
								typeof elem.className ===“字符串” && elem.className ||
								typeof elem.getAttribute！==“未定義” &&
									elem.getAttribute（“ class”）||
								”
							）;
				}）；
		}，

		“ ATTR”：函數（名稱，運算符，檢查）{
			返回函數（elem）{
				var result = Sizzle.attr（elem，name）;

				如果（結果== null）{
					返回運算符===“！=”;
				}
				如果（！operator）{
					返回true；
				}

				結果+ =“”;

				/ *禁用最大長度* /

				返回運算符===“ =” 結果===檢查：
					運算符===“！=” 結果！==檢查：
					運算符===“ ^ =”嗎？檢查&& result.indexOf（check）=== 0：
					運算符===“ * =”？檢查&& result.indexOf（check）> -1：
					運算符===“ $ =”？檢查&& result.slice（-check.length）===檢查：
					運算符===“〜=”？（“” + result.replace（rwhitespace，“”）+“”）.indexOf（check）> -1：
					運算符===“ | =”？結果===檢查|| result.slice（0，check.length + 1）===檢查+“-”：
					假;
				/ * eslint啟用max-len * /

			};
		}，

		“ CHILD”：函數（類型，內容，_參數，第一個，最後一個）{
			var simple = type.slice（0，3）！==“ nth”，
				轉發= type.slice（-4）！==“最後”，
				ofType =什麼===“ of-type”;

			返回first === 1 && last === 0嗎？

				//快捷方式：nth-​​（n）
				函數（elem）{
					返回!! elem.parentNode;
				}：

				函數（elem，_context，xml）{
					var cache，uniqueCache，outerCache，node，nodeIndex，start，
						dir =簡單！==轉發？“ nextSibling”：“ previousSibling”，
						父= elem.parentNode，
						名稱= ofType && elem.nodeName.toLowerCase（），
						useCache =！xml &&！ofType，
						diff = false;

					如果（父母）{

						//：（（first | last | only）-（child | of-type）
						如果（簡單）{
							while（dir）{
								節點=元素;
								while（（（node = node [dir]））{
									如果（ofType？
										node.nodeName.toLowerCase（）===名稱
										node.nodeType === 1）{

										返回false；
									}
								}

								//反向：only- *（如果尚未這樣做）
								start = dir = type ===“ only” &&！start &&“ nextSibling”;
							}
							返回true；
						}

						開始= [轉發？parent.firstChild：parent.lastChild];

						// non-xml：nth-​​child（...）將緩存數據存儲在“ parent”上
						如果（forward && useCache）{

							//從先前緩存的索引中查找ʻelem`

							// ...以對gzip友好的方式
							節點=父級;
							outsideCache = node [expando] || （node [expando] = {}）;

							//支持：僅限IE <9
							//防禦克隆的特質（jQuery gh-1709）
							uniqueCache = outsideCache [node.uniqueID] ||
								（externalCache [node.uniqueID] = {}）;

							緩存= uniqueCache [類型] || [];
							nodeIndex = cache [0] ===目錄運行&& cache [1];
							diff = nodeIndex && cache [2];
							node = nodeIndex && parent.childNodes [nodeIndex];

							而（（（node = ++ nodeIndex && node && node [dir] ||

								//從一開始就退回到尋求`elem`
								（diff = nodeIndex = 0）|| start.pop（）））{

								//找到後，在`parent`上緩存索引併中斷
								if（node.nodeType === 1 && ++ diff && node === elem）{
									uniqueCache [type] = [dirruns，nodeIndex，diff];
									打破;
								}
							}

						}其他{

							//使用以前緩存的元素索引（如果有）
							如果（useCache）{

								// ...以對gzip友好的方式
								節點=元素;
								outsideCache = node [expando] || （node [expando] = {}）;

								//支持：僅限IE <9
								//防禦克隆的特質（jQuery gh-1709）
								uniqueCache = outsideCache [node.uniqueID] ||
									（externalCache [node.uniqueID] = {}）;

								緩存= uniqueCache [類型] || [];
								nodeIndex = cache [0] ===目錄運行&& cache [1];
								diff = nodeIndex;
							}

							// xml：nth-​​child（...）
							//或：nth-​​last-child（...）或：nth（-last）？-of-type（...）
							如果（diff === false）{

								//使用與上述相同的循環從頭開始查找ʻelem`
								而（（（node = ++ nodeIndex && node && node [dir] ||
									（diff = nodeIndex = 0）|| start.pop（）））{

									如果（（ofType？
										node.nodeName.toLowerCase（）===名稱
										node.nodeType === 1）&&
										++ diff）{

										//緩存每個遇到的元素的索引
										如果（useCache）{
											outsideCache = node [expando] ||
												（node [expando] = {}）;

											//支持：僅限IE <9
											//防禦克隆的特質（jQuery gh-1709）
											uniqueCache = outsideCache [node.uniqueID] ||
												（externalCache [node.uniqueID] = {}）;

											uniqueCache [type] = [dirruns，diff];
										}

										if（node === elem）{
											打破;
										}
									}
								}
							}
						}

						//合併偏移量，然後檢查循環大小
						diff-=最後；
						返回差異===首先|| （diff％first === 0 && diff / first> = 0）;
					}
				};
		}，

		“ PSEUDO”：函數（偽，自變量）{

			//偽類名稱不區分大小寫
			// http://www.w3.org/TR/selectors/#pseudo-classes
			//如果使用大寫字母添加了自定義偽內容，請按大小寫區分優先級
			//記住setFilters繼承了偽函數
			var args，
				fn = Expr.pseudos [pseudo] || Expr.setFilters [pseudo.toLowerCase（）] ||
					Sizzle.error（“不支持的偽：” +偽）;

			//用戶可以使用createPseudo來指示
			//需要參數來創建過濾器函數
			//和Sizzle一樣
			如果（fn [expando]）{
				返回fn（參數）;
			}

			//但是要保持對舊簽名的支持
			如果（fn.length> 1）{
				args = [偽，偽，“”，自變量];
				返回Expr.setFilters.hasOwnProperty（pseudo.toLowerCase（））嗎？
					markFunction（函數（種子，匹配項）{
						var idx，
							匹配= fn（種子，參數），
							i = match.length;
						當我 -  ） {
							idx = indexOf（seed，matched [i]）;
							seed [idx] =！（matches [idx] = match [i]）;
						}
					}）：
					函數（elem）{
						返回fn（elem，0，args）;
					};
			}

			返回fn;
		}
	}，

	假人：{

		//潛在的複雜偽
		“ not”：markFunction（function（selector）{

			//修剪傳遞給編譯器的選擇器
			//避免處理前導和尾隨
			//作為組合符的空格
			var輸入= []，
				結果= []，
				matcher = compile（selector.replace（rtrim，“ $ 1”））;

			返回matcher [expando]嗎？
				markFunction（函數（種子，匹配項，_context，xml）{
					var elem，
						unmatched = matcher（seed，null，xml，[]），
						i = seed.length;

					//匹配`matcher`無法匹配的元素
					當我 -  ） {
						如果（（elem = unmatched [i]））{
							seed [i] =！（matches [i] = elem）;
						}
					}
				}）：
				函數（elem，_context，xml）{
					輸入[0] =元素；
					matcher（input，null，xml，results）;

					//不要保留元素（issue＃299）
					輸入[0] = null;
					返回！results.pop（）;
				};
		}），

		“有”：markFunction（function（選擇器）{
			返回函數（elem）{
				返回Sizzle（選擇符，elem）.length> 0;
			};
		}），

		“包含”：markFunction（function（text）{
			text = text.replace（runescape，funescape）;
			返回函數（elem）{
				return（elem.textContent || getText（elem））.indexOf（text）> -1;
			};
		}），

		//“元素是否由：lang（）選擇器表示
		//僅基於元素的語言值
		//等於標識符C，
		//或以標識符C開頭，後跟“-”。
		// C與元素的語言值的匹配不區分大小寫。
		//標識符C不必是有效的語言名稱。”
		// http://www.w3.org/TR/selectors/#lang-pseudo
		“ lang”：markFunction（function（lang）{

			// lang值必須是有效的標識符
			if（！ridentifier.test（lang ||“”））{
				Sizzle.error（“不支持的lang：” + lang）;
			}
			lang = lang.replace（runescape，funescape）.toLowerCase（）;
			返回函數（elem）{
				var elemLang;
				做{
					如果（（elemLang = documentIsHTML？
						elem.lang：
						elem.getAttribute（“ xml：lang”）|| elem.getAttribute（“ lang”）））{

						elemLang = elemLang.toLowerCase（）;
						返回elemLang === lang || elemLang.indexOf（lang +“-”）=== 0;
					}
				} while（（（elem = elem.parentNode）&& elem.nodeType === 1）;
				返回false；
			};
		}），

		//其他
		“ target”：function（elem）{
			var hash = window.location && window.location.hash;
			返回hash && hash.slice（1）=== elem.id;
		}，

		“ root”：function（elem）{
			return elem === docElem;
		}，

		“ focus”：function（elem）{
			返回elem === document.activeElement &&
				（！document.hasFocus || document.hasFocus（））&&
				!!（elem.type || elem.href ||〜elem.tabIndex）;
		}，

		//布爾屬性
		“ enabled”：createDisabledPseudo（false），
		“ disabled”：createDisabledPseudo（true），

		“ checked”：function（elem）{

			//在CSS3中，：checked應該同時返回選中和選中的元素
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase（）;
			return（nodeName ===“ input” && !! elem.checked）||
				（nodeName ===“ option” && !! elem.selected）;
		}，

		“ selected”：function（elem）{

			//訪問此屬性將默認選中
			// Safari中的選項正常工作
			如果（elem.parentNode）{
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			返回elem.selected === true;
		}，

		//目錄
		“ empty”：function（elem）{

			// http://www.w3.org/TR/selectors/#empty-pseudo
			//：元素（1）或內容節點（文本：3； cdata：4；實體ref：5）否定空，
			//，但其他人則不行（評論：8；處理指令：7；等等）
			// nodeType <6起作用是因為屬性（2）不會作為子代出現
			為（elem = elem.firstChild; elem; elem = elem.nextSibling）{
				如果（elem.nodeType <6）{
					返回false；
				}
			}
			返回true；
		}，

		“父母”：function（elem）{
			return！Expr.pseudos [“ empty”]（elem）;
		}，

		//元素/輸入類型
		“ header”：function（elem）{
			返回rheader.test（elem.nodeName）;
		}，

		“ input”：function（elem）{
			返回rinputs.test（elem.nodeName）;
		}，

		“ button”：function（elem）{
			var name = elem.nodeName.toLowerCase（）;
			返回名稱===“輸入” && elem.type ===“按鈕” || 名稱===“按鈕”;
		}，

		“ text”：function（elem）{
			var attr;
			返回elem.nodeName.toLowerCase（）===“輸入” &&
				elem.type ===“文本” &&

				//支持：IE <8
				//新的HTML5屬性值（例如“搜索”）以elem.type ===“ text”出現
				（（attr = elem.getAttribute（“ type”））== null ||
					attr.toLowerCase（）===“文本”）;
		}，

		//集合中的位置
		“第一”：createPositionalPseudo（function（）{
			返回[0];
		}），

		“最後一個”：createPositionalPseudo（function（_matchIndexes，length）{
			返回[length-1];
		}），

		“ eq”：createPositionalPseudo（function（_matchIndexes，length，arguments）{
			返回[參數<0？參數+長度：參數];
		}），

		“偶數”：createPositionalPseudo（function（matchIndexes，length）{
			var i = 0;
			對於（; i <length; i + = 2）{
				matchIndexes.push（i）;
			}
			返回matchIndexes;
		}），

		“奇數”：createPositionalPseudo（function（matchIndexes，length）{
			var i = 1;
			對於（; i <length; i + = 2）{
				matchIndexes.push（i）;
			}
			返回matchIndexes;
		}），

		“ lt”：createPositionalPseudo（function（matchIndexes，length，arguments）{
			var i =參數<0？
				參數+長度：
				參數>長度？
					長度 ：
					論據;
			對於（; --i> = 0;）{
				matchIndexes.push（i）;
			}
			返回matchIndexes;
		}），

		“ gt”：createPositionalPseudo（function（matchIndexes，length，arguments）{
			var i =參數<0？參數+長度：參數;
			對於（; ++ i <length;）{
				matchIndexes.push（i）;
			}
			返回matchIndexes;
		}）
	}
};

Expr.pseudos [“ nth”] = Expr.pseudos [“ eq”];

//添加按鈕/輸入類型偽
for（我在{radio：true，複選框：true，file：true，password：true，image：true}）{
	Expr.pseudos [i] = createInputPseudo（i）;
}
為（我在{提交：true，重置：true}）{
	Expr.pseudos [i] = createButtonPseudo（i）;
}

//用於創建新的setFilters的簡單API
函數setFilters（）{}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters（）;

tokenize = Sizzle.tokenize = function（選擇器，parseOnly）{
	var匹配，匹配，令牌，類型，
		soFar，群組，preFilters，
		緩存= tokenCache [選擇器+“”];

	如果（已緩存）{
		返回parseOnly嗎？0：cached.slice（0）;
	}

	soFar =選擇器；
	組= []；
	preFilters = Expr.preFilter;

	而（soFar）{

		//逗號並首次運行
		if（！matched ||（match = rcomma.exec（soFar）））{
			如果（匹配）{

				//不要將尾部逗號視為有效
				soFar = soFar.slice（match [0] .length）|| 至今;
			}
			groups.push（（tokens = []））;
		}

		匹配=假;

		//組合器
		如果（（match = rcombinators.exec（soFar）））{
			匹配= match.shift（）;
			tokens.push（{
				值：匹配，

				//將後代組合器投射到太空
				類型：match [0] .replace（rtrim，“”）
			}）；
			soFar = soFar.slice（matched.length）;
		}

		//過濾器
		對於（在Expr.filter中鍵入）{
			if（（match = matchExpr [type] .exec（soFar））&&（！preFilters [type] ||
				（match = preFilters [type]（match））））{
				匹配= match.shift（）;
				tokens.push（{
					值：匹配，
					類型：
					比賽：比賽
				}）；
				soFar = soFar.slice（matched.length）;
			}
		}

		如果（！matched）{
			打破;
		}
	}

	//返回無效超出部分的長度
	//如果我們只是解析
	//否則，拋出錯誤或返回令牌
	返回parseOnly嗎？
		soFar.length：
		至今 ？
			Sizzle.error（選擇器）：

			//緩存令牌
			tokenCache（選擇器，組）.slice（0）;
};

函數toSelector（令牌）{
	var i = 0，
		len = tokens.length，
		選擇器=“”;
	為（; i <len; i ++）{
		選擇器+ =標記[i] .value;
	}
	返回選擇器；
}

函數addCombinator（匹配器，組合器，基數）{
	var dir = combinator.dir，
		跳過= combinator.next，
		鍵=跳過|| 目錄
		checkNonElements =基本&&鍵===“ parentNode”，
		doneName = done ++;

	返回combinator.first？

		//檢查最接近的祖先/上一個元素
		函數（elem，context，xml）{
			而（（（elem = elem [dir]））{
				如果（elem.nodeType === 1 || checkNonElements）{
					返回matcher（elem，context，xml）;
				}
			}
			返回false；
		}：

		//檢查所有祖先/先前元素
		函數（elem，context，xml）{
			var oldCache，uniqueCache，outerCache，
				newCache = [dirruns，doneName];

			//我們無法在XML節點上設置任意數據，因此它們不會從組合器緩存中受益
			如果（xml）{
				而（（（elem = elem [dir]））{
					如果（elem.nodeType === 1 || checkNonElements）{
						if（matcher（elem，context，xml））{
							返回true；
						}
					}
				}
			}其他{
				而（（（elem = elem [dir]））{
					如果（elem.nodeType === 1 || checkNonElements）{
						outsideCache = elem [expando] || （elem [expando] = {}）;

						//支持：僅限IE <9
						//防禦克隆的特質（jQuery gh-1709）
						uniqueCache = externalCache [elem.uniqueID] ||
							（externalCache [elem.uniqueID] = {}）;

						如果（skip && skip === elem.nodeName.toLowerCase（））{
							elem = elem [dir] || 元素
						} else if（（（oldCache = uniqueCache [key]）&&
							oldCache [0] === dirruns && oldCache [1] === doneName）{

							//分配給newCache，以使結果反向傳播到先前的元素
							return（newCache [2] = oldCache [2]）;
						}其他{

							//重用newcache，以便將結果反向傳播到先前的元素
							uniqueCache [key] = newCache;

							//匹配表示我們已經完成；失敗意味著我們必須繼續檢查
							if（（newCache [2] = matcher（elem，context，xml）））{
								返回true；
							}
						}
					}
				}
			}
			返回false；
		};
}

函數elementMatcher（matchers）{
	返回matchers.length> 1嗎？
		函數（elem，context，xml）{
			var i = matchers.length;
			當我 -  ） {
				if（！matchers [i]（elem，context，xml））{
					返回false；
				}
			}
			返回true；
		}：
		匹配器[0];
}

函數multipleContexts（選擇器，上下文，結果）{
	var i = 0，
		len = contexts.length;
	為（; i <len; i ++）{
		Sizzle（選擇器，contexts [i]，results）;
	}
	返回結果；
}

函數condense（不匹配，地圖，過濾器，上下文，xml）{
	var elem，
		newUnmatched = []，
		我= 0，
		len = unmatched.length，
		映射=地圖！= null;

	為（; i <len; i ++）{
		如果（（elem = unmatched [i]））{
			如果（！filter || filter（elem，context，xml））{
				newUnmatched.push（elem）;
				如果（已映射）{
					map.push（i）;
				}
			}
		}
	}

	返回newUnmatched;
}

函數setMatcher（preFilter，selector，matcher，postFilter，postFinder，postSelector）{
	如果（postFilter &&！postFilter [expando]）{
		postFilter = setMatcher（postFilter）;
	}
	如果（postFinder &&！postFinder [expando]）{
		postFinder = setMatcher（postFinder，postSelector）;
	}
	返回markFunction（函數（種子，結果，上下文，xml）{
		var temp，i，elem，
			preMap = []，
			postMap = []，
			預先存在= results.length，

			//從種子或上下文中獲取初始元素
			elems =種子|| multipleContexts（
				選擇器|| “ *”，
				context.nodeType？[context]：上下文，
				[]
			），

			//預過濾器以獲取匹配器輸入，並保留用於種子結果同步的映射
			matcherIn = preFilter &&（種子||！selector）嗎？
				condense（elems，preMap，preFilter，context，xml）：
				元素

			matcherOut =匹配器？

				//如果我們有postFinder或已過濾的種子，或非種子postFilter或預先存在的結果，
				postFinder || （種子？preFilter：預先存在的|| postFilter）？

					// ...需要中間處理
					[]：

					// ...否則直接使用結果
					結果：
				matcherIn;

		//查找主要匹配項
		如果（匹配）{
			matcher（matcherIn，matcherOut，context，xml）;
		}

		//應用postFilter
		如果（postFilter）{
			temp = condense（matcherOut，postMap）;
			postFilter（temp，[]，context，xml）;

			//通過將不匹配的元素移回matcherIn來取消匹配
			i =溫度長度；
			當我 -  ） {
				如果（（elem = temp [i]））{
					matcherOut [postMap [i]] =！（matcherIn [postMap [i]] = elem）;
				}
			}
		}

		如果（種子）{
			如果（postFinder || preFilter）{
				如果（postFinder）{

					//通過將該中間語言壓縮到postFinder上下文中來獲取最終的matcherOut
					temp = [];
					i = matcherOut.length;
					當我 -  ） {
						如果（（elem = matcherOut [i]））{

							//恢復matcherIn，因為elem尚未結束
							temp.push（（matcherIn [i] = elem））;
						}
					}
					postFinder（null，（matcherOut = []），temp，xml）;複製代碼
				}

				//將匹配的元素從種子移到結果以保持它們同步
				i = matcherOut.length;
				當我 -  ） {
					如果（（elem = matcherOut [i]）&&
						（temp = postFinder？indexOf（seed，elem）：preMap [i]）> -1）{

						seed [temp] =！（results [temp] = elem）;
					}
				}
			}

		//通過postFinder（如果已定義）將元素添加到結果中
		}其他{
			matcherOut =壓縮（
				matcherOut ===結果？
					matcherOut.splice（預先存在，matcherOut.length）：
					matcherOut
			）;
			如果（postFinder）{
				postFinder（null，results，matcherOut，xml）;複製代碼
			}其他{
				push.apply（results，matcherOut）;
			}
		}
	}）；
}

函數matcherFromTokens（令牌）{
	var checkContext，matcher，j，
		len = tokens.length，
		leadRelative = Expr.relative [tokens [0] .type]，
		hiddenRelative = LeadingRelative || Expr.relative [“”]，
		我= LeadingRelative嗎？1：0，

		//基礎匹配器確保可以從頂級上下文訪問元素
		matchContext = addCombinator（function（elem）{
			return elem === checkContext;
		}，implicitRelative，true），
		matchAnyContext = addCombinator（function（elem）{
			返回indexOf（checkContext，elem）> -1;
		}，implicitRelative，true），
		matchers = [function（elem，context，xml）{
			var ret =（！leadingRelative &&（xml || context！== outsidemostContext））|| （
				（checkContext = context）.nodeType？
					matchContext（elem，context，xml）：
					matchAnyContext（elem，context，xml））;複製代碼

			//避免掛在元素上（issue＃299）
			checkContext = null;
			返回ret
		}];

	為（; i <len; i ++）{
		如果（（matcher = Expr.relative [tokens [i] .type]））{
			matchers = [addCombinator（elementMatcher（matchers），matcher）];
		}其他{
			matcher = Expr.filter [tokens [i] .type] .apply（null，tokens [i] .matches）;

			//看到位置匹配器後返回特殊
			如果（matcher [expando]）{

				//查找下一個相對運算符（如果有）以進行適當處理
				j = ++ i;
				對於（; j <len; j ++）{
					如果（Expr.relative [tokens [j] .type]）{
						打破;
					}
				}
				返回setMatcher（
					i> 1 && elementMatcher（matchers），
					i> 1 && toSelector（

					//如果前面的標記是後代組合器，則插入一個隱式的任何元素`*`
					代幣
						.slice（0，i-1）
						.concat（{value：tokens [i-2] .type ===“”？“ *”：“”}））
					）.replace（rtrim，“ $ 1”），
					配對者
					i <j && matcherFromTokens（tokens.slice（i，j）），
					j <len && matcherFromTokens（（tokens = tokens.slice（j））），
					j <len && toSelector（令牌）
				）;
			}
			matchers.push（matcher）;
		}
	}

	返回elementMatcher（matchers）;
}

函數matcherFromGroupMatchers（elementMatchers，setMatchers）{
	var bySet = setMatchers.length> 0，
		byElement = elementMatchers.length> 0，
		superMatcher = function（種子，上下文，xml，結果，最外層）{
			var elem，j，匹配器，
				matchCount = 0，
				i =“ 0”，
				無與倫比=種子&& []，
				setMatched = []，
				contextBackup = externalmostContext，

				//我們必須始終具有種子元素或最外層上下文
				elems =種子|| byElement && Expr.find [“ TAG”]（“ *”，最外面的），

				//使用整數dirruns（如果這是最外面的匹配器）
				dirrunsUnique =（dirruns + = contextBackup == null？1：Math.random（）|| 0.1），
				len = elems.length;

			如果（最外層）{

				//支持：IE 11 +，Edge 17-18 +
				//嚴格比較時，IE / Edge有時會引發“權限被拒絕”錯誤
				//兩個文件；淺層比較工作。
				// eslint-disable-next-line eqeqeq
				externalmostContext =上下文==文檔|| 上下文|| 最外層
			}

			//添加將elementMatchers直接傳遞給結果的元素
			//支持：IE <9，Safari
			//允許id匹配元素的NodeList屬性（IE：“長度”； Safari：<number>）
			for（; i！== len &&（elem = elems [i]）！= null; i ++）{
				如果（byElement && elem）{
					j = 0;

					//支持：IE 11 +，Edge 17-18 +
					//嚴格比較時，IE / Edge有時會引發“權限被拒絕”錯誤
					//兩個文件；淺層比較工作。
					// eslint-disable-next-line eqeqeq
					如果（！context && elem.ownerDocument！= document）{
						setDocument（elem）;
						xml =！documentIsHTML;
					}
					while（（matcher = elementMatchers [j ++]））{
						if（matcher（elem，context || document，xml））{
							results.push（elem）;
							打破;
						}
					}
					如果（最外層）{
						dirruns = dirrunsUnique;
					}
				}

				//跟踪集合過濾器的不匹配元素
				如果（bySet）{

					//他們將經歷所有可能的匹配器
					如果（（elem =！matcher && elem））{
						matchCount--;
					}

					//延長每個元素的數組，匹配或不匹配
					如果（種子）{
						unmatched.push（elem）;
					}
				}
			}

			//`i`現在是上面訪問的元素計數，並將其添加到`matchedCount`
			//使後者為非負數。
			matchCount + = i;

			//將集合過濾器應用於不匹配的元素
			//注意：如果沒有不匹配的元素（例如，“ matchedCount”
			//等於`i`），除非我們沒有在上述循環中訪問_any_元素，因為
			//沒有元素匹配器，也沒有種子。
			//遞增初始字符串“ 0” i允許i只保留字符串
			//大小寫，這將導致與“ i”不同但與“ i”不同的“ 00”`matchedCount`
			//數字為零。
			如果（bySet && i！== matchedCount）{
				j = 0;
				while（（matcher = setMatchers [j ++]））{
					matcher（unmatched，setMatched，context，xml）;
				}

				如果（種子）{

					//重新整合元素匹配以消除排序需求
					如果（matchedCount> 0）{
						當我 -  ） {
							如果（！（unmatched [i] || setMatched [i]））{
								setMatched [i] = pop.call（results）;
							}
						}
					}

					//丟棄索引佔位符值以僅獲取實際匹配項
					setMatched = condense（setMatched）;
				}

				//將匹配項添加到結果
				push.apply（results，setMatched）;

				//無種子集合匹配成功的多個成功匹配器規定排序
				if（最外面的&&！seed && setMatched.length> 0 &&
					（matchCount + setMatchers.length）> 1）{

					Sizzle.uniqueSort（results）;
				}
			}

			//嵌套匹配器覆蓋全局操作
			如果（最外層）{
				dirruns = dirrunsUnique;
				outsidemostContext = contextBackup;
			}

			無與倫比的回報
		};

	返回bySet？
		markFunction（superMatcher）：
		superMatcher;
}

compile = Sizzle.compile = function（選擇器，match / *僅供內部使用* /）{
	var i，
		setMatchers = []，
		elementMatchers = []，
		緩存=編譯器緩存[選擇器+“”];

	如果（！cached）{

		//生成一個可用於檢查每個元素的遞歸函數
		如果（！match）{
			匹配= tokenize（選擇器）;
		}
		i = match.length;
		當我 -  ） {
			緩存= matcherFromTokens（match [i]）;
			如果（cached [expando]）{
				setMatchers.push（cached）;
			}其他{
				elementMatchers.push（cached）;
			}
		}

		//緩存已編譯的函數
		緩存=編譯器緩存（
			選擇器
			matcherFromGroupMatchers（elementMatchers，setMatchers）
		）;

		//保存選擇器和令牌化
		cached.selector =選擇器;
	}
	返回緩存；
};

/ **
 *與Sizzle的編譯器一起使用的低級選擇功能
 *選擇器功能
 * @param {String | Function}選擇器選擇器或預編譯
 * Sizzle.compile內置的選擇器功能
 * @param {Element}上下文
 * @param {Array} [結果]
 * @param {Array} [seed]一組要匹配的元素
 * /
select = Sizzle.select = function（選擇器，上下文，結果，種子）{
	var i，令牌，令牌，類型，查找，
		編譯= typeof選擇器===“函數” &&選擇器，
		match =！seed && tokenize（（選擇器=編譯選擇器||選擇器））;

	結果=結果|| [];

	//如果列表中只有一個選擇器且沒有種子，則嘗試最小化操作
	//（後者保證了我們的上下文）
	如果（match.length === 1）{

		//如果前導複合選擇器是ID，則減少上下文
		令牌= match [0] = match [0] .slice（0）;
		if（tokens.length> 2 &&（token = tokens [0]）.type ===“ ID” &&
			context.nodeType === 9 && documentIsHTML && Expr.relative [tokens [1] .type]）{

			context =（Expr.find [“ ID”]（token.matches [0]
				.replace（runescape，funescape），context）|| []）[0];
			如果（！context）{
				返回結果；

			//預編譯的匹配器仍會驗證祖先，因此請提高等級
			}否則，如果（已編譯）{
				context = context.parentNode;
			}

			選擇器=選擇器.slice（tokens.shift（）。value.length）;
		}

		//獲取種子集以實現從右到左的匹配
		我= matchExpr [“ needsContext”]。test（選擇器）嗎？0：tokens.length;
		當我 -  ） {
			令牌=令牌[i];

			//如果我們碰到組合器，則中止
			如果（Expr.relative [（type = token.type）]）{
				打破;
			}
			if（（find = Expr.find [type]））{

				//搜索，為領先的同級組合器擴展上下文
				如果（（種子=查找（
					token.matches [0] .replace（runescape，funescape），
					rsibling.test（tokens [0] .type）&& testContext（context.parentNode）||
						語境
				）））{

					//如果種子為空或沒有令牌，我們可以提早返回
					tokens.splice（i，1）;
					選擇器= seed.length && toSelector（tokens）;
					如果（！selector）{
						push.apply（results，seed）;
						返回結果；
					}

					打破;
				}
			}
		}
	}

	//如果沒有提供，則編譯並執行過濾功能
	//如果我們修改了上面的選擇器，請提供`match`以避免重新令牌化
	（編譯||編譯（選擇器，匹配））（
		種子，
		上下文
		！documentIsHTML，
		結果，
		！上下文|| rsibling.test（選擇器）&& testContext（context.parentNode）|| 語境
	）;
	返回結果；
};

//一次性作業

//排序穩定性
support.sortStable = expando.split（“”）.sort（sortOrder）.join（“”）=== expando;

//支持：Chrome 14-35 +
//如果不傳遞給比較函數，則始終假定重複項
support.detectDuplicates = !! hasDuplicate;

//根據默認文檔進行初始化
setDocument（）;

//支持：Webkit <537.32-Safari 6.0.3 / Chrome 25（已在Chrome 27中修復）
//分離的節點混雜在一起*彼此*
support.sortDetached = assert（function（el）{

	//應該返回1，但返回4（如下）
	返回el.compareDocumentPosition（document.createElement（“ fieldset”））＆1;
}）；

//支持：IE <8
//防止屬性/屬性“插值”
// https://msdn.microsoft.com/zh-CN/library/ms536429%28VS.85%29.aspx
如果（！assert（function（el）{
	el.innerHTML =“ <a href='#'> </a>”;
	return el.firstChild.getAttribute（“ href”）===“＃”;
}}）{
	addHandle（“ type | href | height | width”，function（elem，name，isXML）{
		如果（！isXML）{
			return elem.getAttribute（name，name.toLowerCase（）===“ type”？1：2）;
		}
	}）；
}

//支持：IE <9
//使用defaultValue代替getAttribute（“ value”）
如果（！support.attributes ||！assert（function（el）{
	el.innerHTML =“ <input />”;
	el.firstChild.setAttribute（“ value”，“”）;
	返回el.firstChild.getAttribute（“ value”）===“”;
}}）{
	addHandle（“ value”，function（elem，_name，isXML）{
		如果（！isXML && elem.nodeName.toLowerCase（）===“ input”）{
			返回elem.defaultValue;
		}
	}）；
}

//支持：IE <9
//當getAttribute位於時，使用getAttributeNode來獲取布爾值
如果（！assert（function（el）{
	返回el.getAttribute（“ disabled”）== null;
}}）{
	addHandle（booleans，function（elem，name，isXML）{
		var val;
		如果（！isXML）{
			返回elem [名稱] === true嗎？name.toLowerCase（）：
				（val = elem.getAttributeNode（name））&& val.specified？
					值：
					空值;
		}
	}）；
}

返回嘶嘶聲;

}）（window）;



jQuery.find =嘶嘶聲；
jQuery.expr = Sizzle.selectors;

//不推薦使用
jQuery.expr [“：”] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function（elem，dir，直到）{
	var matching = []，
		截斷=直到！==未定義;

	while（（（elem = elem [dir]）&& elem.nodeType！== 9）{
		如果（elem.nodeType === 1）{
			if（截斷&& jQuery（elem）.is（直到））{
				打破;
			}
			match.push（elem）;
		}
	}
	返回匹配
};


var siblings = function（n，elem）{
	var matching = [];

	對於（; n; n = n.nextSibling）{
		如果（n.nodeType === 1 && n！== elem）{
			match.push（n）;
		}
	}

	返回匹配
};


var rneedsContext = jQuery.expr.match.needsContext;



函數nodeName（elem，name）{

  返回elem.nodeName && elem.nodeName.toLowerCase（）=== name.toLowerCase（）;

};
var rsingleTag =（/ ^ <（[az] [^ \ / \ 0>：\ x20 \ t \ r \ n \ f] *）[\ x20 \ t \ r \ n \ f] * \ /？>（ ？：<\ / \ 1> |）$ / i）;



//為過濾器實現相同的功能，而不是
函數winnow（elements，qualifier，not）{
	如果（isFunction（qualifier））{
		返回jQuery.grep（elements，function（elem，i）{
			返回!! qualifier.call（elem，i，elem）！==不;
		}）；
	}

	//單個元素
	如果（qualifier.nodeType）{
		返回jQuery.grep（elements，function（elem）{
			return（elem ===限定詞）！==不;
		}）；
	}

	//元素的Arraylike（jQuery，參數，Array）
	if（typeof qualifier！==“ string”）{
		返回jQuery.grep（elements，function（elem）{
			return（indexOf.call（qualifier，elem）> -1）！==否;
		}）；
	}

	//直接過濾簡單選擇器和復雜選擇器
	返回jQuery.filter（qualifier，elements，not）;
}

jQuery.filter = function（expr，elems，not）{
	var elem = elems [0];

	如果不 ） {
		expr =“：not（” + expr +“）”;
	}

	if（elems.length === 1 && elem.nodeType === 1）{
		返回jQuery.find.matchesSelector（elem，expr）嗎？[elem]：[];
	}

	返回jQuery.find.matches（expr，jQuery.grep（elems，function（elem）{
		返回elem.nodeType === 1;
	}））;
};

jQuery.fn.extend（{
	查找：函數（選擇器）{
		var i，ret，
			len = this.length，
			自我=這個

		if（typeof選擇器！==“ string”）{
			返回this.pushStack（jQuery（選擇器）.filter（function（）{
				對於（i = 0; i <len; i ++）{
					如果（jQuery.contains（self [i]，this））{
						返回true；
					}
				}
			}））;
		}

		ret = this.pushStack（[]）;

		對於（i = 0; i <len; i ++）{
			jQuery.find（選擇器，self [i]，ret）;
		}

		返回len> 1嗎？jQuery.uniqueSort（ret）：ret;
	}，
	過濾器：功能（選擇器）{
		返回this.pushStack（winnow（this，選擇器|| []，false））;
	}，
	否：function（選擇器）{
		返回this.pushStack（winnow（this，選擇器|| []，true））;
	}，
	是：function（選擇器）{
		返回!! winnow（
			這個，

			//如果這是位置/相對選擇器，請檢查返回集中的成員資格
			//因此，對於具有兩個“ p”的文檔，$（“ p：first”）。is（“ p：last”）不會返回true。
			typeof選擇器===“字符串” && rneedsContext.test（選擇器）？
				jQuery（選擇器）：
				選擇器|| []，
			假
		）。長度;
	}
}）；


//初始化jQuery對象


//對根jQuery的中央引用（文檔）
var rootjQuery，

	//檢查HTML字符串的簡單方法
	//將#id優先於<tag>以避免通過location.hash進行XSS（＃9521）
	//嚴格的HTML識別（＃11290：必須以<開頭）
	//快捷的#id快捷方式
	rquickExpr = / ^（？：\ s *（<[\ w \ W] +>）[^>] * |＃（[\ w-] +））$ /，

	初始化= jQuery.fn.init =函數（選擇器，上下文，根）{
		var match，elem;

		//處理：$（“”），$（null），$（undefined），$（false）
		如果（！selector）{
			返回這個
		}

		//方法init（）接受替代的rootjQuery
		//這樣遷移就可以支持jQuery.sub（gh-2101）
		根=根|| rootjQuery;

		//處理HTML字符串
		if（typeof選擇器===“ string”）{
			如果（選擇器[0] ===“ <” &&
				選擇器[selector.length-1] ===“>” &&
				選擇器長度> = 3）{

				//假設以<>開頭和結尾的字符串是HTML，並跳過正則表達式檢查
				match = [null，選擇器，null];

			}其他{
				匹配= rquickExpr.exec（選擇器）;
			}

			//匹配html或確保沒有為#id指定上下文
			if（match &&（match [1] ||！context））{

				//處理：$（html）-> $（array）
				如果（match [1]）{
					context = jQuery的context instanceof？context [0]：上下文；

					//對於反向兼容，運行腳本的選項為true
					//如果不存在parseHTML，則故意引發錯誤
					jQuery.merge（jQuery.parseHTML（
						匹配[1]，
						context && context.nodeType嗎？context.ownerDocument || 上下文：文檔，
						真正
					））;

					//處理：$（html，props）
					如果（rsingleTag.test（match [1]）&& jQuery.isPlainObject（context））{
						對於（根據上下文匹配）{

							//如果可能，將上下文的屬性稱為方法
							如果（isFunction（this [match]））{
								this [match]（context [match]）;

							// ...，否則設置為屬性
							}其他{
								this.attr（match，context [match]）;
							}
						}
					}

					返回這個

				//處理：$（＃id）
				}其他{
					elem = document.getElementById（match [2]）;

					如果（elem）{

						//將元素直接注入jQuery對象
						this [0] =元素；
						this.length = 1;
					}
					返回這個
				}

			//處理：$（expr，$（...））
			} else if（！context || context.jquery）{
				返回（上下文||根）.find（選擇器）;

			//處理：$（expr，context）
			//（等效於：$（context）.find（expr）
			}其他{
				返回this.constructor（context）.find（選擇器）;
			}

		//處理：$（DOMElement）
		} else if（selector.nodeType）{
			this [0] =選擇器；
			this.length = 1;
			返回這個

		//處理：$（function）
		//準備好文檔的快捷方式
		}否則，如果（isFunction（選擇器））{
			返回root.ready！==未定義？
				root.ready（選擇器）：

				//如果沒有就緒則立即執行
				選擇器（jQuery）;
		}

		返回jQuery.makeArray（選擇器，this）;
	};

//為init函數提供jQuery原型以供以後實例化
init.prototype = jQuery.fn;

//初始化中央參考
rootjQuery = jQuery（document）;


var rparentsprev = / ^（?: parents | prev（？：Until | All））/，

	//從唯一集開始時保證產生唯一集的方法
	guaranteeUnique = {
		孩子們：是的，
		內容：真實，
		下一個：是的，
		上一個：正確
	};

jQuery.fn.extend（{
	具有：function（target）{
		var target = jQuery（target，this），
			l = targets.length;

		返回this.filter（function（）{
			var i = 0;
			對於（; i <l; i ++）{
				如果（jQuery.contains（this，targets [i]））{
					返回true；
				}
			}
		}）；
	}，

	最接近：功能（選擇器，上下文）{
		var cur，
			我= 0，
			l =這個長度
			匹配= []，
			目標=類型選擇器！==“字符串” && jQuery（選擇器）;

		//位置選擇器永遠不匹配，因為沒有_selection_上下文
		如果（！rneedsContext.test（選擇器））{
			對於（; i <l; i ++）{
				for（cur = this [i]; cur && cur！== context; cur = cur.parentNode）{

					//始終跳過文檔片段
					如果（cur.nodeType <11 &&（目標？
						targets.index（cur）> -1：

						//不要將非元素傳遞給Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector（cur，選擇器）））{

						match.push（cur）;
						打破;
					}
				}
			}
		}

		返回this.pushStack（matched.length> 1？jQuery.uniqueSort（matched）：matched）;
	}，

	//確定元素在集合中的位置
	索引：function（elem）{

		//沒有參數，在父級中返回索引
		如果（！elem）{
			返回（this [0] && this [0] .parentNode）嗎？this.first（）。prevAll（）。length：-1;
		}

		//選擇器中的索引
		如果（typeof elem ===“ string”）{
			返回indexOf.call（jQuery（elem），this [0]）;
		}

		//找到所需元素的位置
		返回indexOf.call（此，

			//如果接收到jQuery對象，則使用第一個元素
			elem.jquery？elem [0]：elem
		）;
	}，

	添加：function（選擇器，上下文）{
		返回this.pushStack（
			jQuery.uniqueSort（
				jQuery.merge（this.get（），jQuery（選擇器，上下文））
			）
		）;
	}，

	addBack：函數（選擇器）{
		返回this.add（選擇器== null？
			this.prevObject：this.prevObject.filter（選擇器）
		）;
	}
}）；

函數同級（cur，dir）{
	while（（cur = cur [dir]）&& cur.nodeType！== 1）{}
	回國
}

jQuery.each（{
	父級：function（elem）{
		var parent = elem.parentNode;
		返回parent && parent.nodeType！== 11嗎？父級：null；
	}，
	父母：function（elem）{
		return dir（elem，“ parentNode”）;
	}，
	ParentUntil：function（elem，_i，直到）{
		返回dir（elem，“ parentNode”，直到）;
	}，
	下一個：function（elem）{
		return sibling（elem，“ nextSibling”）;
	}，
	上一條：函數（elem）{
		return sibling（elem，“ previousSibling”）;
	}，
	nextAll：function（elem）{
		return dir（elem，“ nextSibling”）;
	}，
	prevAll：function（elem）{
		return dir（elem，“ previousSibling”）;
	}，
	nextUntil：function（elem，_i，直到）{
		返回dir（elem，“ nextSibling”，直到）;
	}，
	prevUntil：function（elem，_i，直到）{
		返回dir（elem，“ previousSibling”，直到）;
	}，
	兄弟姐妹：function（elem）{
		return siblings（（elem.parentNode || {}）.firstChild，elem）;
	}，
	子代：function（elem）{
		返回兄弟姐妹（elem.firstChild）;
	}，
	內容：function（elem）{
		如果（elem.contentDocument！= null &&

			//支持：IE 11+
			//沒有data屬性的<object>元素有一個對象
			//帶有null原型的contentDocument。
			getProto（elem.contentDocument））{

			返回elem.contentDocument;
		}

		//支持：僅IE 9-11，僅iOS 7，僅<= 4.3的Android瀏覽器
		//在瀏覽器中將模板元素視為常規元素
		//不支持。
		if（nodeName（elem，“ template”））{
			elem = elem.content || 元素
		}

		返回jQuery.merge（[]，elem.childNodes）;
	}
}，function（name，fn）{
	jQuery.fn [名稱] =函數（直到選擇器）{
		var matched = jQuery.map（this，fn，until）;

		如果（name.slice（-5）！==“直到”）{
			選擇器=直到;
		}

		if（選擇器&& typeof選擇器===“ string”）{
			匹配= jQuery.filter（選擇器，匹配）;
		}

		如果（this.length> 1）{

			//刪除重複項
			如果（！guaranteedUnique [name]）{
				jQuery.uniqueSort（匹配）;
			}

			//父母*和前導數的逆序
			如果（rparentsprev.test（name））{
				match.reverse（）;
			}
		}

		返回this.pushStack（matched）;
	};
}）；
var rnothtmlwhite =（/ [^ \ x20 \ t \ r \ n \ f] + / g）;



//將字符串格式的選項轉換為對象格式的選項
函數createOptions（options）{
	var object = {};
	jQuery.each（options.match（rnothtmlwhite）|| []，function（_，flag）{
		object [標誌] = true;
	}）；
	返回對象
}

/ *
 *使用以下參數創建回調列表：
 *
 * options：以空格分隔的選項的可選列表，這些選項將更改
 *回調列表的行為或更傳統的選項對象
 *
 *默認情況下，回調列表的作用類似於事件回調列表，並且可以
 *“被解僱”多次。
 *
 *可能的選項：
 *
 *一次：將確保回調列表只能被觸發一次（例如延遲）
 *
 *內存：將跟踪先前的值並調用添加的任何回調
 *在列表立即被觸發後，帶有最新的“已存儲”
 *值（如延期）
 *
 *唯一：將確保回調只能添加一次（列表中沒有重複項）
 *
 * stopOnFalse：回調返回false時中斷調用
 *
 * /
jQuery.Callbacks = function（options）{

	//如果需要，將選項從字符串格式轉換為對象格式
	//（我們先簽入緩存）
	options = typeof options ===“字符串”？
		createOptions（options）：
		jQuery.extend（{}，options）;

	var //標記以了解當前是否在觸發列表
		射擊

		//難忘列表的最後觸發值
		記憶，

		//標記以知道列表是否已經被觸發
		被解僱

		//標記以防止觸發
		鎖定，

		//實際的回調列表
		列表= []，

		//可重複列表的執行數據隊列
		隊列= []，

		//當前觸發的回調的索引（根據需要通過添加/刪除進行修改）
		firingIndex = -1，

		//觸發回調
		火= function（）{

			//強制執行一次射擊
			鎖定=鎖定|| options.once;

			//為所有未決的執行執行回調，
			//尊重firingIndex覆蓋和運行時更改
			發射=發射=真;
			for（; queue.length; firingIndex = -1）{
				內存= queue.shift（）;
				而（++ firingIndex <list.length）{

					//運行回調並檢查是否提前終止
					if（list [firingIndex] .apply（memory [0]，memory [1]）===假&&
						options.stopOnFalse）{

						//跳到最後並忘記數據，因此.add不會重新觸發
						firingIndex = list.length;
						記憶=假;
					}
				}
			}

			//如果處理完畢，則忽略數據
			如果（！options.memory）{
				記憶=假;
			}

			開火=假;

			//如果我們完成射擊就清理
			如果（鎖定）{

				//如果我們有以後添加調用的數據，請保留一個空列表
				如果（記憶）{
					列表= [];

				//否則，將花費此對象
				}其他{
					list =“”;
				}
			}
		}，

		//實際的回調對象
		自我= {

			//向列表添加回調或回調集合
			添加：function（）{
				如果（清單）{

					//如果我們有過去運行的記憶，則應在添加後觸發
					if（memory &&！firing）{
						firingIndex = list.length-1;
						queue.push（memory）;
					}

					（function add（args）{
						jQuery.each（args，function（_，arg）{
							如果（isFunction（arg））{
								if（！options.unique ||！self.has（arg））{
									list.push（arg）;
								}
							} else if（arg && arg.length && toType（arg）！==“ string”）{

								//遞歸檢查
								add（arg）;
							}
						}）；
					}）（arguments）;

					if（memory &&！firing）{
						火（）;
					}
				}
				返回這個
			}，

			//從列表中刪除回調
			刪除：function（）{
				jQuery.each（arguments，function（_，arg）{
					var index;
					while（（（index = jQuery.inArray（arg，list，index））> -1）{
						list.splice（index，1）;

						//處理觸發索引
						如果（index <= firingIndex）{
							firingIndex--;
						}
					}
				}）；
				返回這個
			}，

			//檢查給定的回調是否在列表中。
			//如果未提供任何參數，則返回list是否附加了回調。
			具有：function（fn）{
				返回fn？
					jQuery.inArray（fn，list）> -1：
					list.length> 0;
			}，

			//從列表中刪除所有回調
			空：function（）{
				如果（清單）{
					列表= [];
				}
				返回這個
			}，

			//禁用.fire和.add
			//中止所有當前/待執行
			//清除所有回調和值
			禁用：function（）{
				鎖定=隊列= [];
				list = memory =“”;
				返回這個
			}，
			禁用：function（）{
				返回！列表;
			}，

			//禁用.fire
			//除非我們有內存，否則也請禁用.add（因為它將無效）
			//中止所有未決的執行
			鎖定：function（）{
				鎖定=隊列= [];
				if（！memory &&！firing）{
					list = memory =“”;
				}
				返回這個
			}，
			鎖定：function（）{
				返回!!鎖定;
			}，

			//使用給定的上下文和參數調用所有回調
			fireWith：function（context，args）{
				如果（！已鎖定）{
					args = args || [];
					args = [上下文，args.slice？args.slice（）：args];
					queue.push（args）;
					如果（！firing）{
						火（）;
					}
				}
				返回這個
			}，

			//使用給定的參數調用所有回調
			火：function（）{
				self.fireWith（this，arguments）;
				返回這個
			}，

			//知道回調函數是否已經被調用了至少一次
			觸發：function（）{
				返回!!解僱;
			}
		};

	返回自我
};


函數Identity（v）{
	返回v;
}
功能Thrower（ex）{
	扔前
}

函數takeValue（值，解析，拒絕，noValue）{
	var方法;

	嘗試{

		//首先檢查諾言方面的特權同步行為
		if（value && isFunction（（method = value.promise）））{
			method.call（value）.done（resolve）.fail（拒絕）;

		//其他罐頭
		} else if（value && isFunction（（method = value.then）））{
			method.call（值，解析，拒絕）;

		//其他非主題
		}其他{

			//通過讓Array＃slice將布爾值`noValue`強制轉換為整數來控制`resolve`參數：
			// * false：[value] .slice（0）=> resolve（value）
			// * true：[value] .slice（1）=> resolve（）
			resolve.apply（未定義，[value] .slice（noValue））;
		}

	//對於Promises / A +，將異常轉換為拒絕
	//由於jQuery.when不解包ableables，因此我們可以跳過其中出現的多餘檢查
	// Deferred＃then有條件地抑制拒絕。
	} catch（value）{

		//支持：僅Android 4.0
		//不使用.call / .apply調用的嚴格模式函數將獲取全局對像上下文
		reject.apply（undefined，[value]）;
	}
}

jQuery.extend（{

	遞延：function（func）{
		var元組= [

				//操作，添加偵聽器，回調，
				// ...。然後處理程序，參數索引，[最終狀態]
				[“ notify”，“ progress”，jQuery.Callbacks（“ memory”），
					jQuery.Callbacks（“ memory”），2]，
				[“ resolve”，“ done”，jQuery.Callbacks（“一次內存”），
					jQuery.Callbacks（“一次存儲”），0，“已解決”]，
				[“拒絕”，“失敗”，jQuery.Callbacks（“一次內存”），
					jQuery.Callbacks（“一次存儲”），1，“已拒絕”]
			]，
			狀態=“待處理”，
			承諾= {
				狀態：function（）{
					返回狀態；
				}，
				總是：function（）{
					deferred.done（arguments）.fail（arguments）;
					返回這個
				}，
				“ catch”：function（fn）{
					返回promise.then（null，fn）;
				}，

				//保持管道反向兼容
				管道：函數（/ * fnDone，fnFail，fnProgress * /）{
					var fns = arguments;

					返回jQuery.Deferred（function（newDefer）{
						jQuery.each（元組，函數（_i，元組）{

							//將元組（進度，完成，失敗）映射到參數（完成，失敗，進度）
							var fn = isFunction（fns [tuple [4]]）&& fns [tuple [4]];

							// deferred.progress（function（）{綁定到newDefer或newDefer.notify}）
							// deferred.done（function（）{綁定到newDefer或newDefer.resolve}）
							// deferred.fail（function（）{綁定到newDefer或newDefer.reject}）
							deferred [元組[1]]（function（）{
								var return = fn && fn.apply（this，arguments）;
								if（返回&& isFunction（return.promise））{
									返回.promise（）
										.progress（newDefer.notify）
										.done（newDefer.resolve）
										.fail（newDefer.reject）;
								}其他{
									newDefer [元組[0] +“ With”]（
										這個，
										fn？[返回]：參數
									）;
								}
							}）；
						}）；
						fns = null;
					} ）。諾言（）;
				}，
				然後：function（onFulfilled，onRejected，onProgress）{
					var maxDepth = 0;
					函數resolve（深度，延遲，處理程序，特殊）{
						return function（）{
							var that = this，
								args =參數，
								maythrow = function（）{
									var返回，然後；

									//支持：Promise / A +第2.3.3.3.3節
									// https://promisesaplus.com/#point-59
									//忽略雙分辨率嘗試
									如果（depth <maxDepth）{
										返回;
									}

									返回= handler.apply（that，args）;

									//支持：Promise / A +第2.3.1節
									// https://promisesaplus.com/#point-48
									if（返回=== deferred.promise（））{
										拋出新的TypeError（“ Thenable self-resolution”）;
									}

									//支持：Promise / A +第2.3.3.1、3.5節
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									//僅檢索一次“ then”
									然後=返回&&

										//支持：Promise / A +第2.3.4節
										// https://promisesaplus.com/#point-64
										//僅檢查對象和函數的可擴展性
										（typeof返回===“對象” ||
											返回的typeof ===“ function”）&&
										然後返回

									//處理返回的thenable
									如果（isFunction（then））{

										//特殊處理器（通知）只需等待解析
										如果（特殊）{
											然後。
												回到，
												resolve（maxDepth，deferred，Identity，special），
												resolve（maxDepth，deferred，Thower，special）
											）;

										//普通處理器（解析）也可以進行
										}其他{

											// ...而忽略較舊的分辨率值
											maxDepth ++;

											然後。
												回到，
												resolve（maxDepth，deferred，Identity，special），
												resolve（maxDepth，deferred，Thrower，special），
												resolve（maxDepth，deferred，Identity，
													deferred.notifyWith）
											）;
										}

									//處理所有其他返回值
									}其他{

										//只有替代處理程序傳遞上下文
										//和多個值（非規範行為）
										如果（處理程序！==身份）{
											那=未定義;
											args = [返回];
										}

										//處理值
										//默認過程已解決
										（特殊|| deferred.resolveWith）（that，args）;
									}
								}，

								//僅普通處理器（解析）捕獲並拒絕異常
								過程=特殊？
									mayThrow：
									function（）{
										嘗試{
											maythrow（）;
										}抓住（e）{

											如果（jQuery.Deferred.exceptionHook）{
												jQuery.Deferred.exceptionHook（e，
													process.stackTrace）;
											}

											//支持：Promise / A +第2.3.3.3.4.1節
											// https://promisesaplus.com/#point-61
											//忽略解析後異常
											如果（深度+ 1> = maxDepth）{

												//只有替代處理程序傳遞上下文
												//和多個值（非規範行為）
												if（handler！== Thrower）{
													那=未定義;
													args = [e];
												}

												deferred.rejectWith（that，args）;
											}
										}
									};

							//支持：Promise / A +第2.3.3.3.1節
							// https://promisesaplus.com/#point-57
							//立即重新解決Promise，以躲避來自
							//後續錯誤
							如果（深度）{
								處理（）;
							}其他{

								//發生異常時，調用一個可選的鉤子來記錄堆棧
								//因為執行異步時會丟失
								如果（jQuery.Deferred.getStackHook）{
									process.stackTrace = jQuery.Deferred.getStackHook（）;
								}
								window.setTimeout（process）;
							}
						};
					}

					返回jQuery.Deferred（function（newDefer）{

						// progress_handlers.add（...）
						元組[0] [3] .add（
							解決（
								0，
								newDefer，
								isFunction（onProgress）嗎？
									onProgress：
									身份，
								newDefer.notifyWith
							）
						）;

						//fulfilled_handlers.add（...）
						元組[1] [3] .add（
							解決（
								0，
								newDefer，
								isFunction（onFulfilled）嗎？
									onFulfilled：
									身分識別
							）
						）;

						// rejected_handlers.add（...）
						元組[2] [3] .add（
							解決（
								0，
								newDefer，
								isFunction（onRejected）嗎？
									onRejected：
									投擲者
							）
						）;
					} ）。諾言（）;
				}，

				//為此延期承諾
				//如果提供了obj，則將promise方面添加到該對象
				許諾：function（obj）{
					返回obj！= null？jQuery.extend（obj，promise）：許諾;
				}
			}，
			推遲= {};

		//添加特定於列表的方法
		jQuery.each（元組，函數（i，元組）{
			var list = tuple [2]，
				stateString =元組[5];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise [元組[1]] = list.add;

			//處理狀態
			如果（stateString）{
				list.add（
					function（）{

						//狀態=“已解決”（即已實現）
						//狀態=“被拒絕”
						state = stateString;
					}，

					// rejected_callbacks.disable
					// enableded_callbacks.disable
					元組[3-i] [2] .disable，

					// rejected_handlers.disable
					//enableded_handlers.disable
					元組[3-i] [3] .disable，

					// progress_callbacks.lock
					元組[0] [2] .lock，

					// progress_handlers.lock
					元組[0] [3] .lock
				）;
			}

			// progress_handlers.fire
			//filled_handlers.fire
			// rejected_handlers.fire
			list.add（tuple [3] .fire）;

			// deferred.notify = function（）{deferred.notifyWith（...）}
			// deferred.resolve = function（）{deferred.resolveWith（...）}
			// deferred.reject = function（）{deferred.rejectWith（...）}
			deferred [元組[0]] = function（）{
				deferred [tuple [0] +“ With”]（this === deferred？undefined：this，arguments）;
				返回這個
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred [tuple [0] +“ With”] = list.fireWith;
		}）；

		//兌現承諾
		promise.promise（deferred）;

		//調用給定的func（如果有）
		如果（func）{
			func.call（deferred，deferred）;
		}

		// 全部做完！
		返回延期；
	}，

	//延遲的助手
	時間：function（singleValue）{
		變種

			//未完成的下屬的數量
			剩餘= arguments.length，

			//未處理參數的計數
			我=剩餘，

			//下屬履行數據
			resolveContexts = Array（i），
			resolveValues = slice.call（arguments），

			//延遲的主人
			master = jQuery.Deferred（），

			//下級回調工廠
			updateFunc = function（i）{
				返回函數（值）{
					resolveContexts [i] = this;
					resolveValues [i] = arguments.length> 1嗎？slice.call（arguments）：值;
					如果（！（--remaining））{
						master.resolveWith（resolveContexts，resolveValues）;
					}
				};
			};

		//採用像Promise.resolve這樣的單參數和空參數
		如果（剩餘<= 1）{
			takeValue（singleValue，master.done（updateFunc（i））.resolve，master.reject，
				！remaining）;

			//使用.then（）來解開次級砲彈（參見gh-3000）
			如果（master.state（）===“待定” ||
				isFunction（resolveValues [i] && resolveValues [i] .then））{

				返回master.then（）;
			}
		}

		//像Promise.all數組元素一樣聚合多個參數
		當我 -  ） {
			採用值（resolveValues [i]，updateFunc（i），master.reject）;
		}

		返回master.promise（）;
	}
}）；


//這些通常表示開發人員在開發過程中犯了錯誤，
//盡快警告他們，而不是默認將其吞下。
var rerrorNames = / ^（Eval | Internal | Range | Reference | Syntax | Type | URI）Error $ /;

jQuery.Deferred.exceptionHook = function（error，stack）{

	//支持：僅IE 8-9
	//打開開發工具時控制台存在，這可以隨時發生
	如果（window.console && window.console.warn &&錯誤&& rerrorNames.test（error.name））{
		window.console.warn（“ jQuery.Deferred exception：” + error.message，error.stack，stack）;
	}
};




jQuery.readyException = function（error）{
	window.setTimeout（function（）{
		拋出錯誤；
	}）；
};




//在DOM就緒時使用的延遲
var readyList = jQuery.Deferred（）;

jQuery.fn.ready = function（fn）{

	readyList
		.then（fn）

		//將jQuery.readyException包裝在一個函數中，以便查找
		//發生在錯誤處理而非回調時
		//註冊。
		.catch（function（error）{
			jQuery.readyException（error）;
		}）；

	返回這個
};

jQuery.extend（{

	//可以使用DOM嗎？設置為true。
	isReady：否，

	//一個計數器，以跟踪之前要等待多少個項目
	//準備事件觸發。參見＃6781
	readyWait：1，

	// DOM準備就緒時處理
	準備好了：function（wait）{

		//如果有未決的保留或我們已經準備好中止
		if（wait === true？--jQuery.readyWait：jQuery.isReady）{
			返回;
		}

		//記住DOM已經準備好了
		jQuery.isReady = true;

		//如果觸發了普通的DOM Ready事件，則遞減並在需要時等待
		if（等待！== true && --jQuery.readyWait> 0）{
			返回;
		}

		//如果綁定了函數，則執行
		readyList.resolveWith（document，[jQuery]）;
	}
}）；

jQuery.ready.then = readyList.then;

//就緒事件處理程序和自我清除方法
函數completed（）{
	document.removeEventListener（“ DOMContentLoaded”，已完成）;
	window.removeEventListener（“ load”，已完成）;
	jQuery.ready（）;
}

//捕獲調用$（document）.ready（）的情況
//瀏覽器事件發生後。
//支持：僅IE <= 9-10
//較舊的IE有時會過早發出“互動”信號
如果（document.readyState ===“完成” ||
	（document.readyState！==“正在加載” &&！document.documentElement.doScroll））{

	//異步處理，以使腳本有機會延遲準備工作
	window.setTimeout（jQuery.ready）;

}其他{

	//使用方便的事件回調
	document.addEventListener（“ DOMContentLoaded”，已完成）;

	//回退到window.onload，它將始終有效
	window.addEventListener（“ load”，已完成）;
}




//用來獲取和設置集合值的多功能方法
//如果值是一個函數，則可以選擇執行
var access = function（elems，fn，key，value，chainable，emptyGet，raw）{
	var i = 0，
		len = elems.length，
		批量=鍵==空;

	//設置許多值
	if（toType（key）===“ object”）{
		chainable = true;
		對於（我在鍵中）{
			access（elems，fn，i，key [i]，true，emptyGet，raw）;
		}

	//設置一個值
	} else if（value！== undefined）{
		chainable = true;

		如果（！isFunction（value））{
			raw = true;
		}

		如果（批量）{

			//批量操作針對整個集合
			如果（原始）{
				fn.call（elems，value）;
				fn = null;

			// ...執行功能值時除外
			}其他{
				體積= fn;
				fn = function（elem，_key，value）{
					返回bulk.call（jQuery（elem），value）;
				};
			}
		}

		如果（fn）{
			為（; i <len; i ++）{
				fn（
					elems [i]，密鑰，原始嗎？
					值：
					value.call（elems [i]，i，fn（elems [i]，key））
				）;
			}
		}
	}

	如果（可鏈接）{
		返回元素
	}

	//獲取
	如果（批量）{
		返回fn.call（elems）;
	}

	返回len嗎？fn（elems [0]，key）：emptyGet;
};


//匹配虛線字符串以進行駝色
var rmsPrefix = / ^-ms- /，
	rdashAlpha = /-（[[az]）/ g;

//由camelCase用作replace（）的回調
函數fcamelCase（_all，letter）{
	返回letter.toUpperCase（）;
}

//將破折號轉換為camelCase; 由CSS和數據模塊使用
//支持：IE <= 9-11，Edge 12-15
// Microsoft忘記了使用其供應商前綴（＃9572）
函數camelCase（string）{
	返回string.replace（rmsPrefix，“ ms-”）.replace（rdashAlpha，fcamelCase）;
}
var acceptData = function（owner）{

	//僅接受：
	//-節點
	//-Node.ELEMENT_NODE
	//-Node.DOCUMENT_NODE
	//-對象
	// - 任何
	返回owner.nodeType === 1 || owner.nodeType === 9 || ！（+ owner.nodeType）;
};




函數Data（）{
	this.expando = jQuery.expando + Data.uid ++;
}

Data.uid = 1;

Data.prototype = {

	快取：function（owner）{

		//檢查所有者對像是否已經具有緩存
		var value = owner [this.expando];

		//如果沒有，請創建一個
		如果（！value）{
			值= {};

			//在現代瀏覽器中，我們可以接受非元素節點的數據，
			//但我們不應該看到＃8335。
			//始終返回一個空對象。
			如果（acceptData（owner））{

				//如果它是一個不太可能被字符串化或循環的節點
				//使用普通分配
				如果（owner.nodeType）{
					owner [this.expando] =值；

				//否則將其保護在不可枚舉的屬性中
				// configurable必須為true以允許該屬性為
				//刪除數據時刪除
				}其他{
					Object.defineProperty（所有者，this.expando，{
						價值：價值，
						可配置：true
					}）；
				}
			}
		}

		返回值
	}，
	設置：功能（所有者，數據，值）{
		var prop，
			緩存= this.cache（owner）;

		//句柄：[所有者，鍵，值]參數
		//始終使用camelCase鍵（gh-2257）
		if（typeof data ===“ string”）{
			cache [camelCase（data）] =值；

		//句柄：[所有者，{屬性}] args
		}其他{

			//將屬性一一複製到緩存對象
			為（數據中的支持）{
				cache [camelCase（prop）] = data [prop];
			}
		}
		返回緩存；
	}，
	get：function（owner，key）{
		返回鍵===未定義？
			this.cache（owner）：

			//始終使用camelCase鍵（gh-2257）
			owner [this.expando] && owner [this.expando] [camelCase（key）];
	}，
	訪問：function（owner，key，value）{

		//如果發生以下情況之一：
		//
		// 1.未指定密鑰
		// 2.指定了字符串鍵，但未提供值
		//
		//採用“讀取”路徑，並允許get方法確定
		//要返回的值分別為：
		//
		// 1.整個緩存對象
		// 2.密鑰中存儲的數據
		//
		如果（鍵===未定義||
				（（key && typeof key ===“ string”）&& value === undefined））{

			返回this.get（owner，key）;
		}

		//如果鍵不是字符串，或者不是鍵和值
		//通過以下任一方式指定，設置或擴展（現有對象）：
		//
		// 1.屬性對象
		// 2.鍵和值
		//
		this.set（owner，key，value）;

		//由於“設置”路徑可以有兩個可能的入口點
		//根據所採用的路徑返回期望的數據[*]
		返回值！==未定義？值：鍵；
	}，
	刪除：function（owner，key）{
		var i，
			緩存=所有者[this.expando];

		如果（緩存===未定義）{
			返回;
		}

		如果（鍵！==未定義）{

			//支持鍵的數組或空格分隔的字符串
			如果（Array.isArray（key））{

				//如果key是一個鍵數組...
				//我們總是設置camelCase鍵，因此將其刪除。
				鍵= key.map（camelCase）;
			}其他{
				鍵= camelCase（鍵）;

				//如果存在帶空格的鍵，請使用它。
				//否則，通過匹配非空白來創建數組
				鍵=鍵在緩存中？
					[關鍵]：
					（key.match（rnothtmlwhite）|| []）;
			}

			i = key.length;

			當我 -  ） {
				刪除緩存[key [i]];
			}
		}

		//如果沒有更多數據，請刪除Expando
		if（key === undefined || jQuery.isEmptyObject（cache））{

			//支持：Chrome <= 35-45
			//刪除屬性時Webkit和Blink性能下降
			//來自DOM節點，因此改為設置為undefined
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607（受錯誤限制）
			如果（owner.nodeType）{
				owner [this.expando] =未定義；
			}其他{
				刪除所有者[this.expando];
			}
		}
	}，
	hasData：function（owner）{
		var cache = owner [this.expando];
		返回緩存！==未定義&&！jQuery.isEmptyObject（cache）;
	}
};
var dataPriv = new Data（）;

var dataUser = new Data（）;



//實施摘要
//
// 1.通過1.9.x分支加強API表面和語義兼容性
// 2.通過減少存儲量來提高模塊的可維護性
//單一機制的路徑。
// 3.使用相同的單一機制來支持“私有”和“用戶”數據。
// 4. 4. _Never_將“私有”數據公開給用戶代碼（TODO：Drop _data，_removeData）
// 5.避免公開用戶對象的實現細節（例如，expando屬性）
// 6.為在2014年升級到WeakMap提供清晰的途徑

var rbrace = / ^（？：\ {[\ w \ W] * \} | \ [[\ w \ W] * \]）$ /，
	rmultiDash = / [AZ] / g;

函數getData（data）{
	如果（data ===“ true”）{
		返回true；
	}

	if（data ===“ false”）{
		返回false；
	}

	if（data ===“ null”）{
		返回null;
	}

	//僅在不更改字符串的情況下才轉換為數字
	如果（data === + data +“”）{
		返回+數據;
	}

	如果（rbrace.test（data））{
		返回JSON.parse（data）;
	}

	返回數據；
}

函數dataAttr（elem，key，data）{
	var name;

	//如果內部未找到任何內容，請嘗試獲取任何內容
	//來自HTML5 data- *屬性的數據
	if（data === undefined && elem.nodeType === 1）{
		名稱=“數據-” + key.replace（rmultiDash，“-$＆”）.toLowerCase（）;
		數據= elem.getAttribute（name）;

		if（typeof data ===“ string”）{
			嘗試{
				數據= getData（數據）;
			}抓住（e）{}

			//確保我們設置了數據，以便以後不會更改
			dataUser.set（elem，key，data）;
		}其他{
			數據=未定義;
		}
	}
	返回數據；
}

jQuery.extend（{
	hasData：function（elem）{
		返回dataUser.hasData（elem）|| dataPriv.hasData（elem）;
	}，

	數據：function（elem，name，data）{
		返回dataUser.access（elem，name，data）;
	}，

	removeData：function（elem，name）{
		dataUser.remove（elem，name）;
	}，

	// TODO：現在，所有對_data和_removeData的調用已被替換
	//通過直接調用dataPriv方法，可以棄用這些方法。
	_data：function（elem，name，data）{
		返回dataPriv.access（elem，name，data）;
	}，

	_removeData：function（elem，name）{
		dataPriv.remove（elem，name）;
	}
}）；

jQuery.fn.extend（{
	數據：function（key，value）{
		var i，名稱，數據，
			elem = this [0]，
			attrs = elem && elem.attributes;

		//獲取所有值
		如果（鍵===未定義）{
			如果（this.length）{
				數據= dataUser.get（elem）;

				if（elem.nodeType === 1 &&！dataPriv.get（elem，“ hasDataAttrs”））{
					i = attrs.length;
					當我 -  ） {

						//支持：僅IE 11
						// attrs元素可以為null（＃14894）
						如果（attrs [i]）{
							名稱= attrs [i] .name;
							如果（name.indexOf（“ data-”）=== 0）{
								名稱= camelCase（name.slice（5））;
								dataAttr（elem，name，data [name]）;
							}
						}
					}
					dataPriv.set（elem，“ hasDataAttrs”，true）;
				}
			}

			返回數據；
		}

		//設置多個值
		如果（typeof鍵===“對象”）{
			返回this.each（function（）{
				dataUser.set（this，key）;
			}）；
		}

		返回訪問權限（this，函數（值）{
			var數據；

			//調用jQuery對象（元素匹配）不為空
			//（因此有一個元素出現在this [0]），並且
			//`value`參數不是未定義的。空的jQuery對象
			//將導致elem = this [0]的“未定義”
			//如果嘗試讀取數據緩存，則引發異常。
			如果（elem && value === undefined）{

				//嘗試從緩存中獲取數據
				//密鑰將始終駝峰存儲在數據中
				數據= dataUser.get（elem，key）;
				如果（data！== undefined）{
					返回數據；
				}

				//嘗試“發現”其中的數據
				// HTML5自定義數據-* attrs
				數據= dataAttr（elem，鍵）;
				如果（data！== undefined）{
					返回數據；
				}

				//我們非常努力，但數據不存在。
				返回;
			}

			//設置數據...
			this.each（function（）{

				//我們總是存儲camelCased鍵
				dataUser.set（this，key，value）;
			}）；
		}，null，value，arguments.length> 1，null，true）;
	}，

	removeData：function（key）{
		返回this.each（function（）{
			dataUser.remove（this，key）;
		}）；
	}
}）；


jQuery.extend（{
	：列：function（elem，type，data）{
		var queue;

		如果（elem）{
			類型=（類型||“ fx”）+“隊列”;
			隊列= dataPriv.get（elem，type）;

			//如果只是查找，則通過快速退出來加快出隊
			如果（數據）{
				if（！queue || Array.isArray（data））{
					queue = dataPriv.access（elem，type，jQuery.makeArray（data））;
				}其他{
					queue.push（data）;
				}
			}
			返回隊列|| [];
		}
	}，

	出隊：function（elem，type）{
		類型=類型|| “ fx”;

		var queue = jQuery.queue（elem，type），
			startLength = queue.length，
			fn = queue.shift（），
			鉤子= jQuery._queueHooks（elem，type），
			下一個= function（）{
				jQuery.dequeue（elem，type）;
			};

		//如果fx隊列已出隊，請始終刪除進度標記
		如果（fn ===“進行中”）{
			fn = queue.shift（）;
			startLength--;
		}

		如果（fn）{

			//添加進度標記以防止fx隊列被
			//自動出隊
			if（type ===“ fx”）{
				queue.unshift（“ inprogress”）;
			}

			//清除最後一個隊列停止功能
			刪除hooks.stop;
			fn.call（elem，next，hooks）;
		}

		如果（！startLength && hooks）{
			hooks.empty.fire（）;
		}
	}，

	//不公開-生成一個queueHooks對象，或返回當前對象
	_queueHooks：function（elem，type）{
		var鍵=類型+“ queueHooks”;
		返回dataPriv.get（elem，key）|| dataPriv.access（elem，key，{
			空：jQuery.Callbacks（“一次存儲”）.add（function（）{
				dataPriv.remove（elem，[type +“ queue”，key]）;
			}）
		}）；
	}
}）；

jQuery.fn.extend（{
	隊列：功能（類型，數據）{
		var setter = 2;

		if（typeof type！==“ string”）{
			數據=類型;
			type =“ fx”;
			setter--;
		}

		如果（arguments.length <setter）{
			返回jQuery.queue（this [0]，type）;
		}

		返回數據===未定義？
			這個 ：
			this.each（function（）{
				var queue = jQuery.queue（this，type，data）;

				//確保此隊列的鉤子
				jQuery._queueHooks（this，type）;

				if（type ===“ fx” && queue [0]！==“ inprogress”）{
					jQuery.dequeue（this，type）;
				}
			}）；
	}，
	出隊：function（type）{
		返回this.each（function（）{
			jQuery.dequeue（this，type）;
		}）；
	}，
	clearQueue：function（type）{
		返回this.queue（類型||“ fx”，[]）;
	}，

	//當特定類型的隊列排隊時獲得承諾
	//被清空（fx是默認類型）
	Promise：function（type，obj）{
		var tmp，
			計數= 1，
			defer = jQuery.Deferred（），
			元素=這個，
			我=這個長度
			解析= function（）{
				如果（！（--count））{
					defer.resolveWith（elements，[elements]）;
				}
			};

		if（typeof type！==“ string”）{
			obj =類型；
			類型=未定義;
		}
		類型=類型|| “ fx”;

		當我 -  ） {
			tmp = dataPriv.get（elements [i]，輸入+“ queueHooks”）;
			如果（tmp && tmp.empty）{
				數++;
				tmp.empty.add（resolve）;
			}
		}
		解決（）;
		返回defer.promise（obj）;
	}
}）；
var pnum =（/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/）。

var rcssNum = new RegExp（“ ^（？：（[+-]）= |）（” + pnum +“）（[az％] *）$”，“ i”）;


var cssExpand = [“頂部”，“右側”，“底部”，“左側”];

var documentElement = document.documentElement;



	var isAttached = function（elem）{
			返回jQuery.contains（elem.ownerDocument，elem）;
		}，
		組成= {組成：true};

	//支持：僅IE 9-11 +，Edge 12-18 +，iOS 10.0-10.2
	//盡可能檢查跨陰影DOM邊界的附件（gh-3504）
	//支持：僅iOS 10.0-10.2
	//早期的iOS 10版本支持`attachShadow`，但不支持`getRootNode`，
	//導致錯誤。我們需要檢查`getRootNode`。
	如果（documentElement.getRootNode）{
		isAttached = function（elem）{
			返回jQuery.contains（elem.ownerDocument，elem）||
				elem.getRootNode（組成）=== elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function（elem，el）{

		// isHiddenWithinTree可以從jQuery＃filter函數中調用；
		//在這種情況下，element將是第二個參數
		elem = el || 元素

		//內聯樣式勝過所有
		返回elem.style.display ===“ none” ||
			elem.style.display ===“” &&

			//否則，請檢查計算的樣式
			//支持：Firefox <= 43-45
			//斷開連接的元素可以進行計算顯示：無，因此首先確認elem是
			//在文檔中。
			isAttached（elem）&&

			jQuery.css（elem，“ display”）===“ none”;
	};



函數AdjustCSS（elem，prop，valueParts，tween）{
	var調整，比例，
		maxIterations = 20，
		currentValue =補間？
			function（）{
				返回tween.cur（）;
			}：
			function（）{
				返回jQuery.css（elem，prop，“”）;
			}，
		初始= currentValue（），
		單位= valueParts && valueParts [3] || （jQuery.cssNumber [prop]？“”：“ px”），

		//需要潛在的單位不匹配的起始值計算
		initialInUnit = elem.nodeType &&
			（jQuery.cssNumber [prop] || unit！==“ px” && + initial）&&
			rcssNum.exec（jQuery.css（elem，prop））;

	if（initialInUnit && initialInUnit [3]！== unit）{

		//支持：Firefox <= 54
		//將迭代目標值減半，以防止受到CSS上限的干擾（gh-2144）
		初始=初始/ 2;

		// jQuery.css報告的信任單位
		單位=單位|| initialInUnit [3];

		//從非零起點迭代近似
		initialInUnit = +初始|| 1;

		while（maxIterations--）{

			//評估並更新我們的最佳猜測（將猜測加倍為零）。
			//如果小數位數等於或超過1，則完成操作（使舊*新產品為非正數）。
			jQuery.style（elem，prop，initialInUnit + unit）;
			如果（（1-標度）*（1-（標度= currentValue（）/初始|| 0.5））<= 0）{
				maxIterations = 0;
			}
			initialInUnit = initialInUnit /小數位數；

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style（elem，prop，initialInUnit + unit）;

		//確保稍後更新補間屬性
		valueParts = valueParts || [];
	}

	如果（valueParts）{
		initialInUnit = + initialInUnit || +初始|| 0;

		//如果指定，則應用相對偏移（+ = /-=）
		調整= valueParts [1]？
			initialInUnit +（valueParts [1] + 1）* valueParts [2]：
			+ valueParts [2];
		如果（補間）{
			tween.unit =單位;
			tween.start = initialInUnit;
			tween.end =已調整；
		}
	}
	回報調整；
}


var defaultDisplayMap = {};

函數getDefaultDisplay（elem）{
	var temp，
		doc = elem.ownerDocument，
		nodeName = elem.nodeName，
		display = defaultDisplayMap [nodeName];

	如果（顯示）{
		返回顯示；
	}

	temp = doc.body.appendChild（doc.createElement（nodeName））;
	display = jQuery.css（temp，“ display”）;

	temp.parentNode.removeChild（temp）;

	如果（display ===“ none”）{
		display =“ block”;
	}
	defaultDisplayMap [nodeName] =顯示；

	返回顯示；
}

函數showHide（elements，show）{
	var display，elem，
		值= []，
		索引= 0，
		長度= elements.length;

	//確定需要更改的元素的新顯示值
	for（; index <length; index ++）{
		elem = elements [index];
		如果（！elem.style）{
			繼續;
		}

		顯示= elem.style.display;
		如果（顯示）{

			//由於我們將可見性強加於級聯隱藏的元素上，因此立即（且緩慢）
			//在第一個循環中需要檢查，除非我們有一個非空的顯示值（
			//內聯或即將恢復）
			如果（display ===“ none”）{
				values [index] = dataPriv.get（elem，“ display”）|| 空值;
				如果（！values [index]）{
					elem.style.display =“”;
				}
			}
			如果（elem.style.display ===“” && isHiddenWithinTree（elem））{
				values [index] = getDefaultDisplay（elem）;
			}
		}其他{
			if（display！==“ none”）{
				values [index] =“ none”;

				//記住我們要覆蓋的內容
				dataPriv.set（elem，“ display”，display）;
			}
		}
	}

	//在第二個循環中設置元素的顯示，以避免持續回流
	for（index = 0; index <length; index ++）{
		如果（values [index]！= null）{
			elements [index] .style.display = values [index];
		}
	}

	返回元素；
}

jQuery.fn.extend（{
	顯示：function（）{
		返回showHide（this，true）;
	}，
	隱藏：function（）{
		返回showHide（this）;
	}，
	切換：功能（狀態）{
		if（typeof state ===“ boolean”）{
			返回狀態？this.show（）：this.hide（）;
		}

		返回this.each（function（）{
			如果（isHiddenWithinTree（this））{
				jQuery（this）.show（）;
			}其他{
				jQuery（this）.hide（）;
			}
		}）；
	}
}）；
var rcheckableType =（/ ^（?: checkbox | radio）$ / i）;

var rtagName =（/ <（[az] [^ \ / \ 0> \ x20 \ t \ r \ n \ f] *）/ i）;

var rscriptType =（/ ^ $ | ^ module $ | \ /（?: java | ecma）script / i）;



（function（）{
	var fragment = document.createDocumentFragment（），
		div = fragment.appendChild（document.createElement（“ div”）），
		輸入= document.createElement（“輸入”）;

	//支持：僅Android 4.0-4.3
	//如果設置了名稱，則檢查狀態丟失（＃11217）
	//支持：Windows Web Apps（WWA）
	//對於WWA，“名稱”和“類型”必須使用.setAttribute（＃14901）
	input.setAttribute（“ type”，“ radio”）;
	input.setAttribute（“ checked”，“ checked”）;
	input.setAttribute（“ name”，“ t”）;

	div.a ppendChild（input）;

	//支持：僅Android <= 4.1
	//較舊的WebKit不能正確地在片段中克隆檢查狀態
	support.checkClone = div.cloneNode（true）.cloneNode（true）.lastChild.checked;

	//支持：僅IE <= 11
	//確保正確克隆了textarea（和復選框）defaultValue
	div.innerHTML =“ <textarea> x </ textarea>”;
	support.noCloneChecked = !! div.cloneNode（true）.lastChild.defaultValue;

	//支持：僅IE <= 9
	//當IE <= 9插入<option>標記時，其內容將替換為它們的內容
	//選擇元素。
	div.innerHTML =“ <option> </ option>”;
	support.option = !! div.lastChild;
}）（）;


//我們必須關閉這些標籤以支持XHTML（＃13200）
var wrapMap = {

	// XHTML解析器不會神奇地將元素插入
	//與標記湯解析器相同。所以我們不能縮短
	//省略<tbody>或其他必需元素。
	thead：[1，“ <table>”，“ </ table>”]，
	col：[2，“ <table> <colgroup>”，“ </ colgroup> </ table>”]，
	tr：[2，“ <table> <tbody>”，“ </ tbody> </ table>”]，
	td：[3，“ <table> <tbody> <tr>”，“ </ tr> </ tbody> </ table>”]，

	_default：[0，“”，“”]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

//支持：僅IE <= 9
如果（！support.option）{
	wrapMap.optgroup = wrapMap.option = [1，“ <選擇多個='多個'>”，“ </ select>”];
}


函數getAll（context，tag）{

	//支持：僅IE <= 9-11
	//使用typeof避免在宿主對像上調用零參數方法（＃15151）
	var ret;

	如果（typeof context.getElementsByTagName！==“未定義”）{
		ret = context.getElementsByTagName（tag ||“ *”）;

	} else if（typeof context.querySelectorAll！==“ undefined”）{
		ret = context.querySelectorAll（標籤||“ *”）;

	}其他{
		ret = [];
	}

	if（tag === undefined || tag && nodeName（context，tag））{
		返回jQuery.merge（[context]，ret）;
	}

	返回ret
}


//將腳本標記為已被評估
函數setGlobalEval（elems，refElements）{
	var i = 0，
		l = elems.length;

	對於（; i <l; i ++）{
		dataPriv.set（
			elems [i]，
			“ globalEval”，
			！refElements || dataPriv.get（refElements [i]，“ globalEval”）
		）;
	}
}


var rhtml = / <|＆＃？\ w +; /;

函數buildFragment（元素，上下文，腳本，選擇，忽略）{
	var elem，tmp，標籤，包裝，附加，j，
		片段= context.createDocumentFragment（），
		節點= []，
		我= 0，
		l = elems.length;

	對於（; i <l; i ++）{
		elem = elems [i];

		如果（elem || elem === 0）{

			//直接添加節點
			如果（toType（elem）===“ object”）{

				//支持：僅Android <= 4.0，僅PhantomJS 1
				// push.apply（_，arraylike）拋出古老的WebKit
				jQuery.merge（nodes，elem.nodeType？[elem]：elem）;

			//將非HTML轉換為文本節點
			} else if（！rhtml.test（elem））{
				nodes.push（context.createTextNode（elem））;

			//將html轉換為DOM節點
			}其他{
				tmp = tmp || fragment.appendChild（context.createElement（“ div”））;

				//反序列化標準表示
				tag =（rtagName.exec（elem）|| [“”，“”]）[1] .toLowerCase（）;
				wrap = wrapMap [tag] || wrapMap._default;
				tmp.innerHTML = wrap [1] + jQuery.htmlPrefilter（elem）+ wrap [2];

				//通過包裝下降到正確的內容
				j = wrap [0];
				而（j--）{
					tmp = tmp.lastChild;
				}

				//支持：僅Android <= 4.0，僅PhantomJS 1
				// push.apply（_，arraylike）拋出古老的WebKit
				jQuery.merge（節點，tmp.childNodes）;

				//記住頂層容器
				tmp = fragment.firstChild;

				//確保創建的節點是孤立的（＃12392）
				tmp.textContent =“”;
			}
		}
	}

	//從片段中刪除包裝器
	fragment.textContent =“”;

	i = 0;
	while（（elem =節點[i ++]））{

		//跳過上下文集合中已有的元素（trac-4087）
		if（selection && jQuery.inArray（elem，selection）> -1）{
			如果（忽略）{
				ignore.push（elem）;
			}
			繼續;
		}

		附加= isAttached（elem）;

		//附加到片段
		tmp = getAll（fragment.appendChild（elem），“ script”）;

		//保留腳本評估歷史
		如果（附加）{
			setGlobalEval（tmp）;
		}

		//捕獲可執行文件
		如果（腳本）{
			j = 0;
			while（（elem = tmp [j ++]））{
				如果（rscriptType.test（elem.type ||“”））{
					scripts.push（elem）;
				}
			}
		}
	}

	返回片段；
}


變種
	rkeyEvent = / ^ key /，
	rmouseEvent = / ^（?: mouse | pointer | contextmenu | drag | drop）|單擊/，
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

函數returnTrue（）{
	返回true；
}

函數returnFalse（）{
	返回false；
}

//支持：IE <= 9-11+
// focus（）和blur（）是異步的，除非它們是無操作的。
//因此，當元素已經處於活動狀態時，期望焦點是同步的，
//並在元素尚未激活時模糊同步。
//（在其他受支持的瀏覽器中，焦點和模糊總是同步的，
//這只是定義了我們何時可以依靠它）。
函數ExpectSync（elem，type）{
	return（elem === safeActiveElement（））===（type ===“ focus”）;
}

//支持：僅IE <= 9
//訪問document.activeElement可能會意外拋出
// https://bugs.jquery.com/ticket/13393
函數safeActiveElement（）{
	嘗試{
		返回document.activeElement;
	} catch（err）{}
}

函數on（elem，類型，選擇器，數據，fn，一個）{
	var origFn，類型；

	//類型可以是類型/處理程序的映射
	if（typeof types ===“ object”）{

		//（類型-對象，選擇器，數據）
		if（typeof選擇器！==“ string”）{

			//（types-Object，data）
			數據=數據|| 選擇器
			選擇器=未定義;
		}
		對於（輸入類型）{
			on（elem，類型，選擇器，數據，類型[type]，一個）;
		}
		返回元素
	}

	if（data == null && fn == null）{

		//（類型，fn）
		fn =選擇器；
		數據=選擇器=未定義;
	} else if（fn == null）{
		if（typeof選擇器===“ string”）{

			//（類型，選擇器，fn）
			fn =數據；
			數據=未定義;
		}其他{

			//（類型，數據，fn）
			fn =數據；
			數據=選擇器;
			選擇器=未定義;
		}
	}
	如果（fn === false）{
		fn = returnFalse;
	}否則，如果（！fn）{
		返回元素
	}

	如果（一個=== 1）{
		origFn = fn;
		fn = function（event）{

			//可以使用一個空集，因為事件包含信息
			jQuery（）。off（event）;
			返回origFn.apply（this，arguments）;
		};

		//使用相同的GUID，以便調用者可以使用origFn刪除
		fn.guid = origFn.guid || （origFn.guid = jQuery.guid ++）;
	}
	返回elem.each（function（）{
		jQuery.event.add（this，types，fn，data，選擇器）;
	}）；
}

/ *
 *用於管理事件的幫助程序功能-不屬於公共界面。
 *為Dean Edwards的addEvent庫提供了許多建議。
 * /
jQuery.event = {

	全局：{}，

	添加：function（elem，類型，處理程序，數據，選擇器）{

		var handleObjIn，eventHandle，tmp，
			事件，t，handleObj，
			特殊，處理程序，類型，名稱空間，origType，
			elemData = dataPriv.get（elem）;

		//僅將事件附加到接受數據的對象
		如果（！acceptData（elem））{
			返回;
		}

		//調用者可以傳入自定義數據的對象來代替處理程序
		如果（handler.handler）{
			handleObjIn =處理程序;
			handler = handleObjIn.handler;
			選擇器= handleObjIn.selector;
		}

		//確保無效的選擇器在附加時拋出異常
		//如果elem是非元素節點（例如document），則對documentElement求值
		如果（選擇器）{
			jQuery.find.matchesSelector（documentElement，選擇器）;
		}

		//確保該處理程序具有唯一的ID，以用於以後查找/刪除它
		如果（！handler.guid）{
			handler.guid = jQuery.guid ++;
		}

		//初始化元素的事件結構和主處理程序（如果這是第一個）
		如果（！（events = elemData.events））{
			events = elemData.events = Object.create（null）;
		}
		如果（！（eventHandle = elemData.handle））{
			eventHandle = elemData.handle = function（e）{

				//丟棄jQuery.event.trigger（）的第二個事件
				//當頁面卸載後調用事件時
				返回typeof jQuery！==“未定義” && jQuery.event.triggered！== e.type嗎？
					jQuery.event.dispatch.apply（elem，arguments）：未定義;
			};
		}

		//處理多個事件，並用空格隔開
		類型=（類型||“”）.match（rnothtmlwhite）|| [“”];
		t = types.length;
		而（t--）{
			tmp = rtypenamespace.exec（types [t]）|| [];
			類型= origType = tmp [1];
			名稱空間=（tmp [2] ||“”）.split（“。”）.sort（）;

			// *必須*是一種類型，不能附加僅名稱空間的處理程序
			如果（！type）{
				繼續;
			}

			//如果事件更改了其類型，請對更改後的類型使用特殊的事件處理程序
			特殊= jQuery.event.special [類型] || {};

			//如果定義了選擇器，則確定特殊事件api類型，否則指定類型
			類型=（選擇器？special.delegateType：special.bindType）|| 類型;

			//根據新重置的類型更新特殊
			特殊= jQuery.event.special [類型] || {};

			// handleObj傳遞給所有事件處理程序
			handleObj = jQuery.extend（{
				類型：
				origType：origType，
				數據：數據，
				處理程序：處理程序，
				guid：handler.guid，
				選擇器：選擇器，
				needsContext：選擇器&& jQuery.expr.match.needsContext.test（選擇器），
				名稱空間：namespaces.join（“。”）
			}，handleObjIn）;

			//如果我們是第一個，則初始化事件處理程序隊列
			如果（！（handlers = events [type]））{
				處理程序=事件[類型] = [];
				handlers.delegateCount = 0;

				//如果特殊事件處理程序返回false，則僅使用addEventListener
				如果（！special.setup ||
					special.setup.call（elem，data，名稱空間，eventHandle）=== false）{

					如果（elem.addEventListener）{
						elem.addEventListener（type，eventHandle）;
					}
				}
			}

			如果（special.add）{
				special.add.call（elem，handleObj）;

				如果（！handleObj.handler.guid）{
					handleObj.handler.guid = handler.guid;
				}
			}

			//添加到元素的處理程序列表中，在前面進行委託
			如果（選擇器）{
				handlers.splice（handlers.delegateCount ++，0，handleObj）;
			}其他{
				handlers.push（handleObj）;
			}

			//跟踪曾經使用過的事件，以進行事件優化
			jQuery.event.global [type] = true;
		}

	}，

	//從元素中分離一個事件或一組事件
	刪除：function（elem，類型，處理程序，選擇器，mappedTypes）{

		var j，origCount，tmp，
			事件，t，handleObj，
			特殊，處理程序，類型，名稱空間，origType，
			elemData = dataPriv.hasData（elem）&& dataPriv.get（elem）;

		if（！elemData ||！（events = elemData.events））{
			返回;
		}

		//每個type.namespace類型一次；類型可以省略
		類型=（類型||“”）.match（rnothtmlwhite）|| [“”];
		t = types.length;
		而（t--）{
			tmp = rtypenamespace.exec（types [t]）|| [];
			類型= origType = tmp [1];
			名稱空間=（tmp [2] ||“”）.split（“。”）.sort（）;

			//取消綁定元素的所有事件（在此名稱空間上，如果提供）
			如果（！type）{
				對於（輸入事件）{
					jQuery.event.remove（elem，type + types [t]，handler，選擇器，true）;
				}
				繼續;
			}

			特殊= jQuery.event.special [類型] || {};
			類型=（選擇器？special.delegateType：special.bindType）|| 類型;
			處理程序=事件[類型] || [];
			tmp = tmp [2] &&
				新的RegExp（“（^ | \\。）” + namespaces.join（“ \\。（？：。* \\。|）”）+“（\\。| $）”）;

			//刪除匹配事件
			origCount = j = handlers.length;
			而（j--）{
				handleObj = handlers [j];

				if（（（mappingTypes || origType === handleObj.origType）&&
					（！handler || handler.guid === handleObj.guid）&&
					（！tmp || tmp.test（handleObj.namespace））&&
					（！selector ||選擇器=== handleObj.selector ||
						選擇器===“ **” && handleObj.selector））{
					handlers.splice（j，1）;

					如果（handleObj.selector）{
						handlers.delegateCount--;
					}
					如果（special.remove）{
						special.remove.call（elem，handleObj）;
					}
				}
			}

			//如果我們刪除了某些東西並且不存在其他處理程序，則刪除通用事件處理程序
			//（避免在刪除特殊事件處理程序期間發生無限遞歸的可能性）
			如果（origCount &&！handlers.length）{
				如果（！special.teardown ||
					special.teardown.call（elem，名稱空間，elemData.handle）=== false）{

					jQuery.removeEvent（elem，type，elemData.handle）;
				}

				刪除事件[類型];
			}
		}

		//刪除數據和Expando（如果不再使用）
		如果（jQuery.isEmptyObject（events））{
			dataPriv.remove（elem，“處理事件”）;
		}
	}，

	dispatch：function（nativeEvent）{

		var i，j，ret，matched，handleObj，handlerQueue，
			args = new Array（arguments.length），

			//從本機事件對象創建可寫的jQuery.Event
			事件= jQuery.event.fix（nativeEvent），

			處理程序=（
					dataPriv.get（this，“ events”）|| Object.create（null）
				）[event.type] || []，
			特殊= jQuery.event.special [event.type] || {};

		//使用固定的jQuery.Event而不是（只讀）本機事件
		args [0] =事件；

		對於（i = 1; i <arguments.length; i ++）{
			args [i] = arguments [i];
		}

		event.delegateTarget = this;

		//調用映射類型的preDispatch掛鉤，並在需要時使其保釋
		如果（special.preDispatch && special.preDispatch.call（this，event）=== false）{
			返回;
		}

		//確定處理程序
		handlerQueue = jQuery.event.handlers.call（this，event，handlers）;

		//首先運行委託；他們可能想停止在我們下面傳播
		i = 0;
		while（（匹配= handlerQueue [i ++]）&&！event.isPropagationStopped（））{
			event.currentTarget = match.elem;

			j = 0;
			while（（handleObj = matched.handlers [j ++]）&&
				！event.isImmediatePropagationStopped（））{

				//如果事件是命名空間的，則只有在以下情況下才調用每個處理程序
				//特別是通用的或其名稱空間是事件的超集。
				if（！event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test（handleObj.namespace））{

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret =（（（jQuery.event.special [handleObj.origType] || {}）.handle ||
						handleObj.handler）.apply（matched.elem，args）;

					如果（ret！== undefined）{
						如果（（event.result = ret）===假）{
							event.preventDefault（）;
							event.stopPropagation（）;
						}
					}
				}
			}
		}

		//調用postDispatch掛鉤以獲取映射類型
		如果（special.postDispatch）{
			special.postDispatch.call（this，event）;
		}

		返回event.result;
	}，

	處理程序：function（event，handlers）{
		var i，handleObj，sel，matchedHandlers，matchedSelectors，
			handlerQueue = []，
			proxyCount = handlers.delegateCount，
			cur = event.target;

		//查找委託處理程序
		如果（proxyCount &&

			//支持：IE <= 9
			//黑洞SVG <use>實例樹（trac-13180）
			cur.nodeType &&

			//支持：Firefox <= 42
			//禁止表示非主要指標按鈕的違反規範的點擊（trac-3861）
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			//支持：僅IE 11
			// ...但不是單選輸入的箭頭“單擊”，可以有`button` -1（gh-2343）
			！（event.type ===“ click” && event.button> = 1））{

			for（; cur！== this; cur = cur.parentNode || this）{

				//不要檢查非元素（＃13208）
				//不要處理禁用元素（＃6911，＃8165，＃11382，＃11764）上的點擊
				如果（cur.nodeType === 1 &&！（event.type ===“ click” && cur.disabled === true））{
					matchHandlers = [];
					matchedSelectors = {};
					為（i = 0; i <proxyCount; i ++）{
						handleObj = handlers [i];

						//不要與Object.prototype屬性衝突（＃13203）
						sel = handleObj.selector +“”;

						如果（matchedSelectors [sel] ===未定義）{
							matchedSelectors [sel] = handleObj.needsContext？
								jQuery（sel，this）.index（cur）> -1：
								jQuery.find（sel，this，null，[cur]）.length;
						}
						if（matchedSelectors [sel]）{
							matchingHandlers.push（handleObj）;
						}
					}
					如果（matchedHandlers.length）{
						handlerQueue.push（{elem：cur，handlers：matchedHandlers}）;
					}
				}
			}
		}

		//添加其餘（直接綁定）處理程序
		cur = this;
		如果（委託計數<handlers.length）{
			handlerQueue.push（{elem：cur，handlers：handlers.slice（proxyCount）}）;
		}

		返回handlerQueue;
	}，

	addProp：function（name，hook）{
		Object.defineProperty（jQuery.Event.prototype，name，{
			枚舉：是的，
			可配置：true，

			獲取：isFunction（hook）嗎？
				function（）{
					如果（this.originalEvent）{
							返回鉤子（this.originalEvent）;
					}
				}：
				function（）{
					如果（this.originalEvent）{
							返回this.originalEvent [name];
					}
				}，

			設置：function（value）{
				Object.defineProperty（this，name，{
					枚舉：是的，
					可配置：true，
					可寫：是的，
					價值：價值
				}）；
			}
		}）；
	}，

	修復：function（originalEvent）{
		返回originalEvent [jQuery.expando]嗎？
			originalEvent：
			新的jQuery.Event（originalEvent）;
	}，

	特殊：{
		負載：{

			//防止觸發的image.load事件冒泡到window.load
			noBubble：是
		}，
		點擊：{

			//利用本機事件來確保可檢查輸入的正確狀態
			設置：功能（數據）{

				//為了與_default相互壓縮，請將`this`訪問權限替換為本地var。
				//`|| 數據是無效代碼，旨在僅通過最小化來保留變量。
				var el =此|| 數據;

				//聲明第一個處理程序
				如果（rcheckableType.test（el.type）&&
					el.click && nodeName（el，“ input”））{

					// dataPriv.set（el，“ click”，...）
					槓桿Native（el，“ click”，returnTrue）;
				}

				//返回false以允許在調用方中進行正常處理
				返回false；
			}，
			觸發器：函數（數據）{

				//為了與_default相互壓縮，請將`this`訪問權限替換為本地var。
				//`|| 數據是無效代碼，旨在僅通過最小化來保留變量。
				var el =此|| 數據;

				//在觸發點擊之前強制設置
				如果（rcheckableType.test（el.type）&&
					el.click && nodeName（el，“ input”））{

					DSLNative（el，“ click”）;
				}

				//返回非false以允許正常的事件路徑傳播
				返回true；
			}，

			//為確保跨瀏覽器的一致性，請在鏈接上隱藏本機.click（）
			//如果我們當前在利用本地事件的堆棧中，也要阻止它
			_default：function（event）{
				var target = event.target;
				返回rcheckableType.test（target.type）&&
					target.click && nodeName（target，“ input”）&&
					dataPriv.get（target，“ click”）||
					nodeName（target，“ a”）;
			}
		}，

		beforeunload：{
			postDispatch：function（event）{

				//支持：Firefox 20+
				//如果未設置returnValue字段，則Firefox不會發出警報。
				如果（event.result！==未定義&& event.originalEvent）{
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

//確保存在事件偵聽器，該事件偵聽器可以處理手動觸發的事件
//通過中斷進度，直到響應
//直接觸發的* native *事件，以確保狀態更改具有
//在調用其他偵聽器之前已經發生。
函數functionNative（el，type，ExpectSync）{

	//缺少ExpectSync表示觸發調用，該調用必須通過jQuery.event.add強制設置
	如果（！expectSync）{
		如果（dataPriv.get（el，type）===未定義）{
			jQuery.event.add（el，type，returnTrue）;
		}
		返回;
	}

	//將控制器註冊為所有事件名稱空間的特殊通用處理程序
	dataPriv.set（el，type，false）;
	jQuery.event.add（el，type，{
		命名空間：false，
		處理程序：function（event）{
			var notAsync，結果，
				保存= dataPriv.get（this，type）;

			如果（（event.isTrigger＆1）&& this [type]）{

				//外部綜合.trigger（）ed事件的中斷處理
				//在這種情況下，保存的數據應該為false，但可能是剩餘的捕獲對象
				//來自異步本機處理程序（gh-4350）
				如果（！saved.length）{

					//存儲用於處理內部本機事件的參數
					//始終至少有一個參數（一個事件對象），因此此數組
					//不會與剩餘的捕獲對象混淆。
					保存= slice.call（arguments）;
					dataPriv.set（this，type，saved）;

					//觸發本地事件並捕獲其結果
					//支持：IE <= 9-11+
					// focus（）和blur（）是異步的
					notAsync = ExpectSync（this，type）;
					這種類型 ]（）;
					結果= dataPriv.get（this，type）;
					如果（已保存！==結果|| notAsync）{
						dataPriv.set（this，type，false）;
					}其他{
						結果= {};
					}
					如果（已保存！==結果）{

						//取消外部綜合事件
						event.stopImmediatePropagation（）;
						event.preventDefault（）;
						返回result.value;
					}

				//如果這是帶有冒泡代理的事件的內部綜合事件
				//（焦點或模糊），並假設該替代物已通過觸發
				//本機事件，並防止此事件再次發生。
				//從技術上講，這會導致錯誤的wrt到`.trigger（）`（其中
				//冒泡代理會在非冒泡基數之後傳播*），但這似乎
				//比複製差。
				} else if（（（jQuery.event.special [type] || {}）.delegateType）{
					event.stopPropagation（）;
				}

			//如果這是上面觸發的本機事件，則現在一切正常
			//使用原始參數觸發內部合成事件
			}否則，如果（saved.length）{

				// ...並捕獲結果
				dataPriv.set（this，type，{
					值：jQuery.event.trigger（

						//支持：IE <= 9-11+
						//擴展原型以重置上述stopImmediatePropagation（）
						jQuery.extend（saved [0]，jQuery.Event.prototype），
						save.slice（1），
						這個
					）
				}）；

				//中止本機事件
				event.stopImmediatePropagation（）;
			}
		}
	}）；
}

jQuery.removeEvent = function（elem，type，handle）{

	//普通對象需要此“ if”
	如果（elem.removeEventListener）{
		elem.removeEventListener（type，handle）;
	}
};

jQuery.Event = function（src，props）{

	//允許不帶'new'關鍵字的實例化
	if（！（此jQuery.Event實例））{
		返回新的jQuery.Event（src，props）;
	}

	//事件對象
	如果（src && src.type）{
		this.originalEvent = src;
		this.type = src.type;

		//使文檔冒泡的事件可能已標記為已阻止
		//由處理程序從樹下放下；反映正確的值。
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented ===未定義&&

				//支持：僅Android <= 2.3
				src.returnValue === false？
			returnTrue：
			returnFalse;

		//創建目標屬性
		//支持：僅Safari <= 6-7
		//目標不應是文本節點（＃504，＃13143）
		this.target =（src.target && src.target.nodeType === 3）嗎？
			src.target.parentNode：
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// 事件類型
	}其他{
		this.type = src;
	}

	//將明確提供的屬性放在事件對像上
	如果（道具）{
		jQuery.extend（this，props）;
	}

	//如果傳入事件沒有時間戳，則創建一個時間戳
	this.timeStamp = src && src.timeStamp || Date.now（）;

	//將其標記為固定
	this [jQuery.expando] = true;
};

// jQuery.Event基於ECMAScript語言綁定指定的DOM3事件
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	構造函數：jQuery.Event，
	isDefaultPrevented：returnFalse，
	isPropagationStopped：returnFalse，
	isImmediatePropagationStopped：returnFalse，
	isSimulated：否，

	preventDefault：function（）{
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		如果（e &&！this.isSimulated）{
			e.preventDefault（）;
		}
	}，
	stopPropagation：function（）{
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		如果（e &&！this.isSimulated）{
			e.stopPropagation（）;
		}
	}，
	stopImmediatePropagation：function（）{
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		如果（e &&！this.isSimulated）{
			e.stopImmediatePropagation（）;
		}

		this.stopPropagation（）;
	}
};

//包括所有常見事件道具，包括KeyEvent和MouseEvent特定道具
jQuery.each（{
	altKey：是，
	氣泡：是的，
	可取消：是的，
	changedTouches：是的，
	ctrlKey：是，
	細節：真實，
	eventPhase：是的，
	metaKey：true，
	pageX：是的，
	pageY：是的，
	shiftKey：是的，
	查看：正確，
	“ char”：是的，
	代碼：是的，
	charCode：true，
	關鍵：對，
	keyCode：true，
	按鈕：是的，
	按鈕：是的，
	clientX：是的，
	clientY：是的，
	offsetX：是的，
	offsetY：是，
	pointerId：true，
	pointerType：true，
	screenX：是的，
	screenY：是的，
	targetTouches：是，
	toElement：是的，
	感動：是的，

	其中：function（event）{
		var button = event.button;

		//添加關鍵事件
		if（event.which == null && rkeyEvent.test（event.type））{
			返回event.charCode！= null嗎？event.charCode：event.keyCode;
		}

		//添加要點擊的內容：1 ===左；2 ===中間；3 ===對
		如果（！event.which &&按鈕！==未定義&& rmouseEvent.test（event.type））{
			如果（按鈕＆1）{
				返回1;
			}

			如果（按鈕和2）{
				返回3;
			}

			如果（按鈕和4）{
				返回2;
			}

			返回0;
		}

		返回事件。
	}
}，jQuery.event.addProp）;

jQuery.each（{focus：“ focusin”，模糊：“ focusout”}，function（type，proxyType）{
	jQuery.event.special [type] = {

		//盡可能利用本機事件，以使模糊/對焦順序正確
		設置：function（）{

			//聲明第一個處理程序
			// dataPriv.set（this，“ focus”，...）
			// dataPriv.set（this，“ blur”，...）
			槓桿Native（this，type，expectSync）;

			//返回false以允許在調用方中進行正常處理
			返回false；
		}，
		觸發器：function（）{

			//觸發之前強制設置
			DSLNative（this，type）;

			//返回非false以允許正常的事件路徑傳播
			返回true；
		}，

		委託類型：委託類型
	};
}）；

//使用mouseover / out和事件時間檢查創建mouseenter / leave事件
//，以便事件委託可以在jQuery中使用。
//對pointerenter / pointerleave和pointerover / pointerout進行相同的操作
//
//支持：僅Safari 7
// Safari經常發送mouseenter；看到：
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
//有關錯誤的描述（該錯誤也存在於舊版Chrome中）。
jQuery.each（{
	mouseenter：“ mouseover”，
	mouseleave：“ mouseout”，
	pointerenter：“ pointerover”，
	pointerleave：“ pointerout”
}，function（orig，fix）{
	jQuery.event.special [orig] = {
		proxyType：修復，
		bindType：修復，

		處理：function（event）{
			var ret，
				目標=這個，
				相關= event.relatedTarget，
				handleObj = event.handleObj;

			//對於mouseenter / leave，如果相關對像不在目標範圍內，則調用處理程序。
			//注意：如果鼠標左/進入瀏覽器窗口，則沒有relatedTarget
			if（！related ||（related！== target &&！jQuery.contains（target，related）））{
				event.type = handleObj.origType;
				ret = handleObj.handler.apply（this，arguments）;
				event.type = fix;
			}
			返回ret
		}
	};
}）；

jQuery.fn.extend（{

	on：function（類型，選擇器，數據，fn）{
		返回（此類型，選擇器，數據，fn）；
	}，
	一：function（類型，選擇器，數據，fn）{
		返回on（this，types，選擇器，data，fn，1）;
	}，
	off：function（類型，選擇器，fn）{
		var handleObj，類型；
		if（types && types.preventDefault && types.handleObj）{

			//（event）調度jQuery.Event
			handleObj = types.handleObj;
			jQuery（types.delegateTarget）.off（
				handleObj.namespace？
					handleObj.origType +“。” + handleObj.namespace：
					handleObj.origType，
				handleObj.selector，
				handleObj.handler
			）;
			返回這個
		}
		if（typeof types ===“ object”）{

			//（類型對象[，選擇器]）
			對於（輸入類型）{
				this.off（type，選擇器，types [type]）;
			}
			返回這個
		}
		if（選擇器===假||類型選擇器===“函數”）{

			//（類型[，fn]）
			fn =選擇器；
			選擇器=未定義;
		}
		如果（fn === false）{
			fn = returnFalse;
		}
		返回this.each（function（）{
			jQuery.event.remove（this，types，fn，選擇器）;
		}）；
	}
}）；


變種

	//支持：僅IE <= 10-11，邊緣12-13
	//在IE / Edge中使用正則表達式組會導致嚴重的速度下降。
	//參見https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = / <腳本| <樣式| <鏈接/ i，

	// checked =“ checked”或選中
	rchecked =/checked\s*(?:[^=]|=\s*.checked。)/i，
	rcleanScript = / ^ \ s * <！（？：\ [CDATA \ [|-）|（？：\] \] |-）> \ s * $ / g;

//在其父表上首選tbody來包含新行
函數operationTarget（elem，content）{
	如果（nodeName（elem，“ table”）&&
		nodeName（content.nodeType！== 11？content：content.firstChild，“ tr”））{

		返回jQuery（elem）.children（“ tbody”）[0] || 元素
	}

	返回元素
}

//替換/恢復腳本元素的type屬性，以進行安全的DOM操作
函數disableScript（elem）{
	elem.type =（elem.getAttribute（“ type”）！== null）+“ /” + elem.type;
	返回元素
}
函數restoreScript（elem）{
	如果（（elem.type ||“”）.slice（0，5）===“ true /”）{
		elem.type = elem.type.slice（5）;
	}其他{
		elem.removeAttribute（“ type”）;
	}

	返回元素
}

函數cloneCopyEvent（src，dest）{
	var i，l，type，pdataOld，udataOld，udataCur，事件;

	如果（dest.nodeType！== 1）{
		返回;
	}

	// 1.複製私人數據：事件，處理程序等。
	如果（dataPriv.hasData（src））{
		pdataOld = dataPriv.get（src）;
		事件= pdataOld.events;

		如果（事件）{
			dataPriv.remove（dest，“處理事件”）;

			對於（輸入事件）{
				for（i = 0，l = events [type] .length; i <l; i ++）{
					jQuery.event.add（dest，type，events [type] [i]）;
				}
			}
		}
	}

	// 2.複製用戶數據
	如果（dataUser.hasData（src））{
		udataOld = dataUser.access（src）;
		udataCur = jQuery.extend（{}，udataOld）;

		dataUser.set（dest，udataCur）;
	}
}

//修復IE錯誤，請參閱支持測試
函數fixInput（src，dest）{
	var nodeName = dest.nodeName.toLowerCase（）;

	//無法保留克隆的複選框或單選按鈕的選中狀態。
	if（nodeName ===“ input” && rcheckableType.test（src.type））{
		dest.checked = src.checked;

	//克隆選項時無法將所選選項返回到默認的所選狀態
	} else if（nodeName ===“ input” || nodeName ===“ textarea”）{
		dest.defaultValue = src.defaultValue;
	}
}

函數domManip（集合，參數，回調，忽略）{

	//展平任何嵌套數組
	args = flat（args）;

	var片段，首先是腳本，hasScripts，node，doc，
		我= 0，
		l = collection.length，
		iNoClone = 1-1
		值= args [0]，
		valueIsFunction = isFunction（value）;

	//在WebKit中我們無法克隆包含checked的Node片段
	如果（valueIsFunction ||
			（l> 1 && typeof值===“字符串” &&
				！support.checkClone && rchecked.test（value）））{
		返回collection.each（function（index）{
			var self = collection.eq（index）;
			如果（valueIsFunction）{
				args [0] = value.call（this，index，self.html（））;
			}
			domManip（self，args，callback，被忽略）;
		}）；
	}

	如果（l）{
		片段= buildFragment（args，collection [0] .ownerDocument，false，collection，忽略）;
		首先= fragment.firstChild;

		如果（fragment.childNodes.length === 1）{
			片段=首先；
		}

		//需要新內容或對被忽略元素感興趣，以調用回調
		如果（首先||被忽略）{
			腳本= jQuery.map（getAll（fragment，“ script”），disableScript）;
			hasScripts = scripts.length;

			//最後一個項目使用原始片段
			//而不是第一個，因為它可以結束
			//在某些情況下被錯誤地清空（＃8070）。
			對於（; i <l; i ++）{
				節點=片段;

				如果（i！== iNoClone）{
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = (
					dataPriv.get( cur, "events" ) || Object.create( null )
				)[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script
			if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			if ( typeof props.top === "number" ) {
				props.top += "px";
			}
			if ( typeof props.left === "number" ) {
				props.left += "px";
			}
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );