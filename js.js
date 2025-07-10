
//find the button by the submit id and when clicked call submitorder
document.getElementById("submit").addEventListener("click", submitOrder)


function submitOrder(){
    //from the drop down menus get what they selected and pass it down to the constructor
    let sizeGet = document.getElementById("sizeSelect").value;
    let liquidGet = document.getElementById("liquidSelect").value;
    let baseComboGet = document.getElementById("baseSelect").value;
    let extrasGet = document.getElementById("extras").value;

    Smoothie(sizeGet, liquidGet, baseComboGet, extrasGet);
}


function Smoothie(size, liquid, baseCombo, extras) {
    this.size = size;
    this.liquid = liquid;
    this.baseCombo = BaseCombo;
    this.extras = extras;

    //if user has no extras just tell them smoothie otherwise edit the sentence to include the extra
    if(extras === "none"){
        document.getElementById("orderConfirm").textContent(`A ${this.size} sized made with ${this.liquid} and ${this.baseCombo} smoothie`)
    }
    else{
        document.getElementById("orderConfirm").textContent(`A ${this.size} sized made with ${this.liquid} and ${this.baseCombo} smoothie with ${this.extras} to top it off`)
    }
}
