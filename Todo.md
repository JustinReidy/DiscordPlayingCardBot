# TODO

- [ ] Get Prune Working [StackOverflow](www.stackoverflow.com/questions/41574971/how-does-bulkdelete-work)
    - ```js 
        message.channel.bulkDelete()
- [ ] Look into what other commands might be wanted for stock market data
    - [ ] For ```!showbid```  display wether they were correct or incorrect.
        - [ ] Determine if stock market is still open or has closed
- [x] Look into replaceing ```message.reply``` with embeds
    - [x] Logo when symbol is given ```const profile = `https://finnhub.io/api/v1/stock/profile2?symbol=${ticker}&token=${token}` ```
    - [x] replace ```message.reply``` on ``` stock_quotes```
    - [x] replace ```message.reply``` on ``` stock_bid```
    - [x] replace ```message.reply``` on ``` stock_bid_show```
        - [x] Find way to put the mapped returns in a single embed
        ##### Roadblock
        - [x] Need to find a solution for ```forEach()``` over the ```res.data``` and push both the original bid **AND** the closing/current price of the ticker. 
- [ ] See options for blocking channel advertisments
- [x] Refuse commands that don't exist
- [ ] Add support for Crypto quotes

