import { EntityRepository, Repository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getBalance(): Promise<Balance> {
    const transaction = await this.find();

    const{income, outcome} = transaction.reduce((acumulator, transaction) => {
      if(transaction.type == 'income'){
        acumulator.income += Number(transaction.value);
      }else if(transaction.type == 'outcome'){
        acumulator.outcome += Number(transaction.value);
      }
      return acumulator;
    },
    {
      income: 0,
      outcome:0,
      total: 0
    });

    const total = income - outcome;

    return {income, outcome, total}
  }
}

export default TransactionsRepository;
