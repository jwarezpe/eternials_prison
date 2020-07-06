var progress = "%progress_bar_{rankup_percent_done_formatted}_c:&a&l⛁_p:&e&l⛁_r:&c&l⛁_l:10_fullbar:&eReady!%";
var percentage = "%rankup_percent_done_formatted%";
var rank = "%rankup_current_rank%";

function getFormat() {
	return `${progress} &7${percentage}% &8┃ &6&lRank ${rank}`;
}
getFormat();