/* NSS DYPIU starter prototype. Demo data only; connect a secure backend before real use. */
const sampleEvents = [
  {id:"evt-1",title:"Community Cleanliness Drive",category:"Community Outreach",date:"2026-11-14",time:"9:00 AM",location:"[Confirm venue]",description:"A student-led cleanliness activity with local community participation.",status:"upcoming"},
  {id:"evt-2",title:"Tree Plantation & Green Awareness",category:"Environment",date:"2026-11-22",time:"8:30 AM",location:"[Confirm venue]",description:"Promoting greener spaces and practical environmental awareness.",status:"upcoming"},
  {id:"evt-3",title:"Digital Literacy Awareness",category:"Digital Governance",date:"2026-10-10",time:"10:00 AM",location:"[Confirm venue]",description:"A sample event entry for digital services and online safety awareness.",status:"completed"}
];
const demoCertificates = {
  "NSS-2026-001": {name:"Demo Volunteer",activity:"Sample Community Activity",status:"Sample record — not official"},
  "NSS-2026-002": {name:"Demo Volunteer",activity:"Sample Environment Activity",status:"Sample record — not official"}
};
const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
const eventList = $("#eventList");
let currentFilter = "all";

function formatDate(dateString){
  const date = new Date(`${dateString}T12:00:00`);
  return {day: date.toLocaleDateString("en-IN",{day:"2-digit"}), month: date.toLocaleDateString("en-IN",{month:"short"}), full: date.toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"})};
}
function renderEvents(){
  if(!eventList) return;
  const filtered = sampleEvents.filter(event => currentFilter === "all" || event.status === currentFilter);
  $("#eventCount").textContent = `${filtered.length} sample ${filtered.length === 1 ? "entry" : "entries"}`;
  eventList.innerHTML = "";
  if(!filtered.length){eventList.innerHTML='<p class="section-intro">No events match this filter yet.</p>';return;}
  filtered.forEach(event=>{
    const date = formatDate(event.date);
    const article = document.createElement("article");
    article.className = "event-row";
    article.innerHTML = `
      <div class="event-date"><strong>${date.day}</strong><span>${date.month}</span></div>
      <div class="event-info"><div class="event-meta">${event.category} · ${date.full}</div><h3>${event.title}</h3><p>${event.description} &nbsp; ${event.time} · ${event.location}</p></div>
      <div class="event-status ${event.status === "completed" ? "completed" : ""}">${event.status === "completed" ? "Completed · Sample" : "Upcoming · Sample"}</div>
      <span class="event-arrow" aria-hidden="true">↗</span>`;
    eventList.appendChild(article);
  });
}
$$(".filter-btn").forEach(button=>button.addEventListener("click",()=>{
  $$(".filter-btn").forEach(btn=>btn.classList.toggle("active",btn===button));
  currentFilter = button.dataset.filter;
  renderEvents();
}));
const menuToggle = $("#menuToggle");
const mainNav = $("#mainNav");
menuToggle?.addEventListener("click",()=>{
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded",String(open));
  menuToggle.setAttribute("aria-label",open?"Close navigation":"Open navigation");
  menuToggle.textContent = open ? "×" : "☰";
});
$$(".main-nav a").forEach(link=>link.addEventListener("click",()=>{
  mainNav?.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded","false");
  if(menuToggle) {menuToggle.textContent="☰";menuToggle.setAttribute("aria-label","Open navigation");}
}));
$("#year").textContent = new Date().getFullYear();

$("#certificateForm")?.addEventListener("submit",event=>{
  event.preventDefault();
  const id = $("#certificateId").value.trim().toUpperCase();
  const result = $("#certificateResult");
  const record = demoCertificates[id];
  result.className = "form-message " + (record ? "success" : "error");
  result.textContent = record
    ? `${record.status}. Reference ${id}; activity: ${record.activity}. Name: ${record.name}. This is a demonstration entry only.`
    : "No matching demo record. This prototype cannot verify official certificates.";
});

$("#registrationForm")?.addEventListener("submit",event=>{
  event.preventDefault();
  const form = event.currentTarget;
  if(!form.reportValidity()) return;
  const data = Object.fromEntries(new FormData(form).entries());
  // Intentionally local-only: do not persist personal data in this demo.
  const message = $("#registrationMessage");
  message.className = "form-message success";
  message.textContent = `Thanks, ${data.fullName}. The form is working as a front-end demo, but your details have not been sent or saved. Connect an approved secure backend before accepting registrations.`;
  form.reset();
});

renderEvents();
