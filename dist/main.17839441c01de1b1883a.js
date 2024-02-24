(()=>{"use strict";var e={292:(e,t,o)=>{o.r(t),o.d(t,{TaskClass:()=>r});class r{#e;#t;#o;#r;#a;#i;constructor(e,t="",o,r,a=3,i=!1){this.#e=e,this.#t=t,this.#o=o,this.#r=r,this.#a=a,this.#i=i}isDoneChanger(){this.isDone=!this.isDone}updateTittle(e){this.tittle=e}updateDescription(e){this.description=e}updateDate(e){this.date=e}updateCategory(e){this.category=e}get isDone(){return this.#i}set isDone(e){this.#i=e}set tittle(e){this.#e=e}set description(e){this.#t=e}set date(e){this.#o=e}get tittle(){return this.#e}get description(){return this.#t}get date(){return this.#o}get category(){return this.#r}get priority(){return this.#a}getObject(){return{tittle:this.tittle,description:this.description,date:this.date.toDateString(),time:this.date.toLocaleTimeString(),dueDate:this.date,category:this.category,isDone:this.isDone,priority:this.priority,isDoneChanger:this.isDoneChanger,updateTittle:this.updateTittle,updateCategory:this.updateCategory,updateDescription:this.updateDescription,updateDate:this.updateDate}}}}},t={};function o(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,o),i.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{class e{static#n=[];static#s=[];#c;#l;constructor(t){this.#c=t,this.#l=[],e.setProjects=this,e.setProjectsName=this.#c}static set setProjectsName(t){e.#s.push(t)}static set setProjects(t){e.#n.push(t)}static get setProjects(){return e.#n}getOriginalProjectItem(){return this.#l}setOriginalProjectItem(){localStorage.setItem(`${this.#c}`,JSON.stringify(this.#l))}set projectsItem(t){this.#l.push(t),localStorage.setItem("localStorageKey",JSON.stringify(e.#s)),localStorage.setItem(`${this.#c}`,JSON.stringify(this.#l))}get projectsItem(){if(localStorage.getItem(`${this.#c}`))return JSON.parse(localStorage.getItem(`${this.#c}`))}get name(){return this.#c}}var t=o(292);class r{constructor(){}#d(e){const t=document.createElement("button");return t.textContent="+",t.dataset.index=e-1,t.classList.add("add-item"),t}#u(e){const t=document.createElement("span");return t.textContent=e,t}createLI(e,t){const o=document.createElement("li");return o.classList.add("project-item"),o.dataset.project=t-1,o.appendChild(this.#u(e)),o.appendChild(this.#d(t)),o}}class a{static createCard(e,t,o){const r=document.createElement("div");return r.classList.add("card"),r.dataset.priority=e.priority,r.dataset.objectIndex=t,r.dataset.projectIndex=o,r.appendChild(a.#p(e.tittle)),r.appendChild(a.#m(e.time)),r.appendChild(a.#g(e.date)),r.appendChild(a.#h()),r.appendChild(a.#y(e.isDone)),r.appendChild(a.#f()),r.appendChild(a.#j()),r}static#p(e){const t=document.createElement("span");return t.classList.add("tittle-elm"),e.length>35?t.textContent=`${e.slice(0,34)}...`:t.textContent=e,t}static#m(e){const t=document.createElement("span");return t.classList.add("time-elm"),t.textContent=e,t}static#g(e){const t=document.createElement("span");return t.classList.add("date-elm"),t.textContent=e,t}static#y(e){const t=document.createElement("input");return t.type="checkbox",t.classList.add("is-done"),t.name="is-done",t.checked=e,t}static#h(){const e=document.createElement("label");return e.for="is-done",e.textContent="Finished",e}static#f(){const e=document.createElement("button");return e.classList.add("view"),e.textContent="View 👁️‍🗨️",e}static#j(){const e=document.createElement("button");return e.classList.add("btn-del-elm"),e.textContent="Delete 🚫",e}}function i(t){n();const o=document.querySelector(".card-display");let r=Number.isInteger(+t)?t:t.currentTarget.dataset.project,i=e.setProjects[r].projectsItem;null!=i&&i.forEach(((e,t)=>{let i=a.createCard(e,t,r);o.appendChild(i)}))}function n(){const e=document.querySelector(".card-display"),t=document.querySelector(".display");t.removeChild(e);let o=document.createElement("div");o.classList.add("card-display"),t.appendChild(o)}function s(t){let r=t.target.dataset.index;const a=document.querySelector(".modal"),n=document.querySelector(".item-form"),s=document.querySelector(".cancel-task"),l=document.querySelector(".add-task");a.showModal(),s.textContent="Cancel",l.textContent="Add Task",s.addEventListener("click",(()=>{c(a),a.close()})),l.addEventListener("click",(()=>{let t=Object.fromEntries(new FormData(n));if(c(a),""!=t.tittle){const a=e.setProjects[r];Promise.resolve().then(o.bind(o,292)).then((({TaskClass:e})=>{const o=new e(t.tittle,t.description,new Date(t["due-date"]),a.name,t.priority);a.projectsItem=o.getObject(),i(r)}))}}),{once:!0})}function c(e){const t=document.querySelector("#tittle"),o=document.querySelector("#description"),r=document.querySelector("#due-date");t.value="",o.value="",r.value="",e.close()}const l=document.querySelector(".project-items");function d(t){const o=new e(t),a=(new r).createLI(o.name,e.setProjects.length);l.appendChild(a);let n=document.querySelectorAll(".add-item");n.forEach((e=>e.addEventListener("click",s)));document.querySelectorAll(".project-item").forEach(((t,o)=>{t.addEventListener("click",(t=>{i(t);document.querySelectorAll(".card").forEach((t=>{t.addEventListener("click",(t=>{let o=t.currentTarget.dataset.objectIndex,r=t.currentTarget.dataset.projectIndex;if("is-done"==t.target.className&&(e.setProjects[r].getOriginalProjectItem()[o].isDoneChanger(),e.setProjects[r].setOriginalProjectItem()),"btn-del-elm"==t.target.className&&(console.log(e.setProjects[r].getOriginalProjectItem()),e.setProjects[r].getOriginalProjectItem().splice(o,1),e.setProjects[r].setOriginalProjectItem(),i(r)),"view"==t.target.className){const t=document.querySelector(".modal"),a=document.querySelector(".item-form"),n=document.querySelector(".cancel-task"),s=document.querySelector(".add-task");n.textContent="Exit",s.textContent="Save and Exit",t.showModal();const l=document.querySelector("#tittle"),d=document.querySelector("#description"),u=document.querySelector("#due-date");l.value=e.setProjects[r].projectsItem[o].tittle,d.value=e.setProjects[r].projectsItem[o].description;let p=e.setProjects[r].projectsItem[o].dueDate;u.value=new Date(p).toISOString().slice(0,16),n.addEventListener("click",(()=>{c(t),t.close()})),s.addEventListener("click",(()=>{const t=Object.fromEntries(new FormData(a));e.setProjects[r].getOriginalProjectItem()[o].updateTittle(t.tittle),e.setProjects[r].getOriginalProjectItem()[o].updateDescription(t.description),e.setProjects[r].setOriginalProjectItem(),i(r)}),{once:!0})}}))}))}))}))}const u=document.querySelector(".add-project"),p=document.querySelector(".dialog2");u.addEventListener("click",(e=>{p.showModal(),document.querySelector(".add-dialog2").addEventListener("click",(e=>{const t=document.querySelector("#dialog2");t.value&&d(t.value),t.value="",p.close()})),document.querySelector(".cancel-modal").addEventListener("click",(()=>{p.close()}))}));let m=[[{tittle:"Complete JavaScript Algorithms and Data Structures Certification on freeCodeCamp",description:"Finish the remaining challenges and projects to earn the certification. Cover topics like ES6, Regular Expressions, Debugging, Data Structures, and Algorithms.",dueDate:"2024-03-15T23:59:59",priority:2,category:"study",isDone:!1},{tittle:"Read 'Clean Code: A Handbook of Agile Software Craftsmanship'",description:"Explore best practices for writing clean, maintainable code. Learn about principles such as meaningful names, functions, comments, formatting, error handling, and refactoring.",dueDate:"2024-03-10T18:00:00",priority:3,category:"study",isDone:!1},{tittle:"Attend Machine Learning Workshop",description:"Participate in a workshop organized by the local tech community. Gain insights into machine learning concepts, algorithms, and applications.",dueDate:"2024-03-08T09:00:00",priority:1,category:"study",isDone:!1},{tittle:"Study Arabic Grammar",description:"Dedicate time to review Arabic grammar rules, focusing on verb conjugations, sentence structure, and vocabulary.",dueDate:"2024-03-20T20:00:00",priority:4,category:"study",isDone:!1},{tittle:"Complete React Native Project",description:"Work on developing a mobile application using React Native. Implement features such as user authentication, data fetching, and UI components.",dueDate:"2024-03-25T15:30:00",priority:2,category:"study",isDone:!1},{tittle:"Prepare for Computer Science Exam",description:"Review lecture notes, textbooks, and practice problems to ensure thorough understanding of key concepts in computer science. Focus areas include algorithms, data structures, and programming languages.",dueDate:"2024-03-12T12:00:00",priority:3,category:"study",isDone:!1}],[{tittle:" Buy Ingredients for Homemade Pizza Night",description:"Make a list of fresh produce, cheese, sauce, and toppings needed to create delicious homemade pizzas. Don't forget everyone's favorite toppings and extra cheese!",dueDate:"2024-03-05T16:00:00",priority:2,category:"shopping",isDone:!1},{tittle:" Purchase New Video Games",description:"Browse online stores for the latest video game releases. Add favorite titles to the cart and check for any discounts or special offers. Get ready for hours of gaming fun!",dueDate:"2024-03-08T20:00:00",priority:3,category:"shopping",isDone:!1},{tittle:" Update Wardrobe for Spring",description:"Visit local clothing stores or browse online for trendy outfits and accessories. Look for lightweight fabrics, floral prints, and pastel colors to welcome the spring season in style.",dueDate:"2024-03-12T12:00:00",priority:1,category:"shopping",isDone:!1},{tittle:"Buy Gardening Supplies",description:"Head to the hardware store or garden center to stock up on gardening essentials. Purchase soil, seeds, pots, and tools needed for planting flowers, herbs, and vegetables.",dueDate:"2024-03-18T10:00:00",priority:4,category:"shopping",isDone:!1},{tittle:"Upgrade Home Entertainment System",description:"Research the latest tech gadgets for enhancing the home entertainment experience. Explore options for smart TVs, sound systems, streaming devices, and gaming accessories. Transform movie nights and gaming sessions!",dueDate:"2024-03-20T15:30:00",priority:2,category:"shopping",isDone:!1},{tittle:" Stock Up on Pet Food and Toys",description:"Visit the pet store to replenish supplies for furry friends. Purchase nutritious food, treats, and toys to keep pets happy and healthy. Don't forget to check for any special promotions or new products!",dueDate:"2024-03-15T14:00:00",priority:3,category:"shopping",isDone:!1}],[{tittle:"Family Movie Night: Watch 'Harry Potter and the Sorcerer's Stone'",description:"Gather the family for a cozy movie night at home. Enjoy the magical world of Harry Potter as you follow the adventures of Harry, Hermione, and Ron in their first year at Hogwarts School of Witchcraft and Wizardry.",dueDate:"2024-03-05T20:00:00",priority:2,category:"entertainment",isDone:!1},{tittle:"Game Night with Friends: Play 'Among Us' Online",description:"Organize an online game session with friends. Join together to solve the mystery of who among you is the impostor in the popular multiplayer game 'Among Us'. Prepare for laughter, accusations, and epic betrayals!",dueDate:"2024-03-08T19:00:00",priority:3,category:"entertainment",isDone:!1},{tittle:"Weekend Picnic in the Park",description:"Plan a delightful picnic outing with family and friends. Pack delicious snacks, sandwiches, and refreshing beverages. Enjoy the fresh air, scenic views, and quality time together amidst nature.",dueDate:"2024-03-12T12:30:00",priority:1,category:"entertainment",isDone:!1},{tittle:"Family Board Game Tournament",description:"Host a friendly competition featuring a variety of classic board games. Set up a tournament bracket and challenge family members to games like Monopoly, Scrabble, and Clue. May the best player win!",dueDate:"2024-03-18T16:00:00",priority:4,category:"entertainment",isDone:!1},{tittle:"Virtual Concert Viewing: 'BTS Permission to Dance on Stage' Live",description:"Join millions of fans worldwide for a virtual concert experience with the global superstars BTS. Enjoy electrifying performances, captivating visuals, and unforgettable moments with the beloved K-pop group.",dueDate:"2024-03-20T02:00:00",priority:2,category:"entertainment",isDone:!1},{tittle:"DIY Craft Night with Family",description:"Get creative with a DIY craft night at home. Gather art supplies and work together on fun projects like homemade greeting cards, painted rocks, or personalized photo frames. Let imaginations soar!",dueDate:"2024-03-15T18:30:00",priority:3,category:"entertainment",isDone:!1}]],g=JSON.parse(localStorage.getItem("localStorageKey"));if(console.log(g),null!=g){let e=[];for(let t=0;t<g.length;t++)e.push(JSON.parse(localStorage.getItem(g[t])));let t=JSON.parse(localStorage.getItem("localStorageKey"));for(let e=0;e<t.length;e++)d(t[e]);console.log("########## datacontainer",e),h(e),console.log("from local storage")}else console.log("from default"),d("study"),d("shopping"),d("entertainment"),console.log("$$$$$$$$$$$defaultdata",m),h(m);function h(o){for(let r=0;r<o.length;r++)for(let a=0;a<o[r].length;a++){let i=o[r][a];const n=new t.TaskClass(i.tittle,i.description,new Date(i.dueDate),i.category,i.priority,i.isDone);e.setProjects[r].projectsItem=n.getObject()}}!function(){const t=document.querySelector(".card-display");e.setProjects[0].projectsItem.forEach(((e,o)=>{if(null!=e){let r=a.createCard(e,o,0);t.appendChild(r)}}))}();document.querySelectorAll(".card").forEach((t=>{t.addEventListener("click",(t=>{console.log("target",t.target),console.log("currentTarget",t.currentTarget);let o=t.currentTarget.dataset.objectIndex,r=t.currentTarget.dataset.projectIndex;if("is-done"==t.target.className&&(e.setProjects[r].getOriginalProjectItem()[o].isDoneChanger(),e.setProjects[r].setOriginalProjectItem()),"btn-del-elm"==t.target.className&&(console.log(e.setProjects[r].getOriginalProjectItem()),console.log(e.setProjects[r].getOriginalProjectItem().splice(o,1)),console.log(e.setProjects[r].getOriginalProjectItem()),e.setProjects[r].setOriginalProjectItem(),i(r)),"view"==t.target.className){const t=document.querySelector(".modal"),a=document.querySelector(".item-form"),n=document.querySelector(".cancel-task"),s=document.querySelector(".add-task");n.textContent="Exit",s.textContent="Save and Exit",t.showModal();const l=document.querySelector("#tittle"),d=document.querySelector("#description"),u=document.querySelector("#due-date");l.value=e.setProjects[r].projectsItem[o].tittle,d.value=e.setProjects[r].projectsItem[o].description;let p=e.setProjects[r].projectsItem[o].dueDate;u.value=new Date(p).toISOString().slice(0,16),n.addEventListener("click",(()=>{c(t),t.close()})),s.addEventListener("click",(()=>{const t=Object.fromEntries(new FormData(a));e.setProjects[r].getOriginalProjectItem()[o].updateTittle(t.tittle),e.setProjects[r].getOriginalProjectItem()[o].updateDescription(t.description),e.setProjects[r].setOriginalProjectItem(),i(r)}),{once:!0})}}))}));document.querySelector(".removeLocalStorage").addEventListener("click",(()=>{console.log("remove Local storage"),localStorage.clear(),window.location.reload()}));document.querySelector(".all-tasks").addEventListener("click",(()=>{!function(){n();const t=document.querySelector(".card-display");e.setProjects.forEach((e=>{console.log(e);let o=e.projectsItem;console.log(o),o.forEach((e=>{let o=a.createCard(e);t.appendChild(o)}))}))}()}))})()})();
//# sourceMappingURL=main.17839441c01de1b1883a.js.map