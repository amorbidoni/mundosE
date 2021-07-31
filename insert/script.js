const autoNumericOptionsEuro = {
  digitGroupSeparator: ".",
  decimalCharacter: ",",
  decimalCharacterAlternative: ".",
  roundingMethod: AutoNumeric.options.roundingMethod.halfUpSymmetric,
};
let domElement = document.querySelector("#input");
// Initialization
new AutoNumeric(domElement, autoNumericOptionsEuro);
