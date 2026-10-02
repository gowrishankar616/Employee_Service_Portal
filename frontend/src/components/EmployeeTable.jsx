export default function EmployeeTable({ employees, onEdit, onDelete }) {
    if (employees.length === 0) {
        return (
            <div className="empty-state">
                <p>No entries on the roster yet.</p>
                <p className="empty-state__sub">Add the first employee using the form above.</p>
            </div>
        );
    }

    return (
        <table className="roster">
            <thead>
                <tr>
                    <th className="roster__id">ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Country</th>
                    <th className="roster__num">Salary</th>
                    <th className="roster__actions">Actions</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((emp) => (
                    <tr key={emp.id}>
                        <td className="roster__id">{String(emp.id).padStart(4, '0')}</td>
                        <td>
                            {emp.fname} {emp.lname}
                        </td>
                        <td>{emp.age}</td>
                        <td>{emp.city}</td>
                        <td>{emp.state}</td>
                        <td>{emp.country}</td>
                        <td className="roster__num">
                            {emp.salary != null ? emp.salary.toLocaleString() : '—'}
                        </td>
                        <td className="roster__actions">
                            <button className="btn btn--ghost" onClick={() => onEdit(emp)}>
                                Edit
                            </button>
                            <button className="btn btn--danger" onClick={() => onDelete(emp.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}