let currentlySelected = "weekly"

let dailyItems = document.getElementsByClassName("daily");
let weeklyItems = document.getElementsByClassName("weekly");
let monthlyItems = document.getElementsByClassName("monthly");

let ellipsisClass = document.getElementsByClassName("ellipsis");

let dailyButton = document.getElementById("dailybutton");
let weeklyButton = document.getElementById("weeklybutton");
let monthlyButton = document.getElementById("monthlybutton");

function resetContent(contentList) {
  let i = 0;
  for (i = 0; i < contentList.length; i++) {
    contentList[i].style.display = "none";
  }
}

function initializeButtonColor() {
  weeklyButton.style.color = "white";
  weeklyButton.style.opacity = "1";
}

function resetButtons() {
  let i = 0;
  dailyButton.style.color = "";
  weeklyButton.style.opacity = "";
  weeklyButton.style.color = "";
  weeklyButton.style.opacity = "";
  monthlyButton.style.color = "";
  weeklyButton.style.opacity = "";
}

dailyButton.addEventListener("click", function() {
  resetButtons();
  dailyButton.style.color = "white";
  if (weeklyItems[0].style.display != "none") {
    resetContent(weeklyItems);
  } else {
    resetContent(monthlyItems);
  }
  let i = 0;
  for (i = 0; i < dailyItems.length; i++) {
    dailyItems[i].style.display = "";
  }
})

weeklyButton.addEventListener("click", function() {
  resetButtons();
  weeklyButton.style.color = "white";
  if (dailyItems[0].style.display != "none") {
    resetContent(dailyItems);
  } else {
    resetContent(monthlyItems);
  }
  let i = 0;
  for (i = 0; i < weeklyItems.length; i++) {
    weeklyItems[i].style.display = "";
  }
})

monthlyButton.addEventListener("click", function() {
  resetButtons();
  monthlyButton.style.color = "white";
  if (dailyItems[0].style.display != "none") {
    console.log(dailyItems[0]);
    resetContent(dailyItems);
  } else {
    resetContent(weeklyItems);
  }
  let i = 0;
  for (i = 0; i < monthlyItems.length; i++) {
    monthlyItems[i].style.display = "";
  }
})

let i = 0;
for (i = 0; i < ellipsisClass.length; i++) {
  ellipsisClass[i].addEventListener("mouseenter", function() {
    this.focus();
    this.parentElement.style.backgroundColor = "var(--dark-blue)";
  })

  ellipsisClass[i].addEventListener("mouseout", function() {
    this.parentElement.style.backgroundColor = "";
  })
}

initializeButtonColor();
