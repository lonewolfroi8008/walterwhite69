import {walterwhite69_backend} from "../../declarations/walterwhite69_backend"

window.addEventListener("load",async function(){
  // console.log("finished loading");
  const currentAmount= await walterwhite69_backend.checkBalance();
  document.getElementById("value").innerText=currentAmount 
})

document.querySelector("form").addEventListener("submit", async (event)=>{
  event.preventDefault()
  // console.log("submitted");
  const inputAmount=parseFloat(document.getElementById("input-amount").value)
  const outputAmount=parseFloat(document.getElementById("withdrawal-amount").value)

  // console.log(inputAmount,outputAmount);
  if (!isNaN(inputAmount)) {
  await walterwhite69_backend.topUp(inputAmount)
  document.getElementById("input-amount").value=""
  }
   if (!isNaN(outputAmount)) {
  await walterwhite69_backend.withdraw(outputAmount)
  document.getElementById("withdrawal-amount").value=""
   }

   await walterwhite69_backend.compound();

const currentAmount= await walterwhite69_backend.checkBalance();
  document.getElementById("value").innerText=Math.round(currentAmount*100) / 100;

})
