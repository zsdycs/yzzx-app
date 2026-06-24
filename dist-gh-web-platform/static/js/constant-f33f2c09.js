function c(){return c=Object.assign?Object.assign.bind():function(i){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=t[s])}return i},c.apply(this,arguments)}var y={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(i){},onComplete:function(i){},preStringTyped:function(i,n){},onStringTyped:function(i,n){},onLastStringBackspaced:function(i){},onTypingPaused:function(i,n){},onTypingResumed:function(i,n){},onReset:function(i){},onStop:function(i,n){},onStart:function(i,n){},onDestroy:function(i){}},f=new(function(){function i(){}var n=i.prototype;return n.load=function(t,s,r){if(t.el=typeof r=="string"?document.querySelector(r):r,t.options=c({},y,s),t.isInput=t.el.tagName.toLowerCase()==="input",t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(p){return p.trim()}),t.stringsElement=typeof t.options.stringsElement=="string"?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var o=Array.prototype.slice.apply(t.stringsElement.children),e=o.length;if(e)for(var a=0;a<e;a+=1)t.strings.push(o[a].innerHTML.trim())}for(var u in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[u]=u;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},n.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:t.contentType==="html"?t.el.innerHTML:t.el.textContent},n.appendCursorAnimationCss=function(t){var s="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+s+"]")){var r=document.createElement("style");r.setAttribute(s,"true"),r.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(r)}},n.appendFadeOutAnimationCss=function(t){var s="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+s+"]")){var r=document.createElement("style");r.setAttribute(s,"true"),r.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(r)}},i}()),l=new(function(){function i(){}var n=i.prototype;return n.typeHtmlChars=function(t,s,r){if(r.contentType!=="html")return s;var o=t.substring(s).charAt(0);if(o==="<"||o==="&"){var e;for(e=o==="<"?">":";";t.substring(s+1).charAt(0)!==e&&!(1+ ++s>t.length););s++}return s},n.backSpaceHtmlChars=function(t,s,r){if(r.contentType!=="html")return s;var o=t.substring(s).charAt(0);if(o===">"||o===";"){var e;for(e=o===">"?"<":"&";t.substring(s-1).charAt(0)!==e&&!(--s<0););s--}return s},i}()),g=function(){function i(t,s){f.load(this,s,t),this.begin()}var n=i.prototype;return n.toggle=function(){this.pause.status?this.start():this.stop()},n.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},n.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},n.destroy=function(){this.reset(!1),this.options.onDestroy(this)},n.reset=function(t){t===void 0&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},n.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.strPos===0?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},n.typewrite=function(t,s){var r=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var o=this.humanizer(this.typeSpeed),e=1;this.pause.status!==!0?this.timeout=setTimeout(function(){s=l.typeHtmlChars(t,s,r);var a=0,u=t.substring(s);if(u.charAt(0)==="^"&&/^\^\d+/.test(u)){var p=1;p+=(u=/\d+/.exec(u)[0]).length,a=parseInt(u),r.temporaryPause=!0,r.options.onTypingPaused(r.arrayPos,r),t=t.substring(0,s)+t.substring(s+p),r.toggleBlinking(!0)}if(u.charAt(0)==="`"){for(;t.substring(s+e).charAt(0)!=="`"&&(e++,!(s+e>t.length)););var h=t.substring(0,s),b=t.substring(h.length+1,s+e),d=t.substring(s+e+1);t=h+b+d,e--}r.timeout=setTimeout(function(){r.toggleBlinking(!1),s>=t.length?r.doneTyping(t,s):r.keepTyping(t,s,e),r.temporaryPause&&(r.temporaryPause=!1,r.options.onTypingResumed(r.arrayPos,r))},a)},o):this.setPauseStatus(t,s,!0)},n.keepTyping=function(t,s,r){s===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var o=t.substring(0,s+=r);this.replaceText(o),this.typewrite(t,s)},n.doneTyping=function(t,s){var r=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){r.backspace(t,s)},this.backDelay))},n.backspace=function(t,s){var r=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var o=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){s=l.backSpaceHtmlChars(t,s,r);var e=t.substring(0,s);if(r.replaceText(e),r.smartBackspace){var a=r.strings[r.arrayPos+1];r.stopNum=a&&e===a.substring(0,s)?s:0}s>r.stopNum?(s--,r.backspace(t,s)):s<=r.stopNum&&(r.arrayPos++,r.arrayPos===r.strings.length?(r.arrayPos=0,r.options.onLastStringBackspaced(),r.shuffleStringsIfNeeded(),r.begin()):r.typewrite(r.strings[r.sequence[r.arrayPos]],s))},o)}else this.setPauseStatus(t,s,!1)},n.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},n.setPauseStatus=function(t,s,r){this.pause.typewrite=r,this.pause.curString=t,this.pause.curStrPos=s},n.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},n.humanizer=function(t){return Math.round(Math.random()*t/2)+t},n.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},n.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},n.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:this.contentType==="html"?this.el.innerHTML=t:this.el.textContent=t},n.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(s){t.stop()}),this.el.addEventListener("blur",function(s){t.el.value&&t.el.value.length!==0||t.start()}))},n.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},i}();const m={PED:[`1. 全面承担GNPS和LNPS核安全责任，并全面领导和指挥场内应急响应；<br>
2. 应急情况下确认应急状态分级，决定进入或终止应急状态（应急待命、厂房应急和场区应急），安排启动应急组织；<br>
3. 决定事故机组的控制缓解措施和非事故机组的运行策略，决定电厂进入、退出SAMG及启用PFA，安排实施机组运行与事故缓解行动；<br>
4. 决定场内人员的防护措施，安排组织实施防护行动；<br>
5. 安排执行应急报告制度，批准和签发应急期间的应急通告和报告；<br>
6. 安排舆情监测和应对，批准向场外组织发送的用于公众信息发布的资料；<br>
7. 达到进入场外应急状态的条件时，向广东省核应急指挥部建议进入场外应急状态并提供公众防护行动建议；<br>
8. 向股份公司应急总指挥汇报应急状态和应急响应情况，并将应急状态和应急响应情况通知DNMC港方副总；<br>
9. 必要时与国家核应急协调委、广东省核应急指挥部和集团应急指挥部联系协调场内、场外应急响应行动，根据需要向国家、广东省、集团公司等场外组织及中国人民解放军提出支援请求。
    `],AED:[`1. 向PED提供机组运行控制、事故缓解、人员防护等方面的决策支持；<br>
2. 协助PED组织协调场内各应急响应组的响应行动；<br>
3. 协助PED审查应急指挥部向场内外应急组织发送的应急指令和信息；<br>
4. 协助对应急指挥部所作出的决策指令进行传达、跟踪落实和记录。
    `],AOP1:[`与事故电厂运行控制组联络，审查事故电厂运行控制组发送来的信息表，准确了解机组状态的信息和数据以及机组状态变化的趋势，向PED说明和解释机组状态的关键数据和可能的发展，并提供运行控制的建议；<br>
    与技术支持组联络，组织事故电厂的机组状态诊断和预测以及堆芯损伤评估，审查该组发送来的评估和技术讨论结果，由此向PED提供机组运行控制，缓解事故以及工程抢修的技术支持；<br>
    协助PED审查和决策技术支持组提交的有关进入或终止SAMGs的建议；<br>
    在执行SAMGs期间，协助PED审查和决策技术支持组提交的严重事故缓解行动的建议；<br>
    与技术支持组联络，了解事故源项估算、环境监测和事故后果评价的结果，协助PED决定场内防护行动的方案，提出场外公众防护行动的建议；<br>
    组织搜寻事故电厂厂内未集合的人员；<br>
    核查向场外应急组织通报的应急信息，送PED审核签发；<br>
    协助对应急指挥部所作出的决策指令进行传达、跟踪落实和记录。
    `],AOP2:[`与事故电厂运行控制组联络，审查事故电厂运行控制组发送来的信息表，准确了解机组状态的信息和数据以及机组状态变化的趋势，向PED说明和解释机组状态的关键数据和可能的发展，并提供运行控制的建议；<br>
    与技术支持组联络，组织事故电厂的机组状态诊断和预测以及堆芯损伤评估，审查该组发送来的评估和技术讨论结果，由此向PED提供机组运行控制，缓解事故以及工程抢修的技术支持；<br>
    协助PED审查和决策技术支持组提交的有关进入或终止SAMGs的建议；<br>
    在执行SAMGs期间，协助PED审查和决策技术支持组提交的严重事故缓解行动的建议；<br>
    与技术支持组联络，了解事故源项估算、环境监测和事故后果评价的结果，协助PED决定场内防护行动的方案，提出场外公众防护行动的建议；<br>
    组织搜寻事故电厂厂内未集合的人员；<br>
    核查向场外应急组织通报的应急信息，送PED审核签发；<br>
    协助对应急指挥部所作出的决策指令进行传达、跟踪落实和记录。
    `],AOP3:[`事故状态下：<br>
    与事故电厂运行控制组联络，审查事故电厂运行控制组发送来的信息表，准确了解机组状态的信息和数据以及机组状态变化的趋势，向PED说明和解释机组状态的关键数据和可能的发展，并提供运行控制的建议；<br>
    与技术支持组联络，组织事故电厂的机组状态诊断和预测以及堆芯损伤评估，审查该组发送来的评估和技术讨论结果，由此向PED提供机组运行控制，缓解事故以及工程抢修的技术支持；<br>
    协助PED审查和决策技术支持组提交的有关进入或终止SAMGs的建议；<br>
    在执行SAMGs期间，协助PED审查和决策技术支持组提交的严重事故缓解行动的建议；<br>
    与技术支持组联络，了解事故源项估算、环境监测和事故后果评价的结果，协助PED决定场内防护行动的方案，提出场外公众防护行动的建议；<br>
    组织搜寻事故电厂厂内未集合的人员；<br>
    核查向场外应急组织通报的应急信息，送PED审核签发；<br>
    协助对应急指挥部所作出的决策指令进行传达、跟踪落实和记录。<br>
    <p></p>
    非事故状态下：<br>
    配合事故电厂运行助理完成相关工作；
    根据机组状态向PED建议非事故电厂的运行策略；<br>
    根据PED的决定，组织非事故电厂的运行控制和安全防护行动，维持非事故电厂处于安全状态；<br>
    根据PED发布的应急防护行动要求，通知非事故电厂内人员实施，保护人员和电厂的安全；<br>
    与后勤保卫组联系，传达应急指挥部下达的启动应急支援人员、应急集合点人员采取的应急防护行动等命令，了解应急集合点集合情况、撤离车辆安排等情况；<br>
    与安全防护组、维修服务组联系，传达应急指挥部下达的维修、抢险等命令，了解电厂内部辐射状况，事故电厂维修进展等情况；<br>
    领导非事故电厂的抢险救灾和急救行动，组织搜寻厂内失踪人员；<br>
    领导非事故电厂的出入控制和电厂保卫；<br>
    必要时向PED提供决策支持；<br>
    协助对应急指挥部所作出的决策指令进行传达、跟踪落实和记录。
    `],SEH6:[`通过无线通信终端、广播和声响警报向大亚湾核电基地范围内的单位和人员发布应急状态通知；<br>
    通过电话和传真方式向场外应急组织进行应急通告和应急报告，执行应急报告制度；<br>
    通过广播通知场区内人员实施集合清点、隐蔽、服用碘片和应急撤离等应急防护行动；<br>
    在场区应急或放射性释放后，关闭应急指挥中心各屏蔽门、将通风系统切换至碘过滤器运行。
    `],SEH7:[`收集公众舆论，开展舆情应对；<br>
    负责为场外应急组织准备用于公众信息发布的有关资料；<br>
    联络集团公众信息联络专员（即股份公司公众信息指挥）协助开展对外信息口径发布、舆情监测、危机公关或舆情应对处置等应急响应工作。
    `],SEH8:[`跟踪应急指挥部成员启动到岗情况，联系尚未到岗人员及时启动到岗；<br>
    协助应急指挥部开展内外联络；处理应急指挥部的后勤供应工作；<br>
    为应急指挥部提供相关协助和支持工作。
    `],SEH9:[`检查应急指挥部内的设备、器材和文件的可用状态；传送和接收应急指挥部与各应急响应组及场外应急组织之间往来的信息表；<br>
    编号保存各应急响应组、场外应急组织传来的传真和信息表。
    `]},P={prefixList:["GOP","LOP","DOP","TSC","MSC","GRP","SIA"],GOP:[`运行控制组工作职责：<br>
    事故电厂：<br>
    执行应急运行程序，控制事故工况，恢复和维持机组的安全状态，减少事故的后果和影响；<br>
    初步评价应急状态，向应急指挥部报告机组情况，提供应急状态分级的建议；<br>
    根据事故处理程序的要求，初步确定是否离开事故处理程序进入SAMGs；<br>
    向应急指挥部报告严重事故情况，提交进入SAMGs的初步建议；<br>
    按照应急指挥部决定执行SAMGs的指令，离开事故处理程序，执行主控部分的SAMGs，并及时与技术支持组联系，确认后者已经到位并开始使用其SAMGs；<br>
    当技术支持组开始使用TSC部分的SAMGs后，将事故机组的事故处置决策权移交给技术支持组，只执行主控部分的SAMGs并监督事故机组的事故状态；<br>
    执行应急指挥部批准的和技术支持组提交的严重事故缓解行动，并将执行情况通报应急指挥部和技术支持组；<br>
    向应急指挥部和技术支持组提供有关事故性质、规模的资料和数据；<br>
    发布应急通知和事故报警信号；<br>
    随时向应急指挥部报告事故的发展情况；<br>
    执行电厂内消防和急救二级干预行动；<br>
    运行控制组组长在非常紧急情况下代行应急指挥的职能：在PED因各类原因（如通讯故障、交通事故、应急指挥中心不可用等）而未能启动时履行应急指挥职能。<br>
    非事故电厂：<br>
    向应急指挥部报告机组运行情况，提供机组重要运行参数，并提出维持机组安全运行的建议；<br>
    在非事故电厂运行助理的领导下，控制并维持机组在安全状态。
    `],LOP:[`运行控制组工作职责：<br>
    事故电厂：<br>
    执行应急运行程序，控制事故工况，恢复和维持机组的安全状态，减少事故的后果和影响；<br>
    初步评价应急状态，向应急指挥部报告机组情况，提供应急状态分级的建议；<br>
    根据事故处理程序的要求，初步确定是否离开事故处理程序进入SAMGs；<br>
    向应急指挥部报告严重事故情况，提交进入SAMGs的初步建议；<br>
    按照应急指挥部决定执行SAMGs的指令，离开事故处理程序，执行主控部分的SAMGs，并及时与技术支持组联系，确认后者已经到位并开始使用其SAMGs；<br>
    当技术支持组开始使用TSC部分的SAMGs后，将事故机组的事故处置决策权移交给技术支持组，只执行主控部分的SAMGs并监督事故机组的事故状态；<br>
    执行应急指挥部批准的和技术支持组提交的严重事故缓解行动，并将执行情况通报应急指挥部和技术支持组；<br>
    向应急指挥部和技术支持组提供有关事故性质、规模的资料和数据；<br>
    发布应急通知和事故报警信号；<br>
    随时向应急指挥部报告事故的发展情况；<br>
    执行电厂内消防和急救二级干预行动；<br>
    运行控制组组长在非常紧急情况下代行应急指挥的职能：在PED因各类原因（如通讯故障、交通事故、应急指挥中心不可用等）而未能启动时履行应急指挥职能。<br>
    非事故电厂：<br>
    向应急指挥部报告机组运行情况，提供机组重要运行参数，并提出维持机组安全运行的建议；<br>
    在非事故电厂运行助理的领导下，控制并维持机组在安全状态。
    `],DOP:[`运行控制组工作职责：<br>
    事故电厂：<br>
    执行应急运行程序，控制事故工况，恢复和维持机组的安全状态，减少事故的后果和影响；<br>
    初步评价应急状态，向应急指挥部报告机组情况，提供应急状态分级的建议；<br>
    根据事故处理程序的要求，初步确定是否离开事故处理程序进入SAMGs；<br>
    向应急指挥部报告严重事故情况，提交进入SAMGs的初步建议；<br>
    按照应急指挥部决定执行SAMGs的指令，离开事故处理程序，执行主控部分的SAMGs，并及时与技术支持组联系，确认后者已经到位并开始使用其SAMGs；<br>
    当技术支持组开始使用TSC部分的SAMGs后，将事故机组的事故处置决策权移交给技术支持组，只执行主控部分的SAMGs并监督事故机组的事故状态；<br>
    执行应急指挥部批准的和技术支持组提交的严重事故缓解行动，并将执行情况通报应急指挥部和技术支持组；<br>
    向应急指挥部和技术支持组提供有关事故性质、规模的资料和数据；<br>
    发布应急通知和事故报警信号；<br>
    随时向应急指挥部报告事故的发展情况；<br>
    执行电厂内消防和急救二级干预行动；<br>
    运行控制组组长在非常紧急情况下代行应急指挥的职能：在PED因各类原因（如通讯故障、交通事故、应急指挥中心不可用等）而未能启动时履行应急指挥职能。<br>
    非事故电厂：<br>
    向应急指挥部报告机组运行情况，提供机组重要运行参数，并提出维持机组安全运行的建议；<br>
    在非事故电厂运行助理的领导下，控制并维持机组在安全状态。
    `],TSC:[`技术支持组工作职责：<br>
    获取和收集事故电厂的机组状态参数；对机组和设备系统状态进行诊断和预测，评估行动优先级，提供运行控制和应急维修的建议；分析评价堆芯损伤情况，估算事故源项；提供设备系统的性能参数；安全壳泄漏率的估算；核电厂区外环境辐射监测；进行化学取样分析，并提供有关机组状态诊断、堆芯损伤评价及源项估算所需的化学数据；气象参数的获取；估算可能释放或已经释放的放射性物质量，并估算和评价其造成的辐射剂量后果；向指挥部提供电厂内人员隐蔽、服用碘片、撤离等防护行动以及场外防护行动建议；<br>
    获取上级或外部技术支援组织的技术支持，包括EDF技术支持中心的支持。
    `],MSC:[`维修服务组工作职责：<br>
    制定应急维修方案，组织应急期间所需要的应急维修队伍，确保维修方案得到实施；<br>
    设备与系统损伤的探查、控制和检修；执行移动应急设备准备和接入；参加工程抢险和抗灾行动，实施应急防护行动方案；<br>
    电厂技术厂房内失踪人员的搜寻和救援；<br>
    实施现场去污。
    `],GRP:[`安全防护组工作职责：<br>
    进行事故电厂内的辐射监测、取样分析和辐射安全水平的评价；<br>
    对工程抢险和应急维修活动等应急行动提出工业安全和辐射防护的要求并提供现场支持，控制应急照射；<br>
    协调本电厂内的消防行动；<br>
    组织实施人员急救和去污行动；<br>
    组织和指导现场去污。了解事件/事故的最新动态和场区范围内的人员伤亡情况并向PED汇报，协助PED制定应急行动方案和指挥抢险救援行动。<br>
    适时提出场内工作人员和场外公众防护的建议；<br>
    与消防队、工程抢险队以及医疗队等场外救援队伍联系，协助PED制定场内外联合救援抢险行动方案，协调场内外抢险救援力量；<br>
    收集并保存应急状态下各阶段的有关资料和记录。
    `],SIA:[`后勤保卫组工作职责：<br>
    提供后勤支持，确保应急所需的物资供应；<br>
    组织人员撤离和安置，保证应急响应和应急撤离所需的交通运输车辆；<br>
    应急通信保障；<br>
    组织人员的集合、清点、隐蔽、服用碘片和撤离等应急防护行动；<br>
    收集汇总（包括非DNMC单位）集合清点的信息和失踪人员的名单。<br>
    核电厂的保卫和出入口控制；<br>
    协助技术支持组进行海上监测，通知核电海域内的船只远离电厂；<br>
    通过流动呼叫通知电厂人员采取集合、隐蔽等应急防护行动；<br>
    应急撤离的场内交通秩序控制；<br>
    第三责任区失踪人员的搜寻；<br>
    联系获取场外治安保卫支持。
    `]};export{m as R,P as a,g as i};
