const aggregate = (userId, items, startDate, endDate) => {
  let likeCount = 0;
  let postCount = 0;

  items.map(item => {
    const createdAt = Date.parse(item.created_at);
    if(createdAt > Date.parse(startDate) && createdAt < Date.parse(endDate)){
      likeCount += item.likes_count;
      postCount++;
    }
  });

  return `${userId},${postCount},${likeCount}`;
};

exports.aggregate = aggregate;
