import ExpenseForm from '../components/ExpenseForm'
import ExpenseItem from '../components/ExpenseItem'
import { useExpenseStore } from '../store/expensesStore'
import { formatMoney } from '../utils'

export default function ExpensesPage() {
    const {expenses} = useExpenseStore()
    const total = expenses.reduce((sum, e) => sum + e.amount, 0)

    return (
        <>
            <header className="hero">
                <p>Всего потрачено</p>
                <strong>{formatMoney(total)}</strong>
            </header>

            <ExpenseForm />

            {expenses.length === 0 ? (
                <p className="empty">Пока пусто. Добавьте первый расход.</p>
            ) : (
                <ul className="list">
                    {expenses.map((e) => (
                        <ExpenseItem expense={e} key={e.id} />
                    ))}
                </ul>
            )}
        </>
    )
}
