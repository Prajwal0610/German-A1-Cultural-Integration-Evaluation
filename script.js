const strategies=[
["🎯","Culture + language objective","Connect each cultural topic to an A1 language target.","Qualitative + quantitative"],
["🖼️","Authentic visuals","Use menus, signs, maps, photos and short media.","Engagement"],
["🎭","Role-play","Practise café orders, greetings, travel and everyday situations.","Speaking"],
["🔁","Spaced review","Revisit cultural vocabulary through short quizzes.","Retention"]
];
document.getElementById("strategies").innerHTML=strategies.map(x=>`<article class="card"><div style="font-size:30px">${x[0]}</div><h3>${x[1]}</h3><p>${x[2]}</p><span class="tag">${x[3]}</span></article>`).join("");
const steps=["Baseline pre-test","Deliver cultural modules","Observe participation","Immediate post-test","One-week retention check","Learner reflection","Compare & improve"];
document.getElementById("steps").innerHTML=steps.map((x,i)=>`<div class="step"><b>0${i+1}</b>${x}</div>`).join("");
const recs=["Attach every culture task to an A1 language outcome.","Keep explanations short and use accessible authentic material.","Include speaking practice in every cultural module.","Measure immediate learning and delayed retention.","Avoid stereotypes and show regional/everyday diversity.","Use learner reflection to measure appreciation and relevance."];
document.getElementById("recs").innerHTML=recs.map((x,i)=>`<div class="rec"><b>${i+1}.</b> ${x}</div>`).join("");
function showCase(){document.getElementById("findings").scrollIntoView({behavior:"smooth",block:"center"})}
const qs=[["Which metric checks learning after one week?",["Participation","Retention","Enjoyment"],1],["What is a qualitative measure?",["Quiz percentage","Participation rate","Learner reflection"],2],["What should every cultural activity have?",["Only facts","A clear A1 language objective","No assessment"],1],["Why use mixed methods?",["To use one score","To combine measurable and learner perspectives","To avoid feedback"],1]];
let qi=0,score=0;
function startQuiz(){qi=0;score=0;renderQ()}
function renderQ(){if(qi>=qs.length){document.getElementById("q").innerHTML=`<h3>🎉 Score: ${score}/${qs.length}</h3><p>Good evaluation practice combines evidence with reflection.</p>`;return}let x=qs[qi];document.getElementById("q").innerHTML=`<p><b>${qi+1}. ${x[0]}</b></p>`+x[1].map((o,i)=>`<button class="option" onclick="answer(${i},this)">${o}</button>`).join("")}
function answer(i,e){if(document.querySelector(".quiz .correct,.quiz .wrong"))return;if(i===qs[qi][2]){e.classList.add("correct");score++}else{e.classList.add("wrong");document.querySelectorAll(".quiz .option")[qs[qi][2]].classList.add("correct")}setTimeout(()=>{qi++;renderQ()},650)}
