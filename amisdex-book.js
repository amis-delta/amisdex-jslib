// Lists all the books offered by Amisdex.
//

// the contract ABI has changed slightly over time ..

var BookERC20EthV0p9AbiArray =
[{"constant":true,"inputs":[{"name":"fromPrice","type":"uint16"}],"name":"walkBook","outputs":[{"name":"price","type":"uint16"},{"name":"depthBase","type":"uint256"},{"name":"orderCount","type":"uint256"},{"name":"blockNumber","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"orderId","type":"uint128"}],"name":"getOrder","outputs":[{"name":"client","type":"address"},{"name":"price","type":"uint16"},{"name":"sizeBase","type":"uint256"},{"name":"terms","type":"uint8"},{"name":"status","type":"uint8"},{"name":"reasonCode","type":"uint8"},{"name":"executedBase","type":"uint256"},{"name":"executedCntr","type":"uint256"},{"name":"feesBaseOrCntr","type":"uint256"},{"name":"feesRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amountCntr","type":"uint256"}],"name":"withdrawCntr","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getBookInfo","outputs":[{"name":"_bookType","type":"uint8"},{"name":"_baseToken","type":"address"},{"name":"_rwrdToken","type":"address"},{"name":"_baseMinInitialSize","type":"uint256"},{"name":"_cntrMinInitialSize","type":"uint256"},{"name":"_feePer10K","type":"uint256"},{"name":"_feeCollector","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"orderId","type":"uint128"}],"name":"getOrderState","outputs":[{"name":"status","type":"uint8"},{"name":"reasonCode","type":"uint8"},{"name":"executedBase","type":"uint256"},{"name":"executedCntr","type":"uint256"},{"name":"feesBaseOrCntr","type":"uint256"},{"name":"feesRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amountBase","type":"uint256"}],"name":"transferBase","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amountRwrd","type":"uint256"}],"name":"transferRwrd","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"depositCntr","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[],"name":"transferFromBase","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"client","type":"address"}],"name":"getClientBalances","outputs":[{"name":"bookBalanceBase","type":"uint256"},{"name":"bookBalanceCntr","type":"uint256"},{"name":"bookBalanceRwrd","type":"uint256"},{"name":"approvedBalanceBase","type":"uint256"},{"name":"approvedBalanceRwrd","type":"uint256"},{"name":"ownBalanceBase","type":"uint256"},{"name":"ownBalanceRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newFeeCollector","type":"address"}],"name":"changeFeeCollector","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"transferFromRwrd","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"client","type":"address"},{"name":"maybeLastOrderIdReturned","type":"uint128"},{"name":"minClosedOrderIdCutoff","type":"uint128"}],"name":"walkClientOrders","outputs":[{"name":"orderId","type":"uint128"},{"name":"price","type":"uint16"},{"name":"sizeBase","type":"uint256"},{"name":"terms","type":"uint8"},{"name":"status","type":"uint8"},{"name":"reasonCode","type":"uint8"},{"name":"executedBase","type":"uint256"},{"name":"executedCntr","type":"uint256"},{"name":"feesBaseOrCntr","type":"uint256"},{"name":"feesRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint128"},{"name":"price","type":"uint16"},{"name":"sizeBase","type":"uint256"},{"name":"terms","type":"uint8"},{"name":"maxMatches","type":"uint256"}],"name":"createOrder","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint128"},{"name":"maxMatches","type":"uint256"}],"name":"continueOrder","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint128"}],"name":"cancelOrder","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_baseToken","type":"address"},{"name":"_rwrdToken","type":"address"}],"name":"init","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"client","type":"address"},{"indexed":false,"name":"clientPaymentEventType","type":"uint8"},{"indexed":false,"name":"balanceType","type":"uint8"},{"indexed":false,"name":"clientBalanceDelta","type":"int256"}],"name":"ClientPaymentEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"client","type":"address"},{"indexed":false,"name":"clientOrderEventType","type":"uint8"},{"indexed":false,"name":"orderId","type":"uint128"}],"name":"ClientOrderEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"eventTimestamp","type":"uint256"},{"indexed":true,"name":"orderId","type":"uint128"},{"indexed":false,"name":"marketOrderEventType","type":"uint8"},{"indexed":false,"name":"price","type":"uint16"},{"indexed":false,"name":"depthBase","type":"uint256"},{"indexed":false,"name":"tradeBase","type":"uint256"}],"name":"MarketOrderEvent","type":"event"}]
      ;

var BookERC20EthV0p99AbiArray =
[{"constant":true,"inputs":[{"name":"fromPrice","type":"uint16"}],"name":"walkBook","outputs":[{"name":"price","type":"uint16"},{"name":"depthBase","type":"uint256"},{"name":"orderCount","type":"uint256"},{"name":"blockNumber","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"orderId","type":"uint128"}],"name":"getOrder","outputs":[{"name":"client","type":"address"},{"name":"price","type":"uint16"},{"name":"sizeBase","type":"uint256"},{"name":"terms","type":"uint8"},{"name":"status","type":"uint8"},{"name":"reasonCode","type":"uint8"},{"name":"executedBase","type":"uint256"},{"name":"executedCntr","type":"uint256"},{"name":"feesBaseOrCntr","type":"uint256"},{"name":"feesRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amountCntr","type":"uint256"}],"name":"withdrawCntr","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getBookInfo","outputs":[{"name":"_bookType","type":"uint8"},{"name":"_baseToken","type":"address"},{"name":"_rwrdToken","type":"address"},{"name":"_baseMinInitialSize","type":"uint256"},{"name":"_cntrMinInitialSize","type":"uint256"},{"name":"_feeDivisor","type":"uint256"},{"name":"_feeCollector","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"orderId","type":"uint128"}],"name":"getOrderState","outputs":[{"name":"status","type":"uint8"},{"name":"reasonCode","type":"uint8"},{"name":"executedBase","type":"uint256"},{"name":"executedCntr","type":"uint256"},{"name":"feesBaseOrCntr","type":"uint256"},{"name":"feesRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amountBase","type":"uint256"}],"name":"transferBase","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amountRwrd","type":"uint256"}],"name":"transferRwrd","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"depositCntr","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[],"name":"transferFromBase","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"client","type":"address"}],"name":"getClientBalances","outputs":[{"name":"bookBalanceBase","type":"uint256"},{"name":"bookBalanceCntr","type":"uint256"},{"name":"bookBalanceRwrd","type":"uint256"},{"name":"approvedBalanceBase","type":"uint256"},{"name":"approvedBalanceRwrd","type":"uint256"},{"name":"ownBalanceBase","type":"uint256"},{"name":"ownBalanceRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newFeeCollector","type":"address"}],"name":"changeFeeCollector","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"transferFromRwrd","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"client","type":"address"},{"name":"maybeLastOrderIdReturned","type":"uint128"},{"name":"minClosedOrderIdCutoff","type":"uint128"}],"name":"walkClientOrders","outputs":[{"name":"orderId","type":"uint128"},{"name":"price","type":"uint16"},{"name":"sizeBase","type":"uint256"},{"name":"terms","type":"uint8"},{"name":"status","type":"uint8"},{"name":"reasonCode","type":"uint8"},{"name":"executedBase","type":"uint256"},{"name":"executedCntr","type":"uint256"},{"name":"feesBaseOrCntr","type":"uint256"},{"name":"feesRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint128"},{"name":"price","type":"uint16"},{"name":"sizeBase","type":"uint256"},{"name":"terms","type":"uint8"},{"name":"maxMatches","type":"uint256"}],"name":"createOrder","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint128"},{"name":"maxMatches","type":"uint256"}],"name":"continueOrder","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint128"}],"name":"cancelOrder","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_baseToken","type":"address"},{"name":"_rwrdToken","type":"address"}],"name":"init","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"client","type":"address"},{"indexed":false,"name":"clientPaymentEventType","type":"uint8"},{"indexed":false,"name":"balanceType","type":"uint8"},{"indexed":false,"name":"clientBalanceDelta","type":"int256"}],"name":"ClientPaymentEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"client","type":"address"},{"indexed":false,"name":"clientOrderEventType","type":"uint8"},{"indexed":false,"name":"orderId","type":"uint128"}],"name":"ClientOrderEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"eventTimestamp","type":"uint256"},{"indexed":true,"name":"orderId","type":"uint128"},{"indexed":false,"name":"marketOrderEventType","type":"uint8"},{"indexed":false,"name":"price","type":"uint16"},{"indexed":false,"name":"depthBase","type":"uint256"},{"indexed":false,"name":"tradeBase","type":"uint256"}],"name":"MarketOrderEvent","type":"event"}]
      ;

var BookERC20EthV1AbiArray =
[{"constant":true,"inputs":[{"name":"fromPrice","type":"uint16"}],"name":"walkBook","outputs":[{"name":"price","type":"uint16"},{"name":"depthBase","type":"uint256"},{"name":"orderCount","type":"uint256"},{"name":"blockNumber","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"orderId","type":"uint128"}],"name":"getOrder","outputs":[{"name":"client","type":"address"},{"name":"price","type":"uint16"},{"name":"sizeBase","type":"uint256"},{"name":"terms","type":"uint8"},{"name":"status","type":"uint8"},{"name":"reasonCode","type":"uint8"},{"name":"executedBase","type":"uint256"},{"name":"executedCntr","type":"uint256"},{"name":"feesBaseOrCntr","type":"uint256"},{"name":"feesRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amountCntr","type":"uint256"}],"name":"withdrawCntr","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getBookInfo","outputs":[{"name":"_bookType","type":"uint8"},{"name":"_baseToken","type":"address"},{"name":"_rwrdToken","type":"address"},{"name":"_baseMinInitialSize","type":"uint256"},{"name":"_cntrMinInitialSize","type":"uint256"},{"name":"_feeDivisor","type":"uint256"},{"name":"_feeCollector","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"orderId","type":"uint128"}],"name":"getOrderState","outputs":[{"name":"status","type":"uint8"},{"name":"reasonCode","type":"uint8"},{"name":"executedBase","type":"uint256"},{"name":"executedCntr","type":"uint256"},{"name":"feesBaseOrCntr","type":"uint256"},{"name":"feesRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amountBase","type":"uint256"}],"name":"transferBase","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amountRwrd","type":"uint256"}],"name":"transferRwrd","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"depositCntr","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[],"name":"transferFromBase","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"client","type":"address"}],"name":"getClientBalances","outputs":[{"name":"bookBalanceBase","type":"uint256"},{"name":"bookBalanceCntr","type":"uint256"},{"name":"bookBalanceRwrd","type":"uint256"},{"name":"approvedBalanceBase","type":"uint256"},{"name":"approvedBalanceRwrd","type":"uint256"},{"name":"ownBalanceBase","type":"uint256"},{"name":"ownBalanceRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newFeeCollector","type":"address"}],"name":"changeFeeCollector","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"transferFromRwrd","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"client","type":"address"},{"name":"maybeLastOrderIdReturned","type":"uint128"},{"name":"minClosedOrderIdCutoff","type":"uint128"}],"name":"walkClientOrders","outputs":[{"name":"orderId","type":"uint128"},{"name":"price","type":"uint16"},{"name":"sizeBase","type":"uint256"},{"name":"terms","type":"uint8"},{"name":"status","type":"uint8"},{"name":"reasonCode","type":"uint8"},{"name":"executedBase","type":"uint256"},{"name":"executedCntr","type":"uint256"},{"name":"feesBaseOrCntr","type":"uint256"},{"name":"feesRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint128"},{"name":"price","type":"uint16"},{"name":"sizeBase","type":"uint256"},{"name":"terms","type":"uint8"},{"name":"maxMatches","type":"uint256"}],"name":"createOrder","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint128"},{"name":"maxMatches","type":"uint256"}],"name":"continueOrder","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint128"}],"name":"cancelOrder","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_baseToken","type":"address"},{"name":"_rwrdToken","type":"address"}],"name":"init","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"client","type":"address"},{"indexed":false,"name":"clientPaymentEventType","type":"uint8"},{"indexed":false,"name":"balanceType","type":"uint8"},{"indexed":false,"name":"clientBalanceDelta","type":"int256"}],"name":"ClientPaymentEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"client","type":"address"},{"indexed":false,"name":"clientOrderEventType","type":"uint8"},{"indexed":false,"name":"orderId","type":"uint128"},{"indexed":false,"name":"maxMatches","type":"uint256"}],"name":"ClientOrderEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"eventTimestamp","type":"uint256"},{"indexed":true,"name":"orderId","type":"uint128"},{"indexed":false,"name":"marketOrderEventType","type":"uint8"},{"indexed":false,"name":"price","type":"uint16"},{"indexed":false,"name":"depthBase","type":"uint256"},{"indexed":false,"name":"tradeBase","type":"uint256"}],"name":"MarketOrderEvent","type":"event"}]
      ;

var BookERC20EthV1DecAbiArray =
[{"constant":true,"inputs":[{"name":"fromPrice","type":"uint16"}],"name":"walkBook","outputs":[{"name":"price","type":"uint16"},{"name":"depthBase","type":"uint256"},{"name":"orderCount","type":"uint256"},{"name":"blockNumber","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"orderId","type":"uint128"}],"name":"getOrder","outputs":[{"name":"client","type":"address"},{"name":"price","type":"uint16"},{"name":"sizeBase","type":"uint256"},{"name":"terms","type":"uint8"},{"name":"status","type":"uint8"},{"name":"reasonCode","type":"uint8"},{"name":"executedBase","type":"uint256"},{"name":"executedCntr","type":"uint256"},{"name":"feesBaseOrCntr","type":"uint256"},{"name":"feesRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amountCntr","type":"uint256"}],"name":"withdrawCntr","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getBookInfo","outputs":[{"name":"_bookType","type":"uint8"},{"name":"_baseToken","type":"address"},{"name":"_rwrdToken","type":"address"},{"name":"_baseMinInitialSize","type":"uint256"},{"name":"_cntrMinInitialSize","type":"uint256"},{"name":"_feeDivisor","type":"uint256"},{"name":"_feeCollector","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"orderId","type":"uint128"}],"name":"getOrderState","outputs":[{"name":"status","type":"uint8"},{"name":"reasonCode","type":"uint8"},{"name":"executedBase","type":"uint256"},{"name":"executedCntr","type":"uint256"},{"name":"feesBaseOrCntr","type":"uint256"},{"name":"feesRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amountBase","type":"uint256"}],"name":"transferBase","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_baseToken","type":"address"},{"name":"_rwrdToken","type":"address"},{"name":"_baseMinInitialSize","type":"uint256"},{"name":"_minPriceExponent","type":"int8"}],"name":"init","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amountRwrd","type":"uint256"}],"name":"transferRwrd","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"depositCntr","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[],"name":"transferFromBase","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"client","type":"address"}],"name":"getClientBalances","outputs":[{"name":"bookBalanceBase","type":"uint256"},{"name":"bookBalanceCntr","type":"uint256"},{"name":"bookBalanceRwrd","type":"uint256"},{"name":"approvedBalanceBase","type":"uint256"},{"name":"approvedBalanceRwrd","type":"uint256"},{"name":"ownBalanceBase","type":"uint256"},{"name":"ownBalanceRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newFeeCollector","type":"address"}],"name":"changeFeeCollector","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"transferFromRwrd","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"client","type":"address"},{"name":"maybeLastOrderIdReturned","type":"uint128"},{"name":"minClosedOrderIdCutoff","type":"uint128"}],"name":"walkClientOrders","outputs":[{"name":"orderId","type":"uint128"},{"name":"price","type":"uint16"},{"name":"sizeBase","type":"uint256"},{"name":"terms","type":"uint8"},{"name":"status","type":"uint8"},{"name":"reasonCode","type":"uint8"},{"name":"executedBase","type":"uint256"},{"name":"executedCntr","type":"uint256"},{"name":"feesBaseOrCntr","type":"uint256"},{"name":"feesRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint128"},{"name":"price","type":"uint16"},{"name":"sizeBase","type":"uint256"},{"name":"terms","type":"uint8"},{"name":"maxMatches","type":"uint256"}],"name":"createOrder","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint128"},{"name":"maxMatches","type":"uint256"}],"name":"continueOrder","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint128"}],"name":"cancelOrder","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"client","type":"address"},{"indexed":false,"name":"clientPaymentEventType","type":"uint8"},{"indexed":false,"name":"balanceType","type":"uint8"},{"indexed":false,"name":"clientBalanceDelta","type":"int256"}],"name":"ClientPaymentEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"client","type":"address"},{"indexed":false,"name":"clientOrderEventType","type":"uint8"},{"indexed":false,"name":"orderId","type":"uint128"},{"indexed":false,"name":"maxMatches","type":"uint256"}],"name":"ClientOrderEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"eventTimestamp","type":"uint256"},{"indexed":true,"name":"orderId","type":"uint128"},{"indexed":false,"name":"marketOrderEventType","type":"uint8"},{"indexed":false,"name":"price","type":"uint16"},{"indexed":false,"name":"depthBase","type":"uint256"},{"indexed":false,"name":"tradeBase","type":"uint256"}],"name":"MarketOrderEvent","type":"event"}]
      ;

var BookERC20EthV1p1AbiArray =
[{"constant":true,"inputs":[{"name":"fromPrice","type":"uint16"}],"name":"walkBook","outputs":[{"name":"price","type":"uint16"},{"name":"depthBase","type":"uint256"},{"name":"orderCount","type":"uint256"},{"name":"blockNumber","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"orderId","type":"uint128"}],"name":"getOrder","outputs":[{"name":"client","type":"address"},{"name":"price","type":"uint16"},{"name":"sizeBase","type":"uint256"},{"name":"terms","type":"uint8"},{"name":"status","type":"uint8"},{"name":"reasonCode","type":"uint8"},{"name":"executedBase","type":"uint256"},{"name":"executedCntr","type":"uint256"},{"name":"feesBaseOrCntr","type":"uint256"},{"name":"feesRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amountCntr","type":"uint256"}],"name":"withdrawCntr","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getBookInfo","outputs":[{"name":"_bookType","type":"uint8"},{"name":"_baseToken","type":"address"},{"name":"_rwrdToken","type":"address"},{"name":"_baseMinInitialSize","type":"uint256"},{"name":"_cntrMinInitialSize","type":"uint256"},{"name":"_minPriceExponent","type":"int8"},{"name":"_feeDivisor","type":"uint256"},{"name":"_feeCollector","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"orderId","type":"uint128"}],"name":"getOrderState","outputs":[{"name":"status","type":"uint8"},{"name":"reasonCode","type":"uint8"},{"name":"executedBase","type":"uint256"},{"name":"executedCntr","type":"uint256"},{"name":"feesBaseOrCntr","type":"uint256"},{"name":"feesRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amountBase","type":"uint256"}],"name":"transferBase","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_baseToken","type":"address"},{"name":"_rwrdToken","type":"address"},{"name":"_baseMinInitialSize","type":"uint256"},{"name":"_minPriceExponent","type":"int8"}],"name":"init","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amountRwrd","type":"uint256"}],"name":"transferRwrd","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"depositCntr","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[],"name":"transferFromBase","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"client","type":"address"}],"name":"getClientBalances","outputs":[{"name":"bookBalanceBase","type":"uint256"},{"name":"bookBalanceCntr","type":"uint256"},{"name":"bookBalanceRwrd","type":"uint256"},{"name":"approvedBalanceBase","type":"uint256"},{"name":"approvedBalanceRwrd","type":"uint256"},{"name":"ownBalanceBase","type":"uint256"},{"name":"ownBalanceRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newFeeCollector","type":"address"}],"name":"changeFeeCollector","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"transferFromRwrd","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"client","type":"address"},{"name":"maybeLastOrderIdReturned","type":"uint128"},{"name":"minClosedOrderIdCutoff","type":"uint128"}],"name":"walkClientOrders","outputs":[{"name":"orderId","type":"uint128"},{"name":"price","type":"uint16"},{"name":"sizeBase","type":"uint256"},{"name":"terms","type":"uint8"},{"name":"status","type":"uint8"},{"name":"reasonCode","type":"uint8"},{"name":"executedBase","type":"uint256"},{"name":"executedCntr","type":"uint256"},{"name":"feesBaseOrCntr","type":"uint256"},{"name":"feesRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint128"},{"name":"price","type":"uint16"},{"name":"sizeBase","type":"uint256"},{"name":"terms","type":"uint8"},{"name":"maxMatches","type":"uint256"}],"name":"createOrder","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint128"},{"name":"maxMatches","type":"uint256"}],"name":"continueOrder","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint128"}],"name":"cancelOrder","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"client","type":"address"},{"indexed":false,"name":"clientPaymentEventType","type":"uint8"},{"indexed":false,"name":"balanceType","type":"uint8"},{"indexed":false,"name":"clientBalanceDelta","type":"int256"}],"name":"ClientPaymentEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"client","type":"address"},{"indexed":false,"name":"clientOrderEventType","type":"uint8"},{"indexed":false,"name":"orderId","type":"uint128"},{"indexed":false,"name":"maxMatches","type":"uint256"}],"name":"ClientOrderEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"eventTimestamp","type":"uint256"},{"indexed":true,"name":"orderId","type":"uint128"},{"indexed":false,"name":"marketOrderEventType","type":"uint8"},{"indexed":false,"name":"price","type":"uint16"},{"indexed":false,"name":"depthBase","type":"uint256"},{"indexed":false,"name":"tradeBase","type":"uint256"}],"name":"MarketOrderEvent","type":"event"}]
      ;

var OnChainOrderBookV012bAbiArray =
[{"constant":true,"inputs":[{"name":"fromPrice","type":"uint16"}],"name":"walkBook","outputs":[{"name":"price","type":"uint16"},{"name":"depthBase","type":"uint256"},{"name":"orderCount","type":"uint256"},{"name":"blockNumber","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"orderId","type":"uint128"}],"name":"getOrder","outputs":[{"name":"client","type":"address"},{"name":"price","type":"uint16"},{"name":"sizeBase","type":"uint256"},{"name":"terms","type":"uint8"},{"name":"status","type":"uint8"},{"name":"reasonCode","type":"uint8"},{"name":"executedBase","type":"uint256"},{"name":"executedCntr","type":"uint256"},{"name":"feesBaseOrCntr","type":"uint256"},{"name":"feesRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amountCntr","type":"uint256"}],"name":"withdrawCntr","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getBookInfo","outputs":[{"name":"_bookType","type":"uint8"},{"name":"_baseToken","type":"address"},{"name":"_rwrdToken","type":"address"},{"name":"_baseMinInitialSize","type":"uint256"},{"name":"_cntrMinInitialSize","type":"uint256"},{"name":"_minPriceExponent","type":"int8"},{"name":"_feeDivisor","type":"uint256"},{"name":"_feeCollector","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"orderId","type":"uint128"}],"name":"getOrderState","outputs":[{"name":"status","type":"uint8"},{"name":"reasonCode","type":"uint8"},{"name":"executedBase","type":"uint256"},{"name":"executedCntr","type":"uint256"},{"name":"feesBaseOrCntr","type":"uint256"},{"name":"feesRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amountBase","type":"uint256"}],"name":"transferBase","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_baseToken","type":"address"},{"name":"_rwrdToken","type":"address"},{"name":"_baseMinInitialSize","type":"uint256"},{"name":"_minPriceExponent","type":"int8"}],"name":"init","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amountRwrd","type":"uint256"}],"name":"transferRwrd","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"depositCntr","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[],"name":"transferFromBase","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"client","type":"address"}],"name":"getClientBalances","outputs":[{"name":"bookBalanceBase","type":"uint256"},{"name":"bookBalanceCntr","type":"uint256"},{"name":"bookBalanceRwrd","type":"uint256"},{"name":"approvedBalanceBase","type":"uint256"},{"name":"approvedBalanceRwrd","type":"uint256"},{"name":"ownBalanceBase","type":"uint256"},{"name":"ownBalanceRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newFeeCollector","type":"address"}],"name":"changeFeeCollector","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"transferFromRwrd","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"client","type":"address"},{"name":"maybeLastOrderIdReturned","type":"uint128"},{"name":"minClosedOrderIdCutoff","type":"uint128"}],"name":"walkClientOrders","outputs":[{"name":"orderId","type":"uint128"},{"name":"price","type":"uint16"},{"name":"sizeBase","type":"uint256"},{"name":"terms","type":"uint8"},{"name":"status","type":"uint8"},{"name":"reasonCode","type":"uint8"},{"name":"executedBase","type":"uint256"},{"name":"executedCntr","type":"uint256"},{"name":"feesBaseOrCntr","type":"uint256"},{"name":"feesRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint128"},{"name":"price","type":"uint16"},{"name":"sizeBase","type":"uint256"},{"name":"terms","type":"uint8"},{"name":"maxMatches","type":"uint256"}],"name":"createOrder","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint128"},{"name":"maxMatches","type":"uint256"}],"name":"continueOrder","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint128"}],"name":"cancelOrder","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"client","type":"address"},{"indexed":false,"name":"clientPaymentEventType","type":"uint8"},{"indexed":false,"name":"balanceType","type":"uint8"},{"indexed":false,"name":"clientBalanceDelta","type":"int256"}],"name":"ClientPaymentEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"client","type":"address"},{"indexed":false,"name":"clientOrderEventType","type":"uint8"},{"indexed":false,"name":"orderId","type":"uint128"},{"indexed":false,"name":"maxMatches","type":"uint256"}],"name":"ClientOrderEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"eventTimestamp","type":"uint256"},{"indexed":true,"name":"orderId","type":"uint128"},{"indexed":false,"name":"marketOrderEventType","type":"uint8"},{"indexed":false,"name":"price","type":"uint16"},{"indexed":false,"name":"depthBase","type":"uint256"},{"indexed":false,"name":"tradeBase","type":"uint256"}],"name":"MarketOrderEvent","type":"event"}]
      ;
      
var niceERC20TokenAbiArray =
[{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"totalSupply","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]
      ;

exports.networkInfo = {
  "demo": {
    networkId: "demo",
    name: "Simulated Demo Network",
    liveness: "DEMO"
  },
  "3": {
    networkId: "3",
    name: "Ropsten Test Network",
    liveness: "TEST"
  },
  "4": {
    networkId: "4",
    name: "Rinkeby Test Network",
    liveness: "TEST"
  },
  "42": {
    networkId: "42",
    name: "Kovan Test Network",
    liveness: "TEST"
  },
  "1": {
    networkId: "1",
    name: "Main Network",
    liveness: "LIVE"
  }
};

// TODO - danger - the cntr and rwrd decimals settings aren't actually respected by UI yet

exports.bookInfo = {
  "DEMO-ETH" : {
    networkId: "demo",
    bookAddress: "n/a",
    bookAbiArray: [],
    symbol: "DEMO-ETH",
    priceRangeAdjustment: 0,
    base: {
      tradableType: "ERC20",
      symbol: "DEMO",
      decimals: 18,
      name: "Demo Token",
      address: "n/a",
      abiArray: [],
      minInitialSize: "0.01"
    },
    cntr: {
      tradableType: "Ether",
      symbol: "ETH",
      decimals: 18,
      name: "Demo Ether",
      minInitialSize: "0.001"
    },
    rwrd: {
      tradableType: "ERC20",
      symbol: "UBI",
      decimals: 18,
      name: "UbiTok Reward Token",
      address: "n/a",
      abiArray: [],
    }
  },
  "TESTR-ETH" : {
    networkId: "3",
    bookAddress: "0x297ad00cf67aa1dcfc2c952b15502fa9e1910cee",
    bookAbiArray: BookERC20EthV0p9AbiArray,
    symbol: "TESTR-ETH",
    priceRangeAdjustment: 0,
    base: {
      tradableType: "ERC20",
      symbol: "TESTR",
      decimals: 18,
      name: "Test Token (Ropsten)",
      address: "0x678c4cf3f4a26d607d0a0032d72fdc3b1e3f71f4",
      abiArray: niceERC20TokenAbiArray,
      minInitialSize: "0.01"
    },
    cntr: {
      tradableType: "Ether",
      symbol: "ETH",
      decimals: 18,
      name: "Test Ether (Ropsten)",
      minInitialSize: "0.001"
    },
    rwrd: {
      tradableType: "ERC20",
      symbol: "UBI",
      decimals: 18,
      name: "Test UbiTok.io Reward Token",
      address: "0x5cfad634865157a5a988d743e6fcb4514e655460",
      abiArray: niceERC20TokenAbiArray,
    }
  },
  "TESTI-ETH" : {
    networkId: "4",
    bookAddress: "0xa4f552dab0fcb48dd8e3db45f239172592f94cd0",
    bookAbiArray: BookERC20EthV0p9AbiArray,
    symbol: "TESTI-ETH",
    priceRangeAdjustment: 0,
    base: {
      tradableType: "ERC20",
      symbol: "TESTI",
      decimals: 18,
      name: "Test Token (Rinkeby)",
      address: "0xce3fba94168812793f7082794302a089510b8711",
      abiArray: niceERC20TokenAbiArray,
      minInitialSize: "0.1"
    },
    cntr: {
      tradableType: "Ether",
      symbol: "ETH",
      decimals: 18,
      name: "Test Ether (Rinkeby)",
      minInitialSize: "0.01"
    },
    rwrd: {
      tradableType: "ERC20",
      symbol: "UBI",
      decimals: 18,
      name: "Test Ubi Reward Token (Rinkeby)",
      address: "0x76316acf8c8628c6df4730492e62a36ca00995d1",
      abiArray: niceERC20TokenAbiArray,
    }
  },
  "AMISTEST-ETH": {
    networkId: "3",
    bookAddress: "0xb64d5d9242dd2d506d50f1505fc61b140b8be61e",
    bookAbiArray: OnChainOrderBookV012bAbiArray,
    symbol: "AMIS-ETH",
    priceRangeAdjustment: 0,
    base: {
      tradableType: "ERC20",
      symbol: "AMIS",
      decimals: 9,
      name: "AMIS (Ropsten TEST)",
      address: "  0x949bed886c739f1a3273629b3320db0c5024c719",
      abiArray: niceERC20TokenAbiArray,
      minInitialSize: "0.001"
    },
    cntr: {
      tradableType: "Ether",
      symbol: "ETH",
      decimals: 18,
      name: "Test Ether (Ropsten)",
      minInitialSize: "0.001"
    },
    rwrd: {
      tradableType: "ERC20",
      symbol: "CRSW",
      decimals: 18,
      name: "CRSW Token",
      address: "0x58743FD1b94184B9D451fbC06C8AD4Fe7b53A488",
      abiArray: niceERC20TokenAbiArray,
    }
  },
  "AMIS-ETH": {
    networkId: "1",
    bookAddress: "0x2cc69cAaaAa6114ddf48F4DdB2AdB9c5d5d3e048",
    bookAbiArray: OnChainOrderBookV012bAbiArray,
    symbol: "AMIS-ETH",
    bookStartBlock: 6268330,
    priceRangeAdjustment: 0,
    base: {
      tradableType: "ERC20",
      symbol: "AMIS",
      decimals: 9,
      name: "AMIS",
      address: "0x949bed886c739f1a3273629b3320db0c5024c719",
      abiArray: niceERC20TokenAbiArray,
      minInitialSize: "0.001"
    },
    cntr: {
      tradableType: "Ether",
      symbol: "ETH",
      decimals: 18,
      name: "Ether",
      minInitialSize: "0.001"
    },
    rwrd: {
      tradableType: "ERC20",
      symbol: "ORA",
      decimals: 9,
      name: "Orange",
      address: "0x4875ae0e3fdfb9779d92b4c7bc5ce852434442b3",
      abiArray: niceERC20TokenAbiArray,
    }
  },
  "TEST8-ETH" : {
    networkId: "4",
    bookAddress: "0xfb6703a88e876c07e2dc537fb7c8886ac1055fba",
    bookAbiArray: BookERC20EthV1DecAbiArray,
    symbol: "TEST8-ETH",
    priceRangeAdjustment: 0,
    base: {
      tradableType: "ERC20",
      symbol: "TEST8",
      decimals: 8,
      name: "Test 8dp Token (Rinkeby)",
      address: "0xb1569932d1ff362f2d6931c5775faaa9ee4c6d4f",
      abiArray: niceERC20TokenAbiArray,
      minInitialSize: "1.0"
    },
    cntr: {
      tradableType: "Ether",
      symbol: "ETH",
      decimals: 18,
      name: "Test Ether (Rinkeby)",
      minInitialSize: "0.01"
    },
    rwrd: {
      tradableType: "ERC20",
      symbol: "UBI",
      decimals: 18,
      name: "Test Ubi Reward Token (Rinkeby)",
      address: "0x76316acf8c8628c6df4730492e62a36ca00995d1",
      abiArray: niceERC20TokenAbiArray,
    }
  },
  "OMG-ETH" : {
    networkId: "1",
    bookAddress: "0xf8d15960aa6Aaf5972DC54cF002951553906C7bd",
    bookAbiArray: BookERC20EthV1AbiArray,
    symbol: "OMG-ETH",
    bookStartBlock: 4402394,
    olderVersions: ["OMG-ETH.v01"],
    priceRangeAdjustment: 0,
    base: {
      tradableType: "ERC20",
      symbol: "OMG",
      decimals: 18,
      name: "OmiseGO",
      address: "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07",
      abiArray: niceERC20TokenAbiArray,
      minInitialSize: "0.1"
    },
    cntr: {
      tradableType: "Ether",
      symbol: "ETH",
      decimals: 18,
      name: "Ether",
      minInitialSize: "0.01"
    },
    rwrd: {
      tradableType: "ERC20",
      symbol: "UBI",
      decimals: 18,
      name: "UbiTok.io Reward Token",
      address: "0xec2ca0ef7cbbb49d5305f2f85dda24a9c5eda305",
      abiArray: niceERC20TokenAbiArray,
    }
  },
  "OMG-ETH.v01" : {
    networkId: "1",
    bookAddress: "0x8216deae8744a0286c8c53d8f237b65f661644e3",
    bookAbiArray: BookERC20EthV0p99AbiArray,
    symbol: "OMG-ETH.v01",
    bookStartBlock: 4311371,
    newerVersion: "OMG-ETH",
    priceRangeAdjustment: 0,
    base: {
      tradableType: "ERC20",
      symbol: "OMG",
      decimals: 18,
      name: "OmiseGO",
      address: "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07",
      abiArray: niceERC20TokenAbiArray,
      minInitialSize: "0.1"
    },
    cntr: {
      tradableType: "Ether",
      symbol: "ETH",
      decimals: 18,
      name: "Ether",
      minInitialSize: "0.01"
    },
    rwrd: {
      tradableType: "ERC20",
      symbol: "UBI",
      decimals: 18,
      name: "UbiTok.io Reward Token",
      address: "0xec2ca0ef7cbbb49d5305f2f85dda24a9c5eda305",
      abiArray: niceERC20TokenAbiArray,
    }
  },
  "eBTC-ETH" : {
    networkId: "1",
    bookAddress: "0x2cc6a8f865a71e69c9bc9931c486b6d1cbd90e15",
    bookAbiArray: BookERC20EthV1DecAbiArray,
    symbol: "eBTC-ETH",
    bookStartBlock: 4509772,
    priceRangeAdjustment: 0,
    base: {
      tradableType: "ERC20",
      symbol: "eBTC",
      decimals: 8,
      name: "eBTC",
      address: "0xeB7C20027172E5d143fB030d50f91Cece2D1485D",
      abiArray: niceERC20TokenAbiArray,
      minInitialSize: "1.0",
      notes: "This is the new eBTC token following the token swap on 2017-10-30."
    },
    cntr: {
      tradableType: "Ether",
      symbol: "ETH",
      decimals: 18,
      name: "Ether",
      minInitialSize: "0.01"
    },
    rwrd: {
      tradableType: "ERC20",
      symbol: "UBI",
      decimals: 18,
      name: "UbiTok.io Reward Token",
      address: "0xec2ca0ef7cbbb49d5305f2f85dda24a9c5eda305",
      abiArray: niceERC20TokenAbiArray,
    }
  },
  "SALT-ETH" : {
    networkId: "1",
    bookAddress: "0x2d492254d5bef8db7555ce3defe0cbf9efedd5fb",
    bookAbiArray: BookERC20EthV1DecAbiArray,
    symbol: "SALT-ETH",
    bookStartBlock: 4509772,
    priceRangeAdjustment: 0,
    base: {
      tradableType: "ERC20",
      symbol: "SALT",
      decimals: 8,
      name: "SALT",
      address: "0x4156D3342D5c385a87D264F90653733592000581",
      abiArray: niceERC20TokenAbiArray,
      minInitialSize: "1.0"
    },
    cntr: {
      tradableType: "Ether",
      symbol: "ETH",
      decimals: 18,
      name: "Ether",
      minInitialSize: "0.01"
    },
    rwrd: {
      tradableType: "ERC20",
      symbol: "UBI",
      decimals: 18,
      name: "UbiTok.io Reward Token",
      address: "0xec2ca0ef7cbbb49d5305f2f85dda24a9c5eda305",
      abiArray: niceERC20TokenAbiArray,
    }
  },
  "STORJ-ETH" : {
    networkId: "1",
    bookAddress: "0x2fa277f06d5caee292e870986cdc8a06499a632c",
    bookAbiArray: BookERC20EthV1DecAbiArray,
    symbol: "STORJ-ETH",
    bookStartBlock: 4509772,
    priceRangeAdjustment: 0,
    base: {
      tradableType: "ERC20",
      symbol: "STORJ",
      decimals: 8,
      name: "Storj",
      address: "0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac",
      abiArray: niceERC20TokenAbiArray,
      minInitialSize: "1.0"
    },
    cntr: {
      tradableType: "Ether",
      symbol: "ETH",
      decimals: 18,
      name: "Ether",
      minInitialSize: "0.01"
    },
    rwrd: {
      tradableType: "ERC20",
      symbol: "UBI",
      decimals: 18,
      name: "UbiTok.io Reward Token",
      address: "0xec2ca0ef7cbbb49d5305f2f85dda24a9c5eda305",
      abiArray: niceERC20TokenAbiArray,
    }
  },
  "BOLD-ETH" : {
    networkId: "1",
    bookAddress: "0x182f2b554462230735699df74ec9606a3c4c0684",
    bookAbiArray: BookERC20EthV1DecAbiArray,
    symbol: "BOLD-ETH",
    bookStartBlock: 4537651,
    priceRangeAdjustment: 0,
    base: {
      tradableType: "ERC20",
      symbol: "BOLD",
      decimals: 8,
      name: "Bold",
      address: "0x7cdEC53Fe4770729dac314756c10E2F37b8d2B2f",
      abiArray: niceERC20TokenAbiArray,
      minInitialSize: "0.1"
    },
    cntr: {
      tradableType: "Ether",
      symbol: "ETH",
      decimals: 18,
      name: "Ether",
      minInitialSize: "0.01"
    },
    rwrd: {
      tradableType: "ERC20",
      symbol: "UBI",
      decimals: 18,
      name: "UbiTok.io Reward Token",
      address: "0xec2ca0ef7cbbb49d5305f2f85dda24a9c5eda305",
      abiArray: niceERC20TokenAbiArray,
    }
  },
  "ELTCOIN-ETH" : {
    networkId: "1",
    bookAddress: "0x376635273257102472b7d8822f656f304fda1c29",
    bookAbiArray: BookERC20EthV1p1AbiArray,
    symbol: "ELTCOIN-ETH",
    bookStartBlock: 4537651,
    priceRangeAdjustment: -3,
    base: {
      tradableType: "ERC20",
      symbol: "ELTCOIN",
      decimals: 8,
      name: "ELTCOIN",
      address: "0x44197A4c44D6A059297cAf6be4F7e172BD56Caaf",
      abiArray: niceERC20TokenAbiArray,
      minInitialSize: "100.0"
    },
    cntr: {
      tradableType: "Ether",
      symbol: "ETH",
      decimals: 18,
      name: "Ether",
      minInitialSize: "0.01"
    },
    rwrd: {
      tradableType: "ERC20",
      symbol: "UBI",
      decimals: 18,
      name: "UbiTok.io Reward Token",
      address: "0xec2ca0ef7cbbb49d5305f2f85dda24a9c5eda305",
      abiArray: niceERC20TokenAbiArray,
    }
  },
  "WOCO-ETH" : {
    networkId: "1",
    bookAddress: "0x05bfc9ef2836f0f883da06bace39ae8e2fbf998b",
    bookAbiArray: BookERC20EthV1p1AbiArray,
    symbol: "WOCO-ETH",
    bookStartBlock: 4553895,
    priceRangeAdjustment: -2,
    base: {
      tradableType: "ERC20",
      symbol: "WOCO",
      decimals: 18,
      name: "Women Coin",
      address: "0x86230462ce9048B24C8aAAABD74Ac02088a956Ea",
      abiArray: niceERC20TokenAbiArray,
      minInitialSize: "1.0"
    },
    cntr: {
      tradableType: "Ether",
      symbol: "ETH",
      decimals: 18,
      name: "Ether",
      minInitialSize: "0.01"
    },
    rwrd: {
      tradableType: "ERC20",
      symbol: "UBI",
      decimals: 18,
      name: "UbiTok.io Reward Token",
      address: "0xec2ca0ef7cbbb49d5305f2f85dda24a9c5eda305",
      abiArray: niceERC20TokenAbiArray,
    }
  },
  "GEN-ETH" : {
    networkId: "1",
    bookAddress: "0x5d8613dec639810a4aa6ca5beaba33aea0ab806f",
    bookAbiArray: BookERC20EthV1p1AbiArray,
    symbol: "GEN-ETH",
    bookStartBlock: 4559886,
    priceRangeAdjustment: -3,
    base: {
      tradableType: "ERC20",
      symbol: "GEN",
      decimals: 18,
      name: "Genesis",
      address: "0x9dfe4643c04078a46803edcc30a3291b76d4c20c",
      abiArray: niceERC20TokenAbiArray,
      minInitialSize: "10.0"
    },
    cntr: {
      tradableType: "Ether",
      symbol: "ETH",
      decimals: 18,
      name: "Ether",
      minInitialSize: "0.01"
    },
    rwrd: {
      tradableType: "ERC20",
      symbol: "UBI",
      decimals: 18,
      name: "UbiTok.io Reward Token",
      address: "0xec2ca0ef7cbbb49d5305f2f85dda24a9c5eda305",
      abiArray: niceERC20TokenAbiArray,
    }
  },
  "ETHFM-ETH" : {
    networkId: "1",
    bookAddress: "0x557d4876870952d5779645818d3529551fdd24be",
    bookAbiArray: BookERC20EthV1p1AbiArray,
    symbol: "ETHFM-ETH",
    bookStartBlock: 4584605,
    priceRangeAdjustment: -3,
    base: {
      tradableType: "ERC20",
      symbol: "ETHFM",
      decimals: 18,
      name: "Ethereum Fundme",
      address: "0x84ce2FcED3fFEd8C3A3e305d6cCf6f542a7cA006",
      abiArray: niceERC20TokenAbiArray,
      minInitialSize: "10.0"
    },
    cntr: {
      tradableType: "Ether",
      symbol: "ETH",
      decimals: 18,
      name: "Ether",
      minInitialSize: "0.01"
    },
    rwrd: {
      tradableType: "ERC20",
      symbol: "UBI",
      decimals: 18,
      name: "UbiTok.io Reward Token",
      address: "0xec2ca0ef7cbbb49d5305f2f85dda24a9c5eda305",
      abiArray: niceERC20TokenAbiArray,
    },
    "TDM-ETH" : {
      networkId: "1",
      bookAddress: "INVALID",
      bookAbiArray: BookERC20EthV1p1AbiArray,
      symbol: "ETHFM-ETH",
      bookStartBlock: 4584605,
      priceRangeAdjustment: -3,
      base: {
        tradableType: "ERC20",
        symbol: "TDM",
        decimals: 8,
        name: "Token of Digital Money",
        address: "0x7b6e57D2139dD5F38012cd641CEBB8AFf0d8953a",
        abiArray: niceERC20TokenAbiArray,
        minInitialSize: "10.0"
      },
      cntr: {
        tradableType: "Ether",
        symbol: "ETH",
        decimals: 18,
        name: "Ether",
        minInitialSize: "0.01"
      },
      rwrd: {
        tradableType: "ERC20",
        symbol: "UBI",
        decimals: 18,
        name: "UbiTok.io Reward Token",
        address: "0xec2ca0ef7cbbb49d5305f2f85dda24a9c5eda305",
        abiArray: niceERC20TokenAbiArray,
      }
    }
  },
  "EXMR-ETH": {
    networkId: "1",
    bookAddress: "0x0783e1ab0f36512ca4b1c883a98cbea98566946d",
    bookAbiArray: BookERC20EthV1p1AbiArray,
    symbol: "EXMR-ETH",
    bookStartBlock: 4584605,
    priceRangeAdjustment: -3,
    base: {
      tradableType: "ERC20",
      symbol: "EXMR",
      decimals: 8,
      name: "EXMR",
      address: "0xc98e0639c6d2ec037a615341c369666b110e80e5",
      abiArray: niceERC20TokenAbiArray,
      minInitialSize: "10.0"
    },
    cntr: {
      tradableType: "Ether",
      symbol: "ETH",
      decimals: 18,
      name: "Ether",
      minInitialSize: "0.01"
    },
    rwrd: {
      tradableType: "ERC20",
      symbol: "UBI",
      decimals: 18,
      name: "UbiTok.io Reward Token",
      address: "0xec2ca0ef7cbbb49d5305f2f85dda24a9c5eda305",
      abiArray: niceERC20TokenAbiArray,
    }
  },
  "TDM-ETH": {
    networkId: "1",
    bookAddress: "0xa4a7caf1c04a9e3d4edd61f24e42c95b4527c819",
    bookAbiArray: BookERC20EthV1p1AbiArray,
    symbol: "TDM-ETH",
    bookStartBlock: 4603032,
    priceRangeAdjustment: -3,
    base: {
      tradableType: "ERC20",
      symbol: "TDM",
      decimals: 8,
      name: "Token of Digital Money",
      address: "0x7b6e57D2139dD5F38012cd641CEBB8AFf0d8953a",
      abiArray: niceERC20TokenAbiArray,
      minInitialSize: "1.0"
    },
    cntr: {
      tradableType: "Ether",
      symbol: "ETH",
      decimals: 18,
      name: "Ether",
      minInitialSize: "0.01"
    },
    rwrd: {
      tradableType: "ERC20",
      symbol: "UBI",
      decimals: 18,
      name: "UbiTok.io Reward Token",
      address: "0xec2ca0ef7cbbb49d5305f2f85dda24a9c5eda305",
      abiArray: niceERC20TokenAbiArray,
    }
  },
  "EBCH-ETH": {
    networkId: "1",
    bookAddress: "0xf05a3e4e864689eb20f0e27454b76da02589f638",
    bookAbiArray: BookERC20EthV1p1AbiArray,
    symbol: "EBCH-ETH",
    bookStartBlock: 4584605,
    priceRangeAdjustment: -3,
    base: {
      tradableType: "ERC20",
      symbol: "EBCH",
      decimals: 8,
      name: "eBitcoinCash",
      address: "0xafc39788c51f0c1ff7b55317f3e70299e521fff6",
      abiArray: niceERC20TokenAbiArray,
      minInitialSize: "1.0"
    },
    cntr: {
      tradableType: "Ether",
      symbol: "ETH",
      decimals: 18,
      name: "Ether",
      minInitialSize: "0.01"
    },
    rwrd: {
      tradableType: "ERC20",
      symbol: "UBI",
      decimals: 18,
      name: "UbiTok.io Reward Token",
      address: "0xec2ca0ef7cbbb49d5305f2f85dda24a9c5eda305",
      abiArray: niceERC20TokenAbiArray,
    }
  },
  "RBTC-ETH": {
    networkId: "1",
    bookAddress: "0x617690b272b48627169cb02a71f462c1dc78dd9b",
    bookAbiArray: BookERC20EthV1p1AbiArray,
    symbol: "RBTC-ETH",
    bookStartBlock: 4584605,
    priceRangeAdjustment: -3,
    base: {
      tradableType: "ERC20",
      symbol: "RBTC",
      decimals: 0,
      name: "Bitcoin Revolution",
      address: "0xf6f61f70ae1c4559459899300b17d2b2c77d39b5",
      abiArray: niceERC20TokenAbiArray,
      minInitialSize: "100"
    },
    cntr: {
      tradableType: "Ether",
      symbol: "ETH",
      decimals: 18,
      name: "Ether",
      minInitialSize: "0.01"
    },
    rwrd: {
      tradableType: "ERC20",
      symbol: "UBI",
      decimals: 18,
      name: "UbiTok.io Reward Token",
      address: "0xec2ca0ef7cbbb49d5305f2f85dda24a9c5eda305",
      abiArray: niceERC20TokenAbiArray,
    }
  },
  "YOLO-ETH": {
    networkId: "1",
    bookAddress: "0x300f516cda4475660ed27bf87bb49b95da8ba0e0",
    bookAbiArray: BookERC20EthV1p1AbiArray,
    symbol: "YOLO-ETH",
    bookStartBlock: 4624380,
    priceRangeAdjustment: -3,
    base: {
      tradableType: "ERC20",
      symbol: "YOLO",
      decimals: 0,
      name: "YOLOCOIN",
      address: "0x07C5b1E4391fCdFC6c12548448aeEe30A3793079",
      abiArray: niceERC20TokenAbiArray,
      minInitialSize: "1.0"
    },
    cntr: {
      tradableType: "Ether",
      symbol: "ETH",
      decimals: 18,
      name: "Ether",
      minInitialSize: "0.01"
    },
    rwrd: {
      tradableType: "ERC20",
      symbol: "UBI",
      decimals: 18,
      name: "UbiTok.io Reward Token",
      address: "0xec2ca0ef7cbbb49d5305f2f85dda24a9c5eda305",
      abiArray: niceERC20TokenAbiArray,
    }
  },
  "FUDD-ETH": {
    networkId: "1",
    bookAddress: "0xc36b7ce1BFA6981A56fF72a63D32bc4371921a69",
    bookAbiArray: BookERC20EthV1p1AbiArray,
    symbol: "FUDD-ETH",
    bookStartBlock: 4624380,
    priceRangeAdjustment: -3,
    base: {
      tradableType: "ERC20",
      symbol: "FUDD",
      decimals: 8,
      name: "DimonCoin",
      address: "0xde39e5e5a1b0eeb3afe717d6d011cae88d19451e",
      abiArray: niceERC20TokenAbiArray,
      minInitialSize: "1.0"
    },
    cntr: {
      tradableType: "Ether",
      symbol: "ETH",
      decimals: 18,
      name: "Ether",
      minInitialSize: "0.01"
    },
    rwrd: {
      tradableType: "ERC20",
      symbol: "UBI",
      decimals: 18,
      name: "UbiTok.io Reward Token",
      address: "0xec2ca0ef7cbbb49d5305f2f85dda24a9c5eda305",
      abiArray: niceERC20TokenAbiArray,
    }
  },
  "SSN-ETH": {
    networkId: "1",
    bookAddress: "0xb91c30cad0ef0aad42044aa3b6fbf1b2e3ddf903",
    bookAbiArray: BookERC20EthV1p1AbiArray,
    symbol: "SSN-ETH",
    bookStartBlock: 4663593,
    priceRangeAdjustment: -3,
    base: {
      tradableType: "ERC20",
      symbol: "SSN",
      decimals: 8,
      name: "SSENTE",
      address: "0x6b14C373C24556165002A00Cba4174FD96FE28f0",
      abiArray: niceERC20TokenAbiArray,
      minInitialSize: "1.0"
    },
    cntr: {
      tradableType: "Ether",
      symbol: "ETH",
      decimals: 18,
      name: "Ether",
      minInitialSize: "0.01"
    },
    rwrd: {
      tradableType: "ERC20",
      symbol: "UBI",
      decimals: 18,
      name: "UbiTok.io Reward Token",
      address: "0xec2ca0ef7cbbb49d5305f2f85dda24a9c5eda305",
      abiArray: niceERC20TokenAbiArray,
    }
  },
  "GOAL-ETH": {
    networkId: "1",
    bookAddress: "0xFd5cD7acA07A154BA10f5B7705954551de0e0e11",
    bookAbiArray: BookERC20EthV1p1AbiArray,
    symbol: "GOAL-ETH",
    bookStartBlock: 4663593,
    priceRangeAdjustment: -3,
    warning: "ICO on-going (token supply may change), not for sale to citizens of USA, Singapore, and China.",
    base: {
      tradableType: "ERC20",
      symbol: "GOAL",
      decimals: 18,
      name: "GOAL Bonanza",
      address: "0x7b69b78cc7fee48202c208609ae6d1f78ce42e13",
      abiArray: niceERC20TokenAbiArray,
      minInitialSize: "1.0"
    },
    cntr: {
      tradableType: "Ether",
      symbol: "ETH",
      decimals: 18,
      name: "Ether",
      minInitialSize: "0.01"
    },
    rwrd: {
      tradableType: "ERC20",
      symbol: "UBI",
      decimals: 18,
      name: "UbiTok.io Reward Token",
      address: "0xec2ca0ef7cbbb49d5305f2f85dda24a9c5eda305",
      abiArray: niceERC20TokenAbiArray,
    }
  }, 
  "PBIT-ETH": {
    networkId: "1",
    bookAddress: "0x296f01867605470510B8E373FB6d68bBD77Ec7F3",
    bookAbiArray: BookERC20EthV1p1AbiArray,
    symbol: "PBIT-ETH",
    bookStartBlock: 4663593,
    priceRangeAdjustment: -3,
    base: {
      tradableType: "ERC20",
      symbol: "PBIT",
      decimals: 8,
      name: "PeraBit",
      address: "0xb395bb199f4b31232274a2889b266a37ea64b1a3",
      abiArray: niceERC20TokenAbiArray,
      minInitialSize: "1.0"
    },
    cntr: {
      tradableType: "Ether",
      symbol: "ETH",
      decimals: 18,
      name: "Ether",
      minInitialSize: "0.01"
    },
    rwrd: {
      tradableType: "ERC20",
      symbol: "UBI",
      decimals: 18,
      name: "UbiTok.io Reward Token",
      address: "0xec2ca0ef7cbbb49d5305f2f85dda24a9c5eda305",
      abiArray: niceERC20TokenAbiArray,
    }
  },
  "AXYS-ETH": {
    networkId: "1",
    bookAddress: "0x19f5811582bbFFAf06964d19766aa810AB1B1AA7",
    bookAbiArray: BookERC20EthV1p1AbiArray,
    symbol: "AXYS-ETH",
    bookStartBlock: 4663593,
    priceRangeAdjustment: -3,
    base: {
      tradableType: "ERC20",
      symbol: "AXYS",
      decimals: 8,
      name: "Axys",
      address: "0xD4Deb869dF652A8756B6417aaf9Cb1f57b12A7f1",
      abiArray: niceERC20TokenAbiArray,
      minInitialSize: "1.0"
    },
    cntr: {
      tradableType: "Ether",
      symbol: "ETH",
      decimals: 18,
      name: "Ether",
      minInitialSize: "0.01"
    },
    rwrd: {
      tradableType: "ERC20",
      symbol: "UBI",
      decimals: 18,
      name: "UbiTok.io Reward Token",
      address: "0xec2ca0ef7cbbb49d5305f2f85dda24a9c5eda305",
      abiArray: niceERC20TokenAbiArray,
    }
  },
  "HYTV-ETH": {
    networkId: "1",
    bookAddress: "0x32bd7caA4e1fDB3e5d47Cf650E710cE26BD7Ee62",
    bookAbiArray: BookERC20EthV1p1AbiArray,
    symbol: "HYTV-ETH",
    bookStartBlock: 4663593,
    priceRangeAdjustment: -3,
    warning: "HyperTV token contract allows further minting of tokens",
    base: {
      tradableType: "ERC20",
      symbol: "HYTV",
      decimals: 3,
      name: "HyperTV",
      address: "0x7259fdDCA8d5F0184B3b12AA7e8401964B703a4F",
      abiArray: niceERC20TokenAbiArray,
      minInitialSize: "1.0"
    },
    cntr: {
      tradableType: "Ether",
      symbol: "ETH",
      decimals: 18,
      name: "Ether",
      minInitialSize: "0.01"
    },
    rwrd: {
      tradableType: "ERC20",
      symbol: "UBI",
      decimals: 18,
      name: "UbiTok.io Reward Token",
      address: "0xec2ca0ef7cbbb49d5305f2f85dda24a9c5eda305",
      abiArray: niceERC20TokenAbiArray,
    }
  },
  "BTCL-ETH": {
    networkId: "1",
    bookAddress: "0xE4d155EA6107fAd9d20bc8aE0dEDf7638F073f66",
    bookAbiArray: BookERC20EthV1p1AbiArray,
    symbol: "BTCL-ETH",
    bookStartBlock: 4663593,
    priceRangeAdjustment: -3,
    base: {
      tradableType: "ERC20",
      symbol: "BTCL",
      decimals: 8,
      name: "BTC LITE",
      address: "0x5acD19b9c91e596b1f062f18e3D02da7eD8D1e50",
      abiArray: niceERC20TokenAbiArray,
      minInitialSize: "1.0"
    },
    cntr: {
      tradableType: "Ether",
      symbol: "ETH",
      decimals: 18,
      name: "Ether",
      minInitialSize: "0.01"
    },
    rwrd: {
      tradableType: "ERC20",
      symbol: "UBI",
      decimals: 18,
      name: "UbiTok.io Reward Token",
      address: "0xec2ca0ef7cbbb49d5305f2f85dda24a9c5eda305",
      abiArray: niceERC20TokenAbiArray,
    }
  },
  "EAGLE-ETH": {
    networkId: "1",
    bookAddress: "0xdbafeb80598f6a7d382b2c456c3dade857f426de",
    bookAbiArray: BookERC20EthV1p1AbiArray,
    symbol: "EAGLE-ETH",
    bookStartBlock: 4663593,
    priceRangeAdjustment: -3,
    warning: "this token contract (EAGLE) may allow new tokens to be created",
    base: {
      tradableType: "ERC20",
      symbol: "EAGLE",
      decimals: 18,
      name: "EagleCoin",
      address: "0x994f0dffdbae0bbf09b652d6f11a493fd33f42b9",
      abiArray: niceERC20TokenAbiArray,
      minInitialSize: "1.0"
    },
    cntr: {
      tradableType: "Ether",
      symbol: "ETH",
      decimals: 18,
      name: "Ether",
      minInitialSize: "0.01"
    },
    rwrd: {
      tradableType: "ERC20",
      symbol: "UBI",
      decimals: 18,
      name: "UbiTok.io Reward Token",
      address: "0xec2ca0ef7cbbb49d5305f2f85dda24a9c5eda305",
      abiArray: niceERC20TokenAbiArray,
    }
  }  
};
