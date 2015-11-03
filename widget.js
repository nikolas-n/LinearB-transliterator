(function( $ ){

	var la2li = {
		"a": {
			"~": "𐀀",
			"i": "𐁁",
			"lv": "𐃅",
			"mph": "𐃨",
			"rom": "𐂑",
			"u": "𐁂"
		},
		
		"b": {
			"i": 
			{
				"g": "𐃌",
			},
			"o": {
				"s": 
				{
				"~": "𐀘",
				"f": "𐂌",
				"m": "𐂍"
			}
			}
		},
		
		"c": {
			"a": {
				"p": {
					"~": "𐁒",
					"f": "𐂈",
					"m": "𐂉",
					"s": "𐃎"
				}
			},
			
			"e": {
					"l": "𐀯",
					"n": { "t": "𐄙"} ,
					"r": {"v": "𐂂" }
				
			},
			"u": {"m": {"i": {"n": "𐀓"}},
				  "r": "𐃍"},
			"y": {"p": "𐂒"}
		},
		
		"d": {
				"a": {
					"~": "𐀅",
					"g": "𐃉",
				},
				"e": {
					"~": "𐀆",
					"c": "𐄐",
					"m": {
						"i": {
							"l": "𐄫",
						}
					}
				},
				"i": "𐀇",
				"m": {
					"i": {
						"l": "𐄣",
					}
				},
				"o": "𐀈",
				"u": {
					"~": "𐀉",
					"c": "𐄚",
					"m": {
						"i": {
							"l": "𐄬"
						}
					},
					"o": "𐄈"
					},
				"w": {
						"e": "𐁃",
						"o": "𐁄" 
				}
			},
			
			"e": "𐀁",
			"h": {"a":"𐁀"},
			
			"i": "𐀂",

			"j": {
				"a": "𐀊",
				"e": "𐀋",
				"o": "𐀍"},		
			
			"k": {
				"a": "𐀏",
				"e": "𐀐",
				"i": "𐀑",
				"o": "𐀒",
				"u":	"𐀓"		
			},
			"m": {
				"a": "𐀔",
				"e": "𐀕",
				"i": "𐀖",
				"o": "𐀗",
				"u":	"𐀘"			
			},
			"n": {
				"a": "𐀙",
				"e": "𐀚",
				"i": "𐀛",
				"o": "𐀜",
				"u":	"𐀝",
				"w": {"a":"𐁅"}		
			},
			"p": {
				"a": "𐀞",
				"e": "𐀟",
				"h": {"u":"𐁆"},
				"i": "𐀠",
				"o": "𐀡",
				"t": {"e":"𐁇"},
				"u":	"𐀢"			
			},
			"q": {
				"a": "𐀣",
				"e": "𐀤",
				"i": "𐀥",
				"o": "𐀦"
			},
			"r": {
				"a": {"~" : "𐀨",
						"i" : "𐁉"			
			},
				"e": "𐀩",
				"i": "𐀪",
				"o": "𐀫",
				"u":	"𐀬",
				"y": {"a" : "𐁈",
				"o": "𐁊"}			
			},
			"s": {
				"a": "𐀭",
				"e": "𐀮",
				"i": "𐀯",
				"o": "𐀰",
				"u":	"𐀱"			
			},
			"t": {
				"a": "𐀲",
				"e": "𐀳",
				"i": "𐀴",
				"o": "𐀵",
				"u":	"𐀶",
				"w": {"e" : "𐁌", "o" : "𐁍"},
				"y": {"a": "𐁋"}			
			},
			"u": "𐀄",
			"w": {
				"a": "𐀷",
				"e": "𐀸",
				"i": "𐀹",
				"o": "𐀺"
			},
			"z": {
				"a": "𐀼",
				"e": "𐀽",
				"o": "𐀿"
			}			
	};

var li2la = {
    "\ud800" : 
    {"\udc00": "a",
     "\udc01": "e",
     "\udc02": "i",
     "\udc03": "o",
     "\udc04": "u",
     "\udc05": "da",
     "\udc06": "de",
      "\udc07": "di",
     "\udc08": "do",
     "\udc09": "du",
     "\udc0a": "ja",
     "\udc0b": "je",
     "\udc0d": "jo",
     "\udc0f": "ka",
     "\udc10": "ke",
     "\udc11": "ki",
     "\udc12": "ko",
     "\udc13": "ku",
     "\udc14": "ma",
     "\udc15": "me",
     "\udc16": "mi",
     "\udc17": "mo",
     "\udc18": "mu",
     "\udc19": "na",
     "\udc1a": "ne",
     "\udc1b": "ni",
     "\udc1c": "no",
     "\udc1d": "nu",
     "\udc1e": "pa",
     "\udc1f": "pe",
     "\udc20": "pi",
     "\udc21": "po",
     "\udc22": "pu",
     "\udc23": "qa",
     "\udc24": "qe",
     "\udc25": "qi",
     "\udc26": "qo",
     "\udc28": "ra",
     "\udc29": "re",
     "\udc2a": "ri",
     "\udc2b": "ro",
     "\udc2c": "ru",
     "\udc2d": "sa",
     "\udc2e": "se",
     "\udc2f": "si",
     "\udc30": "so",
     "\udc31": "su",
     "\udc32": "ta",
     "\udc33": "te",
     "\udc34": "ti",
     "\udc35": "to",
     "\udc36": "tu",
     "\udc37": "wa",
     "\udc38": "we",
     "\udc39": "wi",
     "\udc3a": "wo",
     "\udc3c": "za",
     "\udc3d": "ze",
     "\udc3f": "zo",
     "\udc40": "ha",
     "\udc41": "ai",
     "\udc42": "au",
     "\udc43": "dwe",
     "\udc44": "dwo",
     "\udc45": "nwa",
     "\udc46": "phu",
     "\udc47": "pte",
     "\udc48": "rya",
     "\udc49": "rai",
     "\udc4a": "ryo",
     "\udc4b": "tya",
     "\udc4c": "twe",
     "\udc4d": "two",
     "\udc52": "cap",
     "\udc80": "vir",
     "\udc81": "mul",
     "\udc82": "cerv",
     "\udc83": "equ",
    }
};
	var converterMap = la2li;

	function doconvert(src) {
		function traverse(i, chars, ws) {
			var c = src[i];

		 	if (c in chars) {
		 		if (chars[c] instanceof Array)
		 			return (ws ? chars[c][1] : chars[c][0]) + traverse(i + 1, converterMap);
		 		else if (chars[c] instanceof Object)
		 			return traverse(i + 1, chars[c], ws);
		 		else
					return chars[c] + traverse(i + 1, converterMap);
			}
			else if ('~' in chars) {
				if (chars['~'] instanceof Array)
					return (ws ? chars['~'][1] : chars['~'][0]) + traverse(i, converterMap);
				else
					return chars['~'] + traverse(i, converterMap);
			}				
			else if (c) {
				return c + traverse(i + 1, converterMap, c == ' ');
			}
			return "";
		}
		return traverse(0, converterMap, true);
	}


	function translate() {
		var src = $("#source").val();
		$("#destination").val(doconvert(src));
	}


	function changeDictionary() {
		converterMap = eval($('#source-map').val());
		translate();
	}

	var htmlForm = ' \
		<div class="lbt overlay"></div> \
		<div class="lbt window"> \
			<h3>Linear B transliterator - Μεταγραφέας για τη Γραμμική Β</h3> \
			<hr /> \
			<table style="width: 100%;"> \
				<tr> \
					<td> \
					<select style="width: 70%;" id="source-map"> \
						<option value="la2li">Latin to Linear B</options> \
						<option value="li2la">Linear B to Latin</options> \
					</select> \
					</tr> \
				<tr> \
					<td><textarea id="source" style="width: 100%;"></textarea></td> \
					<td><textarea id="destination" style="width: 100%;"></textarea></td> \
				</tr> \
			</table> \
		</div> \
	';

  $.fn.lbt = function(options) {
	var settings = $.extend({}, options);

	if (settings['window-holder']) {
		$(document).ready(onResize);
		$(window).resize(onResize);

		$(settings['window-holder']).html(htmlForm);
		$('.lbt.overlay').click(hidePopup);
		this.click(showPopup);
	}
	else {
	        this.html(htmlForm);
		$('.lbt.window').show();
		$('.lbt.window').css("position", "relative");
	}

	$('#source').change(translate);
	$('#source').keyup(translate);
	$('#source-map').change(changeDictionary);
  };
})( jQuery );
