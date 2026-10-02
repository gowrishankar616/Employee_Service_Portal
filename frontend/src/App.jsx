import { useEffect, useState } from 'react';
import { employeeApi } from './api/EmployeeApi';
import EmployeeTable from './components/EmployeeTable';
import EmployeeForm from './components/EmployeeForm';

export default function App() {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadEmployees = () => {
    setLoading(true);
    employeeApi
      .getAll()
      .then((data) => {
        setEmployees(data);
        setError(null);
      })
      .catch(() =>
        setError(
          'Could not reach the backend. Confirm Spring Boot is running on port 9090 and CORS is enabled.'
        )
      )
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const handleSave = (formData) => {
    const request = editingEmployee
      ? employeeApi.update(editingEmployee.id, formData)
      : employeeApi.create(formData);

    request
      .then(() => {
        setEditingEmployee(null);
        loadEmployees();
      })
      .catch(() => setError('Save failed. Check the console for details.'));
  };

  const handleDelete = (id) => {
    if (!window.confirm('Remove this entry from the roster?')) return;
    employeeApi
      .remove(id)
      .then(() => loadEmployees())
      .catch(() => setError('Delete failed. Check the console for details.'));
  };

  return (
    <div className="page">
      <header className="page__header">
        <span className="page__eyebrow">Personnel Roster</span>
        <h1>Employee Service Portal</h1>
        <p className="page__sub">
          {employees.length} {employees.length === 1 ? 'record' : 'records'} on file
        </p>
      </header>

      {error && <div className="banner banner--error">{error}</div>}

      <section className="panel">
        <EmployeeForm
          editingEmployee={editingEmployee}
          onSave={handleSave}
          onCancel={() => setEditingEmployee(null)}
        />
      </section>

      <section className="panel panel--flush">
        {loading ? (
          <div className="empty-state">Loading roster…</div>
        ) : (
          <EmployeeTable
            employees={employees}
            onEdit={setEditingEmployee}
            onDelete={handleDelete}
          />
        )}
      </section>
    </div>
  );
}