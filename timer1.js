const args = process.argv;
const alarms = args.slice(2);

if (alarms.length === 0) return;

for (let i = 0; i < alarms.length; i++) {
  
  const alarmNum = Number(alarms[i]);
  if (alarmNum < 1 || isNaN(alarmNum)) continue;
  setTimeout(() => process.stdout.write('\x07'), alarmNum * 1000);

}