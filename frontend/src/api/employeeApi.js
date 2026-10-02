import axios from 'axios';

const BASE_URL = 'http://localhost:9090/api/v1';

const client = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
});


// POST   /postEmp
// GET    /getEmp
// GET    /getEmp/{id}
// PUT    /putEmp/{id}
// DELETE /delEmp/{id}
export const employeeApi = {
    getAll: () => client.get('/getEmp').then((res) => res.data),

    getById: (id) => client.get(`/getEmp/${id}`).then((res) => res.data),

    create: (employee) => client.post('/postEmp', employee).then((res) => res.data),

    update: (id, employee) =>
        client.put(`/putEmp/${id}`, employee).then((res) => res.data),

    remove: (id) => client.delete(`/delEmp/${id}`).then((res) => res.data),
};