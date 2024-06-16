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

  return (

  );
}

export default App
