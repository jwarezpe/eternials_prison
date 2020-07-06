var permission = "%player_has_permission_1complete%";
var permission2 = "%player_has_permission_2complete%";
var permission3 = "%player_has_permission_3complete%";

function anything() {
    if (permission === "yes" || permission2 === "yes" || permission3 === "yes") { return "&a\u2714"; }
    else { return "&c\u2718"; }
}
anything();