function Coffee(size, liquid, baseCombo, extras) {
    this.size = size;
    this.liquid = liquid;
    this.baseCombo = BaseCombo;
    this.extras = extras;
    this.description = function () {
        return `A ${this.size} sized ${this.liquid} and ${this.baseCombo} smoothie with ${this.extras} to top it off.`;
    };
}
