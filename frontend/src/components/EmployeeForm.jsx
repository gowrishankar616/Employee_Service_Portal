import { useEffect, useState } from 'react';

const emptyForm = {
    fname: '',
    lname: '',
    age: '',
    city: '',
    state: '',
    country: '',
    salary: '',
};

export default function EmployeeForm({ editingEmployee, onSave, onCancel }) {
    const [form, setForm] = useState(emptyForm);

    useEffect(() => {
        if (editingEmployee) {
            setForm({
                fname: editingEmployee.fname ?? '',
                lname: editingEmployee.lname ?? '',
                age: editingEmployee.age ?? '',
                city: editingEmployee.city ?? '',
                state: editingEmployee.state ?? '',
                country: editingEmployee.country ?? '',
                salary: editingEmployee.salary ?? '',
            });
        } else {
            setForm(emptyForm);
        }
    }, [editingEmployee]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({
            ...form,
            age: form.age === '' ? null : Number(form.age),
            salary: form.salary === '' ? null : Number(form.salary),
        });
    };

    return (
        <form className="entry-form" onSubmit={handleSubmit}>
            <div className="entry-form__title">
                {editingEmployee ? `Editing #${String(editingEmployee.id).padStart(4, '0')}` : 'New entry'}
            </div>

            <div className="entry-form__grid">
                <label>
                    First name
                    <input name="fname" value={form.fname} onChange={handleChange} required />
                </label>
                <label>
                    Last name
                    <input name="lname" value={form.lname} onChange={handleChange} required />
                </label>
                <label>
                    Age
                    <input name="age" type="number" min="0" value={form.age} onChange={handleChange} />
                </label>
                <label>
                    City
                    <input name="city" value={form.city} onChange={handleChange} />
                </label>
                <label>
                    State
                    <input name="state" value={form.state} onChange={handleChange} />
                </label>
                <label>
                    Country
                    <input name="country" value={form.country} onChange={handleChange} />
                </label>
                <label>
                    Salary
                    <input name="salary" type="number" min="0" value={form.salary} onChange={handleChange} />
                </label>
            </div>

            <div className="entry-form__actions">
                <button type="submit" className="btn btn--primary">
                    {editingEmployee ? 'Save changes' : 'Add to roster'}
                </button>
                {editingEmployee && (
                    <button type="button" className="btn btn--ghost" onClick={onCancel}>
                        Cancel
                    </button>
                )}
            </div>
        </form>
    );
}