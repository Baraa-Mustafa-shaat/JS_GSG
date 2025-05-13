let myLeads = []
const input_el = document.getElementById("input-el")
const input_btn = document.getElementById("input-btn")
const tab_btn = document.getElementById("tab-btn")
const delete_btn = document.getElementById("delete-btn")
const ul_el = document.getElementById("ul-el")

const leadsFromStorage = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromStorage) {
  myLeads = leadsFromStorage
  render(myLeads)
}

input_btn.addEventListener("click", function () {
  if (input_el.value) {
    myLeads.push(input_el.value)
    input_el.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
  }
})

tab_btn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
  })
})

delete_btn.addEventListener("click", function () {
  localStorage.clear()
  myLeads = []
  render(myLeads)
})

function render(leads) {
  let listItems = ""
  for (let i = 0; i < leads.length; i++) {
    listItems += `
      <li>
        <a href="${leads[i]}" target="_blank">${leads[i]}</a>
      </li>
    `
  }
  ul_el.innerHTML = listItems
}
