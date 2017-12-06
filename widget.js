(function( $ ){

 var la2li = {

   "1":{"~":"𐄇","0":{"~":"𐄐","0":{"~":"𐄙","0":{"~":"𐄢","0":"𐄫"}}}},

   "2":{"~":"𐄈","0":{"~":"𐄑","0":{"~":"𐄚","0":{"~":"𐄣","0":"𐄬"}}}},

   "3":{"~":"𐄉","0":{"~":"𐄒","0":{"~":"𐄛","0":{"~":"𐄤","0":"𐄭"}}}},

   "4":{"~":"𐄊","0":{"~":"𐄓","0":{"~":"𐄜","0":{"~":"𐄥","0":"𐄮"}}}},

   "5":{"~":"𐄋","0":{"~":"𐄔","0":{"~":"𐄝","0":{"~":"𐄦","0":"𐄯"}}}},

   "6":{"~":"𐄌","0":{"~":"𐄕","0":{"~":"𐄞","0":{"~":"𐄧","0":"𐄰"}}}},

   "7":{"~":"𐄍","0":{"~":"𐄖","0":{"~":"𐄟","0":{"~":"𐄨","0":"𐄱"}}}},

   "8":{"~":"𐄎","0":{"~":"𐄗","0":{"~":"𐄠","0":{"~":"𐄩","0":"𐄲"}}}},

   "9":{"~":"𐄏","0":{"~":"𐄘","0":{"~":"𐄡","0":{"~":"𐄪","0":"𐄳"}}}},

   "a": { "~": "𐀀", "i": "𐁁", "lv": "𐃅","mph": "𐃨","rom": "𐂑","u": "𐁂" },
  
   "b": { "i": {"g": "𐃌",},"o": {"s": {"~": "𐀘","f": "𐂌","m": "𐂍"}}},
  
   "c": {"a": {"p": {"~": "𐁒","f": "𐂈","m": "𐂉","s": "𐃎"}},"e": {"l": "𐀯","n": { "t": "𐄙"} ,"r": {"v": "𐂂" }},"u": {"m": {"i": {"n": "𐀓"}},"r": "𐃍"},"y": {"p": "𐂒"}},     

   "d": {"a": {"~": "𐀅","g": "𐃉",},"e": {"~": "𐀆","c": "𐄐","m": {"i": {"l": "𐄫",}}},"i": "𐀇","m": {"i": {"l": "𐄣",}},"o": "𐀈","u": {"~": "𐀉","c": "𐄚","m": {"i": {"l": "𐄬"}},"o": "𐄈"},"w": {"e": "𐁃","o": "𐁄" }},
   
   "e": "𐀁",

   "h": {"a":"𐁀"},
   
   "i": "𐀂",

   "j": {"a": "𐀊","e": "𐀋","o": "𐀍"},  
   
   "k": {"a": "𐀏","e": "𐀐","i": "𐀑","o": "𐀒","u": "𐀓"},

   "m": {"a": "𐀔","e": "𐀕","i": "𐀖","o": "𐀗","u": "𐀘"},

   "n": {"a": "𐀙","e": "𐀚","i": "𐀛","o": "𐀜","u": "𐀝","w": {"a":"𐁅"}},

   "o": "𐀃",
   
   "p": {"a": "𐀞","e": "𐀟","h": {"u":"𐁆"},"i": "𐀠","o": "𐀡","t": {"e":"𐁇"},"u": "𐀢"},

   "q": {"a": "𐀣","e": "𐀤","i": "𐀥","o": "𐀦"},

   "r": {"a": {"~" : "𐀨","i" : "𐁉"},"e": "𐀩","i": "𐀪","o": "𐀫","u": "𐀬","y": {"a" : "𐁈","o": "𐁊"}},

   "s": {"a": "𐀭","e": "𐀮","i": "𐀯","o": "𐀰","u": "𐀱"},

   "t": {"a": "𐀲","e": "𐀳","i": "𐀴","o": "𐀵","u": "𐀶","w": {"e" : "𐁌", "o" : "𐁍"},"y": {"a": "𐁋"}},

   "u": "𐀄",
   
   "w": {"a": "𐀷","e": "𐀸","i": "𐀹","o": "𐀺"},
   
   "z": {"a": "𐀼","e": "𐀽","o": "𐀿"}

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

var cy2la = {
"\uD802":
{
  "\uDC00": "a",
  "\uDC01": "e",
  "\uDC02": "i",
  "\uDC03": "o",
  "\uDC04": "u",
  "\uDC32": "wa",
  "\uDC33": "we",
  "\uDC34": "wi",
  "\uDC35": "wo",
  "\uDC3C": "za",
  "\uDC3F": "zo",
  "\uDC05": "ja",
  "\uDC08": "jo",
  "\uDC0A": "ka",
  "\uDC0B": "ke",
  "\uDC0C": "ki",
  "\uDC0D": "ko",
  "\uDC0E": "ku",
  "\uDC0F": "la",
  "\uDC10": "le",
  "\uDC11": "li",
  "\uDC12": "lo",
  "\uDC13": "lu",
  "\uDC14": "ma",
  "\uDC15": "me",
  "\uDC16": "mi",
  "\uDC17": "mo",
  "\uDC18": "mu",
  "\uDC19": "na",
  "\uDC1A": "ne",
  "\uDC1B": "ni",
  "\uDC1C": "no",
  "\uDC1D": "nu",
  "\uDC37": "kse",
  "\uDC38": "ksi",
  "\uDC1E": "pa",
  "\uDC1F": "pe",
  "\uDC20": "pi",
  "\uDC21": "po",
  "\uDC22": "pu",
  "\uDC23": "ra",
  "\uDC24": "re",
  "\uDC25": "ri",
  "\uDC26": "ro",
  "\uDC27": "ru",
  "\uDC28": "sa",
  "\uDC29": "se",
  "\uDC2A": "si",
  "\uDC2B": "so",
  "\uDC2C": "su",
  "\uDC2D": "ta",
  "\uDC2E": "te",
  "\uDC2F": "ti",
  "\uDC30": "to",
  "\uDC31": "tu",
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
   <h4>Μεταγραφέας της Γραμμικής Β</h4> \
   <hr /> \
   <table style="width: 100%;"> \
    <tr> \
     <td> \
     <select style="width: 100%;" id="source-map"> \
      <option value="la2li">Λατινική Γραφή σε Γραμμική Β</options> \
      <option value="li2la">Γραμμική Β σε Λατινική Γραφή</options> \
     </select> \
     </tr> \
    <tr> \
     <td><textarea id="source" style="width: 100%;"></textarea></td> \
     <td><textarea id="destination" style="width: 100%;"></textarea></td> \
    </tr> \
   </table> \
<br>a \
<input type="button" value="𐀀" class="key" /> \
<input type="button" value="𐀅" class="key" /> \
<input type="button" value="𐀊" class="key" /> \
<input type="button" value="𐀏" class="key" /> \
<input type="button" value="𐀔" class="key" /> \
<input type="button" value="𐀙" class="key" /> \
<input type="button" value="𐀞" class="key" /> \
<input type="button" value="𐀣" class="key" /> \
<input type="button" value="𐀨" class="key" /> \
<input type="button" value="𐀭" class="key" /> \
<input type="button" value="𐀲" class="key" /> \
<input type="button" value="𐀷" class="key" /> \
<input type="button" value="𐀼" class="key" /> \
<br>e \
<input type="button" value="𐀁" class="key" /> \
<input type="button" value="𐀆" class="key" /> \
<input type="button" value="𐀋" class="key" /> \
<input type="button" value="𐀐" class="key" /> \
<input type="button" value="𐀕" class="key" /> \
<input type="button" value="𐀚" class="key" /> \
<input type="button" value="𐀟" class="key" /> \
<input type="button" value="𐀤" class="key" /> \
<input type="button" value="𐀩" class="key" /> \
<input type="button" value="𐀮" class="key" /> \
<input type="button" value="𐀳" class="key" /> \
<input type="button" value="𐀸" class="key" /> \
<input type="button" value="𐀽" class="key" /> \
<br>i \
<input type="button" value="𐀂" class="key" /> \
<input type="button" value="𐀇" class="key" /> \
<input type="button" value="𐀑" class="key" /> \
<input type="button" value="𐀖" class="key" /> \
<input type="button" value="𐀛" class="key" /> \
<input type="button" value="𐀠" class="key" /> \
<input type="button" value="𐀥" class="key" /> \
<input type="button" value="𐀪" class="key" /> \
<input type="button" value="𐀯" class="key" /> \
<input type="button" value="𐀴" class="key" /> \
<input type="button" value="𐀹" class="key" /> \
<br>o \
<input type="button" value="𐀃" class="key" /> \
<input type="button" value="𐀈" class="key" /> \
<input type="button" value="𐀍" class="key" /> \
<input type="button" value="𐀒" class="key" /> \
<input type="button" value="𐀗" class="key" /> \
<input type="button" value="𐀜" class="key" /> \
<input type="button" value="𐀡" class="key" /> \
<input type="button" value="𐀦" class="key" /> \
<input type="button" value="𐀫" class="key" /> \
<input type="button" value="𐀰" class="key" /> \
<input type="button" value="𐀵" class="key" /> \
<input type="button" value="𐀺" class="key" /> \
<input type="button" value="𐀿" class="key" /> \
<br>u \
<input type="button" value="𐀄" class="key" /> \
<input type="button" value="𐀉" class="key" /> \
<input type="button" value="𐀓" class="key" /> \
<input type="button" value="𐀘" class="key" /> \
<input type="button" value="𐀝" class="key" /> \
<input type="button" value="𐀢" class="key" /> \
<input type="button" value="𐀬" class="key" /> \
<input type="button" value="𐀱" class="key" /> \
<input type="button" value="𐀶" class="key" /> \
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
 $('.key').click(function(e) {
  if (converterMap = la2li )
  { $('#source-map').val('li2la');
   converterMap = li2la;
   }
  var phoneme = $(this).attr('value');
  $('#source').val($('#source').val()+ phoneme);
  translate();  
 });
  };
})( jQuery );
