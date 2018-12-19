const { aggregate } = require('./aggregate');
const { output } = require('./output');
const { api } = require('./api');
const { userIds } = require('./userIds');

// 集計期間の開始日
const startDate = '2018-10-01';
// 集計期間の終了日
const endDate = '2019-03-31';
const aggregateResult = [];

try{
  userIds.map(async userId => {
    const { data } = await api.getItemsByUserId(userId);
    aggregateResult.push(aggregate(userId, data, startDate, endDate));
    if(aggregateResult.length === userIds.length){
      output.toConsole(aggregateResult);
    }
  });
}catch(err){
  output.toConsole(err);
}
