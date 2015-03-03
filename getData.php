<?php
try {
    $server = "";
    $server .= shell_exec('uptime')."<br>";
    $server .= shell_exec("df -mh | grep 'dev\|Filesystem' | grep -v 'mmcblk0p1' | grep -v 'devtmpfs'")."<br>";
    $server .= "IP : ".$_SERVER['REMOTE_ADDR']."<br>";
    $server .= shell_exec('cat /proc/version')."<br>";

    $cpu = "";
    $cpu .= shell_exec('cat /proc/cpuinfo');

    $ram = "";
    $ram .= shell_exec('free');

    $temp = "";
    $temp .= shell_exec('sensors | grep Core');
    $temp .= shell_exec('sensors | grep fan2');

    $output = array("result" => 1, "server" => $server, "cpu" => $cpu, "ram" => $ram, "temp" => $temp);
    $output = json_encode($output);
    echo $output;
}
catch (Exception $e) {
    $output = array("result" => 0);
    $output = json_encode($output);
    echo $output;
}
?>
