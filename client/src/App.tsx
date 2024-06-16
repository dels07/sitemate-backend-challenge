import { useState } from 'react'

type IssueType = {
  id?: number;
  title: string;
  description: string;
}

function App() {
  const [issues, setIssues] = useState([]);
  const [issueDetail, setIssueDetail] = useState(null);
  const [openForm, setOpenForm] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [payloadData, setPayloadData] = useState(null);
  const [deleteId, setDeleteId] = useState(0);
  const serverUrl = 'http://localhost:9000/api/v1';

  const getIssues = async () => {
    const res = await fetch(`${serverUrl}/issues`);
    const { data } = await res.json();

    setIssues(data);
  }

  const getIssue = async (id: number) => {
    const res = await fetch(`${serverUrl}/issues/${id}`);
    const { data } = await res.json();

    setIssueDetail(data);
  }

  const createIssue = async (payload: IssueType) => {
    const res = await fetch(`${serverUrl}/issues`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    await res.json();
    await getIssues();
    setOpenForm(false);
  }

  const updateIssue = async (id: number, payload: IssueType) => {
    const res = await fetch(`${serverUrl}/issues/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    await res.json();
    await getIssues();
    setOpenForm(false);
  }

  const deleteIssue = async (id: number) => {
    await fetch(`${serverUrl}/issues/${id}`, { method: 'DELETE' });

    await getIssues();
    setOpenDelete(false);
  }

  return (

  );
}

export default App
