export default {
    System: {
        baseAPIURL: "https://echole.home.ai"
    },

    TransactionLedger: {
        transactionAccounts: [
            {value: 'amex_card', label: 'American Express Credit Card'},
            {value: 'ntb_stmt', label: 'NTB Bank Statement Account'},
            {value: 'com_bank_stmt', label: 'Commercial Bank Statement Account'},
            {value: 'flash_serv', label: 'Flash Servings Account'},
            {value: 'flash_card', label: 'Flash Prepaid Debit Card'},
            {value: 'peoples_stmt', label: 'People\'s Bank Statement Account'},
            {value: 'wallet', label: 'Wallet'}
        ],

        transactionCategories: [
            {value: 'food', label: 'Food'},
            {value: 'bill', label: 'Bill'},
            {value: 'transport', label: 'Transport'},
            {value: 'entertainment', label: 'Entertainment'},
            {value: 'education', label: 'Education'},
            {value: 'health', label: 'Health'},
            {value: 'shopping', label: 'Shopping'},
            {value: 'salary', label: 'Salary'},
            {value: 'saving', label: 'Saving'},
            {value: 'gift', label: 'Gift'},
            {value: 'insurance', label: 'Insurance'},
            {value: 'fund_transfer', label: 'Fund Transfer'},
            {value: 'other', label: 'Other'}
        ],
        transactionTypes: [
            {label: 'Income', value: 'INCOME'},
            {label: 'Expense', value: 'EXPENSE'},
        ]
    }
}