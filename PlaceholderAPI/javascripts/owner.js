var permission5 = "%plotsquared_currentplot_owner%";

function anything() {
  if (permission5 === "") {
    return "&cNobody";
  } else {
    return "&d%plotsquared_currentplot_owner%";
  }
}
anything()