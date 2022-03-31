# Background
Like all decentralized ledgers, the XRP Ledger is a program that lives on a distributed set of servers. These servers run a program called rippled. Every server can follow the network with a local copy of the ledger and submit transactions to the network. A smaller subset of servers contribute to the consensus process that helps to maintain forward progress of the network. These servers are called validators. Any server that runs rippled can operate as a validator by enabling validation.

Validators agree on the set of the candidate transactions to be considered for the next ledger through the consensus process. Each validator evaluates transaction proposals from a specific set of trusted validators called a Unique Node List (UNL). Validators that appear on a UNL are "trusted" not to collude in an attempt to defraud the server evaluating the proposals. In each round of consensus, validators add transactions to their proposals if a threshold number of trusted validators also propose those transactions. The threshold is increased until a supermajority of validators propose the same set of transactions.

Finally, every rippled server independently computes a new ledger version with the new set of transactions. Validators broadcast the hash of the new ledger version to all rippled servers, and if a supermajority of a server’s trusted validators computes the same hash, then the ledger version is considered fully validated.
