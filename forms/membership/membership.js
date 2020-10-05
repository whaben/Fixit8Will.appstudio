let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]
let memberName = ""


btnName.onclick=function(){
  memberName = inptName.value
  if (members.includes(memberName))
    lblMembers.textContent = "You are a member"
  else {
    lblMembers.textContent = "You are not a member"
    members.push(memberName)
}}

