(this.webpackJsonpmeetemup=this.webpackJsonpmeetemup||[]).push([[0],{181:function(e,t,n){e.exports=n(382)},186:function(e,t,n){},187:function(e,t,n){},382:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(55),i=n.n(o),s=(n(186),n(8)),c=n(13),l=n(10),u=n(9),m=(n(187),n(11)),p=[{name:"RSVP",value:5},{name:"Total Spots",value:10}],h=["#1978a5","#FF0000"],d=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={expanded:!1},e.handleShowDetails=function(){!1===e.state.expanded?e.setState({expanded:!0}):e.setState({expanded:!1})},e.getPieData=function(){var t=e.props.event.rsvp_limit;return[{name:"Attending",value:e.props.event.yes_rsvp_count},{name:"Spots Available",value:t}]},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.event;return r.a.createElement("div",{className:"Event"},r.a.createElement("p",{className:"time"},e.local_time," - ",e.local_date),r.a.createElement("p",{className:"name"},e.name),r.a.createElement("p",{className:"going"},e.yes_rsvp_count," people are attending"),this.state.expanded&&r.a.createElement("div",{className:"extra"},e.venue&&e.venue.name&&r.a.createElement("p",{className:"address"},e.venue.name+", "+e.venue.address_1+", "+e.venue.city+", "+e.venue.localized_country_name),r.a.createElement(m.f,{height:180},r.a.createElement(m.e,null,r.a.createElement(m.d,{data:this.getPieData(),dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",outerRadius:32,label:!0},p.map((function(e,t){return r.a.createElement(m.b,{key:t,fill:h[t%h.length]})}))),r.a.createElement(m.c,{iconSize:10,iconType:"triangle",layout:"horizontal",verticalAlign:"bottom",align:"center"}),r.a.createElement(m.i,null))),r.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:e.description}}),r.a.createElement("p",{className:"visibility"},e.visibility),r.a.createElement("a",{className:"link",href:e.link},"Event Link")),r.a.createElement("button",{className:"details-btn",onClick:this.handleShowDetails},"Details"))}}]),n}(a.Component),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("ul",{className:"EventList"},this.props.events.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(d,{event:e}))})))}}]),n}(a.Component),v=n(20),b=n.n(v),g=n(42),y=[{created:1591614589e3,duration:72e5,id:"271164041",name:"Saturday morning squash in Parkclub Nymphenburg",rsvp_limit:3,date_in_series_pattern:!1,status:"upcoming",time:15920361e5,local_date:"2020-06-27",local_time:"10:15",updated:1591614589e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:3,venue:{id:25978898,name:"Park Club Nymphenburg",lat:48.1603889465332,lon:11.513166427612305,repinned:!1,address_1:"Stievestra\xdfe 15, 80638",city:"M\xfcnchen",country:"DE",localized_country_name:"Germany"},is_online_event:!1,group:{created:1539632284e3,name:"Casual Squash Games",id:30324426,join_mode:"approval",lat:48.13999938964844,lon:11.579999923706055,urlname:"Casual-Squash-Games",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Casual-Squash-Games/events/271160041/",description:"<p>All levels are welcome!</p> <p>We meet at the entrance of Parkclub Nymphenburg at 10:00.<br/>There is 1 court (2-3 people) booked from 10:15 till 11:45<br/>If there are no slots left, use waitlist, we can try to book another court</p> <p>Important: Cancellation is free for 48 hours in advance. So if you RSVP and cannot come, please let me know, so I can cancel the court.<br/>Cancellations on short notice should be paid, to cover court costs.</p> ",visibility:"public",member_pay_fee:!1},{created:1562750055e3,duration:108e5,id:"tkqsdrybckblb",name:"Designer-Stammtisch",rsvp_limit:35,date_in_series_pattern:!1,status:"upcoming",time:15942276e5,local_date:"2020-07-08",local_time:"19:00",updated:1562750055e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:1,venue:{id:26506448,name:"Cafe Zeitgeist",lat:48.15114212036133,lon:11.576687812805176,repinned:!1,address_1:"T\xfcrkenstra\xdfe 74",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},is_online_event:!1,group:{created:1444668795e3,name:"M\xfcnchner Designer-Stammtisch",id:19024346,join_mode:"approval",lat:48.13999938964844,lon:11.579999923706055,urlname:"Designer-Stammtisch",who:"Designer",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Designer-Stammtisch/events/tkqsdrybckblb/",description:"<p>Liebe DesignerInnen,</p> <p>wir treffen uns jeden 2. Mittwoch im Monat um 19:00 Uhr in (neu:) Zeitgeist in der T\xfcrkenstra\xdfe.</p> <p>Bringt eure Erfolge, neusten Projekte oder auch kleinen Problemchen mit und teilt sie mit anderen Designern bei einem entspannten Abendessen.</p> <p>Wir freuen uns auf neue Designer und alte Bekannte, und auf einen gem\xfctlichen Abend mit Designer-Kaltsch-und-Tratsch.</p> <p>Lieben Gru\xdf, Ben</p> <p>ps: f\xfcr alle die gerne l\xe4nger unterwegs sind finden wir auch diesmal bestimmt wieder eine Location.</p> <p>pps: We mostly chat in German, but English will work just find as well.</p> ",how_to_find_us:"Fragt nach dem Designerstammtisch dort! *** Please ask for the Designerstammtisch there!",visibility:"public",member_pay_fee:!1},{created:1531614589e3,duration:72e5,id:"271160343",name:"Flarper",rsvp_limit:3,date_in_series_pattern:!1,status:"upcoming",time:15920361e5,local_date:"2020-06-28",local_time:"10:15",updated:1591614589e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:3,venue:{id:25978838,name:"Park Club Nymphenburg",lat:48.1603889465332,lon:11.513166427612305,repinned:!1,address_1:"Stievestra\xdfe 15, 80638",city:"M\xfcnchen",country:"DE",localized_country_name:"Germany"},is_online_event:!1,group:{created:1539632284e3,name:"Casual Squash Games",id:30323826,join_mode:"approval",lat:48.13999938964844,lon:11.579999923706055,urlname:"Casual-Squash-Games",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Casual-Squash-Games/events/271160041/",description:"<p>All levels are welcome!</p> <p>We meet at the entrance of Parkclub Nymphenburg at 10:00.<br/>There is 1 court (2-3 people) booked from 10:15 till 11:45<br/>If there are no slots left, use waitlist, we can try to book another court</p> <p>Important: Cancellation is free for 48 hours in advance. So if you RSVP and cannot come, please let me know, so I can cancel the court.<br/>Cancellations on short notice should be paid, to cover court costs.</p> ",visibility:"public",member_pay_fee:!1},{created:1591614589e3,duration:72e5,id:"271163041",name:"Farts in the park",rsvp_limit:3,date_in_series_pattern:!1,status:"upcoming",time:15920361e5,local_date:"2020-06-29",local_time:"10:15",updated:1591614589e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:3,venue:{id:25938898,name:"Park Club Nymphenburg",lat:48.1603889465332,lon:11.513166427612305,repinned:!1,address_1:"Stievestra\xdfe 15, 80638",city:"M\xfcnchen",country:"DE",localized_country_name:"Germany"},is_online_event:!1,group:{created:1539632284e3,name:"Casual Squash Games",id:30334826,join_mode:"approval",lat:48.13999938964844,lon:11.579999923706055,urlname:"Casual-Squash-Games",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Casual-Squash-Games/events/271160041/",description:"<p>All levels are welcome!</p> <p>We meet at the entrance of Parkclub Nymphenburg at 10:00.<br/>There is 1 court (2-3 people) booked from 10:15 till 11:45<br/>If there are no slots left, use waitlist, we can try to book another court</p> <p>Important: Cancellation is free for 48 hours in advance. So if you RSVP and cannot come, please let me know, so I can cancel the court.<br/>Cancellations on short notice should be paid, to cover court costs.</p> ",visibility:"public",member_pay_fee:!1}],_=n(59),w=n.n(_);function k(e,t){return E.apply(this,arguments)}function E(){return(E=Object(g.a)(b.a.mark((function e(t,n){var a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"get"===t?a="https://b8irz6xb5a.execute-api.us-east-2.amazonaws.com/dev/api/token/"+n:"renew"===t&&(a="https://b8irz6xb5a.execute-api.us-east-2.amazonaws.com/dev/api/refresh/"+n),e.next=3,w.a.get(a);case 3:return r=e.sent,localStorage.setItem("access_token",r.data.access_token),localStorage.setItem("refresh_token",r.data.refresh_token),localStorage.setItem("last_saved_time",Date.now()),e.abrupt("return",r.data.access_token);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return x.apply(this,arguments)}function x(){return(x=Object(g.a)(b.a.mark((function e(){var t,n,a,r,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token")){e.next=8;break}if(n=new URLSearchParams(window.location.search),a=n.get("code")){e.next=7;break}return window.location.href="https://secure.meetup.com/oauth2/authorize?client_id=10l1jtlp01s1lj83me59sso5kh&response_type=code&redirect_uri=https://cruebee.github.io/meetemup/",e.abrupt("return",null);case 7:return e.abrupt("return",k("get",a));case 8:if(r=localStorage.getItem("last_saved_time"),!(t&&Date.now()-r<36e5)){e.next=11;break}return e.abrupt("return",t);case 11:return o=localStorage.getItem("refresh_token"),e.abrupt("return",k("renew",o));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return N.apply(this,arguments)}function N(){return(N=Object(g.a)(b.a.mark((function e(t){var n,a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",[{city:"Munich",country:"de",localized_country_name:"Germany",name_string:"Munich, Germany",zip:"meetup3",lat:48.14,lon:11.58},{city:"Munich",country:"us",localized_country_name:"USA",state:"ND",name_string:"Munich, North Dakota, USA",zip:"58352",lat:48.66,lon:-98.85}]);case 2:return e.next=4,S();case 4:if(!(n=e.sent)){e.next=11;break}return a="https://api.meetup.com/find/locations?&sign=true&photo-host=public&query="+t+"&access_token="+n,e.next=9,w.a.get(a);case 9:return r=e.sent,e.abrupt("return",r.data);case 11:return e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e,t,n){return C.apply(this,arguments)}function C(){return(C=Object(g.a)(b.a.mark((function e(t,n,a){var r,o,i,s,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",y);case 2:if(navigator.onLine){e.next=5;break}return r=localStorage.getItem("lastEvents"),e.abrupt("return",JSON.parse(r));case 5:return e.next=7,S();case 7:if(!(o=e.sent)){e.next=18;break}return i="https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&access_token="+o,t&&n&&(i+="&lat="+t+"&lon="+n),a&&(i+="&page="+a),e.next=14,w.a.get(i);case 14:return s=e.sent,(c=s.data.events).length&&localStorage.setItem("lastEvents",JSON.stringify(c)),e.abrupt("return",c);case 18:return e.abrupt("return",[]);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color,background:"white"}},a.color=null,a}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Alert"},r.a.createElement("p",{style:this.getStyle()},this.props.text))}}]),n}(a.Component),T=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(D),A=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color,fontStyle:"italic",background:"white"}},a.color="red",a}return n}(D),z=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).color="yellow",a}return n}(D),I=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).color="orange",a}return n}(D),F=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],infoText:"",offlineText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({query:n}),""===t.target.value?e.setState({showSuggestion:!1}):j(n).then((function(t){e.setState({showSuggestion:!0,suggestions:t}),n.length>=3&&0===t.length?e.setState({infoText:"We can't locate the city you are searching for. Please try another city."}):e.setState({infoText:""})})),navigator.onLine?e.setState({offlineText:""}):e.setState({offlineText:"Please reconnect to the internet to search for new events and cities."})},e.handleItemClicked=function(t,n,a){e.setState({query:t,suggestions:[]}),e.props.updateEvents(n,a)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CitySearch"},r.a.createElement("div",{className:"alert-container"},r.a.createElement(T,{className:"info-alert",text:this.state.infoText}),r.a.createElement(I,{className:"info-alert",text:this.state.offlineText})),r.a.createElement("label",{className:"search-label"},"City Search"),r.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,placeholder:"Change City"}),r.a.createElement("ul",{className:"suggestions"},this.state.suggestions.map((function(t){return r.a.createElement("li",{key:t.name_string,onClick:function(){return e.handleItemClicked(t.name_string,t.lat,t.lon)}},t.name_string)}))))}}]),n}(a.Component),M=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={number:32},e.onNumberChange=function(t){var n=t.target.value;e.setState({number:n}),e.props.updateEvents(null,null,n),n<1?e.setState({errorText:"Number must be at least 1"}):e.setState({errorText:""})},e}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"NumberOfEvents"},r.a.createElement("div",{className:"alert-container"},r.a.createElement(A,{text:this.state.errorText})),r.a.createElement("label",{className:"number-label"},"Show "),r.a.createElement("input",{type:"number",className:"number-of-events",value:this.state.number,onChange:this.onNumberChange}),r.a.createElement("label",{className:"number-label"}," Events"))}}]),n}(a.Component),P=n(158),G=n.n(P),q=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],lat:null,lon:null,page:null,infoText:"",offlineText:""},e.offLineAlert=function(){!1===navigator.onLine?e.setState({offlineText:"You appear to be offline, this list is cached. Please connect to the internet for an updated list."}):e.setState({offlineText:""})},e.countEventsOnADate=function(t){for(var n=0,a=0;a<e.state.events.length;a+=1)e.state.events[a].local_date===t&&(n+=1);return n},e.getData=function(){for(var t=[],n=G()(),a=0;a<7;a+=1){n.add(1,"days");var r=n.format("YYYY-MM-DD"),o=e.countEventsOnADate(r);t.push({date:r,number:o})}return t},e.updateEvents=function(t,n,a){t&&n?O(t,n,e.state.page).then((function(a){return e.setState({events:a,lat:t,lon:n})})):a?O(e.state.lat,e.state.lon,a).then((function(t){return e.setState({events:t,page:a})})):O(e.state.lat,e.state.lon,e.state.page).then((function(t){return e.setState({events:t})}))},e.noEvent=function(){0===e.state.events.length?e.setState({infoText:"This city isn't hosting any events right now, try another city."}):e.setState({infoText:""})},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.updateEvents(),this.noEvent(),window.addEventListener("online",this.offLineAlert())}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"alert-container"},r.a.createElement(I,{text:this.state.offlineText})),r.a.createElement(F,{updateEvents:this.updateEvents}),r.a.createElement(M,{updateEvents:this.updateEvents}),r.a.createElement("label",{className:"chart-label"},"Events This Week"),r.a.createElement(m.f,{className:"chart-container",height:400},r.a.createElement(m.h,{margin:{top:20,right:20,bottom:20,left:20}},r.a.createElement(m.a,{fill:"#FFFFFF"}),r.a.createElement(m.j,{type:"category",dataKey:"date",name:"Date",stroke:"#FFFFFF"}),r.a.createElement(m.k,{type:"number",dataKey:"number",name:"Number of Upcoming Events",stroke:"#FFFFFF",allowDecimals:!1}),r.a.createElement(m.i,{cursor:{strokeDasharray:"3 3"}}),r.a.createElement(m.g,{data:this.getData(),fill:"#1978a5"}))),r.a.createElement(f,{events:this.state.events}),this.state.noEvent&&r.a.createElement(z,{text:this.state.infoText}))}}]),n}(a.Component),W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var U=n(159);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meetemup",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meetemup","/service-worker.js");W?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):L(t,e)}))}}(),U.config("6f6ab4a42f514451b87fb7e484458d20").install()}},[[181,1,2]]]);
//# sourceMappingURL=main.fa607bff.chunk.js.map